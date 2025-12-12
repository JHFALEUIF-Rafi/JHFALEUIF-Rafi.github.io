// Playlist con tus canciones de YouTube
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

// Elementos DOM
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

// Cargar la API de YouTube dinámicamente
function loadYouTubeAPI() {
    if (typeof YT !== 'undefined') {
        initYouTubePlayer();
        return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.onload = () => {
        console.log('YouTube API cargada');
    };
    document.head.appendChild(script);
    
    // Esperar a que esté lista
    window.onYouTubeIframeAPIReady = initYouTubePlayer;
}

// Inicializar YouTube Player API
function initYouTubePlayer() {
    // Esperar a que la API de YouTube esté lista
    if (typeof YT === 'undefined') {
        console.log("YouTube API no cargada, reintentando...");
        setTimeout(initYouTubePlayer, 1000);  // Aumentar el tiempo de reintento
        return;
    }
    
    try {
        player = new YT.Player('youtubePlayer', {
            height: '200',
            width: '100%',
            videoId: playlist[currentSongIndex].youtubeId,
            playerVars: {
                'autoplay': 0,
                'controls': 0,
                'fs': 0,
                'iv_load_policy': 3,  // Oculta anotaciones
                'rel': 0  // No mostrar videos relacionados al final
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    } catch (error) {
        console.error('Error inicializando YouTube Player:', error);
        // Mostrar el iframe como fallback básico
        elements.youtubePlayer.style.display = 'block';
        elements.youtubePlayer.src = `https://www.youtube.com/embed/${playlist[currentSongIndex].youtubeId}?autoplay=0&controls=0&fs=0`;
    }
}

// Cuando el reproductor está listo
function onPlayerReady(event) {
    console.log("Reproductor de YouTube listo");
    updateSongInfo();
    elements.youtubePlayer.style.display = 'block';
    
    // Configurar volumen inicial
    player.setVolume(elements.volumeSlider.value);
    
    // Configurar eventos
    setupEventListeners();
    
    // Inicializar playlist
    renderPlaylist();
}

// Estado del reproductor
function onPlayerStateChange(event) {
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
            
        case YT.PlayerState.BUFFERING:
            console.log("Buffering...");
            break;
            
        case YT.PlayerState.CUED:
            console.log("Video listo");
            break;
    }
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
        player.setVolume(volume);
        elements.volumePercent.textContent = `${volume}%`;
    });
    
    // Doble clic en canción para reproducir
    elements.playlistItems.addEventListener('dblclick', (e) => {
        const playlistItem = e.target.closest('.playlist-item');
        if (playlistItem) {
            const index = parseInt(playlistItem.dataset.index);
            playSong(index);
        }
    });
}

// Renderizar playlist
function renderPlaylist() {
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

// Actualizar información de la canción
function updateSongInfo() {
    const song = playlist[currentSongIndex];
    elements.currentSongTitle.textContent = song.title;
    elements.currentSongArtist.textContent = song.artist;
    
    // Actualizar playlist UI
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
    const song = playlist[currentSongIndex];
    
    if (player && player.loadVideoById) {
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

// Reproducir canción actual
function playCurrent() {
    if (player && player.playVideo) {
        player.playVideo();
    }
}

// Pausar canción actual
function pauseCurrent() {
    if (player && player.pauseVideo) {
        player.pauseVideo();
    }
}

// Detener canción actual
function stopCurrent() {
    if (player && player.stopVideo) {
        player.stopVideo();
        isPlaying = false;
        elements.playBtn.style.display = 'flex';
        elements.pauseBtn.style.display = 'none';
        elements.pauseBtn.classList.remove('playing');
        stopProgressUpdate();
        resetProgress();
    }
}

// Canción anterior
function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    playSong(currentSongIndex);
}

// Siguiente canción
function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    playSong(currentSongIndex);
}

// Actualizar barra de progreso
function startProgressUpdate() {
    stopProgressUpdate();
    updateProgress(); // Actualizar inmediatamente
    updateInterval = setInterval(updateProgress, 1000);
}

function stopProgressUpdate() {
    if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
    }
}

function updateProgress() {
    if (!player || !player.getCurrentTime || !player.getDuration) return;
    
    try {
        const current = player.getCurrentTime();
        const total = player.getDuration();
        
        if (total > 0 && isFinite(total)) {
            const percent = (current / total) * 100;
            elements.progress.style.width = `${percent}%`;
            
            // Actualizar tiempos
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

// Formatear tiempo (segundos a MM:SS)
function formatTime(seconds) {
    if (!seconds || seconds < 0) return "0:00";
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Contador de días juntos
function calcularTiempoJuntos() {
    // CAMBIA ESTA FECHA: Año-Mes-Día
    const fechaInicio = new Date('2025-10-21');
    const hoy = new Date();
    
    const diferencia = hoy - fechaInicio;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    document.getElementById('dias').textContent = dias.toLocaleString();
    document.getElementById('horas').textContent = horas.toLocaleString();
}

// Efectos especiales al hacer clic
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

// Detectar si es móvil
function esMovil() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Cargar y inicializar YouTube Player
    loadYouTubeAPI();
    
    // Configurar volumen inicial
    elements.volumePercent.textContent = `${elements.volumeSlider.value}%`;
    
    // Inicializar contador de días
    calcularTiempoJuntos();
    
    // Actualizar contador cada hora
    setInterval(calcularTiempoJuntos, 3600000);
    
    // Para móviles: prevenir zoom con doble toque
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
    
    console.log("Página cargada correctamente");
});

// Manejar errores
window.addEventListener('error', function(e) {
    console.error('Error en la página:', e.message);
});