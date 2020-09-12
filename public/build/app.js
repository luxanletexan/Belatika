(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Lazyloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/_Lazyloader */ "./assets/js/class/_Lazyloader.js");
/* harmony import */ var _class_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class/_Cart */ "./assets/js/class/_Cart.js");
/* harmony import */ var _class_Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/_Popup */ "./assets/js/class/_Popup.js");
/* harmony import */ var _class_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./class/_Search */ "./assets/js/class/_Search.js");
/* harmony import */ var _class_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class/_Navigation */ "./assets/js/class/_Navigation.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');







document.addEventListener('DOMContentLoaded', function () {
  new _class_Lazyloader__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var cartPopup = document.getElementById('add-to-cart-popup');

  if (cartPopup) {
    var popup = new _class_Popup__WEBPACK_IMPORTED_MODULE_2__["default"](cartPopup, {
      buttons: [{
        element: document.getElementById('continue-shopping')
      }],
      display: false
    });
    new _class_Cart__WEBPACK_IMPORTED_MODULE_1__["default"]({
      popup: popup
    });
  } else {
    new _class_Cart__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  new _class_Search__WEBPACK_IMPORTED_MODULE_3__["default"]();
  new _class_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"]({
    toggleButton: document.getElementById('navbarToggle'),
    navContent: document.getElementById('navbarContent'),
    collapseOnOuterClick: false
  });
  var womanToggle = document.getElementById('womanToggle');
  new _class_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"]({
    toggleButton: womanToggle,
    navContent: womanToggle
  });
  var manToggle = document.getElementById('manToggle');
  new _class_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"]({
    toggleButton: manToggle,
    navContent: manToggle
  });
  var nav = document.getElementById('bt-navbar');
  var YOffset = window.pageYOffset;
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > YOffset) {
      nav.classList.add('hide');
    } else {
      nav.classList.remove('hide');
    }

    YOffset = window.pageYOffset;
  });
});

/***/ }),

/***/ "./assets/js/class/_Cart.js":
/*!**********************************!*\
  !*** ./assets/js/class/_Cart.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.values */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../functions/_ajax */ "./assets/js/functions/_ajax.js");























function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Cart = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {string} [options.button_class=cart-button] Classe CSS des boutons d'ajout au panier
   * @param {string} [options.navcart_class=navcart] Classe CSS du menu panier
   * @param {string} [options.navcart_button_class=navcart__hover] Classe CSS du bouton du menu panier
   * @param {string} [options.shopping_bag_class=cart-hover] Classe CSS du menu panier
   * @param {string} [options.shopping_bag_item_class=cart-hover__item] Classe CSS des items du menu panier
   * @param {string} [options.cart_quantity_class=navcart] Classe CSS quantité dans le panier
   * @param {string} [options.cart_url=/panier/] Lien vers le panier
   * @param {Popup} [options.popup=null] popup
   */
  function Cart() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Cart);

    //Settings
    this.options = Object.assign({
      button_class: 'cart-button',
      navcart_class: 'navcart',
      navcart_button_class: 'navcart__hover',
      shopping_bag_class: 'cart-hover',
      shopping_bag_item_class: 'cart-hover__item',
      cart_quantity_class: 'navcart',
      cart_url: '/panier/',
      popup: null
    }, options);
    this.processing = false;
    this.cartContent = {};
    this.onSales = false; //DOM handling

    this.buttons = [].slice.call(document.getElementsByClassName(this.options.button_class));
    this.navcart = document.querySelector('.' + this.options.navcart_class);
    this.navcartToggle = document.querySelector('.' + this.options.navcart_button_class);
    this.shoppingBag = document.querySelector('.' + this.options.shopping_bag_class);
    this.shoppingBagQuantity = document.querySelector('.' + this.options.cart_quantity_class);
    this.shoppingBagItemButtons = [].slice.call(document.querySelectorAll('.' + this.options.shopping_bag_item_class + ' .remove-item')); //Events

    this.navcartToggle.addEventListener('click', this.onNavcartToggleClick.bind(this));
    this.buttons.forEach(function (button) {
      button.addEventListener('click', _this.onButtonClick.bind(_this, button));
    });
    this.shoppingBagItemButtons.forEach(function (button) {
      button.addEventListener('click', _this.onShoppingBagButtonClick.bind(_this, button));
    });
  }

  _createClass(Cart, [{
    key: "onNavcartToggleClick",
    value: function onNavcartToggleClick(e) {
      e.preventDefault();
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(button) {
      var _this2 = this;

      if (this.processing) {
        return;
      }

      this.processing = true;
      var spinner = button.querySelector('.fa-spinner');
      spinner.classList.remove('hidden');
      var added = button.dataset.added !== undefined;
      var url = added ? button.dataset.remove_item_url : button.dataset.add_item_url;
      Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_22__["default"])(url, function (response) {
        spinner.classList.add('hidden');

        _this2.setButtonMode(button, added);

        _this2.onSales = response.onSales === true;

        _this2.updateCart(response.cart);

        button.blur();

        if (_this2.options.popup && !added) {
          _this2.options.popup.show();
        }

        _this2.processing = false;
      }, {
        method: 'POST'
      });
    }
  }, {
    key: "onShoppingBagButtonClick",
    value: function onShoppingBagButtonClick(button) {
      var _this3 = this;

      if (this.processing) {
        return;
      }

      this.processing = true;
      button.classList.remove('far');
      button.classList.remove('fa-window-close');
      button.classList.add('fas');
      button.classList.add('fa-spinner');
      var url = button.dataset.remove_item_url;
      var addToCartButton = document.getElementById('cart-button-' + button.dataset.item_id);
      Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_22__["default"])(url, function (response) {
        button.classList.remove('fas');
        button.classList.remove('fa-spinner');
        button.classList.add('far');
        button.classList.add('fa-window-close');

        if (addToCartButton instanceof HTMLElement) {
          _this3.setButtonMode(addToCartButton, true);
        }

        _this3.onSales = response.onSales === true;

        _this3.updateCart(response.cart);

        _this3.processing = false;
      }, {
        method: 'POST'
      });
    }
  }, {
    key: "updateCart",
    value: function updateCart(jsonResponse) {
      var _this4 = this;

      try {
        this.cartContent = JSON.parse(jsonResponse);

        if (_typeof(this.cartContent) !== 'object') {
          this.cartContent = {};
        }
      } catch (e) {
        console.error('Format JSON panier non valide');
        return;
      }

      this.shoppingBag.innerHTML = '';
      var count = 0;
      var total = 0;

      if (this.options.popup) {
        this.options.popup.resetImport();
      }

      Object.values(this.cartContent).forEach(function (item) {
        var itemListElt = _this4.createShoppingBagItem(item);

        var price = _this4.onSales ? item.discountPrice : item.price;
        var quantity = parseInt(item.quantity);
        total += quantity * parseFloat(price);

        _this4.shoppingBag.appendChild(itemListElt);

        count += item.quantity;
      });

      if (total > 0) {
        var shoppingBagTotal = this.createShoppingBagTotal(total);
        this.shoppingBag.appendChild(shoppingBagTotal);
        var cartLinkElt = this.createElementWithClasses('div', this.options.shopping_bag_class + '__link');
        var cartLink = this.createElementWithClasses('a', ['btn', 'btn-sm', 'bt-btn--primary', 'text-light']);
        cartLink.href = this.options.cart_url;
        cartLink.innerText = this.shoppingBag.dataset.cart_link_text;
        cartLinkElt.appendChild(cartLink);
        this.shoppingBag.appendChild(cartLinkElt);
        this.navcart.classList.remove('empty');
      } else {
        this.navcart.classList.add('empty');
      }

      this.shoppingBagQuantity.dataset.quantity = count;
    }
    /**
     * @param {Object} item
     * @return HTMLElement
     */

  }, {
    key: "createShoppingBagItem",
    value: function createShoppingBagItem(item) {
      var itemContainer = this.createElementWithClasses('div', this.options.shopping_bag_item_class);
      var itemLink = this.createElementWithClasses('a', this.options.shopping_bag_item_class + '__link');
      itemLink.href = item.link;
      itemLink.setAttribute('title', item.name);
      var itemImage = this.createElementWithClasses('img');
      itemImage.src = item.images[0].cachePath;
      itemImage.alt = item.images[0].alt;
      var itemPrice = this.createElementWithClasses('span', this.options.shopping_bag_item_class + '__price');
      var price = this.onSales ? item.discountPrice : item.price;
      itemPrice.innerText = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(price);
      var itemRemove = this.createElementWithClasses('i', ['remove-item', 'far', 'fa-window-close']);
      itemRemove.setAttribute('data-item_id', item.id);
      itemRemove.setAttribute('data-remove_item_url', item.removeLink);
      itemRemove.addEventListener('click', this.onShoppingBagButtonClick.bind(this, itemRemove));
      itemLink.appendChild(itemImage);
      itemLink.appendChild(document.createTextNode(' ' + item.name));
      itemContainer.appendChild(itemLink);
      itemContainer.appendChild(itemPrice);

      if (this.options.popup) {
        var clonedItem = itemContainer.cloneNode(true);
        var clonedItemRemove = itemRemove.cloneNode(true);
        clonedItemRemove.addEventListener('click', this.onShoppingBagButtonClick.bind(this, clonedItemRemove));
        clonedItem.appendChild(clonedItemRemove);
        this.options.popup["import"](clonedItem);
      }

      itemContainer.appendChild(itemRemove);
      return itemContainer;
    }
    /**
     * @param {float} total
     * @return HTMLElement
     */

  }, {
    key: "createShoppingBagTotal",
    value: function createShoppingBagTotal(total) {
      var totalContainer = this.createElementWithClasses('div', this.options.shopping_bag_class + '__total');
      var totalHeading = this.createElementWithClasses('span');
      totalHeading.innerText = 'Total:';
      var totalAmount = this.createElementWithClasses('span', this.options.shopping_bag_class + '__total__amount');
      totalAmount.innerText = new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
      }).format(total);
      totalContainer.appendChild(totalHeading);
      totalContainer.appendChild(totalAmount);
      return totalContainer;
    }
    /**
     * @param {string} tag
     * @param {string|array} classes
     * @return HTMLElement
     */

  }, {
    key: "createElementWithClasses",
    value: function createElementWithClasses(tag) {
      var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      if (!Array.isArray(classes)) {
        classes = [classes];
      }

      var element = document.createElement(tag);

      var _iterator = _createForOfIteratorHelper(classes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var className = _step.value;
          element.classList.add(className);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return element;
    }
  }, {
    key: "setButtonMode",
    value: function setButtonMode(button, added) {
      var addText = button.querySelector('.add-item');
      var removeText = button.querySelector('.remove-item');

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
  }]);

  return Cart;
}();



