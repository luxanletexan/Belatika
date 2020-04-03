(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_shop_index"],{

/***/ "./assets/js/class/_Carousel.js":
/*!**************************************!*\
  !*** ./assets/js/class/_Carousel.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _CarouselTouchPlugin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_CarouselTouchPlugin */ "./assets/js/class/_CarouselTouchPlugin.js");






















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Carousel = /*#__PURE__*/function () {
  /**
   * @callback moveCallback
   * @param {number} index
   */

  /**
   * @param {HTMLElement} element
   * @param {Object} options
   * @param {number} [options.visibleSlides=1] Nombre d'éléments visibles dans un slide
   * @param {number} [options.slidesToScroll=1] Nombre d'éléments à faire défiler
   * @param {boolean} [options.loop=false] Boucle en fin de slider
   * @param {boolean} [options.infinite=false]
   * @param {boolean} [options.pagination=false]
   * @param {boolean} [options.navigation=true]
   * @param {boolean} [options.autoplay=false]
   * @param {boolean} [options.autoplayTimeout=5000]
   * @param {{minWidth: number, visibleSlides: number, slidesToScroll: number}[]} options.breakpoints
   */
  function Carousel(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Carousel);

    this.element = element;
    this.options = Object.assign({
      visibleSlides: 1,
      slidesToScroll: 1,
      loop: false,
      infinite: false,
      pagination: false,
      navigation: true,
      autoplay: false,
      autoplayTimeout: 5000,
      breakpoints: []
    }, options);

    if (this.options.loop && this.options.infinite) {
      throw new Error("Un caroussel ne peut être à la fois en boucle et en infini");
    }

    var children = [].slice.call(element.children);
    this.currentItem = 0;
    this.moveCallbacks = [];
    this.offset = 0;
    this.autoplayId = null;
    this.breakpoint = null; //Modifications du DOM

    this.root = this.createDivWithClass('carousel');
    this.container = this.createDivWithClass('carousel__container');
    this.root.setAttribute('tabindex', '0');
    this.root.appendChild(this.container);
    this.element.appendChild(this.root);
    this.items = children.map(function (child) {
      var item = _this.createDivWithClass('carousel__container__item');

      item.appendChild(child);
      return item;
    });

    if (this.options.infinite) {
      this.offset = 1 + this.options.visibleSlides - this.options.slidesToScroll;

      if (this.offset > children.length) {
        console.error("Pas assez d'éléments dans le caroussel", element);
      }

      this.items = [].concat(_toConsumableArray(this.items.slice(-this.offset).map(function (item) {
        return item.cloneNode(true);
      })), _toConsumableArray(this.items), _toConsumableArray(this.items.slice(0, this.offset).map(function (item) {
        return item.cloneNode(true);
      })));
      this.gotoItem(this.offset, false);
    }

    this.items.forEach(function (item) {
      return _this.container.appendChild(item);
    });
    this.setStyle().createNavigation().createPagination(); //Evenements

    this.onWindowResize();
    this.onKeydown();
    window.addEventListener('resize', this.onWindowResize.bind(this));

    if (this.options.infinite) {
      this.container.addEventListener('transitionend', this.resetInfinite.bind(this));
    }

    if (this.options.autoplay) {
      this.startAutoplay();
    }

    new _CarouselTouchPlugin__WEBPACK_IMPORTED_MODULE_21__["default"](this);
  }
  /**
   * Applique les bonnes dimensions aux éléments du caroussel
   */


  _createClass(Carousel, [{
    key: "setStyle",
    value: function setStyle() {
      var ratio = this.items.length / this.visibleSlides;
      this.container.style.width = ratio * 100 + '%';

      var _iterator = _createForOfIteratorHelper(this.items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          item.style.width = 100 / this.visibleSlides / ratio + '%';
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this;
    }
    /**
     * Création des flèches de navigation
     * @return {Carousel}
     */

  }, {
    key: "createNavigation",
    value: function createNavigation() {
      var _this2 = this;

      if (!this.options.navigation) {
        return this;
      }

      var nextButton = this.createDivWithClass('carousel__next');
      var prevButton = this.createDivWithClass('carousel__prev');
      nextButton.addEventListener('click', this.next.bind(this));
      prevButton.addEventListener('click', this.prev.bind(this));
      this.root.appendChild(nextButton);
      this.root.appendChild(prevButton);

      if (this.options.loop || this.options.infinite) {
        return this;
      }

      this.onMove(function (index) {
        if (index === 0) {
          prevButton.classList.add('carousel__prev--hidden');
        } else {
          prevButton.classList.remove('carousel__prev--hidden');
        }

        if (_this2.items[_this2.currentItem + _this2.visibleSlides] === undefined) {
          nextButton.classList.add('carousel__next--hidden');
        } else {
          nextButton.classList.remove('carousel__next--hidden');
        }
      });
      return this;
    }
    /**
     * Création des icones de pagination
     * @return {Carousel}
     */

  }, {
    key: "createPagination",
    value: function createPagination() {
      var _this3 = this;

      if (!this.options.pagination) {
        return this;
      }

      var pagination = this.createDivWithClass('carousel__pagination');
      var buttons = [];
      var pagesCount = this.items.length + ( //Nombre d'items
      this.options.slidesToScroll - this.options.visibleSlides) //- nombre d'items non paginables (fin de liste)
      - (this.offset ? this.offset + 1 : 0);

      var _loop = function _loop(i) {
        var button = _this3.createDivWithClass('carousel__pagination__button');

        button.addEventListener('click', function () {
          return _this3.gotoItem(i + _this3.offset);
        });
        pagination.appendChild(button);
        buttons.push(button);
      };

      for (var i = 0; i < pagesCount; i += this.options.slidesToScroll) {
        _loop(i);
      }

      this.root.appendChild(pagination);
      this.onMove(function (index) {
        var count = _this3.items.length - 2 * _this3.offset;
        var activeButton = buttons[Math.floor((index - _this3.offset) % count / _this3.options.slidesToScroll)];

        if (activeButton) {
          buttons.forEach(function (button) {
            return button.classList.remove('carousel__pagination__button--active');
          });
          activeButton.classList.add('carousel__pagination__button--active');
        }
      });
      return this;
    }
    /**
     * Démarre le défilement automatique
     */

  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      var _this4 = this;

      this.autoplayId = setInterval(function () {
        _this4.next(false);
      }, this.options.autoplayTimeout);
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      if (this.autoplayId) {
        clearInterval(this.autoplayId);
        this.autoplayId = null;
      }
    }
  }, {
    key: "translate",
    value: function translate(percent) {
      this.container.style.transform = "translateX(".concat(percent, "%)");
    }
  }, {
    key: "next",
    value: function next() {
      var stopAutoplay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (stopAutoplay) {
        this.stopAutoplay();
      }

      this.gotoItem(this.currentItem + this.slidesToScroll);
    }
  }, {
    key: "prev",
    value: function prev() {
      this.gotoItem(this.currentItem - this.slidesToScroll);
    }
    /**
     * Déplace le caroussel vers l'élément ciblé
     * @param {number} index
     * @param {boolean} [animation=true]
     */

  }, {
    key: "gotoItem",
    value: function gotoItem(index) {
      var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (index < 0) {
        if (!this.options.loop) {
          return;
        }

        index = this.items.length - this.visibleSlides;
      } else if (index >= this.items.length || this.items[this.currentItem + this.visibleSlides] === undefined && index > this.currentItem) {
        if (!this.options.loop && !this.options.infinite) {
          return;
        } else if (!this.options.infinite) {
          index = 0;
        }
      }

      var X = index * -100 / this.items.length;

      if (!animation) {
        this.disableTransition();
      }

      this.translate(X);
      this.container.offsetHeight; //Force repaint

      if (!animation) {
        this.enableTransition();
      }

      this.currentItem = index;

      var _iterator2 = _createForOfIteratorHelper(this.moveCallbacks),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var moveCallback = _step2.value;
          moveCallback(index);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Déplace le container pour donner l'impression d'un slider infini
     */

  }, {
    key: "resetInfinite",
    value: function resetInfinite() {
      this.currentItem %= this.items.length - this.offset + 1;

      if (this.currentItem <= this.options.slidesToScroll + 1) {
        this.gotoItem(this.currentItem + this.items.length - 2 * this.offset, false);
      } else if (this.currentItem >= this.items.length - this.offset) {
        this.gotoItem(this.currentItem - (this.items.length - 2 * this.offset), false);
      }
    }
  }, {
    key: "onKeydown",
    value: function onKeydown() {
      var _this5 = this;

      this.root.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'Right' || e.keyCode === 39) {
          _this5.next();
        } else if (e.key === 'ArrowLeft' || e.key === 'Left' || e.keyCode === 37) {
          _this5.prev();
        }
      });
    }
    /**
     * @param {moveCallback} callback
     */

  }, {
    key: "onMove",
    value: function onMove(callback) {
      this.moveCallbacks.push(callback);
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      var windowWidth = window.innerWidth;
      var currentBreakpoint = null;

      var _iterator3 = _createForOfIteratorHelper(this.options.breakpoints),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var breakpoint = _step3.value;

          if (currentBreakpoint === null) {
            if (breakpoint.minWidth < windowWidth) {
              currentBreakpoint = breakpoint;
            }
          } else if (breakpoint.minWidth < windowWidth && breakpoint.minWidth > currentBreakpoint.minWidth) {
            currentBreakpoint = breakpoint;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      if (currentBreakpoint !== this.breakpoint || currentBreakpoint !== null && this.breakpoint !== null && currentBreakpoint.minWidth !== this.breakpoint.minWidth) {
        this.breakpoint = currentBreakpoint;
        this.setStyle();
      }

      var _iterator4 = _createForOfIteratorHelper(this.moveCallbacks),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var moveCallback = _step4.value;
          moveCallback(this.currentItem);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * @param {string} className
     * @return {HTMLElement}
     */

  }, {
    key: "createDivWithClass",
    value: function createDivWithClass(className) {
      var element = document.createElement('div');
      element.classList.add(className);
      return element;
    }
  }, {
    key: "disableTransition",
    value: function disableTransition() {
      this.container.style.transition = 'none';
    }
  }, {
    key: "enableTransition",
    value: function enableTransition() {
      this.container.style.transition = '';
    }
    /**
     * @return {number}
     */

  }, {
    key: "slidesToScroll",
    get: function get() {
      return this.breakpoint === null ? this.options.slidesToScroll : this.breakpoint.slidesToScroll;
    }
    /**
     * @return {number}
     */

  }, {
    key: "visibleSlides",
    get: function get() {
      return this.breakpoint === null ? this.options.visibleSlides : this.breakpoint.visibleSlides;
    }
    /**
     * @return {number}
     */

  }, {
    key: "containerWidth",
    get: function get() {
      return this.container.offsetWidth;
    }
    /**
     * @return {number}
     */

  }, {
    key: "carouselWidth",
    get: function get() {
      return this.root.offsetWidth;
    }
  }]);

  return Carousel;
}();



