/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Light.ttf */ "./src/fonts/Roboto-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Custom-font";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}

html {
  font-family: "Custom-font";
  font-size: 100%;
  color: white;
  min-height: 100vh;
}

body {
  display: grid;
  grid-template-rows: 80px 1fr 50px;
  position: relative;

  background-color: seagreen;
}

/* a section with the tab browsering */
.top-section {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;

  /* use native css nesting */
  & button {
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: white;

    font-size: 2rem;
    color: red;
    font-weight: bold;

    &:hover:not([disabled]) {
      cursor: pointer;
      background-color: rgb(206, 198, 184);
      text-decoration: underline;
    }

    &[disabled] {
      border: 4px solid black;
      background-color: grey;
    }
  }
}

#content {
  border: 2px solid black;
}

/* footer */
#footer {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;

  & p a {
    text-decoration: none;
    color: white;
    font-size: 1.3rem;
    font-weight: bold;

    &:hover {
      color: red;
      text-decoration: underline;
    }
  }
}

/* styles for the home page */
.home-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  padding: 50px 100px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }

  & .images {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 350px);
    gap: 30px;
    justify-items: center;

    & img {
      border: 3px solid white;
    }
  }

  & .text {
    & h1 {
      text-align: center;
      font-size: 3rem;
      text-shadow: 5px 5px 8px purple;
      margin-bottom: 20px;

      & + h3 {
        text-align: center;
        font-style: italic;
        font-size: 2rem;
        margin-bottom: 50px;
      }
    }

    & p {
      font-size: 1.5rem;
      margin-bottom: 40px;

      & + h3 {
        font-size: 1.5rem;
      }
    }

    & table {
      font-size: 1.5rem;
      margin: 50px auto;

      & th {
        color: purple;
        text-decoration: underline;
      }

      & + h3 {
        font-size: 1.5rem;
        text-align: center;
        color: purple;
      }
    }
  }
}

/* add styles to the menu page */
.menu-section {
  padding: 30px;
  & h1 {
    font-size: 3rem;
    text-align: center;
  }

  & h2 {
    text-align: center;
    font-size: 2rem;
    color: purple;
    text-decoration: underline;
  }

  & .soups,
  & .main-courses,
  & .desserts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    justify-items: center;
    gap: 40px;
  }

  /* for all dish cards */
  & .dish-block {
    width: 400px;
    height: 400px;
    padding-top: 25px;
    padding-bottom: 25px;

    & img {
      width: 300px;
      height: 300px;
    }

    &:not(img) {
      text-align: center;
      font-size: 1.2rem;
    }
  }
}

/* all styles to the contact page */
.contact-section {
  padding: 50px;
  text-align: center;

  & h1 {
    font-size: 3rem;
    color: purple;
    text-decoration: underline;
  }

  & h3 {
    margin-top: 30px;
    font-size: 1.5rem;
  }

  & .location {
    margin-top: 25px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,+DAAuD;AACzD;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,kBAAkB;;EAElB,0BAA0B;AAC5B;;AAEA,sCAAsC;AACtC;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,uBAAuB;;EAEvB,2BAA2B;EAC3B;IACE,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;;IAEvB,eAAe;IACf,UAAU;IACV,iBAAiB;;IAEjB;MACE,eAAe;MACf,oCAAoC;MACpC,0BAA0B;IAC5B;;IAEA;MACE,uBAAuB;MACvB,sBAAsB;IACxB;EACF;AACF;;AAEA;EACE,uBAAuB;AACzB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,YAAY;;EAEZ;IACE,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;;IAEjB;MACE,UAAU;MACV,0BAA0B;IAC5B;EACF;AACF;;AAEA,6BAA6B;AAC7B;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;EAChB,mBAAmB;;EAEnB;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,0BAA0B;IAC1B,oCAAoC;IACpC,SAAS;IACT,qBAAqB;;IAErB;MACE,uBAAuB;IACzB;EACF;;EAEA;IACE;MACE,kBAAkB;MAClB,eAAe;MACf,+BAA+B;MAC/B,mBAAmB;;MAEnB;QACE,kBAAkB;QAClB,kBAAkB;QAClB,eAAe;QACf,mBAAmB;MACrB;IACF;;IAEA;MACE,iBAAiB;MACjB,mBAAmB;;MAEnB;QACE,iBAAiB;MACnB;IACF;;IAEA;MACE,iBAAiB;MACjB,iBAAiB;;MAEjB;QACE,aAAa;QACb,0BAA0B;MAC5B;;MAEA;QACE,iBAAiB;QACjB,kBAAkB;QAClB,aAAa;MACf;IACF;EACF;AACF;;AAEA,gCAAgC;AAChC;EACE,aAAa;EACb;IACE,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,0BAA0B;EAC5B;;EAEA;;;IAGE,aAAa;IACb,2DAA2D;IAC3D,qBAAqB;IACrB,SAAS;EACX;;EAEA,uBAAuB;EACvB;IACE,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,oBAAoB;;IAEpB;MACE,YAAY;MACZ,aAAa;IACf;;IAEA;MACE,kBAAkB;MAClB,iBAAiB;IACnB;EACF;AACF;;AAEA,mCAAmC;AACnC;EACE,aAAa;EACb,kBAAkB;;EAElB;IACE,eAAe;IACf,aAAa;IACb,0BAA0B;EAC5B;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;EAClB;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Custom-font\";\n  src: url(\"./fonts/Roboto-Light.ttf\") format(\"truetype\");\n}\n\nhtml {\n  font-family: \"Custom-font\";\n  font-size: 100%;\n  color: white;\n  min-height: 100vh;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n  position: relative;\n\n  background-color: seagreen;\n}\n\n/* a section with the tab browsering */\n.top-section {\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: center;\n\n  /* use native css nesting */\n  & button {\n    padding: 10px;\n    border: none;\n    border-radius: 10px;\n    background-color: white;\n\n    font-size: 2rem;\n    color: red;\n    font-weight: bold;\n\n    &:hover:not([disabled]) {\n      cursor: pointer;\n      background-color: rgb(206, 198, 184);\n      text-decoration: underline;\n    }\n\n    &[disabled] {\n      border: 4px solid black;\n      background-color: grey;\n    }\n  }\n}\n\n#content {\n  border: 2px solid black;\n}\n\n/* footer */\n#footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: black;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n\n  & p a {\n    text-decoration: none;\n    color: white;\n    font-size: 1.3rem;\n    font-weight: bold;\n\n    &:hover {\n      color: red;\n      text-decoration: underline;\n    }\n  }\n}\n\n/* styles for the home page */\n.home-section {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 30px;\n  padding: 50px 100px;\n\n  @media (max-width: 800px) {\n    display: flex;\n    flex-direction: column;\n  }\n\n  & .images {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3, 350px);\n    gap: 30px;\n    justify-items: center;\n\n    & img {\n      border: 3px solid white;\n    }\n  }\n\n  & .text {\n    & h1 {\n      text-align: center;\n      font-size: 3rem;\n      text-shadow: 5px 5px 8px purple;\n      margin-bottom: 20px;\n\n      & + h3 {\n        text-align: center;\n        font-style: italic;\n        font-size: 2rem;\n        margin-bottom: 50px;\n      }\n    }\n\n    & p {\n      font-size: 1.5rem;\n      margin-bottom: 40px;\n\n      & + h3 {\n        font-size: 1.5rem;\n      }\n    }\n\n    & table {\n      font-size: 1.5rem;\n      margin: 50px auto;\n\n      & th {\n        color: purple;\n        text-decoration: underline;\n      }\n\n      & + h3 {\n        font-size: 1.5rem;\n        text-align: center;\n        color: purple;\n      }\n    }\n  }\n}\n\n/* add styles to the menu page */\n.menu-section {\n  padding: 30px;\n  & h1 {\n    font-size: 3rem;\n    text-align: center;\n  }\n\n  & h2 {\n    text-align: center;\n    font-size: 2rem;\n    color: purple;\n    text-decoration: underline;\n  }\n\n  & .soups,\n  & .main-courses,\n  & .desserts {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    justify-items: center;\n    gap: 40px;\n  }\n\n  /* for all dish cards */\n  & .dish-block {\n    width: 400px;\n    height: 400px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n\n    & img {\n      width: 300px;\n      height: 300px;\n    }\n\n    &:not(img) {\n      text-align: center;\n      font-size: 1.2rem;\n    }\n  }\n}\n\n/* all styles to the contact page */\n.contact-section {\n  padding: 50px;\n  text-align: center;\n\n  & h1 {\n    font-size: 3rem;\n    color: purple;\n    text-decoration: underline;\n  }\n\n  & h3 {\n    margin-top: 30px;\n    font-size: 1.5rem;\n  }\n\n  & .location {\n    margin-top: 25px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderContacts: () => (/* binding */ renderContacts)
/* harmony export */ });


