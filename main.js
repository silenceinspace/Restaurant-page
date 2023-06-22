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
  background-color:seagreen;

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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"Custom-font\";\n  src: url(\"./fonts/Roboto-Light.ttf\") format(\"truetype\");\n}\n\nhtml {\n  font-family: \"Custom-font\";\n  font-size: 100%;\n  color: white;\n  min-height: 100vh;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 80px 1fr 50px;\n  position: relative;\n  background-color:seagreen;\n\n  @media (max-width: 660px) {\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n/* a section with the tab browsering */\n.top-section {\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: center;\n\n  @media (max-width: 660px) {\n    margin-top: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  /* use native css nesting */\n  & button {\n    width: 150px;\n    padding: 10px;\n    border: none;\n    border-radius: 10px;\n    background-color: white;\n\n    font-size: 2rem;\n    color: purple;\n    font-weight: bold;\n\n    &:hover:not([disabled]) {\n      cursor: pointer;\n      background-color: rgb(206, 198, 184);\n      text-decoration: underline;\n    }\n\n    &[disabled] {\n      border: 4px solid black;\n      color: red;\n      background-color: grey;\n    }\n  }\n}\n\n/* footer */\n#footer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: black;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n\n  & p a {\n    text-decoration: none;\n    color: white;\n    font-size: 1.3rem;\n    font-weight: bold;\n\n    &:hover {\n      color: red;\n      text-decoration: underline;\n    }\n  }\n}\n\n/* styles for the home page */\n.home-section {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 30px;\n  padding: 50px 80px;\n\n  @media (max-width: 800px) {\n    display: flex;\n    flex-direction: column;\n  }\n\n  @media (max-width: 600px) {\n    padding: 30px;\n  }\n\n  & .images {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3, 350px);\n    gap: 30px;\n    justify-items: center;\n\n    @media (max-width: 600px) {\n      grid-template-rows: repeat(3, 290px);\n      gap: 20px;\n      margin-top: 20px;\n    }\n\n    & img {\n      border: 3px solid white;\n\n      @media (max-width: 600px) {\n        width: 250px;\n        height: 250px;\n      }\n    }\n  }\n\n  & .text {\n    & h1 {\n      text-align: center;\n      font-size: 3rem;\n      text-shadow: 5px 5px 8px purple;\n      margin-bottom: 20px;\n\n      & + h3 {\n        text-align: center;\n        font-style: italic;\n        font-size: 2rem;\n        margin-bottom: 50px;\n      }\n    }\n\n    & p {\n      font-size: 1.5rem;\n      margin-bottom: 40px;\n\n      & + h3 {\n        font-size: 1.5rem;\n      }\n    }\n\n    & table {\n      font-size: 1.5rem;\n      margin: 50px auto;\n\n      & th {\n        color: purple;\n        text-decoration: underline;\n      }\n\n      & + h3 {\n        font-size: 1.5rem;\n        text-align: center;\n        color: purple;\n      }\n    }\n  }\n}\n\n/* add styles to the menu page */\n.menu-section {\n  padding: 30px;\n\n  @media (max-width: 500px) {\n    padding: 30px 15px;\n    margin-bottom: 20px;\n  }\n\n  & h1 {\n    font-size: 3rem;\n    text-align: center;\n  }\n\n  & h2 {\n    text-align: center;\n    font-size: 2rem;\n    color: purple;\n    text-decoration: underline;\n\n    @media (max-width: 500px) {\n      margin-top: 25px;\n    }\n  }\n\n  & .soups,\n  & .main-courses,\n  & .desserts {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    justify-items: center;\n    gap: 40px;\n\n    @media (max-width: 500px) {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n      gap: 0;\n    }\n  }\n\n  /* for all dish cards */\n  & .dish-block {\n    width: 400px;\n    height: 400px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n\n    @media (max-width: 500px) {\n      width: 300px;\n      height: 300px;\n    }\n\n    & img {\n      width: 300px;\n      height: 300px;\n\n      @media (max-width: 500px) {\n        width: 200px;\n        height: 200px;\n      }\n    }\n\n    &:not(img) {\n      text-align: center;\n      font-size: 1.2rem;\n    }\n  }\n}\n\n/* all styles to the contact page */\n.contact-section {\n  padding: 50px;\n  text-align: center;\n\n  & h1 {\n    font-size: 3rem;\n    color: purple;\n    text-decoration: underline;\n  }\n\n  & h3 {\n    margin-top: 30px;\n    font-size: 1.5rem;\n  }\n\n  & .location {\n    margin-top: 25px;\n\n    @media (max-width: 660px) {\n      margin-bottom: 25px;\n    }\n\n    @media (max-width: 500px) {\n      & iframe {\n        width: 250px;\n        height: 150px;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZIQUEyQztBQUN2Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxjQUFjLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsVUFBVSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxjQUFjLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxjQUFjLE1B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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa1VBQWtVO0FBQ2xVOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEN1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hKc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuSUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQTZFO0FBQ3BDO0FBQ087QUFDaEQ7QUFDcUI7O0FBRXJCOztBQUVBLDBFQUEyQjtBQUMzQjtBQUNBLDZEQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBYztBQUNoQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBVTtBQUNaO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFjO0FBQ2hCO0FBQ0EsQ0FBQzs7Ozs7Ozs7O0FBU0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vc3JjL2luaXRpYWwtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdHJhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0cmF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RyYXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkN1c3RvbS1mb250XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xufVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IFwiQ3VzdG9tLWZvbnRcIjtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDFmciA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6c2VhZ3JlZW47XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi8qIGEgc2VjdGlvbiB3aXRoIHRoZSB0YWIgYnJvd3NlcmluZyAqL1xuLnRvcC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC8qIHVzZSBuYXRpdmUgY3NzIG5lc3RpbmcgKi9cbiAgJiBidXR0b24ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAxOTgsIDE4NCk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIH1cbiAgfVxufVxuXG4vKiBmb290ZXIgKi9cbiNmb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG5cbiAgJiBwIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbn1cblxuLyogc3R5bGVzIGZvciB0aGUgaG9tZSBwYWdlICovXG4uaG9tZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBjb2x1bW4tZ2FwOiAzMHB4O1xuICBwYWRkaW5nOiA1MHB4IDgwcHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuXG4gICYgLmltYWdlcyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAzNTBweCk7XG4gICAgZ2FwOiAzMHB4O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMjkwcHgpO1xuICAgICAgZ2FwOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAmIGltZyB7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmIC50ZXh0IHtcbiAgICAmIGgxIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4IDhweCBwdXJwbGU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAmICsgaDMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYgcCB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgICAgICYgKyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgICYgdGFibGUge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBtYXJnaW46IDUwcHggYXV0bztcblxuICAgICAgJiB0aCB7XG4gICAgICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgfVxuXG4gICAgICAmICsgaDMge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogcHVycGxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiBhZGQgc3R5bGVzIHRvIHRoZSBtZW51IHBhZ2UgKi9cbi5tZW51LXNlY3Rpb24ge1xuICBwYWRkaW5nOiAzMHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgJiBoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICYgaDIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB9XG4gIH1cblxuICAmIC5zb3VwcyxcbiAgJiAubWFpbi1jb3Vyc2VzLFxuICAmIC5kZXNzZXJ0cyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0MHB4O1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgIGdhcDogMDtcbiAgICB9XG4gIH1cblxuICAvKiBmb3IgYWxsIGRpc2ggY2FyZHMgKi9cbiAgJiAuZGlzaC1ibG9jayB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgfVxuXG4gICAgJiBpbWcge1xuICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgaGVpZ2h0OiAzMDBweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdChpbWcpIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbiAgfVxufVxuXG4vKiBhbGwgc3R5bGVzIHRvIHRoZSBjb250YWN0IHBhZ2UgKi9cbi5jb250YWN0LXNlY3Rpb24ge1xuICBwYWRkaW5nOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgJiBoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cblxuICAmIGgzIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5cbiAgJiAubG9jYXRpb24ge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjYwcHgpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAmIGlmcmFtZSB7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLCtEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7RUFFekI7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUEsc0NBQXNDO0FB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QWE7TUFDZjtJQUNGO0VBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3VzdG9tLWZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogXFxcIkN1c3RvbS1mb250XFxcIjtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggMWZyIDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOnNlYWdyZWVuO1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVxcblxcbi8qIGEgc2VjdGlvbiB3aXRoIHRoZSB0YWIgYnJvd3NlcmluZyAqL1xcbi50b3Atc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAvKiB1c2UgbmF0aXZlIGNzcyBuZXN0aW5nICovXFxuICAmIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG5cXG4gICAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA2LCAxOTgsIDE4NCk7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIH1cXG5cXG4gICAgJltkaXNhYmxlZF0ge1xcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIGNvbG9yOiByZWQ7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG4jZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgJiBwIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjb2xvcjogcmVkO1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8qIHN0eWxlcyBmb3IgdGhlIGhvbWUgcGFnZSAqL1xcbi5ob21lLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGNvbHVtbi1nYXA6IDMwcHg7XFxuICBwYWRkaW5nOiA1MHB4IDgwcHg7XFxuXFxuICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgfVxcblxcbiAgJiAuaW1hZ2VzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDM1MHB4KTtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDI5MHB4KTtcXG4gICAgICBnYXA6IDIwcHg7XFxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgfVxcblxcbiAgICAmIGltZyB7XFxuICAgICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuXFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgJiAudGV4dCB7XFxuICAgICYgaDEge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDNyZW07XFxuICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggOHB4IHB1cnBsZTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcbiAgICAgICYgKyBoMyB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuXFxuICAgICAgJiArIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmIHRhYmxlIHtcXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICBtYXJnaW46IDUwcHggYXV0bztcXG5cXG4gICAgICAmIHRoIHtcXG4gICAgICAgIGNvbG9yOiBwdXJwbGU7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICB9XFxuXFxuICAgICAgJiArIGgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6IHB1cnBsZTtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLyogYWRkIHN0eWxlcyB0byB0aGUgbWVudSBwYWdlICovXFxuLm1lbnUtc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAzMHB4O1xcblxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIH1cXG5cXG4gICYgaDEge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gICYgaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6IHB1cnBsZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gICYgLnNvdXBzLFxcbiAgJiAubWFpbi1jb3Vyc2VzLFxcbiAgJiAuZGVzc2VydHMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDQwcHg7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICAgIGdhcDogMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLyogZm9yIGFsbCBkaXNoIGNhcmRzICovXFxuICAmIC5kaXNoLWJsb2NrIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XFxuXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB9XFxuXFxuICAgICYgaW1nIHtcXG4gICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgaGVpZ2h0OiAzMDBweDtcXG5cXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgICY6bm90KGltZykge1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4vKiBhbGwgc3R5bGVzIHRvIHRoZSBjb250YWN0IHBhZ2UgKi9cXG4uY29udGFjdC1zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAmIGgxIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG5cXG4gICYgaDMge1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gIH1cXG5cXG4gICYgLmxvY2F0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG5cXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2MHB4KSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgfVxcblxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgICAmIGlmcmFtZSB7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCB7IHJlbmRlckNvbnRhY3RzIH07XG5cbmZ1bmN0aW9uIHJlbmRlckNvbnRhY3RzKGRpdikge1xuICBjb25zdCBjb250YWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhZ2VIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGRpdkdvb2dsZU1hcHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGNvbnRhY3RzRGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LXNlY3Rpb25cIik7XG4gIGRpdkdvb2dsZU1hcHMuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuICBwYWdlSGVhZGVyLnRleHRDb250ZW50ID0gXCJPdXIgY29udGFjdHNcIjtcblxuICBkaXYuYXBwZW5kKGNvbnRhY3RzRGl2KTtcbiAgY29udGFjdHNEaXYuYXBwZW5kKHBhZ2VIZWFkZXIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiQWRkcmVzcyAtIFUgVm9kYXJueSAxMCwgVmlub2hyYWR5LCAxMzAgMDAgUHJhaGEtUHJhaGEgMywgQ3plY2hpYVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJQaG9uZSBudW1iZXIgLSArNDIwIDExMSAxMTEgMTExXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkVtYWlsIC0gdGhlYm9yc2NodEBnbWFpbC5jb21cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvbnRhY3RzRGl2LmFwcGVuZChoZWFkZXIpO1xuICB9XG5cbiAgY29udGFjdHNEaXYuYXBwZW5kKGRpdkdvb2dsZU1hcHMpO1xuICAvLyBpbmNsdWRlIGEgbG9jYXRpb24gb24gZ29vZ2xlIG1hcHNcbiAgZGl2R29vZ2xlTWFwcy5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTQhMW04ITFtMyExZDEwMjQyLjA5OTM3Mjc4MTI3NSEyZDE0LjQ0OTE5MjghM2Q1MC4wNzY0NTk3ITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDQ3MGI5NTJkZDc1YjBhOTklM0EweGRjOGNmMDcxM2FiMDc0ZDQhMnpWR2hsSUVKdmNzV2h4STAhNWUwITNtMiExc2VuITJzY3ohNHYxNjg3NDMwNjA2Mjc5ITVtMiExc2VuITJzY3pcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjMwMFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+YDtcbn1cbiIsImV4cG9ydCB7IHJlbmRlckhvbWVQYWdlLCByZW5kZXJOb25DaGFuZ2VhYmxlRWxlbWVudHMgfTtcblxuLy8gU2VjdGlvbiB3aGVyZSB0YWIgYnJvd3NlcmluZyB3aWxsIHdvcmtcbmZ1bmN0aW9uIHJlbmRlck5vbkNoYW5nZWFibGVFbGVtZW50cygpIHtcbiAgY29uc3QgZGl2VG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdlRvcFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRvcC1zZWN0aW9uXCIpO1xuICBkb2N1bWVudC5ib2R5LnByZXBlbmQoZGl2VG9wU2VjdGlvbik7XG5cbiAgLy8gZ2VuZXJhdGUgMyAndGFicycgZm9yIGZ1dHVyZSB0YWIgYnJvd3NlcmluZ1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLnRleHRDb250ZW50ID0gaSA9PT0gMCA/IFwiSG9tZVwiIDogaSA9PT0gMSA/IFwiTWVudVwiIDogXCJDb250YWN0XCI7XG5cbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJIb21lLWJ0blwiKTtcbiAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiTWVudS1idG5cIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIkNvbnRhY3QtYnRuXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZGl2VG9wU2VjdGlvbi5hcHBlbmQoYnRuKTtcbiAgfVxuICAvLyBmb290ZXJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcblxuICBmb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb290ZXJcIik7XG4gIHBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLWxpbmtcIik7XG4gIGxpbmsudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgbGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc2lsZW5jZWluc3BhY2VcIjtcbiAgbGluay50ZXh0Q29udGVudCA9IFwiR2l0SHViIGFjY291bnRcIjtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChmb290ZXIpO1xuICBmb290ZXIuYXBwZW5kKHBhcmFncmFwaCk7XG4gIHBhcmFncmFwaC5hcHBlbmQobGluayk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKGRpdikge1xuICAvLyBTZWN0aW9uIHdoZXJlIGFsbCBpbml0aWFsIGNvbnRlbnQgd2lsbCBiZSBzaG93blxuICAvLyBjcmVhdGUgZWxlbWVudHNcbiAgY29uc3QgZGl2TWlkZGxlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlcm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgY29uc3QgZGl2UmVzdGF1cmFudFBob3RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNob3J0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHJlc3RhdXJhbnRTdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBvZmZlckZvclZpc2l0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YWJsZVdpdGhTY2hlZHVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgY29uc3QgdGFibGVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gIGNvbnN0IGFkZHJlc3NCb2xkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGV4dFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIC8vIGNsYXNzZXNcbiAgZGl2TWlkZGxlU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZS1zZWN0aW9uXCIpO1xuICBkaXZSZXN0YXVyYW50UGhvdG9zLmNsYXNzTGlzdC5hZGQoXCJpbWFnZXNcIik7XG4gIHRleHRTaWRlLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0XCIpO1xuXG4gIC8vIHRleHQgY29udGVudFxuICBoZXJvVGl0bGUudGV4dENvbnRlbnQgPSBcIlRoZSBCb3JzY2hcIjtcbiAgc2hvcnREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9XG4gICAgXCJBIHBsYWNlIHRvIHJldHVybiB0byBmb3IgdGhlIGJlc3QgVWtyYWluaWFuIGJvcnNjaCBpbiBQcmFndWUhXCI7XG4gIHJlc3RhdXJhbnRTdG9yeS50ZXh0Q29udGVudCA9XG4gICAgXCIgT3VyIGNvenkgcmVzdGF1cmFudCB3YXMgb3BlbmVkIGJhY2sgaW4gMjAyMS4gQXMgb3VyIG1haW4gbWlzc2lvbiB3ZSBzYXcgdGhlIG5lZWQgdG8gc3ByZWFkIHRoZSB3b3JkIGFib3V0IHRoZSBVa3JhaW5pYW4gY3VsdHVyZSBhYnJvYWQgYW5kIG9uZSBvZiBpdHMgYmlnZ2VzdCBhY2hpZXZlbWVudHMgLSBzb3VwIGNhbGxlZCBib3JzY2guIFNvbWUgcGVvcGxlIHNheSBpdCdzIGp1c3QgdGFzdHkgc291cCwgYnV0IHdlIHRoaW5rIHRoZXJlIGlzIG1vcmUgdG8gaXQuIFRoZSBoaXN0b3J5LCB0aGUgc3ltYm9sIG9mIHRydWUgaWRlbnRpdHkgYW5kIHRoZSBzdHJvbmdlc3QgbmF0aW9uLlwiO1xuICBvZmZlckZvclZpc2l0aW5nLnRleHRDb250ZW50ID0gYElmIHRoYXQgc291bmRzIGludGVyZXN0aW5nIHRvIHlvdSwgcGxlYXNlIGNvbnNpZGVyIHN0b3BwaW5nIGJ5IGZvciBhIGJvd2wgb2Ygb3VyIHNwZWNpYWwgVWtyYWluaWFuIGVsaXhpciAhXG4gICAgUC5TLiB3ZSBhbHNvIGhhdmUgb3RoZXIgZGVsaWNpb3VzIFVrcmFpbmlhbiB0cmF0aWRpb25hbCBmb29kIHRvIHRyeTpEXG4gICAgYDtcbiAgdGFibGVIZWFkZXIudGV4dENvbnRlbnQgPSBcIldlIGFyZSBvcGVuOlwiO1xuICBhZGRyZXNzQm9sZFRleHQudGV4dENvbnRlbnQgPVxuICAgIFwiT3VyIEFkZHJlc3M6IFUgVm9kYXJueSAxMCwgMTMwIDAwIFByYWd1ZSAzIC0gVmlub2hyYWR5XCI7XG5cbiAgLy8gYXBwZW5kIGVsZW1lbnRzXG4gIGRpdi5hcHBlbmQoZGl2TWlkZGxlU2VjdGlvbik7XG4gIHRhYmxlV2l0aFNjaGVkdWxlLmFwcGVuZCh0YWJsZUhlYWRlcik7XG4gIGRpdk1pZGRsZVNlY3Rpb24uYXBwZW5kKHRleHRTaWRlLCBkaXZSZXN0YXVyYW50UGhvdG9zKTtcblxuICB0ZXh0U2lkZS5hcHBlbmQoXG4gICAgaGVyb1RpdGxlLFxuICAgIHNob3J0RGVzY3JpcHRpb24sXG4gICAgcmVzdGF1cmFudFN0b3J5LFxuICAgIG9mZmVyRm9yVmlzaXRpbmcsXG4gICAgdGFibGVXaXRoU2NoZWR1bGUsXG4gICAgYWRkcmVzc0JvbGRUZXh0XG4gICk7XG5cbiAgLy8gaW1nIGVsZW1lbnRzIHRvIHNob3cgdGhlIHJlc3RhdXJhbnQncyBwaWN0dXJlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9XG4gICAgICBpID09PSAwXG4gICAgICAgID8gXCIuLi9zcmMvaW1hZ2VzL2V4dGVyaW9yLmpwZWdcIlxuICAgICAgICA6IGkgPT09IDFcbiAgICAgICAgPyBcIi4uL3NyYy9pbWFnZXMvaW50ZXJpb3IuanBnXCJcbiAgICAgICAgOiBcIi4uL3NyYy9pbWFnZXMvY291bnRlci5qcGdcIjtcbiAgICBpbWcuaGVpZ2h0ID0gXCIzNTBcIjtcbiAgICBpbWcud2lkdGggPSBcIjM1MFwiO1xuICAgIGRpdlJlc3RhdXJhbnRQaG90b3MuYXBwZW5kKGltZyk7XG4gIH1cblxuICAvLyBnZW5lcmF0ZSB0YWJsZSB3aXRoIHdvcmsgaG91cnMgZm9yIGFsbCA3IGRheXNcbiAgdGFibGVIZWFkZXIuY29sU3BhbiA9IFwiMlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGNvbnN0IHRhYmxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgICBjb25zdCB0YWJsZURhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICBpZiAoaiA9PT0gMSAmJiBpIDwgNSkge1xuICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIjExOjAwLTE5OjAwXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChqID09PSAwKSB7XG4gICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IFwiTW9uZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIlR1ZXNkYXlcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IFwiV2VkbmVzZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICB0YWJsZURhdGEudGV4dENvbnRlbnQgPSBcIkZyaWRheVwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpID09PSA1KSB7XG4gICAgICAgIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IGogPT09IDAgPyBcIlNhdHVyZGF5XCIgOiBcIjExOjAwLTE4OjAwXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpID09PSA2KSB7XG4gICAgICAgIHRhYmxlRGF0YS50ZXh0Q29udGVudCA9IGogPT09IDAgPyBcIlN1bmRheVwiIDogXCJDbG9zZWRcIjtcbiAgICAgIH1cblxuICAgICAgdGFibGVSb3cuYXBwZW5kKHRhYmxlRGF0YSk7XG4gICAgfVxuICAgIHRhYmxlV2l0aFNjaGVkdWxlLmFwcGVuZCh0YWJsZVJvdyk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IHJlbmRlck1lbnUgfTtcblxuZnVuY3Rpb24gcmVuZGVyTWVudShkaXYpIHtcbiAgLy8gY3JlYXRlIGh0bWwgZWxlbWVudHMgaW4gRE9NXG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjdXJyZW50UGFnZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBzb3Vwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNvdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgbWFpbkNvdXJzZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNzZXJ0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlc3NlcnRzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IG1haW5Db3Vyc2VzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cbiAgLy8gYWRkIGNsYXNzIG5hbWVzIHRvIGVsZW1lbnRzIGluIERPTVxuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlY3Rpb25cIik7XG4gIHNvdXBzRGl2LmNsYXNzTGlzdC5hZGQoXCJzb3Vwc1wiKTtcbiAgbWFpbkNvdXJzZXNEaXYuY2xhc3NMaXN0LmFkZChcIm1haW4tY291cnNlc1wiKTtcbiAgZGVzc2VydHNEaXYuY2xhc3NMaXN0LmFkZChcImRlc3NlcnRzXCIpO1xuXG4gIC8vIGFkZCB0ZXh0IHRvIGVsZW1lbnRzIGluIERPTVxuICBjdXJyZW50UGFnZVRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgbWVudVwiO1xuICBzb3VwVGl0bGUudGV4dENvbnRlbnQgPSBcIlNvdXBzXCI7XG4gIG1haW5Db3Vyc2VzVGl0bGUudGV4dENvbnRlbnQgPSBcIlVrcmFpbmlhbiBzcGVjaWFsaXRpZXNcIjtcbiAgZGVzc2VydHNUaXRsZS50ZXh0Q29udGVudCA9IFwiRGVzc2VydHNcIjtcblxuICAvLyBhcHBlbmQgRE9NIGVsZW1lbnRzIG90aGVyIERPTSBlbGVtZW50c1xuICBkaXYuYXBwZW5kKG1lbnVEaXYpO1xuICBtZW51RGl2LmFwcGVuZChcbiAgICBjdXJyZW50UGFnZVRpdGxlLFxuICAgIHNvdXBUaXRsZSxcbiAgICBzb3Vwc0RpdixcbiAgICBtYWluQ291cnNlc1RpdGxlLFxuICAgIG1haW5Db3Vyc2VzRGl2LFxuICAgIGRlc3NlcnRzVGl0bGUsXG4gICAgZGVzc2VydHNEaXZcbiAgKTtcblxuICAvLyBkaXZzIHdpdGggc291cCBvcHRpb25zIG9uIHRoZSBtZW51XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRpc2gtYmxvY2tcIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxOyBqKyspIHtcbiAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblxuICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJlZWYgYm9yc2NoIDAuNGxcIjtcbiAgICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDk5Q3prXCI7XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvYmVlZiBib3JzY2guanBnXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlZlZ2V0YXJpYW4gYm9yc2NodCB3aXRoIG11c2hyb29tIDAuNGxcIjtcbiAgICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDk5Q3prXCI7XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvVmVnZXRlcmlhbiBib3JzY2gucG5nXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkaXYuYXBwZW5kKGhlYWRlciwgcGFyYSwgaW1hZ2UpO1xuICAgIH1cbiAgICBzb3Vwc0Rpdi5hcHBlbmQoZGl2KTtcbiAgfVxuXG4gIC8vIGRpdnMgd2l0aCBtYWluIGNvdXJzZSBvcHRpbnMgb24gdGhlIG1lbnVcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiZGlzaC1ibG9ja1wiKTtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGl2LmFwcGVuZChoZWFkZXIsIHBhcmEsIGltZyk7XG5cbiAgICBzd2l0Y2ggKGkpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJLeWl2IGN1dGxldCB3aXRoIG1hc2hlZCBwb3RhdG9lc1wiO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDI0NUN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvS3lpdiBjdXRsZXQucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvbHVidHNpIChjYWJiYWdlIHJvbGxzIHdpdGggbWVhdClcIjtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IFwiUHJpY2UgLSAyMDVDemtcIjtcbiAgICAgICAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L0hvbHVidHNpLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIk5hbHlzbnlreSBzdHVmZmVkIHdpdGggcG9yayB0b25ndWVzXCI7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlByaWNlIC0gMTgwQ3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9OYWx5c255a3kucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIiBWYXJlbnlreSB3aXRoIHBvdGF0byBmaWxsaW5nXCI7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlByaWNlIC0gMTEwQ3prXCI7XG4gICAgICAgIGltZy5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9WYXJlbnlreS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVydW5zIHdpdGggc291ciBjcmVhbSBhbmQgc2FsYWRcIjtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IFwiUHJpY2UgLSA5MEN6a1wiO1xuICAgICAgICBpbWcuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvRGVydW5zLnBuZ1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTYWxvIHdpdGggYm9yc2NodCAodHdvIHR5cGVzIG9mIGxhcmQpXCI7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlByaWNlIC0gNzBDemtcIjtcbiAgICAgICAgaW1nLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9tZW51L1NhbG8ucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBtYWluQ291cnNlc0Rpdi5hcHBlbmQoZGl2KTtcbiAgfVxuXG4gIC8vIGRpdnMgd2l0aCBkZXNzZXJ0cyBvcHRpb25zIG9uIHRoZSBtZW51XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcImRpc2gtYmxvY2tcIik7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGl2LmFwcGVuZChoZWFkZXIsIHBhcmEsIGltYWdlKTtcblxuICAgIHN3aXRjaCAoaSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlZhcmVueWt5IHdpdGggc291ciBjaGVycmllc1wiO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gXCJQcmljZSAtIDEyMEN6a1wiO1xuICAgICAgICBpbWFnZS5zcmMgPSBcIi4uL3NyYy9pbWFnZXMvbWVudS9Td2VldCB2YXJlbnlreS5wbmdcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ290dGFnZSBjaGVlc2UgcGFuY2FrZXNcIjtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IFwiUHJpY2UgLSAxMTVDemtcIjtcbiAgICAgICAgaW1hZ2Uuc3JjID0gXCIuLi9zcmMvaW1hZ2VzL21lbnUvQ2hlZXNlY2FrZXMucG5nXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZXNzZXJ0c0Rpdi5hcHBlbmQoZGl2KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyByZW5kZXJIb21lUGFnZSwgcmVuZGVyTm9uQ2hhbmdlYWJsZUVsZW1lbnRzIH0gZnJvbSBcIi4vaW5pdGlhbC1wYWdlXCI7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSBcIi4vbWVudS1wYWdlXCI7XG5pbXBvcnQgeyByZW5kZXJDb250YWN0cyB9IGZyb20gXCIuL2NvbnRhY3QtcGFnZVwiO1xuLy8gbG9hZCBjc3Mgd2l0aCB3ZWJwYWNrXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbnJlbmRlck5vbkNoYW5nZWFibGVFbGVtZW50cygpO1xuLy8gcmVuZGVyIGluaXRpYWwgcGFnZVxucmVuZGVySG9tZVBhZ2UoZGl2Q29udGVudCk7XG5cbmZ1bmN0aW9uIG1ha2VDdXJyZW50VGFiVW5ja2lja2FibGUoZmlyc3RUYWIsIHNlY29uZFRhYiwgdGhpcmRUYWIpIHtcbiAgaG9tZVRhYi5kaXNhYmxlZCA9IGZpcnN0VGFiO1xuICBtZW51VGFiLmRpc2FibGVkID0gc2Vjb25kVGFiO1xuICBjb250YWN0VGFiLmRpc2FibGVkID0gdGhpcmRUYWI7XG59XG5cbmNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLkhvbWUtYnRuXCIpO1xuaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXZDb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICByZW5kZXJIb21lUGFnZShkaXZDb250ZW50KTtcbiAgbWFrZUN1cnJlbnRUYWJVbmNraWNrYWJsZSh0cnVlLCBmYWxzZSwgZmFsc2UpO1xufSk7XG5cbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLk1lbnUtYnRuXCIpO1xubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXZDb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuICByZW5kZXJNZW51KGRpdkNvbnRlbnQpO1xuICBtYWtlQ3VycmVudFRhYlVuY2tpY2thYmxlKGZhbHNlLCB0cnVlLCBmYWxzZSk7XG59KTtcblxuY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuQ29udGFjdC1idG5cIik7XG5jb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpdkNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG4gIHJlbmRlckNvbnRhY3RzKGRpdkNvbnRlbnQpO1xuICBtYWtlQ3VycmVudFRhYlVuY2tpY2thYmxlKGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG59KTtcblxuXG5cblxuXG5cblxuXG4vLyBTb21lIHRoaW5ncyB0byB0cnkgaW4gdGhlIHByb2plY3QhISFcbi8vIGltcG9ydCBpbWFnZXMgdGhyb3VnaCB3ZWJwYWNrPz9cbi8vIGltcG9ydCBmb250IHRocm91Z2ggd2VicGFja1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9