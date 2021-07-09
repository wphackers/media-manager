(window["webpackJsonp_media_manager"] = window["webpackJsonp_media_manager"] || []).push([["style-index"],{

/***/ "./src/block-library/media-center/style.scss":
/*!***************************************************!*\
  !*** ./src/block-library/media-center/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/media-player/style.scss":
/*!***************************************************!*\
  !*** ./src/block-library/media-player/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/pause-button/style.scss":
/*!***************************************************!*\
  !*** ./src/block-library/pause-button/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/play-button/style.scss":
/*!**************************************************!*\
  !*** ./src/block-library/play-button/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/play-pause-button/style.scss":
/*!********************************************************!*\
  !*** ./src/block-library/play-pause-button/style.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/time-position/style.scss":
/*!****************************************************!*\
  !*** ./src/block-library/time-position/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp_media_manager"] = window["webpackJsonp_media_manager"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/gridicons/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/gridicons/dist/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,'__esModule',{value:!0});var _extends=Object.assign||function(e){for(var l,t=1;t<arguments.length;t++)for(var a in l=arguments[t],l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);return e},_createClass=function(){function e(t,l){for(var c,a=0;a<l.length;a++)c=l[a],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),_react=__webpack_require__(/*! react */ "react"),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _objectWithoutProperties(e,t){var a={};for(var l in e)0<=t.indexOf(l)||Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return t&&('object'==typeof t||'function'==typeof t)?t:e}function _inherits(e,t){if('function'!=typeof t&&null!==t)throw new TypeError('Super expression must either be null or a function, not '+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var doesItNeedOffset=function(e,t){return 0<=t.indexOf(e)},isModulo18=function(e){return 0==e%18},iconsThatNeedOffset=['gridicons-add-outline','gridicons-add','gridicons-align-image-center','gridicons-align-image-left','gridicons-align-image-none','gridicons-align-image-right','gridicons-attachment','gridicons-bold','gridicons-bookmark-outline','gridicons-bookmark','gridicons-calendar','gridicons-cart','gridicons-create','gridicons-custom-post-type','gridicons-external','gridicons-folder','gridicons-heading','gridicons-help-outline','gridicons-help','gridicons-history','gridicons-info-outline','gridicons-info','gridicons-italic','gridicons-layout-blocks','gridicons-link-break','gridicons-link','gridicons-list-checkmark','gridicons-list-ordered','gridicons-list-unordered','gridicons-menus','gridicons-minus','gridicons-my-sites','gridicons-notice-outline','gridicons-notice','gridicons-plus-small','gridicons-plus','gridicons-popout','gridicons-posts','gridicons-scheduled','gridicons-share-ios','gridicons-star-outline','gridicons-star','gridicons-stats','gridicons-status','gridicons-thumbs-up','gridicons-textcolor','gridicons-time','gridicons-trophy','gridicons-user-circle','gridicons-reader-follow','gridicons-reader-following'],iconsThatNeedOffsetX=['gridicons-arrow-down','gridicons-arrow-up','gridicons-comment','gridicons-clear-formatting','gridicons-flag','gridicons-menu','gridicons-reader','gridicons-strikethrough'],iconsThatNeedOffsetY=['gridicons-align-center','gridicons-align-justify','gridicons-align-left','gridicons-align-right','gridicons-arrow-left','gridicons-arrow-right','gridicons-house','gridicons-indent-left','gridicons-indent-right','gridicons-minus-small','gridicons-print','gridicons-sign-out','gridicons-stats-alt','gridicons-trash','gridicons-underline','gridicons-video-camera'],Gridicon=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,e),_createClass(t,[{key:'render',value:function render(){var _props=this.props,l=_props.size,a=_props.onClick,c=_props.icon,n=_props.className,h=_objectWithoutProperties(_props,['size','onClick','icon','className']),d='gridicons-'+c,s=doesItNeedOffset(d,iconsThatNeedOffset)&&isModulo18(l),m=doesItNeedOffset(d,iconsThatNeedOffsetX)&&isModulo18(l),g=doesItNeedOffset(d,iconsThatNeedOffsetY)&&isModulo18(l),v=void 0,r=['gridicon',d,n,!!s&&'needs-offset',!!m&&'needs-offset-x',!!g&&'needs-offset-y'].filter(Boolean).join(' ');switch(d){default:v=_react2.default.createElement('svg',_extends({height:l,width:l},h));break;case'gridicons-add-image':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M23 4v2h-3v3h-2V6h-3V4h3V1h2v3h3zm-8.5 7c.828 0 1.5-.672 1.5-1.5S15.328 8 14.5 8 13 8.672 13 9.5s.672 1.5 1.5 1.5zm3.5 3.234l-.513-.57c-.794-.885-2.18-.885-2.976 0l-.655.73L9 9l-3 3.333V6h7V4H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2v-7h-2v3.234z'})));break;case'gridicons-add-outline':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 9h-4V7h-2v4H7v2h4v4h2v-4h4v-2z'})));break;case'gridicons-add':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z'})));break;case'gridicons-align-center':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M4 19h16v-2H4v2zm13-6H7v2h10v-2zM4 9v2h16V9H4zm13-4H7v2h10V5z'})));break;case'gridicons-align-image-center':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M3 5h18v2H3V5zm0 14h18v-2H3v2zm5-4h8V9H8v6z'})));break;case'gridicons-align-image-left':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M3 5h18v2H3V5zm0 14h18v-2H3v2zm0-4h8V9H3v6zm10 0h8v-2h-8v2zm0-4h8V9h-8v2z'})));break;case'gridicons-align-image-none':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 7H3V5h18v2zm0 10H3v2h18v-2zM11 9H3v6h8V9z'})));break;case'gridicons-align-image-right':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 7H3V5h18v2zm0 10H3v2h18v-2zm0-8h-8v6h8V9zm-10 4H3v2h8v-2zm0-4H3v2h8V9z'})));break;case'gridicons-align-justify':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M4 19h16v-2H4v2zm16-6H4v2h16v-2zM4 9v2h16V9H4zm16-4H4v2h16V5z'})));break;case'gridicons-align-left':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M4 19h16v-2H4v2zm10-6H4v2h10v-2zM4 9v2h16V9H4zm10-4H4v2h10V5z'})));break;case'gridicons-align-right':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 17H4v2h16v-2zm-10-2h10v-2H10v2zM4 9v2h16V9H4zm6-2h10V5H10v2z'})));break;case'gridicons-arrow-down':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M11 4v12.17l-5.59-5.59L4 12l8 8 8-8-1.41-1.41L13 16.17V4h-2z'})));break;case'gridicons-arrow-left':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'})));break;case'gridicons-arrow-right':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z'})));break;case'gridicons-arrow-up':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M13 20V7.83l5.59 5.59L20 12l-8-8-8 8 1.41 1.41L11 7.83V20h2z'})));break;case'gridicons-aside':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M14 20l6-6V6c0-1.105-.895-2-2-2H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h8zM6 6h12v6h-4c-1.105 0-2 .895-2 2v4H6V6zm10 4H8V8h8v2z'})));break;case'gridicons-attachment':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M14 1c-2.762 0-5 2.238-5 5v10c0 1.657 1.343 3 3 3s2.99-1.343 2.99-3V6H13v10c0 .553-.447 1-1 1-.553 0-1-.447-1-1V6c0-1.657 1.343-3 3-3s3 1.343 3 3v10.125C17 18.887 14.762 21 12 21s-5-2.238-5-5v-5H5v5c0 3.866 3.134 7 7 7s6.99-3.134 6.99-7V6c0-2.762-2.228-5-4.99-5z'})));break;case'gridicons-audio':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M8 4v10.184C7.686 14.072 7.353 14 7 14c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V7h7v4.184c-.314-.112-.647-.184-1-.184-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3V4H8z'})));break;case'gridicons-bell':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M6.14 14.97l2.828 2.827c-.362.362-.862.586-1.414.586-1.105 0-2-.895-2-2 0-.552.224-1.052.586-1.414zm8.867 5.324L14.3 21 3 9.7l.706-.707 1.102.157c.754.108 1.69-.122 2.077-.51l3.885-3.884c2.34-2.34 6.135-2.34 8.475 0s2.34 6.135 0 8.475l-3.885 3.886c-.388.388-.618 1.323-.51 2.077l.157 1.1z'})));break;case'gridicons-block':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM4 12c0-4.418 3.582-8 8-8 1.848 0 3.545.633 4.9 1.686L5.686 16.9C4.633 15.545 4 13.848 4 12zm8 8c-1.848 0-3.546-.633-4.9-1.686L18.314 7.1C19.367 8.455 20 10.152 20 12c0 4.418-3.582 8-8 8z'})));break;case'gridicons-bold':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M7 5.01h4.547c2.126 0 3.67.302 4.632.906.96.605 1.44 1.567 1.44 2.887 0 .896-.21 1.63-.63 2.205-.42.574-.98.92-1.678 1.036v.103c.95.212 1.637.608 2.057 1.19.42.58.63 1.35.63 2.315 0 1.367-.494 2.434-1.482 3.2-.99.765-2.332 1.148-4.027 1.148H7V5.01zm3 5.936h2.027c.862 0 1.486-.133 1.872-.4.386-.267.578-.708.578-1.323 0-.574-.21-.986-.63-1.236-.42-.25-1.087-.374-1.996-.374H10v3.333zm0 2.523v3.905h2.253c.876 0 1.52-.167 1.94-.502.416-.335.625-.848.625-1.54 0-1.243-.89-1.864-2.668-1.864H10z'})));break;case'gridicons-book':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M4 3h2v18H4zM18 3H7v18h11c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 6h-6V8h6v1zm0-2h-6V6h6v1z'})));break;case'gridicons-bookmark-outline':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M17 5v12.554l-5-2.857-5 2.857V5h10m0-2H7c-1.105 0-2 .896-2 2v16l7-4 7 4V5c0-1.104-.896-2-2-2z'})));break;case'gridicons-bookmark':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M17 3H7c-1.105 0-2 .896-2 2v16l7-4 7 4V5c0-1.104-.896-2-2-2z'})));break;case'gridicons-briefcase':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M14 15h-4v-2H2v6c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2v-6h-8v2zm6-9h-2V4c0-1.105-.895-2-2-2H8c-1.105 0-2 .895-2 2v2H4c-1.105 0-2 .895-2 2v4h20V8c0-1.105-.895-2-2-2zm-4 0H8V4h8v2z'})));break;case'gridicons-bug':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 14h4v-2h-4v-2h1a2 2 0 0 0 2-2V6h-2v2H5V6H3v2a2 2 0 0 0 2 2h1v2H2v2h4v1a6 6 0 0 0 .09 1H5a2 2 0 0 0-2 2v2h2v-2h1.81A6 6 0 0 0 11 20.91V10h2v10.91A6 6 0 0 0 17.19 18H19v2h2v-2a2 2 0 0 0-2-2h-1.09a6 6 0 0 0 .09-1zM12 2a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z'})));break;case'gridicons-calendar':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 4h-1V2h-2v2H8V2H6v2H5c-1.105 0-2 .896-2 2v13c0 1.104.895 2 2 2h14c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 15H5V8h14v11z'})));break;case'gridicons-camera':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M17 12c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zm5-5v11c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2V4h4v1h2l1-2h6l1 2h2c1.1 0 2 .9 2 2zM7.5 9c0-.8-.7-1.5-1.5-1.5S4.5 8.2 4.5 9s.7 1.5 1.5 1.5S7.5 9.8 7.5 9zM19 12c0-2.8-2.2-5-5-5s-5 2.2-5 5 2.2 5 5 5 5-2.2 5-5z'})));break;case'gridicons-caption':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 15l2-2v5c0 1.105-.895 2-2 2H4c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h13l-2 2H4v12h16v-3zm2.44-8.56l-.88-.88c-.586-.585-1.534-.585-2.12 0L12 13v2H6v2h9v-1l7.44-7.44c.585-.586.585-1.534 0-2.12z'})));break;case'gridicons-cart':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M9 20c0 1.1-.9 2-2 2s-1.99-.9-1.99-2S5.9 18 7 18s2 .9 2 2zm8-2c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm.396-5c.937 0 1.75-.65 1.952-1.566L21 5H7V4c0-1.105-.895-2-2-2H3v2h2v11c0 1.105.895 2 2 2h12c0-1.105-.895-2-2-2H7v-2h10.396z'})));break;case'gridicons-chat':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M3 12c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H9v3l-3-3H3zM21 18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-6v1c0 2.2-1.8 4-4 4v2c0 1.1.9 2 2 2h2v3l3-3h3z'})));break;case'gridicons-checkmark-circle':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z'})));break;case'gridicons-checkmark':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M9 19.414l-6.707-6.707 1.414-1.414L9 16.586 20.293 5.293l1.414 1.414'})));break;case'gridicons-chevron-down':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 9l-8 8-8-8 1.414-1.414L12 14.172l6.586-6.586'})));break;case'gridicons-chevron-left':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M14 20l-8-8 8-8 1.414 1.414L8.828 12l6.586 6.586'})));break;case'gridicons-chevron-right':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M10 20l8-8-8-8-1.414 1.414L15.172 12l-6.586 6.586'})));break;case'gridicons-chevron-up':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M4 15l8-8 8 8-1.414 1.414L12 9.828l-6.586 6.586'})));break;case'gridicons-clear-formatting':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M10.837 10.163l-4.6 4.6L10 4h4l.777 2.223-2.144 2.144-.627-2.092-1.17 3.888zm5.495.506L19.244 19H15.82l-1.05-3.5H11.5L5 22l-1.5-1.5 17-17L22 5l-5.668 5.67zm-2.31 2.31l-.032.03.032-.01v-.02z'})));break;case'gridicons-clipboard':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M16 18H8v-2h8v2zm0-6H8v2h8v-2zm2-9h-2v2h2v15H6V5h2V3H6c-1.105 0-2 .895-2 2v15c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm-4 2V4c0-1.105-.895-2-2-2s-2 .895-2 2v1c-1.105 0-2 .895-2 2v1h8V7c0-1.105-.895-2-2-2z'})));break;case'gridicons-cloud-download':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 9c-.01 0-.017.002-.025.003C17.72 5.646 14.922 3 11.5 3 7.91 3 5 5.91 5 9.5c0 .524.07 1.03.186 1.52C5.123 11.015 5.064 11 5 11c-2.21 0-4 1.79-4 4 0 1.202.54 2.267 1.38 3h18.593C22.196 17.09 23 15.643 23 14c0-2.76-2.24-5-5-5zm-6 7l-4-5h3V8h2v3h3l-4 5z'})));break;case'gridicons-cloud-outline':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M11.5 5c2.336 0 4.304 1.825 4.48 4.154l.142 1.86 1.867-.012h.092C19.698 11.043 21 12.37 21 14c0 .748-.28 1.452-.783 2H3.28c-.156-.256-.28-.59-.28-1 0-1.074.85-1.953 1.915-1.998.06.007.118.012.178.015l2.66.124-.622-2.587C7.044 10.186 7 9.843 7 9.5 7 7.02 9.02 5 11.5 5m0-2C7.91 3 5 5.91 5 9.5c0 .524.07 1.03.186 1.52C5.123 11.015 5.064 11 5 11c-2.21 0-4 1.79-4 4 0 1.202.54 2.267 1.38 3h18.593C22.196 17.09 23 15.643 23 14c0-2.76-2.24-5-5-5l-.025.002C17.72 5.646 14.922 3 11.5 3z'})));break;case'gridicons-cloud-upload':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 9c-.01 0-.017.002-.025.003C17.72 5.646 14.922 3 11.5 3 7.91 3 5 5.91 5 9.5c0 .524.07 1.03.186 1.52C5.123 11.015 5.064 11 5 11c-2.21 0-4 1.79-4 4 0 1.202.54 2.267 1.38 3h18.593C22.196 17.09 23 15.643 23 14c0-2.76-2.24-5-5-5zm-5 4v3h-2v-3H8l4-5 4 5h-3z'})));break;case'gridicons-cloud':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 9c-.01 0-.017.002-.025.003C17.72 5.646 14.922 3 11.5 3 7.91 3 5 5.91 5 9.5c0 .524.07 1.03.186 1.52C5.123 11.015 5.064 11 5 11c-2.21 0-4 1.79-4 4 0 1.202.54 2.267 1.38 3h18.593C22.196 17.09 23 15.643 23 14c0-2.76-2.24-5-5-5z'})));break;case'gridicons-code':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M23 12l-5.45 6.5L16 17.21 20.39 12 16 6.79l1.55-1.29zM8 6.79L6.45 5.5 1 12l5.45 6.5L8 17.21 3.61 12zm.45 14.61l1.93.52L15.55 2.6l-1.93-.52z'})));break;case'gridicons-cog':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 12c0-.568-.06-1.122-.174-1.656l1.834-1.612-2-3.464-2.322.786c-.82-.736-1.787-1.308-2.86-1.657L14 2h-4l-.48 2.396c-1.07.35-2.04.92-2.858 1.657L4.34 5.268l-2 3.464 1.834 1.612C4.06 10.878 4 11.432 4 12s.06 1.122.174 1.656L2.34 15.268l2 3.464 2.322-.786c.82.736 1.787 1.308 2.86 1.657L10 22h4l.48-2.396c1.07-.35 2.038-.92 2.858-1.657l2.322.786 2-3.464-1.834-1.613c.113-.535.174-1.09.174-1.657zm-8 4c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'})));break;case'gridicons-comment':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 16l-5 5v-5H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-7z'})));break;case'gridicons-computer':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 2H4c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h6v2H7v2h10v-2h-3v-2h6c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm0 14H4V4h16v12z'})));break;case'gridicons-coupon':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M13 16v2h-2v-2h2zm3-3h2v-2h-2v2zm2 8h-2v2h2v-2zm3-5v2h2v-2h-2zm-1-3c.552 0 1 .448 1 1h2c0-1.657-1.343-3-3-3v2zm1 7c0 .552-.448 1-1 1v2c1.657 0 3-1.343 3-3h-2zm-7 1c-.552 0-1-.448-1-1h-2c0 1.657 1.343 3 3 3v-2zm3.21-5.21c-.78.78-2.047.782-2.828.002l-.002-.002L10 11.41l-1.43 1.44c.28.506.427 1.073.43 1.65C9 16.433 7.433 18 5.5 18S2 16.433 2 14.5 3.567 11 5.5 11c.577.003 1.144.15 1.65.43L8.59 10 7.15 8.57c-.506.28-1.073.427-1.65.43C3.567 9 2 7.433 2 5.5S3.567 2 5.5 2 9 3.567 9 5.5c-.003.577-.15 1.144-.43 1.65L10 8.59l3.88-3.88c.78-.78 2.047-.782 2.828-.002l.002.002-5.3 5.29 5.8 5.79zM5.5 7C6.328 7 7 6.328 7 5.5S6.328 4 5.5 4 4 4.672 4 5.5 4.672 7 5.5 7zM7 14.5c0-.828-.672-1.5-1.5-1.5S4 13.672 4 14.5 4.672 16 5.5 16 7 15.328 7 14.5z'})));break;case'gridicons-create':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{viewBox:'0 0 24 24',xmlns:'http://www.w3.org/2000/svg'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 14v5c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h5v2H5v14h14v-5h2z'}),_react2.default.createElement('path',{d:'M21 7h-4V3h-2v4h-4v2h4v4h2V9h4'})));break;case'gridicons-credit-card':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 4H4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 2v2H4V6h16zM4 18v-6h16v6H4zm2-4h7v2H6v-2zm9 0h3v2h-3v-2z'})));break;case'gridicons-crop':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M22 16h-4V8c0-1.105-.895-2-2-2H8V2H6v4H2v2h4v8c0 1.105.895 2 2 2h8v4h2v-4h4v-2zM8 16V8h8v8H8z'})));break;case'gridicons-cross-circle':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0 4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8-1.4 1.4z'})));break;case'gridicons-cross-small':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M17.705 7.705l-1.41-1.41L12 10.59 7.705 6.295l-1.41 1.41L10.59 12l-4.295 4.295 1.41 1.41L12 13.41l4.295 4.295 1.41-1.41L13.41 12l4.295-4.295z'})));break;case'gridicons-cross':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18.36 19.78L12 13.41l-6.36 6.37-1.42-1.42L10.59 12 4.22 5.64l1.42-1.42L12 10.59l6.36-6.36 1.41 1.41L13.41 12l6.36 6.36z'})));break;case'gridicons-custom-post-type':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zM6 6h5v5H6V6zm4.5 13C9.12 19 8 17.88 8 16.5S9.12 14 10.5 14s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zm3-6l3-5 3 5h-6z'})));break;case'gridicons-customize':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M2 6c0-1.505.78-3.08 2-4 0 .845.69 2 2 2 1.657 0 3 1.343 3 3 0 .386-.08.752-.212 1.09.74.594 1.476 1.19 2.19 1.81L8.9 11.98c-.62-.716-1.214-1.454-1.807-2.192C6.753 9.92 6.387 10 6 10c-2.21 0-4-1.79-4-4zm12.152 6.848l1.34-1.34c.607.304 1.283.492 2.008.492 2.485 0 4.5-2.015 4.5-4.5 0-.725-.188-1.4-.493-2.007L18 9l-2-2 3.507-3.507C18.9 3.188 18.225 3 17.5 3 15.015 3 13 5.015 13 7.5c0 .725.188 1.4.493 2.007L3 20l2 2 6.848-6.848c1.885 1.928 3.874 3.753 5.977 5.45l1.425 1.148 1.5-1.5-1.15-1.425c-1.695-2.103-3.52-4.092-5.448-5.977z'})));break;case'gridicons-domains':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.918 6h-3.215c-.188-1.424-.42-2.65-.565-3.357 1.593.682 2.916 1.87 3.78 3.357zm-5.904-3.928c.068.352.387 2.038.645 3.928h-3.32c.26-1.89.578-3.576.646-3.928C11.32 4.03 11.656 4 12 4s.68.03 1.014.072zM14 12c0 .598-.043 1.286-.11 2h-3.78c-.067-.714-.11-1.402-.11-2s.043-1.286.11-2h3.78c.067.714.11 1.402.11 2zM8.862 4.643C8.717 5.35 8.485 6.576 8.297 8H5.082c.864-1.487 2.187-2.675 3.78-3.357zM4.262 10h3.822c-.05.668-.084 1.344-.084 2s.033 1.332.085 2H4.263C4.097 13.36 4 12.692 4 12s.098-1.36.263-2zm.82 6h3.215c.188 1.424.42 2.65.565 3.357-1.593-.682-2.916-1.87-3.78-3.357zm5.904 3.928c-.068-.353-.388-2.038-.645-3.928h3.32c-.26 1.89-.578 3.576-.646 3.928-.333.043-.67.072-1.014.072s-.68-.03-1.014-.072zm4.152-.57c.145-.708.377-1.934.565-3.358h3.215c-.864 1.487-2.187 2.675-3.78 3.357zm4.6-5.358h-3.822c.05-.668.084-1.344.084-2s-.033-1.332-.085-2h3.82c.167.64.265 1.308.265 2s-.097 1.36-.263 2z'})));break;case'gridicons-dropdown':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M7 10l5 5 5-5'})));break;case'gridicons-ellipsis-circle':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM7.5 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5S9 11.2 9 12s-.7 1.5-1.5 1.5zm4.5 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm4.5 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z'})));break;case'gridicons-ellipsis':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M7 12c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2zm12-2c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-7 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z'})));break;case'gridicons-external':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 13v6c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h6v2H5v12h12v-6h2zM13 3v2h4.586l-7.793 7.793 1.414 1.414L19 6.414V11h2V3h-8z'})));break;case'gridicons-filter':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{width:'24',height:'24',viewBox:'0 0 24 24',xmlns:'http://www.w3.org/2000/svg'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M10 19h4v-2h-4v2zm-4-6h12v-2H6v2zM3 5v2h18V5H3z'})));break;case'gridicons-flag':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M15 6c0-1.105-.895-2-2-2H5v17h2v-7h5c0 1.105.895 2 2 2h6V6h-5z'})));break;case'gridicons-flip-horizontal':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 18v-5h3v-2h-3V6c0-1.105-.895-2-2-2H6c-1.105 0-2 .895-2 2v5H1v2h3v5c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2zM6 6h12v5H6V6z'})));break;case'gridicons-flip-vertical':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 4h-5V1h-2v3H6c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h5v3h2v-3h5c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zM6 18V6h5v12H6z'})));break;case'gridicons-folder-multiple':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M4 8c-1.105 0-2 .895-2 2v10c0 1.1.9 2 2 2h14c1.105 0 2-.895 2-2H4V8zm16 10H8c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h3c1.105 0 2 .895 2 2h7c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2z'})));break;case'gridicons-folder':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 19H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2h7c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2z'})));break;case'gridicons-fullscreen-exit':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M14 10V4h2v2.59l3.29-3.29 1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29 1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3-1.42-1.42L6.59 16H4v-2z'})));break;case'gridicons-fullscreen':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 3v6h-2V6.41l-3.29 3.3-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3 1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29-1.41-1.42L5 17.59V15H3v6z'})));break;case'gridicons-gift':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M22 6h-4.8c.5-.5.8-1.2.8-2 0-1.7-1.3-3-3-3s-3 1.3-3 3c0-1.7-1.3-3-3-3S6 2.3 6 4c0 .8.3 1.5.8 2H2v6h1v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-8h1V6zm-2 4h-7V8h7v2zm-5-7c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM9 3c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM4 8h7v2H4V8zm1 4h6v8H5v-8zm14 8h-6v-8h6v8z'})));break;case'gridicons-globe':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18l2-2 1-1v-2h-2v-1l-1-1H9v3l2 2v1.93c-3.94-.494-7-3.858-7-7.93l1 1h2v-2h2l3-3V6h-2L9 5v-.41C9.927 4.21 10.94 4 12 4s2.073.212 3 .59V6l-1 1v2l1 1 3.13-3.13c.752.897 1.304 1.964 1.606 3.13H18l-2 2v2l1 1h2l.286.286C18.03 18.06 15.24 20 12 20z'})));break;case'gridicons-grid':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M8 8H4V4h4v4zm6-4h-4v4h4V4zm6 0h-4v4h4V4zM8 10H4v4h4v-4zm6 0h-4v4h4v-4zm6 0h-4v4h4v-4zM8 16H4v4h4v-4zm6 0h-4v4h4v-4zm6 0h-4v4h4v-4z'})));break;case'gridicons-heading-h1':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M11 7h2v10h-2v-4H7v4H5V7h2v4h4V7zm6.57 0c-.594.95-1.504 1.658-2.57 2v1h2v7h2V7h-1.43z'})));break;case'gridicons-heading-h2':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M9 7h2v10H9v-4H5v4H3V7h2v4h4V7zm8 8c.51-.41.6-.62 1.06-1.05.437-.4.848-.828 1.23-1.28.334-.39.62-.82.85-1.28.2-.39.305-.822.31-1.26.005-.44-.087-.878-.27-1.28-.177-.385-.437-.726-.76-1-.346-.283-.743-.497-1.17-.63-.485-.153-.99-.227-1.5-.22-.36 0-.717.033-1.07.1-.343.06-.678.158-1 .29-.304.13-.593.295-.86.49-.287.21-.56.437-.82.68l1.24 1.22c.308-.268.643-.502 1-.7.35-.2.747-.304 1.15-.3.455-.03.906.106 1.27.38.31.278.477.684.45 1.1-.014.396-.14.78-.36 1.11-.285.453-.62.872-1 1.25-.44.43-.98.92-1.59 1.43-.61.51-1.41 1.06-2.16 1.65V17h8v-2h-4z'})));break;case'gridicons-heading-h3':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M14.11 14.218c.355.287.75.523 1.17.7.434.18.9.273 1.37.27.484.017.965-.086 1.4-.3.333-.146.55-.476.55-.84.003-.203-.05-.403-.15-.58-.123-.19-.3-.34-.51-.43-.32-.137-.655-.228-1-.27-.503-.073-1.012-.106-1.52-.1v-1.57c.742.052 1.485-.07 2.17-.36.37-.164.615-.525.63-.93.026-.318-.12-.627-.38-.81-.34-.203-.734-.3-1.13-.28-.395.013-.784.108-1.14.28-.375.167-.73.375-1.06.62l-1.22-1.39c.5-.377 1.053-.68 1.64-.9.608-.224 1.252-.336 1.9-.33.525-.007 1.05.05 1.56.17.43.1.84.277 1.21.52.325.21.595.495.79.83.19.342.287.73.28 1.12.01.48-.177.943-.52 1.28-.417.39-.916.685-1.46.86v.06c.61.14 1.175.425 1.65.83.437.382.68.94.66 1.52.005.42-.113.835-.34 1.19-.23.357-.538.657-.9.88-.408.253-.853.44-1.32.55-.514.128-1.04.192-1.57.19-.786.02-1.57-.106-2.31-.37-.59-.214-1.126-.556-1.57-1l1.12-1.41zM9 11H5V7H3v10h2v-4h4v4h2V7H9v4z'})));break;case'gridicons-heading-h4':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M11 17H9v-4H5v4H3V7h2v4h4V7h2v10zm10-2h-1v2h-2v-2h-5v-2l4.05-6H20v6h1v2zm-3-2V9l-2.79 4H18z'})));break;case'gridicons-heading-h5':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M14.09 14.19c.352.27.73.5 1.13.69.42.196.877.296 1.34.29.51.014 1.01-.125 1.44-.4.378-.253.594-.686.57-1.14.02-.45-.197-.877-.57-1.13-.406-.274-.89-.41-1.38-.39h-.47c-.135.014-.27.04-.4.08l-.41.15-.48.23-1.02-.57.28-5h6.4v1.92h-4.31L16 10.76c.222-.077.45-.138.68-.18.235-.037.472-.054.71-.05.463-.004.924.057 1.37.18.41.115.798.305 1.14.56.33.248.597.57.78.94.212.422.322.888.32 1.36.007.497-.11.99-.34 1.43-.224.417-.534.782-.91 1.07-.393.3-.837.527-1.31.67-.497.164-1.016.252-1.54.26-.788.023-1.573-.11-2.31-.39-.584-.238-1.122-.577-1.59-1l1.09-1.42zM11 17H9v-4H5v4H3V7h2v4h4V7h2v10z'})));break;case'gridicons-heading-h6':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M11 17H9v-4H5v4H3V7h2v4h4V7h2v10zm8.58-7.508c-.248-.204-.524-.37-.82-.49-.625-.242-1.317-.242-1.94 0-.3.11-.566.287-.78.52-.245.27-.432.586-.55.93-.16.46-.243.943-.25 1.43.367-.33.79-.59 1.25-.77.405-.17.84-.262 1.28-.27.415-.006.83.048 1.23.16.364.118.704.304 1 .55.295.253.528.57.68.93.193.403.302.843.32 1.29.01.468-.094.93-.3 1.35-.206.387-.49.727-.83 1-.357.287-.764.504-1.2.64-.98.31-2.033.293-3-.05-.507-.182-.968-.472-1.35-.85-.437-.416-.778-.92-1-1.48-.243-.693-.352-1.426-.32-2.16-.02-.797.11-1.59.38-2.34.215-.604.556-1.156 1-1.62.406-.416.897-.74 1.44-.95.54-.21 1.118-.314 1.7-.31.682-.02 1.36.096 2 .34.5.19.962.464 1.37.81l-1.31 1.34zm-2.39 5.84c.202 0 .405-.03.6-.09.183-.046.356-.128.51-.24.15-.136.27-.303.35-.49.092-.225.136-.467.13-.71.037-.405-.123-.804-.43-1.07-.328-.23-.72-.347-1.12-.33-.346-.002-.687.07-1 .21-.383.17-.724.418-1 .73.046.346.143.683.29 1 .108.23.257.44.44.62.152.15.337.26.54.33.225.055.46.068.69.04z'})));break;case'gridicons-heading':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 20h-3v-6H9v6H6V5.01h3V11h6V5.01h3V20z'})));break;case'gridicons-heart-outline':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M16.5 4.5c2.206 0 4 1.794 4 4 0 4.67-5.543 8.94-8.5 11.023C9.043 17.44 3.5 13.17 3.5 8.5c0-2.206 1.794-4 4-4 1.298 0 2.522.638 3.273 1.706L12 7.953l1.227-1.746c.75-1.07 1.975-1.707 3.273-1.707m0-1.5c-1.862 0-3.505.928-4.5 2.344C11.005 3.928 9.362 3 7.5 3 4.462 3 2 5.462 2 8.5c0 5.72 6.5 10.438 10 12.85 3.5-2.412 10-7.13 10-12.85C22 5.462 19.538 3 16.5 3z'})));break;case'gridicons-heart':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M16.5 3c-1.862 0-3.505.928-4.5 2.344C11.005 3.928 9.362 3 7.5 3 4.462 3 2 5.462 2 8.5c0 5.72 6.5 10.438 10 12.85 3.5-2.412 10-7.13 10-12.85C22 5.462 19.538 3 16.5 3z'})));break;case'gridicons-help-outline':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4 8c0-2.21-1.79-4-4-4s-4 1.79-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2c-.552 0-1 .448-1 1v2h2v-1.14c1.722-.447 3-1.998 3-3.86zm-3 6h-2v2h2v-2z'})));break;case'gridicons-help':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 16h-2v-2h2v2zm0-4.14V15h-2v-2c0-.552.448-1 1-1 1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.862-1.278 3.413-3 3.86z'})));break;case'gridicons-history':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M2.12 13.526c.742 4.78 4.902 8.47 9.88 8.47 5.5 0 10-4.5 10-9.998S17.5 2 12 2C8.704 2 5.802 3.6 4 6V2H2.003L2 9h7V7H5.8c1.4-1.8 3.702-3 6.202-3C16.4 4 20 7.6 20 11.998s-3.6 8-8 8c-3.877 0-7.13-2.795-7.848-6.472H2.12z'}),_react2.default.createElement('path',{d:'M11.002 7v5.3l3.2 4.298 1.6-1.197-2.8-3.7V7'})));break;case'gridicons-house':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M22 9L12 1 2 9v2h2v10h5v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4h5V11h2V9z'})));break;case'gridicons-image-multiple':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M15 7.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5S17.328 9 16.5 9 15 8.328 15 7.5zM4 20h14c0 1.105-.895 2-2 2H4c-1.1 0-2-.9-2-2V8c0-1.105.895-2 2-2v14zM22 4v12c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zM8 4v6.333L11 7l4.855 5.395.656-.73c.796-.886 2.183-.886 2.977 0l.513.57V4H8z'})));break;case'gridicons-image-remove':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20.587 3.423L22 4.837 20 6.84V18c0 1.105-.895 2-2 2H6.84l-2.007 2.006-1.414-1.414 17.167-17.17zM12.42 14.42l1 1 1-1c.63-.504 1.536-.456 2.11.11L18 16V8.84l-5.58 5.58zM15.16 6H6v6.38l2.19-2.19 1.39 1.39L4 17.163V6c0-1.105.895-2 2-2h11.162l-2 2z'})));break;case'gridicons-image':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 6v12c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 0H6v6.38l2.19-2.19 5.23 5.23 1-1c.63-.504 1.536-.456 2.11.11L18 16V6zm-5 3.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5z'})));break;case'gridicons-indent-left':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 20h2V4h-2v16zM2 11h10.172l-2.086-2.086L11.5 7.5 16 12l-4.5 4.5-1.414-1.414L12.172 13H2v-2z'})));break;case'gridicons-indent-right':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M6 4H4v16h2V4zm16 9H11.828l2.086 2.086L12.5 16.5 8 12l4.5-4.5 1.414 1.414L11.828 11H22v2z'})));break;case'gridicons-info-outline':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M13 9h-2V7h2v2zm0 2h-2v6h2v-6zm-1-7c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8m0-2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z'})));break;case'gridicons-info':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'})));break;case'gridicons-ink':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M5 15c0 3.866 3.134 7 7 7s7-3.134 7-7c0-1.387-.41-2.677-1.105-3.765h.007L12 2l-5.903 9.235h.007C5.41 12.323 5 13.613 5 15z'})));break;case'gridicons-institution':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M2 19h20v3H2zM12 2L2 6v2h20V6M17 10h3v7h-3zM10.5 10h3v7h-3zM4 10h3v7H4z'})));break;case'gridicons-italic':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M10.536 5l-.427 2h1.5L9.262 18h-1.5l-.427 2h6.128l.426-2h-1.5l2.347-11h1.5l.427-2'})));break;case'gridicons-layout-blocks':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 7h-2V3c0-1.105-.895-2-2-2H7c-1.105 0-2 .895-2 2v2H3c-1.105 0-2 .895-2 2v4c0 1.105.895 2 2 2h2v8c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2v-2h2c1.105 0 2-.895 2-2V9c0-1.105-.895-2-2-2zm-4 14H7v-8h2c1.105 0 2-.895 2-2V7c0-1.105-.895-2-2-2H7V3h10v4h-2c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2h2v2zm4-4h-6V9h6v8z'})));break;case'gridicons-layout':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M8 20H5c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2h3c1.105 0 2 .895 2 2v12c0 1.105-.895 2-2 2zm8-10h4c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2h-4c-1.105 0-2 .895-2 2v3c0 1.105.895 2 2 2zm5 10v-6c0-1.105-.895-2-2-2h-5c-1.105 0-2 .895-2 2v6c0 1.105.895 2 2 2h5c1.105 0 2-.895 2-2z'})));break;case'gridicons-line-graph':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M3 19h18v2H3zm3-3c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3L8.8 10H9c.5 0 1-.2 1.3-.5l2.7 1.4v.1c0 1.1.9 2 2 2s2-.9 2-2c0-.5-.2-.9-.5-1.3L17.8 7h.2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .5.2 1 .5 1.3L15.2 9H15c-.5 0-1 .2-1.3.5L11 8.2V8c0-1.1-.9-2-2-2s-2 .9-2 2c0 .5.2 1 .5 1.3L6.2 12H6c-1.1 0-2 .9-2 2s.9 2 2 2z'})));break;case'gridicons-link-break':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M10 11l-2 2H7v-2h3zm9.64-3.64L22 5l-1.5-1.5-17 17L5 22l9-9h3v-2h-1l2-2c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2h-4.977c.913 1.208 2.347 2 3.977 2h1c2.21 0 4-1.79 4-4v-2c0-1.623-.97-3.013-2.36-3.64zM4.36 16.64L6 15c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h4.977C10.065 7.792 8.63 7 7 7H6c-2.21 0-4 1.79-4 4v2c0 1.623.97 3.013 2.36 3.64z'})));break;case'gridicons-link':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M17 13H7v-2h10v2zm1-6h-1c-1.63 0-3.065.792-3.977 2H18c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2h-4.977c.913 1.208 2.347 2 3.977 2h1c2.21 0 4-1.79 4-4v-2c0-2.21-1.79-4-4-4zM2 11v2c0 2.21 1.79 4 4 4h1c1.63 0 3.065-.792 3.977-2H6c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h4.977C10.065 7.792 8.63 7 7 7H6c-2.21 0-4 1.79-4 4z'})));break;case'gridicons-list-checkmark':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M9.5 15.5L5 20l-2.5-2.5 1.06-1.06L5 17.88l3.44-3.44L9.5 15.5zM10 5v2h11V5H10zm0 14h11v-2H10v2zm0-6h11v-2H10v2zM8.44 8.44L5 11.88l-1.44-1.44L2.5 11.5 5 14l4.5-4.5-1.06-1.06zm0-6L5 5.88 3.56 4.44 2.5 5.5 5 8l4.5-4.5-1.06-1.06z'})));break;case'gridicons-list-ordered-rtl':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M3 19h13v-2H3v2zm0-6h13v-2H3v2zm0-8v2h13V5H3zm16.587.252c.107-.096.197-.188.27-.275-.013.228-.02.48-.02.756V8h1.176V3.717H19.97L18.5 4.915l.6.738.487-.4zm.448 7.826c.475-.426.785-.715.93-.867.146-.15.262-.296.35-.434.088-.138.153-.278.195-.42.042-.143.063-.298.063-.466 0-.225-.06-.427-.18-.608-.12-.18-.29-.32-.507-.417-.218-.1-.465-.148-.742-.148-.22 0-.42.022-.596.067-.177.045-.34.11-.49.195-.15.084-.337.225-.558.422l.636.744c.174-.15.33-.264.467-.34.138-.078.274-.117.41-.117.13 0 .232.03.304.096.072.064.108.152.108.264 0 .09-.018.176-.054.258-.035.082-.1.18-.19.294-.093.114-.288.328-.587.64L18.547 13.3v.762h3.108v-.955h-1.62v-.03zm.46 4.747v-.018c.306-.086.54-.225.702-.414.162-.19.243-.42.243-.685 0-.31-.126-.55-.378-.727-.252-.175-.6-.263-1.043-.263-.308 0-.58.033-.817.1s-.47.178-.696.334l.48.774c.293-.184.576-.275.85-.275.147 0 .263.026.35.08.087.056.13.14.13.253 0 .3-.294.45-.882.45h-.27v.87h.264c.216 0 .392.017.526.05.135.03.232.08.293.143.06.064.09.154.09.27 0 .153-.058.265-.174.337-.116.07-.3.106-.555.106-.163 0-.342-.023-.537-.07-.194-.045-.385-.116-.573-.212v.96c.228.09.44.15.637.183.196.034.41.05.64.05.56 0 .998-.113 1.314-.342.316-.228.474-.542.474-.94.003-.585-.355-.923-1.07-1.013z'})));break;case'gridicons-list-ordered':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M8 19h13v-2H8v2zm0-6h13v-2H8v2zm0-8v2h13V5H8zm-4.425.252c.107-.096.197-.188.27-.275-.013.228-.02.48-.02.756V8h1.176V3.717H3.96L2.487 4.915l.6.738.487-.4zm.334 7.764c.474-.426.784-.715.93-.867.145-.153.26-.298.35-.436.087-.138.152-.278.194-.42.042-.143.063-.298.063-.466 0-.225-.06-.427-.18-.608s-.29-.32-.507-.417c-.218-.1-.465-.148-.742-.148-.22 0-.42.022-.596.067s-.34.11-.49.195c-.15.085-.337.226-.558.423l.636.744c.174-.15.33-.264.467-.34.138-.078.274-.117.41-.117.13 0 .232.032.304.097.073.064.11.152.11.264 0 .09-.02.176-.055.258-.036.082-.1.18-.192.294-.092.114-.287.328-.586.64L2.42 13.238V14h3.11v-.955H3.91v-.03zm.53 4.746v-.018c.306-.086.54-.225.702-.414.162-.19.243-.42.243-.685 0-.31-.126-.55-.378-.727-.252-.176-.6-.264-1.043-.264-.307 0-.58.033-.816.1s-.47.178-.696.334l.48.773c.293-.183.576-.274.85-.274.147 0 .263.027.35.082s.13.14.13.252c0 .3-.294.45-.882.45h-.27v.87h.264c.217 0 .393.017.527.05.136.03.233.08.294.143.06.064.09.154.09.27 0 .153-.057.265-.173.337-.115.07-.3.106-.554.106-.164 0-.343-.022-.538-.07-.194-.044-.385-.115-.573-.21v.96c.228.088.44.148.637.182.196.033.41.05.64.05.56 0 .998-.114 1.314-.343.315-.228.473-.542.473-.94.002-.585-.356-.923-1.07-1.013z'})));break;case'gridicons-list-unordered':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M9 19h12v-2H9v2zm0-6h12v-2H9v2zm0-8v2h12V5H9zm-4-.5c-.828 0-1.5.672-1.5 1.5S4.172 7.5 5 7.5 6.5 6.828 6.5 6 5.828 4.5 5 4.5zm0 6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm0 6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z'})));break;case'gridicons-location':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 9c0-3.866-3.134-7-7-7S5 5.134 5 9c0 1.387.41 2.677 1.105 3.765h-.008C8.457 16.46 12 22 12 22l5.903-9.235h-.007C18.59 11.677 19 10.387 19 9zm-7 3c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'})));break;case'gridicons-lock':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 8h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H6c-1.105 0-2 .895-2 2v10c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V10c0-1.105-.895-2-2-2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm4 8.723V18h-2v-2.277c-.595-.346-1-.984-1-1.723 0-1.105.895-2 2-2s2 .895 2 2c0 .738-.405 1.376-1 1.723z'})));break;case'gridicons-mail':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 4H4c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h16c1.105 0 2-.895 2-2V6c0-1.105-.895-2-2-2zm0 4.236l-8 4.882-8-4.882V6h16v2.236z'})));break;case'gridicons-mention':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2a10 10 0 0 0 0 20v-2a8 8 0 1 1 8-8v.5a1.5 1.5 0 0 1-3 0V7h-2v1a5 5 0 1 0 1 7 3.5 3.5 0 0 0 6-2.46V12A10 10 0 0 0 12 2zm0 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3z'})));break;case'gridicons-menu':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 6v2H3V6h18zM3 18h18v-2H3v2zm0-5h18v-2H3v2z'})));break;case'gridicons-menus':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M9 19h10v-2H9v2zm0-6h6v-2H9v2zm0-8v2h12V5H9zm-4-.5c-.828 0-1.5.672-1.5 1.5S4.172 7.5 5 7.5 6.5 6.828 6.5 6 5.828 4.5 5 4.5zm0 6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm0 6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z'})));break;case'gridicons-microphone':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 9v1a7 7 0 0 1-6 6.92V20h3v2H8v-2h3v-3.08A7 7 0 0 1 5 10V9h2v1a5 5 0 0 0 10 0V9zm-7 4a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z'})));break;case'gridicons-minus-small':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M6 11h12v2H6z'})));break;case'gridicons-minus':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M3 11h18v2H3z'})));break;case'gridicons-money':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M2 5v14h20V5H2zm5 12c0-1.657-1.343-3-3-3v-4c1.657 0 3-1.343 3-3h10c0 1.657 1.343 3 3 3v4c-1.657 0-3 1.343-3 3H7zm5-8c1.1 0 2 1.3 2 3s-.9 3-2 3-2-1.3-2-3 .9-3 2-3z'})));break;case'gridicons-multiple-users':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M24 14.6c0 .6-1.2 1-2.6 1.2-.9-1.7-2.7-3-4.8-3.9.2-.3.4-.5.6-.8h.8c3.1-.1 6 1.8 6 3.5zM6.8 11H6c-3.1 0-6 1.9-6 3.6 0 .6 1.2 1 2.6 1.2.9-1.7 2.7-3 4.8-3.9l-.6-.9zm5.2 1c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 1c-4.1 0-8 2.6-8 5 0 2 8 2 8 2s8 0 8-2c0-2.4-3.9-5-8-5zm5.7-3h.3c1.7 0 3-1.3 3-3s-1.3-3-3-3c-.5 0-.9.1-1.3.3.8 1 1.3 2.3 1.3 3.7 0 .7-.1 1.4-.3 2zM6 10h.3C6.1 9.4 6 8.7 6 8c0-1.4.5-2.7 1.3-3.7C6.9 4.1 6.5 4 6 4 4.3 4 3 5.3 3 7s1.3 3 3 3z'})));break;case'gridicons-my-sites-horizon':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M10.986 13.928l.762-2.284-1.324-3.63c-.458-.026-.892-.08-.892-.08-.458-.027-.405-.727.054-.7 0 0 1.403.107 2.24.107.888 0 2.265-.107 2.265-.107.46-.027.513.646.055.7 0 0-.46.055-.973.082l2.006 5.966c-.875-.034-1.74-.053-2.6-.06l-.428-1.177-.403 1.17c-.252.002-.508.01-.76.015zm-7.156.393c-.21-.737-.33-1.514-.33-2.32 0-1.232.264-2.402.736-3.46l2.036 5.58c.85-.06 1.69-.104 2.526-.138L6.792 8.015c.512-.027.973-.08.973-.08.458-.055.404-.728-.055-.702 0 0-1.376.108-2.265.108-.16 0-.347-.003-.547-.01C6.418 5.025 9.03 3.5 12 3.5c2.213 0 4.228.846 5.74 2.232-.036-.002-.072-.007-.11-.007-.835 0-1.427.727-1.427 1.51 0 .7.404 1.292.835 1.993.323.566.7 1.293.7 2.344 0 .674-.244 1.463-.572 2.51.3.02.604.043.907.066l.798-2.307c.486-1.212.647-2.18.647-3.043 0-.313-.02-.603-.057-.874.662 1.21 1.04 2.6 1.04 4.077 0 .807-.128 1.58-.34 2.32.5.05 1.006.112 1.51.17.205-.798.33-1.628.33-2.49 0-5.523-4.477-10-10-10S2 6.477 2 12c0 .862.125 1.692.33 2.49.5-.057 1.003-.12 1.5-.17zm14.638 3.168C16.676 19.672 14.118 20.5 12 20.5c-1.876 0-4.55-.697-6.463-3.012-.585.048-1.174.1-1.77.16C5.572 20.272 8.578 22 12 22c3.422 0 6.43-1.73 8.232-4.35-.593-.063-1.18-.114-1.764-.162zM12 15.01c-3.715 0-7.368.266-10.958.733.18.41.35.825.506 1.247 3.427-.43 6.91-.68 10.452-.68s7.025.25 10.452.68c.156-.422.327-.836.506-1.246-3.59-.467-7.243-.734-10.958-.734z'})));break;case'gridicons-my-sites':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM3.5 12c0-1.232.264-2.402.736-3.46L8.29 19.65C5.456 18.272 3.5 15.365 3.5 12zm8.5 8.5c-.834 0-1.64-.12-2.4-.345l2.55-7.41 2.613 7.157c.017.042.038.08.06.117-.884.31-1.833.48-2.823.48zm1.172-12.485c.512-.027.973-.08.973-.08.458-.055.404-.728-.054-.702 0 0-1.376.108-2.265.108-.835 0-2.24-.107-2.24-.107-.458-.026-.51.674-.053.7 0 0 .434.055.892.082l1.324 3.63-1.86 5.578-3.096-9.208c.512-.027.973-.08.973-.08.458-.055.403-.728-.055-.702 0 0-1.376.108-2.265.108-.16 0-.347-.003-.547-.01C6.418 5.025 9.03 3.5 12 3.5c2.213 0 4.228.846 5.74 2.232-.037-.002-.072-.007-.11-.007-.835 0-1.427.727-1.427 1.51 0 .7.404 1.292.835 1.993.323.566.7 1.293.7 2.344 0 .727-.28 1.572-.646 2.748l-.848 2.833-3.072-9.138zm3.1 11.332l2.597-7.506c.484-1.212.645-2.18.645-3.044 0-.313-.02-.603-.057-.874.664 1.21 1.042 2.6 1.042 4.078 0 3.136-1.7 5.874-4.227 7.347z'})));break;case'gridicons-nametag':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-6 8h12v3H6zm14-8h-4V3H8v3H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10 5h4v5h-4zm10 14H4v-9h4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2h4z'})));break;case'gridicons-next-page':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 8h-8V6h8v2zm4-4v8l-6 6H8c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 0H8v12h6v-4c0-1.105.895-2 2-2h4V4zM4 6c-1.105 0-2 .895-2 2v12c0 1.1.9 2 2 2h12c1.105 0 2-.895 2-2H4V6z'})));break;case'gridicons-not-visible':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M1 12s4.188-6 11-6c.947 0 1.84.12 2.678.322L8.36 12.64C8.133 12.14 8 11.586 8 11c0-.937.335-1.787.875-2.47C6.483 9.344 4.66 10.917 3.62 12c.68.707 1.696 1.62 2.98 2.398L5.15 15.85C2.498 14.13 1 12 1 12zm22 0s-4.188 6-11 6c-.946 0-1.836-.124-2.676-.323L5 22l-1.5-1.5 17-17L22 5l-3.147 3.147C21.5 9.87 23 12 23 12zm-2.615.006c-.678-.708-1.697-1.624-2.987-2.403L16 11c0 2.21-1.79 4-4 4l-.947.947c.31.03.624.053.947.053 3.978 0 6.943-2.478 8.385-3.994z'})));break;case'gridicons-notice-outline':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z'})));break;case'gridicons-notice':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-2h2v2zm0-4h-2l-.5-6h3l-.5 6z'})));break;case'gridicons-offline':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M10 3h8l-4 6h4L6 21l4-9H6l4-9'})));break;case'gridicons-pages':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z'})));break;case'gridicons-pause':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'})));break;case'gridicons-pencil':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M13 6l5 5-9.507 9.507c-.686-.686-.69-1.794-.012-2.485l-.002-.003c-.69.676-1.8.673-2.485-.013-.677-.677-.686-1.762-.036-2.455l-.008-.008c-.694.65-1.78.64-2.456-.036L13 6zm7.586-.414l-2.172-2.172c-.78-.78-2.047-.78-2.828 0L14 5l5 5 1.586-1.586c.78-.78.78-2.047 0-2.828zM3 18v3h3c0-1.657-1.343-3-3-3z'})));break;case'gridicons-phone':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M16 2H8c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h8c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-3 19h-2v-1h2v1zm3-2H8V5h8v14z'})));break;case'gridicons-pin':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 17c0-2.038-1.188-3.836-3-4.92V5h.5c.828 0 1.5-.672 1.5-1.5S17.328 2 16.5 2h-9C6.672 2 6 2.672 6 3.5S6.672 5 7.5 5H8v7.08C6.188 13.164 5 14.962 5 17h6v4c0 .55.45 1 1 1s1-.45 1-1v-4h6z'})));break;case'gridicons-plans':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 12H6l5-10v10zm2 6V10h5l-5 10z'})));break;case'gridicons-play':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 14.5v-9l6 4.5z'})));break;case'gridicons-plugins':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M16 8V3c0-.552-.448-1-1-1s-1 .448-1 1v5h-4V3c0-.552-.448-1-1-1s-1 .448-1 1v5H5v4c0 2.79 1.637 5.193 4 6.317V22h6v-3.683c2.363-1.124 4-3.527 4-6.317V8h-3z'})));break;case'gridicons-plus-small':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 11h-5V6h-2v5H6v2h5v5h2v-5h5'})));break;case'gridicons-plus':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8v2z'})));break;case'gridicons-popout':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M6 7V5c0-1.105.895-2 2-2h11c1.105 0 2 .895 2 2v14c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2v-2h2v2h11V5H8v2H6zm5.5-.5l-1.414 1.414L13.172 11H3v2h10.172l-3.086 3.086L11.5 17.5 17 12l-5.5-5.5z'})));break;case'gridicons-posts':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M16 19H3v-2h13v2zm5-10H3v2h18V9zM3 5v2h11V5H3zm14 0v2h4V5h-4zm-6 8v2h10v-2H11zm-8 0v2h5v-2H3z'})));break;case'gridicons-print':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M9 16h6v2H9v-2zm13 1h-3v3c0 1.105-.895 2-2 2H7c-1.105 0-2-.895-2-2v-3H2V9c0-1.105.895-2 2-2h1V5c0-1.105.895-2 2-2h10c1.105 0 2 .895 2 2v2h1c1.105 0 2 .895 2 2v8zM7 7h10V5H7v2zm10 7H7v6h10v-6zm3-3.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z'})));break;case'gridicons-product-downloadable':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M22 3H2v6h1v11c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zm-6-10v5.17l2.59-2.58L17 14l-5 5-5-5 1.41-1.42L11 15.17V10h2z'})));break;case'gridicons-product-external':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M22 3H2v6h1v11c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zm-2-9v6h-2v-2.59l-3.29 3.29-1.41-1.41L13.59 13H11v-2h6z'})));break;case'gridicons-product-virtual':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M22 3H2v6h1v11c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zM7 16.45c0-1.005.815-1.82 1.82-1.82h.09c-.335-1.59.68-3.148 2.27-3.483s3.148.68 3.483 2.27c.02.097.036.195.046.293 1.252-.025 2.29.97 2.314 2.224.017.868-.462 1.67-1.235 2.066H7.87c-.54-.33-.87-.917-.87-1.55z'})));break;case'gridicons-product':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M22 3H2v6h1v11c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V9h1V3zM4 5h16v2H4V5zm15 15H5V9h14v11zM9 11h6c0 1.105-.895 2-2 2h-2c-1.105 0-2-.895-2-2z'})));break;case'gridicons-quote':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z'})));break;case'gridicons-read-more':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M9 12h6v-2H9zm-7 0h5v-2H2zm15 0h5v-2h-5zm3 2v2l-6 6H6a2 2 0 0 1-2-2v-6h2v6h6v-4a2 2 0 0 1 2-2h6zM4 8V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4h-2V4H6v4z'})));break;case'gridicons-reader-follow-conversation':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 14v-3h-2v3h-3v2h3v3h2v-3h3v-2'}),_react2.default.createElement('path',{d:'M13 16h-2l-5 5v-5H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v4h-4v3h-3v4z'})));break;case'gridicons-reader-follow':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M23 16v2h-3v3h-2v-3h-3v-2h3v-3h2v3h3zM20 2v9h-4v3h-3v4H4c-1.1 0-2-.9-2-2V2h18zM8 13v-1H4v1h4zm3-3H4v1h7v-1zm0-2H4v1h7V8zm7-4H4v2h14V4z'})));break;case'gridicons-reader-following-conversation':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M16.8 14.5l3.2-3.2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h2v5l8.7-8.7 2.1 2.2z'}),_react2.default.createElement('path',{d:'M22.6 11.1l-6.1 6.1-2.1-2.2-1.4 1.4 3.5 3.6 7.5-7.6'})));break;case'gridicons-reader-following':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M23 13.482L15.508 21 12 17.4l1.412-1.388 2.106 2.188 6.094-6.094L23 13.482zm-7.455 1.862L20 10.89V2H2v14c0 1.1.9 2 2 2h4.538l4.913-4.832 2.095 2.176zM8 13H4v-1h4v1zm3-2H4v-1h7v1zm0-2H4V8h7v1zm7-3H4V4h14v2z'})));break;case'gridicons-reader':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M3 4v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4H3zm7 11H5v-1h5v1zm2-2H5v-1h7v1zm0-2H5v-1h7v1zm7 4h-5v-5h5v5zm0-7H5V6h14v2z'})));break;case'gridicons-reblog':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M22.086 9.914L20 7.828V18c0 1.105-.895 2-2 2h-7v-2h7V7.828l-2.086 2.086L14.5 8.5 19 4l4.5 4.5-1.414 1.414zM6 16.172V6h7V4H6c-1.105 0-2 .895-2 2v10.172l-2.086-2.086L.5 15.5 5 20l4.5-4.5-1.414-1.414L6 16.172z'})));break;case'gridicons-redo':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 6v3.586L14.343 5.93C13.17 4.756 11.636 4.17 10.1 4.17s-3.07.585-4.242 1.757c-2.343 2.342-2.343 6.14 0 8.484l5.364 5.364 1.414-1.414L7.272 13c-1.56-1.56-1.56-4.097 0-5.657.755-.755 1.76-1.172 2.828-1.172 1.068 0 2.073.417 2.828 1.173L16.586 11H13v2h7V6h-2z'})));break;case'gridicons-refresh':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M17.91 14c-.478 2.833-2.943 5-5.91 5-3.308 0-6-2.692-6-6s2.692-6 6-6h2.172l-2.086 2.086L13.5 10.5 18 6l-4.5-4.5-1.414 1.414L14.172 5H12c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.08 0 7.438-3.055 7.93-7h-2.02z'})));break;case'gridicons-refund':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M13.91 2.91L11.83 5H14c4.418 0 8 3.582 8 8h-2c0-3.314-2.686-6-6-6h-2.17l2.09 2.09-1.42 1.41L8 6l1.41-1.41L12.5 1.5l1.41 1.41zM2 12v10h16V12H2zm2 6.56v-3.11c.6-.35 1.1-.85 1.45-1.45h9.1c.35.6.85 1.1 1.45 1.45v3.11c-.593.35-1.085.845-1.43 1.44H5.45c-.35-.597-.85-1.094-1.45-1.44zm6 .44c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2z'})));break;case'gridicons-reply':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M9 16h7.2l-2.6 2.6L15 20l5-5-5-5-1.4 1.4 2.6 2.6H9c-2.2 0-4-1.8-4-4s1.8-4 4-4h2V4H9c-3.3 0-6 2.7-6 6s2.7 6 6 6z'})));break;case'gridicons-resize':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M13 4v2h3.59L6 16.59V13H4v7h7v-2H7.41L18 7.41V11h2V4h-7'})));break;case'gridicons-rotate':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 14v6c0 1.105-.895 2-2 2H6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2h10c1.105 0 2 .895 2 2zM13.914 2.914L11.828 5H14c4.418 0 8 3.582 8 8h-2c0-3.308-2.692-6-6-6h-2.172l2.086 2.086L12.5 10.5 8 6l1.414-1.414L12.5 1.5l1.414 1.414z'})));break;case'gridicons-scheduled':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M10.498 18l-3.705-3.704 1.415-1.415 2.294 2.295 5.293-5.293 1.415 1.415L10.498 18zM21 6v13c0 1.104-.896 2-2 2H5c-1.104 0-2-.896-2-2V6c0-1.104.896-2 2-2h1V2h2v2h8V2h2v2h1c1.104 0 2 .896 2 2zm-2 2H5v11h14V8z'})));break;case'gridicons-search':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 19l-5.154-5.154C16.574 12.742 17 11.42 17 10c0-3.866-3.134-7-7-7s-7 3.134-7 7 3.134 7 7 7c1.42 0 2.742-.426 3.846-1.154L19 21l2-2zM5 10c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z'})));break;case'gridicons-share-computer':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6v2H7v2h10v-2h-3v-2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 14H4V4h16zm-3.25-3a1.75 1.75 0 0 1-3.5 0L10 11.36a1.71 1.71 0 1 1 0-2.71L13.25 7a1.77 1.77 0 1 1 .68 1.37L10.71 10l3.22 1.61A1.74 1.74 0 0 1 16.75 13z'})));break;case'gridicons-share-ios':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M17 8h2c1.105 0 2 .895 2 2v9c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2v-9c0-1.105.895-2 2-2h2v2H5v9h14v-9h-2V8zM6.5 5.5l1.414 1.414L11 3.828V14h2V3.828l3.086 3.086L17.5 5.5 12 0 6.5 5.5z'})));break;case'gridicons-share':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 16c-.788 0-1.5.31-2.034.807L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.048 4.118c-.053.223-.088.453-.088.692 0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3z'})));break;case'gridicons-shipping':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 8h-2V7c0-1.105-.895-2-2-2H4c-1.105 0-2 .895-2 2v10h2c0 1.657 1.343 3 3 3s3-1.343 3-3h4c0 1.657 1.343 3 3 3s3-1.343 3-3h2v-5l-4-4zM7 18.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zM4 14V7h10v7H4zm13 4.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z'})));break;case'gridicons-shutter':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18.9 4.8s-.7 5.6-3.5 10.2c1.7-.3 3.9-.9 6.6-2 0 0 .7-4.6-3.1-8.2zm-6 2.8c-1.1-1.3-2.7-3-5-4.7C5.1 4.2 3 6.6 2.3 9.6 7 7.7 11 7.5 12.9 7.6zm3.4 2.9c.6-1.6 1.2-3.9 1.6-6.7-4.1-3-8.6-1.5-8.6-1.5s4.4 3.4 7 8.2zm-5.2 6c1.1 1.3 2.7 3 5 4.7 0 0 4.3-1.6 5.6-6.7 0-.1-5.3 2.1-10.6 2zm-3.4-3.1c-.6 1.6-1.2 3.8-1.5 6.7 0 0 3.6 2.9 8.6 1.5 0 0-4.6-3.4-7.1-8.2zM2 11.1s-.7 4.5 3.1 8.2c0 0 .7-5.7 3.5-10.3-1.7.3-4 .9-6.6 2.1z'})));break;case'gridicons-sign-out':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M16 17v2c0 1.105-.895 2-2 2H5c-1.105 0-2-.895-2-2V5c0-1.105.895-2 2-2h9c1.105 0 2 .895 2 2v2h-2V5H5v14h9v-2h2zm2.5-10.5l-1.414 1.414L20.172 11H10v2h10.172l-3.086 3.086L18.5 17.5 24 12l-5.5-5.5z'})));break;case'gridicons-site':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-5 14H6v-7h7zm5 0h-3v-7h3zm0-9H6V6h12z'})));break;case'gridicons-spam':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M17 2H7L2 7v10l5 5h10l5-5V7l-5-5zm-4 15h-2v-2h2v2zm0-4h-2l-.5-6h3l-.5 6z'})));break;case'gridicons-speaker':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 8v6c1.7 0 3-1.3 3-3s-1.3-3-3-3zM11 7H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1v3c0 1.1.9 2 2 2h2v-5h2l4 4h2V3h-2l-4 4z'})));break;case'gridicons-special-character':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12.005 7.418c-1.237 0-2.19.376-2.86 1.128s-1.005 1.812-1.005 3.18c0 1.387.226 2.513.677 3.377.45.865 1.135 1.543 2.05 2.036V20H5v-2.666h3.12c-1.04-.636-1.842-1.502-2.405-2.6-.564-1.097-.846-2.322-.846-3.676 0-1.258.29-2.363.875-3.317.585-.952 1.417-1.685 2.497-2.198s2.334-.77 3.763-.77c2.18 0 3.915.572 5.204 1.713s1.932 2.673 1.932 4.594c0 1.353-.283 2.57-.852 3.65-.567 1.08-1.38 1.947-2.44 2.603H19V20h-5.908v-2.86c.95-.493 1.65-1.18 2.102-2.062s.677-2.006.677-3.374c0-1.36-.336-2.415-1.01-3.164-.672-.747-1.624-1.122-2.855-1.122z'})));break;case'gridicons-star-outline':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 6.308l1.176 3.167.347.936.997.042 3.374.14-2.647 2.09-.784.62.27.963.91 3.25-2.813-1.872-.83-.553-.83.552-2.814 1.87.91-3.248.27-.962-.783-.62-2.648-2.092 3.374-.14.996-.04.347-.936L12 6.308M12 2L9.418 8.953 2 9.257l5.822 4.602L5.82 21 12 16.89 18.18 21l-2.002-7.14L22 9.256l-7.418-.305L12 2z'})));break;case'gridicons-star':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21 12 16.89 5.82 21l2.002-7.14L2 9.256l7.418-.304'})));break;case'gridicons-stats-alt':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 21H3v-2h18v2zM8 10H4v7h4v-7zm6-7h-4v14h4V3zm6 3h-4v11h4V6z'})));break;case'gridicons-stats-down-alt':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 21H3v-2h18v2zM8 3H4v14h4V3zm6 3h-4v11h4V6zm6 4h-4v7h4v-7z'})));break;case'gridicons-stats-down':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V5h14v14zM9 17H7V7h2v10zm4 0h-2v-7h2v7zm4 0h-2v-5h2v5z'})));break;case'gridicons-stats-up-alt':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M21 21H3v-2h18v2zM8 10H4v7h4v-7zm6-4h-4v11h4V6zm6-3h-4v14h4V3z'})));break;case'gridicons-stats-up':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V5h14v14zM9 17H7v-5h2v5zm4 0h-2v-7h2v7zm4 0h-2V7h2v10z'})));break;case'gridicons-stats':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19 3H5c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2h14c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2zm0 16H5V5h14v14zM9 17H7v-5h2v5zm4 0h-2V7h2v10zm4 0h-2v-7h2v7z'})));break;case'gridicons-status':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.55 13c-.02.166-.05.33-.05.5 0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5c0-.17-.032-.334-.05-.5h-8.9zM10 10V8c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1zm6 0V8c0-.552-.448-1-1-1s-1 .448-1 1v2c0 .552.448 1 1 1s1-.448 1-1z'})));break;case'gridicons-strikethrough':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M14.348 12H21v2h-4.613c.24.515.368 1.094.368 1.748 0 1.317-.474 2.355-1.423 3.114-.947.76-2.266 1.138-3.956 1.138-1.557 0-2.934-.293-4.132-.878v-2.874c.985.44 1.818.75 2.5.928.682.18 1.306.27 1.872.27.68 0 1.2-.13 1.562-.39.363-.26.545-.644.545-1.158 0-.285-.08-.54-.24-.763-.16-.222-.394-.437-.704-.643-.18-.12-.483-.287-.88-.49H3v-2H14.347zm-3.528-2c-.073-.077-.143-.155-.193-.235-.126-.202-.19-.44-.19-.713 0-.44.157-.795.47-1.068.313-.273.762-.41 1.348-.41.492 0 .993.064 1.502.19.51.127 1.153.35 1.93.67l1-2.405c-.753-.327-1.473-.58-2.16-.76-.69-.18-1.414-.27-2.173-.27-1.544 0-2.753.37-3.628 1.108-.874.738-1.312 1.753-1.312 3.044 0 .302.036.58.088.848h3.318z'})));break;case'gridicons-sync':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M23.5 13.5l-3.086 3.086L19 18l-4.5-4.5 1.414-1.414L18 14.172V12c0-3.308-2.692-6-6-6V4c4.418 0 8 3.582 8 8v2.172l2.086-2.086L23.5 13.5zM6 12V9.828l2.086 2.086L9.5 10.5 5 6 3.586 7.414.5 10.5l1.414 1.414L4 9.828V12c0 4.418 3.582 8 8 8v-2c-3.308 0-6-2.692-6-6z'})));break;case'gridicons-tablet':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 2H6c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2V4c0-1.104-.896-2-2-2zm-5 19h-2v-1h2v1zm5-2H6V5h12v14z'})));break;case'gridicons-tag':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M20 2.007h-7.087c-.53 0-1.04.21-1.414.586L2.592 11.5c-.78.78-.78 2.046 0 2.827l7.086 7.086c.78.78 2.046.78 2.827 0l8.906-8.906c.376-.374.587-.883.587-1.413V4.007c0-1.105-.895-2-2-2zM17.007 9c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z'})));break;case'gridicons-text-color':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M3 19h18v3H3v-3zM15.82 17h3.424L14 3h-4L4.756 17H8.18l1.067-3.5h5.506L15.82 17zm-1.952-6h-3.73l1.868-5.725L13.868 11z'})));break;case'gridicons-themes':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M4 6c-1.105 0-2 .895-2 2v12c0 1.1.9 2 2 2h12c1.105 0 2-.895 2-2H4V6zm16-4H8c-1.105 0-2 .895-2 2v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2zm-5 14H8V9h7v7zm5 0h-3V9h3v7zm0-9H8V4h12v3z'})));break;case'gridicons-thumbs-up':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M6.7 22H2v-9h2l2.7 9zM20 9h-6V5c0-1.657-1.343-3-3-3h-1v4L7.1 9.625c-.712.89-1.1 1.996-1.1 3.135V14l2.1 7h8.337c1.836 0 3.435-1.25 3.88-3.03l1.622-6.485C22.254 10.223 21.3 9 20 9z'})));break;case'gridicons-time':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.8 13.4L13 11.667V7h-2v5.333l3.2 4.266 1.6-1.2z'})));break;case'gridicons-trash':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M6.187 8h11.625l-.695 11.125C17.05 20.18 16.177 21 15.12 21H8.88c-1.057 0-1.93-.82-1.997-1.875L6.187 8zM19 5v2H5V5h3V4c0-1.105.895-2 2-2h4c1.105 0 2 .895 2 2v1h3zm-9 0h4V4h-4v1z'})));break;case'gridicons-trophy':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18 5.062V3H6v2.062H2V8c0 2.525 1.89 4.598 4.324 4.932.7 2.058 2.485 3.61 4.676 3.978V18c0 1.105-.895 2-2 2H8v2h8v-2h-1c-1.105 0-2-.895-2-2v-1.09c2.19-.368 3.976-1.92 4.676-3.978C20.11 12.598 22 10.525 22 8V5.062h-4zM4 8v-.938h2v3.766C4.836 10.416 4 9.304 4 8zm16 0c0 1.304-.836 2.416-2 2.83V7.06h2V8z'})));break;case'gridicons-types':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M22 17c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5zM6.5 6.5h3.8L7 1 1 11h5.5V6.5zm9.5 4.085V8H8v8h2.585c.433-2.783 2.632-4.982 5.415-5.415z'})));break;case'gridicons-underline':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M4 19v2h16v-2H4zM18 3v8c0 3.314-2.686 6-6 6s-6-2.686-6-6V3h3v8c0 1.654 1.346 3 3 3s3-1.346 3-3V3h3z'})));break;case'gridicons-undo':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M18.142 5.93C16.97 4.756 15.435 4.17 13.9 4.17s-3.072.586-4.244 1.757L6 9.585V6H4v7h7v-2H7.414l3.657-3.657c.756-.755 1.76-1.172 2.83-1.172 1.067 0 2.072.417 2.827 1.173 1.56 1.56 1.56 4.097 0 5.657l-5.364 5.364 1.414 1.414 5.364-5.364c2.345-2.343 2.345-6.142.002-8.485z'})));break;case'gridicons-user-add':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('circle',{cx:'15',cy:'8',r:'4'}),_react2.default.createElement('path',{d:'M15 20s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2zM6 10V7H4v3H1v2h3v3h2v-3h3v-2z'})));break;case'gridicons-user-circle':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18.5c-4.694 0-8.5-3.806-8.5-8.5S7.306 3.5 12 3.5s8.5 3.806 8.5 8.5-3.806 8.5-8.5 8.5zm0-8c-3.038 0-5.5 1.728-5.5 3.5s2.462 3.5 5.5 3.5 5.5-1.728 5.5-3.5-2.462-3.5-5.5-3.5zm0-.5c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'})));break;case'gridicons-user':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 16s8 0 8-2c0-2.4-3.9-5-8-5s-8 2.6-8 5c0 2 8 2 8 2z'})));break;case'gridicons-video-camera':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M17 9V7c0-1.105-.895-2-2-2H4c-1.105 0-2 .895-2 2v10c0 1.105.895 2 2 2h11c1.105 0 2-.895 2-2v-2l5 4V5l-5 4z'})));break;case'gridicons-video-remove':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M19.42 4.59l1.167-1.167L22 4.837 20 6.84V18c0 1.105-.895 2-2 2v-2h-2v2H6.84l-2.007 2.006-1.414-1.414 1.17-1.172-.01-.01L8 16 18 6l1.41-1.42.01.01zM15.84 11H18V8.84L15.84 11zM16 8.01l.01-.01H16v.01zM6 15.17l-2 2V6c0-1.105.895-2 2-2v2h2V4h9.17l-9 9H6v2.17zM6 8v3h2V8H6zm12 8v-3h-2v3h2z'})));break;case'gridicons-video':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M8 4h8v1.997h2V4c1.105 0 2 .896 2 2v12c0 1.104-.895 2-2 2v-2.003h-2V20H8v-2.003H6V20c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2v1.997h2V4zm2 11l4.5-3L10 9v6zm8 .997v-3h-2v3h2zm0-5v-3h-2v3h2zm-10 5v-3H6v3h2zm0-5v-3H6v3h2z'})));break;case'gridicons-visible':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M12 6C5.188 6 1 12 1 12s4.188 6 11 6 11-6 11-6-4.188-6-11-6zm0 10c-3.943 0-6.926-2.484-8.38-4 1.04-1.085 2.863-2.657 5.255-3.47C8.335 9.214 8 10.064 8 11c0 2.21 1.79 4 4 4s4-1.79 4-4c0-.937-.335-1.787-.875-2.47 2.393.813 4.216 2.386 5.254 3.47-1.456 1.518-4.438 4-8.38 4z'})));break;case'gridicons-zoom-in':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M15.8 13.8c.7-1.1 1.2-2.4 1.2-3.8 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.4 0 2.7-.4 3.8-1.2L19 21l2-2-5.2-5.2zM10 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z'}),_react2.default.createElement('path',{d:'M11 7H9v2H7v2h2v2h2v-2h2V9h-2'})));break;case'gridicons-zoom-out':v=_react2.default.createElement('svg',_extends({className:r,height:l,width:l,onClick:a},h,{xmlns:'http://www.w3.org/2000/svg',viewBox:'0 0 24 24'}),_react2.default.createElement('g',null,_react2.default.createElement('path',{d:'M3 10c0 3.9 3.1 7 7 7 1.4 0 2.7-.5 3.8-1.2L19 21l2-2-5.2-5.2c.8-1.1 1.2-2.4 1.2-3.8 0-3.9-3.1-7-7-7s-7 3.1-7 7zm2 0c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z'}),_react2.default.createElement('path',{d:'M7 9h6v2H7z'})));}return v}}]),t}(_react.PureComponent);Gridicon.defaultProps={size:24},Gridicon.propTypes={icon:_propTypes2.default.string.isRequired,size:_propTypes2.default.number,onClick:_propTypes2.default.func,className:_propTypes2.default.string},exports.default=Gridicon,module.exports=exports['default'];


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./packages/block-editor-complements/build-module/components/index.js":
/*!****************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/components/index.js ***!
  \****************************************************************************/
