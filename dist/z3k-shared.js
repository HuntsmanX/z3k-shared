(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mobx"), require("jquery"), require("lodash"), require("mobx-react"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["mobx", "jquery", "lodash", "mobx-react", "react"], factory);
	else if(typeof exports === 'object')
		exports["z3kShared"] = factory(require("mobx"), require("jquery"), require("lodash"), require("mobx-react"), require("react"));
	else
		root["z3kShared"] = factory(root["mobx"], root["$"], root["_"], root["mobxReact"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pubsub = __webpack_require__(2);

var _pubsub2 = _interopRequireDefault(_pubsub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GlobalState = function () {
  function GlobalState() {
    _classCallCheck(this, GlobalState);

    this._ajaxBaseUrl = null;

    this._ajaxHandleSuccess = function (data, textStatus, jqXHR) {};

    this._ajaxHandleError = function (jqXHR, textStatus, errorThrown) {};

    this._ajax = null;
    this._cookieDomain = null;
    this._authApiUrl = null;
  }

  _createClass(GlobalState, [{
    key: 'config',
    value: function config() {
      var _this = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      Object.keys(options).forEach(function (key) {
        return _this['_' + key] = options[key];
      });
      _pubsub2.default.publish('shared.config.success');
    }

    // Used by ajax to construct urls

  }, {
    key: 'throwError',
    value: function throwError(attr) {
      throw new Error(attr + ' has not been set. Use config function from the \'z3k-shared\' package to set ' + attr);
    }
  }, {
    key: 'ajaxBaseUrl',
    get: function get() {
      if (!this._ajaxBaseUrl) this.throwError('ajaxBaseUrl');

      return this._ajaxBaseUrl;
    }

    // Called by ajax upon successful requests

  }, {
    key: 'ajaxHandleSuccess',
    get: function get() {
      return this._ajaxHandleSuccess;
    }

    // Called by ajax upon failed requests

  }, {
    key: 'ajaxHandleError',
    get: function get() {
      return this._ajaxHandleError;
    }

    // Used by Model and Collection classes to make XHR requests.
    // If not set, default ajax module will be used.

  }, {
    key: 'ajax',
    get: function get() {
      return this._ajax;
    }

    // Used by auth to write cookies

  }, {
    key: 'cookieDomain',
    get: function get() {
      if (!this._ajaxBaseUrl) this.throwError('cookieDomain');

      return this._cookieDomain;
    }

    // Used by j-toker for server authentication

  }, {
    key: 'authApiUrl',
    get: function get() {
      if (!this._authApiUrl) this.throwError('authApiUrl');

      return this._authApiUrl;
    }
  }]);

  return GlobalState;
}();

var globals = new GlobalState();

var config = globals.config.bind(globals);

exports.default = globals;
exports.config = config;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pubsubJs = __webpack_require__(8);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pubsubJs2.default;

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(3);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(4);

var _urlJoin = __webpack_require__(28);

var _urlJoin2 = _interopRequireDefault(_urlJoin);

var _globals = __webpack_require__(1);

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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(0);

var _lodash = __webpack_require__(4);

var _uuid = __webpack_require__(29);

var _uuid2 = _interopRequireDefault(_uuid);

var _globals = __webpack_require__(1);

var _globals2 = _interopRequireDefault(_globals);

var _ajax = __webpack_require__(5);

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

var Model = (_class = function () {
  _createClass(Model, [{
    key: "ajax",
    get: function get() {
      return _globals2.default.ajax || _ajax2.default;
    }

    // All model attributes are kept in the 'attrs' map. This is more
    // convenient than keeping all attributes directly on the model object
    // as this allows easier serialization to JSON.

    // Errors are written into 'errors' map upon unsuccessful creation
    // or update i.e. when server responds with 422 status. See 'setErrors',
    // 'unsetErrors' and 'save' methods.

    // 'uuid' is a unique string identifer, may be used as the 'key' prop
    // in React views when iterating over a collection of objects or
    // for identifying an object in a collection when 'id' is not yet set

  }]);

  // Do not override constructor in child classes, use 'initialize' method
  // instead.

  function Model() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Model);

    _initDefineProp(this, "attrs", _descriptor, this);

    _initDefineProp(this, "errors", _descriptor2, this);

    this.uuid = _uuid2.default.v4();

    this.setDefaultAttributes();
    this.fromJSON(data);
    this.initialize();
  }

  // To be overridden by child classes to perform initialization.

  _createClass(Model, [{
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

      var request = this.ajax({
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

      var request = this.ajax({
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

      var request = this.ajax({
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

  return Model;
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
exports.default = Model;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var mobx = __webpack_require__(0);
var queryString = _interopDefault(__webpack_require__(26));
var director_build_director = __webpack_require__(20);
var React = _interopDefault(__webpack_require__(12));
var mobxReact = __webpack_require__(11);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
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

var get$1 = function get$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

















var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var isObject = function isObject(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
};
var getObjectKeys = function getObjectKeys(obj) {
  return isObject(obj) ? Object.keys(obj) : [];
};

var viewsForDirector = function viewsForDirector(views, store) {
  return getObjectKeys(views).reduce(function (obj, viewKey) {
    var view = views[viewKey];
    obj[view.path] = function () {
      for (var _len = arguments.length, paramsArr = Array(_len), _key = 0; _key < _len; _key++) {
        paramsArr[_key] = arguments[_key];
      }

      return view.goTo(store, paramsArr);
    };
    return obj;
  }, {});
};

var getRegexMatches = function getRegexMatches(string, regexExpression, callback) {
  var match = void 0;
  while ((match = regexExpression.exec(string)) !== null) {
    callback(match);
  }
};

var paramRegex = /\/(:([^\/?]*)\??)/g;
var optionalRegex = /(\/:[^\/]*\?)$/g;

var Route = function () {

  //lifecycle methods
  function Route(props) {
    var _this = this;

    classCallCheck(this, Route);

    getObjectKeys(props).forEach(function (propKey) {
      return _this[propKey] = props[propKey];
    });
    this.originalPath = this.path;

    //if there are optional parameters, replace the path with a regex expression
    this.path = this.path.indexOf('?') === -1 ? this.path : this.path.replace(optionalRegex, "/?([^/]*)?$");
    this.rootPath = this.getRootPath();

    //bind
    this.getRootPath = this.getRootPath.bind(this);
    this.replaceUrlParams = this.replaceUrlParams.bind(this);
    this.getParamsObject = this.getParamsObject.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  /*
   Sets the root path for the current path, so it's easier to determine if the route entered/exited or just some params changed
   Example: for '/' the root path is '/', for '/profile/:username/:tab' the root path is '/profile'
   */


  //props


  createClass(Route, [{
    key: 'getRootPath',
    value: function getRootPath() {
      return '/' + this.path.split('/')[1];
    }
  }, {
    key: 'replaceUrlParams',


    /*
     replaces url params placeholders with params from an object
     Example: if url is /book/:id/page/:pageId and object is {id:100, pageId:200} it will return /book/100/page/200
     */
    value: function replaceUrlParams(params) {
      var queryParams = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      params = mobx.toJS(params);
      queryParams = mobx.toJS(queryParams);

      var queryParamsString = queryString.stringify(queryParams).toString();
      var hasQueryParams = queryParamsString !== '';
      var newPath = this.originalPath;

      getRegexMatches(this.originalPath, paramRegex, function (_ref) {
        var _ref2 = slicedToArray(_ref, 3);

        var fullMatch = _ref2[0];
        var paramKey = _ref2[1];
        var paramKeyWithoutColon = _ref2[2];

        var value = params[paramKeyWithoutColon];
        newPath = value ? newPath.replace(paramKey, value) : newPath.replace('/' + paramKey, '');
      });

      return ('' + newPath + (hasQueryParams ? '?' + queryParamsString : '')).toString();
    }

    /*
     converts an array of params [123, 100] to an object
     Example: if the current this.path is /book/:id/page/:pageId it will return {id:123, pageId:100}
     */

  }, {
    key: 'getParamsObject',
    value: function getParamsObject(paramsArray) {

      var params = [];
      getRegexMatches(this.originalPath, paramRegex, function (_ref3) {
        var _ref4 = slicedToArray(_ref3, 3);

        var fullMatch = _ref4[0];
        var paramKey = _ref4[1];
        var paramKeyWithoutColon = _ref4[2];

        params.push(paramKeyWithoutColon);
      });

      var result = paramsArray.reduce(function (obj, paramValue, index) {
        obj[params[index]] = paramValue;
        return obj;
      }, {});

      return result;
    }
  }, {
    key: 'goTo',
    value: function goTo(store, paramsArr) {
      var paramsObject = this.getParamsObject(paramsArr);
      var queryParamsObject = queryString.parse(window.location.search);
      store.router.goTo(this, paramsObject, store, queryParamsObject);
    }
  }]);
  return Route;
}();

var _class;
var _descriptor;
var _descriptor2;
var _descriptor3;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

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

var RouterStore = (_class = function () {
  function RouterStore() {
    classCallCheck(this, RouterStore);

    _initDefineProp(this, 'params', _descriptor, this);

    _initDefineProp(this, 'queryParams', _descriptor2, this);

    _initDefineProp(this, 'currentView', _descriptor3, this);

    this.goTo = this.goTo.bind(this);
  }

  createClass(RouterStore, [{
    key: 'goTo',
    value: function goTo(view, paramsObj, store, queryParamsObj) {

      var nextPath = view.replaceUrlParams(paramsObj, queryParamsObj);
      var pathChanged = nextPath !== this.currentPath;

      if (!pathChanged) {
        return;
      }

      var rootViewChanged = !this.currentView || this.currentView.rootPath !== view.rootPath;
      var currentParams = mobx.toJS(this.params);
      var currentQueryParams = mobx.toJS(this.queryParams);

      var beforeExitResult = rootViewChanged && this.currentView && this.currentView.beforeExit ? this.currentView.beforeExit(this.currentView, currentParams, store, currentQueryParams) : true;
      if (beforeExitResult === false) {
        return;
      }

      var beforeEnterResult = rootViewChanged && view.beforeEnter ? view.beforeEnter(view, currentParams, store, currentQueryParams) : true;
      if (beforeEnterResult === false) {
        return;
      }

      rootViewChanged && this.currentView && this.currentView.onExit && this.currentView.onExit(this.currentView, currentParams, store, currentQueryParams);

      this.currentView = view;
      this.params = mobx.toJS(paramsObj);
      this.queryParams = mobx.toJS(queryParamsObj);
      var nextParams = mobx.toJS(paramsObj);
      var nextQueryParams = mobx.toJS(queryParamsObj);

      rootViewChanged && view.onEnter && view.onEnter(view, nextParams, store, nextQueryParams);
      !rootViewChanged && this.currentView && this.currentView.onParamsChange && this.currentView.onParamsChange(this.currentView, nextParams, store, nextQueryParams);
    }
  }, {
    key: 'currentPath',
    get: function get() {
      return this.currentView ? this.currentView.replaceUrlParams(this.params, this.queryParams) : '';
    }
  }]);
  return RouterStore;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'params', [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'queryParams', [mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'currentView', [mobx.observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'goTo', [mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'goTo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'currentPath', [mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'currentPath'), _class.prototype)), _class);

var createDirectorRouter = function createDirectorRouter(views, store) {
  new director_build_director.Router(_extends({}, viewsForDirector(views, store))).configure({
    html5history: true
  }).init();
};

var startRouter = function startRouter(views, store) {
  //create director configuration
  createDirectorRouter(views, store);

  //autorun and watch for path changes
  mobx.autorun(function () {
    var currentPath = store.router.currentPath;

    if (currentPath !== window.location.pathname) {
      window.history.pushState(null, null, currentPath);
    }
  });
};

var MobxRouter = function MobxRouter(_ref) {
  var router = _ref.store.router;
  return React.createElement(
    'div',
    null,
    router.currentView && router.currentView.component
  );
};
var MobxRouter$1 = mobxReact.observer(['store'], MobxRouter);

var Link = function Link(_ref) {
  var view = _ref.view;
  var className = _ref.className;
  var _ref$params = _ref.params;
  var params = _ref$params === undefined ? {} : _ref$params;
  var _ref$queryParams = _ref.queryParams;
  var queryParams = _ref$queryParams === undefined ? {} : _ref$queryParams;
  var _ref$store = _ref.store;
  var store = _ref$store === undefined ? {} : _ref$store;
  var _ref$refresh = _ref.refresh;
  var refresh = _ref$refresh === undefined ? false : _ref$refresh;
  var _ref$style = _ref.style;
  var style = _ref$style === undefined ? {} : _ref$style;
  var children = _ref.children;
  var _ref$title = _ref.title;
  var title = _ref$title === undefined ? children : _ref$title;
  var _ref$router = _ref.router;
  var router = _ref$router === undefined ? store.router : _ref$router;

  if (!router) {
    return console.error('The router prop must be defined for a Link component to work!');
  }
  return React.createElement(
    'a',
    {
      style: style,
      className: className,
      onClick: function onClick(e) {
        var middleClick = e.which == 2;
        var cmdOrCtrl = e.metaKey || e.ctrlKey;
        var openinNewTab = middleClick || cmdOrCtrl;
        var shouldNavigateManually = refresh || openinNewTab || cmdOrCtrl;

        if (!shouldNavigateManually) {
          e.preventDefault();
          router.goTo(view, params, store, queryParams);
        }
      },
      href: view.replaceUrlParams(params, queryParams) },
    title
  );
};

var Link$1 = mobxReact.observer(Link);

//components

exports.Route = Route;
exports.MobxRouter = MobxRouter$1;
exports.Link = Link$1;
exports.RouterStore = RouterStore;
exports.startRouter = startRouter;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
License: MIT - http://mrgnrdrck.mit-license.org

https://github.com/mroderick/PubSubJS
*/
(function (root, factory){
	'use strict';

    if (true){
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    } else if (typeof exports === 'object'){
        // CommonJS
        factory(exports);

    }

    // Browser globals
    var PubSub = {};
    root.PubSub = PubSub;
    factory(PubSub);

}(( typeof window === 'object' && window ) || this, function (PubSub){
	'use strict';

	var messages = {},
		lastUid = -1;

	function hasKeys(obj){
		var key;

		for (key in obj){
			if ( obj.hasOwnProperty(key) ){
				return true;
			}
		}
		return false;
	}

	/**
	 *	Returns a function that throws the passed exception, for use as argument for setTimeout
	 *	@param { Object } ex An Error object
	 */
	function throwException( ex ){
		return function reThrowException(){
			throw ex;
		};
	}

	function callSubscriberWithDelayedExceptions( subscriber, message, data ){
		try {
			subscriber( message, data );
		} catch( ex ){
			setTimeout( throwException( ex ), 0);
		}
	}

	function callSubscriberWithImmediateExceptions( subscriber, message, data ){
		subscriber( message, data );
	}

	function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
		var subscribers = messages[matchedMessage],
			callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
			s;

		if ( !messages.hasOwnProperty( matchedMessage ) ) {
			return;
		}

		for (s in subscribers){
			if ( subscribers.hasOwnProperty(s)){
				callSubscriber( subscribers[s], originalMessage, data );
			}
		}
	}

	function createDeliveryFunction( message, data, immediateExceptions ){
		return function deliverNamespaced(){
			var topic = String( message ),
				position = topic.lastIndexOf( '.' );

			// deliver the message as it is now
			deliverMessage(message, message, data, immediateExceptions);

			// trim the hierarchy and deliver message to each level
			while( position !== -1 ){
				topic = topic.substr( 0, position );
				position = topic.lastIndexOf('.');
				deliverMessage( message, topic, data, immediateExceptions );
			}
		};
	}

	function messageHasSubscribers( message ){
		var topic = String( message ),
			found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
			position = topic.lastIndexOf( '.' );

		while ( !found && position !== -1 ){
			topic = topic.substr( 0, position );
			position = topic.lastIndexOf( '.' );
			found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
		}

		return found;
	}

	function publish( message, data, sync, immediateExceptions ){
		var deliver = createDeliveryFunction( message, data, immediateExceptions ),
			hasSubscribers = messageHasSubscribers( message );

		if ( !hasSubscribers ){
			return false;
		}

		if ( sync === true ){
			deliver();
		} else {
			setTimeout( deliver, 0 );
		}
		return true;
	}

	/**
	 *	PubSub.publish( message[, data] ) -> Boolean
	 *	- message (String): The message to publish
	 *	- data: The data to pass to subscribers
	 *	Publishes the the message, passing the data to it's subscribers
	**/
	PubSub.publish = function( message, data ){
		return publish( message, data, false, PubSub.immediateExceptions );
	};

	/**
	 *	PubSub.publishSync( message[, data] ) -> Boolean
	 *	- message (String): The message to publish
	 *	- data: The data to pass to subscribers
	 *	Publishes the the message synchronously, passing the data to it's subscribers
	**/
	PubSub.publishSync = function( message, data ){
		return publish( message, data, true, PubSub.immediateExceptions );
	};

	/**
	 *	PubSub.subscribe( message, func ) -> String
	 *	- message (String): The message to subscribe to
	 *	- func (Function): The function to call when a new message is published
	 *	Subscribes the passed function to the passed message. Every returned token is unique and should be stored if
	 *	you need to unsubscribe
	**/
	PubSub.subscribe = function( message, func ){
		if ( typeof func !== 'function'){
			return false;
		}

		// message is not registered yet
		if ( !messages.hasOwnProperty( message ) ){
			messages[message] = {};
		}

		// forcing token as String, to allow for future expansions without breaking usage
		// and allow for easy use as key names for the 'messages' object
		var token = 'uid_' + String(++lastUid);
		messages[message][token] = func;

		// return token for unsubscribing
		return token;
	};

	/* Public: Clears all subscriptions
	 */
	PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
		messages = {};
	};

	/*Public: Clear subscriptions by the topic
	*/
	PubSub.clearSubscriptions = function clearSubscriptions(topic){
		var m;
		for (m in messages){
			if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
				delete messages[m];
			}
		}
	};

	/* Public: removes subscriptions.
	 * When passed a token, removes a specific subscription.
	 * When passed a function, removes all subscriptions for that function
	 * When passed a topic, removes all subscriptions for that topic (hierarchy)
	 *
	 * value - A token, function or topic to unsubscribe.
	 *
	 * Examples
	 *
	 *		// Example 1 - unsubscribing with a token
	 *		var token = PubSub.subscribe('mytopic', myFunc);
	 *		PubSub.unsubscribe(token);
	 *
	 *		// Example 2 - unsubscribing with a function
	 *		PubSub.unsubscribe(myFunc);
	 *
	 *		// Example 3 - unsubscribing a topic
	 *		PubSub.unsubscribe('mytopic');
	 */
	PubSub.unsubscribe = function(value){
		var isTopic    = typeof value === 'string' && messages.hasOwnProperty(value),
			isToken    = !isTopic && typeof value === 'string',
			isFunction = typeof value === 'function',
			result = false,
			m, message, t;

		if (isTopic){
			PubSub.clearSubscriptions(value);
			return;
		}

		for ( m in messages ){
			if ( messages.hasOwnProperty( m ) ){
				message = messages[m];

				if ( isToken && message[value] ){
					delete message[value];
					result = value;
					// tokens are unique, so we can just stop here
					break;
				}

				if (isFunction) {
					for ( t in message ){
						if (message.hasOwnProperty(t) && message[t] === value){
							delete message[t];
							result = true;
						}
					}
				}
			}
		}

		return result;
	};
}));


/***/ },
/* 9 */
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
/* 10 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _mobx = __webpack_require__(0);

var _lodash2 = __webpack_require__(4);

var _lodash3 = _interopRequireDefault(_lodash2);

var _globals = __webpack_require__(1);

var _globals2 = _interopRequireDefault(_globals);

var _ajax = __webpack_require__(5);

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

var _lodash = ['chunk', 'findIndex', 'findLastIndex', 'first', 'last', 'nth', 'countBy', 'every', 'filter', 'find', 'findLast', 'forEach', 'each', 'forEachRight', 'groupBy', 'map', 'orderBy', 'partition', 'reduce', 'reduceRight', 'reject', 'sample', 'sampleSize', 'shuffle', 'size', 'some', 'sortBy'];

var Collection = (_class = function () {
  _createClass(Collection, [{
    key: "ajax",
    get: function get() {
      return _globals2.default.ajax || _ajax2.default;
    }
  }]);

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

      var request = this.ajax({
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

      this.ajax({
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _mobxRouter = __webpack_require__(7);

var _mobx = __webpack_require__(0);

var _pubsub = __webpack_require__(2);

var _pubsub2 = _interopRequireDefault(_pubsub);

var _route = __webpack_require__(19);

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var RouterStore = (_class = function (_Router) {
  _inherits(RouterStore, _Router);

  function RouterStore() {
    _classCallCheck(this, RouterStore);

    return _possibleConstructorReturn(this, (RouterStore.__proto__ || Object.getPrototypeOf(RouterStore)).apply(this, arguments));
  }

  _createClass(RouterStore, [{
    key: "start",
    value: function start(stores, routes, options) {
      var _this2 = this;

      this.stores = stores;
      this.views = this._getViews(routes);

      this.rootView = routes.rootView;
      this.signInView = routes.signInView;

      this.isSignedIn = options.isSignedIn;

      _pubsub2.default.subscribe('auth.initial', function () {
        return (0, _mobxRouter.startRouter)(_this2.views, _this2.stores);
      });
    }
  }, {
    key: "navigate",
    value: function navigate(to) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.goTo(this.views[to], params);
    }
  }, {
    key: "redirectAfterSignIn",
    value: function redirectAfterSignIn() {
      this.beforeSignIn ? this.goTo(this.beforeSignIn.route, this.beforeSignIn.nextParams) : this.navigate(this.rootView);

      this.beforeSignIn = null;
    }
  }, {
    key: "replaceUrlParamsForView",
    value: function replaceUrlParamsForView(view, params) {
      return this.views[view].replaceUrlParams(params);
    }
  }, {
    key: "goTo",
    value: function goTo(view, paramsObj) {
      var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.stores;

      var currentParams = (0, _mobx.toJS)(this.params);

      if (!this._checkBeforeExit(currentParams)) return;
      if (!this._checkAuth(view, paramsObj)) return;
      if (!this._checkBeforeEnter(view, currentParams, paramsObj)) return;

      this._performOnExit(currentParams);

      this.currentView = view;
      this.params = (0, _mobx.toJS)(paramsObj);

      this._performOnEnter();
    }
  }, {
    key: "_checkBeforeExit",
    value: function _checkBeforeExit(params) {
      if (!this.currentView) return true;

      return this.currentView.beforeExit({
        route: this.currentView,
        s: this.stores,
        params: params
      });
    }
  }, {
    key: "_checkAuth",
    value: function _checkAuth(view, nextParams) {
      if (view.skipAuth) return true;

      if (!this.isSignedIn()) {
        this.beforeSignIn = { route: view, nextParams: nextParams };
        this.navigate(this.signInView);
        return false;
      }

      return true;
    }
  }, {
    key: "_checkBeforeEnter",
    value: function _checkBeforeEnter(view, params, nextParams) {
      return view.beforeEnter({ route: view, s: this.stores, params: params, nextParams: nextParams });
    }
  }, {
    key: "_performOnExit",
    value: function _performOnExit(params) {
      if (!this.currentView) return;

      this.currentView.onExit({
        route: this.currentView,
        s: this.stores,
        params: params
      });
    }
  }, {
    key: "_performOnEnter",
    value: function _performOnEnter() {
      this.currentView.onEnter({
        route: this.currentView,
        params: this.params,
        s: this.stores
      });
    }
  }, {
    key: "_getViews",
    value: function _getViews(routes) {
      var views = {};

      Object.keys(routes.views).forEach(function (key) {
        var route = routes.views[key];
        route.layout = route.layout || routes.mainLayout;
        views[key] = new _route2.default(route);
      });

      return views;
    }
  }]);

  return RouterStore;
}(_mobxRouter.RouterStore), (_applyDecoratedDescriptor(_class.prototype, "start", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "start"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "navigate", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "navigate"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "redirectAfterSignIn", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "redirectAfterSignIn"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "replaceUrlParamsForView", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "replaceUrlParamsForView"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "goTo", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "goTo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_checkAuth", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "_checkAuth"), _class.prototype)), _class);
exports.default = new RouterStore();

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(Router, _Component);

  function Router() {
    _classCallCheck(this, Router);

    return _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).apply(this, arguments));
  }

  _createClass(Router, [{
    key: "render",
    value: function render() {
      var currentView = this.props.routerStore.currentView;


      if (!currentView) return _react2.default.createElement("div", null);

      var Layout = currentView.layout;
      var Component = currentView.component;

      return _react2.default.createElement(
        Layout,
        null,
        _react2.default.createElement(Component, null)
      );
    }
  }]);

  return Router;
}(_react.Component)) || _class;

exports.default = Router;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(0);

var _model = __webpack_require__(6);

var _model2 = _interopRequireDefault(_model);

var _pubsub = __webpack_require__(2);

var _pubsub2 = _interopRequireDefault(_pubsub);

var _auth = __webpack_require__(18);

var _auth2 = _interopRequireDefault(_auth);

var _ability2 = __webpack_require__(17);

var _ability3 = _interopRequireDefault(_ability2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var User = (_class = function (_Model) {
  _inherits(User, _Model);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = User.__proto__ || Object.getPrototypeOf(User)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, "ability", _descriptor, _this), _initDefineProp(_this, "isSignedIn", _descriptor2, _this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(User, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      _pubsub2.default.subscribe('auth.validation.success', function (e, data) {
        return _this2._fromAuth(data);
      });
      _pubsub2.default.subscribe('auth.signOut.success', function (e, data) {
        return _this2._clearAttrs();
      });
    }
  }, {
    key: "allowed",
    value: function allowed() {
      var _this3 = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (0, _mobx.computed)(function () {
        var _ability;

        return (_ability = _this3.ability).allowed.apply(_ability, args);
      }).get();
    }

    // Example conditionCheckers:
    //
    // {
    //   forms: {
    //     test: {
    //       has_alerts: (value, resource) => {
    //         if (value === 'all') return true;
    //         if (value === 'yes') return resource.alerts.length > 0;
    //       }
    //     }
    //   }
    // }

  }, {
    key: "signIn",
    value: function signIn() {
      var _this4 = this;

      this.set('isBeingSaved', true);
      this.unsetErrors();

      var request = _auth2.default.emailSignIn({
        email: this.email,
        password: this.password
      });

      request.then(function () {
        _this4.set('isBeingSaved', false);
      }, function (_ref2) {
        var reason = _ref2.reason;

        _this4.set('isBeingSaved', false);
        _this4.setErrors({ email: [reason], password: [reason] });
      });

      return request;
    }
  }, {
    key: "signOut",
    value: function signOut() {
      if (!this.isSignedIn) return Promise.resolve();
      return _auth2.default.signOut();
    }
  }, {
    key: "_fromAuth",
    value: function _fromAuth(data) {
      this.isSignedIn = true;
      this.ability.setPermissions(data.permissions);

      this.fromAuth && this.fromAuth(data);
    }
  }, {
    key: "_clearAttrs",
    value: function _clearAttrs() {
      this.isSignedIn = false;
      this.ability.unsetPermissions();

      this.clearAttrs && this.clearAttrs();
    }
  }, {
    key: "conditionCheckers",
    get: function get() {
      return {};
    }
  }]);

  return User;
}(_model2.default), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "ability", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return new _ability3.default(this.conditionCheckers);
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "isSignedIn", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "signIn", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "signIn"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "signOut", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "signOut"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_fromAuth", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "_fromAuth"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "_clearAttrs", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "_clearAttrs"), _class.prototype)), _class);
exports.default = User;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

var _mobx = __webpack_require__(0);

var _lodash = __webpack_require__(4);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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

var Ability = (_class = function () {
  function Ability(conditionCheckers) {
    _classCallCheck(this, Ability);

    _initDefineProp(this, "permissions", _descriptor, this);

    this.conditionCheckers = conditionCheckers;
  }

  _createClass(Ability, [{
    key: "setPermissions",
    value: function setPermissions(permissions) {
      this.permissions.replace(permissions);
    }
  }, {
    key: "unsetPermissions",
    value: function unsetPermissions() {
      this.permissions.clear();
    }
  }, {
    key: "allowed",
    value: function allowed(resource, action) {
      var _this = this;

      return (0, _mobx.computed)(function () {
        return (0, _lodash.some)(_this.permissions, _this._checkPermission.bind(_this, resource, action));
      }).get();
    }
  }, {
    key: "_checkPermission",
    value: function _checkPermission(resource, action, permission) {
      var resourceKey = this._getResourceKey(resource);

      return permission.resource === resourceKey && permission.action === action && this._checkConditions(permission.conditions, resource, resourceKey);
    }
  }, {
    key: "_getResourceKey",
    value: function _getResourceKey(resource) {
      if ((0, _lodash.isString)(resource)) return resource;
      var key = resource.constructor.resourceKey;
      if (!key) throw "Resource key is not defined for " + resource.constructor.name;
      return key;
    }
  }, {
    key: "_checkConditions",
    value: function _checkConditions(conditions, resource, resourceKey) {
      var _this2 = this;

      if ((0, _lodash.isString)(resource) || !Object.keys(conditions).length) return true;

      return (0, _lodash.every)(Object.keys(conditions).map(function (conditionKey) {
        var checker = _this2._getConditionChecker(resourceKey, conditionKey);
        return checker(conditions[conditionKey], resource);
      }));
    }
  }, {
    key: "_getConditionChecker",
    value: function _getConditionChecker(resourceKey, conditionKey) {
      var path = [].concat(_toConsumableArray(resourceKey.split(':')), [conditionKey]).join('.');
      var checker = (0, _lodash.at)(this.conditionCheckers, path)[0];
      if (!checker) throw "Condition checker is not defined for " + path;
      return checker;
    }
  }]);

  return Ability;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "permissions", [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, "setPermissions", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setPermissions"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "unsetPermissions", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "unsetPermissions"), _class.prototype)), _class);
exports.default = Ability;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jToker = __webpack_require__(21);

var _jToker2 = _interopRequireDefault(_jToker);

var _jsCookie = __webpack_require__(24);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _pubsub = __webpack_require__(2);

var _pubsub2 = _interopRequireDefault(_pubsub);

var _globals = __webpack_require__(1);

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_jToker2.default.persistData = function (key, val, config) {
  (0, _jsCookie2.default)(key, JSON.stringify(val), {
    expires: this.getConfig(config).cookieExpiry,
    path: this.getConfig(config).cookiePath,
    domain: _globals2.default.cookieDomain
  });
};

_jToker2.default.retrieveData = function (key) {
  var val = (0, _jsCookie2.default)(key);

  try {
    return $.parseJSON(val);
  } catch (err) {
    return val && val.replace(/("|')/g, '');
  }
};

_jToker2.default.deleteData = function (key) {
  _jsCookie2.default.remove(key, {
    path: this.getConfig().cookiePath,
    domain: _globals2.default.cookieDomain
  });
};

var configAuth = function configAuth() {
  _jToker2.default.configure({
    apiUrl: _globals2.default.authApiUrl
  }).then(function (user) {
    return _pubsub2.default.publish('auth.initial.success', user);
  }, function (err) {
    return _pubsub2.default.publish('auth.initial.error', err);
  });
};

_pubsub2.default.subscribe('shared.config.success', configAuth);

exports.default = _jToker2.default;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobxRouter = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Route = function (_MobxRoute) {
  _inherits(Route, _MobxRoute);

  function Route() {
    var _ref;

    _classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Route.__proto__ || Object.getPrototypeOf(Route)).call.apply(_ref, [this].concat(args)));

    _this.onEnter = _this.onEnter || _this.emptyFunc;
    _this.onExit = _this.onExit || _this.emptyFunc;
    _this.beforeEnter = _this.beforeEnter || _this.emptyFunc;
    _this.beforeExit = _this.beforeExit || _this.emptyFunc;
    return _this;
  }

  _createClass(Route, [{
    key: "emptyFunc",
    value: function emptyFunc() {
      return true;
    }
  }]);

  return Route;
}(_mobxRouter.Route);

exports.default = Route;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {



//
// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
// Version 1.2.6
//

(function (exports) {

/*
 * browser.js: Browser specific functionality for director.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var dloc = document.location;

function dlocHashEmpty() {
  // Non-IE browsers return '' when the address bar shows '#'; Director's logic
  // assumes both mean empty.
  return dloc.hash === '' || dloc.hash === '#';
}

var listener = {
  mode: 'modern',
  hash: dloc.hash,
  history: false,

  check: function () {
    var h = dloc.hash;
    if (h != this.hash) {
      this.hash = h;
      this.onHashChanged();
    }
  },

  fire: function () {
    if (this.mode === 'modern') {
      this.history === true ? window.onpopstate() : window.onhashchange();
    }
    else {
      this.onHashChanged();
    }
  },

  init: function (fn, history) {
    var self = this;
    this.history = history;

    if (!Router.listeners) {
      Router.listeners = [];
    }

    function onchange(onChangeEvent) {
      for (var i = 0, l = Router.listeners.length; i < l; i++) {
        Router.listeners[i](onChangeEvent);
      }
    }

    //note IE8 is being counted as 'modern' because it has the hashchange event
    if ('onhashchange' in window && (document.documentMode === undefined
      || document.documentMode > 7)) {
      // At least for now HTML5 history is available for 'modern' browsers only
      if (this.history === true) {
        // There is an old bug in Chrome that causes onpopstate to fire even
        // upon initial page load. Since the handler is run manually in init(),
        // this would cause Chrome to run it twise. Currently the only
        // workaround seems to be to set the handler after the initial page load
        // http://code.google.com/p/chromium/issues/detail?id=63040
        setTimeout(function() {
          window.onpopstate = onchange;
        }, 500);
      }
      else {
        window.onhashchange = onchange;
      }
      this.mode = 'modern';
    }
    else {
      //
      // IE support, based on a concept by Erik Arvidson ...
      //
      var frame = document.createElement('iframe');
      frame.id = 'state-frame';
      frame.style.display = 'none';
      document.body.appendChild(frame);
      this.writeFrame('');

      if ('onpropertychange' in document && 'attachEvent' in document) {
        document.attachEvent('onpropertychange', function () {
          if (event.propertyName === 'location') {
            self.check();
          }
        });
      }

      window.setInterval(function () { self.check(); }, 50);

      this.onHashChanged = onchange;
      this.mode = 'legacy';
    }

    Router.listeners.push(fn);

    return this.mode;
  },

  destroy: function (fn) {
    if (!Router || !Router.listeners) {
      return;
    }

    var listeners = Router.listeners;

    for (var i = listeners.length - 1; i >= 0; i--) {
      if (listeners[i] === fn) {
        listeners.splice(i, 1);
      }
    }
  },

  setHash: function (s) {
    // Mozilla always adds an entry to the history
    if (this.mode === 'legacy') {
      this.writeFrame(s);
    }

    if (this.history === true) {
      window.history.pushState({}, document.title, s);
      // Fire an onpopstate event manually since pushing does not obviously
      // trigger the pop event.
      this.fire();
    } else {
      dloc.hash = (s[0] === '/') ? s : '/' + s;
    }
    return this;
  },

  writeFrame: function (s) {
    // IE support...
    var f = document.getElementById('state-frame');
    var d = f.contentDocument || f.contentWindow.document;
    d.open();
    d.write("<script>_hash = '" + s + "'; onload = parent.listener.syncHash;<script>");
    d.close();
  },

  syncHash: function () {
    // IE support...
    var s = this._hash;
    if (s != dloc.hash) {
      dloc.hash = s;
    }
    return this;
  },

  onHashChanged: function () {}
};

var Router = exports.Router = function (routes) {
  if (!(this instanceof Router)) return new Router(routes);

  this.params   = {};
  this.routes   = {};
  this.methods  = ['on', 'once', 'after', 'before'];
  this.scope    = [];
  this._methods = {};

  this._insert = this.insert;
  this.insert = this.insertEx;

  this.historySupport = (window.history != null ? window.history.pushState : null) != null

  this.configure();
  this.mount(routes || {});
};

Router.prototype.init = function (r) {
  var self = this
    , routeTo;
  this.handler = function(onChangeEvent) {
    var newURL = onChangeEvent && onChangeEvent.newURL || window.location.hash;
    var url = self.history === true ? self.getPath() : newURL.replace(/.*#/, '');
    self.dispatch('on', url.charAt(0) === '/' ? url : '/' + url);
  };

  listener.init(this.handler, this.history);

  if (this.history === false) {
    if (dlocHashEmpty() && r) {
      dloc.hash = r;
    } else if (!dlocHashEmpty()) {
      self.dispatch('on', '/' + dloc.hash.replace(/^(#\/|#|\/)/, ''));
    }
  }
  else {
    if (this.convert_hash_in_init) {
      // Use hash as route
      routeTo = dlocHashEmpty() && r ? r : !dlocHashEmpty() ? dloc.hash.replace(/^#/, '') : null;
      if (routeTo) {
        window.history.replaceState({}, document.title, routeTo);
      }
    }
    else {
      // Use canonical url
      routeTo = this.getPath();
    }

    // Router has been initialized, but due to the chrome bug it will not
    // yet actually route HTML5 history state changes. Thus, decide if should route.
    if (routeTo || this.run_in_init === true) {
      this.handler();
    }
  }

  return this;
};

Router.prototype.explode = function () {
  var v = this.history === true ? this.getPath() : dloc.hash;
  if (v.charAt(1) === '/') { v=v.slice(1) }
  return v.slice(1, v.length).split("/");
};

Router.prototype.setRoute = function (i, v, val) {
  var url = this.explode();

  if (typeof i === 'number' && typeof v === 'string') {
    url[i] = v;
  }
  else if (typeof val === 'string') {
    url.splice(i, v, s);
  }
  else {
    url = [i];
  }

  listener.setHash(url.join('/'));
  return url;
};

//
// ### function insertEx(method, path, route, parent)
// #### @method {string} Method to insert the specific `route`.
// #### @path {Array} Parsed path to insert the `route` at.
// #### @route {Array|function} Route handlers to insert.
// #### @parent {Object} **Optional** Parent "routes" to insert into.
// insert a callback that will only occur once per the matched route.
//
Router.prototype.insertEx = function(method, path, route, parent) {
  if (method === "once") {
    method = "on";
    route = function(route) {
      var once = false;
      return function() {
        if (once) return;
        once = true;
        return route.apply(this, arguments);
      };
    }(route);
  }
  return this._insert(method, path, route, parent);
};

Router.prototype.getRoute = function (v) {
  var ret = v;

  if (typeof v === "number") {
    ret = this.explode()[v];
  }
  else if (typeof v === "string"){
    var h = this.explode();
    ret = h.indexOf(v);
  }
  else {
    ret = this.explode();
  }

  return ret;
};

Router.prototype.destroy = function () {
  listener.destroy(this.handler);
  return this;
};

Router.prototype.getPath = function () {
  var path = window.location.pathname;
  if (path.substr(0, 1) !== '/') {
    path = '/' + path;
  }
  return path;
};
function _every(arr, iterator) {
  for (var i = 0; i < arr.length; i += 1) {
    if (iterator(arr[i], i, arr) === false) {
      return;
    }
  }
}

function _flatten(arr) {
  var flat = [];
  for (var i = 0, n = arr.length; i < n; i++) {
    flat = flat.concat(arr[i]);
  }
  return flat;
}

function _asyncEverySeries(arr, iterator, callback) {
  if (!arr.length) {
    return callback();
  }
  var completed = 0;
  (function iterate() {
    iterator(arr[completed], function(err) {
      if (err || err === false) {
        callback(err);
        callback = function() {};
      } else {
        completed += 1;
        if (completed === arr.length) {
          callback();
        } else {
          iterate();
        }
      }
    });
  })();
}

function paramifyString(str, params, mod) {
  mod = str;
  for (var param in params) {
    if (params.hasOwnProperty(param)) {
      mod = params[param](str);
      if (mod !== str) {
        break;
      }
    }
  }
  return mod === str ? "([._a-zA-Z0-9-%()]+)" : mod;
}

function regifyString(str, params) {
  var matches, last = 0, out = "";
  while (matches = str.substr(last).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/)) {
    last = matches.index + matches[0].length;
    matches[0] = matches[0].replace(/^\*/, "([_.()!\\ %@&a-zA-Z0-9-]+)");
    out += str.substr(0, matches.index) + matches[0];
  }
  str = out += str.substr(last);
  var captures = str.match(/:([^\/]+)/ig), capture, length;
  if (captures) {
    length = captures.length;
    for (var i = 0; i < length; i++) {
      capture = captures[i];
      if (capture.slice(0, 2) === "::") {
        str = capture.slice(1);
      } else {
        str = str.replace(capture, paramifyString(capture, params));
      }
    }
  }
  return str;
}

function terminator(routes, delimiter, start, stop) {
  var last = 0, left = 0, right = 0, start = (start || "(").toString(), stop = (stop || ")").toString(), i;
  for (i = 0; i < routes.length; i++) {
    var chunk = routes[i];
    if (chunk.indexOf(start, last) > chunk.indexOf(stop, last) || ~chunk.indexOf(start, last) && !~chunk.indexOf(stop, last) || !~chunk.indexOf(start, last) && ~chunk.indexOf(stop, last)) {
      left = chunk.indexOf(start, last);
      right = chunk.indexOf(stop, last);
      if (~left && !~right || !~left && ~right) {
        var tmp = routes.slice(0, (i || 1) + 1).join(delimiter);
        routes = [ tmp ].concat(routes.slice((i || 1) + 1));
      }
      last = (right > left ? right : left) + 1;
      i = 0;
    } else {
      last = 0;
    }
  }
  return routes;
}

var QUERY_SEPARATOR = /\?.*/;

Router.prototype.configure = function(options) {
  options = options || {};
  for (var i = 0; i < this.methods.length; i++) {
    this._methods[this.methods[i]] = true;
  }
  this.recurse = options.recurse || this.recurse || false;
  this.async = options.async || false;
  this.delimiter = options.delimiter || "/";
  this.strict = typeof options.strict === "undefined" ? true : options.strict;
  this.notfound = options.notfound;
  this.resource = options.resource;
  this.history = options.html5history && this.historySupport || false;
  this.run_in_init = this.history === true && options.run_handler_in_init !== false;
  this.convert_hash_in_init = this.history === true && options.convert_hash_in_init !== false;
  this.every = {
    after: options.after || null,
    before: options.before || null,
    on: options.on || null
  };
  return this;
};

Router.prototype.param = function(token, matcher) {
  if (token[0] !== ":") {
    token = ":" + token;
  }
  var compiled = new RegExp(token, "g");
  this.params[token] = function(str) {
    return str.replace(compiled, matcher.source || matcher);
  };
  return this;
};

Router.prototype.on = Router.prototype.route = function(method, path, route) {
  var self = this;
  if (!route && typeof path == "function") {
    route = path;
    path = method;
    method = "on";
  }
  if (Array.isArray(path)) {
    return path.forEach(function(p) {
      self.on(method, p, route);
    });
  }
  if (path.source) {
    path = path.source.replace(/\\\//ig, "/");
  }
  if (Array.isArray(method)) {
    return method.forEach(function(m) {
      self.on(m.toLowerCase(), path, route);
    });
  }
  path = path.split(new RegExp(this.delimiter));
  path = terminator(path, this.delimiter);
  this.insert(method, this.scope.concat(path), route);
};

Router.prototype.path = function(path, routesFn) {
  var self = this, length = this.scope.length;
  if (path.source) {
    path = path.source.replace(/\\\//ig, "/");
  }
  path = path.split(new RegExp(this.delimiter));
  path = terminator(path, this.delimiter);
  this.scope = this.scope.concat(path);
  routesFn.call(this, this);
  this.scope.splice(length, path.length);
};

Router.prototype.dispatch = function(method, path, callback) {
  var self = this, fns = this.traverse(method, path.replace(QUERY_SEPARATOR, ""), this.routes, ""), invoked = this._invoked, after;
  this._invoked = true;
  if (!fns || fns.length === 0) {
    this.last = [];
    if (typeof this.notfound === "function") {
      this.invoke([ this.notfound ], {
        method: method,
        path: path
      }, callback);
    }
    return false;
  }
  if (this.recurse === "forward") {
    fns = fns.reverse();
  }
  function updateAndInvoke() {
    self.last = fns.after;
    self.invoke(self.runlist(fns), self, callback);
  }
  after = this.every && this.every.after ? [ this.every.after ].concat(this.last) : [ this.last ];
  if (after && after.length > 0 && invoked) {
    if (this.async) {
      this.invoke(after, this, updateAndInvoke);
    } else {
      this.invoke(after, this);
      updateAndInvoke();
    }
    return true;
  }
  updateAndInvoke();
  return true;
};

Router.prototype.invoke = function(fns, thisArg, callback) {
  var self = this;
  var apply;
  if (this.async) {
    apply = function(fn, next) {
      if (Array.isArray(fn)) {
        return _asyncEverySeries(fn, apply, next);
      } else if (typeof fn == "function") {
        fn.apply(thisArg, (fns.captures || []).concat(next));
      }
    };
    _asyncEverySeries(fns, apply, function() {
      if (callback) {
        callback.apply(thisArg, arguments);
      }
    });
  } else {
    apply = function(fn) {
      if (Array.isArray(fn)) {
        return _every(fn, apply);
      } else if (typeof fn === "function") {
        return fn.apply(thisArg, fns.captures || []);
      } else if (typeof fn === "string" && self.resource) {
        self.resource[fn].apply(thisArg, fns.captures || []);
      }
    };
    _every(fns, apply);
  }
};

Router.prototype.traverse = function(method, path, routes, regexp, filter) {
  var fns = [], current, exact, match, next, that;
  function filterRoutes(routes) {
    if (!filter) {
      return routes;
    }
    function deepCopy(source) {
      var result = [];
      for (var i = 0; i < source.length; i++) {
        result[i] = Array.isArray(source[i]) ? deepCopy(source[i]) : source[i];
      }
      return result;
    }
    function applyFilter(fns) {
      for (var i = fns.length - 1; i >= 0; i--) {
        if (Array.isArray(fns[i])) {
          applyFilter(fns[i]);
          if (fns[i].length === 0) {
            fns.splice(i, 1);
          }
        } else {
          if (!filter(fns[i])) {
            fns.splice(i, 1);
          }
        }
      }
    }
    var newRoutes = deepCopy(routes);
    newRoutes.matched = routes.matched;
    newRoutes.captures = routes.captures;
    newRoutes.after = routes.after.filter(filter);
    applyFilter(newRoutes);
    return newRoutes;
  }
  if (path === this.delimiter && routes[method]) {
    next = [ [ routes.before, routes[method] ].filter(Boolean) ];
    next.after = [ routes.after ].filter(Boolean);
    next.matched = true;
    next.captures = [];
    return filterRoutes(next);
  }
  for (var r in routes) {
    if (routes.hasOwnProperty(r) && (!this._methods[r] || this._methods[r] && typeof routes[r] === "object" && !Array.isArray(routes[r]))) {
      current = exact = regexp + this.delimiter + r;
      if (!this.strict) {
        exact += "[" + this.delimiter + "]?";
      }
      match = path.match(new RegExp("^" + exact));
      if (!match) {
        continue;
      }
      if (match[0] && match[0] == path && routes[r][method]) {
        next = [ [ routes[r].before, routes[r][method] ].filter(Boolean) ];
        next.after = [ routes[r].after ].filter(Boolean);
        next.matched = true;
        next.captures = match.slice(1);
        if (this.recurse && routes === this.routes) {
          next.push([ routes.before, routes.on ].filter(Boolean));
          next.after = next.after.concat([ routes.after ].filter(Boolean));
        }
        return filterRoutes(next);
      }
      next = this.traverse(method, path, routes[r], current);
      if (next.matched) {
        if (next.length > 0) {
          fns = fns.concat(next);
        }
        if (this.recurse) {
          fns.push([ routes[r].before, routes[r].on ].filter(Boolean));
          next.after = next.after.concat([ routes[r].after ].filter(Boolean));
          if (routes === this.routes) {
            fns.push([ routes["before"], routes["on"] ].filter(Boolean));
            next.after = next.after.concat([ routes["after"] ].filter(Boolean));
          }
        }
        fns.matched = true;
        fns.captures = next.captures;
        fns.after = next.after;
        return filterRoutes(fns);
      }
    }
  }
  return false;
};

Router.prototype.insert = function(method, path, route, parent) {
  var methodType, parentType, isArray, nested, part;
  path = path.filter(function(p) {
    return p && p.length > 0;
  });
  parent = parent || this.routes;
  part = path.shift();
  if (/\:|\*/.test(part) && !/\\d|\\w/.test(part)) {
    part = regifyString(part, this.params);
  }
  if (path.length > 0) {
    parent[part] = parent[part] || {};
    return this.insert(method, path, route, parent[part]);
  }
  if (!part && !path.length && parent === this.routes) {
    methodType = typeof parent[method];
    switch (methodType) {
     case "function":
      parent[method] = [ parent[method], route ];
      return;
     case "object":
      parent[method].push(route);
      return;
     case "undefined":
      parent[method] = route;
      return;
    }
    return;
  }
  parentType = typeof parent[part];
  isArray = Array.isArray(parent[part]);
  if (parent[part] && !isArray && parentType == "object") {
    methodType = typeof parent[part][method];
    switch (methodType) {
     case "function":
      parent[part][method] = [ parent[part][method], route ];
      return;
     case "object":
      parent[part][method].push(route);
      return;
     case "undefined":
      parent[part][method] = route;
      return;
    }
  } else if (parentType == "undefined") {
    nested = {};
    nested[method] = route;
    parent[part] = nested;
    return;
  }
  throw new Error("Invalid route context: " + parentType);
};



Router.prototype.extend = function(methods) {
  var self = this, len = methods.length, i;
  function extend(method) {
    self._methods[method] = true;
    self[method] = function() {
      var extra = arguments.length === 1 ? [ method, "" ] : [ method ];
      self.on.apply(self, extra.concat(Array.prototype.slice.call(arguments)));
    };
  }
  for (i = 0; i < len; i++) {
    extend(methods[i]);
  }
};

Router.prototype.runlist = function(fns) {
  var runlist = this.every && this.every.before ? [ this.every.before ].concat(_flatten(fns)) : _flatten(fns);
  if (this.every && this.every.on) {
    runlist.push(this.every.on);
  }
  runlist.captures = fns.captures;
  runlist.source = fns.source;
  return runlist;
};

Router.prototype.mount = function(routes, path) {
  if (!routes || typeof routes !== "object" || Array.isArray(routes)) {
    return;
  }
  var self = this;
  path = path || [];
  if (!Array.isArray(path)) {
    path = path.split(self.delimiter);
  }
  function insertOrMount(route, local) {
    var rename = route, parts = route.split(self.delimiter), routeType = typeof routes[route], isRoute = parts[0] === "" || !self._methods[parts[0]], event = isRoute ? "on" : rename;
    if (isRoute) {
      rename = rename.slice((rename.match(new RegExp("^" + self.delimiter)) || [ "" ])[0].length);
      parts.shift();
    }
    if (isRoute && routeType === "object" && !Array.isArray(routes[route])) {
      local = local.concat(parts);
      self.mount(routes[route], local);
      return;
    }
    if (isRoute) {
      local = local.concat(rename.split(self.delimiter));
      local = terminator(local, self.delimiter);
    }
    self.insert(event, local, routes[route]);
  }
  for (var route in routes) {
    if (routes.hasOwnProperty(route)) {
      insertOrMount(route, path.slice(0));
    }
  }
};



}( true ? exports : window));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! j-toker - v0.0.10-beta3 - 2015-10-14
* Copyright (c) 2015 Lynn Dylan Hurley; Licensed WTFPL */
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(3),
      __webpack_require__(22),
      __webpack_require__(8),
      __webpack_require__(23)
    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(
      require('jquery'),
      require('jquery-deparam'),
      require('pubsub-js'),
      require('jquery.cookie')
    );
  } else {
    // Browser globals
    factory(window.jQuery, window.deparam, window.PubSub);
  }
}(function ($, deparam, PubSub) {
  var root = Function('return this')(); // jshint ignore:line

  // singleton baby
  if (root.auth) {
    return root.auth;
  }

  // use for IE detection
  var nav = root.navigator;

  // cookie/localStorage value keys
  var INITIAL_CONFIG_KEY  = 'default',
      SAVED_CONFIG_KEY    = 'currentConfigName',
      SAVED_CREDS_KEY     = 'authHeaders',
      FIRST_TIME_LOGIN    = 'firstTimeLogin',
      MUST_RESET_PASSWORD = 'mustResetPassword';

  // broadcast message event name constants (use constants to avoid typos)
  var VALIDATION_SUCCESS             = 'auth.validation.success',
      VALIDATION_ERROR               = 'auth.validation.error',
      EMAIL_REGISTRATION_SUCCESS     = 'auth.emailRegistration.success',
      EMAIL_REGISTRATION_ERROR       = 'auth.emailRegistration.error',
      PASSWORD_RESET_REQUEST_SUCCESS = 'auth.passwordResetRequest.success',
      PASSWORD_RESET_REQUEST_ERROR   = 'auth.passwordResetRequest.error',
      EMAIL_CONFIRMATION_SUCCESS     = 'auth.emailConfirmation.success',
      EMAIL_CONFIRMATION_ERROR       = 'auth.emailConfirmation.error',
      PASSWORD_RESET_CONFIRM_SUCCESS = 'auth.passwordResetConfirm.success',
      PASSWORD_RESET_CONFIRM_ERROR   = 'auth.passwordResetConfirm.error',
      EMAIL_SIGN_IN_SUCCESS          = 'auth.emailSignIn.success',
      EMAIL_SIGN_IN_ERROR            = 'auth.emailSignIn.error',
      OAUTH_SIGN_IN_SUCCESS          = 'auth.oAuthSignIn.success',
      OAUTH_SIGN_IN_ERROR            = 'auth.oAuthSignIn.error',
      SIGN_IN_SUCCESS                = 'auth.signIn.success',
      SIGN_IN_ERROR                  = 'auth.signIn.error',
      SIGN_OUT_SUCCESS               = 'auth.signOut.success',
      SIGN_OUT_ERROR                 = 'auth.signOut.error',
      ACCOUNT_UPDATE_SUCCESS         = 'auth.accountUpdate.success',
      ACCOUNT_UPDATE_ERROR           = 'auth.accountUpdate.error',
      DESTROY_ACCOUNT_SUCCESS        = 'auth.destroyAccount.success',
      DESTROY_ACCOUNT_ERROR          = 'auth.destroyAccount.error',
      PASSWORD_UPDATE_SUCCESS        = 'auth.passwordUpdate.success',
      PASSWORD_UPDATE_ERROR          = 'auth.passwordUpdate.error';

  var Auth = function () {
    // set flag so we know when plugin has been configured.
    this.configured = false;

    // create promise for configuration + verification
    this.configDfd = null;

    // configs hash allows for multiple configurations
    this.configs = {};

    // default config will be first named config or "default"
    this.defaultConfigKey = null;

    // flagged when users return from email confirmation
    this.firstTimeLogin = false;

    // flagged when users return from password change confirmation
    this.mustResetPassword = false;

    // save reference to user
    this.user = {};

    // oAuth promise is kept while visiting provider
    this.oAuthDfd = null;

    // timer is used to poll external auth window while authenticating via OAuth
    this.oAuthTimer = null;

    // base config from which other configs are extended
    this.configBase = {
      apiUrl:                '/api',
      signOutPath:           '/auth/sign_out',
      emailSignInPath:       '/auth/sign_in',
      emailRegistrationPath: '/auth',
      accountUpdatePath:     '/auth',
      accountDeletePath:     '/auth',
      passwordResetPath:     '/auth/password',
      passwordUpdatePath:    '/auth/password',
      tokenValidationPath:   '/auth/validate_token',
      proxyIf:               function() { return false; },
      proxyUrl:              '/proxy',
      forceHardRedirect:     false,
      storage:               'cookies',
      cookieExpiry:          14,
      cookiePath:            '/',
      initialCredentials:    null,

      passwordResetSuccessUrl: function() {
        return root.location.href;
      },

      confirmationSuccessUrl:  function() {
        return root.location.href;
      },

      tokenFormat: {
        "access-token": "{{ access-token }}",
        "token-type":   "Bearer",
        client:         "{{ client }}",
        expiry:         "{{ expiry }}",
        uid:            "{{ uid }}"
      },

      parseExpiry: function(headers){
        // convert from ruby time (seconds) to js time (millis)
        return (parseInt(headers['expiry'], 10) * 1000) || null;
      },

      handleLoginResponse: function(resp) {
        return resp.data;
      },

      handleAccountUpdateResponse: function(resp) {
        return resp.data;
      },

      handleTokenValidationResponse: function(resp) {
        return resp.data;
      },

      authProviderPaths: {
        github:    '/auth/github',
        facebook:  '/auth/facebook',
        google:    '/auth/google_oauth2'
      }
    };
  };


  // mostly for testing. reset all config values
  Auth.prototype.reset = function() {
    // clean up session without relying on `getConfig`
    this.destroySession();

    this.configs           = {};
    this.defaultConfigKey  = null;
    this.configured        = false;
    this.configDfd         = null;
    this.mustResetPassword = false;
    this.firstTimeLogin    = false;
    this.oAuthDfd          = null;
    this.willRedirect      = false;

    if (this.oAuthTimer) {
      clearTimeout(this.oAuthTimer);
      this.oAuthTimer = null;
    }

    // clear user object
    for (var key in this.user) {
      delete this.user[key];
    }

    // remove event listeners
    $(document).unbind('ajaxComplete', this.updateAuthCredentials);

    if (root.removeEventListener) {
      root.removeEventListener('message', this.handlePostMessage);
    }

    // remove global ajax "interceptors"
    $.ajaxSetup({beforeSend: undefined});
  };


  Auth.prototype.invalidateTokens = function() {
    // clear user object, but don't destroy object in case of bindings
    for (var key in this.user) {
      delete this.user[key];
    }

    // clear auth session data
    this.deleteData(SAVED_CONFIG_KEY);
    this.deleteData(SAVED_CREDS_KEY);
  };


  // throw clear errors when dependencies are not met
  Auth.prototype.checkDependencies = function() {
    var errors = [],
      warnings = [];

      if (!$) {
        throw 'jToker: jQuery not found. This module depends on jQuery.';
      }

      if (!root.localStorage && !$.cookie) {
        errors.push(
          'This browser does not support localStorage. You must install '+
            'jquery-cookie to use jToker with this browser.'
        );
      }

      if (!deparam) {
        errors.push('Dependency not met: jquery-deparam.');
      }

      if (!PubSub) {
        warnings.push(
          'jquery.ba-tinypubsub.js not found. No auth events will be broadcast.'
        );
      }

      if (errors.length) {
        var errMessage = errors.join(' ');
        throw 'jToker: Please resolve the following errors: ' + errMessage;
      }

      if (warnings.length && console && console.warn) {
        var warnMessage = warnings.join(' ');
        console.warn('jToker: Warning: ' + warnMessage);
      }
  };

  // need a way to destroy the current session without relying on `getConfig`.
  // otherwise we get into infinite loop territory.
  Auth.prototype.destroySession = function() {
    var sessionKeys = [
      SAVED_CREDS_KEY,
      SAVED_CONFIG_KEY
    ];

    for (var key in sessionKeys) {
      key = sessionKeys[key];

      // kill all local storage keys
      if (root.localStorage) {
        root.localStorage.removeItem(key);
      }

      if ($.cookie) {
        // each config may have different cookiePath settings
        for (var config in this.configs) {
          var cookiePath = this.configs[config].cookiePath;

          $.removeCookie(key, {
            path: cookiePath
          });
        }

        // remove from base path in case config is not specified
        $.removeCookie(key, {
          path: "/"
        });
      }
    }
  };


  Auth.prototype.configure = function(opts, reset) {
    // destroy all session data. useful for testing
    if (reset) {
      this.reset();
    }

    if (this.configured) {
      return this.configDfd;
    }

    // set flag so configure isn't called again (unless reset)
    this.configured = true;

    // normalize opts into object object
    if (!opts) {
      opts = {};
    }

    // normalize so opts is always an array of objects
    if (opts.constructor !== Array) {
      // single config will always be called 'default' unless set
      // by previous session
      this.defaultConfigKey = INITIAL_CONFIG_KEY;

      // config should look like {default: {...}}
      var defaultConfig = {};
      defaultConfig[this.defaultConfigKey] = opts;

      // opts should look like [{default: {...}}]
      opts = [defaultConfig];
    }

    // iterate over config items, extend each from defaults
    for (var i = 0; i < opts.length; i++) {
      var configName = getFirstObjectKey(opts[i]);

      // set first set as default config
      if (!this.defaultConfigKey) {
        this.defaultConfigKey = configName;
      }

      // save config to `configs` hash
      this.configs[configName] = $.extend(
        {}, this.configBase, opts[i][configName]
      );
    }

    // ensure that setup requirements have been met
    this.checkDependencies();

    // TODO: add config option for these bindings
    if (true) {
      // update auth creds after each request to the API
      $(document).ajaxComplete(root.auth.updateAuthCredentials);

      // intercept requests to the API, append auth headers
      $.ajaxSetup({beforeSend: root.auth.appendAuthHeaders});
    }

    // IE8 won't have this feature
    if (root.addEventListener) {
      root.addEventListener("message", this.handlePostMessage, false);
    }

    // pull creds from search bar if available
    this.processSearchParams();

    // don't validate the token if we're just going to redirect anyway.
    // otherwise the page won't have time to process the response header and
    // the token may expire before the redirected page can validate.
    if (this.willRedirect) {
      return false;
    }

    // don't validate with the server if the credentials were provided. this is
    // a case where the validation happened on the server and is being used to
    // initialize the client.
    else if (this.getConfig().initialCredentials) {
      // skip initial headers check (i.e. check was already done server-side)
      var c = this.getConfig();
      this.persistData(SAVED_CREDS_KEY, c.initialCredentials.headers);
      this.persistData(MUST_RESET_PASSWORD, c.initialCredentials.mustResetPassword);
      this.persistData(FIRST_TIME_LOGIN, c.initialCredentials.firstTimeLogin);
      this.setCurrentUser(c.initialCredentials.user);
      return new $.Deferred().resolve(c.initialCredentials.user);
    }

    // otherwise check with server if any existing tokens are found
    else {
      // validate token if set
      this.configDfd = this.validateToken({config: this.getCurrentConfigName()});
      return this.configDfd;
    }
  };


  Auth.prototype.getApiUrl = function() {
    var config = this.getConfig();
    return (config.proxyIf()) ? config.proxyUrl : config.apiUrl;
  };


  // interpolate values of tokenFormat hash with ctx, return new hash
  Auth.prototype.buildAuthHeaders = function(ctx) {
    var headers = {},
      fmt = this.getConfig().tokenFormat;

      for (var key in fmt) {
        headers[key] = tmpl(fmt[key], ctx);
      }

      return headers;
  };


  Auth.prototype.setCurrentUser = function(user) {
    // clear user object of any existing attributes
    for (var key in this.user) {
      delete this.user[key];
    }

    // save user data, preserve bindings to original user object
    $.extend(this.user, user);

    this.user.signedIn = true;
    this.user.configName = this.getCurrentConfigName();

    return this.user;
  };


  Auth.prototype.handlePostMessage = function(ev) {
    var stopListening = false;

    if (ev.data.message === 'deliverCredentials') {
      delete ev.data.message;

      var initialHeaders = root.auth.normalizeTokenKeys(ev.data),
          authHeaders    = root.auth.buildAuthHeaders(initialHeaders),
          user           = root.auth.setCurrentUser(ev.data);

      root.auth.persistData(SAVED_CREDS_KEY, authHeaders);
      root.auth.resolvePromise(OAUTH_SIGN_IN_SUCCESS, root.auth.oAuthDfd, user);
      root.auth.broadcastEvent(SIGN_IN_SUCCESS, user);
      root.auth.broadcastEvent(VALIDATION_SUCCESS, user);

      stopListening = true;
    }

    if (ev.data.message === 'authFailure') {
      root.auth.rejectPromise(
        OAUTH_SIGN_IN_ERROR,
        root.auth.oAuthDfd,
        ev.data,
        'OAuth authentication failed.'
      );

      root.auth.broadcastEvent(SIGN_IN_ERROR, ev.data);

      stopListening = true;
    }

    if (stopListening) {
      clearTimeout(root.auth.oAuthTimer);
      root.auth.oAuthTimer = null;
    }
  };


  // compensate for poor naming decisions made early on
  // TODO: fix API so this isn't necessary
  Auth.prototype.normalizeTokenKeys = function(params) {
    // normalize keys
    if (params.token) {
      params['access-token'] = params.token;
      delete params.token;
    }
    if (params.auth_token) {
      params['access-token'] = params.auth_token;
      delete params.auth_token;
    }
    if (params.client_id) {
      params.client = params.client_id;
      delete params.client_id;
    }

    if (params.config) {
      this.persistData(
        SAVED_CONFIG_KEY,
        params.config,
        params.config
      );
      delete params.config;
    }


    return params;
  };


  Auth.prototype.processSearchParams = function() {
    var searchParams  = this.getQs(),
        newHeaders    = null;

    searchParams = this.normalizeTokenKeys(searchParams);

    // only bother with this if minimum search params are present
    if (searchParams['access-token'] && searchParams.uid) {
      newHeaders = this.buildAuthHeaders(searchParams);

      // save all token headers to session
      this.persistData(SAVED_CREDS_KEY, newHeaders);

      // check if user is returning from password reset link
      if (searchParams.reset_password) {
        this.persistData(MUST_RESET_PASSWORD, true);
      }

      // check if user is returning from confirmation email
      if (searchParams.account_confirmation_success) {
        this.persistData(FIRST_TIME_LOGIN, true);
      }

      // TODO: set uri flag on devise_token_auth for OAuth confirmation
      // when using hard page redirects.

      // set qs without auth keys/values
      var newLocation = this.getLocationWithoutParams([
        'access-token',
        'token',
        'auth_token',
        'config',
        'client',
        'client_id',
        'expiry',
        'uid',
        'reset_password',
        'account_confirmation_success'
      ]);

      this.willRedirect = true;
      this.setLocation(newLocation);
    }

    return newHeaders;
  };


  // this method is tricky. we want to reconstruct the current URL with the
  // following conditions:
  // 1. search contains none of the supplied keys
  // 2. anchor search (i.e. `#/?key=val`) contains none of the supplied keys
  // 3. all of the keys NOT supplied are presevered in their original form
  // 4. url protocol, host, and path are preserved
  Auth.prototype.getLocationWithoutParams = function(keys) {
    // strip all values from both actual and anchor search params
    var newSearch   = $.param(this.stripKeys(this.getSearchQs(), keys)),
        newAnchorQs = $.param(this.stripKeys(this.getAnchorQs(), keys)),
        newAnchor   = root.location.hash.split('?')[0];

    if (newSearch) {
      newSearch = "?" + newSearch;
    }

    if (newAnchorQs) {
      newAnchor += "?" + newAnchorQs;
    }

    if (newAnchor && !newAnchor.match(/^#/)) {
      newAnchor = "#/" + newAnchor;
    }

    // reconstruct location with stripped auth keys
    var newLocation = root.location.protocol +
        '//'+
        root.location.host+
        root.location.pathname+
        newSearch+
        newAnchor;

    return newLocation;
  };


  Auth.prototype.stripKeys = function(obj, keys) {
    for (var q in keys) {
      delete obj[keys[q]];
    }

    return obj;
  };


  // abstract publish method, only use if pubsub exists.
  // TODO: allow broadcast method to be configured
  Auth.prototype.broadcastEvent = function(msg, data) {
    if (PubSub.publish) {
      PubSub.publish(msg, data);
    }
  };


  // always resolve after 0 timeout to ensure that ajaxComplete callback
  // has run before promise is resolved
  Auth.prototype.resolvePromise = function(evMsg, dfd, data) {
    var self = this,
        finished = $.Deferred();

    setTimeout(function() {
      self.broadcastEvent(evMsg, data);
      dfd.resolve(data);
      finished.resolve();
    }, 0);

    return finished.promise();
  };


  Auth.prototype.rejectPromise = function(evMsg, dfd, data, reason) {
    var self = this;

    // jQuery has a strange way of returning error responses...
    data = $.parseJSON((data && data.responseText) || '{}');

    // always reject after 0 timeout to ensure that ajaxComplete callback
    // has run before promise is rejected
    setTimeout(function() {
      self.broadcastEvent(evMsg, data);
      dfd.reject({
        reason: reason,
        data: data
      });
    }, 0);

    return dfd;
  };


  // TODO: document
  Auth.prototype.validateToken = function(opts) {
    if (!opts) {
      opts = {};
    }

    if (!opts.config) {
      opts.config = this.getCurrentConfigName();
    }

    // if this check is already in progress, return existing promise
    if (this.configDfd) {
      return this.configDfd;
    }

    var dfd = $.Deferred();

    // no creds, reject promise without making API call
    if (!this.retrieveData(SAVED_CREDS_KEY)) {
      // clear any saved session data
      this.invalidateTokens();

      // reject promise, broadcast event
      this.rejectPromise(
        VALIDATION_ERROR,
        dfd,
        {},
        'Cannot validate token; no token found.'
      );
    } else {
      var config = this.getConfig(opts.config),
          url    = this.getApiUrl() + config.tokenValidationPath;

      // found saved creds, verify with API
      $.ajax({
        url:     url,
        context: this,

        success: function(resp) {
          var user = config.handleTokenValidationResponse(resp);

          this.setCurrentUser(user);

          if (this.retrieveData(FIRST_TIME_LOGIN)) {
            this.broadcastEvent(EMAIL_CONFIRMATION_SUCCESS, resp);
            this.persistData(FIRST_TIME_LOGIN, false);
            this.firstTimeLogin = true;
          }


          if (this.retrieveData(MUST_RESET_PASSWORD)) {
            this.broadcastEvent(PASSWORD_RESET_CONFIRM_SUCCESS, resp);
            this.persistData(MUST_RESET_PASSWORD, false);
            this.mustResetPassword = true;
          }

          this.resolvePromise(VALIDATION_SUCCESS, dfd, this.user);
        },

        error: function(resp) {
          // clear any saved session data
          this.invalidateTokens();


          if (this.retrieveData(FIRST_TIME_LOGIN)) {
            this.broadcastEvent(EMAIL_CONFIRMATION_ERROR, resp);
            this.persistData(FIRST_TIME_LOGIN, false);
          }

          if (this.retrieveData(MUST_RESET_PASSWORD)) {
            this.broadcastEvent(PASSWORD_RESET_CONFIRM_ERROR, resp);
            this.persistData(MUST_RESET_PASSWORD, false);
          }

          this.rejectPromise(
            VALIDATION_ERROR,
            dfd,
            resp,
            'Cannot validate token; token rejected by server.'
          );
        }
      });
    }

    return dfd.promise();
  };


  // TODO: document
  Auth.prototype.emailSignUp = function(opts) {
    // normalize opts
    if (!opts) {
      opts = {};
    }

    var config = this.getConfig(opts.config),
        url    = this.getApiUrl() + config.emailRegistrationPath,
        dfd    = $.Deferred();

    opts.config_name = opts.config;
    delete opts.config;

    opts.confirm_success_url = config.confirmationSuccessUrl();

    $.ajax({
      url: url,
      context: this,
      method: 'POST',
      data: opts,

      success: function(resp) {
        this.resolvePromise(EMAIL_REGISTRATION_SUCCESS, dfd, resp);
      },

      error: function(resp) {
        this.rejectPromise(
          EMAIL_REGISTRATION_ERROR,
          dfd,
          resp,
          'Failed to submit email registration.'
        );
      }
    });

    return dfd.promise();
  };


  Auth.prototype.emailSignIn = function(opts) {
    // normalize opts
    if (!opts) {
      opts = {};
    }

    var config = this.getConfig(opts.config),
        url    = this.getApiUrl() + config.emailSignInPath,
        dfd    = $.Deferred();

    // don't send config name to API
    delete opts.config;

    $.ajax({
      url: url,
      context: this,
      method: 'POST',
      data: opts,

      success: function(resp) {
        // return user attrs as directed by config
        var user = config.handleLoginResponse(resp);

        // save user data, preserve bindings to original user object
        this.setCurrentUser(user);

        this.resolvePromise(EMAIL_SIGN_IN_SUCCESS, dfd, resp);
        this.broadcastEvent(SIGN_IN_SUCCESS, user);
        this.broadcastEvent(VALIDATION_SUCCESS, this.user);
      },

      error: function(resp) {
        this.rejectPromise(
          EMAIL_SIGN_IN_ERROR,
          dfd,
          resp,
          'Invalid credentials.'
        );

        this.broadcastEvent(SIGN_IN_ERROR, resp);
      }
    });

    return dfd.promise();
  };


  // ping auth window to see if user has completed authentication.
  // this method will be recursively called until:
  // 1. user completes authentication
  // 2. user fails authentication
  // 3. auth window is closed
  Auth.prototype.listenForCredentials = function(popup) {
    var self = this;
    if (popup.closed) {
      self.rejectPromise(
        OAUTH_SIGN_IN_ERROR,
        self.oAuthDfd,
        null,
        'OAuth window was closed bofore registration was completed.'
      );
    } else {
      popup.postMessage('requestCredentials', '*');
      self.oAuthTimer = setTimeout(function() {
        self.listenForCredentials(popup);
      }, 500);
    }
  };


  Auth.prototype.openAuthWindow = function(url) {
    if (this.getConfig().forceHardRedirect || root.isIE()) {
      // redirect to external auth provider. credentials should be
      // provided in location search hash upon return
      this.setLocation(url);
    } else {
      // open popup to external auth provider
      var popup = this.createPopup(url);

      // listen for postMessage response
      this.listenForCredentials(popup);
    }
  };


  Auth.prototype.buildOAuthUrl = function(configName, params, providerPath) {
    var oAuthUrl = this.getConfig().apiUrl + providerPath +
        '?auth_origin_url='+encodeURIComponent(root.location.href) +
        '&config_name='+encodeURIComponent(configName || this.getCurrentConfigName()) +
        "&omniauth_window_type=newWindow";

    if (params) {
      for(var key in params) {
        oAuthUrl += '&';
        oAuthUrl += encodeURIComponent(key);
        oAuthUrl += '=';
        oAuthUrl += encodeURIComponent(params[key]);
      }
    }

    return oAuthUrl;
  };


  Auth.prototype.oAuthSignIn = function(opts) {
    // normalize opts
    if (!opts) {
      opts = {};
    }

    if (!opts.provider) {
      throw 'jToker: provider param undefined for `oAuthSignIn` method.';
    }


    var config       = this.getConfig(opts.config),
        providerPath = config.authProviderPaths[opts.provider],
        oAuthUrl     = this.buildOAuthUrl(opts.config, opts.params, providerPath);

    if (!providerPath) {
      throw 'jToker: providerPath not found for provider: '+opts.provider;
    }

    // save oAuth promise until response is received
    this.oAuthDfd = $.Deferred();

    // open link to provider auth screen
    this.openAuthWindow(oAuthUrl);

    return this.oAuthDfd.promise();
  };


  Auth.prototype.signOut = function(opts) {
    if (!opts) {
      opts = {};
    }

    var config     = this.getConfig(opts.config),
        signOutUrl = this.getApiUrl() + config.signOutPath,
        dfd        = $.Deferred();

    $.ajax({
      url: signOutUrl,
      context: this,
      method: 'DELETE',

      success: function(resp) {
        this.resolvePromise(SIGN_OUT_SUCCESS, dfd, resp);
      },

      error: function(resp) {
        this.rejectPromise(
          SIGN_OUT_ERROR,
          dfd,
          resp,
          'Failed to sign out.'
        );
      },

      complete: function() {
        this.invalidateTokens();
      }
    });

    return dfd.promise();
  };


  Auth.prototype.updateAccount = function(opts) {
    if (!opts) {
      opts = {};
    }

    var config = this.getConfig(opts.config),
        url    = this.getApiUrl() + config.accountUpdatePath,
        dfd    = $.Deferred();

    delete opts.config;

    $.ajax({
      url: url,
      context: this,
      method: 'PUT',
      data: opts,

      success: function(resp) {
        var user = config.handleAccountUpdateResponse(resp);
        this.setCurrentUser(user);
        this.resolvePromise(ACCOUNT_UPDATE_SUCCESS, dfd, resp);
      },

      error: function(resp) {
        this.rejectPromise(
          ACCOUNT_UPDATE_ERROR,
          dfd,
          resp,
          'Failed to update user account'
        );
      }
    });

    return dfd.promise();
  };


  Auth.prototype.destroyAccount = function(opts) {
    if (!opts) {
      opts = {};
    }

    var config = this.getConfig(opts.config),
        url    = this.getApiUrl() + config.accountDeletePath,
        dfd    = $.Deferred();

    $.ajax({
      url: url,
      context: this,
      method: 'DELETE',

      success: function(resp) {
        this.invalidateTokens();
        this.resolvePromise(DESTROY_ACCOUNT_SUCCESS, dfd, resp);
      },

      error: function(resp) {
        this.rejectPromise(
          DESTROY_ACCOUNT_ERROR,
          dfd,
          resp,
          'Failed to destroy user account'
        );
      }
    });

    return dfd.promise();
  };


  // TODO: implement re-confirmable on devise_token_auth
  //Auth.prototype.resendConfirmation = function(email) {};

  Auth.prototype.requestPasswordReset = function(opts) {
    // normalize opts
    if (!opts) {
      opts = {};
    }

    if (opts.email === undefined) {
      throw "jToker: email param undefined for `requestPasswordReset` method.";
    }

    var config = this.getConfig(opts.config),
        url    = this.getApiUrl() + config.passwordResetPath,
        dfd    = $.Deferred();

    opts.config_name = opts.config;
    delete opts.config;

    opts.redirect_url = config.passwordResetSuccessUrl();

    $.ajax({
      url: url,
      context: this,
      method: 'POST',
      data: opts,

      success: function(resp) {
        this.resolvePromise(PASSWORD_RESET_REQUEST_SUCCESS, dfd, resp);
      },

      error: function(resp) {
        this.rejectPromise(
          PASSWORD_RESET_REQUEST_ERROR,
          dfd,
          resp,
          'Failed to submit email registration.'
        );
      }
    });

    return dfd.promise();
  };


  Auth.prototype.updatePassword = function(opts) {
    if (!opts) {
      opts = {};
    }

    var config = this.getConfig(opts.config),
        url    = this.getApiUrl() + config.passwordUpdatePath,
        dfd    = $.Deferred();

    delete opts.config;

    $.ajax({
      url: url,
      context: this,
      method: 'PUT',
      data: opts,

      success: function(resp) {
        this.resolvePromise(PASSWORD_UPDATE_SUCCESS, dfd, resp);
      },

      error: function(resp) {
        this.rejectPromise(
          PASSWORD_UPDATE_ERROR,
          dfd,
          resp,
          'Failed to update password.'
        );
      }
    });

    return dfd.promise();
  };


  // abstract storing of session data
  Auth.prototype.persistData = function(key, val, config) {
    val = JSON.stringify(val);

    switch (this.getConfig(config).storage) {
      case 'localStorage':
        root.localStorage.setItem(key, val);
        break;

      default:
        $.cookie(key, val, {
          expires: this.getConfig(config).cookieExpiry,
          path:    this.getConfig(config).cookiePath
        });
        break;
    }
  };


  // abstract reading of session data
  Auth.prototype.retrieveData = function(key) {
    var val = null;

    switch (this.getConfig().storage) {
      case 'localStorage':
        val = root.localStorage.getItem(key);
        break;

      default:
        val = $.cookie(key);
        break;
    }

    // if value is a simple string, the parser will fail. in that case, simply
    // unescape the quotes and return the string.
    try {
      // return parsed json response
      return $.parseJSON(val);
    } catch (err) {
      // unescape quotes
      return unescapeQuotes(val);
    }
  };


  // this method cannot rely on `retrieveData` because `retrieveData` relies
  // on `getConfig` and we need to get the config name before `getConfig` can
  // be called. TL;DR prevent infinite loop by checking all forms of storage
  // and returning the first config name found
  Auth.prototype.getCurrentConfigName = function() {
    var configName = null;

    if (this.getQs().config) {
      configName = this.getQs().config;
    }

    if ($.cookie && !configName) {
      configName = $.cookie(SAVED_CONFIG_KEY);
    }

    if (root.localStorage && !configName) {
      configName = root.localStorage.getItem(SAVED_CONFIG_KEY);
    }

    configName = configName || this.defaultConfigKey || INITIAL_CONFIG_KEY;

    return unescapeQuotes(configName);
  };


  // abstract deletion of session data
  Auth.prototype.deleteData = function(key) {
    switch (this.getConfig().storage) {
      case 'cookies':
        $.removeCookie(key, {
          path: this.getConfig().cookiePath
        });
        break;

      default:
        root.localStorage.removeItem(key);
        break;
    }
  };


  // return the current config. config will take the following precedence:
  // 1. config by name saved in cookie / localstorage (current auth)
  // 2. first available configuration
  // 2. default config
  Auth.prototype.getConfig = function(key) {
    // configure if not configured
    if (!this.configured) {
      throw 'jToker: `configure` must be run before using this plugin.';
    }

    // fall back to default unless config key is passed
    key = key || this.getCurrentConfigName();

    return this.configs[key];
  };


  // send auth credentials with all requests to the API
  Auth.prototype.appendAuthHeaders = function(xhr, settings) {
    // fetch current auth headers from storage
    var currentHeaders = root.auth.retrieveData(SAVED_CREDS_KEY);

    // check config apiUrl matches the current request url
    if (isApiRequest(settings.url) && currentHeaders) {

      // bust IE cache
      xhr.setRequestHeader(
        'If-Modified-Since',
        'Mon, 26 Jul 1997 05:00:00 GMT'
      );

      // set header for each key in `tokenFormat` config
      for (var key in root.auth.getConfig().tokenFormat) {
        xhr.setRequestHeader(key, currentHeaders[key]);
      }
    }
  };


  // update auth credentials after request is made to the API
  Auth.prototype.updateAuthCredentials = function(ev, xhr, settings) {
    // check config apiUrl matches the current response url
    if (isApiRequest(settings.url)) {
      // set header for each key in `tokenFormat` config
      var newHeaders = {};

      // set flag to ensure that we don't accidentally nuke the headers
      // if the response tokens aren't sent back from the API
      var blankHeaders = true;

      // set header key + val for each key in `tokenFormat` config
      for (var key in root.auth.getConfig().tokenFormat) {
        newHeaders[key] = xhr.getResponseHeader(key);

        if (newHeaders[key]) {
          blankHeaders = false;
        }
      }

      // persist headers for next request
      if (!blankHeaders) {
        root.auth.persistData(SAVED_CREDS_KEY, newHeaders);
      }
    }
  };


  // stub for mock overrides
  Auth.prototype.getRawSearch = function() {
    return root.location.search;
  };


  // stub for mock overrides
  Auth.prototype.getRawAnchor = function() {
    return root.location.hash;
  };


  Auth.prototype.setRawAnchor = function(a) {
    root.location.hash = a;
  };


  Auth.prototype.getAnchorSearch = function() {
    var arr = this.getRawAnchor().split('?');
    return (arr.length > 1) ? arr[1] : null;
  };


  // stub for mock overrides
  Auth.prototype.setRawSearch = function(s) {
    root.location.search = s;
  };


  // stub for mock overrides
  Auth.prototype.setSearchQs = function(params) {
    this.setRawSearch($.param(params));
    return this.getSearchQs();
  };


  Auth.prototype.setAnchorQs = function(params) {
    this.setAnchorSearch($.param(params));
    return this.getAnchorQs();
  };


  // stub for mock overrides
  Auth.prototype.setLocation = function(url) {
    root.location.replace(url);
  };


  // stub for mock overrides
  Auth.prototype.createPopup = function(url) {
    return root.open(url);
  };


  Auth.prototype.getSearchQs = function() {
    var qs    = this.getRawSearch().replace('?', ''),
        qsObj = (qs) ? deparam(qs) : {};

    return qsObj;
  };


  Auth.prototype.getAnchorQs = function() {
    var anchorQs    = this.getAnchorSearch(),
        anchorQsObj = (anchorQs) ? deparam(anchorQs) : {};

    return anchorQsObj;
  };


  // stub for mock overrides
  Auth.prototype.getQs = function() {
    return $.extend(this.getSearchQs(), this.getAnchorQs());
  };


  // private util methods
  var getFirstObjectKey = function(obj) {
    for (var key in obj) {
      return key;
    }
  };


  var unescapeQuotes = function(val) {
    return val && val.replace(/("|')/g, '');
  };


  var isApiRequest = function(url) {
    return (url.match(root.auth.getApiUrl()));
  };


  // simple string templating. stolen from:
  // http://stackoverflow.com/questions/14879866/javascript-templating-function-replace-string-and-dont-take-care-of-whitespace
  var tmpl = function(str, obj) {
    var replacer = function(wholeMatch, key) {
      return obj[key] === undefined ? wholeMatch : obj[key];
    },
    regexp = new RegExp('{{\\s*([a-z0-9-_]+)\\s*}}',"ig");

    for(var beforeReplace = ""; beforeReplace !== str; str = (beforeReplace = str).replace(regexp, replacer)){

    }
    return str;
  };


  // check if IE < 10
  root.isOldIE = function() {
    var oldIE = false,
        ua    = nav.userAgent.toLowerCase();

    if (ua && ua.indexOf('msie') !== -1) {
      var version = parseInt(ua.split('msie')[1]);
      if (version < 10) {
        oldIE = true;
      }
    }

    return oldIE;
  };


  // check if using IE
  root.isIE = function() {
    var ieLTE10 = root.isOldIE(),
        ie11    = !!nav.userAgent.match(/Trident.*rv\:11\./);

    return (ieLTE10 || ie11);
  };


  // export service
  root.auth = $.auth = new Auth();

  return root.auth;
}));


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

(function(deparam){
    if (true) {
        var jquery = __webpack_require__(3);
        module.exports = deparam(jquery);
    } else if (typeof define === 'function' && define.amd){
        define(['jquery'], function(jquery){
            return deparam(jquery);
        });
    } else {
        var global = (false || eval)('this');
        global.deparam = deparam(jQuery); // assume jQuery is in global namespace
    }
})(function ($) {
    return function( params, coerce ) {
        var obj = {},
        coerce_types = { 'true': !0, 'false': !1, 'null': null };

        // Iterate over all name=value pairs.
        $.each( params.replace( /\+/g, ' ' ).split( '&' ), function(j,v){
            var param = v.split( '=' ),
            key = decodeURIComponent( param[0] ),
            val,
            cur = obj,
            i = 0,

            // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
            // into its component parts.
            keys = key.split( '][' ),
            keys_last = keys.length - 1;

            // If the first keys part contains [ and the last ends with ], then []
            // are correctly balanced.
            if ( /\[/.test( keys[0] ) && /\]$/.test( keys[ keys_last ] ) ) {
                // Remove the trailing ] from the last keys part.
                keys[ keys_last ] = keys[ keys_last ].replace( /\]$/, '' );

                // Split first keys part into two parts on the [ and add them back onto
                // the beginning of the keys array.
                keys = keys.shift().split('[').concat( keys );

                keys_last = keys.length - 1;
            } else {
                // Basic 'foo' style key.
                keys_last = 0;
            }

            // Are we dealing with a name=value pair, or just a name?
            if ( param.length === 2 ) {
                val = decodeURIComponent( param[1] );

                // Coerce values.
                if ( coerce ) {
                    val = val && !isNaN(val)            ? +val              // number
                    : val === 'undefined'             ? undefined         // undefined
                    : coerce_types[val] !== undefined ? coerce_types[val] // true, false, null
                    : val;                                                // string
                }

                if ( keys_last ) {
                    // Complex key, build deep object structure based on a few rules:
                    // * The 'cur' pointer starts at the object top-level.
                    // * [] = array push (n is set to array length), [n] = array if n is 
                    //   numeric, otherwise object.
                    // * If at the last keys part, set the value.
                    // * For each keys part, if the current level is undefined create an
                    //   object or array based on the type of the next keys part.
                    // * Move the 'cur' pointer to the next level.
                    // * Rinse & repeat.
                    for ( ; i <= keys_last; i++ ) {
                        key = keys[i] === '' ? cur.length : keys[i];
                        cur = cur[key] = i < keys_last
                        ? cur[key] || ( keys[i+1] && isNaN( keys[i+1] ) ? {} : [] )
                        : val;
                    }

                } else {
                    // Simple key, even simpler rules, since only scalars and shallow
                    // arrays are allowed.

                    if ( $.isArray( obj[key] ) ) {
                        // val is already an array, so push on the next value.
                        obj[key].push( val );

                    } else if ( obj[key] !== undefined ) {
                        // val isn't an array, but since a second value has been specified,
                        // convert val into an array.
                        obj[key] = [ obj[key], val ];

                    } else {
                        // val is a scalar.
                        obj[key] = val;
                    }
                }

            } else if ( key ) {
                // No value was defined, so set something meaningful.
                obj[key] = coerce
                ? undefined
                : '';
            }
        });

        return obj;
    };
});


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (true) {
		// AMD
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '',
					attributes.domain ? '; domain=' + attributes.domain : '',
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-unused-vars */
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
		var test1 = new String('abc');  // eslint-disable-line
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
	} catch (e) {
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

		if (Object.getOwnPropertySymbols) {
			symbols = Object.getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(27);
var objectAssign = __webpack_require__(25);

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str) {
	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		key = decodeURIComponent(key);

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		if (ret[key] === undefined) {
			ret[key] = val;
		} else if (Array.isArray(ret[key])) {
			ret[key].push(val);
		} else {
			ret[key] = [ret[key], val];
		}
	});

	return ret;
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true
	};

	opts = objectAssign(defaults, opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				if (val2 === null) {
					result.push(encode(key, opts));
				} else {
					result.push(encode(key, opts) + '=' + encode(val2, opts));
				}
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ },
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(30);
var v4 = __webpack_require__(31);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var rng = __webpack_require__(10);
var bytesToUuid = __webpack_require__(9);

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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var rng = __webpack_require__(10);
var bytesToUuid = __webpack_require__(9);

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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.ajax = exports.pubsub = exports.Router = exports.routerStore = exports.User = exports.Model = exports.Collection = undefined;

var _collection = __webpack_require__(13);

var _collection2 = _interopRequireDefault(_collection);

var _model = __webpack_require__(6);

var _model2 = _interopRequireDefault(_model);

var _user = __webpack_require__(16);

var _user2 = _interopRequireDefault(_user);

var _routerStore = __webpack_require__(14);

var _routerStore2 = _interopRequireDefault(_routerStore);

var _router = __webpack_require__(15);

var _router2 = _interopRequireDefault(_router);

var _pubsub = __webpack_require__(2);

var _pubsub2 = _interopRequireDefault(_pubsub);

var _ajax = __webpack_require__(5);

var _ajax2 = _interopRequireDefault(_ajax);

var _globals = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components

// Entities

exports.Collection = _collection2.default;
exports.Model = _model2.default;
exports.User = _user2.default;
exports.routerStore = _routerStore2.default;
exports.Router = _router2.default;
exports.pubsub = _pubsub2.default;
exports.ajax = _ajax2.default;
exports.config = _globals.config;

// Config function

// Helpers, utilities

// Stores

/***/ }
/******/ ]);
});