/***/ }),

/***/ "./assets/js/class/_Lazyloader.js":
/*!****************************************!*\
  !*** ./assets/js/class/_Lazyloader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lazyloader; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lazyloader = /*#__PURE__*/function () {
  function Lazyloader() {
    _classCallCheck(this, Lazyloader);

    this.lazyImages = [].slice.call(document.getElementsByClassName('lazyload'));

    if ("IntersectionObserver" in window) {
      this.observe();
    } else {
      this.fallBack();
    }
  }
  /**
   * Use the observer to load lazy images when viewport in range
   */


  _createClass(Lazyloader, [{
    key: "observe",
    value: function observe() {
      var _this = this;

      var lazyImageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var lazyImage = entry.target;

          if (entry.isIntersecting && lazyImage instanceof HTMLImageElement) {
            _this.load(lazyImage);

            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
      this.lazyImages.forEach(function (image) {
        lazyImageObserver.observe(image);
      });
    }
    /**
     * If intersectionObserver not supported
     */

  }, {
    key: "fallBack",
    value: function fallBack() {
      var _this2 = this;

      this.lazyImages.forEach(function (lazyImage) {
        _this2.load(lazyImage);
      });
    }
    /**
     * Load the lazy image
     * @param {HTMLImageElement} lazyImage
     */

  }, {
    key: "load",
    value: function load(lazyImage) {
      lazyImage.addEventListener('load', function () {
        lazyImage.classList.remove('lazyload');

        if (lazyImage.classList.length === 0) {
          lazyImage.removeAttribute('class');
        }
      });
      lazyImage.src = lazyImage.dataset.src;
    }
  }]);

  return Lazyloader;
}();



/***/ }),

/***/ "./assets/js/class/_Navigation.js":
/*!****************************************!*\
  !*** ./assets/js/class/_Navigation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Navigation = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {HTMLElement} options.toggleButton
   * @param {HTMLElement} options.navContent
   * @param {String} [options.showClass=show]
   * @param {Boolean} [options.collapseOnOuterClick=true]
   */
  function Navigation() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Navigation);

    this.options = Object.assign({
      toggleButton: null,
      navContent: null,
      showClass: 'show',
      collapseOnOuterClick: true
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

  _createClass(Navigation, [{
    key: "onToggleButtonClick",
    value: function onToggleButtonClick() {
      if (this.options.navContent.classList.contains(this.options.showClass)) {
        this.options.navContent.classList.remove(this.options.showClass);
      } else {
        this.options.navContent.classList.add(this.options.showClass);
      }
    }
  }, {
    key: "onOuterClick",
    value: function onOuterClick(e) {
      var element = e.target;
      var isToggleElt = element === this.options.toggleButton;

      while (element && !isToggleElt) {
        element = element.parentNode;
        isToggleElt = element === this.options.toggleButton;
      }

      if (!isToggleElt) {
        this.options.navContent.classList.remove(this.options.showClass);
      }
    }
  }]);

  return Navigation;
}();



/***/ }),

