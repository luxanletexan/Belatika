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
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.values */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.link */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../functions/_ajax */ "./assets/js/functions/_ajax.js");




















function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Cart =
/*#__PURE__*/
function () {
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
      Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_19__["default"])(url, function (response) {
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
      Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_19__["default"])(url, function (response) {
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
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var className = _step.value;
          element.classList.add(className);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
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

var Lazyloader =
/*#__PURE__*/
function () {
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

var Search =
/*#__PURE__*/
function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NsYXNzL19DYXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fTGF6eWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJMYXp5bG9hZGVyIiwiQ2FydCIsIlNlYXJjaCIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJidXR0b25fY2xhc3MiLCJzaG9wcGluZ19iYWdfY2xhc3MiLCJzaG9wcGluZ19iYWdfaXRlbV9jbGFzcyIsImNhcnRfcXVhbnRpdHlfY2xhc3MiLCJwcm9jZXNzaW5nIiwiY2FydENvbnRlbnQiLCJvblNhbGVzIiwiYnV0dG9ucyIsInNsaWNlIiwiY2FsbCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzaG9wcGluZ0JhZyIsInF1ZXJ5U2VsZWN0b3IiLCJzaG9wcGluZ0JhZ1F1YW50aXR5Iiwic2hvcHBpbmdCYWdJdGVtQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwib25CdXR0b25DbGljayIsImJpbmQiLCJvblNob3BwaW5nQmFnQnV0dG9uQ2xpY2siLCJzcGlubmVyIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkZWQiLCJkYXRhc2V0IiwidW5kZWZpbmVkIiwidXJsIiwicmVtb3ZlX2l0ZW1fdXJsIiwiYWRkX2l0ZW1fdXJsIiwiYWpheCIsInJlc3BvbnNlIiwiYWRkIiwic2V0QnV0dG9uTW9kZSIsInVwZGF0ZUNhcnQiLCJjYXJ0IiwiYmx1ciIsImFkZFRvQ2FydEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiaXRlbV9pZCIsIkhUTUxFbGVtZW50IiwianNvblJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImlubmVySFRNTCIsImNvdW50IiwidG90YWwiLCJ2YWx1ZXMiLCJpdGVtIiwiaXRlbUxpc3RFbHQiLCJjcmVhdGVTaG9wcGluZ0JhZ0l0ZW0iLCJwcmljZSIsImRpc2NvdW50UHJpY2UiLCJxdWFudGl0eSIsInBhcnNlSW50IiwicGFyc2VGbG9hdCIsImFwcGVuZENoaWxkIiwic2hvcHBpbmdCYWdUb3RhbCIsImNyZWF0ZVNob3BwaW5nQmFnVG90YWwiLCJpdGVtQ29udGFpbmVyIiwiY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzIiwiaXRlbUxpbmsiLCJocmVmIiwibGluayIsInNldEF0dHJpYnV0ZSIsIm5hbWUiLCJpdGVtSW1hZ2UiLCJzcmMiLCJpbWFnZXMiLCJjYWNoZVBhdGgiLCJhbHQiLCJpdGVtUHJpY2UiLCJpbm5lclRleHQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsIml0ZW1SZW1vdmUiLCJpZCIsInJlbW92ZUxpbmsiLCJjcmVhdGVUZXh0Tm9kZSIsInRvdGFsQ29udGFpbmVyIiwidG90YWxIZWFkaW5nIiwidG90YWxBbW91bnQiLCJ0YWciLCJjbGFzc2VzIiwiQXJyYXkiLCJpc0FycmF5IiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhZGRUZXh0IiwicmVtb3ZlVGV4dCIsInJlbW92ZUF0dHJpYnV0ZSIsImxhenlJbWFnZXMiLCJ3aW5kb3ciLCJvYnNlcnZlIiwiZmFsbEJhY2siLCJsYXp5SW1hZ2VPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwibGF6eUltYWdlIiwidGFyZ2V0IiwiaXNJbnRlcnNlY3RpbmciLCJIVE1MSW1hZ2VFbGVtZW50IiwibG9hZCIsInVub2JzZXJ2ZSIsImltYWdlIiwibGVuZ3RoIiwiZXhwYW5kZWQiLCJjb2xsYXBzZWRTaXplIiwiZXhwYW5kZWRTaXplIiwic2VhcmNoSW5wdXQiLCJzZWFyY2hUcmlnZ2VyIiwic2VhcmNoQnV0dG9uIiwib25TZWFyY2hUcmlnZ2VyQ2xpY2siLCJib2R5Iiwib25PdXRlckNsaWNrIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndpZHRoIiwiZGlzcGF0Y2hFdmVudCIsIk1vdXNlRXZlbnQiLCJyZXNpemVJbnB1dCIsInNpemUiLCJjdXJyZW50U2l6ZSIsInRhcmdldFNpemUiLCJzcGVlZCIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjYWxsYmFjayIsIm1ldGhvZCIsImRhdGFzIiwianNvbiIsImZvcm1EYXRhIiwicHJvcGVydGllcyIsImtleXMiLCJGb3JtRGF0YSIsInByb3BlcnR5IiwiYXBwZW5kIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwic3RhdHVzIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0FBLG1CQUFPLENBQUMsOENBQUQsQ0FBUCxDLENBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBSUMseURBQUo7QUFDQSxNQUFJQyxtREFBSjtBQUNBLE1BQUlDLHFEQUFKO0FBQ0gsQ0FKRCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7O0lBRXFCRCxJOzs7QUFDakI7Ozs7Ozs7QUFPQSxrQkFDQTtBQUFBOztBQUFBLFFBRFlFLE9BQ1osdUVBRHNCLEVBQ3RCOztBQUFBOztBQUNJO0FBQ0EsU0FBS0EsT0FBTCxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN6QkMsa0JBQVksRUFBRSxh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O0FBR0g7O0FBQ0QsTUFBSUUsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtBQUNBRCxLQUFHLENBQUNFLElBQUosQ0FBU3RKLE9BQU8sQ0FBQzJJLE1BQWpCLEVBQXlCN0csR0FBekI7QUFDQXNILEtBQUcsQ0FBQ3hKLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQU07QUFDL0IsUUFBSXdKLEdBQUcsQ0FBQ0csTUFBSixHQUFhLEdBQWIsSUFBb0JILEdBQUcsQ0FBQ0csTUFBSixJQUFjLEdBQXRDLEVBQTJDO0FBQ3ZDdkcsYUFBTyxDQUFDQyxLQUFSLENBQWMsb0JBQW9CbUcsR0FBcEIsQ0FBd0JHLE1BQXRDO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsVUFBSXJILFFBQVEsR0FBR2tILEdBQUcsQ0FBQ2xILFFBQW5COztBQUNBLFVBQUlsQyxPQUFPLENBQUM2SSxJQUFaLEVBQWtCO0FBQ2QsWUFBSTtBQUNBM0csa0JBQVEsR0FBR1csSUFBSSxDQUFDQyxLQUFMLENBQVdaLFFBQVgsQ0FBWDtBQUNILFNBRkQsQ0FFRSxPQUFPYSxDQUFQLEVBQVU7QUFDUkMsaUJBQU8sQ0FBQ0MsS0FBUixDQUFjLHNCQUFkO0FBQ0EsaUJBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0R5RixjQUFRLENBQUN4RyxRQUFELENBQVI7QUFDSDtBQUNKLEdBZkQ7QUFnQkFrSCxLQUFHLENBQUNJLElBQUosQ0FBU1YsUUFBVDtBQUNILEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgcmVxdWlyZSB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZSgnLi4vY3NzL2FwcC5zY3NzJyk7XHJcblxyXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXHJcbi8vIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbmltcG9ydCBMYXp5bG9hZGVyIGZyb20gXCIuL2NsYXNzL19MYXp5bG9hZGVyXCI7XHJcbmltcG9ydCBDYXJ0IGZyb20gXCIuL2NsYXNzL19DYXJ0XCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vY2xhc3MvX1NlYXJjaFwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIG5ldyBMYXp5bG9hZGVyKCk7XHJcbiAgICBuZXcgQ2FydCgpO1xyXG4gICAgbmV3IFNlYXJjaCgpO1xyXG59KTtcclxuIiwiaW1wb3J0IGFqYXggZnJvbSBcIi4uL2Z1bmN0aW9ucy9fYWpheFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuYnV0dG9uX2NsYXNzPWNhcnQtYnV0dG9uXSBDbGFzc2UgQ1NTIGRlcyBib3V0b25zIGQnYWpvdXQgYXUgcGFuaWVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2hvcHBpbmdfYmFnX2NsYXNzPWNhcnQtaG92ZXJdIENsYXNzZSBDU1MgZHUgbWVudSBwYW5pZXJcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcz1jYXJ0LWhvdmVyX19pdGVtXSBDbGFzc2UgQ1NTIGRlcyBpdGVtcyBkdSBtZW51IHBhbmllclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhcnRfcXVhbnRpdHlfY2xhc3M9bmF2YmFyX19pdGVtLS1jYXJ0XSBDbGFzc2UgQ1NTIHF1YW50aXTDqSBkYW5zIGxlIHBhbmllclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pXHJcbiAgICB7XHJcbiAgICAgICAgLy9TZXR0aW5nc1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBidXR0b25fY2xhc3M6ICdjYXJ0LWJ1dHRvbicsXHJcbiAgICAgICAgICAgIHNob3BwaW5nX2JhZ19jbGFzczogJ2NhcnQtaG92ZXInLFxyXG4gICAgICAgICAgICBzaG9wcGluZ19iYWdfaXRlbV9jbGFzczogJ2NhcnQtaG92ZXJfX2l0ZW0nLFxyXG4gICAgICAgICAgICBjYXJ0X3F1YW50aXR5X2NsYXNzOiAnbmF2YmFyX19pdGVtLS1jYXJ0JyxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhcnRDb250ZW50ID0ge307XHJcbiAgICAgICAgdGhpcy5vblNhbGVzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vRE9NIGhhbmRsaW5nXHJcbiAgICAgICAgdGhpcy5idXR0b25zID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMub3B0aW9ucy5idXR0b25fY2xhc3MpKTtcclxuICAgICAgICB0aGlzLnNob3BwaW5nQmFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcyk7XHJcbiAgICAgICAgdGhpcy5zaG9wcGluZ0JhZ1F1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicrdGhpcy5vcHRpb25zLmNhcnRfcXVhbnRpdHlfY2xhc3MpO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWdJdGVtQnV0dG9ucyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKycgLnJlbW92ZS1pdGVtJykpO1xyXG5cclxuICAgICAgICAvL0V2ZW50c1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CdXR0b25DbGljay5iaW5kKHRoaXMsIGJ1dHRvbikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWdJdGVtQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25TaG9wcGluZ0JhZ0J1dHRvbkNsaWNrLmJpbmQodGhpcywgYnV0dG9uKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CdXR0b25DbGljayhidXR0b24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHNwaW5uZXIgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLmZhLXNwaW5uZXInKTtcclxuICAgICAgICBzcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIGxldCBhZGRlZCA9IGJ1dHRvbi5kYXRhc2V0LmFkZGVkICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgbGV0IHVybCA9IGFkZGVkID8gYnV0dG9uLmRhdGFzZXQucmVtb3ZlX2l0ZW1fdXJsIDogYnV0dG9uLmRhdGFzZXQuYWRkX2l0ZW1fdXJsO1xyXG4gICAgICAgIGFqYXgodXJsLCAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgc3Bpbm5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRCdXR0b25Nb2RlKGJ1dHRvbiwgYWRkZWQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uU2FsZXMgPSByZXNwb25zZS5vblNhbGVzID09PSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnQocmVzcG9uc2UuY2FydCk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5ibHVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvcHBpbmdCYWdCdXR0b25DbGljayhidXR0b24pXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvY2Vzc2luZykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcicpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYS13aW5kb3ctY2xvc2UnKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmFzJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNwaW5uZXInKTtcclxuICAgICAgICBsZXQgdXJsID0gYnV0dG9uLmRhdGFzZXQucmVtb3ZlX2l0ZW1fdXJsO1xyXG4gICAgICAgIGxldCBhZGRUb0NhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1idXR0b24tJytidXR0b24uZGF0YXNldC5pdGVtX2lkKTtcclxuICAgICAgICBhamF4KHVybCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXMnKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhLXNwaW5uZXInKTtcclxuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhcicpO1xyXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZmEtd2luZG93LWNsb3NlJyk7XHJcbiAgICAgICAgICAgIGlmIChhZGRUb0NhcnRCdXR0b24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRCdXR0b25Nb2RlKGFkZFRvQ2FydEJ1dHRvbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vblNhbGVzID0gcmVzcG9uc2Uub25TYWxlcyA9PT0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0KHJlc3BvbnNlLmNhcnQpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDYXJ0KGpzb25SZXNwb25zZSlcclxuICAgIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcnRDb250ZW50ID0gSlNPTi5wYXJzZShqc29uUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY2FydENvbnRlbnQgIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcnRDb250ZW50ID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm1hdCBKU09OIHBhbmllciBub24gdmFsaWRlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuY2FydENvbnRlbnQpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtTGlzdEVsdCA9IHRoaXMuY3JlYXRlU2hvcHBpbmdCYWdJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICBsZXQgcHJpY2UgPSB0aGlzLm9uU2FsZXMgPyBpdGVtLmRpc2NvdW50UHJpY2UgOiBpdGVtLnByaWNlO1xyXG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSBwYXJzZUludChpdGVtLnF1YW50aXR5KTtcclxuICAgICAgICAgICAgdG90YWwgKz0gcXVhbnRpdHkgKiBwYXJzZUZsb2F0KHByaWNlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wcGluZ0JhZy5hcHBlbmRDaGlsZChpdGVtTGlzdEVsdCk7XHJcbiAgICAgICAgICAgIGNvdW50ICs9IGl0ZW0ucXVhbnRpdHk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRvdGFsID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgc2hvcHBpbmdCYWdUb3RhbCA9IHRoaXMuY3JlYXRlU2hvcHBpbmdCYWdUb3RhbCh0b3RhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvcHBpbmdCYWcuYXBwZW5kQ2hpbGQoc2hvcHBpbmdCYWdUb3RhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvcHBpbmdCYWdRdWFudGl0eS5kYXRhc2V0LnF1YW50aXR5ID0gY291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxyXG4gICAgICogQHJldHVybiBIVE1MRWxlbWVudFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVTaG9wcGluZ0JhZ0l0ZW0oaXRlbSlcclxuICAgIHtcclxuICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdkaXYnLCB0aGlzLm9wdGlvbnMuc2hvcHBpbmdfYmFnX2l0ZW1fY2xhc3MpO1xyXG4gICAgICAgIGxldCBpdGVtTGluayA9IHRoaXMuY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKCdhJywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19pdGVtX2NsYXNzKydfX2xpbmsnKTtcclxuICAgICAgICBpdGVtTGluay5ocmVmID0gaXRlbS5saW5rO1xyXG4gICAgICAgIGl0ZW1MaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBpdGVtLm5hbWUpO1xyXG4gICAgICAgIGxldCBpdGVtSW1hZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnaW1nJyk7XHJcbiAgICAgICAgaXRlbUltYWdlLnNyYyA9IGl0ZW0uaW1hZ2VzWzBdLmNhY2hlUGF0aDtcclxuICAgICAgICBpdGVtSW1hZ2UuYWx0ID0gaXRlbS5pbWFnZXNbMF0uYWx0O1xyXG4gICAgICAgIGxldCBpdGVtUHJpY2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcygnc3BhbicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfaXRlbV9jbGFzcysnX19wcmljZScpO1xyXG4gICAgICAgIGxldCBwcmljZSA9IHRoaXMub25TYWxlcyA/IGl0ZW0uZGlzY291bnRQcmljZSA6IGl0ZW0ucHJpY2U7XHJcbiAgICAgICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZnItRlInLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJ30pLmZvcm1hdChwcmljZSk7XHJcbiAgICAgICAgbGV0IGl0ZW1SZW1vdmUgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnaScsIFsncmVtb3ZlLWl0ZW0nLCAnZmFyJywgJ2ZhLXdpbmRvdy1jbG9zZSddKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLnNldEF0dHJpYnV0ZSgnZGF0YS1pdGVtX2lkJywgaXRlbS5pZCk7XHJcbiAgICAgICAgaXRlbVJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcmVtb3ZlX2l0ZW1fdXJsJywgaXRlbS5yZW1vdmVMaW5rKTtcclxuICAgICAgICBpdGVtUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblNob3BwaW5nQmFnQnV0dG9uQ2xpY2suYmluZCh0aGlzLCBpdGVtUmVtb3ZlKSk7XHJcblxyXG4gICAgICAgIGl0ZW1MaW5rLmFwcGVuZENoaWxkKGl0ZW1JbWFnZSk7XHJcbiAgICAgICAgaXRlbUxpbmsuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnK2l0ZW0ubmFtZSkpO1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbUxpbmspO1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcclxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1SZW1vdmUpO1xyXG4gICAgICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtmbG9hdH0gdG90YWxcclxuICAgICAqIEByZXR1cm4gSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU2hvcHBpbmdCYWdUb3RhbCh0b3RhbClcclxuICAgIHtcclxuICAgICAgICBsZXQgdG90YWxDb250YWluZXIgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcygnZGl2JywgdGhpcy5vcHRpb25zLnNob3BwaW5nX2JhZ19jbGFzcysnX190b3RhbCcpO1xyXG4gICAgICAgIGxldCB0b3RhbEhlYWRpbmcgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcygnc3BhbicpO1xyXG4gICAgICAgIHRvdGFsSGVhZGluZy5pbm5lclRleHQgPSAnVG90YWw6JztcclxuICAgICAgICBsZXQgdG90YWxBbW91bnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3Nlcygnc3BhbicsIHRoaXMub3B0aW9ucy5zaG9wcGluZ19iYWdfY2xhc3MrJ19fdG90YWxfX2Ftb3VudCcpO1xyXG4gICAgICAgIHRvdGFsQW1vdW50LmlubmVyVGV4dCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZnItRlInLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnRVVSJ30pLmZvcm1hdCh0b3RhbCk7XHJcbiAgICAgICAgdG90YWxDb250YWluZXIuYXBwZW5kQ2hpbGQodG90YWxIZWFkaW5nKTtcclxuICAgICAgICB0b3RhbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3RhbEFtb3VudCk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd8YXJyYXl9IGNsYXNzZXNcclxuICAgICAqIEByZXR1cm4gSFRNTEVsZW1lbnRcclxuICAgICAqL1xyXG4gICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKHRhZywgY2xhc3NlcyA9IFtdKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjbGFzc2VzKSkge1xyXG4gICAgICAgICAgICBjbGFzc2VzID0gW2NsYXNzZXNdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICAgICAgZm9yIChsZXQgY2xhc3NOYW1lIG9mIGNsYXNzZXMpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRCdXR0b25Nb2RlKGJ1dHRvbiwgYWRkZWQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFkZFRleHQgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLmFkZC1pdGVtJyk7XHJcbiAgICAgICAgbGV0IHJlbW92ZVRleHQgPSBidXR0b24ucXVlcnlTZWxlY3RvcignLnJlbW92ZS1pdGVtJyk7XHJcbiAgICAgICAgaWYgKGFkZGVkKSB7XHJcbiAgICAgICAgICAgIGFkZFRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZVRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtYWRkZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICByZW1vdmVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWFkZGVkJywgJycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExhenlsb2FkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGF6eUltYWdlcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGF6eWxvYWQnKSk7XHJcbiAgICAgICAgaWYgKFwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcIiBpbiB3aW5kb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5vYnNlcnZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mYWxsQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVzZSB0aGUgb2JzZXJ2ZXIgdG8gbG9hZCBsYXp5IGltYWdlcyB3aGVuIHZpZXdwb3J0IGluIHJhbmdlXHJcbiAgICAgKi9cclxuICAgIG9ic2VydmUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBsYXp5SW1hZ2VPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF6eUltYWdlID0gZW50cnkudGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmIGxhenlJbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWQobGF6eUltYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci51bm9ic2VydmUobGF6eUltYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGF6eUltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGludGVyc2VjdGlvbk9ic2VydmVyIG5vdCBzdXBwb3J0ZWRcclxuICAgICAqL1xyXG4gICAgZmFsbEJhY2soKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubGF6eUltYWdlcy5mb3JFYWNoKChsYXp5SW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkKGxhenlJbWFnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHRoZSBsYXp5IGltYWdlXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxJbWFnZUVsZW1lbnR9IGxhenlJbWFnZVxyXG4gICAgICovXHJcbiAgICBsb2FkKGxhenlJbWFnZSlcclxuICAgIHtcclxuICAgICAgICBsYXp5SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGF6eUltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2xhenlsb2FkJyk7XHJcbiAgICAgICAgICAgIGlmIChsYXp5SW1hZ2UuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGF6eUltYWdlLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxhenlJbWFnZS5zcmMgPSBsYXp5SW1hZ2UuZGF0YXNldC5zcmM7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hcclxue1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZFNpemUgPSAnNDBweCc7XHJcbiAgICAgICAgdGhpcy5leHBhbmRlZFNpemUgPSAnMjUwcHgnO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnQtc2VhcmNoJyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0LXNlYXJjaC10cmlnZ2VyJyk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnQtc2VhcmNoLWJ1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VhcmNoVHJpZ2dlckNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uU2VhcmNoVHJpZ2dlckNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3V0ZXJDbGljay5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlYXJjaFRyaWdnZXJDbGljayhlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZXhwYW5kZWQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuc2VhcmNoSW5wdXQpLndpZHRoID09PSB0aGlzLmV4cGFuZGVkU2l6ZTtcclxuICAgICAgICBpZiAodGhpcy5leHBhbmRlZCAmJiBlLnRhcmdldCA9PT0gdGhpcy5zZWFyY2hUcmlnZ2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoJ2NsaWNrJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzaXplSW5wdXQodGhpcy5leHBhbmRlZFNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoJ2JveC1zaGFkb3cnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25PdXRlckNsaWNrKGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzLnNlYXJjaFRyaWdnZXIgfHwgZS50YXJnZXQgPT09IHRoaXMuc2VhcmNoSW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2l6ZUlucHV0KHRoaXMuY29sbGFwc2VkU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdib3gtc2hhZG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplSW5wdXQoc2l6ZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgY3VycmVudFNpemUgPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuc2VhcmNoSW5wdXQpLndpZHRoKTtcclxuICAgICAgICBsZXQgdGFyZ2V0U2l6ZSA9IHBhcnNlSW50KHNpemUpO1xyXG4gICAgICAgIGxldCBzcGVlZCA9IDEwO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2l6ZSA9PT0gdGFyZ2V0U2l6ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0U2l6ZSA+IGN1cnJlbnRTaXplKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2l6ZSArPSBzcGVlZDtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTaXplID0gY3VycmVudFNpemUgPiB0YXJnZXRTaXplID8gdGFyZ2V0U2l6ZSA6IGN1cnJlbnRTaXplO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNpemUgPCBjdXJyZW50U2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNpemUgLT0gc3BlZWQ7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2l6ZSA9IGN1cnJlbnRTaXplIDwgdGFyZ2V0U2l6ZSA/IHRhcmdldFNpemUgOiBjdXJyZW50U2l6ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5zdHlsZS53aWR0aCA9IGN1cnJlbnRTaXplICsgJ3B4JztcclxuICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgLy8gdGhpcy5zZWFyY2hJbnB1dC5zdHlsZS53aWR0aCA9IHNpemU7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgYSBnbG9iYWwgbWVtYmVyLlxyXG4gKiBAY2FsbGJhY2sgYWpheENhbGxiYWNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ30gcmVzcG9uc2VNZXNzYWdlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICogQHBhcmFtIHthamF4Q2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tZXRob2Q9R0VUXVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGF0YXM9e31dXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuanNvbj10cnVlXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWpheCh1cmwsIGNhbGxiYWNrLCBvcHRpb25zID0ge30pXHJcbntcclxuICAgIC8vU2V0dGluZ3NcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGRhdGFzOiB7fSxcclxuICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgbGV0IGZvcm1EYXRhID0gbnVsbDtcclxuICAgIGxldCBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhcyk7XHJcbiAgICBpZiAocHJvcGVydGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChwcm9wZXJ0eSwgb3B0aW9ucy5kYXRhc1twcm9wZXJ0eV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCk7XHJcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDIwMCAmJiB4aHIuc3RhdHVzID49IDQwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFY2hlYyBIVFRQIDogY29kZScueGhyLnN0YXR1cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5qc29uKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybWF0IEpTT04gaW52YWxpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==