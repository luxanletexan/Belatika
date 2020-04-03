(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app_blog_article"],{

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

/***/ "./assets/js/pages/blog/_article.js":
/*!******************************************!*\
  !*** ./assets/js/pages/blog/_article.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../functions/_ajax */ "./assets/js/functions/_ajax.js");
















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


document.addEventListener('DOMContentLoaded', function () {
  var newCommentContent = document.getElementById('new-comment-content');
  newCommentContent.addEventListener('paste', function (e) {
    e.preventDefault();
    var text = (e.originalEvent || e).clipboardData.getData('text/plain');
    text = text.replace(/\r\n/g, '\r').replace(/[\r\n]/g, '<br>');
    document.execCommand('insertHTML', false, text);
  });
  var newCommentValidate = document.getElementById('new-comment-validate');
  newCommentValidate.addEventListener('click', function () {
    var spinner = '<i class="fas fa-spinner"></i>';
    var validateButtonText = newCommentValidate.innerHTML;
    newCommentValidate.innerHTML = spinner;
    newCommentValidate.blur();

    if (newCommentContent.innerText.length === 0) {
      return;
    }

    var content = newCommentContent.innerHTML;
    var url = newCommentValidate.getAttribute('data-target-url');
    Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_15__["default"])(url, function (response) {
      if (response.success) {
        var comment = createComment({
          date: response.date,
          username: response.username,
          content: response.content,
          deleteUrl: response.deleteUrl
        });
        var newComment = document.querySelector('.blog-article__comment--new');
        var nextElementSibling = newComment.nextElementSibling;

        if (nextElementSibling instanceof HTMLElement) {
          nextElementSibling.parentNode.insertBefore(comment, nextElementSibling);
        } else {
          newComment.parentNode.appendChild(comment);
        }

        newCommentContent.innerHTML = '';
      }

      newCommentValidate.innerHTML = validateButtonText;
    }, {
      method: 'POST',
      datas: {
        'content': content
      }
    });
  });
  var deleteButtons = document.querySelectorAll('.blog-comment-delete');

  var _iterator = _createForOfIteratorHelper(deleteButtons),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var deleteButton = _step.value;
      deleteButton.addEventListener('click', deleteComment);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
/**
 *
 * @param {Object} commentDatas
 * @param {string} commentDatas.date
 * @param {string} commentDatas.username
 * @param {string} commentDatas.content
 * @param {string} commentDatas.deleteUrl
 */

function createComment(commentDatas) {
  var comment = document.createElement('div');
  comment.classList.add('blog-article__comment');
  comment.classList.add('blog-article__comment--right');
  var header = document.createElement('div');
  header.classList.add('blog-article__comment__header');
  var date = document.createElement('span');
  date.classList.add('blog-article__comment__header__date');
  date.innerText = commentDatas.date;
  header.appendChild(date);
  var sep = document.createTextNode(' - ');
  header.appendChild(sep);
  var username = document.createElement('span');
  username.classList.add('blog-article__comment__header__username');
  username.innerText = commentDatas.username;
  header.appendChild(username);
  comment.appendChild(header);
  var content = document.createElement('div');
  content.classList.add('blog-article__comment__content');
  var deleteButton = document.createElement('span');
  deleteButton.classList.add('blog-comment-delete');
  deleteButton.setAttribute('data-target-url', commentDatas.deleteUrl);
  var deleteIcon = document.createElement('i');
  deleteIcon.classList.add('far');
  deleteIcon.classList.add('fa-window-close');
  deleteButton.appendChild(deleteIcon);
  deleteButton.addEventListener('click', deleteComment);
  content.innerHTML = ' ' + commentDatas.content;
  content.prepend(deleteButton);
  comment.appendChild(content);
  return comment;
}

function deleteComment() {
  var _this = this;

  if (!confirm('Supprimer?')) {
    return;
  }

  var spinner = '<i class="fas fa-spinner"></i>';
  var deleteButton = this;
  var deleteIcon = deleteButton.innerHTML;
  deleteButton.innerHTML = spinner;
  Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_15__["default"])(deleteButton.dataset.targetUrl, function (response) {
    if (response.success) {
      var message = _this;

      while (!message.classList.contains('blog-article__comment')) {
        message = message.parentNode;
      }

      message.parentNode.removeChild(message);
    }

    deleteButton.innerHTML = deleteIcon;
  }, {
    method: 'DELETE'
  });
}

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

},[["./assets/js/pages/blog/_article.js","runtime","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app_blog_article~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9ibG9nL19hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qcyJdLCJuYW1lcyI6WyJhamF4IiwidXJsIiwiY2FsbGJhY2siLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwibWV0aG9kIiwiZGF0YXMiLCJqc29uIiwiZm9ybURhdGEiLCJwcm9wZXJ0aWVzIiwia2V5cyIsImxlbmd0aCIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsInByb3BlcnR5IiwiYXBwZW5kIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXR1cyIsImNvbnNvbGUiLCJlcnJvciIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwiZSIsInNlbmQiLCJkb2N1bWVudCIsIm5ld0NvbW1lbnRDb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJvcmlnaW5hbEV2ZW50IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJyZXBsYWNlIiwiZXhlY0NvbW1hbmQiLCJuZXdDb21tZW50VmFsaWRhdGUiLCJzcGlubmVyIiwidmFsaWRhdGVCdXR0b25UZXh0IiwiaW5uZXJIVE1MIiwiYmx1ciIsImlubmVyVGV4dCIsImNvbnRlbnQiLCJnZXRBdHRyaWJ1dGUiLCJzdWNjZXNzIiwiY29tbWVudCIsImNyZWF0ZUNvbW1lbnQiLCJkYXRlIiwidXNlcm5hbWUiLCJkZWxldGVVcmwiLCJuZXdDb21tZW50IiwicXVlcnlTZWxlY3RvciIsIm5leHRFbGVtZW50U2libGluZyIsIkhUTUxFbGVtZW50IiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiZGVsZXRlQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJkZWxldGVCdXR0b24iLCJkZWxldGVDb21tZW50IiwiY29tbWVudERhdGFzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImhlYWRlciIsInNlcCIsImNyZWF0ZVRleHROb2RlIiwic2V0QXR0cmlidXRlIiwiZGVsZXRlSWNvbiIsInByZXBlbmQiLCJjb25maXJtIiwiZGF0YXNldCIsInRhcmdldFVybCIsIm1lc3NhZ2UiLCJjb250YWlucyIsInJlbW92ZUNoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQU1BOzs7Ozs7Ozs7QUFTZSxTQUFTQSxJQUFULENBQWNDLEdBQWQsRUFBbUJDLFFBQW5CLEVBQ2Y7QUFBQSxNQUQ0Q0MsT0FDNUMsdUVBRHNELEVBQ3REO0FBQ0k7QUFDQUEsU0FBTyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNwQkMsVUFBTSxFQUFFLEtBRFk7QUFFcEJDLFNBQUssRUFBRSxFQUZhO0FBR3BCQyxRQUFJLEVBQUU7QUFIYyxHQUFkLEVBSVBMLE9BSk8sQ0FBVjtBQU1BLE1BQUlNLFFBQVEsR0FBRyxJQUFmO0FBQ0EsTUFBSUMsVUFBVSxHQUFHTixNQUFNLENBQUNPLElBQVAsQ0FBWVIsT0FBTyxDQUFDSSxLQUFwQixDQUFqQjs7QUFDQSxNQUFJRyxVQUFVLENBQUNFLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkJILFlBQVEsR0FBRyxJQUFJSSxRQUFKLEVBQVg7QUFDQUgsY0FBVSxDQUFDSSxPQUFYLENBQW1CLFVBQUNDLFFBQUQsRUFBYztBQUM3Qk4sY0FBUSxDQUFDTyxNQUFULENBQWdCRCxRQUFoQixFQUEwQlosT0FBTyxDQUFDSSxLQUFSLENBQWNRLFFBQWQsQ0FBMUI7QUFDSCxLQUZEO0FBR0g7O0FBQ0QsTUFBSUUsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBVjtB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QXpCO0FBQ0gsR0FYRCxFQVlBO0FBQ0lsRSxVQUFNLEVBQUU7QUFEWixHQVpBLENBQUo7QUFnQkgsQzs7Ozs7Ozs7Ozs7O0FDekhZO0FBQ2IsV0FBVyxtQkFBTyxDQUFDLHFHQUFvQztBQUN2RCxlQUFlLG1CQUFPLENBQUMsNkVBQXdCO0FBQy9DLG1DQUFtQyxtQkFBTyxDQUFDLDJIQUErQztBQUMxRiw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDM0UsZUFBZSxtQkFBTyxDQUFDLDZFQUF3QjtBQUMvQyxxQkFBcUIsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDM0Qsd0JBQXdCLG1CQUFPLENBQUMsaUdBQWtDOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtQ0FBbUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxVQUFVLGVBQWU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hDQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQywrRUFBeUI7QUFDNUMsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDIiwiZmlsZSI6ImFwcF9ibG9nX2FydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgYSBnbG9iYWwgbWVtYmVyLlxyXG4gKiBAY2FsbGJhY2sgYWpheENhbGxiYWNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fHN0cmluZ30gcmVzcG9uc2VNZXNzYWdlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICogQHBhcmFtIHthamF4Q2FsbGJhY2t9IGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5tZXRob2Q9R0VUXVxyXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGF0YXM9e31dXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuanNvbj10cnVlXVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWpheCh1cmwsIGNhbGxiYWNrLCBvcHRpb25zID0ge30pXHJcbntcclxuICAgIC8vU2V0dGluZ3NcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIGRhdGFzOiB7fSxcclxuICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgbGV0IGZvcm1EYXRhID0gbnVsbDtcclxuICAgIGxldCBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhcyk7XHJcbiAgICBpZiAocHJvcGVydGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChwcm9wZXJ0eSwgb3B0aW9ucy5kYXRhc1twcm9wZXJ0eV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIHVybCk7XHJcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBpZiAoeGhyLnN0YXR1cyA8IDIwMCAmJiB4aHIuc3RhdHVzID49IDQwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFY2hlYyBIVFRQIDogY29kZScueGhyLnN0YXR1cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0geGhyLnJlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5qc29uKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRm9ybWF0IEpTT04gaW52YWxpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgeGhyLnNlbmQoZm9ybURhdGEpO1xyXG59IiwiaW1wb3J0IGFqYXggZnJvbSBcIi4uLy4uL2Z1bmN0aW9ucy9fYWpheFwiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGxldCBuZXdDb21tZW50Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctY29tbWVudC1jb250ZW50Jyk7XHJcbiAgICBuZXdDb21tZW50Q29udGVudC5hZGRFdmVudExpc3RlbmVyKCdwYXN0ZScsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0ZXh0ID0gKGUub3JpZ2luYWxFdmVudCB8fCBlKS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ3RleHQvcGxhaW4nKTtcclxuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKC9cXHJcXG4vZywgJ1xccicpLnJlcGxhY2UoL1tcXHJcXG5dL2csICc8YnI+Jyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydEhUTUwnLCBmYWxzZSwgdGV4dCk7XHJcbiAgICB9KTtcclxuICAgIGxldCBuZXdDb21tZW50VmFsaWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWNvbW1lbnQtdmFsaWRhdGUnKTtcclxuICAgIG5ld0NvbW1lbnRWYWxpZGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBsZXQgc3Bpbm5lciA9ICc8aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyXCI+PC9pPic7XHJcbiAgICAgICAgbGV0IHZhbGlkYXRlQnV0dG9uVGV4dCA9IG5ld0NvbW1lbnRWYWxpZGF0ZS5pbm5lckhUTUw7XHJcbiAgICAgICAgbmV3Q29tbWVudFZhbGlkYXRlLmlubmVySFRNTCA9IHNwaW5uZXI7XHJcbiAgICAgICAgbmV3Q29tbWVudFZhbGlkYXRlLmJsdXIoKTtcclxuICAgICAgICBpZiAobmV3Q29tbWVudENvbnRlbnQuaW5uZXJUZXh0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjb250ZW50ID0gbmV3Q29tbWVudENvbnRlbnQuaW5uZXJIVE1MO1xyXG4gICAgICAgIGxldCB1cmwgPSBuZXdDb21tZW50VmFsaWRhdGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC11cmwnKTtcclxuICAgICAgICBhamF4KFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29tbWVudCA9IGNyZWF0ZUNvbW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiByZXNwb25zZS5kYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogcmVzcG9uc2UudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3BvbnNlLmNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVVybDogcmVzcG9uc2UuZGVsZXRlVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmxvZy1hcnRpY2xlX19jb21tZW50LS1uZXcnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dEVsZW1lbnRTaWJsaW5nID0gbmV3Q29tbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRFbGVtZW50U2libGluZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRFbGVtZW50U2libGluZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb21tZW50LG5leHRFbGVtZW50U2libGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29tbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBuZXdDb21tZW50Q29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5ld0NvbW1lbnRWYWxpZGF0ZS5pbm5lckhUTUwgPSB2YWxpZGF0ZUJ1dHRvblRleHQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnY29udGVudCc6IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuICAgIGxldCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2ctY29tbWVudC1kZWxldGUnKTtcclxuICAgIGZvciAobGV0IGRlbGV0ZUJ1dHRvbiBvZiBkZWxldGVCdXR0b25zKSB7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQ29tbWVudCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb21tZW50RGF0YXNcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnREYXRhcy5kYXRlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50RGF0YXMudXNlcm5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnREYXRhcy5jb250ZW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50RGF0YXMuZGVsZXRlVXJsXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50KGNvbW1lbnREYXRhcykge1xyXG4gICAgbGV0IGNvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvZy1hcnRpY2xlX19jb21tZW50Jyk7XHJcbiAgICBjb21tZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2ctYXJ0aWNsZV9fY29tbWVudC0tcmlnaHQnKTtcclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdibG9nLWFydGljbGVfX2NvbW1lbnRfX2hlYWRlcicpO1xyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2Jsb2ctYXJ0aWNsZV9fY29tbWVudF9faGVhZGVyX19kYXRlJyk7XHJcbiAgICBkYXRlLmlubmVyVGV4dCA9IGNvbW1lbnREYXRhcy5kYXRlO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gICAgbGV0IHNlcCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgLSAnKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzZXApO1xyXG4gICAgbGV0IHVzZXJuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdXNlcm5hbWUuY2xhc3NMaXN0LmFkZCgnYmxvZy1hcnRpY2xlX19jb21tZW50X19oZWFkZXJfX3VzZXJuYW1lJyk7XHJcbiAgICB1c2VybmFtZS5pbm5lclRleHQgPSBjb21tZW50RGF0YXMudXNlcm5hbWU7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xyXG4gICAgY29tbWVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnYmxvZy1hcnRpY2xlX19jb21tZW50X19jb250ZW50Jyk7XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Jsb2ctY29tbWVudC1kZWxldGUnKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LXVybCcsIGNvbW1lbnREYXRhcy5kZWxldGVVcmwpO1xyXG4gICAgbGV0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcicpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS13aW5kb3ctY2xvc2UnKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUNvbW1lbnQpO1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnICcgKyBjb21tZW50RGF0YXMuY29udGVudDtcclxuICAgIGNvbnRlbnQucHJlcGVuZChkZWxldGVCdXR0b24pO1xyXG4gICAgY29tbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIHJldHVybiBjb21tZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVDb21tZW50KCkge1xyXG4gICAgaWYgKCFjb25maXJtKCdTdXBwcmltZXI/JykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgc3Bpbm5lciA9ICc8aSBjbGFzcz1cImZhcyBmYS1zcGlubmVyXCI+PC9pPic7XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gdGhpcztcclxuICAgIGxldCBkZWxldGVJY29uID0gZGVsZXRlQnV0dG9uLmlubmVySFRNTDtcclxuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBzcGlubmVyO1xyXG4gICAgYWpheChcclxuICAgICAgICBkZWxldGVCdXR0b24uZGF0YXNldC50YXJnZXRVcmwsXHJcbiAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZSA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoIW1lc3NhZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdibG9nLWFydGljbGVfX2NvbW1lbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IGRlbGV0ZUljb247XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICB9XHJcbiAgICApO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgY2FsbFdpdGhTYWZlSXRlcmF0aW9uQ2xvc2luZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZycpO1xudmFyIGlzQXJyYXlJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheS1pdGVyYXRvci1tZXRob2QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3IsIG5leHQsIHZhbHVlO1xuICBpZiAobWFwcGluZykgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNMZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgLy8gaWYgdGhlIHRhcmdldCBpcyBub3QgaXRlcmFibGUgb3IgaXQncyBhbiBhcnJheSB3aXRoIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIGEgc2ltcGxlIGNhc2VcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yTWV0aG9kKSkpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yTWV0aG9kLmNhbGwoTyk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgcmVzdWx0ID0gbmV3IEMoKTtcbiAgICBmb3IgKDshKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgcmVzdWx0ID0gbmV3IEMobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZnJvbSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mcm9tJyk7XG52YXIgY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbicpO1xuXG52YXIgSU5DT1JSRUNUX0lURVJBVElPTiA9ICFjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24oZnVuY3Rpb24gKGl0ZXJhYmxlKSB7XG4gIEFycmF5LmZyb20oaXRlcmFibGUpO1xufSk7XG5cbi8vIGBBcnJheS5mcm9tYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIGZyb206IGZyb21cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==