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

  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
  }
}

/* a section with the tab browsering */
.top-section {
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;

  @media (max-width: 660px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }

  /* use native css nesting */
  & button {
    width: 150px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: white;

    font-size: 2rem;
    color: purple;
    font-weight: bold;

    &:hover:not([disabled]) {
      cursor: pointer;
      background-color: rgb(206, 198, 184);
      text-decoration: underline;
    }

    &[disabled] {
      border: 4px solid black;
      color: red;
      background-color: grey;
    }
  }
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
  padding: 50px 80px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 600px) {
    padding: 30px;
  }

  & .images {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 350px);
    gap: 30px;
    justify-items: center;

    @media (max-width: 600px) {
      grid-template-rows: repeat(3, 290px);
      gap: 20px;
      margin-top: 20px;
    }

    & img {
      border: 3px solid white;

      @media (max-width: 600px) {
        width: 250px;
        height: 250px;
      }
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

  @media (max-width: 500px) {
    padding: 30px 15px;
    margin-bottom: 20px;
  }

  & h1 {
    font-size: 3rem;
    text-align: center;
    color: purple;
  }

  & h2 {
    text-align: center;
    font-size: 2rem;
    color: purple;
    text-decoration: underline;

    @media (max-width: 500px) {
      margin-top: 25px;
    }
  }

  & .soups,
  & .main-courses,
  & .desserts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    justify-items: center;
    gap: 40px;

    @media (max-width: 500px) {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 0;
    }
  }

  /* for all dish cards */
  & .dish-block {
    width: 400px;
    height: 400px;
    padding-top: 25px;
    padding-bottom: 25px;

    @media (max-width: 500px) {
      width: 300px;
      height: 300px;
    }

    & img {
      width: 300px;
      height: 300px;

      @media (max-width: 500px) {
        width: 200px;
        height: 200px;
      }
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

    @media (max-width: 660px) {
      margin-bottom: 25px;
    }

    @media (max-width: 500px) {
      & iframe {
        width: 250px;
        height: 150px;
      }
    }
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Custom-font\";\n  src: url(\"./fonts/Roboto-Light.ttf\") format(\"truetype\");\n}\n\nhtml {\n  font-family: \"Custom-font\";\n  font-size: 100%;\n  color: white;\n  min-height: 100vh;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n  position: relative;\n  background-color: seagreen;\n\n  @media (max-width: 660px) {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n/* a section with the tab browsering */\n.top-section {\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 660px) {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  /* use native css nesting */\n  & button {\n    width: 150px;\n    padding: 10px;\n    border: none;\n    border-radius: 10px;\n    background-color: white;\n\n    font-size: 2rem;\n    color: purple;\n    font-weight: bold;\n\n    &:hover:not([disabled]) {\n      cursor: pointer;\n      background-color: rgb(206, 198, 184);\n      text-decoration: underline;\n    }\n\n    &[disabled] {\n      border: 4px solid black;\n      color: red;\n      background-color: grey;\n    }\n  }\n}\n\n/* footer */\n#footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: black;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n\n  & p a {\n    text-decoration: none;\n    color: white;\n    font-size: 1.3rem;\n    font-weight: bold;\n\n    &:hover {\n      color: red;\n      text-decoration: underline;\n    }\n  }\n}\n\n/* styles for the home page */\n.home-section {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 30px;\n  padding: 50px 80px;\n\n  @media (max-width: 800px) {\n    display: flex;\n    flex-direction: column;\n  }\n\n  @media (max-width: 600px) {\n    padding: 30px;\n  }\n\n  & .images {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3, 350px);\n    gap: 30px;\n    justify-items: center;\n\n    @media (max-width: 600px) {\n      grid-template-rows: repeat(3, 290px);\n      gap: 20px;\n      margin-top: 20px;\n    }\n\n    & img {\n      border: 3px solid white;\n\n      @media (max-width: 600px) {\n        width: 250px;\n        height: 250px;\n      }\n    }\n  }\n\n  & .text {\n    & h1 {\n      text-align: center;\n      font-size: 3rem;\n      text-shadow: 5px 5px 8px purple;\n      margin-bottom: 20px;\n\n      & + h3 {\n        text-align: center;\n        font-style: italic;\n        font-size: 2rem;\n        margin-bottom: 50px;\n      }\n    }\n\n    & p {\n      font-size: 1.5rem;\n      margin-bottom: 40px;\n\n      & + h3 {\n        font-size: 1.5rem;\n      }\n    }\n\n    & table {\n      font-size: 1.5rem;\n      margin: 50px auto;\n\n      & th {\n        color: purple;\n        text-decoration: underline;\n      }\n\n      & + h3 {\n        font-size: 1.5rem;\n        text-align: center;\n        color: purple;\n      }\n    }\n  }\n}\n\n/* add styles to the menu page */\n.menu-section {\n  padding: 30px;\n\n  @media (max-width: 500px) {\n    padding: 30px 15px;\n    margin-bottom: 20px;\n  }\n\n  & h1 {\n    font-size: 3rem;\n    text-align: center;\n    color: purple;\n  }\n\n  & h2 {\n    text-align: center;\n    font-size: 2rem;\n    color: purple;\n    text-decoration: underline;\n\n    @media (max-width: 500px) {\n      margin-top: 25px;\n    }\n  }\n\n  & .soups,\n  & .main-courses,\n  & .desserts {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    justify-items: center;\n    gap: 40px;\n\n    @media (max-width: 500px) {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n      gap: 0;\n    }\n  }\n\n  /* for all dish cards */\n  & .dish-block {\n    width: 400px;\n    height: 400px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n\n    @media (max-width: 500px) {\n      width: 300px;\n      height: 300px;\n    }\n\n    & img {\n      width: 300px;\n      height: 300px;\n\n      @media (max-width: 500px) {\n        width: 200px;\n        height: 200px;\n      }\n    }\n\n    &:not(img) {\n      text-align: center;\n      font-size: 1.2rem;\n    }\n  }\n}\n\n/* all styles to the contact page */\n.contact-section {\n  padding: 50px;\n  text-align: center;\n\n  & h1 {\n    font-size: 3rem;\n    color: purple;\n    text-decoration: underline;\n  }\n\n  & h3 {\n    margin-top: 30px;\n    font-size: 1.5rem;\n  }\n\n  & .location {\n    margin-top: 25px;\n\n    @media (max-width: 660px) {\n      margin-bottom: 25px;\n    }\n\n    @media (max-width: 500px) {\n      & iframe {\n        width: 250px;\n        height: 150px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
  const contactPageHeader = document.createElement("h1");
  const googleMapsDiv = document.createElement("div");

  contactsDiv.classList.add("contact-section");
  googleMapsDiv.classList.add("location");
  contactPageHeader.textContent = "Our contacts";

  div.append(contactsDiv);
  contactsDiv.append(contactPageHeader);

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

  contactsDiv.append(googleMapsDiv);
  // Include the restaurant's location on google maps
  googleMapsDiv.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10242.099372781275!2d14.4491928!3d50.0764597!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b952dd75b0a99%3A0xdc8cf0713ab074d4!2zVGhlIEJvcsWhxI0!5e0!3m2!1sen!2scz!4v1687430606279!5m2!1sen!2scz" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
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
/* harmony import */ var _src_images_exterior_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/exterior.jpeg */ "./src/images/exterior.jpeg");
/* harmony import */ var _src_images_interior_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/interior.jpg */ "./src/images/interior.jpg");
/* harmony import */ var _src_images_counter_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/counter.jpg */ "./src/images/counter.jpg");
/* harmony import */ var _src_images_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/logo.jpg */ "./src/images/logo.jpg");




