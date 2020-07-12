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

/***/ })

},[["./assets/js/pages/order/_index.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9vcmRlci9faW5kZXguanMiXSwibmFtZXMiOlsiYWpheCIsInVybCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIm1ldGhvZCIsImRhdGFzIiwianNvbiIsImZvcm1EYXRhIiwicHJvcGVydGllcyIsImtleXMiLCJsZW5ndGgiLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wZXJ0eSIsImFwcGVuZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0dXMiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsImUiLCJzZW5kIiwiZG9jdW1lbnQiLCJjYlJhZGlvIiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXlwYWxSYWRpbyIsImNob2ljZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmFkaW8iLCJjaG9pY2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwiYWRkIiwiY2FyZEVsdCIsInN0cmlwZSIsIlN0cmlwZSIsImRhdGFzZXQiLCJwdWJsaWNfa2V5IiwibG9jYWxlIiwiZWxlbWVudHMiLCJlcnJvcnMiLCJzdHlsZSIsImJhc2UiLCJmb250RmFtaWx5IiwiZm9udFNtb290aGluZyIsImZvbnRTaXplIiwiaW52YWxpZCIsImNvbG9yIiwiaWNvbkNvbG9yIiwiY2FyZCIsImNyZWF0ZSIsIm1vdW50IiwiZGlzcGxheUVycm9yIiwiZXZlbnQiLCJ0ZXh0Q29udGVudCIsIm1lc3NhZ2UiLCJwdXNoIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwiY29uZmlybUNhcmRQYXltZW50IiwiaW50ZW50X3NlY3JldCIsInBheW1lbnRfbWV0aG9kIiwidGhlbiIsImVycm9yRWxlbWVudCIsImVycm9yX3VybCIsImxvZyIsInN0cmluZ2lmeSIsInBheW1lbnRJbnRlbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjb25maXJtYXRpb25fdXJsIiwic3RyaXBlVG9rZW5IYW5kbGVyIiwidG9rZW4iLCJoaWRkZW5JbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImFwcGVuZENoaWxkIiwic3VibWl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQU1BOzs7Ozs7Ozs7QUFTZSxTQUFTQSxJQUFULENBQWNDLEdBQWQsRUFBbUJDLFFBQW5CLEVBQ2Y7QUFBQSxNQUQ0Q0MsT0FDNUMsdUVBRHNELEVBQ3REO0FBQ0k7QUFDQUEsU0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNwQkMsVUFBTSxFQUFFLEtBRFk7QUFFcEJDLFNBQUssRUFBRSxFQUZhO0FBR3BCQyxRQUFJLEVBQUU7QUFIYyxHQUFkLEVBSVBMLE9BSk8sQ0FBVjtBQU1BLE1BQUlNLFFBQVEsR0FBRyxJQUFmO0FBQ0EsTUFBSUMsVUFBVSxHQUFHTixNQUFNLENBQUNPLElBQVAsQ0FBWVIsT0FBTyxDQUFDSSxLQUFwQixDQUFqQjs7QUFDQSxNQUFJRyxVQUFVLENBQUNFLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJILFlBQVEsR0FBRyxJQUFJSSxRQUFKLEVBQVg7QUFDQUgsY0FBVSxDQUFDSSxPQUFYLENBQW1CLFVBQUNDLFFBQUQsRUFBYztBQUM3Qk4sY0FBUSxDQUFDTyxNQUFULENBQWdCRCxRQUFoQixFQUEwQlosT0FBTyxDQUFDSSxLQUFSLENBQWNRLFFBQWQsQ0FBMUI7QUFDSCxLQUZEO0FBR0g7O0FBQ0QsTUFBSUUsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtBQUNBRCxLQUFHLENBQUNFLElBQUosQ0FBU2hCLE9BQU8sQ0FBQ0csTUFBakIsRUFBeUJMLEdBQXpCO0FBQ0FnQixLQUFHLENBQUNHLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQU07QUFDL0IsUUFBSUgs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QU0sRUFBRXZCLElBQUksQ0FBQ2lELFNBQUwsQ0FBZTFCLE1BQWY7QUFESixXQURaO0FBSUkxQyxnQkFBTSxFQUFFO0FBSlosU0FMQSxDQUFKO0FBWUgsT0FsQkQsTUFrQk8sSUFBSWtCLFFBQVEsQ0FBQ21ELGFBQVQsSUFBMEJuRCxRQUFRLENBQUNtRCxhQUFULENBQXVCdEQsTUFBdkIsS0FBa0MsV0FBaEUsRUFBNkU7QUFDaEZ1RCxjQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCckMsT0FBTyxDQUFDRyxPQUFSLENBQWdCbUMsZ0JBQXZDO0FBQ0g7QUFDSixLQTNCRDtBQTRCSCxHQWhDRDs7QUFrQ0EsV0FBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQWtDO0FBQzlCLFFBQUloQixJQUFJLEdBQUdwQyxRQUFRLENBQUNFLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBWDtBQUNBLFFBQUltRCxXQUFXLEdBQUdyRCxRQUFRLENBQUNzRCxhQUFULENBQXVCLE9BQXZCLENBQWxCO0FBQ0FELGVBQVcsQ0FBQ0UsWUFBWixDQUF5QixNQUF6QixFQUFpQyxRQUFqQztBQUNBRixlQUFXLENBQUNFLFlBQVosQ0FBeUIsTUFBekIsRUFBaUMsYUFBakM7QUFDQUYsZUFBVyxDQUFDRSxZQUFaLENBQXlCLE9BQXpCLEVBQWtDSCxLQUFLLENBQUNJLEVBQXhDO0FBQ0FwQixRQUFJLENBQUNxQixXQUFMLENBQWlCSixXQUFqQjtBQUVBakIsUUFBSSxDQUFDc0IsTUFBTDtBQUNIO0FBQ0osQ0FwR0QsRSIsImZpbGUiOiJhcHBfb3JkZXJfaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgYSBnbG9iYWwgbWVtYmVyLlxyXG4gKiBAY2FsbGJhY2sgYWpheENhbGxiYWNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ30gcmVzcG9uc2VNZXNzYWdlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICogQHBhcmFtIHthamF4Q2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tZXRob2Q9R0VUXVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGF0YXM9e31dXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuanNvbj10cnVlXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWpheCh1cmwsIGNhbGxiYWNrLCBvcHRpb25zID0ge30pXHJcbntcclxuICAgIC8vU2V0dGluZ3NcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGRhdGFzOiB7fSxcclxuICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgbGV0IGZvcm1EYXRhID0gbnVsbDtcclxuICAgIGxldCBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhcyk7XHJcbiAgICBpZiAocHJvcGVydGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChwcm9wZXJ0eSwgb3B0aW9ucy5kYXRhc1twcm9wZXJ0eV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCk7XHJcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDIwMCAmJiB4aHIuc3RhdHVzID49IDQwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFY2hlYyBIVFRQIDogY29kZScueGhyLnN0YXR1cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5qc29uKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybWF0IEpTT04gaW52YWxpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG59IiwiaW1wb3J0IGFqYXggZnJvbSAnLi4vLi4vZnVuY3Rpb25zL19hamF4JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAvL0dlc3Rpb24gY2hvaXggcGFpZW1lbnRcclxuICAgIGxldCBjYlJhZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NiJyk7XHJcbiAgICBsZXQgcGF5cGFsUmFkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5cGFsJyk7XHJcbiAgICBsZXQgY2hvaWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXltZW50LW1ldGhvZCcpO1xyXG4gICAgW2NiUmFkaW8sIHBheXBhbFJhZGlvXS5mb3JFYWNoKChyYWRpbykgPT4ge1xyXG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjaG9pY2VzLmZvckVhY2goKGNob2ljZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hvaWNlLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByYWRpby5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vR2V0IHB1YmxpYyBrZXkgYW5kIGN1cnJlbnQgbG9jYWxlXHJcbiAgICBsZXQgY2FyZEVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLWVsZW1lbnQnKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYSBTdHJpcGUgY2xpZW50LlxyXG4gICAgbGV0IHN0cmlwZSA9IFN0cmlwZShjYXJkRWx0LmRhdGFzZXQucHVibGljX2tleSwge2xvY2FsZTogY2FyZEVsdC5kYXRhc2V0LmxvY2FsZX0pO1xyXG5cclxuICAgIC8vIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBFbGVtZW50cy5cclxuICAgIGxldCBlbGVtZW50cyA9IHN0cmlwZS5lbGVtZW50cygpO1xyXG4gICAgbGV0IGVycm9ycyA9IFtdO1xyXG5cclxuICAgIC8vIEN1c3RvbSBzdHlsaW5nIGNhbiBiZSBwYXNzZWQgdG8gb3B0aW9ucyB3aGVuIGNyZWF0aW5nIGFuIEVsZW1lbnQuXHJcbiAgICBsZXQgc3R5bGUgPSB7XHJcbiAgICAgICAgYmFzZToge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiAnXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxyXG4gICAgICAgICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW52YWxpZDoge1xyXG4gICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgIGljb25Db2xvcjogJ3JlZCdcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIGNhcmQgRWxlbWVudC5cclxuICAgIGxldCBjYXJkID0gZWxlbWVudHMuY3JlYXRlKCdjYXJkJywge3N0eWxlOiBzdHlsZX0pO1xyXG5cclxuICAgIC8vIEFkZCBhbiBpbnN0YW5jZSBvZiB0aGUgY2FyZCBFbGVtZW50IGludG8gdGhlIGBjYXJkLWVsZW1lbnRgIDxkaXY+LlxyXG4gICAgY2FyZC5tb3VudCgnI2NhcmQtZWxlbWVudCcpO1xyXG5cclxuICAgIC8vIEhhbmRsZSByZWFsLXRpbWUgdmFsaWRhdGlvbiBlcnJvcnMgZnJvbSB0aGUgY2FyZCBFbGVtZW50LlxyXG4gICAgbGV0IGRpc3BsYXlFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLWVycm9ycycpO1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5lcnJvcikge1xyXG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IudGV4dENvbnRlbnQgPSBldmVudC5lcnJvci5tZXNzYWdlO1xyXG4gICAgICAgICAgICBlcnJvcnMucHVzaChldmVudC5lcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5RXJyb3IudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uLlxyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudC1mb3JtJyk7XHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblxyXG4gICAgICAgIHN0cmlwZS5jb25maXJtQ2FyZFBheW1lbnQoXHJcbiAgICAgICAgICAgIGNhcmRFbHQuZGF0YXNldC5pbnRlbnRfc2VjcmV0LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXltZW50X21ldGhvZDoge2NhcmQ6IGNhcmR9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJbmZvcm0gdGhlIHVzZXIgaWYgdGhlcmUgd2FzIGFuIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgbGV0IGVycm9yRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLWVycm9ycycpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gcmVzcG9uc2UuZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JzLnB1c2goJ0VjaGVjIHRlbnRhdGl2ZSBkZSBwYWllbWVudCcpO1xyXG4gICAgICAgICAgICAgICAgYWpheChcclxuICAgICAgICAgICAgICAgICAgICBjYXJkRWx0LmRhdGFzZXQuZXJyb3JfdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOiBKU09OLnN0cmluZ2lmeShlcnJvcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UucGF5bWVudEludGVudCAmJiByZXNwb25zZS5wYXltZW50SW50ZW50LnN0YXR1cyA9PT0gJ3N1Y2NlZWRlZCcpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY2FyZEVsdC5kYXRhc2V0LmNvbmZpcm1hdGlvbl91cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0cmlwZVRva2VuSGFuZGxlcih0b2tlbil7XHJcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGF5bWVudC1mb3JtJyk7XHJcbiAgICAgICAgbGV0IGhpZGRlbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBoaWRkZW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3N0cmlwZVRva2VuJyk7XHJcbiAgICAgICAgaGlkZGVuSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRva2VuLmlkKTtcclxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGhpZGRlbklucHV0KTtcclxuXHJcbiAgICAgICAgZm9ybS5zdWJtaXQoKTtcclxuICAgIH1cclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==