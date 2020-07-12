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
   * @param {{minWidth: number, visibleSlides: number, slidesToScroll: number, navigation: boolean, autoplay: boolean}[]} options.breakpoints
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

    if (this.autoplay) {
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

      if (!this.navigation) {
        if (this.nextButton instanceof HTMLElement) {
          this.root.removeChild(this.nextButton);
          this.nextButton = undefined;
        }

        if (this.prevButton instanceof HTMLElement) {
          this.root.removeChild(this.prevButton);
          this.prevButton = undefined;
        }

        return this;
      } else if (this.nextButton !== undefined && this.prevButton !== undefined) {
        return this;
      }

      this.nextButton = this.createDivWithClass('carousel__next');
      this.prevButton = this.createDivWithClass('carousel__prev');
      this.nextButton.addEventListener('click', this.next.bind(this));
      this.prevButton.addEventListener('click', this.prev.bind(this));
      this.root.appendChild(this.nextButton);
      this.root.appendChild(this.prevButton);

      if (this.options.loop || this.options.infinite) {
        return this;
      }

      this.onMove(function (index) {
        if (index === 0) {
          _this2.prevButton.classList.add('carousel__prev--hidden');
        } else {
          _this2.prevButton.classList.remove('carousel__prev--hidden');
        }

        if (_this2.items[_this2.currentItem + _this2.visibleSlides] === undefined) {
          _this2.nextButton.classList.add('carousel__next--hidden');
        } else {
          _this2.nextButton.classList.remove('carousel__next--hidden');
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
        this.setStyle().createNavigation();

        if (this.autoplay) {
          this.startAutoplay();
        } else {
          this.stopAutoplay();
        }
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
     * @return {boolean}
     */

  }, {
    key: "navigation",
    get: function get() {
      return this.breakpoint === null ? this.options.navigation : this.breakpoint.navigation;
    }
    /**
     * @return {boolean}
     */

  }, {
    key: "autoplay",
    get: function get() {
      return this.breakpoint === null ? this.options.autoplay : this.breakpoint.autoplay;
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
    window.addEventListener('touchmove', this.drag.bind(this), {
      passive: false
    });
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
          this.lastTranslate.x = 0;
        } else {
          this.carousel.prev();
          this.lastTranslate.x = 0;
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

/***/ "./assets/js/class/_Salesmap.js":
/*!**************************************!*\
  !*** ./assets/js/class/_Salesmap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Salesmap; });
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../functions/_ajax */ "./assets/js/functions/_ajax.js");
/* harmony import */ var _vendors_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendors/leaflet */ "./assets/js/vendors/leaflet.js");
/* harmony import */ var _vendors_leaflet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendors_leaflet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vendors_places__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vendors/places */ "./assets/js/vendors/places.js");
/* harmony import */ var _vendors_places__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vendors_places__WEBPACK_IMPORTED_MODULE_9__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Salesmap = /*#__PURE__*/function () {
  /**
   * @callback ajaxCallback
   * @param {Object} response
   */

  /**
   * @param {String} mapid
   * @param {Object} options
   * @param {{element: HTMLElement, url: string, callback: ajaxCallback, datas: Object}[]} options.buttons
   * @param {Boolean} options.display
   */
  function Salesmap(mapid) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Salesmap);

    //Options
    this.options = Object.assign({
      buttons: [],
      display: true
    }, options);
    this.zoom = null; //DOM

    this.mapElement = document.getElementById(mapid);
    this.customerCountries = this.mapElement.dataset.customer_countries.split(',');
    this.setMap(mapid).addGeojson(); //Events

    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  _createClass(Salesmap, [{
    key: "style",
    value: function style(feature) {
      var opacity = this.customerCountries.indexOf(feature.properties.iso_a2) === -1 ? 0 : 0.7;
      return {
        fillColor: '#dc0fee',
        weight: 2,
        color: 'white',
        dashArray: '3',
        fillOpacity: opacity
      };
    }
  }, {
    key: "setMap",
    value: function setMap(mapid) {
      this.map = _vendors_leaflet__WEBPACK_IMPORTED_MODULE_8___default.a.map(mapid, {
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false
      });
      this.layer = new _vendors_leaflet__WEBPACK_IMPORTED_MODULE_8___default.a.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      });
      this.map.addLayer(this.layer);
      return this;
    }
  }, {
    key: "addGeojson",
    value: function addGeojson() {
      var _this = this;

      Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_7__["default"])(this.mapElement.dataset.geojson, function (geojson) {
        _vendors_leaflet__WEBPACK_IMPORTED_MODULE_8___default.a.geoJson(geojson, {
          style: _this.style.bind(_this)
        }).addTo(_this.map);
      });
      return this;
    }
  }, {
    key: "setView",
    value: function setView() {
      var params = [{
        height: '180px',
        maxWidth: '300px',
        lat: 40
      }, {
        height: '350px',
        maxWidth: '550px',
        lat: 40
      }, {
        height: '600px',
        maxWidth: '1100px',
        lat: 30
      }];
      this.mapElement.style.height = params[this.zoom].height;
      this.mapElement.style.maxWidth = params[this.zoom].maxWidth;
      this.map.setView(new _vendors_leaflet__WEBPACK_IMPORTED_MODULE_8___default.a.LatLng(params[this.zoom].lat, 0), this.zoom);
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      var windowWidth = window.innerWidth;
      var zoom = null;

      if (windowWidth < 500) {
        zoom = 0;
      } else if (windowWidth < 1000) {
        zoom = 1;
      } else {
        zoom = 2;
      }

      if (zoom !== this.zoom) {
        this.zoom = zoom;
        this.setView();
      }
    }
  }]);

  return Salesmap;
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