/*! exports provided: MediaItem, MediaItemPanelBody, MediaConnectProviderPanelBody, MediaSelector, withMediaManagerColors, getButtonSizeBySlug, withSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-selector */ "./packages/block-editor-complements/build-module/components/media-selector/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaItem", function() { return _media_selector__WEBPACK_IMPORTED_MODULE_0__["MediaItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaItemPanelBody", function() { return _media_selector__WEBPACK_IMPORTED_MODULE_0__["MediaItemPanelBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaConnectProviderPanelBody", function() { return _media_selector__WEBPACK_IMPORTED_MODULE_0__["MediaConnectProviderPanelBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaSelector", function() { return _media_selector__WEBPACK_IMPORTED_MODULE_0__["MediaSelector"]; });

/* harmony import */ var _with_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with-colors */ "./packages/block-editor-complements/build-module/components/with-colors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMediaManagerColors", function() { return _with_colors__WEBPACK_IMPORTED_MODULE_1__["withMediaManagerColors"]; });

/* harmony import */ var _with_sizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./with-sizes */ "./packages/block-editor-complements/build-module/components/with-sizes/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getButtonSizeBySlug", function() { return _with_sizes__WEBPACK_IMPORTED_MODULE_2__["getButtonSizeBySlug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSizes", function() { return _with_sizes__WEBPACK_IMPORTED_MODULE_2__["withSizes"]; });





/***/ }),

/***/ "./packages/block-editor-complements/build-module/components/media-selector/index.js":
/*!*******************************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/components/media-selector/index.js ***!
  \*******************************************************************************************/
/*! exports provided: MediaItem, MediaItemPanelBody, MediaConnectProviderPanelBody, MediaSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItem", function() { return MediaItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaItemPanelBody", function() { return MediaItemPanelBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaConnectProviderPanelBody", function() { return MediaConnectProviderPanelBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSelector", function() { return MediaSelector; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gridicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gridicons */ "./node_modules/gridicons/dist/index.js");
/* harmony import */ var gridicons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gridicons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var _media_manager_time_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @media-manager/time-utils */ "./packages/time-utils/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */

function MediaItem({
  elementType: type,
  source,
  id,
  showTypeLabel,
  onPlayToggle = () => {},
  onItemSelect = () => {},
  onReady = () => {},
  onRemove = () => {}
}) {
  const itemReference = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const [isPlaying, setIsPlaying] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function onPlayHandler() {
    setIsPlaying(true);
  }

  function onPauseHandler() {
    setIsPlaying(false);
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!(itemReference !== null && itemReference !== void 0 && itemReference.current)) {
      return;
    } // Construct media element.


    const mediaElement = document.createElement(type);
    mediaElement.src = source; // Insert player into the DOM.

    itemReference.current.appendChild(mediaElement);
    onReady(mediaElement, id);
    mediaElement.addEventListener('play', onPlayHandler);
    mediaElement.addEventListener('pause', onPauseHandler);
    return function () {
      onRemove(mediaElement, id);
      mediaElement.removeEventListener('play', onPlayHandler);
      mediaElement.removeEventListener('pause', onPauseHandler);
    };
  }, [itemReference]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "media__item-wrapper",
    onClick: () => onItemSelect(id)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "media__item",
    ref: itemReference
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "media__item-metadata"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(gridicons__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: `media__item-icon is-${type}`,
    icon: type,
    size: 36
  }), showTypeLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, " ", type), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_9__["PlayPauseButton"], {
    className: "media__item-play-button",
    isPaused: !isPlaying,
    onClick: event => {
      var _itemReference$curren;

      event.stopPropagation();
      onPlayToggle((_itemReference$curren = itemReference.current) === null || _itemReference$curren === void 0 ? void 0 : _itemReference$curren.querySelector(type), id);
    },
    isSmall: true
  })));
}
function MediaItemPanelBody({
  source,
  mediaSourceId,
  onReplace,
  onUnlink,
  isMediaInherited
}) {
  const isMediaNotDefined = mediaSourceId === _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_7__["MEDIA_NOT_DEFINED"];
  const {
    selectBlock
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["store"]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    className: "media-source-panel",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Media Source', 'media-manager')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Media source connected to the media center block', 'media-manager')), isMediaNotDefined && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"], {
    spokenMessage: null,
    status: "warning",
    isDismissible: false
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No media linked to this block', 'context'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isSecondary: true,
    isSmall: true,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Link to a media source', 'media-manager'),
    onClick: onReplace
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Link to Media', 'media-manager')))), source && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, source, {
    showTypeLabel: true,
    onPlayToggle: element => {
      if (!element) {
        return;
      }

      if (element.paused) {
        return element.play();
      }

      element.pause();
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Filename:', 'media-manager'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, " ", source.source)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Duration:', 'media-manager'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, ' ', Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_8__["convertSecondsToTimeCode"])(source.duration))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(
  /* translators: %1$s: block title, %2$s: author name. */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Connected to a %1$s.'), source.elementType), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "components-button__focus",
    isLink: true,
    onClick: () => {
      if (!source.mediaBlockClientId) {
        return;
      }

      selectBlock(source.mediaBlockClientId);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Focus', 'media-manager'))))), !isMediaInherited && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "media-source-panel__actions"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isSecondary: true,
    isSmall: true,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Replacing linked media source', 'media-manager'),
    onClick: onReplace
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Replace Media', 'media-manager')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isTertiary: true,
    isSmall: true,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Unlink media source', 'media-manager'),
    onClick: () => onUnlink(true)
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Unlink Media', 'media-manager'))))));
}
/**
 * Block settings Pane to show info
 * about block as media provider
 */

function MediaConnectProviderPanelBody() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_9__["MediaConnectIcon"],
    className: "media-source-panel",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Media Source Provider', 'media-manager')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('This block has been defined as media provider, meaning you can connect and command it from other blocks.', 'media-manager')));
}
function MediaSelector({
  media,
  onMediaSelect
}) {
  if (!(media !== null && media !== void 0 && media.length)) {
    return null;
  }

  const [mediaPlayingElementRef, setMediaPlayingElementRef] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "media-selector"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pick up a media from the media sources list available for this entrance.', 'media-manager')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", null, media.map(function ({
    id,
    ...other
  }) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", {
      key: `item-${id}`
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      id: id
    }, other, {
      isPaused: mediaPlayingElementRef === null || mediaPlayingElementRef === void 0 ? void 0 : mediaPlayingElementRef.paused,
      onPlayToggle: element => {
        // Seek previous media element by media Id.
        // If so, stop it.
        if (mediaPlayingElementRef && mediaPlayingElementRef !== element) {
          mediaPlayingElementRef === null || mediaPlayingElementRef === void 0 ? void 0 : mediaPlayingElementRef.pause();
        }

        if (element.paused) {
          setMediaPlayingElementRef(element);
          return element.play();
        }

        setMediaPlayingElementRef(null);
        element.pause();
      },
      onItemSelect: onMediaSelect
    })));
  })));
}

