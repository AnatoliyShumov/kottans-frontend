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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.4.2 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bitap/bitap_matched_indices.js":
/*!********************************************!*\
  !*** ./src/bitap/bitap_matched_indices.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];

    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;

      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }

      start = -1;
    }
  } // (i-1 - start) + 1 => i - start


  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),

/***/ "./src/bitap/bitap_pattern_alphabet.js":
/*!*********************************************!*\
  !*** ./src/bitap/bitap_pattern_alphabet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),

/***/ "./src/bitap/bitap_regex_search.js":
/*!*****************************************!*\
  !*** ./src/bitap/bitap_regex_search.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;
  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),

/***/ "./src/bitap/bitap_score.js":
/*!**********************************!*\
  !*** ./src/bitap/bitap_score.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === void 0 ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? 100 : _ref$distance;
  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),

/***/ "./src/bitap/bitap_search.js":
/*!***********************************!*\
  !*** ./src/bitap/bitap_search.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bitapScore = __webpack_require__(/*! ./bitap_score */ "./src/bitap/bitap_score.js");

var matchedIndices = __webpack_require__(/*! ./bitap_matched_indices */ "./src/bitap/bitap_matched_indices.js");

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === void 0 ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === void 0 ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === void 0 ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === void 0 ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === void 0 ? 1 : _ref$minMatchCharLeng;
  var expectedLocation = location; // Set starting location at beginning text and initialize the alphabet.

  var textLen = text.length; // Highest score beyond which we give up.

  var currentThreshold = threshold; // Is there a nearby exact match? (speedup)

  var bestLocation = text.indexOf(pattern, expectedLocation);
  var patternLen = pattern.length; // a mask of the matches

  var matchMask = [];

  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold); // What about in the other direction? (speed up)

    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });

      currentThreshold = Math.min(_score, currentThreshold);
    }
  } // Reset the best location


  bestLocation = -1;
  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;
  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    } // Use the result from this iteration as the maximum for the next.


    binMax = binMid;
    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen; // Initialize the bit array

    var bitArr = Array(finish + 2);
    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      } // First pass: exact match


      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch; // Subsequent passes: fuzzy match

      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        }); // This match will almost certainly be better than any existing match.
        // But check anyway.

        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation; // Already passed `loc`, downhill from here on in.

          if (bestLocation <= expectedLocation) {
            break;
          } // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.


          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    } // No hope for a (better) match at greater error levels.


    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    }); // console.log('score', score, finalScore)


    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  } // console.log('FINAL SCORE', finalScore)
  // Count exact matches (those with a score of 0) to be "almost" exact


  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),

/***/ "./src/bitap/index.js":
/*!****************************!*\
  !*** ./src/bitap/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var bitapRegexSearch = __webpack_require__(/*! ./bitap_regex_search */ "./src/bitap/bitap_regex_search.js");

var bitapSearch = __webpack_require__(/*! ./bitap_search */ "./src/bitap/bitap_search.js");

var patternAlphabet = __webpack_require__(/*! ./bitap_pattern_alphabet */ "./src/bitap/bitap_pattern_alphabet.js");

var Bitap =
/*#__PURE__*/
function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === void 0 ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === void 0 ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === void 0 ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === void 0 ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === void 0 ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === void 0 ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === void 0 ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };
    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: "search",
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      } // Exact match


      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      } // When pattern length is greater than the machine word length, just do a a regex comparison


      var _this$options = this.options,
          maxPatternLength = _this$options.maxPatternLength,
          tokenSeparator = _this$options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      } // Otherwise, use Bitap algorithm


      var _this$options2 = this.options,
          location = _this$options2.location,
          distance = _this$options2.distance,
          threshold = _this$options2.threshold,
          findAllMatches = _this$options2.findAllMatches,
          minMatchCharLength = _this$options2.minMatchCharLength;
      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}(); // let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)


module.exports = Bitap;

/***/ }),

/***/ "./src/helpers/deep_value.js":
/*!***********************************!*\
  !*** ./src/helpers/deep_value.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./is_array */ "./src/helpers/is_array.js");

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),

