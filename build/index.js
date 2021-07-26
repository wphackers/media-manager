(window["webpackJsonp_media_manager"] = window["webpackJsonp_media_manager"] || []).push([["style-index"],{

/***/ "./src/block-library/media-center/style.scss":
/*!***************************************************!*\
  !*** ./src/block-library/media-center/style.scss ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-library/media-player/style.scss":
/*!***************************************************!*\
  !*** ./src/block-library/media-player/style.scss ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-library/pause-button/style.scss":
/*!***************************************************!*\
  !*** ./src/block-library/pause-button/style.scss ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-library/play-button/style.scss":
/*!**************************************************!*\
  !*** ./src/block-library/play-button/style.scss ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-library/play-pause-button/style.scss":
/*!********************************************************!*\
  !*** ./src/block-library/play-pause-button/style.scss ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-library/time-position/style.scss":
/*!****************************************************!*\
  !*** ./src/block-library/time-position/style.scss ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/***/ "./packages/block-editor-complements/build-module/components/index.js":
/*!****************************************************************************!*\
  !*** ./packages/block-editor-complements/build-module/components/index.js ***!
  \****************************************************************************/
/*! exports provided: MediaItem, MediaItemPanelBody, MediaConnectProviderPanelBody, MediaSelector, withMediaManagerColors, getSlugBySize, withSizes */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSlugBySize", function() { return _with_sizes__WEBPACK_IMPORTED_MODULE_2__["getSlugBySize"]; });

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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @media-manager/time-utils */ "./packages/time-utils/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");


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
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    className: "media__item-icon",
    icon: `format-${type}`,
    size: 36
  }), showTypeLabel && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, " ", type), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_7__["PlayPauseButton"], {
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
  isReady,
  isNotAvailable,
  isNotDefined,
  onReplace,
  onUnlink,
  isMediaInherited
}) {
  const {
    selectBlock
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["store"]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    className: "media-source-panel",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Media Source Consumer', 'media-manager')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This block is connected to a media source.', 'media-manager')), (!isReady || isNotAvailable || isNotDefined) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Notice"], {
    spokenMessage: null,
    status: isNotAvailable && !isNotDefined ? 'error' : 'warning',
    isDismissible: false
  }, isNotAvailable && !isNotDefined ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Media is not available anymore', 'media-manager') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('No media linked to this block', 'media-manager'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isSecondary: true,
    isSmall: true,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Link to a media source', 'media-manager'),
    onClick: onReplace
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Link to Media', 'media-manager')))), source && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaItem, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, source, {
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
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Filename:', 'media-manager'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, " ", source.source)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Duration:', 'media-manager'), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("strong", null, ' ', Object(_media_manager_time_utils__WEBPACK_IMPORTED_MODULE_6__["convertSecondsToTimeCode"])(source.duration))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("li", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["sprintf"])(
  /* translators: %1$s: block title, %2$s: author name. */
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Connected to a %1$s.', 'media-manager'), source.elementType), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "components-button__focus",
    isLink: true,
    onClick: () => {
      if (!source.mediaBlockClientId) {
        return;
      }

      selectBlock(source.mediaBlockClientId);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Focus', 'media-manager'))))), !isMediaInherited && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "media-source-panel__actions"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isSecondary: true,
    isSmall: true,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Replacing linked media source', 'media-manager'),
    onClick: onReplace
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Replace Media', 'media-manager')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isTertiary: true,
    isSmall: true,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Unlink media source', 'media-manager'),
    onClick: () => onUnlink(true)
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Unlink Media', 'media-manager'))))));
}
/**
 * Block settings Pane to show info
 * about block as media provider
 */

function MediaConnectProviderPanelBody() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_7__["MediaConnectIcon"],
    className: "media-source-panel",
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Media Source Provider', 'media-manager')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('This block has been defined as media provider, meaning you can connect and command it from other blocks.', 'media-manager')));
}
function MediaSelector({
  media,
  onMediaSelect
}) {
  const [mediaPlayingElementRef, setMediaPlayingElementRef] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])();

  if (!(media !== null && media !== void 0 && media.length)) {
    return null;
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "media-selector"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Pick up a media from the media sources list available for this entrance.', 'media-manager')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("ul", null, media.map(function ({
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
/*! exports provided: getSlugBySize, withSizes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlugBySize", function() { return getSlugBySize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSizes", function() { return withSizes; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);

/**
 * WordPress dependencies
 */






const defaultSizes = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Small', 'media-manager'),
  slug: 'small',
  value: 1
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Normal', 'media-manager'),
  slug: 'normal',
  value: 1.5
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Medium', 'media-manager'),
  slug: 'medium',
  value: 2
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Large', 'media-manager'),
  slug: 'large',
  value: 2.5
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Giant', 'media-manager'),
  slug: 'giant',
  value: 4
}];
function getSlugBySize(sizes = defaultSizes, size) {
  var _sizes$find;

  return (_sizes$find = sizes.find(option => option.value === size)) === null || _sizes$find === void 0 ? void 0 : _sizes$find.slug;
}
function withSizes(supportProps) {
  return Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_1__["createHigherOrderComponent"])(BlockEdit => props => {
    var _supportProps$options;

    const {
      attributes,
      setAttributes
    } = props;
    const {
      size
    } = attributes;

    function setSize(value) {
      setAttributes({
        size: Number(value)
      });
    } // Panel title.


    const panelTitle = supportProps.__sectionTitle;

    const selectorTitle = supportProps.__selectorTitle || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Sizes', 'media-manager');

    const sizes = (_supportProps$options = supportProps === null || supportProps === void 0 ? void 0 : supportProps.options) !== null && _supportProps$options !== void 0 ? _supportProps$options : defaultSizes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Panel"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: panelTitle
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
      label: selectorTitle,
      options: sizes,
      onChange: setSize,
      value: size
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props));
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

  const mediaSourceUrl = attributes === null || attributes === void 0 ? void 0 : attributes[attrName];
  const {
    updateBlockAttributes
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["store"]); // Media properties / helpers.

  const {
    isPaused,
    register,
    unregister,
    updateData,
    setCurrentTime
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

    updateData({
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
    setCurrentTime(time);
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
     * Get the media source ID, based on:
     *
     * - the mediaSourceId attribute when it's defined:
     * If the attribute is not defined, then let's assing
     * a new one based on the clientId of the media block.
     *
     * - checking whether it's already present in the store.
     * It happens when the block is duplicated. In this case,
     * we need to assign a new ID.
     */


    let mediaSourceId = mediaSourceIdAttr;
    const mediaIdExists = !!Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["select"])(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["store"]).getMediaSourceById(mediaSourceId);

    if (!mediaSourceId || mediaIdExists) {
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

    register(mediaSourceId, {
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

      unregister(mediaSourceId);
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
    const isNotDefined = mediaSourceId === _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["MEDIA_NOT_DEFINED"];
    const {
      source,
      isReady,
      isNotAvailable
    } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["useMediaStore"])(mediaSourceId);
    const {
      mediaSources
    } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(select => {
      return {
        mediaSources: select(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_9__["store"]).getMediaSources()
      };
    }, []);

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
        className: "media-selector-placeholder wp-block"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__["Placeholder"], {
        icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockIcon"], {
          icon: icon
        }),
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
      source: source,
      isReady: isReady,
      isNotAvailable: isNotAvailable,
      isNotDefined: isNotDefined,
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./packages/block-editor-complements/build-module/components/index.js");
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
  const slug = Object(_components__WEBPACK_IMPORTED_MODULE_4__["getSlugBySize"])(sizes.options, size);
  return { ...props,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(props === null || props === void 0 ? void 0 : props.className, `is-${slug}-size`)
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
        type: 'number',
        default: 1
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
/*! exports provided: SUPPORT_MEDIA_SELECTOR, SUPPORT_SIZES, SUPPORT_CONNECT_PROVIDER, SUPPORT_CONNECT_CONSUMER, MediaItem, MediaItemPanelBody, MediaConnectProviderPanelBody, MediaSelector, withMediaManagerColors, getSlugBySize, withSizes */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSlugBySize", function() { return _components__WEBPACK_IMPORTED_MODULE_1__["getSlugBySize"]; });

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
    setCurrentTime,
    isNotAvailable
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_5__["useMediaStore"])(mediaSourceId);
  const isNotDefined = mediaSourceId === _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_5__["MEDIA_NOT_DEFINED"];
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
  }, (!isReady || isNotAvailable || isNotDefined) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Notice"], {
    spokenMessage: null,
    status: isNotAvailable && !isNotDefined ? 'error' : 'warning',
    isDismissible: false
  }, isNotAvailable && !isNotDefined ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Media is not available anymore', 'media-manager') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('No media linked to this block', 'media-manager')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(JumpBackButton, {
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
    duration,
    isNotAvailable,
    source
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    const mediaSource = select(___WEBPACK_IMPORTED_MODULE_2__["store"]).getMediaSourceById(id);
    const state = select(___WEBPACK_IMPORTED_MODULE_2__["store"]).getMediaPlayerState(id);
    return {
      source: mediaSource,
      playingState: state,
      isReady: state !== _store_constants__WEBPACK_IMPORTED_MODULE_3__["STATE_NOT_READY"],
      isNotAvailable: !mediaSource,
      isPaused: typeof state === 'undefined' || state === _store_constants__WEBPACK_IMPORTED_MODULE_3__["STATE_NOT_READY"] || state === _store_constants__WEBPACK_IMPORTED_MODULE_3__["STATE_PAUSED"],
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
    source,
    isNotAvailable,
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
    updateData: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(data => updateMediaSourceData(id, data), []),
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/block-library/media-center/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/block-library/media-center/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/media-center/style.scss");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const blockName = 'media-manager/media-center';
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_1__["MediaCenterIcon"]
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


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */






const PLAYER_BLOCKS = [_play_button__WEBPACK_IMPORTED_MODULE_2__["blockName"], _pause_button__WEBPACK_IMPORTED_MODULE_3__["blockName"], _play_pause_button__WEBPACK_IMPORTED_MODULE_4__["blockName"], _time_position__WEBPACK_IMPORTED_MODULE_5__["blockName"]];
const INNER_BLOCKS_TEMPLATE = [[_play_pause_button__WEBPACK_IMPORTED_MODULE_4__["blockName"], {
  size: 2
}], [_pause_button__WEBPACK_IMPORTED_MODULE_3__["blockName"], {
  size: 2
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-library/media-player/index.js":
/*!*************************************************!*\
  !*** ./src/block-library/media-player/index.js ***!
  \*************************************************/
/*! exports provided: blockName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockName", function() { return blockName; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/block-library/media-player/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/block-library/media-player/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/media-player/style.scss");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const blockName = 'media-manager/media-player';
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_1__["PlayerIcon"]
});

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


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PlayEditBlock({
  mediaSource,
  className,
  isSelected
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Disabled"], {
    isDisabled: !isSelected
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PauseButton"], {
    className: className,
    onClick: mediaSource.pause,
    disabled: mediaSource.isNotAvailable
  })));
}

/***/ }),

/***/ "./src/block-library/pause-button/editor.scss":
/*!****************************************************!*\
  !*** ./src/block-library/pause-button/editor.scss ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-library/pause-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/block-library/pause-button/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/pause-button/style.scss");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const blockName = 'media-manager/pause-button';
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  // we need this if we'd like to extend the block :'(
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
    edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
    save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
    icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_2__["PlayerPauseIcon"]
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
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");


/**
 * WordPress dependencies
 */


function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "wp-media-manager-player-button__button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_2__["PlayerPauseIcon"], null)));
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


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PlayEditBlock({
  mediaSource,
  className,
  isSelected
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Disabled"], {
    isDisabled: !isSelected
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayButton"], {
    className: className,
    onClick: mediaSource.play,
    disabled: mediaSource.isNotAvailable
  })));
}

