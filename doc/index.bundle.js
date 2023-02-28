/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/block.svg */ "./src/icon/block.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/shooting.svg */ "./src/icon/shooting.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/drag.svg */ "./src/icon/drag.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/fire.svg */ "./src/icon/fire.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./icon/sea.svg */ "./src/icon/sea.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    font-size: calc(12px + 0.4vw + 0.2vh);\n}\n\nbody {\n    min-height: 100vh;\n    user-select: none;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem;\n}\n\n.header {\n    padding: 0 0.5rem;\n    font-size: 2rem;\n}\n\n.main {\n    padding: 2rem 0;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n}\n\n.messageBox {\n    display: flex;\n    align-items: center;\n    width: 20rem;\n    height: 2rem;\n    border: 0.1rem solid black;\n    padding: 0 0.5rem;\n}\n\n.battleScreen {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    grid-auto-flow: column;\n    column-gap: 4rem;\n    row-gap: 0.5rem;\n    place-items: center;\n}\n\n.endScreen {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    background-color: rgba(255, 255, 255, 0.8);\n    display: grid;\n    place-items: center;\n}\n\n.restart.button {\n    padding: 0.6rem 2rem;\n    background-color: white;\n    border: 0.1rem solid black;\n    cursor: pointer;\n    z-index: 3;\n}\n\n.startScreen {\n    position: absolute;\n    right: 0;\n    width: 50%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.95);\n    z-index: 1;\n    display: grid;\n    align-content: space-evenly;\n    justify-items: center;\n}\n\n.randomize.button {\n    padding: 0.6rem 2rem;\n    background-color: white;\n    border: 0.1rem solid black;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.start.button {\n    padding: 0.6rem 2rem;\n    background-color: white;\n    border: 0.1rem solid black;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.invisible {\n    height: 0;\n    width: 0;\n    overflow: hidden;\n}\n\n.gameboard {\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(10, 2rem);\n    grid-template-rows: repeat(10, 2rem);\n    grid-auto-flow: row;\n    border: 0.1rem solid black;\n    background-color: white;\n}\n\n.cover {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.5);\n    cursor: not-allowed;\n    z-index: 2;\n}\n\n.unit {\n    position: relative;\n    border: 0.05rem solid grey;\n}\n\n.canDrop {\n    background-color: palegreen;\n}\n\n.cannotDrop {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n}\n\n.Computer .unit {\n    cursor: not-allowed;\n}\n\n.Computer .unit:empty {\n    cursor: pointer;\n}\n\n.Computer .unit:empty:hover {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-size: 1.8rem;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.ship {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: darkseagreen;\n    border: 0 solid darkolivegreen;\n}\n\n.ship[draggable=\"true\"] {\n    cursor: grab;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: 1.2rem;\n    background-repeat: no-repeat;\n}\n\n.dragging {\n    display: none;\n}\n\n.Player .ship {\n    border-width: 0.12rem;\n}\n\n.Player .ship.length-2.horizontal {\n    width: calc(4rem - 0.06rem);\n}\n\n.Player .ship.length-3.horizontal {\n    width: calc(6rem - 0.06rem);\n}\n\n.Player .ship.length-4.horizontal {\n    width: calc(8rem - 0.06rem);\n}\n\n.Player .ship.length-2.vertical {\n    height: calc(4rem - 0.06rem);\n}\n\n.Player .ship.length-3.vertical {\n    height: calc(6rem - 0.06rem);\n}\n\n.Player .ship.length-4.vertical {\n    height: calc(8rem - 0.06rem);\n}\n\n.Computer .head.horizontal {\n    border-top-width: 0.12rem;\n    border-left-width: 0.12rem;\n    border-bottom-width: 0.12rem;\n}\n\n.Computer .head.vertical {\n    border-left-width: 0.12rem;\n    border-top-width: 0.12rem;\n    border-right-width: 0.12rem;\n}\n\n.Computer .body.horizontal {\n    border-top-width: 0.12rem;\n    border-bottom-width: 0.12rem;\n}\n\n.Computer .body.vertical {\n    border-left-width: 0.12rem;\n    border-right-width: 0.12rem;\n}\n\n.Computer .tail.horizontal {\n    border-top-width: 0.12rem;\n    border-right-width: 0.12rem;\n    border-bottom-width: 0.12rem;\n}\n\n.Computer .tail.vertical {\n    border-left-width: 0.12rem;\n    border-bottom-width: 0.12rem;\n    border-right-width: 0.12rem;\n}\n\n.fire, .sea {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n    background-position: center;\n    background-size: contain;\n}\n\n.fire {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-size: 1.5rem;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.sea {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n}\n.ship.sunk {\n    border-color: red;\n    background-color: rosybrown;\n}\n\n.footer {\n    padding: 0.4rem 0;\n    font-size: 0.8rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n    font-size: calc(12px + 0.4vw + 0.2vh);\n}\n\nbody {\n    min-height: 100vh;\n    user-select: none;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem;\n}\n\n.header {\n    padding: 0 0.5rem;\n    font-size: 2rem;\n}\n\n.main {\n    padding: 2rem 0;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    align-items: center;\n}\n\n.messageBox {\n    display: flex;\n    align-items: center;\n    width: 20rem;\n    height: 2rem;\n    border: 0.1rem solid black;\n    padding: 0 0.5rem;\n}\n\n.battleScreen {\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr auto;\n    grid-auto-flow: column;\n    column-gap: 4rem;\n    row-gap: 0.5rem;\n    place-items: center;\n}\n\n.endScreen {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 2;\n    background-color: rgba(255, 255, 255, 0.8);\n    display: grid;\n    place-items: center;\n}\n\n.restart.button {\n    padding: 0.6rem 2rem;\n    background-color: white;\n    border: 0.1rem solid black;\n    cursor: pointer;\n    z-index: 3;\n}\n\n.startScreen {\n    position: absolute;\n    right: 0;\n    width: 50%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.95);\n    z-index: 1;\n    display: grid;\n    align-content: space-evenly;\n    justify-items: center;\n}\n\n.randomize.button {\n    padding: 0.6rem 2rem;\n    background-color: white;\n    border: 0.1rem solid black;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.start.button {\n    padding: 0.6rem 2rem;\n    background-color: white;\n    border: 0.1rem solid black;\n    cursor: pointer;\n    z-index: 2;\n}\n\n.invisible {\n    height: 0;\n    width: 0;\n    overflow: hidden;\n}\n\n.gameboard {\n    position: relative;\n    display: grid;\n    grid-template-columns: repeat(10, 2rem);\n    grid-template-rows: repeat(10, 2rem);\n    grid-auto-flow: row;\n    border: 0.1rem solid black;\n    background-color: white;\n}\n\n.cover {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(255, 255, 255, 0.5);\n    cursor: not-allowed;\n    z-index: 2;\n}\n\n.unit {\n    position: relative;\n    border: 0.05rem solid grey;\n}\n\n.canDrop {\n    background-color: palegreen;\n}\n\n.cannotDrop {\n    background-image: url(./icon/block.svg);\n    background-size: contain;\n}\n\n.Computer .unit {\n    cursor: not-allowed;\n}\n\n.Computer .unit:empty {\n    cursor: pointer;\n}\n\n.Computer .unit:empty:hover {\n    background-image: url(./icon/shooting.svg);\n    background-size: 1.8rem;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.ship {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    background-color: darkseagreen;\n    border: 0 solid darkolivegreen;\n}\n\n.ship[draggable=\"true\"] {\n    cursor: grab;\n    background-image: url(./icon/drag.svg);\n    background-size: 1.2rem;\n    background-repeat: no-repeat;\n}\n\n.dragging {\n    display: none;\n}\n\n.Player .ship {\n    border-width: 0.12rem;\n}\n\n.Player .ship.length-2.horizontal {\n    width: calc(4rem - 0.06rem);\n}\n\n.Player .ship.length-3.horizontal {\n    width: calc(6rem - 0.06rem);\n}\n\n.Player .ship.length-4.horizontal {\n    width: calc(8rem - 0.06rem);\n}\n\n.Player .ship.length-2.vertical {\n    height: calc(4rem - 0.06rem);\n}\n\n.Player .ship.length-3.vertical {\n    height: calc(6rem - 0.06rem);\n}\n\n.Player .ship.length-4.vertical {\n    height: calc(8rem - 0.06rem);\n}\n\n.Computer .head.horizontal {\n    border-top-width: 0.12rem;\n    border-left-width: 0.12rem;\n    border-bottom-width: 0.12rem;\n}\n\n.Computer .head.vertical {\n    border-left-width: 0.12rem;\n    border-top-width: 0.12rem;\n    border-right-width: 0.12rem;\n}\n\n.Computer .body.horizontal {\n    border-top-width: 0.12rem;\n    border-bottom-width: 0.12rem;\n}\n\n.Computer .body.vertical {\n    border-left-width: 0.12rem;\n    border-right-width: 0.12rem;\n}\n\n.Computer .tail.horizontal {\n    border-top-width: 0.12rem;\n    border-right-width: 0.12rem;\n    border-bottom-width: 0.12rem;\n}\n\n.Computer .tail.vertical {\n    border-left-width: 0.12rem;\n    border-bottom-width: 0.12rem;\n    border-right-width: 0.12rem;\n}\n\n.fire, .sea {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    z-index: 1;\n    background-position: center;\n    background-size: contain;\n}\n\n.fire {\n    background-image: url(./icon/fire.svg);\n    background-size: 1.5rem;\n    background-position: center;\n    background-repeat: no-repeat;\n}\n\n.sea {\n    background-image: url(./icon/sea.svg);\n}\n.ship.sunk {\n    border-color: red;\n    background-color: rosybrown;\n}\n\n.footer {\n    padding: 0.4rem 0;\n    font-size: 0.8rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "coverComputerGameboard": () => (/* binding */ coverComputerGameboard),
/* harmony export */   "default": () => (/* binding */ renderHomepage),
/* harmony export */   "displayMessage": () => (/* binding */ displayMessage),
/* harmony export */   "enableDragDrop": () => (/* binding */ enableDragDrop),
/* harmony export */   "showEndScreen": () => (/* binding */ showEndScreen),
/* harmony export */   "updateGameboard": () => (/* binding */ updateGameboard)
/* harmony export */ });
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game.js");