/***/ "./src/helpers/is_array.js":
/*!*********************************!*\
  !*** ./src/helpers/is_array.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (obj) {
  return !Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj);
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bitap = __webpack_require__(/*! ./bitap */ "./src/bitap/index.js");

var deepValue = __webpack_require__(/*! ./helpers/deep_value */ "./src/helpers/deep_value.js");

var isArray = __webpack_require__(/*! ./helpers/is_array */ "./src/helpers/is_array.js");

var Fuse =
/*#__PURE__*/
function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === void 0 ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === void 0 ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === void 0 ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === void 0 ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === void 0 ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === void 0 ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === void 0 ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === void 0 ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === void 0 ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === void 0 ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === void 0 ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === void 0 ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === void 0 ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === void 0 ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === void 0 ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === void 0 ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };
    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: "setCollection",
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: "search",
    value: function search(pattern) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        limit: false
      };

      this._log("---------\nSearch pattern: \"".concat(pattern, "\""));

      var _this$_prepareSearche = this._prepareSearchers(pattern),
          tokenSearchers = _this$_prepareSearche.tokenSearchers,
          fullSearcher = _this$_prepareSearche.fullSearcher;

      var _this$_search = this._search(tokenSearchers, fullSearcher),
          weights = _this$_search.weights,
          results = _this$_search.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      if (opts.limit && typeof opts.limit === 'number') {
        results = results.slice(0, opts.limit);
      }

      return this._format(results);
    }
  }, {
    key: "_prepareSearchers",
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);

        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);
      return {
        tokenSearchers: tokenSearchers,
        fullSearcher: fullSearcher
      };
    }
  }, {
    key: "_search",
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments.length > 1 ? arguments[1] : undefined;
      var list = this.list;
      var resultMap = {};
      var results = []; // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.

      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return {
          weights: null,
          results: results
        };
      } // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.


      var weights = {};

      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i]; // Iterate over every key

        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];

          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };

            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }

            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return {
        weights: weights,
        results: results
      };
    }
  }, {
    key: "_analyze",
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === void 0 ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === void 0 ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === void 0 ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === void 0 ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === void 0 ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log("\nKey: ".concat(key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);

        this._log("Full text: \"".concat(value, "\", score: ").concat(mainSearchResult.score));

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log("\nPattern: \"".concat(tokenSearcher.pattern, "\"")); // let tokenScores = []


            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};

              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;

                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }

              this._log("Token: \"".concat(word, "\", score: ").concat(obj[word])); // tokenScores.push(obj)

            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;

          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }

          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;

        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log("\nCheck Matches: ".concat(checkTextMatches)); // If a match is found, add the item to <rawResults>, including its score


        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];

          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };
            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: "_computeScore",
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;
        var currScore = 1;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            currScore *= nScore;
          }
        }

        results[i].score = bestScore === 1 ? currScore : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: "_sort",
    value: function _sort(results) {
      this._log('\n\nSorting....');

      results.sort(this.options.sortFn);
    }
  }, {
    key: "_format",
    value: function _format(results) {
      var finalOutput = [];

      if (this.options.verbose) {
        var cache = [];

        this._log('\n\nOutput:\n\n', JSON.stringify(results, function (key, value) {
          if (_typeof(value) === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
              // Circular reference found, discard key
              return;
            } // Store value in our collection


            cache.push(value);
          }

          return value;
        }));

        cache = null;
      }

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };

            if (item.key) {
              obj.key = item.key;
            }

            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }

            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: "_log",
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })

/******/ });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_0__);

// import * as friend from "babel-loader";

const getContainer = document.getElementsByClassName("container")[0];
const getFriendsList = document.getElementsByClassName("friends-list")[0];
const getSideMunu = document.getElementsByClassName("side-menu")[0];
const getModal = document.getElementsByClassName("modal")[0];
const getModalContent = document.getElementsByClassName("modal-content")[0];
const getMainMenu = document.getElementsByClassName("main-menu")[0];
const getSearch = document.getElementsByClassName("search-friend")[0];
const getInfo = document.getElementsByClassName("info");
const getMiddleMenu = document.getElementsByClassName("middle-menu")[0];
const getBotoomMenu = document.getElementsByClassName("bottom-menu")[0];
const getInfoRowLeft = document.getElementsByClassName("info-row__left")[0];
const getInfoRowRight = document.getElementsByClassName("info-row__right")[0];
const getBoxGender = document.getElementsByClassName("choice-gender__box")[0];
const getMale = document.getElementById("choice1");
const getFemale = document.getElementById("choice2");
const getAllGender = document.getElementById("choice3");
const getAgeBox = document.getElementsByClassName("choice-age__box")[0];
const getAgeMin = document.getElementById("age-min");
const getAgeMax = document.getElementById("age-max");

