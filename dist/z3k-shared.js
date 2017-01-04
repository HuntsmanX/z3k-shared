(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"), require("lodash"), require("mobx"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery", "lodash", "mobx"], factory);
	else if(typeof exports === 'object')
		exports["z3kShared"] = factory(require("jquery"), require("lodash"), require("mobx"));
	else
		root["z3kShared"] = factory(root["$"], root["_"], root["mobx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pubsub = __webpack_require__(3);

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
/* 1 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = __webpack_require__(1);

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = __webpack_require__(4);

var _urlJoin = __webpack_require__(16);

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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pubsubJs = __webpack_require__(5);

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pubsubJs2.default;

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
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
/* 6 */
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
/* 7 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20)))

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jToker = __webpack_require__(12);

var _jToker2 = _interopRequireDefault(_jToker);

var _jsCookie = __webpack_require__(15);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _pubsub = __webpack_require__(3);

var _pubsub2 = _interopRequireDefault(_pubsub);

var _globals = __webpack_require__(0);

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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _mobx = __webpack_require__(8);

var _lodash2 = __webpack_require__(4);

var _lodash3 = _interopRequireDefault(_lodash2);

var _globals = __webpack_require__(0);

var _globals2 = _interopRequireDefault(_globals);

var _ajax = __webpack_require__(2);

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

var _mobx = __webpack_require__(8);

var _lodash = __webpack_require__(4);

var _uuid = __webpack_require__(17);

var _uuid2 = _interopRequireDefault(_uuid);

var _globals = __webpack_require__(0);

var _globals2 = _interopRequireDefault(_globals);

var _ajax = __webpack_require__(2);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! j-toker - v0.0.10-beta3 - 2015-10-14
* Copyright (c) 2015 Lynn Dylan Hurley; Licensed WTFPL */
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(1),
      __webpack_require__(13),
      __webpack_require__(5),
      __webpack_require__(14)
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

(function(deparam){
    if (true) {
        var jquery = __webpack_require__(1);
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
/* 14 */
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
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(18);
var v4 = __webpack_require__(19);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var rng = __webpack_require__(7);
var bytesToUuid = __webpack_require__(6);

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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

var rng = __webpack_require__(7);
var bytesToUuid = __webpack_require__(6);

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
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.auth = exports.ajax = exports.pubsub = exports.Model = exports.Collection = undefined;

var _collection = __webpack_require__(10);

var _collection2 = _interopRequireDefault(_collection);

var _model = __webpack_require__(11);

var _model2 = _interopRequireDefault(_model);

var _pubsub = __webpack_require__(3);

var _pubsub2 = _interopRequireDefault(_pubsub);

var _ajax = __webpack_require__(2);

var _ajax2 = _interopRequireDefault(_ajax);

var _auth = __webpack_require__(9);

var _auth2 = _interopRequireDefault(_auth);

var _globals = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helpers, utilities

// Entities

exports.Collection = _collection2.default;
exports.Model = _model2.default;
exports.pubsub = _pubsub2.default;
exports.ajax = _ajax2.default;
exports.auth = _auth2.default;
exports.config = _globals.config;

// Config function

/***/ }
/******/ ]);
});