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

var projects = fruit.projects;
var projectsLength = projects.length;

var list = function list(projects) {
  for (var i = 0; i < projectsLength; i++) {
    // return (
    //   <li><a href={projects[i].url} target="_blank">{projects[i].url}</a></li>
    //   )
    console.log(projects[i].url);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, list);
});

/***/ })

})
//# sourceMappingURL=index.js.ca05d0473487dd1b721a.hot-update.js.map