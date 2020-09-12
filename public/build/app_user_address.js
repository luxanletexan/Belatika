(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_user_address"],{

/***/ "./assets/js/class/_Address.js":
/*!*************************************!*\
  !*** ./assets/js/class/_Address.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Address; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendors_places__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vendors/places */ "./assets/js/vendors/places.js");
/* harmony import */ var _vendors_places__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendors_places__WEBPACK_IMPORTED_MODULE_2__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Address = /*#__PURE__*/function () {
  /**
   * @param {HTMLElement} addressInput
   */
  function Address(addressInput) {
    _classCallCheck(this, Address);

    if (!addressInput instanceof HTMLElement) {
      return console.error('addressInput doit être un élément du DOM');
    }

    this.addressInput = addressInput;
    this.appId = this.addressInput.dataset.appId;
    this.appKey = this.addressInput.dataset.appKey;
    this.setOptions().initPlaces();
  }
  /**
   * @desc https://community.algolia.com/places/documentation.html#options
   * @return {this}
   */


  _createClass(Address, [{
    key: "setOptions",
    value: function setOptions() {
      this.fixedOptions = {
        appId: this.appId,
        apiKey: this.appKey,
        container: this.addressInput,
        templates: {
          value: function value(suggestion) {
            return suggestion.name;
          }
        }
      };
      this.reconfigurableOptions = {
        language: 'fr',
        type: 'address'
      };
      return this;
    }
    /**
     * @desc Active Algolia places pour l'autocomplétion des champs d'adresse
     * @return {this}
     */

  }, {
    key: "initPlaces",
    value: function initPlaces() {
      var placesAutocomplete = _vendors_places__WEBPACK_IMPORTED_MODULE_2___default()(this.fixedOptions).configure(this.reconfigurableOptions);
      placesAutocomplete.on('change', function resultSelected(e) {
        document.getElementById('address_country').value = e.suggestion.country || '';
        document.getElementById('address_city').value = e.suggestion.city || '';
        document.getElementById('address_postcode').value = e.suggestion.postcode || '';
      });
      placesAutocomplete.on('clear', function () {
        document.getElementById('address_country').value = '';
        document.getElementById('address_city').value = '';
        document.getElementById('address_postcode').value = '';
      });
      return this;
    }
  }]);

  return Address;
}();



/***/ }),

/***/ "./assets/js/pages/user/_address.js":
/*!******************************************!*\
  !*** ./assets/js/pages/user/_address.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_Address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../class/_Address */ "./assets/js/class/_Address.js");

document.addEventListener('DOMContentLoaded', function () {
  new _class_Address__WEBPACK_IMPORTED_MODULE_0__["default"](document.getElementById('address_address'));
});