/***/ }),

/***/ "./packages/block-editor-complements/build-module/components/with-colors/index.js":
/*!****************************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/components/with-colors/index.js ***!
  \****************************************************************************************/
/*! exports provided: withMediaManagerColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMediaManagerColors", function() { return withMediaManagerColors; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */





function withMediaManagerColors(supportProps) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(BlockEdit => props => {
    // Panel title.
    const panelTitle = supportProps.__sectionTitle || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Color settings', 'media-manager'); // Panel color settings.


    const colorSettings = []; // Contrast checker.

    const contrastCheckerProps = {};

    for (const prop in supportProps) {
      var _props$support$attrib, _supportProps$prop;

      if (/^__/.test(prop)) {
        continue;
      }

      const support = supportProps[prop];
      const value = (_props$support$attrib = props[support.attributeName]) === null || _props$support$attrib === void 0 ? void 0 : _props$support$attrib.color;
      colorSettings.push({
        label: (_supportProps$prop = supportProps[prop]) === null || _supportProps$prop === void 0 ? void 0 : _supportProps$prop.label,
        value,
        onChange: props[support.setterAttributeName]
      });

      if (supportProps.__contrastChecker) {
        contrastCheckerProps[support.style === 'color' ? 'textColor' : 'backgroundColor'] = value;
      }
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["PanelColorSettings"], {
      title: panelTitle,
      colorSettings: colorSettings
    }, supportProps.__contrastChecker && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ContrastChecker"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contrastCheckerProps, {
      isLargeText: false
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props));
  }, 'withMediaManagerColors');
}

