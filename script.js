// Playlist con tus canciones de YouTube (TUS PERSONALIZACIONES SE MANTIENEN)
const playlist = [
    {
        id: 1,
        title: "Tu canción favorita",
        artist: "Hunter Metts",
        duration: "3:51",
        youtubeId: "Np-84aF0gI0",
        url: "https://www.youtube.com/watch?v=Np-84aF0gI0"
    },
    {
        id: 2,
        title: "La primera que te dediqué",
        artist: "No te va a gustar (Asi se llama la banda XD)",
        duration: "4:26",
        youtubeId: "j7uxvgJcWqc",
        url: "https://www.youtube.com/watch?v=j7uxvgJcWqc"
    },
    {
        id: 3,
        title: "Hoy te dedico esta, VALUE",
        artist: "ADO (Mi cantante favorita)",
        duration: "3:44",
        youtubeId: "5iAQF_q6FSk",
        url: "https://www.youtube.com/watch?v=5iAQF_q6FSk"
    }
];

// Variables globales
let currentSongIndex = 0;
let player;
let isPlaying = false;
let updateInterval;
let playerFallback = false; // Nueva variable para detectar fallback

// Elementos DOM (SE MANTIENE IGUAL)
const elements = {
    currentSongTitle: document.getElementById('currentSongTitle'),
    currentSongArtist: document.getElementById('currentSongArtist'),
    playBtn: document.getElementById('playBtn'),
    pauseBtn: document.getElementById('pauseBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    stopBtn: document.getElementById('stopBtn'),
    youtubePlayer: document.getElementById('youtubePlayer'),
    playlistItems: document.getElementById('playlistItems'),
    progress: document.getElementById('progress'),
    currentTime: document.getElementById('currentTime'),
    duration: document.getElementById('duration'),
    volumeSlider: document.getElementById('volumeSlider'),
    volumePercent: document.getElementById('volumePercent')
};

// MODIFICADO: Sistema dual - Intenta API, si falla usa fallback
function loadYouTubeAPI() {
    console.log("Cargando reproductor...");
    
    // Intenta cargar la API primero
    if (typeof YT !== 'undefined' && YT.loaded) {
        initYouTubePlayer();
        return;
    }
    
    // Cargar script de YouTube API
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    
    // Configurar timeout para fallback
    const fallbackTimeout = setTimeout(() => {
        console.log("Timeout: Usando modo fallback");
        initFallbackPlayer();
    }, 5000); // 5 segundos de espera
    
    script.onload = () => {
        clearTimeout(fallbackTimeout);
        console.log('YouTube API cargada, inicializando...');
        
        // Configurar callback
        window.onYouTubeIframeAPIReady = () => {
            setTimeout(initYouTubePlayer, 100);
        };
    };
    
    script.onerror = () => {
        clearTimeout(fallbackTimeout);
        console.log('Error cargando YouTube API, usando fallback');
        initFallbackPlayer();
    };
    
    document.head.appendChild(script);
}

// MODIFICADO: Inicializar con modo fallback automático
function initYouTubePlayer() {
    try {
        // Verificar si la API está realmente disponible
        if (typeof YT === 'undefined' || typeof YT.Player !== 'function') {
            throw new Error('YouTube API no disponible');
        }
        
        console.log("Inicializando YouTube Player API...");
        
        player = new YT.Player('youtubePlayer', {
            height: '200',
            width: '100%',
            videoId: playlist[currentSongIndex].youtubeId,
            playerVars: {
                'autoplay': 0,
                'controls': 0,
                'fs': 0,
                'iv_load_policy': 3,
                'rel': 0,
                'modestbranding': 1,
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onError': onPlayerError
            }
        });
        
        console.log("YouTube Player creado exitosamente");
        
    } catch (error) {
        console.error('Error inicializando YouTube Player:', error);
        // Cambiar a modo fallback
        initFallbackPlayer();
    }
}

// NUEVO: Modo fallback para GitHub Pages
function initFallbackPlayer() {
    console.log("Iniciando modo fallback...");
    playerFallback = true;
    
    // Ocultar elementos que no funcionarán
    document.querySelector('.progress-container').style.display = 'none';
    
    // Crear iframe directo
    const song = playlist[currentSongIndex];
    const iframeHTML = `
        <iframe 
            width="100%" 
            height="200"
            src="https://www.youtube.com/embed/${song.youtubeId}?autoplay=0&controls=0&modestbranding=1&rel=0&fs=0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            style="border-radius: 10px;">
        </iframe>
    `;
    
    elements.youtubePlayer.innerHTML = iframeHTML;
    elements.youtubePlayer.style.display = 'block';
    
    // Actualizar UI
    updateSongInfo();
    renderPlaylist();
    setupFallbackListeners();
    
    // Mostrar mensaje informativo
    showFallbackMessage();
}

// NUEVO: Mostrar mensaje de modo fallback
function showFallbackMessage() {
    const message = document.createElement('div');
    message.className = 'fallback-message';
    message.innerHTML = `
        <p><i class="fas fa-info-circle"></i> Modo básico activado. Usa los controles de YouTube en el video.</p>
    `;
    message.style.cssText = `
        background: #e3f2fd;
        border: 2px solid #1e88e5;
        border-radius: 10px;
        padding: 10px;
        margin: 10px 0;
        text-align: center;
        color: #0d47a1;
        font-size: 0.9rem;
    `;
    
    const container = document.querySelector('.youtube-container');
    if (container) {
        container.insertBefore(message, container.firstChild);
    }
}

// NUEVO: Configurar listeners para modo fallback
function setupFallbackListeners() {
    // Para el modo fallback, los botones abren el video en YouTube
    elements.playBtn.addEventListener('click', () => {
        const song = playlist[currentSongIndex];
        window.open(song.url, '_blank');
    });
    
    elements.pauseBtn.style.display = 'none'; // Ocultar pausa en fallback
    
    elements.prevBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadFallbackSong();
    });
    
    elements.nextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadFallbackSong();
    });
    
    elements.stopBtn.addEventListener('click', () => {
        // Recargar iframe para "detener"
        loadFallbackSong();
        elements.playBtn.style.display = 'flex';
        elements.pauseBtn.style.display = 'none';
    });
    
    // Control de volumen deshabilitado en fallback
    elements.volumeSlider.disabled = true;
    elements.volumeSlider.title = "No disponible en modo básico";
    elements.volumePercent.textContent = "YouTube";
}

