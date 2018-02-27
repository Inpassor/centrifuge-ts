(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (true)
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(21)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    /* CommonJS */ else {}

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.proto = (function() {
    
        /**
         * Namespace proto.
         * @exports proto
         * @namespace
         */
        var proto = {};
    
        proto.Error = (function() {
    
            /**
             * Properties of an Error.
             * @memberof proto
             * @interface IError
             * @property {number|null} [code] Error code
             * @property {string|null} [message] Error message
             */
    
            /**
             * Constructs a new Error.
             * @memberof proto
             * @classdesc Represents an Error.
             * @implements IError
             * @constructor
             * @param {proto.IError=} [properties] Properties to set
             */
            function Error(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Error code.
             * @member {number} code
             * @memberof proto.Error
             * @instance
             */
            Error.prototype.code = 0;
    
            /**
             * Error message.
             * @member {string} message
             * @memberof proto.Error
             * @instance
             */
            Error.prototype.message = "";
    
            /**
             * Creates a new Error instance using the specified properties.
             * @function create
             * @memberof proto.Error
             * @static
             * @param {proto.IError=} [properties] Properties to set
             * @returns {proto.Error} Error instance
             */
            Error.create = function create(properties) {
                return new Error(properties);
            };
    
            /**
             * Encodes the specified Error message. Does not implicitly {@link proto.Error.verify|verify} messages.
             * @function encode
             * @memberof proto.Error
             * @static
             * @param {proto.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && message.hasOwnProperty("code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                if (message.message != null && message.hasOwnProperty("message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };
    
            /**
             * Encodes the specified Error message, length delimited. Does not implicitly {@link proto.Error.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Error
             * @static
             * @param {proto.IError} message Error message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Error.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Error();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.code = reader.uint32();
                        break;
                    case 2:
                        message.message = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Error message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Error
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Error} Error
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Error.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Error message.
             * @function verify
             * @memberof proto.Error
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Error.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };
    
            /**
             * Creates an Error message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Error
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Error} Error
             */
            Error.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Error)
                    return object;
                var message = new $root.proto.Error();
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };
    
            /**
             * Creates a plain object from an Error message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Error
             * @static
             * @param {proto.Error} message Error
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Error.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.code = 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };
    
            /**
             * Converts this Error to JSON.
             * @function toJSON
             * @memberof proto.Error
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Error.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Error;
        })();
    
        /**
         * MethodType enum.
         * @name proto.MethodType
         * @enum {string}
         * @property {number} CONNECT=0 CONNECT value
         * @property {number} REFRESH=1 REFRESH value
         * @property {number} SUBSCRIBE=2 SUBSCRIBE value
         * @property {number} UNSUBSCRIBE=3 UNSUBSCRIBE value
         * @property {number} PUBLISH=4 PUBLISH value
         * @property {number} PRESENCE=5 PRESENCE value
         * @property {number} PRESENCE_STATS=6 PRESENCE_STATS value
         * @property {number} HISTORY=7 HISTORY value
         * @property {number} PING=8 PING value
         * @property {number} RPC=9 RPC value
         * @property {number} MESSAGE=10 MESSAGE value
         */
        proto.MethodType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CONNECT"] = 0;
            values[valuesById[1] = "REFRESH"] = 1;
            values[valuesById[2] = "SUBSCRIBE"] = 2;
            values[valuesById[3] = "UNSUBSCRIBE"] = 3;
            values[valuesById[4] = "PUBLISH"] = 4;
            values[valuesById[5] = "PRESENCE"] = 5;
            values[valuesById[6] = "PRESENCE_STATS"] = 6;
            values[valuesById[7] = "HISTORY"] = 7;
            values[valuesById[8] = "PING"] = 8;
            values[valuesById[9] = "RPC"] = 9;
            values[valuesById[10] = "MESSAGE"] = 10;
            return values;
        })();
    
        proto.Command = (function() {
    
            /**
             * Properties of a Command.
             * @memberof proto
             * @interface ICommand
             * @property {number|null} [id] Command id
             * @property {proto.MethodType|null} [method] Command method
             * @property {Uint8Array|null} [params] Command params
             */
    
            /**
             * Constructs a new Command.
             * @memberof proto
             * @classdesc Represents a Command.
             * @implements ICommand
             * @constructor
             * @param {proto.ICommand=} [properties] Properties to set
             */
            function Command(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Command id.
             * @member {number} id
             * @memberof proto.Command
             * @instance
             */
            Command.prototype.id = 0;
    
            /**
             * Command method.
             * @member {proto.MethodType} method
             * @memberof proto.Command
             * @instance
             */
            Command.prototype.method = 0;
    
            /**
             * Command params.
             * @member {Uint8Array} params
             * @memberof proto.Command
             * @instance
             */
            Command.prototype.params = $util.newBuffer([]);
    
            /**
             * Creates a new Command instance using the specified properties.
             * @function create
             * @memberof proto.Command
             * @static
             * @param {proto.ICommand=} [properties] Properties to set
             * @returns {proto.Command} Command instance
             */
            Command.create = function create(properties) {
                return new Command(properties);
            };
    
            /**
             * Encodes the specified Command message. Does not implicitly {@link proto.Command.verify|verify} messages.
             * @function encode
             * @memberof proto.Command
             * @static
             * @param {proto.ICommand} message Command message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Command.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.method != null && message.hasOwnProperty("method"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.method);
                if (message.params != null && message.hasOwnProperty("params"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.params);
                return writer;
            };
    
            /**
             * Encodes the specified Command message, length delimited. Does not implicitly {@link proto.Command.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Command
             * @static
             * @param {proto.ICommand} message Command message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Command.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Command message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Command
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Command} Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Command.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Command();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    case 2:
                        message.method = reader.int32();
                        break;
                    case 3:
                        message.params = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Command message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Command
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Command} Command
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Command.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Command message.
             * @function verify
             * @memberof proto.Command
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Command.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.method != null && message.hasOwnProperty("method"))
                    switch (message.method) {
                    default:
                        return "method: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                        break;
                    }
                if (message.params != null && message.hasOwnProperty("params"))
                    if (!(message.params && typeof message.params.length === "number" || $util.isString(message.params)))
                        return "params: buffer expected";
                return null;
            };
    
            /**
             * Creates a Command message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Command
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Command} Command
             */
            Command.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Command)
                    return object;
                var message = new $root.proto.Command();
                if (object.id != null)
                    message.id = object.id >>> 0;
                switch (object.method) {
                case "CONNECT":
                case 0:
                    message.method = 0;
                    break;
                case "REFRESH":
                case 1:
                    message.method = 1;
                    break;
                case "SUBSCRIBE":
                case 2:
                    message.method = 2;
                    break;
                case "UNSUBSCRIBE":
                case 3:
                    message.method = 3;
                    break;
                case "PUBLISH":
                case 4:
                    message.method = 4;
                    break;
                case "PRESENCE":
                case 5:
                    message.method = 5;
                    break;
                case "PRESENCE_STATS":
                case 6:
                    message.method = 6;
                    break;
                case "HISTORY":
                case 7:
                    message.method = 7;
                    break;
                case "PING":
                case 8:
                    message.method = 8;
                    break;
                case "RPC":
                case 9:
                    message.method = 9;
                    break;
                case "MESSAGE":
                case 10:
                    message.method = 10;
                    break;
                }
                if (object.params != null)
                    if (typeof object.params === "string")
                        $util.base64.decode(object.params, message.params = $util.newBuffer($util.base64.length(object.params)), 0);
                    else if (object.params.length)
                        message.params = object.params;
                return message;
            };
    
            /**
             * Creates a plain object from a Command message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Command
             * @static
             * @param {proto.Command} message Command
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Command.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.method = options.enums === String ? "CONNECT" : 0;
                    object.params = options.bytes === String ? "" : [];
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.method != null && message.hasOwnProperty("method"))
                    object.method = options.enums === String ? $root.proto.MethodType[message.method] : message.method;
                if (message.params != null && message.hasOwnProperty("params"))
                    object.params = options.bytes === String ? $util.base64.encode(message.params, 0, message.params.length) : options.bytes === Array ? Array.prototype.slice.call(message.params) : message.params;
                return object;
            };
    
            /**
             * Converts this Command to JSON.
             * @function toJSON
             * @memberof proto.Command
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Command.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Command;
        })();
    
        proto.Reply = (function() {
    
            /**
             * Properties of a Reply.
             * @memberof proto
             * @interface IReply
             * @property {number|null} [id] Reply id
             * @property {proto.IError|null} [error] Reply error
             * @property {Uint8Array|null} [result] Reply result
             */
    
            /**
             * Constructs a new Reply.
             * @memberof proto
             * @classdesc Represents a Reply.
             * @implements IReply
             * @constructor
             * @param {proto.IReply=} [properties] Properties to set
             */
            function Reply(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Reply id.
             * @member {number} id
             * @memberof proto.Reply
             * @instance
             */
            Reply.prototype.id = 0;
    
            /**
             * Reply error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.Reply
             * @instance
             */
            Reply.prototype.error = null;
    
            /**
             * Reply result.
             * @member {Uint8Array} result
             * @memberof proto.Reply
             * @instance
             */
            Reply.prototype.result = $util.newBuffer([]);
    
            /**
             * Creates a new Reply instance using the specified properties.
             * @function create
             * @memberof proto.Reply
             * @static
             * @param {proto.IReply=} [properties] Properties to set
             * @returns {proto.Reply} Reply instance
             */
            Reply.create = function create(properties) {
                return new Reply(properties);
            };
    
            /**
             * Encodes the specified Reply message. Does not implicitly {@link proto.Reply.verify|verify} messages.
             * @function encode
             * @memberof proto.Reply
             * @static
             * @param {proto.IReply} message Reply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reply.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.result);
                return writer;
            };
    
            /**
             * Encodes the specified Reply message, length delimited. Does not implicitly {@link proto.Reply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Reply
             * @static
             * @param {proto.IReply} message Reply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Reply.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Reply message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Reply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Reply} Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reply.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Reply();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.uint32();
                        break;
                    case 2:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.result = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Reply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Reply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Reply} Reply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Reply.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Reply message.
             * @function verify
             * @memberof proto.Reply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Reply.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    if (!(message.result && typeof message.result.length === "number" || $util.isString(message.result)))
                        return "result: buffer expected";
                return null;
            };
    
            /**
             * Creates a Reply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Reply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Reply} Reply
             */
            Reply.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Reply)
                    return object;
                var message = new $root.proto.Reply();
                if (object.id != null)
                    message.id = object.id >>> 0;
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.Reply.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null)
                    if (typeof object.result === "string")
                        $util.base64.decode(object.result, message.result = $util.newBuffer($util.base64.length(object.result)), 0);
                    else if (object.result.length)
                        message.result = object.result;
                return message;
            };
    
            /**
             * Creates a plain object from a Reply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Reply
             * @static
             * @param {proto.Reply} message Reply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Reply.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.error = null;
                    object.result = options.bytes === String ? "" : [];
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.bytes === String ? $util.base64.encode(message.result, 0, message.result.length) : options.bytes === Array ? Array.prototype.slice.call(message.result) : message.result;
                return object;
            };
    
            /**
             * Converts this Reply to JSON.
             * @function toJSON
             * @memberof proto.Reply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Reply.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Reply;
        })();
    
        /**
         * MessageType enum.
         * @name proto.MessageType
         * @enum {string}
         * @property {number} PUBLICATION=0 PUBLICATION value
         * @property {number} JOIN=1 JOIN value
         * @property {number} LEAVE=2 LEAVE value
         * @property {number} UNSUB=3 UNSUB value
         */
        proto.MessageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PUBLICATION"] = 0;
            values[valuesById[1] = "JOIN"] = 1;
            values[valuesById[2] = "LEAVE"] = 2;
            values[valuesById[3] = "UNSUB"] = 3;
            return values;
        })();
    
        proto.Message = (function() {
    
            /**
             * Properties of a Message.
             * @memberof proto
             * @interface IMessage
             * @property {proto.MessageType|null} [type] Message type
             * @property {string|null} [channel] Message channel
             * @property {Uint8Array|null} [data] Message data
             */
    
            /**
             * Constructs a new Message.
             * @memberof proto
             * @classdesc Represents a Message.
             * @implements IMessage
             * @constructor
             * @param {proto.IMessage=} [properties] Properties to set
             */
            function Message(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Message type.
             * @member {proto.MessageType} type
             * @memberof proto.Message
             * @instance
             */
            Message.prototype.type = 0;
    
            /**
             * Message channel.
             * @member {string} channel
             * @memberof proto.Message
             * @instance
             */
            Message.prototype.channel = "";
    
            /**
             * Message data.
             * @member {Uint8Array} data
             * @memberof proto.Message
             * @instance
             */
            Message.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new Message instance using the specified properties.
             * @function create
             * @memberof proto.Message
             * @static
             * @param {proto.IMessage=} [properties] Properties to set
             * @returns {proto.Message} Message instance
             */
            Message.create = function create(properties) {
                return new Message(properties);
            };
    
            /**
             * Encodes the specified Message message. Does not implicitly {@link proto.Message.verify|verify} messages.
             * @function encode
             * @memberof proto.Message
             * @static
             * @param {proto.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type != null && message.hasOwnProperty("type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.channel);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link proto.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Message
             * @static
             * @param {proto.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Message();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.channel = reader.string();
                        break;
                    case 3:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Message message.
             * @function verify
             * @memberof proto.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type != null && message.hasOwnProperty("type"))
                    switch (message.type) {
                    default:
                        return "type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isString(message.channel))
                        return "channel: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Message
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Message} Message
             */
            Message.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Message)
                    return object;
                var message = new $root.proto.Message();
                switch (object.type) {
                case "PUBLICATION":
                case 0:
                    message.type = 0;
                    break;
                case "JOIN":
                case 1:
                    message.type = 1;
                    break;
                case "LEAVE":
                case 2:
                    message.type = 2;
                    break;
                case "UNSUB":
                case 3:
                    message.type = 3;
                    break;
                }
                if (object.channel != null)
                    message.channel = String(object.channel);
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Message
             * @static
             * @param {proto.Message} message Message
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = options.enums === String ? "PUBLICATION" : 0;
                    object.channel = "";
                    object.data = options.bytes === String ? "" : [];
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = options.enums === String ? $root.proto.MessageType[message.type] : message.type;
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof proto.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Message;
        })();
    
        proto.ClientInfo = (function() {
    
            /**
             * Properties of a ClientInfo.
             * @memberof proto
             * @interface IClientInfo
             * @property {string|null} [user] ClientInfo user
             * @property {string|null} [client] ClientInfo client
             * @property {Uint8Array|null} [connInfo] ClientInfo connInfo
             * @property {Uint8Array|null} [chanInfo] ClientInfo chanInfo
             */
    
            /**
             * Constructs a new ClientInfo.
             * @memberof proto
             * @classdesc Represents a ClientInfo.
             * @implements IClientInfo
             * @constructor
             * @param {proto.IClientInfo=} [properties] Properties to set
             */
            function ClientInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ClientInfo user.
             * @member {string} user
             * @memberof proto.ClientInfo
             * @instance
             */
            ClientInfo.prototype.user = "";
    
            /**
             * ClientInfo client.
             * @member {string} client
             * @memberof proto.ClientInfo
             * @instance
             */
            ClientInfo.prototype.client = "";
    
            /**
             * ClientInfo connInfo.
             * @member {Uint8Array} connInfo
             * @memberof proto.ClientInfo
             * @instance
             */
            ClientInfo.prototype.connInfo = $util.newBuffer([]);
    
            /**
             * ClientInfo chanInfo.
             * @member {Uint8Array} chanInfo
             * @memberof proto.ClientInfo
             * @instance
             */
            ClientInfo.prototype.chanInfo = $util.newBuffer([]);
    
            /**
             * Creates a new ClientInfo instance using the specified properties.
             * @function create
             * @memberof proto.ClientInfo
             * @static
             * @param {proto.IClientInfo=} [properties] Properties to set
             * @returns {proto.ClientInfo} ClientInfo instance
             */
            ClientInfo.create = function create(properties) {
                return new ClientInfo(properties);
            };
    
            /**
             * Encodes the specified ClientInfo message. Does not implicitly {@link proto.ClientInfo.verify|verify} messages.
             * @function encode
             * @memberof proto.ClientInfo
             * @static
             * @param {proto.IClientInfo} message ClientInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && message.hasOwnProperty("user"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.user);
                if (message.client != null && message.hasOwnProperty("client"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.client);
                if (message.connInfo != null && message.hasOwnProperty("connInfo"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.connInfo);
                if (message.chanInfo != null && message.hasOwnProperty("chanInfo"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.chanInfo);
                return writer;
            };
    
            /**
             * Encodes the specified ClientInfo message, length delimited. Does not implicitly {@link proto.ClientInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ClientInfo
             * @static
             * @param {proto.IClientInfo} message ClientInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ClientInfo message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ClientInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ClientInfo} ClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ClientInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.user = reader.string();
                        break;
                    case 2:
                        message.client = reader.string();
                        break;
                    case 3:
                        message.connInfo = reader.bytes();
                        break;
                    case 4:
                        message.chanInfo = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ClientInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ClientInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ClientInfo} ClientInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ClientInfo message.
             * @function verify
             * @memberof proto.ClientInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user"))
                    if (!$util.isString(message.user))
                        return "user: string expected";
                if (message.client != null && message.hasOwnProperty("client"))
                    if (!$util.isString(message.client))
                        return "client: string expected";
                if (message.connInfo != null && message.hasOwnProperty("connInfo"))
                    if (!(message.connInfo && typeof message.connInfo.length === "number" || $util.isString(message.connInfo)))
                        return "connInfo: buffer expected";
                if (message.chanInfo != null && message.hasOwnProperty("chanInfo"))
                    if (!(message.chanInfo && typeof message.chanInfo.length === "number" || $util.isString(message.chanInfo)))
                        return "chanInfo: buffer expected";
                return null;
            };
    
            /**
             * Creates a ClientInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ClientInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ClientInfo} ClientInfo
             */
            ClientInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ClientInfo)
                    return object;
                var message = new $root.proto.ClientInfo();
                if (object.user != null)
                    message.user = String(object.user);
                if (object.client != null)
                    message.client = String(object.client);
                if (object.connInfo != null)
                    if (typeof object.connInfo === "string")
                        $util.base64.decode(object.connInfo, message.connInfo = $util.newBuffer($util.base64.length(object.connInfo)), 0);
                    else if (object.connInfo.length)
                        message.connInfo = object.connInfo;
                if (object.chanInfo != null)
                    if (typeof object.chanInfo === "string")
                        $util.base64.decode(object.chanInfo, message.chanInfo = $util.newBuffer($util.base64.length(object.chanInfo)), 0);
                    else if (object.chanInfo.length)
                        message.chanInfo = object.chanInfo;
                return message;
            };
    
            /**
             * Creates a plain object from a ClientInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ClientInfo
             * @static
             * @param {proto.ClientInfo} message ClientInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.user = "";
                    object.client = "";
                    object.connInfo = options.bytes === String ? "" : [];
                    object.chanInfo = options.bytes === String ? "" : [];
                }
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = message.user;
                if (message.client != null && message.hasOwnProperty("client"))
                    object.client = message.client;
                if (message.connInfo != null && message.hasOwnProperty("connInfo"))
                    object.connInfo = options.bytes === String ? $util.base64.encode(message.connInfo, 0, message.connInfo.length) : options.bytes === Array ? Array.prototype.slice.call(message.connInfo) : message.connInfo;
                if (message.chanInfo != null && message.hasOwnProperty("chanInfo"))
                    object.chanInfo = options.bytes === String ? $util.base64.encode(message.chanInfo, 0, message.chanInfo.length) : options.bytes === Array ? Array.prototype.slice.call(message.chanInfo) : message.chanInfo;
                return object;
            };
    
            /**
             * Converts this ClientInfo to JSON.
             * @function toJSON
             * @memberof proto.ClientInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ClientInfo;
        })();
    
        proto.Publication = (function() {
    
            /**
             * Properties of a Publication.
             * @memberof proto
             * @interface IPublication
             * @property {string|null} [uid] Publication uid
             * @property {Uint8Array|null} [data] Publication data
             * @property {proto.IClientInfo|null} [info] Publication info
             */
    
            /**
             * Constructs a new Publication.
             * @memberof proto
             * @classdesc Represents a Publication.
             * @implements IPublication
             * @constructor
             * @param {proto.IPublication=} [properties] Properties to set
             */
            function Publication(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Publication uid.
             * @member {string} uid
             * @memberof proto.Publication
             * @instance
             */
            Publication.prototype.uid = "";
    
            /**
             * Publication data.
             * @member {Uint8Array} data
             * @memberof proto.Publication
             * @instance
             */
            Publication.prototype.data = $util.newBuffer([]);
    
            /**
             * Publication info.
             * @member {proto.IClientInfo|null|undefined} info
             * @memberof proto.Publication
             * @instance
             */
            Publication.prototype.info = null;
    
            /**
             * Creates a new Publication instance using the specified properties.
             * @function create
             * @memberof proto.Publication
             * @static
             * @param {proto.IPublication=} [properties] Properties to set
             * @returns {proto.Publication} Publication instance
             */
            Publication.create = function create(properties) {
                return new Publication(properties);
            };
    
            /**
             * Encodes the specified Publication message. Does not implicitly {@link proto.Publication.verify|verify} messages.
             * @function encode
             * @memberof proto.Publication
             * @static
             * @param {proto.IPublication} message Publication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Publication.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                if (message.info != null && message.hasOwnProperty("info"))
                    $root.proto.ClientInfo.encode(message.info, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Publication message, length delimited. Does not implicitly {@link proto.Publication.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Publication
             * @static
             * @param {proto.IPublication} message Publication message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Publication.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Publication message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Publication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Publication} Publication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Publication.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Publication();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.string();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    case 3:
                        message.info = $root.proto.ClientInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Publication message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Publication
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Publication} Publication
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Publication.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Publication message.
             * @function verify
             * @memberof proto.Publication
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Publication.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isString(message.uid))
                        return "uid: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                if (message.info != null && message.hasOwnProperty("info")) {
                    var error = $root.proto.ClientInfo.verify(message.info);
                    if (error)
                        return "info." + error;
                }
                return null;
            };
    
            /**
             * Creates a Publication message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Publication
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Publication} Publication
             */
            Publication.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Publication)
                    return object;
                var message = new $root.proto.Publication();
                if (object.uid != null)
                    message.uid = String(object.uid);
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                if (object.info != null) {
                    if (typeof object.info !== "object")
                        throw TypeError(".proto.Publication.info: object expected");
                    message.info = $root.proto.ClientInfo.fromObject(object.info);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Publication message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Publication
             * @static
             * @param {proto.Publication} message Publication
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Publication.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.uid = "";
                    object.data = options.bytes === String ? "" : [];
                    object.info = null;
                }
                if (message.uid != null && message.hasOwnProperty("uid"))
                    object.uid = message.uid;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = $root.proto.ClientInfo.toObject(message.info, options);
                return object;
            };
    
            /**
             * Converts this Publication to JSON.
             * @function toJSON
             * @memberof proto.Publication
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Publication.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Publication;
        })();
    
        proto.Join = (function() {
    
            /**
             * Properties of a Join.
             * @memberof proto
             * @interface IJoin
             * @property {proto.IClientInfo|null} [info] Join info
             */
    
            /**
             * Constructs a new Join.
             * @memberof proto
             * @classdesc Represents a Join.
             * @implements IJoin
             * @constructor
             * @param {proto.IJoin=} [properties] Properties to set
             */
            function Join(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Join info.
             * @member {proto.IClientInfo|null|undefined} info
             * @memberof proto.Join
             * @instance
             */
            Join.prototype.info = null;
    
            /**
             * Creates a new Join instance using the specified properties.
             * @function create
             * @memberof proto.Join
             * @static
             * @param {proto.IJoin=} [properties] Properties to set
             * @returns {proto.Join} Join instance
             */
            Join.create = function create(properties) {
                return new Join(properties);
            };
    
            /**
             * Encodes the specified Join message. Does not implicitly {@link proto.Join.verify|verify} messages.
             * @function encode
             * @memberof proto.Join
             * @static
             * @param {proto.IJoin} message Join message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Join.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.info != null && message.hasOwnProperty("info"))
                    $root.proto.ClientInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Join message, length delimited. Does not implicitly {@link proto.Join.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Join
             * @static
             * @param {proto.IJoin} message Join message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Join.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Join message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Join
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Join} Join
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Join.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Join();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.info = $root.proto.ClientInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Join message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Join
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Join} Join
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Join.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Join message.
             * @function verify
             * @memberof proto.Join
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Join.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.info != null && message.hasOwnProperty("info")) {
                    var error = $root.proto.ClientInfo.verify(message.info);
                    if (error)
                        return "info." + error;
                }
                return null;
            };
    
            /**
             * Creates a Join message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Join
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Join} Join
             */
            Join.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Join)
                    return object;
                var message = new $root.proto.Join();
                if (object.info != null) {
                    if (typeof object.info !== "object")
                        throw TypeError(".proto.Join.info: object expected");
                    message.info = $root.proto.ClientInfo.fromObject(object.info);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Join message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Join
             * @static
             * @param {proto.Join} message Join
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Join.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.info = null;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = $root.proto.ClientInfo.toObject(message.info, options);
                return object;
            };
    
            /**
             * Converts this Join to JSON.
             * @function toJSON
             * @memberof proto.Join
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Join.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Join;
        })();
    
        proto.Leave = (function() {
    
            /**
             * Properties of a Leave.
             * @memberof proto
             * @interface ILeave
             * @property {proto.IClientInfo|null} [info] Leave info
             */
    
            /**
             * Constructs a new Leave.
             * @memberof proto
             * @classdesc Represents a Leave.
             * @implements ILeave
             * @constructor
             * @param {proto.ILeave=} [properties] Properties to set
             */
            function Leave(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Leave info.
             * @member {proto.IClientInfo|null|undefined} info
             * @memberof proto.Leave
             * @instance
             */
            Leave.prototype.info = null;
    
            /**
             * Creates a new Leave instance using the specified properties.
             * @function create
             * @memberof proto.Leave
             * @static
             * @param {proto.ILeave=} [properties] Properties to set
             * @returns {proto.Leave} Leave instance
             */
            Leave.create = function create(properties) {
                return new Leave(properties);
            };
    
            /**
             * Encodes the specified Leave message. Does not implicitly {@link proto.Leave.verify|verify} messages.
             * @function encode
             * @memberof proto.Leave
             * @static
             * @param {proto.ILeave} message Leave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Leave.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.info != null && message.hasOwnProperty("info"))
                    $root.proto.ClientInfo.encode(message.info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified Leave message, length delimited. Does not implicitly {@link proto.Leave.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Leave
             * @static
             * @param {proto.ILeave} message Leave message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Leave.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a Leave message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Leave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Leave} Leave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Leave.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Leave();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.info = $root.proto.ClientInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a Leave message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Leave
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Leave} Leave
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Leave.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a Leave message.
             * @function verify
             * @memberof proto.Leave
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Leave.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.info != null && message.hasOwnProperty("info")) {
                    var error = $root.proto.ClientInfo.verify(message.info);
                    if (error)
                        return "info." + error;
                }
                return null;
            };
    
            /**
             * Creates a Leave message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Leave
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Leave} Leave
             */
            Leave.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Leave)
                    return object;
                var message = new $root.proto.Leave();
                if (object.info != null) {
                    if (typeof object.info !== "object")
                        throw TypeError(".proto.Leave.info: object expected");
                    message.info = $root.proto.ClientInfo.fromObject(object.info);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a Leave message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Leave
             * @static
             * @param {proto.Leave} message Leave
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Leave.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.info = null;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = $root.proto.ClientInfo.toObject(message.info, options);
                return object;
            };
    
            /**
             * Converts this Leave to JSON.
             * @function toJSON
             * @memberof proto.Leave
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Leave.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Leave;
        })();
    
        proto.Unsub = (function() {
    
            /**
             * Properties of an Unsub.
             * @memberof proto
             * @interface IUnsub
             */
    
            /**
             * Constructs a new Unsub.
             * @memberof proto
             * @classdesc Represents an Unsub.
             * @implements IUnsub
             * @constructor
             * @param {proto.IUnsub=} [properties] Properties to set
             */
            function Unsub(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new Unsub instance using the specified properties.
             * @function create
             * @memberof proto.Unsub
             * @static
             * @param {proto.IUnsub=} [properties] Properties to set
             * @returns {proto.Unsub} Unsub instance
             */
            Unsub.create = function create(properties) {
                return new Unsub(properties);
            };
    
            /**
             * Encodes the specified Unsub message. Does not implicitly {@link proto.Unsub.verify|verify} messages.
             * @function encode
             * @memberof proto.Unsub
             * @static
             * @param {proto.IUnsub} message Unsub message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unsub.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified Unsub message, length delimited. Does not implicitly {@link proto.Unsub.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.Unsub
             * @static
             * @param {proto.IUnsub} message Unsub message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unsub.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an Unsub message from the specified reader or buffer.
             * @function decode
             * @memberof proto.Unsub
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.Unsub} Unsub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unsub.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.Unsub();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an Unsub message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.Unsub
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.Unsub} Unsub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unsub.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an Unsub message.
             * @function verify
             * @memberof proto.Unsub
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Unsub.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates an Unsub message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.Unsub
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.Unsub} Unsub
             */
            Unsub.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.Unsub)
                    return object;
                return new $root.proto.Unsub();
            };
    
            /**
             * Creates a plain object from an Unsub message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.Unsub
             * @static
             * @param {proto.Unsub} message Unsub
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Unsub.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this Unsub to JSON.
             * @function toJSON
             * @memberof proto.Unsub
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Unsub.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return Unsub;
        })();
    
        proto.ConnectRequest = (function() {
    
            /**
             * Properties of a ConnectRequest.
             * @memberof proto
             * @interface IConnectRequest
             * @property {string|null} [user] ConnectRequest user
             * @property {string|null} [exp] ConnectRequest exp
             * @property {string|null} [info] ConnectRequest info
             * @property {string|null} [opts] ConnectRequest opts
             * @property {string|null} [sign] ConnectRequest sign
             */
    
            /**
             * Constructs a new ConnectRequest.
             * @memberof proto
             * @classdesc Represents a ConnectRequest.
             * @implements IConnectRequest
             * @constructor
             * @param {proto.IConnectRequest=} [properties] Properties to set
             */
            function ConnectRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ConnectRequest user.
             * @member {string} user
             * @memberof proto.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.user = "";
    
            /**
             * ConnectRequest exp.
             * @member {string} exp
             * @memberof proto.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.exp = "";
    
            /**
             * ConnectRequest info.
             * @member {string} info
             * @memberof proto.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.info = "";
    
            /**
             * ConnectRequest opts.
             * @member {string} opts
             * @memberof proto.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.opts = "";
    
            /**
             * ConnectRequest sign.
             * @member {string} sign
             * @memberof proto.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.sign = "";
    
            /**
             * Creates a new ConnectRequest instance using the specified properties.
             * @function create
             * @memberof proto.ConnectRequest
             * @static
             * @param {proto.IConnectRequest=} [properties] Properties to set
             * @returns {proto.ConnectRequest} ConnectRequest instance
             */
            ConnectRequest.create = function create(properties) {
                return new ConnectRequest(properties);
            };
    
            /**
             * Encodes the specified ConnectRequest message. Does not implicitly {@link proto.ConnectRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.ConnectRequest
             * @static
             * @param {proto.IConnectRequest} message ConnectRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && message.hasOwnProperty("user"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.user);
                if (message.exp != null && message.hasOwnProperty("exp"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.exp);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.info);
                if (message.opts != null && message.hasOwnProperty("opts"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.opts);
                if (message.sign != null && message.hasOwnProperty("sign"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.sign);
                return writer;
            };
    
            /**
             * Encodes the specified ConnectRequest message, length delimited. Does not implicitly {@link proto.ConnectRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ConnectRequest
             * @static
             * @param {proto.IConnectRequest} message ConnectRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ConnectRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ConnectRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ConnectRequest} ConnectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ConnectRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.user = reader.string();
                        break;
                    case 2:
                        message.exp = reader.string();
                        break;
                    case 3:
                        message.info = reader.string();
                        break;
                    case 4:
                        message.opts = reader.string();
                        break;
                    case 5:
                        message.sign = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ConnectRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ConnectRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ConnectRequest} ConnectRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ConnectRequest message.
             * @function verify
             * @memberof proto.ConnectRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user"))
                    if (!$util.isString(message.user))
                        return "user: string expected";
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (!$util.isString(message.exp))
                        return "exp: string expected";
                if (message.info != null && message.hasOwnProperty("info"))
                    if (!$util.isString(message.info))
                        return "info: string expected";
                if (message.opts != null && message.hasOwnProperty("opts"))
                    if (!$util.isString(message.opts))
                        return "opts: string expected";
                if (message.sign != null && message.hasOwnProperty("sign"))
                    if (!$util.isString(message.sign))
                        return "sign: string expected";
                return null;
            };
    
            /**
             * Creates a ConnectRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ConnectRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ConnectRequest} ConnectRequest
             */
            ConnectRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ConnectRequest)
                    return object;
                var message = new $root.proto.ConnectRequest();
                if (object.user != null)
                    message.user = String(object.user);
                if (object.exp != null)
                    message.exp = String(object.exp);
                if (object.info != null)
                    message.info = String(object.info);
                if (object.opts != null)
                    message.opts = String(object.opts);
                if (object.sign != null)
                    message.sign = String(object.sign);
                return message;
            };
    
            /**
             * Creates a plain object from a ConnectRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ConnectRequest
             * @static
             * @param {proto.ConnectRequest} message ConnectRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.user = "";
                    object.exp = "";
                    object.info = "";
                    object.opts = "";
                    object.sign = "";
                }
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = message.user;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    object.exp = message.exp;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = message.info;
                if (message.opts != null && message.hasOwnProperty("opts"))
                    object.opts = message.opts;
                if (message.sign != null && message.hasOwnProperty("sign"))
                    object.sign = message.sign;
                return object;
            };
    
            /**
             * Converts this ConnectRequest to JSON.
             * @function toJSON
             * @memberof proto.ConnectRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ConnectRequest;
        })();
    
        proto.ConnectResponse = (function() {
    
            /**
             * Properties of a ConnectResponse.
             * @memberof proto
             * @interface IConnectResponse
             * @property {proto.IError|null} [error] ConnectResponse error
             * @property {proto.IConnectResult|null} [result] ConnectResponse result
             */
    
            /**
             * Constructs a new ConnectResponse.
             * @memberof proto
             * @classdesc Represents a ConnectResponse.
             * @implements IConnectResponse
             * @constructor
             * @param {proto.IConnectResponse=} [properties] Properties to set
             */
            function ConnectResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ConnectResponse error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.ConnectResponse
             * @instance
             */
            ConnectResponse.prototype.error = null;
    
            /**
             * ConnectResponse result.
             * @member {proto.IConnectResult|null|undefined} result
             * @memberof proto.ConnectResponse
             * @instance
             */
            ConnectResponse.prototype.result = null;
    
            /**
             * Creates a new ConnectResponse instance using the specified properties.
             * @function create
             * @memberof proto.ConnectResponse
             * @static
             * @param {proto.IConnectResponse=} [properties] Properties to set
             * @returns {proto.ConnectResponse} ConnectResponse instance
             */
            ConnectResponse.create = function create(properties) {
                return new ConnectResponse(properties);
            };
    
            /**
             * Encodes the specified ConnectResponse message. Does not implicitly {@link proto.ConnectResponse.verify|verify} messages.
             * @function encode
             * @memberof proto.ConnectResponse
             * @static
             * @param {proto.IConnectResponse} message ConnectResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.proto.ConnectResult.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified ConnectResponse message, length delimited. Does not implicitly {@link proto.ConnectResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ConnectResponse
             * @static
             * @param {proto.IConnectResponse} message ConnectResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ConnectResponse message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ConnectResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ConnectResponse} ConnectResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ConnectResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = $root.proto.ConnectResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ConnectResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ConnectResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ConnectResponse} ConnectResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ConnectResponse message.
             * @function verify
             * @memberof proto.ConnectResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.proto.ConnectResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };
    
            /**
             * Creates a ConnectResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ConnectResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ConnectResponse} ConnectResponse
             */
            ConnectResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ConnectResponse)
                    return object;
                var message = new $root.proto.ConnectResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.ConnectResponse.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".proto.ConnectResponse.result: object expected");
                    message.result = $root.proto.ConnectResult.fromObject(object.result);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a ConnectResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ConnectResponse
             * @static
             * @param {proto.ConnectResponse} message ConnectResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.result = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.proto.ConnectResult.toObject(message.result, options);
                return object;
            };
    
            /**
             * Converts this ConnectResponse to JSON.
             * @function toJSON
             * @memberof proto.ConnectResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ConnectResponse;
        })();
    
        proto.ConnectResult = (function() {
    
            /**
             * Properties of a ConnectResult.
             * @memberof proto
             * @interface IConnectResult
             * @property {string|null} [client] ConnectResult client
             * @property {string|null} [version] ConnectResult version
             * @property {boolean|null} [expires] ConnectResult expires
             * @property {boolean|null} [expired] ConnectResult expired
             * @property {number|null} [ttl] ConnectResult ttl
             */
    
            /**
             * Constructs a new ConnectResult.
             * @memberof proto
             * @classdesc Represents a ConnectResult.
             * @implements IConnectResult
             * @constructor
             * @param {proto.IConnectResult=} [properties] Properties to set
             */
            function ConnectResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ConnectResult client.
             * @member {string} client
             * @memberof proto.ConnectResult
             * @instance
             */
            ConnectResult.prototype.client = "";
    
            /**
             * ConnectResult version.
             * @member {string} version
             * @memberof proto.ConnectResult
             * @instance
             */
            ConnectResult.prototype.version = "";
    
            /**
             * ConnectResult expires.
             * @member {boolean} expires
             * @memberof proto.ConnectResult
             * @instance
             */
            ConnectResult.prototype.expires = false;
    
            /**
             * ConnectResult expired.
             * @member {boolean} expired
             * @memberof proto.ConnectResult
             * @instance
             */
            ConnectResult.prototype.expired = false;
    
            /**
             * ConnectResult ttl.
             * @member {number} ttl
             * @memberof proto.ConnectResult
             * @instance
             */
            ConnectResult.prototype.ttl = 0;
    
            /**
             * Creates a new ConnectResult instance using the specified properties.
             * @function create
             * @memberof proto.ConnectResult
             * @static
             * @param {proto.IConnectResult=} [properties] Properties to set
             * @returns {proto.ConnectResult} ConnectResult instance
             */
            ConnectResult.create = function create(properties) {
                return new ConnectResult(properties);
            };
    
            /**
             * Encodes the specified ConnectResult message. Does not implicitly {@link proto.ConnectResult.verify|verify} messages.
             * @function encode
             * @memberof proto.ConnectResult
             * @static
             * @param {proto.IConnectResult} message ConnectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.client != null && message.hasOwnProperty("client"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.client);
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.expires != null && message.hasOwnProperty("expires"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.expires);
                if (message.expired != null && message.hasOwnProperty("expired"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.expired);
                if (message.ttl != null && message.hasOwnProperty("ttl"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.ttl);
                return writer;
            };
    
            /**
             * Encodes the specified ConnectResult message, length delimited. Does not implicitly {@link proto.ConnectResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ConnectResult
             * @static
             * @param {proto.IConnectResult} message ConnectResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConnectResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ConnectResult message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ConnectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ConnectResult} ConnectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ConnectResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.client = reader.string();
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.expires = reader.bool();
                        break;
                    case 4:
                        message.expired = reader.bool();
                        break;
                    case 5:
                        message.ttl = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a ConnectResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ConnectResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ConnectResult} ConnectResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConnectResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ConnectResult message.
             * @function verify
             * @memberof proto.ConnectResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConnectResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.client != null && message.hasOwnProperty("client"))
                    if (!$util.isString(message.client))
                        return "client: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.expires != null && message.hasOwnProperty("expires"))
                    if (typeof message.expires !== "boolean")
                        return "expires: boolean expected";
                if (message.expired != null && message.hasOwnProperty("expired"))
                    if (typeof message.expired !== "boolean")
                        return "expired: boolean expected";
                if (message.ttl != null && message.hasOwnProperty("ttl"))
                    if (!$util.isInteger(message.ttl))
                        return "ttl: integer expected";
                return null;
            };
    
            /**
             * Creates a ConnectResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ConnectResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ConnectResult} ConnectResult
             */
            ConnectResult.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ConnectResult)
                    return object;
                var message = new $root.proto.ConnectResult();
                if (object.client != null)
                    message.client = String(object.client);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.expires != null)
                    message.expires = Boolean(object.expires);
                if (object.expired != null)
                    message.expired = Boolean(object.expired);
                if (object.ttl != null)
                    message.ttl = object.ttl >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a ConnectResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ConnectResult
             * @static
             * @param {proto.ConnectResult} message ConnectResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConnectResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.client = "";
                    object.version = "";
                    object.expires = false;
                    object.expired = false;
                    object.ttl = 0;
                }
                if (message.client != null && message.hasOwnProperty("client"))
                    object.client = message.client;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.expires != null && message.hasOwnProperty("expires"))
                    object.expires = message.expires;
                if (message.expired != null && message.hasOwnProperty("expired"))
                    object.expired = message.expired;
                if (message.ttl != null && message.hasOwnProperty("ttl"))
                    object.ttl = message.ttl;
                return object;
            };
    
            /**
             * Converts this ConnectResult to JSON.
             * @function toJSON
             * @memberof proto.ConnectResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConnectResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ConnectResult;
        })();
    
        proto.RefreshRequest = (function() {
    
            /**
             * Properties of a RefreshRequest.
             * @memberof proto
             * @interface IRefreshRequest
             * @property {string|null} [user] RefreshRequest user
             * @property {string|null} [exp] RefreshRequest exp
             * @property {string|null} [info] RefreshRequest info
             * @property {string|null} [opts] RefreshRequest opts
             * @property {string|null} [sign] RefreshRequest sign
             */
    
            /**
             * Constructs a new RefreshRequest.
             * @memberof proto
             * @classdesc Represents a RefreshRequest.
             * @implements IRefreshRequest
             * @constructor
             * @param {proto.IRefreshRequest=} [properties] Properties to set
             */
            function RefreshRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RefreshRequest user.
             * @member {string} user
             * @memberof proto.RefreshRequest
             * @instance
             */
            RefreshRequest.prototype.user = "";
    
            /**
             * RefreshRequest exp.
             * @member {string} exp
             * @memberof proto.RefreshRequest
             * @instance
             */
            RefreshRequest.prototype.exp = "";
    
            /**
             * RefreshRequest info.
             * @member {string} info
             * @memberof proto.RefreshRequest
             * @instance
             */
            RefreshRequest.prototype.info = "";
    
            /**
             * RefreshRequest opts.
             * @member {string} opts
             * @memberof proto.RefreshRequest
             * @instance
             */
            RefreshRequest.prototype.opts = "";
    
            /**
             * RefreshRequest sign.
             * @member {string} sign
             * @memberof proto.RefreshRequest
             * @instance
             */
            RefreshRequest.prototype.sign = "";
    
            /**
             * Creates a new RefreshRequest instance using the specified properties.
             * @function create
             * @memberof proto.RefreshRequest
             * @static
             * @param {proto.IRefreshRequest=} [properties] Properties to set
             * @returns {proto.RefreshRequest} RefreshRequest instance
             */
            RefreshRequest.create = function create(properties) {
                return new RefreshRequest(properties);
            };
    
            /**
             * Encodes the specified RefreshRequest message. Does not implicitly {@link proto.RefreshRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.RefreshRequest
             * @static
             * @param {proto.IRefreshRequest} message RefreshRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RefreshRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && message.hasOwnProperty("user"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.user);
                if (message.exp != null && message.hasOwnProperty("exp"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.exp);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.info);
                if (message.opts != null && message.hasOwnProperty("opts"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.opts);
                if (message.sign != null && message.hasOwnProperty("sign"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.sign);
                return writer;
            };
    
            /**
             * Encodes the specified RefreshRequest message, length delimited. Does not implicitly {@link proto.RefreshRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.RefreshRequest
             * @static
             * @param {proto.IRefreshRequest} message RefreshRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RefreshRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RefreshRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.RefreshRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.RefreshRequest} RefreshRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RefreshRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RefreshRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.user = reader.string();
                        break;
                    case 2:
                        message.exp = reader.string();
                        break;
                    case 3:
                        message.info = reader.string();
                        break;
                    case 4:
                        message.opts = reader.string();
                        break;
                    case 5:
                        message.sign = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RefreshRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.RefreshRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.RefreshRequest} RefreshRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RefreshRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RefreshRequest message.
             * @function verify
             * @memberof proto.RefreshRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RefreshRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user"))
                    if (!$util.isString(message.user))
                        return "user: string expected";
                if (message.exp != null && message.hasOwnProperty("exp"))
                    if (!$util.isString(message.exp))
                        return "exp: string expected";
                if (message.info != null && message.hasOwnProperty("info"))
                    if (!$util.isString(message.info))
                        return "info: string expected";
                if (message.opts != null && message.hasOwnProperty("opts"))
                    if (!$util.isString(message.opts))
                        return "opts: string expected";
                if (message.sign != null && message.hasOwnProperty("sign"))
                    if (!$util.isString(message.sign))
                        return "sign: string expected";
                return null;
            };
    
            /**
             * Creates a RefreshRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.RefreshRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.RefreshRequest} RefreshRequest
             */
            RefreshRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.RefreshRequest)
                    return object;
                var message = new $root.proto.RefreshRequest();
                if (object.user != null)
                    message.user = String(object.user);
                if (object.exp != null)
                    message.exp = String(object.exp);
                if (object.info != null)
                    message.info = String(object.info);
                if (object.opts != null)
                    message.opts = String(object.opts);
                if (object.sign != null)
                    message.sign = String(object.sign);
                return message;
            };
    
            /**
             * Creates a plain object from a RefreshRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.RefreshRequest
             * @static
             * @param {proto.RefreshRequest} message RefreshRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RefreshRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.user = "";
                    object.exp = "";
                    object.info = "";
                    object.opts = "";
                    object.sign = "";
                }
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = message.user;
                if (message.exp != null && message.hasOwnProperty("exp"))
                    object.exp = message.exp;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = message.info;
                if (message.opts != null && message.hasOwnProperty("opts"))
                    object.opts = message.opts;
                if (message.sign != null && message.hasOwnProperty("sign"))
                    object.sign = message.sign;
                return object;
            };
    
            /**
             * Converts this RefreshRequest to JSON.
             * @function toJSON
             * @memberof proto.RefreshRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RefreshRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RefreshRequest;
        })();
    
        proto.RefreshResponse = (function() {
    
            /**
             * Properties of a RefreshResponse.
             * @memberof proto
             * @interface IRefreshResponse
             * @property {proto.IError|null} [error] RefreshResponse error
             * @property {proto.IRefreshResult|null} [result] RefreshResponse result
             */
    
            /**
             * Constructs a new RefreshResponse.
             * @memberof proto
             * @classdesc Represents a RefreshResponse.
             * @implements IRefreshResponse
             * @constructor
             * @param {proto.IRefreshResponse=} [properties] Properties to set
             */
            function RefreshResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RefreshResponse error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.RefreshResponse
             * @instance
             */
            RefreshResponse.prototype.error = null;
    
            /**
             * RefreshResponse result.
             * @member {proto.IRefreshResult|null|undefined} result
             * @memberof proto.RefreshResponse
             * @instance
             */
            RefreshResponse.prototype.result = null;
    
            /**
             * Creates a new RefreshResponse instance using the specified properties.
             * @function create
             * @memberof proto.RefreshResponse
             * @static
             * @param {proto.IRefreshResponse=} [properties] Properties to set
             * @returns {proto.RefreshResponse} RefreshResponse instance
             */
            RefreshResponse.create = function create(properties) {
                return new RefreshResponse(properties);
            };
    
            /**
             * Encodes the specified RefreshResponse message. Does not implicitly {@link proto.RefreshResponse.verify|verify} messages.
             * @function encode
             * @memberof proto.RefreshResponse
             * @static
             * @param {proto.IRefreshResponse} message RefreshResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RefreshResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.proto.RefreshResult.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified RefreshResponse message, length delimited. Does not implicitly {@link proto.RefreshResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.RefreshResponse
             * @static
             * @param {proto.IRefreshResponse} message RefreshResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RefreshResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RefreshResponse message from the specified reader or buffer.
             * @function decode
             * @memberof proto.RefreshResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.RefreshResponse} RefreshResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RefreshResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RefreshResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = $root.proto.RefreshResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RefreshResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.RefreshResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.RefreshResponse} RefreshResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RefreshResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RefreshResponse message.
             * @function verify
             * @memberof proto.RefreshResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RefreshResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.proto.RefreshResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };
    
            /**
             * Creates a RefreshResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.RefreshResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.RefreshResponse} RefreshResponse
             */
            RefreshResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.RefreshResponse)
                    return object;
                var message = new $root.proto.RefreshResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.RefreshResponse.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".proto.RefreshResponse.result: object expected");
                    message.result = $root.proto.RefreshResult.fromObject(object.result);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a RefreshResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.RefreshResponse
             * @static
             * @param {proto.RefreshResponse} message RefreshResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RefreshResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.result = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.proto.RefreshResult.toObject(message.result, options);
                return object;
            };
    
            /**
             * Converts this RefreshResponse to JSON.
             * @function toJSON
             * @memberof proto.RefreshResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RefreshResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RefreshResponse;
        })();
    
        proto.RefreshResult = (function() {
    
            /**
             * Properties of a RefreshResult.
             * @memberof proto
             * @interface IRefreshResult
             * @property {string|null} [client] RefreshResult client
             * @property {string|null} [version] RefreshResult version
             * @property {boolean|null} [expires] RefreshResult expires
             * @property {boolean|null} [expired] RefreshResult expired
             * @property {number|null} [ttl] RefreshResult ttl
             */
    
            /**
             * Constructs a new RefreshResult.
             * @memberof proto
             * @classdesc Represents a RefreshResult.
             * @implements IRefreshResult
             * @constructor
             * @param {proto.IRefreshResult=} [properties] Properties to set
             */
            function RefreshResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RefreshResult client.
             * @member {string} client
             * @memberof proto.RefreshResult
             * @instance
             */
            RefreshResult.prototype.client = "";
    
            /**
             * RefreshResult version.
             * @member {string} version
             * @memberof proto.RefreshResult
             * @instance
             */
            RefreshResult.prototype.version = "";
    
            /**
             * RefreshResult expires.
             * @member {boolean} expires
             * @memberof proto.RefreshResult
             * @instance
             */
            RefreshResult.prototype.expires = false;
    
            /**
             * RefreshResult expired.
             * @member {boolean} expired
             * @memberof proto.RefreshResult
             * @instance
             */
            RefreshResult.prototype.expired = false;
    
            /**
             * RefreshResult ttl.
             * @member {number} ttl
             * @memberof proto.RefreshResult
             * @instance
             */
            RefreshResult.prototype.ttl = 0;
    
            /**
             * Creates a new RefreshResult instance using the specified properties.
             * @function create
             * @memberof proto.RefreshResult
             * @static
             * @param {proto.IRefreshResult=} [properties] Properties to set
             * @returns {proto.RefreshResult} RefreshResult instance
             */
            RefreshResult.create = function create(properties) {
                return new RefreshResult(properties);
            };
    
            /**
             * Encodes the specified RefreshResult message. Does not implicitly {@link proto.RefreshResult.verify|verify} messages.
             * @function encode
             * @memberof proto.RefreshResult
             * @static
             * @param {proto.IRefreshResult} message RefreshResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RefreshResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.client != null && message.hasOwnProperty("client"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.client);
                if (message.version != null && message.hasOwnProperty("version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.expires != null && message.hasOwnProperty("expires"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.expires);
                if (message.expired != null && message.hasOwnProperty("expired"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.expired);
                if (message.ttl != null && message.hasOwnProperty("ttl"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.ttl);
                return writer;
            };
    
            /**
             * Encodes the specified RefreshResult message, length delimited. Does not implicitly {@link proto.RefreshResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.RefreshResult
             * @static
             * @param {proto.IRefreshResult} message RefreshResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RefreshResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RefreshResult message from the specified reader or buffer.
             * @function decode
             * @memberof proto.RefreshResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.RefreshResult} RefreshResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RefreshResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RefreshResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.client = reader.string();
                        break;
                    case 2:
                        message.version = reader.string();
                        break;
                    case 3:
                        message.expires = reader.bool();
                        break;
                    case 4:
                        message.expired = reader.bool();
                        break;
                    case 5:
                        message.ttl = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RefreshResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.RefreshResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.RefreshResult} RefreshResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RefreshResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RefreshResult message.
             * @function verify
             * @memberof proto.RefreshResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RefreshResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.client != null && message.hasOwnProperty("client"))
                    if (!$util.isString(message.client))
                        return "client: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.expires != null && message.hasOwnProperty("expires"))
                    if (typeof message.expires !== "boolean")
                        return "expires: boolean expected";
                if (message.expired != null && message.hasOwnProperty("expired"))
                    if (typeof message.expired !== "boolean")
                        return "expired: boolean expected";
                if (message.ttl != null && message.hasOwnProperty("ttl"))
                    if (!$util.isInteger(message.ttl))
                        return "ttl: integer expected";
                return null;
            };
    
            /**
             * Creates a RefreshResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.RefreshResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.RefreshResult} RefreshResult
             */
            RefreshResult.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.RefreshResult)
                    return object;
                var message = new $root.proto.RefreshResult();
                if (object.client != null)
                    message.client = String(object.client);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.expires != null)
                    message.expires = Boolean(object.expires);
                if (object.expired != null)
                    message.expired = Boolean(object.expired);
                if (object.ttl != null)
                    message.ttl = object.ttl >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a RefreshResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.RefreshResult
             * @static
             * @param {proto.RefreshResult} message RefreshResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RefreshResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.client = "";
                    object.version = "";
                    object.expires = false;
                    object.expired = false;
                    object.ttl = 0;
                }
                if (message.client != null && message.hasOwnProperty("client"))
                    object.client = message.client;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.expires != null && message.hasOwnProperty("expires"))
                    object.expires = message.expires;
                if (message.expired != null && message.hasOwnProperty("expired"))
                    object.expired = message.expired;
                if (message.ttl != null && message.hasOwnProperty("ttl"))
                    object.ttl = message.ttl;
                return object;
            };
    
            /**
             * Converts this RefreshResult to JSON.
             * @function toJSON
             * @memberof proto.RefreshResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RefreshResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RefreshResult;
        })();
    
        proto.SubscribeRequest = (function() {
    
            /**
             * Properties of a SubscribeRequest.
             * @memberof proto
             * @interface ISubscribeRequest
             * @property {string|null} [channel] SubscribeRequest channel
             * @property {string|null} [client] SubscribeRequest client
             * @property {string|null} [info] SubscribeRequest info
             * @property {string|null} [sign] SubscribeRequest sign
             * @property {boolean|null} [recover] SubscribeRequest recover
             * @property {string|null} [last] SubscribeRequest last
             */
    
            /**
             * Constructs a new SubscribeRequest.
             * @memberof proto
             * @classdesc Represents a SubscribeRequest.
             * @implements ISubscribeRequest
             * @constructor
             * @param {proto.ISubscribeRequest=} [properties] Properties to set
             */
            function SubscribeRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SubscribeRequest channel.
             * @member {string} channel
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.channel = "";
    
            /**
             * SubscribeRequest client.
             * @member {string} client
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.client = "";
    
            /**
             * SubscribeRequest info.
             * @member {string} info
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.info = "";
    
            /**
             * SubscribeRequest sign.
             * @member {string} sign
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.sign = "";
    
            /**
             * SubscribeRequest recover.
             * @member {boolean} recover
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.recover = false;
    
            /**
             * SubscribeRequest last.
             * @member {string} last
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.last = "";
    
            /**
             * Creates a new SubscribeRequest instance using the specified properties.
             * @function create
             * @memberof proto.SubscribeRequest
             * @static
             * @param {proto.ISubscribeRequest=} [properties] Properties to set
             * @returns {proto.SubscribeRequest} SubscribeRequest instance
             */
            SubscribeRequest.create = function create(properties) {
                return new SubscribeRequest(properties);
            };
    
            /**
             * Encodes the specified SubscribeRequest message. Does not implicitly {@link proto.SubscribeRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.SubscribeRequest
             * @static
             * @param {proto.ISubscribeRequest} message SubscribeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.channel);
                if (message.client != null && message.hasOwnProperty("client"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.client);
                if (message.info != null && message.hasOwnProperty("info"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.info);
                if (message.sign != null && message.hasOwnProperty("sign"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.sign);
                if (message.recover != null && message.hasOwnProperty("recover"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.recover);
                if (message.last != null && message.hasOwnProperty("last"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.last);
                return writer;
            };
    
            /**
             * Encodes the specified SubscribeRequest message, length delimited. Does not implicitly {@link proto.SubscribeRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.SubscribeRequest
             * @static
             * @param {proto.ISubscribeRequest} message SubscribeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SubscribeRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.SubscribeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.SubscribeRequest} SubscribeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SubscribeRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.channel = reader.string();
                        break;
                    case 2:
                        message.client = reader.string();
                        break;
                    case 3:
                        message.info = reader.string();
                        break;
                    case 4:
                        message.sign = reader.string();
                        break;
                    case 5:
                        message.recover = reader.bool();
                        break;
                    case 6:
                        message.last = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SubscribeRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.SubscribeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.SubscribeRequest} SubscribeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SubscribeRequest message.
             * @function verify
             * @memberof proto.SubscribeRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubscribeRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isString(message.channel))
                        return "channel: string expected";
                if (message.client != null && message.hasOwnProperty("client"))
                    if (!$util.isString(message.client))
                        return "client: string expected";
                if (message.info != null && message.hasOwnProperty("info"))
                    if (!$util.isString(message.info))
                        return "info: string expected";
                if (message.sign != null && message.hasOwnProperty("sign"))
                    if (!$util.isString(message.sign))
                        return "sign: string expected";
                if (message.recover != null && message.hasOwnProperty("recover"))
                    if (typeof message.recover !== "boolean")
                        return "recover: boolean expected";
                if (message.last != null && message.hasOwnProperty("last"))
                    if (!$util.isString(message.last))
                        return "last: string expected";
                return null;
            };
    
            /**
             * Creates a SubscribeRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.SubscribeRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.SubscribeRequest} SubscribeRequest
             */
            SubscribeRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.SubscribeRequest)
                    return object;
                var message = new $root.proto.SubscribeRequest();
                if (object.channel != null)
                    message.channel = String(object.channel);
                if (object.client != null)
                    message.client = String(object.client);
                if (object.info != null)
                    message.info = String(object.info);
                if (object.sign != null)
                    message.sign = String(object.sign);
                if (object.recover != null)
                    message.recover = Boolean(object.recover);
                if (object.last != null)
                    message.last = String(object.last);
                return message;
            };
    
            /**
             * Creates a plain object from a SubscribeRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.SubscribeRequest
             * @static
             * @param {proto.SubscribeRequest} message SubscribeRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscribeRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.channel = "";
                    object.client = "";
                    object.info = "";
                    object.sign = "";
                    object.recover = false;
                    object.last = "";
                }
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                if (message.client != null && message.hasOwnProperty("client"))
                    object.client = message.client;
                if (message.info != null && message.hasOwnProperty("info"))
                    object.info = message.info;
                if (message.sign != null && message.hasOwnProperty("sign"))
                    object.sign = message.sign;
                if (message.recover != null && message.hasOwnProperty("recover"))
                    object.recover = message.recover;
                if (message.last != null && message.hasOwnProperty("last"))
                    object.last = message.last;
                return object;
            };
    
            /**
             * Converts this SubscribeRequest to JSON.
             * @function toJSON
             * @memberof proto.SubscribeRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubscribeRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SubscribeRequest;
        })();
    
        proto.SubscribeResponse = (function() {
    
            /**
             * Properties of a SubscribeResponse.
             * @memberof proto
             * @interface ISubscribeResponse
             * @property {proto.IError|null} [error] SubscribeResponse error
             * @property {proto.ISubscribeResult|null} [result] SubscribeResponse result
             */
    
            /**
             * Constructs a new SubscribeResponse.
             * @memberof proto
             * @classdesc Represents a SubscribeResponse.
             * @implements ISubscribeResponse
             * @constructor
             * @param {proto.ISubscribeResponse=} [properties] Properties to set
             */
            function SubscribeResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SubscribeResponse error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.SubscribeResponse
             * @instance
             */
            SubscribeResponse.prototype.error = null;
    
            /**
             * SubscribeResponse result.
             * @member {proto.ISubscribeResult|null|undefined} result
             * @memberof proto.SubscribeResponse
             * @instance
             */
            SubscribeResponse.prototype.result = null;
    
            /**
             * Creates a new SubscribeResponse instance using the specified properties.
             * @function create
             * @memberof proto.SubscribeResponse
             * @static
             * @param {proto.ISubscribeResponse=} [properties] Properties to set
             * @returns {proto.SubscribeResponse} SubscribeResponse instance
             */
            SubscribeResponse.create = function create(properties) {
                return new SubscribeResponse(properties);
            };
    
            /**
             * Encodes the specified SubscribeResponse message. Does not implicitly {@link proto.SubscribeResponse.verify|verify} messages.
             * @function encode
             * @memberof proto.SubscribeResponse
             * @static
             * @param {proto.ISubscribeResponse} message SubscribeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.proto.SubscribeResult.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified SubscribeResponse message, length delimited. Does not implicitly {@link proto.SubscribeResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.SubscribeResponse
             * @static
             * @param {proto.ISubscribeResponse} message SubscribeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SubscribeResponse message from the specified reader or buffer.
             * @function decode
             * @memberof proto.SubscribeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.SubscribeResponse} SubscribeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SubscribeResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = $root.proto.SubscribeResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SubscribeResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.SubscribeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.SubscribeResponse} SubscribeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SubscribeResponse message.
             * @function verify
             * @memberof proto.SubscribeResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubscribeResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.proto.SubscribeResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };
    
            /**
             * Creates a SubscribeResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.SubscribeResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.SubscribeResponse} SubscribeResponse
             */
            SubscribeResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.SubscribeResponse)
                    return object;
                var message = new $root.proto.SubscribeResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.SubscribeResponse.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".proto.SubscribeResponse.result: object expected");
                    message.result = $root.proto.SubscribeResult.fromObject(object.result);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SubscribeResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.SubscribeResponse
             * @static
             * @param {proto.SubscribeResponse} message SubscribeResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscribeResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.result = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.proto.SubscribeResult.toObject(message.result, options);
                return object;
            };
    
            /**
             * Converts this SubscribeResponse to JSON.
             * @function toJSON
             * @memberof proto.SubscribeResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubscribeResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SubscribeResponse;
        })();
    
        proto.SubscribeResult = (function() {
    
            /**
             * Properties of a SubscribeResult.
             * @memberof proto
             * @interface ISubscribeResult
             * @property {string|null} [last] SubscribeResult last
             * @property {boolean|null} [recovered] SubscribeResult recovered
             * @property {Array.<proto.IPublication>|null} [publications] SubscribeResult publications
             */
    
            /**
             * Constructs a new SubscribeResult.
             * @memberof proto
             * @classdesc Represents a SubscribeResult.
             * @implements ISubscribeResult
             * @constructor
             * @param {proto.ISubscribeResult=} [properties] Properties to set
             */
            function SubscribeResult(properties) {
                this.publications = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SubscribeResult last.
             * @member {string} last
             * @memberof proto.SubscribeResult
             * @instance
             */
            SubscribeResult.prototype.last = "";
    
            /**
             * SubscribeResult recovered.
             * @member {boolean} recovered
             * @memberof proto.SubscribeResult
             * @instance
             */
            SubscribeResult.prototype.recovered = false;
    
            /**
             * SubscribeResult publications.
             * @member {Array.<proto.IPublication>} publications
             * @memberof proto.SubscribeResult
             * @instance
             */
            SubscribeResult.prototype.publications = $util.emptyArray;
    
            /**
             * Creates a new SubscribeResult instance using the specified properties.
             * @function create
             * @memberof proto.SubscribeResult
             * @static
             * @param {proto.ISubscribeResult=} [properties] Properties to set
             * @returns {proto.SubscribeResult} SubscribeResult instance
             */
            SubscribeResult.create = function create(properties) {
                return new SubscribeResult(properties);
            };
    
            /**
             * Encodes the specified SubscribeResult message. Does not implicitly {@link proto.SubscribeResult.verify|verify} messages.
             * @function encode
             * @memberof proto.SubscribeResult
             * @static
             * @param {proto.ISubscribeResult} message SubscribeResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.last != null && message.hasOwnProperty("last"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.last);
                if (message.recovered != null && message.hasOwnProperty("recovered"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.recovered);
                if (message.publications != null && message.publications.length)
                    for (var i = 0; i < message.publications.length; ++i)
                        $root.proto.Publication.encode(message.publications[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified SubscribeResult message, length delimited. Does not implicitly {@link proto.SubscribeResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.SubscribeResult
             * @static
             * @param {proto.ISubscribeResult} message SubscribeResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SubscribeResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a SubscribeResult message from the specified reader or buffer.
             * @function decode
             * @memberof proto.SubscribeResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.SubscribeResult} SubscribeResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.SubscribeResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.last = reader.string();
                        break;
                    case 2:
                        message.recovered = reader.bool();
                        break;
                    case 3:
                        if (!(message.publications && message.publications.length))
                            message.publications = [];
                        message.publications.push($root.proto.Publication.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a SubscribeResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.SubscribeResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.SubscribeResult} SubscribeResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SubscribeResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a SubscribeResult message.
             * @function verify
             * @memberof proto.SubscribeResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SubscribeResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.last != null && message.hasOwnProperty("last"))
                    if (!$util.isString(message.last))
                        return "last: string expected";
                if (message.recovered != null && message.hasOwnProperty("recovered"))
                    if (typeof message.recovered !== "boolean")
                        return "recovered: boolean expected";
                if (message.publications != null && message.hasOwnProperty("publications")) {
                    if (!Array.isArray(message.publications))
                        return "publications: array expected";
                    for (var i = 0; i < message.publications.length; ++i) {
                        var error = $root.proto.Publication.verify(message.publications[i]);
                        if (error)
                            return "publications." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a SubscribeResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.SubscribeResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.SubscribeResult} SubscribeResult
             */
            SubscribeResult.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.SubscribeResult)
                    return object;
                var message = new $root.proto.SubscribeResult();
                if (object.last != null)
                    message.last = String(object.last);
                if (object.recovered != null)
                    message.recovered = Boolean(object.recovered);
                if (object.publications) {
                    if (!Array.isArray(object.publications))
                        throw TypeError(".proto.SubscribeResult.publications: array expected");
                    message.publications = [];
                    for (var i = 0; i < object.publications.length; ++i) {
                        if (typeof object.publications[i] !== "object")
                            throw TypeError(".proto.SubscribeResult.publications: object expected");
                        message.publications[i] = $root.proto.Publication.fromObject(object.publications[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a SubscribeResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.SubscribeResult
             * @static
             * @param {proto.SubscribeResult} message SubscribeResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SubscribeResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.publications = [];
                if (options.defaults) {
                    object.last = "";
                    object.recovered = false;
                }
                if (message.last != null && message.hasOwnProperty("last"))
                    object.last = message.last;
                if (message.recovered != null && message.hasOwnProperty("recovered"))
                    object.recovered = message.recovered;
                if (message.publications && message.publications.length) {
                    object.publications = [];
                    for (var j = 0; j < message.publications.length; ++j)
                        object.publications[j] = $root.proto.Publication.toObject(message.publications[j], options);
                }
                return object;
            };
    
            /**
             * Converts this SubscribeResult to JSON.
             * @function toJSON
             * @memberof proto.SubscribeResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SubscribeResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return SubscribeResult;
        })();
    
        proto.UnsubscribeRequest = (function() {
    
            /**
             * Properties of an UnsubscribeRequest.
             * @memberof proto
             * @interface IUnsubscribeRequest
             * @property {string|null} [channel] UnsubscribeRequest channel
             */
    
            /**
             * Constructs a new UnsubscribeRequest.
             * @memberof proto
             * @classdesc Represents an UnsubscribeRequest.
             * @implements IUnsubscribeRequest
             * @constructor
             * @param {proto.IUnsubscribeRequest=} [properties] Properties to set
             */
            function UnsubscribeRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UnsubscribeRequest channel.
             * @member {string} channel
             * @memberof proto.UnsubscribeRequest
             * @instance
             */
            UnsubscribeRequest.prototype.channel = "";
    
            /**
             * Creates a new UnsubscribeRequest instance using the specified properties.
             * @function create
             * @memberof proto.UnsubscribeRequest
             * @static
             * @param {proto.IUnsubscribeRequest=} [properties] Properties to set
             * @returns {proto.UnsubscribeRequest} UnsubscribeRequest instance
             */
            UnsubscribeRequest.create = function create(properties) {
                return new UnsubscribeRequest(properties);
            };
    
            /**
             * Encodes the specified UnsubscribeRequest message. Does not implicitly {@link proto.UnsubscribeRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.UnsubscribeRequest
             * @static
             * @param {proto.IUnsubscribeRequest} message UnsubscribeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnsubscribeRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.channel);
                return writer;
            };
    
            /**
             * Encodes the specified UnsubscribeRequest message, length delimited. Does not implicitly {@link proto.UnsubscribeRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.UnsubscribeRequest
             * @static
             * @param {proto.IUnsubscribeRequest} message UnsubscribeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnsubscribeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UnsubscribeRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.UnsubscribeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.UnsubscribeRequest} UnsubscribeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnsubscribeRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UnsubscribeRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.channel = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UnsubscribeRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.UnsubscribeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.UnsubscribeRequest} UnsubscribeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnsubscribeRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UnsubscribeRequest message.
             * @function verify
             * @memberof proto.UnsubscribeRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnsubscribeRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isString(message.channel))
                        return "channel: string expected";
                return null;
            };
    
            /**
             * Creates an UnsubscribeRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.UnsubscribeRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.UnsubscribeRequest} UnsubscribeRequest
             */
            UnsubscribeRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.UnsubscribeRequest)
                    return object;
                var message = new $root.proto.UnsubscribeRequest();
                if (object.channel != null)
                    message.channel = String(object.channel);
                return message;
            };
    
            /**
             * Creates a plain object from an UnsubscribeRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.UnsubscribeRequest
             * @static
             * @param {proto.UnsubscribeRequest} message UnsubscribeRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnsubscribeRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.channel = "";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                return object;
            };
    
            /**
             * Converts this UnsubscribeRequest to JSON.
             * @function toJSON
             * @memberof proto.UnsubscribeRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnsubscribeRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UnsubscribeRequest;
        })();
    
        proto.UnsubscribeResponse = (function() {
    
            /**
             * Properties of an UnsubscribeResponse.
             * @memberof proto
             * @interface IUnsubscribeResponse
             * @property {proto.IError|null} [error] UnsubscribeResponse error
             * @property {proto.IUnsubscribeResult|null} [result] UnsubscribeResponse result
             */
    
            /**
             * Constructs a new UnsubscribeResponse.
             * @memberof proto
             * @classdesc Represents an UnsubscribeResponse.
             * @implements IUnsubscribeResponse
             * @constructor
             * @param {proto.IUnsubscribeResponse=} [properties] Properties to set
             */
            function UnsubscribeResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * UnsubscribeResponse error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.UnsubscribeResponse
             * @instance
             */
            UnsubscribeResponse.prototype.error = null;
    
            /**
             * UnsubscribeResponse result.
             * @member {proto.IUnsubscribeResult|null|undefined} result
             * @memberof proto.UnsubscribeResponse
             * @instance
             */
            UnsubscribeResponse.prototype.result = null;
    
            /**
             * Creates a new UnsubscribeResponse instance using the specified properties.
             * @function create
             * @memberof proto.UnsubscribeResponse
             * @static
             * @param {proto.IUnsubscribeResponse=} [properties] Properties to set
             * @returns {proto.UnsubscribeResponse} UnsubscribeResponse instance
             */
            UnsubscribeResponse.create = function create(properties) {
                return new UnsubscribeResponse(properties);
            };
    
            /**
             * Encodes the specified UnsubscribeResponse message. Does not implicitly {@link proto.UnsubscribeResponse.verify|verify} messages.
             * @function encode
             * @memberof proto.UnsubscribeResponse
             * @static
             * @param {proto.IUnsubscribeResponse} message UnsubscribeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnsubscribeResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.proto.UnsubscribeResult.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified UnsubscribeResponse message, length delimited. Does not implicitly {@link proto.UnsubscribeResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.UnsubscribeResponse
             * @static
             * @param {proto.IUnsubscribeResponse} message UnsubscribeResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnsubscribeResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UnsubscribeResponse message from the specified reader or buffer.
             * @function decode
             * @memberof proto.UnsubscribeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.UnsubscribeResponse} UnsubscribeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnsubscribeResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UnsubscribeResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = $root.proto.UnsubscribeResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UnsubscribeResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.UnsubscribeResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.UnsubscribeResponse} UnsubscribeResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnsubscribeResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UnsubscribeResponse message.
             * @function verify
             * @memberof proto.UnsubscribeResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnsubscribeResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.proto.UnsubscribeResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };
    
            /**
             * Creates an UnsubscribeResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.UnsubscribeResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.UnsubscribeResponse} UnsubscribeResponse
             */
            UnsubscribeResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.UnsubscribeResponse)
                    return object;
                var message = new $root.proto.UnsubscribeResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.UnsubscribeResponse.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".proto.UnsubscribeResponse.result: object expected");
                    message.result = $root.proto.UnsubscribeResult.fromObject(object.result);
                }
                return message;
            };
    
            /**
             * Creates a plain object from an UnsubscribeResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.UnsubscribeResponse
             * @static
             * @param {proto.UnsubscribeResponse} message UnsubscribeResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnsubscribeResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.result = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.proto.UnsubscribeResult.toObject(message.result, options);
                return object;
            };
    
            /**
             * Converts this UnsubscribeResponse to JSON.
             * @function toJSON
             * @memberof proto.UnsubscribeResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnsubscribeResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UnsubscribeResponse;
        })();
    
        proto.UnsubscribeResult = (function() {
    
            /**
             * Properties of an UnsubscribeResult.
             * @memberof proto
             * @interface IUnsubscribeResult
             */
    
            /**
             * Constructs a new UnsubscribeResult.
             * @memberof proto
             * @classdesc Represents an UnsubscribeResult.
             * @implements IUnsubscribeResult
             * @constructor
             * @param {proto.IUnsubscribeResult=} [properties] Properties to set
             */
            function UnsubscribeResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new UnsubscribeResult instance using the specified properties.
             * @function create
             * @memberof proto.UnsubscribeResult
             * @static
             * @param {proto.IUnsubscribeResult=} [properties] Properties to set
             * @returns {proto.UnsubscribeResult} UnsubscribeResult instance
             */
            UnsubscribeResult.create = function create(properties) {
                return new UnsubscribeResult(properties);
            };
    
            /**
             * Encodes the specified UnsubscribeResult message. Does not implicitly {@link proto.UnsubscribeResult.verify|verify} messages.
             * @function encode
             * @memberof proto.UnsubscribeResult
             * @static
             * @param {proto.IUnsubscribeResult} message UnsubscribeResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnsubscribeResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified UnsubscribeResult message, length delimited. Does not implicitly {@link proto.UnsubscribeResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.UnsubscribeResult
             * @static
             * @param {proto.IUnsubscribeResult} message UnsubscribeResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UnsubscribeResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes an UnsubscribeResult message from the specified reader or buffer.
             * @function decode
             * @memberof proto.UnsubscribeResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.UnsubscribeResult} UnsubscribeResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnsubscribeResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.UnsubscribeResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes an UnsubscribeResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.UnsubscribeResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.UnsubscribeResult} UnsubscribeResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UnsubscribeResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies an UnsubscribeResult message.
             * @function verify
             * @memberof proto.UnsubscribeResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UnsubscribeResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates an UnsubscribeResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.UnsubscribeResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.UnsubscribeResult} UnsubscribeResult
             */
            UnsubscribeResult.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.UnsubscribeResult)
                    return object;
                return new $root.proto.UnsubscribeResult();
            };
    
            /**
             * Creates a plain object from an UnsubscribeResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.UnsubscribeResult
             * @static
             * @param {proto.UnsubscribeResult} message UnsubscribeResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UnsubscribeResult.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this UnsubscribeResult to JSON.
             * @function toJSON
             * @memberof proto.UnsubscribeResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UnsubscribeResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return UnsubscribeResult;
        })();
    
        proto.PublishRequest = (function() {
    
            /**
             * Properties of a PublishRequest.
             * @memberof proto
             * @interface IPublishRequest
             * @property {string|null} [channel] PublishRequest channel
             * @property {Uint8Array|null} [data] PublishRequest data
             */
    
            /**
             * Constructs a new PublishRequest.
             * @memberof proto
             * @classdesc Represents a PublishRequest.
             * @implements IPublishRequest
             * @constructor
             * @param {proto.IPublishRequest=} [properties] Properties to set
             */
            function PublishRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PublishRequest channel.
             * @member {string} channel
             * @memberof proto.PublishRequest
             * @instance
             */
            PublishRequest.prototype.channel = "";
    
            /**
             * PublishRequest data.
             * @member {Uint8Array} data
             * @memberof proto.PublishRequest
             * @instance
             */
            PublishRequest.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new PublishRequest instance using the specified properties.
             * @function create
             * @memberof proto.PublishRequest
             * @static
             * @param {proto.IPublishRequest=} [properties] Properties to set
             * @returns {proto.PublishRequest} PublishRequest instance
             */
            PublishRequest.create = function create(properties) {
                return new PublishRequest(properties);
            };
    
            /**
             * Encodes the specified PublishRequest message. Does not implicitly {@link proto.PublishRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.PublishRequest
             * @static
             * @param {proto.IPublishRequest} message PublishRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.channel);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified PublishRequest message, length delimited. Does not implicitly {@link proto.PublishRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PublishRequest
             * @static
             * @param {proto.IPublishRequest} message PublishRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PublishRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PublishRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PublishRequest} PublishRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PublishRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.channel = reader.string();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PublishRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PublishRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PublishRequest} PublishRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PublishRequest message.
             * @function verify
             * @memberof proto.PublishRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PublishRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isString(message.channel))
                        return "channel: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a PublishRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PublishRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PublishRequest} PublishRequest
             */
            PublishRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PublishRequest)
                    return object;
                var message = new $root.proto.PublishRequest();
                if (object.channel != null)
                    message.channel = String(object.channel);
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a PublishRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PublishRequest
             * @static
             * @param {proto.PublishRequest} message PublishRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PublishRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.channel = "";
                    object.data = options.bytes === String ? "" : [];
                }
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this PublishRequest to JSON.
             * @function toJSON
             * @memberof proto.PublishRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PublishRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PublishRequest;
        })();
    
        proto.PublishResponse = (function() {
    
            /**
             * Properties of a PublishResponse.
             * @memberof proto
             * @interface IPublishResponse
             * @property {proto.IError|null} [error] PublishResponse error
             * @property {proto.IPublishResult|null} [result] PublishResponse result
             */
    
            /**
             * Constructs a new PublishResponse.
             * @memberof proto
             * @classdesc Represents a PublishResponse.
             * @implements IPublishResponse
             * @constructor
             * @param {proto.IPublishResponse=} [properties] Properties to set
             */
            function PublishResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PublishResponse error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.PublishResponse
             * @instance
             */
            PublishResponse.prototype.error = null;
    
            /**
             * PublishResponse result.
             * @member {proto.IPublishResult|null|undefined} result
             * @memberof proto.PublishResponse
             * @instance
             */
            PublishResponse.prototype.result = null;
    
            /**
             * Creates a new PublishResponse instance using the specified properties.
             * @function create
             * @memberof proto.PublishResponse
             * @static
             * @param {proto.IPublishResponse=} [properties] Properties to set
             * @returns {proto.PublishResponse} PublishResponse instance
             */
            PublishResponse.create = function create(properties) {
                return new PublishResponse(properties);
            };
    
            /**
             * Encodes the specified PublishResponse message. Does not implicitly {@link proto.PublishResponse.verify|verify} messages.
             * @function encode
             * @memberof proto.PublishResponse
             * @static
             * @param {proto.IPublishResponse} message PublishResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.proto.PublishResult.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PublishResponse message, length delimited. Does not implicitly {@link proto.PublishResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PublishResponse
             * @static
             * @param {proto.IPublishResponse} message PublishResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PublishResponse message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PublishResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PublishResponse} PublishResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PublishResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = $root.proto.PublishResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PublishResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PublishResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PublishResponse} PublishResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PublishResponse message.
             * @function verify
             * @memberof proto.PublishResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PublishResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.proto.PublishResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };
    
            /**
             * Creates a PublishResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PublishResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PublishResponse} PublishResponse
             */
            PublishResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PublishResponse)
                    return object;
                var message = new $root.proto.PublishResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.PublishResponse.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".proto.PublishResponse.result: object expected");
                    message.result = $root.proto.PublishResult.fromObject(object.result);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PublishResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PublishResponse
             * @static
             * @param {proto.PublishResponse} message PublishResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PublishResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.result = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.proto.PublishResult.toObject(message.result, options);
                return object;
            };
    
            /**
             * Converts this PublishResponse to JSON.
             * @function toJSON
             * @memberof proto.PublishResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PublishResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PublishResponse;
        })();
    
        proto.PublishResult = (function() {
    
            /**
             * Properties of a PublishResult.
             * @memberof proto
             * @interface IPublishResult
             */
    
            /**
             * Constructs a new PublishResult.
             * @memberof proto
             * @classdesc Represents a PublishResult.
             * @implements IPublishResult
             * @constructor
             * @param {proto.IPublishResult=} [properties] Properties to set
             */
            function PublishResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new PublishResult instance using the specified properties.
             * @function create
             * @memberof proto.PublishResult
             * @static
             * @param {proto.IPublishResult=} [properties] Properties to set
             * @returns {proto.PublishResult} PublishResult instance
             */
            PublishResult.create = function create(properties) {
                return new PublishResult(properties);
            };
    
            /**
             * Encodes the specified PublishResult message. Does not implicitly {@link proto.PublishResult.verify|verify} messages.
             * @function encode
             * @memberof proto.PublishResult
             * @static
             * @param {proto.IPublishResult} message PublishResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified PublishResult message, length delimited. Does not implicitly {@link proto.PublishResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PublishResult
             * @static
             * @param {proto.IPublishResult} message PublishResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PublishResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PublishResult message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PublishResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PublishResult} PublishResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PublishResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PublishResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PublishResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PublishResult} PublishResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PublishResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PublishResult message.
             * @function verify
             * @memberof proto.PublishResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PublishResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a PublishResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PublishResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PublishResult} PublishResult
             */
            PublishResult.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PublishResult)
                    return object;
                return new $root.proto.PublishResult();
            };
    
            /**
             * Creates a plain object from a PublishResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PublishResult
             * @static
             * @param {proto.PublishResult} message PublishResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PublishResult.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this PublishResult to JSON.
             * @function toJSON
             * @memberof proto.PublishResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PublishResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PublishResult;
        })();
    
        proto.PresenceRequest = (function() {
    
            /**
             * Properties of a PresenceRequest.
             * @memberof proto
             * @interface IPresenceRequest
             * @property {string|null} [channel] PresenceRequest channel
             */
    
            /**
             * Constructs a new PresenceRequest.
             * @memberof proto
             * @classdesc Represents a PresenceRequest.
             * @implements IPresenceRequest
             * @constructor
             * @param {proto.IPresenceRequest=} [properties] Properties to set
             */
            function PresenceRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PresenceRequest channel.
             * @member {string} channel
             * @memberof proto.PresenceRequest
             * @instance
             */
            PresenceRequest.prototype.channel = "";
    
            /**
             * Creates a new PresenceRequest instance using the specified properties.
             * @function create
             * @memberof proto.PresenceRequest
             * @static
             * @param {proto.IPresenceRequest=} [properties] Properties to set
             * @returns {proto.PresenceRequest} PresenceRequest instance
             */
            PresenceRequest.create = function create(properties) {
                return new PresenceRequest(properties);
            };
    
            /**
             * Encodes the specified PresenceRequest message. Does not implicitly {@link proto.PresenceRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.PresenceRequest
             * @static
             * @param {proto.IPresenceRequest} message PresenceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.channel);
                return writer;
            };
    
            /**
             * Encodes the specified PresenceRequest message, length delimited. Does not implicitly {@link proto.PresenceRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PresenceRequest
             * @static
             * @param {proto.IPresenceRequest} message PresenceRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PresenceRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PresenceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PresenceRequest} PresenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PresenceRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.channel = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PresenceRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PresenceRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PresenceRequest} PresenceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PresenceRequest message.
             * @function verify
             * @memberof proto.PresenceRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PresenceRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isString(message.channel))
                        return "channel: string expected";
                return null;
            };
    
            /**
             * Creates a PresenceRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PresenceRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PresenceRequest} PresenceRequest
             */
            PresenceRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PresenceRequest)
                    return object;
                var message = new $root.proto.PresenceRequest();
                if (object.channel != null)
                    message.channel = String(object.channel);
                return message;
            };
    
            /**
             * Creates a plain object from a PresenceRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PresenceRequest
             * @static
             * @param {proto.PresenceRequest} message PresenceRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PresenceRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.channel = "";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                return object;
            };
    
            /**
             * Converts this PresenceRequest to JSON.
             * @function toJSON
             * @memberof proto.PresenceRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PresenceRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PresenceRequest;
        })();
    
        proto.PresenceResponse = (function() {
    
            /**
             * Properties of a PresenceResponse.
             * @memberof proto
             * @interface IPresenceResponse
             * @property {proto.IError|null} [error] PresenceResponse error
             * @property {proto.IPresenceResult|null} [result] PresenceResponse result
             */
    
            /**
             * Constructs a new PresenceResponse.
             * @memberof proto
             * @classdesc Represents a PresenceResponse.
             * @implements IPresenceResponse
             * @constructor
             * @param {proto.IPresenceResponse=} [properties] Properties to set
             */
            function PresenceResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PresenceResponse error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.PresenceResponse
             * @instance
             */
            PresenceResponse.prototype.error = null;
    
            /**
             * PresenceResponse result.
             * @member {proto.IPresenceResult|null|undefined} result
             * @memberof proto.PresenceResponse
             * @instance
             */
            PresenceResponse.prototype.result = null;
    
            /**
             * Creates a new PresenceResponse instance using the specified properties.
             * @function create
             * @memberof proto.PresenceResponse
             * @static
             * @param {proto.IPresenceResponse=} [properties] Properties to set
             * @returns {proto.PresenceResponse} PresenceResponse instance
             */
            PresenceResponse.create = function create(properties) {
                return new PresenceResponse(properties);
            };
    
            /**
             * Encodes the specified PresenceResponse message. Does not implicitly {@link proto.PresenceResponse.verify|verify} messages.
             * @function encode
             * @memberof proto.PresenceResponse
             * @static
             * @param {proto.IPresenceResponse} message PresenceResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.proto.PresenceResult.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PresenceResponse message, length delimited. Does not implicitly {@link proto.PresenceResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PresenceResponse
             * @static
             * @param {proto.IPresenceResponse} message PresenceResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PresenceResponse message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PresenceResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PresenceResponse} PresenceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PresenceResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = $root.proto.PresenceResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PresenceResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PresenceResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PresenceResponse} PresenceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PresenceResponse message.
             * @function verify
             * @memberof proto.PresenceResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PresenceResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.proto.PresenceResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };
    
            /**
             * Creates a PresenceResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PresenceResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PresenceResponse} PresenceResponse
             */
            PresenceResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PresenceResponse)
                    return object;
                var message = new $root.proto.PresenceResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.PresenceResponse.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".proto.PresenceResponse.result: object expected");
                    message.result = $root.proto.PresenceResult.fromObject(object.result);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PresenceResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PresenceResponse
             * @static
             * @param {proto.PresenceResponse} message PresenceResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PresenceResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.result = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.proto.PresenceResult.toObject(message.result, options);
                return object;
            };
    
            /**
             * Converts this PresenceResponse to JSON.
             * @function toJSON
             * @memberof proto.PresenceResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PresenceResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PresenceResponse;
        })();
    
        proto.PresenceResult = (function() {
    
            /**
             * Properties of a PresenceResult.
             * @memberof proto
             * @interface IPresenceResult
             * @property {Object.<string,proto.IClientInfo>|null} [presence] PresenceResult presence
             */
    
            /**
             * Constructs a new PresenceResult.
             * @memberof proto
             * @classdesc Represents a PresenceResult.
             * @implements IPresenceResult
             * @constructor
             * @param {proto.IPresenceResult=} [properties] Properties to set
             */
            function PresenceResult(properties) {
                this.presence = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PresenceResult presence.
             * @member {Object.<string,proto.IClientInfo>} presence
             * @memberof proto.PresenceResult
             * @instance
             */
            PresenceResult.prototype.presence = $util.emptyObject;
    
            /**
             * Creates a new PresenceResult instance using the specified properties.
             * @function create
             * @memberof proto.PresenceResult
             * @static
             * @param {proto.IPresenceResult=} [properties] Properties to set
             * @returns {proto.PresenceResult} PresenceResult instance
             */
            PresenceResult.create = function create(properties) {
                return new PresenceResult(properties);
            };
    
            /**
             * Encodes the specified PresenceResult message. Does not implicitly {@link proto.PresenceResult.verify|verify} messages.
             * @function encode
             * @memberof proto.PresenceResult
             * @static
             * @param {proto.IPresenceResult} message PresenceResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.presence != null && message.hasOwnProperty("presence"))
                    for (var keys = Object.keys(message.presence), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.proto.ClientInfo.encode(message.presence[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };
    
            /**
             * Encodes the specified PresenceResult message, length delimited. Does not implicitly {@link proto.PresenceResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PresenceResult
             * @static
             * @param {proto.IPresenceResult} message PresenceResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PresenceResult message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PresenceResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PresenceResult} PresenceResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PresenceResult(), key;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        reader.skip().pos++;
                        if (message.presence === $util.emptyObject)
                            message.presence = {};
                        key = reader.string();
                        reader.pos++;
                        message.presence[key] = $root.proto.ClientInfo.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PresenceResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PresenceResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PresenceResult} PresenceResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PresenceResult message.
             * @function verify
             * @memberof proto.PresenceResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PresenceResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.presence != null && message.hasOwnProperty("presence")) {
                    if (!$util.isObject(message.presence))
                        return "presence: object expected";
                    var key = Object.keys(message.presence);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.proto.ClientInfo.verify(message.presence[key[i]]);
                        if (error)
                            return "presence." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a PresenceResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PresenceResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PresenceResult} PresenceResult
             */
            PresenceResult.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PresenceResult)
                    return object;
                var message = new $root.proto.PresenceResult();
                if (object.presence) {
                    if (typeof object.presence !== "object")
                        throw TypeError(".proto.PresenceResult.presence: object expected");
                    message.presence = {};
                    for (var keys = Object.keys(object.presence), i = 0; i < keys.length; ++i) {
                        if (typeof object.presence[keys[i]] !== "object")
                            throw TypeError(".proto.PresenceResult.presence: object expected");
                        message.presence[keys[i]] = $root.proto.ClientInfo.fromObject(object.presence[keys[i]]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PresenceResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PresenceResult
             * @static
             * @param {proto.PresenceResult} message PresenceResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PresenceResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.presence = {};
                var keys2;
                if (message.presence && (keys2 = Object.keys(message.presence)).length) {
                    object.presence = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.presence[keys2[j]] = $root.proto.ClientInfo.toObject(message.presence[keys2[j]], options);
                }
                return object;
            };
    
            /**
             * Converts this PresenceResult to JSON.
             * @function toJSON
             * @memberof proto.PresenceResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PresenceResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PresenceResult;
        })();
    
        proto.PresenceStatsRequest = (function() {
    
            /**
             * Properties of a PresenceStatsRequest.
             * @memberof proto
             * @interface IPresenceStatsRequest
             * @property {string|null} [channel] PresenceStatsRequest channel
             */
    
            /**
             * Constructs a new PresenceStatsRequest.
             * @memberof proto
             * @classdesc Represents a PresenceStatsRequest.
             * @implements IPresenceStatsRequest
             * @constructor
             * @param {proto.IPresenceStatsRequest=} [properties] Properties to set
             */
            function PresenceStatsRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PresenceStatsRequest channel.
             * @member {string} channel
             * @memberof proto.PresenceStatsRequest
             * @instance
             */
            PresenceStatsRequest.prototype.channel = "";
    
            /**
             * Creates a new PresenceStatsRequest instance using the specified properties.
             * @function create
             * @memberof proto.PresenceStatsRequest
             * @static
             * @param {proto.IPresenceStatsRequest=} [properties] Properties to set
             * @returns {proto.PresenceStatsRequest} PresenceStatsRequest instance
             */
            PresenceStatsRequest.create = function create(properties) {
                return new PresenceStatsRequest(properties);
            };
    
            /**
             * Encodes the specified PresenceStatsRequest message. Does not implicitly {@link proto.PresenceStatsRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.PresenceStatsRequest
             * @static
             * @param {proto.IPresenceStatsRequest} message PresenceStatsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceStatsRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.channel);
                return writer;
            };
    
            /**
             * Encodes the specified PresenceStatsRequest message, length delimited. Does not implicitly {@link proto.PresenceStatsRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PresenceStatsRequest
             * @static
             * @param {proto.IPresenceStatsRequest} message PresenceStatsRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceStatsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PresenceStatsRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PresenceStatsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PresenceStatsRequest} PresenceStatsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceStatsRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PresenceStatsRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.channel = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PresenceStatsRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PresenceStatsRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PresenceStatsRequest} PresenceStatsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceStatsRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PresenceStatsRequest message.
             * @function verify
             * @memberof proto.PresenceStatsRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PresenceStatsRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isString(message.channel))
                        return "channel: string expected";
                return null;
            };
    
            /**
             * Creates a PresenceStatsRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PresenceStatsRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PresenceStatsRequest} PresenceStatsRequest
             */
            PresenceStatsRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PresenceStatsRequest)
                    return object;
                var message = new $root.proto.PresenceStatsRequest();
                if (object.channel != null)
                    message.channel = String(object.channel);
                return message;
            };
    
            /**
             * Creates a plain object from a PresenceStatsRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PresenceStatsRequest
             * @static
             * @param {proto.PresenceStatsRequest} message PresenceStatsRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PresenceStatsRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.channel = "";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                return object;
            };
    
            /**
             * Converts this PresenceStatsRequest to JSON.
             * @function toJSON
             * @memberof proto.PresenceStatsRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PresenceStatsRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PresenceStatsRequest;
        })();
    
        proto.PresenceStatsResponse = (function() {
    
            /**
             * Properties of a PresenceStatsResponse.
             * @memberof proto
             * @interface IPresenceStatsResponse
             * @property {proto.IError|null} [error] PresenceStatsResponse error
             * @property {proto.IPresenceStatsResult|null} [result] PresenceStatsResponse result
             */
    
            /**
             * Constructs a new PresenceStatsResponse.
             * @memberof proto
             * @classdesc Represents a PresenceStatsResponse.
             * @implements IPresenceStatsResponse
             * @constructor
             * @param {proto.IPresenceStatsResponse=} [properties] Properties to set
             */
            function PresenceStatsResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PresenceStatsResponse error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.PresenceStatsResponse
             * @instance
             */
            PresenceStatsResponse.prototype.error = null;
    
            /**
             * PresenceStatsResponse result.
             * @member {proto.IPresenceStatsResult|null|undefined} result
             * @memberof proto.PresenceStatsResponse
             * @instance
             */
            PresenceStatsResponse.prototype.result = null;
    
            /**
             * Creates a new PresenceStatsResponse instance using the specified properties.
             * @function create
             * @memberof proto.PresenceStatsResponse
             * @static
             * @param {proto.IPresenceStatsResponse=} [properties] Properties to set
             * @returns {proto.PresenceStatsResponse} PresenceStatsResponse instance
             */
            PresenceStatsResponse.create = function create(properties) {
                return new PresenceStatsResponse(properties);
            };
    
            /**
             * Encodes the specified PresenceStatsResponse message. Does not implicitly {@link proto.PresenceStatsResponse.verify|verify} messages.
             * @function encode
             * @memberof proto.PresenceStatsResponse
             * @static
             * @param {proto.IPresenceStatsResponse} message PresenceStatsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceStatsResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.proto.PresenceStatsResult.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PresenceStatsResponse message, length delimited. Does not implicitly {@link proto.PresenceStatsResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PresenceStatsResponse
             * @static
             * @param {proto.IPresenceStatsResponse} message PresenceStatsResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceStatsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PresenceStatsResponse message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PresenceStatsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PresenceStatsResponse} PresenceStatsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceStatsResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PresenceStatsResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = $root.proto.PresenceStatsResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PresenceStatsResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PresenceStatsResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PresenceStatsResponse} PresenceStatsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceStatsResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PresenceStatsResponse message.
             * @function verify
             * @memberof proto.PresenceStatsResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PresenceStatsResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.proto.PresenceStatsResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };
    
            /**
             * Creates a PresenceStatsResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PresenceStatsResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PresenceStatsResponse} PresenceStatsResponse
             */
            PresenceStatsResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PresenceStatsResponse)
                    return object;
                var message = new $root.proto.PresenceStatsResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.PresenceStatsResponse.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".proto.PresenceStatsResponse.result: object expected");
                    message.result = $root.proto.PresenceStatsResult.fromObject(object.result);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PresenceStatsResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PresenceStatsResponse
             * @static
             * @param {proto.PresenceStatsResponse} message PresenceStatsResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PresenceStatsResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.result = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.proto.PresenceStatsResult.toObject(message.result, options);
                return object;
            };
    
            /**
             * Converts this PresenceStatsResponse to JSON.
             * @function toJSON
             * @memberof proto.PresenceStatsResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PresenceStatsResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PresenceStatsResponse;
        })();
    
        proto.PresenceStatsResult = (function() {
    
            /**
             * Properties of a PresenceStatsResult.
             * @memberof proto
             * @interface IPresenceStatsResult
             * @property {number|null} [numClients] PresenceStatsResult numClients
             * @property {number|null} [numUsers] PresenceStatsResult numUsers
             */
    
            /**
             * Constructs a new PresenceStatsResult.
             * @memberof proto
             * @classdesc Represents a PresenceStatsResult.
             * @implements IPresenceStatsResult
             * @constructor
             * @param {proto.IPresenceStatsResult=} [properties] Properties to set
             */
            function PresenceStatsResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PresenceStatsResult numClients.
             * @member {number} numClients
             * @memberof proto.PresenceStatsResult
             * @instance
             */
            PresenceStatsResult.prototype.numClients = 0;
    
            /**
             * PresenceStatsResult numUsers.
             * @member {number} numUsers
             * @memberof proto.PresenceStatsResult
             * @instance
             */
            PresenceStatsResult.prototype.numUsers = 0;
    
            /**
             * Creates a new PresenceStatsResult instance using the specified properties.
             * @function create
             * @memberof proto.PresenceStatsResult
             * @static
             * @param {proto.IPresenceStatsResult=} [properties] Properties to set
             * @returns {proto.PresenceStatsResult} PresenceStatsResult instance
             */
            PresenceStatsResult.create = function create(properties) {
                return new PresenceStatsResult(properties);
            };
    
            /**
             * Encodes the specified PresenceStatsResult message. Does not implicitly {@link proto.PresenceStatsResult.verify|verify} messages.
             * @function encode
             * @memberof proto.PresenceStatsResult
             * @static
             * @param {proto.IPresenceStatsResult} message PresenceStatsResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceStatsResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.numClients != null && message.hasOwnProperty("numClients"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.numClients);
                if (message.numUsers != null && message.hasOwnProperty("numUsers"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.numUsers);
                return writer;
            };
    
            /**
             * Encodes the specified PresenceStatsResult message, length delimited. Does not implicitly {@link proto.PresenceStatsResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PresenceStatsResult
             * @static
             * @param {proto.IPresenceStatsResult} message PresenceStatsResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PresenceStatsResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PresenceStatsResult message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PresenceStatsResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PresenceStatsResult} PresenceStatsResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceStatsResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PresenceStatsResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.numClients = reader.uint32();
                        break;
                    case 2:
                        message.numUsers = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PresenceStatsResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PresenceStatsResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PresenceStatsResult} PresenceStatsResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PresenceStatsResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PresenceStatsResult message.
             * @function verify
             * @memberof proto.PresenceStatsResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PresenceStatsResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.numClients != null && message.hasOwnProperty("numClients"))
                    if (!$util.isInteger(message.numClients))
                        return "numClients: integer expected";
                if (message.numUsers != null && message.hasOwnProperty("numUsers"))
                    if (!$util.isInteger(message.numUsers))
                        return "numUsers: integer expected";
                return null;
            };
    
            /**
             * Creates a PresenceStatsResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PresenceStatsResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PresenceStatsResult} PresenceStatsResult
             */
            PresenceStatsResult.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PresenceStatsResult)
                    return object;
                var message = new $root.proto.PresenceStatsResult();
                if (object.numClients != null)
                    message.numClients = object.numClients >>> 0;
                if (object.numUsers != null)
                    message.numUsers = object.numUsers >>> 0;
                return message;
            };
    
            /**
             * Creates a plain object from a PresenceStatsResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PresenceStatsResult
             * @static
             * @param {proto.PresenceStatsResult} message PresenceStatsResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PresenceStatsResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.numClients = 0;
                    object.numUsers = 0;
                }
                if (message.numClients != null && message.hasOwnProperty("numClients"))
                    object.numClients = message.numClients;
                if (message.numUsers != null && message.hasOwnProperty("numUsers"))
                    object.numUsers = message.numUsers;
                return object;
            };
    
            /**
             * Converts this PresenceStatsResult to JSON.
             * @function toJSON
             * @memberof proto.PresenceStatsResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PresenceStatsResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PresenceStatsResult;
        })();
    
        proto.HistoryRequest = (function() {
    
            /**
             * Properties of a HistoryRequest.
             * @memberof proto
             * @interface IHistoryRequest
             * @property {string|null} [channel] HistoryRequest channel
             */
    
            /**
             * Constructs a new HistoryRequest.
             * @memberof proto
             * @classdesc Represents a HistoryRequest.
             * @implements IHistoryRequest
             * @constructor
             * @param {proto.IHistoryRequest=} [properties] Properties to set
             */
            function HistoryRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HistoryRequest channel.
             * @member {string} channel
             * @memberof proto.HistoryRequest
             * @instance
             */
            HistoryRequest.prototype.channel = "";
    
            /**
             * Creates a new HistoryRequest instance using the specified properties.
             * @function create
             * @memberof proto.HistoryRequest
             * @static
             * @param {proto.IHistoryRequest=} [properties] Properties to set
             * @returns {proto.HistoryRequest} HistoryRequest instance
             */
            HistoryRequest.create = function create(properties) {
                return new HistoryRequest(properties);
            };
    
            /**
             * Encodes the specified HistoryRequest message. Does not implicitly {@link proto.HistoryRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.HistoryRequest
             * @static
             * @param {proto.IHistoryRequest} message HistoryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.channel != null && message.hasOwnProperty("channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.channel);
                return writer;
            };
    
            /**
             * Encodes the specified HistoryRequest message, length delimited. Does not implicitly {@link proto.HistoryRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.HistoryRequest
             * @static
             * @param {proto.IHistoryRequest} message HistoryRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HistoryRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.HistoryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.HistoryRequest} HistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HistoryRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.channel = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a HistoryRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.HistoryRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.HistoryRequest} HistoryRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HistoryRequest message.
             * @function verify
             * @memberof proto.HistoryRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HistoryRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    if (!$util.isString(message.channel))
                        return "channel: string expected";
                return null;
            };
    
            /**
             * Creates a HistoryRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.HistoryRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.HistoryRequest} HistoryRequest
             */
            HistoryRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.HistoryRequest)
                    return object;
                var message = new $root.proto.HistoryRequest();
                if (object.channel != null)
                    message.channel = String(object.channel);
                return message;
            };
    
            /**
             * Creates a plain object from a HistoryRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.HistoryRequest
             * @static
             * @param {proto.HistoryRequest} message HistoryRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HistoryRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.channel = "";
                if (message.channel != null && message.hasOwnProperty("channel"))
                    object.channel = message.channel;
                return object;
            };
    
            /**
             * Converts this HistoryRequest to JSON.
             * @function toJSON
             * @memberof proto.HistoryRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HistoryRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return HistoryRequest;
        })();
    
        proto.HistoryResponse = (function() {
    
            /**
             * Properties of a HistoryResponse.
             * @memberof proto
             * @interface IHistoryResponse
             * @property {proto.IError|null} [error] HistoryResponse error
             * @property {proto.IHistoryResult|null} [result] HistoryResponse result
             */
    
            /**
             * Constructs a new HistoryResponse.
             * @memberof proto
             * @classdesc Represents a HistoryResponse.
             * @implements IHistoryResponse
             * @constructor
             * @param {proto.IHistoryResponse=} [properties] Properties to set
             */
            function HistoryResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HistoryResponse error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.HistoryResponse
             * @instance
             */
            HistoryResponse.prototype.error = null;
    
            /**
             * HistoryResponse result.
             * @member {proto.IHistoryResult|null|undefined} result
             * @memberof proto.HistoryResponse
             * @instance
             */
            HistoryResponse.prototype.result = null;
    
            /**
             * Creates a new HistoryResponse instance using the specified properties.
             * @function create
             * @memberof proto.HistoryResponse
             * @static
             * @param {proto.IHistoryResponse=} [properties] Properties to set
             * @returns {proto.HistoryResponse} HistoryResponse instance
             */
            HistoryResponse.create = function create(properties) {
                return new HistoryResponse(properties);
            };
    
            /**
             * Encodes the specified HistoryResponse message. Does not implicitly {@link proto.HistoryResponse.verify|verify} messages.
             * @function encode
             * @memberof proto.HistoryResponse
             * @static
             * @param {proto.IHistoryResponse} message HistoryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.proto.HistoryResult.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified HistoryResponse message, length delimited. Does not implicitly {@link proto.HistoryResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.HistoryResponse
             * @static
             * @param {proto.IHistoryResponse} message HistoryResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HistoryResponse message from the specified reader or buffer.
             * @function decode
             * @memberof proto.HistoryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.HistoryResponse} HistoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HistoryResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = $root.proto.HistoryResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a HistoryResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.HistoryResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.HistoryResponse} HistoryResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HistoryResponse message.
             * @function verify
             * @memberof proto.HistoryResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HistoryResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.proto.HistoryResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };
    
            /**
             * Creates a HistoryResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.HistoryResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.HistoryResponse} HistoryResponse
             */
            HistoryResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.HistoryResponse)
                    return object;
                var message = new $root.proto.HistoryResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.HistoryResponse.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".proto.HistoryResponse.result: object expected");
                    message.result = $root.proto.HistoryResult.fromObject(object.result);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a HistoryResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.HistoryResponse
             * @static
             * @param {proto.HistoryResponse} message HistoryResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HistoryResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.result = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.proto.HistoryResult.toObject(message.result, options);
                return object;
            };
    
            /**
             * Converts this HistoryResponse to JSON.
             * @function toJSON
             * @memberof proto.HistoryResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HistoryResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return HistoryResponse;
        })();
    
        proto.HistoryResult = (function() {
    
            /**
             * Properties of a HistoryResult.
             * @memberof proto
             * @interface IHistoryResult
             * @property {Array.<proto.IPublication>|null} [publications] HistoryResult publications
             */
    
            /**
             * Constructs a new HistoryResult.
             * @memberof proto
             * @classdesc Represents a HistoryResult.
             * @implements IHistoryResult
             * @constructor
             * @param {proto.IHistoryResult=} [properties] Properties to set
             */
            function HistoryResult(properties) {
                this.publications = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HistoryResult publications.
             * @member {Array.<proto.IPublication>} publications
             * @memberof proto.HistoryResult
             * @instance
             */
            HistoryResult.prototype.publications = $util.emptyArray;
    
            /**
             * Creates a new HistoryResult instance using the specified properties.
             * @function create
             * @memberof proto.HistoryResult
             * @static
             * @param {proto.IHistoryResult=} [properties] Properties to set
             * @returns {proto.HistoryResult} HistoryResult instance
             */
            HistoryResult.create = function create(properties) {
                return new HistoryResult(properties);
            };
    
            /**
             * Encodes the specified HistoryResult message. Does not implicitly {@link proto.HistoryResult.verify|verify} messages.
             * @function encode
             * @memberof proto.HistoryResult
             * @static
             * @param {proto.IHistoryResult} message HistoryResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.publications != null && message.publications.length)
                    for (var i = 0; i < message.publications.length; ++i)
                        $root.proto.Publication.encode(message.publications[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified HistoryResult message, length delimited. Does not implicitly {@link proto.HistoryResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.HistoryResult
             * @static
             * @param {proto.IHistoryResult} message HistoryResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistoryResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a HistoryResult message from the specified reader or buffer.
             * @function decode
             * @memberof proto.HistoryResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.HistoryResult} HistoryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.HistoryResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.publications && message.publications.length))
                            message.publications = [];
                        message.publications.push($root.proto.Publication.decode(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a HistoryResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.HistoryResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.HistoryResult} HistoryResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistoryResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a HistoryResult message.
             * @function verify
             * @memberof proto.HistoryResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HistoryResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.publications != null && message.hasOwnProperty("publications")) {
                    if (!Array.isArray(message.publications))
                        return "publications: array expected";
                    for (var i = 0; i < message.publications.length; ++i) {
                        var error = $root.proto.Publication.verify(message.publications[i]);
                        if (error)
                            return "publications." + error;
                    }
                }
                return null;
            };
    
            /**
             * Creates a HistoryResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.HistoryResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.HistoryResult} HistoryResult
             */
            HistoryResult.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.HistoryResult)
                    return object;
                var message = new $root.proto.HistoryResult();
                if (object.publications) {
                    if (!Array.isArray(object.publications))
                        throw TypeError(".proto.HistoryResult.publications: array expected");
                    message.publications = [];
                    for (var i = 0; i < object.publications.length; ++i) {
                        if (typeof object.publications[i] !== "object")
                            throw TypeError(".proto.HistoryResult.publications: object expected");
                        message.publications[i] = $root.proto.Publication.fromObject(object.publications[i]);
                    }
                }
                return message;
            };
    
            /**
             * Creates a plain object from a HistoryResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.HistoryResult
             * @static
             * @param {proto.HistoryResult} message HistoryResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HistoryResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.publications = [];
                if (message.publications && message.publications.length) {
                    object.publications = [];
                    for (var j = 0; j < message.publications.length; ++j)
                        object.publications[j] = $root.proto.Publication.toObject(message.publications[j], options);
                }
                return object;
            };
    
            /**
             * Converts this HistoryResult to JSON.
             * @function toJSON
             * @memberof proto.HistoryResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HistoryResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return HistoryResult;
        })();
    
        proto.PingRequest = (function() {
    
            /**
             * Properties of a PingRequest.
             * @memberof proto
             * @interface IPingRequest
             * @property {string|null} [data] PingRequest data
             */
    
            /**
             * Constructs a new PingRequest.
             * @memberof proto
             * @classdesc Represents a PingRequest.
             * @implements IPingRequest
             * @constructor
             * @param {proto.IPingRequest=} [properties] Properties to set
             */
            function PingRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PingRequest data.
             * @member {string} data
             * @memberof proto.PingRequest
             * @instance
             */
            PingRequest.prototype.data = "";
    
            /**
             * Creates a new PingRequest instance using the specified properties.
             * @function create
             * @memberof proto.PingRequest
             * @static
             * @param {proto.IPingRequest=} [properties] Properties to set
             * @returns {proto.PingRequest} PingRequest instance
             */
            PingRequest.create = function create(properties) {
                return new PingRequest(properties);
            };
    
            /**
             * Encodes the specified PingRequest message. Does not implicitly {@link proto.PingRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.PingRequest
             * @static
             * @param {proto.IPingRequest} message PingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link proto.PingRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PingRequest
             * @static
             * @param {proto.IPingRequest} message PingRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PingRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PingRequest} PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PingRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PingRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PingRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PingRequest} PingRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PingRequest message.
             * @function verify
             * @memberof proto.PingRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PingRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!$util.isString(message.data))
                        return "data: string expected";
                return null;
            };
    
            /**
             * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PingRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PingRequest} PingRequest
             */
            PingRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PingRequest)
                    return object;
                var message = new $root.proto.PingRequest();
                if (object.data != null)
                    message.data = String(object.data);
                return message;
            };
    
            /**
             * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PingRequest
             * @static
             * @param {proto.PingRequest} message PingRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PingRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.data = "";
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = message.data;
                return object;
            };
    
            /**
             * Converts this PingRequest to JSON.
             * @function toJSON
             * @memberof proto.PingRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PingRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PingRequest;
        })();
    
        proto.PingResponse = (function() {
    
            /**
             * Properties of a PingResponse.
             * @memberof proto
             * @interface IPingResponse
             * @property {proto.IError|null} [error] PingResponse error
             * @property {proto.IPingResult|null} [result] PingResponse result
             */
    
            /**
             * Constructs a new PingResponse.
             * @memberof proto
             * @classdesc Represents a PingResponse.
             * @implements IPingResponse
             * @constructor
             * @param {proto.IPingResponse=} [properties] Properties to set
             */
            function PingResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PingResponse error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.PingResponse
             * @instance
             */
            PingResponse.prototype.error = null;
    
            /**
             * PingResponse result.
             * @member {proto.IPingResult|null|undefined} result
             * @memberof proto.PingResponse
             * @instance
             */
            PingResponse.prototype.result = null;
    
            /**
             * Creates a new PingResponse instance using the specified properties.
             * @function create
             * @memberof proto.PingResponse
             * @static
             * @param {proto.IPingResponse=} [properties] Properties to set
             * @returns {proto.PingResponse} PingResponse instance
             */
            PingResponse.create = function create(properties) {
                return new PingResponse(properties);
            };
    
            /**
             * Encodes the specified PingResponse message. Does not implicitly {@link proto.PingResponse.verify|verify} messages.
             * @function encode
             * @memberof proto.PingResponse
             * @static
             * @param {proto.IPingResponse} message PingResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    $root.proto.PingResult.encode(message.result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };
    
            /**
             * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link proto.PingResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PingResponse
             * @static
             * @param {proto.IPingResponse} message PingResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PingResponse message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PingResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PingResponse} PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PingResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = $root.proto.PingResult.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PingResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PingResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PingResponse} PingResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PingResponse message.
             * @function verify
             * @memberof proto.PingResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PingResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result")) {
                    var error = $root.proto.PingResult.verify(message.result);
                    if (error)
                        return "result." + error;
                }
                return null;
            };
    
            /**
             * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PingResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PingResponse} PingResponse
             */
            PingResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PingResponse)
                    return object;
                var message = new $root.proto.PingResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.PingResponse.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null) {
                    if (typeof object.result !== "object")
                        throw TypeError(".proto.PingResponse.result: object expected");
                    message.result = $root.proto.PingResult.fromObject(object.result);
                }
                return message;
            };
    
            /**
             * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PingResponse
             * @static
             * @param {proto.PingResponse} message PingResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PingResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.result = null;
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = $root.proto.PingResult.toObject(message.result, options);
                return object;
            };
    
            /**
             * Converts this PingResponse to JSON.
             * @function toJSON
             * @memberof proto.PingResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PingResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PingResponse;
        })();
    
        proto.PingResult = (function() {
    
            /**
             * Properties of a PingResult.
             * @memberof proto
             * @interface IPingResult
             * @property {string|null} [data] PingResult data
             */
    
            /**
             * Constructs a new PingResult.
             * @memberof proto
             * @classdesc Represents a PingResult.
             * @implements IPingResult
             * @constructor
             * @param {proto.IPingResult=} [properties] Properties to set
             */
            function PingResult(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PingResult data.
             * @member {string} data
             * @memberof proto.PingResult
             * @instance
             */
            PingResult.prototype.data = "";
    
            /**
             * Creates a new PingResult instance using the specified properties.
             * @function create
             * @memberof proto.PingResult
             * @static
             * @param {proto.IPingResult=} [properties] Properties to set
             * @returns {proto.PingResult} PingResult instance
             */
            PingResult.create = function create(properties) {
                return new PingResult(properties);
            };
    
            /**
             * Encodes the specified PingResult message. Does not implicitly {@link proto.PingResult.verify|verify} messages.
             * @function encode
             * @memberof proto.PingResult
             * @static
             * @param {proto.IPingResult} message PingResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingResult.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified PingResult message, length delimited. Does not implicitly {@link proto.PingResult.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.PingResult
             * @static
             * @param {proto.IPingResult} message PingResult message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PingResult.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a PingResult message from the specified reader or buffer.
             * @function decode
             * @memberof proto.PingResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.PingResult} PingResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingResult.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.PingResult();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a PingResult message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.PingResult
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.PingResult} PingResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PingResult.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a PingResult message.
             * @function verify
             * @memberof proto.PingResult
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PingResult.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!$util.isString(message.data))
                        return "data: string expected";
                return null;
            };
    
            /**
             * Creates a PingResult message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.PingResult
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.PingResult} PingResult
             */
            PingResult.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.PingResult)
                    return object;
                var message = new $root.proto.PingResult();
                if (object.data != null)
                    message.data = String(object.data);
                return message;
            };
    
            /**
             * Creates a plain object from a PingResult message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.PingResult
             * @static
             * @param {proto.PingResult} message PingResult
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PingResult.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.data = "";
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = message.data;
                return object;
            };
    
            /**
             * Converts this PingResult to JSON.
             * @function toJSON
             * @memberof proto.PingResult
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PingResult.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return PingResult;
        })();
    
        proto.RPCRequest = (function() {
    
            /**
             * Properties of a RPCRequest.
             * @memberof proto
             * @interface IRPCRequest
             * @property {Uint8Array|null} [data] RPCRequest data
             */
    
            /**
             * Constructs a new RPCRequest.
             * @memberof proto
             * @classdesc Represents a RPCRequest.
             * @implements IRPCRequest
             * @constructor
             * @param {proto.IRPCRequest=} [properties] Properties to set
             */
            function RPCRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RPCRequest data.
             * @member {Uint8Array} data
             * @memberof proto.RPCRequest
             * @instance
             */
            RPCRequest.prototype.data = $util.newBuffer([]);
    
            /**
             * Creates a new RPCRequest instance using the specified properties.
             * @function create
             * @memberof proto.RPCRequest
             * @static
             * @param {proto.IRPCRequest=} [properties] Properties to set
             * @returns {proto.RPCRequest} RPCRequest instance
             */
            RPCRequest.create = function create(properties) {
                return new RPCRequest(properties);
            };
    
            /**
             * Encodes the specified RPCRequest message. Does not implicitly {@link proto.RPCRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.RPCRequest
             * @static
             * @param {proto.IRPCRequest} message RPCRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RPCRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                return writer;
            };
    
            /**
             * Encodes the specified RPCRequest message, length delimited. Does not implicitly {@link proto.RPCRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.RPCRequest
             * @static
             * @param {proto.IRPCRequest} message RPCRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RPCRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RPCRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.RPCRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.RPCRequest} RPCRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RPCRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RPCRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RPCRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.RPCRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.RPCRequest} RPCRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RPCRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RPCRequest message.
             * @function verify
             * @memberof proto.RPCRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RPCRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };
    
            /**
             * Creates a RPCRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.RPCRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.RPCRequest} RPCRequest
             */
            RPCRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.RPCRequest)
                    return object;
                var message = new $root.proto.RPCRequest();
                if (object.data != null)
                    if (typeof object.data === "string")
                        $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                    else if (object.data.length)
                        message.data = object.data;
                return message;
            };
    
            /**
             * Creates a plain object from a RPCRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.RPCRequest
             * @static
             * @param {proto.RPCRequest} message RPCRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RPCRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.data = options.bytes === String ? "" : [];
                if (message.data != null && message.hasOwnProperty("data"))
                    object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                return object;
            };
    
            /**
             * Converts this RPCRequest to JSON.
             * @function toJSON
             * @memberof proto.RPCRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RPCRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RPCRequest;
        })();
    
        proto.RPCResponse = (function() {
    
            /**
             * Properties of a RPCResponse.
             * @memberof proto
             * @interface IRPCResponse
             * @property {proto.IError|null} [error] RPCResponse error
             * @property {Uint8Array|null} [result] RPCResponse result
             */
    
            /**
             * Constructs a new RPCResponse.
             * @memberof proto
             * @classdesc Represents a RPCResponse.
             * @implements IRPCResponse
             * @constructor
             * @param {proto.IRPCResponse=} [properties] Properties to set
             */
            function RPCResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RPCResponse error.
             * @member {proto.IError|null|undefined} error
             * @memberof proto.RPCResponse
             * @instance
             */
            RPCResponse.prototype.error = null;
    
            /**
             * RPCResponse result.
             * @member {Uint8Array} result
             * @memberof proto.RPCResponse
             * @instance
             */
            RPCResponse.prototype.result = $util.newBuffer([]);
    
            /**
             * Creates a new RPCResponse instance using the specified properties.
             * @function create
             * @memberof proto.RPCResponse
             * @static
             * @param {proto.IRPCResponse=} [properties] Properties to set
             * @returns {proto.RPCResponse} RPCResponse instance
             */
            RPCResponse.create = function create(properties) {
                return new RPCResponse(properties);
            };
    
            /**
             * Encodes the specified RPCResponse message. Does not implicitly {@link proto.RPCResponse.verify|verify} messages.
             * @function encode
             * @memberof proto.RPCResponse
             * @static
             * @param {proto.IRPCResponse} message RPCResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RPCResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error != null && message.hasOwnProperty("error"))
                    $root.proto.Error.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.result != null && message.hasOwnProperty("result"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.result);
                return writer;
            };
    
            /**
             * Encodes the specified RPCResponse message, length delimited. Does not implicitly {@link proto.RPCResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.RPCResponse
             * @static
             * @param {proto.IRPCResponse} message RPCResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RPCResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a RPCResponse message from the specified reader or buffer.
             * @function decode
             * @memberof proto.RPCResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.RPCResponse} RPCResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RPCResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.RPCResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.result = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };
    
            /**
             * Decodes a RPCResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.RPCResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.RPCResponse} RPCResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RPCResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a RPCResponse message.
             * @function verify
             * @memberof proto.RPCResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RPCResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error != null && message.hasOwnProperty("error")) {
                    var error = $root.proto.Error.verify(message.error);
                    if (error)
                        return "error." + error;
                }
                if (message.result != null && message.hasOwnProperty("result"))
                    if (!(message.result && typeof message.result.length === "number" || $util.isString(message.result)))
                        return "result: buffer expected";
                return null;
            };
    
            /**
             * Creates a RPCResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.RPCResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.RPCResponse} RPCResponse
             */
            RPCResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.RPCResponse)
                    return object;
                var message = new $root.proto.RPCResponse();
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".proto.RPCResponse.error: object expected");
                    message.error = $root.proto.Error.fromObject(object.error);
                }
                if (object.result != null)
                    if (typeof object.result === "string")
                        $util.base64.decode(object.result, message.result = $util.newBuffer($util.base64.length(object.result)), 0);
                    else if (object.result.length)
                        message.result = object.result;
                return message;
            };
    
            /**
             * Creates a plain object from a RPCResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.RPCResponse
             * @static
             * @param {proto.RPCResponse} message RPCResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RPCResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.error = null;
                    object.result = options.bytes === String ? "" : [];
                }
                if (message.error != null && message.hasOwnProperty("error"))
                    object.error = $root.proto.Error.toObject(message.error, options);
                if (message.result != null && message.hasOwnProperty("result"))
                    object.result = options.bytes === String ? $util.base64.encode(message.result, 0, message.result.length) : options.bytes === Array ? Array.prototype.slice.call(message.result) : message.result;
                return object;
            };
    
            /**
             * Converts this RPCResponse to JSON.
             * @function toJSON
             * @memberof proto.RPCResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RPCResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return RPCResponse;
        })();
    
        proto.Centrifuge = (function() {
    
            /**
             * Constructs a new Centrifuge service.
             * @memberof proto
             * @classdesc Represents a Centrifuge
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function Centrifuge(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
    
            (Centrifuge.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Centrifuge;
    
            /**
             * Creates new Centrifuge service using the specified rpc implementation.
             * @function create
             * @memberof proto.Centrifuge
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {Centrifuge} RPC service. Useful where requests and/or responses are streamed.
             */
            Centrifuge.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
    
            /**
             * Callback as used by {@link proto.Centrifuge#communicate}.
             * @memberof proto.Centrifuge
             * @typedef CommunicateCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {proto.Reply} [response] Reply
             */
    
            /**
             * Calls Communicate.
             * @function communicate
             * @memberof proto.Centrifuge
             * @instance
             * @param {proto.ICommand} request Command message or plain object
             * @param {proto.Centrifuge.CommunicateCallback} callback Node-style callback called with the error, if any, and Reply
             * @returns {undefined}
             * @variation 1
             */
            Centrifuge.prototype.communicate = function communicate(request, callback) {
                return this.rpcCall(communicate, $root.proto.Command, $root.proto.Reply, request, callback);
            };
    
            /**
             * Calls Communicate.
             * @function communicate
             * @memberof proto.Centrifuge
             * @instance
             * @param {proto.ICommand} request Command message or plain object
             * @returns {Promise<proto.Reply>} Promise
             * @variation 2
             */
    
            return Centrifuge;
        })();
    
        return proto;
    })();

    return $root;
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__(18);

