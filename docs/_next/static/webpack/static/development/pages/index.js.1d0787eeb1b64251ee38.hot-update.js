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


var content = __webpack_require__(/*! ../static/content.json */ "./static/content.json");

var projects = content.projects;

function makeList() {
  return projects.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: item.url,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, item.title));
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, makeList());
});

/***/ }),

/***/ "./static/content.json":
/*!*****************************!*\
  !*** ./static/content.json ***!
  \*****************************/
/*! exports provided: header, about, projects, links, default */
/***/ (function(module) {

module.exports = {"header":{"headline":"Danny McClain 🤙","text":"Digital product designer who likes to build stuff too. Always learning because learning is fun!"},"about":{"headline":"Aboot","text":"I design apps and interfaces that work well, look nice, and feel good. I like systems, icons, typography, strategy, designing based on research, iterating constantly, and shipping."},"projects":[{"title":"Fit to Parent","url":"https://fittoparent.dannymcclain.com"},{"title":"Swap Width & Height","url":"https://swap-width-height.dannymcclain.com"},{"title":"Ratio","url":"https://pensive-joliot-ed3c84.netlify.com"},{"title":"Grid Calc","url":"https://frosty-hypatia-1693bf.netlify.com"}],"links":[{"title":"Dribbble","url":"https://dribbble.com/dannymcclain"},{"title":"GitHub","url":"https://github.com/dannymcclain"},{"title":"Twitter","url":"https://twitter.com/dannymcclain"},{"title":"Email","url":"mailto:dannyxmcclain@gmail.com"}]};

/***/ })

})
//# sourceMappingURL=index.js.1d0787eeb1b64251ee38.hot-update.js.map