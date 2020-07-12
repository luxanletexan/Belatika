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
  } // new Search();

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
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_3__);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search);

    this.expanded = false;
    this.collapsedSize = '40px';
    this.expandedSize = '250px';
    this.searchInput = document.getElementById('bt-search');
    this.searchTrigger = document.getElementById('bt-search-trigger');
    this.searchButton = document.getElementById('bt-search-button');
    this.searchTrigger.addEventListener('click', this.onSearchTriggerClick.bind(this));
    this.searchInput.addEventListener('click', this.onSearchTriggerClick.bind(this));
    document.body.addEventListener('click', this.onOuterClick.bind(this));
  }

  _createClass(Search, [{
    key: "onSearchTriggerClick",
    value: function onSearchTriggerClick(e) {
      this.expanded = getComputedStyle(this.searchInput).width === this.expandedSize;

      if (this.expanded && e.target === this.searchTrigger) {
        this.searchButton.dispatchEvent(new MouseEvent('click'));
      } else {
        this.resizeInput(this.expandedSize);
        this.searchInput.classList.add('box-shadow');
      }
    }
  }, {
    key: "onOuterClick",
    value: function onOuterClick(e) {
      if (e.target === this.searchTrigger || e.target === this.searchInput) {
        return;
      }

      this.resizeInput(this.collapsedSize);
      this.searchInput.classList.remove('box-shadow');
    }
  }, {
    key: "resizeInput",
    value: function resizeInput(size) {
      var _this = this;

      var currentSize = parseInt(getComputedStyle(this.searchInput).width);
      var targetSize = parseInt(size);
      var speed = 10;

      if (currentSize === targetSize) {
        return;
      }

      var intervalId = setInterval(function () {
        if (targetSize > currentSize) {
          currentSize += speed;
          currentSize = currentSize > targetSize ? targetSize : currentSize;
        } else if (targetSize < currentSize) {
          currentSize -= speed;
          currentSize = currentSize < targetSize ? targetSize : currentSize;
        } else {
          clearInterval(intervalId);
        }

        _this.searchInput.style.width = currentSize + 'px';
      }, 10); // this.searchInput.style.width = size;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fTGF6eWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1BvcHVwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9mdW5jdGlvbnMvX2FqYXguanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkxhenlsb2FkZXIiLCJjYXJ0UG9wdXAiLCJnZXRFbGVtZW50QnlJZCIsInBvcHVwIiwiUG9wdXAiLCJidXR0b25zIiwiZWxlbWVudCIsImRpc3BsYXkiLCJDYXJ0Iiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsImJ1dHRvbl9jbGFzcyIsIm5hdmNhcnRfY2xhc3MiLCJuYXZjYXJ0X2J1dHRvbl9jbGFzcyIsInNob3BwaW5nX2JhZ19jbGFzcyIsInNob3BwaW5nX2JhZ19pdGVtX2NsYXNzIiwiY2FydF9xdWFudGl0eV9jbGFzcyIsImNhcnRfdXJsIiwicHJvY2Vzc2luZyIsImNhcnRDb250ZW50Iiwib25TYWxlcyIsInNsaWNlIiwiY2FsbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJuYXZjYXJ0IiwicXVlcnlTZWxlY3RvciIsIm5hdmNhcnRUb2dnbGUiLCJzaG9wcGluZ0JhZyIsInNob3BwaW5nQmFnUXVhbnRpdHkiLCJzaG9wcGluZ0JhZ0l0ZW1CdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsIm9uTmF2Y2FydFRvZ2dsZUNsaWNrIiwiYmluZCIsImZvckVhY2giLCJidXR0b24iLCJvbkJ1dHRvbkNsaWNrIiwib25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3Bpbm5lciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZGVkIiwiZGF0YXNldCIsInVuZGVmaW5lZCIsInVybCIsInJlbW92ZV9pdGVtX3VybCIsImFkZF9pdGVtX3VybCIsImFqYXgiLCJyZXNwb25zZSIsImFkZCIsInNldEJ1dHRvbk1vZGUiLCJ1cGRhdGVDYXJ0IiwiY2FydCIsImJsdXIiLCJzaG93IiwibWV0aG9kIiwiYWRkVG9DYXJ0QnV0dG9uIiwiaXRlbV9pZCIsIkhUTUxFbGVtZW50IiwianNvblJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImVycm9yIiwiaW5uZXJIVE1MIiwiY291bnQiLCJ0b3RhbCIsInJlc2V0SW1wb3J0IiwidmFsdWVzIiwiaXRlbSIsIml0ZW1MaXN0RWx0IiwiY3JlYXRlU2hvcHBpbmdCYWdJdGVtIiwicHJpY2UiLCJkaXNjb3VudFByaWNlIiwicXVhbnRpdHkiLCJwYXJzZUludCIsInBhcnNlRmxvYXQiLCJhcHBlbmRDaGlsZCIsInNob3BwaW5nQmFnVG90YWwiLCJjcmVhdGVTaG9wcGluZ0JhZ1RvdGFsIiwiY2FydExpbmtFbHQiLCJjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMiLCJjYXJ0TGluayIsImhyZWYiLCJpbm5lclRleHQiLCJjYXJ0X2xpbmtfdGV4dCIsIml0ZW1Db250YWluZXIiLCJpdGVtTGluayIsImxpbmsiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwiaXRlbUltYWdlIiwic3JjIiwiaW1hZ2VzIiwiY2FjaGVQYXRoIiwiYWx0IiwiaXRlbVByaWNlIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJpdGVtUmVtb3ZlIiwiaWQiLCJyZW1vdmVMaW5rIiwiY3JlYXRlVGV4dE5vZGUiLCJjbG9uZWRJdGVtIiwiY2xvbmVOb2RlIiwiY2xvbmVkSXRlbVJlbW92ZSIsInRvdGFsQ29udGFpbmVyIiwidG90YWxIZWFkaW5nIiwidG90YWxBbW91bnQiLCJ0YWciLCJjbGFzc2VzIiwiQXJyYXkiLCJpc0FycmF5IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFkZFRleHQiLCJyZW1vdmVUZXh0IiwicmVtb3ZlQXR0cmlidXRlIiwibGF6eUltYWdlcyIsIndpbmRvdyIsIm9ic2VydmUiLCJmYWxsQmFjayIsImxhenlJbWFnZU9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJsYXp5SW1hZ2UiLCJ0YXJnZXQiLCJpc0ludGVyc2VjdGluZyIsIkhUTUxJbWFnZUVsZW1lbnQiLCJsb2FkIiwidW5vYnNlcnZlIiwiaW1hZ2UiLCJsZW5ndGgiLCJzZXRPdmVybGF5IiwiY2xvc2UiLCJpbXBvcnRFbHQiLCJvbk92ZXJsYXlDbGljayIsIm9uUG9wdXBDbGljayIsIm92ZXJsYXkiLCJzZXRCdXR0b25FdmVudCIsInNldFN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3AiLCJsZWZ0IiwiekluZGV4IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYm9keSIsInN0eWxlcyIsImtleXMiLCJwcm9wZXJ0eSIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzIiwiY2FuY2VsIiwiY2FsbGJhY2siLCJTZWFyY2giLCJleHBhbmRlZCIsImNvbGxhcHNlZFNpemUiLCJleHBhbmRlZFNpemUiLCJzZWFyY2hJbnB1dCIsInNlYXJjaFRyaWdnZXIiLCJzZWFyY2hCdXR0b24iLCJvblNlYXJjaFRyaWdnZXJDbGljayIsIm9uT3V0ZXJDbGljayIsImdldENvbXB1dGVkU3R5bGUiLCJkaXNwYXRjaEV2ZW50IiwiTW91c2VFdmVudCIsInJlc2l6ZUlucHV0Iiwic2l6ZSIsImN1cnJlbnRTaXplIiwidGFyZ2V0U2l6ZSIsInNwZWVkIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImpzb24iLCJmb3JtRGF0YSIsInByb3BlcnRpZXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInN0YXR1cyIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsOENBQUQsQ0FBUCxDLENBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFJQyx5REFBSjtBQUNBLE1BQU1DLFNBQVMsR0FBR0gsUUFBUSxDQUFDSSxjQUFULENBQXdCLG1CQUF4QixDQUFsQjs7QUFDQSxNQUFJRCxTQUFKLEVBQWU7QUFDWCxRQUFNRSxLQUFLLEdBQUcsSUFBSUMsb0RBQUosQ0FBVUgsU0FBVixFQUFxQjtBQUMvQkksYUFBTyxFQUFFLENBQ0w7QUFDSUMsZUFBTyxFQUFFUixRQUFRLENBQUNJLGNBQVQsQ0FBd0IsbUJBQXhCO0FBRGIsT0FESyxDQURzQjtBQU0vQkssYUFBTyxFQUFFO0FBTnNCLEtBQXJCLENBQWQ7QUFRQSxRQUFJQyxtREFBSixDQUFTO0FBQUVMLFdBQUssRUFBTEE7QUFBRixLQUFUO0FBQ0gsR0FWRCxNQVVPO0FBQ0gsUUFBSUssbURBQUo7QUFDSCxHQWYrQyxDQWdCaEQ7O0FBQ0gsQ0FqQkQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOztJQUVxQkEsSTtBQUNqQjs7Ozs7Ozs7Ozs7QUFXQSxrQkFDQTtBQUFBOztBQUFBLFFBRFlDLE9BQ1osdUVBRHNCLEVBQ3RCOztBQUFBOztBQUNJO0FBQ0EsU0FBS0EsT0FBTCxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN6QkMsa0JBQVksRUFBRSxhQURXO0FBRXpCQyxtQkFBYSxFQUFFLFNBRlU7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Q0FBUCxFQUFVO0FBQ1IwQixpQkFBTyxDQUFDQyxLQUFSLENBQWMsc0JBQWQ7QUFDQSxpQkFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRGtHLGNBQVEsQ0FBQ2pILFFBQUQsQ0FBUjtBQUNIO0FBQ0osR0FmRDtBQWdCQTJJLEtBQUcsQ0FBQ0ksSUFBSixDQUFTUixRQUFUO0FBQ0gsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcclxuXHJcbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cclxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuaW1wb3J0IExhenlsb2FkZXIgZnJvbSBcIi4vY2xhc3MvX0xhenlsb2FkZXJcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4vY2xhc3MvX0NhcnRcIjtcclxuaW1wb3J0IFBvcHVwIGZyb20gXCIuL2NsYXNzL19Qb3B1cFwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL2NsYXNzL19TZWFyY2hcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBuZXcgTGF6eWxvYWRlcigpO1xyXG4gICAgY29uc3QgY2FydFBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10by1jYXJ0LXBvcHVwJyk7XHJcbiAgICBpZiAoY2FydFBvcHVwKSB7XHJcbiAgICAgICAgY29uc3QgcG9wdXAgPSBuZXcgUG9wdXAoY2FydFBvcHVwLCB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGludWUtc2hvcHBpbmcnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5ldyBDYXJ0KHsgcG9wdXAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3IENhcnQoKTtcclxuICAgIH1cclxuICAgIC8vIG5ldyBTZWFyY2goKTtcclxufSk7XHJcbiIsImltcG9ydCBhamF4IGZyb20gXCIuLi9mdW5jdGlvbnMvX2FqYXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmJ1dHRvbl9jbGFzcz1jYXJ0LWJ1dHRvbl0gQ2xhc3NlIENTUyBkZXMgYm91dG9ucyBkJ2Fqb3V0IGF1IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm5hdmNhcnRfY2xhc3M9bmF2Y2FydF0gQ2xhc3NlIENTUyBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm5hdmNhcnRfYnV0dG9uX2NsYXNzPW5hdmNhcnRfX2hvdmVyXSBDbGFzc2UgQ1NTIGR1IGJvdXRvbiBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcz1jYXJ0LWhvdmVyXSBDbGFzc2UgQ1NTIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3M9Y2FydC1ob3Zlcl9faXRlbV0gQ2xhc3NlIENTUyBkZXMgaXRlbXMgZHUgbWVudSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYXJ0X3F1YW50aXR5X2NsYXNzPW5hdmNhcnRdIENsYXNzZSBDU1MgcXVhbnRpdMOpIGRhbnMgbGUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FydF91cmw9L3Bhbmllci9dIExpZW4gdmVycyBsZSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7UG9wdXB9IFtvcHRpb25zLnBvcHVwPW51bGxdIHBvcHVwXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSlcclxuICAgIHtcclxuICAgICAgICAvL1NldHRpbmdzXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIGJ1dHRvbl9jbGFzczogJ2NhcnQtYnV0dG9uJyxcclxuICAgICAgICAgICAgbmF2Y2FydF9jbGFzczogJ25hdmNhcnQnLFxyXG4gICAgICAgICAgICBuYXZjYXJ0X2J1dHRvbl9jbGFzczogJ25hdmNhcnRfX2hvdmVyJyxcclxuICAgICAgICAgICAgc2hvcHBpbmdfYmFnX2NsYXNzOiAnY2FydC1ob3ZlcicsXHJcbiAgICAgICAgICAgIHNob3BwaW5nX2JhZ19pdGVtX2NsYXNzOiAnY2FydC1ob3Zlcl9faXRlbScsXHJcbiAgICAgICAgICAgIGNhcnRfcXVhbnRpdHlfY2xhc3M6ICduYXZjYXJ0JyxcclxuICAgICAgICAgICAgY2FydF91cmw6ICcvcGFuaWVyLycsXHJcbiAgICAgICAgICAgIHBvcHVwOiBudWxsLFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSB7fTtcclxuICAgICAgICB0aGlzLm9uU2FsZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9ET00gaGFuZGxpbmdcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5vcHRpb25zLmJ1dHRvbl9jbGFzcykpO1xyXG4gICAgICAgIHRoaXMubmF2Y2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nK3RoaXMub3B0aW9ucy5uYXZjYXJ0X2NsYXNzKTtcclxuICAgICAgICB0aGlzLm5hdmNhcnRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMubmF2Y2FydF9idXR0b25fY2xhc3MpO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnUXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMuY2FydF9xdWFudGl0eV9jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ0l0ZW1CdXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyt0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJyAucmVtb3ZlLWl0ZW0nKSk7XHJcblxyXG4gICAgICAgIC8vRXZlbnRzXHJcbiAgICAgICAgdGhpcy5uYXZjYXJ0VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk5hdmNhcnRUb2dnbGVDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBidXR0b24pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnSXRlbUJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2hvcHBpbmdCYWdCdXR0b25DbGljay5iaW5kKHRoaXMsIGJ1dHRvbikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmF2Y2FydFRvZ2dsZUNsaWNrKGUpXHJcbiAgICB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnV0dG9uQ2xpY2soYnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCBzcGlubmVyID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5mYS1zcGlubmVyJyk7XHJcbiAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBsZXQgYWRkZWQgPSBidXR0b24uZGF0YXNldC5hZGRlZCAhPT0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGxldCB1cmwgPSBhZGRlZCA/IGJ1dHRvbi5kYXRhc2V0LnJlbW92ZV9pdGVtX3VybCA6IGJ1dHRvbi5kYXRhc2V0LmFkZF9pdGVtX3VybDtcclxuICAgICAgICBhamF4KHVybCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uTW9kZShidXR0b24sIGFkZGVkKTtcclxuICAgICAgICAgICAgdGhpcy5vblNhbGVzID0gcmVzcG9uc2Uub25TYWxlcyA9PT0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0KHJlc3BvbnNlLmNhcnQpO1xyXG4gICAgICAgICAgICBidXR0b24uYmx1cigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnBvcHVwICYmICFhZGRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnBvcHVwLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB9LCB7bWV0aG9kOiAnUE9TVCd9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3BwaW5nQmFnQnV0dG9uQ2xpY2soYnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXInKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtd2luZG93LWNsb3NlJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhcycpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS1zcGlubmVyJyk7XHJcbiAgICAgICAgbGV0IHVybCA9IGJ1dHRvbi5kYXRhc2V0LnJlbW92ZV9pdGVtX3VybDtcclxuICAgICAgICBsZXQgYWRkVG9DYXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYnV0dG9uLScrYnV0dG9uLmRhdGFzZXQuaXRlbV9pZCk7XHJcbiAgICAgICAgYWpheCh1cmwsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmFzJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS1zcGlubmVyJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYXInKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLXdpbmRvdy1jbG9zZScpO1xyXG4gICAgICAgICAgICBpZiAoYWRkVG9DYXJ0QnV0dG9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QnV0dG9uTW9kZShhZGRUb0NhcnRCdXR0b24sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25TYWxlcyA9IHJlc3BvbnNlLm9uU2FsZXMgPT09IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydChyZXNwb25zZS5jYXJ0KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSwge21ldGhvZDogJ1BPU1QnfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2FydChqc29uUmVzcG9uc2UpXHJcbiAgICB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0Q29udGVudCA9IEpTT04ucGFyc2UoanNvblJlc3BvbnNlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNhcnRDb250ZW50ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJ0Q29udGVudCA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtYXQgSlNPTiBwYW5pZXIgbm9uIHZhbGlkZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMucG9wdXAucmVzZXRJbXBvcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNhcnRDb250ZW50KS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXRlbUxpc3RFbHQgPSB0aGlzLmNyZWF0ZVNob3BwaW5nQmFnSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgbGV0IHByaWNlID0gdGhpcy5vblNhbGVzID8gaXRlbS5kaXNjb3VudFByaWNlIDogaXRlbS5wcmljZTtcclxuICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gcGFyc2VJbnQoaXRlbS5xdWFudGl0eSk7XHJcbiAgICAgICAgICAgIHRvdGFsICs9IHF1YW50aXR5ICogcGFyc2VGbG9hdChwcmljZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuYXBwZW5kQ2hpbGQoaXRlbUxpc3RFbHQpO1xyXG4gICAgICAgICAgICBjb3VudCArPSBpdGVtLnF1YW50aXR5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0b3RhbCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHNob3BwaW5nQmFnVG90YWwgPSB0aGlzLmNyZWF0ZVNob3BwaW5nQmFnVG90YWwodG90YWwpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmFwcGVuZENoaWxkKHNob3BwaW5nQmFnVG90YWwpO1xyXG4gICAgICAgICAgICBsZXQgY2FydExpbmtFbHQgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnZGl2JywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcysnX19saW5rJyk7XHJcbiAgICAgICAgICAgIGxldCBjYXJ0TGluayA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdhJywgWydidG4nLCAnYnRuLXNtJywgJ2J0LWJ0bi0tcHJpbWFyeScsICd0ZXh0LWxpZ2h0J10pO1xyXG4gICAgICAgICAgICBjYXJ0TGluay5ocmVmID0gdGhpcy5vcHRpb25zLmNhcnRfdXJsO1xyXG4gICAgICAgICAgICBjYXJ0TGluay5pbm5lclRleHQgPSB0aGlzLnNob3BwaW5nQmFnLmRhdGFzZXQuY2FydF9saW5rX3RleHQ7XHJcbiAgICAgICAgICAgIGNhcnRMaW5rRWx0LmFwcGVuZENoaWxkKGNhcnRMaW5rKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5hcHBlbmRDaGlsZChjYXJ0TGlua0VsdCk7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Y2FydC5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2Y2FydC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnUXVhbnRpdHkuZGF0YXNldC5xdWFudGl0eSA9IGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cclxuICAgICAqIEByZXR1cm4gSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU2hvcHBpbmdCYWdJdGVtKGl0ZW0pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnZGl2JywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKTtcclxuICAgICAgICBsZXQgaXRlbUxpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnYScsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcysnX19saW5rJyk7XHJcbiAgICAgICAgaXRlbUxpbmsuaHJlZiA9IGl0ZW0ubGluaztcclxuICAgICAgICBpdGVtTGluay5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgaXRlbS5uYW1lKTtcclxuICAgICAgICBsZXQgaXRlbUltYWdlID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2ltZycpO1xyXG4gICAgICAgIGl0ZW1JbWFnZS5zcmMgPSBpdGVtLmltYWdlc1swXS5jYWNoZVBhdGg7XHJcbiAgICAgICAgaXRlbUltYWdlLmFsdCA9IGl0ZW0uaW1hZ2VzWzBdLmFsdDtcclxuICAgICAgICBsZXQgaXRlbVByaWNlID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ3NwYW4nLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJ19fcHJpY2UnKTtcclxuICAgICAgICBsZXQgcHJpY2UgPSB0aGlzLm9uU2FsZXMgPyBpdGVtLmRpc2NvdW50UHJpY2UgOiBpdGVtLnByaWNlO1xyXG4gICAgICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2ZyLUZSJywge3N0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ0VVUid9KS5mb3JtYXQocHJpY2UpO1xyXG4gICAgICAgIGxldCBpdGVtUmVtb3ZlID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2knLCBbJ3JlbW92ZS1pdGVtJywgJ2ZhcicsICdmYS13aW5kb3ctY2xvc2UnXSk7XHJcbiAgICAgICAgaXRlbVJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaXRlbV9pZCcsIGl0ZW0uaWQpO1xyXG4gICAgICAgIGl0ZW1SZW1vdmUuc2V0QXR0cmlidXRlKCdkYXRhLXJlbW92ZV9pdGVtX3VybCcsIGl0ZW0ucmVtb3ZlTGluayk7XHJcbiAgICAgICAgaXRlbVJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrLmJpbmQodGhpcywgaXRlbVJlbW92ZSkpO1xyXG5cclxuICAgICAgICBpdGVtTGluay5hcHBlbmRDaGlsZChpdGVtSW1hZ2UpO1xyXG4gICAgICAgIGl0ZW1MaW5rLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJytpdGVtLm5hbWUpKTtcclxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1MaW5rKTtcclxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3B1cCkge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVkSXRlbSA9IGl0ZW1Db250YWluZXIuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmVkSXRlbVJlbW92ZSA9IGl0ZW1SZW1vdmUuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICBjbG9uZWRJdGVtUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBjbG9uZWRJdGVtUmVtb3ZlKSk7XHJcbiAgICAgICAgICAgIGNsb25lZEl0ZW0uYXBwZW5kQ2hpbGQoY2xvbmVkSXRlbVJlbW92ZSk7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5wb3B1cC5pbXBvcnQoY2xvbmVkSXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVJlbW92ZSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1Db250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSB0b3RhbFxyXG4gICAgICogQHJldHVybiBIVE1MRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVTaG9wcGluZ0JhZ1RvdGFsKHRvdGFsKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3RhbENvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdkaXYnLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKydfX3RvdGFsJyk7XHJcbiAgICAgICAgbGV0IHRvdGFsSGVhZGluZyA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJyk7XHJcbiAgICAgICAgdG90YWxIZWFkaW5nLmlubmVyVGV4dCA9ICdUb3RhbDonO1xyXG4gICAgICAgIGxldCB0b3RhbEFtb3VudCA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcysnX190b3RhbF9fYW1vdW50Jyk7XHJcbiAgICAgICAgdG90YWxBbW91bnQuaW5uZXJUZXh0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdmci1GUicsIHtzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdFVVInfSkuZm9ybWF0KHRvdGFsKTtcclxuICAgICAgICB0b3RhbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3RhbEhlYWRpbmcpO1xyXG4gICAgICAgIHRvdGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvdGFsQW1vdW50KTtcclxuICAgICAgICByZXR1cm4gdG90YWxDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gY2xhc3Nlc1xyXG4gICAgICogQHJldHVybiBIVE1MRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzZXModGFnLCBjbGFzc2VzID0gW10pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNsYXNzZXMpKSB7XHJcbiAgICAgICAgICAgIGNsYXNzZXMgPSBbY2xhc3Nlc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgICAgICBmb3IgKGxldCBjbGFzc05hbWUgb2YgY2xhc3Nlcykge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJ1dHRvbk1vZGUoYnV0dG9uLCBhZGRlZClcclxuICAgIHtcclxuICAgICAgICBsZXQgYWRkVGV4dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0nKTtcclxuICAgICAgICBsZXQgcmVtb3ZlVGV4dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWl0ZW0nKTtcclxuICAgICAgICBpZiAoYWRkZWQpIHtcclxuICAgICAgICAgICAgYWRkVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgcmVtb3ZlVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hZGRlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZFRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZVRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWRkZWQnLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eWxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXp5bG9hZCcpKTtcclxuICAgICAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSBvYnNlcnZlciB0byBsb2FkIGxhenkgaW1hZ2VzIHdoZW4gdmlld3BvcnQgaW4gcmFuZ2VcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXp5SW1hZ2UgPSBlbnRyeS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgbGF6eUltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZChsYXp5SW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShsYXp5SW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgbm90IHN1cHBvcnRlZFxyXG4gICAgICovXHJcbiAgICBmYWxsQmFjaygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzLmZvckVhY2goKGxhenlJbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQobGF6eUltYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgdGhlIGxhenkgaW1hZ2VcclxuICAgICAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gbGF6eUltYWdlXHJcbiAgICAgKi9cclxuICAgIGxvYWQobGF6eUltYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxhenlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsYXp5SW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eWxvYWQnKTtcclxuICAgICAgICAgICAgaWYgKGxhenlJbWFnZS5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsYXp5SW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGF6eUltYWdlLnNyYyA9IGxhenlJbWFnZS5kYXRhc2V0LnNyYztcclxuICAgIH1cclxufSIsImltcG9ydCBhamF4IGZyb20gXCIuLi9mdW5jdGlvbnMvX2FqYXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBjYWxsYmFjayBhamF4Q2FsbGJhY2tcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxyXG4gICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gICAgICogQHBhcmFtIHt7ZWxlbWVudDogSFRNTEVsZW1lbnQsIHVybDogc3RyaW5nLCBjYWxsYmFjazogYWpheENhbGxiYWNrLCBkYXRhczogT2JqZWN0fVtdfSBvcHRpb25zLmJ1dHRvbnNcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb3B0aW9ucy5kaXNwbGF5XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSlcclxuICAgIHtcclxuICAgICAgICAvL09wdGlvbnNcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgYnV0dG9uczogW10sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIC8vR2VzdGlvbiBkdSBET01cclxuICAgICAgICB0aGlzLnBvcHVwID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLnNldE92ZXJsYXkoKTtcclxuICAgICAgICB0aGlzLmNsb3NlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZmFzLmZhLXRpbWVzLWNpcmNsZScpO1xyXG4gICAgICAgIHRoaXMuaW1wb3J0RWx0ID0gdGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yKCcuaW1wb3J0Jyk7XHJcblxyXG4gICAgICAgIC8vR2VzdGlvbiBkZXMgZXZlbmVtZW50c1xyXG4gICAgICAgIGlmICh0aGlzLmNsb3NlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3ZlcmxheUNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblBvcHVwQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk92ZXJsYXlDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRCdXR0b25FdmVudChidXR0b24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE92ZXJsYXkoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLnNldFN0eWxlcyhvdmVybGF5LCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsLjcpJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICAgICAgekluZGV4OiAnOTk5JyxcclxuICAgICAgICAgICAgZGlzcGxheTogdGhpcy5vcHRpb25zLmRpc3BsYXkgPyAnZmxleCcgOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgb3ZlcmxheS5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwKTtcclxuICAgICAgICB0aGlzLmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gb3ZlcmxheTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGxpcXVlIGRlcyBzdHlsZXMgQ1NTIMOgIHVuIMOpbMOpbWVudCBIVE1MXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzXHJcbiAgICAgKi9cclxuICAgIHNldFN0eWxlcyhlbGVtZW50LCBzdHlsZXMpXHJcbiAgICB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IHN0eWxlc1twcm9wZXJ0eV07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvbk92ZXJsYXlDbGljaygpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5ib2R5LnJlbW92ZUNoaWxkKHRoaXMub3ZlcmxheSk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgb25Qb3B1cENsaWNrKGUpXHJcbiAgICB7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBidXR0b25cclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGJ1dHRvbi5lbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uLnVybFxyXG4gICAgICogQHBhcmFtIHthamF4Q2FsbGJhY2t9IGJ1dHRvbi5jYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJ1dHRvbi5kYXRhc1xyXG4gICAgICovXHJcbiAgICBzZXRCdXR0b25FdmVudChidXR0b24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFidXR0b24uZGF0YXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uLmRhdGFzID0ge31cclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uZWxlbWVudC5kYXRhc2V0LmNhbmNlbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheUNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhamF4KGJ1dHRvbi51cmwsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChidXR0b24uY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbk92ZXJsYXlDbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfSwge21ldGhvZDogJ1BPU1QnLCBkYXRhczogYnV0dG9uLmRhdGFzfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH1cclxuXHJcbiAgICBpbXBvcnQoZWxlbWVudClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pbXBvcnRFbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBvcnRFbHQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0SW1wb3J0KClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5pbXBvcnRFbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5pbXBvcnRFbHQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRTaXplID0gJzQwcHgnO1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWRTaXplID0gJzI1MHB4JztcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0LXNlYXJjaCcpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidC1zZWFyY2gtdHJpZ2dlcicpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0LXNlYXJjaC1idXR0b24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hUcmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlYXJjaFRyaWdnZXJDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNlYXJjaFRyaWdnZXJDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbk91dGVyQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWFyY2hUcmlnZ2VyQ2xpY2soZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmV4cGFuZGVkID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnNlYXJjaElucHV0KS53aWR0aCA9PT0gdGhpcy5leHBhbmRlZFNpemU7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQgJiYgZS50YXJnZXQgPT09IHRoaXMuc2VhcmNoVHJpZ2dlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KCdjbGljaycpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUlucHV0KHRoaXMuZXhwYW5kZWRTaXplKTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdib3gtc2hhZG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3V0ZXJDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hUcmlnZ2VyIHx8IGUudGFyZ2V0ID09PSB0aGlzLnNlYXJjaElucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNpemVJbnB1dCh0aGlzLmNvbGxhcHNlZFNpemUpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnYm94LXNoYWRvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZUlucHV0KHNpemUpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTaXplID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnNlYXJjaElucHV0KS53aWR0aCk7XHJcbiAgICAgICAgbGV0IHRhcmdldFNpemUgPSBwYXJzZUludChzaXplKTtcclxuICAgICAgICBsZXQgc3BlZWQgPSAxMDtcclxuICAgICAgICBpZiAoY3VycmVudFNpemUgPT09IHRhcmdldFNpemUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhcmdldFNpemUgPiBjdXJyZW50U2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNpemUgKz0gc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2l6ZSA9IGN1cnJlbnRTaXplID4gdGFyZ2V0U2l6ZSA/IHRhcmdldFNpemUgOiBjdXJyZW50U2l6ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTaXplIDwgY3VycmVudFNpemUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaXplIC09IHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNpemUgPSBjdXJyZW50U2l6ZSA8IHRhcmdldFNpemUgPyB0YXJnZXRTaXplIDogY3VycmVudFNpemU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuc3R5bGUud2lkdGggPSBjdXJyZW50U2l6ZSArICdweCc7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIC8vIHRoaXMuc2VhcmNoSW5wdXQuc3R5bGUud2lkdGggPSBzaXplO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGEgZ2xvYmFsIG1lbWJlci5cclxuICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IHJlc3BvbnNlTWVzc2FnZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAqIEBwYXJhbSB7YWpheENhbGxiYWNrfSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubWV0aG9kPUdFVF1cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRhdGFzPXt9XVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmpzb249dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXgodXJsLCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9KVxyXG57XHJcbiAgICAvL1NldHRpbmdzXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBkYXRhczoge30sXHJcbiAgICAgICAganNvbjogdHJ1ZSxcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCBmb3JtRGF0YSA9IG51bGw7XHJcbiAgICBsZXQgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YXMpO1xyXG4gICAgaWYgKHByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocHJvcGVydHksIG9wdGlvbnMuZGF0YXNbcHJvcGVydHldKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgJiYgeGhyLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWNoZWMgSFRUUCA6IGNvZGUnLnhoci5zdGF0dXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm1hdCBKU09OIGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=