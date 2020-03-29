import Carousel from "../../class/_Carousel";

document.addEventListener('DOMContentLoaded', () => {
    new Carousel(document.getElementById('carousel'), {
        slidesToScroll: 2,
        visibleSlides: 2,
        loop: true,
        autoplay: true,
        breakpoints: [
            {
                minWidth: 576,
                visibleSlides: 2,
                slidesToScroll: 2
            },
            {
                minWidth: 768,
                visibleSlides: 3,
                slidesToScroll: 3
            },
            {
                minWidth: 992,
                visibleSlides: 4,
                slidesToScroll: 4
            }
        ]
    });
});