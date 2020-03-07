import ajax from "../functions/_ajax";

export default class Cart {
    /**
     * @param {Object} options
     * @param {string} [options.button_class=cart-button] Classe CSS des boutons d'ajout au panier
     * @param {string} [options.shopping_bag_class=cart-hover] Classe CSS du menu panier
     * @param {string} [options.shopping_bag_item_class=cart-hover__item] Classe CSS des items du menu panier
     */
    constructor(options = {})
    {
        //Settings
        this.options = Object.assign({
            button_class: 'cart-button',
            shopping_bag_class: 'cart-hover',
            shopping_bag_item_class: 'cart-hover__item',
        }, options);
        this.processing = false;
        this.cartContent = {};

        //DOM handling
        this.buttons = [].slice.call(document.getElementsByClassName(this.options.button_class));
        this.shoppingBag = document.querySelector('.'+this.options.shopping_bag_class);
        this.shoppingBagItemButtons = [].slice.call(document.querySelectorAll('.'+this.options.shopping_bag_item_class+' .remove-item'));

        //Events
        this.buttons.forEach(button => {
            button.addEventListener('click', this.onButtonClick.bind(this, button));
        });
        this.shoppingBagItemButtons.forEach(button => {
            button.addEventListener('click', this.onShoppingBagButtonClick.bind(this, button));
        });
    }

    onButtonClick(button)
    {
        if (this.processing) {
            return;
        }
        this.processing = true;
        let spinner = button.querySelector('.fa-spinner');
        spinner.classList.remove('hidden');
        let added = button.dataset.added !== undefined;
        let url = added ? button.dataset.remove_item_url : button.dataset.add_item_url;
        ajax(url, (response) => {
            spinner.classList.add('hidden');
            this.setButtonMode(button, added);
            this.updateCart(response.cart);
            this.processing = false;
        });
    }

    onShoppingBagButtonClick(button)
    {
        if (this.processing) {
            return;
        }
        this.processing = true;
        button.classList.remove('far');
        button.classList.remove('fa-window-close');
        button.classList.add('fas');
        button.classList.add('fa-spinner');
        let url = button.dataset.remove_item_url;
        let addToCartButton = document.getElementById('cart-button-'+button.dataset.item_id);
        ajax(url, (response) => {
            button.classList.remove('fas');
            button.classList.remove('fa-spinner');
            button.classList.add('far');
            button.classList.add('fa-window-close');
            this.updateCart(response.cart);
            if (addToCartButton instanceof HTMLElement) {
                this.setButtonMode(addToCartButton, true);
            }
            this.processing = false;
        });
    }

    updateCart(jsonResponse)
    {
        try {
            this.cartContent = JSON.parse(jsonResponse);
            if (typeof this.cartContent !== 'object') {
                this.cartContent = {};
            }
        } catch (e) {
            console.error('Format JSON panier non valide');
            return;
        }

        this.shoppingBag.innerHTML = '';

        let count = 0;
        Object.values(this.cartContent).forEach(item => {
            let itemListElt = this.createShoppingBagItem(item);
            this.shoppingBag.appendChild(itemListElt);
            count += item.quantity;
        });
        this.shoppingBag.dataset.quantity = count;
    }

    createShoppingBagItem(item)
    {
        let itemContainer = this.createElementWithClasses('div', this.options.shopping_bag_item_class);
        let itemLink = this.createElementWithClasses('a', this.options.shopping_bag_item_class+'__link');
        itemLink.href = item.link;
        itemLink.setAttribute('title', item.name);
        let itemImage = this.createElementWithClasses('img');
        itemImage.src = item.images[0].cachePath;
        itemImage.alt = item.images[0].alt;
        let itemPrice = this.createElementWithClasses('span', this.options.shopping_bag_item_class+'__price');
        itemPrice.innerText = new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(item.price);
        let itemRemove = this.createElementWithClasses('i', ['remove-item', 'far', 'fa-window-close']);
        itemRemove.setAttribute('item_id', item.id);
        itemRemove.setAttribute('data-remove_item_url', item.removeLink);
        itemRemove.addEventListener('click', this.onShoppingBagButtonClick.bind(this, itemRemove));

        itemLink.appendChild(itemImage);
        itemLink.appendChild(document.createTextNode(' '+item.name));
        itemContainer.appendChild(itemLink);
        itemContainer.appendChild(itemPrice);
        itemContainer.appendChild(itemRemove);
        return itemContainer;
    }

    createElementWithClasses(tag, classes = [])
    {
        if (!Array.isArray(classes)) {
            classes = [classes];
        }

        let element = document.createElement(tag);
        for (let className of classes) {
            element.classList.add(className);
        }

        return element;
    }

    setButtonMode(button, added)
    {
        let addText = button.querySelector('.add-item');
        let removeText = button.querySelector('.remove-item');
        if (added) {
            addText.classList.remove('hidden');
            removeText.classList.add('hidden');
            button.removeAttribute('data-added');
        } else {
            addText.classList.add('hidden');
            removeText.classList.remove('hidden');
            button.setAttribute('data-added', '');
        }
    }
}