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
      if (e.target === this.searchTrigger || e.target === this.searchInput) {
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

/***/ }),

/***/ "./node_modules/core-js/internals/array-from.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.github.io/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var slice = [].slice;
var factories = {};

var construct = function (C, argsLength, args) {
  if (!(argsLength in factories)) {
    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
  } return factories[argsLength](C, args);
};

// `Function.prototype.bind` method implementation
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = slice.call(arguments, 1);
  var boundFunction = function bound(/* args... */) {
    var args = partArgs.concat(slice.call(arguments));
    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
  };
  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
  return boundFunction;
};


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseFloat = global.parseFloat;
var FORCED = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
module.exports = FORCED ? function parseFloat(string) {
  var trimmedString = trim(String(string));
  var result = $parseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/internals/number-parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/number-parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.github.io/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.github.io/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.bind.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.bind.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var bind = __webpack_require__(/*! ../internals/function-bind */ "./node_modules/core-js/internals/function-bind.js");

// `Function.prototype.bind` method
// https://tc39.github.io/ecma262/#sec-function.prototype.bind
$({ target: 'Function', proto: true }, {
  bind: bind
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.define-property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $values = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").values;

// `Object.values` method
// https://tc39.github.io/ecma262/#sec-object.values
$({ target: 'Object', stat: true }, {
  values: function values(O) {
    return $values(O);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseFloatImplementation = __webpack_require__(/*! ../internals/number-parse-float */ "./node_modules/core-js/internals/number-parse-float.js");

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
$({ global: true, forced: parseFloat != parseFloatImplementation }, {
  parseFloat: parseFloatImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.link` method
// https://tc39.github.io/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ })

},[["./assets/js/app.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile","vendors~app~app_blog_article~app_shop_index~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fTGF6eWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1odG1sLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmxpbmsuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkxhenlsb2FkZXIiLCJjYXJ0UG9wdXAiLCJnZXRFbGVtZW50QnlJZCIsInBvcHVwIiwiUG9wdXAiLCJidXR0b25zIiwiZWxlbWVudCIsImRpc3BsYXkiLCJDYXJ0IiwiU2VhcmNoIiwiTmF2aWdhdGlvbiIsInRvZ2dsZUJ1dHRvbiIsIm5hdkNvbnRlbnQiLCJjb2xsYXBzZU9uT3V0ZXJDbGljayIsIndvbWFuVG9nZ2xlIiwibWFuVG9nZ2xlIiwibmF2IiwiWU9mZnNldCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImJ1dHRvbl9jbGFzcyIsIm5hdmNhcnRfY2xhc3MiLCJuYXZjYXJ0X2J1dHRvbl9jbGFzcyIsInNob3BwaW5nX2JhZ19jbGFzcyIsInNob3BwaW5nX2JhZ19pdGVtX2NsYXNzIiwiY2FydF9xdWFudGl0eV9jbGFzcyIsImNhcnRfdXJsIiwicHJvY2Vzc2luZyIsImNhcnRDb250ZW50Iiwib25TYWxlcyIsInNsaWNlIiwiY2FsbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJuYXZjYXJ0IiwicXVlcnlTZWxlY3RvciIsIm5hdmNhcnRUb2dnbGUiLCJzaG9wcGluZ0JhZyIsInNob3BwaW5nQmFnUXVhbnRpdHkiLCJzaG9wcGluZ0JhZ0l0ZW1CdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsIm9uTmF2Y2FydFRvZ2dsZUNsaWNrIiwiYmluZCIsImZvckVhY2giLCJidXR0b24iLCJvbkJ1dHRvbkNsaWNrIiwib25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3Bpbm5lciIsImFkZGVkIiwiZGF0YXNldCIsInVuZGVmaW5lZCIsInVybCIsInJlbW92ZV9pdGVtX3VybCIsImFkZF9pdGVtX3VybCIsImFqYXgiLCJyZXNwb25zZSIsInNldEJ1dHRvbk1vZGUiLCJ1cGRhdGVDYXJ0IiwiY2FydCIsImJsdXIiLCJzaG93IiwibWV0aG9kIiwiYWRkVG9DYXJ0QnV0dG9uIiwiaXRlbV9pZCIsIkhUTUxFbGVtZW50IiwianNvblJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImVycm9yIiwiaW5uZXJIVE1MIiwiY291bnQiLCJ0b3RhbCIsInJlc2V0SW1wb3J0IiwidmFsdWVzIiwiaXRlbSIsIml0ZW1MaXN0RWx0IiwiY3JlYXRlU2hvcHBpbmdCYWdJdGVtIiwicHJpY2UiLCJkaXNjb3VudFByaWNlIiwicXVhbnRpdHkiLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJhcHBlbmRDaGlsZCIsInNob3BwaW5nQmFnVG90YWwiLCJjcmVhdGVTaG9wcGluZ0JhZ1RvdGFsIiwiY2FydExpbmtFbHQiLCJjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMiLCJjYXJ0TGluayIsImhyZWYiLCJpbm5lclRleHQiLCJjYXJ0X2xpbmtfdGV4dCIsIml0ZW1Db250YWluZXIiLCJpdGVtTGluayIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwiaXRlbUltYWdlIiwic3JjIiwiaW1hZ2VzIiwiY2FjaGVQYXRoIiwiYWx0IiwiaXRlbVByaWNlIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJpdGVtUmVtb3ZlIiwiaWQiLCJyZW1vdmVMaW5rIiwiY3JlYXRlVGV4dE5vZGUiLCJjbG9uZWRJdGVtIiwiY2xvbmVOb2RlIiwiY2xvbmVkSXRlbVJlbW92ZSIsInRvdGFsQ29udGFpbmVyIiwidG90YWxIZWFkaW5nIiwidG90YWxBbW91bnQiLCJ0YWciLCJjbGFzc2VzIiwiQXJyYXkiLCJpc0FycmF5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFkZFRleHQiLCJyZW1vdmVUZXh0IiwicmVtb3ZlQXR0cmlidXRlIiwibGF6eUltYWdlcyIsIm9ic2VydmUiLCJmYWxsQmFjayIsImxhenlJbWFnZU9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJsYXp5SW1hZ2UiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsIkhUTUxJbWFnZUVsZW1lbnQiLCJsb2FkIiwidW5vYnNlcnZlIiwiaW1hZ2UiLCJsZW5ndGgiLCJzaG93Q2xhc3MiLCJvblRvZ2dsZUJ1dHRvbkNsaWNrIiwib25PdXRlckNsaWNrIiwiY29udGFpbnMiLCJpc1RvZ2dsZUVsdCIsInBhcmVudE5vZGUiLCJzZXRPdmVybGF5IiwiY2xvc2UiLCJpbXBvcnRFbHQiLCJvbk92ZXJsYXlDbGljayIsIm9uUG9wdXBDbGljayIsIm92ZXJsYXkiLCJzZXRCdXR0b25FdmVudCIsInNldFN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9keSIsInN0eWxlcyIsImtleXMiLCJwcm9wZXJ0eSIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzIiwiY2FuY2VsIiwiY2FsbGJhY2siLCJzZWFyY2hGb3JtIiwic2VhcmNoVHJpZ2dlciIsInNlYXJjaElucHV0Iiwic2VhcmNoQnV0dG9uIiwib25TZWFyY2hUcmlnZ2VyQ2xpY2siLCJoYXNTZWFyY2hSZXF1ZXN0IiwidmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiTW91c2VFdmVudCIsImpzb24iLCJmb3JtRGF0YSIsInByb3BlcnRpZXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInN0YXR1cyIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQUEsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFQLEMsQ0FFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBSUMseURBQUo7QUFDQSxNQUFNQyxTQUFTLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixtQkFBeEIsQ0FBbEI7O0FBQ0EsTUFBSUQsU0FBSixFQUFlO0FBQ1gsUUFBTUUsS0FBSyxHQUFHLElBQUlDLG9EQUFKLENBQVVILFNBQVYsRUFBcUI7QUFDL0JJLGFBQU8sRUFBRSxDQUNMO0FBQ0lDLGVBQU8sRUFBRVIsUUFBUSxDQUFDSSxjQUFULENBQXdCLG1CQUF4QjtBQURiLE9BREssQ0FEc0I7QUFNL0JLLGFBQU8sRUFBRTtBQU5zQixLQUFyQixDQUFkO0FBUUEsUUFBSUMsbURBQUosQ0FBUztBQUFFTCxXQUFLLEVBQUxBO0FBQUYsS0FBVDtBQUNILEdBVkQsTUFVTztBQUNILFFBQUlLLG1EQUFKO0FBQ0g7O0FBQ0QsTUFBSUMscURBQUo7QUFDQSxNQUFJQyx5REFBSixDQUFlO0FBQ1hDLGdCQUFZLEVB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Q0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMscUZBQTRCOztBQUUvQztBQUNBO0FBQ0EsR0FBRyxrQ0FBa0M7QUFDckM7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNQRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxpQ0FBaUMsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRTlFO0FBQ0E7QUFDQSxHQUFHLHlFQUF5RTtBQUM1RTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1JELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsY0FBYyxtQkFBTyxDQUFDLHlGQUE4Qjs7QUFFcEQ7QUFDQTtBQUNBLEdBQUcsK0JBQStCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1RELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsK0JBQStCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV4RTtBQUNBO0FBQ0EsR0FBRywrREFBK0Q7QUFDbEU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNQRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLDZCQUE2QixtQkFBTyxDQUFDLDJGQUErQjs7QUFFcEU7QUFDQTtBQUNBLEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1BZO0FBQ2IsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxpQkFBaUIsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDbkQsNkJBQTZCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUV0RTtBQUNBO0FBQ0EsR0FBRyx3RUFBd0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcclxuXHJcbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cclxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuaW1wb3J0IExhenlsb2FkZXIgZnJvbSBcIi4vY2xhc3MvX0xhenlsb2FkZXJcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4vY2xhc3MvX0NhcnRcIjtcclxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL2NsYXNzL19Qb3B1cFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL2NsYXNzL19TZWFyY2hcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4vY2xhc3MvX05hdmlnYXRpb25cIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBuZXcgTGF6eWxvYWRlcigpO1xyXG4gICAgY29uc3QgY2FydFBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10by1jYXJ0LXBvcHVwJyk7XHJcbiAgICBpZiAoY2FydFBvcHVwKSB7XHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBuZXcgUG9wdXAoY2FydFBvcHVwLCB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGludWUtc2hvcHBpbmcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBDYXJ0KHsgcG9wdXAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3IENhcnQoKTtcclxuICAgIH1cclxuICAgIG5ldyBTZWFyY2goKTtcclxuICAgIG5ldyBOYXZpZ2F0aW9uKHtcclxuICAgICAgICB0b2dnbGVCdXR0b246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZiYXJUb2dnbGUnKSxcclxuICAgICAgICBuYXZDb250ZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyQ29udGVudCcpLFxyXG4gICAgICAgIGNvbGxhcHNlT25PdXRlckNsaWNrOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgd29tYW5Ub2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29tYW5Ub2dnbGUnKTtcclxuICAgIG5ldyBOYXZpZ2F0aW9uKHt0b2dnbGVCdXR0b246IHdvbWFuVG9nZ2xlLCBuYXZDb250ZW50OiB3b21hblRvZ2dsZX0pO1xyXG4gICAgY29uc3QgbWFuVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hblRvZ2dsZScpO1xyXG4gICAgbmV3IE5hdmlnYXRpb24oe3RvZ2dsZUJ1dHRvbjogbWFuVG9nZ2xlLCBuYXZDb250ZW50OiBtYW5Ub2dnbGV9KTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidC1uYXZiYXInKTtcclxuICAgIGxldCBZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gWU9mZnNldCkge1xyXG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFlPZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICB9KTtcclxufSk7XHJcbiIsImltcG9ydCBhamF4IGZyb20gXCIuLi9mdW5jdGlvbnMvX2FqYXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmJ1dHRvbl9jbGFzcz1jYXJ0LWJ1dHRvbl0gQ2xhc3NlIENTUyBkZXMgYm91dG9ucyBkJ2Fqb3V0IGF1IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm5hdmNhcnRfY2xhc3M9bmF2Y2FydF0gQ2xhc3NlIENTUyBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm5hdmNhcnRfYnV0dG9uX2NsYXNzPW5hdmNhcnRfX2hvdmVyXSBDbGFzc2UgQ1NTIGR1IGJvdXRvbiBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcz1jYXJ0LWhvdmVyXSBDbGFzc2UgQ1NTIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3M9Y2FydC1ob3Zlcl9faXRlbV0gQ2xhc3NlIENTUyBkZXMgaXRlbXMgZHUgbWVudSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYXJ0X3F1YW50aXR5X2NsYXNzPW5hdmNhcnRdIENsYXNzZSBDU1MgcXVhbnRpdMOpIGRhbnMgbGUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FydF91cmw9L3Bhbmllci9dIExpZW4gdmVycyBsZSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7UG9wdXB9IFtvcHRpb25zLnBvcHVwPW51bGxdIHBvcHVwXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSlcclxuICAgIHtcclxuICAgICAgICAvL1NldHRpbmdzXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIGJ1dHRvbl9jbGFzczogJ2NhcnQtYnV0dG9uJyxcclxuICAgICAgICAgICAgbmF2Y2FydF9jbGFzczogJ25hdmNhcnQnLFxyXG4gICAgICAgICAgICBuYXZjYXJ0X2J1dHRvbl9jbGFzczogJ25hdmNhcnRfX2hvdmVyJyxcclxuICAgICAgICAgICAgc2hvcHBpbmdfYmFnX2NsYXNzOiAnY2FydC1ob3ZlcicsXHJcbiAgICAgICAgICAgIHNob3BwaW5nX2JhZ19pdGVtX2NsYXNzOiAnY2FydC1ob3Zlcl9faXRlbScsXHJcbiAgICAgICAgICAgIGNhcnRfcXVhbnRpdHlfY2xhc3M6ICduYXZjYXJ0JyxcclxuICAgICAgICAgICAgY2FydF91cmw6ICcvcGFuaWVyLycsXHJcbiAgICAgICAgICAgIHBvcHVwOiBudWxsLFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSB7fTtcclxuICAgICAgICB0aGlzLm9uU2FsZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9ET00gaGFuZGxpbmdcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5vcHRpb25zLmJ1dHRvbl9jbGFzcykpO1xyXG4gICAgICAgIHRoaXMubmF2Y2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nK3RoaXMub3B0aW9ucy5uYXZjYXJ0X2NsYXNzKTtcclxuICAgICAgICB0aGlzLm5hdmNhcnRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMubmF2Y2FydF9idXR0b25fY2xhc3MpO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnUXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMuY2FydF9xdWFudGl0eV9jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ0l0ZW1CdXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyt0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJyAucmVtb3ZlLWl0ZW0nKSk7XHJcblxyXG4gICAgICAgIC8vRXZlbnRzXHJcbiAgICAgICAgdGhpcy5uYXZjYXJ0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk5hdmNhcnRUb2dnbGVDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBidXR0b24pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnSXRlbUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2hvcHBpbmdCYWdCdXR0b25DbGljay5iaW5kKHRoaXMsIGJ1dHRvbikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmF2Y2FydFRvZ2dsZUNsaWNrKGUpXHJcbiAgICB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnV0dG9uQ2xpY2soYnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCBzcGlubmVyID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5mYS1zcGlubmVyJyk7XHJcbiAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBsZXQgYWRkZWQgPSBidXR0b24uZGF0YXNldC5hZGRlZCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCB1cmwgPSBhZGRlZCA/IGJ1dHRvbi5kYXRhc2V0LnJlbW92ZV9pdGVtX3VybCA6IGJ1dHRvbi5kYXRhc2V0LmFkZF9pdGVtX3VybDtcclxuICAgICAgICBhamF4KHVybCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uTW9kZShidXR0b24sIGFkZGVkKTtcclxuICAgICAgICAgICAgdGhpcy5vblNhbGVzID0gcmVzcG9uc2Uub25TYWxlcyA9PT0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0KHJlc3BvbnNlLmNhcnQpO1xyXG4gICAgICAgICAgICBidXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwICYmICFhZGRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBvcHVwLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCB7bWV0aG9kOiAnUE9TVCd9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3BwaW5nQmFnQnV0dG9uQ2xpY2soYnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXInKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtd2luZG93LWNsb3NlJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhcycpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1zcGlubmVyJyk7XHJcbiAgICAgICAgbGV0IHVybCA9IGJ1dHRvbi5kYXRhc2V0LnJlbW92ZV9pdGVtX3VybDtcclxuICAgICAgICBsZXQgYWRkVG9DYXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYnV0dG9uLScrYnV0dG9uLmRhdGFzZXQuaXRlbV9pZCk7XHJcbiAgICAgICAgYWpheCh1cmwsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmFzJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1zcGlubmVyJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYXInKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLXdpbmRvdy1jbG9zZScpO1xyXG4gICAgICAgICAgICBpZiAoYWRkVG9DYXJ0QnV0dG9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uTW9kZShhZGRUb0NhcnRCdXR0b24sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25TYWxlcyA9IHJlc3BvbnNlLm9uU2FsZXMgPT09IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydChyZXNwb25zZS5jYXJ0KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwge21ldGhvZDogJ1BPU1QnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydChqc29uUmVzcG9uc2UpXHJcbiAgICB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0Q29udGVudCA9IEpTT04ucGFyc2UoanNvblJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNhcnRDb250ZW50ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJ0Q29udGVudCA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtYXQgSlNPTiBwYW5pZXIgbm9uIHZhbGlkZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9wdXAucmVzZXRJbXBvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNhcnRDb250ZW50KS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUxpc3RFbHQgPSB0aGlzLmNyZWF0ZVNob3BwaW5nQmFnSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgbGV0IHByaWNlID0gdGhpcy5vblNhbGVzID8gaXRlbS5kaXNjb3VudFByaWNlIDogaXRlbS5wcmljZTtcclxuICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gcGFyc2VJbnQoaXRlbS5xdWFudGl0eSk7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IHF1YW50aXR5ICogcGFyc2VGbG9hdChwcmljZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuYXBwZW5kQ2hpbGQoaXRlbUxpc3RFbHQpO1xyXG4gICAgICAgICAgICBjb3VudCArPSBpdGVtLnF1YW50aXR5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0b3RhbCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHNob3BwaW5nQmFnVG90YWwgPSB0aGlzLmNyZWF0ZVNob3BwaW5nQmFnVG90YWwodG90YWwpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmFwcGVuZENoaWxkKHNob3BwaW5nQmFnVG90YWwpO1xyXG4gICAgICAgICAgICBsZXQgY2FydExpbmtFbHQgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnZGl2JywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcysnX19saW5rJyk7XHJcbiAgICAgICAgICAgIGxldCBjYXJ0TGluayA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdhJywgWydidG4nLCAnYnRuLXNtJywgJ2J0LWJ0bi0tcHJpbWFyeScsICd0ZXh0LWxpZ2h0J10pO1xyXG4gICAgICAgICAgICBjYXJ0TGluay5ocmVmID0gdGhpcy5vcHRpb25zLmNhcnRfdXJsO1xyXG4gICAgICAgICAgICBjYXJ0TGluay5pbm5lclRleHQgPSB0aGlzLnNob3BwaW5nQmFnLmRhdGFzZXQuY2FydF9saW5rX3RleHQ7XHJcbiAgICAgICAgICAgIGNhcnRMaW5rRWx0LmFwcGVuZENoaWxkKGNhcnRMaW5rKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5hcHBlbmRDaGlsZChjYXJ0TGlua0VsdCk7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Y2FydC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Y2FydC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnUXVhbnRpdHkuZGF0YXNldC5xdWFudGl0eSA9IGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuICAgICAqIEByZXR1cm4gSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU2hvcHBpbmdCYWdJdGVtKGl0ZW0pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnZGl2JywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKTtcclxuICAgICAgICBsZXQgaXRlbUxpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnYScsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcysnX19saW5rJyk7XHJcbiAgICAgICAgaXRlbUxpbmsuaHJlZiA9IGl0ZW0ubGluaztcclxuICAgICAgICBpdGVtTGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaXRlbS5uYW1lKTtcclxuICAgICAgICBsZXQgaXRlbUltYWdlID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2ltZycpO1xyXG4gICAgICAgIGl0ZW1JbWFnZS5zcmMgPSBpdGVtLmltYWdlc1swXS5jYWNoZVBhdGg7XHJcbiAgICAgICAgaXRlbUltYWdlLmFsdCA9IGl0ZW0uaW1hZ2VzWzBdLmFsdDtcclxuICAgICAgICBsZXQgaXRlbVByaWNlID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ3NwYW4nLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJ19fcHJpY2UnKTtcclxuICAgICAgICBsZXQgcHJpY2UgPSB0aGlzLm9uU2FsZXMgPyBpdGVtLmRpc2NvdW50UHJpY2UgOiBpdGVtLnByaWNlO1xyXG4gICAgICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2ZyLUZSJywge3N0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ0VVUid9KS5mb3JtYXQocHJpY2UpO1xyXG4gICAgICAgIGxldCBpdGVtUmVtb3ZlID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2knLCBbJ3JlbW92ZS1pdGVtJywgJ2ZhcicsICdmYS13aW5kb3ctY2xvc2UnXSk7XHJcbiAgICAgICAgaXRlbVJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaXRlbV9pZCcsIGl0ZW0uaWQpO1xyXG4gICAgICAgIGl0ZW1SZW1vdmUuc2V0QXR0cmlidXRlKCdkYXRhLXJlbW92ZV9pdGVtX3VybCcsIGl0ZW0ucmVtb3ZlTGluayk7XHJcbiAgICAgICAgaXRlbVJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrLmJpbmQodGhpcywgaXRlbVJlbW92ZSkpO1xyXG5cclxuICAgICAgICBpdGVtTGluay5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xyXG4gICAgICAgIGl0ZW1MaW5rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJytpdGVtLm5hbWUpKTtcclxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1MaW5rKTtcclxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCkge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVkSXRlbSA9IGl0ZW1Db250YWluZXIuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVkSXRlbVJlbW92ZSA9IGl0ZW1SZW1vdmUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBjbG9uZWRJdGVtUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBjbG9uZWRJdGVtUmVtb3ZlKSk7XHJcbiAgICAgICAgICAgIGNsb25lZEl0ZW0uYXBwZW5kQ2hpbGQoY2xvbmVkSXRlbVJlbW92ZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3B1cC5pbXBvcnQoY2xvbmVkSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVJlbW92ZSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1Db250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSB0b3RhbFxyXG4gICAgICogQHJldHVybiBIVE1MRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVTaG9wcGluZ0JhZ1RvdGFsKHRvdGFsKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3RhbENvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdkaXYnLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKydfX3RvdGFsJyk7XHJcbiAgICAgICAgbGV0IHRvdGFsSGVhZGluZyA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJyk7XHJcbiAgICAgICAgdG90YWxIZWFkaW5nLmlubmVyVGV4dCA9ICdUb3RhbDonO1xyXG4gICAgICAgIGxldCB0b3RhbEFtb3VudCA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcysnX190b3RhbF9fYW1vdW50Jyk7XHJcbiAgICAgICAgdG90YWxBbW91bnQuaW5uZXJUZXh0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdmci1GUicsIHtzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdFVVInfSkuZm9ybWF0KHRvdGFsKTtcclxuICAgICAgICB0b3RhbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3RhbEhlYWRpbmcpO1xyXG4gICAgICAgIHRvdGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvdGFsQW1vdW50KTtcclxuICAgICAgICByZXR1cm4gdG90YWxDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gY2xhc3Nlc1xyXG4gICAgICogQHJldHVybiBIVE1MRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzZXModGFnLCBjbGFzc2VzID0gW10pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNsYXNzZXMpKSB7XHJcbiAgICAgICAgICAgIGNsYXNzZXMgPSBbY2xhc3Nlc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgICAgICBmb3IgKGxldCBjbGFzc05hbWUgb2YgY2xhc3Nlcykge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJ1dHRvbk1vZGUoYnV0dG9uLCBhZGRlZClcclxuICAgIHtcclxuICAgICAgICBsZXQgYWRkVGV4dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0nKTtcclxuICAgICAgICBsZXQgcmVtb3ZlVGV4dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWl0ZW0nKTtcclxuICAgICAgICBpZiAoYWRkZWQpIHtcclxuICAgICAgICAgICAgYWRkVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgcmVtb3ZlVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hZGRlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZFRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZVRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWRkZWQnLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eWxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXp5bG9hZCcpKTtcclxuICAgICAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSBvYnNlcnZlciB0byBsb2FkIGxhenkgaW1hZ2VzIHdoZW4gdmlld3BvcnQgaW4gcmFuZ2VcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXp5SW1hZ2UgPSBlbnRyeS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgbGF6eUltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZChsYXp5SW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShsYXp5SW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgbm90IHN1cHBvcnRlZFxyXG4gICAgICovXHJcbiAgICBmYWxsQmFjaygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzLmZvckVhY2goKGxhenlJbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQobGF6eUltYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgdGhlIGxhenkgaW1hZ2VcclxuICAgICAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gbGF6eUltYWdlXHJcbiAgICAgKi9cclxuICAgIGxvYWQobGF6eUltYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxhenlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsYXp5SW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eWxvYWQnKTtcclxuICAgICAgICAgICAgaWYgKGxhenlJbWFnZS5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsYXp5SW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGF6eUltYWdlLnNyYyA9IGxhenlJbWFnZS5kYXRhc2V0LnNyYztcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25cclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gb3B0aW9ucy50b2dnbGVCdXR0b25cclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9wdGlvbnMubmF2Q29udGVudFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtvcHRpb25zLnNob3dDbGFzcz1zaG93XVxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5jb2xsYXBzZU9uT3V0ZXJDbGljaz10cnVlXVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ1dHRvbjogbnVsbCxcclxuICAgICAgICAgICAgbmF2Q29udGVudDogbnVsbCxcclxuICAgICAgICAgICAgc2hvd0NsYXNzOiAnc2hvdycsXHJcbiAgICAgICAgICAgIGNvbGxhcHNlT25PdXRlckNsaWNrOiB0cnVlLFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICBpZiAoISh0aGlzLm9wdGlvbnMudG9nZ2xlQnV0dG9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgdGhpcy5vcHRpb25zLm5hdkNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGFyYW3DqHRyZXMgaW5jb3JyZWN0cycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMudG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRvZ2dsZUJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29sbGFwc2VPbk91dGVyQ2xpY2spIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0ZXJDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2dnbGVCdXR0b25DbGljaygpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5uYXZDb250ZW50LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLm9wdGlvbnMuc2hvd0NsYXNzKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubmF2Q29udGVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5zaG93Q2xhc3MpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5uYXZDb250ZW50LmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLnNob3dDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3V0ZXJDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgbGV0IGlzVG9nZ2xlRWx0ID0gZWxlbWVudCA9PT0gdGhpcy5vcHRpb25zLnRvZ2dsZUJ1dHRvbjtcclxuICAgICAgICB3aGlsZShlbGVtZW50ICYmICFpc1RvZ2dsZUVsdCkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBpc1RvZ2dsZUVsdCA9IGVsZW1lbnQgPT09IHRoaXMub3B0aW9ucy50b2dnbGVCdXR0b247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaXNUb2dnbGVFbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm5hdkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMuc2hvd0NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgYWpheCBmcm9tIFwiLi4vZnVuY3Rpb25zL19hamF4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAY2FsbGJhY2sgYWpheENhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7e2VsZW1lbnQ6IEhUTUxFbGVtZW50LCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IGFqYXhDYWxsYmFjaywgZGF0YXM6IE9iamVjdH1bXX0gb3B0aW9ucy5idXR0b25zXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuZGlzcGxheVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgLy9PcHRpb25zXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtdLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICAvL0dlc3Rpb24gZHUgRE9NXHJcbiAgICAgICAgdGhpcy5wb3B1cCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5zZXRPdmVybGF5KCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZhcy5mYS10aW1lcy1jaXJjbGUnKTtcclxuICAgICAgICB0aGlzLmltcG9ydEVsdCA9IHRoaXMucG9wdXAucXVlcnlTZWxlY3RvcignLmltcG9ydCcpO1xyXG5cclxuICAgICAgICAvL0dlc3Rpb24gZGVzIGV2ZW5lbWVudHNcclxuICAgICAgICBpZiAodGhpcy5jbG9zZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk92ZXJsYXlDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Qb3B1cENsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdmVybGF5Q2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uRXZlbnQoYnV0dG9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPdmVybGF5KClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdHlsZXMob3ZlcmxheSwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLC43KScsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgIHpJbmRleDogJzk5OScsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMub3B0aW9ucy5kaXNwbGF5ID8gJ2ZsZXgnIDogJ25vbmUnLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQodGhpcy5wb3B1cCk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheSA9IG92ZXJsYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaXF1ZSBkZXMgc3R5bGVzIENTUyDDoCB1biDDqWzDqW1lbnQgSFRNTFxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlc1xyXG4gICAgICovXHJcbiAgICBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKVxyXG4gICAge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSBzdHlsZXNbcHJvcGVydHldO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25PdmVybGF5Q2xpY2soKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm92ZXJsYXkpO1xyXG4gICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUG9wdXBDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYnV0dG9uXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBidXR0b24uZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvbi51cmxcclxuICAgICAqIEBwYXJhbSB7YWpheENhbGxiYWNrfSBidXR0b24uY2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBidXR0b24uZGF0YXNcclxuICAgICAqL1xyXG4gICAgc2V0QnV0dG9uRXZlbnQoYnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghYnV0dG9uLmRhdGFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5kYXRhcyA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbi5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmVsZW1lbnQuZGF0YXNldC5jYW5jZWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlDbGljaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWpheChidXR0b24udXJsLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25PdmVybGF5Q2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH0sIHttZXRob2Q6ICdQT1NUJywgZGF0YXM6IGJ1dHRvbi5kYXRhc30pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9XHJcblxyXG4gICAgaW1wb3J0KGVsZW1lbnQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1wb3J0RWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1wb3J0RWx0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldEltcG9ydCgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW1wb3J0RWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1wb3J0RWx0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC1mb3JtJyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaC10cmlnZ2VyJyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWFyY2hUcmlnZ2VyQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdXRlckNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoVHJpZ2dlckNsaWNrKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBoYXNTZWFyY2hSZXF1ZXN0ID0gdGhpcy5zZWFyY2hJbnB1dC52YWx1ZS5sZW5ndGggPiAwO1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEZvcm0uY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XHJcbiAgICAgICAgICAgIGlmIChoYXNTZWFyY2hSZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3V0ZXJDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hUcmlnZ2VyIHx8IGUudGFyZ2V0ID09PSB0aGlzLnNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGEgZ2xvYmFsIG1lbWJlci5cclxuICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IHJlc3BvbnNlTWVzc2FnZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAqIEBwYXJhbSB7YWpheENhbGxiYWNrfSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubWV0aG9kPUdFVF1cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRhdGFzPXt9XVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmpzb249dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXgodXJsLCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9KVxyXG57XHJcbiAgICAvL1NldHRpbmdzXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBkYXRhczoge30sXHJcbiAgICAgICAganNvbjogdHJ1ZSxcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCBmb3JtRGF0YSA9IG51bGw7XHJcbiAgICBsZXQgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YXMpO1xyXG4gICAgaWYgKHByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocHJvcGVydHksIG9wdGlvbnMuZGF0YXNbcHJvcGVydHldKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgJiYgeGhyLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWNoZWMgSFRUUCA6IGNvZGUnLnhoci5zdGF0dXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm1hdCBKU09OIGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxufSIsIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgbWFwZm4gPSBhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yLCBuZXh0LCB2YWx1ZTtcbiAgaWYgKG1hcHBpbmcpIG1hcGZuID0gYmluZChtYXBmbiwgYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gIC8vIGlmIHRoZSB0YXJnZXQgaXMgbm90IGl0ZXJhYmxlIG9yIGl0J3MgYW4gYXJyYXkgd2l0aCB0aGUgZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBhIHNpbXBsZSBjYXNlXG4gIGlmIChpdGVyYXRvck1ldGhvZCAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyYXRvck1ldGhvZCkpKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvck1ldGhvZC5jYWxsKE8pO1xuICAgIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICAgIHJlc3VsdCA9IG5ldyBDKCk7XG4gICAgZm9yICg7IShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgcXVvdCA9IC9cIi9nO1xuXG4vLyBCLjIuMy4yLjEgQ3JlYXRlSFRNTChzdHJpbmcsIHRhZywgYXR0cmlidXRlLCB2YWx1ZSlcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWNyZWF0ZWh0bWxcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoc3RyaW5nKSk7XG4gIHZhciBwMSA9ICc8JyArIHRhZztcbiAgaWYgKGF0dHJpYnV0ZSAhPT0gJycpIHAxICs9ICcgJyArIGF0dHJpYnV0ZSArICc9XCInICsgU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG4gIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBmYWN0b3JpZXMgPSB7fTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uIChDLCBhcmdzTGVuZ3RoLCBhcmdzKSB7XG4gIGlmICghKGFyZ3NMZW5ndGggaW4gZmFjdG9yaWVzKSkge1xuICAgIGZvciAodmFyIGxpc3QgPSBbXSwgaSA9IDA7IGkgPCBhcmdzTGVuZ3RoOyBpKyspIGxpc3RbaV0gPSAnYVsnICsgaSArICddJztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICBmYWN0b3JpZXNbYXJnc0xlbmd0aF0gPSBGdW5jdGlvbignQyxhJywgJ3JldHVybiBuZXcgQygnICsgbGlzdC5qb2luKCcsJykgKyAnKScpO1xuICB9IHJldHVybiBmYWN0b3JpZXNbYXJnc0xlbmd0aF0oQywgYXJncyk7XG59O1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb24uYmluZCB8fCBmdW5jdGlvbiBiaW5kKHRoYXQgLyogLCAuLi5hcmdzICovKSB7XG4gIHZhciBmbiA9IGFGdW5jdGlvbih0aGlzKTtcbiAgdmFyIHBhcnRBcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB2YXIgYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIGJvdW5kKC8qIGFyZ3MuLi4gKi8pIHtcbiAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmRGdW5jdGlvbiA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogZm4uYXBwbHkodGhhdCwgYXJncyk7XG4gIH07XG4gIGlmIChpc09iamVjdChmbi5wcm90b3R5cGUpKSBib3VuZEZ1bmN0aW9uLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgcmV0dXJuIGJvdW5kRnVuY3Rpb247XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB0cmltID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N0cmluZy10cmltJykudHJpbTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgJHBhcnNlRmxvYXQgPSBnbG9iYWwucGFyc2VGbG9hdDtcbnZhciBGT1JDRUQgPSAxIC8gJHBhcnNlRmxvYXQod2hpdGVzcGFjZXMgKyAnLTAnKSAhPT0gLUluZmluaXR5O1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUZsb2F0KHN0cmluZykge1xuICB2YXIgdHJpbW1lZFN0cmluZyA9IHRyaW0oU3RyaW5nKHN0cmluZykpO1xuICB2YXIgcmVzdWx0ID0gJHBhcnNlRmxvYXQodHJpbW1lZFN0cmluZyk7XG4gIHJldHVybiByZXN1bHQgPT09IDAgJiYgdHJpbW1lZFN0cmluZy5jaGFyQXQoMCkgPT0gJy0nID8gLTAgOiByZXN1bHQ7XG59IDogJHBhcnNlRmxvYXQ7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VJbnQgPSBnbG9iYWwucGFyc2VJbnQ7XG52YXIgaGV4ID0gL15bKy1dPzBbWHhdLztcbnZhciBGT1JDRUQgPSAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMDgnKSAhPT0gOCB8fCAkcGFyc2VJbnQod2hpdGVzcGFjZXMgKyAnMHgxNicpICE9PSAyMjtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxubW9kdWxlLmV4cG9ydHMgPSBGT1JDRUQgPyBmdW5jdGlvbiBwYXJzZUludChzdHJpbmcsIHJhZGl4KSB7XG4gIHZhciBTID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHJldHVybiAkcGFyc2VJbnQoUywgKHJhZGl4ID4+PiAwKSB8fCAoaGV4LnRlc3QoUykgPyAxNiA6IDEwKSk7XG59IDogJHBhcnNlSW50O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJykuZjtcblxuLy8gYE9iamVjdC57IGVudHJpZXMsIHZhbHVlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRPX0VOVFJJRVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IG9iamVjdEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkge1xuICAgICAga2V5ID0ga2V5c1tpKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKE8sIGtleSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goVE9fRU5UUklFUyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBPYmplY3QuZW50cmllc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5lbnRyaWVzXG4gIGVudHJpZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QudmFsdWVzXG4gIHZhbHVlczogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBjaGVjayB0aGUgZXhpc3RlbmNlIG9mIGEgbWV0aG9kLCBsb3dlcmNhc2Vcbi8vIG9mIGEgdGFnIGFuZCBlc2NhcGluZyBxdW90ZXMgaW4gYXJndW1lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gJydbTUVUSE9EX05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KTtcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1zdGFydFxuICBzdGFydDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1SaWdodCwgdHJpbUVuZCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbWVuZFxuICBlbmQ6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUudHJpbWAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIEFycmF5LmZyb20oaXRlcmFibGUpO1xufSk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIGZyb206IGZyb21cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kJyk7XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuJCh7IHRhcmdldDogJ0Z1bmN0aW9uJywgcHJvdG86IHRydWUgfSwge1xuICBiaW5kOiBiaW5kXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogIURFU0NSSVBUT1JTLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBkZWZpbmVQcm9wZXJ0eTogb2JqZWN0RGVmaW5lUHJvcGVydHlNb2RpbGUuZlxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkdmFsdWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC10by1hcnJheScpLnZhbHVlcztcblxuLy8gYE9iamVjdC52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LnZhbHVlc1xuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUgfSwge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhPKSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoTyk7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1mbG9hdCcpO1xuXG4vLyBgcGFyc2VGbG9hdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1wYXJzZWZsb2F0LXN0cmluZ1xuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUZsb2F0ICE9IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvbiB9LCB7XG4gIHBhcnNlRmxvYXQ6IHBhcnNlRmxvYXRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUludEltcGxlbWVudGF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL251bWJlci1wYXJzZS1pbnQnKTtcblxuLy8gYHBhcnNlSW50YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlaW50LXN0cmluZy1yYWRpeFxuJCh7IGdsb2JhbDogdHJ1ZSwgZm9yY2VkOiBwYXJzZUludCAhPSBwYXJzZUludEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VJbnQ6IHBhcnNlSW50SW1wbGVtZW50YXRpb25cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSFRNTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaHRtbCcpO1xudmFyIGZvcmNlZFN0cmluZ0hUTUxNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLWh0bWwtZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmxpbmtgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5saW5rXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nSFRNTE1ldGhvZCgnbGluaycpIH0sIHtcbiAgbGluazogZnVuY3Rpb24gbGluayh1cmwpIHtcbiAgICByZXR1cm4gY3JlYXRlSFRNTCh0aGlzLCAnYScsICdocmVmJywgdXJsKTtcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9