function renderContacts(div) {
  const contactsDiv = document.createElement("div");
  const pageHeader = document.createElement("h1");
  const divGoogleMaps = document.createElement("div");

  contactsDiv.classList.add("contact-section");
  divGoogleMaps.classList.add("location");
  pageHeader.textContent = "Our contacts";

  div.append(contactsDiv);
  contactsDiv.append(pageHeader);

  for (let i = 0; i < 3; i++) {
    const header = document.createElement("h3");
    switch (i) {
      case 0:
        header.textContent =
          "Address - U Vodarny 10, Vinohrady, 130 00 Praha-Praha 3, Czechia";
        break;
      case 1:
        header.textContent = "Phone number - +420 111 111 111";
        break;
      case 2:
        header.textContent = "Email - theborscht@gmail.com";
        break;
    }
    contactsDiv.append(header);
  }

  contactsDiv.append(divGoogleMaps);
  // include a location on google maps
  divGoogleMaps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10242.099372781275!2d14.4491928!3d50.0764597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b952dd75b0a99%3A0xdc8cf0713ab074d4!2zVGhlIEJvcsWhxI0!5e0!3m2!1sen!2scz!4v1687430606279!5m2!1sen!2scz" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
}


/***/ }),

/***/ "./src/initial-page.js":
/*!*****************************!*\
  !*** ./src/initial-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage),
/* harmony export */   renderNonChangeableElements: () => (/* binding */ renderNonChangeableElements)
/* harmony export */ });


// Section where tab browsering will work
function renderNonChangeableElements() {
  const divTopSection = document.createElement("div");
  divTopSection.classList.add("top-section");
  document.body.prepend(divTopSection);

  // generate 3 'tabs' for future tab browsering
  for (let i = 0; i < 3; i++) {
    const btn = document.createElement("button");
    btn.textContent = i === 0 ? "Home" : i === 1 ? "Menu" : "Contact";

    switch (i) {
      case 0:
        btn.classList.add("Home-btn");
        btn.disabled = true;
        break;
      case 1:
        btn.classList.add("Menu-btn");
        break;
      case 2:
        btn.classList.add("Contact-btn");
        break;
    }
    divTopSection.append(btn);
  }
  // footer
  const footer = document.createElement("footer");
  const paragraph = document.createElement("p");
  const link = document.createElement("a");

  footer.setAttribute("id", "footer");
  paragraph.classList.add("github-link");
  link.target = "_blank";
  link.href = "https://github.com/silenceinspace";
  link.textContent = "GitHub account";

  document.body.append(footer);
  footer.append(paragraph);
  paragraph.append(link);
}

