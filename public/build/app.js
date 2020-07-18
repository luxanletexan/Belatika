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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fTGF6eWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9udW1iZXItcGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1odG1sLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3RyaW5nLXRyaW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3doaXRlc3BhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmZ1bmN0aW9uLmJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnZhbHVlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnBhcnNlLWZsb2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLmxpbmsuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkxhenlsb2FkZXIiLCJjYXJ0UG9wdXAiLCJnZXRFbGVtZW50QnlJZCIsInBvcHVwIiwiUG9wdXAiLCJidXR0b25zIiwiZWxlbWVudCIsImRpc3BsYXkiLCJDYXJ0IiwiU2VhcmNoIiwiTmF2aWdhdGlvbiIsInRvZ2dsZUJ1dHRvbiIsIm5hdkNvbnRlbnQiLCJjb2xsYXBzZU9uT3V0ZXJDbGljayIsIndvbWFuVG9nZ2xlIiwibWFuVG9nZ2xlIiwibmF2IiwiWU9mZnNldCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImJ1dHRvbl9jbGFzcyIsIm5hdmNhcnRfY2xhc3MiLCJuYXZjYXJ0X2J1dHRvbl9jbGFzcyIsInNob3BwaW5nX2JhZ19jbGFzcyIsInNob3BwaW5nX2JhZ19pdGVtX2NsYXNzIiwiY2FydF9xdWFudGl0eV9jbGFzcyIsImNhcnRfdXJsIiwicHJvY2Vzc2luZyIsImNhcnRDb250ZW50Iiwib25TYWxlcyIsInNsaWNlIiwiY2FsbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJuYXZjYXJ0IiwicXVlcnlTZWxlY3RvciIsIm5hdmNhcnRUb2dnbGUiLCJzaG9wcGluZ0JhZyIsInNob3BwaW5nQmFnUXVhbnRpdHkiLCJzaG9wcGluZ0JhZ0l0ZW1CdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsIm9uTmF2Y2FydFRvZ2dsZUNsaWNrIiwiYmluZCIsImZvckVhY2giLCJidXR0b24iLCJvbkJ1dHRvbkNsaWNrIiwib25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3Bpbm5lciIsImFkZGVkIiwiZGF0YXNldCIsInVuZGVmaW5lZCIsInVybCIsInJlbW92ZV9pdGVtX3VybCIsImFkZF9pdGVtX3VybCIsImFqYXgiLCJyZXNwb25zZSIsInNldEJ1dHRvbk1vZGUiLCJ1cGRhdGVDYXJ0IiwiY2FydCIsImJsdXIiLCJzaG93IiwibWV0aG9kIiwiYWRkVG9DYXJ0QnV0dG9uIiwiaXRlbV9pZCIsIkhUTUxFbGVtZW50IiwianNvblJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImVycm9yIiwiaW5uZXJIVE1MIiwiY291bnQiLCJ0b3RhbCIsInJlc2V0SW1wb3J0IiwidmFsdWVzIiwiaXRlbSIsIml0ZW1MaXN0RWx0IiwiY3JlYXRlU2hvcHBpbmdCYWdJdGVtIiwicHJpY2UiLCJkaXNjb3VudFByaWNlIiwicXVhbnRpdHkiLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJhcHBlbmRDaGlsZCIsInNob3BwaW5nQmFnVG90YWwiLCJjcmVhdGVTaG9wcGluZ0JhZ1RvdGFsIiwiY2FydExpbmtFbHQiLCJjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMiLCJjYXJ0TGluayIsImhyZWYiLCJpbm5lclRleHQiLCJjYXJ0X2xpbmtfdGV4dCIsIml0ZW1Db250YWluZXIiLCJpdGVtTGluayIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwiaXRlbUltYWdlIiwic3JjIiwiaW1hZ2VzIiwiY2FjaGVQYXRoIiwiYWx0IiwiaXRlbVByaWNlIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJpdGVtUmVtb3ZlIiwiaWQiLCJyZW1vdmVMaW5rIiwiY3JlYXRlVGV4dE5vZGUiLCJjbG9uZWRJdGVtIiwiY2xvbmVOb2RlIiwiY2xvbmVkSXRlbVJlbW92ZSIsInRvdGFsQ29udGFpbmVyIiwidG90YWxIZWFkaW5nIiwidG90YWxBbW91bnQiLCJ0YWciLCJjbGFzc2VzIiwiQXJyYXkiLCJpc0FycmF5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFkZFRleHQiLCJyZW1vdmVUZXh0IiwicmVtb3ZlQXR0cmlidXRlIiwibGF6eUltYWdlcyIsIm9ic2VydmUiLCJmYWxsQmFjayIsImxhenlJbWFnZU9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJsYXp5SW1hZ2UiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsIkhUTUxJbWFnZUVsZW1lbnQiLCJsb2FkIiwidW5vYnNlcnZlIiwiaW1hZ2UiLCJsZW5ndGgiLCJzaG93Q2xhc3MiLCJvblRvZ2dsZUJ1dHRvbkNsaWNrIiwib25PdXRlckNsaWNrIiwiY29udGFpbnMiLCJpc1RvZ2dsZUVsdCIsInBhcmVudE5vZGUiLCJzZXRPdmVybGF5IiwiY2xvc2UiLCJpbXBvcnRFbHQiLCJvbk92ZXJsYXlDbGljayIsIm9uUG9wdXBDbGljayIsIm92ZXJsYXkiLCJzZXRCdXR0b25FdmVudCIsInNldFN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9keSIsInN0eWxlcyIsImtleXMiLCJwcm9wZXJ0eSIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzIiwiY2FuY2VsIiwiY2FsbGJhY2siLCJzZWFyY2hGb3JtIiwic2VhcmNoVHJpZ2dlciIsInNlYXJjaElucHV0Iiwic2VhcmNoQnV0dG9uIiwib25TZWFyY2hUcmlnZ2VyQ2xpY2siLCJoYXNTZWFyY2hSZXF1ZXN0IiwidmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiTW91c2VFdmVudCIsImpzb24iLCJmb3JtRGF0YSIsInByb3BlcnRpZXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInN0YXR1cyIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FBT0E7QUFDQUEsbUJBQU8sQ0FBQyw4Q0FBRCxDQUFQLEMsQ0FFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBSUMseURBQUo7QUFDQSxNQUFNQyxTQUFTLEdBQUdILFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixtQkFBeEIsQ0FBbEI7O0FBQ0EsTUFBSUQsU0FBSixFQUFlO0FBQ1gsUUFBTUUsS0FBSyxHQUFHLElBQUlDLG9EQUFKLENBQVVILFNBQVYsRUFBcUI7QUFDL0JJLGFBQU8sRUFBRSxDQUNMO0FBQ0lDLGVBQU8sRUFBRVIsUUFBUSxDQUFDSSxjQUFULENBQXdCLG1CQUF4QjtBQURiLE9BREssQ0FEc0I7QUFNL0JLLGFBQU8sRUFBRTtBQU5zQixLQUFyQixDQUFkO0FBUUEsUUFBSUMsbURBQUosQ0FBUztBQUFFTCxXQUFLLEVBQUxBO0FBQUYsS0FBVDtBQUNILEdBVkQsTUFVTztBQUNILFFBQUlLLG1EQUFKO0FBQ0g7O0FBQ0QsTUFBSUMscURBQUo7QUFDQSxNQUFJQyx5REFBSixDQUFlO0FBQ1hDLGdCQUFZLEVB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QSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1pELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsV0FBVyxtQkFBTyxDQUFDLHFGQUE0Qjs7QUFFL0M7QUFDQTtBQUNBLEdBQUcsa0NBQWtDO0FBQ3JDO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQsaUNBQWlDLG1CQUFPLENBQUMsdUdBQXFDOztBQUU5RTtBQUNBO0FBQ0EsR0FBRyx5RUFBeUU7QUFDNUU7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNSRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGNBQWMsbUJBQU8sQ0FBQyx5RkFBOEI7O0FBRXBEO0FBQ0E7QUFDQSxHQUFHLCtCQUErQjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNURCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLCtCQUErQixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFeEU7QUFDQTtBQUNBLEdBQUcsK0RBQStEO0FBQ2xFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUEQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyw2QkFBNkIsbUJBQU8sQ0FBQywyRkFBK0I7O0FBRXBFO0FBQ0E7QUFDQSxHQUFHLDJEQUEyRDtBQUM5RDtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNQWTtBQUNiLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELDZCQUE2QixtQkFBTyxDQUFDLCtGQUFpQzs7QUFFdEU7QUFDQTtBQUNBLEdBQUcsd0VBQXdFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZSgnLi4vY3NzL2FwcC5zY3NzJyk7XHJcblxyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXHJcbi8vIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbmltcG9ydCBMYXp5bG9hZGVyIGZyb20gXCIuL2NsYXNzL19MYXp5bG9hZGVyXCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuL2NsYXNzL19DYXJ0XCI7XHJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9jbGFzcy9fUG9wdXBcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9jbGFzcy9fU2VhcmNoXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL2NsYXNzL19OYXZpZ2F0aW9uXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbmV3IExhenlsb2FkZXIoKTtcclxuICAgIGNvbnN0IGNhcnRQb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdG8tY2FydC1wb3B1cCcpO1xyXG4gICAgaWYgKGNhcnRQb3B1cCkge1xyXG4gICAgICAgIGNvbnN0IHBvcHVwID0gbmV3IFBvcHVwKGNhcnRQb3B1cCwge1xyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRpbnVlLXNob3BwaW5nJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXcgQ2FydCh7IHBvcHVwIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ldyBDYXJ0KCk7XHJcbiAgICB9XHJcbiAgICBuZXcgU2VhcmNoKCk7XHJcbiAgICBuZXcgTmF2aWdhdGlvbih7XHJcbiAgICAgICAgdG9nZ2xlQnV0dG9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyVG9nZ2xlJyksXHJcbiAgICAgICAgbmF2Q29udGVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhckNvbnRlbnQnKSxcclxuICAgICAgICBjb2xsYXBzZU9uT3V0ZXJDbGljazogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHdvbWFuVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvbWFuVG9nZ2xlJyk7XHJcbiAgICBuZXcgTmF2aWdhdGlvbih7dG9nZ2xlQnV0dG9uOiB3b21hblRvZ2dsZSwgbmF2Q29udGVudDogd29tYW5Ub2dnbGV9KTtcclxuICAgIGNvbnN0IG1hblRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW5Ub2dnbGUnKTtcclxuICAgIG5ldyBOYXZpZ2F0aW9uKHt0b2dnbGVCdXR0b246IG1hblRvZ2dsZSwgbmF2Q29udGVudDogbWFuVG9nZ2xlfSk7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnQtbmF2YmFyJyk7XHJcbiAgICBsZXQgWU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IFlPZmZzZXQpIHtcclxuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgYWpheCBmcm9tIFwiLi4vZnVuY3Rpb25zL19hamF4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5idXR0b25fY2xhc3M9Y2FydC1idXR0b25dIENsYXNzZSBDU1MgZGVzIGJvdXRvbnMgZCdham91dCBhdSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5uYXZjYXJ0X2NsYXNzPW5hdmNhcnRdIENsYXNzZSBDU1MgZHUgbWVudSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5uYXZjYXJ0X2J1dHRvbl9jbGFzcz1uYXZjYXJ0X19ob3Zlcl0gQ2xhc3NlIENTUyBkdSBib3V0b24gZHUgbWVudSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3M9Y2FydC1ob3Zlcl0gQ2xhc3NlIENTUyBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzPWNhcnQtaG92ZXJfX2l0ZW1dIENsYXNzZSBDU1MgZGVzIGl0ZW1zIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FydF9xdWFudGl0eV9jbGFzcz1uYXZjYXJ0XSBDbGFzc2UgQ1NTIHF1YW50aXTDqSBkYW5zIGxlIHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhcnRfdXJsPS9wYW5pZXIvXSBMaWVuIHZlcnMgbGUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge1BvcHVwfSBbb3B0aW9ucy5wb3B1cD1udWxsXSBwb3B1cFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgLy9TZXR0aW5nc1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBidXR0b25fY2xhc3M6ICdjYXJ0LWJ1dHRvbicsXHJcbiAgICAgICAgICAgIG5hdmNhcnRfY2xhc3M6ICduYXZjYXJ0JyxcclxuICAgICAgICAgICAgbmF2Y2FydF9idXR0b25fY2xhc3M6ICduYXZjYXJ0X19ob3ZlcicsXHJcbiAgICAgICAgICAgIHNob3BwaW5nX2JhZ19jbGFzczogJ2NhcnQtaG92ZXInLFxyXG4gICAgICAgICAgICBzaG9wcGluZ19iYWdfaXRlbV9jbGFzczogJ2NhcnQtaG92ZXJfX2l0ZW0nLFxyXG4gICAgICAgICAgICBjYXJ0X3F1YW50aXR5X2NsYXNzOiAnbmF2Y2FydCcsXHJcbiAgICAgICAgICAgIGNhcnRfdXJsOiAnL3Bhbmllci8nLFxyXG4gICAgICAgICAgICBwb3B1cDogbnVsbCxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhcnRDb250ZW50ID0ge307XHJcbiAgICAgICAgdGhpcy5vblNhbGVzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vRE9NIGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5idXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMub3B0aW9ucy5idXR0b25fY2xhc3MpKTtcclxuICAgICAgICB0aGlzLm5hdmNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMubmF2Y2FydF9jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5uYXZjYXJ0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLm5hdmNhcnRfYnV0dG9uX2NsYXNzKTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ1F1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLmNhcnRfcXVhbnRpdHlfY2xhc3MpO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWdJdGVtQnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKycgLnJlbW92ZS1pdGVtJykpO1xyXG5cclxuICAgICAgICAvL0V2ZW50c1xyXG4gICAgICAgIHRoaXMubmF2Y2FydFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25OYXZjYXJ0VG9nZ2xlQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcywgYnV0dG9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ0l0ZW1CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBidXR0b24pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5hdmNhcnRUb2dnbGVDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3Bpbm5lciA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgbGV0IGFkZGVkID0gYnV0dG9uLmRhdGFzZXQuYWRkZWQgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgdXJsID0gYWRkZWQgPyBidXR0b24uZGF0YXNldC5yZW1vdmVfaXRlbV91cmwgOiBidXR0b24uZGF0YXNldC5hZGRfaXRlbV91cmw7XHJcbiAgICAgICAgYWpheCh1cmwsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbk1vZGUoYnV0dG9uLCBhZGRlZCk7XHJcbiAgICAgICAgICAgIHRoaXMub25TYWxlcyA9IHJlc3BvbnNlLm9uU2FsZXMgPT09IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydChyZXNwb25zZS5jYXJ0KTtcclxuICAgICAgICAgICAgYnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCAmJiAhYWRkZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3B1cC5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwge21ldGhvZDogJ1BPU1QnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrKGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmFyJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXdpbmRvdy1jbG9zZScpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYXMnKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgIGxldCB1cmwgPSBidXR0b24uZGF0YXNldC5yZW1vdmVfaXRlbV91cmw7XHJcbiAgICAgICAgbGV0IGFkZFRvQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWJ1dHRvbi0nK2J1dHRvbi5kYXRhc2V0Lml0ZW1faWQpO1xyXG4gICAgICAgIGFqYXgodXJsLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcycpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmFyJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS13aW5kb3ctY2xvc2UnKTtcclxuICAgICAgICAgICAgaWYgKGFkZFRvQ2FydEJ1dHRvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ1dHRvbk1vZGUoYWRkVG9DYXJ0QnV0dG9uLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uU2FsZXMgPSByZXNwb25zZS5vblNhbGVzID09PSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnQocmVzcG9uc2UuY2FydCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHttZXRob2Q6ICdQT1NUJ30pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnQoanNvblJlc3BvbnNlKVxyXG4gICAge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSBKU09OLnBhcnNlKGpzb25SZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jYXJ0Q29udGVudCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybWF0IEpTT04gcGFuaWVyIG5vbiB2YWxpZGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXApIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBvcHVwLnJlc2V0SW1wb3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jYXJ0Q29udGVudCkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1MaXN0RWx0ID0gdGhpcy5jcmVhdGVTaG9wcGluZ0JhZ0l0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBwcmljZSA9IHRoaXMub25TYWxlcyA/IGl0ZW0uZGlzY291bnRQcmljZSA6IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgIGxldCBxdWFudGl0eSA9IHBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgICAgICAgICB0b3RhbCArPSBxdWFudGl0eSAqIHBhcnNlRmxvYXQocHJpY2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmFwcGVuZENoaWxkKGl0ZW1MaXN0RWx0KTtcclxuICAgICAgICAgICAgY291bnQgKz0gaXRlbS5xdWFudGl0eTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzaG9wcGluZ0JhZ1RvdGFsID0gdGhpcy5jcmVhdGVTaG9wcGluZ0JhZ1RvdGFsKHRvdGFsKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5hcHBlbmRDaGlsZChzaG9wcGluZ0JhZ1RvdGFsKTtcclxuICAgICAgICAgICAgbGV0IGNhcnRMaW5rRWx0ID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2RpdicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3MrJ19fbGluaycpO1xyXG4gICAgICAgICAgICBsZXQgY2FydExpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnYScsIFsnYnRuJywgJ2J0bi1zbScsICdidC1idG4tLXByaW1hcnknLCAndGV4dC1saWdodCddKTtcclxuICAgICAgICAgICAgY2FydExpbmsuaHJlZiA9IHRoaXMub3B0aW9ucy5jYXJ0X3VybDtcclxuICAgICAgICAgICAgY2FydExpbmsuaW5uZXJUZXh0ID0gdGhpcy5zaG9wcGluZ0JhZy5kYXRhc2V0LmNhcnRfbGlua190ZXh0O1xyXG4gICAgICAgICAgICBjYXJ0TGlua0VsdC5hcHBlbmRDaGlsZChjYXJ0TGluayk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuYXBwZW5kQ2hpbGQoY2FydExpbmtFbHQpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdmNhcnQuY2xhc3NMaXN0LnJlbW92ZSgnZW1wdHknKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm5hdmNhcnQuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ1F1YW50aXR5LmRhdGFzZXQucXVhbnRpdHkgPSBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcbiAgICAgKiBAcmV0dXJuIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVNob3BwaW5nQmFnSXRlbShpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2RpdicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcyk7XHJcbiAgICAgICAgbGV0IGl0ZW1MaW5rID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2EnLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJ19fbGluaycpO1xyXG4gICAgICAgIGl0ZW1MaW5rLmhyZWYgPSBpdGVtLmxpbms7XHJcbiAgICAgICAgaXRlbUxpbmsuc2V0QXR0cmlidXRlKCd0aXRsZScsIGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgbGV0IGl0ZW1JbWFnZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdpbWcnKTtcclxuICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZXNbMF0uY2FjaGVQYXRoO1xyXG4gICAgICAgIGl0ZW1JbWFnZS5hbHQgPSBpdGVtLmltYWdlc1swXS5hbHQ7XHJcbiAgICAgICAgbGV0IGl0ZW1QcmljZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKydfX3ByaWNlJyk7XHJcbiAgICAgICAgbGV0IHByaWNlID0gdGhpcy5vblNhbGVzID8gaXRlbS5kaXNjb3VudFByaWNlIDogaXRlbS5wcmljZTtcclxuICAgICAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdmci1GUicsIHtzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdFVVInfSkuZm9ybWF0KHByaWNlKTtcclxuICAgICAgICBsZXQgaXRlbVJlbW92ZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdpJywgWydyZW1vdmUtaXRlbScsICdmYXInLCAnZmEtd2luZG93LWNsb3NlJ10pO1xyXG4gICAgICAgIGl0ZW1SZW1vdmUuc2V0QXR0cmlidXRlKCdkYXRhLWl0ZW1faWQnLCBpdGVtLmlkKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLnNldEF0dHJpYnV0ZSgnZGF0YS1yZW1vdmVfaXRlbV91cmwnLCBpdGVtLnJlbW92ZUxpbmspO1xyXG4gICAgICAgIGl0ZW1SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2hvcHBpbmdCYWdCdXR0b25DbGljay5iaW5kKHRoaXMsIGl0ZW1SZW1vdmUpKTtcclxuXHJcbiAgICAgICAgaXRlbUxpbmsuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcclxuICAgICAgICBpdGVtTGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcraXRlbS5uYW1lKSk7XHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtTGluayk7XHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9wdXApIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lZEl0ZW0gPSBpdGVtQ29udGFpbmVyLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lZEl0ZW1SZW1vdmUgPSBpdGVtUmVtb3ZlLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgY2xvbmVkSXRlbVJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrLmJpbmQodGhpcywgY2xvbmVkSXRlbVJlbW92ZSkpO1xyXG4gICAgICAgICAgICBjbG9uZWRJdGVtLmFwcGVuZENoaWxkKGNsb25lZEl0ZW1SZW1vdmUpO1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9wdXAuaW1wb3J0KGNsb25lZEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1SZW1vdmUpO1xyXG4gICAgICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmbG9hdH0gdG90YWxcclxuICAgICAqIEByZXR1cm4gSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU2hvcHBpbmdCYWdUb3RhbCh0b3RhbClcclxuICAgIHtcclxuICAgICAgICBsZXQgdG90YWxDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnZGl2JywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcysnX190b3RhbCcpO1xyXG4gICAgICAgIGxldCB0b3RhbEhlYWRpbmcgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcygnc3BhbicpO1xyXG4gICAgICAgIHRvdGFsSGVhZGluZy5pbm5lclRleHQgPSAnVG90YWw6JztcclxuICAgICAgICBsZXQgdG90YWxBbW91bnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcygnc3BhbicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3MrJ19fdG90YWxfX2Ftb3VudCcpO1xyXG4gICAgICAgIHRvdGFsQW1vdW50LmlubmVyVGV4dCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZnItRlInLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJ30pLmZvcm1hdCh0b3RhbCk7XHJcbiAgICAgICAgdG90YWxDb250YWluZXIuYXBwZW5kQ2hpbGQodG90YWxIZWFkaW5nKTtcclxuICAgICAgICB0b3RhbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3RhbEFtb3VudCk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IGNsYXNzZXNcclxuICAgICAqIEByZXR1cm4gSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKHRhZywgY2xhc3NlcyA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjbGFzc2VzKSkge1xyXG4gICAgICAgICAgICBjbGFzc2VzID0gW2NsYXNzZXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgZm9yIChsZXQgY2xhc3NOYW1lIG9mIGNsYXNzZXMpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRCdXR0b25Nb2RlKGJ1dHRvbiwgYWRkZWQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFkZFRleHQgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyk7XHJcbiAgICAgICAgbGV0IHJlbW92ZVRleHQgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLnJlbW92ZS1pdGVtJyk7XHJcbiAgICAgICAgaWYgKGFkZGVkKSB7XHJcbiAgICAgICAgICAgIGFkZFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZVRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYWRkZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICByZW1vdmVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWFkZGVkJywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhenlsb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGF6eUltYWdlcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGF6eWxvYWQnKSk7XHJcbiAgICAgICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB0aGUgb2JzZXJ2ZXIgdG8gbG9hZCBsYXp5IGltYWdlcyB3aGVuIHZpZXdwb3J0IGluIHJhbmdlXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsYXp5SW1hZ2VPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF6eUltYWdlID0gZW50cnkudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIGxhenlJbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWQobGF6eUltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci51bm9ic2VydmUobGF6eUltYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGF6eUltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGludGVyc2VjdGlvbk9ic2VydmVyIG5vdCBzdXBwb3J0ZWRcclxuICAgICAqL1xyXG4gICAgZmFsbEJhY2soKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGF6eUltYWdlcy5mb3JFYWNoKChsYXp5SW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKGxhenlJbWFnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHRoZSBsYXp5IGltYWdlXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGxhenlJbWFnZVxyXG4gICAgICovXHJcbiAgICBsb2FkKGxhenlJbWFnZSlcclxuICAgIHtcclxuICAgICAgICBsYXp5SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGF6eUltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2xhenlsb2FkJyk7XHJcbiAgICAgICAgICAgIGlmIChsYXp5SW1hZ2UuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGF6eUltYWdlLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxhenlJbWFnZS5zcmMgPSBsYXp5SW1hZ2UuZGF0YXNldC5zcmM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IG9wdGlvbnMudG9nZ2xlQnV0dG9uXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBvcHRpb25zLm5hdkNvbnRlbnRcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbb3B0aW9ucy5zaG93Q2xhc3M9c2hvd11cclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuY29sbGFwc2VPbk91dGVyQ2xpY2s9dHJ1ZV1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICB0b2dnbGVCdXR0b246IG51bGwsXHJcbiAgICAgICAgICAgIG5hdkNvbnRlbnQ6IG51bGwsXHJcbiAgICAgICAgICAgIHNob3dDbGFzczogJ3Nob3cnLFxyXG4gICAgICAgICAgICBjb2xsYXBzZU9uT3V0ZXJDbGljazogdHJ1ZSxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgaWYgKCEodGhpcy5vcHRpb25zLnRvZ2dsZUJ1dHRvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRoaXMub3B0aW9ucy5uYXZDb250ZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcmFtw6h0cmVzIGluY29ycmVjdHMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Ub2dnbGVCdXR0b25DbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNvbGxhcHNlT25PdXRlckNsaWNrKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dGVyQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVG9nZ2xlQnV0dG9uQ2xpY2soKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubmF2Q29udGVudC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5vcHRpb25zLnNob3dDbGFzcykpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm5hdkNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMuc2hvd0NsYXNzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMubmF2Q29udGVudC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5zaG93Q2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk91dGVyQ2xpY2soZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGxldCBpc1RvZ2dsZUVsdCA9IGVsZW1lbnQgPT09IHRoaXMub3B0aW9ucy50b2dnbGVCdXR0b247XHJcbiAgICAgICAgd2hpbGUoZWxlbWVudCAmJiAhaXNUb2dnbGVFbHQpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgaXNUb2dnbGVFbHQgPSBlbGVtZW50ID09PSB0aGlzLm9wdGlvbnMudG9nZ2xlQnV0dG9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWlzVG9nZ2xlRWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5uYXZDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLnNob3dDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGFqYXggZnJvbSBcIi4uL2Z1bmN0aW9ucy9fYWpheFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge3tlbGVtZW50OiBIVE1MRWxlbWVudCwgdXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBhamF4Q2FsbGJhY2ssIGRhdGFzOiBPYmplY3R9W119IG9wdGlvbnMuYnV0dG9uc1xyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmRpc3BsYXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucyA9IHt9KVxyXG4gICAge1xyXG4gICAgICAgIC8vT3B0aW9uc1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy9HZXN0aW9uIGR1IERPTVxyXG4gICAgICAgIHRoaXMucG9wdXAgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXMuZmEtdGltZXMtY2lyY2xlJyk7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRFbHQgPSB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnQnKTtcclxuXHJcbiAgICAgICAgLy9HZXN0aW9uIGRlcyBldmVuZW1lbnRzXHJcbiAgICAgICAgaWYgKHRoaXMuY2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdmVybGF5Q2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUG9wdXBDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3ZlcmxheUNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbkV2ZW50KGJ1dHRvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3ZlcmxheSgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuc2V0U3R5bGVzKG92ZXJsYXksIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuNyknLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICB0b3A6ICcwJyxcclxuICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICB6SW5kZXg6ICc5OTknLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB0aGlzLm9wdGlvbnMuZGlzcGxheSA/ICdmbGV4JyA6ICdub25lJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKHRoaXMucG9wdXApO1xyXG4gICAgICAgIHRoaXMuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBvdmVybGF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbGlxdWUgZGVzIHN0eWxlcyBDU1Mgw6AgdW4gw6lsw6ltZW50IEhUTUxcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXNcclxuICAgICAqL1xyXG4gICAgc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcylcclxuICAgIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gc3R5bGVzW3Byb3BlcnR5XTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3ZlcmxheUNsaWNrKClcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBvblBvcHVwQ2xpY2soZSlcclxuICAgIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJ1dHRvblxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnV0dG9uLmVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidXR0b24udXJsXHJcbiAgICAgKiBAcGFyYW0ge2FqYXhDYWxsYmFja30gYnV0dG9uLmNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYnV0dG9uLmRhdGFzXHJcbiAgICAgKi9cclxuICAgIHNldEJ1dHRvbkV2ZW50KGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICBpZiAoIWJ1dHRvbi5kYXRhcykge1xyXG4gICAgICAgICAgICBidXR0b24uZGF0YXMgPSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5lbGVtZW50LmRhdGFzZXQuY2FuY2VsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25PdmVybGF5Q2xpY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFqYXgoYnV0dG9uLnVybCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheUNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LCB7bWV0aG9kOiAnUE9TVCcsIGRhdGFzOiBidXR0b24uZGF0YXN9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydChlbGVtZW50KVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmltcG9ydEVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmltcG9ydEVsdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbXBvcnQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmltcG9ydEVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmltcG9ydEVsdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hcclxue1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtZm9ybScpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtdHJpZ2dlcicpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWlucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VhcmNoVHJpZ2dlckNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0ZXJDbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaFRyaWdnZXJDbGljaygpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaGFzU2VhcmNoUmVxdWVzdCA9IHRoaXMuc2VhcmNoSW5wdXQudmFsdWUubGVuZ3RoID4gMDtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hGb3JtLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgICBpZiAoaGFzU2VhcmNoUmVxdWVzdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk91dGVyQ2xpY2soZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuc2VhcmNoVHJpZ2dlciB8fCBlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hJbnB1dCB8fCBlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hCdXR0b24pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0LnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgYSBnbG9iYWwgbWVtYmVyLlxyXG4gKiBAY2FsbGJhY2sgYWpheENhbGxiYWNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ30gcmVzcG9uc2VNZXNzYWdlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICogQHBhcmFtIHthamF4Q2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tZXRob2Q9R0VUXVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGF0YXM9e31dXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuanNvbj10cnVlXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWpheCh1cmwsIGNhbGxiYWNrLCBvcHRpb25zID0ge30pXHJcbntcclxuICAgIC8vU2V0dGluZ3NcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGRhdGFzOiB7fSxcclxuICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgbGV0IGZvcm1EYXRhID0gbnVsbDtcclxuICAgIGxldCBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhcyk7XHJcbiAgICBpZiAocHJvcGVydGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChwcm9wZXJ0eSwgb3B0aW9ucy5kYXRhc1twcm9wZXJ0eV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCk7XHJcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDIwMCAmJiB4aHIuc3RhdHVzID49IDQwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFY2hlYyBIVFRQIDogY29kZScueGhyLnN0YXR1cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5qc29uKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybWF0IEpTT04gaW52YWxpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3IsIG5leHQsIHZhbHVlO1xuICBpZiAobWFwcGluZykgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNMZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgLy8gaWYgdGhlIHRhcmdldCBpcyBub3QgaXRlcmFibGUgb3IgaXQncyBhbiBhcnJheSB3aXRoIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIGEgc2ltcGxlIGNhc2VcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yTWV0aG9kKSkpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yTWV0aG9kLmNhbGwoTyk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgcmVzdWx0ID0gbmV3IEMoKTtcbiAgICBmb3IgKDshKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgcmVzdWx0ID0gbmV3IEMobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciBxdW90ID0gL1wiL2c7XG5cbi8vIEIuMi4zLjIuMSBDcmVhdGVIVE1MKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKVxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtY3JlYXRlaHRtbFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgdmFyIFMgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZShzdHJpbmcpKTtcbiAgdmFyIHAxID0gJzwnICsgdGFnO1xuICBpZiAoYXR0cmlidXRlICE9PSAnJykgcDEgKz0gJyAnICsgYXR0cmlidXRlICsgJz1cIicgKyBTdHJpbmcodmFsdWUpLnJlcGxhY2UocXVvdCwgJyZxdW90OycpICsgJ1wiJztcbiAgcmV0dXJuIHAxICsgJz4nICsgUyArICc8LycgKyB0YWcgKyAnPic7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIGZhY3RvcmllcyA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEMsIGFyZ3NMZW5ndGgsIGFyZ3MpIHtcbiAgaWYgKCEoYXJnc0xlbmd0aCBpbiBmYWN0b3JpZXMpKSB7XG4gICAgZm9yICh2YXIgbGlzdCA9IFtdLCBpID0gMDsgaSA8IGFyZ3NMZW5ndGg7IGkrKykgbGlzdFtpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIGZhY3Rvcmllc1thcmdzTGVuZ3RoXSA9IEZ1bmN0aW9uKCdDLGEnLCAncmV0dXJuIG5ldyBDKCcgKyBsaXN0LmpvaW4oJywnKSArICcpJyk7XG4gIH0gcmV0dXJuIGZhY3Rvcmllc1thcmdzTGVuZ3RoXShDLCBhcmdzKTtcbn07XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIGZuID0gYUZ1bmN0aW9uKHRoaXMpO1xuICB2YXIgcGFydEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gZnVuY3Rpb24gYm91bmQoLyogYXJncy4uLiAqLykge1xuICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZEZ1bmN0aW9uID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpIGJvdW5kRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICByZXR1cm4gYm91bmRGdW5jdGlvbjtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciAkcGFyc2VGbG9hdCA9IGdsb2JhbC5wYXJzZUZsb2F0O1xudmFyIEZPUkNFRCA9IDEgLyAkcGFyc2VGbG9hdCh3aGl0ZXNwYWNlcyArICctMCcpICE9PSAtSW5maW5pdHk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlRmxvYXQoc3RyaW5nKSB7XG4gIHZhciB0cmltbWVkU3RyaW5nID0gdHJpbShTdHJpbmcoc3RyaW5nKSk7XG4gIHZhciByZXN1bHQgPSAkcGFyc2VGbG9hdCh0cmltbWVkU3RyaW5nKTtcbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCAmJiB0cmltbWVkU3RyaW5nLmNoYXJBdCgwKSA9PSAnLScgPyAtMCA6IHJlc3VsdDtcbn0gOiAkcGFyc2VGbG9hdDtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctdHJpbScpLnRyaW07XG52YXIgd2hpdGVzcGFjZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2hpdGVzcGFjZXMnKTtcblxudmFyICRwYXJzZUludCA9IGdsb2JhbC5wYXJzZUludDtcbnZhciBoZXggPSAvXlsrLV0/MFtYeF0vO1xudmFyIEZPUkNFRCA9ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcwOCcpICE9PSA4IHx8ICRwYXJzZUludCh3aGl0ZXNwYWNlcyArICcweDE2JykgIT09IDIyO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG5tb2R1bGUuZXhwb3J0cyA9IEZPUkNFRCA/IGZ1bmN0aW9uIHBhcnNlSW50KHN0cmluZywgcmFkaXgpIHtcbiAgdmFyIFMgPSB0cmltKFN0cmluZyhzdHJpbmcpKTtcbiAgcmV0dXJuICRwYXJzZUludChTLCAocmFkaXggPj4+IDApIHx8IChoZXgudGVzdChTKSA/IDE2IDogMTApKTtcbn0gOiAkcGFyc2VJbnQ7XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKS5mO1xuXG4vLyBgT2JqZWN0LnsgZW50cmllcywgdmFsdWVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVE9fRU5UUklFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoaXQpO1xuICAgIHZhciBrZXlzID0gb2JqZWN0S2V5cyhPKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSB7XG4gICAgICBrZXkgPSBrZXlzW2krK107XG4gICAgICBpZiAoIURFU0NSSVBUT1JTIHx8IHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoTywga2V5KSkge1xuICAgICAgICByZXN1bHQucHVzaChUT19FTlRSSUVTID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYE9iamVjdC5lbnRyaWVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmVudHJpZXNcbiAgZW50cmllczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC52YWx1ZXNcbiAgdmFsdWVzOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGNoZWNrIHRoZSBleGlzdGVuY2Ugb2YgYSBtZXRob2QsIGxvd2VyY2FzZVxuLy8gb2YgYSB0YWcgYW5kIGVzY2FwaW5nIHF1b3RlcyBpbiBhcmd1bWVudHNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE1FVEhPRF9OQU1FKSB7XG4gIHJldHVybiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRlc3QgPSAnJ1tNRVRIT0RfTkFNRV0oJ1wiJyk7XG4gICAgcmV0dXJuIHRlc3QgIT09IHRlc3QudG9Mb3dlckNhc2UoKSB8fCB0ZXN0LnNwbGl0KCdcIicpLmxlbmd0aCA+IDM7XG4gIH0pO1xufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHdoaXRlc3BhY2VzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3doaXRlc3BhY2VzJyk7XG5cbnZhciB3aGl0ZXNwYWNlID0gJ1snICsgd2hpdGVzcGFjZXMgKyAnXSc7XG52YXIgbHRyaW0gPSBSZWdFeHAoJ14nICsgd2hpdGVzcGFjZSArIHdoaXRlc3BhY2UgKyAnKicpO1xudmFyIHJ0cmltID0gUmVnRXhwKHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyokJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbSwgdHJpbVN0YXJ0LCB0cmltRW5kLCB0cmltTGVmdCwgdHJpbVJpZ2h0IH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKCR0aGlzKSk7XG4gICAgaWYgKFRZUEUgJiAxKSBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICAgIGlmIChUWVBFICYgMikgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbUxlZnQsIHRyaW1TdGFydCB9YCBtZXRob2RzXG4gIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltZW5kXG4gIGVuZDogY3JlYXRlTWV0aG9kKDIpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS50cmltYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS50cmltXG4gIHRyaW06IGNyZWF0ZU1ldGhvZCgzKVxufTtcbiIsIi8vIGEgc3RyaW5nIG9mIGFsbCB2YWxpZCB1bmljb2RlIHdoaXRlc3BhY2VzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxubW9kdWxlLmV4cG9ydHMgPSAnXFx1MDAwOVxcdTAwMEFcXHUwMDBCXFx1MDAwQ1xcdTAwMERcXHUwMDIwXFx1MDBBMFxcdTE2ODBcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRic7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxuJCh7IHRhcmdldDogJ0FycmF5Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBJTkNPUlJFQ1RfSVRFUkFUSU9OIH0sIHtcbiAgZnJvbTogZnJvbVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQnKTtcblxuLy8gYEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kXG4kKHsgdGFyZ2V0OiAnRnVuY3Rpb24nLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGJpbmQ6IGJpbmRcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiAhREVTQ1JJUFRPUlMsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGRlZmluZVByb3BlcnR5OiBvYmplY3REZWZpbmVQcm9wZXJ0eU1vZGlsZS5mXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICR2YWx1ZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXRvLWFycmF5JykudmFsdWVzO1xuXG4vLyBgT2JqZWN0LnZhbHVlc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QudmFsdWVzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSB9LCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKE8pIHtcbiAgICByZXR1cm4gJHZhbHVlcyhPKTtcbiAgfVxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBwYXJzZUZsb2F0SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWZsb2F0Jyk7XG5cbi8vIGBwYXJzZUZsb2F0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXBhcnNlZmxvYXQtc3RyaW5nXG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlRmxvYXQgIT0gcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uIH0sIHtcbiAgcGFyc2VGbG9hdDogcGFyc2VGbG9hdEltcGxlbWVudGF0aW9uXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHBhcnNlSW50SW1wbGVtZW50YXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbnVtYmVyLXBhcnNlLWludCcpO1xuXG4vLyBgcGFyc2VJbnRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcGFyc2VpbnQtc3RyaW5nLXJhZGl4XG4kKHsgZ2xvYmFsOiB0cnVlLCBmb3JjZWQ6IHBhcnNlSW50ICE9IHBhcnNlSW50SW1wbGVtZW50YXRpb24gfSwge1xuICBwYXJzZUludDogcGFyc2VJbnRJbXBsZW1lbnRhdGlvblxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBjcmVhdGVIVE1MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1odG1sJyk7XG52YXIgZm9yY2VkU3RyaW5nSFRNTE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctaHRtbC1mb3JjZWQnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUubGlua2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLmxpbmtcbiQoeyB0YXJnZXQ6ICdTdHJpbmcnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBmb3JjZWRTdHJpbmdIVE1MTWV0aG9kKCdsaW5rJykgfSwge1xuICBsaW5rOiBmdW5jdGlvbiBsaW5rKHVybCkge1xuICAgIHJldHVybiBjcmVhdGVIVE1MKHRoaXMsICdhJywgJ2hyZWYnLCB1cmwpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=