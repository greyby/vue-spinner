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
	
	var _PulseLoader = __webpack_require__(15);
	
	var _PulseLoader2 = _interopRequireDefault(_PulseLoader);
	
	var _ScaleLoader = __webpack_require__(22);
	
	var _ScaleLoader2 = _interopRequireDefault(_ScaleLoader);
	
	var _ClipLoader = __webpack_require__(27);
	
	var _ClipLoader2 = _interopRequireDefault(_ClipLoader);
	
	var _RiseLoader = __webpack_require__(32);
	
	var _RiseLoader2 = _interopRequireDefault(_RiseLoader);
	
	var _BeatLoader = __webpack_require__(37);
	
	var _BeatLoader2 = _interopRequireDefault(_BeatLoader);
	
	var _SyncLoader = __webpack_require__(42);
	
	var _SyncLoader2 = _interopRequireDefault(_SyncLoader);
	
	var _RotateLoader = __webpack_require__(47);
	
	var _RotateLoader2 = _interopRequireDefault(_RotateLoader);
	
	var _FadeLoader = __webpack_require__(52);
	
	var _FadeLoader2 = _interopRequireDefault(_FadeLoader);
	
	var _SquareLoader = __webpack_require__(57);
	
	var _SquareLoader2 = _interopRequireDefault(_SquareLoader);
	
	var _SkewLoader = __webpack_require__(62);
	
	var _SkewLoader2 = _interopRequireDefault(_SkewLoader);
	
	var _MoonLoader = __webpack_require__(67);
	
	var _MoonLoader2 = _interopRequireDefault(_MoonLoader);
	
	var _RingLoader = __webpack_require__(72);
	
	var _RingLoader2 = _interopRequireDefault(_RingLoader);
	
	var _BounceLoader = __webpack_require__(77);
	
	var _BounceLoader2 = _interopRequireDefault(_BounceLoader);
	
	var _DotLoader = __webpack_require__(82);
	
	var _DotLoader2 = _interopRequireDefault(_DotLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueSpinner = {
	  PulseLoader: _PulseLoader2.default,
	  ScaleLoader: _ScaleLoader2.default,
	  ClipLoader: _ClipLoader2.default,
	  RiseLoader: _RiseLoader2.default,
	  BeatLoader: _BeatLoader2.default,
	  SyncLoader: _SyncLoader2.default,
	  RotateLoader: _RotateLoader2.default,
	  FadeLoader: _FadeLoader2.default,
	  SquareLoader: _SquareLoader2.default,
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(16)
	module.exports = __webpack_require__(20)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(21)
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, "/*.v-spinner\n{\n    margin: 100px auto;\n    text-align: center;\n}\n*/\n.v-spinner .v-pulse\n{\n    -webkit-animation: v-pulseStretchDelay 0.75s infinite cubic-bezier(.2,.68,.18,1.08);\n            animation: v-pulseStretchDelay 0.75s infinite cubic-bezier(.2,.68,.18,1.08);\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    display: inline-block;         \n}\n\n.v-spinner .v-pulse1\n{\n  -webkit-animation-delay: 0.12s;\n          animation-delay: 0.12s;\n}\n.v-spinner .v-pulse2\n{\n  -webkit-animation-delay: 0.24s;\n          animation-delay: 0.24s;\n}\n.v-spinner .v-pulse3\n{\n  -webkit-animation-delay: 0.36s;\n          animation-delay: 0.36s;\n}\n\n@-webkit-keyframes v-pulseStretchDelay\n{\n    0%,\n    80%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n    45%\n    {\n        -webkit-transform: scale(0.1);\n                transform: scale(0.1);\n        -webkit-opacity: 0.7;             \n                opacity: 0.7;\n    }\n}\n\n@keyframes v-pulseStretchDelay\n{\n    0%,\n    80%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n    45%\n    {\n        -webkit-transform: scale(0.1);\n                transform: scale(0.1);\n        -webkit-opacity: 0.7;             \n                opacity: 0.7;\n    }\n}", ""]);
	
	// exports


