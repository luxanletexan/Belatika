import CarouselTouchPlugin from "./_CarouselTouchPlugin";

export default class Carousel {

    /**
     * @callback moveCallback
     * @param {number} index
     */

    /**
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {number} [options.visibleSlides=1] Nombre d'éléments visibles dans un slide
     * @param {number} [options.slidesToScroll=1] Nombre d'éléments à faire défiler
     * @param {boolean} [options.loop=false] Boucle en fin de slider
     * @param {boolean} [options.infinite=false]
     * @param {boolean} [options.pagination=false]
     * @param {boolean} [options.navigation=true]
     * @param {boolean} [options.autoplay=false]
     * @param {boolean} [options.autoplayTimeout=5000]
     * @param {{minWidth: number, visibleSlides: number, slidesToScroll: number, navigation: boolean, autoplay: boolean}[]} options.breakpoints
     */
    constructor(element, options = {}) {
        this.element = element;
        this.options = Object.assign({
            visibleSlides: 1,
            slidesToScroll: 1,
            loop: false,
            infinite: false,
            pagination: false,
            navigation: true,
            autoplay: false,
            autoplayTimeout: 5000,
            breakpoints: []
        }, options);
        if (this.options.loop && this.options.infinite) {
            throw new Error("Un caroussel ne peut être à la fois en boucle et en infini");
        }
        let children = [].slice.call(element.children);
        this.currentItem = 0;
        this.moveCallbacks = [];
        this.offset = 0;
        this.autoplayId = null;
        this.breakpoint = null;

        //Modifications du DOM
        this.root = this.createDivWithClass('carousel');
        this.container = this.createDivWithClass('carousel__container');
        this.root.setAttribute('tabindex', '0');
        this.root.appendChild(this.container);
        this.element.appendChild(this.root);
        this.items = children.map((child) => {
            let item = this.createDivWithClass('carousel__container__item');
            item.appendChild(child);
            return item;
        });
        if (this.options.infinite) {
            this.offset = 1 + this.options.visibleSlides - this.options.slidesToScroll;
            if (this.offset > children.length) {
                console.error("Pas assez d'éléments dans le caroussel", element);
            }
            this.items = [
                ...this.items.slice(-this.offset).map(item => item.cloneNode(true)),
                ...this.items,
                ...this.items.slice(0, this.offset).map(item => item.cloneNode(true))
            ];
            this.gotoItem(this.offset, false);
        }
        this.items.forEach(item => this.container.appendChild(item));
        this.setStyle().createNavigation().createPagination();

        //Evenements
        this.onWindowResize();
        this.onKeydown();
        window.addEventListener('resize', this.onWindowResize.bind(this));
        if (this.options.infinite) {
            this.container.addEventListener('transitionend', this.resetInfinite.bind(this));
        }
        if (this.autoplay) {
            this.startAutoplay();
        }
        new CarouselTouchPlugin(this);
    }

    /**
     * Applique les bonnes dimensions aux éléments du caroussel
     */
    setStyle()
    {
        const ratio = this.items.length / this.visibleSlides;
        this.container.style.width = (ratio * 100) + '%';
        for (let item of this.items) {
            item.style.width = ((100 / this.visibleSlides) / ratio) + '%';
        }
        return this;
    }

    /**
     * Création des flèches de navigation
     * @return {Carousel}
     */
    createNavigation()
    {
        if (!this.navigation) {
            if (this.nextButton instanceof HTMLElement) {
                this.root.removeChild(this.nextButton);
                this.nextButton = undefined;
            }
            if (this.prevButton instanceof HTMLElement) {
                this.root.removeChild(this.prevButton);
                this.prevButton = undefined;
            }
            return this;
        } else if (this.nextButton !== undefined && this.prevButton !== undefined) {
            return this;
        }
        this.nextButton = this.createDivWithClass('carousel__next');
        this.prevButton = this.createDivWithClass('carousel__prev');
        this.nextButton.addEventListener('click', this.next.bind(this));
        this.prevButton.addEventListener('click', this.prev.bind(this));
        this.root.appendChild(this.nextButton);
        this.root.appendChild(this.prevButton);
        if (this.options.loop || this.options.infinite) {
            return this;
        }
        this.onMove((index) => {
            if (index === 0) {
                this.prevButton.classList.add('carousel__prev--hidden');
            } else {
                this.prevButton.classList.remove('carousel__prev--hidden');
            }
            if (this.items[this.currentItem + this.visibleSlides] === undefined) {
                this.nextButton.classList.add('carousel__next--hidden');
            } else {
                this.nextButton.classList.remove('carousel__next--hidden');
            }
        });
        return this;
    }

    /**
     * Création des icones de pagination
     * @return {Carousel}
     */
    createPagination()
    {
        if (!this.options.pagination) {
            return this;
        }
        let pagination = this.createDivWithClass('carousel__pagination');
        let buttons = [];
        let pagesCount =
            this.items.length +                                             //Nombre d'items
            (this.options.slidesToScroll - this.options.visibleSlides)      //- nombre d'items non paginables (fin de liste)
            - (this.offset ? this.offset + 1 : 0)
        ;
        for (let i = 0; i < pagesCount; i += this.options.slidesToScroll) {
            let button = this.createDivWithClass('carousel__pagination__button');
            button.addEventListener('click', () => this.gotoItem(i + this.offset));
            pagination.appendChild(button);
            buttons.push(button);
        }
        this.root.appendChild(pagination);
        this.onMove((index => {
            let count = this.items.length - 2 * this.offset;
            let activeButton = buttons[Math.floor(((index - this.offset) % count) / this.options.slidesToScroll)];
            if (activeButton) {
                buttons.forEach(button => button.classList.remove('carousel__pagination__button--active'));
                activeButton.classList.add('carousel__pagination__button--active');
            }
        }));
        return this;
    }