function renderHomepage(game) {
    const body = document.querySelector("body");
    body.textContent = "";

    const container = document.createElement("div");
    container.classList.add('container');

    const header = document.createElement("div");
    header.classList.add('header');
    header.textContent = "Battleship";
    container.appendChild(header);

    const main = document.createElement("div");
    main.classList.add('main');
    const messageBox = document.createElement("div");
    messageBox.classList.add('messageBox');
    const message = document.createElement("div");
    message.classList.add('message');
    message.textContent = 'Drag on yellow marks to place ships.';
    messageBox.appendChild(message);
    main.appendChild(messageBox);

    const battleScreen = document.createElement("div");
    battleScreen.classList.add('battleScreen');
    const endScreen = document.createElement("div");
    endScreen.classList.add('endScreen');
    endScreen.classList.add('invisible');
    const restartButton = document.createElement("div");
    restartButton.classList.add('restart');
    restartButton.classList.add('button');
    restartButton.classList.add('invisible');
    restartButton.textContent = 'Play again';
    restartButton.addEventListener('click', _Game__WEBPACK_IMPORTED_MODULE_0__["default"]);
    endScreen.appendChild(restartButton);
    battleScreen.appendChild(endScreen);
    const startScreen = document.createElement("div");
    startScreen.classList.add('startScreen');
    const randomizeButton = document.createElement("div");
    randomizeButton.classList.add('randomize');
    randomizeButton.classList.add('button');
    randomizeButton.textContent = 'Randomize';
    randomizeButton.addEventListener('click', _Game__WEBPACK_IMPORTED_MODULE_0__["default"]);
    startScreen.appendChild(randomizeButton);
    const startButton = document.createElement("div");
    startButton.classList.add('start');
    startButton.classList.add('button');
    startButton.textContent = 'Start';
    startButton.addEventListener('click', hideStartScreen);
    startScreen.appendChild(startButton);
    battleScreen.appendChild(startScreen);

    const playerGameboard = document.createElement("div");
    playerGameboard.classList.add('Player');
    playerGameboard.classList.add('gameboard');
    battleScreen.appendChild(playerGameboard);
    const playerName = document.createElement("div");
    playerName.classList.add('name');
    playerName.textContent = `${game.player.name}`;
    battleScreen.appendChild(playerName);
    const computerGameboard = document.createElement("div");
    computerGameboard.classList.add('Computer');
    computerGameboard.classList.add('gameboard');
    battleScreen.appendChild(computerGameboard);
    const computerName = document.createElement("div");
    computerName.classList.add('name');
    computerName.textContent = `${game.computer.name}`;
    battleScreen.appendChild(computerName);
    main.appendChild(battleScreen);
    container.appendChild(main);

    const footer = document.createElement("div");
    footer.classList.add('footer');
    footer.textContent = "Created by Betsy @ The Odin Project 2023";
    container.appendChild(footer);

    body.appendChild(container);
}

function updateGameboard(game) {
    updatePlayerGameboard(game.player);
    updateComputerGameboard(game, game.computer);
}

function updatePlayerGameboard(player) {
    const playerGameboard = document.querySelector('.Player.gameboard');
    playerGameboard.textContent = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.createElement('div');
            unit.setAttribute('data-x', i);
            unit.setAttribute('data-y', j);
            unit.classList.add('unit');
            playerGameboard.appendChild(unit);
        }
    }
    let renderedShips = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.querySelector(`.Player .unit[data-x='${i}'][data-y='${j}']`);
            if (player.gameboard.map[unit.dataset.x][unit.dataset.y]['ship']) {
                const shipObj = player.gameboard.map[unit.dataset.x][unit.dataset.y]['ship'];
                if (!renderedShips.includes(shipObj)) {
                    const shipDiv = document.createElement('div');
                    shipDiv.setAttribute('data-x', i);
                    shipDiv.setAttribute('data-y', j);
                    shipDiv.classList.add('ship');
                    shipDiv.classList.add(`length-${shipObj.length}`);
                    shipDiv.classList.add(shipObj.direction);
                    if (shipObj.isSunk()) {
                        shipDiv.classList.add('sunk');
                    }
                    unit.appendChild(shipDiv);
                    renderedShips.push(shipObj);
                }
            }
            if (player.gameboard.map[unit.dataset.x][unit.dataset.y]['attacked']) {
                const attacked = document.createElement('div');
                if (player.gameboard.map[unit.dataset.x][unit.dataset.y]['ship']) {
                    attacked.classList.add('fire');
                } else {
                    attacked.classList.add('sea');
                }
                unit.appendChild(attacked);
            }
        }
    }
}

