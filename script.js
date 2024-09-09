let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slideshow = document.querySelector('.slideshow');
    slideshow.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

setInterval(nextSlide, 4000); 

document.addEventListener('DOMContentLoaded', function() {
    const promoMessage = document.querySelector('.promo-message');
    promoMessage.style.opacity = 0;

    setTimeout(() => {
        promoMessage.style.opacity = 1;
        promoMessage.style.transition = 'opacity 2s ease-in-out';
    }, 1000);
});