    /**
     * Démarre le défilement automatique
     */
    startAutoplay()
    {
        this.autoplayId = setInterval(() => {
            this.next(false);
        }, this.options.autoplayTimeout);
    }

    stopAutoplay()
    {
        if (this.autoplayId) {
            clearInterval(this.autoplayId);
            this.autoplayId = null;
        }
    }

    translate(percent)
    {
        this.container.style.transform = `translateX(${percent}%)`;
    }

    next(stopAutoplay = true)
    {
        if (stopAutoplay) {
            this.stopAutoplay();
        }
        this.gotoItem(this.currentItem + this.slidesToScroll);
    }

    prev()
    {
        this.gotoItem(this.currentItem - this.slidesToScroll);
    }

    /**
     * Déplace le caroussel vers l'élément ciblé
     * @param {number} index
     * @param {boolean} [animation=true]
     */
    gotoItem(index, animation = true) {
        if (index < 0) {
            if (!this.options.loop) {
                return;
            }
            index = this.items.length - this.visibleSlides;
        } else if (index >= this.items.length || (this.items[this.currentItem + this.visibleSlides] === undefined && index > this.currentItem)) {
            if (!this.options.loop && !this.options.infinite) {
                return;
            } else if (!this.options.infinite) {
                index = 0;
            }
        }
        let X = index * -100 / this.items.length;
        if (!animation) {
            this.disableTransition();
        }
        this.translate(X);
        this.container.offsetHeight; //Force repaint
        if (!animation) {
            this.enableTransition();
        }
        this.currentItem = index;
        for (let moveCallback of this.moveCallbacks) {
            moveCallback(index);
        }
    }

    /**
     * Déplace le container pour donner l'impression d'un slider infini
     */
    resetInfinite()
    {
        this.currentItem %= this.items.length - this.offset + 1;
        if (this.currentItem <= this.options.slidesToScroll + 1) {
            this.gotoItem(this.currentItem + this.items.length - 2 * this.offset, false);
        } else if (this.currentItem >= this.items.length - this.offset) {
            this.gotoItem(this.currentItem - (this.items.length - 2 * this.offset), false);
        }
    }

    onKeydown()
    {
        this.root.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Right' || e.keyCode === 39) {
                this.next();
            } else if (e.key === 'ArrowLeft' || e.key === 'Left' || e.keyCode === 37) {
                this.prev();
            }
        });
    }

    /**
     * @param {moveCallback} callback
     */
    onMove(callback)
    {
        this.moveCallbacks.push(callback);
    }

    onWindowResize()
    {
        let windowWidth = window.innerWidth;
        let currentBreakpoint = null;
        for (let breakpoint of this.options.breakpoints) {
            if (currentBreakpoint === null) {
                if (breakpoint.minWidth < windowWidth) {
                    currentBreakpoint = breakpoint;
                }
            } else if (breakpoint.minWidth < windowWidth && breakpoint.minWidth > currentBreakpoint.minWidth) {
                currentBreakpoint = breakpoint;
            }
        }
        if (
            currentBreakpoint !== this.breakpoint
            || (
                currentBreakpoint !== null
                && this.breakpoint !== null
                && currentBreakpoint.minWidth !== this.breakpoint.minWidth
            )
        ) {
            this.breakpoint = currentBreakpoint;
            this.setStyle().createNavigation();
            if (this.autoplay) {
                this.startAutoplay();
            } else {
                this.stopAutoplay();
            }
        }

        for (let moveCallback of this.moveCallbacks) {
            moveCallback(this.currentItem);
        }
    }

    /**
     * @param {string} className
     * @return {HTMLElement}
     */
    createDivWithClass(className)
    {
        let element = document.createElement('div');
        element.classList.add(className);
        return element;
    }

    disableTransition()
    {
        this.container.style.transition = 'none';
    }

    enableTransition()
    {
        this.container.style.transition = '';
    }

    /**
     * @return {number}
     */
    get slidesToScroll()
    {
        return this.breakpoint === null ? this.options.slidesToScroll : this.breakpoint.slidesToScroll;
    }

    /**
     * @return {number}
     */
    get visibleSlides()
    {
        return this.breakpoint === null ? this.options.visibleSlides : this.breakpoint.visibleSlides;
    }

    /**
     * @return {boolean}
     */
    get navigation()
    {
        return this.breakpoint === null ? this.options.navigation : this.breakpoint.navigation;
    }

    /**
     * @return {boolean}
     */
    get autoplay()
    {
        return this.breakpoint === null ? this.options.autoplay : this.breakpoint.autoplay;
    }

    /**
     * @return {number}
     */
    get containerWidth()
    {
        return this.container.offsetWidth;
    }

    /**
     * @return {number}
     */
    get carouselWidth()
    {
        return this.root.offsetWidth;
    }
}