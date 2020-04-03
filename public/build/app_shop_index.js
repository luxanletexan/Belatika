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
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _CarouselTouchPlugin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_CarouselTouchPlugin */ "./assets/js/class/_CarouselTouchPlugin.js");





















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Carousel =
/*#__PURE__*/
function () {
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

    new _CarouselTouchPlugin__WEBPACK_IMPORTED_MODULE_20__["default"](this);
  }
  /**
   * Applique les bonnes dimensions aux éléments du caroussel
   */


  _createClass(Carousel, [{
    key: "setStyle",
    value: function setStyle() {
      var ratio = this.items.length / this.visibleSlides;
      this.container.style.width = ratio * 100 + '%';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          item.style.width = 100 / this.visibleSlides / ratio + '%';
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
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.moveCallbacks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var moveCallback = _step2.value;
          moveCallback(index);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
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
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.options.breakpoints[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
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
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      if (currentBreakpoint !== this.breakpoint || currentBreakpoint !== null && this.breakpoint !== null && currentBreakpoint.minWidth !== this.breakpoint.minWidth) {
        this.breakpoint = currentBreakpoint;
        this.setStyle();
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = this.moveCallbacks[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var moveCallback = _step4.value;
          moveCallback(this.currentItem);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
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

var CarouselTouchPlugin =
/*#__PURE__*/
function () {
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

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
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

},[["./assets/js/pages/shop/_index.js","runtime","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app_shop_index~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jbGFzcy9fQ2Fyb3VzZWxUb3VjaFBsdWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFnZXMvc2hvcC9faW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJlbGVtZW50Iiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInZpc2libGVTbGlkZXMiLCJzbGlkZXNUb1Njcm9sbCIsImxvb3AiLCJpbmZpbml0ZSIsInBhZ2luYXRpb24iLCJuYXZpZ2F0aW9uIiwiYXV0b3BsYXkiLCJhdXRvcGxheVRpbWVvdXQiLCJicmVha3BvaW50cyIsIkVycm9yIiwiY2hpbGRyZW4iLCJzbGljZSIsImNhbGwiLCJjdXJyZW50SXRlbSIsIm1vdmVDYWxsYmFja3MiLCJvZmZzZXQiLCJhdXRvcGxheUlkIiwiYnJlYWtwb2ludCIsInJvb3QiLCJjcmVhdGVEaXZXaXRoQ2xhc3MiLCJjb250YWluZXIiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsIml0ZW1zIiwibWFwIiwiY2hpbGQiLCJpdGVtIiwibGVuZ3RoIiwiY29uc29sZSIsImVycm9yIiwiY2xvbmVOb2RlIiwiZ290b0l0ZW0iLCJmb3JFYWNoIiwic2V0U3R5bGUiLCJjcmVhdGVOYXZpZ2F0aW9uIiwiY3JlYXRlUGFnaW5hdGlvbiIsIm9uV2luZG93UmVzaXplIiwib25LZXlkb3duIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJyZXNldEluZmluaXRlIiwic3RhcnRBdXRvcGxheSIsIkNhcm91c2VsVG91Y2hQbHVnaW4iLCJyYXRpbyIsInN0eWxlIiwid2lkdGgiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsIm5leHQiLCJwcmV2Iiwib25Nb3ZlIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ1bmRlZmluZWQiLCJidXR0b25zIiwicGFnZXNDb3VudCIsImkiLCJidXR0b24iLCJwdXNoIiwiY291bnQiLCJhY3RpdmVCdXR0b24iLCJNYXRoIiwiZmxvb3IiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwZXJjZW50IiwidHJhbnNmb3JtIiwic3RvcEF1dG9wbGF5IiwiYW5pbWF0aW9uIiwiWCIsImRpc2FibGVUcmFuc2l0aW9uIiwidHJhbnNsYXRlIiwib2Zmc2V0SGVpZ2h0IiwiZW5hYmxlVHJhbnNpdGlvbiIsIm1vdmVDYWxsYmFjayIsImUiLCJrZXkiLCJrZXlDb2RlIiwiY2FsbGJhY2siLCJ3aW5kb3dXaWR0aCIsImlubmVyV2lkdGgiLCJjdXJyZW50QnJlYWtwb2ludCIsIm1pbldpZHRoIiwiY2xhc3NOYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHJhbnNpdGlvbiIsIm9mZnNldFdpZHRoIiwiY2Fyb3VzZWwiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXJ0RHJhZyIsImRyYWciLCJlbmREcmFnIiwidG91Y2hlcyIsIm9yaWdpbiIsIngiLCJzY3JlZW5YIiwieSIsInNjcmVlblkiLCJjb250YWluZXJXaWR0aCIsInBvaW50IiwiYWJzIiwic3RvcFByb3BhZ2F0aW9uIiwiYmFzZVRyYW5zbGF0ZSIsImxhc3RUcmFuc2xhdGUiLCJjYXJvdXNlbFdpZHRoIiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7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QUFDQTtBQUNBLEdBQUcsMkRBQTJEO0FBQzlEO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHBfc2hvcF9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJvdXNlbFRvdWNoUGx1Z2luIGZyb20gXCIuL19DYXJvdXNlbFRvdWNoUGx1Z2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJvdXNlbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAY2FsbGJhY2sgbW92ZUNhbGxiYWNrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgICAqL1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy52aXNpYmxlU2xpZGVzPTFdIE5vbWJyZSBkJ8OpbMOpbWVudHMgdmlzaWJsZXMgZGFucyB1biBzbGlkZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnNsaWRlc1RvU2Nyb2xsPTFdIE5vbWJyZSBkJ8OpbMOpbWVudHMgw6AgZmFpcmUgZMOpZmlsZXJcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubG9vcD1mYWxzZV0gQm91Y2xlIGVuIGZpbiBkZSBzbGlkZXJcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaW5maW5pdGU9ZmFsc2VdXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnBhZ2luYXRpb249ZmFsc2VdXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLm5hdmlnYXRpb249dHJ1ZV1cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b3BsYXk9ZmFsc2VdXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9wbGF5VGltZW91dD01MDAwXVxyXG4gICAgICogQHBhcmFtIHt7bWluV2lkdGg6IG51bWJlciwgdmlzaWJsZVNsaWRlczogbnVtYmVyLCBzbGlkZXNUb1Njcm9sbDogbnVtYmVyfVtdfSBvcHRpb25zLmJyZWFrcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIHZpc2libGVTbGlkZXM6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnRzOiBbXVxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubG9vcCAmJiB0aGlzLm9wdGlvbnMuaW5maW5pdGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW4gY2Fyb3Vzc2VsIG5lIHBldXQgw6p0cmUgw6AgbGEgZm9pcyBlbiBib3VjbGUgZXQgZW4gaW5maW5pXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSAwO1xyXG4gICAgICAgIHRoaXMubW92ZUNhbGxiYWNrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcclxuICAgICAgICB0aGlzLmF1dG9wbGF5SWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYnJlYWtwb2ludCA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vTW9kaWZpY2F0aW9ucyBkdSBET01cclxuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLmNyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWwnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMuY3JlYXRlRGl2V2l0aENsYXNzKCdjYXJvdXNlbF9fY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy5yb290LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xyXG4gICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMucm9vdCk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWxfX2NvbnRhaW5lcl9faXRlbScpO1xyXG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5pbmZpbml0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9mZnNldCA9IDEgKyB0aGlzLm9wdGlvbnMudmlzaWJsZVNsaWRlcyAtIHRoaXMub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2Zmc2V0ID4gY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUGFzIGFzc2V6IGQnw6lsw6ltZW50cyBkYW5zIGxlIGNhcm91c3NlbFwiLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gW1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZSgtdGhpcy5vZmZzZXQpLm1hcChpdGVtID0+IGl0ZW0uY2xvbmVOb2RlKHRydWUpKSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuaXRlbXMsXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKDAsIHRoaXMub2Zmc2V0KS5tYXAoaXRlbSA9PiBpdGVtLmNsb25lTm9kZSh0cnVlKSlcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgdGhpcy5nb3RvSXRlbSh0aGlzLm9mZnNldCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdHlsZSgpLmNyZWF0ZU5hdmlnYXRpb24oKS5jcmVhdGVQYWdpbmF0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vRXZlbmVtZW50c1xyXG4gICAgICAgIHRoaXMub25XaW5kb3dSZXNpemUoKTtcclxuICAgICAgICB0aGlzLm9uS2V5ZG93bigpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaW5maW5pdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMucmVzZXRJbmZpbml0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvcGxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3IENhcm91c2VsVG91Y2hQbHVnaW4odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBsaXF1ZSBsZXMgYm9ubmVzIGRpbWVuc2lvbnMgYXV4IMOpbMOpbWVudHMgZHUgY2Fyb3Vzc2VsXHJcbiAgICAgKi9cclxuICAgIHNldFN0eWxlKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCByYXRpbyA9IHRoaXMuaXRlbXMubGVuZ3RoIC8gdGhpcy52aXNpYmxlU2xpZGVzO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gKHJhdGlvICogMTAwKSArICclJztcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS53aWR0aCA9ICgoMTAwIC8gdGhpcy52aXNpYmxlU2xpZGVzKSAvIHJhdGlvKSArICclJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcsOpYXRpb24gZGVzIGZsw6hjaGVzIGRlIG5hdmlnYXRpb25cclxuICAgICAqIEByZXR1cm4ge0Nhcm91c2VsfVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVOYXZpZ2F0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5uYXZpZ2F0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbmV4dEJ1dHRvbiA9IHRoaXMuY3JlYXRlRGl2V2l0aENsYXNzKCdjYXJvdXNlbF9fbmV4dCcpO1xyXG4gICAgICAgIGxldCBwcmV2QnV0dG9uID0gdGhpcy5jcmVhdGVEaXZXaXRoQ2xhc3MoJ2Nhcm91c2VsX19wcmV2Jyk7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubmV4dC5iaW5kKHRoaXMpKTtcclxuICAgICAgICBwcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcmV2LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKTtcclxuICAgICAgICB0aGlzLnJvb3QuYXBwZW5kQ2hpbGQocHJldkJ1dHRvbik7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb29wIHx8IHRoaXMub3B0aW9ucy5pbmZpbml0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbk1vdmUoKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcHJldkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcHJldi0taGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmV2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wcmV2LS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRJdGVtICsgdGhpcy52aXNpYmxlU2xpZGVzXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19uZXh0LS1oaWRkZW4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX25leHQtLWhpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcsOpYXRpb24gZGVzIGljb25lcyBkZSBwYWdpbmF0aW9uXHJcbiAgICAgKiBAcmV0dXJuIHtDYXJvdXNlbH1cclxuICAgICAqL1xyXG4gICAgY3JlYXRlUGFnaW5hdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMucGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhZ2luYXRpb24gPSB0aGlzLmNyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWxfX3BhZ2luYXRpb24nKTtcclxuICAgICAgICBsZXQgYnV0dG9ucyA9IFtdO1xyXG4gICAgICAgIGxldCBwYWdlc0NvdW50ID1cclxuICAgICAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGggKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vTm9tYnJlIGQnaXRlbXNcclxuICAgICAgICAgICAgKHRoaXMub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAtIHRoaXMub3B0aW9ucy52aXNpYmxlU2xpZGVzKSAgICAgIC8vLSBub21icmUgZCdpdGVtcyBub24gcGFnaW5hYmxlcyAoZmluIGRlIGxpc3RlKVxyXG4gICAgICAgICAgICAtICh0aGlzLm9mZnNldCA/IHRoaXMub2Zmc2V0ICsgMSA6IDApXHJcbiAgICAgICAgO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFnZXNDb3VudDsgaSArPSB0aGlzLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlRGl2V2l0aENsYXNzKCdjYXJvdXNlbF9fcGFnaW5hdGlvbl9fYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZ290b0l0ZW0oaSArIHRoaXMub2Zmc2V0KSk7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb24uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZChwYWdpbmF0aW9uKTtcclxuICAgICAgICB0aGlzLm9uTW92ZSgoaW5kZXggPT4ge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDIgKiB0aGlzLm9mZnNldDtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZUJ1dHRvbiA9IGJ1dHRvbnNbTWF0aC5mbG9vcigoKGluZGV4IC0gdGhpcy5vZmZzZXQpICUgY291bnQpIC8gdGhpcy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKV07XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmVCdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19wYWdpbmF0aW9uX19idXR0b24tLWFjdGl2ZScpKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbF9fcGFnaW5hdGlvbl9fYnV0dG9uLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIETDqW1hcnJlIGxlIGTDqWZpbGVtZW50IGF1dG9tYXRpcXVlXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0QXV0b3BsYXkoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYXV0b3BsYXlJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KGZhbHNlKTtcclxuICAgICAgICB9LCB0aGlzLm9wdGlvbnMuYXV0b3BsYXlUaW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wQXV0b3BsYXkoKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh0aGlzLmF1dG9wbGF5SWQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9wbGF5SWQpO1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9wbGF5SWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2xhdGUocGVyY2VudClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3BlcmNlbnR9JSlgO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoc3RvcEF1dG9wbGF5ID0gdHJ1ZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoc3RvcEF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEF1dG9wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ290b0l0ZW0odGhpcy5jdXJyZW50SXRlbSArIHRoaXMuc2xpZGVzVG9TY3JvbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXYoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZ290b0l0ZW0odGhpcy5jdXJyZW50SXRlbSAtIHRoaXMuc2xpZGVzVG9TY3JvbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRMOpcGxhY2UgbGUgY2Fyb3Vzc2VsIHZlcnMgbCfDqWzDqW1lbnQgY2libMOpXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FuaW1hdGlvbj10cnVlXVxyXG4gICAgICovXHJcbiAgICBnb3RvSXRlbShpbmRleCwgYW5pbWF0aW9uID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLnZpc2libGVTbGlkZXM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSB0aGlzLml0ZW1zLmxlbmd0aCB8fCAodGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRJdGVtICsgdGhpcy52aXNpYmxlU2xpZGVzXSA9PT0gdW5kZWZpbmVkICYmIGluZGV4ID4gdGhpcy5jdXJyZW50SXRlbSkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubG9vcCAmJiAhdGhpcy5vcHRpb25zLmluZmluaXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3B0aW9ucy5pbmZpbml0ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBYID0gaW5kZXggKiAtMTAwIC8gdGhpcy5pdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKCFhbmltYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRyYW5zbGF0ZShYKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7IC8vRm9yY2UgcmVwYWludFxyXG4gICAgICAgIGlmICghYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0gaW5kZXg7XHJcbiAgICAgICAgZm9yIChsZXQgbW92ZUNhbGxiYWNrIG9mIHRoaXMubW92ZUNhbGxiYWNrcykge1xyXG4gICAgICAgICAgICBtb3ZlQ2FsbGJhY2soaW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIETDqXBsYWNlIGxlIGNvbnRhaW5lciBwb3VyIGRvbm5lciBsJ2ltcHJlc3Npb24gZCd1biBzbGlkZXIgaW5maW5pXHJcbiAgICAgKi9cclxuICAgIHJlc2V0SW5maW5pdGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEl0ZW0gJT0gdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLm9mZnNldCArIDE7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEl0ZW0gPD0gdGhpcy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICsgMSkge1xyXG4gICAgICAgICAgICB0aGlzLmdvdG9JdGVtKHRoaXMuY3VycmVudEl0ZW0gKyB0aGlzLml0ZW1zLmxlbmd0aCAtIDIgKiB0aGlzLm9mZnNldCwgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50SXRlbSA+PSB0aGlzLml0ZW1zLmxlbmd0aCAtIHRoaXMub2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ290b0l0ZW0odGhpcy5jdXJyZW50SXRlbSAtICh0aGlzLml0ZW1zLmxlbmd0aCAtIDIgKiB0aGlzLm9mZnNldCksIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlkb3duKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGUua2V5ID09PSAnUmlnaHQnIHx8IGUua2V5Q29kZSA9PT0gMzkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBlLmtleSA9PT0gJ0xlZnQnIHx8IGUua2V5Q29kZSA9PT0gMzcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge21vdmVDYWxsYmFja30gY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgb25Nb3ZlKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubW92ZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd1Jlc2l6ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRCcmVha3BvaW50ID0gbnVsbDtcclxuICAgICAgICBmb3IgKGxldCBicmVha3BvaW50IG9mIHRoaXMub3B0aW9ucy5icmVha3BvaW50cykge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEJyZWFrcG9pbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChicmVha3BvaW50Lm1pbldpZHRoIDwgd2luZG93V2lkdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IGJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYnJlYWtwb2ludC5taW5XaWR0aCA8IHdpbmRvd1dpZHRoICYmIGJyZWFrcG9pbnQubWluV2lkdGggPiBjdXJyZW50QnJlYWtwb2ludC5taW5XaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSBicmVha3BvaW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgIT09IHRoaXMuYnJlYWtwb2ludFxyXG4gICAgICAgICAgICB8fCAoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5icmVha3BvaW50ICE9PSBudWxsXHJcbiAgICAgICAgICAgICAgICAmJiBjdXJyZW50QnJlYWtwb2ludC5taW5XaWR0aCAhPT0gdGhpcy5icmVha3BvaW50Lm1pbldpZHRoXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5icmVha3BvaW50ID0gY3VycmVudEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3R5bGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IG1vdmVDYWxsYmFjayBvZiB0aGlzLm1vdmVDYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgbW92ZUNhbGxiYWNrKHRoaXMuY3VycmVudEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcclxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxyXG4gICAgICovXHJcbiAgICBjcmVhdGVEaXZXaXRoQ2xhc3MoY2xhc3NOYW1lKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZVRyYW5zaXRpb24oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlVHJhbnNpdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBnZXQgc2xpZGVzVG9TY3JvbGwoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJyZWFrcG9pbnQgPT09IG51bGwgPyB0aGlzLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiB0aGlzLmJyZWFrcG9pbnQuc2xpZGVzVG9TY3JvbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldCB2aXNpYmxlU2xpZGVzKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5icmVha3BvaW50ID09PSBudWxsID8gdGhpcy5vcHRpb25zLnZpc2libGVTbGlkZXMgOiB0aGlzLmJyZWFrcG9pbnQudmlzaWJsZVNsaWRlcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0IGNvbnRhaW5lcldpZHRoKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIGdldCBjYXJvdXNlbFdpZHRoKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb290Lm9mZnNldFdpZHRoO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2Fyb3VzZWxUb3VjaFBsdWdpbiB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7Q2Fyb3VzZWx9IGNhcm91c2VsXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNhcm91c2VsKSB7XHJcbiAgICAgICAgY2Fyb3VzZWwuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgICAgICBjYXJvdXNlbC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYWcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgY2Fyb3VzZWwuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLnN0YXJ0RHJhZy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5kcmFnLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmVuZERyYWcuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5lbmREcmFnLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuZW5kRHJhZy5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEw6ltYXJyZSBsZSBkw6lwbGFjZW1lbnQgYXUgdG91Y2hlclxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fFRvdWNoRXZlbnR9IGVcclxuICAgICAqL1xyXG4gICAgc3RhcnREcmFnKGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGUudG91Y2hlcykge1xyXG4gICAgICAgICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHt0b3VjaGVzfSA9IGU7IC8vT2JqZWN0IGRlc3RydWN0dXJpbmcgY2FyIGNoYW5nZW1lbnQgZGUgdHlwZSA6IGUgdHlwZSBUb3VjaFxyXG4gICAgICAgICAgICAgICAgZSA9IHRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5zdG9wQXV0b3BsYXkoKTtcclxuICAgICAgICB0aGlzLm9yaWdpbiA9IHt4OiBlLnNjcmVlblgsIHk6IGUuc2NyZWVuWX07XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHRoaXMuY2Fyb3VzZWwuY29udGFpbmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYXJvdXNlbC5kaXNhYmxlVHJhbnNpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRMOpcGxhY2VtZW50XHJcbiAgICAgKiBAcGFyYW0ge01vdXNlRXZlbnR8VG91Y2hFdmVudH0gZVxyXG4gICAgICovXHJcbiAgICBkcmFnKGUpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9yaWdpbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwb2ludCA9IGUudG91Y2hlcyA/IGUudG91Y2hlc1swXSA6IGU7XHJcbiAgICAgICAgbGV0IHRyYW5zbGF0ZSA9IHt4OiBwb2ludC5zY3JlZW5YIC0gdGhpcy5vcmlnaW4ueCwgeTogcG9pbnQuc2NyZWVuWSAtIHRoaXMub3JpZ2luLnl9O1xyXG4gICAgICAgIGlmIChlLnRvdWNoZXMgJiYgTWF0aC5hYnModHJhbnNsYXRlLngpID4gTWF0aC5hYnModHJhbnNsYXRlLnkpKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGJhc2VUcmFuc2xhdGUgPSB0aGlzLmNhcm91c2VsLmN1cnJlbnRJdGVtICogLTEwMCAvIHRoaXMuY2Fyb3VzZWwuaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubGFzdFRyYW5zbGF0ZSA9IHRyYW5zbGF0ZTtcclxuICAgICAgICB0aGlzLmNhcm91c2VsLnRyYW5zbGF0ZShiYXNlVHJhbnNsYXRlICsgMTAwICogdHJhbnNsYXRlLnggLyB0aGlzLndpZHRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpbiBkZSBkw6lwbGFjZW1lbnRcclxuICAgICAqIEBwYXJhbSB7TW91c2VFdmVudHxUb3VjaEV2ZW50fSBlXHJcbiAgICAgKi9cclxuICAgIGVuZERyYWcoZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoIXRoaXMub3JpZ2luIHx8ICF0aGlzLmxhc3RUcmFuc2xhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhcm91c2VsLmVuYWJsZVRyYW5zaXRpb24oKTtcclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5sYXN0VHJhbnNsYXRlLnggLyB0aGlzLmNhcm91c2VsLmNhcm91c2VsV2lkdGgpID4gMC4yKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxhc3RUcmFuc2xhdGUueCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fyb3VzZWwubmV4dCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJvdXNlbC5wcmV2KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhcm91c2VsLmdvdG9JdGVtKHRoaXMuY2Fyb3VzZWwuY3VycmVudEl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9yaWdpbiA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi8uLi9jbGFzcy9fQ2Fyb3VzZWxcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBuZXcgQ2Fyb3VzZWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhcm91c2VsJyksIHtcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcclxuICAgICAgICB2aXNpYmxlU2xpZGVzOiAyLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IDU3NixcclxuICAgICAgICAgICAgICAgIHZpc2libGVTbGlkZXM6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogNzY4LFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZVNsaWRlczogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1pbldpZHRoOiA5OTIsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlU2xpZGVzOiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1hcGZuID0gYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvciwgbmV4dCwgdmFsdWU7XG4gIGlmIChtYXBwaW5nKSBtYXBmbiA9IGJpbmQobWFwZm4sIGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBpdGVyYWJsZSBvciBpdCdzIGFuIGFycmF5IHdpdGggdGhlIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2UgYSBzaW1wbGUgY2FzZVxuICBpZiAoaXRlcmF0b3JNZXRob2QgIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3JNZXRob2QuY2FsbChPKTtcbiAgICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgICByZXN1bHQgPSBuZXcgQygpO1xuICAgIGZvciAoOyEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldC1yZWdleHAucHJvdG90eXBlLmZsYWdzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRoYXQgPSBhbk9iamVjdCh0aGlzKTtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAodGhhdC5nbG9iYWwpIHJlc3VsdCArPSAnZyc7XG4gIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgaWYgKHRoYXQuZG90QWxsKSByZXN1bHQgKz0gJ3MnO1xuICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICBpZiAodGhhdC5zdGlja3kpIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIEFycmF5LmZyb20oaXRlcmFibGUpO1xufSk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIGZyb206IGZyb21cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==