// NUEVO: Cargar canción en modo fallback
function loadFallbackSong() {
    const song = playlist[currentSongIndex];
    const iframe = elements.youtubePlayer.querySelector('iframe');
    
    if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${song.youtubeId}?autoplay=0&controls=0&modestbranding=1&rel=0`;
    }
    
    updateSongInfo();
    updatePlaylistUI();
}

// MODIFICADO: Cuando el reproductor está listo (solo para API)
function onPlayerReady(event) {
    console.log("Reproductor de YouTube listo (API Mode)");
    updateSongInfo();
    elements.youtubePlayer.style.display = 'block';
    
    // Configurar volumen inicial solo si no es fallback
    if (!playerFallback && player) {
        player.setVolume(elements.volumeSlider.value);
    }
    
    // Configurar eventos
    setupEventListeners();
    
    // Inicializar playlist
    renderPlaylist();
}

// NUEVO: Manejar errores del player
function onPlayerError(event) {
    console.error('Error en YouTube Player:', event.data);
    
    // Si hay error grave, cambiar a fallback
    if (event.data === 2 || event.data === 5 || event.data === 100) {
        console.log("Cambiando a modo fallback debido a error...");
        initFallbackPlayer();
    }
}

// Estado del reproductor (solo para API) - SE MANTIENE IGUAL
function onPlayerStateChange(event) {
    if (playerFallback) return; // No usar en modo fallback
    
    switch(event.data) {
        case YT.PlayerState.PLAYING:
            isPlaying = true;
            elements.playBtn.style.display = 'none';
            elements.pauseBtn.style.display = 'flex';
            elements.playBtn.classList.remove('playing');
            elements.pauseBtn.classList.add('playing');
            startProgressUpdate();
            break;
            
        case YT.PlayerState.PAUSED:
            isPlaying = false;
            elements.playBtn.style.display = 'flex';
            elements.pauseBtn.style.display = 'none';
            elements.pauseBtn.classList.remove('playing');
            stopProgressUpdate();
            break;
            
        case YT.PlayerState.ENDED:
            playNext();
            break;
    }
}

// Configurar event listeners (solo para API) - SE MANTIENE IGUAL
function setupEventListeners() {
    if (playerFallback) return;
    
    // Botones de control
    elements.playBtn.addEventListener('click', playCurrent);
    elements.pauseBtn.addEventListener('click', pauseCurrent);
    elements.prevBtn.addEventListener('click', playPrev);
    elements.nextBtn.addEventListener('click', playNext);
    elements.stopBtn.addEventListener('click', stopCurrent);
    
    // Barra de progreso
    document.querySelector('.progress-bar').addEventListener('click', (e) => {
        if (!player || !player.getDuration) return;
        
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percent = clickX / width;
        const newTime = percent * player.getDuration();
        
        player.seekTo(newTime, true);
    });
    
    // Control de volumen
    elements.volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value;
        if (player) player.setVolume(volume);
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

// Reproducir canción específica - MODIFICADO para ambos modos
function playSong(index) {
    if (index < 0 || index >= playlist.length) return;
    
    currentSongIndex = index;
    
    if (playerFallback) {
        loadFallbackSong();
    } else if (player && player.loadVideoById) {
        const song = playlist[currentSongIndex];
        player.loadVideoById({
            videoId: song.youtubeId,
            suggestedQuality: 'default'
        });
        updateSongInfo();
        
        // Actualizar botones
        elements.playBtn.style.display = 'none';
        elements.pauseBtn.style.display = 'flex';
        elements.playBtn.classList.remove('playing');
        elements.pauseBtn.classList.add('playing');
    }
}

// Funciones de control (solo para API) - SE MANTIENE IGUAL
function playCurrent() {
    if (!playerFallback && player && player.playVideo) {
        player.playVideo();
    }
}

function pauseCurrent() {
    if (!playerFallback && player && player.pauseVideo) {
        player.pauseVideo();
    }
}

function stopCurrent() {
    if (!playerFallback && player && player.stopVideo) {
        player.stopVideo();
        isPlaying = false;
        elements.playBtn.style.display = 'flex';
        elements.pauseBtn.style.display = 'none';
        elements.pauseBtn.classList.remove('playing');
        stopProgressUpdate();
        resetProgress();
    }
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(currentSongIndex);
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong(currentSongIndex);
}

// Funciones de progreso (solo para API) - SE MANTIENE IGUAL
function startProgressUpdate() {
    if (playerFallback) return;
    stopProgressUpdate();
    updateProgress();
    updateInterval = setInterval(updateProgress, 1000);
}

function stopProgressUpdate() {
    if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
    }
}

function updateProgress() {
    if (playerFallback || !player || !player.getCurrentTime || !player.getDuration) return;
    
    try {
        const current = player.getCurrentTime();
        const total = player.getDuration();
        
        if (total > 0 && isFinite(total)) {
            const percent = (current / total) * 100;
            elements.progress.style.width = `${percent}%`;
            
            elements.currentTime.textContent = formatTime(current);
            elements.duration.textContent = formatTime(total);
        }
    } catch (error) {
        console.log("Error actualizando progreso:", error);
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
        e.target.tagName === 'IFRAME' ||
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
    
    // Inicializar reproductor (ahora con sistema dual)
    loadYouTubeAPI();
    
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

// Manejar errores
window.addEventListener('error', function(e) {
    console.error('Error en la página:', e.message);
});