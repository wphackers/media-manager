/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/view.js");
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

/***/ "./src/block-library/pause-button/view.js":
/*!************************************************!*\
  !*** ./src/block-library/pause-button/view.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PauseBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");


/**
 * WordPress dependencies
 */



function PauseBlock({
  mediaSourceId
}) {
  const {
    pause,
    className,
    isNotAvailable
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_2__["useMediaStore"])(mediaSourceId);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: `wp-media-manager-player-button__button ${className}`,
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerPauseIcon"], null),
    onClick: pause,
    disabled: isNotAvailable
  });
}

/***/ }),

/***/ "./src/block-library/play-button/view.js":
/*!***********************************************!*\
  !*** ./src/block-library/play-button/view.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");


/**
 * WordPress dependencies
 */



function PlayBlock({
  mediaSourceId
}) {
  const {
    play,
    className,
    isNotAvailable
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_2__["useMediaStore"])(mediaSourceId);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: `wp-media-manager-player-button__button ${className}`,
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerPlayIcon"], null),
    onClick: play,
    disabled: isNotAvailable
  });
}

/***/ }),

/***/ "./src/block-library/play-pause-button/view.js":
/*!*****************************************************!*\
  !*** ./src/block-library/play-pause-button/view.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlayPauseBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/* harmony import */ var _media_manager_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/components */ "./packages/components/build-module/index.js");


/**
 * WordPress dependencies
 */



function PlayPauseBlock({
  mediaSourceId
}) {
  const {
    isPaused,
    toggle,
    className,
    isNotAvailable
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_2__["useMediaStore"])(mediaSourceId);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: `wp-media-manager-player-button__button ${className}`,
    icon: isPaused ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerPlayPauseIcon"], null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_components__WEBPACK_IMPORTED_MODULE_3__["PlayerPauseIcon"], null),
    onClick: toggle,
    disabled: isNotAvailable
  });
}

/***/ }),

/***/ "./src/block-library/time-position/view.js":
/*!*************************************************!*\
  !*** ./src/block-library/time-position/view.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimePositionDisplayEditBlock; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");


/**
 * Internal dependencies
 */

function TimePositionDisplayEditBlock({
  mediaSourceId
}) {
  const {
    currentTimeFormatted
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_1__["useCurrentTime"])(mediaSourceId);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "time-position-display__wrapper"
  }, currentTimeFormatted));
}

/***/ }),

/***/ "./src/block-library/view.js":
/*!***********************************!*\
  !*** ./src/block-library/view.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _play_pause_button_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play-pause-button/view */ "./src/block-library/play-pause-button/view.js");
/**
 * Internal dependencies
 */


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

/***/ "./src/extending/media-blocks/media-source-provider-wrapper/index.js":
/*!***************************************************************************!*\
  !*** ./src/extending/media-blocks/media-source-provider-wrapper/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaSourceProviderWrapper; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @media-manager/media-connect */ "./packages/media-connect/build-module/index.js");
/**
 * External dependencies
 */

/**
 * External dependencies
 */




