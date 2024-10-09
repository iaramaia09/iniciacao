const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 1;
const itemWidth = items[0].offsetWidth;
const totalItems = 10;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function moveLeft() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

function moveRight() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

updateCarousel();
