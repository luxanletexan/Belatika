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
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../vendors/leaflet */ "./assets/js/vendors/leaflet.js");
/* harmony import */ var _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_vendors_leaflet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _vendors_places__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../vendors/places */ "./assets/js/vendors/places.js");
/* harmony import */ var _vendors_places__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_vendors_places__WEBPACK_IMPORTED_MODULE_8__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Address = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {string} [options.mapContainerId=map-container]
   * @param {Array}  [options.inputMapNames=['delivery','billing']]
   */
  function Address() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Address);

    this.options = Object.assign({
      mapContainerId: 'map-container',
      inputMapNames: ['delivery', 'billing']
    }, options);
    var mapContainer = document.getElementById(this.options.mapContainerId);

    if (!mapContainer instanceof HTMLElement) {
      return;
    }

    this.appId = mapContainer.dataset.app_id;
    this.appKey = mapContainer.dataset.app_key;
    this.imgPath = mapContainer.dataset.img_path;

    if (mapContainer.hasAttribute('data-lat') && mapContainer.hasAttribute('data-lng')) {
      this.deliveryLatLng = {
        lat: mapContainer.dataset.lat,
        lng: mapContainer.dataset.lng
      };
    } else {
      this.deliveryLatLng = {};
    }

    this.inputMapNames = this.options.inputMapNames;
    this.formElt = document.getElementById('addresses-form');
    this.alertElt = document.getElementById('address-alert');
    this.formData = new FormData();
    this.adresses = {};
    this.markers = [];
    this.inputMapNames.forEach(function (name) {
      _this.adresses[name] = {};
    });
    this.sameAddressCheckboxElt = document.getElementById('same-address');
    this.init();
  }

  _createClass(Address, [{
    key: "init",
    value: function init() {
      this.initTextInputs(this.inputMapNames);
      this.initMap();
      this.initLayer();
      this.map.setView(new _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7___default.a.LatLng(0, 0), 1);
      this.map.addLayer(this.layer);
      this.initIcon();
      this.initEvents();

      if (this.deliveryLatLng.hasOwnProperty('lat') && this.deliveryLatLng.hasOwnProperty('lng')) {
        this.initDeliveryMarker();
      }
    }
    /**
     * @param {array} inputs
     */

  }, {
    key: "initTextInputs",
    value: function initTextInputs(inputs) {
      var _this2 = this;

      this.textInputs = {};
      this.placesAutocomplete = {};
      inputs.forEach(function (name) {
        _this2.textInputs[name] = document.getElementById('user_addresses_' + name + 'Address_fullAddress');
        _this2.placesAutocomplete[name] = _vendors_places__WEBPACK_IMPORTED_MODULE_8___default()({
          appId: _this2.appId,
          apiKey: _this2.appKey,
          container: _this2.textInputs[name],
          type: 'address'
        });
      });
    }
  }, {
    key: "initMap",
    value: function initMap() {
      this.map = _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7___default.a.map('map-container', {
        scrollWheelZoom: false,
        zoomControl: false
      });
    }
  }, {
    key: "initLayer",
    value: function initLayer() {
      this.layer = new _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7___default.a.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 1,
        maxZoom: 17,
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      });
    }
  }, {
    key: "initIcon",
    value: function initIcon() {
      this.icon = _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7___default.a.icon({
        iconUrl: this.imgPath + 'resources/flower.png',
        shadowUrl: this.imgPath + 'resources/flower-shadow.png',
        iconSize: [38, 95],
        // size of the icon
        shadowSize: [50, 64],
        // size of the shadow
        iconAnchor: [22, 94],
        // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],
        // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

      });
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this3 = this;

      this.inputMapNames.forEach(function (name) {
        _this3.placesAutocomplete[name].on('suggestions', function (e) {
          _this3.handleOnSuggestions(e);
        });

        _this3.placesAutocomplete[name].on('cursorchanged', function (e) {
          _this3.handleOnCursorchanged(e);
        });

        _this3.placesAutocomplete[name].on('change', function (e) {
          _this3.handleOnChange(e, name);
        });

        _this3.placesAutocomplete[name].on('clear', function () {
          _this3.handleOnClear(name);
        });
      });
      var billingFieldsetElt = document.getElementById('billing-fieldset');
      this.sameAddressCheckboxElt.addEventListener('click', function (e) {
        billingFieldsetElt.style.display = e.target.checked ? 'none' : 'block';
        _this3.textInputs.billing.required = !e.target.checked;
      });
      billingFieldsetElt.style.display = this.sameAddressCheckboxElt.checked ? 'none' : 'block';
      this.textInputs.billing.required = !this.sameAddressCheckboxElt.checked;
    }
  }, {
    key: "initDeliveryMarker",
    value: function initDeliveryMarker() {
      var marker = _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7___default.a.marker(this.deliveryLatLng, {
        icon: this.icon
      });
      marker.addTo(this.map);
      this.markers.push(marker);
      this.findBestZoom();
    }
  }, {
    key: "handleOnSuggestions",
    value: function handleOnSuggestions(e) {
      var _this4 = this;

      this.markers.forEach(function (marker) {
        _this4.removeMarker(marker);
      });
      this.alertElt.style.display = 'none';
      this.markers = [];

      if (e.suggestions.length === 0) {
        this.map.setView(new _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7___default.a.LatLng(0, 0), 1);
        this.alertElt.style.display = 'block';
        return;
      }

      e.suggestions.forEach(function (suggestion) {
        _this4.addMarker(suggestion);
      });
      this.findBestZoom();
    }
  }, {
    key: "handleOnChange",
    value: function handleOnChange(e, name) {
      var _this5 = this;

      this.markers.forEach(function (marker, markerIndex) {
        if (markerIndex === e.suggestionIndex) {
          _this5.markers = [marker];
          marker.setOpacity(1);

          _this5.findBestZoom();

          _this5.adresses[name] = e.suggestion;

          _this5.populate();
        } else {
          _this5.removeMarker(marker);
        }
      });
    }
  }, {
    key: "handleOnClear",
    value: function handleOnClear(name) {
      var _this6 = this;

      this.map.setView(new _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7___default.a.LatLng(0, 0), 1);
      this.markers.forEach(function (marker) {
        _this6.removeMarker(marker);
      });
      this.adresses[name] = {};
    }
  }, {
    key: "handleOnCursorchanged",
    value: function handleOnCursorchanged(e) {
      var _this7 = this;

      this.markers.forEach(function (marker, markerIndex) {
        if (markerIndex === e.suggestionIndex) {
          marker.setOpacity(1);
          marker.setZIndexOffset(1000);

          _this7.populate();
        } else {
          marker.setZIndexOffset(0);
          marker.setOpacity(0.5);
        }
      });
    }
  }, {
    key: "addMarker",
    value: function addMarker(suggestion) {
      var marker = _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7___default.a.marker(suggestion.latlng, {
        opacity: .4,
        icon: this.icon
      });
      marker.addTo(this.map);
      this.markers.push(marker);
    }
  }, {
    key: "removeMarker",
    value: function removeMarker(marker) {
      this.map.removeLayer(marker);
    }
  }, {
    key: "findBestZoom",
    value: function findBestZoom() {
      var featureGroup = _vendors_leaflet__WEBPACK_IMPORTED_MODULE_7___default.a.featureGroup(this.markers);
      this.map.fitBounds(featureGroup.getBounds().pad(0.5), {
        animate: true
      });
    }
  }, {
    key: "populate",
    value: function populate() {
      var _this8 = this;

      var fields = ['countryCode', 'city', 'administrative', 'county', 'country', 'postcode', 'name', 'value', 'lat', 'lng'];
      this.inputMapNames.forEach(function (name) {
        if (_this8.adresses[name].hasOwnProperty('value')) {
          Object.keys(_this8.adresses[name]).forEach(function (key) {
            if (fields.indexOf(key) !== -1) {
              Address.fillHiddenInput(key, name, _this8.adresses[name][key]);
            } else if (key === 'latlng') {
              Address.fillHiddenInput('lat', name, _this8.adresses[name][key].lat);
              Address.fillHiddenInput('lng', name, _this8.adresses[name][key].lng);
            }
          });
        } else {
          fields.forEach(function (field) {
            document.getElementById('user_addresses_' + name + 'Address_' + field).value = '';
          });
        }
      });
      return true;
    }
  }], [{
    key: "fillHiddenInput",
    value: function fillHiddenInput(type, name, value) {
      var hiddenInput = document.getElementById('user_addresses_' + name + 'Address_' + type);

      if (hiddenInput === null) {
        return;
      }

      hiddenInput.value = value;
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
  new _class_Address__WEBPACK_IMPORTED_MODULE_0__["default"]();
});

/***/ })

},[["./assets/js/pages/user/_address.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app_blog_article~app_shop_index~app_user_address","vendors~app_shop_index~app_user_address","app_shop_index~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2xhc3MvX0FkZHJlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhZ2VzL3VzZXIvX2FkZHJlc3MuanMiXSwibmFtZXMiOlsiQWRkcmVzcyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJtYXBDb250YWluZXJJZCIsImlucHV0TWFwTmFtZXMiLCJtYXBDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiSFRNTEVsZW1lbnQiLCJhcHBJZCIsImRhdGFzZXQiLCJhcHBfaWQiLCJhcHBLZXkiLCJhcHBfa2V5IiwiaW1nUGF0aCIsImltZ19wYXRoIiwiaGFzQXR0cmlidXRlIiwiZGVsaXZlcnlMYXRMbmciLCJsYXQiLCJsbmciLCJmb3JtRWx0IiwiYWxlcnRFbHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYWRyZXNzZXMiLCJtYXJrZXJzIiwiZm9yRWFjaCIsIm5hbWUiLCJzYW1lQWRkcmVzc0NoZWNrYm94RWx0IiwiaW5pdCIsImluaXRUZXh0SW5wdXRzIiwiaW5pdE1hcCIsImluaXRMYXllciIsIm1hcCIsInNldFZpZXciLCJMIiwiTGF0TG5nIiwiYWRkTGF5ZXIiLCJsYXllciIsImluaXRJY29uIiwiaW5pdEV2ZW50cyIsImhhc093blByb3BlcnR5IiwiaW5pdERlbGl2ZXJ5TWFya2VyIiwiaW5wdXRzIiwidGV4dElucHV0cyIsInBsYWNlc0F1dG9jb21wbGV0ZSIsInBsYWNlcyIsImFwaUtleSIsImNvbnRhaW5lciIsInR5cGUiLCJzY3JvbGxXaGVlbFpvb20iLCJ6b29tQ29udHJvbCIsIlRpbGVMYXllciIsIm1pblpvb20iLCJtYXhab29tIiwiYXR0cmlidXRpb24iLCJpY29uIiwiaWNvblVybCIsInNoYWRvd1VybCIsImljb25TaXplIiwic2hhZG93U2l6ZSIsImljb25BbmNob3IiLCJzaGFkb3dBbmNob3IiLCJwb3B1cEFuY2hvciIsIm9uIiwiZSIsImhhbmRsZU9uU3VnZ2VzdGlvbnMiLCJoYW5kbGVPbkN1cnNvcmNoYW5nZWQiLCJoYW5kbGVPbkNoYW5nZSIsImhhbmRsZU9uQ2xlYXIiLCJiaWxsaW5nRmllbGRzZXRFbHQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5IiwidGFyZ2V0IiwiY2hlY2tlZCIsImJpbGxpbmciLCJyZXF1aXJlZCIsIm1hcmtlciIsImFkZFRvIiwicHVzaCIsImZpbmRCZXN0Wm9vbSIsInJlbW92ZU1hcmtlciIsInN1Z2dlc3Rpb25zIiwibGVuZ3RoIiwic3VnZ2VzdGlvbiIsImFkZE1hcmtlciIsIm1hcmtlckluZGV4Iiwic3VnZ2VzdGlvbkluZGV4Iiwic2V0T3BhY2l0eSIsInBvcHVsYXRlIiwic2V0WkluZGV4T2Zmc2V0IiwibGF0bG5nIiwib3BhY2l0eSIsInJlbW92ZUxheWVyIiwiZmVhdHVyZUdyb3VwIiwiZml0Qm91bmRzIiwiZ2V0Qm91bmRzIiwicGFkIiwiYW5pbWF0ZSIsImZpZWxkcyIsImtleXMiLCJrZXkiLCJpbmRleE9mIiwiZmlsbEhpZGRlbklucHV0IiwiZmllbGQiLCJ2YWx1ZSIsImhpZGRlbklucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCQSxPO0FBRWpCOzs7OztBQUtBLHFCQUEwQjtBQUFBOztBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFBQTs7QUFDdEIsU0FBS0EsT0FBTCxHQUFlQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUN6QkMsb0JBQWMsRUFBRSxlQURTO0FBRXpCQyxtQkFBYSxFQUFFLENBQUMsVUFBRCxFQUFhLFNBQWI7QUFGVSxLQUFkLEVBR1pKLE9BSFksQ0FBZjtBQUlBLFFBQUlLLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQUtQLE9BQUwsQ0FBYUcsY0FBckMsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFDRSxZQUFELFlBQXlCRyxXQUE3QixFQUEwQztBQUN0QztB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ICcuLi92ZW5kb3JzL2xlYWZsZXQnO1xyXG5pbXBvcnQgcGxhY2VzIGZyb20gJy4uL3ZlbmRvcnMvcGxhY2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZHJlc3Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tYXBDb250YWluZXJJZD1tYXAtY29udGFpbmVyXVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gIFtvcHRpb25zLmlucHV0TWFwTmFtZXM9WydkZWxpdmVyeScsJ2JpbGxpbmcnXV1cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgIG1hcENvbnRhaW5lcklkOiAnbWFwLWNvbnRhaW5lcicsXHJcbiAgICAgICAgICAgIGlucHV0TWFwTmFtZXM6IFsnZGVsaXZlcnknLCAnYmlsbGluZyddXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICAgICAgbGV0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5tYXBDb250YWluZXJJZCk7XHJcbiAgICAgICAgaWYgKCFtYXBDb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXBwSWQgPSBtYXBDb250YWluZXIuZGF0YXNldC5hcHBfaWQ7XHJcbiAgICAgICAgdGhpcy5hcHBLZXkgPSBtYXBDb250YWluZXIuZGF0YXNldC5hcHBfa2V5O1xyXG4gICAgICAgIHRoaXMuaW1nUGF0aCA9IG1hcENvbnRhaW5lci5kYXRhc2V0LmltZ19wYXRoO1xyXG4gICAgICAgIGlmIChtYXBDb250YWluZXIuaGFzQXR0cmlidXRlKCdkYXRhLWxhdCcpICYmIG1hcENvbnRhaW5lci5oYXNBdHRyaWJ1dGUoJ2RhdGEtbG5nJykpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxpdmVyeUxhdExuZyA9IHtcclxuICAgICAgICAgICAgICAgIGxhdDogbWFwQ29udGFpbmVyLmRhdGFzZXQubGF0LFxyXG4gICAgICAgICAgICAgICAgbG5nOiBtYXBDb250YWluZXIuZGF0YXNldC5sbmdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGl2ZXJ5TGF0TG5nID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5wdXRNYXBOYW1lcyA9IHRoaXMub3B0aW9ucy5pbnB1dE1hcE5hbWVzO1xyXG4gICAgICAgIHRoaXMuZm9ybUVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzZXMtZm9ybScpO1xyXG4gICAgICAgIHRoaXMuYWxlcnRFbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzcy1hbGVydCcpO1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICB0aGlzLmFkcmVzc2VzID0ge307XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hcE5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZHJlc3Nlc1tuYW1lXSA9IHt9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2FtZUFkZHJlc3NDaGVja2JveEVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYW1lLWFkZHJlc3MnKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFRleHRJbnB1dHModGhpcy5pbnB1dE1hcE5hbWVzKTtcclxuICAgICAgICB0aGlzLmluaXRNYXAoKTtcclxuICAgICAgICB0aGlzLmluaXRMYXllcigpO1xyXG4gICAgICAgIHRoaXMubWFwLnNldFZpZXcobmV3IEwuTGF0TG5nKDAsIDApLCAxKTtcclxuICAgICAgICB0aGlzLm1hcC5hZGRMYXllcih0aGlzLmxheWVyKTtcclxuICAgICAgICB0aGlzLmluaXRJY29uKCk7XHJcbiAgICAgICAgdGhpcy5pbml0RXZlbnRzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsaXZlcnlMYXRMbmcuaGFzT3duUHJvcGVydHkoJ2xhdCcpICYmIHRoaXMuZGVsaXZlcnlMYXRMbmcuaGFzT3duUHJvcGVydHkoJ2xuZycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdERlbGl2ZXJ5TWFya2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHthcnJheX0gaW5wdXRzXHJcbiAgICAgKi9cclxuICAgIGluaXRUZXh0SW5wdXRzKGlucHV0cykge1xyXG4gICAgICAgIHRoaXMudGV4dElucHV0cyA9IHt9O1xyXG4gICAgICAgIHRoaXMucGxhY2VzQXV0b2NvbXBsZXRlID0ge307XHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0SW5wdXRzW25hbWVdID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJfYWRkcmVzc2VzXycrbmFtZSsnQWRkcmVzc19mdWxsQWRkcmVzcycpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlc0F1dG9jb21wbGV0ZVtuYW1lXSA9IHBsYWNlcyh7XHJcbiAgICAgICAgICAgICAgICBhcHBJZDogdGhpcy5hcHBJZCxcclxuICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5hcHBLZXksXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMudGV4dElucHV0c1tuYW1lXSxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdhZGRyZXNzJyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1hcCgpIHtcclxuICAgICAgICB0aGlzLm1hcCA9IEwubWFwKCdtYXAtY29udGFpbmVyJywge1xyXG4gICAgICAgICAgICBzY3JvbGxXaGVlbFpvb206IGZhbHNlLFxyXG4gICAgICAgICAgICB6b29tQ29udHJvbDogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IG5ldyBMLlRpbGVMYXllcihcclxuICAgICAgICAgICAgJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xyXG4gICAgICAgICAgICAgICAgbWluWm9vbTogMSxcclxuICAgICAgICAgICAgICAgIG1heFpvb206IDE3LFxyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb246ICdNYXAgZGF0YSDCqSA8YSBocmVmPVwiaHR0cHM6Ly9vcGVuc3RyZWV0bWFwLm9yZ1wiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEljb24oKSB7XHJcbiAgICAgICAgdGhpcy5pY29uID0gTC5pY29uKHtcclxuICAgICAgICAgICAgaWNvblVybDogdGhpcy5pbWdQYXRoICsgJ3Jlc291cmNlcy9mbG93ZXIucG5nJyxcclxuICAgICAgICAgICAgc2hhZG93VXJsOiB0aGlzLmltZ1BhdGggKyAncmVzb3VyY2VzL2Zsb3dlci1zaGFkb3cucG5nJyxcclxuICAgICAgICAgICAgaWNvblNpemU6IFszOCwgOTVdLCAvLyBzaXplIG9mIHRoZSBpY29uXHJcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IFs1MCwgNjRdLCAvLyBzaXplIG9mIHRoZSBzaGFkb3dcclxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzIyLCA5NF0sIC8vIHBvaW50IG9mIHRoZSBpY29uIHdoaWNoIHdpbGwgY29ycmVzcG9uZCB0byBtYXJrZXIncyBsb2NhdGlvblxyXG4gICAgICAgICAgICBzaGFkb3dBbmNob3I6IFs0LCA2Ml0sICAvLyB0aGUgc2FtZSBmb3IgdGhlIHNoYWRvd1xyXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWy0zLCAtNzZdIC8vIHBvaW50IGZyb20gd2hpY2ggdGhlIHBvcHVwIHNob3VsZCBvcGVuIHJlbGF0aXZlIHRvIHRoZSBpY29uQW5jaG9yXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEV2ZW50cygpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbnB1dE1hcE5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZXNBdXRvY29tcGxldGVbbmFtZV0ub24oJ3N1Z2dlc3Rpb25zJywgKGUpID0+IHsgdGhpcy5oYW5kbGVPblN1Z2dlc3Rpb25zKGUpIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlc0F1dG9jb21wbGV0ZVtuYW1lXS5vbignY3Vyc29yY2hhbmdlZCcsIChlKSA9PiB7IHRoaXMuaGFuZGxlT25DdXJzb3JjaGFuZ2VkKGUpIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlc0F1dG9jb21wbGV0ZVtuYW1lXS5vbignY2hhbmdlJywgKGUpID0+IHsgdGhpcy5oYW5kbGVPbkNoYW5nZShlLCBuYW1lKSB9KTtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZXNBdXRvY29tcGxldGVbbmFtZV0ub24oJ2NsZWFyJywgKCkgPT4geyB0aGlzLmhhbmRsZU9uQ2xlYXIobmFtZSkgfSk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgICAgIGxldCBiaWxsaW5nRmllbGRzZXRFbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlsbGluZy1maWVsZHNldCcpO1xyXG4gICAgICAgIHRoaXMuc2FtZUFkZHJlc3NDaGVja2JveEVsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICAoZSkgPT4ge1xyXG4gICAgICAgICAgICBiaWxsaW5nRmllbGRzZXRFbHQuc3R5bGUuZGlzcGxheSA9IGUudGFyZ2V0LmNoZWNrZWQgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRJbnB1dHMuYmlsbGluZy5yZXF1aXJlZCA9ICFlLnRhcmdldC5jaGVja2VkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJpbGxpbmdGaWVsZHNldEVsdC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5zYW1lQWRkcmVzc0NoZWNrYm94RWx0LmNoZWNrZWQgPyAnbm9uZScgOiAnYmxvY2snO1xyXG4gICAgICAgIHRoaXMudGV4dElucHV0cy5iaWxsaW5nLnJlcXVpcmVkID0gIXRoaXMuc2FtZUFkZHJlc3NDaGVja2JveEVsdC5jaGVja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXREZWxpdmVyeU1hcmtlcigpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IEwubWFya2VyKHRoaXMuZGVsaXZlcnlMYXRMbmcsIHtpY29uOiB0aGlzLmljb259KTtcclxuICAgICAgICBtYXJrZXIuYWRkVG8odGhpcy5tYXApO1xyXG4gICAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgICAgICAgdGhpcy5maW5kQmVzdFpvb20oKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVPblN1Z2dlc3Rpb25zKGUpIHtcclxuICAgICAgICB0aGlzLm1hcmtlcnMuZm9yRWFjaCggKG1hcmtlcikgPT4geyB0aGlzLnJlbW92ZU1hcmtlcihtYXJrZXIpIH0pO1xyXG4gICAgICAgIHRoaXMuYWxlcnRFbHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB0aGlzLm1hcmtlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKGUuc3VnZ2VzdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFwLnNldFZpZXcobmV3IEwuTGF0TG5nKDAsIDApLCAxKTtcclxuICAgICAgICAgICAgdGhpcy5hbGVydEVsdC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZS5zdWdnZXN0aW9ucy5mb3JFYWNoKCAoc3VnZ2VzdGlvbikgPT4geyB0aGlzLmFkZE1hcmtlcihzdWdnZXN0aW9uKSB9KTtcclxuICAgICAgICB0aGlzLmZpbmRCZXN0Wm9vbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9uQ2hhbmdlKGUsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLm1hcmtlcnNcclxuICAgICAgICAgICAgLmZvckVhY2goIChtYXJrZXIsIG1hcmtlckluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFya2VySW5kZXggPT09IGUuc3VnZ2VzdGlvbkluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJzID0gW21hcmtlcl07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyLnNldE9wYWNpdHkoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maW5kQmVzdFpvb20oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkcmVzc2VzW25hbWVdID0gZS5zdWdnZXN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVNYXJrZXIobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlT25DbGVhcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0VmlldyhuZXcgTC5MYXRMbmcoMCwgMCksIDEpO1xyXG4gICAgICAgIHRoaXMubWFya2Vycy5mb3JFYWNoKCAobWFya2VyKSA9PiB7IHRoaXMucmVtb3ZlTWFya2VyKG1hcmtlcikgfSk7XHJcbiAgICAgICAgdGhpcy5hZHJlc3Nlc1tuYW1lXSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZU9uQ3Vyc29yY2hhbmdlZChlKSB7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKCAobWFya2VyLCBtYXJrZXJJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlckluZGV4ID09PSBlLnN1Z2dlc3Rpb25JbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5zZXRPcGFjaXR5KDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5zZXRaSW5kZXhPZmZzZXQoMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXIuc2V0WkluZGV4T2Zmc2V0KDApO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlci5zZXRPcGFjaXR5KDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE1hcmtlcihzdWdnZXN0aW9uKSB7XHJcbiAgICAgICAgbGV0IG1hcmtlciA9IEwubWFya2VyKHN1Z2dlc3Rpb24ubGF0bG5nLCB7b3BhY2l0eTogLjQsIGljb246IHRoaXMuaWNvbn0pO1xyXG4gICAgICAgIG1hcmtlci5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVNYXJrZXIobWFya2VyKSB7XHJcbiAgICAgICAgdGhpcy5tYXAucmVtb3ZlTGF5ZXIobWFya2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kQmVzdFpvb20oKSB7XHJcbiAgICAgICAgbGV0IGZlYXR1cmVHcm91cCA9IEwuZmVhdHVyZUdyb3VwKHRoaXMubWFya2Vycyk7XHJcbiAgICAgICAgdGhpcy5tYXAuZml0Qm91bmRzKGZlYXR1cmVHcm91cC5nZXRCb3VuZHMoKS5wYWQoMC41KSwge2FuaW1hdGU6IHRydWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBwb3B1bGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGZpZWxkcyA9IFsnY291bnRyeUNvZGUnLCAnY2l0eScsICdhZG1pbmlzdHJhdGl2ZScsICdjb3VudHknLCAnY291bnRyeScsICdwb3N0Y29kZScsICduYW1lJywgJ3ZhbHVlJywgJ2xhdCcsICdsbmcnXTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dE1hcE5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5hZHJlc3Nlc1tuYW1lXS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSl7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmFkcmVzc2VzW25hbWVdKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihmaWVsZHMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzLmZpbGxIaWRkZW5JbnB1dChrZXksIG5hbWUsIHRoaXMuYWRyZXNzZXNbbmFtZV1ba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsYXRsbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZHJlc3MuZmlsbEhpZGRlbklucHV0KCdsYXQnLCBuYW1lLCB0aGlzLmFkcmVzc2VzW25hbWVdW2tleV0ubGF0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkcmVzcy5maWxsSGlkZGVuSW5wdXQoJ2xuZycsIG5hbWUsIHRoaXMuYWRyZXNzZXNbbmFtZV1ba2V5XS5sbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJfYWRkcmVzc2VzXycrbmFtZSsnQWRkcmVzc18nK2ZpZWxkKS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZpbGxIaWRkZW5JbnB1dCh0eXBlLCBuYW1lLCB2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICBsZXQgaGlkZGVuSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcl9hZGRyZXNzZXNfJytuYW1lKydBZGRyZXNzXycrdHlwZSk7XHJcbiAgICAgICAgaWYgKGhpZGRlbklucHV0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZGVuSW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQWRkcmVzcyBmcm9tIFwiLi4vLi4vY2xhc3MvX0FkZHJlc3NcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBuZXcgQWRkcmVzcygpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9