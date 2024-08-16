// Función para inicializar y mostrar los contadores de "Me gusta"
const initAndShowLikes = (videoId) => {
    let likes = localStorage.getItem(`like_${videoId}`);
    if (!likes) {
        likes = 0; // Solo inicializa en 0 si no hay valor previo
    } else {
        likes = parseInt(likes); // Asegúrate de convertir el valor a número
    }
    document.getElementById(`gusta_${videoId}`).innerHTML = "(" + likes + ")";
};

// Función para inicializar y mostrar los contadores de "No me gusta"
const initAndShowDislikes = (videoId) => {
    let dislikes = localStorage.getItem(`dislike_${videoId}`);
    if (!dislikes) {
        dislikes = 0; // Solo inicializa en 0 si no hay valor previo
    } else {
        dislikes = parseInt(dislikes); // Asegúrate de convertir el valor a número
    }
    document.getElementById(`noGusta_${videoId}`).innerHTML = "(" + dislikes + ")";
};


// Función para manejar el click en "Me gusta"
const Megusta = (videoId) => {
    let likes = localStorage.getItem(`like_${videoId}`);
    let newLikes = (likes ? parseInt(likes) : 0) + 1;
    localStorage.setItem(`like_${videoId}`, newLikes.toString());
    document.getElementById(`gusta_${videoId}`).innerHTML = "(" + newLikes + ")";
};

// Función para manejar el click en "No me gusta"
const noMegusta = (videoId) => {
    let dislikes = localStorage.getItem(`dislike_${videoId}`);
    let newDislikes = (dislikes ? parseInt(dislikes) : 0) + 1;
    localStorage.setItem(`dislike_${videoId}`, newDislikes.toString());
    document.getElementById(`noGusta_${videoId}`).innerHTML = "(" + newDislikes + ")";
};

// Función para mostrar los contadores iniciales cuando la página se carga
document.addEventListener('DOMContentLoaded', function() {
    const videoIds = ['video1', 'video2', 'video3', 'video4', 'video5', 'video6'];
    
    videoIds.forEach(videoId => {
        initAndShowLikes(videoId);
        initAndShowDislikes(videoId);
    });
});
