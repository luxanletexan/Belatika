(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_user_profile"],{

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

/***/ "./assets/js/pages/user/_profile.js":
/*!******************************************!*\
  !*** ./assets/js/pages/user/_profile.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions/_ajax */ "./assets/js/functions/_ajax.js");

document.addEventListener('DOMContentLoaded', function () {
  var newsletterElt = document.getElementById('toggle-newsletter');
  newsletterElt.addEventListener('click', function () {
    newsletterElt.setAttribute('disabled', 'true');
    var url = newsletterElt.dataset.url;
    Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_0__["default"])(url, function (response) {
      newsletterElt.removeAttribute('disabled');
      newsletterElt.checked = response.newsletter;
    }, {
      method: 'POST'
    });
  });
});

/***/ })

},[["./assets/js/pages/user/_profile.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy91c2VyL19wcm9maWxlLmpzIl0sIm5hbWVzIjpbImFqYXgiLCJ1cmwiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJtZXRob2QiLCJkYXRhcyIsImpzb24iLCJmb3JtRGF0YSIsInByb3BlcnRpZXMiLCJrZXlzIiwibGVuZ3RoIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJhcHBlbmQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdHVzIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJlIiwic2VuZCIsImRvY3VtZW50IiwibmV3c2xldHRlckVsdCIsImdldEVsZW1lbnRCeUlkIiwic2V0QXR0cmlidXRlIiwiZGF0YXNldCIsInJlbW92ZUF0dHJpYnV0ZSIsImNoZWNrZWQiLCJuZXdzbGV0dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQU1BOzs7Ozs7Ozs7QUFTZSxTQUFTQSxJQUFULENBQWNDLEdBQWQsRUFBbUJDLFFBQW5CLEVBQ2Y7QUFBQSxNQUQ0Q0MsT0FDNUMsdUVBRHNELEVBQ3REO0FBQ0k7QUFDQUEsU0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNwQkMsVUFBTSxFQUFFLEtBRFk7QUFFcEJDLFNBQUssRUFBRSxFQUZhO0FBR3BCQyxRQUFJLEVBQUU7QUFIYyxHQUFkLEVBSVBMLE9BSk8sQ0FBVjtBQU1BLE1BQUlNLFFBQVEsR0FBRyxJQUFmO0FBQ0EsTUFBSUMsVUFBVSxHQUFHTixNQUFNLENBQUNPLElBQVAsQ0FBWVIsT0FBTyxDQUFDSSxLQUFwQixDQUFqQjs7QUFDQSxNQUFJRyxVQUFVLENBQUNFLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJILFlBQVEsR0FBRyxJQUFJSSxRQUFKLEVBQVg7QUFDQUgsY0FBVSxDQUFDSSxPQUFYLENBQW1CLFVBQUNDLFFBQUQsRUFBYztBQUM3Qk4sY0FBUSxDQUFDTyxNQUFULENBQWdCRCxRQUFoQixFQUEwQlosT0FBTyxDQUFDSSxLQUFSLENBQWNRLFFBQWQsQ0FBMUI7QUFDSCxLQUZEO0FBR0g7O0FBQ0QsTUFBSUUsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtBQUNBRCxLQUFHLENBQUNFLElBQUosQ0FBU2hCLE9BQU8sQ0FBQ0csTUFBakIsRUFBeUJMLEdBQXpCO0FBQ0FnQixLQUFHLENBQUNHLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQU07QUFDL0IsUUFBSUgsR0FBRyxDQUFDSSxNQUFKLEdBQWEsR0FBYixJQUFvQkosR0FBRyxDQUFDSSxNQUFKLElBQWMsR0FBdEMsRUFBMkM7QUFDdkNDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjLG9CQUFvQk4sR0FBcEIsQ0FBd0JJLE1BQXRDO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsVUFBSUcsUUFBUSxHQUFHUCxHQUFHLENBQUNPLFFBQW5COztBQUNBLFVBQUlyQixPQUFPLENBQUNLLElBQVosRUFBa0I7QUFDZCxZQUFJO0FBQ0FnQixrQkFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsUUFBWCxDQUFYO0FBQ0gsU0FGRCxDQUVFLE9BQU9HLENBQVAsRUFBVTtBQUNSTCxpQkFBTyxDQUFDQyxLQUFSLENBQWMsc0JBQWQ7QUFDQSxpQkFBTyxLQUFQO0FBQ0g7QUFDSjs7QUFDRHJCLGNBQVEsQ0FBQ3NCLFFBQUQsQ0FBUjtBQUNIO0FBQ0osR0FmRDtBQWdCQVAsS0FBRyxDQUFDVyxJQUFKLENBQVNuQixRQUFUO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDbkREO0FBQUE7QUFBQTtBQUVBb0IsUUFBUSxDQUFDVCxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCxNQUFNVSxhQUFhLEdBQUdELFFBQVEsQ0FBQ0UsY0FBVCxDQUF3QixtQkFBeEIsQ0FBdEI7QUFDQUQsZUFBYSxDQUFDVixnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzFDVSxpQkFBYSxDQUFDRSxZQUFkLENBQTJCLFVBQTNCLEVBQXVDLE1BQXZDO0FBQ0EsUUFBSS9CLEdBQUcsR0FBRzZCLGFBQWEsQ0FBQ0csT0FBZCxDQUFzQmhDLEdBQWhDO0FBQ0FELG1FQUFJLENBQ0FDLEdBREEsRUFFQSxVQUFDdUIsUUFBRCxFQUFjO0FBQ1ZNLG1CQUFhLENBQUNJLGVBQWQsQ0FBOEIsVUFBOUI7QUFDQUosbUJBQWEsQ0FBQ0ssT0FBZCxHQUF3QlgsUUFBUSxDQUFDWSxVQUFqQztBQUNILEtBTEQsRUFNQTtBQUNJOUIsWUFBTSxFQUFFO0FBRFosS0FOQSxDQUFKO0FBVUgsR0FiRDtBQWNILENBaEJELEUiLCJmaWxlIjoiYXBwX3VzZXJfcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBhIGdsb2JhbCBtZW1iZXIuXHJcbiAqIEBjYWxsYmFjayBhamF4Q2FsbGJhY2tcclxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSByZXNwb25zZU1lc3NhZ2VcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gKiBAcGFyYW0ge2FqYXhDYWxsYmFja30gY2FsbGJhY2tcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm1ldGhvZD1HRVRdXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kYXRhcz17fV1cclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5qc29uPXRydWVdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamF4KHVybCwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSlcclxue1xyXG4gICAgLy9TZXR0aW5nc1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgZGF0YXM6IHt9LFxyXG4gICAgICAgIGpzb246IHRydWUsXHJcbiAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgZm9ybURhdGEgPSBudWxsO1xyXG4gICAgbGV0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGFzKTtcclxuICAgIGlmIChwcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHByb3BlcnR5LCBvcHRpb25zLmRhdGFzW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsKTtcclxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh4aHIuc3RhdHVzIDwgMjAwICYmIHhoci5zdGF0dXMgPj0gNDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VjaGVjIEhUVFAgOiBjb2RlJy54aHIuc3RhdHVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtYXQgSlNPTiBpbnZhbGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbn0iLCJpbXBvcnQgYWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL19hamF4XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3c2xldHRlckVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtbmV3c2xldHRlcicpO1xyXG4gICAgbmV3c2xldHRlckVsdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBuZXdzbGV0dGVyRWx0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgIGxldCB1cmwgPSBuZXdzbGV0dGVyRWx0LmRhdGFzZXQudXJsO1xyXG4gICAgICAgIGFqYXgoXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXdzbGV0dGVyRWx0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgIG5ld3NsZXR0ZXJFbHQuY2hlY2tlZCA9IHJlc3BvbnNlLm5ld3NsZXR0ZXI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=