/***/ "./assets/js/class/_Popup.js":
/*!***********************************!*\
  !*** ./assets/js/class/_Popup.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/_ajax */ "./assets/js/functions/_ajax.js");







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Popup = /*#__PURE__*/function () {
  /**
   * @callback ajaxCallback
   * @param {Object} response
   */

  /**
   * @param {HTMLElement} element
   * @param {Object} options
   * @param {{element: HTMLElement, url: string, callback: ajaxCallback, datas: Object}[]} options.buttons
   * @param {Boolean} options.display
   */
  function Popup(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Popup);

    //Options
    this.options = Object.assign({
      buttons: [],
      display: true
    }, options); //Gestion du DOM

    this.popup = element;
    this.setOverlay();
    this.close = element.querySelector('.fas.fa-times-circle');
    this.importElt = this.popup.querySelector('.import'); //Gestion des evenements

    if (this.close) {
      this.close.addEventListener('click', this.onOverlayClick.bind(this));
    }

    this.popup.addEventListener('click', this.onPopupClick.bind(this));
    this.overlay.addEventListener('click', this.onOverlayClick.bind(this));
    this.options.buttons.forEach(function (button) {
      _this.setButtonEvent(button);
    });
  }

  _createClass(Popup, [{
    key: "setOverlay",
    value: function setOverlay() {
      var overlay = document.createElement('div');
      this.setStyles(overlay, {
        backgroundColor: 'rgba(0,0,0,.7)',
        position: 'fixed',
        width: '100%',
        height: '100vh',
        top: '0',
        left: '0',
        zIndex: '999',
        display: this.options.display ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center'
      });
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

  }, {
    key: "setStyles",
    value: function setStyles(element, styles) {
      Object.keys(styles).forEach(function (property) {
        element.style[property] = styles[property];
      });
    }
  }, {
    key: "onOverlayClick",
    value: function onOverlayClick() {
      // this.body.removeChild(this.overlay);
      this.overlay.style.display = 'none';
    }
  }, {
    key: "onPopupClick",
    value: function onPopupClick(e) {
      e.stopPropagation();
    }
    /**
     * @param {Object} button
     * @param {HTMLElement} button.element
     * @param {string} button.url
     * @param {ajaxCallback} button.callback
     * @param {Object} button.datas
     */

  }, {
    key: "setButtonEvent",
    value: function setButtonEvent(button) {
      var _this2 = this;

      if (!button.datas) {
        button.datas = {};
      }

      button.element.addEventListener('click', function () {
        if (button.element.dataset.cancel !== undefined) {
          _this2.onOverlayClick();
        } else {
          Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_6__["default"])(button.url, function (response) {
            if (button.callback) {
              button.callback(response);
            }

            _this2.onOverlayClick();
          }, {
            method: 'POST',
            datas: button.datas
          });
        }
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.overlay.style.display = 'flex';
    }
  }, {
    key: "import",
    value: function _import(element) {
      if (this.importElt) {
        this.importElt.appendChild(element);
      }
    }
  }, {
    key: "resetImport",
    value: function resetImport() {
      if (this.importElt) {
        this.importElt.innerHTML = '';
      }
    }
  }]);

  return Popup;
}();



/***/ }),

/***/ "./assets/js/class/_Search.js":
/*!************************************!*\
  !*** ./assets/js/class/_Search.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search);

    this.searchForm = document.getElementById('search-form');
    this.searchTrigger = document.getElementById('search-trigger');
    this.searchInput = document.getElementById('search-input');
    this.searchButton = document.getElementById('search-button');
    this.searchTrigger.addEventListener('click', this.onSearchTriggerClick.bind(this));
    document.body.addEventListener('click', this.onOuterClick.bind(this));
  }

  _createClass(Search, [{
    key: "onSearchTriggerClick",
    value: function onSearchTriggerClick() {
      var hasSearchRequest = this.searchInput.value.length > 0;

      if (this.searchForm.classList.contains('expanded')) {
        if (hasSearchRequest) {
          this.searchButton.dispatchEvent(new MouseEvent('click'));
        } else {
          this.searchForm.classList.remove('expanded');
        }
      } else {
        this.searchForm.classList.add('expanded');
      }
    }
  }, {
    key: "onOuterClick",
    value: function onOuterClick(e) {
      if (e.target === this.searchTrigger || e.target === this.searchInput || e.target === this.searchButton) {
        return;
      }

      this.searchForm.classList.remove('expanded');
      this.searchInput.value = '';
    }
  }]);

  return Search;
}();



/***/ }),

/***/ "./assets/js/functions/_ajax.js":
/*!**************************************!*\
  !*** ./assets/js/functions/_ajax.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ajax; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);





/**
 * This callback is displayed as a global member.
 * @callback ajaxCallback
 * @param {Object|string} responseMessage
 */

/**
 *
 * @param {string} url
 * @param {ajaxCallback} callback
 * @param {Object} options
 * @param {string} [options.method=GET]
 * @param {Object} [options.datas={}]
 * @param {Boolean} [options.json=true]
 */