function updateComputerGameboard(game, computer) {
    const computerGameboard = document.querySelector('.Computer.gameboard');
    computerGameboard.textContent = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.createElement('div');
            unit.setAttribute('data-x', i);
            unit.setAttribute('data-y', j);
            unit.classList.add('unit');
            unit.addEventListener('click', () => {
                game.takeTurns([i, j]);
            });
            computerGameboard.appendChild(unit);
        }
    }
    let renderedShips = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const unit = document.querySelector(`.Computer .unit[data-x='${i}'][data-y='${j}']`);
            if (computer.gameboard.map[i][j]['attacked']) {
                const attacked = document.createElement('div');
                if (computer.gameboard.map[i][j]['ship']) {
                    const shipObj = computer.gameboard.map[i][j]['ship'];
                    if (!shipObj.isSunk()) {
                        const ship = document.createElement('div');
                        ship.classList.add('ship');
                        unit.appendChild(ship);
                    } else if (!renderedShips.includes(shipObj)){
                        const shipHead = document.createElement('div');
                        shipHead.classList.add('ship');
                        shipHead.classList.add('head');
                        shipHead.classList.add(shipObj.direction);
                        shipHead.classList.add('sunk');
                        unit.appendChild(shipHead);
                        if (shipObj.length === 1) {
                            shipHead.classList.add('tail');
                        } else if (shipObj.direction === 'horizontal') {
                            for (let l = 1; l < shipObj.length - 1; l++) {
                                const adjUnit = document.querySelector(`.Computer .unit[data-x='${i}'][data-y='${j + l}']`);
                                const shipBody = document.createElement('div');
                                shipBody.classList.add('ship');
                                shipBody.classList.add('body');
                                shipBody.classList.add(shipObj.direction);
                                shipBody.classList.add('sunk');
                                adjUnit.appendChild(shipBody);
                            }
                            const lastUnit = document.querySelector(`.Computer .unit[data-x='${i}'][data-y='${j + shipObj.length - 1}']`);
                            const shipTail = document.createElement('div');
                            shipTail.classList.add('ship');
                            shipTail.classList.add('tail');
                            shipTail.classList.add(shipObj.direction);
                            shipTail.classList.add('sunk');
                            lastUnit.appendChild(shipTail);
                        } else if (shipObj.direction === 'vertical') {
                            for (let l = 1; l < shipObj.length - 1; l++) {
                                const adjUnit = document.querySelector(`.Computer .unit[data-x='${i + l}'][data-y='${j}']`);
                                const shipBody = document.createElement('div');
                                shipBody.classList.add('ship');
                                shipBody.classList.add('body');
                                shipBody.classList.add(shipObj.direction);
                                shipBody.classList.add('sunk');
                                adjUnit.appendChild(shipBody);
                            }
                            const lastUnit = document.querySelector(`.Computer .unit[data-x='${i + shipObj.length - 1}'][data-y='${j}']`);
                            const shipTail = document.createElement('div');
                            shipTail.classList.add('ship');
                            shipTail.classList.add('tail');
                            shipTail.classList.add(shipObj.direction);
                            shipTail.classList.add('sunk');
                            lastUnit.appendChild(shipTail);
                        }
                        renderedShips.push(shipObj);
                    }
                    attacked.classList.add('fire');
                } else {
                    attacked.classList.add('sea');
                }
                unit.appendChild(attacked);
            }
        }
    }
}

function coverComputerGameboard() {
    const gameboard = document.querySelector('.Computer.gameboard');
    const cover = document.createElement('div');
    cover.classList.add('cover');
    gameboard.prepend(cover);
}

function enableDragDrop(game) {
    let draggedShip;

    document.querySelectorAll('.Player .ship').forEach(item => {
        item.draggable = true;

        item.addEventListener('dragstart', (event) => {
            draggedShip = game.player.gameboard.map[Number(event.target.dataset.x)][Number(event.target.dataset.y)]['ship'];
            setTimeout(() => {
                event.target.classList.add('dragging');
            }, 0);
        });

        item.addEventListener('dragend', (event) => {
            if (event.target.classList.contains('dragging')) {
                event.target.classList.remove('dragging');
                displayMessage('Drop ship within your board.');
            }
        });
    });

    document.querySelectorAll('.Player .unit').forEach(item => {
        item.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        item.addEventListener('dragenter', (event) => {
            const x = Number(event.target.dataset.x);
            const y = Number(event.target.dataset.y);
            if (game.player.gameboard.canPlaceShip(draggedShip, [x, y])) {
                event.currentTarget.classList.add('canDrop');
            } else {
                event.currentTarget.classList.add('cannotDrop');
                
            }
        });

        item.addEventListener('dragleave', (event) => {
            if (event.target.classList.contains('canDrop')) {
                event.target.classList.remove('canDrop');
            }
            if (event.target.classList.contains('cannotDrop')) {
                event.target.classList.remove('cannotDrop');
            }
        });

        item.addEventListener('drop', (event) => {
            event.preventDefault();
            document.querySelector('.dragging').classList.remove('dragging');
            if (event.target.classList.contains('cannotDrop')) {
                event.target.classList.remove('cannotDrop');
            }
            const x = Number(event.currentTarget.dataset.x);
            const y = Number(event.currentTarget.dataset.y);
            if (game.player.gameboard.canPlaceShip(draggedShip, [x, y])) {
                game.player.gameboard.placeShip(draggedShip, [x, y]);
                updateGameboard(game);
                enableDragDrop(game);
                displayMessage('Successfully placed ship.');
            } else {
                displayMessage('Cannot place ship there.');
            }
        });
    });
}

function displayMessage(text) {
    const message = document.querySelector('.message');
    message.textContent = text;
}

function showEndScreen() {
    const endScreen = document.querySelector('.endScreen');
    endScreen.classList.remove('invisible');
    const restartButton = document.querySelector('.restart.button');
    restartButton.classList.remove('invisible');
}

function hideStartScreen() {
    const startScreen = document.querySelector('.startScreen');
    startScreen.classList.add('invisible');
    const startButton = document.querySelector('.start.button');
    startButton.classList.add('invisible');
    const randomizeButton = document.querySelector('.randomize.button');
    randomizeButton.classList.add('invisible');
    for (const item of document.querySelectorAll(`[draggable='true']`)) {
        item.draggable = false;
    }
    displayMessage('Your turn.');
}


/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/Player.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



function start() {
    const game = new Game();
    console.log(game);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__["default"])(game);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.updateGameboard)(game);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.enableDragDrop)(game);
}
class Game {
    constructor() {
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.computer = new _Player__WEBPACK_IMPORTED_MODULE_0__.Computer();

        for (let ship of this.player.ships) {
            let done = false;
            while (!done) {
                let pos = [getRandomInt(10), getRandomInt(10)];
                if(this.player.gameboard.canPlaceShip(ship, pos)) {
                    this.player.gameboard.placeShip(ship, pos);
                    done = true;
                }
            }
        }
        for (let ship of this.computer.ships) {
            let done = false;
            while (!done) {
                let pos = [getRandomInt(10), getRandomInt(10)];
                if (this.computer.gameboard.canPlaceShip(ship, pos)) {
                    this.computer.gameboard.placeShip(ship, pos);
                    done = true;
                }
            }
        }
    }

    takeTurns = async ([x, y]) => {
        let isLegal = this.player.getAttackCoor([x, y]);
        if (!isLegal) {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayMessage)(`Not here again! Pick another place.`);
            return;
        }
        this.computer.gameboard.receiveAttack([x, y]);
        this.player.recordAttack([x, y]);
        (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.updateGameboard)(this);
        if (this.computer.lose()) {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayMessage)(`Congratulations, you won!`);
        } else {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayMessage)(`Computer is making an attack...`);
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.coverComputerGameboard)();
            await wait(500);
            let pos = this.computer.getAttackCoor();
            if (this.player.gameboard.receiveAttack(pos)) {
                (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayMessage)(`Your ship got hit!`);
            } else {
                (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayMessage)(`${this.computer.name}'s attack missed!`);
            }
            this.computer.recordAttack(pos);
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.updateGameboard)(this);
            if (this.player.lose()) {
                (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.displayMessage)(`${this.computer.name} Won. You lost.`);
            }
        }
        if (isEnd(this.player, this.computer)) {
            (0,_DOM__WEBPACK_IMPORTED_MODULE_1__.showEndScreen)();
        }
    }
}

