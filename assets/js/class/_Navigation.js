export default class Navigation
{
    /**
     * @param {Object} options
     * @param {HTMLElement} options.toggleButton
     * @param {HTMLElement} options.navContent
     * @param {String} [options.showClass=show]
     * @param {Boolean} [options.collapseOnOuterClick=true]
     */
    constructor(options = {})
    {
        this.options = Object.assign({
            toggleButton: null,
            navContent: null,
            showClass: 'show',
            collapseOnOuterClick: true,
        }, options);

        if (!(this.options.toggleButton instanceof HTMLElement && this.options.navContent instanceof HTMLElement)) {
            console.error('Paramètres incorrects');
            return;
        }

        this.options.toggleButton.addEventListener('click', this.onToggleButtonClick.bind(this));
        if (this.options.collapseOnOuterClick) {
            document.addEventListener('click', this.onOuterClick.bind(this));
        }
    }

    onToggleButtonClick()
    {
        if (this.options.navContent.classList.contains(this.options.showClass)) {
            this.options.navContent.classList.remove(this.options.showClass);
        } else {
            this.options.navContent.classList.add(this.options.showClass);
        }
    }

    onOuterClick(e)
    {
        let element = e.target;
        let isToggleElt = element === this.options.toggleButton;
        while(element && !isToggleElt) {
            element = element.parentNode;
            isToggleElt = element === this.options.toggleButton;
        }
        if (!isToggleElt) {
            this.options.navContent.classList.remove(this.options.showClass);
        }
    }
}