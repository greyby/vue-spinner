(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSpinner"] = factory();
	else
		root["VueSpinner"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _PulseLoader = __webpack_require__(6);
	
	var _PulseLoader2 = _interopRequireDefault(_PulseLoader);
	
	var _ScaleLoader = __webpack_require__(13);
	
	var _ScaleLoader2 = _interopRequireDefault(_ScaleLoader);
	
	var _ClipLoader = __webpack_require__(18);
	
	var _ClipLoader2 = _interopRequireDefault(_ClipLoader);
	
	var _RiseLoader = __webpack_require__(23);
	
	var _RiseLoader2 = _interopRequireDefault(_RiseLoader);
	
	var _BeatLoader = __webpack_require__(28);
	
	var _BeatLoader2 = _interopRequireDefault(_BeatLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueSpinner = {
	  PulseLoader: _PulseLoader2.default,
	  ScaleLoader: _ScaleLoader2.default,
	  ClipLoader: _ClipLoader2.default,
	  RiseLoader: _RiseLoader2.default,
	  BeatLoader: _BeatLoader2.default
	};
	
	module.exports = VueSpinner;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7)
	module.exports = __webpack_require__(11)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(12)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/PulseLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5fdb9066&file=PulseLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./PulseLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5fdb9066&file=PulseLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./PulseLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "/*.v-spinner\n{\n    margin: 100px auto;\n    text-align: center;\n}\n*/.v-spinner .v-pulse\n{\n    -webkit-animation: v-pulseStretchDelay 0.75s infinite cubic-bezier(.2,.68,.18,1.08);\n            animation: v-pulseStretchDelay 0.75s infinite cubic-bezier(.2,.68,.18,1.08);\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    display: inline-block;         \n}\n\n.v-spinner .v-pulse1\n{\n  -webkit-animation-delay: 0.12s;\n          animation-delay: 0.12s;\n}\n.v-spinner .v-pulse2\n{\n  -webkit-animation-delay: 0.24s;\n          animation-delay: 0.24s;\n}\n.v-spinner .v-pulse3\n{\n  -webkit-animation-delay: 0.36s;\n          animation-delay: 0.36s;\n}\n\n@-webkit-keyframes v-pulseStretchDelay\n{\n    0%,\n    80%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n    45%\n    {\n        -webkit-transform: scale(0.1);\n                transform: scale(0.1);\n        -webkit-opacity: 0.7;             \n                opacity: 0.7;\n    }\n}\n\n@keyframes v-pulseStretchDelay\n{\n    0%,\n    80%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n    45%\n    {\n        -webkit-transform: scale(0.1);\n                transform: scale(0.1);\n        -webkit-opacity: 0.7;             \n                opacity: 0.7;\n    }\n}", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
	//     <div class="v-pulse v-pulse1" v-bind:style="spinnerStyle">
	//     </div><div class="v-pulse v-pulse2" v-bind:style="spinnerStyle">
	//     </div><div class="v-pulse v-pulse3" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'PulseLoader',
	
	  props: {
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    height: {
	      type: String,
	      default: '15px'
	    },
	    width: {
	      type: String,
	      default: '15px'
	    },
	    margin: {
	      type: String,
	      default: '2px'
	    },
	    radius: {
	      type: String,
	      default: '100%'
	    }
	  },
	  data: function data() {
	    return {
	      spinnerStyle: {
	        backgroundColor: this.color,
	        height: this.height,
	        width: this.width,
	        margin: this.margin,
	        borderRadius: this.radius
	        // TODO
	        // animation: ['sk-waveStretchDelay', '1s', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' '),
	        // animationFillMode: "both"
	      }
	    };
	  }
	};
	// </script>

	// <style>
	// /*.v-spinner
	// {
	//     margin: 100px auto;
	//     text-align: center;
	// }
	// */.v-spinner .v-pulse
	// {
	//     -webkit-animation: v-pulseStretchDelay 0.75s infinite cubic-bezier(.2,.68,.18,1.08);
	//             animation: v-pulseStretchDelay 0.75s infinite cubic-bezier(.2,.68,.18,1.08);
	//     -webkit-animation-fill-mode: both;
	// 	          animation-fill-mode: both;
	//     display: inline-block;        
	// }

	// .v-spinner .v-pulse1
	// {
	//   animation-delay: 0.12s;
	// }
	// .v-spinner .v-pulse2
	// {
	//   animation-delay: 0.24s;
	// }
	// .v-spinner .v-pulse3
	// {
	//   animation-delay: 0.36s;
	// }

	// @-webkit-keyframes v-pulseStretchDelay
	// {
	//     0%,
	//     80%
	//     {
	//         -webkit-transform: scale(1);
	//                 transform: scale(1);
	//         -webkit-opacity: 1;            
	//                 opacity: 1;
	//     }
	//     45%
	//     {
	//         -webkit-transform: scale(0.1);
	//                 transform: scale(0.1);
	//         -webkit-opacity: 0.7;            
	//                 opacity: 0.7;
	//     }
	// }

	// @keyframes v-pulseStretchDelay
	// {
	//     0%,
	//     80%
	//     {
	//         -webkit-transform: scale(1);
	//                 transform: scale(1);
	//         -webkit-opacity: 1;            
	//                 opacity: 1;
	//     }
	//     45%
	//     {
	//         -webkit-transform: scale(0.1);
	//                 transform: scale(0.1);
	//         -webkit-opacity: 0.7;            
	//                 opacity: 0.7;
	//     }
	// }
	// </style>

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-pulse v-pulse1\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-pulse v-pulse2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-pulse v-pulse3\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14)
	module.exports = __webpack_require__(16)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(17)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/ScaleLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f2e10784&file=ScaleLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ScaleLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f2e10784&file=ScaleLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ScaleLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n \n}\n\n.v-spinner .v-scale\n{\n    -webkit-animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);\n            animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n.v-spinner .v-scale1\n{\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n.v-spinner .v-scale2\n{\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.v-spinner .v-scale3\n{\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.v-spinner .v-scale4\n{\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.v-spinner .v-scale5\n{\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n@-webkit-keyframes v-scaleStretchDelay\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1);\n    }\n    50%\n    {\n        -webkit-transform: scaleY(0.4);\n                transform: scaleY(0.4);\n    }\n}\n\n@keyframes v-scaleStretchDelay\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1);\n    }\n    50%\n    {\n        -webkit-transform: scaleY(0.4);\n                transform: scaleY(0.4);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
	//     <div class="v-scale v-scale1" v-bind:style="spinnerStyle">
	//     </div><div class="v-scale v-scale2" v-bind:style="spinnerStyle">
	//     </div><div class="v-scale v-scale3" v-bind:style="spinnerStyle">
	//     </div><div class="v-scale v-scale4" v-bind:style="spinnerStyle">
	//     </div><div class="v-scale v-scale5" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'ScaleLoader',
	
	  props: {
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    height: {
	      type: String,
	      default: '35px'
	    },
	    width: {
	      type: String,
	      default: '4px'
	    },
	    margin: {
	      type: String,
	      default: '2px'
	    },
	    radius: {
	      type: String,
	      default: '2px'
	    }
	  },
	  data: function data() {
	    return {
	      spinnerStyle: {
	        backgroundColor: this.color,
	        height: this.height,
	        width: this.width,
	        margin: this.margin,
	        borderRadius: this.radius
	        // TODO
	        // animation: ['sk-waveStretchDelay', '1s', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' '),
	        // animationFillMode: "both"
	      }
	    };
	  }
	};
	// </script>

	// <style>
	// .v-spinner
	// {
	// /*	  font-size: 10px;

	//     width: 60px;
	//     height: 40px;*/
	//     /*margin: 25px auto;*/
	//     text-align: center;

	// }

	// .v-spinner .v-scale
	// {
	//     -webkit-animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);
	//             animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);
	//     -webkit-animation-fill-mode: both;
	// 	          animation-fill-mode: both;

	//     display: inline-block;
	// }

	// .v-spinner .v-scale1
	// {
	//   animation-delay: 0.1s;
	// }
	// .v-spinner .v-scale2
	// {
	//   animation-delay: 0.2s;
	// }
	// .v-spinner .v-scale3
	// {
	//   animation-delay: 0.3s;
	// }
	// .v-spinner .v-scale4
	// {
	//   animation-delay: 0.4s;
	// }
	// .v-spinner .v-scale5
	// {
	//   animation-delay: 0.5s;
	// }

	// @-webkit-keyframes v-scaleStretchDelay
	// {
	//     0%,
	//     100%
	//     {
	//         -webkit-transform: scaleY(1);
	//                 transform: scaleY(1);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scaleY(0.4);
	//                 transform: scaleY(0.4);
	//     }
	// }

	// @keyframes v-scaleStretchDelay
	// {
	//     0%,
	//     100%
	//     {
	//         -webkit-transform: scaleY(1);
	//                 transform: scaleY(1);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scaleY(0.4);
	//                 transform: scaleY(0.4);
	//     }
	// }
	// </style>

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-scale v-scale1\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-scale v-scale2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-scale v-scale3\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-scale v-scale4\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-scale v-scale5\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(19)
	module.exports = __webpack_require__(21)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(22)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/ClipLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2ed34952&file=ClipLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ClipLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2ed34952&file=ClipLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./ClipLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n \n}\n\n.v-spinner .v-clip\n{\n    -webkit-animation: v-clipDelay 0.75s 0s infinite linear;\n            animation: v-clipDelay 0.75s 0s infinite linear;\n    -webkit-animation-fill-mode: both;\n\t        animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n@-webkit-keyframes v-clipDelay\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg) scale(1);\n                transform: rotate(0deg) scale(1);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg) scale(0.8);\n                transform: rotate(180deg) scale(0.8);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg) scale(1);\n                transform: rotate(360deg) scale(1);\n    }\n}\n\n@keyframes v-clipDelay\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg) scale(1);\n                transform: rotate(0deg) scale(1);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg) scale(0.8);\n                transform: rotate(180deg) scale(0.8);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg) scale(1);\n                transform: rotate(360deg) scale(1);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
	//     <div class="v-clip" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'ClipLoader',
	
	  props: {
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    height: {
	      type: String,
	      default: '35px'
	    },
	    width: {
	      type: String,
	      default: '35px'
	    },
	    radius: {
	      type: String,
	      default: '100%'
	    }
	  },
	  data: function data() {
	    return {
	      spinnerStyle: {
	
	        height: this.height,
	        width: this.width,
	        border: '2px solid',
	        borderColor: this.color,
	        borderBottomColor: 'transparent',
	        borderRadius: this.radius,
	        background: 'transparent !important'
	      }
	    };
	  }
	};
	// </script>

	// <style>
	// .v-spinner
	// {
	// /*	  font-size: 10px;

	//     width: 60px;
	//     height: 40px;*/
	//     /*margin: 25px auto;*/
	//     text-align: center;

	// }

	// .v-spinner .v-clip
	// {
	//     -webkit-animation: v-clipDelay 0.75s 0s infinite linear;
	//             animation: v-clipDelay 0.75s 0s infinite linear;
	//     -webkit-animation-fill-mode: both;
	// 	        animation-fill-mode: both;

	//     display: inline-block;
	// }

	// @-webkit-keyframes v-clipDelay
	// {
	//     0%
	//     {
	//         -webkit-transform: rotate(0deg) scale(1);
	//                 transform: rotate(0deg) scale(1);
	//     }
	//     50%
	//     {
	//         -webkit-transform: rotate(180deg) scale(0.8);
	//                 transform: rotate(180deg) scale(0.8);
	//     }
	//     100%
	//     {
	//         -webkit-transform: rotate(360deg) scale(1);
	//                 transform: rotate(360deg) scale(1);
	//     }
	// }

	// @keyframes v-clipDelay
	// {
	//     0%
	//     {
	//         -webkit-transform: rotate(0deg) scale(1);
	//                 transform: rotate(0deg) scale(1);
	//     }
	//     50%
	//     {
	//         -webkit-transform: rotate(180deg) scale(0.8);
	//                 transform: rotate(180deg) scale(0.8);
	//     }
	//     100%
	//     {
	//         -webkit-transform: rotate(360deg) scale(1);
	//                 transform: rotate(360deg) scale(1);
	//     }
	// }
	// </style>

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-clip\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(24)
	module.exports = __webpack_require__(26)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(27)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/RiseLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(25);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f33464ea&file=RiseLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RiseLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f33464ea&file=RiseLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RiseLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n \n}\n\n.v-spinner .v-rise-odd\n{\n    -webkit-animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n            animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n    -webkit-animation-fill-mode: both;\n\t        animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n.v-spinner .v-rise-even\n{\n    -webkit-animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n            animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n@-webkit-keyframes v-riseOddDelay\n{\n    25\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    75%\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(0.75);\n                transform: translateY(0) scale(0.75);\n    }\n}\n\n@keyframes v-riseOddDelay\n{\n    25\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    75%\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(0.75);\n                transform: translateY(0) scale(0.75);\n    }\n}\n\n@-webkit-keyframes v-riseEvenDelay\n{\n    25\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    50%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    75%\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(1.0);\n                transform: translateY(0) scale(1.0);\n    }\n}\n\n@keyframes v-riseEvenDelay\n{\n    25\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    50%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    75%\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(1.0);\n                transform: translateY(0) scale(1.0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
	//     <div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
	//     </div><div class="v-rise v-rise-even" v-bind:style="spinnerStyle">
	//     </div><div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
	//     </div><div class="v-rise v-rise-even" v-bind:style="spinnerStyle">
	//     </div><div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'RiseLoader',
	
	  props: {
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    height: {
	      type: String,
	      default: '15px'
	    },
	    width: {
	      type: String,
	      default: '15px'
	    },
	    margin: {
	      type: String,
	      default: '2px'
	    },
	    radius: {
	      type: String,
	      default: '100%'
	    }
	  },
	  data: function data() {
	    return {
	      spinnerStyle: {
	        backgroundColor: this.color,
	        height: this.height,
	        width: this.width,
	        margin: this.margin,
	        borderRadius: this.radius
	      }
	    };
	  }
	};
	// </script>

	// <style>
	// .v-spinner
	// {
	// /*	  font-size: 10px;

	//     width: 60px;
	//     height: 40px;*/
	//     /*margin: 25px auto;*/
	//     text-align: center;

	// }

	// .v-spinner .v-rise-odd
	// {
	//     -webkit-animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);
	//             animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);
	//     -webkit-animation-fill-mode: both;
	// 	        animation-fill-mode: both;

	//     display: inline-block;
	// }

	// .v-spinner .v-rise-even
	// {
	//     -webkit-animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);
	//             animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);
	//     -webkit-animation-fill-mode: both;
	//             animation-fill-mode: both;

	//     display: inline-block;
	// }

	// @-webkit-keyframes v-riseOddDelay
	// {
	//     25
	//     {
	//         -webkit-transform: translateY(30px);
	//                 transform: translateY(30px);
	//     }
	//     0%
	//     {
	//         -webkit-transform: scale(0.4);
	//                 transform: scale(0.4);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scale(1.1);
	//                 transform: scale(1.1);
	//     }
	//     75%
	//     {
	//         -webkit-transform: translateY(-30px);
	//                 transform: translateY(-30px);
	//     }
	//     100%
	//     {
	//         -webkit-transform: translateY(0) scale(0.75);
	//                 transform: translateY(0) scale(0.75);
	//     }
	// }

	// @keyframes v-riseOddDelay
	// {
	//     25
	//     {
	//         -webkit-transform: translateY(30px);
	//                 transform: translateY(30px);
	//     }
	//     0%
	//     {
	//         -webkit-transform: scale(0.4);
	//                 transform: scale(0.4);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scale(1.1);
	//                 transform: scale(1.1);
	//     }
	//     75%
	//     {
	//         -webkit-transform: translateY(-30px);
	//                 transform: translateY(-30px);
	//     }
	//     100%
	//     {
	//         -webkit-transform: translateY(0) scale(0.75);
	//                 transform: translateY(0) scale(0.75);
	//     }
	// }

	// @-webkit-keyframes v-riseEvenDelay
	// {
	//     25
	//     {
	//         -webkit-transform: translateY(-30px);
	//                 transform: translateY(-30px);
	//     }
	//     0%
	//     {
	//         -webkit-transform: scale(1.1);
	//                 transform: scale(1.1);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scale(0.4);
	//                 transform: scale(0.4);
	//     }
	//     75%
	//     {
	//         -webkit-transform: translateY(30px);
	//                 transform: translateY(30px);
	//     }
	//     100%
	//     {
	//         -webkit-transform: translateY(0) scale(1.0);
	//                 transform: translateY(0) scale(1.0);
	//     }
	// }

	// @keyframes v-riseEvenDelay
	// {
	//     25
	//     {
	//         -webkit-transform: translateY(-30px);
	//                 transform: translateY(-30px);
	//     }
	//     0%
	//     {
	//         -webkit-transform: scale(1.1);
	//                 transform: scale(1.1);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scale(0.4);
	//                 transform: scale(0.4);
	//     }
	//     75%
	//     {
	//         -webkit-transform: translateY(30px);
	//                 transform: translateY(30px);
	//     }
	//     100%
	//     {
	//         -webkit-transform: translateY(0) scale(1.0);
	//                 transform: translateY(0) scale(1.0);
	//     }
	// }
	// </style>

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-rise v-rise-odd\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-even\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-odd\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-even\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-odd\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(29)
	module.exports = __webpack_require__(31)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(32)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/BeatLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(30);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-45341b90&file=BeatLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BeatLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-45341b90&file=BeatLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BeatLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "/*.v-spinner\n{\n    margin: 100px auto;\n    text-align: center;\n}\n*/.v-spinner .v-beat\n{\n    -webkit-animation: v-beatStretchDelay 0.7s infinite linear;\n            animation: v-beatStretchDelay 0.7s infinite linear;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    display: inline-block;         \n}\n\n.v-spinner .v-beat-odd\n{\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.v-spinner .v-beat-even\n{\n  -webkit-animation-delay: 0.35s;\n          animation-delay: 0.35s;\n}\n\n@-webkit-keyframes v-beatStretchDelay\n{\n    50%\n    {\n        -webkit-transform: scale(0.75);\n                transform: scale(0.75);\n        -webkit-opacity: 0.2;             \n                opacity: 0.2;\n    }\n    100%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}\n\n@keyframes v-beatStretchDelay\n{\n    50%\n    {\n        -webkit-transform: scale(0.75);\n                transform: scale(0.75);\n        -webkit-opacity: 0.2;             \n                opacity: 0.2;\n    }\n    100%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}", ""]);
	
	// exports