// converts to / from base64 encoded strings
util.base64 = __webpack_require__(17);

// base class of rpc.Service
util.EventEmitter = __webpack_require__(16);

// float handling accross browsers
util.float = __webpack_require__(15);

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__(14);

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__(13);

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__(12);

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__(11);

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 * @const
 */
util.isNode = Boolean(global.process && global.process.versions && global.process.versions.node);

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ global.dcodeIO && /* istanbul ignore next */ global.dcodeIO.Long || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: (new Error()).stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
var Observable = (function () {
    function Observable() {
        this.__callbacks = {};
    }
    Observable.prototype.on = function (events, fn) {
        var _this = this;
        events.replace(/[^\s]+/g, function (name) {
            (_this.__callbacks[name] = _this.__callbacks[name] || []).push(fn);
            return '';
        });
        return this;
    };
    Observable.prototype.one = function (name, fn) {
        fn['one'] = true;
        return this.on(name, fn);
    };
    Observable.prototype.off = function (events, fn) {
        var _this = this;
        if (events === '*') {
            this.__callbacks = {};
        }
        else if (fn) {
            var arr = this.__callbacks[events];
            for (var i = 0, cb = void 0; (cb = arr && arr[i]); ++i) {
                if (cb === fn) {
                    arr.splice(i, 1);
                }
            }
        }
        else {
            events.replace(/[^\s]+/g, function (name) {
                _this.__callbacks[name] = [];
                return '';
            });
        }
        return this;
    };
    Observable.prototype.trigger = function (name, args) {
        var fns = this.__callbacks[name] || [];
        for (var i = 0, fn = void 0; (fn = fns[i]); ++i) {
            if (!fn['busy']) {
                fn['busy'] = true;
                fn.apply(this, args);
                if (fn['one']) {
                    fns.splice(i, 1);
                    i--;
                }
                fn['busy'] = false;
            }
        }
        return this;
    };
    return Observable;
}());