let users = [];
let copyUsers;
let infoTargetPeople =  {};


fetch('https://randomuser.me/api/?results=15')
  .then(
    function(response) {

      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        getFriendsList.innerHTML = "";
        console.log(data.results);
        showContent(data.results);
        users = data.results
        copyUsers = users;
      });
    }
  )
  .catch(function(err) {
    document.body.style.background = "#AA0000";
    console.log('Fetch Error :-S', err);
  })



let contentBox = (friend, index)=>{
  let info = document.createElement("div");
  let name = document.createElement("p");
  let img = document.createElement("img");
  let age = document.createElement('p');
  let firstName = friend.name.first.charAt(0).toUpperCase() + friend.name.first.slice(1);
  let lastName = friend.name.last.charAt(0).toUpperCase() + friend.name.last.slice(1);


  info.classList.add("info");
  name.classList.add("name");
  img.classList.add("img");
  age.classList.add("age");

  name.innerHTML = firstName + " " + lastName;
  img.src = friend.picture.large;
  age.innerText = friend.dob.age;
  info.id = index;

  getFriendsList.appendChild(info);
  info.append( img, name, age);
}

let showContent = (data)=>{
  data.forEach(contentBox)
}

getFriendsList.onclick = (e)=>{
  getModal.style.display = "flex";
  let id = e.target.parentElement.id;
  console.log( e.target.parentElement, e, id)
  let indexS = copyUsers.forEach(function(item, i, arr) {
    if( i == id) {
        showContentModal(arr[i], i)
      console.log("privet")
    }
  })
}

window.onclick = (e)=> {
  if (e.target == getModal) {
   getModal.style.display = "none";
   getMainMenu.innerHTML = '';
   getInfoRowLeft.innerHTML = '';
   getInfoRowRight.innerHTML = '';
   getBotoomMenu.innerHTML = '';
  }
}

let showContentModal = (friend, index)=>{
  let modalImg = document.createElement("img");
  let name = document.createElement("p");
  let location = document.createElement("i");
  let email = document.createElement("i");
  let phone = document.createElement("i");
  let hrefLocation = document.createElement("a");
  let hrefEmail = document.createElement("a");
  let hrefPhone = document.createElement("a");

  infoTargetPeople.firstName = friend.name.first.charAt(0).toUpperCase() + friend.name.first.slice(1);
  infoTargetPeople.lastName = friend.name.last.charAt(0).toUpperCase() + friend.name.last.slice(1);
  infoTargetPeople.fullName = infoTargetPeople.firstName  + " " + infoTargetPeople.lastName;
  infoTargetPeople.imgSrcM = friend.picture.large;
  infoTargetPeople.email = friend.email;
  infoTargetPeople.age = friend.dob.age;
  infoTargetPeople.gender = friend.gender;
  infoTargetPeople.city = friend.location.city;
  infoTargetPeople.street = friend.location.street;
  infoTargetPeople.location = friend.location
  infoTargetPeople.cordinates = friend.location.coordinates.latitude + "," + friend.location.coordinates.longitude;
  infoTargetPeople.phone = friend.cell

  let urlMaps = "https://www.google.com/maps?q=" + infoTargetPeople.cordinates;

  modalImg.classList.add("modal-img");
  name.classList.add("modal-name");
  location.classList.add("fas");
  location.classList.add("fa-map-marker-alt");
  email.classList.add("far");
  email.classList.add("fa-envelope");
  phone.classList.add("fas");
  phone.classList.add("fa-mobile-alt");
  hrefLocation.classList.add("modal-location");
  hrefEmail.classList.add("modal-email");
  hrefPhone.classList.add("modal-phone");
  hrefEmail.setAttribute("href", "mailto:"+ infoTargetPeople.email)
  hrefLocation.setAttribute("href", urlMaps);
  hrefPhone.setAttribute("href", "tel:"+infoTargetPeople.phone);
  modalImg.src = infoTargetPeople.imgSrcM;
  name.textContent = infoTargetPeople.fullName;

  getMainMenu.append(modalImg, name);
  // getBotoomMenu.append(location, email, phone);
  getBotoomMenu.append(hrefLocation, hrefEmail, hrefPhone);
  hrefLocation.append(location);
  hrefEmail.append(email);
  hrefPhone.append(phone);

   Object.entries(infoTargetPeople).splice(4,5).forEach((curent)=>{
    let infoRowsLeft = document.createElement("p");
    let infoRowsRight = document.createElement("p");

    infoRowsLeft.classList.add("info-rows");
    infoRowsRight.classList.add("info-rows");

    getInfoRowLeft.append(infoRowsLeft);
    getInfoRowRight.append(infoRowsRight);

    infoRowsLeft.innerHTML = curent[0].charAt(0).toUpperCase() + curent[0].slice(1)+":";
    infoRowsRight.innerHTML = curent[1];

  });
}