/***/ }),

/***/ "./packages/block-editor-complements/build-module/components/with-sizes/index.js":
/*!***************************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/components/with-sizes/index.js ***!
  \***************************************************************************************/
/*! exports provided: getButtonSizeBySlug, withSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonSizeBySlug", function() { return getButtonSizeBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSizes", function() { return withSizes; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);


/**
 * WordPress dependencies
 */






const defaultSizes = [{
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Small', 'media-manager'),
  slug: 'small',
  key: 'key-small',
  size: 1
}, {
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Normal', 'media-manager'),
  slug: 'normal',
  key: 'key-normal',
  size: 1.5
}, {
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Medium', 'media-manager'),
  slug: 'medium',
  key: 'key-medium',
  size: 2
}, {
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Large', 'media-manager'),
  slug: 'large',
  key: 'key-large',
  size: 2.5
}, {
  name: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Giant', 'media-manager'),
  slug: 'giant',
  key: 'key-giant',
  size: 4
}];
function getButtonSizeBySlug(slug) {
  var _defaultSizes$find;

  return ((_defaultSizes$find = defaultSizes.find(option => option.slug === slug)) === null || _defaultSizes$find === void 0 ? void 0 : _defaultSizes$find.size) || 1.5;
}
function withSizes(supportProps) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["createHigherOrderComponent"])(BlockEdit => props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      size
    } = attributes;
    const scale = getButtonSizeBySlug(size);

    function setSize({
      selectedItem
    }) {
      if (!(selectedItem !== null && selectedItem !== void 0 && selectedItem.slug)) {
        return;
      }

      setAttributes({
        size: selectedItem.slug
      });
    } // Panel title.


    const panelTitle = supportProps.__sectionTitle;

    const selectorTitle = supportProps.__selectorTitle || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Sizes', 'media-manager');

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
      title: panelTitle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CustomSelectControl"], {
      label: selectorTitle,
      options: defaultSizes,
      onChange: setSize,
      value: defaultSizes.find(option => option.slug === size)
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      scale: scale
    })));
  }, 'withSizes');
}

/***/ }),

/***/ "./packages/block-editor-complements/build-module/constants.js":
/*!*********************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/constants.js ***!
  \*********************************************************************/
/*! exports provided: mediaProviderBlockAttributeName, mediaConsumerBlockAttributeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaProviderBlockAttributeName", function() { return mediaProviderBlockAttributeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaConsumerBlockAttributeName", function() { return mediaConsumerBlockAttributeName; });
// Attribute name used to populate the provider blocks.
const mediaProviderBlockAttributeName = 'mediaSourceId'; // Attribute name used to poulate the consumer blocks.

const mediaConsumerBlockAttributeName = 'mediaSourceReferenceId';

/***/ }),

/***/ "./packages/block-editor-complements/build-module/hooks/colors/index.js":
/*!******************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/hooks/colors/index.js ***!
  \******************************************************************************/
/*! exports provided: getMediaManagerColorSupport, getMediaManagerCustomClassNameSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaManagerColorSupport", function() { return getMediaManagerColorSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaManagerCustomClassNameSupport", function() { return getMediaManagerCustomClassNameSupport; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ */ "./packages/block-editor-complements/build-module/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


const getMediaManagerColorSupport = settings => Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getBlockSupport"])(settings, 'media-manager/color');
const getMediaManagerCustomClassNameSupport = settings => Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getBlockSupport"])(settings, 'media-manager/customClassName');

function addMediaManagerColorSaveProps(props, settings, attributes) {
  const mediaColor = getMediaManagerColorSupport(settings);

  if (!mediaColor) {
    return props;
  }

  const customClassName = getMediaManagerCustomClassNameSupport(settings);
  const newProps = { ...props,
    style: props.style || {}
  };
  const mediaColorClassNames = [];

  for (const prop in mediaColor) {
    if (/^__/.test(prop)) {
      continue;
    }

    const colorClassName = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["getColorClassName"])(mediaColor[prop].style, attributes[mediaColor[prop].attributeName]);
    mediaColorClassNames.push(colorClassName);
    const attrName = mediaColor[prop].customAttributeName;
    const stylePropName = mediaColor[prop].style === 'background-color' ? 'backgroundColor' : 'color';
    newProps.style[stylePropName] = colorClassName ? undefined : attributes[attrName];
  }

  newProps.className = classnames__WEBPACK_IMPORTED_MODULE_0___default()(props === null || props === void 0 ? void 0 : props.className, ...mediaColorClassNames, customClassName);
  return newProps;
}

