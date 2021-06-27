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

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icons */ "./src/components/icons/index.js");
/* harmony import */ var _components_hooks_use_media_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hooks/use-media-store */ "./src/components/hooks/use-media-store/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PauseBlock(_ref) {
  var mediaSourceId = _ref.mediaSourceId;

  var _useMediaStore = Object(_components_hooks_use_media_store__WEBPACK_IMPORTED_MODULE_3__["default"])(mediaSourceId),
      pause = _useMediaStore.pause,
      className = _useMediaStore.className;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "wp-media-manager-player-button__button ".concat(className),
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_icons__WEBPACK_IMPORTED_MODULE_2__["PlayerPauseIcon"], null),
    onClick: pause
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
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icons */ "./src/components/icons/index.js");
/* harmony import */ var _components_hooks_use_media_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hooks/use-media-store */ "./src/components/hooks/use-media-store/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PlayBlock(_ref) {
  var mediaSourceId = _ref.mediaSourceId;

  var _useMediaStore = Object(_components_hooks_use_media_store__WEBPACK_IMPORTED_MODULE_3__["default"])(mediaSourceId),
      play = _useMediaStore.play,
      className = _useMediaStore.className;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "wp-media-manager-player-button__button ".concat(className),
    icon: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_icons__WEBPACK_IMPORTED_MODULE_2__["PlayerPlayIcon"], null),
    onClick: play
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
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/icons */ "./src/components/icons/index.js");
/* harmony import */ var _components_hooks_use_media_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/hooks/use-media-store */ "./src/components/hooks/use-media-store/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PlayPauseBlock(_ref) {
  var mediaSourceId = _ref.mediaSourceId;

  var _useMediaStore = Object(_components_hooks_use_media_store__WEBPACK_IMPORTED_MODULE_3__["default"])(mediaSourceId),
      isPaused = _useMediaStore.isPaused,
      toggle = _useMediaStore.toggle,
      className = _useMediaStore.className;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "wp-media-manager-player-button__button ".concat(className),
    icon: isPaused ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_icons__WEBPACK_IMPORTED_MODULE_2__["PlayerPlayPauseIcon"], null) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_icons__WEBPACK_IMPORTED_MODULE_2__["PlayerPauseIcon"], null),
    onClick: toggle
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
/* harmony import */ var _components_hooks_use_current_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/hooks/use-current-time */ "./src/components/hooks/use-current-time/index.js");


/**
 * Internal dependencies
 */

function TimePositionDisplayEditBlock(_ref) {
  var mediaSourceId = _ref.mediaSourceId;

  var _useCurrentTime = Object(_components_hooks_use_current_time__WEBPACK_IMPORTED_MODULE_1__["default"])(mediaSourceId),
      currentTimeFormatted = _useCurrentTime.currentTimeFormatted;

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

/***/ "./src/components/hooks/use-current-time/index.js":
/*!********************************************************!*\
  !*** ./src/components/hooks/use-current-time/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCurrentTime; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/utils/time */ "./src/lib/utils/time.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


function useCurrentTime(id) {
  return Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    var currentTime = select(_store__WEBPACK_IMPORTED_MODULE_2__["store"]).getMediaSourceCurrentTime(id) || 0;
    return {
      currentTime: currentTime,
      currentTimeFormatted: Object(_lib_utils_time__WEBPACK_IMPORTED_MODULE_1__["convertSecondsToTimeCode"])(currentTime)
    };
  }, [id]);
}

/***/ }),

/***/ "./src/components/hooks/use-media-store/index.js":
/*!*******************************************************!*\
  !*** ./src/components/hooks/use-media-store/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMediaStore; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/constants */ "./src/store/constants.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



function useMediaStore(id) {
  var _useSelect = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useSelect"])(function (select) {
    var playingState = select(_store__WEBPACK_IMPORTED_MODULE_2__["store"]).getMediaPlayerState(id);
    return {
      playingState: playingState,
      isPaused: typeof playingState === 'undefined' || playingState === _store_constants__WEBPACK_IMPORTED_MODULE_3__["STATE_PAUSED"]
    };
  }, [id]),
      isPaused = _useSelect.isPaused,
      playingState = _useSelect.playingState;

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])(_store__WEBPACK_IMPORTED_MODULE_2__["store"]),
      playMediaSource = _useDispatch.playMediaSource,
      pauseMediaSource = _useDispatch.pauseMediaSource,
      toggleMediaSource = _useDispatch.toggleMediaSource,
      setMediaSourceCurrentTime = _useDispatch.setMediaSourceCurrentTime,
      registerMediaSource = _useDispatch.registerMediaSource,
      unregisterMediaSource = _useDispatch.unregisterMediaSource,
      updateMediaSourceData = _useDispatch.updateMediaSourceData;

  return {
    className: isPaused ? 'is-media-paused' : '',
    playingState: playingState,
    isPaused: isPaused,
    play: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
      return playMediaSource(id);
    }, [id]),
    pause: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
      return pauseMediaSource(id);
    }, [id]),
    toggle: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
      return toggleMediaSource(id);
    }, [id]),
    register: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (id, data) {
      return registerMediaSource(id, data);
    }, [id]),
    unregister: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (mediaSourceId) {
      return unregisterMediaSource(mediaSourceId);
    }, []),
    updateData: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (mediaSourceI, data) {
      return updateMediaSourceData(mediaSourceI, data);
    }, []),
    setCurrentTime: Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (timestamp) {
      return setMediaSourceCurrentTime(id, timestamp);
    }, [id])
  };
}

