document.addEventListener('DOMContentLoaded', function() {
    initCarousel('#paddingtonCarousel');
    initCarousel('#draperyCarousel');

    function initCarousel(selector) {
        var carouselElement = document.querySelector(selector);
        if (carouselElement) {
            new bootstrap.Carousel(carouselElement, {
                interval: false, 
                ride: false, 
                wrap: true 
            });

            carouselElement.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft') {
                    bootstrap.Carousel.getInstance(carouselElement).prev();
                } else if (e.key === 'ArrowRight') {
                    bootstrap.Carousel.getInstance(carouselElement).next();
                }
            });
        }
    }
});