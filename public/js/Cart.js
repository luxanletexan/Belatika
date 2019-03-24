class Cart {
    $buttons;
    $cartItemList;
    $removeButtons;
    $cartItemBadge;
    $alertContainer;
    cart;
    homePath;
    imgPath;
    trads;
    maxLengthName = 20;
    constructor(trads, imgPath)
    {
        this.$buttons = $('.cart-button');
        this.$cartItemList = $('#cart-item-list');
        this.$removeButtons = $('#cart-item-list .cart-remove');
        this.$cartItemBadge = $('#cart-item-badge');
        this.$alertContainer = $('#alert-container');
        this.trads = trads;
        this.imgPath = imgPath;
    }

    initButtons()
    {
        this.$buttons.click((e) => {
            let dataAddItemUrl = e.target.getAttribute('data-add-item-url');
            let dataRemoveItemUrl = e.target.getAttribute('data-remove-item-url');
            let dataCartAction = e.target.getAttribute('data-cart-action');
            let id = e.target.getAttribute('data-item-id');
            let figureElt = document.getElementById('item'+id);
            let url = dataCartAction === 'add' ? dataAddItemUrl : dataRemoveItemUrl;
            let action = dataCartAction === 'add' ? 'remove' : 'add';
            e.target.classList.add('spinning');
            this.setItemInCart(
                url,
                () => {
                    e.target.setAttribute('data-cart-action', action);
                    e.target.classList.remove('spinning');
                    if(action === 'add'){
                        figureElt.classList.remove('added');
                    }else{
                        figureElt.classList.add('added');
                    }
                    this.displayCart();
                },
                () => {
                    e.target.classList.remove('spinning');
                });
        });

        this.$removeButtons.click((e) => {
            this.removeButtonsSuccessAction(e.target);
        });
    }

    removeButtonsSuccessAction(removeButtonElt)
    {
        let id = removeButtonElt.getAttribute('data-cart-button-id');
        let url = removeButtonElt.getAttribute('data-remove-url');
        removeButtonElt.classList.remove('fa-times');
        removeButtonElt.classList.add('fa-spinner');
        removeButtonElt.classList.add('spinning');
        this.setItemInCart(
            url,
            () => {
                this.displayCart();
                document.getElementById('cart-button-'+id).setAttribute('data-cart-action', 'add');
                let figureElt = document.getElementById('item'+id);
                figureElt.classList.remove('added');
            },
            () => {
                removeButtonElt.classList.remove('spinning');
                removeButtonElt.classList.remove('fa-spinner');
                removeButtonElt.classList.add('fa-times');
            }
        );
    }

    setItemInCart(url, callbackSuccess, callbackError)
    {
        $.ajax(
            url,
            {
                success : (data) => {
                    this.cart = JSON.parse(data.cart);
                    this.throwSuccessAlert(data.message);
                    this.homePath = data.homePath[data.homePath.length - 1] === '/' ? data.homePath : data.homePath+'/';
                    callbackSuccess();
                },

                error : () => {
                    callbackError();
                }
            }
        )
    }

    displayCart()
    {
        this.$cartItemList.html('');
        let total = 0;
        let size = 0;
        for(let item_id in this.cart) {
            total += this.cart[item_id].price;
            size ++;
            let name = this.cart[item_id].name;
            let truncatedName = name.length > this.maxLengthName ? name.substring(0, this.maxLengthName) + '...' : name;
            let path = this.homePath +
                'bijoux/'
                + this.cart[item_id].category.customers + '/'
                + this.cart[item_id].category.slug + '/'
                + this.cart[item_id].slug;
            let image = this.imgPath+'/uploads/icons/'+this.cart[item_id].images[0].id+'.'+this.cart[item_id].images[0].ext;
            image = Cart.fileExists(image) ? image : this.imgPath + '/ressources/image-not-found.png';
            let price = this.cart[item_id].price.toFixed(2).replace('.', ',')+'€';
            this.$cartItemList.append(
                `<li class="d-flex align-items-center">
                    <a class="belatika-link" href="${path}" title="${name}">
                        <img src="${image}" alt="${name}" width=20>
                        ${truncatedName}
                        <span>${price}</span>
                    </a>
                    <i class="fas fa-times cart-remove" data-cart-button-id="${item_id}" data-remove-url="${this.homePath+'cart/remove/'+item_id}"></i>
                </li>`
            );
            let $remove = this.$cartItemList.children().last().children().last();
            $remove.click((e) => {
                this.removeButtonsSuccessAction(e.target);
            });
        }
        if(size > 1){
            this.$cartItemList.append(
                `<li class="d-flex justify-content-between text-pink">
                    <span class="p-2">${this.trads.total} :</span>
                    <span class="p-2">${total.toFixed(2).replace('.', ',')+'€'}</span>
                </li>`
            );
        }
        this.$cartItemBadge.attr('data-item-count', size);
    }

    throwSuccessAlert(message)
    {
        let alert = `<div class='alert alert-success alert-dismissible fade show' role='alert'>
            ${message}
            <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
        </button>
        </div>`;
        this.$alertContainer.html('');
        this.$alertContainer.append(alert);
    }

    static fileExists(url)
    {
        let http = new XMLHttpRequest();
        http.open('HEAD', url);
        http.send();
        return http.status === 200;
    }
}