/***/ },
/* 18 */
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
/* 19 */
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
/* 20 */
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
	// */
	// .v-spinner .v-pulse
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
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-pulse v-pulse1\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-pulse v-pulse2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-pulse v-pulse3\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(23)
	module.exports = __webpack_require__(25)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(26)
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n \n}\n\n.v-spinner .v-scale\n{\n    -webkit-animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);\n            animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n.v-spinner .v-scale1\n{\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n}\n.v-spinner .v-scale2\n{\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n}\n.v-spinner .v-scale3\n{\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.v-spinner .v-scale4\n{\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.v-spinner .v-scale5\n{\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n@-webkit-keyframes v-scaleStretchDelay\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1);\n    }\n    50%\n    {\n        -webkit-transform: scaleY(0.4);\n                transform: scaleY(0.4);\n    }\n}\n\n@keyframes v-scaleStretchDelay\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scaleY(1);\n                transform: scaleY(1);\n    }\n    50%\n    {\n        -webkit-transform: scaleY(0.4);\n                transform: scaleY(0.4);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-scale v-scale1\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-scale v-scale2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-scale v-scale3\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-scale v-scale4\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-scale v-scale5\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(28)
	module.exports = __webpack_require__(30)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(31)
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n \n}\n\n.v-spinner .v-clip\n{\n    -webkit-animation: v-clipDelay 0.75s 0s infinite linear;\n            animation: v-clipDelay 0.75s 0s infinite linear;\n    -webkit-animation-fill-mode: both;\n\t        animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n@-webkit-keyframes v-clipDelay\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg) scale(1);\n                transform: rotate(0deg) scale(1);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg) scale(0.8);\n                transform: rotate(180deg) scale(0.8);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg) scale(1);\n                transform: rotate(360deg) scale(1);\n    }\n}\n\n@keyframes v-clipDelay\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg) scale(1);\n                transform: rotate(0deg) scale(1);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg) scale(0.8);\n                transform: rotate(180deg) scale(0.8);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg) scale(1);\n                transform: rotate(360deg) scale(1);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 30 */
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
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-clip\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(33)
	module.exports = __webpack_require__(35)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(36)
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n \n}\n\n.v-spinner .v-rise-odd\n{\n    -webkit-animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n            animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n    -webkit-animation-fill-mode: both;\n\t        animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n.v-spinner .v-rise-even\n{\n    -webkit-animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n            animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n\n    display: inline-block;\n}\n\n@-webkit-keyframes v-riseOddDelay\n{\n    25\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    75%\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(0.75);\n                transform: translateY(0) scale(0.75);\n    }\n}\n\n@keyframes v-riseOddDelay\n{\n    25\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    75%\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(0.75);\n                transform: translateY(0) scale(0.75);\n    }\n}\n\n@-webkit-keyframes v-riseEvenDelay\n{\n    25\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    50%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    75%\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(1.0);\n                transform: translateY(0) scale(1.0);\n    }\n}\n\n@keyframes v-riseEvenDelay\n{\n    25\n    {\n        -webkit-transform: translateY(-30px);\n                transform: translateY(-30px);\n    }\n    0%\n    {\n        -webkit-transform: scale(1.1);\n                transform: scale(1.1);\n    }\n    50%\n    {\n        -webkit-transform: scale(0.4);\n                transform: scale(0.4);\n    }\n    75%\n    {\n        -webkit-transform: translateY(30px);\n                transform: translateY(30px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0) scale(1.0);\n                transform: translateY(0) scale(1.0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 35 */
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
/* 36 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-rise v-rise-odd\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-even\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-odd\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-even\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rise v-rise-odd\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(38)
	module.exports = __webpack_require__(40)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(41)
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-beat\n{\n    -webkit-animation: v-beatStretchDelay 0.7s infinite linear;\n            animation: v-beatStretchDelay 0.7s infinite linear;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    display: inline-block;         \n}\n\n.v-spinner .v-beat-odd\n{\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.v-spinner .v-beat-even\n{\n  -webkit-animation-delay: 0.35s;\n          animation-delay: 0.35s;\n}\n\n@-webkit-keyframes v-beatStretchDelay\n{\n    50%\n    {\n        -webkit-transform: scale(0.75);\n                transform: scale(0.75);\n        -webkit-opacity: 0.2;             \n                opacity: 0.2;\n    }\n    100%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}\n\n@keyframes v-beatStretchDelay\n{\n    50%\n    {\n        -webkit-transform: scale(0.75);\n                transform: scale(0.75);\n        -webkit-opacity: 0.2;             \n                opacity: 0.2;\n    }\n    100%\n    {\n        -webkit-transform: scale(1);\n                transform: scale(1);\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}", ""]);
	
	// exports


/***/ },
/* 40 */
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
/* 41 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-beat v-beat-odd\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-beat v-beat-even\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-beat v-beat-odd\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(43)
	module.exports = __webpack_require__(45)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(46)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/SyncLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-sync\n{\n    -webkit-animation: v-syncStretchDelay 0.6s infinite ease-in-out;\n            animation: v-syncStretchDelay 0.6s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    display: inline-block;         \n}\n\n.v-spinner .v-sync1\n{\n  -webkit-animation-delay: 0.07s;\n          animation-delay: 0.07s;\n}\n.v-spinner .v-sync2\n{\n  -webkit-animation-delay: 0.14s;\n          animation-delay: 0.14s;\n}\n.v-spinner .v-sync3\n{\n  -webkit-animation-delay: 0.21s;\n          animation-delay: 0.21s;\n}\n\n@-webkit-keyframes v-syncStretchDelay\n{\n    33%\n    {\n        -webkit-transform: translateY(10px);\n                transform: translateY(10px);\n    }\n    66%\n    {\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}\n\n@keyframes v-syncStretchDelay\n{\n    33%\n    {\n        -webkit-transform: translateY(10px);\n                transform: translateY(10px);\n    }\n    66%\n    {\n        -webkit-transform: translateY(-10px);\n                transform: translateY(-10px);\n    }\n    100%\n    {\n        -webkit-transform: translateY(0);\n                transform: translateY(0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
	//     <div class="v-sync v-sync1" v-bind:style="spinnerStyle">
	//     </div><div class="v-sync v-sync2" v-bind:style="spinnerStyle">
	//     </div><div class="v-sync v-sync3" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'SyncLoader',
	
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

	// .v-spinner .v-sync
	// {
	//     -webkit-animation: v-syncStretchDelay 0.6s infinite ease-in-out;
	//             animation: v-syncStretchDelay 0.6s infinite ease-in-out;
	//     -webkit-animation-fill-mode: both;
	// 	          animation-fill-mode: both;
	//     display: inline-block;        
	// }

	// .v-spinner .v-sync1
	// {
	//   animation-delay: 0.07s;
	// }
	// .v-spinner .v-sync2
	// {
	//   animation-delay: 0.14s;
	// }
	// .v-spinner .v-sync3
	// {
	//   animation-delay: 0.21s;
	// }

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
/* 46 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-sync v-sync1\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-sync v-sync2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-sync v-sync3\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(48)
	module.exports = __webpack_require__(50)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(51)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/RotateLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-rotate\n{\n          \n}\n\n.v-spinner .v-rotate1\n{\n\n    -webkit-animation: v-rotateStretchDelay 1s 0s infinite cubic-bezier(.7,-.13,.22,.86);\n            animation: v-rotateStretchDelay 1s 0s infinite cubic-bezier(.7,-.13,.22,.86);\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n    display: inline-block;\n    position: relative;\n}\n\n.v-spinner .v-rotate2\n{\n  opacity: 0.8;\n  position: absolute;\n  top: 0;\n  left: -28px;\n}\n\n.v-spinner .v-rotate3\n{\n  opacity: 0.8;\n  position: absolute;\n  top: 0;\n  left: 25px;\n}\n\n@-webkit-keyframes v-rotateStretchDelay\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-rotateStretchDelay\n{\n    0%\n    {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n    }\n    50%\n    {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg);\n    }\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
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

	// .v-spinner .v-rotate
	// {

	// }

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
/* 51 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-rotate v-rotate1\" v-bind:style=\"spinnerStyle\">\n    <div class=\"v-rotate v-rotate2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-rotate v-rotate3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(53)
	module.exports = __webpack_require__(55)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(56)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/FadeLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-fade\n{\n    -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n            animation: v-fadeStretchDelay 1.2s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    position: absolute;               \n}\n\n.v-spinner .v-fade1\n{\n  -webkit-animation-delay: 0.12s;\n          animation-delay: 0.12s;\n  top: 20px;\n  left: 0;\n}\n\n.v-spinner .v-fade2\n{\n  -webkit-animation-delay: 0.24s;\n          animation-delay: 0.24s;\n  top: 13.636363636363637px;\n  left: 13.636363636363637px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n\n}\n\n.v-spinner .v-fade3\n{\n  -webkit-animation-delay: 0.36s;\n          animation-delay: 0.36s;\n  top: 0;\n  left: 20px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.v-spinner .v-fade4\n{\n  -webkit-animation-delay: 0.48s;\n          animation-delay: 0.48s;\n  top: -13.636363636363637px;\n  left: 13.636363636363637px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.v-spinner .v-fade5\n{\n  -webkit-animation-delay: 0.60s;\n          animation-delay: 0.60s;\n  top: -20px;\n  left: 0;\n}\n\n.v-spinner .v-fade6\n{\n  -webkit-animation-delay: 0.72s;\n          animation-delay: 0.72s;\n  top: -13.636363636363637px;\n  left: -13.636363636363637px;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n\n.v-spinner .v-fade7\n{\n  -webkit-animation-delay: 0.84s;\n          animation-delay: 0.84s;\n  top: 0;\n  left: -20px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.v-spinner .v-fade8\n{\n  -webkit-animation-delay: 0.96s;\n          animation-delay: 0.96s;\n  top: 13.636363636363637px;\n  left: -13.636363636363637px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n@-webkit-keyframes v-fadeStretchDelay\n{\n    50%\n    {\n        -webkit-opacity: 0.3;             \n                opacity: 0.3;\n    }\n    100%\n    {\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}\n\n@keyframes v-fadeStretchDelay\n{\n    50%\n    {\n        -webkit-opacity: 0.3;             \n                opacity: 0.3;\n    }\n    100%\n    {\n        -webkit-opacity: 1;             \n                opacity: 1;\n    }\n}", ""]);
	
	// exports


/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="v-spinner" v-bind:style="{position: 'relative', fontSize: 0}">
	//   <!-- <div class="v-spinner" v-bind:style="containerStyle"> -->
	//     <div class="v-fade v-fade1" v-bind:style="spinnerStyle">
	//     </div><div class="v-fade v-fade2" v-bind:style="spinnerStyle">
	//     </div><div class="v-fade v-fade3" v-bind:style="spinnerStyle">
	//     </div><div class="v-fade v-fade4" v-bind:style="spinnerStyle">
	//     </div><div class="v-fade v-fade5" v-bind:style="spinnerStyle">
	//     </div><div class="v-fade v-fade6" v-bind:style="spinnerStyle">
	//     </div><div class="v-fade v-fade7" v-bind:style="spinnerStyle">
	//     </div><div class="v-fade v-fade8" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'FadeLoader',
	
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
	      }
	    };
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

	// .v-spinner .v-fade1
	// {
	//   animation-delay: 0.12s;
	//   top: 20px;
	//   left: 0;
	// }

	// .v-spinner .v-fade2
	// {
	//   animation-delay: 0.24s;
	//   top: 13.636363636363637px;
	//   left: 13.636363636363637px;
	//   -webkit-transform: rotate(-45deg);
	//           transform: rotate(-45deg);

	// }

	// .v-spinner .v-fade3
	// {
	//   animation-delay: 0.36s;
	//   top: 0;
	//   left: 20px;
	//   -webkit-transform: rotate(90deg);
	//           transform: rotate(90deg);
	// }

	// .v-spinner .v-fade4
	// {
	//   animation-delay: 0.48s;
	//   top: -13.636363636363637px;
	//   left: 13.636363636363637px;
	//   -webkit-transform: rotate(45deg);
	//           transform: rotate(45deg);
	// }

	// .v-spinner .v-fade5
	// {
	//   animation-delay: 0.60s;
	//   top: -20px;
	//   left: 0;
	// }

	// .v-spinner .v-fade6
	// {
	//   animation-delay: 0.72s;
	//   top: -13.636363636363637px;
	//   left: -13.636363636363637px;
	//   -webkit-transform: rotate(-45deg);
	//           transform: rotate(-45deg);
	// }

	// .v-spinner .v-fade7
	// {
	//   animation-delay: 0.84s;
	//   top: 0;
	//   left: -20px;
	//   -webkit-transform: rotate(90deg);
	//           transform: rotate(90deg);
	// }

	// .v-spinner .v-fade8
	// {
	//   animation-delay: 0.96s;
	//   top: 13.636363636363637px;
	//   left: -13.636363636363637px;
	//   -webkit-transform: rotate(45deg);
	//           transform: rotate(45deg);
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
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\" v-bind:style=\"{position: 'relative', fontSize: 0}\">\n  <!-- <div class=\"v-spinner\" v-bind:style=\"containerStyle\"> -->\n    <div class=\"v-fade v-fade1\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-fade v-fade2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-fade v-fade3\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-fade v-fade4\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-fade v-fade5\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-fade v-fade6\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-fade v-fade7\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-fade v-fade8\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(58)
	module.exports = __webpack_require__(60)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(61)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/SquareLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n    text-align: center;\n}\n\n.v-spinner .v-square\n{\n    -webkit-animation: v-squareDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);\n            animation: v-squareDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    -webkit-perspective: 100px;\n            perspective: 100px;\n    display: inline-block;\n}\n\n@-webkit-keyframes v-squareDelay\n{\n    25%\n    {\n        -webkit-transform: rotateX(180deg) rotateY(0);\n                transform: rotateX(180deg) rotateY(0);\n    }\n    50%\n    {\n        -webkit-transform: rotateX(180deg) rotateY(180deg);\n                transform: rotateX(180deg) rotateY(180deg);\n    }\n    75%\n    {\n        -webkit-transform: rotateX(0) rotateY(180deg);\n                transform: rotateX(0) rotateY(180deg);\n    }\n    100%\n    {\n        -webkit-transform: rotateX(0) rotateY(0);\n                transform: rotateX(0) rotateY(0);\n    }\n}\n\n@keyframes v-squareDelay\n{\n    25%\n    {\n        -webkit-transform: rotateX(180deg) rotateY(0);\n                transform: rotateX(180deg) rotateY(0);\n    }\n    50%\n    {\n        -webkit-transform: rotateX(180deg) rotateY(180deg);\n                transform: rotateX(180deg) rotateY(180deg);\n    }\n    75%\n    {\n        -webkit-transform: rotateX(0) rotateY(180deg);\n                transform: rotateX(0) rotateY(180deg);\n    }\n    100%\n    {\n        -webkit-transform: rotateX(0) rotateY(0);\n                transform: rotateX(0) rotateY(0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
	//     <div class="v-square" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'SquareLoader',
	
	  props: {
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
/* 61 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-square\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(63)
	module.exports = __webpack_require__(65)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(66)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/SkewLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner\n{\n    text-align: center;\n}\n\n.v-spinner .v-skew\n{\n    -webkit-animation: v-skewDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);\n            animation: v-skewDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);\n    -webkit-animation-fill-mode: both;\n\t          animation-fill-mode: both;\n    display: inline-block;\n}\n\n@-webkit-keyframes v-skewDelay\n{\n    25%\n    {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);\n                transform: perspective(100px) rotateX(180deg) rotateY(0);\n    }\n    50%\n    {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n                transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    }\n    75%\n    {\n        -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);\n                transform: perspective(100px) rotateX(0) rotateY(180deg);\n    }\n    100%\n    {\n        -webkit-transform: perspective(100px) rotateX(0) rotateY(0);\n                transform: perspective(100px) rotateX(0) rotateY(0);\n    }\n}\n\n@keyframes v-skewDelay\n{\n    25%\n    {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(0);\n                transform: perspective(100px) rotateX(180deg) rotateY(0);\n    }\n    50%\n    {\n        -webkit-transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n                transform: perspective(100px) rotateX(180deg) rotateY(180deg);\n    }\n    75%\n    {\n        -webkit-transform: perspective(100px) rotateX(0) rotateY(180deg);\n                transform: perspective(100px) rotateX(0) rotateY(180deg);\n    }\n    100%\n    {\n        -webkit-transform: perspective(100px) rotateX(0) rotateY(0);\n                transform: perspective(100px) rotateX(0) rotateY(0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 65 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
	//     <div class="v-skew" v-bind:style="spinnerStyle">
	//     </div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'SkewLoader',
	
	  props: {
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
/* 66 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-skew\" v-bind:style=\"spinnerStyle\">\n    </div>\n  </div>";

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(68)
	module.exports = __webpack_require__(70)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(71)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/MoonLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(69);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-moon\n{\n          \n}\n\n.v-spinner .v-moon1\n{\n\n    -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;\n            animation: v-moonStretchDelay 0.6s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: relative;\n}\n\n.v-spinner .v-moon2\n{\n    -webkit-animation: v-moonStretchDelay 0.6s 0s infinite linear;\n            animation: v-moonStretchDelay 0.6s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n\n    background-color: #5dc596;\n    opacity: 0.8;\n    position: absolute;\n    top: 25.714285714285715px;\n}\n\n.v-spinner .v-moon3\n{\n    border: 8.571428571428571px solid #5dc596;\n    opacity: 0.1;\n}\n\n@-webkit-keyframes v-moonStretchDelay\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-moonStretchDelay\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 70 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
	//     <div class="v-moon v-moon1" v-bind:style="spinnerStyle">
	//     <div class="v-moon v-moon2" v-bind:style="spinnerMoonStyle">
	//     </div><div class="v-moon v-moon3" v-bind:style="spinnerStyle">
	//     </div></div>
	//   </div>
	// </template>
	
	// <script>
	exports.default = {
	
	  name: 'MoonLoader',
	
	  props: {
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '60'
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
	        height: this.size + 'px',
	        width: this.size + 'px',
	        borderRadius: this.radius
	      }
	    };
	  },
	
	  computed: {
	    spinnerMoonStyle: function spinnerMoonStyle() {
	      return {
	        height: this.size / 7 + 'px',
	        width: this.size / 7 + 'px',
	        borderRadius: this.radius
	      };
	    }
	  }
	
	};
	// </script>

	// <style>

	// .v-spinner .v-moon
	// {

	// }

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

	//     background-color: #5dc596;
	//     opacity: 0.8;
	//     position: absolute;
	//     top: 25.714285714285715px;
	// }

	// .v-spinner .v-moon3
	// {
	//     border: 8.571428571428571px solid #5dc596;
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
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-moon v-moon1\" v-bind:style=\"spinnerStyle\">\n    <div class=\"v-moon v-moon2\" v-bind:style=\"spinnerMoonStyle\">\n    </div><div class=\"v-moon v-moon3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>";

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(73)
	module.exports = __webpack_require__(75)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(76)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/RingLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(74);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-ring\n{         \n}\n\n.v-spinner .v-ring1\n{      \n}\n\n.v-spinner .v-ring2\n{\n\n    -webkit-animation: v-ringRightRotate 2s 0s infinite linear;\n            animation: v-ringRightRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-perspective: 800px;\n            perspective: 800px;  \n    position: absolute;          \n    top: 0;\n    left: 0;\n}\n\n.v-spinner .v-ring3\n{\n\n    -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;\n            animation: v-ringLeftRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-perspective: 800px;\n            perspective: 800px;            \n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n@-webkit-keyframes v-ringRightRotate\n{\n    0%\n    {\n        -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n                transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    }\n    100%\n    { \n        -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n                transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n    \n    }\n}\n\n@keyframes v-ringRightRotate\n{\n    0%\n    {\n        -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n                transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    }\n    100%\n    { \n        -webkit-transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n                transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);\n    \n    }\n}\n\n@-webkit-keyframes v-ringLeftRotate\n{\n    0%\n    {\n        -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n                transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    }\n    100%\n    { \n        -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n                transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n    \n    }\n}\n\n@keyframes v-ringLeftRotate\n{\n    0%\n    {\n        -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n                transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);\n    }\n    100%\n    { \n        -webkit-transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n                transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);\n    \n    }\n}", ""]);
	
	// exports


/***/ },
/* 75 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
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
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '60'
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
	        height: this.size + 'px',
	        width: this.size + 'px',
	        border: this.size / 10 + 'px solid' + this.color,
	        opacity: 0.4,
	        borderRadius: this.radius
	      };
	    },
	    spinnerBasicStyle: function spinnerBasicStyle() {
	      return {
	        height: this.size + 'px',
	        width: this.size + 'px',
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
/* 76 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-ring v-ring1\" v-bind:style=\"spinnerBasicStyle\">\n    <div class=\"v-ring v-ring2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-ring v-ring3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>";

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(78)
	module.exports = __webpack_require__(80)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(81)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/BounceLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(79);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-bounce\n{\n          \n}\n\n.v-spinner .v-bounce1\n{\n}\n\n.v-spinner .v-bounce2\n{\n\n    -webkit-animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;\n            animation: v-bounceStretchDelay 2s 1s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n.v-spinner .v-bounce3\n{\n    -webkit-animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;\n            animation: v-bounceStretchDelay 2s 0s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n@-webkit-keyframes v-bounceStretchDelay\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    { \n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    \n    }\n}\n\n@keyframes v-bounceStretchDelay\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    { \n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    \n    }\n}", ""]);
	
	// exports


/***/ },
/* 80 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
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
/* 81 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-bounce v-bounce1\" v-bind:style=\"spinnerBasicStyle\">\n    <div class=\"v-bounce v-bounce2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-bounce v-bounce3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>";

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83)
	module.exports = __webpack_require__(85)
	
	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(86)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/greyby/Workspace/javascript/vuejs/vue-spinner/src/DotLoader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(19)(content, {});
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(18)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-spinner .v-dot\n{\n          \n}\n\n.v-spinner .v-dot1\n{\n\n    -webkit-animation: v-dotRotate 2s 0s infinite linear;\n            animation: v-dotRotate 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n\n.v-spinner .v-dot2\n{\n\n    -webkit-animation: v-dotBounce 2s 0s infinite linear;\n            animation: v-dotBounce 2s 0s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: 'absolute';\n    top: 0;\n    bottom: auto;\n}\n\n.v-spinner .v-dot3\n{\n    -webkit-animation: v-dotBounce 2s -1s infinite linear;\n            animation: v-dotBounce 2s -1s infinite linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: 'absolute';\n    top: auto;\n    bottom: 0;            \n}\n\n@-webkit-keyframes v-dotRotate\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@keyframes v-dotRotate\n{\n    100%\n    {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes v-dotBounce\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    }\n}\n\n@keyframes v-dotBounce\n{\n    0%,\n    100%\n    {\n        -webkit-transform: scale(0);\n                transform: scale(0);\n    }\n    50%\n    {\n        -webkit-transform: scale(1.0);\n                transform: scale(1.0);\n    }\n}", ""]);
	
	// exports


/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	// <div class="v-spinner">
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
	    color: {
	      type: String,
	      default: '#5dc596'
	    },
	    size: {
	      type: String,
	      default: '60'
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
	        height: this.size / 2 + 'px',
	        width: this.size / 2 + 'px',
	        borderRadius: this.radius
	      };
	    },
	    spinnerBasicStyle: function spinnerBasicStyle() {
	      return {
	        height: this.size + 'px',
	        width: this.size + 'px',
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
/* 86 */
/***/ function(module, exports) {

	module.exports = "<div class=\"v-spinner\">\n    <div class=\"v-dot v-dot1\" v-bind:style=\"spinnerBasicStyle\">\n    <div class=\"v-dot v-dot2\" v-bind:style=\"spinnerStyle\">\n    </div><div class=\"v-dot v-dot3\" v-bind:style=\"spinnerStyle\">\n    </div></div>\n  </div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-spinner.js.map