/***/ }),

/***/ "./src/block-library/play-button/editor.scss":
/*!***************************************************!*\
  !*** ./src/block-library/play-button/editor.scss ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-library/play-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/block-library/play-button/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/play-button/style.scss");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const blockName = 'media-manager/play-button';
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  // we need this if we'd like to extend the block :'(
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
    edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
    save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
    icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_2__["PlayerPlayIcon"]
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


/**
 * WordPress dependencies
 */


function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "wp-media-manager-player-button__button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_2__["PlayerPlayIcon"], null)));
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


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PlayPauseEditBlock({
  mediaSource,
  className,
  isSelected
}) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Disabled"], {
    isDisabled: !isSelected
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayPauseButton"], {
    className: className,
    isPaused: mediaSource.isPaused,
    onClick: mediaSource.toggle,
    disabled: mediaSource.isNotAvailable
  })));
}

/***/ }),

/***/ "./src/block-library/play-pause-button/editor.scss":
/*!*********************************************************!*\
  !*** ./src/block-library/play-pause-button/editor.scss ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/block-library/play-pause-button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/block-library/play-pause-button/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/play-pause-button/style.scss");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const blockName = 'media-manager/play-pause-button';
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  // we need this if we'd like to extend the block :'(
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
    edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
    save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
    icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_2__["PlayerPlayPauseIcon"]
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
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");


/**
 * WordPress dependencies
 */


function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "wp-media-manager-player-button__button is-media-paused"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_2__["PlayerPlayPauseIcon"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_2__["PlayerPauseIcon"], null)));
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/block-library/time-position/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/block-library/time-position/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/time-position/style.scss");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const blockName = 'media-manager/time-position-display';
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(blockName, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  icon: _media_manager_components__WEBPACK_IMPORTED_MODULE_1__["TimePositionIcon"]
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

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _extending__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extending */ "./src/extending/index.js");
/* harmony import */ var _block_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block-library */ "./src/block-library/index.js");
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map