webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danny.mcclain/Projects/Sites/dm-site-v2/components/Projects.js";


var fruit = __webpack_require__(/*! ../static/fruit.json */ "./static/fruit.json");

var projects = fruit.projects; // projects.forEach(function (item) {
//   console.log(item.title);
// });

function createProjectList() {
  var html = undefined;
  projects.forEach(function (item) {
    html += "<li><a href=\"".concat(item.url, "\" target=\"_blank\">").concat(item.title, "</a></li>");
  });
  return html;
} // function renderHtmlToDom() {
//   const html = createProjectList();
//   const projectList = document.getElementsByClassName('project-list')[0];
//   projectList.innerHTML = html;
// }


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, createProjectList());
});

/***/ })

})
//# sourceMappingURL=index.js.6f558a7821e08b8e5daf.hot-update.js.map