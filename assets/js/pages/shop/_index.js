import Carousel from "../../class/_Carousel";

document.addEventListener('DOMContentLoaded', () => {
    new Carousel(document.getElementById('carousel'), {
        slidesToScroll: 1,
        visibleSlides: 1,
        navigation: false,
        loop: true,
        autoplay: true,
        breakpoints: [
            {
                minWidth: 576,
                visibleSlides: 2,
                slidesToScroll: 2,
                navigation: true,
                autoplay: false
            },
            {
                minWidth: 768,
                visibleSlides: 3,
                slidesToScroll: 3,
                navigation: true
            },
            {
                minWidth: 992,
                visibleSlides: 4,
                slidesToScroll: 4,
                navigation: true
            }
        ]
    });
});