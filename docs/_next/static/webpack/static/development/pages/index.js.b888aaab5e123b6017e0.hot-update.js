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

var projects = fruit.projects; // const projectsLength = projects.length;
// function list() {
//   for (var i = 0; i <= projects.length; i++) {
//     console.log(projects[i], i);
//   return (
//     <li><a href={projects[i].url} target="_blank">{projects[i].title}</a></li>
//     );
// }};

function list() {
  for (var i = 0; i < projects.length; i++) {
    console.log(projects[i], i); // return (<li><a href={projects[i].url} target="_blank">{projects[i].title}</a></li>);
  }
}

;

function makeList() {
  projects.forEach(function (item) {
    console.log(item.title, item.url);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: item.url,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, item.title));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, makeList());
});

/***/ })

})
//# sourceMappingURL=index.js.b888aaab5e123b6017e0.hot-update.js.map