// Load a favicon for a page to use in an index html file


// Section where tab browsering works
function renderNonChangeableElements() {
  const div = document.createElement("div");
  div.classList.add("top-section");
  document.body.prepend(div);

  // Create 3 'tabs' for tab browsering
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
    div.append(btn);
  }

  // Footer for all three tabs
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

// Section where all initial content is shown
function renderHomePage(div) {
  // Create elements
  const middleSectionDiv = document.createElement("div");
  const restaurantImagesDiv = document.createElement("div");
  const textSideDiv = document.createElement("div");
  const heroTitleHeader = document.createElement("h1");
  const additionToHeroTitleHeader = document.createElement("h3");
  const restaurantStoryPara = document.createElement("p");
  const catchyTextHeader = document.createElement("h3");
  const tableWithSchedule = document.createElement("table");
  const tableHeader = document.createElement("th");
  const addressInfoHeader = document.createElement("h3");

  // Classes
  middleSectionDiv.classList.add("home-section");
  textSideDiv.classList.add("text");
  restaurantImagesDiv.classList.add("images");

  // Text content
  heroTitleHeader.textContent = "The Borsch";
  additionToHeroTitleHeader.textContent =
    "A place to return to for the best Ukrainian borsch in Prague!";
  restaurantStoryPara.textContent =
    " Our cozy restaurant was opened back in 2021. As our main mission we saw the need to spread the word about the Ukrainian culture abroad and one of its biggest achievements - soup called borsch. Some people say it's just tasty soup, but we think there is more to it. The history, the symbol of true identity and the strongest nation.";
  catchyTextHeader.textContent = `If that sounds interesting to you, please consider stopping by for a bowl of our special Ukrainian elixir !
    P.S. we also have other delicious Ukrainian tratidional food to try:D
    `;
  tableHeader.textContent = "We are open:";
  addressInfoHeader.textContent =
    "Our Address: U Vodarny 10, 130 00 Prague 3 - Vinohrady";

  // Append elements
  div.append(middleSectionDiv);
  middleSectionDiv.append(textSideDiv, restaurantImagesDiv);
  tableWithSchedule.append(tableHeader);

  textSideDiv.append(
    heroTitleHeader,
    additionToHeroTitleHeader,
    restaurantStoryPara,
    catchyTextHeader,
    tableWithSchedule,
    addressInfoHeader
  );

  // Create img elements to show the restaurant's pictures
  for (let i = 0; i < 3; i++) {
    const img = document.createElement("img");
    // Images are loaded through webpack at the top
    img.src = i === 0 ? _src_images_exterior_jpeg__WEBPACK_IMPORTED_MODULE_0__ : i === 1 ? _src_images_interior_jpg__WEBPACK_IMPORTED_MODULE_1__ : _src_images_counter_jpg__WEBPACK_IMPORTED_MODULE_2__;
    img.alt =
      i === 0
        ? "Restaurant's exterior"
        : i === 1
        ? "Restaurant's interior"
        : "Bar counter in the restaurant";
    img.height = "350";
    img.width = "350";
    restaurantImagesDiv.append(img);
  }

  // Create a table with work hours for all 7 days
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
/* harmony import */ var _src_images_menu_beef_borsch_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/images/menu/beef borsch.jpg */ "./src/images/menu/beef borsch.jpg");
/* harmony import */ var _src_images_menu_Vegeterian_borsch_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/images/menu/Vegeterian borsch.png */ "./src/images/menu/Vegeterian borsch.png");
/* harmony import */ var _src_images_menu_Kyiv_cutlet_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/images/menu/Kyiv cutlet.png */ "./src/images/menu/Kyiv cutlet.png");
/* harmony import */ var _src_images_menu_Holubtsi_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/images/menu/Holubtsi.png */ "./src/images/menu/Holubtsi.png");
/* harmony import */ var _src_images_menu_Nalysnyky_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/images/menu/Nalysnyky.png */ "./src/images/menu/Nalysnyky.png");
/* harmony import */ var _src_images_menu_Varenyky_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/images/menu/Varenyky.png */ "./src/images/menu/Varenyky.png");
/* harmony import */ var _src_images_menu_Deruns_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/images/menu/Deruns.png */ "./src/images/menu/Deruns.png");
/* harmony import */ var _src_images_menu_Salo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/images/menu/Salo.png */ "./src/images/menu/Salo.png");
/* harmony import */ var _src_images_menu_Sweet_varenyky_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/images/menu/Sweet varenyky.png */ "./src/images/menu/Sweet varenyky.png");
/* harmony import */ var _src_images_menu_Cheesecakes_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/images/menu/Cheesecakes.png */ "./src/images/menu/Cheesecakes.png");












