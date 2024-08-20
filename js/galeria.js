// Función para inicializar y mostrar los contadores de "Me gusta"
const initAndShowLikes = (videoId) => {
    let likesElement = document.getElementById(`gusta_${videoId}`);
    console.log(likesElement); // Agregar esto para depurar
    if (likesElement) { // Solo proceder si el elemento existe
        let likes = localStorage.getItem(`like_${videoId}`);
        if (!likes) {
            likes = 0;
        } else {
            likes = parseInt(likes);
        }
        likesElement.innerHTML = "(" + likes + ")";
    } else {
        console.error(`Elemento gusta_${videoId} no encontrado`);
    }
};


// Función para inicializar y mostrar los contadores de "No me gusta"
const initAndShowDislikes = (videoId) => {
    let dislikesElement = document.getElementById(`noGusta_${videoId}`);
    
    if (!dislikesElement) {
        console.error(`Elemento noGusta_${videoId} no encontrado`);
        return;
    }
    
    let dislikes = localStorage.getItem(`dislike_${videoId}`);
    if (!dislikes) {
        dislikes = 0;
    } else {
        dislikes = parseInt(dislikes);
    }
    dislikesElement.innerHTML = "(" + dislikes + ")";
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
    const videoIds = ['video1', 'video2', 'video3', 'video4'];
    
    videoIds.forEach(videoId => {
        initAndShowLikes(videoId);
        initAndShowDislikes(videoId);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementById('menu-icon');
    var navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
