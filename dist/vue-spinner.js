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
	
	var _PulseLoader = __webpack_require__(17);
	
	var _PulseLoader2 = _interopRequireDefault(_PulseLoader);
	
	var _GridLoader = __webpack_require__(24);
	
	var _GridLoader2 = _interopRequireDefault(_GridLoader);
	
	var _ClipLoader = __webpack_require__(29);
	
	var _ClipLoader2 = _interopRequireDefault(_ClipLoader);
	
	var _RiseLoader = __webpack_require__(34);
	
	var _RiseLoader2 = _interopRequireDefault(_RiseLoader);
	
	var _BeatLoader = __webpack_require__(39);
	
	var _BeatLoader2 = _interopRequireDefault(_BeatLoader);
	
	var _SyncLoader = __webpack_require__(44);
	
	var _SyncLoader2 = _interopRequireDefault(_SyncLoader);
	
	var _RotateLoader = __webpack_require__(49);
	
	var _RotateLoader2 = _interopRequireDefault(_RotateLoader);
	
	var _FadeLoader = __webpack_require__(54);
	
	var _FadeLoader2 = _interopRequireDefault(_FadeLoader);
	
	var _PacmanLoader = __webpack_require__(59);
	
	var _PacmanLoader2 = _interopRequireDefault(_PacmanLoader);
	
	var _SquareLoader = __webpack_require__(64);
	
	var _SquareLoader2 = _interopRequireDefault(_SquareLoader);
	
	var _ScaleLoader = __webpack_require__(69);
	
	var _ScaleLoader2 = _interopRequireDefault(_ScaleLoader);
	
	var _SkewLoader = __webpack_require__(74);
	
	var _SkewLoader2 = _interopRequireDefault(_SkewLoader);
	
	var _MoonLoader = __webpack_require__(79);
	
	var _MoonLoader2 = _interopRequireDefault(_MoonLoader);
	
	var _RingLoader = __webpack_require__(84);
	
	var _RingLoader2 = _interopRequireDefault(_RingLoader);
	
	var _BounceLoader = __webpack_require__(89);
	
	var _BounceLoader2 = _interopRequireDefault(_BounceLoader);
	
	var _DotLoader = __webpack_require__(94);
	
	var _DotLoader2 = _interopRequireDefault(_DotLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueSpinner = {
	  PulseLoader: _PulseLoader2.default,
	  GridLoader: _GridLoader2.default,
	  ClipLoader: _ClipLoader2.default,
	  RiseLoader: _RiseLoader2.default,
	  BeatLoader: _BeatLoader2.default,
	  SyncLoader: _SyncLoader2.default,
	  RotateLoader: _RotateLoader2.default,
	  FadeLoader: _FadeLoader2.default,
	  PacmanLoader: _PacmanLoader2.default,
	  SquareLoader: _SquareLoader2.default,
	  ScaleLoader: _ScaleLoader2.default,
	  SkewLoader: _SkewLoader2.default,
	  MoonLoader: _MoonLoader2.default,
	  RingLoader: _RingLoader2.default,
	  BounceLoader: _BounceLoader2.default,
	  DotLoader: _DotLoader2.default
	};
	
	module.exports = VueSpinner;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(22)
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/PulseLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, "/*.v-spinner\n{\n    margin: 100px auto;\n    text-align: center;\n}\n*/\n\n@-webkit-keyframes v-pulseStretchDelay\n{\n    0%,\n    80%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n    45%\n    {\n        -webkit-transform: scale(0.1);\n                transform: scale(0.1);\n        -webkit-opacity: 0.7;             \n                opacity: 0.7;\n    }\n}\n\n@keyframes v-pulseStretchDelay\n{\n    0%,\n    80%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n    45%\n    {\n        -webkit-transform: scale(0.1);\n                transform: scale(0.1);\n        -webkit-opacity: 0.7;             \n                opacity: 0.7;\n    }\n}", ""]);
	
	// exports


