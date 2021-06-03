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

/***/ "./src/extending/media-blocks/view.js":
/*!********************************************!*\
  !*** ./src/extending/media-blocks/view.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/constants */ "./src/store/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/extending/utils.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */



_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  // Register media element in the store.
  var mediaElements = document.querySelectorAll('[data-media-source-id]');

  if (mediaElements.length) {
    mediaElements.forEach(function (media) {
      var _media$dataset = media.dataset,
          mediaSourceId = _media$dataset.mediaSourceId,
          mediaSourceType = _media$dataset.mediaSourceType;

      var _getBlockSourceProps = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getBlockSourceProps"])(mediaSourceType),
          domTypeName = _getBlockSourceProps.domTypeName;

      var query = "[data-media-source-id=\"".concat(mediaSourceId, "\"] ").concat(domTypeName);
      Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"]).registerMediaSource(mediaSourceId, {
        // source: mediaSource,
        elementType: domTypeName,
        state: _store_constants__WEBPACK_IMPORTED_MODULE_2__["STATE_PAUSED"],
        querySelector: query
      });
    });
  } // All Media Center blocks.


  var mediaCenterBlocks = document.querySelectorAll('.wp-block-media-manager-media-center');

  if (!(mediaCenterBlocks !== null && mediaCenterBlocks !== void 0 && mediaCenterBlocks.length)) {
    return;
  }

  mediaCenterBlocks.forEach(function (mediaCenterBlock) {
    var _mediaCenterBlock$dat = mediaCenterBlock === null || mediaCenterBlock === void 0 ? void 0 : mediaCenterBlock.dataset,
        mediaSourceRef = _mediaCenterBlock$dat.mediaSourceRef; // Media Link Format Style.


    var mediaLinkFormatElements = mediaCenterBlock.querySelectorAll('a.media-link-format-type');

    if (mediaLinkFormatElements !== null && mediaLinkFormatElements !== void 0 && mediaLinkFormatElements.length) {
      mediaLinkFormatElements.forEach(function (anchor) {
        var _select$getMediaSourc = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"]).getMediaSourceById(mediaSourceRef),
            state = _select$getMediaSourc.state,
            querySelector = _select$getMediaSourc.querySelector;

        var isPlayerPaused = _store_constants__WEBPACK_IMPORTED_MODULE_2__["STATE_PAUSED"] === state;
        var mediaElement = document.querySelector(querySelector);
        anchor.addEventListener('click', function (event) {
          event.stopPropagation();
          var timestamp = event.target.getAttribute('href').replace(/#/, '');
          var rePlay = Math.abs(Math.floor(timestamp - mediaElement.currentTime) * 1000) > 2000; // Playback to the timestamp.

          Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"]).setMediaSourceCurrentTime(mediaSourceRef, timestamp);
          mediaElement.currentTime = timestamp;

          if (rePlay) {
            mediaElement.play();
            Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"]).playMediaSource(mediaSourceRef);
          } else {
            if (isPlayerPaused) {
              Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"]).playMediaSource(mediaSourceRef);
              mediaElement.play();
            } else {
              Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"]).pauseMediaSource(mediaSourceRef);
              mediaElement.pause();
            }
          }
        });
      });
    } // Player button blocks.


    var mediaPlayerButtons = mediaCenterBlock.querySelectorAll('button.wp-block-media-manager__item');

    if (mediaPlayerButtons !== null && mediaPlayerButtons !== void 0 && mediaPlayerButtons.length) {
      mediaPlayerButtons.forEach(function (playerButton) {
        var isPlayPauseButton = playerButton.classList.contains('wp-block-media-manager-play-pause-button');
        var isPlayButton = playerButton.classList.contains('wp-block-media-manager-play-button');
        var isPauseButton = playerButton.classList.contains('wp-block-media-manager-pause-button');
        playerButton.addEventListener('click', function (event) {
          event.stopPropagation();

          var _select$getMediaSourc2 = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"]).getMediaSourceById(mediaSourceRef),
              state = _select$getMediaSourc2.state,
              querySelector = _select$getMediaSourc2.querySelector;

          var isPlayerPaused = _store_constants__WEBPACK_IMPORTED_MODULE_2__["STATE_PAUSED"] === state;
          var mediaElement = document.querySelector(querySelector);

          if (isPlayerPaused) {
            if (isPlayPauseButton || isPlayButton) {
              Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"]).playMediaSource(mediaSourceRef);
              mediaElement.play();
            }

            playerButton.classList.remove('is-media-paused');
          } else {
            if (isPlayPauseButton || isPauseButton) {
              Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__["dispatch"])(_store_constants__WEBPACK_IMPORTED_MODULE_2__["STORE_ID"]).pauseMediaSource(mediaSourceRef);
              mediaElement.pause();
            }

            playerButton.classList.add('is-media-paused');
          }
        });
      });
    }
  });
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

/***/ "./src/store/constants.js":
/*!********************************!*\
  !*** ./src/store/constants.js ***!
  \********************************/
/*! exports provided: STORE_ID, STATE_PLAYING, STATE_ERROR, STATE_PAUSED, MEDIA_NOT_DEFINED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_ID", function() { return STORE_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_PLAYING", function() { return STATE_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_ERROR", function() { return STATE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATE_PAUSED", function() { return STATE_PAUSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_NOT_DEFINED", function() { return MEDIA_NOT_DEFINED; });
// Store ID
var STORE_ID = 'media-manager/media-source'; // Media statuses

var STATE_PLAYING = 'is-playing';
var STATE_ERROR = 'is-error';
var STATE_PAUSED = 'is-paused';
var MEDIA_NOT_DEFINED = 'media-not-defined-yet';

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

/***/ })

/******/ });
//# sourceMappingURL=view.js.map