function renderHomePage(div) {
  // Section where all initial content will be shown
  // create elements
  const divMiddleSection = document.createElement("div");
  const heroTitle = document.createElement("h1");
  const divRestaurantPhotos = document.createElement("div");
  const shortDescription = document.createElement("h3");
  const restaurantStory = document.createElement("p");
  const offerForVisiting = document.createElement("h3");
  const tableWithSchedule = document.createElement("table");
  const tableHeader = document.createElement("th");
  const addressBoldText = document.createElement("h3");
  const textSide = document.createElement("div");

  // classes
  divMiddleSection.classList.add("home-section");
  divRestaurantPhotos.classList.add("images");
  textSide.classList.add("text");

  // text content
  heroTitle.textContent = "The Borsch";
  shortDescription.textContent =
    "A place to return to for the best Ukrainian borsch in Prague!";
  restaurantStory.textContent =
    " Our cozy restaurant was opened back in 2021. As our main mission we saw the need to spread the word about the Ukrainian culture abroad and one of its biggest achievements - soup called borsch. Some people say it's just tasty soup, but we think there is more to it. The history, the symbol of true identity and the strongest nation.";
  offerForVisiting.textContent = `If that sounds interesting to you, please consider stopping by for a bowl of our special Ukrainian elixir !
    P.S. we also have other delicious Ukrainian tratidional food to try:D
    `;
  tableHeader.textContent = "We are open:";
  addressBoldText.textContent =
    "Our Address: U Vodarny 10, 130 00 Prague 3 - Vinohrady";

  // append elements
  div.append(divMiddleSection);
  tableWithSchedule.append(tableHeader);
  divMiddleSection.append(textSide, divRestaurantPhotos);

  textSide.append(
    heroTitle,
    shortDescription,
    restaurantStory,
    offerForVisiting,
    tableWithSchedule,
    addressBoldText
  );

  // img elements to show the restaurant's pictures
  for (let i = 0; i < 3; i++) {
    const img = document.createElement("img");
    img.src =
      i === 0
        ? "../src/images/exterior.jpeg"
        : i === 1
        ? "../src/images/interior.jpg"
        : "../src/images/counter.jpg";
    img.height = "350";
    img.width = "350";
    divRestaurantPhotos.append(img);
  }

  // generate table with work hours for all 7 days
  tableHeader.colSpan = "2";
  for (let i = 0; i < 7; i++) {
    const tableRow = document.createElement("tr");
    for (let j = 0; j < 2; j++) {
      const tableData = document.createElement("td");
      if (j === 1 && i < 5) {
        tableData.textContent = "11:00-19:00";
      }

      if (j === 0) {
        switch (i) {
          case 0:
            tableData.textContent = "Monday";
            break;
          case 1:
            tableData.textContent = "Tuesday";
            break;
          case 2:
            tableData.textContent = "Wednesday";
            break;
          case 3:
            tableData.textContent = "Thursday";
            break;
          case 4:
            tableData.textContent = "Friday";
        }
      }

      if (i === 5) {
        tableData.textContent = j === 0 ? "Saturday" : "11:00-18:00";
      }

      if (i === 6) {
        tableData.textContent = j === 0 ? "Sunday" : "Closed";
      }

      tableRow.append(tableData);
    }
    tableWithSchedule.append(tableRow);
  }
}


/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMenu: () => (/* binding */ renderMenu)
/* harmony export */ });


function renderMenu(div) {
  // create html elements in DOM
  const menuDiv = document.createElement("div");
  const currentPageTitle = document.createElement("h1");
  const soupsDiv = document.createElement("div");
  const soupTitle = document.createElement("h2");
  const mainCoursesDiv = document.createElement("div");
  const dessertsDiv = document.createElement("div");
  const dessertsTitle = document.createElement("h2");
  const mainCoursesTitle = document.createElement("h2");

  // add class names to elements in DOM
  menuDiv.classList.add("menu-section");
  soupsDiv.classList.add("soups");
  mainCoursesDiv.classList.add("main-courses");
  dessertsDiv.classList.add("desserts");

  // add text to elements in DOM
  currentPageTitle.textContent = "Our menu";
  soupTitle.textContent = "Soups";
  mainCoursesTitle.textContent = "Ukrainian specialities";
  dessertsTitle.textContent = "Desserts";

  // append DOM elements other DOM elements
  div.append(menuDiv);
  menuDiv.append(
    currentPageTitle,
    soupTitle,
    soupsDiv,
    mainCoursesTitle,
    mainCoursesDiv,
    dessertsTitle,
    dessertsDiv
  );

  // divs with soup options on the menu
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("dish-block");
    for (let j = 0; j < 1; j++) {
      const header = document.createElement("h3");
      const para = document.createElement("p");
      const image = document.createElement("img");

      switch (i) {
        case 0:
          header.textContent = "Beef borsch 0.4l";
          para.textContent = "Price - 99Czk";
          image.src = "../src/images/menu/beef borsch.jpg";
          break;
        case 1:
          header.textContent = "Vegetarian borscht with mushroom 0.4l";
          para.textContent = "Price - 99Czk";
          image.src = "../src/images/menu/Vegeterian borsch.png";
          break;
      }
      div.append(header, para, image);
    }
    soupsDiv.append(div);
  }

  // divs with main course optins on the menu
  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.classList.add("dish-block");
    const para = document.createElement("p");
    const header = document.createElement("h3");
    const img = document.createElement("img");
    div.append(header, para, img);

    switch (i) {
      case 0:
        header.textContent = "Kyiv cutlet with mashed potatoes";
        para.textContent = "Price - 245Czk";
        img.src = "../src/images/menu/Kyiv cutlet.png";
        break;
      case 1:
        header.textContent = "Holubtsi (cabbage rolls with meat)";
        para.textContent = "Price - 205Czk";
        img.src = "../src/images/menu/Holubtsi.png";
        break;
      case 2:
        header.textContent =
          "Nalysnyky stuffed with pork tongues";
        para.textContent = "Price - 180Czk";
        img.src = "../src/images/menu/Nalysnyky.png";
        break;
      case 3:
        header.textContent = " Varenyky with potato filling";
        para.textContent = "Price - 110Czk";
        img.src = "../src/images/menu/Varenyky.png";
        break;
      case 4:
        header.textContent = "Deruns with sour cream and salad";
        para.textContent = "Price - 90Czk";
        img.src = "../src/images/menu/Deruns.png";
        break;
      case 5:
        header.textContent = "Salo with borscht (two types of lard)";
        para.textContent = "Price - 70Czk";
        img.src = "../src/images/menu/Salo.png";
        break;
    }
    mainCoursesDiv.append(div);
  }

  // divs with desserts options on the menu
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("dish-block");
    const para = document.createElement("p");
    const header = document.createElement("h3");
    const image = document.createElement("img");
    div.append(header, para, image);

    switch (i) {
      case 0:
        header.textContent = "Varenyky with sour cherries";
        para.textContent = "Price - 120Czk";
        image.src = "../src/images/menu/Sweet varenyky.png";
        break;
      case 1:
        header.textContent = "Cottage cheese pancakes";
        para.textContent = "Price - 115Czk";
        image.src = "../src/images/menu/Cheesecakes.png";
        break;
    }
    dessertsDiv.append(div);
  }
}