/***/ })
/******/ ]);
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Reader;

var util      = __webpack_require__(1);

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = util.Buffer
    ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer) {
            return util.Buffer.isBuffer(buffer)
                ? new BufferReader(buffer)
                /* istanbul ignore next */
                : create_array(buffer);
        })(buffer);
    }
    /* istanbul ignore next */
    : create_array;

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            do { // eslint-disable-line no-constant-condition
                if ((wireType = this.uint32() & 7) === 4)
                    break;
                this.skipType(wireType);
            } while (true);
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Writer;

var util      = __webpack_require__(1);

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = util.Buffer
    ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
            return new BufferWriter();
        })();
    }
    /* istanbul ignore next */
    : function create_array() {
        return new Writer();
    };

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/Functions.ts
var isFunction = function (value) {
    return typeof value === 'function';
};
var isString = function (value) {
    return typeof value === 'string';
};
var log = function (level) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (console) {
        var logger = console[level];
        if (isFunction(logger)) {
            logger.apply(logger, args);
        }
    }
};
var stripSlash = function (value) {
    return value.replace(/\/$/, '');
};
var startsWith = function (value, prefix) {
    return value.lastIndexOf(prefix, 0) === 0;
};
var endsWith = function (value, suffix) {
    return value.indexOf(suffix, value.length - suffix.length) !== -1;
};
var errorExists = function (data) {
    return 'error' in data && data.error !== null && data.error !== '';
};
var objectToQuery = function (object) {
    var p = [];
    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            p.push(encodeURIComponent(i) + (object[i] ? '=' + encodeURIComponent(object[i]) : ''));
        }
    }
    return p.join('&');
};

