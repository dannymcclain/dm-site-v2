webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var fruit = __webpack_require__(/*! ../static/fruit.json */ "./static/fruit.json");

var projects = fruit.projects; // projects.forEach(function (item) {
//   console.log(item.title);
// });

function createProjectList() {
  var html = '';
  projects.forEach(function (item) {
    html += "<li><a href=\"".concat(item.url, "\" target=\"_blank\">").concat(item.title, "</a></li>");
  });
  return html;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return function renderHtmlToDom() {
    var html = createProjectList();
    var projectList = document.getElementsByClassName('project-list')[0];
    projectList.innerHTML = html;
  };
});

/***/ })

})
//# sourceMappingURL=index.js.290acc17656482333213.hot-update.js.map