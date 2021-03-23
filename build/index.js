(window["webpackJsonp_media_theater"] = window["webpackJsonp_media_theater"] || []).push([["style-index"],{

/***/ "./src/blocks/style.scss":
/*!*******************************!*\
  !*** ./src/blocks/style.scss ***!
  \*******************************/
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
/******/ 	var jsonpArray = window["webpackJsonp_media_theater"] = window["webpackJsonp_media_theater"] || [];
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

/***/ "./src/blocks/edit.js":
/*!****************************!*\
  !*** ./src/blocks/edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])(), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Media Theater – hello from the editor!', 'media-theater'));
}

/***/ }),

/***/ "./src/blocks/editor.scss":
/*!********************************!*\
  !*** ./src/blocks/editor.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('media-center/media-theater', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/save.js":
/*!****************************!*\
  !*** ./src/blocks/save.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"].save(), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Media Theater – hello from the saved content!', 'media-theater'));
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
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/**
 * External dependencies
 */

/**
 * Internal dependencies
 */



/***/ }),

/***/ "./src/store/constants.js":
/*!********************************!*\
  !*** ./src/store/constants.js ***!
  \********************************/
/*! exports provided: STORE_ID, STATE_PLAYING, STATE_ERROR, STATE_PAUSED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_ID", function() { return STORE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_PLAYING", function() { return STATE_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_ERROR", function() { return STATE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_PAUSED", function() { return STATE_PAUSED; });
// Store ID
var STORE_ID = 'media-theater/media-source'; // Media statuses

var STATE_PLAYING = 'is-playing';
var STATE_ERROR = 'is-error';
var STATE_PAUSED = 'is-paused';

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


 // Register the store, considering the API changes.

if (typeof _wordpress_data__WEBPACK_IMPORTED_MODULE_0__["createReduxStore"] !== 'undefined') {
  var store = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["createReduxStore"])(_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"], _store_definition__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["register"])(store);
} else {
  Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__["registerStore"])(_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"], _store_definition__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

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
    var _state$sources;

    var defaultMediaSource = id ? (_state$sources = state.sources) === null || _state$sources === void 0 ? void 0 : _state$sources[id] : selectors.getDefaultMediaSource(state);
    return defaultMediaSource === null || defaultMediaSource === void 0 ? void 0 : defaultMediaSource.state;
  },
  getMediaSourceCurrentTime: function getMediaSourceCurrentTime(state, id) {
    var _state$sources2;

    var defaultMediaSource = id ? (_state$sources2 = state.sources) === null || _state$sources2 === void 0 ? void 0 : _state$sources2[id] : selectors.getDefaultMediaSource(state);
    return defaultMediaSource === null || defaultMediaSource === void 0 ? void 0 : defaultMediaSource.currentTime;
  },
  getMediaSourceDuration: function getMediaSourceDuration(state, id) {
    var _state$sources3, _state$sources3$id;

    if (!id) {
      var defaultMediaSource = selectors.getDefaultMediaSource(state);
      return defaultMediaSource === null || defaultMediaSource === void 0 ? void 0 : defaultMediaSource.duration;
    }

    return (_state$sources3 = state.sources) === null || _state$sources3 === void 0 ? void 0 : (_state$sources3$id = _state$sources3[id]) === null || _state$sources3$id === void 0 ? void 0 : _state$sources3$id.duration;
  },
  getMediaSourceDomReference: function getMediaSourceDomReference(state, id) {
    var _state$sources4;

    var defaultMediaSource = id ? (_state$sources4 = state.sources) === null || _state$sources4 === void 0 ? void 0 : _state$sources4[id] : selectors.getDefaultMediaSource(state);

    if (!defaultMediaSource) {
      return;
    }

    var domId = defaultMediaSource === null || defaultMediaSource === void 0 ? void 0 : defaultMediaSource.domId;

    if (!domId) {
      return;
    }

    return document.getElementById(domId);
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
    var actionId = action.id || state.default || ((_Object$keys = Object.keys(state.sources)) === null || _Object$keys === void 0 ? void 0 : _Object$keys[0]);

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

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map