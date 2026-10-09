// Playlist con tus canciones locales (TUS PERSONALIZACIONES SE MANTIENEN)
// El nombre real de la canción se toma del archivo y la duración se lee al cargar
// lyric: línea de la letra (opcional) | translation: traducción de esa línea (opcional)
const playlist = [
    {
        id: 1,
        title: "Tu canción favorita",
        artist: "Hunter Metts",
        file: "assets/audio/Hunter Metts - Weathervane.mp3"
    },
    {
        id: 2,
        title: "La primera que te dediqué",
        artist: "No te va a gustar (Así se llama la banda XD)",
        file: "assets/audio/No te va Gustar - A las Nueve.mp3"
    },
    {
        id: 3,
        title: "Hoy te dedico esta, VALUE",
        artist: "ADO (Mi cantante favorita)",
        file: "assets/audio/Ado - Value.mp3"
    },
    {
        id: 4,
        title: "OH Lord - Lo que sonaba cuando te conocí",
        artist: "Por eso me encanta Peacemaker, había cierta similitud contigo",
        file: "assets/audio/Foxy Shazam - Oh Lord.mp3"
    },
    {
        id: 5,
        title: "Carolina",
        artist: "Cambia Josefina por Carolina y no solo rima, sino que representan lo mismo",
        file: "assets/audio/No te va Gustar - Josefina.mp3"
    },
    {
        id: 6,
        title: "Día del ramo",
        artist: "愛してる (Aishiteru) = Te amo",
        file: "assets/audio/Ado - Eien No Akuruhi.mp3"
    },
    {
        id: 7,
        title: "Quiero hablarte con amor, darte la razón",
        artist: "No todos los perros (yo) odian las tormentas (tú)",
        file: "assets/audio/No te va Gustar - En Llamas.mp3"
    },
    {
        id: 8,
        title: "Sobrepensar desde abril",
        artist: "No sabía si me necesitabas o si te hacía falta",
        file: "assets/audio/No te va Gustar - Mi Ausencia.mp3"
    },
    {
        id: 9,
        title: "Ese cuerpo que me lo ha dado todo, de algún modo",
        artist: "Rezo por ti",
        file: "assets/audio/No te va Gustar - Cartas Por Jugar.mp3"
    },
    {
        id: 10,
        title: "Me sigo preguntando si así fue",
        artist: "Me niego a creer que fuiste un error",
        file: "assets/audio/No te va Gustar - El Error.mp3"
    },
    {
        id: 11,
        title: "Tenía miedo a perderte",
        artist: "Siento que fue mi culpa no habértelo propuesto correctamente",
        file: "assets/audio/No te va Gustar - Ese Maldito Momento.mp3"
    },
    {
        id: 12,
        title: "Lamento haberme rendido",
        artist: "Esta canción me hacía muy feliz, porque siempre me recordaba a ti",
        file: "assets/audio/No te va Gustar - No Te Imaginás.mp3"
    },
    {
        id: 13,
        title: "Ojalá encuentres tu lugar",
        artist: "Tengo fe en que todo irá bien, mujercita",
        file: "assets/audio/No te va Gustar - Niño.mp3"
    },
    {
        id: 14,
        title: "Fuiste mi primer beso",
        artist: "Perdón si lo hice mal",
        file: "assets/audio/No te va Gustar - Con Las Ganas.mp3"
    },
    {
        id: 15,
        title: "Solo quería ver tu sonrisa",
        artist: "Quería mantenerte feliz, por eso hice tantas cosas por ti aunque no me lo pidieras, me nació",
        file: "assets/audio/No te va Gustar - Verte Reír (feat. Flor de Toloache).mp3"
    },
    {
        id: 16,
        title: "Chau?",
        artist: "Me vas a hacer mucha falta, Carito",
        file: "assets/audio/No te va Gustar - Chau (feat. Julieta Venegas) [En Vivo].mp3"
    }
];

// "assets/audio/Ado - Value.mp3" -> "Ado - Value"
function songFileName(song) {
    return song.file.split('/').pop().replace(/\.mp3$/i, '');
}

// Convierte texto LRC ("[01:23.45] línea") en [{ tiempo: 83.45, texto: "línea" }]
function parseLRC(texto) {
    const lineas = [];
    texto.split('\n').forEach(linea => {
        const match = linea.match(/^\s*\[(\d+):(\d+(?:\.\d+)?)\]\s*(.*)$/);
        if (match) {
            lineas.push({ tiempo: parseInt(match[1]) * 60 + parseFloat(match[2]), texto: match[3] });
        }
    });
    return lineas.sort((a, b) => a.tiempo - b.tiempo);
}

