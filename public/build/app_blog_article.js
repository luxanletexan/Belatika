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
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _functions_ajax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../functions/_ajax */ "./assets/js/functions/_ajax.js");










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
    Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_9__["default"])(url, function (response) {
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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = deleteButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var deleteButton = _step.value;
      deleteButton.addEventListener('click', deleteComment);
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
  Object(_functions_ajax__WEBPACK_IMPORTED_MODULE_9__["default"])(deleteButton.dataset.targetUrl, function (response) {
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

/***/ })

},[["./assets/js/pages/blog/_article.js","runtime","vendors~app~app_blog_article~app_shop_index~app_user_address","vendors~app_blog_article~app_user_address"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZnVuY3Rpb25zL19hamF4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYWdlcy9ibG9nL19hcnRpY2xlLmpzIl0sIm5hbWVzIjpbImFqYXgiLCJ1cmwiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJtZXRob2QiLCJkYXRhcyIsImpzb24iLCJmb3JtRGF0YSIsInByb3BlcnRpZXMiLCJrZXlzIiwibGVuZ3RoIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwicHJvcGVydHkiLCJhcHBlbmQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwic3RhdHVzIiwiY29uc29sZSIsImVycm9yIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJlIiwic2VuZCIsImRvY3VtZW50IiwibmV3Q29tbWVudENvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsIm9yaWdpbmFsRXZlbnQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsInJlcGxhY2UiLCJleGVjQ29tbWFuZCIsIm5ld0NvbW1lbnRWYWxpZGF0ZSIsInNwaW5uZXIiLCJ2YWxpZGF0ZUJ1dHRvblRleHQiLCJpbm5lckhUTUwiLCJibHVyIiwiaW5uZXJUZXh0IiwiY29udGVudCIsImdldEF0dHJpYnV0ZSIsInN1Y2Nlc3MiLCJjb21tZW50IiwiY3JlYXRlQ29tbWVudCIsImRhdGUiLCJ1c2VybmFtZSIsImRlbGV0ZVVybCIsIm5ld0NvbW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiSFRNTEVsZW1lbnQiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJkZWxldGVCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImRlbGV0ZUJ1dHRvbiIsImRlbGV0ZUNvbW1lbnQiLCJjb21tZW50RGF0YXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGVhZGVyIiwic2VwIiwiY3JlYXRlVGV4dE5vZGUiLCJzZXRBdHRyaWJ1dGUiLCJkZWxldGVJY29uIiwicHJlcGVuZCIsImNvbmZpcm0iLCJkYXRhc2V0IiwidGFyZ2V0VXJsIiwibWVzc2FnZSIsImNvbnRhaW5zIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBTUE7Ozs7Ozs7OztBQVNlLFNBQVNBLElBQVQsQ0FBY0MsR0FBZCxFQUFtQkMsUUFBbkIsRUFDZjtBQUFBLE1BRDRDQyxPQUM1Qyx1RUFEc0QsRUFDdEQ7QUFDSTtBQUNBQSxTQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjO0FBQ3BCQyxVQUFNLEVBQUUsS0FEWTtBQUVwQkMsU0FBSyxFQUFFLEVBRmE7QUFHcEJDLFFBQUksRUFBRTtBQUhjLEdBQWQsRUFJUEwsT0FKTyxDQUFWO0FBTUEsTUFBSU0sUUFBUSxHQUFHLElBQWY7QUFDQSxNQUFJQyxVQUFVLEdBQUdOLE1BQU0sQ0FBQ08sSUFBUCxDQUFZUixPQUFPLENBQUNJLEtBQXBCLENBQWpCOztBQUNBLE1BQUlHLFVBQVUsQ0FBQ0UsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN2QkgsWUFBUSxHQUFHLElBQUlJLFFBQUosRUFBWDtBQUNBSCxjQUFVLENBQUNJLE9BQVgsQ0FBbUIsVUFBQ0MsUUFBRCxFQUFjO0FBQzdCTixjQUFRLENBQUNPLE1BQVQsQ0FBZ0JELFFBQWhCLEVBQTBCWixPQUFPLENBQUNJLEtBQVIsQ0FBY1EsUUFBZCxDQUExQjtBQUNILEtBRkQ7QUFHSDs7QUFDRCxNQUFJRSxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWO0FBQ0FELEtBQUcsQ0FBQ0UsSUFBSixDQUFTaEIsT0FBTyxDQUFDRyxNQUFqQixFQUF5QkwsR0FBekI7QUFDQWdCLEtBQUcsQ0FBQ0csZ0JBQUosQ0FBcUIsTUFBckIsRUFBNkIsWUFBTTtBQUMvQixRQUFJSCxHQUFH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bnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGEgZ2xvYmFsIG1lbWJlci5cclxuICogQGNhbGxiYWNrIGFqYXhDYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdHxzdHJpbmd9IHJlc3BvbnNlTWVzc2FnZVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXHJcbiAqIEBwYXJhbSB7YWpheENhbGxiYWNrfSBjYWxsYmFja1xyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubWV0aG9kPUdFVF1cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRhdGFzPXt9XVxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmpzb249dHJ1ZV1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXgodXJsLCBjYWxsYmFjaywgb3B0aW9ucyA9IHt9KVxyXG57XHJcbiAgICAvL1NldHRpbmdzXHJcbiAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICBkYXRhczoge30sXHJcbiAgICAgICAganNvbjogdHJ1ZSxcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCBmb3JtRGF0YSA9IG51bGw7XHJcbiAgICBsZXQgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YXMpO1xyXG4gICAgaWYgKHByb3BlcnRpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocHJvcGVydHksIG9wdGlvbnMuZGF0YXNbcHJvcGVydHldKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCB1cmwpO1xyXG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgJiYgeGhyLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRWNoZWMgSFRUUCA6IGNvZGUnLnhoci5zdGF0dXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuanNvbikge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm1hdCBKU09OIGludmFsaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHhoci5zZW5kKGZvcm1EYXRhKTtcclxufSIsImltcG9ydCBhamF4IGZyb20gXCIuLi8uLi9mdW5jdGlvbnMvX2FqYXhcIjtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBsZXQgbmV3Q29tbWVudENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LWNvbW1lbnQtY29udGVudCcpO1xyXG4gICAgbmV3Q29tbWVudENvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgdGV4dCA9IChlLm9yaWdpbmFsRXZlbnQgfHwgZSkuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCd0ZXh0L3BsYWluJyk7XHJcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxyXFxuL2csICdcXHInKS5yZXBsYWNlKC9bXFxyXFxuXS9nLCAnPGJyPicpO1xyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpbnNlcnRIVE1MJywgZmFsc2UsIHRleHQpO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgbmV3Q29tbWVudFZhbGlkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1jb21tZW50LXZhbGlkYXRlJyk7XHJcbiAgICBuZXdDb21tZW50VmFsaWRhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNwaW5uZXIgPSAnPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lclwiPjwvaT4nO1xyXG4gICAgICAgIGxldCB2YWxpZGF0ZUJ1dHRvblRleHQgPSBuZXdDb21tZW50VmFsaWRhdGUuaW5uZXJIVE1MO1xyXG4gICAgICAgIG5ld0NvbW1lbnRWYWxpZGF0ZS5pbm5lckhUTUwgPSBzcGlubmVyO1xyXG4gICAgICAgIG5ld0NvbW1lbnRWYWxpZGF0ZS5ibHVyKCk7XHJcbiAgICAgICAgaWYgKG5ld0NvbW1lbnRDb250ZW50LmlubmVyVGV4dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY29udGVudCA9IG5ld0NvbW1lbnRDb250ZW50LmlubmVySFRNTDtcclxuICAgICAgICBsZXQgdXJsID0gbmV3Q29tbWVudFZhbGlkYXRlLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQtdXJsJyk7XHJcbiAgICAgICAgYWpheChcclxuICAgICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbW1lbnQgPSBjcmVhdGVDb21tZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogcmVzcG9uc2UuZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHJlc3BvbnNlLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiByZXNwb25zZS5jb250ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVcmw6IHJlc3BvbnNlLmRlbGV0ZVVybFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdDb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsb2ctYXJ0aWNsZV9fY29tbWVudC0tbmV3Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRFbGVtZW50U2libGluZyA9IG5ld0NvbW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RWxlbWVudFNpYmxpbmcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RWxlbWVudFNpYmxpbmcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29tbWVudCxuZXh0RWxlbWVudFNpYmxpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvbW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjb21tZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q29tbWVudENvbnRlbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuZXdDb21tZW50VmFsaWRhdGUuaW5uZXJIVE1MID0gdmFsaWRhdGVCdXR0b25UZXh0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGFzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQnOiBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ibG9nLWNvbW1lbnQtZGVsZXRlJyk7XHJcbiAgICBmb3IgKGxldCBkZWxldGVCdXR0b24gb2YgZGVsZXRlQnV0dG9ucykge1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUNvbW1lbnQpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29tbWVudERhdGFzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50RGF0YXMuZGF0ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudERhdGFzLnVzZXJuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50RGF0YXMuY29udGVudFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudERhdGFzLmRlbGV0ZVVybFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQ29tbWVudChjb21tZW50RGF0YXMpIHtcclxuICAgIGxldCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb21tZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2ctYXJ0aWNsZV9fY29tbWVudCcpO1xyXG4gICAgY29tbWVudC5jbGFzc0xpc3QuYWRkKCdibG9nLWFydGljbGVfX2NvbW1lbnQtLXJpZ2h0Jyk7XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnYmxvZy1hcnRpY2xlX19jb21tZW50X19oZWFkZXInKTtcclxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdibG9nLWFydGljbGVfX2NvbW1lbnRfX2hlYWRlcl9fZGF0ZScpO1xyXG4gICAgZGF0ZS5pbm5lclRleHQgPSBjb21tZW50RGF0YXMuZGF0ZTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkYXRlKTtcclxuICAgIGxldCBzZXAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnIC0gJyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc2VwKTtcclxuICAgIGxldCB1c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHVzZXJuYW1lLmNsYXNzTGlzdC5hZGQoJ2Jsb2ctYXJ0aWNsZV9fY29tbWVudF9faGVhZGVyX191c2VybmFtZScpO1xyXG4gICAgdXNlcm5hbWUuaW5uZXJUZXh0ID0gY29tbWVudERhdGFzLnVzZXJuYW1lO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHVzZXJuYW1lKTtcclxuICAgIGNvbW1lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Jsb2ctYXJ0aWNsZV9fY29tbWVudF9fY29udGVudCcpO1xyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdibG9nLWNvbW1lbnQtZGVsZXRlJyk7XHJcbiAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldC11cmwnLCBjb21tZW50RGF0YXMuZGVsZXRlVXJsKTtcclxuICAgIGxldCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYXInKTtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtd2luZG93LWNsb3NlJyk7XHJcbiAgICBkZWxldGVCdXR0b24uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVDb21tZW50KTtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyAnICsgY29tbWVudERhdGFzLmNvbnRlbnQ7XHJcbiAgICBjb250ZW50LnByZXBlbmQoZGVsZXRlQnV0dG9uKTtcclxuICAgIGNvbW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICByZXR1cm4gY29tbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQ29tbWVudCgpIHtcclxuICAgIGlmICghY29uZmlybSgnU3VwcHJpbWVyPycpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHNwaW5uZXIgPSAnPGkgY2xhc3M9XCJmYXMgZmEtc3Bpbm5lclwiPjwvaT4nO1xyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IHRoaXM7XHJcbiAgICBsZXQgZGVsZXRlSWNvbiA9IGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUw7XHJcbiAgICBkZWxldGVCdXR0b24uaW5uZXJIVE1MID0gc3Bpbm5lcjtcclxuICAgIGFqYXgoXHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmRhdGFzZXQudGFyZ2V0VXJsLFxyXG4gICAgICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKCFtZXNzYWdlLmNsYXNzTGlzdC5jb250YWlucygnYmxvZy1hcnRpY2xlX19jb21tZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gbWVzc2FnZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBkZWxldGVJY29uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=