function renderMenu(div) {
  // Create html elements in DOM
  const menuDiv = document.createElement("div");
  const currentPageTitleHeader = document.createElement("h1");
  const soupTitleHeader = document.createElement("h2");
  const mainCoursesTitleHeader = document.createElement("h2");
  const dessertsTitleHeader = document.createElement("h2");
  const soupDiv = document.createElement("div");
  const mainCoursesDiv = document.createElement("div");
  const dessertsDiv = document.createElement("div");

  // Add class names to elements in DOM
  menuDiv.classList.add("menu-section");
  soupDiv.classList.add("soups");
  mainCoursesDiv.classList.add("main-courses");
  dessertsDiv.classList.add("desserts");

  // Add text to elements in DOM
  currentPageTitleHeader.textContent = "Our menu";
  soupTitleHeader.textContent = "Soups";
  mainCoursesTitleHeader.textContent = "Ukrainian specialities";
  dessertsTitleHeader.textContent = "Desserts";

  // Append DOM elements other DOM elements
  div.append(menuDiv);
  menuDiv.append(
    currentPageTitleHeader,
    soupTitleHeader,
    soupDiv,
    mainCoursesTitleHeader,
    mainCoursesDiv,
    dessertsTitleHeader,
    dessertsDiv
  );

  // Create divs with soup options
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("dish-block");
    for (let j = 0; j < 1; j++) {
      const header = document.createElement("h3");
      const para = document.createElement("p");
      const img = document.createElement("img");

      switch (i) {
        case 0:
          header.textContent = "Beef borsch 0.4l";
          para.textContent = "Price - 99Czk";
          img.src = _src_images_menu_beef_borsch_jpg__WEBPACK_IMPORTED_MODULE_0__;
          img.alt = "Beef borsch";
          break;
        case 1:
          header.textContent = "Vegetarian borsch with mushroom 0.4l";
          para.textContent = "Price - 99Czk";
          img.src = _src_images_menu_Vegeterian_borsch_png__WEBPACK_IMPORTED_MODULE_1__;
          img.alt = "Vegetarian borsch with mushroom";
          break;
      }
      div.append(header, para, img);
    }
    soupDiv.append(div);
  }

  // Create divs with main course options
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
        img.src = _src_images_menu_Kyiv_cutlet_png__WEBPACK_IMPORTED_MODULE_2__;
        img.alt = "Kyiv cutlet with mashed potatoes";
        break;
      case 1:
        header.textContent = "Holubtsi (cabbage rolls with meat)";
        para.textContent = "Price - 205Czk";
        img.src = _src_images_menu_Holubtsi_png__WEBPACK_IMPORTED_MODULE_3__;
        img.alt = "Holubtsi (cabbage rolls with meat)";
        break;
      case 2:
        header.textContent = "Nalysnyky stuffed with pork tongues";
        para.textContent = "Price - 180Czk";
        img.src = _src_images_menu_Nalysnyky_png__WEBPACK_IMPORTED_MODULE_4__;
        img.alt = "Nalysnyky stuffed with pork tongues";
        break;
      case 3:
        header.textContent = " Varenyky with potato filling";
        para.textContent = "Price - 110Czk";
        img.src = _src_images_menu_Varenyky_png__WEBPACK_IMPORTED_MODULE_5__;
        img.alt = "Varenyky with potato filling";
        break;
      case 4:
        header.textContent = "Deruns with sour cream and salad";
        para.textContent = "Price - 90Czk";
        img.src = _src_images_menu_Deruns_png__WEBPACK_IMPORTED_MODULE_6__;
        img.alt = "Deruns with sour cream and salad";
        break;
      case 5:
        header.textContent = "Salo with borsch (two types of lard)";
        para.textContent = "Price - 70Czk";
        img.src = _src_images_menu_Salo_png__WEBPACK_IMPORTED_MODULE_7__;
        img.alt = "Salo with borch (two types of lard)";
        break;
    }
    mainCoursesDiv.append(div);
  }

  // Create divs with desserts options
  for (let i = 0; i < 2; i++) {
    const div = document.createElement("div");
    div.classList.add("dish-block");
    const para = document.createElement("p");
    const header = document.createElement("h3");
    const img = document.createElement("img");
    div.append(header, para, img);

    switch (i) {
      case 0:
        header.textContent = "Varenyky with sour cherries";
        para.textContent = "Price - 120Czk";
        img.src = _src_images_menu_Sweet_varenyky_png__WEBPACK_IMPORTED_MODULE_8__;
        img.alt = "Varenyky with sour cherries";
        img.break;
      case 1:
        header.textContent = "Cottage cheese pancakes";
        para.textContent = "Price - 115Czk";
        img.src = _src_images_menu_Cheesecakes_png__WEBPACK_IMPORTED_MODULE_9__;
        img.alt = "Cottage cheese pancakes";
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

/***/ }),

/***/ "./src/images/counter.jpg":
/*!********************************!*\
  !*** ./src/images/counter.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f49408fd0ac6e496c07f.jpg";

/***/ }),

/***/ "./src/images/exterior.jpeg":
/*!**********************************!*\
  !*** ./src/images/exterior.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "732f713853fb6bb45363.jpeg";

/***/ }),

/***/ "./src/images/interior.jpg":
/*!*********************************!*\
  !*** ./src/images/interior.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59faaeab767724c60b86.jpg";

/***/ }),

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f865ff67e43a7cf1a24c.jpg";

/***/ }),

/***/ "./src/images/menu/Cheesecakes.png":
/*!*****************************************!*\
  !*** ./src/images/menu/Cheesecakes.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf8452d97f38e31b3efb.png";

/***/ }),

/***/ "./src/images/menu/Deruns.png":
/*!************************************!*\
  !*** ./src/images/menu/Deruns.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ea5b7b36d4dd7e4ff6d.png";

/***/ }),

/***/ "./src/images/menu/Holubtsi.png":
/*!**************************************!*\
  !*** ./src/images/menu/Holubtsi.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "652537332b32b8504d2c.png";

/***/ }),

/***/ "./src/images/menu/Kyiv cutlet.png":
/*!*****************************************!*\
  !*** ./src/images/menu/Kyiv cutlet.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e626f3ca5acb755be58a.png";

/***/ }),

/***/ "./src/images/menu/Nalysnyky.png":
/*!***************************************!*\
  !*** ./src/images/menu/Nalysnyky.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce71a7abc0787af40b05.png";

/***/ }),

/***/ "./src/images/menu/Salo.png":
/*!**********************************!*\
  !*** ./src/images/menu/Salo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "146838119a6e8aff15d8.png";

/***/ }),

/***/ "./src/images/menu/Sweet varenyky.png":
/*!********************************************!*\
  !*** ./src/images/menu/Sweet varenyky.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "080185a0b3e07fb69b8d.png";

/***/ }),

/***/ "./src/images/menu/Varenyky.png":
/*!**************************************!*\
  !*** ./src/images/menu/Varenyky.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "784916c9971090236ab0.png";

/***/ }),

/***/ "./src/images/menu/Vegeterian borsch.png":
/*!***********************************************!*\
  !*** ./src/images/menu/Vegeterian borsch.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37db00d5460ae812f24e.png";

/***/ }),