function isEnd(player, computer) {
    return (player.lose() || computer.lose()) ? true : false;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

/***/ }),

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
class Gameboard {
  constructor() {
    let map = [];
    for (let i = 0; i < 10; i++) {
      let row = []
      for (let j = 0; j < 10; j++) {
        let unit = {
          ship: null,
          attacked: false
        };
        row.push(unit);
      }
      map.push(row);
    }
    this.map = map;
  }

  canPlaceShip(ship, [x, y]) {
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      return false;
    }
    if (ship.direction === 'horizontal') {
      if (y + ship.length - 1 > 9) {
        return false;
      }
      for (let i = y + ship.length - 1; i >= y; i--) {
        if (this.map[x][i]['ship'] && this.map[x][i]['ship'] !== ship) {
          return false;
        }
      }
    } else {
      if (x + ship.length - 1 > 9) {
        return false;
      }
      for (let i = x + ship.length - 1; i >= x; i--) {
        if (this.map[i][y]['ship'] && this.map[i][y]['ship'] !== ship) {
          return false;
        }
      }
    }
    return true;
  }

  placeShip(ship, [x, y]) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.map[i][j]['ship'] === ship) {
          this.map[i][j]['ship'] = null;
        }
      }
    }
    if (ship.direction === 'horizontal') {
      for (let i = y + ship.length - 1; i >= y; i--) {
        this.map[x][i]['ship'] = ship;
      }
    } else {
      for (let i = x + ship.length - 1; i >= x; i--) {
        this.map[i][y]['ship'] = ship;
      }
    }
  }

  receiveAttack([x, y]) {
    this.map[x][y]['attacked'] = true;
    if (this.map[x][y]['ship'] !== null) {
      this.map[x][y]['ship'].gotHit();
      return true;
    }
    return false;
  }
}


/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Computer": () => (/* binding */ Computer),
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.js");
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ "./src/Ship.js");



class Player {
    constructor(name = 'Player') {
        this.name = name;
        this.ships = [];
        this.gameboard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.attacked = [];
        this.createDefaultShips();
    }

    createDefaultShips() {
        for (let i = 2; i < 5; i++) {
            const ship = new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](i, 'horizontal');
            this.ships.push(ship);
        }
        for (let i = 1; i < 4; i++) {
            const ship = new _Ship__WEBPACK_IMPORTED_MODULE_1__["default"](i, 'vertical');
            this.ships.push(ship);
        }
    }

    getAttackCoor([x, y]) {
        if (x < 0 || x > 9 || y < 0 || y > 9) {
            return false;
        }
        if (this.attacked.includes(JSON.stringify([x, y]))) {
            return false;
        }
        return [x, y];
    }

    recordAttack([x, y]) {
        this.attacked.push(JSON.stringify([x, y]));
    }

    lose() {
    for (let ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }
}

class Computer extends Player {
    constructor() {
        super('Computer');
    }
    
    getAttackCoor() {
        let pos = [getRandomInt(10), getRandomInt(10)];
        while (this.attacked.includes(JSON.stringify(pos))) {
            pos = [getRandomInt(10), getRandomInt(10)];
        }
        return pos;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length = 1, direction = 'horizontal') {
    this._length = length;
    this._direction = direction;
    this._hit = 0;
  }

  get length() {
    return this._length;
  }

  get direction() {
    return this._direction;
  }

  get hit() {
    return this._hit;
  }

  set direction(direction) {
    if (direction === 'horizontal' || direction === 'vertical') {
      this._direction = direction;
    } else {
      throw new Error('Direction should be either horizontal or vertical!');
    }
  }

  gotHit(times = 1) {
    this._hit += times;
  }

  isSunk() {
    return this.hit >= this.length;
  }
}


/***/ }),

/***/ "./src/icon/block.svg":
/*!****************************!*\
  !*** ./src/icon/block.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03bfff8efe009d03cdde.svg";

/***/ }),

/***/ "./src/icon/drag.svg":
/*!***************************!*\
  !*** ./src/icon/drag.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcad5c3d7624a64635e1.svg";

/***/ }),

/***/ "./src/icon/fire.svg":
/*!***************************!*\
  !*** ./src/icon/fire.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da8a23a43e853076d5b7.svg";

/***/ }),

/***/ "./src/icon/sea.svg":
/*!**************************!*\
  !*** ./src/icon/sea.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "157909a7d346212501a1.svg";

/***/ }),

/***/ "./src/icon/shooting.svg":
/*!*******************************!*\
  !*** ./src/icon/shooting.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55e2d49a0ea6e72e3453.svg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
/******/ 			"index": 0
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
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



