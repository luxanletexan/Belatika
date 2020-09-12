(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_order_index"],{

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

/***/ "./assets/js/pages/order/_index.js":
/*!*****************************************!*\
  !*** ./assets/js/pages/order/_index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/_ajax */ "./assets/js/functions/_ajax.js");



document.addEventListener('DOMContentLoaded', function () {
  //Gestion choix paiement
  var cbRadio = document.getElementById('cb');
  var paypalRadio = document.getElementById('paypal');
  var choices = document.querySelectorAll('.payment-method');
  [cbRadio, paypalRadio].forEach(function (radio) {
    radio.addEventListener('click', function () {
      choices.forEach(function (choice) {
        choice.classList.remove('selected');
      });
      radio.parentNode.parentNode.classList.add('selected');
    });
  }); //Get public key and current locale

  var cardElt = document.getElementById('card-element'); // Create a Stripe client.

  var stripe = Stripe(cardElt.dataset.public_key, {
    locale: cardElt.dataset.locale
  }); // Create an instance of Elements.

  var elements = stripe.elements();
  var errors = []; // Custom styling can be passed to options when creating an Element.

  var style = {
    base: {
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px'
    },
    invalid: {
      color: 'red',
      iconColor: 'red'
    }
  }; // Create an instance of the card Element.

  var card = elements.create('card', {
    style: style
  }); // Add an instance of the card Element into the `card-element` <div>.

  card.mount('#card-element'); // Handle real-time validation errors from the card Element.

  var displayError = document.getElementById('card-errors');
  card.addEventListener('change', function (event) {
    if (event.error) {
      displayError.textContent = event.error.message;
      errors.push(event.error.message);
    } else {
      displayError.textContent = '';
    }
  }); // Handle form submission.

  var form = document.getElementById('payment-form');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    stripe.confirmCardPayment(cardElt.dataset.intent_secret, {
      payment_method: {
        card: card
      }
    }).then(function (response) {
      if (response.error) {
        // Inform the user if there was an error.
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = response.error.message;
        errors.push(response.error.message);
        errors.push('Echec tentative de paiement');
        Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_2__["default"])(cardElt.dataset.error_url, function (response) {
          console.log(response);
        }, {
          datas: {
            errors: JSON.stringify(errors)
          },
          method: 'POST'
        });
      } else if (response.paymentIntent && response.paymentIntent.status === 'succeeded') {
        window.location.href = cardElt.dataset.confirmation_url;
      }
    });
  });

  function stripeTokenHandler(token) {
    var form = document.getElementById('payment-form');
    var hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
    form.submit();
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/object-assign.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-assign.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var assign = __webpack_require__(/*! ../internals/object-assign */ "./node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ })

},[["./assets/js/pages/order/_index.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9vcmRlci9faW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuYXNzaWduLmpzIl0sIm5hbWVzIjpbImFqYXgiLCJ1cmwiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJtZXRob2QiLCJkYXRhcyIsImpzb24iLCJmb3JtRGF0YSIsInByb3BlcnRpZXMiLCJrZXlzIiwibGVuZ3RoIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJhcHBlbmQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdHVzIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJlIiwic2VuZCIsImRvY3VtZW50IiwiY2JSYWRpbyIsImdldEVsZW1lbnRCeUlkIiwicGF5cGFsUmFkaW8iLCJjaG9pY2VzIiwicXVlcnlTZWxlY3RvckFsbCIsInJhZGlvIiwiY2hvaWNlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicGFyZW50Tm9kZSIsImFkZCIsImNhcmRFbHQiLCJzdHJpcGUiLCJTdHJpcGUiLCJkYXRhc2V0IiwicHVibGljX2tleSIsImxvY2FsZSIsImVsZW1lbnRzIiwiZXJyb3JzIiwic3R5bGUiLCJiYXNlIiwiZm9udEZhbWlseSIsImZvbnRTbW9vdGhpbmciLCJmb250U2l6ZSIsImludmFsaWQiLCJjb2xvciIsImljb25Db2xvciIsImNhcmQiLCJjcmVhdGUiLCJtb3VudCIsImRpc3BsYXlFcnJvciIsImV2ZW50IiwidGV4dENvbnRlbnQiLCJtZXNzYWdlIiwicHVzaCIsImZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImNvbmZpcm1DYXJkUGF5bWVudCIsImludGVudF9zZWNyZXQiLCJwYXltZW50X21ldGhvZCIsInRoZW4iLCJlcnJvckVsZW1lbnQiLCJlcnJvcl91cmwiLCJsb2ciLCJzdHJpbmdpZnkiLCJwYXltZW50SW50ZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY29uZmlybWF0aW9uX3VybCIsInN0cmlwZVRva2VuSGFuZGxlciIsInRva2VuIiwiaGlkZGVuSW5wdXQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJhcHBlbmRDaGlsZCIsInN1Ym1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFNQTs7Ozs7Ozs7O0FBU2UsU0FBU0EsSUFBVCxDQUFjQyxHQUFkLEVBQW1CQyxRQUFuQixFQUNmO0FBQUEsTUFENENDLE9BQzVDLHVFQURzRCxFQUN0RDtBQUNJO0FBQ0FBLFNBQU8sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDcEJDLFVBQU0sRUFBRSxLQURZO0FBRXBCQyxTQUFLLEVBQUUsRUFGYTtBQUdwQkMsUUFBSSxFQUFFO0FBSGMsR0FBZCxFQUlQTCxPQUpPLENBQVY7QUFNQSxNQUFJTSxRQUFRLEdBQUcsSUFBZjtBQUNBLE1BQUlDLFVBQVUsR0FBR04sTUFBTSxDQUFDTyxJQUFQLENBQVlSLE9BQU8sQ0FBQ0ksS0FBcEIsQ0FBakI7O0FBQ0EsTUFBSUcsVUFBVSxDQUFDRSxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCSCxZQUFRLEdBQUcsSUFBSUksUUFBSixFQUFYO0FBQ0FILGNBQVUsQ0FBQ0ksT0FBWCxDQUFtQixVQUFDQyxRQUFELEVBQWM7QUFDN0JOLGNBQVEsQ0FBQ08sTUFBVCxDQUFnQkQsUUFBaEIsRUFBMEJaLE9BQU8sQ0FBQ0ksS0FBUixDQUFjUSxRQUFkLENBQTFCO0FBQ0gsS0FGRDtBQUdIOztBQUNELE1BQUlFLEdBQUcsR0FBRyxJQUFJQyxj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O0FBQ25ELGtDQUFrQyxtQkFBTyxDQUFDLHlIQUE4QztBQUN4RixpQ0FBaUMsbUJBQU8sQ0FBQyxxSEFBNEM7QUFDckYsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxvQkFBb0IsbUJBQU8sQ0FBQyx1RkFBNkI7O0FBRXpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTyxnQ0FBZ0M7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUcsSUFBSSxPQUFPO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYyxFQUFFO0FBQzdELHdCQUF3QiwrQ0FBK0M7QUFDdkUsQ0FBQyxxQ0FBcUM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ25ERCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyxxRkFBNEI7O0FBRWpEO0FBQ0E7QUFDQSxHQUFHLGlFQUFpRTtBQUNwRTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwX29yZGVyX2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGEgZ2xvYmFsIG1lbWJlci5cclxuICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IHJlc3BvbnNlTWVzc2FnZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAqIEBwYXJhbSB7YWpheENhbGxiYWNrfSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubWV0aG9kPUdFVF1cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRhdGFzPXt9XVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmpzb249dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXgodXJsLCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9KVxyXG57XHJcbiAgICAvL1NldHRpbmdzXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBkYXRhczoge30sXHJcbiAgICAgICAganNvbjogdHJ1ZSxcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCBmb3JtRGF0YSA9IG51bGw7XHJcbiAgICBsZXQgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YXMpO1xyXG4gICAgaWYgKHByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocHJvcGVydHksIG9wdGlvbnMuZGF0YXNbcHJvcGVydHldKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgJiYgeGhyLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWNoZWMgSFRUUCA6IGNvZGUnLnhoci5zdGF0dXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm1hdCBKU09OIGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxufSIsImltcG9ydCBhamF4IGZyb20gJy4uLy4uL2Z1bmN0aW9ucy9fYWpheCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgLy9HZXN0aW9uIGNob2l4IHBhaWVtZW50XHJcbiAgICBsZXQgY2JSYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYicpO1xyXG4gICAgbGV0IHBheXBhbFJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheXBhbCcpO1xyXG4gICAgbGV0IGNob2ljZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGF5bWVudC1tZXRob2QnKTtcclxuICAgIFtjYlJhZGlvLCBwYXlwYWxSYWRpb10uZm9yRWFjaCgocmFkaW8pID0+IHtcclxuICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgY2hvaWNlcy5mb3JFYWNoKChjaG9pY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNob2ljZS5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmFkaW8ucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvL0dldCBwdWJsaWMga2V5IGFuZCBjdXJyZW50IGxvY2FsZVxyXG4gICAgbGV0IGNhcmRFbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1lbGVtZW50Jyk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgU3RyaXBlIGNsaWVudC5cclxuICAgIGxldCBzdHJpcGUgPSBTdHJpcGUoY2FyZEVsdC5kYXRhc2V0LnB1YmxpY19rZXksIHtsb2NhbGU6IGNhcmRFbHQuZGF0YXNldC5sb2NhbGV9KTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgRWxlbWVudHMuXHJcbiAgICBsZXQgZWxlbWVudHMgPSBzdHJpcGUuZWxlbWVudHMoKTtcclxuICAgIGxldCBlcnJvcnMgPSBbXTtcclxuXHJcbiAgICAvLyBDdXN0b20gc3R5bGluZyBjYW4gYmUgcGFzc2VkIHRvIG9wdGlvbnMgd2hlbiBjcmVhdGluZyBhbiBFbGVtZW50LlxyXG4gICAgbGV0IHN0eWxlID0ge1xyXG4gICAgICAgIGJhc2U6IHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogJ1wiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJyxcclxuICAgICAgICAgICAgZm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcclxuICAgICAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGludmFsaWQ6IHtcclxuICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICBpY29uQ29sb3I6ICdyZWQnXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgLy8gQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBjYXJkIEVsZW1lbnQuXHJcbiAgICBsZXQgY2FyZCA9IGVsZW1lbnRzLmNyZWF0ZSgnY2FyZCcsIHtzdHlsZTogc3R5bGV9KTtcclxuXHJcbiAgICAvLyBBZGQgYW4gaW5zdGFuY2Ugb2YgdGhlIGNhcmQgRWxlbWVudCBpbnRvIHRoZSBgY2FyZC1lbGVtZW50YCA8ZGl2Pi5cclxuICAgIGNhcmQubW91bnQoJyNjYXJkLWVsZW1lbnQnKTtcclxuXHJcbiAgICAvLyBIYW5kbGUgcmVhbC10aW1lIHZhbGlkYXRpb24gZXJyb3JzIGZyb20gdGhlIGNhcmQgRWxlbWVudC5cclxuICAgIGxldCBkaXNwbGF5RXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1lcnJvcnMnKTtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZXJyb3IpIHtcclxuICAgICAgICAgICAgZGlzcGxheUVycm9yLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgZXJyb3JzLnB1c2goZXZlbnQuZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGxheUVycm9yLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvbi5cclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW1lbnQtZm9ybScpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuICAgICAgICBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50KFxyXG4gICAgICAgICAgICBjYXJkRWx0LmRhdGFzZXQuaW50ZW50X3NlY3JldCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGF5bWVudF9tZXRob2Q6IHtjYXJkOiBjYXJkfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gSW5mb3JtIHRoZSB1c2VyIGlmIHRoZXJlIHdhcyBhbiBlcnJvci5cclxuICAgICAgICAgICAgICAgIGxldCBlcnJvckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1lcnJvcnMnKTtcclxuICAgICAgICAgICAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChyZXNwb25zZS5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKCdFY2hlYyB0ZW50YXRpdmUgZGUgcGFpZW1lbnQnKTtcclxuICAgICAgICAgICAgICAgIGFqYXgoXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZEVsdC5kYXRhc2V0LmVycm9yX3VybCxcclxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcyA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogSlNPTi5zdHJpbmdpZnkoZXJyb3JzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnBheW1lbnRJbnRlbnQgJiYgcmVzcG9uc2UucGF5bWVudEludGVudC5zdGF0dXMgPT09ICdzdWNjZWVkZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGNhcmRFbHQuZGF0YXNldC5jb25maXJtYXRpb25fdXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdHJpcGVUb2tlbkhhbmRsZXIodG9rZW4pe1xyXG4gICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BheW1lbnQtZm9ybScpO1xyXG4gICAgICAgIGxldCBoaWRkZW5JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2hpZGRlbicpO1xyXG4gICAgICAgIGhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdzdHJpcGVUb2tlbicpO1xyXG4gICAgICAgIGhpZGRlbklucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0b2tlbi5pZCk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChoaWRkZW5JbnB1dCk7XHJcblxyXG4gICAgICAgIGZvcm0uc3VibWl0KCk7XHJcbiAgICB9XHJcbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG5cbnZhciBuYXRpdmVBc3NpZ24gPSBPYmplY3QuYXNzaWduO1xudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmFzc2lnbmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QuYXNzaWduXG5tb2R1bGUuZXhwb3J0cyA9ICFuYXRpdmVBc3NpZ24gfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBzaG91bGQgaGF2ZSBjb3JyZWN0IG9yZGVyIG9mIG9wZXJhdGlvbnMgKEVkZ2UgYnVnKVxuICBpZiAoREVTQ1JJUFRPUlMgJiYgbmF0aXZlQXNzaWduKHsgYjogMSB9LCBuYXRpdmVBc3NpZ24oZGVmaW5lUHJvcGVydHkoe30sICdhJywge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCAnYicsIHtcbiAgICAgICAgdmFsdWU6IDMsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pLCB7IGI6IDIgfSkpLmIgIT09IDEpIHJldHVybiB0cnVlO1xuICAvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1ZylcbiAgdmFyIEEgPSB7fTtcbiAgdmFyIEIgPSB7fTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBzeW1ib2wgPSBTeW1ib2woKTtcbiAgdmFyIGFscGhhYmV0ID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtzeW1ib2xdID0gNztcbiAgYWxwaGFiZXQuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGNocikgeyBCW2Nocl0gPSBjaHI7IH0pO1xuICByZXR1cm4gbmF0aXZlQXNzaWduKHt9LCBBKVtzeW1ib2xdICE9IDcgfHwgb2JqZWN0S2V5cyhuYXRpdmVBc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBhbHBoYWJldDtcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgPSB0b09iamVjdCh0YXJnZXQpO1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICB2YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mO1xuICB3aGlsZSAoYXJndW1lbnRzTGVuZ3RoID4gaW5kZXgpIHtcbiAgICB2YXIgUyA9IEluZGV4ZWRPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKTtcbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5U3ltYm9scyA/IG9iamVjdEtleXMoUykuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhTKSkgOiBvYmplY3RLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikge1xuICAgICAga2V5ID0ga2V5c1tqKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKFMsIGtleSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9XG4gIH0gcmV0dXJuIFQ7XG59IDogbmF0aXZlQXNzaWduO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1hc3NpZ24nKTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxuJCh7IHRhcmdldDogJ09iamVjdCcsIHN0YXQ6IHRydWUsIGZvcmNlZDogT2JqZWN0LmFzc2lnbiAhPT0gYXNzaWduIH0sIHtcbiAgYXNzaWduOiBhc3NpZ25cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==