function addMediaManagerColorSupport(settings) {
  const mediaColor = getMediaManagerColorSupport(settings);

  if (!mediaColor) {
    return settings;
  } // HOC withColors settings object.


  const supportStylePropsMap = {}; // Block attributes.

  const attributes = {};

  for (const prop in mediaColor) {
    var _mediaColor$prop;

    if (/^__/.test(prop)) {
      continue;
    }

    const attributeName = /\wColor$/.test(prop) ? prop : `${prop}Color`;
    const upperCaseName = attributeName.charAt(0).toUpperCase() + attributeName.slice(1); // Populate mediaColor supports object.

    mediaColor[prop] = { ...mediaColor[prop],
      attributeName,
      customAttributeName: `custom${upperCaseName}`,
      setterAttributeName: `set${upperCaseName}`,
      style: ((_mediaColor$prop = mediaColor[prop]) === null || _mediaColor$prop === void 0 ? void 0 : _mediaColor$prop.style) || 'color',
      className: attributeName
    }; // Build withColors HOC settings.

    supportStylePropsMap[attributeName] = mediaColor[prop].style; // Populate block attributes.

    attributes[attributeName] = {
      type: 'string'
    };
    attributes[mediaColor[prop].customAttributeName] = {
      type: 'string'
    };
  }

  const existingGetEditWrapperProps = settings.getEditWrapperProps;
  return { ...settings,
    attributes: { ...settings.attributes,
      ...attributes
    },
    getEditWrapperProps: attrs => {
      let props = {};

      if (existingGetEditWrapperProps) {
        props = existingGetEditWrapperProps(attrs);
      }

      return addMediaManagerColorSaveProps(props, settings, attrs);
    },
    edit: Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["compose"])([Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["withColors"])(supportStylePropsMap), Object(___WEBPACK_IMPORTED_MODULE_5__["withMediaManagerColors"])(mediaColor)])(settings.edit)
  };
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.registerBlockType', 'media-manager/register-media-player-buttons-blocks', addMediaManagerColorSupport);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.getSaveContent.extraProps', 'media-manager/add-media-player-buttons-save-props', addMediaManagerColorSaveProps);

/***/ }),

/***/ "./packages/block-editor-complements/build-module/hooks/connect/consumer.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/hooks/connect/consumer.js ***!
  \**********************************************************************************/
/*! exports provided: SUPPORT_NAME, withMediaConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_NAME", function() { return SUPPORT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMediaConnect", function() { return withMediaConnect; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./packages/block-editor-complements/build-module/constants.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */

 // Define and export support name.

const SUPPORT_NAME = 'media-manager/connect-consumer';
const withMediaConnect = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["createHigherOrderComponent"])(OriginalBlock => props => {
  const mediaSourceId = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_7__["useMediaSourceId"])(_constants__WEBPACK_IMPORTED_MODULE_8__["mediaConsumerBlockAttributeName"], props);
  const mediaSource = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_7__["useMediaStore"])(mediaSourceId);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockContextProvider"], {
    value: {
      mediaSourceId
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OriginalBlock, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    mediaContext: {
      mediaSourceId
    },
    mediaSource: mediaSource,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(props.className, {
      'is-media-paused': mediaSource.isPaused
    })
  })));
}, 'withMediaConnect');

function addMediaManagerConnectSupport(settings) {
  if (!Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getBlockSupport"])(settings, SUPPORT_NAME)) {
    return settings;
  }

  return { ...settings,
    usesContext: [...settings.usesContext, 'mediaSourceId'],
    edit: withMediaConnect(settings.edit)
  };
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["addFilter"])('blocks.registerBlockType', 'media-manager/register-media-player-connect-blocks', addMediaManagerConnectSupport);

/***/ }),

/***/ "./packages/block-editor-complements/build-module/hooks/connect/index.js":
/*!*******************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/hooks/connect/index.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ "./packages/block-editor-complements/build-module/hooks/connect/provider.js");
/* harmony import */ var _consumer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consumer */ "./packages/block-editor-complements/build-module/hooks/connect/consumer.js");
/**
 * Internal dependencies
 */



/***/ }),

/***/ "./packages/block-editor-complements/build-module/hooks/connect/provider.js":
/*!**********************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/hooks/connect/provider.js ***!
  \**********************************************************************************/
/*! exports provided: SUPPORT_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_NAME", function() { return SUPPORT_NAME; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ */ "./packages/block-editor-complements/build-module/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./packages/block-editor-complements/build-module/constants.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */



const mediaCenterBlockName = 'media-manager/media-center'; // Define and export support name.

const SUPPORT_NAME = 'media-manager/connect-provider'; // In-sync constants.

const MEDIA_CURRENT_TIME_THRESHOLD = 1000;
const MEDIA_CURRENT_STATE_THRESHOLD = 1000;

const MediaEditProviderWrapper = props => {
  const {
    clientId,
    providerProps,
    BlockEdit
  } = props;
  const mediaElementRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const ref = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    attributes,
    setAttributes
  } = props;
  const {
    mediaSourceId: mediaSourceIdAttr
  } = attributes;
  const {
    name: attrName,
    domTypeName
  } = providerProps; // Check media has defined its source.

  const mediaSourceUrl = attributes === null || attributes === void 0 ? void 0 : attributes[attrName]; // Media Source actions.

  const {
    registerMediaSource,
    updateMediaSourceData,
    unregisterMediaSource,
    setMediaSourceCurrentTime
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["store"]);
  const {
    updateBlockAttributes
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["store"]); // Media Source selectors.

  const {
    isPaused
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["useMediaStore"])(mediaSourceIdAttr);
  const {
    currentTime
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["useCurrentTime"])(mediaSourceIdAttr);
  const mediaCenterParentBlock = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(select => {
    var _select$getBlockParen;

    return select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["store"]).getBlock((_select$getBlockParen = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["store"]).getBlockParentsByBlockName(clientId, mediaCenterBlockName)) === null || _select$getBlockParen === void 0 ? void 0 : _select$getBlockParen[0]);
  }, []);
  const mediaCenterParentClientId = mediaCenterParentBlock === null || mediaCenterParentBlock === void 0 ? void 0 : mediaCenterParentBlock.clientId;
  const mediaCenterParentSourceIdAttr = mediaCenterParentBlock === null || mediaCenterParentBlock === void 0 ? void 0 : mediaCenterParentBlock.attributes.mediaSourceId;

  function onMetadataReady(event) {
    var _event$srcElement;

    updateMediaSourceData(mediaSourceIdAttr, {
      duration: event === null || event === void 0 ? void 0 : (_event$srcElement = event.srcElement) === null || _event$srcElement === void 0 ? void 0 : _event$srcElement.duration
    });
  }

  function play() {
    var _mediaElementRef$curr;

    (_mediaElementRef$curr = mediaElementRef.current) === null || _mediaElementRef$curr === void 0 ? void 0 : _mediaElementRef$curr.play().catch(() => {});
  }

  function pause() {
    var _mediaElementRef$curr2;

    (_mediaElementRef$curr2 = mediaElementRef.current) === null || _mediaElementRef$curr2 === void 0 ? void 0 : _mediaElementRef$curr2.pause();
  }

  function onTimeChange(time) {
    setMediaSourceCurrentTime(mediaSourceIdAttr, time);
  }
  /*
  * querySelector is the string used to pick up
  * the DOM Element reference.
  */


  let querySelector;

  function updateElementRef() {
    var _document;

    if (!querySelector) {
      return;
    }

    const mediaElement = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(querySelector);

    if (!mediaElement) {
      return;
    } // Update media element reference (useRef).


    mediaElementRef.current = mediaElement;
    return mediaElement;
  }
  /*
   * - Register/Unregister Media source in the store.
   * - Set `preload` equal to `metadata` to load it.
   */


  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Bail early when no source for the current block.
    if (!mediaSourceUrl) {
      return;
    }
    /*
     * Check if the mediaSourceId attribute is defined.
     * If so, take it as the media reference.
     * Otherwise, creates a new ID using the block clientId.
     */


    let mediaSourceId = mediaSourceIdAttr;

    if (!mediaSourceId) {
      mediaSourceId = `media-source-${clientId}`;
      setAttributes({
        mediaSourceId
      });
    } // Do not register the media when no element is found.


    querySelector = `[data-media-source-provider-id="${mediaSourceId}"] ${domTypeName}`;
    const mediaElement = updateElementRef();

    if (!mediaElement) {
      return;
    }
    /*
     * Pre load mediaElement metadata.
     * It allows preloading useful metadata
     * of the media source, for instance,
     * the media duration.
     */


    mediaElement.preload = 'metadata';
    mediaElement.autoplay = false; // Register media source in the store.

    registerMediaSource(mediaSourceId, {
      mediaBlockClientId: clientId,
      source: mediaSourceUrl,
      elementType: domTypeName,
      querySelector
    }); // Subscribe to media events.

    mediaElement.addEventListener('loadedmetadata', onMetadataReady); // Clean.

    return function () {
      // Cleaning Media Source source ID
      // if the block is linked to it.
      if (mediaCenterParentSourceIdAttr === mediaSourceIdAttr) {
        updateBlockAttributes(mediaCenterParentClientId, {
          mediaSourceId: _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["MEDIA_NOT_DEFINED"]
        });
      } // Remove listeners.


      mediaElement.removeEventListener('loadedmetadata', onMetadataReady); // Unregister media from store.

      unregisterMediaSource(mediaSourceId);
    };
  }, [mediaSourceIdAttr, setAttributes, mediaSourceUrl, mediaCenterParentClientId, mediaCenterParentSourceIdAttr]);
  /* Child provider.
   * Check whether the provider is child of a block consumer.
   * If so, it means that the provider is a media center block.
   * @TODO: Move/improve this logic. Currently, it's harcoded to the MediaCenter block.
   */

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Block doesn't have defined its source. Bail early.
    if (!mediaSourceUrl || !mediaSourceIdAttr) {
      return;
    } // Block is not child of MediaCenter. Bail Early.


    if (!mediaCenterParentClientId) {
      return;
    } // Media Center source ID is defined properly. Bail early.


    if (mediaCenterParentSourceIdAttr && mediaCenterParentSourceIdAttr !== _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["MEDIA_NOT_DEFINED"]) {
      return;
    } // Link MediaCenter block on the fly with the media block.


    updateBlockAttributes(mediaCenterParentClientId, {
      [_constants__WEBPACK_IMPORTED_MODULE_11__["mediaConsumerBlockAttributeName"]]: mediaSourceIdAttr
    });
  }, [mediaSourceUrl, mediaSourceIdAttr, mediaCenterParentClientId, mediaCenterParentSourceIdAttr]); // Play/Pause media depending on playing status (via store).

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!(mediaElementRef !== null && mediaElementRef !== void 0 && mediaElementRef.current)) {
      return;
    }

    const {
      current: mediaElement
    } = mediaElementRef;
    /*
     * Get the current status of the mediaElement element,
     * and the required action to toggle it.
     */

    const action = mediaElement.paused ? play : pause;
    const debouncedAction = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(action, 100);

    if (isPaused !== mediaElement.paused) {
      debouncedAction();
    }

    return () => {
      debouncedAction.cancel();
    };
  }, [isPaused, mediaElementRef]); // Handling media state.

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const {
      current: mediaElement
    } = mediaElementRef;

    if (!mediaElement) {
      return;
    }

    const throttledTimeChange = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"])(time => onTimeChange(time), MEDIA_CURRENT_TIME_THRESHOLD, {
      leading: true,
      trailing: false
    });

    const onTimeUpdate = e => throttledTimeChange(e.target.currentTime);

    mediaElement === null || mediaElement === void 0 ? void 0 : mediaElement.addEventListener('timeupdate', onTimeUpdate);
    return () => {
      throttledTimeChange.cancel();
      mediaElement === null || mediaElement === void 0 ? void 0 : mediaElement.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [mediaElementRef, onTimeChange]); // Handling current time.

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const {
      current: mediaElement
    } = mediaElementRef;

    if (typeof currentTime !== 'number' || !mediaElement) {
      return;
    }
    /*
     * Update the current time when difference between
     * the media element and the state is bigger than
     * the threshold  MEDIA_CURRENT_TIME_THRESHOLD.
     */


    if (Math.abs(Math.floor(currentTime - mediaElement.currentTime) * 1000) > MEDIA_CURRENT_STATE_THRESHOLD) {
      mediaElement.currentTime = currentTime;
    }
  }, [mediaElementRef, currentTime]);
  /*
   * Observe the block element in the DOM subtree,
   * and update the media element reference accordingly.
   */

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(() => {
    if (!(ref !== null && ref !== void 0 && ref.current)) {
      return;
    }

    const observer = new window.MutationObserver(updateElementRef);
    observer.observe(ref.current, {
      childList: true,
      attributes: false,
      subtree: true
    });
    return () => {
      observer.disconnect();
    };
  }, [ref]); // Bail early when no clientId.

  if (!clientId) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props);
  }

  if (!mediaSourceIdAttr) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(___WEBPACK_IMPORTED_MODULE_10__["MediaConnectProviderPanelBody"], null))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    ref: ref,
    "data-media-source-provider-id": mediaSourceIdAttr
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockEdit, props)));
};

const MediaEditConnectProvider = providerProps => Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["createHigherOrderComponent"])(BlockEdit => props => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaEditProviderWrapper, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
  providerProps: providerProps,
  BlockEdit: BlockEdit
})), 'MediaEditConnectProvider');

function addMediaManagerConnectSupport(settings) {
  const blockProviderProps = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["getBlockSupport"])(settings, SUPPORT_NAME);

  if (!blockProviderProps) {
    return settings;
  } // `mediaSourceId` attribute stores the reference to the media source.


  const attributes = { ...settings.attributes,
    [_constants__WEBPACK_IMPORTED_MODULE_11__["mediaProviderBlockAttributeName"]]: {
      type: 'string'
    }
  };
  return { ...settings,
    attributes,
    edit: MediaEditConnectProvider(blockProviderProps)(settings.edit)
  };
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__["addFilter"])('blocks.registerBlockType', 'media-manager/register-media-player-connect-blocks', addMediaManagerConnectSupport, 20);

/***/ }),

/***/ "./packages/block-editor-complements/build-module/hooks/index.js":
/*!***********************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/hooks/index.js ***!
  \***********************************************************************/
/*! exports provided: SUPPORT_MEDIA_SELECTOR, SUPPORT_SIZES, SUPPORT_CONNECT_PROVIDER, SUPPORT_CONNECT_CONSUMER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./packages/block-editor-complements/build-module/hooks/colors/index.js");
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect */ "./packages/block-editor-complements/build-module/hooks/connect/index.js");
/* harmony import */ var _media_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-selector */ "./packages/block-editor-complements/build-module/hooks/media-selector/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_MEDIA_SELECTOR", function() { return _media_selector__WEBPACK_IMPORTED_MODULE_2__["SUPPORT_NAME"]; });

/* harmony import */ var _sizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sizes */ "./packages/block-editor-complements/build-module/hooks/sizes/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_SIZES", function() { return _sizes__WEBPACK_IMPORTED_MODULE_3__["SUPPORT_NAME"]; });

/* harmony import */ var _connect_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connect/provider */ "./packages/block-editor-complements/build-module/hooks/connect/provider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_CONNECT_PROVIDER", function() { return _connect_provider__WEBPACK_IMPORTED_MODULE_4__["SUPPORT_NAME"]; });

/* harmony import */ var _connect_consumer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connect/consumer */ "./packages/block-editor-complements/build-module/hooks/connect/consumer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_CONNECT_CONSUMER", function() { return _connect_consumer__WEBPACK_IMPORTED_MODULE_5__["SUPPORT_NAME"]; });

/**
 * Internal dependencies
 */


 // Export support names.






/***/ }),

/***/ "./packages/block-editor-complements/build-module/hooks/media-selector/index.js":
/*!**************************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/hooks/media-selector/index.js ***!
  \**************************************************************************************/
/*! exports provided: SUPPORT_NAME, withMediaSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_NAME", function() { return SUPPORT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMediaSelector", function() { return withMediaSelector; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ */ "./packages/block-editor-complements/build-module/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./packages/block-editor-complements/build-module/constants.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */



const SUPPORT_NAME = 'media-manager/media-selector';

const useInsertMediaBlock = () => {
  const {
    insertBlock
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["store"]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async (blockType = 'core/video', clientId, index = 0) => {
    const mediaBlock = await Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["createBlock"])(blockType);
    await insertBlock(mediaBlock, index, clientId, false);
  }, [insertBlock]);
};

const withMediaSelector = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["createHigherOrderComponent"])(OriginalBlock => {
  return function (props) {
    const {
      attributes,
      setAttributes,
      clientId,
      name,
      context
    } = props;
    const {
      mediaSourceReferenceId
    } = attributes;
    const [isReplacing, setIsReplacing] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
    const mediaSourceId = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["useMediaSourceId"])(_constants__WEBPACK_IMPORTED_MODULE_11__["mediaConsumerBlockAttributeName"], props);
    const {
      mediaSources
    } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(select => {
      return {
        mediaSources: select(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["store"]).getMediaSources()
      };
    }, []);
    const {
      mediaSource
    } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(select => {
      return {
        mediaSource: select(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["store"]).getMediaSourceById(mediaSourceId)
      };
    }, [mediaSourceId]);

    const setSourceReferenceId = sourceId => setAttributes({
      mediaSourceReferenceId: sourceId
    });

    const insertMediaBlock = useInsertMediaBlock();

    function insertEmptyMediaBlock(type) {
      setSourceReferenceId(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["MEDIA_NOT_DEFINED"]);
      setIsReplacing(false);
      insertMediaBlock(type, clientId);
    }

    const {
      title: label,
      description: instructions,
      icon
    } = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["getBlockType"])(name) || {};

    if (isReplacing || !mediaSourceId) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "media-selector-placeholder"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Placeholder"], {
        icon: icon.src,
        label: label,
        instructions: instructions
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(___WEBPACK_IMPORTED_MODULE_10__["MediaSelector"], {
        media: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["values"])(mediaSources),
        onMediaSelect: id => {
          setSourceReferenceId(id);
          setIsReplacing(false);
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        isSecondary: true,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Continue adding a video block', 'media-manager'),
        onClick: () => insertEmptyMediaBlock('core/video')
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Start with Video block', 'media-manager')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        isSecondary: true,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Continue adding a audio block', 'media-manager'),
        onClick: () => insertEmptyMediaBlock('core/audio')
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Start with an Audio block', 'media-manager')), isReplacing && mediaSourceId !== _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["MEDIA_NOT_DEFINED"] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        isTertiary: true,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Cancel replacing media source', 'media-manager'),
        onClick: () => setIsReplacing(false)
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Cancel replacement', 'media-manager')), (!isReplacing || mediaSourceId === _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["MEDIA_NOT_DEFINED"]) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        isTertiary: true,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Continue without media source', 'media-manager'),
        onClick: () => {
          setIsReplacing(false);
          setSourceReferenceId(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["MEDIA_NOT_DEFINED"]);
        }
      }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Skip', 'media-manager'))));
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, !(context !== null && context !== void 0 && context.mediaSourceId) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      onClick: () => setIsReplacing(true)
    }, mediaSourceId !== _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["MEDIA_NOT_DEFINED"] ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Replace', 'media-manager') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__["__"])('Link', 'media-manager')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(___WEBPACK_IMPORTED_MODULE_10__["MediaItemPanelBody"], {
      source: mediaSource,
      mediaSourceId: mediaSourceId,
      isMediaInherited: !mediaSourceReferenceId,
      onReplace: setIsReplacing,
      onUnlink: () => setSourceReferenceId(null)
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(OriginalBlock, props));
  };
}, 'withMediaSelector');

function addMediaSelectorSupport(settings) {
  if (!Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__["getBlockSupport"])(settings, SUPPORT_NAME)) {
    return settings;
  }

  return { ...settings,
    attributes: { ...settings.attributes,
      [_constants__WEBPACK_IMPORTED_MODULE_11__["mediaConsumerBlockAttributeName"]]: {
        type: 'string'
      }
    },
    edit: withMediaSelector(settings.edit)
  };
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_2__["addFilter"])('blocks.registerBlockType', 'media-manager/register-media-selector-blocks', addMediaSelectorSupport);

/***/ }),

/***/ "./packages/block-editor-complements/build-module/hooks/sizes/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/hooks/sizes/index.js ***!
  \*****************************************************************************/
/*! exports provided: SUPPORT_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_NAME", function() { return SUPPORT_NAME; });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ */ "./packages/block-editor-complements/build-module/index.js");
/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */

 // Define and export support name.

const SUPPORT_NAME = 'media-manager/sizes';

function addMediaManagerSizeSaveProps(props, settings, attributes) {
  const sizes = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["getBlockSupport"])(settings, SUPPORT_NAME);

  if (!sizes) {
    return props;
  }

  const {
    size
  } = attributes;
  return { ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(props === null || props === void 0 ? void 0 : props.className, `is-${size}-size`)
  };
}

function addMediaManagerSizeSupport(settings) {
  const sizes = Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["getBlockSupport"])(settings, SUPPORT_NAME);

  if (!sizes) {
    return settings;
  }

  const existingGetEditWrapperProps = settings.getEditWrapperProps;
  return { ...settings,
    attributes: { ...settings.attributes,
      size: {
        type: 'string',
        default: 'normal'
      }
    },
    getEditWrapperProps: attributes => {
      let props = {};

      if (existingGetEditWrapperProps) {
        props = existingGetEditWrapperProps(attributes);
      }

      return addMediaManagerSizeSaveProps(props, settings, attributes);
    },
    edit: Object(___WEBPACK_IMPORTED_MODULE_3__["withSizes"])(sizes)(settings.edit)
  };
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.registerBlockType', 'media-manager/register-media-player-buttons-blocks', addMediaManagerSizeSupport, 0 // <- it change the order in the InspectorControls (sidebar)
);
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["addFilter"])('blocks.getSaveContent.extraProps', 'media-manager/add-media-player-buttons-save-props', addMediaManagerSizeSaveProps);

/***/ }),

/***/ "./packages/block-editor-complements/build-module/index.js":
/*!*****************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/index.js ***!
  \*****************************************************************/