const MEDIA_CURRENT_TIME_THRESHOLD = 1000;
const MEDIA_CURRENT_STATE_THRESHOLD = 1000;
function MediaSourceProviderWrapper({
  mediaElement,
  mediaSourceId,
  elementType,
  querySelector
}) {
  const {
    isPaused,
    setCurrentTime,
    play: playMedia,
    pause: pauseMedia,
    register,
    unregister,
    updateData
  } = Object(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_3__["useMediaStore"])(mediaSourceId);
  const currentTime = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(select => select(_media_manager_media_connect__WEBPACK_IMPORTED_MODULE_3__["store"]).getMediaSourceCurrentTime(mediaSourceId), [mediaSourceId]);

  function play() {
    mediaElement.play().catch(() => {});
  }

  function pause() {
    mediaElement.pause();
  }

  function onMetadataReady(event) {
    var _event$srcElement;

    updateData(mediaSourceId, {
      duration: event === null || event === void 0 ? void 0 : (_event$srcElement = event.srcElement) === null || _event$srcElement === void 0 ? void 0 : _event$srcElement.duration
    });
  }
  /*
   * Pre load mediaElement metadata.
   * It allows preloading useful metadata
   * of the media source, for instance,
   * the media duration.
   */


  mediaElement.preload = 'metadata';
  mediaElement.autoplay = false;
  /*
   * - Register Media into the store.
   * - Get the metadata from the client.
   * - Listen Play and Pause events.
   */

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    register(mediaSourceId, {
      // source: mediaSource,
      elementType,
      state: _media_manager_media_connect__WEBPACK_IMPORTED_MODULE_3__["STATE_PAUSED"],
      querySelector
    }); // Subscribe to media events.

    mediaElement.addEventListener('loadedmetadata', onMetadataReady);
    mediaElement.addEventListener('play', playMedia);
    mediaElement.addEventListener('pause', pauseMedia); // Clean.

    return function () {
      // Remove listeners.
      mediaElement.removeEventListener('loadedmetadata', onMetadataReady);
      mediaElement.removeEventListener('play', playMedia);
      mediaElement.removeEventListener('pause', pauseMedia); // Unregister media from store.

      unregister(mediaSourceId);
    };
  }, []); // Play/Pause media depending on isPaused status (via store).

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const action = mediaElement.paused ? play : pause;
    const debouncedAction = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["debounce"])(action, 100);

    if (isPaused !== mediaElement.paused) {
      debouncedAction();
    }

    return () => {
      debouncedAction.cancel();
    };
  }, [isPaused, mediaElement]);
  /*
   * Handling current time state,
   * updating its status in the store,
   * listening the `timeupdate` element event.
   */

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const throttledTimeChange = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["throttle"])(time => setCurrentTime(time), MEDIA_CURRENT_TIME_THRESHOLD, {
      leading: true,
      trailing: false
    });

    const onTimeUpdate = e => throttledTimeChange(e.target.currentTime);

    mediaElement.addEventListener('timeupdate', onTimeUpdate);
    return () => {
      throttledTimeChange.cancel();
      mediaElement.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [mediaElement, setCurrentTime]);
  /*
   * Change the playing state of the media,
   * depending on the current time
   * defined in the store.
   */

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
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
  }, [mediaElement, currentTime]);
  return null;
}

/***/ }),

/***/ "./src/extending/media-blocks/view.js":
/*!********************************************!*\
  !*** ./src/extending/media-blocks/view.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/extending/utils.js");
/* harmony import */ var _block_library_play_pause_button_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../block-library/play-pause-button/view */ "./src/block-library/play-pause-button/view.js");
/* harmony import */ var _block_library_play_button_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../block-library/play-button/view */ "./src/block-library/play-button/view.js");
/* harmony import */ var _block_library_pause_button_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../block-library/pause-button/view */ "./src/block-library/pause-button/view.js");
/* harmony import */ var _block_library_time_position_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../block-library/time-position/view */ "./src/block-library/time-position/view.js");
/* harmony import */ var _media_manager_format_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @media-manager/format-library */ "./packages/format-library/build-module/index.js");
/* harmony import */ var _media_source_provider_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./media-source-provider-wrapper */ "./src/extending/media-blocks/media-source-provider-wrapper/index.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */









function renderPlayerComponentBlock(mediaSourceId, playerButtonElement) {
  let PlayerButtonComponent;

  if (playerButtonElement.classList.contains('wp-block-media-manager-play-pause-button')) {
    PlayerButtonComponent = _block_library_play_pause_button_view__WEBPACK_IMPORTED_MODULE_3__["default"];
  } else if (playerButtonElement.classList.contains('wp-block-media-manager-play-button')) {
    PlayerButtonComponent = _block_library_play_button_view__WEBPACK_IMPORTED_MODULE_4__["default"];
  } else if (playerButtonElement.classList.contains('wp-block-media-manager-pause-button')) {
    PlayerButtonComponent = _block_library_pause_button_view__WEBPACK_IMPORTED_MODULE_5__["default"];
  } else {
    PlayerButtonComponent = _block_library_time_position_view__WEBPACK_IMPORTED_MODULE_6__["default"];
  }

  if (!PlayerButtonComponent) {
    return;
  }

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PlayerButtonComponent, {
    mediaSourceId: mediaSourceId
  }), playerButtonElement);
}

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  // Media Providers.
  const mediaElements = document.querySelectorAll('[data-media-source-id]');

  if (mediaElements.length) {
    mediaElements.forEach(function (media) {
      const {
        mediaSourceId,
        mediaSourceType
      } = media.dataset;
      const {
        domTypeName
      } = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getBlockSourceProps"])(mediaSourceType);
      const query = `[data-media-source-id="${mediaSourceId}"] ${domTypeName}`;
      const mediaElement = document.querySelector(query);

      if (mediaElement) {
        // if ( mediaElement && mediaElement.parentElement ) { // Keep wondering why checking parentElement.
        Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_source_provider_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"], {
          mediaSourceId: mediaSourceId,
          elementType: domTypeName,
          querySelector: query,
          mediaElement: mediaElement
        }), mediaElement);
      }
    });
  } // Media Consumers.


  const mediaSourceConsumers = document.querySelectorAll('[data-media-source-reference]'); // CSS class defined for the player button blocks.

  const buttonBlockCssClass = 'wp-media-manager-player-button'; // CSS class defined for the time-position block.

  const timePositionBlockCssClass = 'wp-block-media-manager-time-position-display'; // CSS class defined for the media-link format type.

  const linkFormatCssClass = 'media-link-format-type';

  if (mediaSourceConsumers !== null && mediaSourceConsumers !== void 0 && mediaSourceConsumers.length) {
    mediaSourceConsumers.forEach(function (mediaCenterBlock) {
      const {
        mediaSourceReference
      } = mediaCenterBlock === null || mediaCenterBlock === void 0 ? void 0 : mediaCenterBlock.dataset;
      /*
       * Check is the consumer is a actionable block:
       * - media-manager/play-button block.
       * - media-manager/pause-button block.
       * - media-manager/play-pause-button block.
       * - media-manager/time-position block.
       */

      const isButtonBlock = mediaCenterBlock.classList.contains(buttonBlockCssClass);
      const isTimePositionBlock = mediaCenterBlock.classList.contains(timePositionBlockCssClass);

      if (isButtonBlock || isTimePositionBlock) {
        renderPlayerComponentBlock(mediaSourceReference, mediaCenterBlock);
      } else {
        /*
         * Consumer is a wrapper block:
         * - media-manager/media-center block.
         * - media-manager/media-player block.
         */
        // Query player button blocks.
        const mediaPlayerButtons = mediaCenterBlock.querySelectorAll(`.${buttonBlockCssClass}, .${timePositionBlockCssClass}`);

        if (mediaPlayerButtons !== null && mediaPlayerButtons !== void 0 && mediaPlayerButtons.length) {
          mediaPlayerButtons.forEach(function (playerButtonElement) {
            renderPlayerComponentBlock(mediaSourceReference, playerButtonElement);
          });
        }
      }

      const mediaFormatLinks = mediaCenterBlock.querySelectorAll(`.${linkFormatCssClass}`);
      mediaFormatLinks.forEach(function (mediaFormatLinkElement) {
        const {
          hash: timehash,
          text
        } = mediaFormatLinkElement;
        Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_manager_format_library__WEBPACK_IMPORTED_MODULE_7__["MediaLinkViewFormatType"], {
          timestamp: Number(timehash.substr(1)),
          mediaSourceId: mediaSourceReference,
          elementRef: mediaFormatLinkElement
        }, text), mediaFormatLinkElement);
      });
    });
  }
});

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

/***/ "./src/extending/view.js":
/*!*******************************!*\
  !*** ./src/extending/view.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _media_blocks_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media-blocks/view */ "./src/extending/media-blocks/view.js");
/**
 * Internal dependencies
 */


/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_library_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-library/view */ "./src/block-library/view.js");
/* harmony import */ var _extending_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extending/view */ "./src/extending/view.js");
/**
 * Internal dependencies
 */



/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

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
//# sourceMappingURL=view.js.map