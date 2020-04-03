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
/* harmony import */ var _class_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class/_Search */ "./assets/js/class/_Search.js");
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
  new _class_Cart__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _class_Search__WEBPACK_IMPORTED_MODULE_2__["default"]();
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
   * @param {string} [options.shopping_bag_class=cart-hover] Classe CSS du menu panier
   * @param {string} [options.shopping_bag_item_class=cart-hover__item] Classe CSS des items du menu panier
   * @param {string} [options.cart_quantity_class=navbar__item--cart] Classe CSS quantité dans le panier
   */
  function Cart() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Cart);

    //Settings
    this.options = Object.assign({
      button_class: 'cart-button',
      shopping_bag_class: 'cart-hover',
      shopping_bag_item_class: 'cart-hover__item',
      cart_quantity_class: 'navbar__item--cart'
    }, options);
    this.processing = false;
    this.cartContent = {};
    this.onSales = false; //DOM handling

    this.buttons = [].slice.call(document.getElementsByClassName(this.options.button_class));
    this.shoppingBag = document.querySelector('.' + this.options.shopping_bag_class);
    this.shoppingBagQuantity = document.querySelector('.' + this.options.cart_quantity_class);
    this.shoppingBagItemButtons = [].slice.call(document.querySelectorAll('.' + this.options.shopping_bag_item_class + ' .remove-item')); //Events

    this.buttons.forEach(function (button) {
      button.addEventListener('click', _this.onButtonClick.bind(_this, button));
    });
    this.shoppingBagItemButtons.forEach(function (button) {
      button.addEventListener('click', _this.onShoppingBagButtonClick.bind(_this, button));
    });
  }

  _createClass(Cart, [{
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
        _this2.processing = false;
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

},[["./assets/js/app.js","runtime","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fTGF6eWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJMYXp5bG9hZGVyIiwiQ2FydCIsIlNlYXJjaCIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJidXR0b25fY2xhc3MiLCJzaG9wcGluZ19iYWdfY2xhc3MiLCJzaG9wcGluZ19iYWdfaXRlbV9jbGFzcyIsImNhcnRfcXVhbnRpdHlfY2xhc3MiLCJwcm9jZXNzaW5nIiwiY2FydENvbnRlbnQiLCJvblNhbGVzIiwiYnV0dG9ucyIsInNsaWNlIiwiY2FsbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzaG9wcGluZ0JhZyIsInF1ZXJ5U2VsZWN0b3IiLCJzaG9wcGluZ0JhZ1F1YW50aXR5Iiwic2hvcHBpbmdCYWdJdGVtQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwib25CdXR0b25DbGljayIsImJpbmQiLCJvblNob3BwaW5nQmFnQnV0dG9uQ2xpY2siLCJzcGlubmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkZWQiLCJkYXRhc2V0IiwidW5kZWZpbmVkIiwidXJsIiwicmVtb3ZlX2l0ZW1fdXJsIiwiYWRkX2l0ZW1fdXJsIiwiYWpheCIsInJlc3BvbnNlIiwiYWRkIiwic2V0QnV0dG9uTW9kZSIsInVwZGF0ZUNhcnQiLCJjYXJ0IiwiYmx1ciIsImFkZFRvQ2FydEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiaXRlbV9pZCIsIkhUTUxFbGVtZW50IiwianNvblJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImlubmVySFRNTCIsImNvdW50IiwidG90YWwiLCJ2YWx1ZXMiLCJpdGVtIiwiaXRlbUxpc3RFbHQiLCJjcmVhdGVTaG9wcGluZ0JhZ0l0ZW0iLCJwcmljZSIsImRpc2NvdW50UHJpY2UiLCJxdWFudGl0eSIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsImFwcGVuZENoaWxkIiwic2hvcHBpbmdCYWdUb3RhbCIsImNyZWF0ZVNob3BwaW5nQmFnVG90YWwiLCJpdGVtQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzIiwiaXRlbUxpbmsiLCJocmVmIiwibGluayIsInNldEF0dHJpYnV0ZSIsIm5hbWUiLCJpdGVtSW1hZ2UiLCJzcmMiLCJpbWFnZXMiLCJjYWNoZVBhdGgiLCJhbHQiLCJpdGVtUHJpY2UiLCJpbm5lclRleHQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsIml0ZW1SZW1vdmUiLCJpZCIsInJlbW92ZUxpbmsiLCJjcmVhdGVUZXh0Tm9kZSIsInRvdGFsQ29udGFpbmVyIiwidG90YWxIZWFkaW5nIiwidG90YWxBbW91bnQiLCJ0YWciLCJjbGFzc2VzIiwiQXJyYXkiLCJpc0FycmF5IiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhZGRUZXh0IiwicmVtb3ZlVGV4dCIsInJlbW92ZUF0dHJpYnV0ZSIsImxhenlJbWFnZXMiLCJ3aW5kb3ciLCJvYnNlcnZlIiwiZmFsbEJhY2siLCJsYXp5SW1hZ2VPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwibGF6eUltYWdlIiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJIVE1MSW1hZ2VFbGVtZW50IiwibG9hZCIsInVub2JzZXJ2ZSIsImltYWdlIiwibGVuZ3RoIiwiZXhwYW5kZWQiLCJjb2xsYXBzZWRTaXplIiwiZXhwYW5kZWRTaXplIiwic2VhcmNoSW5wdXQiLCJzZWFyY2hUcmlnZ2VyIiwic2VhcmNoQnV0dG9uIiwib25TZWFyY2hUcmlnZ2VyQ2xpY2siLCJib2R5Iiwib25PdXRlckNsaWNrIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndpZHRoIiwiZGlzcGF0Y2hFdmVudCIsIk1vdXNlRXZlbnQiLCJyZXNpemVJbnB1dCIsInNpemUiLCJjdXJyZW50U2l6ZSIsInRhcmdldFNpemUiLCJzcGVlZCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjYWxsYmFjayIsIm1ldGhvZCIsImRhdGFzIiwianNvbiIsImZvcm1EYXRhIiwicHJvcGVydGllcyIsImtleXMiLCJGb3JtRGF0YSIsInByb3BlcnR5IiwiYXBwZW5kIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic3RhdHVzIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsOENBQUQsQ0FBUCxDLENBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBSUMseURBQUo7QUFDQSxNQUFJQyxtREFBSjtBQUNBLE1BQUlDLHFEQUFKO0FBQ0gsQ0FKRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0lBRXFCRCxJO0FBQ2pCOzs7Ozs7O0FBT0Esa0JBQ0E7QUFBQTs7QUFBQSxRQURZRSxPQUNaLHVFQURzQixFQUN0Qjs7QUFBQTs7QUFDSTtBQUNBLFNBQUtBLE9BQUwsR0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDekJD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QUFWO0FBQ0FELEtBQUcsQ0FBQ0UsSUFBSixDQUFTdEosT0FBTyxDQUFDMkksTUFBakIsRUFBeUI3RyxHQUF6QjtBQUNBc0gsS0FBRyxDQUFDeEosZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsWUFBTTtBQUMvQixRQUFJd0osR0FBRyxDQUFDRyxNQUFKLEdBQWEsR0FBYixJQUFvQkgsR0FBRyxDQUFDRyxNQUFKLElBQWMsR0FBdEMsRUFBMkM7QUFDdkN2RyxhQUFPLENBQUNDLEtBQVIsQ0FBYyxvQkFBb0JtRyxHQUFwQixDQUF3QkcsTUFBdEM7QUFDSCxLQUZELE1BRU87QUFDSCxVQUFJckgsUUFBUSxHQUFHa0gsR0FBRyxDQUFDbEgsUUFBbkI7O0FBQ0EsVUFBSWxDLE9BQU8sQ0FBQzZJLElBQVosRUFBa0I7QUFDZCxZQUFJO0FBQ0EzRyxrQkFBUSxHQUFHVyxJQUFJLENBQUNDLEtBQUwsQ0FBV1osUUFBWCxDQUFYO0FBQ0gsU0FGRCxDQUVFLE9BQU9hLENBQVAsRUFBVTtBQUNSQyxpQkFBTyxDQUFDQyxLQUFSLENBQWMsc0JBQWQ7QUFDQSxpQkFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRHlGLGNBQVEsQ0FBQ3hHLFFBQUQsQ0FBUjtBQUNIO0FBQ0osR0FmRDtBQWdCQWtILEtBQUcsQ0FBQ0ksSUFBSixDQUFTVixRQUFUO0FBQ0gsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSByZXF1aXJlIHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5yZXF1aXJlKCcuLi9jc3MvYXBwLnNjc3MnKTtcclxuXHJcbi8vIE5lZWQgalF1ZXJ5PyBJbnN0YWxsIGl0IHdpdGggXCJ5YXJuIGFkZCBqcXVlcnlcIiwgdGhlbiB1bmNvbW1lbnQgdG8gcmVxdWlyZSBpdC5cclxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuaW1wb3J0IExhenlsb2FkZXIgZnJvbSBcIi4vY2xhc3MvX0xhenlsb2FkZXJcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIi4vY2xhc3MvX0NhcnRcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9jbGFzcy9fU2VhcmNoXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbmV3IExhenlsb2FkZXIoKTtcclxuICAgIG5ldyBDYXJ0KCk7XHJcbiAgICBuZXcgU2VhcmNoKCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgYWpheCBmcm9tIFwiLi4vZnVuY3Rpb25zL19hamF4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5idXR0b25fY2xhc3M9Y2FydC1idXR0b25dIENsYXNzZSBDU1MgZGVzIGJvdXRvbnMgZCdham91dCBhdSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3M9Y2FydC1ob3Zlcl0gQ2xhc3NlIENTUyBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzPWNhcnQtaG92ZXJfX2l0ZW1dIENsYXNzZSBDU1MgZGVzIGl0ZW1zIGR1IG1lbnUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY2FydF9xdWFudGl0eV9jbGFzcz1uYXZiYXJfX2l0ZW0tLWNhcnRdIENsYXNzZSBDU1MgcXVhbnRpdMOpIGRhbnMgbGUgcGFuaWVyXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSlcclxuICAgIHtcclxuICAgICAgICAvL1NldHRpbmdzXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIGJ1dHRvbl9jbGFzczogJ2NhcnQtYnV0dG9uJyxcclxuICAgICAgICAgICAgc2hvcHBpbmdfYmFnX2NsYXNzOiAnY2FydC1ob3ZlcicsXHJcbiAgICAgICAgICAgIHNob3BwaW5nX2JhZ19pdGVtX2NsYXNzOiAnY2FydC1ob3Zlcl9faXRlbScsXHJcbiAgICAgICAgICAgIGNhcnRfcXVhbnRpdHlfY2xhc3M6ICduYXZiYXJfX2l0ZW0tLWNhcnQnLFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSB7fTtcclxuICAgICAgICB0aGlzLm9uU2FsZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9ET00gaGFuZGxpbmdcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5vcHRpb25zLmJ1dHRvbl9jbGFzcykpO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnUXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyt0aGlzLm9wdGlvbnMuY2FydF9xdWFudGl0eV9jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ0l0ZW1CdXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyt0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJyAucmVtb3ZlLWl0ZW0nKSk7XHJcblxyXG4gICAgICAgIC8vRXZlbnRzXHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJ1dHRvbkNsaWNrLmJpbmQodGhpcywgYnV0dG9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ0l0ZW1CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBidXR0b24pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJ1dHRvbkNsaWNrKGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc3Bpbm5lciA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgIHNwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgbGV0IGFkZGVkID0gYnV0dG9uLmRhdGFzZXQuYWRkZWQgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgdXJsID0gYWRkZWQgPyBidXR0b24uZGF0YXNldC5yZW1vdmVfaXRlbV91cmwgOiBidXR0b24uZGF0YXNldC5hZGRfaXRlbV91cmw7XHJcbiAgICAgICAgYWpheCh1cmwsIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbk1vZGUoYnV0dG9uLCBhZGRlZCk7XHJcbiAgICAgICAgICAgIHRoaXMub25TYWxlcyA9IHJlc3BvbnNlLm9uU2FsZXMgPT09IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydChyZXNwb25zZS5jYXJ0KTtcclxuICAgICAgICAgICAgYnV0dG9uLmJsdXIoKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrKGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9jZXNzaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmFyJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXdpbmRvdy1jbG9zZScpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYXMnKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgIGxldCB1cmwgPSBidXR0b24uZGF0YXNldC5yZW1vdmVfaXRlbV91cmw7XHJcbiAgICAgICAgbGV0IGFkZFRvQ2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWJ1dHRvbi0nK2J1dHRvbi5kYXRhc2V0Lml0ZW1faWQpO1xyXG4gICAgICAgIGFqYXgodXJsLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcycpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZmEtc3Bpbm5lcicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmFyJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYS13aW5kb3ctY2xvc2UnKTtcclxuICAgICAgICAgICAgaWYgKGFkZFRvQ2FydEJ1dHRvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJ1dHRvbk1vZGUoYWRkVG9DYXJ0QnV0dG9uLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uU2FsZXMgPSByZXNwb25zZS5vblNhbGVzID09PSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnQocmVzcG9uc2UuY2FydCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNhcnQoanNvblJlc3BvbnNlKVxyXG4gICAge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSBKU09OLnBhcnNlKGpzb25SZXNwb25zZSk7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jYXJ0Q29udGVudCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FydENvbnRlbnQgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybWF0IEpTT04gcGFuaWVyIG5vbiB2YWxpZGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jYXJ0Q29udGVudCkuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1MaXN0RWx0ID0gdGhpcy5jcmVhdGVTaG9wcGluZ0JhZ0l0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBwcmljZSA9IHRoaXMub25TYWxlcyA/IGl0ZW0uZGlzY291bnRQcmljZSA6IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgICAgIGxldCBxdWFudGl0eSA9IHBhcnNlSW50KGl0ZW0ucXVhbnRpdHkpO1xyXG4gICAgICAgICAgICB0b3RhbCArPSBxdWFudGl0eSAqIHBhcnNlRmxvYXQocHJpY2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3BwaW5nQmFnLmFwcGVuZENoaWxkKGl0ZW1MaXN0RWx0KTtcclxuICAgICAgICAgICAgY291bnQgKz0gaXRlbS5xdWFudGl0eTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBzaG9wcGluZ0JhZ1RvdGFsID0gdGhpcy5jcmVhdGVTaG9wcGluZ0JhZ1RvdGFsKHRvdGFsKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5hcHBlbmRDaGlsZChzaG9wcGluZ0JhZ1RvdGFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ1F1YW50aXR5LmRhdGFzZXQucXVhbnRpdHkgPSBjb3VudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXHJcbiAgICAgKiBAcmV0dXJuIEhUTUxFbGVtZW50XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVNob3BwaW5nQmFnSXRlbShpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2RpdicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcyk7XHJcbiAgICAgICAgbGV0IGl0ZW1MaW5rID0gdGhpcy5jcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoJ2EnLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MrJ19fbGluaycpO1xyXG4gICAgICAgIGl0ZW1MaW5rLmhyZWYgPSBpdGVtLmxpbms7XHJcbiAgICAgICAgaXRlbUxpbmsuc2V0QXR0cmlidXRlKCd0aXRsZScsIGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgbGV0IGl0ZW1JbWFnZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdpbWcnKTtcclxuICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZXNbMF0uY2FjaGVQYXRoO1xyXG4gICAgICAgIGl0ZW1JbWFnZS5hbHQgPSBpdGVtLmltYWdlc1swXS5hbHQ7XHJcbiAgICAgICAgbGV0IGl0ZW1QcmljZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKydfX3ByaWNlJyk7XHJcbiAgICAgICAgbGV0IHByaWNlID0gdGhpcy5vblNhbGVzID8gaXRlbS5kaXNjb3VudFByaWNlIDogaXRlbS5wcmljZTtcclxuICAgICAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdmci1GUicsIHtzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdFVVInfSkuZm9ybWF0KHByaWNlKTtcclxuICAgICAgICBsZXQgaXRlbVJlbW92ZSA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdpJywgWydyZW1vdmUtaXRlbScsICdmYXInLCAnZmEtd2luZG93LWNsb3NlJ10pO1xyXG4gICAgICAgIGl0ZW1SZW1vdmUuc2V0QXR0cmlidXRlKCdkYXRhLWl0ZW1faWQnLCBpdGVtLmlkKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLnNldEF0dHJpYnV0ZSgnZGF0YS1yZW1vdmVfaXRlbV91cmwnLCBpdGVtLnJlbW92ZUxpbmspO1xyXG4gICAgICAgIGl0ZW1SZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2hvcHBpbmdCYWdCdXR0b25DbGljay5iaW5kKHRoaXMsIGl0ZW1SZW1vdmUpKTtcclxuXHJcbiAgICAgICAgaXRlbUxpbmsuYXBwZW5kQ2hpbGQoaXRlbUltYWdlKTtcclxuICAgICAgICBpdGVtTGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnICcraXRlbS5uYW1lKSk7XHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtTGluayk7XHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVJlbW92ZSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1Db250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2Zsb2F0fSB0b3RhbFxyXG4gICAgICogQHJldHVybiBIVE1MRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVTaG9wcGluZ0JhZ1RvdGFsKHRvdGFsKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0b3RhbENvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdkaXYnLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzKydfX3RvdGFsJyk7XHJcbiAgICAgICAgbGV0IHRvdGFsSGVhZGluZyA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJyk7XHJcbiAgICAgICAgdG90YWxIZWFkaW5nLmlubmVyVGV4dCA9ICdUb3RhbDonO1xyXG4gICAgICAgIGxldCB0b3RhbEFtb3VudCA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdzcGFuJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcysnX190b3RhbF9fYW1vdW50Jyk7XHJcbiAgICAgICAgdG90YWxBbW91bnQuaW5uZXJUZXh0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdmci1GUicsIHtzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdFVVInfSkuZm9ybWF0KHRvdGFsKTtcclxuICAgICAgICB0b3RhbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3RhbEhlYWRpbmcpO1xyXG4gICAgICAgIHRvdGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvdGFsQW1vdW50KTtcclxuICAgICAgICByZXR1cm4gdG90YWxDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheX0gY2xhc3Nlc1xyXG4gICAgICogQHJldHVybiBIVE1MRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzZXModGFnLCBjbGFzc2VzID0gW10pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNsYXNzZXMpKSB7XHJcbiAgICAgICAgICAgIGNsYXNzZXMgPSBbY2xhc3Nlc107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgICAgICBmb3IgKGxldCBjbGFzc05hbWUgb2YgY2xhc3Nlcykge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJ1dHRvbk1vZGUoYnV0dG9uLCBhZGRlZClcclxuICAgIHtcclxuICAgICAgICBsZXQgYWRkVGV4dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuYWRkLWl0ZW0nKTtcclxuICAgICAgICBsZXQgcmVtb3ZlVGV4dCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWl0ZW0nKTtcclxuICAgICAgICBpZiAoYWRkZWQpIHtcclxuICAgICAgICAgICAgYWRkVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgcmVtb3ZlVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1hZGRlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZFRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZVRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWRkZWQnLCAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eWxvYWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYXp5bG9hZCcpKTtcclxuICAgICAgICBpZiAoXCJJbnRlcnNlY3Rpb25PYnNlcnZlclwiIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhbGxCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlIHRoZSBvYnNlcnZlciB0byBsb2FkIGxhenkgaW1hZ2VzIHdoZW4gdmlld3BvcnQgaW4gcmFuZ2VcclxuICAgICAqL1xyXG4gICAgb2JzZXJ2ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBsYXp5SW1hZ2UgPSBlbnRyeS50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgbGF6eUltYWdlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZChsYXp5SW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShsYXp5SW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWYgaW50ZXJzZWN0aW9uT2JzZXJ2ZXIgbm90IHN1cHBvcnRlZFxyXG4gICAgICovXHJcbiAgICBmYWxsQmFjaygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXp5SW1hZ2VzLmZvckVhY2goKGxhenlJbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQobGF6eUltYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIExvYWQgdGhlIGxhenkgaW1hZ2VcclxuICAgICAqIEBwYXJhbSB7SFRNTEltYWdlRWxlbWVudH0gbGF6eUltYWdlXHJcbiAgICAgKi9cclxuICAgIGxvYWQobGF6eUltYWdlKVxyXG4gICAge1xyXG4gICAgICAgIGxhenlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsYXp5SW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbGF6eWxvYWQnKTtcclxuICAgICAgICAgICAgaWYgKGxhenlJbWFnZS5jbGFzc0xpc3QubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsYXp5SW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGF6eUltYWdlLnNyYyA9IGxhenlJbWFnZS5kYXRhc2V0LnNyYztcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29sbGFwc2VkU2l6ZSA9ICc0MHB4JztcclxuICAgICAgICB0aGlzLmV4cGFuZGVkU2l6ZSA9ICcyNTBweCc7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidC1zZWFyY2gnKTtcclxuICAgICAgICB0aGlzLnNlYXJjaFRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnQtc2VhcmNoLXRyaWdnZXInKTtcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidC1zZWFyY2gtYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoVHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWFyY2hUcmlnZ2VyQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TZWFyY2hUcmlnZ2VyQ2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdXRlckNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VhcmNoVHJpZ2dlckNsaWNrKGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5leHBhbmRlZCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5zZWFyY2hJbnB1dCkud2lkdGggPT09IHRoaXMuZXhwYW5kZWRTaXplO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGFuZGVkICYmIGUudGFyZ2V0ID09PSB0aGlzLnNlYXJjaFRyaWdnZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudCgnY2xpY2snKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXNpemVJbnB1dCh0aGlzLmV4cGFuZGVkU2l6ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuY2xhc3NMaXN0LmFkZCgnYm94LXNoYWRvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk91dGVyQ2xpY2soZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHRoaXMuc2VhcmNoVHJpZ2dlciB8fCBlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hJbnB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzaXplSW5wdXQodGhpcy5jb2xsYXBzZWRTaXplKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2JveC1zaGFkb3cnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemVJbnB1dChzaXplKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjdXJyZW50U2l6ZSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5zZWFyY2hJbnB1dCkud2lkdGgpO1xyXG4gICAgICAgIGxldCB0YXJnZXRTaXplID0gcGFyc2VJbnQoc2l6ZSk7XHJcbiAgICAgICAgbGV0IHNwZWVkID0gMTA7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTaXplID09PSB0YXJnZXRTaXplKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRTaXplID4gY3VycmVudFNpemUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaXplICs9IHNwZWVkO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNpemUgPSBjdXJyZW50U2l6ZSA+IHRhcmdldFNpemUgPyB0YXJnZXRTaXplIDogY3VycmVudFNpemU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2l6ZSA8IGN1cnJlbnRTaXplKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2l6ZSAtPSBzcGVlZDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaXplID0gY3VycmVudFNpemUgPCB0YXJnZXRTaXplID8gdGFyZ2V0U2l6ZSA6IGN1cnJlbnRTaXplO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LnN0eWxlLndpZHRoID0gY3VycmVudFNpemUgKyAncHgnO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgICAgICAvLyB0aGlzLnNlYXJjaElucHV0LnN0eWxlLndpZHRoID0gc2l6ZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBhIGdsb2JhbCBtZW1iZXIuXHJcbiAqIEBjYWxsYmFjayBhamF4Q2FsbGJhY2tcclxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSByZXNwb25zZU1lc3NhZ2VcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gKiBAcGFyYW0ge2FqYXhDYWxsYmFja30gY2FsbGJhY2tcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm1ldGhvZD1HRVRdXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kYXRhcz17fV1cclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5qc29uPXRydWVdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamF4KHVybCwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSlcclxue1xyXG4gICAgLy9TZXR0aW5nc1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgZGF0YXM6IHt9LFxyXG4gICAgICAgIGpzb246IHRydWUsXHJcbiAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgZm9ybURhdGEgPSBudWxsO1xyXG4gICAgbGV0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGFzKTtcclxuICAgIGlmIChwcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHByb3BlcnR5LCBvcHRpb25zLmRhdGFzW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsKTtcclxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh4aHIuc3RhdHVzIDwgMjAwICYmIHhoci5zdGF0dXMgPj0gNDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VjaGVjIEhUVFAgOiBjb2RlJy54aHIuc3RhdHVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtYXQgSlNPTiBpbnZhbGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9