/***/ }),

/***/ "./src/fonts/Roboto-Light.ttf":
/*!************************************!*\
  !*** ./src/fonts/Roboto-Light.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "333da16a3f3cc391d087.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page */ "./src/initial-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



// load css with webpack


const divContent = document.body.querySelector("#content");

(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.renderNonChangeableElements)();
// render initial page
(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)(divContent);

function makeCurrentTabUnckickable(firstTab, secondTab, thirdTab) {
  homeTab.disabled = firstTab;
  menuTab.disabled = secondTab;
  contactTab.disabled = thirdTab;
}

const homeTab = document.querySelector(".Home-btn");
homeTab.addEventListener("click", () => {
  divContent.replaceChildren();
  (0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)(divContent);
  makeCurrentTabUnckickable(true, false, false);
});

const menuTab = document.querySelector(".Menu-btn");
menuTab.addEventListener("click", () => {
  divContent.replaceChildren();
  (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__.renderMenu)(divContent);
  makeCurrentTabUnckickable(false, true, false);
});

const contactTab = document.querySelector(".Contact-btn");
contactTab.addEventListener("click", () => {
  divContent.replaceChildren();
  (0,_contact_page__WEBPACK_IMPORTED_MODULE_2__.renderContacts)(divContent);
  makeCurrentTabUnckickable(false, false, true);
});








