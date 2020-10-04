import Popup from './_Popup';
import ajax from "../functions/_ajax";

export default class BackInStock
{
    /**
     * @param {HTMLElement} button
     */
    constructor(button)
    {
        this.button = button;
        this.spinner = button.querySelector('.fas.fa-spinner');
        this.itemId = button.dataset.id;
        this.callbackText = button.dataset.callbackText;
        this.url = button.dataset.url;
        this.email = button.dataset.email;
        this.popupElt = this.buildPopup();
        this.registered = false;

        this.button.addEventListener('click', this.onButtonClick.bind(this));
    }

    buildPopup()
    {
        const popupElt = document.createElement('div');
        popupElt.classList.add('popup');
        popupElt.innerHTML = `
            <i class="fas fa-times-circle"></i>
            <div class="popup__heading">
                Votre email
            </div>
            <div class="popup__text">
                <input class="input-email form-control" type="email">
            </div>
            <div class="my-3 text-center">
                <button class="valid-email btn btn-success float-sm-right"><i class="d-none fas fa-spinner"></i> Valider</button>
            </div>
        `;
        return popupElt;
    }

    onButtonClick()
    {
        if (this.registered) return;

        if (this.email === undefined) {
            return this.askEmail();
        } else {
            if (this.spinner) this.spinner.classList.remove('d-none');
            ajax(
                this.url,
                this.callback.bind(this),
                {
                    method: 'POST',
                    datas: {
                        id: this.itemId,
                        email: this.email
                    }
                }
            );
        }
    }

    askEmail()
    {
        const actionButton = {
            element: this.popupElt.querySelector('.valid-email'),
            url: this.url,
            callback: this.callback.bind(this),
            datas: {
                id: this.itemId,
                email: this.popupElt.querySelector('.input-email')
            }
        }

        new Popup(this.popupElt, {buttons: [actionButton]});
    }

    callback(response)
    {
        if (response.success) {
            this.button.innerText = this.callbackText;
            this.registered = true;
        } else {
            console.error(response.error);
            if (this.spinner) this.spinner.classList.add('d-none');
        }
    }
}