/*! exports provided: SUPPORT_MEDIA_SELECTOR, SUPPORT_SIZES, SUPPORT_CONNECT_PROVIDER, SUPPORT_CONNECT_CONSUMER, MediaItem, MediaItemPanelBody, MediaConnectProviderPanelBody, MediaSelector, withMediaManagerColors, getButtonSizeBySlug, withSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hooks */ "./packages/block-editor-complements/build-module/hooks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_MEDIA_SELECTOR", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["SUPPORT_MEDIA_SELECTOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_SIZES", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["SUPPORT_SIZES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_CONNECT_PROVIDER", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["SUPPORT_CONNECT_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_CONNECT_CONSUMER", function() { return _hooks__WEBPACK_IMPORTED_MODULE_0__["SUPPORT_CONNECT_CONSUMER"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./packages/block-editor-complements/build-module/components/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaItem", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["MediaItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaItemPanelBody", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["MediaItemPanelBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaConnectProviderPanelBody", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["MediaConnectProviderPanelBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaSelector", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["MediaSelector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withMediaManagerColors", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["withMediaManagerColors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getButtonSizeBySlug", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["getButtonSizeBySlug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withSizes", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["withSizes"]; });




/***/ }),

/***/ "./packages/components/build-module/icons/index.js":
/*!*********************************************************!*\
  !*** ./packages/components/build-module/icons/index.js ***!
  \*********************************************************/
/*! exports provided: MovieIcon, MediaCenterIcon, MediaLinkIcon, withScale, PlayerPlayIcon, PlayerPauseIcon, ControlForwardFiveIcon, ControlBackFiveIcon, PlayerPlayPauseIcon, PlayerIcon, TimePositionIcon, MediaConnectIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieIcon", function() { return MovieIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaCenterIcon", function() { return MediaCenterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaLinkIcon", function() { return MediaLinkIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withScale", function() { return withScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPlayIcon", function() { return PlayerPlayIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPauseIcon", function() { return PlayerPauseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlForwardFiveIcon", function() { return ControlForwardFiveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlBackFiveIcon", function() { return ControlBackFiveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPlayPauseIcon", function() { return PlayerPlayPauseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerIcon", function() { return PlayerIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePositionIcon", function() { return TimePositionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaConnectIcon", function() { return MediaConnectIcon; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */



const MovieIcon = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
}));
const MediaCenterIcon = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M7,11v2h10v-2c0-1.86,1.28-3.41,3-3.86V6c0-1.65-1.35-3-3-3H7C5.35,3,4,4.35,4,6v1.14C5.72,7.59,7,9.14,7,11z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
  d: "M21,9c-1.1,0-2,0.9-2,2v4H5v-4c0-1.1-0.9-2-2-2s-2,0.9-2,2v5c0,1.65,1.35,3,3,3v1c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-1 h12v1c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-1c1.65,0,3-1.35,3-3v-5C23,9.9,22.1,9,21,9z"
}));
const MediaLinkIcon = () => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M8 11h8v2H8zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3z"
}));
const withScale = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(Icon => props => {
  if (!(props !== null && props !== void 0 && props.scale) || props.scale === 1) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Icon, props);
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Icon, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    width: 24 * props.scale,
    height: 24 * props.scale
  }));
}, 'withIconScale');
const PlayerPlayIcon = withScale(() => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  className: "player-play-icon",
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
})));
const PlayerPauseIcon = withScale(() => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  className: "player-pause-icon",
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M11,16H9V8h2V16z M15,16h-2V8h2V16z"
})));
const ControlForwardFiveIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M12.7049 2V6C8.30658 6 4.74414 9.58 4.74414 14C4.74414 18.42 8.30658 22 12.7049 22C17.1032 22 20.6656 18.42 20.6656 14H18.6755C18.6755 17.31 15.9987 20 12.7049 20C9.41113 20 6.73433 17.31 6.73433 14C6.73433 10.69 9.41113 8 12.7049 8V12L17.6804 7L12.7049 2ZM11.6501 12.73L11.4013 14.9L12.068 15.06C12.0753 15.0526 12.0827 15.0447 12.0901 15.0366C12.1131 15.0116 12.1375 14.9851 12.1675 14.97C12.1874 14.96 12.2073 14.9475 12.2272 14.935C12.2471 14.9225 12.2671 14.91 12.287 14.9C12.3268 14.88 12.3865 14.86 12.4362 14.85C12.486 14.84 12.5556 14.83 12.6352 14.83C12.7447 14.83 12.8542 14.85 12.9338 14.88C13.0134 14.91 13.083 14.96 13.1427 15.03C13.2024 15.1 13.2422 15.17 13.2721 15.27C13.302 15.37 13.3119 15.47 13.3119 15.58V15.58C13.3119 15.69 13.3119 15.79 13.2821 15.89C13.2522 15.99 13.2124 16.07 13.1726 16.14C13.1328 16.21 13.0631 16.27 12.9935 16.31C12.9238 16.35 12.8343 16.37 12.7248 16.37C12.5556 16.37 12.4163 16.31 12.3069 16.22C12.1974 16.13 12.1377 15.99 12.1178 15.81H11.2819C11.2819 16.01 11.3317 16.19 11.4113 16.34C11.4909 16.49 11.5904 16.63 11.7297 16.73C11.869 16.83 12.0183 16.92 12.1874 16.97C12.3566 17.02 12.5357 17.05 12.7148 17.05C12.9636 17.05 13.1726 17 13.3517 16.93C13.5308 16.86 13.6801 16.75 13.7995 16.62C13.9189 16.49 14.0085 16.34 14.0682 16.17C14.1279 16 14.1577 15.82 14.1577 15.63C14.1577 15.41 14.1179 15.21 14.0682 15.03C14.0184 14.85 13.9289 14.7 13.8194 14.58C13.7099 14.46 13.5706 14.37 13.4114 14.3C13.2522 14.23 13.0731 14.2 12.8641 14.2C12.7945 14.2 12.7248 14.21 12.6651 14.22C12.6352 14.225 12.6054 14.2325 12.5755 14.24C12.5457 14.2475 12.5158 14.255 12.486 14.26C12.4263 14.27 12.3765 14.29 12.3367 14.31C12.3201 14.3183 12.3035 14.325 12.2876 14.3313C12.2654 14.3401 12.2446 14.3483 12.2272 14.36L12.3367 13.44H14.0284V12.73H11.6501Z"
}));
const ControlBackFiveIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M11.9412 2V6C16.3395 6 19.902 9.58 19.902 14C19.902 18.42 16.3395 22 11.9412 22C7.54291 22 3.98047 18.42 3.98047 14H5.97066C5.97066 17.31 8.64746 20 11.9412 20C15.235 20 17.9118 17.31 17.9118 14C17.9118 10.69 15.235 8 11.9412 8V12L6.96575 7L11.9412 2ZM10.8864 12.73L10.6376 14.9L11.3044 15.06C11.3117 15.0526 11.319 15.0447 11.3264 15.0366C11.3494 15.0116 11.3738 14.9851 11.4039 14.97C11.4238 14.96 11.4437 14.9475 11.4636 14.935C11.4835 14.9225 11.5034 14.91 11.5233 14.9C11.5631 14.88 11.6228 14.86 11.6725 14.85C11.7223 14.84 11.792 14.83 11.8716 14.83C11.981 14.83 12.0905 14.85 12.1701 14.88C12.2497 14.91 12.3194 14.96 12.3791 15.03C12.4388 15.1 12.4786 15.17 12.5084 15.27C12.5383 15.37 12.5482 15.47 12.5482 15.58V15.58C12.5482 15.69 12.5482 15.79 12.5184 15.89C12.4885 15.99 12.4487 16.07 12.4089 16.14C12.3691 16.21 12.2995 16.27 12.2298 16.31C12.1601 16.35 12.0706 16.37 11.9611 16.37C11.792 16.37 11.6526 16.31 11.5432 16.22C11.4337 16.13 11.374 15.99 11.3541 15.81H10.5182C10.5182 16.01 10.568 16.19 10.6476 16.34C10.7272 16.49 10.8267 16.63 10.966 16.73C11.1053 16.83 11.2546 16.92 11.4238 16.97C11.5929 17.02 11.7721 17.05 11.9512 17.05C12.1999 17.05 12.4089 17 12.588 16.93C12.7672 16.86 12.9164 16.75 13.0358 16.62C13.1552 16.49 13.2448 16.34 13.3045 16.17C13.3642 16 13.3941 15.82 13.3941 15.63C13.3941 15.41 13.3543 15.21 13.3045 15.03C13.2547 14.85 13.1652 14.7 13.0557 14.58C12.9463 14.46 12.807 14.37 12.6477 14.3C12.4885 14.23 12.3094 14.2 12.1004 14.2C12.0308 14.2 11.9611 14.21 11.9014 14.22C11.8716 14.225 11.8417 14.2325 11.8119 14.24C11.782 14.2475 11.7522 14.255 11.7223 14.26C11.6626 14.27 11.6128 14.29 11.573 14.31C11.5564 14.3183 11.5398 14.325 11.5239 14.3313C11.5017 14.3401 11.481 14.3483 11.4636 14.36L11.573 13.44H13.2647V12.73H10.8864Z"
}));
const PlayerPlayPauseIcon = withScale(() => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  className: "player-play-pause-icon",
  xmlns: "https://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M11,16H9V8h2V16z M12,16V8l5,4L12,16z"
})));
const PlayerIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"
}));
const TimePositionIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M18,17H6V7h12V17z"
}));
const MediaConnectIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M0 0h24v24H0z",
  fill: "none"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M22 12l-4 4-1.41-1.41L18.17 13h-5.23c-.34 3.1-2.26 5.72-4.94 7.05C7.96 21.69 6.64 23 5 23c-1.66 0-3-1.34-3-3s1.34-3 3-3c.95 0 1.78.45 2.33 1.14 1.9-1.03 3.26-2.91 3.58-5.14h-3.1C7.4 14.16 6.3 15 5 15c-1.66 0-3-1.34-3-3s1.34-3 3-3c1.3 0 2.4.84 2.82 2h3.1c-.32-2.23-1.69-4.1-3.59-5.14C6.78 6.55 5.95 7 5 7 3.34 7 2 5.66 2 4s1.34-3 3-3c1.64 0 2.96 1.31 2.99 2.95 2.68 1.33 4.6 3.95 4.94 7.05h5.23l-1.58-1.59L18 8l4 4z"
}));

/***/ }),

/***/ "./packages/components/build-module/index.js":
/*!***************************************************!*\
  !*** ./packages/components/build-module/index.js ***!
  \***************************************************/
/*! exports provided: MovieIcon, MediaCenterIcon, MediaLinkIcon, withScale, PlayerPlayIcon, PlayerPauseIcon, ControlForwardFiveIcon, ControlBackFiveIcon, PlayerPlayPauseIcon, PlayerIcon, TimePositionIcon, MediaConnectIcon, JumpBackButton, PlayPauseButton, PlayButton, PauseButton, SkipForwardButton, MediaPlayerControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "./packages/components/build-module/icons/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovieIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["MovieIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaCenterIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["MediaCenterIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaLinkIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["MediaLinkIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withScale", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["withScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerPlayIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["PlayerPlayIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerPauseIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["PlayerPauseIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlForwardFiveIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["ControlForwardFiveIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlBackFiveIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["ControlBackFiveIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerPlayPauseIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["PlayerPlayPauseIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["PlayerIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePositionIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["TimePositionIcon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaConnectIcon", function() { return _icons__WEBPACK_IMPORTED_MODULE_0__["MediaConnectIcon"]; });

/* harmony import */ var _media_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-player */ "./packages/components/build-module/media-player/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JumpBackButton", function() { return _media_player__WEBPACK_IMPORTED_MODULE_1__["JumpBackButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayPauseButton", function() { return _media_player__WEBPACK_IMPORTED_MODULE_1__["PlayPauseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayButton", function() { return _media_player__WEBPACK_IMPORTED_MODULE_1__["PlayButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PauseButton", function() { return _media_player__WEBPACK_IMPORTED_MODULE_1__["PauseButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SkipForwardButton", function() { return _media_player__WEBPACK_IMPORTED_MODULE_1__["SkipForwardButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaPlayerControl", function() { return _media_player__WEBPACK_IMPORTED_MODULE_1__["MediaPlayerControl"]; });

/**
 * Internal dependencies
 */



/***/ }),

/***/ "./packages/components/build-module/media-player/index.js":
/*!****************************************************************!*\
  !*** ./packages/components/build-module/media-player/index.js ***!
  \****************************************************************/
/*! exports provided: JumpBackButton, PlayPauseButton, PlayButton, PauseButton, SkipForwardButton, MediaPlayerControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumpBackButton", function() { return JumpBackButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayPauseButton", function() { return PlayPauseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayButton", function() { return PlayButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauseButton", function() { return PauseButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkipForwardButton", function() { return SkipForwardButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPlayerControl", function() { return MediaPlayerControl; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var _media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @media-manager/time-utils */ "./packages/time-utils/build-module/index.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons */ "./packages/components/build-module/icons/index.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


function JumpBackButton({
  onClick,
  ...other
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: _icons__WEBPACK_IMPORTED_MODULE_7__["ControlBackFiveIcon"],
    onClick: onClick,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Jump back', 'media-manager')
  }, other));
}
function PlayPauseButton({
  onClick,
  isPaused = false,
  scale,
  ...other
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: isPaused ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_icons__WEBPACK_IMPORTED_MODULE_7__["PlayerPlayPauseIcon"], {
      scale: scale
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_icons__WEBPACK_IMPORTED_MODULE_7__["PlayerPauseIcon"], {
      scale: scale
    }),
    disabled: false,
    onClick: onClick,
    label: isPaused ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Play', 'media-manager') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pause', 'media-manager')
  }, other));
}
function PlayButton({
  onClick,
  scale,
  ...other
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_icons__WEBPACK_IMPORTED_MODULE_7__["PlayerPlayIcon"], {
      scale: scale
    }),
    onClick: onClick,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Play', 'media-manager')
  }, other));
}
function PauseButton({
  onClick,
  scale,
  ...other
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_icons__WEBPACK_IMPORTED_MODULE_7__["PlayerPauseIcon"], {
      scale: scale
    }),
    onClick: onClick,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pause', 'media-manager')
  }, other));
}
function SkipForwardButton({
  onClick,
  ...other
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    icon: _icons__WEBPACK_IMPORTED_MODULE_7__["ControlForwardFiveIcon"],
    onClick: onClick,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Skip forward', 'media-manager')
  }, other));
}
function MediaPlayerControl({
  mediaSourceId,
  time,
  onChange = () => {}
}) {
  const [rangeTime, setRangeTime] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(time);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => setRangeTime(time), [time]);
  const {
    isPaused,
    isReady,
    duration,
    toggle,
    setCurrentTime
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_5__["useMediaStore"])(mediaSourceId);
  const debouncedOnChange = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function (debTime, debOnChange) {
    if (!isPaused) {
      setCurrentTime(debTime);
    }

    debOnChange(debTime);
  }, 250), [isPaused]);
  /**
   * Toggle media playing status.
   * Set current position when not playing.
   */

  function toggleInTime() {
    if (isPaused) {
      setCurrentTime(time);
    }

    toggle(mediaSourceId);
  }

  function onChangeTimeHandler(newTimeValue) {
    setRangeTime(newTimeValue);
    debouncedOnChange(newTimeValue, onChange);
  }

  const currentTimeFormatted = Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__["convertSecondsToTimeCode"])(rangeTime);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "media-player-control"
  }, !isReady && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"], {
    spokenMessage: null,
    status: "warning",
    isDismissible: false
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No media linked to this block', 'context')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(JumpBackButton, {
    disabled: !isReady,
    onClick: () => onChangeTimeHandler(Math.max(0, time - 5))
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PlayPauseButton, {
    isPaused: isPaused,
    disabled: !isReady,
    onClick: () => toggleInTime()
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SkipForwardButton, {
    disabled: !isReady,
    onClick: () => onChangeTimeHandler(Math.min(duration, time + 5))
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "media-player-control__display"
  }, currentTimeFormatted), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    disabled: !isReady,
    value: rangeTime,
    min: 0,
    max: duration,
    onChange: onChangeTimeHandler,
    withInputField: false,
    showTooltip: false
  }));
}

/***/ }),

/***/ "./packages/format-library/build-module/index.js":
/*!*******************************************************!*\
  !*** ./packages/format-library/build-module/index.js ***!
  \*******************************************************/
/*! exports provided: mediaLink, MediaLinkViewFormatType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_link_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-link/view */ "./packages/format-library/build-module/media-link/view.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaLinkViewFormatType", function() { return _media_link_view__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _media_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-link */ "./packages/format-library/build-module/media-link/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "mediaLink", function() { return _media_link__WEBPACK_IMPORTED_MODULE_1__; });
/**
 * Internal dependencies
 */





/***/ }),

/***/ "./packages/format-library/build-module/media-link/index.js":
/*!******************************************************************!*\
  !*** ./packages/format-library/build-module/media-link/index.js ***!
  \******************************************************************/
/*! exports provided: name, attributes, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributes", function() { return attributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var _media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @media-manager/time-utils */ "./packages/time-utils/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _src_extending_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../src/extending/utils */ "./src/extending/utils.js");
/* harmony import */ var _media_link_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media-link-popover */ "./packages/format-library/build-module/media-link/media-link-popover.js");
/* harmony import */ var _input_rule_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input-rule-handler */ "./packages/format-library/build-module/media-link/input-rule-handler.js");

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */

 // @Todo: extend this!



const name = 'media-manager/media-link-format-type';

function MediaLinkFormatButton({
  value,
  onChange,
  isActive,
  contentRef
}) {
  const mediatCenterBlockClientId = Object(_src_extending_utils__WEBPACK_IMPORTED_MODULE_8__["shouldExtendBlockWithMedia"])();
  const mediaCenterBlock = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["store"]).getBlock(mediatCenterBlockClientId[0]), []);
  const {
    mediaSourceReferenceId
  } = (mediaCenterBlock === null || mediaCenterBlock === void 0 ? void 0 : mediaCenterBlock.attributes) || {};
  const {
    domRef
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(select => ({
    domRef: select(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_5__["store"]).getMediaSourceDomReference(mediaSourceReferenceId)
  }), []);
  const [isMultipleEdition, setIsMultipleEdition] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  if (!(mediatCenterBlockClientId !== null && mediatCenterBlockClientId !== void 0 && mediatCenterBlockClientId.length)) {
    return null;
  } // Media link format time position.


  const {
    attributes
  } = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["getActiveFormat"])(value, name) || {};
  const {
    ownerDocument
  } = contentRef.current;
  const {
    defaultView
  } = ownerDocument; // Set the initial time position for the format:
  // (1) From extended `timestamp` block attr.
  // (2) Selected text when it has time format (HH:MM:SS).
  // (3) Current position of the media source.

  let mediaLinkFormatTimestamp = 0;
  let isSingleOnTheFlyStyle = false; // <- detects a single timeformat selected hh:mm:ss
  // Check whether the selected text has a timestamp shape.

  const selection = defaultView.getSelection();
  const selectedText = selection.toString();

  if (attributes !== null && attributes !== void 0 && attributes.timestamp) {
    var _attributes$timestamp;

    mediaLinkFormatTimestamp = Number(attributes === null || attributes === void 0 ? void 0 : (_attributes$timestamp = attributes.timestamp) === null || _attributes$timestamp === void 0 ? void 0 : _attributes$timestamp.replace(/#/, ''));
  } else if (!Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["isCollapsed"])(value)) {
    if (Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__["isTimeformat"])(selectedText)) {
      isSingleOnTheFlyStyle = true;
      mediaLinkFormatTimestamp = Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__["convertTimeCodeToSeconds"])(selectedText);
    }
  } else if (domRef !== null && domRef !== void 0 && domRef.currentTime) {
    mediaLinkFormatTimestamp = domRef.currentTime;
  }

  const multipleFormats = Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__["hasMultipleTimeformats"])(selectedText);
  /**
   * Helper function to apply the style format.
   *
   * @param {string} time timestamp to apply to the format
   * @return {Object} style forat object
   */

  function getStyleObject(time) {
    return {
      type: name,
      attributes: {
        timestamp: `#${time}`,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(
        /* translators: Playback at the specific position. %s: Time position */
        Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Playback at %1$s', 'media-manager'), Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__["convertSecondsToTimeCode"])(time))
      }
    };
  }
  /**
   * Apply style format event handler.
   *
   * @param {string} newTimestamp new timestamp value to apply (optional)
   */


  function applyFormatStyleHandler(newTimestamp) {
    if (newTimestamp) {
      return onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["applyFormat"])(value, getStyleObject(newTimestamp)));
    }

    onChange(Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["toggleFormat"])(value, getStyleObject(mediaLinkFormatTimestamp)));
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichTextToolbarButton"], {
    shortcutType: "primary",
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_7__["MediaLinkIcon"], null),
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Link to media', 'media-manager'),
    onClick: () => {
      /*
       * Set edition mode when:
       * - selected text has multi timeformats
       * - it is not a single selection
       * - there is not format active
       */
      if (multipleFormats !== null && multipleFormats !== void 0 && multipleFormats.length && !isSingleOnTheFlyStyle && !isActive) {
        return setIsMultipleEdition(true);
      }

      applyFormatStyleHandler(false);
    },
    isActive: isActive
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_link_popover__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: value,
    hasMultipleTimeformats: multipleFormats,
    isMultipleEdition: isMultipleEdition,
    contentRef: contentRef,
    currentTime: mediaLinkFormatTimestamp,
    isActive: isActive,
    mediaSourceId: mediaSourceReferenceId,
    onTimeChange: applyFormatStyleHandler,
    onIgnoreMultipleFormat: () => {
      setIsMultipleEdition(false);
      applyFormatStyleHandler();
    },
    onApplyMultipleFormat: () => {
      let match;

      while ((match = Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__["getTimeformatMatch"])(selectedText)) !== null) {
        const timestamp = match[0];
        const {
          index: startIndex
        } = match;
        const endIndex = startIndex + timestamp.length;
        value = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["applyFormat"])(value, {
          type: name,
          attributes: {
            timestamp: `#${Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__["convertTimeCodeToSeconds"])(timestamp)}`,
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(
            /* translators: Playback at the specific position. %s: Time position */
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Playback at %s', 'media-manager'), timestamp)
          }
        }, startIndex, endIndex);
      }

      onChange(value);
      setIsMultipleEdition(false);
    }
  }));
}

const attributes = {
  timestamp: 'href',
  label: 'title'
};
const settings = {
  name,
  title: 'Media link',
  tagName: 'a',
  className: 'media-link-format-type',
  attributes,
  edit: MediaLinkFormatButton,
  __unstableInputRule: _input_rule_handler__WEBPACK_IMPORTED_MODULE_10__["default"]
};

/***/ }),