/***/ }),

/***/ "./src/components/icons/index.js":
/*!***************************************!*\
  !*** ./src/components/icons/index.js ***!
  \***************************************/
/*! exports provided: MovieIcon, MediaCenterIcon, MediaLinkIcon, withScale, PlayerPlayIcon, PlayerPauseIcon, ControlForwardFiveIcon, ControlBackFiveIcon, PlayerPlayPauseIcon, PlayerIcon, TimePositionIcon */
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);



/**
 * WordPress dependencies
 */


var MovieIcon = function MovieIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
  }));
};
var MediaCenterIcon = function MediaCenterIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M7,11v2h10v-2c0-1.86,1.28-3.41,3-3.86V6c0-1.65-1.35-3-3-3H7C5.35,3,4,4.35,4,6v1.14C5.72,7.59,7,9.14,7,11z"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("path", {
    d: "M21,9c-1.1,0-2,0.9-2,2v4H5v-4c0-1.1-0.9-2-2-2s-2,0.9-2,2v5c0,1.65,1.35,3,3,3v1c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-1 h12v1c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-1c1.65,0,3-1.35,3-3v-5C23,9.9,22.1,9,21,9z"
  }));
};
var MediaLinkIcon = function MediaLinkIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "24",
    height: "24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M8 11h8v2H8zm12.1 1H22c0-2.76-2.24-5-5-5h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1zM3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM19 12h-2v3h-3v2h3v3h2v-3h3v-2h-3z"
  }));
};
var withScale = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__["createHigherOrderComponent"])(function (Icon) {
  return function (props) {
    if (!(props !== null && props !== void 0 && props.scale) || props.scale === 1) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Icon, props);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Icon, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      width: 24 * props.scale,
      height: 24 * props.scale
    }));
  };
}, 'withIconScale');
var PlayerPlayIcon = withScale(function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    className: "player-play-icon",
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
  }));
});
var PlayerPauseIcon = withScale(function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    className: "player-pause-icon",
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M11,16H9V8h2V16z M15,16h-2V8h2V16z"
  }));
});
var ControlForwardFiveIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M12.7049 2V6C8.30658 6 4.74414 9.58 4.74414 14C4.74414 18.42 8.30658 22 12.7049 22C17.1032 22 20.6656 18.42 20.6656 14H18.6755C18.6755 17.31 15.9987 20 12.7049 20C9.41113 20 6.73433 17.31 6.73433 14C6.73433 10.69 9.41113 8 12.7049 8V12L17.6804 7L12.7049 2ZM11.6501 12.73L11.4013 14.9L12.068 15.06C12.0753 15.0526 12.0827 15.0447 12.0901 15.0366C12.1131 15.0116 12.1375 14.9851 12.1675 14.97C12.1874 14.96 12.2073 14.9475 12.2272 14.935C12.2471 14.9225 12.2671 14.91 12.287 14.9C12.3268 14.88 12.3865 14.86 12.4362 14.85C12.486 14.84 12.5556 14.83 12.6352 14.83C12.7447 14.83 12.8542 14.85 12.9338 14.88C13.0134 14.91 13.083 14.96 13.1427 15.03C13.2024 15.1 13.2422 15.17 13.2721 15.27C13.302 15.37 13.3119 15.47 13.3119 15.58V15.58C13.3119 15.69 13.3119 15.79 13.2821 15.89C13.2522 15.99 13.2124 16.07 13.1726 16.14C13.1328 16.21 13.0631 16.27 12.9935 16.31C12.9238 16.35 12.8343 16.37 12.7248 16.37C12.5556 16.37 12.4163 16.31 12.3069 16.22C12.1974 16.13 12.1377 15.99 12.1178 15.81H11.2819C11.2819 16.01 11.3317 16.19 11.4113 16.34C11.4909 16.49 11.5904 16.63 11.7297 16.73C11.869 16.83 12.0183 16.92 12.1874 16.97C12.3566 17.02 12.5357 17.05 12.7148 17.05C12.9636 17.05 13.1726 17 13.3517 16.93C13.5308 16.86 13.6801 16.75 13.7995 16.62C13.9189 16.49 14.0085 16.34 14.0682 16.17C14.1279 16 14.1577 15.82 14.1577 15.63C14.1577 15.41 14.1179 15.21 14.0682 15.03C14.0184 14.85 13.9289 14.7 13.8194 14.58C13.7099 14.46 13.5706 14.37 13.4114 14.3C13.2522 14.23 13.0731 14.2 12.8641 14.2C12.7945 14.2 12.7248 14.21 12.6651 14.22C12.6352 14.225 12.6054 14.2325 12.5755 14.24C12.5457 14.2475 12.5158 14.255 12.486 14.26C12.4263 14.27 12.3765 14.29 12.3367 14.31C12.3201 14.3183 12.3035 14.325 12.2876 14.3313C12.2654 14.3401 12.2446 14.3483 12.2272 14.36L12.3367 13.44H14.0284V12.73H11.6501Z"
}));
var ControlBackFiveIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M11.9412 2V6C16.3395 6 19.902 9.58 19.902 14C19.902 18.42 16.3395 22 11.9412 22C7.54291 22 3.98047 18.42 3.98047 14H5.97066C5.97066 17.31 8.64746 20 11.9412 20C15.235 20 17.9118 17.31 17.9118 14C17.9118 10.69 15.235 8 11.9412 8V12L6.96575 7L11.9412 2ZM10.8864 12.73L10.6376 14.9L11.3044 15.06C11.3117 15.0526 11.319 15.0447 11.3264 15.0366C11.3494 15.0116 11.3738 14.9851 11.4039 14.97C11.4238 14.96 11.4437 14.9475 11.4636 14.935C11.4835 14.9225 11.5034 14.91 11.5233 14.9C11.5631 14.88 11.6228 14.86 11.6725 14.85C11.7223 14.84 11.792 14.83 11.8716 14.83C11.981 14.83 12.0905 14.85 12.1701 14.88C12.2497 14.91 12.3194 14.96 12.3791 15.03C12.4388 15.1 12.4786 15.17 12.5084 15.27C12.5383 15.37 12.5482 15.47 12.5482 15.58V15.58C12.5482 15.69 12.5482 15.79 12.5184 15.89C12.4885 15.99 12.4487 16.07 12.4089 16.14C12.3691 16.21 12.2995 16.27 12.2298 16.31C12.1601 16.35 12.0706 16.37 11.9611 16.37C11.792 16.37 11.6526 16.31 11.5432 16.22C11.4337 16.13 11.374 15.99 11.3541 15.81H10.5182C10.5182 16.01 10.568 16.19 10.6476 16.34C10.7272 16.49 10.8267 16.63 10.966 16.73C11.1053 16.83 11.2546 16.92 11.4238 16.97C11.5929 17.02 11.7721 17.05 11.9512 17.05C12.1999 17.05 12.4089 17 12.588 16.93C12.7672 16.86 12.9164 16.75 13.0358 16.62C13.1552 16.49 13.2448 16.34 13.3045 16.17C13.3642 16 13.3941 15.82 13.3941 15.63C13.3941 15.41 13.3543 15.21 13.3045 15.03C13.2547 14.85 13.1652 14.7 13.0557 14.58C12.9463 14.46 12.807 14.37 12.6477 14.3C12.4885 14.23 12.3094 14.2 12.1004 14.2C12.0308 14.2 11.9611 14.21 11.9014 14.22C11.8716 14.225 11.8417 14.2325 11.8119 14.24C11.782 14.2475 11.7522 14.255 11.7223 14.26C11.6626 14.27 11.6128 14.29 11.573 14.31C11.5564 14.3183 11.5398 14.325 11.5239 14.3313C11.5017 14.3401 11.481 14.3483 11.4636 14.36L11.573 13.44H13.2647V12.73H10.8864Z"
}));
var PlayerPlayPauseIcon = withScale(function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
    className: "player-play-pause-icon",
    xmlns: "https://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
    d: "M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M11,16H9V8h2V16z M12,16V8l5,4L12,16z"
  }));
});
var PlayerIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"
}));
var TimePositionIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Path"], {
  d: "M21,5H3C1.9,5,1,5.9,1,7v10c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V7C23,5.9,22.1,5,21,5z M18,17H6V7h12V17z"
}));