/***/ "./src/images/menu/beef borsch.jpg":
/*!*****************************************!*\
  !*** ./src/images/menu/beef borsch.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b73c95d786640f93960f.jpg";

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



// Load css with webpack


const divContent = document.body.querySelector("#content");
// Render initial page
(0,_initial_page__WEBPACK_IMPORTED_MODULE_0__.renderNonChangeableElements)();
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxNQUFNLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGNBQWMsTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxXQUFXLFVBQVUsV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLGNBQWMsTUFBTSxVQUFVLFlBQVksTUFBTSxLQUFLLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGNB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RTtBQUNwQztBQUNPO0FBQ2hEO0FBQ3FCOztBQUVyQjtBQUNBO0FBQ0EsMEVBQTJCO0FBQzNCLDZEQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBYztBQUNoQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBVTtBQUNaO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFjO0FBQ2hCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL3NyYy9pbml0aWFsLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL3NyYy9tZW51LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1MaWdodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDdXN0b20tZm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkN1c3RvbS1mb250XCI7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnIgNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzZWFncmVlbjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLyogYSBzZWN0aW9uIHdpdGggdGhlIHRhYiBicm93c2VyaW5nICovXG4udG9wLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NjBweCkge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLyogdXNlIG5hdGl2ZSBjc3MgbmVzdGluZyAqL1xuICAmIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDYsIDE5OCwgMTg0KTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgfVxuICB9XG59XG5cbi8qIGZvb3RlciAqL1xuI2Zvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcblxuICAmIHAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbiAgfVxufVxuXG4vKiBzdHlsZXMgZm9yIHRoZSBob21lIHBhZ2UgKi9cbi5ob21lLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDMwcHg7XG4gIHBhZGRpbmc6IDUwcHggODBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICB9XG5cbiAgJiAuaW1hZ2VzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDM1MHB4KTtcbiAgICBnYXA6IDMwcHg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAyOTBweCk7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgICYgaW1nIHtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgLnRleHQge1xuICAgICYgaDEge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggOHB4IHB1cnBsZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICYgKyBoMyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxuICAgICAgJiArIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiB0YWJsZSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xuXG4gICAgICAmIHRoIHtcbiAgICAgICAgY29sb3I6IHB1cnBsZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG5cbiAgICAgICYgKyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIGFkZCBzdHlsZXMgdG8gdGhlIG1lbnUgcGFnZSAqL1xuLm1lbnUtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDMwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgcGFkZGluZzogMzBweCAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAmIGgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cblxuICAmIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgfVxuICB9XG5cbiAgJiAuc291cHMsXG4gICYgLm1haW4tY291cnNlcyxcbiAgJiAuZGVzc2VydHMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNDBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgICBnYXA6IDA7XG4gICAgfVxuICB9XG5cbiAgLyogZm9yIGFsbCBkaXNoIGNhcmRzICovXG4gICYgLmRpc2gtYmxvY2sge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICB3aWR0aDogMzAwcHg7XG4gICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIH1cblxuICAgICYgaW1nIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGhlaWdodDogMzAwcHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoaW1nKSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gIH1cbn1cblxuLyogYWxsIHN0eWxlcyB0byB0aGUgY29udGFjdCBwYWdlICovXG4uY29udGFjdC1zZWN0aW9uIHtcbiAgcGFkZGluZzogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICYgaDEge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBjb2xvcjogcHVycGxlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5cbiAgJiBoMyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxuXG4gICYgLmxvY2F0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgJiBpZnJhbWUge1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiwrREFBdUQ7QUFDekQ7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQiwwQkFBMEI7O0VBRTFCO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBLHNDQUFzQztBQUN0QztFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkI7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtFQUN4Qjs7RUFFQSwyQkFBMkI7RUFDM0I7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjs7SUFFakI7TUFDRSxlQUFlO01BQ2Ysb0NBQW9DO01BQ3BDLDBCQUEwQjtJQUM1Qjs7SUFFQTtNQUNFLHVCQUF1QjtNQUN2QixVQUFVO01BQ1Ysc0JBQXNCO0lBQ3hCO0VBQ0Y7QUFDRjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7RUFFdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7O0VBRVo7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUI7O0lBRWpCO01BQ0UsVUFBVTtNQUNWLDBCQUEwQjtJQUM1QjtFQUNGO0FBQ0Y7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsa0JBQWtCOztFQUVsQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QscUJBQXFCOztJQUVyQjtNQUNFLG9DQUFvQztNQUNwQyxTQUFTO01BQ1QsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsdUJBQXVCOztNQUV2QjtRQUNFLFlBQVk7UUFDWixhQUFhO01BQ2Y7SUFDRjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLCtCQUErQjtNQUMvQixtQkFBbUI7O01BRW5CO1FBQ0Usa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsbUJBQW1CO01BQ3JCO0lBQ0Y7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIsbUJBQW1COztNQUVuQjtRQUNFLGlCQUFpQjtNQUNuQjtJQUNGOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGlCQUFpQjs7TUFFakI7UUFDRSxhQUFhO1FBQ2IsMEJBQTBCO01BQzVCOztNQUVBO1FBQ0UsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixhQUFhO01BQ2Y7SUFDRjtFQUNGO0FBQ0Y7O0FBRUEsZ0NBQWdDO0FBQ2hDO0VBQ0UsYUFBYTs7RUFFYjtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLDBCQUEwQjs7SUFFMUI7TUFDRSxnQkFBZ0I7SUFDbEI7RUFDRjs7RUFFQTs7O0lBR0UsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxxQkFBcUI7SUFDckIsU0FBUzs7SUFFVDtNQUNFLDJEQUEyRDtNQUMzRCxNQUFNO0lBQ1I7RUFDRjs7RUFFQSx1QkFBdUI7RUFDdkI7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7O0lBRXBCO01BQ0UsWUFBWTtNQUNaLGFBQWE7SUFDZjs7SUFFQTtNQUNFLFlBQVk7TUFDWixhQUFhOztNQUViO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjtJQUNGOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtJQUNuQjtFQUNGO0FBQ0Y7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjs7RUFFbEI7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7O0lBRWhCO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0U7UUFDRSxZQUFZO1FBQ1osYUFBYTtNQUNmO0lBQ0Y7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDdXN0b20tZm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9Sb2JvdG8tTGlnaHQudHRmXFxcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3VzdG9tLWZvbnRcXFwiO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCAxZnIgNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHNlYWdyZWVuO1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbi8qIGEgc2VjdGlvbiB3aXRoIHRoZSB0YWIgYnJvd3NlcmluZyAqL1xcbi50b3Atc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAvKiB1c2UgbmF0aXZlIGNzcyBuZXN0aW5nICovXFxuICAmIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAxOTgsIDE4NCk7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG5cXG4gICAgJltkaXNhYmxlZF0ge1xcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgJiBwIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgdGhlIGhvbWUgcGFnZSAqL1xcbi5ob21lLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxuICBwYWRkaW5nOiA1MHB4IDgwcHg7XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgfVxcblxcbiAgJiAuaW1hZ2VzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDM1MHB4KTtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDI5MHB4KTtcXG4gICAgICBnYXA6IDIwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAmIGltZyB7XFxuICAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJiAudGV4dCB7XFxuICAgICYgaDEge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggOHB4IHB1cnBsZTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcbiAgICAgICYgKyBoMyB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuXFxuICAgICAgJiArIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmIHRhYmxlIHtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICBtYXJnaW46IDUwcHggYXV0bztcXG5cXG4gICAgICAmIHRoIHtcXG4gICAgICAgIGNvbG9yOiBwdXJwbGU7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiArIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6IHB1cnBsZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogYWRkIHN0eWxlcyB0byB0aGUgbWVudSBwYWdlICovXFxuLm1lbnUtc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAzMHB4O1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gICYgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHB1cnBsZTtcXG4gIH1cXG5cXG4gICYgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHB1cnBsZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYgLnNvdXBzLFxcbiAgJiAubWFpbi1jb3Vyc2VzLFxcbiAgJiAuZGVzc2VydHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDQwcHg7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICAgIGdhcDogMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLyogZm9yIGFsbCBkaXNoIGNhcmRzICovXFxuICAmIC5kaXNoLWJsb2NrIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgICYgaW1nIHtcXG4gICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgaGVpZ2h0OiAzMDBweDtcXG5cXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICY6bm90KGltZykge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBhbGwgc3R5bGVzIHRvIHRoZSBjb250YWN0IHBhZ2UgKi9cXG4uY29udGFjdC1zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAmIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gICYgaDMge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gICYgLmxvY2F0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICAmIGlmcmFtZSB7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IHJlbmRlckNvbnRhY3RzIH07XG5cbmZ1bmN0aW9uIHJlbmRlckNvbnRhY3RzKGRpdikge1xuICBjb25zdCBjb250YWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhY3RQYWdlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBnb29nbGVNYXBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWN0c0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1zZWN0aW9uXCIpO1xuICBnb29nbGVNYXBzRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgY29udGFjdFBhZ2VIZWFkZXIudGV4dENvbnRlbnQgPSBcIk91ciBjb250YWN0c1wiO1xuXG4gIGRpdi5hcHBlbmQoY29udGFjdHNEaXYpO1xuICBjb250YWN0c0Rpdi5hcHBlbmQoY29udGFjdFBhZ2VIZWFkZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiQWRkcmVzcyAtIFUgVm9kYXJueSAxMCwgVmlub2hyYWR5LCAxMzAgMDAgUHJhaGEtUHJhaGEgMywgQ3plY2hpYVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJQaG9uZSBudW1iZXIgLSArNDIwIDExMSAxMTEgMTExXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkVtYWlsIC0gdGhlYm9yc2NodEBnbWFpbC5jb21cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnRhY3RzRGl2LmFwcGVuZChoZWFkZXIpO1xuICB9XG5cbiAgY29udGFjdHNEaXYuYXBwZW5kKGdvb2dsZU1hcHNEaXYpO1xuICAvLyBJbmNsdWRlIHRoZSByZXN0YXVyYW50J3MgbG9jYXRpb24gb24gZ29vZ2xlIG1hcHNcbiAgZ29vZ2xlTWFwc0Rpdi5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTQhMW04ITFtMyExZDEwMjQyLjA5OTM3Mjc4MTI3NSEyZDE0LjQ0OTE5MjghM2Q1MC4wNzY0NTk3ITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDQ3MGI5NTJkZDc1YjBhOTklM0EweGRjOGNmMDcxM2FiMDc0ZDQhMnpWR2hsSUVKdmNzV2h4STAhNWUwITNtMiExc2VuITJzY3ohNHYxNjg3NDMwNjA2Mjc5ITVtMiExc2VuITJzY3pcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjMwMFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+YDtcbn1cbiIsImV4cG9ydCB7IHJlbmRlckhvbWVQYWdlLCByZW5kZXJOb25DaGFuZ2VhYmxlRWxlbWVudHMgfTtcbmltcG9ydCBpbWFnZU9uZSBmcm9tIFwiLi4vc3JjL2ltYWdlcy9leHRlcmlvci5qcGVnXCI7XG5pbXBvcnQgaW1hZ2VUd28gZnJvbSBcIi4uL3NyYy9pbWFnZXMvaW50ZXJpb3IuanBnXCI7XG5pbXBvcnQgaW1hZ2VUaHJlZSBmcm9tIFwiLi4vc3JjL2ltYWdlcy9jb3VudGVyLmpwZ1wiO1xuLy8gTG9hZCBhIGZhdmljb24gZm9yIGEgcGFnZSB0byB1c2UgaW4gYW4gaW5kZXggaHRtbCBmaWxlXG5pbXBvcnQgZmF2aWNvbiBmcm9tIFwiLi4vc3JjL2ltYWdlcy9sb2dvLmpwZ1wiO1xuXG4vLyBTZWN0aW9uIHdoZXJlIHRhYiBicm93c2VyaW5nIHdvcmtzXG5mdW5jdGlvbiByZW5kZXJOb25DaGFuZ2VhYmxlRWxlbWVudHMoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwidG9wLXNlY3Rpb25cIik7XG4gIGRvY3VtZW50LmJvZHkucHJlcGVuZChkaXYpO1xuXG4gIC8vIENyZWF0ZSAzICd0YWJzJyBmb3IgdGFiIGJyb3dzZXJpbmdcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGkgPT09IDAgPyBcIkhvbWVcIiA6IGkgPT09IDEgPyBcIk1lbnVcIiA6IFwiQ29udGFjdFwiO1xuXG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiSG9tZS1idG5cIik7XG4gICAgICAgIGJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIk1lbnUtYnRuXCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJDb250YWN0LWJ0blwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRpdi5hcHBlbmQoYnRuKTtcbiAgfVxuXG4gIC8vIEZvb3RlciBmb3IgYWxsIHRocmVlIHRhYnNcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb290ZXJcIik7XG4gIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLWxpbmtcIik7XG4gIGxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgbGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2lsZW5jZWluc3BhY2VcIjtcbiAgbGluay50ZXh0Q29udGVudCA9IFwiR2l0SHViIGFjY291bnRcIjtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb290ZXIpO1xuICBmb290ZXIuYXBwZW5kKHBhcmFncmFwaCk7XG4gIHBhcmFncmFwaC5hcHBlbmQobGluayk7XG59XG5cbi8vIFNlY3Rpb24gd2hlcmUgYWxsIGluaXRpYWwgY29udGVudCBpcyBzaG93blxuZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2UoZGl2KSB7XG4gIC8vIENyZWF0ZSBlbGVtZW50c1xuICBjb25zdCBtaWRkbGVTZWN0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcmVzdGF1cmFudEltYWdlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRleHRTaWRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVyb1RpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBhZGRpdGlvblRvSGVyb1RpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCByZXN0YXVyYW50U3RvcnlQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGNhdGNoeVRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhYmxlV2l0aFNjaGVkdWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuICBjb25zdCB0YWJsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgY29uc3QgYWRkcmVzc0luZm9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cbiAgLy8gQ2xhc3Nlc1xuICBtaWRkbGVTZWN0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJob21lLXNlY3Rpb25cIik7XG4gIHRleHRTaWRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuICByZXN0YXVyYW50SW1hZ2VzRGl2LmNsYXNzTGlzdC5hZGQoXCJpbWFnZXNcIik7XG5cbiAgLy8gVGV4dCBjb250ZW50XG4gIGhlcm9UaXRsZUhlYWRlci50ZXh0Q29udGVudCA9IFwiVGhlIEJvcnNjaFwiO1xuICBhZGRpdGlvblRvSGVyb1RpdGxlSGVhZGVyLnRleHRDb250ZW50ID1cbiAgICBcIkEgcGxhY2UgdG8gcmV0dXJuIHRvIGZvciB0aGUgYmVzdCBVa3JhaW5pYW4gYm9yc2NoIGluIFByYWd1ZSFcIjtcbiAgcmVzdGF1cmFudFN0b3J5UGFyYS50ZXh0Q29udGVudCA9XG4gICAgXCIgT3VyIGNvenkgcmVzdGF1cmFudCB3YXMgb3BlbmVkIGJhY2sgaW4gMjAyMS4gQXMgb3VyIG1haW4gbWlzc2lvbiB3ZSBzYXcgdGhlIG5lZWQgdG8gc3ByZWFkIHRoZSB3b3JkIGFib3V0IHRoZSBVa3JhaW5pYW4gY3VsdHVyZSBhYnJvYWQgYW5kIG9uZSBvZiBpdHMgYmlnZ2VzdCBhY2hpZXZlbWVudHMgLSBzb3VwIGNhbGxlZCBib3JzY2guIFNvbWUgcGVvcGxlIHNheSBpdCdzIGp1c3QgdGFzdHkgc291cCwgYnV0IHdlIHRoaW5rIHRoZXJlIGlzIG1vcmUgdG8gaXQuIFRoZSBoaXN0b3J5LCB0aGUgc3ltYm9sIG9mIHRydWUgaWRlbnRpdHkgYW5kIHRoZSBzdHJvbmdlc3QgbmF0aW9uLlwiO1xuICBjYXRjaHlUZXh0SGVhZGVyLnRleHRDb250ZW50ID0gYElmIHRoYXQgc291bmRzIGludGVyZXN0aW5nIHRvIHlvdSwgcGxlYXNlIGNvbnNpZGVyIHN0b3BwaW5nIGJ5IGZvciBhIGJvd2wgb2Ygb3VyIHNwZWNpYWwgVWtyYWluaWFuIGVsaXhpciAhXG4gICAgUC5TLiB3ZSBhbHNvIGhhdmUgb3RoZXIgZGVsaWNpb3VzIFVrcmFpbmlhbiB0cmF0aWRpb25hbCBmb29kIHRvIHRyeTpEXG4gICAgYDtcbiAgdGFibGVIZWFkZXIudGV4dENvbnRlbnQgPSBcIldlIGFyZSBvcGVuOlwiO1xuICBhZGRyZXNzSW5mb0hlYWRlci50ZXh0Q29udGVudCA9XG4gICAgXCJPdXIgQWRkcmVzczogVSBWb2Rhcm55IDEwLCAxMzAgMDAgUHJhZ3VlIDMgLSBWaW5vaHJhZHlcIjtcblxuICAvLyBBcHBlbmQgZWxlbWVudHNcbiAgZGl2LmFwcGVuZChtaWRkbGVTZWN0aW9uRGl2KTtcbiAgbWlkZGxlU2VjdGlvbkRpdi5hcHBlbmQodGV4dFNpZGVEaXYsIHJlc3RhdXJhbnRJbWFnZXNEaXYpO1xuICB0YWJsZVdpdGhTY2hlZHVsZS5hcHBlbmQodGFibGVIZWFkZXIpO1xuXG4gIHRleHRTaWRlRGl2LmFwcGVuZChcbiAgICBoZXJvVGl0bGVIZWFkZXIsXG4gICAgYWRkaXRpb25Ub0hlcm9UaXRsZUhlYWRlcixcbiAgICByZXN0YXVyYW50U3RvcnlQYXJhLFxuICAgIGNhdGNoeVRleHRIZWFkZXIsXG4gICAgdGFibGVXaXRoU2NoZWR1bGUsXG4gICAgYWRkcmVzc0luZm9IZWFkZXJcbiAgKTtcblxuICAvLyBDcmVhdGUgaW1nIGVsZW1lbnRzIHRvIHNob3cgdGhlIHJlc3RhdXJhbnQncyBwaWN0dXJlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgLy8gSW1hZ2VzIGFyZSBsb2FkZWQgdGhyb3VnaCB3ZWJwYWNrIGF0IHRoZSB0b3BcbiAgICBpbWcuc3JjID0gaSA9PT0gMCA/IGltYWdlT25lIDogaSA9PT0gMSA/IGltYWdlVHdvIDogaW1hZ2VUaHJlZTtcbiAgICBpbWcuYWx0ID1cbiAgICAgIGkgPT09IDBcbiAgICAgICAgPyBcIlJlc3RhdXJhbnQncyBleHRlcmlvclwiXG4gICAgICAgIDogaSA9PT0gMVxuICAgICAgICA/IFwiUmVzdGF1cmFudCdzIGludGVyaW9yXCJcbiAgICAgICAgOiBcIkJhciBjb3VudGVyIGluIHRoZSByZXN0YXVyYW50XCI7XG4gICAgaW1nLmhlaWdodCA9IFwiMzUwXCI7XG4gICAgaW1nLndpZHRoID0gXCIzNTBcIjtcbiAgICByZXN0YXVyYW50SW1hZ2VzRGl2LmFwcGVuZChpbWcpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGEgdGFibGUgd2l0aCB3b3JrIGhvdXJzIGZvciBhbGwgNyBkYXlzXG4gIHRhYmxlSGVhZGVyLmNvbFNwYW4gPSBcIjJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBjb25zdCB0YWJsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDI7IGorKykge1xuICAgICAgY29uc3QgdGFibGVEYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgaWYgKGogPT09IDEgJiYgaSA8IDUpIHtcbiAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCIxMTowMC0xOTowMFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaiA9PT0gMCkge1xuICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIk1vbmRheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCJUdWVzZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCJUaHVyc2RheVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdGFibGVEYXRhLnRleHRDb250ZW50ID0gXCJGcmlkYXlcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaSA9PT0gNSkge1xuICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBqID09PSAwID8gXCJTYXR1cmRheVwiIDogXCIxMTowMC0xODowMFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaSA9PT0gNikge1xuICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBqID09PSAwID8gXCJTdW5kYXlcIiA6IFwiQ2xvc2VkXCI7XG4gICAgICB9XG5cbiAgICAgIHRhYmxlUm93LmFwcGVuZCh0YWJsZURhdGEpO1xuICAgIH1cbiAgICB0YWJsZVdpdGhTY2hlZHVsZS5hcHBlbmQodGFibGVSb3cpO1xuICB9XG59XG4iLCJleHBvcnQgeyByZW5kZXJNZW51IH07XG5pbXBvcnQgaW1hZ2VPbmUgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9iZWVmIGJvcnNjaC5qcGdcIjtcbmltcG9ydCBpbWFnZVR3byBmcm9tIFwiLi4vc3JjL2ltYWdlcy9tZW51L1ZlZ2V0ZXJpYW4gYm9yc2NoLnBuZ1wiO1xuaW1wb3J0IGltYWdlVGhyZWUgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9LeWl2IGN1dGxldC5wbmdcIjtcbmltcG9ydCBpbWFnZUZvdXIgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9Ib2x1YnRzaS5wbmdcIjtcbmltcG9ydCBpbWFnZUZpdmUgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9OYWx5c255a3kucG5nXCI7XG5pbXBvcnQgaW1hZ2VTaXggZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9WYXJlbnlreS5wbmdcIjtcbmltcG9ydCBpbWFnZVNldmVuIGZyb20gXCIuLi9zcmMvaW1hZ2VzL21lbnUvRGVydW5zLnBuZ1wiO1xuaW1wb3J0IGltYWdlRWlnaHQgZnJvbSBcIi4uL3NyYy9pbWFnZXMvbWVudS9TYWxvLnBuZ1wiO1xuaW1wb3J0IGltYWdlTmluZSBmcm9tIFwiLi4vc3JjL2ltYWdlcy9tZW51L1N3ZWV0IHZhcmVueWt5LnBuZ1wiO1xuaW1wb3J0IGltYWdlVGVuIGZyb20gXCIuLi9zcmMvaW1hZ2VzL21lbnUvQ2hlZXNlY2FrZXMucG5nXCI7XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnUoZGl2KSB7XG4gIC8vIENyZWF0ZSBodG1sIGVsZW1lbnRzIGluIERPTVxuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3VycmVudFBhZ2VUaXRsZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3Qgc291cFRpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBtYWluQ291cnNlc1RpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBkZXNzZXJ0c1RpdGxlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBzb3VwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbkNvdXJzZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gQWRkIGNsYXNzIG5hbWVzIHRvIGVsZW1lbnRzIGluIERPTVxuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlY3Rpb25cIik7XG4gIHNvdXBEaXYuY2xhc3NMaXN0LmFkZChcInNvdXBzXCIpO1xuICBtYWluQ291cnNlc0Rpdi5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb3Vyc2VzXCIpO1xuICBkZXNzZXJ0c0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGVzc2VydHNcIik7XG5cbiAgLy8gQWRkIHRleHQgdG8gZWxlbWVudHMgaW4gRE9NXG4gIGN1cnJlbnRQYWdlVGl0bGVIZWFkZXIudGV4dENvbnRlbnQgPSBcIk91ciBtZW51XCI7XG4gIHNvdXBUaXRsZUhlYWRlci50ZXh0Q29udGVudCA9IFwiU291cHNcIjtcbiAgbWFpbkNvdXJzZXNUaXRsZUhlYWRlci50ZXh0Q29udGVudCA9IFwiVWtyYWluaWFuIHNwZWNpYWxpdGllc1wiO1xuICBkZXNzZXJ0c1RpdGxlSGVhZGVyLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0c1wiO1xuXG4gIC8vIEFwcGVuZCBET00gZWxlbWVudHMgb3RoZXIgRE9NIGVsZW1lbnRzXG4gIGRpdi5hcHBlbmQobWVudURpdik7XG4gIG1lbnVEaXYuYXBwZW5kKFxuICAgIGN1cnJlbnRQYWdlVGl0bGVIZWFkZXIsXG4gICAgc291cFRpdGxlSGVhZGVyLFxuICAgIHNvdXBEaXYsXG4gICAgbWFpbkNvdXJzZXNUaXRsZUhlYWRlcixcbiAgICBtYWluQ291cnNlc0RpdixcbiAgICBkZXNzZXJ0c1RpdGxlSGVhZGVyLFxuICAgIGRlc3NlcnRzRGl2XG4gICk7XG5cbiAgLy8gQ3JlYXRlIGRpdnMgd2l0aCBzb3VwIG9wdGlvbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZGlzaC1ibG9ja1wiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDE7IGorKykge1xuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJlZWYgYm9yc2NoIDAuNGxcIjtcbiAgICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDk5Q3prXCI7XG4gICAgICAgICAgaW1nLnNyYyA9IGltYWdlT25lO1xuICAgICAgICAgIGltZy5hbHQgPSBcIkJlZWYgYm9yc2NoXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlZlZ2V0YXJpYW4gYm9yc2NoIHdpdGggbXVzaHJvb20gMC40bFwiO1xuICAgICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlByaWNlIC0gOTlDemtcIjtcbiAgICAgICAgICBpbWcuc3JjID0gaW1hZ2VUd287XG4gICAgICAgICAgaW1nLmFsdCA9IFwiVmVnZXRhcmlhbiBib3JzY2ggd2l0aCBtdXNocm9vbVwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGl2LmFwcGVuZChoZWFkZXIsIHBhcmEsIGltZyk7XG4gICAgfVxuICAgIHNvdXBEaXYuYXBwZW5kKGRpdik7XG4gIH1cblxuICAvLyBDcmVhdGUgZGl2cyB3aXRoIG1haW4gY291cnNlIG9wdGlvbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZGlzaC1ibG9ja1wiKTtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGl2LmFwcGVuZChoZWFkZXIsIHBhcmEsIGltZyk7XG5cbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJLeWl2IGN1dGxldCB3aXRoIG1hc2hlZCBwb3RhdG9lc1wiO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDI0NUN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gaW1hZ2VUaHJlZTtcbiAgICAgICAgaW1nLmFsdCA9IFwiS3lpdiBjdXRsZXQgd2l0aCBtYXNoZWQgcG90YXRvZXNcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiSG9sdWJ0c2kgKGNhYmJhZ2Ugcm9sbHMgd2l0aCBtZWF0KVwiO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDIwNUN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gaW1hZ2VGb3VyO1xuICAgICAgICBpbWcuYWx0ID0gXCJIb2x1YnRzaSAoY2FiYmFnZSByb2xscyB3aXRoIG1lYXQpXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk5hbHlzbnlreSBzdHVmZmVkIHdpdGggcG9yayB0b25ndWVzXCI7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlByaWNlIC0gMTgwQ3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZUZpdmU7XG4gICAgICAgIGltZy5hbHQgPSBcIk5hbHlzbnlreSBzdHVmZmVkIHdpdGggcG9yayB0b25ndWVzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIiBWYXJlbnlreSB3aXRoIHBvdGF0byBmaWxsaW5nXCI7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlByaWNlIC0gMTEwQ3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZVNpeDtcbiAgICAgICAgaW1nLmFsdCA9IFwiVmFyZW55a3kgd2l0aCBwb3RhdG8gZmlsbGluZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJEZXJ1bnMgd2l0aCBzb3VyIGNyZWFtIGFuZCBzYWxhZFwiO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDkwQ3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZVNldmVuO1xuICAgICAgICBpbWcuYWx0ID0gXCJEZXJ1bnMgd2l0aCBzb3VyIGNyZWFtIGFuZCBzYWxhZFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTYWxvIHdpdGggYm9yc2NoICh0d28gdHlwZXMgb2YgbGFyZClcIjtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IFwiUHJpY2UgLSA3MEN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gaW1hZ2VFaWdodDtcbiAgICAgICAgaW1nLmFsdCA9IFwiU2FsbyB3aXRoIGJvcmNoICh0d28gdHlwZXMgb2YgbGFyZClcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG1haW5Db3Vyc2VzRGl2LmFwcGVuZChkaXYpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIGRpdnMgd2l0aCBkZXNzZXJ0cyBvcHRpb25zXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRpc2gtYmxvY2tcIik7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRpdi5hcHBlbmQoaGVhZGVyLCBwYXJhLCBpbWcpO1xuXG4gICAgc3dpdGNoIChpKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVmFyZW55a3kgd2l0aCBzb3VyIGNoZXJyaWVzXCI7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlByaWNlIC0gMTIwQ3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZU5pbmU7XG4gICAgICAgIGltZy5hbHQgPSBcIlZhcmVueWt5IHdpdGggc291ciBjaGVycmllc1wiO1xuICAgICAgICBpbWcuYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ290dGFnZSBjaGVlc2UgcGFuY2FrZXNcIjtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IFwiUHJpY2UgLSAxMTVDemtcIjtcbiAgICAgICAgaW1nLnNyYyA9IGltYWdlVGVuO1xuICAgICAgICBpbWcuYWx0ID0gXCJDb3R0YWdlIGNoZWVzZSBwYW5jYWtlc1wiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZGVzc2VydHNEaXYuYXBwZW5kKGRpdik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcmVuZGVySG9tZVBhZ2UsIHJlbmRlck5vbkNoYW5nZWFibGVFbGVtZW50cyB9IGZyb20gXCIuL2luaXRpYWwtcGFnZVwiO1xuaW1wb3J0IHsgcmVuZGVyTWVudSB9IGZyb20gXCIuL21lbnUtcGFnZVwiO1xuaW1wb3J0IHsgcmVuZGVyQ29udGFjdHMgfSBmcm9tIFwiLi9jb250YWN0LXBhZ2VcIjtcbi8vIExvYWQgY3NzIHdpdGggd2VicGFja1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuLy8gUmVuZGVyIGluaXRpYWwgcGFnZVxucmVuZGVyTm9uQ2hhbmdlYWJsZUVsZW1lbnRzKCk7XG5yZW5kZXJIb21lUGFnZShkaXZDb250ZW50KTtcblxuZnVuY3Rpb24gbWFrZUN1cnJlbnRUYWJVbmNraWNrYWJsZShmaXJzdFRhYiwgc2Vjb25kVGFiLCB0aGlyZFRhYikge1xuICBob21lVGFiLmRpc2FibGVkID0gZmlyc3RUYWI7XG4gIG1lbnVUYWIuZGlzYWJsZWQgPSBzZWNvbmRUYWI7XG4gIGNvbnRhY3RUYWIuZGlzYWJsZWQgPSB0aGlyZFRhYjtcbn1cblxuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuSG9tZS1idG5cIik7XG5ob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpdkNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHJlbmRlckhvbWVQYWdlKGRpdkNvbnRlbnQpO1xuICBtYWtlQ3VycmVudFRhYlVuY2tpY2thYmxlKHRydWUsIGZhbHNlLCBmYWxzZSk7XG59KTtcblxuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuTWVudS1idG5cIik7XG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpdkNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHJlbmRlck1lbnUoZGl2Q29udGVudCk7XG4gIG1ha2VDdXJyZW50VGFiVW5ja2lja2FibGUoZmFsc2UsIHRydWUsIGZhbHNlKTtcbn0pO1xuXG5jb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Db250YWN0LWJ0blwiKTtcbmNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGl2Q29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgcmVuZGVyQ29udGFjdHMoZGl2Q29udGVudCk7XG4gIG1ha2VDdXJyZW50VGFiVW5ja2lja2FibGUoZmFsc2UsIGZhbHNlLCB0cnVlKTtcbn0pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=