/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
	//     <div class="v-beat v-beat-odd" v-bind:style="spinnerStyle">
	//     </div><div class="v-beat v-beat-even" v-bind:style="spinnerStyle">
	//     </div><div class="v-beat v-beat-odd" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'BeatLoader',
	
	  props: {
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    height: {
	      type: String,
	      default: '15px'
	    },
	    width: {
	      type: String,
	      default: '15px'
	    },
	    margin: {
	      type: String,
	      default: '2px'
	    },
	    radius: {
	      type: String,
	      default: '100%'
	    }
	  },
	  data: function data() {
	    return {
	      spinnerStyle: {
	        backgroundColor: this.color,
	        height: this.height,
	        width: this.width,
	        margin: this.margin,
	        borderRadius: this.radius
	        // TODO
	        // animation: ['sk-waveStretchDelay', '1s', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' '),
	        // animationFillMode: "both"
	      }
	    };
	  }
	};
	// </script>

	// <style>
	// /*.v-spinner
	// {
	//     margin: 100px auto;
	//     text-align: center;
	// }
	// */.v-spinner .v-beat
	// {
	//     -webkit-animation: v-beatStretchDelay 0.7s infinite linear;
	//             animation: v-beatStretchDelay 0.7s infinite linear;
	//     -webkit-animation-fill-mode: both;
	// 	          animation-fill-mode: both;
	//     display: inline-block;        
	// }

	// .v-spinner .v-beat-odd
	// {
	//   animation-delay: 0s;
	// }
	// .v-spinner .v-beat-even
	// {
	//   animation-delay: 0.35s;
	// }

	// @-webkit-keyframes v-beatStretchDelay
	// {
	//     50%
	//     {
	//         -webkit-transform: scale(0.75);
	//                 transform: scale(0.75);
	//         -webkit-opacity: 0.2;            
	//                 opacity: 0.2;
	//     }
	//     100%
	//     {
	//         -webkit-transform: scale(1);
	//                 transform: scale(1);
	//         -webkit-opacity: 1;            
	//                 opacity: 1;
	//     }
	// }

	// @keyframes v-beatStretchDelay
	// {
	//     50%
	//     {
	//         -webkit-transform: scale(0.75);
	//                 transform: scale(0.75);
	//         -webkit-opacity: 0.2;            
	//                 opacity: 0.2;
	//     }
	//     100%
	//     {
	//         -webkit-transform: scale(1);
	//                 transform: scale(1);
	//         -webkit-opacity: 1;            
	//                 opacity: 1;
	//     }
	// }
	// </style>

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-beat v-beat-odd\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-beat v-beat-even\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-beat v-beat-odd\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-spinner.js.map