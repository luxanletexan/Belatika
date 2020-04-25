export default class CarouselTouchPlugin {
    /**
     * @param {Carousel} carousel
     */
    constructor(carousel) {
        carousel.container.addEventListener('dragstart', e => e.preventDefault());
        carousel.container.addEventListener('mousedown', this.startDrag.bind(this));
        carousel.container.addEventListener('touchstart', this.startDrag.bind(this));
        window.addEventListener('mousemove', this.drag.bind(this));
        window.addEventListener('touchmove', this.drag.bind(this), {passive: false});
        window.addEventListener('mouseup', this.endDrag.bind(this));
        window.addEventListener('touchend', this.endDrag.bind(this));
        window.addEventListener('touchcancel', this.endDrag.bind(this));
        this.carousel = carousel;
    }

    /**
     * Démarre le déplacement au toucher
     * @param {MouseEvent|TouchEvent} e
     */
    startDrag(e)
    {
        if (e.touches) {
            if (e.touches.length > 1) {
                return;
            } else {
                const {touches} = e; //Object destructuring car changement de type : e type Touch
                e = touches[0];
            }
        }
        this.carousel.stopAutoplay();
        this.origin = {x: e.screenX, y: e.screenY};
        this.width = this.carousel.containerWidth;
        this.carousel.disableTransition();
    }

    /**
     * Déplacement
     * @param {MouseEvent|TouchEvent} e
     */
    drag(e)
    {
        if (!this.origin) {
            return;
        }
        let point = e.touches ? e.touches[0] : e;
        let translate = {x: point.screenX - this.origin.x, y: point.screenY - this.origin.y};
        if (e.touches && Math.abs(translate.x) > Math.abs(translate.y)) {
            e.preventDefault();
            e.stopPropagation();
        }
        let baseTranslate = this.carousel.currentItem * -100 / this.carousel.items.length;
        this.lastTranslate = translate;
        this.carousel.translate(baseTranslate + 100 * translate.x / this.width);
    }

    /**
     * Fin de déplacement
     * @param {MouseEvent|TouchEvent} e
     */
    endDrag(e)
    {
        if (!this.origin || !this.lastTranslate) {
            return;
        }
        this.carousel.enableTransition();
        if (Math.abs(this.lastTranslate.x / this.carousel.carouselWidth) > 0.2) {
            if (this.lastTranslate.x < 0) {
                this.carousel.next();
                this.lastTranslate.x = 0;
            } else {
                this.carousel.prev();
                this.lastTranslate.x = 0;
            }
        } else {
            this.carousel.gotoItem(this.carousel.currentItem);
        }
        this.origin = null;
    }
}
