const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg'
];

let currentIndex = 0;

const imageElement = document.getElementById('slider-image');
const counterElement = document.getElementById('counter');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

function updateSlider() {
    imageElement.src = images[currentIndex];
    counterElement.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
}

nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateSlider();
});