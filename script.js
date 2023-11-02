document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function updateCarousel() {
        const slideWidth = slides[currentSlide].offsetWidth;
        carousel.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    }

    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    }

    // Adicione eventos de clique para rolar os slides
    document.querySelector('.next-button').addEventListener('click', nextSlide);
    document.querySelector('.prev-button').addEventListener('click', prevSlide);

    // Atualize o carrossel inicialmente
    updateCarousel();
});
