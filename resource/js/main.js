const toggleTheme = document.getElementById('toggleTheme');
const navLogo = document.querySelector('.nav-logo');
const mainImage= document.querySelector('.main-image');
let isDarkTheme = false;

// Função para o toggle

function toggleDarkTheme() {
    const body = document.body;
    isDarkTheme = !isDarkTheme;
    body.classList.toggle('dark-theme');
    changeImage();
}
toggleTheme.addEventListener('change', toggleDarkTheme);

// Função para a troca de imagem

function changeImage() {
    const image = navLogo.querySelector('img');
    if (isDarkTheme) {
        image.src = "resource/img/logo_dark.svg";
        image.alt = "logo petra";
    } else {
        image.src = "resource/img/logo_light.svg";
        image.alt = "logo azul";
    }

    const images = mainImage.querySelector('img');
    if (isDarkTheme) {
        images.src = "resource/img/black_chair.svg";
        images.alt = "poltrona petra";
    } else {
        images.src = "resource/img/blue_chair.svg";
        images.alt = "poltrona azul";
    }
}

toggleTheme.addEventListener('change', toggleDarkTheme);