/***/ "./assets/js/pages/shop/_index.js":
/*!****************************************!*\
  !*** ./assets/js/pages/shop/_index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/_Carousel */ "./assets/js/class/_Carousel.js");
/* harmony import */ var _class_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../class/_Popup */ "./assets/js/class/_Popup.js");
/* harmony import */ var _class_Salesmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../class/_Salesmap */ "./assets/js/class/_Salesmap.js");



document.addEventListener('DOMContentLoaded', function () {
  new _class_Carousel__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('carousel'), {
    slidesToScroll: 1,
    visibleSlides: 1,
    navigation: false,
    loop: true,
    autoplay: true,
    breakpoints: [{
      minWidth: 576,
      visibleSlides: 2,
      slidesToScroll: 2,
      navigation: true,
      autoplay: false
    }, {
      minWidth: 768,
      visibleSlides: 3,
      slidesToScroll: 3,
      navigation: true
    }, {
      minWidth: 992,
      visibleSlides: 4,
      slidesToScroll: 4,
      navigation: true
    }]
  });
  var popupElt = document.getElementById('newsletter-popup');
  var subscribeNewsletterElt = document.getElementById('subscribe-newsletter');
  var stopNewsletterSuggestionElt = document.getElementById('stop-newsletter-suggestion');

  if (popupElt) {
    new _class_Popup__WEBPACK_IMPORTED_MODULE_1__["default"](popupElt, {
      buttons: [{
        element: subscribeNewsletterElt,
        url: subscribeNewsletterElt.dataset.url,
        datas: {
          subscribe: true
        }
      }, {
        element: stopNewsletterSuggestionElt,
        url: stopNewsletterSuggestionElt.dataset.url
      }]
    });
  }

  new _class_Salesmap__WEBPACK_IMPORTED_MODULE_2__["default"]('sales-map');
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


/***/ })

},[["./assets/js/pages/shop/_index.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app_blog_article~app_shop_index~app_user_address","vendors~app_shop_index~app_user_address","app_shop_index~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fQ2Fyb3VzZWxUb3VjaFBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX1BvcHVwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fU2FsZXNtYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Z1bmN0aW9ucy9fYWpheC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvc2hvcC9faW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzIl0sIm5hbWVzIjpbIkNhcm91c2VsIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJ2aXNpYmxlU2xpZGVzIiwic2xpZGVzVG9TY3JvbGwiLCJsb29wIiwiaW5maW5pdGUiLCJwYWdpbmF0aW9uIiwibmF2aWdhdGlvbiIsImF1dG9wbGF5IiwiYXV0b3BsYXlUaW1lb3V0IiwiYnJlYWtwb2ludHMiLCJFcnJvciIsImNoaWxkcmVuIiwic2xpY2UiLCJjYWxsIiwiY3VycmVudEl0ZW0iLCJtb3ZlQ2FsbGJhY2tzIiwib2Zmc2V0IiwiYXV0b3BsYXlJZCIsImJyZWFrcG9pbnQiLCJyb290IiwiY3JlYXRlRGl2V2l0aENsYXNzIiwiY29udGFpbmVyIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJpdGVtcyIsIm1hcCIsImNoaWxkIiwiaXRlbSIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsImNsb25lTm9kZSIsImdvdG9JdGVtIiwiZm9yRWFjaCIsInNldFN0eWxlIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVBhZ2luYXRpb24iLCJvbldpbmRvd1Jlc2l6ZSIsIm9uS2V5ZG93biIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwicmVzZXRJbmZpbml0ZSIsInN0YXJ0QXV0b3BsYXkiLCJDYXJvdXNlbFRvdWNoUGx1Z2luIiwicmF0aW8iLCJzdHlsZSIsIndpZHRoIiwibmV4dEJ1dHRvbiIsIkhUTUxFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ1bmRlZmluZWQiLCJwcmV2QnV0dG9uIiwibmV4dCIsInByZXYiLCJvbk1vdmUiLCJpbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImJ1dHRvbnMiLCJwYWdlc0NvdW50IiwiaSIsImJ1dHRvbiIsInB1c2giLCJjb3VudCIsImFjdGl2ZUJ1dHRvbiIsIk1hdGgiLCJmbG9vciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInBlcmNlbnQiLCJ0cmFuc2Zvcm0iLCJzdG9wQXV0b3BsYXkiLCJhbmltYXRpb24iLCJYIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJ0cmFuc2xhdGUiLCJvZmZzZXRIZWlnaHQiLCJlbmFibGVUcmFuc2l0aW9uIiwibW92ZUNhbGxiYWNrIiwiZSIsImtleSIsImtleUNvZGUiLCJjYWxsYmFjayIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsImN1cnJlbnRCcmVha3BvaW50IiwibWluV2lkdGgiLCJjbGFzc05hbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFuc2l0aW9uIiwib2Zmc2V0V2lkdGgiLCJjYXJvdXNlbCIsInByZXZlbnREZWZhdWx0Iiwic3RhcnREcmFnIiwiZHJhZyIsInBhc3NpdmUiLCJlbmREcmFnIiwidG91Y2hlcyIsIm9yaWdpbiIsIngiLCJzY3JlZW5YIiwieSIsInNjcmVlblkiLCJjb250YWluZXJXaWR0aCIsInBvaW50IiwiYWJzIiwic3RvcFByb3BhZ2F0aW9uIiwiYmFzZVRyYW5zbGF0ZSIsImxhc3RUcmFuc2xhdGUiLCJjYXJvdXNlbFdpZHRoIiwiUG9wdXAiLCJkaXNwbGF5IiwicG9wdXAiLCJzZXRPdmVybGF5IiwiY2xvc2UiLCJxdWVyeVNlbGVjdG9yIiwiaW1wb3J0RWx0Iiwib25PdmVybGF5Q2xpY2siLCJvblBvcHVwQ2xpY2siLCJvdmVybGF5Iiwic2V0QnV0dG9uRXZlbnQiLCJzZXRTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsImhlaWdodCIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJib2R5Iiwic3R5bGVzIiwia2V5cyIsInByb3BlcnR5IiwiZGF0YXMiLCJkYXRhc2V0IiwiY2FuY2VsIiwiYWpheCIsInVybCIsInJlc3BvbnNlIiwibWV0aG9kIiwiaW5uZXJIVE1MIiwiU2FsZXNtYXAiLCJtYXBpZCIsInpvb20iLCJtYXBFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXN0b21lckNvdW50cmllcyIsImN1c3RvbWVyX2NvdW50cmllcyIsInNwbGl0Iiwic2V0TWFwIiwiYWRkR2VvanNvbiIsImZlYXR1cmUiLCJvcGFjaXR5IiwiaW5kZXhPZiIsInByb3BlcnRpZXMiLCJpc29fYTIiLCJmaWxsQ29sb3IiLCJ3ZWlnaHQiLCJjb2xvciIsImRhc2hBcnJheSIsImZpbGxPcGFjaXR5IiwiTCIsInpvb21Db250cm9sIiwiZHJhZ2dpbmciLCJzY3JvbGxXaGVlbFpvb20iLCJkb3VibGVDbGlja1pvb20iLCJsYXllciIsIlRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwiYWRkTGF5ZXIiLCJnZW9qc29uIiwiZ2VvSnNvbiIsImFkZFRvIiwicGFyYW1zIiwibWF4V2lkdGgiLCJsYXQiLCJzZXRWaWV3IiwiTGF0TG5nIiwianNvbiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzdGF0dXMiLCJKU09OIiwicGFyc2UiLCJzZW5kIiwicG9wdXBFbHQiLCJzdWJzY3JpYmVOZXdzbGV0dGVyRWx0Iiwic3RvcE5ld3NsZXR0ZXJTdWdnZXN0aW9u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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUNBQW1DO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsVUFBVSxlQUFlO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4Q0EsUUFBUSxtQkFBTyxDQUFDLHVFQUFxQjtBQUNyQyxXQUFXLG1CQUFPLENBQUMsK0VBQXlCO0FBQzVDLGtDQUFrQyxtQkFBTyxDQUFDLHVIQUE2Qzs7QUFFdkY7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHBfc2hvcF9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJvdXNlbFRvdWNoUGx1Z2luIGZyb20gXCIuL19DYXJvdXNlbFRvdWNoUGx1Z2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAY2FsbGJhY2sgbW92ZUNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy52aXNpYmxlU2xpZGVzPTFdIE5vbWJyZSBkJ8OpbMOpbWVudHMgdmlzaWJsZXMgZGFucyB1biBzbGlkZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnNsaWRlc1RvU2Nyb2xsPTFdIE5vbWJyZSBkJ8OpbMOpbWVudHMgw6AgZmFpcmUgZMOpZmlsZXJcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubG9vcD1mYWxzZV0gQm91Y2xlIGVuIGZpbiBkZSBzbGlkZXJcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaW5maW5pdGU9ZmFsc2VdXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnBhZ2luYXRpb249ZmFsc2VdXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm5hdmlnYXRpb249dHJ1ZV1cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b3BsYXk9ZmFsc2VdXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9wbGF5VGltZW91dD01MDAwXVxyXG4gICAgICogQHBhcmFtIHt7bWluV2lkdGg6IG51bWJlciwgdmlzaWJsZVNsaWRlczogbnVtYmVyLCBzbGlkZXNUb1Njcm9sbDogbnVtYmVyLCBuYXZpZ2F0aW9uOiBib29sZWFuLCBhdXRvcGxheTogYm9vbGVhbn1bXX0gb3B0aW9ucy5icmVha3BvaW50c1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBvcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICB2aXNpYmxlU2xpZGVzOiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxyXG4gICAgICAgICAgICBicmVha3BvaW50czogW11cclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxvb3AgJiYgdGhpcy5vcHRpb25zLmluZmluaXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuIGNhcm91c3NlbCBuZSBwZXV0IMOqdHJlIMOgIGxhIGZvaXMgZW4gYm91Y2xlIGV0IGVuIGluZmluaVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gW10uc2xpY2UuY2FsbChlbGVtZW50LmNoaWxkcmVuKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gMDtcclxuICAgICAgICB0aGlzLm1vdmVDYWxsYmFja3MgPSBbXTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IDA7XHJcbiAgICAgICAgdGhpcy5hdXRvcGxheUlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJyZWFrcG9pbnQgPSBudWxsO1xyXG5cclxuICAgICAgICAvL01vZGlmaWNhdGlvbnMgZHUgRE9NXHJcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5jcmVhdGVEaXZXaXRoQ2xhc3MoJ2Nhcm91c2VsJyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWxfX2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHRoaXMucm9vdC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJvb3QpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBjaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5jcmVhdGVEaXZXaXRoQ2xhc3MoJ2Nhcm91c2VsX19jb250YWluZXJfX2l0ZW0nKTtcclxuICAgICAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5maW5pdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXQgPSAxICsgdGhpcy5vcHRpb25zLnZpc2libGVTbGlkZXMgLSB0aGlzLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9mZnNldCA+IGNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlBhcyBhc3NleiBkJ8OpbMOpbWVudHMgZGFucyBsZSBjYXJvdXNzZWxcIiwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IFtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoLXRoaXMub2Zmc2V0KS5tYXAoaXRlbSA9PiBpdGVtLmNsb25lTm9kZSh0cnVlKSksXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZSgwLCB0aGlzLm9mZnNldCkubWFwKGl0ZW0gPT4gaXRlbS5jbG9uZU5vZGUodHJ1ZSkpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHRoaXMuZ290b0l0ZW0odGhpcy5vZmZzZXQsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSkpO1xyXG4gICAgICAgIHRoaXMuc2V0U3R5bGUoKS5jcmVhdGVOYXZpZ2F0aW9uKCkuY3JlYXRlUGFnaW5hdGlvbigpO1xyXG5cclxuICAgICAgICAvL0V2ZW5lbWVudHNcclxuICAgICAgICB0aGlzLm9uV2luZG93UmVzaXplKCk7XHJcbiAgICAgICAgdGhpcy5vbktleWRvd24oKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmluZmluaXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnJlc2V0SW5maW5pdGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBdXRvcGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXcgQ2Fyb3VzZWxUb3VjaFBsdWdpbih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGxpcXVlIGxlcyBib25uZXMgZGltZW5zaW9ucyBhdXggw6lsw6ltZW50cyBkdSBjYXJvdXNzZWxcclxuICAgICAqL1xyXG4gICAgc2V0U3R5bGUoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHJhdGlvID0gdGhpcy5pdGVtcy5sZW5ndGggLyB0aGlzLnZpc2libGVTbGlkZXM7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSAocmF0aW8gKiAxMDApICsgJyUnO1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLndpZHRoID0gKCgxMDAgLyB0aGlzLnZpc2libGVTbGlkZXMpIC8gcmF0aW8pICsgJyUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENyw6lhdGlvbiBkZXMgZmzDqGNoZXMgZGUgbmF2aWdhdGlvblxyXG4gICAgICogQHJldHVybiB7Q2Fyb3VzZWx9XHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU5hdmlnYXRpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGlmICghdGhpcy5uYXZpZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5leHRCdXR0b24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290LnJlbW92ZUNoaWxkKHRoaXMubmV4dEJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRCdXR0b24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJldkJ1dHRvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QucmVtb3ZlQ2hpbGQodGhpcy5wcmV2QnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmV4dEJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJldkJ1dHRvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5leHRCdXR0b24gPSB0aGlzLmNyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWxfX25leHQnKTtcclxuICAgICAgICB0aGlzLnByZXZCdXR0b24gPSB0aGlzLmNyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWxfX3ByZXYnKTtcclxuICAgICAgICB0aGlzLm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm5leHQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmV2LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLm5leHRCdXR0b24pO1xyXG4gICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLnByZXZCdXR0b24pO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9vcCB8fCB0aGlzLm9wdGlvbnMuaW5maW5pdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Nb3ZlKChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcHJldi0taGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3ByZXYtLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLml0ZW1zW3RoaXMuY3VycmVudEl0ZW0gKyB0aGlzLnZpc2libGVTbGlkZXNdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fbmV4dC0taGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX25leHQtLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcsOpYXRpb24gZGVzIGljb25lcyBkZSBwYWdpbmF0aW9uXHJcbiAgICAgKiBAcmV0dXJuIHtDYXJvdXNlbH1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhZ2luYXRpb24gPSB0aGlzLmNyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWxfX3BhZ2luYXRpb24nKTtcclxuICAgICAgICBsZXQgYnV0dG9ucyA9IFtdO1xyXG4gICAgICAgIGxldCBwYWdlc0NvdW50ID1cclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGggKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTm9tYnJlIGQnaXRlbXNcclxuICAgICAgICAgICAgKHRoaXMub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAtIHRoaXMub3B0aW9ucy52aXNpYmxlU2xpZGVzKSAgICAgIC8vLSBub21icmUgZCdpdGVtcyBub24gcGFnaW5hYmxlcyAoZmluIGRlIGxpc3RlKVxyXG4gICAgICAgICAgICAtICh0aGlzLm9mZnNldCA/IHRoaXMub2Zmc2V0ICsgMSA6IDApXHJcbiAgICAgICAgO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZXNDb3VudDsgaSArPSB0aGlzLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlRGl2V2l0aENsYXNzKCdjYXJvdXNlbF9fcGFnaW5hdGlvbl9fYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZ290b0l0ZW0oaSArIHRoaXMub2Zmc2V0KSk7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb24uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZChwYWdpbmF0aW9uKTtcclxuICAgICAgICB0aGlzLm9uTW92ZSgoaW5kZXggPT4ge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDIgKiB0aGlzLm9mZnNldDtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZUJ1dHRvbiA9IGJ1dHRvbnNbTWF0aC5mbG9vcigoKGluZGV4IC0gdGhpcy5vZmZzZXQpICUgY291bnQpIC8gdGhpcy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKV07XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uX19idXR0b24tLWFjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbl9fYnV0dG9uLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIETDqW1hcnJlIGxlIGTDqWZpbGVtZW50IGF1dG9tYXRpcXVlXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0QXV0b3BsYXkoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYXV0b3BsYXlJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KGZhbHNlKTtcclxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuYXV0b3BsYXlUaW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wQXV0b3BsYXkoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9wbGF5SWQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9wbGF5SWQpO1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9wbGF5SWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2xhdGUocGVyY2VudClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3BlcmNlbnR9JSlgO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoc3RvcEF1dG9wbGF5ID0gdHJ1ZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoc3RvcEF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ290b0l0ZW0odGhpcy5jdXJyZW50SXRlbSArIHRoaXMuc2xpZGVzVG9TY3JvbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXYoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ290b0l0ZW0odGhpcy5jdXJyZW50SXRlbSAtIHRoaXMuc2xpZGVzVG9TY3JvbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRMOpcGxhY2UgbGUgY2Fyb3Vzc2VsIHZlcnMgbCfDqWzDqW1lbnQgY2libMOpXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FuaW1hdGlvbj10cnVlXVxyXG4gICAgICovXHJcbiAgICBnb3RvSXRlbShpbmRleCwgYW5pbWF0aW9uID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLnZpc2libGVTbGlkZXM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSB0aGlzLml0ZW1zLmxlbmd0aCB8fCAodGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRJdGVtICsgdGhpcy52aXNpYmxlU2xpZGVzXSA9PT0gdW5kZWZpbmVkICYmIGluZGV4ID4gdGhpcy5jdXJyZW50SXRlbSkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCAmJiAhdGhpcy5vcHRpb25zLmluZmluaXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5pbmZpbml0ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBYID0gaW5kZXggKiAtMTAwIC8gdGhpcy5pdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKCFhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZShYKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7IC8vRm9yY2UgcmVwYWludFxyXG4gICAgICAgIGlmICghYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gaW5kZXg7XHJcbiAgICAgICAgZm9yIChsZXQgbW92ZUNhbGxiYWNrIG9mIHRoaXMubW92ZUNhbGxiYWNrcykge1xyXG4gICAgICAgICAgICBtb3ZlQ2FsbGJhY2soaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIETDqXBsYWNlIGxlIGNvbnRhaW5lciBwb3VyIGRvbm5lciBsJ2ltcHJlc3Npb24gZCd1biBzbGlkZXIgaW5maW5pXHJcbiAgICAgKi9cclxuICAgIHJlc2V0SW5maW5pdGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEl0ZW0gJT0gdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLm9mZnNldCArIDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEl0ZW0gPD0gdGhpcy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICsgMSkge1xyXG4gICAgICAgICAgICB0aGlzLmdvdG9JdGVtKHRoaXMuY3VycmVudEl0ZW0gKyB0aGlzLml0ZW1zLmxlbmd0aCAtIDIgKiB0aGlzLm9mZnNldCwgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50SXRlbSA+PSB0aGlzLml0ZW1zLmxlbmd0aCAtIHRoaXMub2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ290b0l0ZW0odGhpcy5jdXJyZW50SXRlbSAtICh0aGlzLml0ZW1zLmxlbmd0aCAtIDIgKiB0aGlzLm9mZnNldCksIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlkb3duKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGUua2V5ID09PSAnUmlnaHQnIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBlLmtleSA9PT0gJ0xlZnQnIHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge21vdmVDYWxsYmFja30gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgb25Nb3ZlKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW92ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd1Jlc2l6ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRCcmVha3BvaW50ID0gbnVsbDtcclxuICAgICAgICBmb3IgKGxldCBicmVha3BvaW50IG9mIHRoaXMub3B0aW9ucy5icmVha3BvaW50cykge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEJyZWFrcG9pbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChicmVha3BvaW50Lm1pbldpZHRoIDwgd2luZG93V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludC5taW5XaWR0aCA8IHdpbmRvd1dpZHRoICYmIGJyZWFrcG9pbnQubWluV2lkdGggPiBjdXJyZW50QnJlYWtwb2ludC5taW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgIT09IHRoaXMuYnJlYWtwb2ludFxyXG4gICAgICAgICAgICB8fCAoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5icmVha3BvaW50ICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAmJiBjdXJyZW50QnJlYWtwb2ludC5taW5XaWR0aCAhPT0gdGhpcy5icmVha3BvaW50Lm1pbldpZHRoXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gY3VycmVudEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3R5bGUoKS5jcmVhdGVOYXZpZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IG1vdmVDYWxsYmFjayBvZiB0aGlzLm1vdmVDYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgbW92ZUNhbGxiYWNrKHRoaXMuY3VycmVudEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVEaXZXaXRoQ2xhc3MoY2xhc3NOYW1lKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZVRyYW5zaXRpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlVHJhbnNpdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXQgc2xpZGVzVG9TY3JvbGwoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQgPT09IG51bGwgPyB0aGlzLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiB0aGlzLmJyZWFrcG9pbnQuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldCB2aXNpYmxlU2xpZGVzKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50ID09PSBudWxsID8gdGhpcy5vcHRpb25zLnZpc2libGVTbGlkZXMgOiB0aGlzLmJyZWFrcG9pbnQudmlzaWJsZVNsaWRlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGdldCBuYXZpZ2F0aW9uKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50ID09PSBudWxsID8gdGhpcy5vcHRpb25zLm5hdmlnYXRpb24gOiB0aGlzLmJyZWFrcG9pbnQubmF2aWdhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAgICAgKi9cclxuICAgIGdldCBhdXRvcGxheSgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnJlYWtwb2ludCA9PT0gbnVsbCA/IHRoaXMub3B0aW9ucy5hdXRvcGxheSA6IHRoaXMuYnJlYWtwb2ludC5hdXRvcGxheTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbnRhaW5lcldpZHRoKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldCBjYXJvdXNlbFdpZHRoKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb290Lm9mZnNldFdpZHRoO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWxUb3VjaFBsdWdpbiB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7Q2Fyb3VzZWx9IGNhcm91c2VsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNhcm91c2VsKSB7XHJcbiAgICAgICAgY2Fyb3VzZWwuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgICAgICBjYXJvdXNlbC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYWcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgY2Fyb3VzZWwuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnN0YXJ0RHJhZy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcuYmluZCh0aGlzKSwge3Bhc3NpdmU6IGZhbHNlfSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmVuZERyYWcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5lbmREcmFnLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuZW5kRHJhZy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEw6ltYXJyZSBsZSBkw6lwbGFjZW1lbnQgYXUgdG91Y2hlclxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fFRvdWNoRXZlbnR9IGVcclxuICAgICAqL1xyXG4gICAgc3RhcnREcmFnKGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGUudG91Y2hlcykge1xyXG4gICAgICAgICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHt0b3VjaGVzfSA9IGU7IC8vT2JqZWN0IGRlc3RydWN0dXJpbmcgY2FyIGNoYW5nZW1lbnQgZGUgdHlwZSA6IGUgdHlwZSBUb3VjaFxyXG4gICAgICAgICAgICAgICAgZSA9IHRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5zdG9wQXV0b3BsYXkoKTtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IHt4OiBlLnNjcmVlblgsIHk6IGUuc2NyZWVuWX07XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2Fyb3VzZWwuY29udGFpbmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5kaXNhYmxlVHJhbnNpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRMOpcGxhY2VtZW50XHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR8VG91Y2hFdmVudH0gZVxyXG4gICAgICovXHJcbiAgICBkcmFnKGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9yaWdpbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwb2ludCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGU7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZSA9IHt4OiBwb2ludC5zY3JlZW5YIC0gdGhpcy5vcmlnaW4ueCwgeTogcG9pbnQuc2NyZWVuWSAtIHRoaXMub3JpZ2luLnl9O1xyXG4gICAgICAgIGlmIChlLnRvdWNoZXMgJiYgTWF0aC5hYnModHJhbnNsYXRlLngpID4gTWF0aC5hYnModHJhbnNsYXRlLnkpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJhc2VUcmFuc2xhdGUgPSB0aGlzLmNhcm91c2VsLmN1cnJlbnRJdGVtICogLTEwMCAvIHRoaXMuY2Fyb3VzZWwuaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubGFzdFRyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsLnRyYW5zbGF0ZShiYXNlVHJhbnNsYXRlICsgMTAwICogdHJhbnNsYXRlLnggLyB0aGlzLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbiBkZSBkw6lwbGFjZW1lbnRcclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudHxUb3VjaEV2ZW50fSBlXHJcbiAgICAgKi9cclxuICAgIGVuZERyYWcoZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMub3JpZ2luIHx8ICF0aGlzLmxhc3RUcmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhcm91c2VsLmVuYWJsZVRyYW5zaXRpb24oKTtcclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5sYXN0VHJhbnNsYXRlLnggLyB0aGlzLmNhcm91c2VsLmNhcm91c2VsV2lkdGgpID4gMC4yKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RUcmFuc2xhdGUueCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VHJhbnNsYXRlLnggPSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5wcmV2KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUcmFuc2xhdGUueCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsLmdvdG9JdGVtKHRoaXMuY2Fyb3VzZWwuY3VycmVudEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGFqYXggZnJvbSBcIi4uL2Z1bmN0aW9ucy9fYWpheFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAgICAgKiBAcGFyYW0ge3tlbGVtZW50OiBIVE1MRWxlbWVudCwgdXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBhamF4Q2FsbGJhY2ssIGRhdGFzOiBPYmplY3R9W119IG9wdGlvbnMuYnV0dG9uc1xyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvcHRpb25zLmRpc3BsYXlcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucyA9IHt9KVxyXG4gICAge1xyXG4gICAgICAgIC8vT3B0aW9uc1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy9HZXN0aW9uIGR1IERPTVxyXG4gICAgICAgIHRoaXMucG9wdXAgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2V0T3ZlcmxheSgpO1xyXG4gICAgICAgIHRoaXMuY2xvc2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXMuZmEtdGltZXMtY2lyY2xlJyk7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRFbHQgPSB0aGlzLnBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5pbXBvcnQnKTtcclxuXHJcbiAgICAgICAgLy9HZXN0aW9uIGRlcyBldmVuZW1lbnRzXHJcbiAgICAgICAgaWYgKHRoaXMuY2xvc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25PdmVybGF5Q2xpY2suYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUG9wdXBDbGljay5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uT3ZlcmxheUNsaWNrLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5idXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldEJ1dHRvbkV2ZW50KGJ1dHRvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3ZlcmxheSgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuc2V0U3R5bGVzKG92ZXJsYXksIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuNyknLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICB0b3A6ICcwJyxcclxuICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICB6SW5kZXg6ICc5OTknLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiB0aGlzLm9wdGlvbnMuZGlzcGxheSA/ICdmbGV4JyA6ICdub25lJyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBvdmVybGF5LmFwcGVuZENoaWxkKHRoaXMucG9wdXApO1xyXG4gICAgICAgIHRoaXMuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkgPSBvdmVybGF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbGlxdWUgZGVzIHN0eWxlcyBDU1Mgw6AgdW4gw6lsw6ltZW50IEhUTUxcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXNcclxuICAgICAqL1xyXG4gICAgc2V0U3R5bGVzKGVsZW1lbnQsIHN0eWxlcylcclxuICAgIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gc3R5bGVzW3Byb3BlcnR5XTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uT3ZlcmxheUNsaWNrKClcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5KTtcclxuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBvblBvcHVwQ2xpY2soZSlcclxuICAgIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGJ1dHRvblxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnV0dG9uLmVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBidXR0b24udXJsXHJcbiAgICAgKiBAcGFyYW0ge2FqYXhDYWxsYmFja30gYnV0dG9uLmNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYnV0dG9uLmRhdGFzXHJcbiAgICAgKi9cclxuICAgIHNldEJ1dHRvbkV2ZW50KGJ1dHRvbilcclxuICAgIHtcclxuICAgICAgICBpZiAoIWJ1dHRvbi5kYXRhcykge1xyXG4gICAgICAgICAgICBidXR0b24uZGF0YXMgPSB7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b24uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5lbGVtZW50LmRhdGFzZXQuY2FuY2VsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25PdmVybGF5Q2xpY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFqYXgoYnV0dG9uLnVybCwgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uT3ZlcmxheUNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9LCB7bWV0aG9kOiAnUE9TVCcsIGRhdGFzOiBidXR0b24uZGF0YXN9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfVxyXG5cclxuICAgIGltcG9ydChlbGVtZW50KVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmltcG9ydEVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmltcG9ydEVsdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRJbXBvcnQoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmltcG9ydEVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmltcG9ydEVsdC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgYWpheCBmcm9tIFwiLi4vZnVuY3Rpb25zL19hamF4XCI7XHJcbmltcG9ydCBMIGZyb20gJy4uL3ZlbmRvcnMvbGVhZmxldCc7XHJcbmltcG9ydCBwbGFjZXMgZnJvbSAnLi4vdmVuZG9ycy9wbGFjZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FsZXNtYXAge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3BvbnNlXHJcbiAgICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBtYXBpZFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7e2VsZW1lbnQ6IEhUTUxFbGVtZW50LCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IGFqYXhDYWxsYmFjaywgZGF0YXM6IE9iamVjdH1bXX0gb3B0aW9ucy5idXR0b25zXHJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9wdGlvbnMuZGlzcGxheVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihtYXBpZCwgb3B0aW9ucyA9IHt9KVxyXG4gICAge1xyXG4gICAgICAgIC8vT3B0aW9uc1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICBidXR0b25zOiBbXSxcclxuICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnpvb20gPSBudWxsO1xyXG5cclxuICAgICAgICAvL0RPTVxyXG4gICAgICAgIHRoaXMubWFwRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hcGlkKTtcclxuICAgICAgICB0aGlzLmN1c3RvbWVyQ291bnRyaWVzID0gdGhpcy5tYXBFbGVtZW50LmRhdGFzZXQuY3VzdG9tZXJfY291bnRyaWVzLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgdGhpcy5zZXRNYXAobWFwaWQpLmFkZEdlb2pzb24oKTtcclxuXHJcbiAgICAgICAgLy9FdmVudHNcclxuICAgICAgICB0aGlzLm9uV2luZG93UmVzaXplKCk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3R5bGUoZmVhdHVyZSkge1xyXG4gICAgICAgIGxldCBvcGFjaXR5ID0gdGhpcy5jdXN0b21lckNvdW50cmllcy5pbmRleE9mKGZlYXR1cmUucHJvcGVydGllcy5pc29fYTIpID09PSAtMSA/IDAgOiAwLjc7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZmlsbENvbG9yOiAnI2RjMGZlZScsXHJcbiAgICAgICAgICAgIHdlaWdodDogMixcclxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGRhc2hBcnJheTogJzMnLFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogb3BhY2l0eVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWFwKG1hcGlkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWFwID0gTC5tYXAobWFwaWQsIHtcclxuICAgICAgICAgICAgem9vbUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjcm9sbFdoZWVsWm9vbTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRvdWJsZUNsaWNrWm9vbTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IG5ldyBMLlRpbGVMYXllcihcclxuICAgICAgICAgICAgJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb246ICdNYXAgZGF0YSDCqSA8YSBocmVmPVwiaHR0cHM6Ly9vcGVuc3RyZWV0bWFwLm9yZ1wiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5tYXAuYWRkTGF5ZXIodGhpcy5sYXllcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkR2VvanNvbigpXHJcbiAgICB7XHJcbiAgICAgICAgYWpheCh0aGlzLm1hcEVsZW1lbnQuZGF0YXNldC5nZW9qc29uLCAoZ2VvanNvbikgPT4ge1xyXG4gICAgICAgICAgICBMLmdlb0pzb24oZ2VvanNvbiwge3N0eWxlOiB0aGlzLnN0eWxlLmJpbmQodGhpcyl9KS5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxODBweCcsXHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzMwMHB4JyxcclxuICAgICAgICAgICAgICAgIGxhdDogNDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc1NTBweCcsXHJcbiAgICAgICAgICAgICAgICBsYXQ6IDQwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzYwMHB4JyxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTEwMHB4JyxcclxuICAgICAgICAgICAgICAgIGxhdDogMzBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICB0aGlzLm1hcEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcGFyYW1zW3RoaXMuem9vbV0uaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMubWFwRWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IHBhcmFtc1t0aGlzLnpvb21dLm1heFdpZHRoO1xyXG4gICAgICAgIHRoaXMubWFwLnNldFZpZXcobmV3IEwuTGF0TG5nKHBhcmFtc1t0aGlzLnpvb21dLmxhdCwgMCksIHRoaXMuem9vbSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25XaW5kb3dSZXNpemUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICAgIGxldCB6b29tID0gbnVsbDtcclxuICAgICAgICBpZiAod2luZG93V2lkdGggPCA1MDApIHtcclxuICAgICAgICAgICAgem9vbSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dXaWR0aCA8IDEwMDApIHtcclxuICAgICAgICAgICAgem9vbSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgem9vbSA9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh6b29tICE9PSB0aGlzLnpvb20pIHtcclxuICAgICAgICAgICAgdGhpcy56b29tID0gem9vbTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaWV3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGEgZ2xvYmFsIG1lbWJlci5cclxuICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IHJlc3BvbnNlTWVzc2FnZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAqIEBwYXJhbSB7YWpheENhbGxiYWNrfSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubWV0aG9kPUdFVF1cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRhdGFzPXt9XVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmpzb249dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXgodXJsLCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9KVxyXG57XHJcbiAgICAvL1NldHRpbmdzXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBkYXRhczoge30sXHJcbiAgICAgICAganNvbjogdHJ1ZSxcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCBmb3JtRGF0YSA9IG51bGw7XHJcbiAgICBsZXQgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YXMpO1xyXG4gICAgaWYgKHByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocHJvcGVydHksIG9wdGlvbnMuZGF0YXNbcHJvcGVydHldKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgJiYgeGhyLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWNoZWMgSFRUUCA6IGNvZGUnLnhoci5zdGF0dXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm1hdCBKU09OIGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxufSIsImltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi4vLi4vY2xhc3MvX0Nhcm91c2VsXCI7XHJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi4vLi4vY2xhc3MvX1BvcHVwXCI7XHJcbmltcG9ydCBTYWxlc21hcCBmcm9tIFwiLi4vLi4vY2xhc3MvX1NhbGVzbWFwXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbmV3IENhcm91c2VsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJvdXNlbCcpLCB7XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgdmlzaWJsZVNsaWRlczogMSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiBmYWxzZSxcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIGJyZWFrcG9pbnRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA1NzYsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlU2xpZGVzOiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA3NjgsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlU2xpZGVzOiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA5OTIsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlU2xpZGVzOiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHBvcHVwRWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld3NsZXR0ZXItcG9wdXAnKTtcclxuICAgIGNvbnN0IHN1YnNjcmliZU5ld3NsZXR0ZXJFbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3Vic2NyaWJlLW5ld3NsZXR0ZXInKTtcclxuICAgIGNvbnN0IHN0b3BOZXdzbGV0dGVyU3VnZ2VzdGlvbkVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdG9wLW5ld3NsZXR0ZXItc3VnZ2VzdGlvbicpO1xyXG4gICAgaWYgKHBvcHVwRWx0KSB7XHJcbiAgICAgICAgbmV3IFBvcHVwKHBvcHVwRWx0LCB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBzdWJzY3JpYmVOZXdzbGV0dGVyRWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc3Vic2NyaWJlTmV3c2xldHRlckVsdC5kYXRhc2V0LnVybCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhczoge3N1YnNjcmliZTogdHJ1ZX1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogc3RvcE5ld3NsZXR0ZXJTdWdnZXN0aW9uRWx0LFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogc3RvcE5ld3NsZXR0ZXJTdWdnZXN0aW9uRWx0LmRhdGFzZXQudXJsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG5ldyBTYWxlc21hcCgnc2FsZXMtbWFwJyk7XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgdmFyIE8gPSB0b09iamVjdChhcnJheUxpa2UpO1xuICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgbWFwZm4gPSBhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gIHZhciBpdGVyYXRvck1ldGhvZCA9IGdldEl0ZXJhdG9yTWV0aG9kKE8pO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yLCBuZXh0LCB2YWx1ZTtcbiAgaWYgKG1hcHBpbmcpIG1hcGZuID0gYmluZChtYXBmbiwgYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gIC8vIGlmIHRoZSB0YXJnZXQgaXMgbm90IGl0ZXJhYmxlIG9yIGl0J3MgYW4gYXJyYXkgd2l0aCB0aGUgZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBhIHNpbXBsZSBjYXNlXG4gIGlmIChpdGVyYXRvck1ldGhvZCAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyYXRvck1ldGhvZChpdGVyYXRvck1ldGhvZCkpKSB7XG4gICAgaXRlcmF0b3IgPSBpdGVyYXRvck1ldGhvZC5jYWxsKE8pO1xuICAgIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICAgIHJlc3VsdCA9IG5ldyBDKCk7XG4gICAgZm9yICg7IShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyhpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcbiAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZnJvbScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBBcnJheS5mcm9tKGl0ZXJhYmxlKTtcbn0pO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=