// EXTERNAL MODULE: ./node_modules/js-observable/dist/observable.js
var observable = __webpack_require__(2);

// EXTERNAL MODULE: ./src/Proto.js
var Proto = __webpack_require__(0);

// CONCATENATED MODULE: ./src/Subscription.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var Subscription_Subscription = (function (_super) {
    __extends(Subscription, _super);
    function Subscription(centrifuge, channel, events) {
        var _this = _super.call(this) || this;
        _this.channel = null;
        _this._status = 'new';
        _this._error = null;
        _this._centrifuge = null;
        _this._isResubscribe = false;
        _this._recovered = false;
        _this._ready = false;
        _this._noResubscribe = false;
        _this._promise = null;
        _this._centrifuge = centrifuge;
        _this.channel = channel;
        _this.setEvents(events);
        _this._initializePromise();
        return _this;
    }
    Object.defineProperty(Subscription.prototype, "isUnsubscribed", {
        get: function () {
            return this._status === 'unsubscribed';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subscription.prototype, "isSuccess", {
        get: function () {
            return this._status === 'success';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Subscription.prototype, "isSubscribing", {
        get: function () {
            return this._status === 'subscribing';
        },
        enumerable: true,
        configurable: true
    });
    Subscription.prototype.setEvents = function (events) {
        if (!events) {
            return;
        }
        if (isFunction(events)) {
            this.on('message', events);
        }
        else if (Object.prototype.toString.call(events) === Object.prototype.toString.call({})) {
            var knownEvents = ['message', 'join', 'leave', 'unsubscribe', 'subscribe', 'error'];
            for (var i = 0, l = knownEvents.length; i < l; i++) {
                var ev = knownEvents[i];
                if (ev in events) {
                    this.on(ev, events[ev]);
                }
            }
        }
    };
    Subscription.prototype.setNew = function () {
        this._status = 'new';
    };
    Subscription.prototype.setSubscribing = function () {
        if (this._ready === true) {
            this._initializePromise();
            this._isResubscribe = true;
        }
        this._status = 'subscribing';
    };
    Subscription.prototype.setUnsubscribed = function (noResubscribe) {
        if (this._status === 'unsubscribed') {
            return;
        }
        this._status = 'unsubscribed';
        if (noResubscribe === true) {
            this._noResubscribe = true;
        }
        this.triggerUnsubscribe();
    };
    Subscription.prototype.setSubscribeSuccess = function (recovered) {
        if (this.isSuccess) {
            return;
        }
        this._recovered = recovered;
        this._status = 'success';
        var successContext = this._getSubscribeSuccess();
        this.trigger('subscribe', [successContext]);
        this._resolve(successContext);
    };
    Subscription.prototype.setSubscribeError = function (error) {
        if (this._status === 'error') {
            return;
        }
        this._status = 'error';
        this._error = error;
        this.trigger('error', [error]);
        this._reject(error);
    };
    Subscription.prototype.triggerUnsubscribe = function () {
        this.trigger('unsubscribe', [{
                channel: this.channel
            }]);
    };
    Subscription.prototype.shouldResubscribe = function () {
        return !this._noResubscribe;
    };
    Subscription.prototype.ready = function (callback, errback) {
        if (this._ready) {
            if (this.isSuccess) {
                callback(this._getSubscribeSuccess());
            }
            else {
                errback(this._error);
            }
        }
    };
    Subscription.prototype.subscribe = function () {
        if (this.isSuccess) {
            return;
        }
        this._centrifuge.subscribeSub(this);
        return this;
    };
    Subscription.prototype.unsubscribe = function () {
        this.setUnsubscribed(true);
        this._centrifuge.unsubscribeSub(this);
    };
    Subscription.prototype.publish = function (data) {
        return this._request(Proto["proto"].MethodType.PUBLISH, data);
    };
    Subscription.prototype.presence = function () {
        return this._request(Proto["proto"].MethodType.PRESENCE);
    };
    Subscription.prototype.history = function () {
        return this._request(Proto["proto"].MethodType.HISTORY);
    };
    Subscription.prototype._initializePromise = function () {
        var _this = this;
        this._ready = false;
        this._promise = new Promise(function (resolve, reject) {
            _this._resolve = function (value) {
                _this._ready = true;
                resolve(value);
            };
            _this._reject = function (err) {
                _this._ready = true;
                reject(err);
            };
        });
    };
    Subscription.prototype._getSubscribeSuccess = function () {
        return {
            channel: this.channel,
            isResubscribe: this._isResubscribe,
            recovered: this._recovered
        };
    };
    Subscription.prototype._request = function (method, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isUnsubscribed) {
                reject({
                    message: 'Subscription unsubscribed',
                });
                return;
            }
            _this._promise.then(function () {
                if (!_this._centrifuge.isConnected) {
                    reject({
                        message: 'Disconnected',
                    });
                    return;
                }
                var params = {
                    channel: _this.channel,
                };
                if (data) {
                    params['data'] = data;
                }
                _this._centrifuge.addCommand({
                    method: method,
                    params: params,
                }).then(function (response) {
                    resolve(response);
                }, function (error) {
                    reject(error);
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    return Subscription;
}(observable["Observable"]));


// CONCATENATED MODULE: ./src/Centrifuge.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Centrifuge", function() { return Centrifuge_Centrifuge; });
var Centrifuge_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Centrifuge_Centrifuge = (function (_super) {
    Centrifuge_extends(Centrifuge, _super);
    function Centrifuge(config) {
        var _this = _super.call(this) || this;
        _this._config = {};
        _this._endpoint = null;
        _this._status = 'disconnected';
        _this._isSockJS = false;
        _this._transport = null;
        _this._transportName = null;
        _this._transportClosed = true;
        _this._reconnect = true;
        _this._reconnecting = false;
        _this._numRefreshFailed = 0;
        _this._refreshTimeout = null;
        _this._pongTimeout = null;
        _this._pingInterval = null;
        _this._commandId = 0;
        _this._commands = [];
        _this._isBatching = false;
        _this._isAuthBatching = false;
        _this._authChannels = {};
        _this._clientID = null;
        _this._callbacks = {};
        _this._subs = {};
        _this._retries = 0;
        _this._latency = null;
        _this._latencyStart = null;
        _this._lastMessageID = {};
        _this._configure(config);
        return _this;
    }
    Object.defineProperty(Centrifuge.prototype, "isConnected", {
        get: function () {
            return this._status === 'connected';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Centrifuge.prototype, "isDisconnected", {
        get: function () {
            return this._status === 'disconnected';
        },
        enumerable: true,
        configurable: true
    });
    Centrifuge.prototype.connect = function () {
        if (this.isConnected) {
            this._debug('Connect called when already connected');
            return;
        }
        if (this._status === 'connecting') {
            return;
        }
        this._debug('Start connecting');
        this._setStatus('connecting');
        this._clientID = null;
        this._reconnect = true;
        this._setTransport();
    };
    Centrifuge.prototype.disconnect = function () {
        this._disconnect('client');
    };
    Centrifuge.prototype.ping = function () {
        this.addCommand({
            method: Proto["proto"].MethodType.PING
        }).then(function (result) {
        }, function (error) {
        });
    };
    Centrifuge.prototype.startBatching = function () {
        this._isBatching = true;
    };
    Centrifuge.prototype.stopBatching = function (flush) {
        if (flush === void 0) { flush = false; }
        this._isBatching = false;
        if (flush === true) {
            this.flush();
        }
    };
    Centrifuge.prototype.flush = function () {
        var commands = this._commands.slice();
        this._send(commands);
        this._commands = [];
    };
    Centrifuge.prototype.startAuthBatching = function () {
        this._isAuthBatching = true;
    };
    Centrifuge.prototype.stopAuthBatching = function () {
        var _this = this;
        var i;
        var channel;
        this._isAuthBatching = false;
        var channels = [];
        for (channel in this._authChannels) {
            if (this._authChannels.hasOwnProperty(channel)) {
                if (!this._getSub(channel)) {
                    continue;
                }
                channels.push(channel);
            }
        }
        this._authChannels = {};
        if (channels.length === 0) {
            return;
        }
        var cb = function (err, _data) {
            if (err === true) {
                _this._debug('Authorization request failed');
                for (i in channels) {
                    if (channels.hasOwnProperty(i)) {
                        channel = channels[i];
                        _this._subscribeError({
                            message: 'authorization request failed',
                        }, channel);
                    }
                }
                return;
            }
            var batch = false;
            if (!_this._isBatching) {
                _this.startBatching();
                batch = true;
            }
            for (i in channels) {
                if (channels.hasOwnProperty(i)) {
                    channel = channels[i];
                    var channelResponse = _data[channel];
                    if (!channelResponse) {
                        _this._subscribeError({
                            message: 'channel not found in authorization response',
                        }, channel);
                        continue;
                    }
                    if (!channelResponse.status || channelResponse.status === 200) {
                        var msg = {
                            method: Proto["proto"].MethodType.SUBSCRIBE,
                            params: {
                                channel: channel,
                                client: _this._clientID,
                                info: channelResponse.info,
                                sign: channelResponse.sign
                            },
                        };
                        if (_this._recover(channel) === true) {
                            msg.params.recover = true;
                            msg.params.last = _this._getLastID(channel);
                        }
                        _this.addCommand(msg).then(function (result) {
                            _this._subscribeResult(result, channel);
                        }, function (error) {
                        });
                    }
                    else {
                        _this._subscribeError({
                            message: channelResponse.status,
                        }, channel);
                    }
                }
            }
            if (batch) {
                _this.stopBatching(true);
            }
        };
        var data = {
            client: this._clientID,
            channels: channels,
        };
        if (isFunction(this._config.onPrivateChannelAuth)) {
            this._config.onPrivateChannelAuth({
                data: data,
            }, cb);
        }
        else {
            this._request(this._config.authEndpoint, this._config.authParams, this._config.authHeaders, data, cb);
        }
    };
    Centrifuge.prototype.subscribe = function (channel, events) {
        if (!isString(channel)) {
            throw new Error('Illegal argument type: channel must be a string');
        }
        if (!this._config.resubscribe && !this.isConnected) {
            throw new Error('Can not only subscribe in connected state when resubscribe option is off');
        }
        var currentSub = this._getSub(channel);
        if (currentSub !== null) {
            currentSub.setEvents(events);
            if (currentSub.isUnsubscribed) {
                currentSub.subscribe();
            }
            return currentSub;
        }
        else {
            var sub = new Subscription_Subscription(this, channel, events);
            this._subs[channel] = sub;
            sub.subscribe();
            return sub;
        }
    };
    Centrifuge.prototype.subscribeSub = function (sub) {
        var _this = this;
        var channel = sub.channel;
        if (!(channel in this._subs)) {
            this._subs[channel] = sub;
        }
        if (!this.isConnected) {
            sub.setNew();
            return;
        }
        sub.setSubscribing();
        if (startsWith(channel, this._config.privateChannelPrefix)) {
            if (this._isAuthBatching) {
                this._authChannels[channel] = true;
            }
            else {
                this.startAuthBatching();
                this.subscribeSub(sub);
                this.stopAuthBatching();
            }
        }
        else {
            var msg = {
                method: Proto["proto"].MethodType.SUBSCRIBE,
                params: {
                    channel: channel,
                }
            };
            if (this._recover(channel) === true) {
                msg.params.recover = true;
                msg.params.last = this._getLastID(channel);
            }
            this.addCommand(msg).then(function (result) {
                _this._subscribeResult(result, channel);
            }, function (error) {
                _this._subscribeError(error, channel);
            });
        }
    };
    Centrifuge.prototype.unsubscribeSub = function (sub) {
        if (this.isConnected) {
            this.addCommand({
                method: Proto["proto"].MethodType.UNSUBSCRIBE,
                params: {
                    channel: sub.channel
                }
            }).then(function (result) {
                sub.setUnsubscribed();
            }, function (error) {
            });
        }
    };
    Centrifuge.prototype.addCommand = function (command) {
        var _this = this;
        return new Promise(function (callback, errback) {
            var id = _this._getNextCommandId();
            command.id = id;
            if (_this._isBatching === true) {
                _this._commands.push(command);
            }
            else {
                _this._send([command]);
            }
            _this._callbacks[id] = {
                callback: callback,
                errback: errback,
            };
            setTimeout(function () {
                delete _this._callbacks[id];
                if (isFunction(errback)) {
                    errback({
                        message: 'Timeout',
                    });
                }
            }, _this._config.timeout);
        });
    };
    Centrifuge.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        log.apply(void 0, ['info'].concat(args));
    };
    Centrifuge.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        log.apply(void 0, ['error'].concat(args));
    };
    Centrifuge.prototype._debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._config.debug === true) {
            log.apply(void 0, ['debug'].concat(args));
        }
    };
    Centrifuge.prototype._configure = function (config) {
        this._debug('Configuring Centrifuge with', config);
        config = Object.assign({
            format: 'json',
            retry: 1000,
            maxRetry: 20000,
            timeout: 5000,
            info: '',
            resubscribe: true,
            ping: true,
            pingInterval: 30000,
            pongWaitTimeout: 5000,
            debug: false,
            insecure: false,
            privateChannelPrefix: '$',
            refreshEndpoint: '/centrifuge/refresh/',
            refreshHeaders: {},
            refreshParams: {},
            refreshData: {},
            refreshAttempts: 0,
            refreshInterval: 3000,
            authEndpoint: '/centrifuge/auth/',
            authHeaders: {},
            authParams: {},
        }, config);
        config.format = config.format.toLowerCase();
        if (['json', 'protobuf'].indexOf(config.format) === -1) {
            config.format = 'json';
        }
        if (!config.url) {
            throw new Error('Missing required configuration parameter \'url\' specifying server URL');
        }
        config.url = stripSlash(config.url);
        this._endpoint = config.url;
        if (isFunction(config.sockJS)) {
            this._isSockJS = true;
            if (!config.transports || !config.transports.length) {
                config.transports = [
                    'websocket',
                    'xdr-streaming',
                    'xhr-streaming',
                    'eventsource',
                    'iframe-eventsource',
                    'iframe-htmlfile',
                    'xdr-polling',
                    'xhr-polling',
                    'iframe-xhr-polling',
                    'jsonp-polling'
                ];
            }
            this._endpoint = this._endpoint
                .replace('ws://', 'http://')
                .replace('wss://', 'https://');
            if (!endsWith(this._endpoint, 'connection/sockjs')) {
                this._endpoint = this._endpoint + '/connection/sockjs';
            }
        }
        else {
            if (!isFunction(WebSocket)) {
                throw new Error('No Websocket support and no SockJS configured, can not connect');
            }
            this._endpoint = this._endpoint
                .replace('http://', 'ws://')
                .replace('https://', 'wss://');
            if (!endsWith(this._endpoint, 'connection/websocket')) {
                this._endpoint = this._endpoint + '/connection/websocket';
            }
        }
        if (config.format === 'protobuf') {
            this._endpoint += '?format=protobuf';
        }
        if (!config.user) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'user\' specifying user\'s unique ID in your application');
            }
            else {
                this._debug('Configuration parameter \'user\' not found but this is OK for insecure mode - anonymous access will be used');
            }
        }
        else {
            if (!isString(config.user)) {
                Centrifuge.log('Configuration parameter \'user\' expected to be string');
            }
        }
        if (!config.exp) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'time\'');
            }
            else {
                this._debug('Configuration parameter \'exp\' not found but this is OK for insecure mode');
            }
        }
        else {
            if (!isString(config.exp)) {
                Centrifuge.log('Configuration parameter \'exp\' expected to be string');
            }
        }
        if (!config.sign) {
            if (!config.insecure) {
                throw new Error('Missing required configuration parameter \'sign\' specifying the sign of authorization request');
            }
            else {
                this._debug('Configuration parameter \'sign\' not found but this is OK for insecure mode');
            }
        }
        else {
            if (!isString(config.sign)) {
                Centrifuge.log('Configuration parameter \'sign\' expected to be string');
            }
        }
        if (config.info && !isString(config.info)) {
            Centrifuge.log('Configuration parameter \'info\' expected to be string');
        }
        this._config = config;
    };
    Centrifuge.prototype._request = function (url, params, headers, data, callback) {
        this._debug('Sending POST request to', url);
        var query = objectToQuery(params);
        if (query.length > 0) {
            query = '?' + query;
        }
        var _headers = new Headers();
        _headers.append('X-Requested-With', 'XMLHttpRequest');
        _headers.append('Content-Type', 'application/json');
        for (var headerName in headers) {
            if (headers.hasOwnProperty(headerName)) {
                _headers.append(headerName, headers[headerName]);
            }
        }
        fetch(url + query, {
            method: 'POST',
            headers: _headers,
            body: data,
            credentials: 'include',
            mode: 'cors',
        }).then(function (response) {
            if (response.ok) {
                return response.json();
            }
            Centrifuge.error('Network response was not ok', response.status);
        }).then(function (callbackData) {
            callback(false, callbackData);
        }).catch(function (error) {
            Centrifuge.error('Network response error', error);
        });
    };
    Centrifuge.prototype._recover = function (channel) {
        return channel in this._lastMessageID;
    };
    Centrifuge.prototype._getLastID = function (channel) {
        var lastUID = this._lastMessageID[channel];
        if (lastUID) {
            this._debug('Last uid found and sent for channel', channel);
            return lastUID;
        }
        else {
            this._debug('No last uid found for channel', channel);
            return '';
        }
    };
    Centrifuge.prototype._getSub = function (channel) {
        return this._subs[channel] || null;
    };
    Centrifuge.prototype._clearConnectedState = function (reconnect) {
        this._clientID = null;
        for (var uid in this._callbacks) {
            if (this._callbacks.hasOwnProperty(uid)) {
                var callbacks = this._callbacks[uid];
                var errback = callbacks.errback;
                if (isFunction(errback)) {
                    errback({
                        message: 'Disconnected',
                    });
                }
            }
        }
        this._callbacks = {};
        for (var channel in this._subs) {
            if (this._subs.hasOwnProperty(channel)) {
                var sub = this._getSub(channel);
                if (reconnect) {
                    if (sub.isSuccess) {
                        sub.triggerUnsubscribe();
                    }
                    sub.setSubscribing();
                }
                else {
                    sub.setUnsubscribed();
                }
            }
        }
        if (!this._config.resubscribe || !this._reconnect) {
            this._subs = {};
        }
    };
    Centrifuge.prototype._setStatus = function (status) {
        if (this._status !== status) {
            this._debug('Status:', this._status, '->', status);
            this._status = status;
        }
    };
    Centrifuge.prototype._disconnect = function (reason, shouldReconnect) {
        if (shouldReconnect === void 0) { shouldReconnect = false; }
        if (this.isDisconnected) {
            return;
        }
        this._debug('Disconnected:', reason + '.', 'shouldReconnect:', shouldReconnect);
        if (shouldReconnect === false) {
            this._reconnect = false;
        }
        this._clearConnectedState(shouldReconnect);
        if (!this.isDisconnected) {
            this._setStatus('disconnected');
            if (this._refreshTimeout) {
                clearTimeout(this._refreshTimeout);
            }
            if (this._reconnecting === false) {
                this.trigger('disconnect', [{
                        reason: reason,
                        reconnect: shouldReconnect,
                    }]);
            }
        }
        if (!this._transportClosed) {
            this._transport.close();
        }
    };
    Centrifuge.prototype._send = function (commands) {
        if (!commands.length) {
            return;
        }
        var encodedCommands = [];
        for (var i in commands) {
            if (commands.hasOwnProperty(i)) {
                encodedCommands.push(JSON.stringify(commands[i]));
            }
        }
        this._transport.send(encodedCommands.join("\n"));
        this._debug('Send', commands);
    };
    Centrifuge.prototype._getNextCommandId = function () {
        return ++this._commandId;
    };
    Centrifuge.prototype._stopPing = function () {
        if (this._pongTimeout !== null) {
            clearTimeout(this._pongTimeout);
        }
        if (this._pingInterval !== null) {
            clearInterval(this._pingInterval);
        }
    };
    Centrifuge.prototype._startPing = function () {
        var _this = this;
        if (this._config.ping !== true || this._config.pingInterval <= 0 || !this.isConnected) {
            return;
        }
        this._pingInterval = setInterval(function () {
            if (!_this.isConnected) {
                _this._stopPing();
                return;
            }
            _this.ping();
            _this._pongTimeout = setTimeout(function () {
                this._disconnect('no ping', true);
            }, _this._config.pongWaitTimeout);
        }, this._config.pingInterval);
    };
    Centrifuge.prototype._restartPing = function () {
        this._stopPing();
        this._startPing();
    };
    Centrifuge.prototype._resetRetry = function () {
        this._debug('Reset retries count to 0');
        this._retries = 0;
    };
    Centrifuge.prototype._getRetryInterval = function () {
        this._retries += 1;
        var jitter = 0.5 * Math.random();
        var interval = this._config.retry * Math.pow(2, this._retries + 1);
        if (interval > this._config.maxRetry) {
            interval = this._config.maxRetry;
        }
        return Math.floor((1 - jitter) * interval);
    };
    Centrifuge.prototype._refreshFailed = function () {
        this._numRefreshFailed = 0;
        if (!this.isDisconnected) {
            this._disconnect('refresh failed');
        }
        if (this._config.refreshFailed) {
            this._config.refreshFailed();
        }
    };
    Centrifuge.prototype._refresh = function () {
        var _this = this;
        this._debug('Refresh credentials');
        if (this._config.refreshAttempts === 0) {
            this._debug('Refresh attempts set to 0, do not send refresh request at all');
            this._refreshFailed();
            return;
        }
        if (this._refreshTimeout !== null) {
            clearTimeout(this._refreshTimeout);
        }
        var cb = function (err, data) {
            if (err === true) {
                _this._debug('Error getting connection credentials from refresh endpoint', data);
                _this._numRefreshFailed++;
                if (_this._refreshTimeout) {
                    clearTimeout(_this._refreshTimeout);
                }
                if (_this._config.refreshAttempts !== null && _this._numRefreshFailed >= _this._config.refreshAttempts) {
                    _this._refreshFailed();
                    return;
                }
                _this._refreshTimeout = setTimeout(function () {
                    _this._refresh();
                }, _this._config.refreshInterval + Math.round(Math.random() * 1000));
                return;
            }
            _this._numRefreshFailed = 0;
            _this._config.user = data.user;
            _this._config.exp = data.exp;
            _this._config.sign = data.sign;
            if ('info' in data) {
                _this._config.info = data.info;
            }
            else {
                data.info = '';
            }
            if (_this.isDisconnected) {
                _this._debug('Credentials refreshed, connect from scratch');
                _this.connect();
            }
            else {
                _this._debug('Send refreshed credentials');
                _this.addCommand({
                    method: Proto["proto"].MethodType.REFRESH,
                    params: data,
                }).then(function (result) {
                    _this._refreshResult(result);
                }, function (error) {
                });
            }
        };
        if (this._config.onRefresh !== null) {
            this._config.onRefresh({}, cb);
        }
        else {
            this._request(this._config.refreshEndpoint, this._config.refreshParams, this._config.refreshHeaders, this._config.refreshData, cb);
        }
    };
    Centrifuge.prototype._connectResult = function (result) {
        var _this = this;
        if (this.isConnected) {
            return;
        }
        if (this._latencyStart !== null) {
            this._latency = (new Date()).getTime() - this._latencyStart.getTime();
            this._latencyStart = null;
        }
        if (result.expires) {
            if (result.expired) {
                this._reconnecting = true;
                this._disconnect('expired', true);
                this._refresh();
                return;
            }
        }
        this._clientID = result.client;
        this._setStatus('connected');
        if (this._refreshTimeout) {
            clearTimeout(this._refreshTimeout);
        }
        if (result.expires) {
            this._refreshTimeout = setTimeout(function () {
                _this._refresh();
            }, result.ttl * 1000);
        }
        if (this._config.resubscribe) {
            this.startBatching();
            this.startAuthBatching();
            for (var channel in this._subs) {
                if (this._subs.hasOwnProperty(channel)) {
                    var sub = this._getSub(channel);
                    if (sub.shouldResubscribe()) {
                        this.subscribeSub(sub);
                    }
                }
            }
            this.stopAuthBatching();
            this.stopBatching(true);
        }
        this._restartPing();
        this.trigger('connect', [{
                version: result.version,
                client: result.client,
                transport: this._transportName,
                latency: this._latency
            }]);
    };
    Centrifuge.prototype._subscribeResult = function (result, channel) {
        var sub = this._getSub(channel);
        if (!sub || !sub.isSubscribing) {
            return;
        }
        var publications = result.publications;
        if (publications && publications.length) {
            publications = publications.reverse();
            for (var i in publications) {
                if (publications.hasOwnProperty(i)) {
                    this._publicationResult(publications[i]);
                }
            }
        }
        else {
            if ('last' in result) {
                this._lastMessageID[channel] = result.last;
            }
        }
        sub.setSubscribeSuccess(result.recovered || false);
    };
    Centrifuge.prototype._subscribeError = function (error, channel) {
        var sub = this._getSub(channel);
        if (!sub || !sub.isSubscribing) {
            return;
        }
        this.trigger('error', [{
                error: error,
            }]);
        sub.setSubscribeError(error);
    };
    Centrifuge.prototype._refreshResult = function (result) {
        var _this = this;
        if (this._refreshTimeout) {
            clearTimeout(this._refreshTimeout);
        }
        if (result.expires) {
            if (result.expired) {
                this._refreshTimeout = setTimeout(function () {
                    _this._refresh();
                }, this._config.refreshInterval + Math.round(Math.random() * 1000));
                return;
            }
            this._clientID = result.client;
            this._refreshTimeout = setTimeout(function () {
                _this._refresh();
            }, result.ttl * 1000);
        }
    };
    Centrifuge.prototype._joinResult = function (result) {
        var sub = this._getSub(result.channel);
        if (!sub) {
            return;
        }
        sub.trigger('join', [result]);
    };
    Centrifuge.prototype._leaveResult = function (result) {
        var sub = this._getSub(result.channel);
        if (!sub) {
            return;
        }
        sub.trigger('leave', [result]);
    };
    Centrifuge.prototype._publicationResult = function (message) {
        var data = message.data;
        var channel = message.channel;
        this._lastMessageID[channel] = data.uid;
        var sub = this._getSub(channel);
        if (!sub) {
            return;
        }
        sub.trigger('message', [data]);
    };
    Centrifuge.prototype._handleReply = function (reply) {
        var id = reply.id;
        if (!(id in this._callbacks)) {
            return;
        }
        var callbacks = this._callbacks[id];
        delete this._callbacks[id];
        if (!errorExists(reply)) {
            var callback = callbacks.callback;
            if (isFunction(callback)) {
                callback(reply.result);
            }
        }
        else {
            var errback = callbacks.errback;
            if (isFunction(errback)) {
                errback(reply.error);
            }
            this.trigger('error', [reply.error]);
        }
    };
    Centrifuge.prototype._dispatchMessage = function (message) {
        if (message === undefined || message === null) {
            this._debug('Dispatch: got undefined or null message');
            return;
        }
        switch (message.type) {
            case Proto["proto"].MessageType.JOIN:
                this._joinResult(message);
                break;
            case Proto["proto"].MessageType.LEAVE:
                this._leaveResult(message);
                break;
            case Proto["proto"].MessageType.PUBLICATION:
                this._publicationResult(message);
                break;
            default:
                this._handleReply(message);
        }
    };
    Centrifuge.prototype._receive = function (data) {
        if (Object.prototype.toString.call(data) === Object.prototype.toString.call([])) {
            for (var i in data) {
                if (data.hasOwnProperty(i)) {
                    this._dispatchMessage(data[i]);
                }
            }
        }
        else if (Object.prototype.toString.call(data) === Object.prototype.toString.call({})) {
            this._dispatchMessage(data);
        }
    };
    Centrifuge.prototype._setTransport = function () {
        var _this = this;
        if (this._isSockJS) {
            var sockjsOptions = {
                transports: this._config.transports
            };
            if (this._config.server) {
                sockjsOptions.server = this._config.server;
            }
            this._transport = new this._config.sockJS(this._endpoint, null, sockjsOptions);
        }
        else {
            this._transport = new WebSocket(this._endpoint);
        }
        this._transport.onopen = function () {
            _this._transportClosed = false;
            _this._reconnecting = false;
            if (_this._isSockJS) {
                _this._transportName = _this._transport.transport;
                _this._transport.onheartbeat = function () {
                    _this._restartPing();
                };
            }
            else {
                _this._transportName = 'raw-websocket';
            }
            _this._resetRetry();
            var msg = {
                method: Proto["proto"].MethodType.CONNECT,
                params: {
                    user: _this._config.user,
                    info: _this._config.info,
                }
            };
            if (!_this._config.insecure) {
                msg.params.exp = _this._config.exp;
                msg.params.sign = _this._config.sign;
            }
            _this._latencyStart = new Date();
            _this.addCommand(msg).then(function (result) {
                _this._connectResult(result);
            }, function (error) {
            });
        };
        this._transport.onerror = function (error) {
            _this._debug('Transport level error', error);
        };
        this._transport.onclose = function (event) {
            _this._transportClosed = true;
            var reason = 'Connection closed';
            var reconnect = true;
            if (event && 'reason' in event && event.reason) {
                try {
                    var advice = JSON.parse(event.reason);
                    _this._debug(reason + '. Reason is an advice object:', advice);
                    reason = advice.reason;
                    reconnect = advice.reconnect;
                }
                catch (e) {
                    reason = event.reason;
                    _this._debug(reason + '. Reason is a plain string:', reason);
                    reconnect = reason !== 'disconnect';
                }
            }
            if (_this._config.onTransportClose) {
                _this._config.onTransportClose({
                    event: event,
                    reason: reason,
                    reconnect: reconnect,
                });
            }
            _this._disconnect(reason, reconnect);
            if (_this._reconnect === true) {
                _this._reconnecting = true;
                var interval = _this._getRetryInterval();
                _this._debug('Reconnect after ' + interval + ' milliseconds');
                setTimeout(function () {
                    if (_this._reconnect === true) {
                        _this.connect();
                    }
                }, interval);
            }
        };
        this._transport.onmessage = function (event) {
            var replies = event.data.split("\n");
            for (var i in replies) {
                if (!replies[i]) {
                    continue;
                }
                var data = JSON.parse(replies[i]);
                _this._debug('Received', data);
                _this._receive(data);
            }
            _this._restartPing();
        };
    };
    return Centrifuge;
}(observable["Observable"]));



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Service;

