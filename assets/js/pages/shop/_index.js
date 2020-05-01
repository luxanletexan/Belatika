import Carousel from "../../class/_Carousel";

document.addEventListener('DOMContentLoaded', () => {
    new Carousel(document.getElementById('carousel'), {
        slidesToScroll: 1,
        visibleSlides: 1,
        loop: true,
        autoplay: false,
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