/***/ },
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-pulse v-pulse1" v-bind:style="[spinnerStyle,spinnerDelay1]">
	//     </div><div class="v-pulse v-pulse2" v-bind:style="[spinnerStyle,spinnerDelay2]">
	//     </div><div class="v-pulse v-pulse3" v-bind:style="[spinnerStyle,spinnerDelay3]">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'PulseLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
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
	        width: this.size,
	        height: this.size,
	        margin: this.margin,
	        borderRadius: this.radius,
	        display: 'inline-block',
	        animationName: 'v-pulseStretchDelay',
	        animationDuration: '0.75s',
	        animationIterationCount: 'infinite',
	        animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
	        animationFillMode: 'both'
	      },
	      spinnerDelay1: {
	        animationDelay: '0.12s'
	      },
	      spinnerDelay2: {
	        animationDelay: '0.24s'
	      },
	      spinnerDelay3: {
	        animationDelay: '0.36s'
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
	// */

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
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-pulse v-pulse1\" v-bind:style=\"[spinnerStyle,spinnerDelay1]\">\n    </div><div class=\"v-pulse v-pulse2\" v-bind:style=\"[spinnerStyle,spinnerDelay2]\">\n    </div><div class=\"v-pulse v-pulse3\" v-bind:style=\"[spinnerStyle,spinnerDelay3]\">\n    </div>\n  </div>";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(25)
	__vue_script__ = __webpack_require__(27)
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/GridLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-52a435c8&file=GridLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GridLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-52a435c8&file=GridLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./GridLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, "@-webkit-keyframes v-gridStretchDelay\n{\n    0%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n    50%\n    {\n        -webkit-transform: scale(0.5);\n                transform: scale(0.5);\n        -webkit-opacity: 0.7;             \n                opacity: 0.7;\n    }\n    100%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}\n\n@keyframes v-gridStretchDelay\n{\n    0%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n    }\n    50%\n    {\n        -webkit-transform: scale(0.5);\n                transform: scale(0.5);\n        -webkit-opacity: 0.7;             \n                opacity: 0.7;\n    }\n    100%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}", ""]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="v-spinner" v-bind:style="containerStyle" v-show="loading">
	//     <div class="v-grid v-grid1" v-bind:style="[spinnerStyle,animationStyle,animationStyle1]">
	//     </div><div class="v-grid v-grid2" v-bind:style="[spinnerStyle,animationStyle,animationStyle2]">
	//     </div><div class="v-grid v-grid3" v-bind:style="[spinnerStyle,animationStyle,animationStyle3]">
	//     </div><div class="v-grid v-grid4" v-bind:style="[spinnerStyle,animationStyle,animationStyle4]">
	//     </div><div class="v-grid v-grid5" v-bind:style="[spinnerStyle,animationStyle,animationStyle5]">
	//     </div><div class="v-grid v-grid6" v-bind:style="[spinnerStyle,animationStyle,animationStyle6]">
	//     </div><div class="v-grid v-grid7" v-bind:style="[spinnerStyle,animationStyle,animationStyle7]">
	//     </div><div class="v-grid v-grid8" v-bind:style="[spinnerStyle,animationStyle,animationStyle8]">
	//     </div><div class="v-grid v-grid9" v-bind:style="[spinnerStyle,animationStyle,animationStyle9]">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'GridLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
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
	        width: this.size,
	        height: this.size,
	        margin: this.margin,
	        borderRadius: this.radius
	      }
	    };
	  },
	
	  computed: {
	    animationStyle: function animationStyle() {
	      return {
	        animationName: 'v-gridStretchDelay',
	        animationIterationCount: 'infinite',
	        animationTimingFunction: 'ease',
	        animationFillMode: 'both',
	        display: 'inline-block'
	      };
	    },
	    animationStyle1: function animationStyle1() {
	      return {
	        animationDelay: this.delay(),
	        animationDuration: this.duration()
	      };
	    },
	    animationStyle2: function animationStyle2() {
	      return {
	        animationDelay: this.delay(),
	        animationDuration: this.duration()
	      };
	    },
	    animationStyle3: function animationStyle3() {
	      return {
	        animationDelay: this.delay(),
	        animationDuration: this.duration()
	      };
	    },
	    animationStyle4: function animationStyle4() {
	      return {
	        animationDelay: this.delay(),
	        animationDuration: this.duration()
	      };
	    },
	    animationStyle5: function animationStyle5() {
	      return {
	        animationDelay: this.delay(),
	        animationDuration: this.duration()
	      };
	    },
	    animationStyle6: function animationStyle6() {
	      return {
	        animationDelay: this.delay(),
	        animationDuration: this.duration()
	      };
	    },
	    animationStyle7: function animationStyle7() {
	      return {
	        animationDelay: this.delay(),
	        animationDuration: this.duration()
	      };
	    },
	    animationStyle8: function animationStyle8() {
	      return {
	        animationDelay: this.delay(),
	        animationDuration: this.duration()
	      };
	    },
	    animationStyle9: function animationStyle9() {
	      return {
	        animationDelay: this.delay(),
	        animationDuration: this.duration()
	      };
	    },
	    containerStyle: function containerStyle() {
	      return {
	        width: parseFloat(this.size) * 3 + parseFloat(this.margin) * 6 + 'px',
	        fontSize: 0
	      };
	    }
	  },
	  methods: {
	    random: function random(value) {
	      return Math.random() * value;
	    },
	    delay: function delay() {
	      return this.random(100) / 100 - 0.2 + 's';
	    },
	    duration: function duration() {
	      return this.random(100) / 100 + 0.6 + 's';
	    }
	  }
	};
	// </script>

	// <style>
	// @-webkit-keyframes v-gridStretchDelay
	// {
	//     0%
	//     {
	//         -webkit-transform: scale(1);
	//                 transform: scale(1);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scale(0.5);
	//                 transform: scale(0.5);
	//         -webkit-opacity: 0.7;            
	//                 opacity: 0.7;
	//     }
	//     100%
	//     {
	//         -webkit-transform: scale(1);
	//                 transform: scale(1);
	//         -webkit-opacity: 1;            
	//                 opacity: 1;
	//     }
	// }

	// @keyframes v-gridStretchDelay
	// {
	//     0%
	//     {
	//         -webkit-transform: scale(1);
	//                 transform: scale(1);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scale(0.5);
	//                 transform: scale(0.5);
	//         -webkit-opacity: 0.7;            
	//                 opacity: 0.7;
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
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-bind:style=\"containerStyle\" v-show=\"loading\">\n    <div class=\"v-grid v-grid1\" v-bind:style=\"[spinnerStyle,animationStyle,animationStyle1]\">\n    </div><div class=\"v-grid v-grid2\" v-bind:style=\"[spinnerStyle,animationStyle,animationStyle2]\">\n    </div><div class=\"v-grid v-grid3\" v-bind:style=\"[spinnerStyle,animationStyle,animationStyle3]\">\n    </div><div class=\"v-grid v-grid4\" v-bind:style=\"[spinnerStyle,animationStyle,animationStyle4]\">\n    </div><div class=\"v-grid v-grid5\" v-bind:style=\"[spinnerStyle,animationStyle,animationStyle5]\">\n    </div><div class=\"v-grid v-grid6\" v-bind:style=\"[spinnerStyle,animationStyle,animationStyle6]\">\n    </div><div class=\"v-grid v-grid7\" v-bind:style=\"[spinnerStyle,animationStyle,animationStyle7]\">\n    </div><div class=\"v-grid v-grid8\" v-bind:style=\"[spinnerStyle,animationStyle,animationStyle8]\">\n    </div><div class=\"v-grid v-grid9\" v-bind:style=\"[spinnerStyle,animationStyle,animationStyle9]\">\n    </div>\n  </div>";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(30)
	__vue_script__ = __webpack_require__(32)
	__vue_template__ = __webpack_require__(33)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/ClipLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n \n}\n\n.v-spinner .v-clip\n{\n    -webkit-animation: v-clipDelay 0.75s 0s infinite linear;\n            animation: v-clipDelay 0.75s 0s infinite linear;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n@-webkit-keyframes v-clipDelay\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg) scale(1);\n                transform: rotate(0deg) scale(1);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg) scale(0.8);\n                transform: rotate(180deg) scale(0.8);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg) scale(1);\n                transform: rotate(360deg) scale(1);\n    }\n}\n\n@keyframes v-clipDelay\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg) scale(1);\n                transform: rotate(0deg) scale(1);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg) scale(0.8);\n                transform: rotate(180deg) scale(0.8);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg) scale(1);\n                transform: rotate(360deg) scale(1);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-clip" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'ClipLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '35px'
	    },
	    radius: {
	      type: String,
	      default: '100%'
	    }
	  },
	  computed: {
	    spinnerStyle: function spinnerStyle() {
	      return {
	        height: this.size,
	        width: this.size,
	        borderWidth: '2px',
	        borderStyle: 'solid',
	        borderColor: this.color + ' ' + this.color + ' transparent',
	        borderRadius: this.radius,
	        background: 'transparent !important'
	      };
	    }
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
	// 	          animation-fill-mode: both;

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
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-clip\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(37)
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/RiseLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n \n}\n\n.v-spinner .v-rise-odd\n{\n    -webkit-animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n            animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n    -webkit-animation-fill-mode: both;\n\t        animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n.v-spinner .v-rise-even\n{\n    -webkit-animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n            animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n@-webkit-keyframes v-riseOddDelay\n{\n    25\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    75%\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(0.75);\n                transform: translateY(0) scale(0.75);\n    }\n}\n\n@keyframes v-riseOddDelay\n{\n    25\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    75%\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(0.75);\n                transform: translateY(0) scale(0.75);\n    }\n}\n\n@-webkit-keyframes v-riseEvenDelay\n{\n    25\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    50%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    75%\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(1.0);\n                transform: translateY(0) scale(1.0);\n    }\n}\n\n@keyframes v-riseEvenDelay\n{\n    25\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    50%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    75%\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(1.0);\n                transform: translateY(0) scale(1.0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
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
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
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
	        height: this.size,
	        width: this.size,
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
/* 38 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-rise v-rise-odd\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-even\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-odd\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-even\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-odd\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(40)
	__vue_script__ = __webpack_require__(42)
	__vue_template__ = __webpack_require__(43)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/BeatLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-beat\n{\n    -webkit-animation: v-beatStretchDelay 0.7s infinite linear;\n            animation: v-beatStretchDelay 0.7s infinite linear;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    display: inline-block;         \n}\n\n.v-spinner .v-beat-odd\n{\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.v-spinner .v-beat-even\n{\n  -webkit-animation-delay: 0.35s;\n          animation-delay: 0.35s;\n}\n\n@-webkit-keyframes v-beatStretchDelay\n{\n    50%\n    {\n        -webkit-transform: scale(0.75);\n                transform: scale(0.75);\n        -webkit-opacity: 0.2;             \n                opacity: 0.2;\n    }\n    100%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}\n\n@keyframes v-beatStretchDelay\n{\n    50%\n    {\n        -webkit-transform: scale(0.75);\n                transform: scale(0.75);\n        -webkit-opacity: 0.2;             \n                opacity: 0.2;\n    }\n    100%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}", ""]);
	
	// exports


/***/ },
/* 42 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
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
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
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
	        height: this.size,
	        width: this.size,
	        margin: this.margin,
	        borderRadius: this.radius
	      }
	    };
	  }
	};
	// </script>

	// <style>

	// .v-spinner .v-beat
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
/* 43 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-beat v-beat-odd\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-beat v-beat-even\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-beat v-beat-odd\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(45)
	__vue_script__ = __webpack_require__(47)
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/SyncLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-00325edd&file=SyncLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SyncLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-00325edd&file=SyncLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SyncLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, "@-webkit-keyframes v-syncStretchDelay\n{\n    33%\n    {\n        -webkit-transform: translateY(10px);\n                transform: translateY(10px);\n    }\n    66%\n    {\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n@keyframes v-syncStretchDelay\n{\n    33%\n    {\n        -webkit-transform: translateY(10px);\n                transform: translateY(10px);\n    }\n    66%\n    {\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 47 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-sync v-sync1" v-bind:style="[spinnerStyle,spinnerDelay1]">
	//     </div><div class="v-sync v-sync2" v-bind:style="[spinnerStyle,spinnerDelay2]">
	//     </div><div class="v-sync v-sync3" v-bind:style="[spinnerStyle,spinnerDelay3]">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'SyncLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
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
	        height: this.size,
	        width: this.size,
	        margin: this.margin,
	        borderRadius: this.radius,
	        display: 'inline-block',
	        animationName: 'v-syncStretchDelay',
	        animationDuration: '0.6s',
	        animationIterationCount: 'infinite',
	        animationTimingFunction: 'ease-in-out',
	        animationFillMode: 'both'
	      },
	      spinnerDelay1: {
	        animationDelay: '0.07s'
	      },
	      spinnerDelay2: {
	        animationDelay: '0.14s'
	      },
	      spinnerDelay3: {
	        animationDelay: '0.21s'
	      }
	    };
	  }
	};
	// </script>

	// <style>

	// @-webkit-keyframes v-syncStretchDelay
	// {
	//     33%
	//     {
	//         -webkit-transform: translateY(10px);
	//                 transform: translateY(10px);
	//     }
	//     66%
	//     {
	//         -webkit-transform: translateY(-10px);
	//                 transform: translateY(-10px);
	//     }
	//     100%
	//     {
	//         -webkit-transform: translateY(0);
	//                 transform: translateY(0);
	//     }
	// }

	// @keyframes v-syncStretchDelay
	// {
	//     33%
	//     {
	//         -webkit-transform: translateY(10px);
	//                 transform: translateY(10px);
	//     }
	//     66%
	//     {
	//         -webkit-transform: translateY(-10px);
	//                 transform: translateY(-10px);
	//     }
	//     100%
	//     {
	//         -webkit-transform: translateY(0);
	//                 transform: translateY(0);
	//     }
	// }
	// </style>

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-sync v-sync1\" v-bind:style=\"[spinnerStyle,spinnerDelay1]\">\n    </div><div class=\"v-sync v-sync2\" v-bind:style=\"[spinnerStyle,spinnerDelay2]\">\n    </div><div class=\"v-sync v-sync3\" v-bind:style=\"[spinnerStyle,spinnerDelay3]\">\n    </div>\n  </div>";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(50)
	__vue_script__ = __webpack_require__(52)
	__vue_template__ = __webpack_require__(53)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/RotateLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-58425fdd&file=RotateLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RotateLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-58425fdd&file=RotateLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RotateLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-rotate1\n{\n    -webkit-animation: v-rotateStretchDelay 1s 0s infinite cubic-bezier(.7,-.13,.22,.86);\n            animation: v-rotateStretchDelay 1s 0s infinite cubic-bezier(.7,-.13,.22,.86);\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    display: inline-block;\n    position: relative;\n}\n\n.v-spinner .v-rotate2\n{\n  opacity: 0.8;\n  position: absolute;\n  top: 0;\n  left: -28px;\n}\n\n.v-spinner .v-rotate3\n{\n  opacity: 0.8;\n  position: absolute;\n  top: 0;\n  left: 25px;\n}\n\n@-webkit-keyframes v-rotateStretchDelay\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-rotateStretchDelay\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-rotate v-rotate1" v-bind:style="spinnerStyle">
	//     <div class="v-rotate v-rotate2" v-bind:style="spinnerStyle">
	//     </div><div class="v-rotate v-rotate3" v-bind:style="spinnerStyle">
	//     </div></div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'RotateLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
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
	        height: this.size,
	        width: this.size,
	        margin: this.margin,
	        borderRadius: this.radius
	      }
	    };
	  }
	};
	// </script>

	// <style>

	// .v-spinner .v-rotate1
	// {
	//     -webkit-animation: v-rotateStretchDelay 1s 0s infinite cubic-bezier(.7,-.13,.22,.86);
	//             animation: v-rotateStretchDelay 1s 0s infinite cubic-bezier(.7,-.13,.22,.86);
	//     -webkit-animation-fill-mode: both;
	//             animation-fill-mode: both;
	//     display: inline-block;
	//     position: relative;
	// }

	// .v-spinner .v-rotate2
	// {
	//   opacity: 0.8;
	//   position: absolute;
	//   top: 0;
	//   left: -28px;
	// }

	// .v-spinner .v-rotate3
	// {
	//   opacity: 0.8;
	//   position: absolute;
	//   top: 0;
	//   left: 25px;
	// }

	// @-webkit-keyframes v-rotateStretchDelay
	// {
	//     0%
	//     {
	//         -webkit-transform: rotate(0deg);
	//                 transform: rotate(0deg);
	//     }
	//     50%
	//     {
	//         -webkit-transform: rotate(180deg);
	//                 transform: rotate(180deg);
	//     }
	//     100%
	//     {
	//         -webkit-transform: rotate(360deg);
	//                 transform: rotate(360deg);
	//     }
	// }

	// @keyframes v-rotateStretchDelay
	// {
	//     0%
	//     {
	//         -webkit-transform: rotate(0deg);
	//                 transform: rotate(0deg);
	//     }
	//     50%
	//     {
	//         -webkit-transform: rotate(180deg);
	//                 transform: rotate(180deg);
	//     }
	//     100%
	//     {
	//         -webkit-transform: rotate(360deg);
	//                 transform: rotate(360deg);
	//     }
	// }
	// </style>

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-rotate v-rotate1\" v-bind:style=\"spinnerStyle\">\n    <div class=\"v-rotate v-rotate2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rotate v-rotate3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>";

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(55)
	__vue_script__ = __webpack_require__(57)
	__vue_template__ = __webpack_require__(58)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/FadeLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(56);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-087f757e&file=FadeLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./FadeLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-087f757e&file=FadeLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./FadeLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-fade\n{\n    -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n            animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    position: absolute;               \n}\n\n@-webkit-keyframes v-fadeStretchDelay\n{\n    50%\n    {\n        -webkit-opacity: 0.3;             \n                opacity: 0.3;\n    }\n    100%\n    {\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}\n\n@keyframes v-fadeStretchDelay\n{\n    50%\n    {\n        -webkit-opacity: 0.3;             \n                opacity: 0.3;\n    }\n    100%\n    {\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}", ""]);
	
	// exports


/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="v-spinner" v-bind:style="{position: 'relative', fontSize: 0}" v-show="loading">
	//   <!-- <div class="v-spinner" v-bind:style="containerStyle"> -->
	//     <div class="v-fade v-fade1" v-bind:style="[spinnerStyle,animationStyle1]">
	//     </div><div class="v-fade v-fade2" v-bind:style="[spinnerStyle,animationStyle2]">
	//     </div><div class="v-fade v-fade3" v-bind:style="[spinnerStyle,animationStyle3]">
	//     </div><div class="v-fade v-fade4" v-bind:style="[spinnerStyle,animationStyle4]">
	//     </div><div class="v-fade v-fade5" v-bind:style="[spinnerStyle,animationStyle5]">
	//     </div><div class="v-fade v-fade6" v-bind:style="[spinnerStyle,animationStyle6]">
	//     </div><div class="v-fade v-fade7" v-bind:style="[spinnerStyle,animationStyle7]">
	//     </div><div class="v-fade v-fade8" v-bind:style="[spinnerStyle,animationStyle8]">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'FadeLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
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
	      default: '5px'
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
	      },
	      radius: '20px'
	    };
	  },
	
	  computed: {
	    ngRadius: function ngRadius() {
	      return '-' + this.radius;
	    },
	    quarter: function quarter() {
	      return parseFloat(this.radius) / 2 + parseFloat(this.radius) / 5.5 + 'px';
	    },
	    ngQuarter: function ngQuarter() {
	      return '-' + this.quarter;
	    },
	    animationStyle1: function animationStyle1() {
	      return {
	        top: this.radius,
	        left: 0,
	        animationDelay: '0.12s'
	      };
	    },
	    animationStyle2: function animationStyle2() {
	      return {
	        top: this.quarter,
	        left: this.quarter,
	        animationDelay: '0.24s',
	        transform: 'rotate(-45deg)'
	      };
	    },
	    animationStyle3: function animationStyle3() {
	      return {
	        top: 0,
	        left: this.radius,
	        animationDelay: '0.36s',
	        transform: 'rotate(90deg)'
	      };
	    },
	    animationStyle4: function animationStyle4() {
	      return {
	        top: this.ngQuarter,
	        left: this.quarter,
	        animationDelay: '0.48s',
	        transform: 'rotate(45deg)'
	      };
	    },
	    animationStyle5: function animationStyle5() {
	      return {
	        top: this.ngRadius,
	        left: 0,
	        animationDelay: '0.60s'
	      };
	    },
	    animationStyle6: function animationStyle6() {
	      return {
	        top: this.ngQuarter,
	        left: this.ngQuarter,
	        animationDelay: '0.72s',
	        transform: 'rotate(-45deg)'
	      };
	    },
	    animationStyle7: function animationStyle7() {
	      return {
	        top: 0,
	        left: this.ngRadius,
	        animationDelay: '0.84s',
	        transform: 'rotate(90deg)'
	      };
	    },
	    animationStyle8: function animationStyle8() {
	      return {
	        top: this.quarter,
	        left: this.ngQuarter,
	        animationDelay: '0.96s',
	        transform: 'rotate(45deg)'
	      };
	    }
	  }
	
	};
	// </script>

	// <style>

	// .v-spinner .v-fade
	// {
	//     -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
	//             animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
	//     -webkit-animation-fill-mode: both;
	// 	          animation-fill-mode: both;
	//     position: absolute;              
	// }

	// @-webkit-keyframes v-fadeStretchDelay
	// {
	//     50%
	//     {
	//         -webkit-opacity: 0.3;            
	//                 opacity: 0.3;
	//     }
	//     100%
	//     {
	//         -webkit-opacity: 1;            
	//                 opacity: 1;
	//     }
	// }

	// @keyframes v-fadeStretchDelay
	// {
	//     50%
	//     {
	//         -webkit-opacity: 0.3;            
	//                 opacity: 0.3;
	//     }
	//     100%
	//     {
	//         -webkit-opacity: 1;            
	//                 opacity: 1;
	//     }
	// }
	// </style>

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-bind:style=\"{position: 'relative', fontSize: 0}\" v-show=\"loading\">\n  <!-- <div class=\"v-spinner\" v-bind:style=\"containerStyle\"> -->\n    <div class=\"v-fade v-fade1\" v-bind:style=\"[spinnerStyle,animationStyle1]\">\n    </div><div class=\"v-fade v-fade2\" v-bind:style=\"[spinnerStyle,animationStyle2]\">\n    </div><div class=\"v-fade v-fade3\" v-bind:style=\"[spinnerStyle,animationStyle3]\">\n    </div><div class=\"v-fade v-fade4\" v-bind:style=\"[spinnerStyle,animationStyle4]\">\n    </div><div class=\"v-fade v-fade5\" v-bind:style=\"[spinnerStyle,animationStyle5]\">\n    </div><div class=\"v-fade v-fade6\" v-bind:style=\"[spinnerStyle,animationStyle6]\">\n    </div><div class=\"v-fade v-fade7\" v-bind:style=\"[spinnerStyle,animationStyle7]\">\n    </div><div class=\"v-fade v-fade8\" v-bind:style=\"[spinnerStyle,animationStyle8]\">\n    </div>\n  </div>";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(60)
	__vue_script__ = __webpack_require__(62)
	__vue_template__ = __webpack_require__(63)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/PacmanLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f9387c6c&file=PacmanLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./PacmanLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-f9387c6c&file=PacmanLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./PacmanLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n    text-align: center;\n}\n\n/*TODO computed transform */\n@-webkit-keyframes v-pacmanStretchDelay\n{\n    75%\n    {\n        -webkit-opacity: 0.7;             \n        opacity: 0.7;\n    }\n    100%\n    {\n        -webkit-transform: translate(-100px, -6.25px);\n                transform: translate(-100px, -6.25px);\n    }\n}\n\n@keyframes v-pacmanStretchDelay\n{\n    75%\n    {\n        -webkit-opacity: 0.7;             \n        opacity: 0.7;\n    }\n    100%\n    {\n        -webkit-transform: translate(-100px, -6.25px);\n                transform: translate(-100px, -6.25px);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 62 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-bind:style="{position: 'relative', fontSize: 0}" v-show="loading">
	//     <div class="v-pacman v-pacman1" v-bind:style="spinnerStyle1">
	//     </div><div class="v-pacman v-pacman2" v-bind:style="[spinnerStyle,animationStyle,spinnerDelay2]">
	//     </div><div class="v-pacman v-pacman3" v-bind:style="[spinnerStyle,animationStyle,spinnerDelay3]">
	//     </div><div class="v-pacman v-pacman4" v-bind:style="[spinnerStyle,animationStyle,spinnerDelay4]">
	//     </div><div class="v-pacman v-pacman5" v-bind:style="[spinnerStyle,animationStyle,spinnerDelay5]">
	//     </div>
	// </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'PacmanLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '25px'
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
	      spinnerDelay2: {
	        animationDelay: '0.25s'
	      },
	      spinnerDelay3: {
	        animationDelay: '0.50s'
	      },
	      spinnerDelay4: {
	        animationDelay: '0.75s'
	      },
	      spinnerDelay5: {
	        animationDelay: '1s'
	      }
	    };
	  },
	
	  computed: {
	    spinnerStyle: function spinnerStyle() {
	      return {
	        backgroundColor: this.color,
	        width: this.size,
	        height: this.size,
	        margin: this.margin,
	        borderRadius: this.radius
	      };
	    },
	    border1: function border1() {
	      return this.size + ' solid transparent';
	    },
	    border2: function border2() {
	      return this.size + ' solid ' + this.color;
	    },
	    spinnerStyle1: function spinnerStyle1() {
	      return {
	        width: 0,
	        height: 0,
	        borderTop: this.border2,
	        borderRight: this.border1,
	        borderBottom: this.border2,
	        borderLeft: this.border2,
	        borderRadius: this.size
	      };
	    },
	    animationStyle: function animationStyle() {
	      return {
	        width: '10px',
	        height: '10px',
	        transform: 'translate(0, ' + -parseFloat(this.size) / 4 + 'px)',
	        position: 'absolute',
	        top: '25px',
	        left: '100px',
	        animationName: 'v-pacmanStretchDelay',
	        animationDuration: '1s',
	        animationIterationCount: 'infinite',
	        animationTimingFunction: 'linear',
	        animationFillMode: 'both'
	      };
	    }
	  }
	
	};
	// </script>

	// <style>
	// .v-spinner
	// {
	//     text-align: center;
	// }

	// /*TODO computed transform */
	// @-webkit-keyframes v-pacmanStretchDelay
	// {
	//     75%
	//     {
	//         -webkit-opacity: 0.7;            
	//         opacity: 0.7;
	//     }
	//     100%
	//     {
	//         -webkit-transform: translate(-100px, -6.25px);
	//                 transform: translate(-100px, -6.25px);
	//     }
	// }

	// @keyframes v-pacmanStretchDelay
	// {
	//     75%
	//     {
	//         -webkit-opacity: 0.7;            
	//         opacity: 0.7;
	//     }
	//     100%
	//     {
	//         -webkit-transform: translate(-100px, -6.25px);
	//                 transform: translate(-100px, -6.25px);
	//     }
	// }
	// </style>

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-bind:style=\"{position: 'relative', fontSize: 0}\" v-show=\"loading\">\n    <div class=\"v-pacman v-pacman1\" v-bind:style=\"spinnerStyle1\">\n    </div><div class=\"v-pacman v-pacman2\" v-bind:style=\"[spinnerStyle,animationStyle,spinnerDelay2]\">\n    </div><div class=\"v-pacman v-pacman3\" v-bind:style=\"[spinnerStyle,animationStyle,spinnerDelay3]\">\n    </div><div class=\"v-pacman v-pacman4\" v-bind:style=\"[spinnerStyle,animationStyle,spinnerDelay4]\">\n    </div><div class=\"v-pacman v-pacman5\" v-bind:style=\"[spinnerStyle,animationStyle,spinnerDelay5]\">\n    </div>\n</div>";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(65)
	__vue_script__ = __webpack_require__(67)
	__vue_template__ = __webpack_require__(68)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/SquareLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(66);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7ff4ddc2&file=SquareLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SquareLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7ff4ddc2&file=SquareLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SquareLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n    text-align: center;\n}\n\n.v-spinner .v-square\n{\n    -webkit-animation: v-squareDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);\n            animation: v-squareDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    -webkit-perspective: 100px;\n            perspective: 100px;\n    display: inline-block;\n}\n\n@-webkit-keyframes v-squareDelay\n{\n    25%\n    {\n        -webkit-transform: rotateX(180deg) rotateY(0);\n                transform: rotateX(180deg) rotateY(0);\n    }\n    50%\n    {\n        -webkit-transform: rotateX(180deg) rotateY(180deg);\n                transform: rotateX(180deg) rotateY(180deg);\n    }\n    75%\n    {\n        -webkit-transform: rotateX(0) rotateY(180deg);\n                transform: rotateX(0) rotateY(180deg);\n    }\n    100%\n    {\n        -webkit-transform: rotateX(0) rotateY(0);\n                transform: rotateX(0) rotateY(0);\n    }\n}\n\n@keyframes v-squareDelay\n{\n    25%\n    {\n        -webkit-transform: rotateX(180deg) rotateY(0);\n                transform: rotateX(180deg) rotateY(0);\n    }\n    50%\n    {\n        -webkit-transform: rotateX(180deg) rotateY(180deg);\n                transform: rotateX(180deg) rotateY(180deg);\n    }\n    75%\n    {\n        -webkit-transform: rotateX(0) rotateY(180deg);\n                transform: rotateX(0) rotateY(180deg);\n    }\n    100%\n    {\n        -webkit-transform: rotateX(0) rotateY(0);\n                transform: rotateX(0) rotateY(0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 67 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-square" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'SquareLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '50px'
	    }
	  },
	  data: function data() {
	    return {
	      spinnerStyle: {
	        backgroundColor: this.color,
	        height: this.size,
	        width: this.size
	      }
	    };
	  }
	};
	// </script>

	// <style>
	// .v-spinner
	// {
	//     text-align: center;
	// }

	// .v-spinner .v-square
	// {
	//     -webkit-animation: v-squareDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
	//             animation: v-squareDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
	//     -webkit-animation-fill-mode: both;
	// 	          animation-fill-mode: both;
	//     perspective: 100px;
	//     display: inline-block;
	// }

	// @-webkit-keyframes v-squareDelay
	// {
	//     25%
	//     {
	//         -webkit-transform: rotateX(180deg) rotateY(0);
	//                 transform: rotateX(180deg) rotateY(0);
	//     }
	//     50%
	//     {
	//         -webkit-transform: rotateX(180deg) rotateY(180deg);
	//                 transform: rotateX(180deg) rotateY(180deg);
	//     }
	//     75%
	//     {
	//         -webkit-transform: rotateX(0) rotateY(180deg);
	//                 transform: rotateX(0) rotateY(180deg);
	//     }
	//     100%
	//     {
	//         -webkit-transform: rotateX(0) rotateY(0);
	//                 transform: rotateX(0) rotateY(0);
	//     }
	// }

	// @keyframes v-squareDelay
	// {
	//     25%
	//     {
	//         -webkit-transform: rotateX(180deg) rotateY(0);
	//                 transform: rotateX(180deg) rotateY(0);
	//     }
	//     50%
	//     {
	//         -webkit-transform: rotateX(180deg) rotateY(180deg);
	//                 transform: rotateX(180deg) rotateY(180deg);
	//     }
	//     75%
	//     {
	//         -webkit-transform: rotateX(0) rotateY(180deg);
	//                 transform: rotateX(0) rotateY(180deg);
	//     }
	//     100%
	//     {
	//         -webkit-transform: rotateX(0) rotateY(0);
	//                 transform: rotateX(0) rotateY(0);
	//     }
	// }
	// </style>

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-square\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(70)
	__vue_script__ = __webpack_require__(72)
	__vue_template__ = __webpack_require__(73)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/ScaleLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(71);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n \n}\n\n\n@-webkit-keyframes v-scaleStretchDelay\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1);\n    }\n    50%\n    {\n        -webkit-transform: scaleY(0.4);\n                transform: scaleY(0.4);\n    }\n}\n\n@keyframes v-scaleStretchDelay\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1);\n    }\n    50%\n    {\n        -webkit-transform: scaleY(0.4);\n                transform: scaleY(0.4);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 72 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-scale v-scale1" v-bind:style="[spinnerStyle,spinnerDelay1]">
	//     </div><div class="v-scale v-scale2" v-bind:style="[spinnerStyle,spinnerDelay2]">
	//     </div><div class="v-scale v-scale3" v-bind:style="[spinnerStyle,spinnerDelay3]">
	//     </div><div class="v-scale v-scale4" v-bind:style="[spinnerStyle,spinnerDelay4]">
	//     </div><div class="v-scale v-scale5" v-bind:style="[spinnerStyle,spinnerDelay5]">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'ScaleLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
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
	        borderRadius: this.radius,
	        display: 'inline-block',
	        animationName: 'v-scaleStretchDelay',
	        animationDuration: '1s',
	        animationIterationCount: 'infinite',
	        animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
	        animationFillMode: 'both'
	        // TODO
	        // animation: ['sk-waveStretchDelay', '1s', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' '),
	        // animationFillMode: "both"
	      },
	      spinnerDelay1: {
	        animationDelay: '0.1s'
	      },
	      spinnerDelay2: {
	        animationDelay: '0.2s'
	      },
	      spinnerDelay3: {
	        animationDelay: '0.3s'
	      },
	      spinnerDelay4: {
	        animationDelay: '0.4s'
	      },
	      spinnerDelay5: {
	        animationDelay: '0.5s'
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
/* 73 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-scale v-scale1\" v-bind:style=\"[spinnerStyle,spinnerDelay1]\">\n    </div><div class=\"v-scale v-scale2\" v-bind:style=\"[spinnerStyle,spinnerDelay2]\">\n    </div><div class=\"v-scale v-scale3\" v-bind:style=\"[spinnerStyle,spinnerDelay3]\">\n    </div><div class=\"v-scale v-scale4\" v-bind:style=\"[spinnerStyle,spinnerDelay4]\">\n    </div><div class=\"v-scale v-scale5\" v-bind:style=\"[spinnerStyle,spinnerDelay5]\">\n    </div>\n  </div>";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(75)
	__vue_script__ = __webpack_require__(77)
	__vue_template__ = __webpack_require__(78)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/SkewLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(76);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-51a72a8c&file=SkewLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SkewLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-51a72a8c&file=SkewLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./SkewLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n    text-align: center;\n}\n\n.v-spinner .v-skew\n{\n    -webkit-animation: v-skewDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);\n            animation: v-skewDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    display: inline-block;\n}\n\n@-webkit-keyframes v-skewDelay\n{\n    25%\n    {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);\n                transform: perspective(100px) rotateX(180deg) rotateY(0);\n    }\n    50%\n    {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n                transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    }\n    75%\n    {\n        -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);\n                transform: perspective(100px) rotateX(0) rotateY(180deg);\n    }\n    100%\n    {\n        -webkit-transform: perspective(100px) rotateX(0) rotateY(0);\n                transform: perspective(100px) rotateX(0) rotateY(0);\n    }\n}\n\n@keyframes v-skewDelay\n{\n    25%\n    {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);\n                transform: perspective(100px) rotateX(180deg) rotateY(0);\n    }\n    50%\n    {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n                transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    }\n    75%\n    {\n        -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);\n                transform: perspective(100px) rotateX(0) rotateY(180deg);\n    }\n    100%\n    {\n        -webkit-transform: perspective(100px) rotateX(0) rotateY(0);\n                transform: perspective(100px) rotateX(0) rotateY(0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-skew" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'SkewLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '20px'
	    }
	  },
	  data: function data() {
	    return {
	      spinnerStyle: {
	        height: 0,
	        width: 0,
	        borderLeft: this.size + ' solid transparent',
	        borderRight: this.size + ' solid transparent',
	        borderBottom: this.size + ' solid ' + this.color
	      }
	    };
	  }
	};
	// </script>

	// <style>
	// .v-spinner
	// {
	//     text-align: center;
	// }

	// .v-spinner .v-skew
	// {
	//     -webkit-animation: v-skewDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
	//             animation: v-skewDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
	//     -webkit-animation-fill-mode: both;
	// 	          animation-fill-mode: both;
	//     display: inline-block;
	// }

	// @-webkit-keyframes v-skewDelay
	// {
	//     25%
	//     {
	//         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
	//                 transform: perspective(100px) rotateX(180deg) rotateY(0);
	//     }
	//     50%
	//     {
	//         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
	//                 transform: perspective(100px) rotateX(180deg) rotateY(180deg);
	//     }
	//     75%
	//     {
	//         -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
	//                 transform: perspective(100px) rotateX(0) rotateY(180deg);
	//     }
	//     100%
	//     {
	//         -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
	//                 transform: perspective(100px) rotateX(0) rotateY(0);
	//     }
	// }

	// @keyframes v-skewDelay
	// {
	//     25%
	//     {
	//         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);
	//                 transform: perspective(100px) rotateX(180deg) rotateY(0);
	//     }
	//     50%
	//     {
	//         -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);
	//                 transform: perspective(100px) rotateX(180deg) rotateY(180deg);
	//     }
	//     75%
	//     {
	//         -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);
	//                 transform: perspective(100px) rotateX(0) rotateY(180deg);
	//     }
	//     100%
	//     {
	//         -webkit-transform: perspective(100px) rotateX(0) rotateY(0);
	//                 transform: perspective(100px) rotateX(0) rotateY(0);
	//     }
	// }
	// </style>

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-skew\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(80)
	__vue_script__ = __webpack_require__(82)
	__vue_template__ = __webpack_require__(83)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/MoonLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5d32907a&file=MoonLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MoonLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5d32907a&file=MoonLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MoonLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-moon1\n{\n\n    -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;\n            animation: v-moonStretchDelay 0.6s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: relative;\n}\n\n.v-spinner .v-moon2\n{\n    -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;\n            animation: v-moonStretchDelay 0.6s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0.8;\n    position: absolute;\n}\n\n.v-spinner .v-moon3\n{\n    opacity: 0.1;\n}\n\n@-webkit-keyframes v-moonStretchDelay\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-moonStretchDelay\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 82 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-moon v-moon1" v-bind:style="spinnerStyle">
	//     <div class="v-moon v-moon2" v-bind:style="[spinnerMoonStyle,animationStyle2]">
	//     </div><div class="v-moon v-moon3" v-bind:style="[spinnerStyle,animationStyle3]">
	//     </div></div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'MoonLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '60px'
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
	        height: this.size,
	        width: this.size,
	        borderRadius: this.radius
	      }
	    };
	  },
	
	  computed: {
	    moonSize: function moonSize() {
	      return parseFloat(this.size) / 7;
	    },
	    spinnerMoonStyle: function spinnerMoonStyle() {
	      return {
	        height: this.moonSize + 'px',
	        width: this.moonSize + 'px',
	        borderRadius: this.radius
	      };
	    },
	    animationStyle2: function animationStyle2() {
	      return {
	        top: parseFloat(this.size) / 2 - this.moonSize / 2 + 'px',
	        backgroundColor: this.color
	      };
	    },
	    animationStyle3: function animationStyle3() {
	      return {
	        border: this.moonSize + 'px solid ' + this.color
	      };
	    }
	  }
	
	};
	// </script>

	// <style>

	// .v-spinner .v-moon1
	// {

	//     -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;
	//             animation: v-moonStretchDelay 0.6s 0s infinite linear;
	//     -webkit-animation-fill-mode: forwards;
	//             animation-fill-mode: forwards;
	//     position: relative;
	// }

	// .v-spinner .v-moon2
	// {
	//     -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;
	//             animation: v-moonStretchDelay 0.6s 0s infinite linear;
	//     -webkit-animation-fill-mode: forwards;
	//             animation-fill-mode: forwards;
	//     opacity: 0.8;
	//     position: absolute;
	// }

	// .v-spinner .v-moon3
	// {
	//     opacity: 0.1;
	// }

	// @-webkit-keyframes v-moonStretchDelay
	// {
	//     100%
	//     {
	//         -webkit-transform: rotate(360deg);
	//                 transform: rotate(360deg);
	//     }
	// }

	// @keyframes v-moonStretchDelay
	// {
	//     100%
	//     {
	//         -webkit-transform: rotate(360deg);
	//                 transform: rotate(360deg);
	//     }
	// }
	// </style>

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-moon v-moon1\" v-bind:style=\"spinnerStyle\">\n    <div class=\"v-moon v-moon2\" v-bind:style=\"[spinnerMoonStyle,animationStyle2]\">\n    </div><div class=\"v-moon v-moon3\" v-bind:style=\"[spinnerStyle,animationStyle3]\">\n    </div></div>\n  </div>";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(85)
	__vue_script__ = __webpack_require__(87)
	__vue_template__ = __webpack_require__(88)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/RingLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ec920f9c&file=RingLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RingLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ec920f9c&file=RingLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./RingLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-ring\n{         \n}\n\n.v-spinner .v-ring1\n{      \n}\n\n.v-spinner .v-ring2\n{\n\n    -webkit-animation: v-ringRightRotate 2s 0s infinite linear;\n            animation: v-ringRightRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-perspective: 800px;\n            perspective: 800px;  \n    position: absolute;          \n    top: 0;\n    left: 0;\n}\n\n.v-spinner .v-ring3\n{\n\n    -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;\n            animation: v-ringLeftRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-perspective: 800px;\n            perspective: 800px;            \n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n@-webkit-keyframes v-ringRightRotate\n{\n    0%\n    {\n        -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n                transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    }\n    100%\n    { \n        -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n                transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n    \n    }\n}\n\n@keyframes v-ringRightRotate\n{\n    0%\n    {\n        -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n                transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    }\n    100%\n    { \n        -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n                transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n    \n    }\n}\n\n@-webkit-keyframes v-ringLeftRotate\n{\n    0%\n    {\n        -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n                transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    }\n    100%\n    { \n        -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n                transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n    \n    }\n}\n\n@keyframes v-ringLeftRotate\n{\n    0%\n    {\n        -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n                transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    }\n    100%\n    { \n        -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n                transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n    \n    }\n}", ""]);
	
	// exports


/***/ },
/* 87 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-ring v-ring1" v-bind:style="spinnerBasicStyle">
	//     <div class="v-ring v-ring2" v-bind:style="spinnerStyle">
	//     </div><div class="v-ring v-ring3" v-bind:style="spinnerStyle">
	//     </div></div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'RingLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '60px'
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
	  computed: {
	    spinnerStyle: function spinnerStyle() {
	      return {
	        height: this.size,
	        width: this.size,
	        border: parseFloat(this.size) / 10 + 'px solid' + this.color,
	        opacity: 0.4,
	        borderRadius: this.radius
	      };
	    },
	    spinnerBasicStyle: function spinnerBasicStyle() {
	      return {
	        height: this.size,
	        width: this.size,
	        position: 'relative'
	      };
	    }
	  }
	
	};
	// </script>

	// <style>

	// .v-spinner .v-ring
	// {        
	// }

	// .v-spinner .v-ring1
	// {     
	// }

	// .v-spinner .v-ring2
	// {

	//     -webkit-animation: v-ringRightRotate 2s 0s infinite linear;
	//             animation: v-ringRightRotate 2s 0s infinite linear;
	//     -webkit-animation-fill-mode: forwards;
	//             animation-fill-mode: forwards;
	//     perspective: 800px; 
	//     position: absolute;         
	//     top: 0;
	//     left: 0;
	// }

	// .v-spinner .v-ring3
	// {

	//     -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;
	//             animation: v-ringLeftRotate 2s 0s infinite linear;
	//     -webkit-animation-fill-mode: forwards;
	//             animation-fill-mode: forwards;
	//     perspective: 800px;           
	//     position: absolute;
	//     top: 0;
	//     left: 0;
	// }

	// @-webkit-keyframes v-ringRightRotate
	// {
	//     0%
	//     {
	//         -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	//                 transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	//     }
	//     100%
	//     {
	//         -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
	//                 transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);

	//     }
	// }

	// @keyframes v-ringRightRotate
	// {
	//     0%
	//     {
	//         -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	//                 transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	//     }
	//     100%
	//     {
	//         -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
	//                 transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);

	//     }
	// }

	// @-webkit-keyframes v-ringLeftRotate
	// {
	//     0%
	//     {
	//         -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	//                 transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	//     }
	//     100%
	//     {
	//         -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
	//                 transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);

	//     }
	// }

	// @keyframes v-ringLeftRotate
	// {
	//     0%
	//     {
	//         -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	//                 transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	//     }
	//     100%
	//     {
	//         -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
	//                 transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);

	//     }
	// }
	// </style>

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-ring v-ring1\" v-bind:style=\"spinnerBasicStyle\">\n    <div class=\"v-ring v-ring2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-ring v-ring3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(90)
	__vue_script__ = __webpack_require__(92)
	__vue_template__ = __webpack_require__(93)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/BounceLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(91);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8a44b66c&file=BounceLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BounceLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8a44b66c&file=BounceLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BounceLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-bounce\n{\n          \n}\n\n.v-spinner .v-bounce1\n{\n}\n\n.v-spinner .v-bounce2\n{\n\n    -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;\n            animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n.v-spinner .v-bounce3\n{\n    -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;\n            animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n@-webkit-keyframes v-bounceStretchDelay\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    { \n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    \n    }\n}\n\n@keyframes v-bounceStretchDelay\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    { \n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    \n    }\n}", ""]);
	
	// exports


/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-bounce v-bounce1" v-bind:style="spinnerBasicStyle">
	//     <div class="v-bounce v-bounce2" v-bind:style="spinnerStyle">
	//     </div><div class="v-bounce v-bounce3" v-bind:style="spinnerStyle">
	//     </div></div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'BounceLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '60px'
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
	        height: this.size,
	        width: this.size,
	        borderRadius: this.radius,
	        opacity: 0.6,
	        position: 'absolute',
	        top: 0,
	        left: 0
	      }
	    };
	  },
	
	  computed: {
	    spinnerBasicStyle: function spinnerBasicStyle() {
	      return {
	        height: this.size,
	        width: this.size,
	        position: 'relative'
	      };
	    }
	  }
	
	};
	// </script>

	// <style>

	// .v-spinner .v-bounce
	// {

	// }

	// .v-spinner .v-bounce1
	// {
	// }

	// .v-spinner .v-bounce2
	// {

	//     -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
	//             animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;
	//     -webkit-animation-fill-mode: both;
	//             animation-fill-mode: both;
	// }

	// .v-spinner .v-bounce3
	// {
	//     -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
	//             animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;
	//     -webkit-animation-fill-mode: both;
	//             animation-fill-mode: both;
	// }

	// @-webkit-keyframes v-bounceStretchDelay
	// {
	//     0%,
	//     100%
	//     {
	//         -webkit-transform: scale(0);
	//                 transform: scale(0);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scale(1.0);
	//                 transform: scale(1.0);

	//     }
	// }

	// @keyframes v-bounceStretchDelay
	// {
	//     0%,
	//     100%
	//     {
	//         -webkit-transform: scale(0);
	//                 transform: scale(0);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scale(1.0);
	//                 transform: scale(1.0);

	//     }
	// }
	// </style>

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-bounce v-bounce1\" v-bind:style=\"spinnerBasicStyle\">\n    <div class=\"v-bounce v-bounce2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-bounce v-bounce3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>";

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(95)
	__vue_script__ = __webpack_require__(97)
	__vue_template__ = __webpack_require__(98)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/DotLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(96);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(21)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-b5068886&file=DotLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DotLoader.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-b5068886&file=DotLoader.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./DotLoader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(20)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-dot\n{\n          \n}\n\n.v-spinner .v-dot1\n{\n\n    -webkit-animation: v-dotRotate 2s 0s infinite linear;\n            animation: v-dotRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.v-spinner .v-dot2\n{\n\n    -webkit-animation: v-dotBounce 2s 0s infinite linear;\n            animation: v-dotBounce 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: 'absolute';\n    top: 0;\n    bottom: auto;\n}\n\n.v-spinner .v-dot3\n{\n    -webkit-animation: v-dotBounce 2s -1s infinite linear;\n            animation: v-dotBounce 2s -1s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: 'absolute';\n    top: auto;\n    bottom: 0;            \n}\n\n@-webkit-keyframes v-dotRotate\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-dotRotate\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes v-dotBounce\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    }\n}\n\n@keyframes v-dotBounce\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 97 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner" v-show="loading">
	//     <div class="v-dot v-dot1" v-bind:style="spinnerBasicStyle">
	//     <div class="v-dot v-dot2" v-bind:style="spinnerStyle">
	//     </div><div class="v-dot v-dot3" v-bind:style="spinnerStyle">
	//     </div></div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'DotLoader',
	
	  props: {
	    loading: {
	      type: Boolean,
	      default: true
	    },
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '60px'
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
	  computed: {
	    spinnerStyle: function spinnerStyle() {
	      return {
	        backgroundColor: this.color,
	        height: parseFloat(this.size) / 2 + 'px',
	        width: parseFloat(this.size) / 2 + 'px',
	        borderRadius: this.radius
	      };
	    },
	    spinnerBasicStyle: function spinnerBasicStyle() {
	      return {
	        height: this.size,
	        width: this.size,
	        position: 'relative'
	      };
	    }
	  }
	
	};
	// </script>

	// <style>

	// .v-spinner .v-dot
	// {

	// }

	// .v-spinner .v-dot1
	// {

	//     -webkit-animation: v-dotRotate 2s 0s infinite linear;
	//             animation: v-dotRotate 2s 0s infinite linear;
	//     -webkit-animation-fill-mode: forwards;
	//             animation-fill-mode: forwards;
	// }

	// .v-spinner .v-dot2
	// {

	//     -webkit-animation: v-dotBounce 2s 0s infinite linear;
	//             animation: v-dotBounce 2s 0s infinite linear;
	//     -webkit-animation-fill-mode: forwards;
	//             animation-fill-mode: forwards;
	//     position: 'absolute';
	//     top: 0;
	//     bottom: auto;
	// }

	// .v-spinner .v-dot3
	// {
	//     -webkit-animation: v-dotBounce 2s -1s infinite linear;
	//             animation: v-dotBounce 2s -1s infinite linear;
	//     -webkit-animation-fill-mode: forwards;
	//             animation-fill-mode: forwards;
	//     position: 'absolute';
	//     top: auto;
	//     bottom: 0;           
	// }

	// @-webkit-keyframes v-dotRotate
	// {
	//     100%
	//     {
	//         -webkit-transform: rotate(360deg);
	//                 transform: rotate(360deg);
	//     }
	// }

	// @keyframes v-dotRotate
	// {
	//     100%
	//     {
	//         -webkit-transform: rotate(360deg);
	//                 transform: rotate(360deg);
	//     }
	// }

	// @-webkit-keyframes v-dotBounce
	// {
	//     0%,
	//     100%
	//     {
	//         -webkit-transform: scale(0);
	//                 transform: scale(0);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scale(1.0);
	//                 transform: scale(1.0);
	//     }
	// }

	// @keyframes v-dotBounce
	// {
	//     0%,
	//     100%
	//     {
	//         -webkit-transform: scale(0);
	//                 transform: scale(0);
	//     }
	//     50%
	//     {
	//         -webkit-transform: scale(1.0);
	//                 transform: scale(1.0);
	//     }
	// }
	// </style>

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-show=\"loading\">\n    <div class=\"v-dot v-dot1\" v-bind:style=\"spinnerBasicStyle\">\n    <div class=\"v-dot v-dot2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-dot v-dot3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-spinner.js.map