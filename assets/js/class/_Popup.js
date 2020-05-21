import ajax from "../functions/_ajax";

export default class Popup {

    /**
     * @callback ajaxCallback
     * @param {Object} response
     */

    /**
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {{element: HTMLElement, url: string, callback: ajaxCallback, datas: Object}[]} options.buttons
     */
    constructor(element, options = {})
    {
        //Options
        this.options = Object.assign({
            buttons: []
        }, options);

        //Gestion du DOM
        this.popup = element;
        this.setOverlay();
        this.close = element.querySelector('.fas.fa-times-circle');

        //Gestion des evenements
        if (this.close) {
            this.close.addEventListener('click', this.onOverlayClick.bind(this));
        }
        this.popup.addEventListener('click', this.onPopupClick.bind(this));
        this.overlay.addEventListener('click', this.onOverlayClick.bind(this));
        this.options.buttons.forEach((button) => {
            this.setButtonEvent(button);
        });
    }

    setOverlay()
    {
        const overlay = document.createElement('div');
        this.setStyles(overlay, {
            backgroundColor: 'rgba(0,0,0,.7)',
            position: 'fixed',
            width: '100%',
            height: '100vh',
            top: '0',
            left: '0',
            zIndex: '999',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        })
        this.body = document.querySelector('body');
        overlay.appendChild(this.popup);
        this.body.appendChild(overlay);
        this.overlay = overlay;
    }

    /**
     * Applique des styles CSS à un élément HTML
     * @param {HTMLElement} element
     * @param {Object} styles
     */
    setStyles(element, styles)
    {
        Object.keys(styles).forEach((property) => {
            element.style[property] = styles[property];
        })
    }

    onOverlayClick()
    {
        this.body.removeChild(this.overlay);
    }

    onPopupClick(e)
    {
        e.stopPropagation();
    }

    /**
     * @param {Object} button
     * @param {HTMLElement} button.element
     * @param {string} button.url
     * @param {ajaxCallback} button.callback
     * @param {Object} button.datas
     */
    setButtonEvent(button)
    {
        if (!button.datas) {
            button.datas = {}
        }
        button.element.addEventListener('click', () => {
            ajax(button.url, (response) => {
                if (button.callback) {
                    button.callback(response);
                }
                this.onOverlayClick();
            }, {method: 'POST', datas: button.datas});
        });
    }
}