var util = __webpack_require__(1);

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(7);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__(3);
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(1);

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

/* istanbul ignore else */
if (util.Buffer)
    BufferReader.prototype._slice = util.Buffer.prototype.slice;

/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__(4);
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(1);

var Buffer = util.Buffer;

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Buffer} Buffer
 */
BufferWriter.alloc = function alloc_buffer(size) {
    return (BufferWriter.alloc = util._Buffer_allocUnsafe)(size);
};

var writeBytesBuffer = Buffer && Buffer.prototype instanceof Uint8Array && Buffer.prototype.set.name === "set"
    ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
                           // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
    };

/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else
        buf.utf8Write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = LongBits;

var util = __webpack_require__(1);

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __webpack_require__(4);
protobuf.BufferWriter = __webpack_require__(10);
protobuf.Reader       = __webpack_require__(3);
protobuf.BufferReader = __webpack_require__(9);

// Utility
protobuf.util         = __webpack_require__(1);
protobuf.rpc          = __webpack_require__(8);
protobuf.roots        = __webpack_require__(6);
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.Reader._configure(protobuf.BufferReader);
    protobuf.util._configure();
}

// Configure serialization
protobuf.Writer._configure(protobuf.BufferWriter);
configure();


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// minimal library entry point.


module.exports = __webpack_require__(20);


/***/ })
/******/ ]);
});