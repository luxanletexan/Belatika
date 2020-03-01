import ajax from "../functions/_ajax";

export default class Cart {
    /**
     * @param {Object} options
     * @param {string} [options.button_class=cart-button] Classe CSS des boutons d'ajout au panier
     */
    constructor(options = {})
    {
        //Settings
        this.options = Object.assign({
            button_class: 'cart-button',
        }, options);
        this.processing = false;

        //DOM handling
        this.buttons = [].slice.call(document.getElementsByClassName(this.options.button_class));

        //Events
        this.buttons.forEach(button => {
            button.addEventListener('click', this.onButtonClick.bind(this, button));
        })
    }

    onButtonClick(button)
    {
        if (this.processing) {
            return;
        }
        this.processing = true;
        let spinner = button.querySelector('.fa-spinner');
        let addText = button.querySelector('.add-item');
        let removeText = button.querySelector('.remove-item');
        spinner.classList.remove('hidden');
        let added = button.dataset.added !== undefined;
        let url = added ? button.dataset.remove_item_url : button.dataset.add_item_url;
        ajax(url, (response) => {
            spinner.classList.add('hidden');
            if (added) {
                addText.classList.remove('hidden');
                removeText.classList.add('hidden');
                button.removeAttribute('data-added');
            } else {
                addText.classList.add('hidden');
                removeText.classList.remove('hidden');
                button.setAttribute('data-added', '');
            }
            this.processing = false;
        });
    }
}