/***/ }),

/***/ "./src/components/media-link-format-type/view.js":
/*!*******************************************************!*\
  !*** ./src/components/media-link-format-type/view.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaLinkFormatType; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./src/store/index.js");


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


function MediaLinkFormatType(_ref) {
  var mediaSourceId = _ref.mediaSourceId,
      elRef = _ref.elRef;
  var timehash = elRef.hash,
      innerHTML = elRef.innerHTML;
  var timestamp = Number(timehash.substr(1)); // Use dispatch instead of use MediaStore hook,
  // to avoid unnecessary rendering.

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])(_store__WEBPACK_IMPORTED_MODULE_2__["store"]),
      setMediaSourceCurrentTime = _useDispatch.setMediaSourceCurrentTime,
      playMediaSource = _useDispatch.playMediaSource;

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: timehash,
    onClick: function onClick(event) {
      event.preventDefault();
      setMediaSourceCurrentTime(mediaSourceId, timestamp);
      playMediaSource(mediaSourceId);
    }
  }, innerHTML);
}

/***/ }),

/***/ "./src/extending/extended-blocks.js":
/*!******************************************!*\
  !*** ./src/extending/extended-blocks.js ***!
  \******************************************/
/*! exports provided: EXTENDED_MEDIA_BLOCKS, EXTEND_BLOCKS_WITH_MEDIA, MEDIA_BLOCKS_ATTRIBUTE_SCHEMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTENDED_MEDIA_BLOCKS", function() { return EXTENDED_MEDIA_BLOCKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTEND_BLOCKS_WITH_MEDIA", function() { return EXTEND_BLOCKS_WITH_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_BLOCKS_ATTRIBUTE_SCHEMA", function() { return MEDIA_BLOCKS_ATTRIBUTE_SCHEMA; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


var _MEDIA_BLOCKS_ATTRIBU;

var BLOCK_NAME_CORE_VIDEO = 'core/video';
var BLOCK_NAME_CORE_AUDIO = 'core/audio';
var BLOCK_NAME_CORE_PARAGRAPH = 'core/paragraph';
var BLOCK_NAME_CORE_HEADING = 'core/heading';
var BLOCK_NAME_CORE_QUOTE = 'core/quote';
var BLOCK_NAME_CORE_LIST = 'core/list';
var EXTENDED_MEDIA_BLOCKS = [BLOCK_NAME_CORE_AUDIO, BLOCK_NAME_CORE_VIDEO];
var EXTEND_BLOCKS_WITH_MEDIA = [BLOCK_NAME_CORE_PARAGRAPH, BLOCK_NAME_CORE_HEADING, BLOCK_NAME_CORE_QUOTE, BLOCK_NAME_CORE_LIST];
var MEDIA_BLOCKS_ATTRIBUTE_SCHEMA = (_MEDIA_BLOCKS_ATTRIBU = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_MEDIA_BLOCKS_ATTRIBU, BLOCK_NAME_CORE_VIDEO, {
  name: 'src',
  type: 'string',
  domTypeName: 'video'
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_MEDIA_BLOCKS_ATTRIBU, BLOCK_NAME_CORE_AUDIO, {
  name: 'src',
  type: 'string',
  domTypeName: 'audio'
}), _MEDIA_BLOCKS_ATTRIBU);

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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store */ "./src/store/index.js");
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/constants */ "./src/store/constants.js");
/* harmony import */ var _components_hooks_use_media_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/hooks/use-media-store */ "./src/components/hooks/use-media-store/index.js");
/**
 * External dependencies
 */

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */




var MEDIA_CURRENT_TIME_THRESHOLD = 1000;
var MEDIA_CURRENT_STATE_THRESHOLD = 1000;
function MediaSourceProviderWrapper(_ref) {
  var mediaElement = _ref.mediaElement,
      mediaSourceId = _ref.mediaSourceId,
      elementType = _ref.elementType,
      querySelector = _ref.querySelector;

  var _useMediaStore = Object(_components_hooks_use_media_store__WEBPACK_IMPORTED_MODULE_5__["default"])(mediaSourceId),
      isPaused = _useMediaStore.isPaused,
      setCurrentTime = _useMediaStore.setCurrentTime,
      playMedia = _useMediaStore.play,
      pauseMedia = _useMediaStore.pause,
      register = _useMediaStore.register,
      unregister = _useMediaStore.unregister,
      updateData = _useMediaStore.updateData;

  var currentTime = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["useSelect"])(function (select) {
    return select(_store__WEBPACK_IMPORTED_MODULE_3__["store"]).getMediaSourceCurrentTime(mediaSourceId);
  }, [mediaSourceId]);

  function play() {
    mediaElement.play().catch(function () {});
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

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    register(mediaSourceId, {
      // source: mediaSource,
      elementType: elementType,
      state: _store_constants__WEBPACK_IMPORTED_MODULE_4__["STATE_PAUSED"],
      querySelector: querySelector
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

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var action = mediaElement.paused ? play : pause;
    var debouncedAction = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["debounce"])(action, 100);

    if (isPaused !== mediaElement.paused) {
      debouncedAction();
    }

    return function () {
      debouncedAction.cancel();
    };
  }, [isPaused, mediaElement]);
  /*
   * Handling current time state,
   * updating its status in the store,
   * listening the `timeupdate` element event.
   */

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var throttledTimeChange = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["throttle"])(function (time) {
      return setCurrentTime(time);
    }, MEDIA_CURRENT_TIME_THRESHOLD, {
      leading: true,
      trailing: false
    });

    var onTimeUpdate = function onTimeUpdate(e) {
      return throttledTimeChange(e.target.currentTime);
    };

    mediaElement.addEventListener('timeupdate', onTimeUpdate);
    return function () {
      throttledTimeChange.cancel();
      mediaElement.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [mediaElement, setCurrentTime]);
  /*
   * Change the playing state of the media,
   * depending on the current time
   * defined in the store.
   */

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
/* harmony import */ var _components_media_link_format_type_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/media-link-format-type/view */ "./src/components/media-link-format-type/view.js");
/* harmony import */ var _lib_render__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/render */ "./src/lib/render/index.js");
/* harmony import */ var _media_source_provider_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media-source-provider-wrapper */ "./src/extending/media-blocks/media-source-provider-wrapper/index.js");


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */









/**
 * Hlper function to render the Player Button Block, in the front-end.
 *
 * @param {string} mediaSourceId Media source ID
 * @param {elementType} playerButtonElement
 * @returns {React.Component} Media player button
 */

function renderPlayerComponentBlock(mediaSourceId, playerButtonElement) {
  var PlayerButtonComponent;

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
  var mediaElements = document.querySelectorAll('[data-media-source-id]');

  if (mediaElements.length) {
    mediaElements.forEach(function (media) {
      var _media$dataset = media.dataset,
          mediaSourceId = _media$dataset.mediaSourceId,
          mediaSourceType = _media$dataset.mediaSourceType;

      var _getBlockSourceProps = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getBlockSourceProps"])(mediaSourceType),
          domTypeName = _getBlockSourceProps.domTypeName;

      var query = "[data-media-source-id=\"".concat(mediaSourceId, "\"] ").concat(domTypeName);
      var mediaElement = document.querySelector(query);

      if (mediaElement) {
        // if ( mediaElement && mediaElement.parentElement ) { // Keep wondering why checking parentElement.
        Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_media_source_provider_wrapper__WEBPACK_IMPORTED_MODULE_9__["default"], {
          mediaSourceId: mediaSourceId,
          elementType: domTypeName,
          querySelector: query,
          mediaElement: mediaElement
        }), mediaElement);
      }
    });
  } // Media Consumers.


  var mediaSourceConsumers = document.querySelectorAll('[data-media-source-reference]'); // CSS class defined for the player button blocks.

  var buttonBlockCssClass = 'wp-media-manager-player-button';
  var linkFormatCssClass = 'media-link-format-type';

  if (mediaSourceConsumers !== null && mediaSourceConsumers !== void 0 && mediaSourceConsumers.length) {
    mediaSourceConsumers.forEach(function (mediaCenterBlock) {
      var _mediaCenterBlock$dat = mediaCenterBlock === null || mediaCenterBlock === void 0 ? void 0 : mediaCenterBlock.dataset,
          mediaSourceReference = _mediaCenterBlock$dat.mediaSourceReference; // Check is the consumer is a player-button block


      var isButtonBlock = mediaCenterBlock.classList.contains(buttonBlockCssClass);

      if (isButtonBlock) {
        renderPlayerComponentBlock(mediaSourceReference, mediaCenterBlock);
      } else {
        // Query player button blocks.
        var mediaPlayerButtons = mediaCenterBlock.querySelectorAll(".".concat(buttonBlockCssClass));

        if (mediaPlayerButtons !== null && mediaPlayerButtons !== void 0 && mediaPlayerButtons.length) {
          mediaPlayerButtons.forEach(function (playerButtonElement) {
            renderPlayerComponentBlock(mediaSourceReference, playerButtonElement);
          });
        }
      }

      var mediaFormatLinks = mediaCenterBlock.querySelectorAll(".".concat(linkFormatCssClass));
      mediaFormatLinks.forEach(function (mediaFormatLinkElement) {
        Object(_lib_render__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_media_link_format_type_view__WEBPACK_IMPORTED_MODULE_7__["default"], {
          elRef: mediaFormatLinkElement,
          mediaSourceId: mediaSourceReference
        }), mediaFormatLinkElement);
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
/* harmony import */ var _extended_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extended-blocks */ "./src/extending/extended-blocks.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function isMediaBlockListed(name) {
  return _extended_blocks__WEBPACK_IMPORTED_MODULE_2__["EXTENDED_MEDIA_BLOCKS"].indexOf(name) >= 0;
}

function isBlockListed(name) {
  return name && _extended_blocks__WEBPACK_IMPORTED_MODULE_2__["EXTEND_BLOCKS_WITH_MEDIA"].indexOf(name) >= 0;
}

function hasBlockValidScheme(name, attributes) {
  // check if the scheme is defined.
  if (!_extended_blocks__WEBPACK_IMPORTED_MODULE_2__["MEDIA_BLOCKS_ATTRIBUTE_SCHEMA"][name]) {
    return false;
  }

  var blockSchema = _extended_blocks__WEBPACK_IMPORTED_MODULE_2__["MEDIA_BLOCKS_ATTRIBUTE_SCHEMA"][name]; // check if the attribute name exists in the scheme.

  if (!attributes[blockSchema.name]) {
    return false;
  } // check attribute type.


  if (!attributes[blockSchema.name].type || attributes[blockSchema.name].type !== blockSchema.type) {
    return false;
  }

  return true;
}

function shouldExtendMediaBlock(name, settings) {
  if (!isMediaBlockListed(name)) {
    return false;
  }

  return hasBlockValidScheme(name, settings === null || settings === void 0 ? void 0 : settings.attributes);
}
function getBlockSourceProps(name) {
  return _extended_blocks__WEBPACK_IMPORTED_MODULE_2__["MEDIA_BLOCKS_ATTRIBUTE_SCHEMA"] === null || _extended_blocks__WEBPACK_IMPORTED_MODULE_2__["MEDIA_BLOCKS_ATTRIBUTE_SCHEMA"] === void 0 ? void 0 : _extended_blocks__WEBPACK_IMPORTED_MODULE_2__["MEDIA_BLOCKS_ATTRIBUTE_SCHEMA"][name];
}
function shouldExtendBlockWithMedia(name) {
  var selectedBlock = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["select"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["store"]).getSelectedBlock();

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

/***/ "./src/lib/render/index.js":
/*!*********************************!*\
  !*** ./src/lib/render/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderReplace; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

function renderReplace(Component, reference) {
  var replace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!replace) {
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["render"])(Component, reference);
  }

  var tempReference = document.createElement('div');
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["render"])(Component, tempReference, function () {
    reference.replaceWith.apply(reference, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Array.from(tempReference.childNodes)));
  });
}

/***/ }),

/***/ "./src/lib/utils/time.js":
/*!*******************************!*\
  !*** ./src/lib/utils/time.js ***!
  \*******************************/
/*! exports provided: convertSecondsToTimeCode, convertTimeCodeToSeconds, isTimeformat, getTimeformatMatch, hasMultipleTimeformats, isMarkfownTimeformat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSecondsToTimeCode", function() { return convertSecondsToTimeCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTimeCodeToSeconds", function() { return convertTimeCodeToSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeformat", function() { return isTimeformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeformatMatch", function() { return getTimeformatMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasMultipleTimeformats", function() { return hasMultipleTimeformats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMarkfownTimeformat", function() { return isMarkfownTimeformat; });
var timecodeRegExp = new RegExp(/^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/);
var multiple = /(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)/;
var singleTimecodeRegExp = new RegExp(multiple, 'g');
var multipleTimecodeRegExp = new RegExp(multiple, 'gm');
var markdownTimeformat = /\[((?:(?:(?:[01]?\d|2[0-3]:):)?[0-5]?\d:)?[0-5]?\d)\](?:\(([^\(\)]+)\))?.$/;
var markdownTimeformatRegExp = new RegExp(markdownTimeformat);
function convertSecondsToTimeCode(seconds) {
  if (!seconds) {
    return '00:00:00';
  }

  return new Date(seconds * 1000).toISOString().substr(11, 8);
}
var convertTimeCodeToSeconds = function convertTimeCodeToSeconds(string) {
  if (!isTimeformat(string)) {
    return;
  }

  var parts = string.match(timecodeRegExp);

  if (!parts) {
    return;
  } // seconds.


  var time = Number(parts[3]); // minutes.

  if (parts[2]) {
    time += Number(parts[2]) * 60;
  } // hours.


  if (parts[1]) {
    time += Number(parts[1]) * 60 * 60;
  }

  return time;
};
var isTimeformat = function isTimeformat(value) {
  return timecodeRegExp.test(value);
};
var getTimeformatMatch = function getTimeformatMatch(value) {
  return singleTimecodeRegExp.exec(value);
};
var hasMultipleTimeformats = function hasMultipleTimeformats(value) {
  return value.match(multipleTimecodeRegExp);
};
var isMarkfownTimeformat = function isMarkfownTimeformat(value) {
  return markdownTimeformatRegExp.exec(value);
};

/***/ }),