// Some things to try in the project!!!
// import images through webpack??
// import font through webpack

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksY0FBYyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxjQUFjLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGNBQWMsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sWUFBWSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoSnNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbklBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0E2RTtBQUNwQztBQUNPO0FBQ2hEO0FBQ3FCOztBQUVyQjs7QUFFQSwwRUFBMkI7QUFDM0I7QUFDQSw2REFBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkRBQWM7QUFDaEI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQVU7QUFDWjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBYztBQUNoQjtBQUNBLENBQUM7Ozs7Ozs7OztBQVNEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDdXN0b20tZm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkN1c3RvbS1mb250XCI7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnIgNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHNlYWdyZWVuO1xufVxuXG4vKiBhIHNlY3Rpb24gd2l0aCB0aGUgdGFiIGJyb3dzZXJpbmcgKi9cbi50b3Atc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLyogdXNlIG5hdGl2ZSBjc3MgbmVzdGluZyAqL1xuICAmIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMTk4LCAxODQpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIH1cbiAgfVxufVxuXG4jY29udGVudCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4vKiBmb290ZXIgKi9cbiNmb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgJiBwIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbn1cblxuLyogc3R5bGVzIGZvciB0aGUgaG9tZSBwYWdlICovXG4uaG9tZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBjb2x1bW4tZ2FwOiAzMHB4O1xuICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gICYgLmltYWdlcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAzNTBweCk7XG4gICAgZ2FwOiAzMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICAgICYgaW1nIHtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gICYgLnRleHQge1xuICAgICYgaDEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggOHB4IHB1cnBsZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICYgKyBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxuICAgICAgJiArIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiB0YWJsZSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xuXG4gICAgICAmIHRoIHtcbiAgICAgICAgY29sb3I6IHB1cnBsZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgICYgKyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIGFkZCBzdHlsZXMgdG8gdGhlIG1lbnUgcGFnZSAqL1xuLm1lbnUtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDMwcHg7XG4gICYgaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAmIC5zb3VwcyxcbiAgJiAubWFpbi1jb3Vyc2VzLFxuICAmIC5kZXNzZXJ0cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0MHB4O1xuICB9XG5cbiAgLyogZm9yIGFsbCBkaXNoIGNhcmRzICovXG4gICYgLmRpc2gtYmxvY2sge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuXG4gICAgJiBpbWcge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG5cbiAgICAmOm5vdChpbWcpIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgfVxufVxuXG4vKiBhbGwgc3R5bGVzIHRvIHRoZSBjb250YWN0IHBhZ2UgKi9cbi5jb250YWN0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJiBoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAmIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgJiAubG9jYXRpb24ge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLCtEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCOztFQUVsQiwwQkFBMEI7QUFDNUI7O0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsdUJBQXVCOztFQUV2QiwyQkFBMkI7RUFDM0I7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7O0lBRXZCLGVBQWU7SUFDZixVQUFVO0lBQ1YsaUJBQWlCOztJQUVqQjtNQUNFLGVBQWU7TUFDZixvQ0FBb0M7TUFDcEMsMEJBQTBCO0lBQzVCOztJQUVBO01BQ0UsdUJBQXVCO01BQ3ZCLHNCQUFzQjtJQUN4QjtFQUNGO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7O0VBRXZCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZOztFQUVaO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCOztJQUVqQjtNQUNFLFVBQVU7TUFDViwwQkFBMEI7SUFDNUI7RUFDRjtBQUNGOztBQUVBLDZCQUE2QjtBQUM3QjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjs7RUFFbkI7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixvQ0FBb0M7SUFDcEMsU0FBUztJQUNULHFCQUFxQjs7SUFFckI7TUFDRSx1QkFBdUI7SUFDekI7RUFDRjs7RUFFQTtJQUNFO01BQ0Usa0JBQWtCO01BQ2xCLGVBQWU7TUFDZiwrQkFBK0I7TUFDL0IsbUJBQW1COztNQUVuQjtRQUNFLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLG1CQUFtQjtNQUNyQjtJQUNGOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLG1CQUFtQjs7TUFFbkI7UUFDRSxpQkFBaUI7TUFDbkI7SUFDRjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixpQkFBaUI7O01BRWpCO1FBQ0UsYUFBYTtRQUNiLDBCQUEwQjtNQUM1Qjs7TUFFQTtRQUNFLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsYUFBYTtNQUNmO0lBQ0Y7RUFDRjtBQUNGOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLGFBQWE7RUFDYjtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYiwwQkFBMEI7RUFDNUI7O0VBRUE7OztJQUdFLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QscUJBQXFCO0lBQ3JCLFNBQVM7RUFDWDs7RUFFQSx1QkFBdUI7RUFDdkI7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7O0lBRXBCO01BQ0UsWUFBWTtNQUNaLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixpQkFBaUI7SUFDbkI7RUFDRjtBQUNGOztBQUVBLG1DQUFtQztBQUNuQztFQUNFLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCO0lBQ0UsZUFBZTtJQUNmLGFBQWE7SUFDYiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkN1c3RvbS1mb250XFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1JvYm90by1MaWdodC50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDdXN0b20tZm9udFxcXCI7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmciA1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogc2VhZ3JlZW47XFxufVxcblxcbi8qIGEgc2VjdGlvbiB3aXRoIHRoZSB0YWIgYnJvd3NlcmluZyAqL1xcbi50b3Atc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgLyogdXNlIG5hdGl2ZSBjc3MgbmVzdGluZyAqL1xcbiAgJiBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDE5OCwgMTg0KTtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcblxcbiAgICAmW2Rpc2FibGVkXSB7XFxuICAgICAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4jY29udGVudCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLyogZm9vdGVyICovXFxuI2Zvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG5cXG4gICYgcCBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgY29sb3I6IHJlZDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBzdHlsZXMgZm9yIHRoZSBob21lIHBhZ2UgKi9cXG4uaG9tZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAzMHB4O1xcbiAgcGFkZGluZzogNTBweCAxMDBweDtcXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgJiAuaW1hZ2VzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDM1MHB4KTtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICYgaW1nIHtcXG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgfVxcbiAgfVxcblxcbiAgJiAudGV4dCB7XFxuICAgICYgaDEge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggOHB4IHB1cnBsZTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcbiAgICAgICYgKyBoMyB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuXFxuICAgICAgJiArIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmIHRhYmxlIHtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICBtYXJnaW46IDUwcHggYXV0bztcXG5cXG4gICAgICAmIHRoIHtcXG4gICAgICAgIGNvbG9yOiBwdXJwbGU7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiArIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6IHB1cnBsZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogYWRkIHN0eWxlcyB0byB0aGUgbWVudSBwYWdlICovXFxuLm1lbnUtc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgJiBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgJiBoMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gICYgLnNvdXBzLFxcbiAgJiAubWFpbi1jb3Vyc2VzLFxcbiAgJiAuZGVzc2VydHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDQwcHg7XFxuICB9XFxuXFxuICAvKiBmb3IgYWxsIGRpc2ggY2FyZHMgKi9cXG4gICYgLmRpc2gtYmxvY2sge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcXG5cXG4gICAgJiBpbWcge1xcbiAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgICY6bm90KGltZykge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBhbGwgc3R5bGVzIHRvIHRoZSBjb250YWN0IHBhZ2UgKi9cXG4uY29udGFjdC1zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAmIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gICYgaDMge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gICYgLmxvY2F0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgeyByZW5kZXJDb250YWN0cyB9O1xuXG5mdW5jdGlvbiByZW5kZXJDb250YWN0cyhkaXYpIHtcbiAgY29uc3QgY29udGFjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBkaXZHb29nbGVNYXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1zZWN0aW9uXCIpO1xuICBkaXZHb29nbGVNYXBzLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgcGFnZUhlYWRlci50ZXh0Q29udGVudCA9IFwiT3VyIGNvbnRhY3RzXCI7XG5cbiAgZGl2LmFwcGVuZChjb250YWN0c0Rpdik7XG4gIGNvbnRhY3RzRGl2LmFwcGVuZChwYWdlSGVhZGVyKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIkFkZHJlc3MgLSBVIFZvZGFybnkgMTAsIFZpbm9ocmFkeSwgMTMwIDAwIFByYWhhLVByYWhhIDMsIEN6ZWNoaWFcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiUGhvbmUgbnVtYmVyIC0gKzQyMCAxMTEgMTExIDExMVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJFbWFpbCAtIHRoZWJvcnNjaHRAZ21haWwuY29tXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb250YWN0c0Rpdi5hcHBlbmQoaGVhZGVyKTtcbiAgfVxuXG4gIGNvbnRhY3RzRGl2LmFwcGVuZChkaXZHb29nbGVNYXBzKTtcbiAgLy8gaW5jbHVkZSBhIGxvY2F0aW9uIG9uIGdvb2dsZSBtYXBzXG4gIGRpdkdvb2dsZU1hcHMuaW5uZXJIVE1MID0gYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE0ITFtOCExbTMhMWQxMDI0Mi4wOTkzNzI3ODEyNzUhMmQxNC40NDkxOTI4ITNkNTAuMDc2NDU5NyEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0NzBiOTUyZGQ3NWIwYTk5JTNBMHhkYzhjZjA3MTNhYjA3NGQ0ITJ6VkdobElFSnZjc1doeEkwITVlMCEzbTIhMXNlbiEyc2N6ITR2MTY4NzQzMDYwNjI3OSE1bTIhMXNlbiEyc2N6XCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIzMDBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPmA7XG59XG4iLCJleHBvcnQgeyByZW5kZXJIb21lUGFnZSwgcmVuZGVyTm9uQ2hhbmdlYWJsZUVsZW1lbnRzIH07XG5cbi8vIFNlY3Rpb24gd2hlcmUgdGFiIGJyb3dzZXJpbmcgd2lsbCB3b3JrXG5mdW5jdGlvbiByZW5kZXJOb25DaGFuZ2VhYmxlRWxlbWVudHMoKSB7XG4gIGNvbnN0IGRpdlRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZUb3BTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b3Atc2VjdGlvblwiKTtcbiAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGRpdlRvcFNlY3Rpb24pO1xuXG4gIC8vIGdlbmVyYXRlIDMgJ3RhYnMnIGZvciBmdXR1cmUgdGFiIGJyb3dzZXJpbmdcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGkgPT09IDAgPyBcIkhvbWVcIiA6IGkgPT09IDEgPyBcIk1lbnVcIiA6IFwiQ29udGFjdFwiO1xuXG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiSG9tZS1idG5cIik7XG4gICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIk1lbnUtYnRuXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJDb250YWN0LWJ0blwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRpdlRvcFNlY3Rpb24uYXBwZW5kKGJ0bik7XG4gIH1cbiAgLy8gZm9vdGVyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cbiAgZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xuICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1saW5rXCIpO1xuICBsaW5rLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gIGxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL3NpbGVuY2VpbnNwYWNlXCI7XG4gIGxpbmsudGV4dENvbnRlbnQgPSBcIkdpdEh1YiBhY2NvdW50XCI7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZm9vdGVyKTtcbiAgZm9vdGVyLmFwcGVuZChwYXJhZ3JhcGgpO1xuICBwYXJhZ3JhcGguYXBwZW5kKGxpbmspO1xufVxuXG5mdW5jdGlvbiByZW5kZXJIb21lUGFnZShkaXYpIHtcbiAgLy8gU2VjdGlvbiB3aGVyZSBhbGwgaW5pdGlhbCBjb250ZW50IHdpbGwgYmUgc2hvd25cbiAgLy8gY3JlYXRlIGVsZW1lbnRzXG4gIGNvbnN0IGRpdk1pZGRsZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZXJvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGRpdlJlc3RhdXJhbnRQaG90b3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaG9ydERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCByZXN0YXVyYW50U3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgb2ZmZXJGb3JWaXNpdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFibGVXaXRoU2NoZWR1bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIGNvbnN0IHRhYmxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICBjb25zdCBhZGRyZXNzQm9sZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRleHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAvLyBjbGFzc2VzXG4gIGRpdk1pZGRsZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhvbWUtc2VjdGlvblwiKTtcbiAgZGl2UmVzdGF1cmFudFBob3Rvcy5jbGFzc0xpc3QuYWRkKFwiaW1hZ2VzXCIpO1xuICB0ZXh0U2lkZS5jbGFzc0xpc3QuYWRkKFwidGV4dFwiKTtcblxuICAvLyB0ZXh0IGNvbnRlbnRcbiAgaGVyb1RpdGxlLnRleHRDb250ZW50ID0gXCJUaGUgQm9yc2NoXCI7XG4gIHNob3J0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgIFwiQSBwbGFjZSB0byByZXR1cm4gdG8gZm9yIHRoZSBiZXN0IFVrcmFpbmlhbiBib3JzY2ggaW4gUHJhZ3VlIVwiO1xuICByZXN0YXVyYW50U3RvcnkudGV4dENvbnRlbnQgPVxuICAgIFwiIE91ciBjb3p5IHJlc3RhdXJhbnQgd2FzIG9wZW5lZCBiYWNrIGluIDIwMjEuIEFzIG91ciBtYWluIG1pc3Npb24gd2Ugc2F3IHRoZSBuZWVkIHRvIHNwcmVhZCB0aGUgd29yZCBhYm91dCB0aGUgVWtyYWluaWFuIGN1bHR1cmUgYWJyb2FkIGFuZCBvbmUgb2YgaXRzIGJpZ2dlc3QgYWNoaWV2ZW1lbnRzIC0gc291cCBjYWxsZWQgYm9yc2NoLiBTb21lIHBlb3BsZSBzYXkgaXQncyBqdXN0IHRhc3R5IHNvdXAsIGJ1dCB3ZSB0aGluayB0aGVyZSBpcyBtb3JlIHRvIGl0LiBUaGUgaGlzdG9yeSwgdGhlIHN5bWJvbCBvZiB0cnVlIGlkZW50aXR5IGFuZCB0aGUgc3Ryb25nZXN0IG5hdGlvbi5cIjtcbiAgb2ZmZXJGb3JWaXNpdGluZy50ZXh0Q29udGVudCA9IGBJZiB0aGF0IHNvdW5kcyBpbnRlcmVzdGluZyB0byB5b3UsIHBsZWFzZSBjb25zaWRlciBzdG9wcGluZyBieSBmb3IgYSBib3dsIG9mIG91ciBzcGVjaWFsIFVrcmFpbmlhbiBlbGl4aXIgIVxuICAgIFAuUy4gd2UgYWxzbyBoYXZlIG90aGVyIGRlbGljaW91cyBVa3JhaW5pYW4gdHJhdGlkaW9uYWwgZm9vZCB0byB0cnk6RFxuICAgIGA7XG4gIHRhYmxlSGVhZGVyLnRleHRDb250ZW50ID0gXCJXZSBhcmUgb3BlbjpcIjtcbiAgYWRkcmVzc0JvbGRUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIk91ciBBZGRyZXNzOiBVIFZvZGFybnkgMTAsIDEzMCAwMCBQcmFndWUgMyAtIFZpbm9ocmFkeVwiO1xuXG4gIC8vIGFwcGVuZCBlbGVtZW50c1xuICBkaXYuYXBwZW5kKGRpdk1pZGRsZVNlY3Rpb24pO1xuICB0YWJsZVdpdGhTY2hlZHVsZS5hcHBlbmQodGFibGVIZWFkZXIpO1xuICBkaXZNaWRkbGVTZWN0aW9uLmFwcGVuZCh0ZXh0U2lkZSwgZGl2UmVzdGF1cmFudFBob3Rvcyk7XG5cbiAgdGV4dFNpZGUuYXBwZW5kKFxuICAgIGhlcm9UaXRsZSxcbiAgICBzaG9ydERlc2NyaXB0aW9uLFxuICAgIHJlc3RhdXJhbnRTdG9yeSxcbiAgICBvZmZlckZvclZpc2l0aW5nLFxuICAgIHRhYmxlV2l0aFNjaGVkdWxlLFxuICAgIGFkZHJlc3NCb2xkVGV4dFxuICApO1xuXG4gIC8vIGltZyBlbGVtZW50cyB0byBzaG93IHRoZSByZXN0YXVyYW50J3MgcGljdHVyZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPVxuICAgICAgaSA9PT0gMFxuICAgICAgICA/IFwiLi4vc3JjL2ltYWdlcy9leHRlcmlvci5qcGVnXCJcbiAgICAgICAgOiBpID09PSAxXG4gICAgICAgID8gXCIuLi9zcmMvaW1hZ2VzL2ludGVyaW9yLmpwZ1wiXG4gICAgICAgIDogXCIuLi9zcmMvaW1hZ2VzL2NvdW50ZXIuanBnXCI7XG4gICAgaW1nLmhlaWdodCA9IFwiMzUwXCI7XG4gICAgaW1nLndpZHRoID0gXCIzNTBcIjtcbiAgICBkaXZSZXN0YXVyYW50UGhvdG9zLmFwcGVuZChpbWcpO1xuICB9XG5cbiAgLy8gZ2VuZXJhdGUgdGFibGUgd2l0aCB3b3JrIGhvdXJzIGZvciBhbGwgNyBkYXlzXG4gIHRhYmxlSGVhZGVyLmNvbFNwYW4gPSBcIjJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBjb25zdCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgY29uc3QgdGFibGVEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgaWYgKGogPT09IDEgJiYgaSA8IDUpIHtcbiAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCIxMTowMC0xOTowMFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIk1vbmRheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCJUdWVzZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCJUaHVyc2RheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCJGcmlkYXlcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaSA9PT0gNSkge1xuICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBqID09PSAwID8gXCJTYXR1cmRheVwiIDogXCIxMTowMC0xODowMFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA9PT0gNikge1xuICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBqID09PSAwID8gXCJTdW5kYXlcIiA6IFwiQ2xvc2VkXCI7XG4gICAgICB9XG5cbiAgICAgIHRhYmxlUm93LmFwcGVuZCh0YWJsZURhdGEpO1xuICAgIH1cbiAgICB0YWJsZVdpdGhTY2hlZHVsZS5hcHBlbmQodGFibGVSb3cpO1xuICB9XG59XG4iLCJleHBvcnQgeyByZW5kZXJNZW51IH07XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnUoZGl2KSB7XG4gIC8vIGNyZWF0ZSBodG1sIGVsZW1lbnRzIGluIERPTVxuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFBhZ2VUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc291cHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzb3VwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IG1haW5Db3Vyc2VzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzc2VydHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBtYWluQ291cnNlc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuXG4gIC8vIGFkZCBjbGFzcyBuYW1lcyB0byBlbGVtZW50cyBpbiBET01cbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWN0aW9uXCIpO1xuICBzb3Vwc0Rpdi5jbGFzc0xpc3QuYWRkKFwic291cHNcIik7XG4gIG1haW5Db3Vyc2VzRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvdXJzZXNcIik7XG4gIGRlc3NlcnRzRGl2LmNsYXNzTGlzdC5hZGQoXCJkZXNzZXJ0c1wiKTtcblxuICAvLyBhZGQgdGV4dCB0byBlbGVtZW50cyBpbiBET01cbiAgY3VycmVudFBhZ2VUaXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIG1lbnVcIjtcbiAgc291cFRpdGxlLnRleHRDb250ZW50ID0gXCJTb3Vwc1wiO1xuICBtYWluQ291cnNlc1RpdGxlLnRleHRDb250ZW50ID0gXCJVa3JhaW5pYW4gc3BlY2lhbGl0aWVzXCI7XG4gIGRlc3NlcnRzVGl0bGUudGV4dENvbnRlbnQgPSBcIkRlc3NlcnRzXCI7XG5cbiAgLy8gYXBwZW5kIERPTSBlbGVtZW50cyBvdGhlciBET00gZWxlbWVudHNcbiAgZGl2LmFwcGVuZChtZW51RGl2KTtcbiAgbWVudURpdi5hcHBlbmQoXG4gICAgY3VycmVudFBhZ2VUaXRsZSxcbiAgICBzb3VwVGl0bGUsXG4gICAgc291cHNEaXYsXG4gICAgbWFpbkNvdXJzZXNUaXRsZSxcbiAgICBtYWluQ291cnNlc0RpdixcbiAgICBkZXNzZXJ0c1RpdGxlLFxuICAgIGRlc3NlcnRzRGl2XG4gICk7XG5cbiAgLy8gZGl2cyB3aXRoIHNvdXAgb3B0aW9ucyBvbiB0aGUgbWVudVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkaXNoLWJsb2NrXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTsgaisrKSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJCZWVmIGJvcnNjaCAwLjRsXCI7XG4gICAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IFwiUHJpY2UgLSA5OUN6a1wiO1xuICAgICAgICAgIGltYWdlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L2JlZWYgYm9yc2NoLmpwZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJWZWdldGFyaWFuIGJvcnNjaHQgd2l0aCBtdXNocm9vbSAwLjRsXCI7XG4gICAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IFwiUHJpY2UgLSA5OUN6a1wiO1xuICAgICAgICAgIGltYWdlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L1ZlZ2V0ZXJpYW4gYm9yc2NoLnBuZ1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGl2LmFwcGVuZChoZWFkZXIsIHBhcmEsIGltYWdlKTtcbiAgICB9XG4gICAgc291cHNEaXYuYXBwZW5kKGRpdik7XG4gIH1cblxuICAvLyBkaXZzIHdpdGggbWFpbiBjb3Vyc2Ugb3B0aW5zIG9uIHRoZSBtZW51XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRpc2gtYmxvY2tcIik7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRpdi5hcHBlbmQoaGVhZGVyLCBwYXJhLCBpbWcpO1xuXG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiS3lpdiBjdXRsZXQgd2l0aCBtYXNoZWQgcG90YXRvZXNcIjtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IFwiUHJpY2UgLSAyNDVDemtcIjtcbiAgICAgICAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L0t5aXYgY3V0bGV0LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJIb2x1YnRzaSAoY2FiYmFnZSByb2xscyB3aXRoIG1lYXQpXCI7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlByaWNlIC0gMjA1Q3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9Ib2x1YnRzaS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgICAgICAgXCJOYWx5c255a3kgc3R1ZmZlZCB3aXRoIHBvcmsgdG9uZ3Vlc1wiO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDE4MEN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvTmFseXNueWt5LnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCIgVmFyZW55a3kgd2l0aCBwb3RhdG8gZmlsbGluZ1wiO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDExMEN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvVmFyZW55a3kucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRlcnVucyB3aXRoIHNvdXIgY3JlYW0gYW5kIHNhbGFkXCI7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlByaWNlIC0gOTBDemtcIjtcbiAgICAgICAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L0RlcnVucy5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2FsbyB3aXRoIGJvcnNjaHQgKHR3byB0eXBlcyBvZiBsYXJkKVwiO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDcwQ3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9TYWxvLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbWFpbkNvdXJzZXNEaXYuYXBwZW5kKGRpdik7XG4gIH1cblxuICAvLyBkaXZzIHdpdGggZGVzc2VydHMgb3B0aW9ucyBvbiB0aGUgbWVudVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJkaXNoLWJsb2NrXCIpO1xuICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRpdi5hcHBlbmQoaGVhZGVyLCBwYXJhLCBpbWFnZSk7XG5cbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJWYXJlbnlreSB3aXRoIHNvdXIgY2hlcnJpZXNcIjtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IFwiUHJpY2UgLSAxMjBDemtcIjtcbiAgICAgICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvU3dlZXQgdmFyZW55a3kucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvdHRhZ2UgY2hlZXNlIHBhbmNha2VzXCI7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlByaWNlIC0gMTE1Q3prXCI7XG4gICAgICAgIGltYWdlLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L0NoZWVzZWNha2VzLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZGVzc2VydHNEaXYuYXBwZW5kKGRpdik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVySG9tZVBhZ2UsIHJlbmRlck5vbkNoYW5nZWFibGVFbGVtZW50cyB9IGZyb20gXCIuL2luaXRpYWwtcGFnZVwiO1xuaW1wb3J0IHsgcmVuZGVyTWVudSB9IGZyb20gXCIuL21lbnUtcGFnZVwiO1xuaW1wb3J0IHsgcmVuZGVyQ29udGFjdHMgfSBmcm9tIFwiLi9jb250YWN0LXBhZ2VcIjtcbi8vIGxvYWQgY3NzIHdpdGggd2VicGFja1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5yZW5kZXJOb25DaGFuZ2VhYmxlRWxlbWVudHMoKTtcbi8vIHJlbmRlciBpbml0aWFsIHBhZ2VcbnJlbmRlckhvbWVQYWdlKGRpdkNvbnRlbnQpO1xuXG5mdW5jdGlvbiBtYWtlQ3VycmVudFRhYlVuY2tpY2thYmxlKGZpcnN0VGFiLCBzZWNvbmRUYWIsIHRoaXJkVGFiKSB7XG4gIGhvbWVUYWIuZGlzYWJsZWQgPSBmaXJzdFRhYjtcbiAgbWVudVRhYi5kaXNhYmxlZCA9IHNlY29uZFRhYjtcbiAgY29udGFjdFRhYi5kaXNhYmxlZCA9IHRoaXJkVGFiO1xufVxuXG5jb25zdCBob21lVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Ib21lLWJ0blwiKTtcbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGl2Q29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgcmVuZGVySG9tZVBhZ2UoZGl2Q29udGVudCk7XG4gIG1ha2VDdXJyZW50VGFiVW5ja2lja2FibGUodHJ1ZSwgZmFsc2UsIGZhbHNlKTtcbn0pO1xuXG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5NZW51LWJ0blwiKTtcbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGl2Q29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgcmVuZGVyTWVudShkaXZDb250ZW50KTtcbiAgbWFrZUN1cnJlbnRUYWJVbmNraWNrYWJsZShmYWxzZSwgdHJ1ZSwgZmFsc2UpO1xufSk7XG5cbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkNvbnRhY3QtYnRuXCIpO1xuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXZDb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICByZW5kZXJDb250YWN0cyhkaXZDb250ZW50KTtcbiAgbWFrZUN1cnJlbnRUYWJVbmNraWNrYWJsZShmYWxzZSwgZmFsc2UsIHRydWUpO1xufSk7XG5cblxuXG5cblxuXG5cblxuLy8gU29tZSB0aGluZ3MgdG8gdHJ5IGluIHRoZSBwcm9qZWN0ISEhXG4vLyBpbXBvcnQgaW1hZ2VzIHRocm91Z2ggd2VicGFjaz8/XG4vLyBpbXBvcnQgZm9udCB0aHJvdWdoIHdlYnBhY2tcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==