/***/ }),

/***/ "./assets/js/class/_CarouselTouchPlugin.js":
/*!*************************************************!*\
  !*** ./assets/js/class/_CarouselTouchPlugin.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CarouselTouchPlugin; });
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CarouselTouchPlugin = /*#__PURE__*/function () {
  /**
   * @param {Carousel} carousel
   */
  function CarouselTouchPlugin(carousel) {
    _classCallCheck(this, CarouselTouchPlugin);

    carousel.container.addEventListener('dragstart', function (e) {
      return e.preventDefault();
    });
    carousel.container.addEventListener('mousedown', this.startDrag.bind(this));
    carousel.container.addEventListener('touchstart', this.startDrag.bind(this));
    window.addEventListener('mousemove', this.drag.bind(this));
    window.addEventListener('touchmove', this.drag.bind(this));
    window.addEventListener('mouseup', this.endDrag.bind(this));
    window.addEventListener('touchend', this.endDrag.bind(this));
    window.addEventListener('touchcancel', this.endDrag.bind(this));
    this.carousel = carousel;
  }
  /**
   * Démarre le déplacement au toucher
   * @param {MouseEvent|TouchEvent} e
   */


  _createClass(CarouselTouchPlugin, [{
    key: "startDrag",
    value: function startDrag(e) {
      if (e.touches) {
        if (e.touches.length > 1) {
          return;
        } else {
          var _e = e,
              touches = _e.touches; //Object destructuring car changement de type : e type Touch

          e = touches[0];
        }
      }

      this.carousel.stopAutoplay();
      this.origin = {
        x: e.screenX,
        y: e.screenY
      };
      this.width = this.carousel.containerWidth;
      this.carousel.disableTransition();
    }
    /**
     * Déplacement
     * @param {MouseEvent|TouchEvent} e
     */

  }, {
    key: "drag",
    value: function drag(e) {
      if (!this.origin) {
        return;
      }

      var point = e.touches ? e.touches[0] : e;
      var translate = {
        x: point.screenX - this.origin.x,
        y: point.screenY - this.origin.y
      };

      if (e.touches && Math.abs(translate.x) > Math.abs(translate.y)) {
        e.preventDefault();
        e.stopPropagation();
      }

      var baseTranslate = this.carousel.currentItem * -100 / this.carousel.items.length;
      this.lastTranslate = translate;
      this.carousel.translate(baseTranslate + 100 * translate.x / this.width);
    }
    /**
     * Fin de déplacement
     * @param {MouseEvent|TouchEvent} e
     */

  }, {
    key: "endDrag",
    value: function endDrag(e) {
      if (!this.origin || !this.lastTranslate) {
        return;
      }

      this.carousel.enableTransition();

      if (Math.abs(this.lastTranslate.x / this.carousel.carouselWidth) > 0.2) {
        if (this.lastTranslate.x < 0) {
          this.carousel.next();
        } else {
          this.carousel.prev();
        }
      } else {
        this.carousel.gotoItem(this.carousel.currentItem);
      }

      this.origin = null;
    }
  }]);

  return CarouselTouchPlugin;
}();