/***/ "./packages/format-library/build-module/media-link/input-rule-handler.js":
/*!*******************************************************************************!*\
  !*** ./packages/format-library/build-module/media-link/input-rule-handler.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _media_manager_time_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @media-manager/time-utils */ "./packages/time-utils/build-module/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./packages/format-library/build-module/media-link/index.js");
/**
 * External dependencies
 */





/**
 * Internal dependencies
 */

 // @TODO: make it extensible.

const mediaCenterBlockName = 'media-manager/media-center';
/* harmony default export */ __webpack_exports__["default"] = (function (value) {
  /*
   * Apply rule handler only when current block
   * is child of media center.
   */
  const {
    getSelectedBlockClientId,
    getBlockParentsByBlockName
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__["select"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["store"]);
  const isChildOfMediaCenter = getBlockParentsByBlockName(getSelectedBlockClientId(), mediaCenterBlockName).length;

  if (!isChildOfMediaCenter) {
    return value;
  }

  const SIMPLE_OPEN_TRIGGER_CHAR = '[';
  const SIMPLE_CLOSE_TRIGGER_CHAR = ']';
  const MD_OPEN_TRIGGER_CHAR = '(';
  const MD_CLOSE_TRIGGER_CHAR = ')';
  const {
    start,
    text
  } = value;
  const trigger = text.slice(start - 2, start - 1);
  const isTriggerChar = trigger === SIMPLE_CLOSE_TRIGGER_CHAR || trigger === MD_CLOSE_TRIGGER_CHAR;

  if (!isTriggerChar) {
    return value;
  }

  const textBefore = text.substr(0, start);
  const characterBefore = text.slice(start - 1, start);

  if (characterBefore !== MD_OPEN_TRIGGER_CHAR) {
    const startIndex = textBefore.lastIndexOf(SIMPLE_OPEN_TRIGGER_CHAR);

    if (startIndex === -1) {
      return value;
    }

    const parts = Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_4__["isMarkdownTimeformat"])(textBefore);

    if (!(parts !== null && parts !== void 0 && parts[1])) {
      return value;
    }

    const timestamp = parts[1];
    const endIndex = start - (parts !== null && parts !== void 0 && parts[2] ? timestamp.length + 5 : 3); // [hh:mm:ss].

    const charsToRemove = parts !== null && parts !== void 0 && parts[2] ? timestamp.length + 3 : 1; // [hh:mm:ss](link).

    value = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__["remove"])(value, startIndex, startIndex + charsToRemove);
    value = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__["remove"])(value, endIndex, endIndex + 1);
    value = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__["applyFormat"])(value, {
      type: ___WEBPACK_IMPORTED_MODULE_5__["name"],
      attributes: {
        timestamp: `#${Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_4__["convertTimeCodeToSeconds"])(timestamp)}`,
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["sprintf"])(
        /* translators: Playback at the specific position. %s: Time position */
        Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Playback at %s', 'media-manager'), timestamp)
      }
    }, startIndex, endIndex);
    value = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__["remove"])(value, endIndex + 1, endIndex + 2); // <- move the carte at the init position.
  }

  return value;
});

/***/ }),

/***/ "./packages/format-library/build-module/media-link/media-link-popover.js":
/*!*******************************************************************************!*\
  !*** ./packages/format-library/build-module/media-link/media-link-popover.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaLinkPopover; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ */ "./packages/format-library/build-module/media-link/index.js");

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


function MediaLinkPopover({
  value,
  hasMultipleTimeformats,
  isActive,
  isMultipleEdition,
  contentRef,
  currentTime,
  mediaSourceId,
  onTimeChange,
  onApplyMultipleFormat,
  onIgnoreMultipleFormat
}) {
  const anchorRef = Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_2__["useAnchorRef"])({
    ref: contentRef,
    value,
    settings: ___WEBPACK_IMPORTED_MODULE_5__["settings"]
  });
  const showMultipleEdition = isMultipleEdition && (hasMultipleTimeformats === null || hasMultipleTimeformats === void 0 ? void 0 : hasMultipleTimeformats.length) && !isActive;

  if (!(showMultipleEdition || isActive)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    anchorRef: anchorRef,
    position: "bottom center",
    focusOnMount: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "media-link-popover"
  }, showMultipleEdition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "media-link-popover__multiple-styling"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createInterpolateElement"])(Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["sprintf"])(
  /* translators: %d: number of timeformats found. */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["_n"])('There was found <strong>%d</strong> time format in the selection.', 'There were found <strong>%d</strong> time formats in the selection.', hasMultipleTimeformats === null || hasMultipleTimeformats === void 0 ? void 0 : hasMultipleTimeformats.length, 'media-manager'), hasMultipleTimeformats === null || hasMultipleTimeformats === void 0 ? void 0 : hasMultipleTimeformats.length), {
    strong: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null)
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isSecondary: true,
    isSmall: true,
    onClick: onApplyMultipleFormat
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Apply Media Link format', 'media-manager')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isTertiary: true,
    isSmall: true,
    onClick: onIgnoreMultipleFormat
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Ignore', 'media-manager'))), !showMultipleEdition && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_4__["MediaPlayerControl"], {
    mediaSourceId: mediaSourceId,
    time: currentTime,
    onChange: onTimeChange
  })));
}

/***/ }),

/***/ "./packages/format-library/build-module/media-link/view.js":
/*!*****************************************************************!*\
  !*** ./packages/format-library/build-module/media-link/view.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaLinkViewFormatType; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/**
 * WordPress dependencies
 */


function MediaLinkViewFormatType({
  mediaSourceId,
  timestamp,
  children,
  elementRef
}) {
  const {
    play
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_1__["useMediaStore"])(mediaSourceId);

  function onLinkClick() {
    play(timestamp);
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!elementRef) {
      return;
    }

    elementRef.addEventListener('click', onLinkClick);
    return function () {
      elementRef.removeEventListener('click', onLinkClick);
    };
  }, [elementRef]);
  return children;
}

/***/ }),

/***/ "./packages/media-connect/build-module/constants.js":
/*!**********************************************************!*\
  !*** ./packages/media-connect/build-module/constants.js ***!
  \**********************************************************/
/*! exports provided: STORE_NAME, STATE_PLAYING, STATE_ERROR, STATE_PAUSED, MEDIA_NOT_DEFINED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_NAME", function() { return STORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_PLAYING", function() { return STATE_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_ERROR", function() { return STATE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_PAUSED", function() { return STATE_PAUSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_NOT_DEFINED", function() { return MEDIA_NOT_DEFINED; });
// Store ID
const STORE_NAME = 'media-manager/media-source'; // Media statuses

const STATE_PLAYING = 'is-playing';
const STATE_ERROR = 'is-error';
const STATE_PAUSED = 'is-paused';
const MEDIA_NOT_DEFINED = 'media-not-defined-yet';

/***/ }),

/***/ "./packages/media-connect/build-module/hooks/use-current-time/index.js":
/*!*****************************************************************************!*\
  !*** ./packages/media-connect/build-module/hooks/use-current-time/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCurrentTime; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_manager_time_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @media-manager/time-utils */ "./packages/time-utils/build-module/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ "./packages/media-connect/build-module/index.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


function useCurrentTime(id) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(select => {
    const currentTime = select(___WEBPACK_IMPORTED_MODULE_2__["store"]).getMediaSourceCurrentTime(id) || 0;
    return {
      currentTime,
      currentTimeFormatted: Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_1__["convertSecondsToTimeCode"])(currentTime)
    };
  }, [id]);
}

/***/ }),

/***/ "./packages/media-connect/build-module/hooks/use-media-source-id/index.js":
/*!********************************************************************************!*\
  !*** ./packages/media-connect/build-module/hooks/use-media-source-id/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMediaSourceId; });
/**
 * This hook picks up the media source,
 * at block level, by the following priorities:
 *
 * - block attribute.
 * - block context.
 * - default value in the store admin
 *
 * @param {string} attrName - Attribute name where the source id is stored.
 * @param {Object} props - Block properties.
 * @return {string|null} Media source id when it's defined. Otherwise, null.
 */
function useMediaSourceId(attrName, props) {
  const {
    attributes,
    context
  } = props; // Pick up media source ID from attributes.

  if (attributes !== null && attributes !== void 0 && attributes[attrName]) {
    return attributes[attrName];
  } // Pick up media source ID from context;


  if (context !== null && context !== void 0 && context.mediaSourceId) {
    return context.mediaSourceId;
  }
}

/***/ }),

/***/ "./packages/media-connect/build-module/hooks/use-media-store/index.js":
/*!****************************************************************************!*\
  !*** ./packages/media-connect/build-module/hooks/use-media-store/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMediaStore; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/constants */ "./packages/media-connect/build-module/store/constants.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Media Store hook that provides properties and helper functions
 * to get useful data as well as be able to control the media.
 *
 * @param {string} id Media store ID.
 * @return {Object} Media store object, with properties and helpers.
 */

function useMediaStore(id) {
  const {
    isPaused,
    isReady,
    playingState,
    duration
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    const state = select(___WEBPACK_IMPORTED_MODULE_2__["store"]).getMediaPlayerState(id);
    return {
      playingState: state,
      isReady: typeof state !== _store_constants__WEBPACK_IMPORTED_MODULE_3__["STATE_NOT_READY"],
      isPaused: typeof state === 'undefined' || state === _store_constants__WEBPACK_IMPORTED_MODULE_3__["STATE_PAUSED"],
      duration: select(___WEBPACK_IMPORTED_MODULE_2__["store"]).getMediaSourceDuration(id)
    };
  }, [id]);
  const {
    playMediaSource,
    pauseMediaSource,
    toggleMediaSource,
    setMediaSourceCurrentTime,
    registerMediaSource,
    unregisterMediaSource,
    updateMediaSourceData
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])(___WEBPACK_IMPORTED_MODULE_2__["store"]);
  return {
    className: isPaused ? 'is-media-paused' : '',
    // @Todo: Considering remove this className prp.
    playingState,
    isPaused,
    isReady,
    duration,
    play: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(timestamp => {
      if (timestamp && typeof timestamp === 'number') {
        setMediaSourceCurrentTime(id, timestamp);
      }

      playMediaSource(id);
    }, [id]),
    pause: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => pauseMediaSource(id), [id]),
    toggle: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => toggleMediaSource(id), [id]),
    register: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((storeId, data) => registerMediaSource(storeId, data), [id]),
    unregister: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(mediaSourceId => unregisterMediaSource(mediaSourceId), []),
    updateData: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((mediaSourceId, data) => updateMediaSourceData(mediaSourceId, data), []),
    setCurrentTime: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(timestamp => setMediaSourceCurrentTime(id, timestamp), [id])
  };
}

/***/ }),

/***/ "./packages/media-connect/build-module/index.js":
/*!******************************************************!*\
  !*** ./packages/media-connect/build-module/index.js ***!
  \******************************************************/
/*! exports provided: store, STATE_PLAYING, STATE_PAUSED, STATE_ERROR, MEDIA_NOT_DEFINED, useMediaStore, useMediaSourceId, useCurrentTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./packages/media-connect/build-module/store/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "store", function() { return _store__WEBPACK_IMPORTED_MODULE_0__["store"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./packages/media-connect/build-module/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_PLAYING", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["STATE_PLAYING"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_PAUSED", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["STATE_PAUSED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STATE_ERROR", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["STATE_ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEDIA_NOT_DEFINED", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["MEDIA_NOT_DEFINED"]; });

/* harmony import */ var _hooks_use_media_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/use-media-store */ "./packages/media-connect/build-module/hooks/use-media-store/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediaStore", function() { return _hooks_use_media_store__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _hooks_use_media_source_id__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/use-media-source-id */ "./packages/media-connect/build-module/hooks/use-media-source-id/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMediaSourceId", function() { return _hooks_use_media_source_id__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hooks_use_current_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/use-current-time */ "./packages/media-connect/build-module/hooks/use-current-time/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCurrentTime", function() { return _hooks_use_current_time__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./packages/media-connect/build-module/store/actions.js":
/*!**************************************************************!*\
  !*** ./packages/media-connect/build-module/store/actions.js ***!
  \**************************************************************/
/*! exports provided: registerMediaSource, updateMediaSourceData, unregisterMediaSource, setDefaultMediaSource, playMediaSource, toggleMediaSource, pauseMediaSource, errorMediaSource, setMediaSourceCurrentTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMediaSource", function() { return registerMediaSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMediaSourceData", function() { return updateMediaSourceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterMediaSource", function() { return unregisterMediaSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDefaultMediaSource", function() { return setDefaultMediaSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playMediaSource", function() { return playMediaSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMediaSource", function() { return toggleMediaSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseMediaSource", function() { return pauseMediaSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMediaSource", function() { return errorMediaSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMediaSourceCurrentTime", function() { return setMediaSourceCurrentTime; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/media-connect/build-module/store/constants.js");
/**
 * Internal dependencies
 */

function registerMediaSource(id, mediaSourceState) {
  return {
    type: 'REGISTER_MEDIA_SOURCE',
    id,
    mediaSourceState
  };
}
function updateMediaSourceData(id, data) {
  return {
    type: 'UPDATE_MEDIA_SOURCE_DATA',
    id,
    data
  };
}
function unregisterMediaSource(id) {
  return {
    type: 'UNREGISTER_MEDIA_SOURCE',
    id
  };
}
function setDefaultMediaSource(id) {
  return {
    type: 'SET_DEFAULT_MEDIA_SOURCE',
    id
  };
}
function playMediaSource(id) {
  return {
    type: 'SET_MEDIA_PLAYER_STATE',
    id,
    state: _constants__WEBPACK_IMPORTED_MODULE_0__["STATE_PLAYING"]
  };
}
function toggleMediaSource(id) {
  return {
    type: 'TOGGLE_MEDIA_PLAYER_STATE',
    id
  };
}
function pauseMediaSource(id) {
  return {
    type: 'SET_MEDIA_PLAYER_STATE',
    id,
    state: _constants__WEBPACK_IMPORTED_MODULE_0__["STATE_PAUSED"]
  };
}
function errorMediaSource(id) {
  return {
    type: 'SET_MEDIA_PLAYER_STATE',
    id,
    state: _constants__WEBPACK_IMPORTED_MODULE_0__["STATE_ERROR"]
  };
}
function setMediaSourceCurrentTime(id, currentTime) {
  return {
    type: 'SET_MEDIA_PLAYER_CURRENT_TIME',
    id,
    currentTime
  };
}

/***/ }),

/***/ "./packages/media-connect/build-module/store/constants.js":
/*!****************************************************************!*\
  !*** ./packages/media-connect/build-module/store/constants.js ***!
  \****************************************************************/
/*! exports provided: STORE_NAME, STATE_NOT_READY, STATE_PLAYING, STATE_ERROR, STATE_PAUSED, MEDIA_NOT_DEFINED, DEFAULT_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_NAME", function() { return STORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_NOT_READY", function() { return STATE_NOT_READY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_PLAYING", function() { return STATE_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_ERROR", function() { return STATE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_PAUSED", function() { return STATE_PAUSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_NOT_DEFINED", function() { return MEDIA_NOT_DEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
// Store ID
const STORE_NAME = 'media-manager/media-source'; // Media statuses.

const STATE_NOT_READY = 'is-not-ready';
const STATE_PLAYING = 'is-playing';
const STATE_ERROR = 'is-error';
const STATE_PAUSED = 'is-paused';
const MEDIA_NOT_DEFINED = 'media-not-defined-yet';
const DEFAULT_STATE = {
  sources: {},
  default: null
};

/***/ }),

/***/ "./packages/media-connect/build-module/store/index.js":
/*!************************************************************!*\
  !*** ./packages/media-connect/build-module/store/index.js ***!
  \************************************************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./packages/media-connect/build-module/store/reducer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./packages/media-connect/build-module/store/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./packages/media-connect/build-module/store/selectors.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./packages/media-connect/build-module/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Store definition for the meida source namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

const store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["createReduxStore"])(_constants__WEBPACK_IMPORTED_MODULE_4__["STORE_NAME"], {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _actions__WEBPACK_IMPORTED_MODULE_2__,
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_3__
});
Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["register"])(store);

/***/ }),

/***/ "./packages/media-connect/build-module/store/reducer.js":
/*!**************************************************************!*\
  !*** ./packages/media-connect/build-module/store/reducer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/media-connect/build-module/store/constants.js");
/**
 * Internal dependencies
 */


function reducer(state = _constants__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_STATE"], action) {
  var _Object$keys; // Some actions doesn't have defined the source ID
  // On this case, we try to get safe getting the default ID.
  // Othewise, it will try to pick the first fro the souces list.


  const actionId = action.id || state.default || ((_Object$keys = Object.keys(state.sources)) === null || _Object$keys === void 0 ? void 0 : _Object$keys[0]); // Do not register when it sets explicitely as not defined.

  if (actionId === _constants__WEBPACK_IMPORTED_MODULE_0__["MEDIA_NOT_DEFINED"]) {
    return state;
  }

  switch (action.type) {
    case 'REGISTER_MEDIA_SOURCE':
      {
        var _action$mediaSourceSt;

        return { ...state,
          sources: { ...state.sources,
            [action.id]: {
              id: action.id,
              ...action.mediaSourceState,
              state: (_action$mediaSourceSt = action.mediaSourceState.state) !== null && _action$mediaSourceSt !== void 0 ? _action$mediaSourceSt : _constants__WEBPACK_IMPORTED_MODULE_0__["STATE_PAUSED"]
            }
          }
        };
      }

    case 'UPDATE_MEDIA_SOURCE_DATA':
      {
        return { ...state,
          sources: { ...state.sources,
            [action.id]: { ...state.sources[action.id],
              ...action.data
            }
          }
        };
      }

    case 'UNREGISTER_MEDIA_SOURCE':
      {
        const currentState = Object.assign({}, state);

        if (currentState.sources[action.id]) {
          delete currentState.sources[action.id];
        } // Set the first source as default
        // if it's removing it.


        if (action.id === state.default) {
          var _Object$keys2;

          currentState.default = (_Object$keys2 = Object.keys(state.sources)) === null || _Object$keys2 === void 0 ? void 0 : _Object$keys2[0];
        }

        return currentState;
      }

    case 'SET_DEFAULT_MEDIA_SOURCE':
      {
        return { ...state,
          default: action.id
        };
      }

    case 'SET_MEDIA_PLAYER_STATE':
      {
        return { ...state,
          sources: { ...state.sources,
            [actionId]: { ...state.sources[actionId],
              state: action.state
            }
          }
        };
      }

    case 'TOGGLE_MEDIA_PLAYER_STATE':
      {
        return { ...state,
          sources: { ...state.sources,
            [actionId]: { ...state.sources[actionId],
              state: state.sources[actionId].state === _constants__WEBPACK_IMPORTED_MODULE_0__["STATE_PLAYING"] ? _constants__WEBPACK_IMPORTED_MODULE_0__["STATE_PAUSED"] : _constants__WEBPACK_IMPORTED_MODULE_0__["STATE_PLAYING"]
            }
          }
        };
      }

    case 'SET_MEDIA_PLAYER_CURRENT_TIME':
      {
        return { ...state,
          sources: { ...state.sources,
            [actionId]: { ...state.sources[actionId],
              currentTime: action.currentTime
            }
          }
        };
      }
  }

  return state;
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./packages/media-connect/build-module/store/selectors.js":
/*!****************************************************************!*\
  !*** ./packages/media-connect/build-module/store/selectors.js ***!
  \****************************************************************/
/*! exports provided: getMediaSources, getMediaSourceById, getDefaultMediaSource, getMediaPlayerState, getMediaSourceCurrentTime, getMediaSourceDuration, getMediaSourceDomReference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaSources", function() { return getMediaSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaSourceById", function() { return getMediaSourceById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultMediaSource", function() { return getDefaultMediaSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaPlayerState", function() { return getMediaPlayerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaSourceCurrentTime", function() { return getMediaSourceCurrentTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaSourceDuration", function() { return getMediaSourceDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMediaSourceDomReference", function() { return getMediaSourceDomReference; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./packages/media-connect/build-module/store/constants.js");
/**
 * Internal dependencies
 */

function getMediaSources(state) {
  return state.sources;
}
function getMediaSourceById(state, id) {
  var _state$sources;

  if (id === _constants__WEBPACK_IMPORTED_MODULE_0__["MEDIA_NOT_DEFINED"]) {
    return;
  }

  return (_state$sources = state.sources) === null || _state$sources === void 0 ? void 0 : _state$sources[id];
}
/**
 * Retunr the default media source.
 * - the default one in case it's defined.
 * - the first one in case there are sources defined
 * - null when no media sources :-o
 *
 * @param {Object} state
 * @return {string|null} default media source ID.
 */

function getDefaultMediaSource(state) {
  let playerId = null;
  const keys = Object.keys(state.sources);

  if (state.default) {
    playerId = state.default;
  } else if (keys !== null && keys !== void 0 && keys.length) {
    playerId = state.sources[keys[0]].id;
  }

  if (!playerId) {
    return;
  }

  return state.sources[playerId];
}
function getMediaPlayerState(state, id) {
  var _state$sources2;

  const defaultMediaSource = id ? (_state$sources2 = state.sources) === null || _state$sources2 === void 0 ? void 0 : _state$sources2[id] : getDefaultMediaSource(state);

  if (!(defaultMediaSource !== null && defaultMediaSource !== void 0 && defaultMediaSource.state)) {
    return _constants__WEBPACK_IMPORTED_MODULE_0__["STATE_NOT_READY"];
  }

  return defaultMediaSource.state;
}
function getMediaSourceCurrentTime(state, id) {
  var _state$sources3;

  const defaultMediaSource = id ? (_state$sources3 = state.sources) === null || _state$sources3 === void 0 ? void 0 : _state$sources3[id] : getDefaultMediaSource(state);
  return defaultMediaSource === null || defaultMediaSource === void 0 ? void 0 : defaultMediaSource.currentTime;
}
function getMediaSourceDuration(state, id) {
  var _state$sources4, _state$sources4$id;

  if (!id) {
    const defaultMediaSource = getDefaultMediaSource(state);
    return defaultMediaSource === null || defaultMediaSource === void 0 ? void 0 : defaultMediaSource.duration;
  }

  return (_state$sources4 = state.sources) === null || _state$sources4 === void 0 ? void 0 : (_state$sources4$id = _state$sources4[id]) === null || _state$sources4$id === void 0 ? void 0 : _state$sources4$id.duration;
}
function getMediaSourceDomReference(state, id) {
  var _state$sources5;

  const mediaSource = id ? (_state$sources5 = state.sources) === null || _state$sources5 === void 0 ? void 0 : _state$sources5[id] : getDefaultMediaSource(state);

  if (!mediaSource) {
    return;
  }

  if (!(mediaSource !== null && mediaSource !== void 0 && mediaSource.querySelector)) {
    return;
  }

  return document.querySelector(mediaSource.querySelector);
}

/***/ }),

