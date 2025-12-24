// Playlist con tus canciones locales (TUS PERSONALIZACIONES SE MANTIENEN)
const playlist = [
    {
        id: 1,
        title: "Tu canción favorita",
        artist: "Hunter Metts",
        duration: "3:51",
        file: "assets/audio/Hunter Metts - Weathervane.mp3"
    },
    {
        id: 2,
        title: "La primera que te dediqué",
        artist: "No te va a gustar (Asi se llama la banda XD)",
        duration: "4:26",
        file: "assets/audio/No te va Gustar - A las Nueve.mp3"
    },
    {
        id: 3,
        title: "Hoy te dedico esta, VALUE",
        artist: "ADO (Mi cantante favorita)",
        duration: "3:44",
        file: "assets/audio/Ado - Value.mp3"
    }
];

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
                <h5>${song.title}</h5>
                <p>${song.artist}</p>
            </div>
            <div class="playlist-duration">${song.duration}</div>
        `;
        
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
    const fechaInicio = new Date('2025-10-21');
    const hoy = new Date();
    
    const diferencia = hoy - fechaInicio;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.getElementById('dias').textContent = dias.toLocaleString();
    document.getElementById('horas').textContent = horas.toLocaleString();
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
    
    // Actualizar contador cada hora
    setInterval(calcularTiempoJuntos, 3600000);
    
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