// Texto de la letra de una canción (desde letras.js)
function getLyricsText(song) {
    if (typeof letras === 'undefined') return '';
    return letras[songFileName(song)] || '';
}

// Letra sincronizada de una canción (si tiene tiempos)
function getSongLyrics(song) {
    const lineas = parseLRC(getLyricsText(song));
    return lineas.length ? lineas : null;
}

// Letra sin tiempos repartida en bloques de 4 líneas
// Las últimas 3 líneas forman siempre el bloque final (el cierre)
const LINEAS_POR_BLOQUE = 4;
const LINEAS_CIERRE = 3;
const RETRASO_LETRA = 7; // segundos antes de que aparezca el primer bloque

function getLyricBlocks(song) {
    if (getSongLyrics(song)) return null;
    const lineas = getLyricsText(song).split('\n').map(l => l.trim()).filter(l => l);
    if (!lineas.length) return null;

    const cuerpo = lineas.length > LINEAS_CIERRE ? lineas.slice(0, -LINEAS_CIERRE) : [];
    const cierre = lineas.slice(cuerpo.length);
    const bloques = [];
    for (let i = 0; i < cuerpo.length; i += LINEAS_POR_BLOQUE) {
        bloques.push(cuerpo.slice(i, i + LINEAS_POR_BLOQUE));
    }
    bloques.push(cierre);
    return bloques;
}

// Variables globales
let currentSongIndex = 0;
let player;
let isPlaying = false;
let updateInterval;

// Elementos DOM (SE MANTIENE IGUAL)
const elements = {
    currentSongTitle: document.getElementById('currentSongTitle'),
    currentSongArtist: document.getElementById('currentSongArtist'),
    playBtn: document.getElementById('playBtn'),
    pauseBtn: document.getElementById('pauseBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    stopBtn: document.getElementById('stopBtn'),
    audioPlayer: document.getElementById('audioPlayer'),
    playlistItems: document.getElementById('playlistItems'),
    progress: document.getElementById('progress'),
    currentTime: document.getElementById('currentTime'),
    duration: document.getElementById('duration'),
    volumeSlider: document.getElementById('volumeSlider'),
    volumePercent: document.getElementById('volumePercent')
};

// Inicializar reproductor de audio
function initAudioPlayer() {
    console.log("Inicializando reproductor de audio...");
    
    player = elements.audioPlayer;
    
    // Cargar la primera canción
    loadSong(currentSongIndex);
    
    // Configurar eventos del audio
    player.addEventListener('loadedmetadata', onAudioLoaded);
    player.addEventListener('timeupdate', updateProgress);
    player.addEventListener('ended', playNext);
    player.addEventListener('play', () => {
        isPlaying = true;
        elements.playBtn.style.display = 'none';
        elements.pauseBtn.style.display = 'flex';
        elements.playBtn.classList.remove('playing');
        elements.pauseBtn.classList.add('playing');
    });
    player.addEventListener('pause', () => {
        isPlaying = false;
        elements.playBtn.style.display = 'flex';
        elements.pauseBtn.style.display = 'none';
        elements.pauseBtn.classList.remove('playing');
    });
    
    // Configurar volumen inicial
    player.volume = elements.volumeSlider.value / 100;
    elements.volumePercent.textContent = `${elements.volumeSlider.value}%`;
    
    // Configurar event listeners
    setupEventListeners();
    
    // Inicializar playlist
    renderPlaylist();
    
    console.log("Reproductor de audio inicializado");
}

// Cargar canción específica
function loadSong(index) {
    const song = playlist[index];
    player.src = song.file;
    player.load();
    updateSongInfo();
}

// Cuando el audio está cargado
function onAudioLoaded() {
    elements.duration.textContent = formatTime(player.duration);
    elements.audioPlayer.style.display = 'block';
}

// Configurar event listeners
function setupEventListeners() {
    // Botones de control
    elements.playBtn.addEventListener('click', playCurrent);
    elements.pauseBtn.addEventListener('click', pauseCurrent);
    elements.prevBtn.addEventListener('click', playPrev);
    elements.nextBtn.addEventListener('click', playNext);
    elements.stopBtn.addEventListener('click', stopCurrent);
    
    // Barra de progreso
    document.querySelector('.progress-bar').addEventListener('click', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percent = clickX / width;
        const newTime = percent * player.duration;
        
        player.currentTime = newTime;
    });
    
    // Control de volumen
    elements.volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value;
        player.volume = volume / 100;
        elements.volumePercent.textContent = `${volume}%`;
    });
}

