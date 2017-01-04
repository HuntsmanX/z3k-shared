(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("mobx"), require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "mobx", "jquery"], factory);
	else if(typeof exports === 'object')
		exports["z3kShared"] = factory(require("lodash"), require("mobx"), require("jquery"));
	else
		root["z3kShared"] = factory(root["_"], root["mobx"], root["$"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_13__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GlobalState = function () {
  function GlobalState() {
    _classCallCheck(this, GlobalState);

    this._ajaxBaseUrl = null;

    this._ajaxHandleSuccess = function (data, textStatus, jqXHR) {};

    this._ajaxHandleError = function (jqXHR, textStatus, errorThrown) {};

    this._ajax = null;
  }

  _createClass(GlobalState, [{
    key: "config",
    value: function config() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      Object.keys(options).forEach(function (key) {
        return _this["_" + key] = options[key];
      });
    }

    // Used by ajax to construct urls

  }, {
    key: "ajaxBaseUrl",
    get: function get() {
      if (!this._ajaxBaseUrl) throw new Error("baseUrl has not been set. Use config function from the 'z3k-shared' package to set baseUrl for ajax requests");

      return this._ajaxBaseUrl;
    }

    // Called by ajax upon successful requests

  }, {
    key: "ajaxHandleSuccess",
    get: function get() {
      return this._ajaxHandleSuccess;
    }

    // Called by ajax upon failed requests

  }, {
    key: "ajaxHandleError",
    get: function get() {
      return this._ajaxHandleError;
    }

    // Used by Model and Collection classes to make XHR requests.
    // If not set, default ajax module will be used.

  }, {
    key: "ajax",
    get: function get() {
      return this._ajax;
    }
  }]);

  return GlobalState;
}();

var globals = new GlobalState();

var config = globals.config.bind(globals);

exports.default = globals;
exports.config = config;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(13);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(2);

var _urlJoin = __webpack_require__(8);

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _globals = __webpack_require__(0);

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ajax = function ajax() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _lodash.defaults)(options, {
    url: '/',
    method: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    headers: { 'X-Key-Inflection': 'camel' }
  });

  options.url = (0, _urlJoin2.default)(_globals2.default.ajaxBaseUrl, options.url);

  options.data = options.method === 'GET' ? options.payload : JSON.stringify(options.payload);

  var request = _jquery2.default.ajax(options);

  request.then(_globals2.default.ajaxHandleSuccess, _globals2.default.ajaxHandleError);

  return request;
};

exports.default = ajax;

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _mobx = __webpack_require__(5);

var _lodash2 = __webpack_require__(2);

var _lodash3 = _interopRequireDefault(_lodash2);

var _globals = __webpack_require__(0);

var _globals2 = _interopRequireDefault(_globals);

var _ajax = __webpack_require__(1);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var globalAjax = _globals2.default.ajax;


var ajax = globalAjax || _ajax2.default;

var _lodash = ['chunk', 'findIndex', 'findLastIndex', 'first', 'last', 'nth', 'countBy', 'every', 'filter', 'find', 'findLast', 'forEach', 'each', 'forEachRight', 'groupBy', 'map', 'orderBy', 'partition', 'reduce', 'reduceRight', 'reject', 'sample', 'sampleSize', 'shuffle', 'size', 'some', 'sortBy'];