/***/ })

},[["./assets/js/pages/user/_address.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app_blog_article~app_shop_index~app_user_address","vendors~app_shop_index~app_user_address","app_shop_index~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX0FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL3VzZXIvX2FkZHJlc3MuanMiXSwibmFtZXMiOlsiQWRkcmVzcyIsImFkZHJlc3NJbnB1dCIsIkhUTUxFbGVtZW50IiwiY29uc29sZSIsImVycm9yIiwiYXBwSWQiLCJkYXRhc2V0IiwiYXBwS2V5Iiwic2V0T3B0aW9ucyIsImluaXRQbGFjZXMiLCJmaXhlZE9wdGlvbnMiLCJhcGlLZXkiLCJjb250YWluZXIiLCJ0ZW1wbGF0ZXMiLCJ2YWx1ZSIsInN1Z2dlc3Rpb24iLCJuYW1lIiwicmVjb25maWd1cmFibGVPcHRpb25zIiwibGFuZ3VhZ2UiLCJ0eXBlIiwicGxhY2VzQXV0b2NvbXBsZXRlIiwicGxhY2VzIiwiY29uZmlndXJlIiwib24iLCJyZXN1bHRTZWxlY3RlZCIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY291bnRyeSIsImNpdHkiLCJwb3N0Y29kZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsTztBQUVqQjs7O0FBR0EsbUJBQVlDLFlBQVosRUFDQTtBQUFBOztBQUNJLFFBQUksQ0FBQ0EsWUFBRCxZQUF5QkMsV0FBN0IsRUFBMEM7QUFDdEMsYUFBT0MsT0FBTyxDQUFDQyxLQUFSLENBQWMsMENBQWQsQ0FBUDtBQUNIOztBQUNELFNBQUtILFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0ksS0FBTCxHQUFhLEtBQUtKLFlBQUwsQ0FBa0JLLE9BQWxCLENBQTBCRCxLQUF2QztBQUNBLFNBQUtFLE1BQUwsR0FBYyxLQUFLTixZQUFMLENBQWtCSyxPQUFsQixDQUEwQkMsTUFBeEM7QUFFQSxTQUFLQyxVQUFMLEdBQWtCQyxVQUFsQjtBQUNIO0FBRUQ7Ozs7Ozs7O2lDQUtBO0FBQ0ksV0FBS0MsWUFBTCxHQUFvQjtBQUNoQkwsYUFBSyxFQUFFLEtBQUtBLEtBREk7QUFFaEJNLGNBQU0sRUFBRSxLQUFLSixNQUZHO0FBR2hCSyxpQkFBUyxFQUFFLEtBQUtYLFlBSEE7QUFJaEJZLGlCQUFTLEVBQUU7QUFDUEMsZUFBSyxFQUFFLGVBQVNDLFVBQVQsRUFBcUI7QUFDeEIsbUJBQU9BLFVBQVUsQ0FBQ0MsSUFBbEI7QUFDSDtBQUhNO0FBSkssT0FBcEI7QUFVQSxXQUFLQyxxQkFBTCxHQUE2QjtBQUN6QkMsZ0JBQVEsRUFBRSxJQURlO0FBRXpCQyxZQUFJLEVBQUU7QUFGbUIsT0FBN0I7QUFLQSxhQUFPLElBQVA7QUFDSDtBQUVEOzs7Ozs7O2lDQUlhO0FBQ1QsVUFBSUMsa0JBQWtCLEdBQUdDLHNEQUFNLENBQUMsS0FBS1gsWUFBTixDQUFOLENBQTBCWSxTQUExQixDQUFvQyxLQUFLTCxxQkFBekMsQ0FBekI7QUFFQUcsd0JBQWtCLENBQUNHLEVBQW5CLENBQXNCLFFBQXRCLEVBQWdDLFNBQVNDLGNBQVQsQ0FBd0JDLENBQXhCLEVBQTJCO0FBQ3ZEQyxnQkFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ2IsS0FBM0MsR0FBbURXLENBQUMsQ0FBQ1YsVUFBRixDQUFhYSxPQUFiLElBQXdCLEVBQTNFO0FBQ0FGLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NiLEtBQXhDLEdBQWdEVyxDQUFDLENBQUNWLFVBQUYsQ0FBYWMsSUFBYixJQUFxQixFQUFyRTtBQUNBSCxnQkFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixFQUE0Q2IsS0FBNUMsR0FBb0RXLENBQUMsQ0FBQ1YsVUFBRixDQUFhZSxRQUFiLElBQXlCLEVBQTdFO0FBQ0gsT0FKRDtBQUtBVix3QkFBa0IsQ0FBQ0csRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNqQ0csZ0JBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNiLEtBQTNDLEdBQW1ELEVBQW5EO0FBQ0FZLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NiLEtBQXhDLEdBQWdELEVBQWhEO0FBQ0FZLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLEVBQTRDYixLQUE1QyxHQUFvRCxFQUFwRDtBQUNILE9BSkQ7QUFNQSxhQUFPLElBQVA7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURMO0FBQUE7QUFBQTtBQUVBWSxRQUFRLENBQUNLLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUkvQixzREFBSixDQUFZMEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFaO0FBQ0gsQ0FGRCxFIiwiZmlsZSI6ImFwcF91c2VyX2FkZHJlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGxhY2VzIGZyb20gJy4uL3ZlbmRvcnMvcGxhY2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZHJlc3Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYWRkcmVzc0lucHV0XHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGFkZHJlc3NJbnB1dClcclxuICAgIHtcclxuICAgICAgICBpZiAoIWFkZHJlc3NJbnB1dCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdhZGRyZXNzSW5wdXQgZG9pdCDDqnRyZSB1biDDqWzDqW1lbnQgZHUgRE9NJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkcmVzc0lucHV0ID0gYWRkcmVzc0lucHV0O1xyXG4gICAgICAgIHRoaXMuYXBwSWQgPSB0aGlzLmFkZHJlc3NJbnB1dC5kYXRhc2V0LmFwcElkO1xyXG4gICAgICAgIHRoaXMuYXBwS2V5ID0gdGhpcy5hZGRyZXNzSW5wdXQuZGF0YXNldC5hcHBLZXk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucygpLmluaXRQbGFjZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjIGh0dHBzOi8vY29tbXVuaXR5LmFsZ29saWEuY29tL3BsYWNlcy9kb2N1bWVudGF0aW9uLmh0bWwjb3B0aW9uc1xyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0T3B0aW9ucygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5maXhlZE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGFwcElkOiB0aGlzLmFwcElkLFxyXG4gICAgICAgICAgICBhcGlLZXk6IHRoaXMuYXBwS2V5LFxyXG4gICAgICAgICAgICBjb250YWluZXI6IHRoaXMuYWRkcmVzc0lucHV0LFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZXM6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihzdWdnZXN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1Z2dlc3Rpb24ubmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5yZWNvbmZpZ3VyYWJsZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiAnZnInLFxyXG4gICAgICAgICAgICB0eXBlOiAnYWRkcmVzcycsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAZGVzYyBBY3RpdmUgQWxnb2xpYSBwbGFjZXMgcG91ciBsJ2F1dG9jb21wbMOpdGlvbiBkZXMgY2hhbXBzIGQnYWRyZXNzZVxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgaW5pdFBsYWNlcygpIHtcclxuICAgICAgICBsZXQgcGxhY2VzQXV0b2NvbXBsZXRlID0gcGxhY2VzKHRoaXMuZml4ZWRPcHRpb25zKS5jb25maWd1cmUodGhpcy5yZWNvbmZpZ3VyYWJsZU9wdGlvbnMpO1xyXG5cclxuICAgICAgICBwbGFjZXNBdXRvY29tcGxldGUub24oJ2NoYW5nZScsIGZ1bmN0aW9uIHJlc3VsdFNlbGVjdGVkKGUpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3NfY291bnRyeScpLnZhbHVlID0gZS5zdWdnZXN0aW9uLmNvdW50cnkgfHwgJyc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzX2NpdHknKS52YWx1ZSA9IGUuc3VnZ2VzdGlvbi5jaXR5IHx8ICcnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzc19wb3N0Y29kZScpLnZhbHVlID0gZS5zdWdnZXN0aW9uLnBvc3Rjb2RlIHx8ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBsYWNlc0F1dG9jb21wbGV0ZS5vbignY2xlYXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzX2NvdW50cnknKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzc19jaXR5JykudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3NfcG9zdGNvZGUnKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQWRkcmVzcyBmcm9tIFwiLi4vLi4vY2xhc3MvX0FkZHJlc3NcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBuZXcgQWRkcmVzcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzc19hZGRyZXNzJykpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9