// Renderizar playlist - SE MANTIENE IGUAL
function renderPlaylist() {
    if (!elements.playlistItems) return;
    
    elements.playlistItems.innerHTML = '';
    
    playlist.forEach((song, index) => {
        const item = document.createElement('div');
        item.className = `playlist-item ${index === currentSongIndex ? 'playing' : ''}`;
        item.dataset.index = index;
        
        item.innerHTML = `
            <div class="playlist-number">${index + 1}</div>
            <div class="playlist-info">
                <span class="playlist-song"><i class="fas fa-music"></i> ${songFileName(song)}</span>
                <h5>${song.title}</h5>
                <p>${song.artist}</p>
                ${song.lyric ? `<p class="playlist-lyric">“${song.lyric}”</p>` : ''}
                ${song.translation ? `<p class="playlist-translation">${song.translation}</p>` : ''}
                ${getSongLyrics(song) || getLyricBlocks(song) ? `<p class="playlist-live-lyric"><i class="fas fa-microphone-alt"></i> <span>Dale play para ver la letra</span></p>` : ''}
            </div>
            <div class="playlist-duration">-:--</div>
        `;

        // Leer la duración real del archivo
        const meta = new Audio();
        meta.preload = 'metadata';
        meta.addEventListener('loadedmetadata', () => {
            item.querySelector('.playlist-duration').textContent = formatTime(meta.duration);
        });
        meta.src = song.file;

        item.addEventListener('click', () => {
            playSong(index);
        });

        elements.playlistItems.appendChild(item);
    });
}

// Actualizar información de la canción - SE MANTIENE IGUAL
function updateSongInfo() {
    const song = playlist[currentSongIndex];
    elements.currentSongTitle.textContent = song.title;
    elements.currentSongArtist.textContent = song.artist;
    
    updatePlaylistUI();
}

// Actualizar UI de playlist
function updatePlaylistUI() {
    document.querySelectorAll('.playlist-item').forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('playing');
        } else {
            item.classList.remove('playing');
        }
    });
}

// Reproducir canción específica
function playSong(index) {
    if (index < 0 || index >= playlist.length) return;
    
    currentSongIndex = index;
    loadSong(index);
    
    // Auto-play después de cargar
    player.addEventListener('canplay', () => {
        player.play();
    }, { once: true });
}

// Funciones de control
function playCurrent() {
    player.play();
}

function pauseCurrent() {
    player.pause();
}

function stopCurrent() {
    player.pause();
    player.currentTime = 0;
    isPlaying = false;
    elements.playBtn.style.display = 'flex';
    elements.pauseBtn.style.display = 'none';
    elements.pauseBtn.classList.remove('playing');
    resetProgress();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(currentSongIndex);
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong(currentSongIndex);
}

// Funciones de progreso
function updateProgress() {
    if (!player || !player.duration) return;
    
    const current = player.currentTime;
    const total = player.duration;
    
    if (total > 0 && isFinite(total)) {
        const percent = (current / total) * 100;
        elements.progress.style.width = `${percent}%`;
        
        elements.currentTime.textContent = formatTime(current);
        elements.duration.textContent = formatTime(total);
    }

    updateLiveLyric(current);
}

// Muestra la letra que corresponde al segundo actual:
// - con tiempos (LRC): una línea a la vez
// - sin tiempos: bloques de 4 líneas repartidos a lo largo de la canción
function updateLiveLyric(current) {
    const song = playlist[currentSongIndex];
    const item = elements.playlistItems.querySelector(`.playlist-item[data-index="${currentSongIndex}"] .playlist-live-lyric span`);
    if (!item) return;
    
    let texto = '♪';
    const lineas = getSongLyrics(song);
    const bloques = lineas ? null : getLyricBlocks(song);
    
    if (lineas) {
        let actual = null;
        for (const linea of lineas) {
            if (linea.tiempo <= current) actual = linea;
            else break;
        }
        if (actual) texto = actual.texto;
    } else if (bloques && player.duration && isFinite(player.duration) && current >= RETRASO_LETRA) {
        const progreso = (current - RETRASO_LETRA) / (player.duration - RETRASO_LETRA);
        const indice = Math.min(bloques.length - 1, Math.floor(progreso * bloques.length));
        texto = bloques[indice].join('\n');
    }
    
    if (item.textContent !== texto) {
        item.textContent = texto;
        item.parentElement.classList.remove('cambio');
        void item.parentElement.offsetWidth;
        item.parentElement.classList.add('cambio');
    }
}