let filterInput = ()=>{
  let options = {
    threshold: 0,
    keys: [ "name.first", "name.last"],
  };
  let fusee = new fuse_js__WEBPACK_IMPORTED_MODULE_0___default.a(copyUsers, options);
  let input = fusee.search(document.querySelector('.search-friend').value.toLowerCase());
  getFriendsList.innerHTML = "";
  input.forEach(contentBox);
  if(getSearch.value === ''){
    console.log("filter input"+ copyUsers);
    copyUsers.forEach(contentBox);
  }
}

let filterGender = (gender) =>{
  let options = {
    threshold: 0,
    keys: [ "gender"],
  }
  let fusee = new fuse_js__WEBPACK_IMPORTED_MODULE_0___default.a(users, options);
  let returnFriendGender = fusee.search(gender);
  copyUsers = returnFriendGender;
}

let filterAge = (min, max)=> {
  getFriendsList.innerHTML = "";
  copyUsers.forEach((i)=>{
    if(i.dob.age < max && i.dob.age > min) {
      contentBox(i);
    }
     // else {copyUsers.forEach(contentBox)
     // console.log("arra")}
  })
}
getSearch.onkeyup = (e) => {
  filterInput();

  //  let fuseInput = new fuse(users, optionsFuse2);
  // //  let fuseGender = new fuse(male,optionsFuse2);
  // let gender = fuseInput.search("male")
  //  fuseInput.search(document.querySelector('.search-friend').value.toLowerCase());
  //  console.log(e.key, fuseInput.search(document.querySelector('.search-friend').value.toLowerCase()), document.querySelector('.search-friend').value.toLowerCase())
}
getBoxGender.onclick = (e)=> {
 console.log()

  if (e.target.checked) {
   //e.target.previousSibling.previousSibling.childNodes[0].classList.add("input-selected")
    filterGender(e.target.value);
    // console.log(e.target, copyUsers);
    getFriendsList.innerHTML = "";
    copyUsers.forEach(contentBox);
    if(getAllGender.checked) {
      copyUsers = users;
      console.log("privet" + copyUsers);
      getFriendsList.innerHTML = "";
      copyUsers.forEach(contentBox);
    }
    // else if(document.querySelector(".input-selected") !== null) {
    //   console.log( document.querySelector(".input-selected"))
    //   document.querySelector(".input-selected").classList.remove(".input-selected")
    // }
  }

 // if (getCheckBoxMale.checked === getCheckBoxFemale) {
 //    copyUsers = users;
 //    console.log(copyUsers, "heloo")
 //  }
 //  else if(getCheckBoxMale.checked == 1) {
 //    filterGender("male");
 //    console.log("maleBox")
 //  }
 //  else if(getCheckBoxFemale.checked = 1) {
 //    filterGender("female")
 //    console.log("femalebox")
 //  }
}
getAgeBox.onkeyup = (e) => {

  filterAge(getAgeMin.value, getAgeMax.value)
}



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map