/***/ "./packages/time-utils/build-module/index.js":
/*!***************************************************!*\
  !*** ./packages/time-utils/build-module/index.js ***!
  \***************************************************/
/*! exports provided: timecodeRegExp, convertSecondsToTimeCode, convertTimeCodeToSeconds, isTimeformat, isMarkdownTimeformat, hasMultipleTimeformats, getTimeformatMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timecodeRegExp", function() { return timecodeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSecondsToTimeCode", function() { return convertSecondsToTimeCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTimeCodeToSeconds", function() { return convertTimeCodeToSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeformat", function() { return isTimeformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMarkdownTimeformat", function() { return isMarkdownTimeformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasMultipleTimeformats", function() { return hasMultipleTimeformats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeformatMatch", function() { return getTimeformatMatch; });
const timecodeRegExp = new RegExp(/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/);
const multiple = /(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)/;
const singleTimecodeRegExp = new RegExp(multiple, 'g');
const multipleTimecodeRegExp = new RegExp(multiple, 'gm');
const markdownTimeformat = /\[((?:(?:(?:[01]?\d|2[0-3]:):)?[0-5]?\d:)?[0-5]?\d)\](?:\(([^\(\)]+)\))?.$/;
const markdownTimeformatRegExp = new RegExp(markdownTimeformat);
function convertSecondsToTimeCode(seconds) {
  if (!seconds) {
    return '00:00:00';
  }

  return new Date(seconds * 1000).toISOString().substr(11, 8);
}
const convertTimeCodeToSeconds = string => {
  if (!isTimeformat(string)) {
    return;
  }

  const parts = string.match(timecodeRegExp);

  if (!parts) {
    return;
  } // seconds.


  let time = Number(parts[3]); // minutes.

  if (parts[2]) {
    time += Number(parts[2]) * 60;
  } // hours.


  if (parts[1]) {
    time += Number(parts[1]) * 60 * 60;
  }

  return time;
};
const isTimeformat = value => timecodeRegExp.test(value);
const isMarkdownTimeformat = value => markdownTimeformatRegExp.exec(value);
const hasMultipleTimeformats = value => value.match(multipleTimecodeRegExp);
const getTimeformatMatch = value => singleTimecodeRegExp.exec(value);

/***/ }),

/***/ "./src/block-library/index.js":
/*!************************************!*\
  !*** ./src/block-library/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_center__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-center */ "./src/block-library/media-center/index.js");
/* harmony import */ var _media_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-player */ "./src/block-library/media-player/index.js");
/* harmony import */ var _play_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-button */ "./src/block-library/play-button/index.js");
/* harmony import */ var _pause_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pause-button */ "./src/block-library/pause-button/index.js");
/* harmony import */ var _play_pause_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./play-pause-button */ "./src/block-library/play-pause-button/index.js");
/* harmony import */ var _time_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./time-position */ "./src/block-library/time-position/index.js");
/**
 * Internal dependencies
 */







/***/ }),

/***/ "./src/block-library/media-center/edit.js":
/*!************************************************!*\
  !*** ./src/block-library/media-center/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaCenterEdit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-library/media-center/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */


const MEDIA_CENTER_TEMPLATE = [['core/paragraph', {
  placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Type / to choose a block, from your couch!', 'media-manager')
}]];
/**
 * Internal dependencies
 */


function MediaCenterEdit() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
    template: MEDIA_CENTER_TEMPLATE
  }));
}

/***/ }),

/***/ "./src/block-library/media-center/editor.scss":
/*!****************************************************!*\
  !*** ./src/block-library/media-center/editor.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/media-center/index.js":
/*!*************************************************!*\
  !*** ./src/block-library/media-center/index.js ***!
  \*************************************************/
/*! exports provided: blockName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockName", function() { return blockName; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @media-manager/block-editor-complements */ "./packages/block-editor-complements/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-library/media-center/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/block-library/media-center/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/media-center/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_5__);
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const blockName = 'media-manager/media-center';
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
  apiVersion: 2,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_2__["MediaCenterIcon"],
  supports: {
    align: true,
    [_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_1__["SUPPORT_CONNECT_CONSUMER"]]: true,
    [_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_1__["SUPPORT_MEDIA_SELECTOR"]]: true
  }
});

/***/ }),

/***/ "./src/block-library/media-center/save.js":
/*!************************************************!*\
  !*** ./src/block-library/media-center/save.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */

function save({
  attributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save({
    className: 'entry-content'
  }), {
    "data-media-source-ref": attributes === null || attributes === void 0 ? void 0 : attributes.mediaSourceId
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "./src/block-library/media-player/edit.js":
/*!************************************************!*\
  !*** ./src/block-library/media-player/edit.js ***!
  \************************************************/
/*! exports provided: PLAYER_BLOCKS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAYER_BLOCKS", function() { return PLAYER_BLOCKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaPlayerEditBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _play_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../play-button */ "./src/block-library/play-button/index.js");
/* harmony import */ var _pause_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pause-button */ "./src/block-library/pause-button/index.js");
/* harmony import */ var _play_pause_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../play-pause-button */ "./src/block-library/play-pause-button/index.js");
/* harmony import */ var _time_position__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../time-position */ "./src/block-library/time-position/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/block-library/media-player/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_6__);


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */






const PLAYER_BLOCKS = [_play_button__WEBPACK_IMPORTED_MODULE_2__["blockName"], _pause_button__WEBPACK_IMPORTED_MODULE_3__["blockName"], _play_pause_button__WEBPACK_IMPORTED_MODULE_4__["blockName"], _time_position__WEBPACK_IMPORTED_MODULE_5__["blockName"]];
const INNER_BLOCKS_TEMPLATE = [[_play_pause_button__WEBPACK_IMPORTED_MODULE_4__["blockName"], {
  size: 'medium'
}], [_pause_button__WEBPACK_IMPORTED_MODULE_3__["blockName"], {
  size: 'medium'
}], [_time_position__WEBPACK_IMPORTED_MODULE_5__["blockName"]]];
function MediaPlayerEditBlock() {
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])();
  const innerBlocksProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["__experimentalUseInnerBlocksProps"])(blockProps, {
    allowedBlocks: PLAYER_BLOCKS,
    orientation: 'horizontal',
    templateLock: false,
    template: INNER_BLOCKS_TEMPLATE
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", innerBlocksProps);
}

/***/ }),

/***/ "./src/block-library/media-player/editor.scss":
/*!****************************************************!*\
  !*** ./src/block-library/media-player/editor.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/media-player/index.js":
/*!*************************************************!*\
  !*** ./src/block-library/media-player/index.js ***!
  \*************************************************/
/*! exports provided: blockName, buttonSupports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockName", function() { return blockName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonSupports", function() { return buttonSupports; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/block-editor-complements */ "./packages/block-editor-complements/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-library/media-player/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/block-library/media-player/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/media-player/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




const blockName = 'media-manager/media-player';
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Media Player', 'media-manager'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Compose your custom media player with blocks', 'media-manager'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerIcon"],
  supports: {
    align: true,
    [_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__["SUPPORT_CONNECT_CONSUMER"]]: true,
    [_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__["SUPPORT_MEDIA_SELECTOR"]]: true,
    'media-manager/color': {
      background: {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background color', 'media-manager'),
        style: 'background-color'
      }
    }
  }
}); // Common supports for player buttons blocks.

const buttonSupports = {
  [_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__["SUPPORT_SIZES"]]: {
    __sectionTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Button size', 'media-manager')
  },
  align: true,
  [_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__["SUPPORT_CONNECT_CONSUMER"]]: true,
  [_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__["SUPPORT_MEDIA_SELECTOR"]]: true,
  'media-manager/color': {
    icon: {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Icon color', 'media-manager'),
      style: 'background-color'
    },
    background: {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Background color', 'media-manager')
    },
    __contrastChecker: ['icon', 'background'],
    __sectionTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'media-manager')
  },
  'media-manager/customClassName': 'wp-media-manager-player-button' // <- @TODO: make its own implementation

};

/***/ }),

/***/ "./src/block-library/media-player/save.js":
/*!************************************************!*\
  !*** ./src/block-library/media-player/save.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "./src/block-library/pause-button/edit.js":
/*!************************************************!*\
  !*** ./src/block-library/pause-button/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayEditBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/block-library/pause-button/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PlayEditBlock({
  mediaSource,
  scale,
  className,
  isSelected
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Disabled"], {
    isDisabled: !isSelected
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PauseButton"], {
    className: className,
    scale: scale,
    onClick: mediaSource.pause
  })));
}

/***/ }),

/***/ "./src/block-library/pause-button/editor.scss":
/*!****************************************************!*\
  !*** ./src/block-library/pause-button/editor.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/pause-button/index.js":
/*!*************************************************!*\
  !*** ./src/block-library/pause-button/index.js ***!
  \*************************************************/
/*! exports provided: blockName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockName", function() { return blockName; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _media_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media-player */ "./src/block-library/media-player/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/block-library/pause-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/block-library/pause-button/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/pause-button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





const blockName = 'media-manager/pause-button';
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  // we need this if we'd like to extend the block :'(
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
    apiVersion: 2,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pause Button', 'media-manager'),
    edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
    save: _save__WEBPACK_IMPORTED_MODULE_6__["default"],
    icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerPauseIcon"],
    supports: _media_player__WEBPACK_IMPORTED_MODULE_4__["buttonSupports"]
  });
});

/***/ }),

/***/ "./src/block-library/pause-button/save.js":
/*!************************************************!*\
  !*** ./src/block-library/pause-button/save.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/block-editor-complements */ "./packages/block-editor-complements/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");


/**
 * WordPress dependencies
 */



function save({
  attributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "wp-media-manager-player-button__button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerPauseIcon"], {
    scale: Object(_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__["getButtonSizeBySlug"])(attributes === null || attributes === void 0 ? void 0 : attributes.size)
  })));
}

/***/ }),

/***/ "./src/block-library/play-button/edit.js":
/*!***********************************************!*\
  !*** ./src/block-library/play-button/edit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayEditBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/block-library/play-button/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PlayEditBlock({
  mediaSource,
  scale,
  className,
  isSelected
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Disabled"], {
    isDisabled: !isSelected
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayButton"], {
    className: className,
    scale: scale,
    onClick: mediaSource.play
  })));
}

/***/ }),

/***/ "./src/block-library/play-button/editor.scss":
/*!***************************************************!*\
  !*** ./src/block-library/play-button/editor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/play-button/index.js":
/*!************************************************!*\
  !*** ./src/block-library/play-button/index.js ***!
  \************************************************/
/*! exports provided: blockName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockName", function() { return blockName; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _media_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media-player */ "./src/block-library/media-player/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/block-library/play-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/block-library/play-button/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/play-button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





const blockName = 'media-manager/play-button';
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  // we need this if we'd like to extend the block :'(
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
    apiVersion: 2,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Play Button', 'media-manager'),
    edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
    save: _save__WEBPACK_IMPORTED_MODULE_6__["default"],
    icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerPlayIcon"],
    supports: _media_player__WEBPACK_IMPORTED_MODULE_4__["buttonSupports"]
  });
});

/***/ }),

/***/ "./src/block-library/play-button/save.js":
/*!***********************************************!*\
  !*** ./src/block-library/play-button/save.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/block-editor-complements */ "./packages/block-editor-complements/build-module/index.js");


/**
 * WordPress dependencies
 */



function save({
  attributes
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "wp-media-manager-player-button__button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_2__["PlayerPlayIcon"], {
    scale: Object(_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_3__["getButtonSizeBySlug"])(attributes === null || attributes === void 0 ? void 0 : attributes.size)
  })));
}

/***/ }),

/***/ "./src/block-library/play-pause-button/edit.js":
/*!*****************************************************!*\
  !*** ./src/block-library/play-pause-button/edit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayPauseEditBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/block-library/play-pause-button/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PlayPauseEditBlock({
  mediaSource,
  scale,
  className,
  isSelected
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Disabled"], {
    isDisabled: !isSelected
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayPauseButton"], {
    className: className,
    isPaused: mediaSource.isPaused,
    scale: scale,
    onClick: mediaSource.toggle
  })));
}

/***/ }),

/***/ "./src/block-library/play-pause-button/editor.scss":
/*!*********************************************************!*\
  !*** ./src/block-library/play-pause-button/editor.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/play-pause-button/index.js":
/*!******************************************************!*\
  !*** ./src/block-library/play-pause-button/index.js ***!
  \******************************************************/
/*! exports provided: blockName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockName", function() { return blockName; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _media_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media-player */ "./src/block-library/media-player/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/block-library/play-pause-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./save */ "./src/block-library/play-pause-button/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/play-pause-button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





const blockName = 'media-manager/play-pause-button';
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  // we need this if we'd like to extend the block :'(
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
    apiVersion: 2,
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Play/Pause Button', 'media-manager'),
    edit: _edit__WEBPACK_IMPORTED_MODULE_5__["default"],
    save: _save__WEBPACK_IMPORTED_MODULE_6__["default"],
    icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerPlayPauseIcon"],
    supports: _media_player__WEBPACK_IMPORTED_MODULE_4__["buttonSupports"]
  });
});

/***/ }),

/***/ "./src/block-library/play-pause-button/save.js":
/*!*****************************************************!*\
  !*** ./src/block-library/play-pause-button/save.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/block-editor-complements */ "./packages/block-editor-complements/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");


/**
 * WordPress dependencies
 */



function save({
  attributes
}) {
  const scale = Object(_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__["getButtonSizeBySlug"])(attributes === null || attributes === void 0 ? void 0 : attributes.size);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "wp-media-manager-player-button__button is-media-paused"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerPlayPauseIcon"], {
    scale: scale
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerPauseIcon"], {
    scale: scale
  })));
}

/***/ }),

/***/ "./src/block-library/time-position/edit.js":
/*!*************************************************!*\
  !*** ./src/block-library/time-position/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimePositionDisplayEditBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-library/time-position/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function TimePositionDisplayEditBlock({
  mediaSourceId
}) {
  const {
    currentTimeFormatted
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_2__["useCurrentTime"])(mediaSourceId);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "time-position-display__wrapper"
  }, currentTimeFormatted));
}

/***/ }),

/***/ "./src/block-library/time-position/editor.scss":
/*!*****************************************************!*\
  !*** ./src/block-library/time-position/editor.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block-library/time-position/index.js":
/*!**************************************************!*\
  !*** ./src/block-library/time-position/index.js ***!
  \**************************************************/
/*! exports provided: blockName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockName", function() { return blockName; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/block-editor-complements */ "./packages/block-editor-complements/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/block-library/time-position/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/block-library/time-position/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/time-position/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




const blockName = 'media-manager/time-position-display';
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Time position display', 'media-manager'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Block show the current time position of the media source', 'media-manager'),
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_3__["TimePositionIcon"],
  supports: {
    [_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__["SUPPORT_CONNECT_CONSUMER"]]: true,
    [_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__["SUPPORT_MEDIA_SELECTOR"]]: true,
    align: true,
    typography: {
      fontSize: true,
      lineHeight: true,
      __experimentalFontStyle: true,
      __experimentalFontWeight: true,
      __experimentalFontFamily: true
    },
    'media-manager/color': {
      text: {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Text color', 'media-manager')
      },
      __sectionTitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Color', 'media-manager')
    },
    'media-manager/customClassName': 'wp-media-manager-player-button' // <- @TODO: make its own implementation

  }
});

/***/ }),

/***/ "./src/block-library/time-position/save.js":
/*!*************************************************!*\
  !*** ./src/block-library/time-position/save.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


/**
 * WordPress dependencies
 */


function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "time-position-display__wrapper"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('00:00', 'media-manager')));
}

/***/ }),

/***/ "./src/extending/constants.js":
/*!************************************!*\
  !*** ./src/extending/constants.js ***!
  \************************************/
/*! exports provided: EXTENDED_MEDIA_BLOCKS, MEDIA_BLOCKS_ATTRIBUTE_SCHEMA, EXTEND_BLOCKS_WITH_MEDIA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENDED_MEDIA_BLOCKS", function() { return EXTENDED_MEDIA_BLOCKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_BLOCKS_ATTRIBUTE_SCHEMA", function() { return MEDIA_BLOCKS_ATTRIBUTE_SCHEMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTEND_BLOCKS_WITH_MEDIA", function() { return EXTEND_BLOCKS_WITH_MEDIA; });
const BLOCK_NAME_CORE_VIDEO = 'core/video';
const BLOCK_NAME_CORE_AUDIO = 'core/audio';
const BLOCK_NAME_CORE_PARAGRAPH = 'core/paragraph';
const BLOCK_NAME_CORE_HEADING = 'core/heading';
const BLOCK_NAME_CORE_QUOTE = 'core/quote';
const BLOCK_NAME_CORE_LIST = 'core/list';
/*
 * Blocks list that are going to be extended
 * as media source providers
 */

const EXTENDED_MEDIA_BLOCKS = [BLOCK_NAME_CORE_AUDIO, BLOCK_NAME_CORE_VIDEO];
/*
 * The following object defines the attribute schema
 * for each block that will be extended.
 *
 * - name: Block attribute name used to store the media source.
 * - type: Attribute type.
 * - domTymeName: DOM element name.
 */

const MEDIA_BLOCKS_ATTRIBUTE_SCHEMA = {
  [BLOCK_NAME_CORE_VIDEO]: {
    name: 'src',
    type: 'string',
    domTypeName: 'video'
  },
  [BLOCK_NAME_CORE_AUDIO]: {
    name: 'src',
    type: 'string',
    domTypeName: 'audio'
  }
};
const EXTEND_BLOCKS_WITH_MEDIA = [BLOCK_NAME_CORE_PARAGRAPH, BLOCK_NAME_CORE_HEADING, BLOCK_NAME_CORE_QUOTE, BLOCK_NAME_CORE_LIST];

/***/ }),

/***/ "./src/extending/index.js":
/*!********************************!*\
  !*** ./src/extending/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-blocks */ "./src/extending/media-blocks/index.js");
/**
 * Internal dependencies
 */


/***/ }),

/***/ "./src/extending/media-blocks/index.js":
/*!*********************************************!*\
  !*** ./src/extending/media-blocks/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/extending/utils.js");
/* harmony import */ var _media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/block-editor-complements */ "./packages/block-editor-complements/build-module/index.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




function registerMediaBlocksSource(settings, name) {
  if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__["shouldExtendMediaBlock"])(name, settings)) {
    return settings;
  }

  return { ...settings,
    supports: { ...settings.support,
      [_media_manager_block_editor_complements__WEBPACK_IMPORTED_MODULE_2__["SUPPORT_CONNECT_PROVIDER"]]: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getBlockSourceProps"])(name)
    }
  };
}

Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__["addFilter"])('blocks.registerBlockType', 'media-manager/registerMediaBlockSource', registerMediaBlocksSource);

/***/ }),

/***/ "./src/extending/utils.js":
/*!********************************!*\
  !*** ./src/extending/utils.js ***!
  \********************************/
/*! exports provided: shouldExtendMediaBlock, getBlockSourceProps, shouldExtendBlockWithMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldExtendMediaBlock", function() { return shouldExtendMediaBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockSourceProps", function() { return getBlockSourceProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldExtendBlockWithMedia", function() { return shouldExtendBlockWithMedia; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/extending/constants.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function isMediaBlockListed(name) {
  return _constants__WEBPACK_IMPORTED_MODULE_2__["EXTENDED_MEDIA_BLOCKS"].indexOf(name) >= 0;
}

function isBlockListed(name) {
  return name && _constants__WEBPACK_IMPORTED_MODULE_2__["EXTEND_BLOCKS_WITH_MEDIA"].indexOf(name) >= 0;
}

function hasBlockValidScheme(name, attributes) {
  // check if the scheme is defined.
  if (!_constants__WEBPACK_IMPORTED_MODULE_2__["MEDIA_BLOCKS_ATTRIBUTE_SCHEMA"][name]) {
    return false;
  }

  const blockSchema = _constants__WEBPACK_IMPORTED_MODULE_2__["MEDIA_BLOCKS_ATTRIBUTE_SCHEMA"][name]; // check if the attribute name exists in the scheme.

  if (!attributes[blockSchema.name]) {
    return false;
  } // check attribute type.


  if (!attributes[blockSchema.name].type || attributes[blockSchema.name].type !== blockSchema.type) {
    return false;
  }

  return true;
}
/**
 * Check whether the given block should be extended with media source.
 *
 * @param {string} name Block name.
 * @param {Object} settings Block attributes.
 * @return {boolean} True if the block should be extended. Otherwise, False.
 */


function shouldExtendMediaBlock(name, settings) {
  if (!isMediaBlockListed(name)) {
    return false;
  }

  return hasBlockValidScheme(name, settings === null || settings === void 0 ? void 0 : settings.attributes);
}
function getBlockSourceProps(name) {
  return _constants__WEBPACK_IMPORTED_MODULE_2__["MEDIA_BLOCKS_ATTRIBUTE_SCHEMA"] === null || _constants__WEBPACK_IMPORTED_MODULE_2__["MEDIA_BLOCKS_ATTRIBUTE_SCHEMA"] === void 0 ? void 0 : _constants__WEBPACK_IMPORTED_MODULE_2__["MEDIA_BLOCKS_ATTRIBUTE_SCHEMA"][name];
}
function shouldExtendBlockWithMedia(name) {
  const selectedBlock = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["store"]).getSelectedBlock();

  if (!isBlockListed(name || (selectedBlock === null || selectedBlock === void 0 ? void 0 : selectedBlock.name))) {
    return false;
  }

  if (!(selectedBlock !== null && selectedBlock !== void 0 && selectedBlock.clientId)) {
    return false;
  }

  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["store"]).getBlockParentsByBlockName(selectedBlock.clientId, 'media-manager/media-center');
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_manager_format_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @media-manager/format-library */ "./packages/format-library/build-module/index.js");
/* harmony import */ var _extending__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extending */ "./src/extending/index.js");
/* harmony import */ var _block_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block-library */ "./src/block-library/index.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



Object(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_0__["registerFormatType"])(_media_manager_format_library__WEBPACK_IMPORTED_MODULE_1__["mediaLink"].name, _media_manager_format_library__WEBPACK_IMPORTED_MODULE_1__["mediaLink"].settings);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["richText"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map