function resetProgress() {
    elements.progress.style.width = '0%';
    elements.currentTime.textContent = '0:00';
    elements.duration.textContent = '0:00';
}

function formatTime(seconds) {
    if (!seconds || seconds < 0) return "0:00";
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// TU CÓDIGO DE CONTADOR (SE MANTIENE IGUAL)
function calcularTiempoJuntos() {
    // Contador fijo: 352 días (21/10/2025 - 08/10/2026)
    const fechaInicio = new Date(2025, 9, 21);
    const fechaFin = new Date(2026, 9, 8);

    const diferencia = fechaFin - fechaInicio;
    const dias = Math.round(diferencia / (1000 * 60 * 60 * 24));

    document.getElementById('dias').textContent = dias.toLocaleString();
}

// TU CÓDIGO DE EFECTOS ESPECIALES (SE MANTIENE IGUAL)
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'INPUT' || 
        e.target.tagName === 'AUDIO' ||
        e.target.closest('.control-btn') ||
        e.target.closest('.playlist-item')) {
        return;
    }
    
    const corazon = document.createElement('div');
    corazon.textContent = '💙';
    corazon.style.position = 'fixed';
    corazon.style.left = e.clientX + 'px';
    corazon.style.top = e.clientY + 'px';
    corazon.style.fontSize = '1.8rem';
    corazon.style.zIndex = '1000';
    corazon.style.pointerEvents = 'none';
    corazon.style.animation = 'flotar 2s forwards';
    corazon.style.filter = 'drop-shadow(0 0 5px rgba(30, 136, 229, 0.5))';
    
    document.body.appendChild(corazon);
    
    setTimeout(() => {
        corazon.remove();
    }, 2000);
});

// Inicializar - MODIFICADO
document.addEventListener('DOMContentLoaded', () => {
    console.log("Iniciando página...");
    
    // Inicializar reproductor de audio
    initAudioPlayer();
    
    // Configurar volumen inicial
    if (elements.volumeSlider && elements.volumePercent) {
        elements.volumePercent.textContent = `${elements.volumeSlider.value}%`;
    }
    
    // Inicializar contador de días (TU FECHA SE MANTIENE)
    calcularTiempoJuntos();
    
    // Para móviles
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    console.log("Página inicializada");
});

// Función para inicializar el slider del header
function initializeHeaderSlider() {
    const slides = document.querySelectorAll('.header-slide');
    const prevBtn = document.getElementById('headerPrevBtn');
    const nextBtn = document.getElementById('headerNextBtn');
    const indicadores = document.querySelectorAll('.header-indicador');
    const dibujoContainer = document.querySelector('.dibujo-container');
    
    let currentSlide = 0;
    let startX = 0;
    let endX = 0;
    
    // Función para mostrar slide
    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        
        // Ocultar todos los slides
        slides.forEach(slide => slide.classList.remove('active'));
        // Mostrar el slide actual
        slides[currentSlide].classList.add('active');
        
        // Actualizar indicadores
        indicadores.forEach((indicador, i) => {
            indicador.classList.toggle('activo', i === currentSlide);
        });
    }
    
    // Event listeners para botones
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
    
    // Event listeners para indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Funcionalidad de deslizamiento táctil
    dibujoContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });
    
    dibujoContainer.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const diffX = startX - endX;
        const threshold = 50; // Mínima distancia para considerar un swipe
        
        if (Math.abs(diffX) > threshold) {
            if (diffX > 0) {
                // Swipe izquierda - siguiente imagen
                showSlide(currentSlide + 1);
            } else {
                // Swipe derecha - imagen anterior
                showSlide(currentSlide - 1);
            }
        }
    }
    
    // Mostrar primer slide
    showSlide(0);
}

// Inicializar slider del header cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initializeHeaderSlider();
});

// Manejar errores
window.addEventListener('error', function(e) {
    console.error('Error en la página:', e.message);
});