/***/ "./src/store/constants.js":
/*!********************************!*\
  !*** ./src/store/constants.js ***!
  \********************************/
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
var STORE_NAME = 'media-manager/media-source'; // Media statuses

var STATE_PLAYING = 'is-playing';
var STATE_ERROR = 'is-error';
var STATE_PAUSED = 'is-paused';
var MEDIA_NOT_DEFINED = 'media-not-defined-yet';

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-definition */ "./src/store/store-definition.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/store/constants.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


 // @TODO: check compatibility with old core versions

/*
 * Register the store, considering the API changes.
 * if ( typeof createReduxStore !== 'undefined' ) {
 * 	const store = createReduxStore( STORE_NAME, storeDefinition );
 * 	register( store );
 * } else {
 * 	registerStore( STORE_NAME, storeDefinition );
 * }
 */

var store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["createReduxStore"])(_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_NAME"], _store_definition__WEBPACK_IMPORTED_MODULE_1__["default"]);
Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["register"])(store);

/***/ }),

/***/ "./src/store/store-definition.js":
/*!***************************************!*\
  !*** ./src/store/store-definition.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/store/constants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Internal dependencies
 */

var DEFAULT_STATE = {
  sources: {},
  default: null
};
var actions = {
  registerMediaSource: function registerMediaSource(id, mediaSourceState) {
    return {
      type: 'REGISTER_MEDIA_SOURCE',
      id: id,
      mediaSourceState: mediaSourceState
    };
  },
  updateMediaSourceData: function updateMediaSourceData(id, data) {
    return {
      type: 'UPDATE_MEDIA_SOURCE_DATA',
      id: id,
      data: data
    };
  },
  unregisterMediaSource: function unregisterMediaSource(id) {
    return {
      type: 'UNREGISTER_MEDIA_SOURCE',
      id: id
    };
  },
  setDefaultMediaSource: function setDefaultMediaSource(id) {
    return {
      type: 'SET_DEFAULT_MEDIA_SOURCE',
      id: id
    };
  },
  playMediaSource: function playMediaSource(id) {
    return {
      type: 'SET_MEDIA_PLAYER_STATE',
      id: id,
      state: _constants__WEBPACK_IMPORTED_MODULE_1__["STATE_PLAYING"]
    };
  },
  toggleMediaSource: function toggleMediaSource(id) {
    return {
      type: 'TOGGLE_MEDIA_PLAYER_STATE',
      id: id
    };
  },
  pauseMediaSource: function pauseMediaSource(id) {
    return {
      type: 'SET_MEDIA_PLAYER_STATE',
      id: id,
      state: _constants__WEBPACK_IMPORTED_MODULE_1__["STATE_PAUSED"]
    };
  },
  errorMediaSource: function errorMediaSource(id) {
    return {
      type: 'SET_MEDIA_PLAYER_STATE',
      id: id,
      state: _constants__WEBPACK_IMPORTED_MODULE_1__["STATE_ERROR"]
    };
  },
  setMediaSourceCurrentTime: function setMediaSourceCurrentTime(id, currentTime) {
    return {
      type: 'SET_MEDIA_PLAYER_CURRENT_TIME',
      id: id,
      currentTime: currentTime
    };
  }
};
var selectors = {
  getMediaSources: function getMediaSources(state) {
    return state.sources;
  },
  getMediaSourceById: function getMediaSourceById(state, id) {
    var _state$sources;

    if (id === _constants__WEBPACK_IMPORTED_MODULE_1__["MEDIA_NOT_DEFINED"]) {
      return;
    }

    return (_state$sources = state.sources) === null || _state$sources === void 0 ? void 0 : _state$sources[id];
  },

  /**
   * Retunr the default media source.
   * - the default one in case it's defined.
   * - the first one in case there are sources defined
   * - null when no media sources :-o
   *
   * @param {object} state
   * @returns {string|null} default media source ID.
   */
  getDefaultMediaSource: function getDefaultMediaSource(state) {
    var playerId = null;
    var keys = Object.keys(state.sources);

    if (state.default) {
      playerId = state.default;
    } else if (keys !== null && keys !== void 0 && keys.length) {
      playerId = state.sources[keys[0]].id;
    }

    if (!playerId) {
      return;
    }

    return state.sources[playerId];
  },
  getMediaPlayerState: function getMediaPlayerState(state, id) {
    var _state$sources2;

    var defaultMediaSource = id ? (_state$sources2 = state.sources) === null || _state$sources2 === void 0 ? void 0 : _state$sources2[id] : selectors.getDefaultMediaSource(state);
    return defaultMediaSource === null || defaultMediaSource === void 0 ? void 0 : defaultMediaSource.state;
  },
  getMediaSourceCurrentTime: function getMediaSourceCurrentTime(state, id) {
    var _state$sources3;

    var defaultMediaSource = id ? (_state$sources3 = state.sources) === null || _state$sources3 === void 0 ? void 0 : _state$sources3[id] : selectors.getDefaultMediaSource(state);
    return defaultMediaSource === null || defaultMediaSource === void 0 ? void 0 : defaultMediaSource.currentTime;
  },
  getMediaSourceDuration: function getMediaSourceDuration(state, id) {
    var _state$sources4, _state$sources4$id;

    if (!id) {
      var defaultMediaSource = selectors.getDefaultMediaSource(state);
      return defaultMediaSource === null || defaultMediaSource === void 0 ? void 0 : defaultMediaSource.duration;
    }

    return (_state$sources4 = state.sources) === null || _state$sources4 === void 0 ? void 0 : (_state$sources4$id = _state$sources4[id]) === null || _state$sources4$id === void 0 ? void 0 : _state$sources4$id.duration;
  },
  getMediaSourceDomReference: function getMediaSourceDomReference(state, id) {
    var _state$sources5;

    var mediaSource = id ? (_state$sources5 = state.sources) === null || _state$sources5 === void 0 ? void 0 : _state$sources5[id] : selectors.getDefaultMediaSource(state);

    if (!mediaSource) {
      return;
    }

    if (!(mediaSource !== null && mediaSource !== void 0 && mediaSource.querySelector)) {
      return;
    }

    return document.querySelector(mediaSource.querySelector);
  }
};
var storeDefinition = {
  reducer: function reducer() {
    var _Object$keys;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    // Some actions doesn't have defined the source ID
    // On this case, we try to get safe getting the default ID.
    // Othewise, it will try to pick the first fro the souces list.
    var actionId = action.id || state.default || ((_Object$keys = Object.keys(state.sources)) === null || _Object$keys === void 0 ? void 0 : _Object$keys[0]); // Do not register when it sets explicitely as not defined.

    if (actionId === _constants__WEBPACK_IMPORTED_MODULE_1__["MEDIA_NOT_DEFINED"]) {
      return state;
    }

    switch (action.type) {
      case 'REGISTER_MEDIA_SOURCE':
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            sources: _objectSpread(_objectSpread({}, state.sources), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.id, _objectSpread({
              id: action.id
            }, action.mediaSourceState)))
          });
        }

      case 'UPDATE_MEDIA_SOURCE_DATA':
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            sources: _objectSpread(_objectSpread({}, state.sources), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, action.id, _objectSpread(_objectSpread({}, state.sources[action.id]), action.data)))
          });
        }

      case 'UNREGISTER_MEDIA_SOURCE':
        {
          var currentState = Object.assign({}, state);

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
          return _objectSpread(_objectSpread({}, state), {}, {
            default: action.id
          });
        }

      case 'SET_MEDIA_PLAYER_STATE':
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            sources: _objectSpread(_objectSpread({}, state.sources), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, actionId, _objectSpread(_objectSpread({}, state.sources[actionId]), {}, {
              state: action.state
            })))
          });
        }

      case 'TOGGLE_MEDIA_PLAYER_STATE':
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            sources: _objectSpread(_objectSpread({}, state.sources), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, actionId, _objectSpread(_objectSpread({}, state.sources[actionId]), {}, {
              state: state.sources[actionId].state === _constants__WEBPACK_IMPORTED_MODULE_1__["STATE_PLAYING"] ? _constants__WEBPACK_IMPORTED_MODULE_1__["STATE_PAUSED"] : _constants__WEBPACK_IMPORTED_MODULE_1__["STATE_PLAYING"]
            })))
          });
        }

      case 'SET_MEDIA_PLAYER_CURRENT_TIME':
        {
          return _objectSpread(_objectSpread({}, state), {}, {
            sources: _objectSpread(_objectSpread({}, state.sources), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, actionId, _objectSpread(_objectSpread({}, state.sources[actionId]), {}, {
              currentTime: action.currentTime
            })))
          });
        }
    }

    return state;
  },
  actions: actions,
  selectors: selectors
};
/* harmony default export */ __webpack_exports__["default"] = (storeDefinition);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _block_library_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block-library/view */ "./src/block-library/view.js");
/* harmony import */ var _extending_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extending/view */ "./src/extending/view.js");
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