function ajax(url, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  //Settings
  options = Object.assign({
    method: 'GET',
    datas: {},
    json: true
  }, options);
  var formData = null;
  var properties = Object.keys(options.datas);

  if (properties.length > 0) {
    formData = new FormData();
    properties.forEach(function (property) {
      formData.append(property, options.datas[property]);
    });
  }

  var xhr = new XMLHttpRequest();
  xhr.open(options.method, url);
  xhr.addEventListener('load', function () {
    if (xhr.status < 200 && xhr.status >= 400) {
      console.error('Echec HTTP : code'.xhr.status);
    } else {
      var response = xhr.response;

      if (options.json) {
        try {
          response = JSON.parse(response);
        } catch (e) {
          console.error('Format JSON invalide');
          return false;
        }
      }

      callback(response);
    }
  });
  xhr.send(formData);
}

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fTGF6eWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJMYXp5bG9hZGVyIiwiY2FydFBvcHVwIiwiZ2V0RWxlbWVudEJ5SWQiLCJwb3B1cCIsIlBvcHVwIiwiYnV0dG9ucyIsImVsZW1lbnQiLCJkaXNwbGF5IiwiQ2FydCIsIlNlYXJjaCIsIk5hdmlnYXRpb24iLCJ0b2dnbGVCdXR0b24iLCJuYXZDb250ZW50IiwiY29sbGFwc2VPbk91dGVyQ2xpY2siLCJ3b21hblRvZ2dsZSIsIm1hblRvZ2dsZSIsIm5hdiIsIllPZmZzZXQiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJidXR0b25fY2xhc3MiLCJuYXZjYXJ0X2NsYXNzIiwibmF2Y2FydF9idXR0b25fY2xhc3MiLCJzaG9wcGluZ19iYWdfY2xhc3MiLCJzaG9wcGluZ19iYWdfaXRlbV9jbGFzcyIsImNhcnRfcXVhbnRpdHlfY2xhc3MiLCJjYXJ0X3VybCIsInByb2Nlc3NpbmciLCJjYXJ0Q29udGVudCIsIm9uU2FsZXMiLCJzbGljZSIsImNhbGwiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibmF2Y2FydCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZjYXJ0VG9nZ2xlIiwic2hvcHBpbmdCYWciLCJzaG9wcGluZ0JhZ1F1YW50aXR5Iiwic2hvcHBpbmdCYWdJdGVtQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvbk5hdmNhcnRUb2dnbGVDbGljayIsImJpbmQiLCJmb3JFYWNoIiwiYnV0dG9uIiwib25CdXR0b25DbGljayIsIm9uU2hvcHBpbmdCYWdCdXR0b25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNwaW5uZXIiLCJhZGRlZCIsImRhdGFzZXQiLCJ1bmRlZmluZWQiLCJ1cmwiLCJyZW1vdmVfaXRlbV91cmwiLCJhZGRfaXRlbV91cmwiLCJhamF4IiwicmVzcG9uc2UiLCJzZXRCdXR0b25Nb2RlIiwidXBkYXRlQ2FydCIsImNhcnQiLCJibHVyIiwic2hvdyIsIm1ldGhvZCIsImFkZFRvQ2FydEJ1dHRvbiIsIml0ZW1faWQiLCJIVE1MRWxlbWVudCIsImpzb25SZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJlcnJvciIsImlubmVySFRNTCIsImNvdW50IiwidG90YWwiLCJyZXNldEltcG9ydCIsInZhbHVlcyIsIml0ZW0iLCJpdGVtTGlzdEVsdCIsImNyZWF0ZVNob3BwaW5nQmFnSXRlbSIsInByaWNlIiwiZGlzY291bnRQcmljZSIsInF1YW50aXR5IiwicGFyc2VJbnQiLCJwYXJzZUZsb2F0IiwiYXBwZW5kQ2hpbGQiLCJzaG9wcGluZ0JhZ1RvdGFsIiwiY3JlYXRlU2hvcHBpbmdCYWdUb3RhbCIsImNhcnRMaW5rRWx0IiwiY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzIiwiY2FydExpbmsiLCJocmVmIiwiaW5uZXJUZXh0IiwiY2FydF9saW5rX3RleHQiLCJpdGVtQ29udGFpbmVyIiwiaXRlbUxpbmsiLCJsaW5rIiwic2V0QXR0cmlidXRlIiwibmFtZSIsIml0ZW1JbWFnZSIsInNyYyIsImltYWdlcyIsImNhY2hlUGF0aCIsImFsdCIsIml0ZW1QcmljZSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiZm9ybWF0IiwiaXRlbVJlbW92ZSIsImlkIiwicmVtb3ZlTGluayIsImNyZWF0ZVRleHROb2RlIiwiY2xvbmVkSXRlbSIsImNsb25lTm9kZSIsImNsb25lZEl0ZW1SZW1vdmUiLCJ0b3RhbENvbnRhaW5lciIsInRvdGFsSGVhZGluZyIsInRvdGFsQW1vdW50IiwidGFnIiwiY2xhc3NlcyIsIkFycmF5IiwiaXNBcnJheSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhZGRUZXh0IiwicmVtb3ZlVGV4dCIsInJlbW92ZUF0dHJpYnV0ZSIsImxhenlJbWFnZXMiLCJvYnNlcnZlIiwiZmFsbEJhY2siLCJsYXp5SW1hZ2VPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwibGF6eUltYWdlIiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJIVE1MSW1hZ2VFbGVtZW50IiwibG9hZCIsInVub2JzZXJ2ZSIsImltYWdlIiwibGVuZ3RoIiwic2hvd0NsYXNzIiwib25Ub2dnbGVCdXR0b25DbGljayIsIm9uT3V0ZXJDbGljayIsImNvbnRhaW5zIiwiaXNUb2dnbGVFbHQiLCJwYXJlbnROb2RlIiwic2V0T3ZlcmxheSIsImNsb3NlIiwiaW1wb3J0RWx0Iiwib25PdmVybGF5Q2xpY2siLCJvblBvcHVwQ2xpY2siLCJvdmVybGF5Iiwic2V0QnV0dG9uRXZlbnQiLCJzZXRTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwibGVmdCIsInpJbmRleCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJvZHkiLCJzdHlsZXMiLCJrZXlzIiwicHJvcGVydHkiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhcyIsImNhbmNlbCIsImNhbGxiYWNrIiwic2VhcmNoRm9ybSIsInNlYXJjaFRyaWdnZXIiLCJzZWFyY2hJbnB1dCIsInNlYXJjaEJ1dHRvbiIsIm9uU2VhcmNoVHJpZ2dlckNsaWNrIiwiaGFzU2VhcmNoUmVxdWVzdCIsInZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsIk1vdXNlRXZlbnQiLCJqc29uIiwiZm9ybURhdGEiLCJwcm9wZXJ0aWVzIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzdGF0dXMiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsOENBQUQsQ0FBUCxDLENBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLHlEQUFKO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsbUJBQXhCLENBQWxCOztBQUNBLE1BQUlELFNBQUosRUFBZTtBQUNYLFFBQU1FLEtBQUssR0FBRyxJQUFJQyxvREFBSixDQUFVSCxTQUFWLEVBQXFCO0FBQy9CSSxhQUFPLEVBQUUsQ0FDTDtBQUNJQyxlQUFPLEVBQUVSLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixtQkFBeEI7QUFEYixPQURLLENBRHNCO0FBTS9CSyxhQUFPLEVBQUU7QUFOc0IsS0FBckIsQ0FBZDtBQVFBLFFBQUlDLG1EQUFKLENBQVM7QUFBRUwsV0FBSyxFQUFMQTtBQUFGLEtBQVQ7QUFDSCxHQVZELE1BVU87QUFDSCxRQUFJSyxtREFBSjtBQUNIOztBQUNELE1BQUlDLHFEQUFKO0FBQ0EsTUFBSUMseURBQUosQ0FBZTtBQUNYQyxnQkFBWSxFQUFFYixRQUFRLENBQUNJLGNBQVQsQ0FBd0IsY0FBeEIsQ0FESDtBQUVYVSxjQUFVLEVBQUVkLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixlQUF4QixDQUZEO0FBR1hXLHdCQUFvQixFQUFFO0FBSFgsR0FBZjtBQUtB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QVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkIwQyxZQUFRLEdBQUcsSUFBSUUsUUFBSixFQUFYO0FBQ0FELGNBQVUsQ0FBQy9JLE9BQVgsQ0FBbUIsVUFBQytILFFBQUQsRUFBYztBQUM3QmUsY0FBUSxDQUFDRyxNQUFULENBQWdCbEIsUUFBaEIsRUFBMEJ4SixPQUFPLENBQUMwSixLQUFSLENBQWNGLFFBQWQsQ0FBMUI7QUFDSCxLQUZEO0FBR0g7O0FBQ0QsTUFBSW1CLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsS0FBRyxDQUFDRSxJQUFKLENBQVM3SyxPQUFPLENBQUM2QyxNQUFqQixFQUF5QlYsR0FBekI7QUFDQXdJLEtBQUcsQ0FBQ25NLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQU07QUFDL0IsUUFBSW1NLEdBQUcsQ0FBQ0csTUFBSixHQUFhLEdBQWIsSUFBb0JILEdBQUcsQ0FBQ0csTUFBSixJQUFjLEdBQXRDLEVBQTJDO0FBQ3ZDMUgsYUFBTyxDQUFDQyxLQUFSLENBQWMsb0JBQW9Cc0gsR0FBcEIsQ0FBd0JHLE1BQXRDO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsVUFBSXZJLFFBQVEsR0FBR29JLEdBQUcsQ0FBQ3BJLFFBQW5COztBQUNBLFVBQUl2QyxPQUFPLENBQUNzSyxJQUFaLEVBQWtCO0FBQ2QsWUFBSTtBQUNBL0gsa0JBQVEsR0FBR1csSUFBSSxDQUFDQyxLQUFMLENBQVdaLFFBQVgsQ0FBWDtBQUNILFNBRkQsQ0FFRSxPQUFPVixDQUFQLEVBQVU7QUFDUnVCLGlCQUFPLENBQUNDLEtBQVIsQ0FBYyxzQkFBZDtBQUNBLGlCQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNEdUcsY0FBUSxDQUFDckgsUUFBRCxDQUFSO0FBQ0g7QUFDSixHQWZEO0FBZ0JBb0ksS0FBRyxDQUFDSSxJQUFKLENBQVNSLFFBQVQ7QUFDSCxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbnJlcXVpcmUoJy4uL2Nzcy9hcHAuc2NzcycpO1xyXG5cclxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxyXG4vLyBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5pbXBvcnQgTGF6eWxvYWRlciBmcm9tIFwiLi9jbGFzcy9fTGF6eWxvYWRlclwiO1xyXG5pbXBvcnQgQ2FydCBmcm9tIFwiLi9jbGFzcy9fQ2FydFwiO1xyXG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vY2xhc3MvX1BvcHVwXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vY2xhc3MvX1NlYXJjaFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9jbGFzcy9fTmF2aWdhdGlvblwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIG5ldyBMYXp5bG9hZGVyKCk7XHJcbiAgICBjb25zdCBjYXJ0UG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvLWNhcnQtcG9wdXAnKTtcclxuICAgIGlmIChjYXJ0UG9wdXApIHtcclxuICAgICAgICBjb25zdCBwb3B1cCA9IG5ldyBQb3B1cChjYXJ0UG9wdXAsIHtcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250aW51ZS1zaG9wcGluZycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3IENhcnQoeyBwb3B1cCB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBuZXcgQ2FydCgpO1xyXG4gICAgfVxyXG4gICAgbmV3IFNlYXJjaCgpO1xyXG4gICAgbmV3IE5hdmlnYXRpb24oe1xyXG4gICAgICAgIHRvZ2dsZUJ1dHRvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhclRvZ2dsZScpLFxyXG4gICAgICAgIG5hdkNvbnRlbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXJDb250ZW50JyksXHJcbiAgICAgICAgY29sbGFwc2VPbk91dGVyQ2xpY2s6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB3b21hblRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3b21hblRvZ2dsZScpO1xyXG4gICAgbmV3IE5hdmlnYXRpb24oe3RvZ2dsZUJ1dHRvbjogd29tYW5Ub2dnbGUsIG5hdkNvbnRlbnQ6IHdvbWFuVG9nZ2xlfSk7XHJcbiAgICBjb25zdCBtYW5Ub2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFuVG9nZ2xlJyk7XHJcbiAgICBuZXcgTmF2aWdhdGlvbih7dG9nZ2xlQnV0dG9uOiBtYW5Ub2dnbGUsIG5hdkNvbnRlbnQ6IG1hblRvZ2dsZX0pO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0LW5hdmJhcicpO1xyXG4gICAgbGV0IFlPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiBZT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgWU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiaW1wb3J0IGFqYXggZnJvbSBcIi4uL2Z1bmN0aW9ucy9fYWpheFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYnV0dG9uX2NsYXNzPWNhcnQtYnV0dG9uXSBDbGFzc2UgQ1NTIGRlcyBib3V0b25zIGQnYWpvdXQgYXUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubmF2Y2FydF9jbGFzcz1uYXZjYXJ0XSBDbGFzc2UgQ1NTIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubmF2Y2FydF9idXR0b25fY2xhc3M9bmF2Y2FydF9faG92ZXJdIENsYXNzZSBDU1MgZHUgYm91dG9uIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzPWNhcnQtaG92ZXJdIENsYXNzZSBDU1MgZHUgbWVudSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcz1jYXJ0LWhvdmVyX19pdGVtXSBDbGFzc2UgQ1NTIGRlcyBpdGVtcyBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhcnRfcXVhbnRpdHlfY2xhc3M9bmF2Y2FydF0gQ2xhc3NlIENTUyBxdWFudGl0w6kgZGFucyBsZSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYXJ0X3VybD0vcGFuaWVyL10gTGllbiB2ZXJzIGxlIHBhbmllclxyXG4gICAgICogQHBhcmFtIHtQb3B1cH0gW29wdGlvbnMucG9wdXA9bnVsbF0gcG9wdXBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KVxyXG4gICAge1xyXG4gICAgICAgIC8vU2V0dGluZ3NcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgYnV0dG9uX2NsYXNzOiAnY2FydC1idXR0b24nLFxyXG4gICAgICAgICAgICBuYXZjYXJ0X2NsYXNzOiAnbmF2Y2FydCcsXHJcbiAgICAgICAgICAgIG5hdmNhcnRfYnV0dG9uX2NsYXNzOiAnbmF2Y2FydF9faG92ZXInLFxyXG4gICAgICAgICAgICBzaG9wcGluZ19iYWdfY2xhc3M6ICdjYXJ0LWhvdmVyJyxcclxuICAgICAgICAgICAgc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3M6ICdjYXJ0LWhvdmVyX19pdGVtJyxcclxuICAgICAgICAgICAgY2FydF9xdWFudGl0eV9jbGFzczogJ25hdmNhcnQnLFxyXG4gICAgICAgICAgICBjYXJ0X3VybDogJy9wYW5pZXIvJyxcclxuICAgICAgICAgICAgcG9wdXA6IG51bGwsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jYXJ0Q29udGVudCA9IHt9O1xyXG4gICAgICAgIHRoaXMub25TYWxlcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL0RPTSBoYW5kbGluZ1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLm9wdGlvbnMuYnV0dG9uX2NsYXNzKSk7XHJcbiAgICAgICAgdGhpcy5uYXZjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLm5hdmNhcnRfY2xhc3MpO1xyXG4gICAgICAgIHRoaXMubmF2Y2FydFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nK3RoaXMub3B0aW9ucy5uYXZjYXJ0X2J1dHRvbl9jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nK3RoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3MpO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWdRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nK3RoaXMub3B0aW9ucy5jYXJ0X3F1YW50aXR5X2NsYXNzKTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnSXRlbUJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nK3RoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcysnIC5yZW1vdmUtaXRlbScpKTtcclxuXHJcbiAgICAgICAgLy9FdmVudHNcclxuICAgICAgICB0aGlzLm5hdmNhcnRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTmF2Y2FydFRvZ2dsZUNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMsIGJ1dHRvbikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWdJdGVtQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrLmJpbmQodGhpcywgYnV0dG9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OYXZjYXJ0VG9nZ2xlQ2xpY2soZSlcclxuICAgIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdXR0b25DbGljayhidXR0b24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHNwaW5uZXIgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLmZhLXNwaW5uZXInKTtcclxuICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGxldCBhZGRlZCA9IGJ1dHRvbi5kYXRhc2V0LmFkZGVkICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHVybCA9IGFkZGVkID8gYnV0dG9uLmRhdGFzZXQucmVtb3ZlX2l0ZW1fdXJsIDogYnV0dG9uLmRhdGFzZXQuYWRkX2l0ZW1fdXJsO1xyXG4gICAgICAgIGFqYXgodXJsLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRCdXR0b25Nb2RlKGJ1dHRvbiwgYWRkZWQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uU2FsZXMgPSByZXNwb25zZS5vblNhbGVzID09PSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnQocmVzcG9uc2UuY2FydCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXAgJiYgIWFkZGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9wdXAuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHttZXRob2Q6ICdQT1NUJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvcHBpbmdCYWdCdXR0b25DbGljayhidXR0b24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS13aW5kb3ctY2xvc2UnKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmFzJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNwaW5uZXInKTtcclxuICAgICAgICBsZXQgdXJsID0gYnV0dG9uLmRhdGFzZXQucmVtb3ZlX2l0ZW1fdXJsO1xyXG4gICAgICAgIGxldCBhZGRUb0NhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1idXR0b24tJytidXR0b24uZGF0YXNldC5pdGVtX2lkKTtcclxuICAgICAgICBhamF4KHVybCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXMnKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXNwaW5uZXInKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhcicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtd2luZG93LWNsb3NlJyk7XHJcbiAgICAgICAgICAgIGlmIChhZGRUb0NhcnRCdXR0b24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRCdXR0b25Nb2RlKGFkZFRvQ2FydEJ1dHRvbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vblNhbGVzID0gcmVzcG9uc2Uub25TYWxlcyA9PT0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0KHJlc3BvbnNlLmNhcnQpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCB7bWV0aG9kOiAnUE9TVCd9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYXJ0KGpzb25SZXNwb25zZSlcclxuICAgIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRDb250ZW50ID0gSlNPTi5wYXJzZShqc29uUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY2FydENvbnRlbnQgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnRDb250ZW50ID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm1hdCBKU09OIHBhbmllciBub24gdmFsaWRlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3B1cC5yZXNldEltcG9ydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuY2FydENvbnRlbnQpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTGlzdEVsdCA9IHRoaXMuY3JlYXRlU2hvcHBpbmdCYWdJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICBsZXQgcHJpY2UgPSB0aGlzLm9uU2FsZXMgPyBpdGVtLmRpc2NvdW50UHJpY2UgOiBpdGVtLnByaWNlO1xyXG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSBwYXJzZUludChpdGVtLnF1YW50aXR5KTtcclxuICAgICAgICAgICAgdG90YWwgKz0gcXVhbnRpdHkgKiBwYXJzZUZsb2F0KHByaWNlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5hcHBlbmRDaGlsZChpdGVtTGlzdEVsdCk7XHJcbiAgICAgICAgICAgIGNvdW50ICs9IGl0ZW0ucXVhbnRpdHk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRvdGFsID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgc2hvcHBpbmdCYWdUb3RhbCA9IHRoaXMuY3JlYXRlU2hvcHBpbmdCYWdUb3RhbCh0b3RhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuYXBwZW5kQ2hpbGQoc2hvcHBpbmdCYWdUb3RhbCk7XHJcbiAgICAgICAgICAgIGxldCBjYXJ0TGlua0VsdCA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdkaXYnLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKydfX2xpbmsnKTtcclxuICAgICAgICAgICAgbGV0IGNhcnRMaW5rID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2EnLCBbJ2J0bicsICdidG4tc20nLCAnYnQtYnRuLS1wcmltYXJ5JywgJ3RleHQtbGlnaHQnXSk7XHJcbiAgICAgICAgICAgIGNhcnRMaW5rLmhyZWYgPSB0aGlzLm9wdGlvbnMuY2FydF91cmw7XHJcbiAgICAgICAgICAgIGNhcnRMaW5rLmlubmVyVGV4dCA9IHRoaXMuc2hvcHBpbmdCYWcuZGF0YXNldC5jYXJ0X2xpbmtfdGV4dDtcclxuICAgICAgICAgICAgY2FydExpbmtFbHQuYXBwZW5kQ2hpbGQoY2FydExpbmspO1xyXG4gICAgICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmFwcGVuZENoaWxkKGNhcnRMaW5rRWx0KTtcclxuICAgICAgICAgICAgdGhpcy5uYXZjYXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5uYXZjYXJ0LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWdRdWFudGl0eS5kYXRhc2V0LnF1YW50aXR5ID0gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxyXG4gICAgICogQHJldHVybiBIVE1MRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVTaG9wcGluZ0JhZ0l0ZW0oaXRlbSlcclxuICAgIHtcclxuICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdkaXYnLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MpO1xyXG4gICAgICAgIGxldCBpdGVtTGluayA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdhJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKydfX2xpbmsnKTtcclxuICAgICAgICBpdGVtTGluay5ocmVmID0gaXRlbS5saW5rO1xyXG4gICAgICAgIGl0ZW1MaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBpdGVtLm5hbWUpO1xyXG4gICAgICAgIGxldCBpdGVtSW1hZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnaW1nJyk7XHJcbiAgICAgICAgaXRlbUltYWdlLnNyYyA9IGl0ZW0uaW1hZ2VzWzBdLmNhY2hlUGF0aDtcclxuICAgICAgICBpdGVtSW1hZ2UuYWx0ID0gaXRlbS5pbWFnZXNbMF0uYWx0O1xyXG4gICAgICAgIGxldCBpdGVtUHJpY2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcygnc3BhbicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcysnX19wcmljZScpO1xyXG4gICAgICAgIGxldCBwcmljZSA9IHRoaXMub25TYWxlcyA/IGl0ZW0uZGlzY291bnRQcmljZSA6IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZnItRlInLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJ30pLmZvcm1hdChwcmljZSk7XHJcbiAgICAgICAgbGV0IGl0ZW1SZW1vdmUgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnaScsIFsncmVtb3ZlLWl0ZW0nLCAnZmFyJywgJ2ZhLXdpbmRvdy1jbG9zZSddKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLnNldEF0dHJpYnV0ZSgnZGF0YS1pdGVtX2lkJywgaXRlbS5pZCk7XHJcbiAgICAgICAgaXRlbVJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVtb3ZlX2l0ZW1fdXJsJywgaXRlbS5yZW1vdmVMaW5rKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBpdGVtUmVtb3ZlKSk7XHJcblxyXG4gICAgICAgIGl0ZW1MaW5rLmFwcGVuZENoaWxkKGl0ZW1JbWFnZSk7XHJcbiAgICAgICAgaXRlbUxpbmsuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnK2l0ZW0ubmFtZSkpO1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUxpbmspO1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZWRJdGVtID0gaXRlbUNvbnRhaW5lci5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZWRJdGVtUmVtb3ZlID0gaXRlbVJlbW92ZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGNsb25lZEl0ZW1SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2hvcHBpbmdCYWdCdXR0b25DbGljay5iaW5kKHRoaXMsIGNsb25lZEl0ZW1SZW1vdmUpKTtcclxuICAgICAgICAgICAgY2xvbmVkSXRlbS5hcHBlbmRDaGlsZChjbG9uZWRJdGVtUmVtb3ZlKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBvcHVwLmltcG9ydChjbG9uZWRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUmVtb3ZlKTtcclxuICAgICAgICByZXR1cm4gaXRlbUNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7ZmxvYXR9IHRvdGFsXHJcbiAgICAgKiBAcmV0dXJuIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVNob3BwaW5nQmFnVG90YWwodG90YWwpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHRvdGFsQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2RpdicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3MrJ19fdG90YWwnKTtcclxuICAgICAgICBsZXQgdG90YWxIZWFkaW5nID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ3NwYW4nKTtcclxuICAgICAgICB0b3RhbEhlYWRpbmcuaW5uZXJUZXh0ID0gJ1RvdGFsOic7XHJcbiAgICAgICAgbGV0IHRvdGFsQW1vdW50ID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ3NwYW4nLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKydfX3RvdGFsX19hbW91bnQnKTtcclxuICAgICAgICB0b3RhbEFtb3VudC5pbm5lclRleHQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2ZyLUZSJywge3N0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ0VVUid9KS5mb3JtYXQodG90YWwpO1xyXG4gICAgICAgIHRvdGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvdGFsSGVhZGluZyk7XHJcbiAgICAgICAgdG90YWxDb250YWluZXIuYXBwZW5kQ2hpbGQodG90YWxBbW91bnQpO1xyXG4gICAgICAgIHJldHVybiB0b3RhbENvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGFycmF5fSBjbGFzc2VzXHJcbiAgICAgKiBAcmV0dXJuIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcyh0YWcsIGNsYXNzZXMgPSBbXSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcclxuICAgICAgICAgICAgY2xhc3NlcyA9IFtjbGFzc2VzXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgICAgIGZvciAobGV0IGNsYXNzTmFtZSBvZiBjbGFzc2VzKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QnV0dG9uTW9kZShidXR0b24sIGFkZGVkKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBhZGRUZXh0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaXRlbScpO1xyXG4gICAgICAgIGxldCByZW1vdmVUZXh0ID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtaXRlbScpO1xyXG4gICAgICAgIGlmIChhZGRlZCkge1xyXG4gICAgICAgICAgICBhZGRUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICByZW1vdmVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFkZGVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgcmVtb3ZlVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1hZGRlZCcsICcnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5bG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxhenlJbWFnZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xhenlsb2FkJykpO1xyXG4gICAgICAgIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFsbEJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgdGhlIG9ic2VydmVyIHRvIGxvYWQgbGF6eSBpbWFnZXMgd2hlbiB2aWV3cG9ydCBpbiByYW5nZVxyXG4gICAgICovXHJcbiAgICBvYnNlcnZlKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbGF6eUltYWdlT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhenlJbWFnZSA9IGVudHJ5LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBsYXp5SW1hZ2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkKGxhenlJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIudW5vYnNlcnZlKGxhenlJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxhenlJbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBpbnRlcnNlY3Rpb25PYnNlcnZlciBub3Qgc3VwcG9ydGVkXHJcbiAgICAgKi9cclxuICAgIGZhbGxCYWNrKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxhenlJbWFnZXMuZm9yRWFjaCgobGF6eUltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChsYXp5SW1hZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCB0aGUgbGF6eSBpbWFnZVxyXG4gICAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50fSBsYXp5SW1hZ2VcclxuICAgICAqL1xyXG4gICAgbG9hZChsYXp5SW1hZ2UpXHJcbiAgICB7XHJcbiAgICAgICAgbGF6eUltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxhenlJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdsYXp5bG9hZCcpO1xyXG4gICAgICAgICAgICBpZiAobGF6eUltYWdlLmNsYXNzTGlzdC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGxhenlJbWFnZS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsYXp5SW1hZ2Uuc3JjID0gbGF6eUltYWdlLmRhdGFzZXQuc3JjO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvblxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvcHRpb25zLnRvZ2dsZUJ1dHRvblxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy5uYXZDb250ZW50XHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW29wdGlvbnMuc2hvd0NsYXNzPXNob3ddXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmNvbGxhcHNlT25PdXRlckNsaWNrPXRydWVdXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uOiBudWxsLFxyXG4gICAgICAgICAgICBuYXZDb250ZW50OiBudWxsLFxyXG4gICAgICAgICAgICBzaG93Q2xhc3M6ICdzaG93JyxcclxuICAgICAgICAgICAgY29sbGFwc2VPbk91dGVyQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGlmICghKHRoaXMub3B0aW9ucy50b2dnbGVCdXR0b24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0aGlzLm9wdGlvbnMubmF2Q29udGVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQYXJhbcOodHJlcyBpbmNvcnJlY3RzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucy50b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVG9nZ2xlQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb2xsYXBzZU9uT3V0ZXJDbGljaykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdXRlckNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvZ2dsZUJ1dHRvbkNsaWNrKClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5hdkNvbnRlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMub3B0aW9ucy5zaG93Q2xhc3MpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5uYXZDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLnNob3dDbGFzcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm5hdkNvbnRlbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbnMuc2hvd0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25PdXRlckNsaWNrKGUpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgICAgICBsZXQgaXNUb2dnbGVFbHQgPSBlbGVtZW50ID09PSB0aGlzLm9wdGlvbnMudG9nZ2xlQnV0dG9uO1xyXG4gICAgICAgIHdoaWxlKGVsZW1lbnQgJiYgIWlzVG9nZ2xlRWx0KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGlzVG9nZ2xlRWx0ID0gZWxlbWVudCA9PT0gdGhpcy5vcHRpb25zLnRvZ2dsZUJ1dHRvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1RvZ2dsZUVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubmF2Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5zaG93Q2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBhamF4IGZyb20gXCIuLi9mdW5jdGlvbnMvX2FqYXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBjYWxsYmFjayBhamF4Q2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxyXG4gICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHt7ZWxlbWVudDogSFRNTEVsZW1lbnQsIHVybDogc3RyaW5nLCBjYWxsYmFjazogYWpheENhbGxiYWNrLCBkYXRhczogT2JqZWN0fVtdfSBvcHRpb25zLmJ1dHRvbnNcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5kaXNwbGF5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSlcclxuICAgIHtcclxuICAgICAgICAvL09wdGlvbnNcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgYnV0dG9uczogW10sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vR2VzdGlvbiBkdSBET01cclxuICAgICAgICB0aGlzLnBvcHVwID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLnNldE92ZXJsYXkoKTtcclxuICAgICAgICB0aGlzLmNsb3NlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZmFzLmZhLXRpbWVzLWNpcmNsZScpO1xyXG4gICAgICAgIHRoaXMuaW1wb3J0RWx0ID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0Jyk7XHJcblxyXG4gICAgICAgIC8vR2VzdGlvbiBkZXMgZXZlbmVtZW50c1xyXG4gICAgICAgIGlmICh0aGlzLmNsb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3ZlcmxheUNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblBvcHVwQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk92ZXJsYXlDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRCdXR0b25FdmVudChidXR0b24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE92ZXJsYXkoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnNldFN0eWxlcyhvdmVybGF5LCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjcpJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICAgICAgekluZGV4OiAnOTk5JyxcclxuICAgICAgICAgICAgZGlzcGxheTogdGhpcy5vcHRpb25zLmRpc3BsYXkgPyAnZmxleCcgOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwKTtcclxuICAgICAgICB0aGlzLmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gb3ZlcmxheTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGxpcXVlIGRlcyBzdHlsZXMgQ1NTIMOgIHVuIMOpbMOpbWVudCBIVE1MXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzXHJcbiAgICAgKi9cclxuICAgIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpXHJcbiAgICB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHN0eWxlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbk92ZXJsYXlDbGljaygpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5ib2R5LnJlbW92ZUNoaWxkKHRoaXMub3ZlcmxheSk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qb3B1cENsaWNrKGUpXHJcbiAgICB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBidXR0b25cclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvbi5lbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uLnVybFxyXG4gICAgICogQHBhcmFtIHthamF4Q2FsbGJhY2t9IGJ1dHRvbi5jYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJ1dHRvbi5kYXRhc1xyXG4gICAgICovXHJcbiAgICBzZXRCdXR0b25FdmVudChidXR0b24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFidXR0b24uZGF0YXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmRhdGFzID0ge31cclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uZWxlbWVudC5kYXRhc2V0LmNhbmNlbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheUNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhamF4KGJ1dHRvbi51cmwsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidXR0b24uY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlDbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfSwge21ldGhvZDogJ1BPU1QnLCBkYXRhczogYnV0dG9uLmRhdGFzfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnQoZWxlbWVudClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pbXBvcnRFbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBvcnRFbHQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0SW1wb3J0KClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pbXBvcnRFbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBvcnRFbHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0nKTtcclxuICAgICAgICB0aGlzLnNlYXJjaFRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLXRyaWdnZXInKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1pbnB1dCcpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1idXR0b24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlYXJjaFRyaWdnZXJDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dGVyQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2hUcmlnZ2VyQ2xpY2soKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGhhc1NlYXJjaFJlcXVlc3QgPSB0aGlzLnNlYXJjaElucHV0LnZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoRm9ybS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcclxuICAgICAgICAgICAgaWYgKGhhc1NlYXJjaFJlcXVlc3QpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25PdXRlckNsaWNrKGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLnNlYXJjaFRyaWdnZXIgfHwgZS50YXJnZXQgPT09IHRoaXMuc2VhcmNoSW5wdXQgfHwgZS50YXJnZXQgPT09IHRoaXMuc2VhcmNoQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGEgZ2xvYmFsIG1lbWJlci5cclxuICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IHJlc3BvbnNlTWVzc2FnZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAqIEBwYXJhbSB7YWpheENhbGxiYWNrfSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubWV0aG9kPUdFVF1cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRhdGFzPXt9XVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmpzb249dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXgodXJsLCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9KVxyXG57XHJcbiAgICAvL1NldHRpbmdzXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBkYXRhczoge30sXHJcbiAgICAgICAganNvbjogdHJ1ZSxcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCBmb3JtRGF0YSA9IG51bGw7XHJcbiAgICBsZXQgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YXMpO1xyXG4gICAgaWYgKHByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocHJvcGVydHksIG9wdGlvbnMuZGF0YXNbcHJvcGVydHldKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgJiYgeGhyLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWNoZWMgSFRUUCA6IGNvZGUnLnhoci5zdGF0dXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm1hdCBKU09OIGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=