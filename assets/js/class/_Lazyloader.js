export default class Lazyloader {
    constructor()
    {
        this.lazyImages = [].slice.call(document.getElementsByClassName('lazyload'));
        if ("IntersectionObserver" in window) {
            this.observe();
        } else {
            this.fallBack();
        }
    }

    /**
     * Use the observer to load lazy images when viewport in range
     */
    observe()
    {
        let lazyImageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                let lazyImage = entry.target;
                if (entry.isIntersecting && lazyImage instanceof HTMLImageElement) {
                    this.load(lazyImage);
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        this.lazyImages.forEach((image) => {
            lazyImageObserver.observe(image);
        });
    }

    /**
     * If intersectionObserver not supported
     */
    fallBack()
    {
        this.lazyImages.forEach((lazyImage) => {
            this.load(lazyImage);
        });
    }

    /**
     * Load the lazy image
     * @param {HTMLImageElement} lazyImage
     */
    load(lazyImage)
    {
        lazyImage.addEventListener('load', () => {
            lazyImage.classList.remove('lazyload');
            if (lazyImage.classList.length === 0) {
                lazyImage.removeAttribute('class');
            }
        });
        lazyImage.src = lazyImage.dataset.src;
    }
}