(0,_Game__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZ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V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0w7O0FBRXRCLGlEQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL1BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvU2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pY29uL2Jsb2NrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaWNvbi9zaG9vdGluZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ljb24vZHJhZy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ljb24vZmlyZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ljb24vc2VhLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEycHggKyAwLjR2dyArIDAuMnZoKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tYWluIHtcXG4gICAgcGFkZGluZzogMnJlbSAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZXNzYWdlQm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwcmVtO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcXG59XFxuXFxuLmJhdHRsZVNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBjb2x1bW4tZ2FwOiA0cmVtO1xcbiAgICByb3ctZ2FwOiAwLjVyZW07XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5lbmRTY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3RhcnQuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC42cmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAzO1xcbn1cXG5cXG4uc3RhcnRTY3JlZW4ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmFuZG9taXplLmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbSAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnN0YXJ0LmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuNnJlbSAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAycmVtKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDJyZW0pO1xcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb3ZlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udW5pdCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAwLjA1cmVtIHNvbGlkIGdyZXk7XFxufVxcblxcbi5jYW5Ecm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZWdyZWVuO1xcbn1cXG5cXG4uY2Fubm90RHJvcCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLkNvbXB1dGVyIC51bml0IHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLkNvbXB1dGVyIC51bml0OmVtcHR5IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uQ29tcHV0ZXIgLnVuaXQ6ZW1wdHk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xcbiAgICBib3JkZXI6IDAgc29saWQgZGFya29saXZlZ3JlZW47XFxufVxcblxcbi5zaGlwW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmRyYWdnaW5nIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLlBsYXllciAuc2hpcCB7XFxuICAgIGJvcmRlci13aWR0aDogMC4xMnJlbTtcXG59XFxuXFxuLlBsYXllciAuc2hpcC5sZW5ndGgtMi5ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IGNhbGMoNHJlbSAtIDAuMDZyZW0pO1xcbn1cXG5cXG4uUGxheWVyIC5zaGlwLmxlbmd0aC0zLmhvcml6b250YWwge1xcbiAgICB3aWR0aDogY2FsYyg2cmVtIC0gMC4wNnJlbSk7XFxufVxcblxcbi5QbGF5ZXIgLnNoaXAubGVuZ3RoLTQuaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiBjYWxjKDhyZW0gLSAwLjA2cmVtKTtcXG59XFxuXFxuLlBsYXllciAuc2hpcC5sZW5ndGgtMi52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogY2FsYyg0cmVtIC0gMC4wNnJlbSk7XFxufVxcblxcbi5QbGF5ZXIgLnNoaXAubGVuZ3RoLTMudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IGNhbGMoNnJlbSAtIDAuMDZyZW0pO1xcbn1cXG5cXG4uUGxheWVyIC5zaGlwLmxlbmd0aC00LnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDhyZW0gLSAwLjA2cmVtKTtcXG59XFxuXFxuLkNvbXB1dGVyIC5oZWFkLmhvcml6b250YWwge1xcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwLjEycmVtO1xcbiAgICBib3JkZXItbGVmdC13aWR0aDogMC4xMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xMnJlbTtcXG59XFxuXFxuLkNvbXB1dGVyIC5oZWFkLnZlcnRpY2FsIHtcXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDAuMTJyZW07XFxuICAgIGJvcmRlci10b3Atd2lkdGg6IDAuMTJyZW07XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMC4xMnJlbTtcXG59XFxuXFxuLkNvbXB1dGVyIC5ib2R5Lmhvcml6b250YWwge1xcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwLjEycmVtO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjEycmVtO1xcbn1cXG5cXG4uQ29tcHV0ZXIgLmJvZHkudmVydGljYWwge1xcbiAgICBib3JkZXItbGVmdC13aWR0aDogMC4xMnJlbTtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwLjEycmVtO1xcbn1cXG5cXG4uQ29tcHV0ZXIgLnRhaWwuaG9yaXpvbnRhbCB7XFxuICAgIGJvcmRlci10b3Atd2lkdGg6IDAuMTJyZW07XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMC4xMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xMnJlbTtcXG59XFxuXFxuLkNvbXB1dGVyIC50YWlsLnZlcnRpY2FsIHtcXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDAuMTJyZW07XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTJyZW07XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMC4xMnJlbTtcXG59XFxuXFxuLmZpcmUsIC5zZWEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbn1cXG5cXG4uZmlyZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5zZWEge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbn1cXG4uc2hpcC5zdW5rIHtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJvc3licm93bjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDAuNHJlbSAwO1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFD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dUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5REFBcUM7QUFDekM7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGNhbGMoMTJweCArIDAuNHZ3ICsgMC4ydmgpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgcGFkZGluZzogMCAwLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBwYWRkaW5nOiAycmVtIDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lc3NhZ2VCb3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgYm9yZGVyOiAwLjFyZW0gc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xcbn1cXG5cXG4uYmF0dGxlU2NyZWVuIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIGNvbHVtbi1nYXA6IDRyZW07XFxuICAgIHJvdy1nYXA6IDAuNXJlbTtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmVuZFNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmVzdGFydC5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjZyZW0gMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDM7XFxufVxcblxcbi5zdGFydFNjcmVlbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yYW5kb21pemUuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC42cmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uc3RhcnQuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMC42cmVtIDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDAuMXJlbSBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDJyZW0pO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMnJlbSk7XFxuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICAgIGJvcmRlcjogMC4xcmVtIHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvdmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi51bml0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDAuMDVyZW0gc29saWQgZ3JleTtcXG59XFxuXFxuLmNhbkRyb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxlZ3JlZW47XFxufVxcblxcbi5jYW5ub3REcm9wIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaWNvbi9ibG9jay5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxufVxcblxcbi5Db21wdXRlciAudW5pdCB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5Db21wdXRlciAudW5pdDplbXB0eSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLkNvbXB1dGVyIC51bml0OmVtcHR5OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaWNvbi9zaG9vdGluZy5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEuOHJlbTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NlYWdyZWVuO1xcbiAgICBib3JkZXI6IDAgc29saWQgZGFya29saXZlZ3JlZW47XFxufVxcblxcbi5zaGlwW2RyYWdnYWJsZT1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgY3Vyc29yOiBncmFiO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29uL2RyYWcuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5kcmFnZ2luZyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5QbGF5ZXIgLnNoaXAge1xcbiAgICBib3JkZXItd2lkdGg6IDAuMTJyZW07XFxufVxcblxcbi5QbGF5ZXIgLnNoaXAubGVuZ3RoLTIuaG9yaXpvbnRhbCB7XFxuICAgIHdpZHRoOiBjYWxjKDRyZW0gLSAwLjA2cmVtKTtcXG59XFxuXFxuLlBsYXllciAuc2hpcC5sZW5ndGgtMy5ob3Jpem9udGFsIHtcXG4gICAgd2lkdGg6IGNhbGMoNnJlbSAtIDAuMDZyZW0pO1xcbn1cXG5cXG4uUGxheWVyIC5zaGlwLmxlbmd0aC00Lmhvcml6b250YWwge1xcbiAgICB3aWR0aDogY2FsYyg4cmVtIC0gMC4wNnJlbSk7XFxufVxcblxcbi5QbGF5ZXIgLnNoaXAubGVuZ3RoLTIudmVydGljYWwge1xcbiAgICBoZWlnaHQ6IGNhbGMoNHJlbSAtIDAuMDZyZW0pO1xcbn1cXG5cXG4uUGxheWVyIC5zaGlwLmxlbmd0aC0zLnZlcnRpY2FsIHtcXG4gICAgaGVpZ2h0OiBjYWxjKDZyZW0gLSAwLjA2cmVtKTtcXG59XFxuXFxuLlBsYXllciAuc2hpcC5sZW5ndGgtNC52ZXJ0aWNhbCB7XFxuICAgIGhlaWdodDogY2FsYyg4cmVtIC0gMC4wNnJlbSk7XFxufVxcblxcbi5Db21wdXRlciAuaGVhZC5ob3Jpem9udGFsIHtcXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMC4xMnJlbTtcXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDAuMTJyZW07XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTJyZW07XFxufVxcblxcbi5Db21wdXRlciAuaGVhZC52ZXJ0aWNhbCB7XFxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwLjEycmVtO1xcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwLjEycmVtO1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDAuMTJyZW07XFxufVxcblxcbi5Db21wdXRlciAuYm9keS5ob3Jpem9udGFsIHtcXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMC4xMnJlbTtcXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC4xMnJlbTtcXG59XFxuXFxuLkNvbXB1dGVyIC5ib2R5LnZlcnRpY2FsIHtcXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDAuMTJyZW07XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMC4xMnJlbTtcXG59XFxuXFxuLkNvbXB1dGVyIC50YWlsLmhvcml6b250YWwge1xcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwLjEycmVtO1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDAuMTJyZW07XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMTJyZW07XFxufVxcblxcbi5Db21wdXRlciAudGFpbC52ZXJ0aWNhbCB7XFxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwLjEycmVtO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjEycmVtO1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDAuMTJyZW07XFxufVxcblxcbi5maXJlLCAuc2VhIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG59XFxuXFxuLmZpcmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29uL2ZpcmUuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLnNlYSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ljb24vc2VhLnN2Zyk7XFxufVxcbi5zaGlwLnN1bmsge1xcbiAgICBib3JkZXItY29sb3I6IHJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm9zeWJyb3duO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMC40cmVtIDA7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgc3RhcnQgZnJvbSBcIi4vR2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIb21lcGFnZShnYW1lKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJhdHRsZXNoaXBcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGNvbnN0IG1lc3NhZ2VCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lc3NhZ2VCb3guY2xhc3NMaXN0LmFkZCgnbWVzc2FnZUJveCcpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnRHJhZyBvbiB5ZWxsb3cgbWFya3MgdG8gcGxhY2Ugc2hpcHMuJztcbiAgICBtZXNzYWdlQm94LmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVzc2FnZUJveCk7XG5cbiAgICBjb25zdCBiYXR0bGVTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhdHRsZVNjcmVlbi5jbGFzc0xpc3QuYWRkKCdiYXR0bGVTY3JlZW4nKTtcbiAgICBjb25zdCBlbmRTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVuZFNjcmVlbi5jbGFzc0xpc3QuYWRkKCdlbmRTY3JlZW4nKTtcbiAgICBlbmRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmVzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZXN0YXJ0Jyk7XG4gICAgcmVzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nKTtcbiAgICByZXN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpO1xuICAgIHJlc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSAnUGxheSBhZ2Fpbic7XG4gICAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0KTtcbiAgICBlbmRTY3JlZW4uYXBwZW5kQ2hpbGQocmVzdGFydEJ1dHRvbik7XG4gICAgYmF0dGxlU2NyZWVuLmFwcGVuZENoaWxkKGVuZFNjcmVlbik7XG4gICAgY29uc3Qgc3RhcnRTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN0YXJ0U2NyZWVuLmNsYXNzTGlzdC5hZGQoJ3N0YXJ0U2NyZWVuJyk7XG4gICAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByYW5kb21pemVCdXR0b24uY2xhc3NMaXN0LmFkZCgncmFuZG9taXplJyk7XG4gICAgcmFuZG9taXplQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIHJhbmRvbWl6ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSYW5kb21pemUnO1xuICAgIHJhbmRvbWl6ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0KTtcbiAgICBzdGFydFNjcmVlbi5hcHBlbmRDaGlsZChyYW5kb21pemVCdXR0b24pO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdGFydCcpO1xuICAgIHN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIHN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0JztcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVTdGFydFNjcmVlbik7XG4gICAgc3RhcnRTY3JlZW4uYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuICAgIGJhdHRsZVNjcmVlbi5hcHBlbmRDaGlsZChzdGFydFNjcmVlbik7XG5cbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBsYXllckdhbWVib2FyZC5jbGFzc0xpc3QuYWRkKCdQbGF5ZXInKTtcbiAgICBwbGF5ZXJHYW1lYm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG4gICAgYmF0dGxlU2NyZWVuLmFwcGVuZENoaWxkKHBsYXllckdhbWVib2FyZCk7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGxheWVyTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IGAke2dhbWUucGxheWVyLm5hbWV9YDtcbiAgICBiYXR0bGVTY3JlZW4uYXBwZW5kQ2hpbGQocGxheWVyTmFtZSk7XG4gICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbXB1dGVyR2FtZWJvYXJkLmNsYXNzTGlzdC5hZGQoJ0NvbXB1dGVyJyk7XG4gICAgY29tcHV0ZXJHYW1lYm9hcmQuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkJyk7XG4gICAgYmF0dGxlU2NyZWVuLmFwcGVuZENoaWxkKGNvbXB1dGVyR2FtZWJvYXJkKTtcbiAgICBjb25zdCBjb21wdXRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbXB1dGVyTmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XG4gICAgY29tcHV0ZXJOYW1lLnRleHRDb250ZW50ID0gYCR7Z2FtZS5jb21wdXRlci5uYW1lfWA7XG4gICAgYmF0dGxlU2NyZWVuLmFwcGVuZENoaWxkKGNvbXB1dGVyTmFtZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChiYXR0bGVTY3JlZW4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiQ3JlYXRlZCBieSBCZXRzeSBAIFRoZSBPZGluIFByb2plY3QgMjAyM1wiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlR2FtZWJvYXJkKGdhbWUpIHtcbiAgICB1cGRhdGVQbGF5ZXJHYW1lYm9hcmQoZ2FtZS5wbGF5ZXIpO1xuICAgIHVwZGF0ZUNvbXB1dGVyR2FtZWJvYXJkKGdhbWUsIGdhbWUuY29tcHV0ZXIpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQbGF5ZXJHYW1lYm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlBsYXllci5nYW1lYm9hcmQnKTtcbiAgICBwbGF5ZXJHYW1lYm9hcmQudGV4dENvbnRlbnQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCB1bml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1bml0LnNldEF0dHJpYnV0ZSgnZGF0YS14JywgaSk7XG4gICAgICAgICAgICB1bml0LnNldEF0dHJpYnV0ZSgnZGF0YS15Jywgaik7XG4gICAgICAgICAgICB1bml0LmNsYXNzTGlzdC5hZGQoJ3VuaXQnKTtcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5hcHBlbmRDaGlsZCh1bml0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcmVuZGVyZWRTaGlwcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuUGxheWVyIC51bml0W2RhdGEteD0nJHtpfSddW2RhdGEteT0nJHtqfSddYCk7XG4gICAgICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5tYXBbdW5pdC5kYXRhc2V0LnhdW3VuaXQuZGF0YXNldC55XVsnc2hpcCddKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcE9iaiA9IHBsYXllci5nYW1lYm9hcmQubWFwW3VuaXQuZGF0YXNldC54XVt1bml0LmRhdGFzZXQueV1bJ3NoaXAnXTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlbmRlcmVkU2hpcHMuaW5jbHVkZXMoc2hpcE9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBzaGlwRGl2LnNldEF0dHJpYnV0ZSgnZGF0YS14JywgaSk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBEaXYuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgc2hpcERpdi5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZChgbGVuZ3RoLSR7c2hpcE9iai5sZW5ndGh9YCk7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBEaXYuY2xhc3NMaXN0LmFkZChzaGlwT2JqLmRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwT2JqLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwRGl2LmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bml0LmFwcGVuZENoaWxkKHNoaXBEaXYpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZFNoaXBzLnB1c2goc2hpcE9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQubWFwW3VuaXQuZGF0YXNldC54XVt1bml0LmRhdGFzZXQueV1bJ2F0dGFja2VkJ10pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLm1hcFt1bml0LmRhdGFzZXQueF1bdW5pdC5kYXRhc2V0LnldWydzaGlwJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrZWQuY2xhc3NMaXN0LmFkZCgnZmlyZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja2VkLmNsYXNzTGlzdC5hZGQoJ3NlYScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bml0LmFwcGVuZENoaWxkKGF0dGFja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29tcHV0ZXJHYW1lYm9hcmQoZ2FtZSwgY29tcHV0ZXIpIHtcbiAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Db21wdXRlci5nYW1lYm9hcmQnKTtcbiAgICBjb21wdXRlckdhbWVib2FyZC50ZXh0Q29udGVudCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVuaXQuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBpKTtcbiAgICAgICAgICAgIHVuaXQuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBqKTtcbiAgICAgICAgICAgIHVuaXQuY2xhc3NMaXN0LmFkZCgndW5pdCcpO1xuICAgICAgICAgICAgdW5pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lLnRha2VUdXJucyhbaSwgal0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb21wdXRlckdhbWVib2FyZC5hcHBlbmRDaGlsZCh1bml0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgcmVuZGVyZWRTaGlwcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuQ29tcHV0ZXIgLnVuaXRbZGF0YS14PScke2l9J11bZGF0YS15PScke2p9J11gKTtcbiAgICAgICAgICAgIGlmIChjb21wdXRlci5nYW1lYm9hcmQubWFwW2ldW2pdWydhdHRhY2tlZCddKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0YWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcHV0ZXIuZ2FtZWJvYXJkLm1hcFtpXVtqXVsnc2hpcCddKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBPYmogPSBjb21wdXRlci5nYW1lYm9hcmQubWFwW2ldW2pdWydzaGlwJ107XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hpcE9iai5pc1N1bmsoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bml0LmFwcGVuZENoaWxkKHNoaXApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFyZW5kZXJlZFNoaXBzLmluY2x1ZGVzKHNoaXBPYmopKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwSGVhZC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwSGVhZC5jbGFzc0xpc3QuYWRkKCdoZWFkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwSGVhZC5jbGFzc0xpc3QuYWRkKHNoaXBPYmouZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBIZWFkLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXQuYXBwZW5kQ2hpbGQoc2hpcEhlYWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBPYmoubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEhlYWQuY2xhc3NMaXN0LmFkZCgndGFpbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlwT2JqLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IDE7IGwgPCBzaGlwT2JqLmxlbmd0aCAtIDE7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGpVbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLkNvbXB1dGVyIC51bml0W2RhdGEteD0nJHtpfSddW2RhdGEteT0nJHtqICsgbH0nXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwQm9keS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBCb2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEJvZHkuY2xhc3NMaXN0LmFkZChzaGlwT2JqLmRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBCb2R5LmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRqVW5pdC5hcHBlbmRDaGlsZChzaGlwQm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RVbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLkNvbXB1dGVyIC51bml0W2RhdGEteD0nJHtpfSddW2RhdGEteT0nJHtqICsgc2hpcE9iai5sZW5ndGggLSAxfSddYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwVGFpbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFRhaWwuY2xhc3NMaXN0LmFkZCgndGFpbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBUYWlsLmNsYXNzTGlzdC5hZGQoc2hpcE9iai5kaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBUYWlsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0VW5pdC5hcHBlbmRDaGlsZChzaGlwVGFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBPYmouZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IDE7IGwgPCBzaGlwT2JqLmxlbmd0aCAtIDE7IGwrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGpVbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLkNvbXB1dGVyIC51bml0W2RhdGEteD0nJHtpICsgbH0nXVtkYXRhLXk9JyR7an0nXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGlwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwQm9keS5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBCb2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcEJvZHkuY2xhc3NMaXN0LmFkZChzaGlwT2JqLmRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBCb2R5LmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRqVW5pdC5hcHBlbmRDaGlsZChzaGlwQm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RVbml0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLkNvbXB1dGVyIC51bml0W2RhdGEteD0nJHtpICsgc2hpcE9iai5sZW5ndGggLSAxfSddW2RhdGEteT0nJHtqfSddYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hpcFRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwVGFpbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFRhaWwuY2xhc3NMaXN0LmFkZCgndGFpbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBUYWlsLmNsYXNzTGlzdC5hZGQoc2hpcE9iai5kaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBUYWlsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0VW5pdC5hcHBlbmRDaGlsZChzaGlwVGFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlZFNoaXBzLnB1c2goc2hpcE9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXR0YWNrZWQuY2xhc3NMaXN0LmFkZCgnZmlyZScpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dGFja2VkLmNsYXNzTGlzdC5hZGQoJ3NlYScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bml0LmFwcGVuZENoaWxkKGF0dGFja2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvdmVyQ29tcHV0ZXJHYW1lYm9hcmQoKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLkNvbXB1dGVyLmdhbWVib2FyZCcpO1xuICAgIGNvbnN0IGNvdmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY292ZXIuY2xhc3NMaXN0LmFkZCgnY292ZXInKTtcbiAgICBnYW1lYm9hcmQucHJlcGVuZChjb3Zlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVEcmFnRHJvcChnYW1lKSB7XG4gICAgbGV0IGRyYWdnZWRTaGlwO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlBsYXllciAuc2hpcCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uZHJhZ2dhYmxlID0gdHJ1ZTtcblxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZHJhZ2dlZFNoaXAgPSBnYW1lLnBsYXllci5nYW1lYm9hcmQubWFwW051bWJlcihldmVudC50YXJnZXQuZGF0YXNldC54KV1bTnVtYmVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LnkpXVsnc2hpcCddO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZHJhZ2dpbmcnKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXlNZXNzYWdlKCdEcm9wIHNoaXAgd2l0aGluIHlvdXIgYm9hcmQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLlBsYXllciAudW5pdCcpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGV2ZW50LnRhcmdldC5kYXRhc2V0LngpO1xuICAgICAgICAgICAgY29uc3QgeSA9IE51bWJlcihldmVudC50YXJnZXQuZGF0YXNldC55KTtcbiAgICAgICAgICAgIGlmIChnYW1lLnBsYXllci5nYW1lYm9hcmQuY2FuUGxhY2VTaGlwKGRyYWdnZWRTaGlwLCBbeCwgeV0pKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdjYW5Ecm9wJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnY2Fubm90RHJvcCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbkRyb3AnKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjYW5Ecm9wJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2Fubm90RHJvcCcpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2Nhbm5vdERyb3AnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJykuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5ub3REcm9wJykpIHtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2Fubm90RHJvcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeCA9IE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQueCk7XG4gICAgICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC55KTtcbiAgICAgICAgICAgIGlmIChnYW1lLnBsYXllci5nYW1lYm9hcmQuY2FuUGxhY2VTaGlwKGRyYWdnZWRTaGlwLCBbeCwgeV0pKSB7XG4gICAgICAgICAgICAgICAgZ2FtZS5wbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChkcmFnZ2VkU2hpcCwgW3gsIHldKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVHYW1lYm9hcmQoZ2FtZSk7XG4gICAgICAgICAgICAgICAgZW5hYmxlRHJhZ0Ryb3AoZ2FtZSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheU1lc3NhZ2UoJ1N1Y2Nlc3NmdWxseSBwbGFjZWQgc2hpcC4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU1lc3NhZ2UoJ0Nhbm5vdCBwbGFjZSBzaGlwIHRoZXJlLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZXNzYWdlKHRleHQpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcbiAgICBtZXNzYWdlLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbmRTY3JlZW4oKSB7XG4gICAgY29uc3QgZW5kU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZFNjcmVlbicpO1xuICAgIGVuZFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICBjb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhcnQuYnV0dG9uJyk7XG4gICAgcmVzdGFydEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbn1cblxuZnVuY3Rpb24gaGlkZVN0YXJ0U2NyZWVuKCkge1xuICAgIGNvbnN0IHN0YXJ0U2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0U2NyZWVuJyk7XG4gICAgc3RhcnRTY3JlZW4uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQuYnV0dG9uJyk7XG4gICAgc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgY29uc3QgcmFuZG9taXplQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbWl6ZS5idXR0b24nKTtcbiAgICByYW5kb21pemVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaW52aXNpYmxlJyk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkcmFnZ2FibGU9J3RydWUnXWApKSB7XG4gICAgICAgIGl0ZW0uZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgfVxuICAgIGRpc3BsYXlNZXNzYWdlKCdZb3VyIHR1cm4uJyk7XG59XG4iLCJpbXBvcnQgUGxheWVyLCB7IENvbXB1dGVyIH0gZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgcmVuZGVySG9tZXBhZ2UsIHsgZGlzcGxheU1lc3NhZ2UsIGVuYWJsZURyYWdEcm9wLCBzaG93RW5kU2NyZWVuLCB1cGRhdGVHYW1lYm9hcmQsIGNvdmVyQ29tcHV0ZXJHYW1lYm9hcmQgfSBmcm9tIFwiLi9ET01cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgY29uc29sZS5sb2coZ2FtZSk7XG4gICAgcmVuZGVySG9tZXBhZ2UoZ2FtZSk7XG4gICAgdXBkYXRlR2FtZWJvYXJkKGdhbWUpO1xuICAgIGVuYWJsZURyYWdEcm9wKGdhbWUpO1xufVxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyID0gbmV3IENvbXB1dGVyKCk7XG5cbiAgICAgICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnBsYXllci5zaGlwcykge1xuICAgICAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBbZ2V0UmFuZG9tSW50KDEwKSwgZ2V0UmFuZG9tSW50KDEwKV07XG4gICAgICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIuZ2FtZWJvYXJkLmNhblBsYWNlU2hpcChzaGlwLCBwb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgcG9zKTtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHNoaXAgb2YgdGhpcy5jb21wdXRlci5zaGlwcykge1xuICAgICAgICAgICAgbGV0IGRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghZG9uZSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBbZ2V0UmFuZG9tSW50KDEwKSwgZ2V0UmFuZG9tSW50KDEwKV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tcHV0ZXIuZ2FtZWJvYXJkLmNhblBsYWNlU2hpcChzaGlwLCBwb3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwLCBwb3MpO1xuICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0YWtlVHVybnMgPSBhc3luYyAoW3gsIHldKSA9PiB7XG4gICAgICAgIGxldCBpc0xlZ2FsID0gdGhpcy5wbGF5ZXIuZ2V0QXR0YWNrQ29vcihbeCwgeV0pO1xuICAgICAgICBpZiAoIWlzTGVnYWwpIHtcbiAgICAgICAgICAgIGRpc3BsYXlNZXNzYWdlKGBOb3QgaGVyZSBhZ2FpbiEgUGljayBhbm90aGVyIHBsYWNlLmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcHV0ZXIuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIucmVjb3JkQXR0YWNrKFt4LCB5XSk7XG4gICAgICAgIHVwZGF0ZUdhbWVib2FyZCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuY29tcHV0ZXIubG9zZSgpKSB7XG4gICAgICAgICAgICBkaXNwbGF5TWVzc2FnZShgQ29uZ3JhdHVsYXRpb25zLCB5b3Ugd29uIWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzcGxheU1lc3NhZ2UoYENvbXB1dGVyIGlzIG1ha2luZyBhbiBhdHRhY2suLi5gKTtcbiAgICAgICAgICAgIGNvdmVyQ29tcHV0ZXJHYW1lYm9hcmQoKTtcbiAgICAgICAgICAgIGF3YWl0IHdhaXQoNTAwKTtcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmNvbXB1dGVyLmdldEF0dGFja0Nvb3IoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhwb3MpKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU1lc3NhZ2UoYFlvdXIgc2hpcCBnb3QgaGl0IWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5TWVzc2FnZShgJHt0aGlzLmNvbXB1dGVyLm5hbWV9J3MgYXR0YWNrIG1pc3NlZCFgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29tcHV0ZXIucmVjb3JkQXR0YWNrKHBvcyk7XG4gICAgICAgICAgICB1cGRhdGVHYW1lYm9hcmQodGhpcyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIubG9zZSgpKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU1lc3NhZ2UoYCR7dGhpcy5jb21wdXRlci5uYW1lfSBXb24uIFlvdSBsb3N0LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0VuZCh0aGlzLnBsYXllciwgdGhpcy5jb21wdXRlcikpIHtcbiAgICAgICAgICAgIHNob3dFbmRTY3JlZW4oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNFbmQocGxheWVyLCBjb21wdXRlcikge1xuICAgIHJldHVybiAocGxheWVyLmxvc2UoKSB8fCBjb21wdXRlci5sb3NlKCkpID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21JbnQobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5cbmZ1bmN0aW9uIHdhaXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIG1zKTtcbiAgICB9KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgbWFwID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBsZXQgcm93ID0gW11cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBsZXQgdW5pdCA9IHtcbiAgICAgICAgICBzaGlwOiBudWxsLFxuICAgICAgICAgIGF0dGFja2VkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICByb3cucHVzaCh1bml0KTtcbiAgICAgIH1cbiAgICAgIG1hcC5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHRoaXMubWFwID0gbWFwO1xuICB9XG5cbiAgY2FuUGxhY2VTaGlwKHNoaXAsIFt4LCB5XSkge1xuICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoc2hpcC5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgaWYgKHkgKyBzaGlwLmxlbmd0aCAtIDEgPiA5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSB5ICsgc2hpcC5sZW5ndGggLSAxOyBpID49IHk7IGktLSkge1xuICAgICAgICBpZiAodGhpcy5tYXBbeF1baV1bJ3NoaXAnXSAmJiB0aGlzLm1hcFt4XVtpXVsnc2hpcCddICE9PSBzaGlwKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh4ICsgc2hpcC5sZW5ndGggLSAxID4gOSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0geCArIHNoaXAubGVuZ3RoIC0gMTsgaSA+PSB4OyBpLS0pIHtcbiAgICAgICAgaWYgKHRoaXMubWFwW2ldW3ldWydzaGlwJ10gJiYgdGhpcy5tYXBbaV1beV1bJ3NoaXAnXSAhPT0gc2hpcCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwLCBbeCwgeV0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAodGhpcy5tYXBbaV1bal1bJ3NoaXAnXSA9PT0gc2hpcCkge1xuICAgICAgICAgIHRoaXMubWFwW2ldW2pdWydzaGlwJ10gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzaGlwLmRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0geSArIHNoaXAubGVuZ3RoIC0gMTsgaSA+PSB5OyBpLS0pIHtcbiAgICAgICAgdGhpcy5tYXBbeF1baV1bJ3NoaXAnXSA9IHNoaXA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSB4ICsgc2hpcC5sZW5ndGggLSAxOyBpID49IHg7IGktLSkge1xuICAgICAgICB0aGlzLm1hcFtpXVt5XVsnc2hpcCddID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKFt4LCB5XSkge1xuICAgIHRoaXMubWFwW3hdW3ldWydhdHRhY2tlZCddID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5tYXBbeF1beV1bJ3NoaXAnXSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5tYXBbeF1beV1bJ3NoaXAnXS5nb3RIaXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSA9ICdQbGF5ZXInKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHRoaXMuYXR0YWNrZWQgPSBbXTtcbiAgICAgICAgdGhpcy5jcmVhdGVEZWZhdWx0U2hpcHMoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEZWZhdWx0U2hpcHMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoaSwgJ2hvcml6b250YWwnKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGksICd2ZXJ0aWNhbCcpO1xuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXR0YWNrQ29vcihbeCwgeV0pIHtcbiAgICAgICAgaWYgKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXR0YWNrZWQuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkoW3gsIHldKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIHJlY29yZEF0dGFjayhbeCwgeV0pIHtcbiAgICAgICAgdGhpcy5hdHRhY2tlZC5wdXNoKEpTT04uc3RyaW5naWZ5KFt4LCB5XSkpO1xuICAgIH1cblxuICAgIGxvc2UoKSB7XG4gICAgZm9yIChsZXQgc2hpcCBvZiB0aGlzLnNoaXBzKSB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignQ29tcHV0ZXInKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0QXR0YWNrQ29vcigpIHtcbiAgICAgICAgbGV0IHBvcyA9IFtnZXRSYW5kb21JbnQoMTApLCBnZXRSYW5kb21JbnQoMTApXTtcbiAgICAgICAgd2hpbGUgKHRoaXMuYXR0YWNrZWQuaW5jbHVkZXMoSlNPTi5zdHJpbmdpZnkocG9zKSkpIHtcbiAgICAgICAgICAgIHBvcyA9IFtnZXRSYW5kb21JbnQoMTApLCBnZXRSYW5kb21JbnQoMTApXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCA9IDEsIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJykge1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgdGhpcy5faGl0ID0gMDtcbiAgfVxuXG4gIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgfVxuXG4gIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcbiAgfVxuXG4gIGdldCBoaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hpdDtcbiAgfVxuXG4gIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpcmVjdGlvbiBzaG91bGQgYmUgZWl0aGVyIGhvcml6b250YWwgb3IgdmVydGljYWwhJyk7XG4gICAgfVxuICB9XG5cbiAgZ290SGl0KHRpbWVzID0gMSkge1xuICAgIHRoaXMuX2hpdCArPSB0aW1lcztcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5oaXQgPj0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHN0YXJ0IGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=