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
import Navigation from "./class/_Navigation";

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
    new Navigation({
        toggleButton: document.getElementById('navbarToggle'),
        navContent: document.getElementById('navbarContent'),
        collapseOnOuterClick: false,
    });
    const womanToggle = document.getElementById('womanToggle');
    new Navigation({toggleButton: womanToggle, navContent: womanToggle});
    const manToggle = document.getElementById('manToggle');
    new Navigation({toggleButton: manToggle, navContent: manToggle});
    const nav = document.getElementById('bt-navbar');
    let YOffset = window.pageYOffset;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > YOffset) {
            nav.classList.add('hide');
        } else {
            nav.classList.remove('hide');
        }
        YOffset = window.pageYOffset;
    });
});
