/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');

import Lazyloader from "./class/_Lazyloader";
import Cart from "./class/_Cart";
import Popup from "./class/_Popup";
import Search from "./class/_Search";

document.addEventListener('DOMContentLoaded', () => {
    new Lazyloader();
    const cartPopup = document.getElementById('add-to-cart-popup');
    if (cartPopup) {
        const popup = new Popup(cartPopup, {
            buttons: [
                {
                    element: document.getElementById('continue-shopping')
                }
            ],
            display: false
        });
        new Cart({ popup })
    } else {
        new Cart();
    }
    // new Search();
});
