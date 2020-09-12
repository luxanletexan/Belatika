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

},[["./assets/js/pages/blog/_article.js","runtime","vendors~app~app_blog_article~app_order_index~app_shop_index~app_user_address~app_user_profile","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app_blog_article~app_shop_index~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9ibG9nL19hcnRpY2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mcm9tLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5hc3NpZ24uanMiXSwibmFtZXMiOlsiYWpheCIsInVybCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsIm1ldGhvZCIsImRhdGFzIiwianNvbiIsImZvcm1EYXRhIiwicHJvcGVydGllcyIsImtleXMiLCJsZW5ndGgiLCJGb3JtRGF0YSIsImZvckVhY2giLCJwcm9wZXJ0eSIsImFwcGVuZCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0dXMiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsImUiLCJzZW5kIiwiZG9jdW1lbnQiLCJuZXdDb21tZW50Q29udGVudCIsImdldEVsZW1lbnRCeUlkIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0Iiwib3JpZ2luYWxFdmVudCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwicmVwbGFjZSIsImV4ZWNDb21tYW5kIiwibmV3Q29tbWVudFZhbGlkYXRlIiwic3Bpbm5lciIsInZhbGlkYXRlQnV0dG9uVGV4dCIsImlubmVySFRNTCIsImJsdXIiLCJpbm5lclRleHQiLCJjb250ZW50IiwiZ2V0QXR0cmlidXRlIiwic3VjY2VzcyIsImNvbW1lbnQiLCJjcmVhdGVDb21tZW50IiwiZGF0ZSIsInVzZXJuYW1lIiwiZGVsZXRlVXJsIiwibmV3Q29tbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJIVE1MRWxlbWVudCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJhcHBlbmRDaGlsZCIsImRlbGV0ZUJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGVsZXRlQnV0dG9uIiwiZGVsZXRlQ29tbWVudCIsImNvbW1lbnREYXRhcyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJoZWFkZXIiLCJzZXAiLCJjcmVhdGVUZXh0Tm9kZSIsInNldEF0dHJpYnV0ZSIsImRlbGV0ZUljb24iLCJwcmVwZW5kIiwiY29uZmlybSIsImRhdGFzZXQiLCJ0YXJnZXRVcmwiLCJtZXNzYWdlIiwiY29udGFpbnMiLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFNQTs7Ozs7Ozs7O0FBU2UsU0FBU0EsSUFBVCxDQUFjQyxHQUFkLEVBQW1CQyxRQUFuQixFQUNmO0FBQUEsTUFENENDLE9BQzVDLHVFQURzRCxFQUN0RDtBQUNJO0FBQ0FBLFNBQU8sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDcEJDLFVBQU0sRUFBRSxLQURZO0FBRXBCQyxTQUFLLEVBQUUsRUFGYTtBQUdwQkMsUUFBSSxFQUFFO0FBSGMsR0FBZCxFQUlQTCxPQUpPLENBQVY7QUFNQSxNQUFJTSxRQUFRLEdBQUcsSUFBZjtBQUNBLE1BQUlDLFVBQVUsR0FBR04sTUFBTSxDQUFDTyxJQUFQLENBQVlSLE9BQU8sQ0FBQ0ksS0FBcEIsQ0FBakI7O0FBQ0EsTUFBSUcsVUFBVSxDQUFDRSxNQUFYLEdBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCSCxZQUFRLEdBQUcsSUFBSUksUUFBSixFQUFYO0FBQ0FILGNBQVUsQ0FBQ0ksT0FBWCxDQUFtQixVQUFDQyxRQUFELEVBQWM7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUcsSUFBSSxPQUFPO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsY0FBYyxFQUFFO0FBQzdELHdCQUF3QiwrQ0FBK0M7QUFDdkUsQ0FBQyxxQ0FBcUM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ25ERCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQywrRUFBeUI7QUFDNUMsa0NBQWtDLG1CQUFPLENBQUMsdUhBQTZDOztBQUV2RjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsR0FBRywyREFBMkQ7QUFDOUQ7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNaRCxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLGFBQWEsbUJBQU8sQ0FBQyxxRkFBNEI7O0FBRWpEO0FBQ0E7QUFDQSxHQUFHLGlFQUFpRTtBQUNwRTtBQUNBLENBQUMiLCJmaWxlIjoiYXBwX2Jsb2dfYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBhIGdsb2JhbCBtZW1iZXIuXHJcbiAqIEBjYWxsYmFjayBhamF4Q2FsbGJhY2tcclxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSByZXNwb25zZU1lc3NhZ2VcclxuICovXHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxyXG4gKiBAcGFyYW0ge2FqYXhDYWxsYmFja30gY2FsbGJhY2tcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm1ldGhvZD1HRVRdXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kYXRhcz17fV1cclxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5qc29uPXRydWVdXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamF4KHVybCwgY2FsbGJhY2ssIG9wdGlvbnMgPSB7fSlcclxue1xyXG4gICAgLy9TZXR0aW5nc1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgZGF0YXM6IHt9LFxyXG4gICAgICAgIGpzb246IHRydWUsXHJcbiAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgZm9ybURhdGEgPSBudWxsO1xyXG4gICAgbGV0IHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGFzKTtcclxuICAgIGlmIChwcm9wZXJ0aWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHByb3BlcnR5LCBvcHRpb25zLmRhdGFzW3Byb3BlcnR5XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgdXJsKTtcclxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIGlmICh4aHIuc3RhdHVzIDwgMjAwICYmIHhoci5zdGF0dXMgPj0gNDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VjaGVjIEhUVFAgOiBjb2RlJy54aHIuc3RhdHVzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmpzb24pIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGb3JtYXQgSlNPTiBpbnZhbGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XHJcbn0iLCJpbXBvcnQgYWpheCBmcm9tIFwiLi4vLi4vZnVuY3Rpb25zL19hamF4XCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgbGV0IG5ld0NvbW1lbnRDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1jb21tZW50LWNvbnRlbnQnKTtcclxuICAgIG5ld0NvbW1lbnRDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHRleHQgPSAoZS5vcmlnaW5hbEV2ZW50IHx8IGUpLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xyXG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcclxcbi9nLCAnXFxyJykucmVwbGFjZSgvW1xcclxcbl0vZywgJzxicj4nKTtcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0SFRNTCcsIGZhbHNlLCB0ZXh0KTtcclxuICAgIH0pO1xyXG4gICAgbGV0IG5ld0NvbW1lbnRWYWxpZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctY29tbWVudC12YWxpZGF0ZScpO1xyXG4gICAgbmV3Q29tbWVudFZhbGlkYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzcGlubmVyID0gJzxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXJcIj48L2k+JztcclxuICAgICAgICBsZXQgdmFsaWRhdGVCdXR0b25UZXh0ID0gbmV3Q29tbWVudFZhbGlkYXRlLmlubmVySFRNTDtcclxuICAgICAgICBuZXdDb21tZW50VmFsaWRhdGUuaW5uZXJIVE1MID0gc3Bpbm5lcjtcclxuICAgICAgICBuZXdDb21tZW50VmFsaWRhdGUuYmx1cigpO1xyXG4gICAgICAgIGlmIChuZXdDb21tZW50Q29udGVudC5pbm5lclRleHQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBuZXdDb21tZW50Q29udGVudC5pbm5lckhUTUw7XHJcbiAgICAgICAgbGV0IHVybCA9IG5ld0NvbW1lbnRWYWxpZGF0ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LXVybCcpO1xyXG4gICAgICAgIGFqYXgoXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21tZW50ID0gY3JlYXRlQ29tbWVudCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHJlc3BvbnNlLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiByZXNwb25zZS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlVXJsOiByZXNwb25zZS5kZWxldGVVcmxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nLWFydGljbGVfX2NvbW1lbnQtLW5ldycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0RWxlbWVudFNpYmxpbmcgPSBuZXdDb21tZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEVsZW1lbnRTaWJsaW5nIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVsZW1lbnRTaWJsaW5nLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbW1lbnQsbmV4dEVsZW1lbnRTaWJsaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb21tZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5ld0NvbW1lbnRDb250ZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3Q29tbWVudFZhbGlkYXRlLmlubmVySFRNTCA9IHZhbGlkYXRlQnV0dG9uVGV4dDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50JzogY29udGVudFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZy1jb21tZW50LWRlbGV0ZScpO1xyXG4gICAgZm9yIChsZXQgZGVsZXRlQnV0dG9uIG9mIGRlbGV0ZUJ1dHRvbnMpIHtcclxuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVDb21tZW50KTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbW1lbnREYXRhc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudERhdGFzLmRhdGVcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnREYXRhcy51c2VybmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudERhdGFzLmNvbnRlbnRcclxuICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnREYXRhcy5kZWxldGVVcmxcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbW1lbnQoY29tbWVudERhdGFzKSB7XHJcbiAgICBsZXQgY29tbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29tbWVudC5jbGFzc0xpc3QuYWRkKCdibG9nLWFydGljbGVfX2NvbW1lbnQnKTtcclxuICAgIGNvbW1lbnQuY2xhc3NMaXN0LmFkZCgnYmxvZy1hcnRpY2xlX19jb21tZW50LS1yaWdodCcpO1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Jsb2ctYXJ0aWNsZV9fY29tbWVudF9faGVhZGVyJyk7XHJcbiAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnYmxvZy1hcnRpY2xlX19jb21tZW50X19oZWFkZXJfX2RhdGUnKTtcclxuICAgIGRhdGUuaW5uZXJUZXh0ID0gY29tbWVudERhdGFzLmRhdGU7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgICBsZXQgc2VwID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAtICcpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHNlcCk7XHJcbiAgICBsZXQgdXNlcm5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB1c2VybmFtZS5jbGFzc0xpc3QuYWRkKCdibG9nLWFydGljbGVfX2NvbW1lbnRfX2hlYWRlcl9fdXNlcm5hbWUnKTtcclxuICAgIHVzZXJuYW1lLmlubmVyVGV4dCA9IGNvbW1lbnREYXRhcy51c2VybmFtZTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh1c2VybmFtZSk7XHJcbiAgICBjb21tZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdibG9nLWFydGljbGVfX2NvbW1lbnRfX2NvbnRlbnQnKTtcclxuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYmxvZy1jb21tZW50LWRlbGV0ZScpO1xyXG4gICAgZGVsZXRlQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQtdXJsJywgY29tbWVudERhdGFzLmRlbGV0ZVVybCk7XHJcbiAgICBsZXQgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZmFyJyk7XHJcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXdpbmRvdy1jbG9zZScpO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xyXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlQ29tbWVudCk7XHJcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcgJyArIGNvbW1lbnREYXRhcy5jb250ZW50O1xyXG4gICAgY29udGVudC5wcmVwZW5kKGRlbGV0ZUJ1dHRvbik7XHJcbiAgICBjb21tZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgcmV0dXJuIGNvbW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUNvbW1lbnQoKSB7XHJcbiAgICBpZiAoIWNvbmZpcm0oJ1N1cHByaW1lcj8nKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBzcGlubmVyID0gJzxpIGNsYXNzPVwiZmFzIGZhLXNwaW5uZXJcIj48L2k+JztcclxuICAgIGxldCBkZWxldGVCdXR0b24gPSB0aGlzO1xyXG4gICAgbGV0IGRlbGV0ZUljb24gPSBkZWxldGVCdXR0b24uaW5uZXJIVE1MO1xyXG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IHNwaW5uZXI7XHJcbiAgICBhamF4KFxyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5kYXRhc2V0LnRhcmdldFVybCxcclxuICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHdoaWxlICghbWVzc2FnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Jsb2ctYXJ0aWNsZV9fY29tbWVudCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2UucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gZGVsZXRlSWNvbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcbn0iLCIndXNlIHN0cmljdCc7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NhbGwtd2l0aC1zYWZlLWl0ZXJhdGlvbi1jbG9zaW5nJyk7XG52YXIgaXNBcnJheUl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eScpO1xudmFyIGdldEl0ZXJhdG9yTWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QnKTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkuZnJvbVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICB2YXIgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIG1hcGZuID0gYXJndW1lbnRzTGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgdmFyIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkO1xuICB2YXIgaXRlcmF0b3JNZXRob2QgPSBnZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvciwgbmV4dCwgdmFsdWU7XG4gIGlmIChtYXBwaW5nKSBtYXBmbiA9IGJpbmQobWFwZm4sIGFyZ3VtZW50c0xlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAvLyBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBpdGVyYWJsZSBvciBpdCdzIGFuIGFycmF5IHdpdGggdGhlIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2UgYSBzaW1wbGUgY2FzZVxuICBpZiAoaXRlcmF0b3JNZXRob2QgIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlcmF0b3JNZXRob2QpKSkge1xuICAgIGl0ZXJhdG9yID0gaXRlcmF0b3JNZXRob2QuY2FsbChPKTtcbiAgICBuZXh0ID0gaXRlcmF0b3IubmV4dDtcbiAgICByZXN1bHQgPSBuZXcgQygpO1xuICAgIGZvciAoOyEoc3RlcCA9IG5leHQuY2FsbChpdGVyYXRvcikpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgIHZhbHVlID0gbWFwcGluZyA/IGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICByZXN1bHQgPSBuZXcgQyhsZW5ndGgpO1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xuXG52YXIgbmF0aXZlQXNzaWduID0gT2JqZWN0LmFzc2lnbjtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuLy8gYE9iamVjdC5hc3NpZ25gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb2JqZWN0LmFzc2lnblxubW9kdWxlLmV4cG9ydHMgPSAhbmF0aXZlQXNzaWduIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gc2hvdWxkIGhhdmUgY29ycmVjdCBvcmRlciBvZiBvcGVyYXRpb25zIChFZGdlIGJ1ZylcbiAgaWYgKERFU0NSSVBUT1JTICYmIG5hdGl2ZUFzc2lnbih7IGI6IDEgfSwgbmF0aXZlQXNzaWduKGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGhpcywgJ2InLCB7XG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9KSwgeyBiOiAyIH0pKS5iICE9PSAxKSByZXR1cm4gdHJ1ZTtcbiAgLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgc3ltYm9sID0gU3ltYm9sKCk7XG4gIHZhciBhbHBoYWJldCA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbc3ltYm9sXSA9IDc7XG4gIGFscGhhYmV0LnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChjaHIpIHsgQltjaHJdID0gY2hyOyB9KTtcbiAgcmV0dXJuIG5hdGl2ZUFzc2lnbih7fSwgQSlbc3ltYm9sXSAhPSA3IHx8IG9iamVjdEtleXMobmF0aXZlQXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gYWxwaGFiZXQ7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDE7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgdmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZjtcbiAgd2hpbGUgKGFyZ3VtZW50c0xlbmd0aCA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJbmRleGVkT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBvYmplY3RLZXlzKFMpLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoUykpIDogb2JqZWN0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIHtcbiAgICAgIGtleSA9IGtleXNbaisrXTtcbiAgICAgIGlmICghREVTQ1JJUFRPUlMgfHwgcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChTLCBrZXkpKSBUW2tleV0gPSBTW2tleV07XG4gICAgfVxuICB9IHJldHVybiBUO1xufSA6IG5hdGl2ZUFzc2lnbjtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZnJvbScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICBBcnJheS5mcm9tKGl0ZXJhYmxlKTtcbn0pO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtYXNzaWduJyk7XG5cbi8vIGBPYmplY3QuYXNzaWduYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC5hc3NpZ25cbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IE9iamVjdC5hc3NpZ24gIT09IGFzc2lnbiB9LCB7XG4gIGFzc2lnbjogYXNzaWduXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=