var Collection = (_class = function () {
  function Collection() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Collection);

    _initDefineProp(this, "models", _descriptor, this);

    _initDefineProp(this, "isBeingFetched", _descriptor2, this);

    _initDefineProp(this, "currentPage", _descriptor3, this);

    _initDefineProp(this, "totalPages", _descriptor4, this);

    _initDefineProp(this, "totalItems", _descriptor5, this);

    _initDefineProp(this, "perPage", _descriptor6, this);

    _initDefineProp(this, "query", _descriptor7, this);

    this.parent = parent;
    this.mixinLodashFunctions();
    this.fromJSON(data);
    this.initialize();
    this.persistOrder = _lodash3.default.debounce(this.persistOrder, 1000);
  }

  // To be overridden by child classes to perform initialization.

  _createClass(Collection, [{
    key: "initialize",
    value: function initialize() {}

    // Mixes in lodash array and collection functions into the collection.
    // See https://lodash.com/docs for documentation

  }, {
    key: "mixinLodashFunctions",
    value: function mixinLodashFunctions() {
      var _this = this;

      _lodash.forEach(function (func) {
        return _this[func] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _lodash3.default[func].apply(_lodash3.default, [_this.models].concat(args));
        };
      });
    }
  }, {
    key: "fromJSON",
    value: function fromJSON() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var models = data.map(function (obj) {
        var model = new _this2.modelClass(obj);
        _this2.assignParent(model);
        return model;
      });

      models = _lodash3.default.sortBy(models, function (model) {
        return model.orderIndex || 0;
      });

      this.set('models', models);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.models.map(function (model) {
        return model.serialize(options);
      });
    }

    // Collection is consireded ordered if all models have 'orderIndex'
    // attribute. If that is the case, 'orderIdex' is updated by 'add',
    // 'move' and 'remove' methods.

  }, {
    key: "getUrl",
    value: function getUrl(name) {
      var root = this.constructor.urlRoot;

      switch (name) {
        case 'fetch':
          return root;
        case 'reorder':
          return root + "/reorder";
      }
    }
  }, {
    key: "set",
    value: function set(attr, val) {
      this[attr] = val;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.models = [];
    }
  }, {
    key: "setQuery",
    value: function setQuery(attr, val) {
      this.query.set(attr, val);
    }
  }, {
    key: "fetch",
    value: function fetch() {
      var _this3 = this;

      this.set('isBeingFetched', true);

      var request = ajax({
        url: this.getUrl('fetch'),
        payload: {
          q: this.query.toJSON(),
          page: this.currentPage,
          per: this.perPage
        }
      });

      request.then(function (_ref) {
        var data = _ref.data,
            meta = _ref.meta;

        _this3.fromJSON(data);
        _this3._setPagination(meta);
        _this3.set('isBeingFetched', false);
      }, function () {
        _this3.set('isBeingFetched', false);
      });

      return request;
    }
  }, {
    key: "persistOrder",
    value: function persistOrder() {
      var order = {};

      this.notMarkedForDestruction.forEach(function (model) {
        return order[model.id] = model.orderIndex;
      });

      ajax({
        url: this.getUrl('reorder'),
        method: 'PUT',
        payload: { order: order }
      });
    }

    // Assigns parent models to all models in the collection - kinda
    // creates 'belongs to' association.

  }, {
    key: "assignParent",
    value: function assignParent(model) {
      var _parent = this.parent,
          parentName = _parent.name,
          parentModel = _parent.model;

      if (!parentModel || !parentName) return;
      (0, _mobx.extendObservable)(model, _defineProperty({}, parentName, parentModel));
      model.set(parentName + "Id", parentModel.id);
    }
  }, {
    key: "add",
    value: function add() {
      var _this4 = this;

      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _lodash3.default.flatten([attrs]).forEach(function (attr) {
        var model = new _this4.modelClass(attr || {});
        _this4.assignParent(model);
        _this4.models.push(model);
      });
      this._setOrderIndexes();
    }
  }, {
    key: "remove",
    value: function remove(uuid) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var index = this.findIndex({ uuid: uuid });
      this.models.splice(index, 1);
      this._setOrderIndexes(options);
    }
  }, {
    key: "markForDestruction",
    value: function markForDestruction(uuid) {
      var model = this.find({ uuid: uuid });
      model.markForDestruction();
      this._setOrderIndexes();
    }
  }, {
    key: "move",
    value: function move(fromId, toId) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var fromIndex = this.findIndex({ uuid: fromId });
      var toIndex = this.findIndex({ uuid: toId });

      this.models.splice(toIndex, 0, this.models.splice(fromIndex, 1)[0]);
      this._setOrderIndexes(options);
    }
  }, {
    key: "_setOrderIndexes",
    value: function _setOrderIndexes() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isOrdered) return;

      this.notMarkedForDestruction.forEach(function (model, index) {
        return model.set('orderIndex', index);
      });

      if (options.persistOrder) this.persistOrder();
    }
  }, {
    key: "_setPagination",
    value: function _setPagination() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var totalPages = data.totalPages,
          totalItems = data.totalItems,
          currentPage = data.currentPage;


      if (!totalPages && totalPages !== 0 || !totalItems && totalItems !== 0 || !currentPage && currentPage !== 0) return;

      this.set('totalPages', totalPages);
      this.set('totalItems', totalItems);
      this.set('currentPage', currentPage);
    }
  }, {
    key: "isOrdered",
    get: function get() {
      return this.every(function (model) {
        return model.has('orderIndex');
      });
    }
  }, {
    key: "length",
    get: function get() {
      return this.models.length;
    }
  }, {
    key: "notMarkedForDestruction",
    get: function get() {
      return this.filter(function (model) {
        return !model.isMarkedForDestruction;
      });
    }
  }, {
    key: "modelClass",
    get: function get() {
      return this.constructor.model;
    }
  }, {
    key: "className",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return Collection;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "models", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isBeingFetched", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "currentPage", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "totalPages", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "totalItems", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "perPage", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return 25;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "query", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return (0, _mobx.asMap)({});
  }
}), _applyDecoratedDescriptor(_class.prototype, "initialize", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "initialize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fromJSON", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "fromJSON"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isOrdered", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isOrdered"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "length", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "length"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "notMarkedForDestruction", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "notMarkedForDestruction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "set", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "set"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clear", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "clear"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setQuery", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setQuery"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fetch", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "fetch"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "persistOrder", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "persistOrder"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "assignParent", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "assignParent"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "add", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "add"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "remove", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "remove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "markForDestruction", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "markForDestruction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "move", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "move"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_setOrderIndexes", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "_setOrderIndexes"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_setPagination", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "_setPagination"), _class.prototype)), _class);
exports.default = Collection;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(5);

var _lodash = __webpack_require__(2);

var _uuid = __webpack_require__(9);

var _uuid2 = _interopRequireDefault(_uuid);

var _globals = __webpack_require__(0);

var _globals2 = _interopRequireDefault(_globals);

var _ajax = __webpack_require__(1);

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var globalAjax = _globals2.default.ajax;


var ajax = globalAjax || _ajax2.default;

var AppModel = (_class = function () {

  // Do not override constructor in child classes, use 'initialize' method
  // instead.

  // Errors are written into 'errors' map upon unsuccessful creation
  // or update i.e. when server responds with 422 status. See 'setErrors',
  // 'unsetErrors' and 'save' methods.

  function AppModel() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, AppModel);

    _initDefineProp(this, "attrs", _descriptor, this);

    _initDefineProp(this, "errors", _descriptor2, this);

    this.uuid = _uuid2.default.v4();

    this.setDefaultAttributes();
    this.fromJSON(data);
    this.initialize();
  }

  // To be overridden by child classes to perform initialization.

  // 'uuid' is a unique string identifer, may be used as the 'key' prop
  // in React views when iterating over a collection of objects or
  // for identifying an object in a collection when 'id' is not yet set

  _createClass(AppModel, [{
    key: "initialize",
    value: function initialize() {}

    // Default attributes are assigned to the constructor function of the
    // class in the 'attributes' hash.

  }, {
    key: "markForDestruction",
    value: function markForDestruction() {
      this.set('_destroy', true);
    }

    // 'fromJSON' is called by the constructor and 'create'/'save'
    // methods in case of success.

  }, {
    key: "fromJSON",
    value: function fromJSON() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this.setAttributes(data);
      this.setAssociations(data);
    }
  }, {
    key: "setAttributes",
    value: function setAttributes() {
      var _this = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var attrs = (0, _lodash.omit)(data, Object.keys(this.associations));

      Object.keys(attrs).forEach(function (attrName) {
        _this.set(attrName, attrs[attrName]);
      });
    }
  }, {
    key: "setDefaultAttributes",
    value: function setDefaultAttributes() {
      var attrs = Object.assign({}, this.defaultAttributes, {
        isBeingFetched: false,
        isBeingSaved: false,
        isBeingDestroyed: false
      });
      this.setAttributes(attrs);
    }
  }, {
    key: "setAssociations",
    value: function setAssociations() {
      var _this2 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      Object.keys(this.associations).forEach(function (associationName) {
        var associationConfig = _this2.associations[associationName];

        if ((0, _lodash.includes)(Object.keys(associationConfig), 'collection')) _this2.setCollectionAssociation(associationName, data[associationName], associationConfig);
      });
    }
  }, {
    key: "setCollectionAssociation",
    value: function setCollectionAssociation(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var config = arguments[2];

      if (!data.length && name in this) return;

      var collection = new config.collection(data, { name: config.parentKey, model: this });
      (0, _mobx.extendObservable)(this, _defineProperty({}, name, collection));
    }

    // Options examples:
    //
    // serialize({ include: 'foo' });
    // serialize({ include: ['foo', 'bar'] });
    // serialize({ include: { foo: 'bar' } });
    // serialize({ include: { foo: ['bar', 'baz'] } });
    // serialize({ include: { foo: { bar: 'baz' } } });
    // serialize({ include: { foo: { bar: ['baz', 'qux'] } } });

  }, {
    key: "serialize",
    value: function serialize() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var data = (0, _mobx.toJS)(this.attrs);
      if (options.include) this._serializeAssociations(data, options);
      return data;
    }
  }, {
    key: "_serializeAssociations",
    value: function _serializeAssociations(data, options) {
      var _this3 = this;

      var include = options.include,
          includeMap = options.includeMap;


      var associations = (0, _lodash.isPlainObject)(include) ? Object.keys(include) : (0, _lodash.flatten)([include]);

      associations.forEach(function (association) {
        var childOptions = (0, _lodash.isPlainObject)(include) ? _extends({}, options, { include: include[association] }) : {};
        var key = includeMap && includeMap[association] ? includeMap[association] : association;

        data[key] = _this3[association].serialize(childOptions);
      });
    }
  }, {
    key: "set",
    value: function set(attr, val) {
      this.attrs.set(attr, val);
      this._ensureAccessorsExist(attr);
    }
  }, {
    key: "get",
    value: function get(attr) {
      var _this4 = this;

      return (0, _mobx.computed)(function () {
        return _this4.attrs.get(attr);
      }).get();
    }
  }, {
    key: "has",
    value: function has(attr) {
      var _this5 = this;

      return (0, _mobx.computed)(function () {
        return _this5.attrs.has(attr);
      }).get();
    }
  }, {
    key: "setErrors",
    value: function setErrors(errors) {
      this.errors.merge(errors);
    }
  }, {
    key: "unsetErrors",
    value: function unsetErrors() {
      this.errors.clear();
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this6 = this;

      this.attrs.clear();
      this.errors.clear();
      Object.keys(this.associations).forEach(function (associationName) {
        _this6[associationName].clear();
      });
    }
  }, {
    key: "error",
    value: function error(attr) {
      var _this7 = this;

      return (0, _mobx.computed)(function () {
        return _this7.errors.get(attr);
      }).get();
    }
  }, {
    key: "getUrlAndMethod",
    value: function getUrlAndMethod(name) {
      var root = this.constructor.urlRoot;

      switch (name) {
        case 'fetch':
          return [root + "/" + (this.get('uid') || this.get('id')), "GET"];
        case 'create':
          return [root, "POST"];
        case 'update':
          return [root + "/" + this.get('id'), "PATCH"];
        case 'destroy':
          return [root + "/" + this.get('id'), "DELETE"];
      }
    }
  }, {
    key: "fetch",
    value: function fetch() {
      var _this8 = this;

      var _getUrlAndMethod = this.getUrlAndMethod('fetch'),
          _getUrlAndMethod2 = _slicedToArray(_getUrlAndMethod, 2),
          url = _getUrlAndMethod2[0],
          method = _getUrlAndMethod2[1];

      this.set('isBeingFetched', true);

      var request = ajax({
        url: url,
        method: method
      });

      request.then(function (_ref) {
        var data = _ref.data;

        _this8.fromJSON(data);
        _this8.set('isBeingFetched', false);
      }, function () {
        _this8.set('isBeingFetched', false);
      });

      return request;
    }
  }, {
    key: "save",
    value: function save() {
      var _this9 = this;

      var action = this.isPersisted ? 'update' : 'create';

      var _getUrlAndMethod3 = this.getUrlAndMethod(action),
          _getUrlAndMethod4 = _slicedToArray(_getUrlAndMethod3, 2),
          url = _getUrlAndMethod4[0],
          method = _getUrlAndMethod4[1];

      this.unsetErrors();
      this.set('isBeingSaved', true);

      var request = ajax({
        url: url,
        method: method,
        payload: this.serialize()
      });

      request.then(function (_ref2) {
        var data = _ref2.data;

        _this9.fromJSON(data);
        _this9.set('isBeingSaved', false);
      }, function (xhr) {
        _this9.set('isBeingSaved', false);
        if (xhr.status === 422) _this9.setErrors(xhr.responseJSON);
      });

      return request;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _getUrlAndMethod5 = this.getUrlAndMethod('destroy'),
          _getUrlAndMethod6 = _slicedToArray(_getUrlAndMethod5, 2),
          url = _getUrlAndMethod6[0],
          method = _getUrlAndMethod6[1];

      this.set('isBeingDestroyed', true);

      var request = ajax({
        url: url,
        method: method
      });

      return request;
    }

    // Created attribute accessors for the given key unless attribute accessors
    // already exist. This allows shorter syntax for accessing attributes:
    //
    // obj.name instead of obj.get('name')
    // obj.name = 'foo' instead of obj.set('name', 'foo')
    //
    // TODO replace this with proxies if possible

  }, {
    key: "_ensureAccessorsExist",
    value: function _ensureAccessorsExist(key) {
      if (key in this) return;

      Object.defineProperty(this, key, {
        get: function get() {
          return this.attrs.get(key);
        },
        set: function set(val) {
          this.set(key, val);
        }
      });
    }
  }, {
    key: "defaultAttributes",
    get: function get() {
      return this.constructor.defaults || {};
    }

    // Assigned to the constructor function of the class. This is then used
    // during initialization to assign relations to the object.

  }, {
    key: "associations",
    get: function get() {
      return this.constructor.associations || {};
    }
  }, {
    key: "isPersisted",
    get: function get() {
      return !!this.get('id');
    }
  }, {
    key: "isNew",
    get: function get() {
      return !this.get('id');
    }
  }, {
    key: "isMarkedForDestruction",
    get: function get() {
      return this.has('_destroy') && this.get('_destroy') === true;
    }
  }]);

  return AppModel;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "attrs", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return (0, _mobx.asMap)({});
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "errors", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return (0, _mobx.asMap)({});
  }
}), _applyDecoratedDescriptor(_class.prototype, "initialize", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "initialize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isPersisted", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isPersisted"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isNew", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isNew"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isMarkedForDestruction", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isMarkedForDestruction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "markForDestruction", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "markForDestruction"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fromJSON", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "fromJSON"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setAttributes", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setAttributes"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setDefaultAttributes", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setDefaultAttributes"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setAssociations", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setAssociations"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setCollectionAssociation", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setCollectionAssociation"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "set", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "set"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setErrors", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setErrors"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unsetErrors", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "unsetErrors"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clear", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "clear"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fetch", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "fetch"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "save", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "save"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "destroy", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "destroy"), _class.prototype)), _class);
exports.default = AppModel;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (name, context, definition) {
  if (typeof module !== 'undefined' && module.exports) module.exports = definition();
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else context[name] = definition();
})('urljoin', this, function () {

  function normalize (str, options) {

    // make sure protocol is followed by two slashes
    str = str.replace(/:\//g, '://');

    // remove consecutive slashes
    str = str.replace(/([^:\s])\/+/g, '$1/');

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    str = str.replace(/(\?.+)\?/g, '$1&');

    return str;
  }

  return function () {
    var input = arguments;
    var options = {};

    if (typeof arguments[0] === 'object') {
      // new syntax with array and options
      input = arguments[0];
      options = arguments[1] || {};
    }

    var joined = [].slice.call(input, 0).join('/');
    return normalize(joined, options);
  };

});


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(10);
var v4 = __webpack_require__(11);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var rng = __webpack_require__(4);
var bytesToUuid = __webpack_require__(3);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

var rng = __webpack_require__(4);
var bytesToUuid = __webpack_require__(3);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ },
/* 12 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.ajax = exports.Model = exports.Collection = undefined;

var _collection = __webpack_require__(6);

var _collection2 = _interopRequireDefault(_collection);

var _model = __webpack_require__(7);

var _model2 = _interopRequireDefault(_model);

var _ajax = __webpack_require__(1);

var _ajax2 = _interopRequireDefault(_ajax);

var _globals = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Collection = _collection2.default;
exports.Model = _model2.default;
exports.ajax = _ajax2.default;
exports.config = _globals.config;

/***/ }
/******/ ]);
});