/***/ }),

/***/ "./assets/js/pages/shop/_index.js":
/*!****************************************!*\
  !*** ./assets/js/pages/shop/_index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/_Carousel */ "./assets/js/class/_Carousel.js");

document.addEventListener('DOMContentLoaded', function () {
  new _class_Carousel__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('carousel'), {
    slidesToScroll: 2,
    visibleSlides: 2,
    loop: true,
    autoplay: true,
    breakpoints: [{
      minWidth: 576,
      visibleSlides: 2,
      slidesToScroll: 2
    }, {
      minWidth: 768,
      visibleSlides: 3,
      slidesToScroll: 3
    }, {
      minWidth: 992,
      visibleSlides: 4,
      slidesToScroll: 4
    }]
  });
});

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

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


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

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
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

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},[["./assets/js/pages/shop/_index.js","runtime","vendors~app~app_blog_article~app_shop_index~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fQ2Fyb3VzZWxUb3VjaFBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvc2hvcC9faW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24uYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJ2aXNpYmxlU2xpZGVzIiwic2xpZGVzVG9TY3JvbGwiLCJsb29wIiwiaW5maW5pdGUiLCJwYWdpbmF0aW9uIiwibmF2aWdhdGlvbiIsImF1dG9wbGF5IiwiYXV0b3BsYXlUaW1lb3V0IiwiYnJlYWtwb2ludHMiLCJFcnJvciIsImNoaWxkcmVuIiwic2xpY2UiLCJjYWxsIiwiY3VycmVudEl0ZW0iLCJtb3ZlQ2FsbGJhY2tzIiwib2Zmc2V0IiwiYXV0b3BsYXlJZCIsImJyZWFrcG9pbnQiLCJyb290IiwiY3JlYXRlRGl2V2l0aENsYXNzIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJpdGVtcyIsIm1hcCIsImNoaWxkIiwiaXRlbSIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsImNsb25lTm9kZSIsImdvdG9JdGVtIiwiZm9yRWFjaCIsInNldFN0eWxlIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVBhZ2luYXRpb24iLCJvbldpbmRvd1Jlc2l6ZSIsIm9uS2V5ZG93biIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwicmVzZXRJbmZpbml0ZSIsInN0YXJ0QXV0b3BsYXkiLCJDYXJvdXNlbFRvdWNoUGx1Z2luIiwicmF0aW8iLCJzdHlsZSIsIndpZHRoIiwibmV4dEJ1dHRvbiIsInByZXZCdXR0b24iLCJuZXh0IiwicHJldiIsIm9uTW92ZSIsImluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidW5kZWZpbmVkIiwiYnV0dG9ucyIsInBhZ2VzQ291bnQiLCJpIiwiYnV0dG9uIiwicHVzaCIsImNvdW50IiwiYWN0aXZlQnV0dG9uIiwiTWF0aCIsImZsb29yIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGVyY2VudCIsInRyYW5zZm9ybSIsInN0b3BBdXRvcGxheSIsImFuaW1hdGlvbiIsIlgiLCJkaXNhYmxlVHJhbnNpdGlvbiIsInRyYW5zbGF0ZSIsIm9mZnNldEhlaWdodCIsImVuYWJsZVRyYW5zaXRpb24iLCJtb3ZlQ2FsbGJhY2siLCJlIiwia2V5Iiwia2V5Q29kZSIsImNhbGxiYWNrIiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiY3VycmVudEJyZWFrcG9pbnQiLCJtaW5XaWR0aCIsImNsYXNzTmFtZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zaXRpb24iLCJvZmZzZXRXaWR0aCIsImNhcm91c2VsIiwicHJldmVudERlZmF1bHQiLCJzdGFydERyYWciLCJkcmFnIiwiZW5kRHJhZyIsInRvdWNoZXMiLCJvcmlnaW4iLCJ4Iiwic2NyZWVuWCIsInkiLCJzY3JlZW5ZIiwiY29udGFpbmVyV2lkdGgiLCJwb2ludCIsImFicyIsInN0b3BQcm9wYWdhdGlvbiIsImJhc2VUcmFuc2xhdGUiLCJsYXN0VHJhbnNsYXRlIiwiY2Fyb3VzZWxXaWR0aCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxRO0FBRWpCOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7O0FBYUEsb0JBQVlDLE9BQVosRUFBbUM7QUFBQTs7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQy9CLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZUMsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDekJDLG1CQUFhLEVBQUUsQ0FEVTtBQUV6QkMsb0JBQWMsRUFBRSxDQUZTO0FBR3pCQyxVQUFJLEVBQUUsS0FIbUI7QUFJekJDLGNBQVEsRUFBRSxLQUplO0FBS3pCQyxnQkFBVSxFQUFFLEtBTGE7QUFNekJDLGdCQUFVLEVBQUUsSUFOYTtBQU96QkMsY0FBUSxFQUFFLEtBUGU7QUFRekJDLHFCQUFlLEVBQUUsSUFSUTtBQVN6QkMsaUJBQVcsRUFBRTtBQVRZLEtBQWQsRUFVWlgsT0FWWSxDQUFmOztBQVdBLFFBQUksS0FBS0EsT0FBTCxDQUFhSyxJQUFiLElBQXFCLEtBQUtMLE9BQUwsQ0FBYU0sUUFBdEMsRUFBZ0Q7QUFDNUMsWUFBTSxJQUFJTSxLQUFKLENBQVUsNERBQVYsQ0FBTjtBQUNIOztBQUNELFFBQUlDLFFBQVEsR0FBRyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY2hCLE9BQU8sQ0FBQ2MsUUFB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Wlk7QUFDYixRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDakQsbUNBQW1DLG1CQUFPLENBQUMsMkhBQStDO0FBQzFGLDhCQUE4QixtQkFBTyxDQUFDLGlIQUEwQzs7QUFFaEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0ZBQWdGO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ2pCRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQyxxRkFBNEI7O0FBRS9DO0FBQ0E7QUFDQSxHQUFHLGtDQUFrQztBQUNyQztBQUNBLENBQUM7Ozs7Ozs7Ozs7OztBQ1BELFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELGlDQUFpQyxtQkFBTyxDQUFDLHVHQUFxQzs7QUFFOUU7QUFDQTtBQUNBLEdBQUcseUVBQXlFO0FBQzVFO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUkQsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxhQUFhLG1CQUFPLENBQUMsdUVBQXFCO0FBQzFDLGdCQUFnQixtQkFBTyxDQUFDLDZGQUFnQzs7QUFFeEQ7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcseUNBQXlDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwX3Nob3BfaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2Fyb3VzZWxUb3VjaFBsdWdpbiBmcm9tIFwiLi9fQ2Fyb3VzZWxUb3VjaFBsdWdpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGNhbGxiYWNrIG1vdmVDYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMudmlzaWJsZVNsaWRlcz0xXSBOb21icmUgZCfDqWzDqW1lbnRzIHZpc2libGVzIGRhbnMgdW4gc2xpZGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5zbGlkZXNUb1Njcm9sbD0xXSBOb21icmUgZCfDqWzDqW1lbnRzIMOgIGZhaXJlIGTDqWZpbGVyXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxvb3A9ZmFsc2VdIEJvdWNsZSBlbiBmaW4gZGUgc2xpZGVyXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmluZmluaXRlPWZhbHNlXVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5wYWdpbmF0aW9uPWZhbHNlXVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5uYXZpZ2F0aW9uPXRydWVdXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9wbGF5PWZhbHNlXVxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5hdXRvcGxheVRpbWVvdXQ9NTAwMF1cclxuICAgICAqIEBwYXJhbSB7e21pbldpZHRoOiBudW1iZXIsIHZpc2libGVTbGlkZXM6IG51bWJlciwgc2xpZGVzVG9TY3JvbGw6IG51bWJlcn1bXX0gb3B0aW9ucy5icmVha3BvaW50c1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICB2aXNpYmxlU2xpZGVzOiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxyXG4gICAgICAgICAgICBicmVha3BvaW50czogW11cclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvb3AgJiYgdGhpcy5vcHRpb25zLmluZmluaXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuIGNhcm91c3NlbCBuZSBwZXV0IMOqdHJlIMOgIGxhIGZvaXMgZW4gYm91Y2xlIGV0IGVuIGluZmluaVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChlbGVtZW50LmNoaWxkcmVuKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gMDtcclxuICAgICAgICB0aGlzLm1vdmVDYWxsYmFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XHJcbiAgICAgICAgdGhpcy5hdXRvcGxheUlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAvL01vZGlmaWNhdGlvbnMgZHUgRE9NXHJcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVEaXZXaXRoQ2xhc3MoJ2Nhcm91c2VsJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWxfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMucm9vdC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJvb3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBjaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5jcmVhdGVEaXZXaXRoQ2xhc3MoJ2Nhcm91c2VsX19jb250YWluZXJfX2l0ZW0nKTtcclxuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5maW5pdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSAxICsgdGhpcy5vcHRpb25zLnZpc2libGVTbGlkZXMgLSB0aGlzLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9mZnNldCA+IGNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlBhcyBhc3NleiBkJ8OpbMOpbWVudHMgZGFucyBsZSBjYXJvdXNzZWxcIiwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoLXRoaXMub2Zmc2V0KS5tYXAoaXRlbSA9PiBpdGVtLmNsb25lTm9kZSh0cnVlKSksXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZSgwLCB0aGlzLm9mZnNldCkubWFwKGl0ZW0gPT4gaXRlbS5jbG9uZU5vZGUodHJ1ZSkpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHRoaXMuZ290b0l0ZW0odGhpcy5vZmZzZXQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSkpO1xyXG4gICAgICAgIHRoaXMuc2V0U3R5bGUoKS5jcmVhdGVOYXZpZ2F0aW9uKCkuY3JlYXRlUGFnaW5hdGlvbigpO1xyXG5cclxuICAgICAgICAvL0V2ZW5lbWVudHNcclxuICAgICAgICB0aGlzLm9uV2luZG93UmVzaXplKCk7XHJcbiAgICAgICAgdGhpcy5vbktleWRvd24oKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmluZmluaXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnJlc2V0SW5maW5pdGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXV0b3BsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ldyBDYXJvdXNlbFRvdWNoUGx1Z2luKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbGlxdWUgbGVzIGJvbm5lcyBkaW1lbnNpb25zIGF1eCDDqWzDqW1lbnRzIGR1IGNhcm91c3NlbFxyXG4gICAgICovXHJcbiAgICBzZXRTdHlsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLml0ZW1zLmxlbmd0aCAvIHRoaXMudmlzaWJsZVNsaWRlcztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9IChyYXRpbyAqIDEwMCkgKyAnJSc7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUud2lkdGggPSAoKDEwMCAvIHRoaXMudmlzaWJsZVNsaWRlcykgLyByYXRpbykgKyAnJSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3LDqWF0aW9uIGRlcyBmbMOoY2hlcyBkZSBuYXZpZ2F0aW9uXHJcbiAgICAgKiBAcmV0dXJuIHtDYXJvdXNlbH1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlTmF2aWdhdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubmF2aWdhdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5leHRCdXR0b24gPSB0aGlzLmNyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWxfX25leHQnKTtcclxuICAgICAgICBsZXQgcHJldkJ1dHRvbiA9IHRoaXMuY3JlYXRlRGl2V2l0aENsYXNzKCdjYXJvdXNlbF9fcHJldicpO1xyXG4gICAgICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucHJldi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbik7XHJcbiAgICAgICAgdGhpcy5yb290LmFwcGVuZENoaWxkKHByZXZCdXR0b24pO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9vcCB8fCB0aGlzLm9wdGlvbnMuaW5maW5pdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Nb3ZlKChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHByZXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3ByZXYtLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJldkJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcHJldi0taGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50SXRlbSArIHRoaXMudmlzaWJsZVNsaWRlc10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fbmV4dC0taGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19uZXh0LS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3LDqWF0aW9uIGRlcyBpY29uZXMgZGUgcGFnaW5hdGlvblxyXG4gICAgICogQHJldHVybiB7Q2Fyb3VzZWx9XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVBhZ2luYXRpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLnBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYWdpbmF0aW9uID0gdGhpcy5jcmVhdGVEaXZXaXRoQ2xhc3MoJ2Nhcm91c2VsX19wYWdpbmF0aW9uJyk7XHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBbXTtcclxuICAgICAgICBsZXQgcGFnZXNDb3VudCA9XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoICsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL05vbWJyZSBkJ2l0ZW1zXHJcbiAgICAgICAgICAgICh0aGlzLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgLSB0aGlzLm9wdGlvbnMudmlzaWJsZVNsaWRlcykgICAgICAvLy0gbm9tYnJlIGQnaXRlbXMgbm9uIHBhZ2luYWJsZXMgKGZpbiBkZSBsaXN0ZSlcclxuICAgICAgICAgICAgLSAodGhpcy5vZmZzZXQgPyB0aGlzLm9mZnNldCArIDEgOiAwKVxyXG4gICAgICAgIDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzQ291bnQ7IGkgKz0gdGhpcy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSB0aGlzLmNyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWxfX3BhZ2luYXRpb25fX2J1dHRvbicpO1xyXG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmdvdG9JdGVtKGkgKyB0aGlzLm9mZnNldCkpO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChidXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQocGFnaW5hdGlvbik7XHJcbiAgICAgICAgdGhpcy5vbk1vdmUoKGluZGV4ID0+IHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAyICogdGhpcy5vZmZzZXQ7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVCdXR0b24gPSBidXR0b25zW01hdGguZmxvb3IoKChpbmRleCAtIHRoaXMub2Zmc2V0KSAlIGNvdW50KSAvIHRoaXMub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCldO1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbF9fcGFnaW5hdGlvbl9fYnV0dG9uLS1hY3RpdmUnKSk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX3BhZ2luYXRpb25fX2J1dHRvbi0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEw6ltYXJyZSBsZSBkw6lmaWxlbWVudCBhdXRvbWF0aXF1ZVxyXG4gICAgICovXHJcbiAgICBzdGFydEF1dG9wbGF5KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmF1dG9wbGF5SWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dChmYWxzZSk7XHJcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLmF1dG9wbGF5VGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcEF1dG9wbGF5KClcclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvcGxheUlkKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvcGxheUlkKTtcclxuICAgICAgICAgICAgdGhpcy5hdXRvcGxheUlkID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNsYXRlKHBlcmNlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtwZXJjZW50fSUpYDtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KHN0b3BBdXRvcGxheSA9IHRydWUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHN0b3BBdXRvcGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BBdXRvcGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdvdG9JdGVtKHRoaXMuY3VycmVudEl0ZW0gKyB0aGlzLnNsaWRlc1RvU2Nyb2xsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2KClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmdvdG9JdGVtKHRoaXMuY3VycmVudEl0ZW0gLSB0aGlzLnNsaWRlc1RvU2Nyb2xsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIETDqXBsYWNlIGxlIGNhcm91c3NlbCB2ZXJzIGwnw6lsw6ltZW50IGNpYmzDqVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFthbmltYXRpb249dHJ1ZV1cclxuICAgICAqL1xyXG4gICAgZ290b0l0ZW0oaW5kZXgsIGFuaW1hdGlvbiA9IHRydWUpIHtcclxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvb3ApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gdGhpcy52aXNpYmxlU2xpZGVzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gdGhpcy5pdGVtcy5sZW5ndGggfHwgKHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50SXRlbSArIHRoaXMudmlzaWJsZVNsaWRlc10gPT09IHVuZGVmaW5lZCAmJiBpbmRleCA+IHRoaXMuY3VycmVudEl0ZW0pKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRpb25zLmxvb3AgJiYgIXRoaXMub3B0aW9ucy5pbmZpbml0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMuaW5maW5pdGUpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgWCA9IGluZGV4ICogLTEwMCAvIHRoaXMuaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGlmICghYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZVRyYW5zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmFuc2xhdGUoWCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIub2Zmc2V0SGVpZ2h0OyAvL0ZvcmNlIHJlcGFpbnRcclxuICAgICAgICBpZiAoIWFuaW1hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVRyYW5zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IGluZGV4O1xyXG4gICAgICAgIGZvciAobGV0IG1vdmVDYWxsYmFjayBvZiB0aGlzLm1vdmVDYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgbW92ZUNhbGxiYWNrKGluZGV4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEw6lwbGFjZSBsZSBjb250YWluZXIgcG91ciBkb25uZXIgbCdpbXByZXNzaW9uIGQndW4gc2xpZGVyIGluZmluaVxyXG4gICAgICovXHJcbiAgICByZXNldEluZmluaXRlKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtICU9IHRoaXMuaXRlbXMubGVuZ3RoIC0gdGhpcy5vZmZzZXQgKyAxO1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJdGVtIDw9IHRoaXMub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCArIDEpIHtcclxuICAgICAgICAgICAgdGhpcy5nb3RvSXRlbSh0aGlzLmN1cnJlbnRJdGVtICsgdGhpcy5pdGVtcy5sZW5ndGggLSAyICogdGhpcy5vZmZzZXQsIGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEl0ZW0gPj0gdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLm9mZnNldCkge1xyXG4gICAgICAgICAgICB0aGlzLmdvdG9JdGVtKHRoaXMuY3VycmVudEl0ZW0gLSAodGhpcy5pdGVtcy5sZW5ndGggLSAyICogdGhpcy5vZmZzZXQpLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5ZG93bigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yb290LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0JyB8fCBlLmtleSA9PT0gJ1JpZ2h0JyB8fCBlLmtleUNvZGUgPT09IDM5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93TGVmdCcgfHwgZS5rZXkgPT09ICdMZWZ0JyB8fCBlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXYoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHttb3ZlQ2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIG9uTW92ZShjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1vdmVDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dSZXNpemUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCBjdXJyZW50QnJlYWtwb2ludCA9IG51bGw7XHJcbiAgICAgICAgZm9yIChsZXQgYnJlYWtwb2ludCBvZiB0aGlzLm9wdGlvbnMuYnJlYWtwb2ludHMpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRCcmVha3BvaW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYnJlYWtwb2ludC5taW5XaWR0aCA8IHdpbmRvd1dpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGJyZWFrcG9pbnQubWluV2lkdGggPCB3aW5kb3dXaWR0aCAmJiBicmVha3BvaW50Lm1pbldpZHRoID4gY3VycmVudEJyZWFrcG9pbnQubWluV2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gYnJlYWtwb2ludDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ICE9PSB0aGlzLmJyZWFrcG9pbnRcclxuICAgICAgICAgICAgfHwgKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgIT09IG51bGxcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuYnJlYWtwb2ludCAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgJiYgY3VycmVudEJyZWFrcG9pbnQubWluV2lkdGggIT09IHRoaXMuYnJlYWtwb2ludC5taW5XaWR0aFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IGN1cnJlbnRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0eWxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBtb3ZlQ2FsbGJhY2sgb2YgdGhpcy5tb3ZlQ2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIG1vdmVDYWxsYmFjayh0aGlzLmN1cnJlbnRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXHJcbiAgICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlRGl2V2l0aENsYXNzKGNsYXNzTmFtZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGVUcmFuc2l0aW9uKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZVRyYW5zaXRpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0IHNsaWRlc1RvU2Nyb2xsKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50ID09PSBudWxsID8gdGhpcy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogdGhpcy5icmVha3BvaW50LnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXQgdmlzaWJsZVNsaWRlcygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludCA9PT0gbnVsbCA/IHRoaXMub3B0aW9ucy52aXNpYmxlU2xpZGVzIDogdGhpcy5icmVha3BvaW50LnZpc2libGVTbGlkZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldCBjb250YWluZXJXaWR0aCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLm9mZnNldFdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXQgY2Fyb3VzZWxXaWR0aCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vdC5vZmZzZXRXaWR0aDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcm91c2VsVG91Y2hQbHVnaW4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge0Nhcm91c2VsfSBjYXJvdXNlbFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihjYXJvdXNlbCkge1xyXG4gICAgICAgIGNhcm91c2VsLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XHJcbiAgICAgICAgY2Fyb3VzZWwuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc3RhcnREcmFnLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGNhcm91c2VsLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5zdGFydERyYWcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZHJhZy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5kcmFnLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5lbmREcmFnLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuZW5kRHJhZy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hjYW5jZWwnLCB0aGlzLmVuZERyYWcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbCA9IGNhcm91c2VsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRMOpbWFycmUgbGUgZMOpcGxhY2VtZW50IGF1IHRvdWNoZXJcclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudHxUb3VjaEV2ZW50fSBlXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0RHJhZyhlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChlLnRvdWNoZXMpIHtcclxuICAgICAgICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7dG91Y2hlc30gPSBlOyAvL09iamVjdCBkZXN0cnVjdHVyaW5nIGNhciBjaGFuZ2VtZW50IGRlIHR5cGUgOiBlIHR5cGUgVG91Y2hcclxuICAgICAgICAgICAgICAgIGUgPSB0b3VjaGVzWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuc3RvcEF1dG9wbGF5KCk7XHJcbiAgICAgICAgdGhpcy5vcmlnaW4gPSB7eDogZS5zY3JlZW5YLCB5OiBlLnNjcmVlbll9O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmNhcm91c2VsLmNvbnRhaW5lcldpZHRoO1xyXG4gICAgICAgIHRoaXMuY2Fyb3VzZWwuZGlzYWJsZVRyYW5zaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIETDqXBsYWNlbWVudFxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fFRvdWNoRXZlbnR9IGVcclxuICAgICAqL1xyXG4gICAgZHJhZyhlKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5vcmlnaW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcG9pbnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0gOiBlO1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGUgPSB7eDogcG9pbnQuc2NyZWVuWCAtIHRoaXMub3JpZ2luLngsIHk6IHBvaW50LnNjcmVlblkgLSB0aGlzLm9yaWdpbi55fTtcclxuICAgICAgICBpZiAoZS50b3VjaGVzICYmIE1hdGguYWJzKHRyYW5zbGF0ZS54KSA+IE1hdGguYWJzKHRyYW5zbGF0ZS55KSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBiYXNlVHJhbnNsYXRlID0gdGhpcy5jYXJvdXNlbC5jdXJyZW50SXRlbSAqIC0xMDAgLyB0aGlzLmNhcm91c2VsLml0ZW1zLmxlbmd0aDtcclxuICAgICAgICB0aGlzLmxhc3RUcmFuc2xhdGUgPSB0cmFuc2xhdGU7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC50cmFuc2xhdGUoYmFzZVRyYW5zbGF0ZSArIDEwMCAqIHRyYW5zbGF0ZS54IC8gdGhpcy53aWR0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaW4gZGUgZMOpcGxhY2VtZW50XHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR8VG91Y2hFdmVudH0gZVxyXG4gICAgICovXHJcbiAgICBlbmREcmFnKGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9yaWdpbiB8fCAhdGhpcy5sYXN0VHJhbnNsYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5lbmFibGVUcmFuc2l0aW9uKCk7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubGFzdFRyYW5zbGF0ZS54IC8gdGhpcy5jYXJvdXNlbC5jYXJvdXNlbFdpZHRoKSA+IDAuMikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sYXN0VHJhbnNsYXRlLnggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcm91c2VsLm5leHQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwucHJldigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5nb3RvSXRlbSh0aGlzLmNhcm91c2VsLmN1cnJlbnRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vLi4vY2xhc3MvX0Nhcm91c2VsXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbmV3IENhcm91c2VsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJvdXNlbCcpLCB7XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgdmlzaWJsZVNsaWRlczogMixcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA1NzYsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlU2xpZGVzOiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDc2OCxcclxuICAgICAgICAgICAgICAgIHZpc2libGVTbGlkZXM6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogOTkyLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZVNsaWRlczogNCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3IsIG5leHQsIHZhbHVlO1xuICBpZiAobWFwcGluZykgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNMZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgLy8gaWYgdGhlIHRhcmdldCBpcyBub3QgaXRlcmFibGUgb3IgaXQncyBhbiBhcnJheSB3aXRoIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIGEgc2ltcGxlIGNhc2VcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yTWV0aG9kKSkpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yTWV0aG9kLmNhbGwoTyk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgcmVzdWx0ID0gbmV3IEMoKTtcbiAgICBmb3IgKDshKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgcmVzdWx0ID0gbmV3IEMobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xudmFyIGZhY3RvcmllcyA9IHt9O1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24gKEMsIGFyZ3NMZW5ndGgsIGFyZ3MpIHtcbiAgaWYgKCEoYXJnc0xlbmd0aCBpbiBmYWN0b3JpZXMpKSB7XG4gICAgZm9yICh2YXIgbGlzdCA9IFtdLCBpID0gMDsgaSA8IGFyZ3NMZW5ndGg7IGkrKykgbGlzdFtpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIGZhY3Rvcmllc1thcmdzTGVuZ3RoXSA9IEZ1bmN0aW9uKCdDLGEnLCAncmV0dXJuIG5ldyBDKCcgKyBsaXN0LmpvaW4oJywnKSArICcpJyk7XG4gIH0gcmV0dXJuIGZhY3Rvcmllc1thcmdzTGVuZ3RoXShDLCBhcmdzKTtcbn07XG5cbi8vIGBGdW5jdGlvbi5wcm90b3R5cGUuYmluZGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi5wcm90b3R5cGUuYmluZFxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5iaW5kIHx8IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiAsIC4uLmFyZ3MgKi8pIHtcbiAgdmFyIGZuID0gYUZ1bmN0aW9uKHRoaXMpO1xuICB2YXIgcGFydEFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHZhciBib3VuZEZ1bmN0aW9uID0gZnVuY3Rpb24gYm91bmQoLyogYXJncy4uLiAqLykge1xuICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZEZ1bmN0aW9uID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfTtcbiAgaWYgKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpIGJvdW5kRnVuY3Rpb24ucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICByZXR1cm4gYm91bmRGdW5jdGlvbjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGO1xudmFyIE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCA9ICdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBTUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIVNQRUNJRVNfU1VQUE9SVDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmNvbmNhdFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQGlzQ29uY2F0U3ByZWFkYWJsZSBhbmQgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSB0b0xlbmd0aChFLmxlbmd0aCk7XG4gICAgICAgIGlmIChuICsgbGVuID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgVHlwZUVycm9yKE1BWElNVU1fQUxMT1dFRF9JTkRFWF9FWENFRURFRCk7XG4gICAgICAgIGZvciAoayA9IDA7IGsgPCBsZW47IGsrKywgbisrKSBpZiAoayBpbiBFKSBjcmVhdGVQcm9wZXJ0eShBLCBuLCBFW2tdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuID49IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93IFR5cGVFcnJvcihNQVhJTVVNX0FMTE9XRURfSU5ERVhfRVhDRUVERUQpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIEFycmF5LmZyb20oaXRlcmFibGUpO1xufSk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIGZyb206IGZyb21cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC11c2VzLXRvLWxlbmd0aCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuLy8gRkY0OS0gaXNzdWVcbnZhciBVU0VTX1RPX0xFTkdUSCA9IGFycmF5TWV0aG9kVXNlc1RvTGVuZ3RoKCdtYXAnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5tYXBgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLm1hcFxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIHx8ICFVU0VTX1RPX0xFTkdUSCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZCcpO1xuXG4vLyBgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbiQoeyB0YXJnZXQ6ICdGdW5jdGlvbicsIHByb3RvOiB0cnVlIH0sIHtcbiAgYmluZDogYmluZFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6ICFERVNDUklQVE9SUywgc2hhbTogIURFU0NSSVBUT1JTIH0sIHtcbiAgZGVmaW5lUHJvcGVydHk6IG9iamVjdERlZmluZVByb3BlcnR5TW9kaWxlLmZcbn0pO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=