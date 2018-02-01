/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

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
             * @property {number} [Code] Error Code
             * @property {string} [Message] Error Message
             */
    
            /**
             * Constructs a new Error.
             * @memberof proto
             * @classdesc Represents an Error.
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
             * Error Code.
             * @member {number}Code
             * @memberof proto.Error
             * @instance
             */
            Error.prototype.Code = 0;
    
            /**
             * Error Message.
             * @member {string}Message
             * @memberof proto.Error
             * @instance
             */
            Error.prototype.Message = "";
    
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
                if (message.Code != null && message.hasOwnProperty("Code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Code);
                if (message.Message != null && message.hasOwnProperty("Message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
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
                        message.Code = reader.uint32();
                        break;
                    case 2:
                        message.Message = reader.string();
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
                if (message.Code != null && message.hasOwnProperty("Code"))
                    if (!$util.isInteger(message.Code))
                        return "Code: integer expected";
                if (message.Message != null && message.hasOwnProperty("Message"))
                    if (!$util.isString(message.Message))
                        return "Message: string expected";
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
                if (object.Code != null)
                    message.Code = object.Code >>> 0;
                if (object.Message != null)
                    message.Message = String(object.Message);
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
                    object.Code = 0;
                    object.Message = "";
                }
                if (message.Code != null && message.hasOwnProperty("Code"))
                    object.Code = message.Code;
                if (message.Message != null && message.hasOwnProperty("Message"))
                    object.Message = message.Message;
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
    
        proto.Command = (function() {
    
            /**
             * Properties of a Command.
             * @memberof proto
             * @interface ICommand
             * @property {number|Long} [ID] Command ID
             * @property {string} [Method] Command Method
             * @property {Uint8Array} [Params] Command Params
             */
    
            /**
             * Constructs a new Command.
             * @memberof proto
             * @classdesc Represents a Command.
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
             * Command ID.
             * @member {number|Long}ID
             * @memberof proto.Command
             * @instance
             */
            Command.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Command Method.
             * @member {string}Method
             * @memberof proto.Command
             * @instance
             */
            Command.prototype.Method = "";
    
            /**
             * Command Params.
             * @member {Uint8Array}Params
             * @memberof proto.Command
             * @instance
             */
            Command.prototype.Params = $util.newBuffer([]);
    
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
                if (message.ID != null && message.hasOwnProperty("ID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.ID);
                if (message.Method != null && message.hasOwnProperty("Method"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Method);
                if (message.Params != null && message.hasOwnProperty("Params"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Params);
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
                        message.ID = reader.uint64();
                        break;
                    case 2:
                        message.Method = reader.string();
                        break;
                    case 3:
                        message.Params = reader.bytes();
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
                if (message.ID != null && message.hasOwnProperty("ID"))
                    if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                        return "ID: integer|Long expected";
                if (message.Method != null && message.hasOwnProperty("Method"))
                    if (!$util.isString(message.Method))
                        return "Method: string expected";
                if (message.Params != null && message.hasOwnProperty("Params"))
                    if (!(message.Params && typeof message.Params.length === "number" || $util.isString(message.Params)))
                        return "Params: buffer expected";
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
                if (object.ID != null)
                    if ($util.Long)
                        (message.ID = $util.Long.fromValue(object.ID)).unsigned = true;
                    else if (typeof object.ID === "string")
                        message.ID = parseInt(object.ID, 10);
                    else if (typeof object.ID === "number")
                        message.ID = object.ID;
                    else if (typeof object.ID === "object")
                        message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber(true);
                if (object.Method != null)
                    message.Method = String(object.Method);
                if (object.Params != null)
                    if (typeof object.Params === "string")
                        $util.base64.decode(object.Params, message.Params = $util.newBuffer($util.base64.length(object.Params)), 0);
                    else if (object.Params.length)
                        message.Params = object.Params;
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.ID = options.longs === String ? "0" : 0;
                    object.Method = "";
                    object.Params = options.bytes === String ? "" : [];
                }
                if (message.ID != null && message.hasOwnProperty("ID"))
                    if (typeof message.ID === "number")
                        object.ID = options.longs === String ? String(message.ID) : message.ID;
                    else
                        object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber(true) : message.ID;
                if (message.Method != null && message.hasOwnProperty("Method"))
                    object.Method = message.Method;
                if (message.Params != null && message.hasOwnProperty("Params"))
                    object.Params = options.bytes === String ? $util.base64.encode(message.Params, 0, message.Params.length) : options.bytes === Array ? Array.prototype.slice.call(message.Params) : message.Params;
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
             * @property {number|Long} [ID] Reply ID
             * @property {proto.IError} [Error] Reply Error
             * @property {Uint8Array} [Result] Reply Result
             */
    
            /**
             * Constructs a new Reply.
             * @memberof proto
             * @classdesc Represents a Reply.
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
             * Reply ID.
             * @member {number|Long}ID
             * @memberof proto.Reply
             * @instance
             */
            Reply.prototype.ID = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Reply Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.Reply
             * @instance
             */
            Reply.prototype.Error = null;
    
            /**
             * Reply Result.
             * @member {Uint8Array}Result
             * @memberof proto.Reply
             * @instance
             */
            Reply.prototype.Result = $util.newBuffer([]);
    
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
                if (message.ID != null && message.hasOwnProperty("ID"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.ID);
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Result);
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
                        message.ID = reader.uint64();
                        break;
                    case 2:
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.Result = reader.bytes();
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
                if (message.ID != null && message.hasOwnProperty("ID"))
                    if (!$util.isInteger(message.ID) && !(message.ID && $util.isInteger(message.ID.low) && $util.isInteger(message.ID.high)))
                        return "ID: integer|Long expected";
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result"))
                    if (!(message.Result && typeof message.Result.length === "number" || $util.isString(message.Result)))
                        return "Result: buffer expected";
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
                if (object.ID != null)
                    if ($util.Long)
                        (message.ID = $util.Long.fromValue(object.ID)).unsigned = true;
                    else if (typeof object.ID === "string")
                        message.ID = parseInt(object.ID, 10);
                    else if (typeof object.ID === "number")
                        message.ID = object.ID;
                    else if (typeof object.ID === "object")
                        message.ID = new $util.LongBits(object.ID.low >>> 0, object.ID.high >>> 0).toNumber(true);
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.Reply.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null)
                    if (typeof object.Result === "string")
                        $util.base64.decode(object.Result, message.Result = $util.newBuffer($util.base64.length(object.Result)), 0);
                    else if (object.Result.length)
                        message.Result = object.Result;
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.ID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.ID = options.longs === String ? "0" : 0;
                    object.Error = null;
                    object.Result = options.bytes === String ? "" : [];
                }
                if (message.ID != null && message.hasOwnProperty("ID"))
                    if (typeof message.ID === "number")
                        object.ID = options.longs === String ? String(message.ID) : message.ID;
                    else
                        object.ID = options.longs === String ? $util.Long.prototype.toString.call(message.ID) : options.longs === Number ? new $util.LongBits(message.ID.low >>> 0, message.ID.high >>> 0).toNumber(true) : message.ID;
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = options.bytes === String ? $util.base64.encode(message.Result, 0, message.Result.length) : options.bytes === Array ? Array.prototype.slice.call(message.Result) : message.Result;
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
             * @property {proto.MessageType} [Type] Message Type
             * @property {string} [Channel] Message Channel
             * @property {Uint8Array} [Data] Message Data
             */
    
            /**
             * Constructs a new Message.
             * @memberof proto
             * @classdesc Represents a Message.
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
             * Message Type.
             * @member {proto.MessageType}Type
             * @memberof proto.Message
             * @instance
             */
            Message.prototype.Type = 0;
    
            /**
             * Message Channel.
             * @member {string}Channel
             * @memberof proto.Message
             * @instance
             */
            Message.prototype.Channel = "";
    
            /**
             * Message Data.
             * @member {Uint8Array}Data
             * @memberof proto.Message
             * @instance
             */
            Message.prototype.Data = $util.newBuffer([]);
    
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
                if (message.Type != null && message.hasOwnProperty("Type"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Channel);
                if (message.Data != null && message.hasOwnProperty("Data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Data);
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
                        message.Type = reader.int32();
                        break;
                    case 2:
                        message.Channel = reader.string();
                        break;
                    case 3:
                        message.Data = reader.bytes();
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
                if (message.Type != null && message.hasOwnProperty("Type"))
                    switch (message.Type) {
                    default:
                        return "Type: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    if (!$util.isString(message.Channel))
                        return "Channel: string expected";
                if (message.Data != null && message.hasOwnProperty("Data"))
                    if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                        return "Data: buffer expected";
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
                switch (object.Type) {
                case "PUBLICATION":
                case 0:
                    message.Type = 0;
                    break;
                case "JOIN":
                case 1:
                    message.Type = 1;
                    break;
                case "LEAVE":
                case 2:
                    message.Type = 2;
                    break;
                case "UNSUB":
                case 3:
                    message.Type = 3;
                    break;
                }
                if (object.Channel != null)
                    message.Channel = String(object.Channel);
                if (object.Data != null)
                    if (typeof object.Data === "string")
                        $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                    else if (object.Data.length)
                        message.Data = object.Data;
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
                    object.Type = options.enums === String ? "PUBLICATION" : 0;
                    object.Channel = "";
                    object.Data = options.bytes === String ? "" : [];
                }
                if (message.Type != null && message.hasOwnProperty("Type"))
                    object.Type = options.enums === String ? $root.proto.MessageType[message.Type] : message.Type;
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    object.Channel = message.Channel;
                if (message.Data != null && message.hasOwnProperty("Data"))
                    object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
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
             * @property {string} [User] ClientInfo User
             * @property {string} [Client] ClientInfo Client
             * @property {Uint8Array} [ConnInfo] ClientInfo ConnInfo
             * @property {Uint8Array} [ChanInfo] ClientInfo ChanInfo
             */
    
            /**
             * Constructs a new ClientInfo.
             * @memberof proto
             * @classdesc Represents a ClientInfo.
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
             * ClientInfo User.
             * @member {string}User
             * @memberof proto.ClientInfo
             * @instance
             */
            ClientInfo.prototype.User = "";
    
            /**
             * ClientInfo Client.
             * @member {string}Client
             * @memberof proto.ClientInfo
             * @instance
             */
            ClientInfo.prototype.Client = "";
    
            /**
             * ClientInfo ConnInfo.
             * @member {Uint8Array}ConnInfo
             * @memberof proto.ClientInfo
             * @instance
             */
            ClientInfo.prototype.ConnInfo = $util.newBuffer([]);
    
            /**
             * ClientInfo ChanInfo.
             * @member {Uint8Array}ChanInfo
             * @memberof proto.ClientInfo
             * @instance
             */
            ClientInfo.prototype.ChanInfo = $util.newBuffer([]);
    
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
                if (message.User != null && message.hasOwnProperty("User"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.User);
                if (message.Client != null && message.hasOwnProperty("Client"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Client);
                if (message.ConnInfo != null && message.hasOwnProperty("ConnInfo"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ConnInfo);
                if (message.ChanInfo != null && message.hasOwnProperty("ChanInfo"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ChanInfo);
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
                        message.User = reader.string();
                        break;
                    case 2:
                        message.Client = reader.string();
                        break;
                    case 3:
                        message.ConnInfo = reader.bytes();
                        break;
                    case 4:
                        message.ChanInfo = reader.bytes();
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
                if (message.User != null && message.hasOwnProperty("User"))
                    if (!$util.isString(message.User))
                        return "User: string expected";
                if (message.Client != null && message.hasOwnProperty("Client"))
                    if (!$util.isString(message.Client))
                        return "Client: string expected";
                if (message.ConnInfo != null && message.hasOwnProperty("ConnInfo"))
                    if (!(message.ConnInfo && typeof message.ConnInfo.length === "number" || $util.isString(message.ConnInfo)))
                        return "ConnInfo: buffer expected";
                if (message.ChanInfo != null && message.hasOwnProperty("ChanInfo"))
                    if (!(message.ChanInfo && typeof message.ChanInfo.length === "number" || $util.isString(message.ChanInfo)))
                        return "ChanInfo: buffer expected";
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
                if (object.User != null)
                    message.User = String(object.User);
                if (object.Client != null)
                    message.Client = String(object.Client);
                if (object.ConnInfo != null)
                    if (typeof object.ConnInfo === "string")
                        $util.base64.decode(object.ConnInfo, message.ConnInfo = $util.newBuffer($util.base64.length(object.ConnInfo)), 0);
                    else if (object.ConnInfo.length)
                        message.ConnInfo = object.ConnInfo;
                if (object.ChanInfo != null)
                    if (typeof object.ChanInfo === "string")
                        $util.base64.decode(object.ChanInfo, message.ChanInfo = $util.newBuffer($util.base64.length(object.ChanInfo)), 0);
                    else if (object.ChanInfo.length)
                        message.ChanInfo = object.ChanInfo;
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
                    object.User = "";
                    object.Client = "";
                    object.ConnInfo = options.bytes === String ? "" : [];
                    object.ChanInfo = options.bytes === String ? "" : [];
                }
                if (message.User != null && message.hasOwnProperty("User"))
                    object.User = message.User;
                if (message.Client != null && message.hasOwnProperty("Client"))
                    object.Client = message.Client;
                if (message.ConnInfo != null && message.hasOwnProperty("ConnInfo"))
                    object.ConnInfo = options.bytes === String ? $util.base64.encode(message.ConnInfo, 0, message.ConnInfo.length) : options.bytes === Array ? Array.prototype.slice.call(message.ConnInfo) : message.ConnInfo;
                if (message.ChanInfo != null && message.hasOwnProperty("ChanInfo"))
                    object.ChanInfo = options.bytes === String ? $util.base64.encode(message.ChanInfo, 0, message.ChanInfo.length) : options.bytes === Array ? Array.prototype.slice.call(message.ChanInfo) : message.ChanInfo;
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
             * @property {string} [UID] Publication UID
             * @property {Uint8Array} [Data] Publication Data
             * @property {proto.IClientInfo} [Info] Publication Info
             */
    
            /**
             * Constructs a new Publication.
             * @memberof proto
             * @classdesc Represents a Publication.
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
             * Publication UID.
             * @member {string}UID
             * @memberof proto.Publication
             * @instance
             */
            Publication.prototype.UID = "";
    
            /**
             * Publication Data.
             * @member {Uint8Array}Data
             * @memberof proto.Publication
             * @instance
             */
            Publication.prototype.Data = $util.newBuffer([]);
    
            /**
             * Publication Info.
             * @member {(proto.IClientInfo|null|undefined)}Info
             * @memberof proto.Publication
             * @instance
             */
            Publication.prototype.Info = null;
    
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
                if (message.UID != null && message.hasOwnProperty("UID"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.UID);
                if (message.Data != null && message.hasOwnProperty("Data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Data);
                if (message.Info != null && message.hasOwnProperty("Info"))
                    $root.proto.ClientInfo.encode(message.Info, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                        message.UID = reader.string();
                        break;
                    case 2:
                        message.Data = reader.bytes();
                        break;
                    case 3:
                        message.Info = $root.proto.ClientInfo.decode(reader, reader.uint32());
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
                if (message.UID != null && message.hasOwnProperty("UID"))
                    if (!$util.isString(message.UID))
                        return "UID: string expected";
                if (message.Data != null && message.hasOwnProperty("Data"))
                    if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                        return "Data: buffer expected";
                if (message.Info != null && message.hasOwnProperty("Info")) {
                    var error = $root.proto.ClientInfo.verify(message.Info);
                    if (error)
                        return "Info." + error;
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
                if (object.UID != null)
                    message.UID = String(object.UID);
                if (object.Data != null)
                    if (typeof object.Data === "string")
                        $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                    else if (object.Data.length)
                        message.Data = object.Data;
                if (object.Info != null) {
                    if (typeof object.Info !== "object")
                        throw TypeError(".proto.Publication.Info: object expected");
                    message.Info = $root.proto.ClientInfo.fromObject(object.Info);
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
                    object.UID = "";
                    object.Data = options.bytes === String ? "" : [];
                    object.Info = null;
                }
                if (message.UID != null && message.hasOwnProperty("UID"))
                    object.UID = message.UID;
                if (message.Data != null && message.hasOwnProperty("Data"))
                    object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
                if (message.Info != null && message.hasOwnProperty("Info"))
                    object.Info = $root.proto.ClientInfo.toObject(message.Info, options);
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
             * @property {proto.IClientInfo} [Info] Join Info
             */
    
            /**
             * Constructs a new Join.
             * @memberof proto
             * @classdesc Represents a Join.
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
             * Join Info.
             * @member {(proto.IClientInfo|null|undefined)}Info
             * @memberof proto.Join
             * @instance
             */
            Join.prototype.Info = null;
    
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
                if (message.Info != null && message.hasOwnProperty("Info"))
                    $root.proto.ClientInfo.encode(message.Info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        message.Info = $root.proto.ClientInfo.decode(reader, reader.uint32());
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
                if (message.Info != null && message.hasOwnProperty("Info")) {
                    var error = $root.proto.ClientInfo.verify(message.Info);
                    if (error)
                        return "Info." + error;
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
                if (object.Info != null) {
                    if (typeof object.Info !== "object")
                        throw TypeError(".proto.Join.Info: object expected");
                    message.Info = $root.proto.ClientInfo.fromObject(object.Info);
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
                    object.Info = null;
                if (message.Info != null && message.hasOwnProperty("Info"))
                    object.Info = $root.proto.ClientInfo.toObject(message.Info, options);
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
             * @property {proto.IClientInfo} [Info] Leave Info
             */
    
            /**
             * Constructs a new Leave.
             * @memberof proto
             * @classdesc Represents a Leave.
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
             * Leave Info.
             * @member {(proto.IClientInfo|null|undefined)}Info
             * @memberof proto.Leave
             * @instance
             */
            Leave.prototype.Info = null;
    
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
                if (message.Info != null && message.hasOwnProperty("Info"))
                    $root.proto.ClientInfo.encode(message.Info, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        message.Info = $root.proto.ClientInfo.decode(reader, reader.uint32());
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
                if (message.Info != null && message.hasOwnProperty("Info")) {
                    var error = $root.proto.ClientInfo.verify(message.Info);
                    if (error)
                        return "Info." + error;
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
                if (object.Info != null) {
                    if (typeof object.Info !== "object")
                        throw TypeError(".proto.Leave.Info: object expected");
                    message.Info = $root.proto.ClientInfo.fromObject(object.Info);
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
                    object.Info = null;
                if (message.Info != null && message.hasOwnProperty("Info"))
                    object.Info = $root.proto.ClientInfo.toObject(message.Info, options);
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
             * @property {string} [User] ConnectRequest User
             * @property {string} [Exp] ConnectRequest Exp
             * @property {string} [Info] ConnectRequest Info
             * @property {string} [Opts] ConnectRequest Opts
             * @property {string} [Sign] ConnectRequest Sign
             */
    
            /**
             * Constructs a new ConnectRequest.
             * @memberof proto
             * @classdesc Represents a ConnectRequest.
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
             * ConnectRequest User.
             * @member {string}User
             * @memberof proto.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.User = "";
    
            /**
             * ConnectRequest Exp.
             * @member {string}Exp
             * @memberof proto.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.Exp = "";
    
            /**
             * ConnectRequest Info.
             * @member {string}Info
             * @memberof proto.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.Info = "";
    
            /**
             * ConnectRequest Opts.
             * @member {string}Opts
             * @memberof proto.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.Opts = "";
    
            /**
             * ConnectRequest Sign.
             * @member {string}Sign
             * @memberof proto.ConnectRequest
             * @instance
             */
            ConnectRequest.prototype.Sign = "";
    
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
                if (message.User != null && message.hasOwnProperty("User"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.User);
                if (message.Exp != null && message.hasOwnProperty("Exp"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Exp);
                if (message.Info != null && message.hasOwnProperty("Info"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.Info);
                if (message.Opts != null && message.hasOwnProperty("Opts"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.Opts);
                if (message.Sign != null && message.hasOwnProperty("Sign"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.Sign);
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
                        message.User = reader.string();
                        break;
                    case 2:
                        message.Exp = reader.string();
                        break;
                    case 3:
                        message.Info = reader.string();
                        break;
                    case 4:
                        message.Opts = reader.string();
                        break;
                    case 5:
                        message.Sign = reader.string();
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
                if (message.User != null && message.hasOwnProperty("User"))
                    if (!$util.isString(message.User))
                        return "User: string expected";
                if (message.Exp != null && message.hasOwnProperty("Exp"))
                    if (!$util.isString(message.Exp))
                        return "Exp: string expected";
                if (message.Info != null && message.hasOwnProperty("Info"))
                    if (!$util.isString(message.Info))
                        return "Info: string expected";
                if (message.Opts != null && message.hasOwnProperty("Opts"))
                    if (!$util.isString(message.Opts))
                        return "Opts: string expected";
                if (message.Sign != null && message.hasOwnProperty("Sign"))
                    if (!$util.isString(message.Sign))
                        return "Sign: string expected";
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
                if (object.User != null)
                    message.User = String(object.User);
                if (object.Exp != null)
                    message.Exp = String(object.Exp);
                if (object.Info != null)
                    message.Info = String(object.Info);
                if (object.Opts != null)
                    message.Opts = String(object.Opts);
                if (object.Sign != null)
                    message.Sign = String(object.Sign);
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
                    object.User = "";
                    object.Exp = "";
                    object.Info = "";
                    object.Opts = "";
                    object.Sign = "";
                }
                if (message.User != null && message.hasOwnProperty("User"))
                    object.User = message.User;
                if (message.Exp != null && message.hasOwnProperty("Exp"))
                    object.Exp = message.Exp;
                if (message.Info != null && message.hasOwnProperty("Info"))
                    object.Info = message.Info;
                if (message.Opts != null && message.hasOwnProperty("Opts"))
                    object.Opts = message.Opts;
                if (message.Sign != null && message.hasOwnProperty("Sign"))
                    object.Sign = message.Sign;
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
             * @property {proto.IError} [Error] ConnectResponse Error
             * @property {proto.IConnectResult} [Result] ConnectResponse Result
             */
    
            /**
             * Constructs a new ConnectResponse.
             * @memberof proto
             * @classdesc Represents a ConnectResponse.
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
             * ConnectResponse Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.ConnectResponse
             * @instance
             */
            ConnectResponse.prototype.Error = null;
    
            /**
             * ConnectResponse Result.
             * @member {(proto.IConnectResult|null|undefined)}Result
             * @memberof proto.ConnectResponse
             * @instance
             */
            ConnectResponse.prototype.Result = null;
    
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
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    $root.proto.ConnectResult.encode(message.Result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Result = $root.proto.ConnectResult.decode(reader, reader.uint32());
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
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result")) {
                    error = $root.proto.ConnectResult.verify(message.Result);
                    if (error)
                        return "Result." + error;
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
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.ConnectResponse.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null) {
                    if (typeof object.Result !== "object")
                        throw TypeError(".proto.ConnectResponse.Result: object expected");
                    message.Result = $root.proto.ConnectResult.fromObject(object.Result);
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
                    object.Error = null;
                    object.Result = null;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = $root.proto.ConnectResult.toObject(message.Result, options);
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
             * @property {string} [Client] ConnectResult Client
             * @property {string} [Version] ConnectResult Version
             * @property {boolean} [Expires] ConnectResult Expires
             * @property {boolean} [Expired] ConnectResult Expired
             * @property {number} [TTL] ConnectResult TTL
             */
    
            /**
             * Constructs a new ConnectResult.
             * @memberof proto
             * @classdesc Represents a ConnectResult.
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
             * ConnectResult Client.
             * @member {string}Client
             * @memberof proto.ConnectResult
             * @instance
             */
            ConnectResult.prototype.Client = "";
    
            /**
             * ConnectResult Version.
             * @member {string}Version
             * @memberof proto.ConnectResult
             * @instance
             */
            ConnectResult.prototype.Version = "";
    
            /**
             * ConnectResult Expires.
             * @member {boolean}Expires
             * @memberof proto.ConnectResult
             * @instance
             */
            ConnectResult.prototype.Expires = false;
    
            /**
             * ConnectResult Expired.
             * @member {boolean}Expired
             * @memberof proto.ConnectResult
             * @instance
             */
            ConnectResult.prototype.Expired = false;
    
            /**
             * ConnectResult TTL.
             * @member {number}TTL
             * @memberof proto.ConnectResult
             * @instance
             */
            ConnectResult.prototype.TTL = 0;
    
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
                if (message.Client != null && message.hasOwnProperty("Client"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Client);
                if (message.Version != null && message.hasOwnProperty("Version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Version);
                if (message.Expires != null && message.hasOwnProperty("Expires"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.Expires);
                if (message.Expired != null && message.hasOwnProperty("Expired"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Expired);
                if (message.TTL != null && message.hasOwnProperty("TTL"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.TTL);
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
                        message.Client = reader.string();
                        break;
                    case 2:
                        message.Version = reader.string();
                        break;
                    case 3:
                        message.Expires = reader.bool();
                        break;
                    case 4:
                        message.Expired = reader.bool();
                        break;
                    case 5:
                        message.TTL = reader.uint32();
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
                if (message.Client != null && message.hasOwnProperty("Client"))
                    if (!$util.isString(message.Client))
                        return "Client: string expected";
                if (message.Version != null && message.hasOwnProperty("Version"))
                    if (!$util.isString(message.Version))
                        return "Version: string expected";
                if (message.Expires != null && message.hasOwnProperty("Expires"))
                    if (typeof message.Expires !== "boolean")
                        return "Expires: boolean expected";
                if (message.Expired != null && message.hasOwnProperty("Expired"))
                    if (typeof message.Expired !== "boolean")
                        return "Expired: boolean expected";
                if (message.TTL != null && message.hasOwnProperty("TTL"))
                    if (!$util.isInteger(message.TTL))
                        return "TTL: integer expected";
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
                if (object.Client != null)
                    message.Client = String(object.Client);
                if (object.Version != null)
                    message.Version = String(object.Version);
                if (object.Expires != null)
                    message.Expires = Boolean(object.Expires);
                if (object.Expired != null)
                    message.Expired = Boolean(object.Expired);
                if (object.TTL != null)
                    message.TTL = object.TTL >>> 0;
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
                    object.Client = "";
                    object.Version = "";
                    object.Expires = false;
                    object.Expired = false;
                    object.TTL = 0;
                }
                if (message.Client != null && message.hasOwnProperty("Client"))
                    object.Client = message.Client;
                if (message.Version != null && message.hasOwnProperty("Version"))
                    object.Version = message.Version;
                if (message.Expires != null && message.hasOwnProperty("Expires"))
                    object.Expires = message.Expires;
                if (message.Expired != null && message.hasOwnProperty("Expired"))
                    object.Expired = message.Expired;
                if (message.TTL != null && message.hasOwnProperty("TTL"))
                    object.TTL = message.TTL;
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
             * @property {string} [User] RefreshRequest User
             * @property {string} [Exp] RefreshRequest Exp
             * @property {string} [Info] RefreshRequest Info
             * @property {string} [Opts] RefreshRequest Opts
             * @property {string} [Sign] RefreshRequest Sign
             */
    
            /**
             * Constructs a new RefreshRequest.
             * @memberof proto
             * @classdesc Represents a RefreshRequest.
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
             * RefreshRequest User.
             * @member {string}User
             * @memberof proto.RefreshRequest
             * @instance
             */
            RefreshRequest.prototype.User = "";
    
            /**
             * RefreshRequest Exp.
             * @member {string}Exp
             * @memberof proto.RefreshRequest
             * @instance
             */
            RefreshRequest.prototype.Exp = "";
    
            /**
             * RefreshRequest Info.
             * @member {string}Info
             * @memberof proto.RefreshRequest
             * @instance
             */
            RefreshRequest.prototype.Info = "";
    
            /**
             * RefreshRequest Opts.
             * @member {string}Opts
             * @memberof proto.RefreshRequest
             * @instance
             */
            RefreshRequest.prototype.Opts = "";
    
            /**
             * RefreshRequest Sign.
             * @member {string}Sign
             * @memberof proto.RefreshRequest
             * @instance
             */
            RefreshRequest.prototype.Sign = "";
    
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
                if (message.User != null && message.hasOwnProperty("User"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.User);
                if (message.Exp != null && message.hasOwnProperty("Exp"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Exp);
                if (message.Info != null && message.hasOwnProperty("Info"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.Info);
                if (message.Opts != null && message.hasOwnProperty("Opts"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.Opts);
                if (message.Sign != null && message.hasOwnProperty("Sign"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.Sign);
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
                        message.User = reader.string();
                        break;
                    case 2:
                        message.Exp = reader.string();
                        break;
                    case 3:
                        message.Info = reader.string();
                        break;
                    case 4:
                        message.Opts = reader.string();
                        break;
                    case 5:
                        message.Sign = reader.string();
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
                if (message.User != null && message.hasOwnProperty("User"))
                    if (!$util.isString(message.User))
                        return "User: string expected";
                if (message.Exp != null && message.hasOwnProperty("Exp"))
                    if (!$util.isString(message.Exp))
                        return "Exp: string expected";
                if (message.Info != null && message.hasOwnProperty("Info"))
                    if (!$util.isString(message.Info))
                        return "Info: string expected";
                if (message.Opts != null && message.hasOwnProperty("Opts"))
                    if (!$util.isString(message.Opts))
                        return "Opts: string expected";
                if (message.Sign != null && message.hasOwnProperty("Sign"))
                    if (!$util.isString(message.Sign))
                        return "Sign: string expected";
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
                if (object.User != null)
                    message.User = String(object.User);
                if (object.Exp != null)
                    message.Exp = String(object.Exp);
                if (object.Info != null)
                    message.Info = String(object.Info);
                if (object.Opts != null)
                    message.Opts = String(object.Opts);
                if (object.Sign != null)
                    message.Sign = String(object.Sign);
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
                    object.User = "";
                    object.Exp = "";
                    object.Info = "";
                    object.Opts = "";
                    object.Sign = "";
                }
                if (message.User != null && message.hasOwnProperty("User"))
                    object.User = message.User;
                if (message.Exp != null && message.hasOwnProperty("Exp"))
                    object.Exp = message.Exp;
                if (message.Info != null && message.hasOwnProperty("Info"))
                    object.Info = message.Info;
                if (message.Opts != null && message.hasOwnProperty("Opts"))
                    object.Opts = message.Opts;
                if (message.Sign != null && message.hasOwnProperty("Sign"))
                    object.Sign = message.Sign;
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
             * @property {proto.IError} [Error] RefreshResponse Error
             * @property {proto.IRefreshResult} [Result] RefreshResponse Result
             */
    
            /**
             * Constructs a new RefreshResponse.
             * @memberof proto
             * @classdesc Represents a RefreshResponse.
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
             * RefreshResponse Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.RefreshResponse
             * @instance
             */
            RefreshResponse.prototype.Error = null;
    
            /**
             * RefreshResponse Result.
             * @member {(proto.IRefreshResult|null|undefined)}Result
             * @memberof proto.RefreshResponse
             * @instance
             */
            RefreshResponse.prototype.Result = null;
    
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
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    $root.proto.RefreshResult.encode(message.Result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Result = $root.proto.RefreshResult.decode(reader, reader.uint32());
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
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result")) {
                    error = $root.proto.RefreshResult.verify(message.Result);
                    if (error)
                        return "Result." + error;
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
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.RefreshResponse.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null) {
                    if (typeof object.Result !== "object")
                        throw TypeError(".proto.RefreshResponse.Result: object expected");
                    message.Result = $root.proto.RefreshResult.fromObject(object.Result);
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
                    object.Error = null;
                    object.Result = null;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = $root.proto.RefreshResult.toObject(message.Result, options);
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
             * @property {string} [Client] RefreshResult Client
             * @property {string} [Version] RefreshResult Version
             * @property {boolean} [Expires] RefreshResult Expires
             * @property {boolean} [Expired] RefreshResult Expired
             * @property {number} [TTL] RefreshResult TTL
             */
    
            /**
             * Constructs a new RefreshResult.
             * @memberof proto
             * @classdesc Represents a RefreshResult.
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
             * RefreshResult Client.
             * @member {string}Client
             * @memberof proto.RefreshResult
             * @instance
             */
            RefreshResult.prototype.Client = "";
    
            /**
             * RefreshResult Version.
             * @member {string}Version
             * @memberof proto.RefreshResult
             * @instance
             */
            RefreshResult.prototype.Version = "";
    
            /**
             * RefreshResult Expires.
             * @member {boolean}Expires
             * @memberof proto.RefreshResult
             * @instance
             */
            RefreshResult.prototype.Expires = false;
    
            /**
             * RefreshResult Expired.
             * @member {boolean}Expired
             * @memberof proto.RefreshResult
             * @instance
             */
            RefreshResult.prototype.Expired = false;
    
            /**
             * RefreshResult TTL.
             * @member {number}TTL
             * @memberof proto.RefreshResult
             * @instance
             */
            RefreshResult.prototype.TTL = 0;
    
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
                if (message.Client != null && message.hasOwnProperty("Client"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Client);
                if (message.Version != null && message.hasOwnProperty("Version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Version);
                if (message.Expires != null && message.hasOwnProperty("Expires"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.Expires);
                if (message.Expired != null && message.hasOwnProperty("Expired"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.Expired);
                if (message.TTL != null && message.hasOwnProperty("TTL"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.TTL);
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
                        message.Client = reader.string();
                        break;
                    case 2:
                        message.Version = reader.string();
                        break;
                    case 3:
                        message.Expires = reader.bool();
                        break;
                    case 4:
                        message.Expired = reader.bool();
                        break;
                    case 5:
                        message.TTL = reader.uint32();
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
                if (message.Client != null && message.hasOwnProperty("Client"))
                    if (!$util.isString(message.Client))
                        return "Client: string expected";
                if (message.Version != null && message.hasOwnProperty("Version"))
                    if (!$util.isString(message.Version))
                        return "Version: string expected";
                if (message.Expires != null && message.hasOwnProperty("Expires"))
                    if (typeof message.Expires !== "boolean")
                        return "Expires: boolean expected";
                if (message.Expired != null && message.hasOwnProperty("Expired"))
                    if (typeof message.Expired !== "boolean")
                        return "Expired: boolean expected";
                if (message.TTL != null && message.hasOwnProperty("TTL"))
                    if (!$util.isInteger(message.TTL))
                        return "TTL: integer expected";
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
                if (object.Client != null)
                    message.Client = String(object.Client);
                if (object.Version != null)
                    message.Version = String(object.Version);
                if (object.Expires != null)
                    message.Expires = Boolean(object.Expires);
                if (object.Expired != null)
                    message.Expired = Boolean(object.Expired);
                if (object.TTL != null)
                    message.TTL = object.TTL >>> 0;
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
                    object.Client = "";
                    object.Version = "";
                    object.Expires = false;
                    object.Expired = false;
                    object.TTL = 0;
                }
                if (message.Client != null && message.hasOwnProperty("Client"))
                    object.Client = message.Client;
                if (message.Version != null && message.hasOwnProperty("Version"))
                    object.Version = message.Version;
                if (message.Expires != null && message.hasOwnProperty("Expires"))
                    object.Expires = message.Expires;
                if (message.Expired != null && message.hasOwnProperty("Expired"))
                    object.Expired = message.Expired;
                if (message.TTL != null && message.hasOwnProperty("TTL"))
                    object.TTL = message.TTL;
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
             * @property {string} [Channel] SubscribeRequest Channel
             * @property {string} [Client] SubscribeRequest Client
             * @property {string} [Info] SubscribeRequest Info
             * @property {string} [Sign] SubscribeRequest Sign
             * @property {boolean} [Recover] SubscribeRequest Recover
             * @property {string} [Last] SubscribeRequest Last
             */
    
            /**
             * Constructs a new SubscribeRequest.
             * @memberof proto
             * @classdesc Represents a SubscribeRequest.
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
             * SubscribeRequest Channel.
             * @member {string}Channel
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.Channel = "";
    
            /**
             * SubscribeRequest Client.
             * @member {string}Client
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.Client = "";
    
            /**
             * SubscribeRequest Info.
             * @member {string}Info
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.Info = "";
    
            /**
             * SubscribeRequest Sign.
             * @member {string}Sign
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.Sign = "";
    
            /**
             * SubscribeRequest Recover.
             * @member {boolean}Recover
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.Recover = false;
    
            /**
             * SubscribeRequest Last.
             * @member {string}Last
             * @memberof proto.SubscribeRequest
             * @instance
             */
            SubscribeRequest.prototype.Last = "";
    
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Channel);
                if (message.Client != null && message.hasOwnProperty("Client"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.Client);
                if (message.Info != null && message.hasOwnProperty("Info"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.Info);
                if (message.Sign != null && message.hasOwnProperty("Sign"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.Sign);
                if (message.Recover != null && message.hasOwnProperty("Recover"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.Recover);
                if (message.Last != null && message.hasOwnProperty("Last"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.Last);
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
                        message.Channel = reader.string();
                        break;
                    case 2:
                        message.Client = reader.string();
                        break;
                    case 3:
                        message.Info = reader.string();
                        break;
                    case 4:
                        message.Sign = reader.string();
                        break;
                    case 5:
                        message.Recover = reader.bool();
                        break;
                    case 6:
                        message.Last = reader.string();
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    if (!$util.isString(message.Channel))
                        return "Channel: string expected";
                if (message.Client != null && message.hasOwnProperty("Client"))
                    if (!$util.isString(message.Client))
                        return "Client: string expected";
                if (message.Info != null && message.hasOwnProperty("Info"))
                    if (!$util.isString(message.Info))
                        return "Info: string expected";
                if (message.Sign != null && message.hasOwnProperty("Sign"))
                    if (!$util.isString(message.Sign))
                        return "Sign: string expected";
                if (message.Recover != null && message.hasOwnProperty("Recover"))
                    if (typeof message.Recover !== "boolean")
                        return "Recover: boolean expected";
                if (message.Last != null && message.hasOwnProperty("Last"))
                    if (!$util.isString(message.Last))
                        return "Last: string expected";
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
                if (object.Channel != null)
                    message.Channel = String(object.Channel);
                if (object.Client != null)
                    message.Client = String(object.Client);
                if (object.Info != null)
                    message.Info = String(object.Info);
                if (object.Sign != null)
                    message.Sign = String(object.Sign);
                if (object.Recover != null)
                    message.Recover = Boolean(object.Recover);
                if (object.Last != null)
                    message.Last = String(object.Last);
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
                    object.Channel = "";
                    object.Client = "";
                    object.Info = "";
                    object.Sign = "";
                    object.Recover = false;
                    object.Last = "";
                }
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    object.Channel = message.Channel;
                if (message.Client != null && message.hasOwnProperty("Client"))
                    object.Client = message.Client;
                if (message.Info != null && message.hasOwnProperty("Info"))
                    object.Info = message.Info;
                if (message.Sign != null && message.hasOwnProperty("Sign"))
                    object.Sign = message.Sign;
                if (message.Recover != null && message.hasOwnProperty("Recover"))
                    object.Recover = message.Recover;
                if (message.Last != null && message.hasOwnProperty("Last"))
                    object.Last = message.Last;
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
             * @property {proto.IError} [Error] SubscribeResponse Error
             * @property {proto.ISubscribeResult} [Result] SubscribeResponse Result
             */
    
            /**
             * Constructs a new SubscribeResponse.
             * @memberof proto
             * @classdesc Represents a SubscribeResponse.
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
             * SubscribeResponse Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.SubscribeResponse
             * @instance
             */
            SubscribeResponse.prototype.Error = null;
    
            /**
             * SubscribeResponse Result.
             * @member {(proto.ISubscribeResult|null|undefined)}Result
             * @memberof proto.SubscribeResponse
             * @instance
             */
            SubscribeResponse.prototype.Result = null;
    
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
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    $root.proto.SubscribeResult.encode(message.Result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Result = $root.proto.SubscribeResult.decode(reader, reader.uint32());
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
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result")) {
                    error = $root.proto.SubscribeResult.verify(message.Result);
                    if (error)
                        return "Result." + error;
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
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.SubscribeResponse.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null) {
                    if (typeof object.Result !== "object")
                        throw TypeError(".proto.SubscribeResponse.Result: object expected");
                    message.Result = $root.proto.SubscribeResult.fromObject(object.Result);
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
                    object.Error = null;
                    object.Result = null;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = $root.proto.SubscribeResult.toObject(message.Result, options);
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
             * @property {string} [Last] SubscribeResult Last
             * @property {boolean} [Recovered] SubscribeResult Recovered
             * @property {Array.<proto.IPublication>} [Publications] SubscribeResult Publications
             */
    
            /**
             * Constructs a new SubscribeResult.
             * @memberof proto
             * @classdesc Represents a SubscribeResult.
             * @constructor
             * @param {proto.ISubscribeResult=} [properties] Properties to set
             */
            function SubscribeResult(properties) {
                this.Publications = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SubscribeResult Last.
             * @member {string}Last
             * @memberof proto.SubscribeResult
             * @instance
             */
            SubscribeResult.prototype.Last = "";
    
            /**
             * SubscribeResult Recovered.
             * @member {boolean}Recovered
             * @memberof proto.SubscribeResult
             * @instance
             */
            SubscribeResult.prototype.Recovered = false;
    
            /**
             * SubscribeResult Publications.
             * @member {Array.<proto.IPublication>}Publications
             * @memberof proto.SubscribeResult
             * @instance
             */
            SubscribeResult.prototype.Publications = $util.emptyArray;
    
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
                if (message.Last != null && message.hasOwnProperty("Last"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Last);
                if (message.Recovered != null && message.hasOwnProperty("Recovered"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.Recovered);
                if (message.Publications != null && message.Publications.length)
                    for (var i = 0; i < message.Publications.length; ++i)
                        $root.proto.Publication.encode(message.Publications[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                        message.Last = reader.string();
                        break;
                    case 2:
                        message.Recovered = reader.bool();
                        break;
                    case 3:
                        if (!(message.Publications && message.Publications.length))
                            message.Publications = [];
                        message.Publications.push($root.proto.Publication.decode(reader, reader.uint32()));
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
                if (message.Last != null && message.hasOwnProperty("Last"))
                    if (!$util.isString(message.Last))
                        return "Last: string expected";
                if (message.Recovered != null && message.hasOwnProperty("Recovered"))
                    if (typeof message.Recovered !== "boolean")
                        return "Recovered: boolean expected";
                if (message.Publications != null && message.hasOwnProperty("Publications")) {
                    if (!Array.isArray(message.Publications))
                        return "Publications: array expected";
                    for (var i = 0; i < message.Publications.length; ++i) {
                        var error = $root.proto.Publication.verify(message.Publications[i]);
                        if (error)
                            return "Publications." + error;
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
                if (object.Last != null)
                    message.Last = String(object.Last);
                if (object.Recovered != null)
                    message.Recovered = Boolean(object.Recovered);
                if (object.Publications) {
                    if (!Array.isArray(object.Publications))
                        throw TypeError(".proto.SubscribeResult.Publications: array expected");
                    message.Publications = [];
                    for (var i = 0; i < object.Publications.length; ++i) {
                        if (typeof object.Publications[i] !== "object")
                            throw TypeError(".proto.SubscribeResult.Publications: object expected");
                        message.Publications[i] = $root.proto.Publication.fromObject(object.Publications[i]);
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
                    object.Publications = [];
                if (options.defaults) {
                    object.Last = "";
                    object.Recovered = false;
                }
                if (message.Last != null && message.hasOwnProperty("Last"))
                    object.Last = message.Last;
                if (message.Recovered != null && message.hasOwnProperty("Recovered"))
                    object.Recovered = message.Recovered;
                if (message.Publications && message.Publications.length) {
                    object.Publications = [];
                    for (var j = 0; j < message.Publications.length; ++j)
                        object.Publications[j] = $root.proto.Publication.toObject(message.Publications[j], options);
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
             * @property {string} [Channel] UnsubscribeRequest Channel
             */
    
            /**
             * Constructs a new UnsubscribeRequest.
             * @memberof proto
             * @classdesc Represents an UnsubscribeRequest.
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
             * UnsubscribeRequest Channel.
             * @member {string}Channel
             * @memberof proto.UnsubscribeRequest
             * @instance
             */
            UnsubscribeRequest.prototype.Channel = "";
    
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Channel);
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
                        message.Channel = reader.string();
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    if (!$util.isString(message.Channel))
                        return "Channel: string expected";
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
                if (object.Channel != null)
                    message.Channel = String(object.Channel);
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
                    object.Channel = "";
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    object.Channel = message.Channel;
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
             * @property {proto.IError} [Error] UnsubscribeResponse Error
             * @property {proto.IUnsubscribeResult} [Result] UnsubscribeResponse Result
             */
    
            /**
             * Constructs a new UnsubscribeResponse.
             * @memberof proto
             * @classdesc Represents an UnsubscribeResponse.
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
             * UnsubscribeResponse Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.UnsubscribeResponse
             * @instance
             */
            UnsubscribeResponse.prototype.Error = null;
    
            /**
             * UnsubscribeResponse Result.
             * @member {(proto.IUnsubscribeResult|null|undefined)}Result
             * @memberof proto.UnsubscribeResponse
             * @instance
             */
            UnsubscribeResponse.prototype.Result = null;
    
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
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    $root.proto.UnsubscribeResult.encode(message.Result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Result = $root.proto.UnsubscribeResult.decode(reader, reader.uint32());
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
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result")) {
                    error = $root.proto.UnsubscribeResult.verify(message.Result);
                    if (error)
                        return "Result." + error;
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
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.UnsubscribeResponse.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null) {
                    if (typeof object.Result !== "object")
                        throw TypeError(".proto.UnsubscribeResponse.Result: object expected");
                    message.Result = $root.proto.UnsubscribeResult.fromObject(object.Result);
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
                    object.Error = null;
                    object.Result = null;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = $root.proto.UnsubscribeResult.toObject(message.Result, options);
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
             * @property {string} [Channel] PublishRequest Channel
             * @property {Uint8Array} [Data] PublishRequest Data
             */
    
            /**
             * Constructs a new PublishRequest.
             * @memberof proto
             * @classdesc Represents a PublishRequest.
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
             * PublishRequest Channel.
             * @member {string}Channel
             * @memberof proto.PublishRequest
             * @instance
             */
            PublishRequest.prototype.Channel = "";
    
            /**
             * PublishRequest Data.
             * @member {Uint8Array}Data
             * @memberof proto.PublishRequest
             * @instance
             */
            PublishRequest.prototype.Data = $util.newBuffer([]);
    
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Channel);
                if (message.Data != null && message.hasOwnProperty("Data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Data);
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
                        message.Channel = reader.string();
                        break;
                    case 2:
                        message.Data = reader.bytes();
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    if (!$util.isString(message.Channel))
                        return "Channel: string expected";
                if (message.Data != null && message.hasOwnProperty("Data"))
                    if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                        return "Data: buffer expected";
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
                if (object.Channel != null)
                    message.Channel = String(object.Channel);
                if (object.Data != null)
                    if (typeof object.Data === "string")
                        $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                    else if (object.Data.length)
                        message.Data = object.Data;
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
                    object.Channel = "";
                    object.Data = options.bytes === String ? "" : [];
                }
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    object.Channel = message.Channel;
                if (message.Data != null && message.hasOwnProperty("Data"))
                    object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
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
             * @property {proto.IError} [Error] PublishResponse Error
             * @property {proto.IPublishResult} [Result] PublishResponse Result
             */
    
            /**
             * Constructs a new PublishResponse.
             * @memberof proto
             * @classdesc Represents a PublishResponse.
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
             * PublishResponse Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.PublishResponse
             * @instance
             */
            PublishResponse.prototype.Error = null;
    
            /**
             * PublishResponse Result.
             * @member {(proto.IPublishResult|null|undefined)}Result
             * @memberof proto.PublishResponse
             * @instance
             */
            PublishResponse.prototype.Result = null;
    
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
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    $root.proto.PublishResult.encode(message.Result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Result = $root.proto.PublishResult.decode(reader, reader.uint32());
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
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result")) {
                    error = $root.proto.PublishResult.verify(message.Result);
                    if (error)
                        return "Result." + error;
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
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.PublishResponse.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null) {
                    if (typeof object.Result !== "object")
                        throw TypeError(".proto.PublishResponse.Result: object expected");
                    message.Result = $root.proto.PublishResult.fromObject(object.Result);
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
                    object.Error = null;
                    object.Result = null;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = $root.proto.PublishResult.toObject(message.Result, options);
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
             * @property {string} [Channel] PresenceRequest Channel
             */
    
            /**
             * Constructs a new PresenceRequest.
             * @memberof proto
             * @classdesc Represents a PresenceRequest.
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
             * PresenceRequest Channel.
             * @member {string}Channel
             * @memberof proto.PresenceRequest
             * @instance
             */
            PresenceRequest.prototype.Channel = "";
    
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Channel);
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
                        message.Channel = reader.string();
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    if (!$util.isString(message.Channel))
                        return "Channel: string expected";
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
                if (object.Channel != null)
                    message.Channel = String(object.Channel);
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
                    object.Channel = "";
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    object.Channel = message.Channel;
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
             * @property {proto.IError} [Error] PresenceResponse Error
             * @property {proto.IPresenceResult} [Result] PresenceResponse Result
             */
    
            /**
             * Constructs a new PresenceResponse.
             * @memberof proto
             * @classdesc Represents a PresenceResponse.
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
             * PresenceResponse Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.PresenceResponse
             * @instance
             */
            PresenceResponse.prototype.Error = null;
    
            /**
             * PresenceResponse Result.
             * @member {(proto.IPresenceResult|null|undefined)}Result
             * @memberof proto.PresenceResponse
             * @instance
             */
            PresenceResponse.prototype.Result = null;
    
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
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    $root.proto.PresenceResult.encode(message.Result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Result = $root.proto.PresenceResult.decode(reader, reader.uint32());
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
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result")) {
                    error = $root.proto.PresenceResult.verify(message.Result);
                    if (error)
                        return "Result." + error;
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
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.PresenceResponse.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null) {
                    if (typeof object.Result !== "object")
                        throw TypeError(".proto.PresenceResponse.Result: object expected");
                    message.Result = $root.proto.PresenceResult.fromObject(object.Result);
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
                    object.Error = null;
                    object.Result = null;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = $root.proto.PresenceResult.toObject(message.Result, options);
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
             * @property {Object.<string,proto.IClientInfo>} [Presence] PresenceResult Presence
             */
    
            /**
             * Constructs a new PresenceResult.
             * @memberof proto
             * @classdesc Represents a PresenceResult.
             * @constructor
             * @param {proto.IPresenceResult=} [properties] Properties to set
             */
            function PresenceResult(properties) {
                this.Presence = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PresenceResult Presence.
             * @member {Object.<string,proto.IClientInfo>}Presence
             * @memberof proto.PresenceResult
             * @instance
             */
            PresenceResult.prototype.Presence = $util.emptyObject;
    
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
                if (message.Presence != null && message.hasOwnProperty("Presence"))
                    for (var keys = Object.keys(message.Presence), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.proto.ClientInfo.encode(message.Presence[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
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
                        if (message.Presence === $util.emptyObject)
                            message.Presence = {};
                        key = reader.string();
                        reader.pos++;
                        message.Presence[key] = $root.proto.ClientInfo.decode(reader, reader.uint32());
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
                if (message.Presence != null && message.hasOwnProperty("Presence")) {
                    if (!$util.isObject(message.Presence))
                        return "Presence: object expected";
                    var key = Object.keys(message.Presence);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.proto.ClientInfo.verify(message.Presence[key[i]]);
                        if (error)
                            return "Presence." + error;
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
                if (object.Presence) {
                    if (typeof object.Presence !== "object")
                        throw TypeError(".proto.PresenceResult.Presence: object expected");
                    message.Presence = {};
                    for (var keys = Object.keys(object.Presence), i = 0; i < keys.length; ++i) {
                        if (typeof object.Presence[keys[i]] !== "object")
                            throw TypeError(".proto.PresenceResult.Presence: object expected");
                        message.Presence[keys[i]] = $root.proto.ClientInfo.fromObject(object.Presence[keys[i]]);
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
                    object.Presence = {};
                var keys2;
                if (message.Presence && (keys2 = Object.keys(message.Presence)).length) {
                    object.Presence = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.Presence[keys2[j]] = $root.proto.ClientInfo.toObject(message.Presence[keys2[j]], options);
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
             * @property {string} [Channel] PresenceStatsRequest Channel
             */
    
            /**
             * Constructs a new PresenceStatsRequest.
             * @memberof proto
             * @classdesc Represents a PresenceStatsRequest.
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
             * PresenceStatsRequest Channel.
             * @member {string}Channel
             * @memberof proto.PresenceStatsRequest
             * @instance
             */
            PresenceStatsRequest.prototype.Channel = "";
    
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Channel);
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
                        message.Channel = reader.string();
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    if (!$util.isString(message.Channel))
                        return "Channel: string expected";
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
                if (object.Channel != null)
                    message.Channel = String(object.Channel);
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
                    object.Channel = "";
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    object.Channel = message.Channel;
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
             * @property {proto.IError} [Error] PresenceStatsResponse Error
             * @property {proto.IPresenceStatsResult} [Result] PresenceStatsResponse Result
             */
    
            /**
             * Constructs a new PresenceStatsResponse.
             * @memberof proto
             * @classdesc Represents a PresenceStatsResponse.
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
             * PresenceStatsResponse Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.PresenceStatsResponse
             * @instance
             */
            PresenceStatsResponse.prototype.Error = null;
    
            /**
             * PresenceStatsResponse Result.
             * @member {(proto.IPresenceStatsResult|null|undefined)}Result
             * @memberof proto.PresenceStatsResponse
             * @instance
             */
            PresenceStatsResponse.prototype.Result = null;
    
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
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    $root.proto.PresenceStatsResult.encode(message.Result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Result = $root.proto.PresenceStatsResult.decode(reader, reader.uint32());
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
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result")) {
                    error = $root.proto.PresenceStatsResult.verify(message.Result);
                    if (error)
                        return "Result." + error;
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
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.PresenceStatsResponse.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null) {
                    if (typeof object.Result !== "object")
                        throw TypeError(".proto.PresenceStatsResponse.Result: object expected");
                    message.Result = $root.proto.PresenceStatsResult.fromObject(object.Result);
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
                    object.Error = null;
                    object.Result = null;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = $root.proto.PresenceStatsResult.toObject(message.Result, options);
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
             * @property {number|Long} [NumClients] PresenceStatsResult NumClients
             * @property {number|Long} [NumUsers] PresenceStatsResult NumUsers
             */
    
            /**
             * Constructs a new PresenceStatsResult.
             * @memberof proto
             * @classdesc Represents a PresenceStatsResult.
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
             * PresenceStatsResult NumClients.
             * @member {number|Long}NumClients
             * @memberof proto.PresenceStatsResult
             * @instance
             */
            PresenceStatsResult.prototype.NumClients = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PresenceStatsResult NumUsers.
             * @member {number|Long}NumUsers
             * @memberof proto.PresenceStatsResult
             * @instance
             */
            PresenceStatsResult.prototype.NumUsers = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
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
                if (message.NumClients != null && message.hasOwnProperty("NumClients"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.NumClients);
                if (message.NumUsers != null && message.hasOwnProperty("NumUsers"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.NumUsers);
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
                        message.NumClients = reader.uint64();
                        break;
                    case 2:
                        message.NumUsers = reader.uint64();
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
                if (message.NumClients != null && message.hasOwnProperty("NumClients"))
                    if (!$util.isInteger(message.NumClients) && !(message.NumClients && $util.isInteger(message.NumClients.low) && $util.isInteger(message.NumClients.high)))
                        return "NumClients: integer|Long expected";
                if (message.NumUsers != null && message.hasOwnProperty("NumUsers"))
                    if (!$util.isInteger(message.NumUsers) && !(message.NumUsers && $util.isInteger(message.NumUsers.low) && $util.isInteger(message.NumUsers.high)))
                        return "NumUsers: integer|Long expected";
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
                if (object.NumClients != null)
                    if ($util.Long)
                        (message.NumClients = $util.Long.fromValue(object.NumClients)).unsigned = true;
                    else if (typeof object.NumClients === "string")
                        message.NumClients = parseInt(object.NumClients, 10);
                    else if (typeof object.NumClients === "number")
                        message.NumClients = object.NumClients;
                    else if (typeof object.NumClients === "object")
                        message.NumClients = new $util.LongBits(object.NumClients.low >>> 0, object.NumClients.high >>> 0).toNumber(true);
                if (object.NumUsers != null)
                    if ($util.Long)
                        (message.NumUsers = $util.Long.fromValue(object.NumUsers)).unsigned = true;
                    else if (typeof object.NumUsers === "string")
                        message.NumUsers = parseInt(object.NumUsers, 10);
                    else if (typeof object.NumUsers === "number")
                        message.NumUsers = object.NumUsers;
                    else if (typeof object.NumUsers === "object")
                        message.NumUsers = new $util.LongBits(object.NumUsers.low >>> 0, object.NumUsers.high >>> 0).toNumber(true);
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
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.NumClients = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.NumClients = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, true);
                        object.NumUsers = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.NumUsers = options.longs === String ? "0" : 0;
                }
                if (message.NumClients != null && message.hasOwnProperty("NumClients"))
                    if (typeof message.NumClients === "number")
                        object.NumClients = options.longs === String ? String(message.NumClients) : message.NumClients;
                    else
                        object.NumClients = options.longs === String ? $util.Long.prototype.toString.call(message.NumClients) : options.longs === Number ? new $util.LongBits(message.NumClients.low >>> 0, message.NumClients.high >>> 0).toNumber(true) : message.NumClients;
                if (message.NumUsers != null && message.hasOwnProperty("NumUsers"))
                    if (typeof message.NumUsers === "number")
                        object.NumUsers = options.longs === String ? String(message.NumUsers) : message.NumUsers;
                    else
                        object.NumUsers = options.longs === String ? $util.Long.prototype.toString.call(message.NumUsers) : options.longs === Number ? new $util.LongBits(message.NumUsers.low >>> 0, message.NumUsers.high >>> 0).toNumber(true) : message.NumUsers;
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
             * @property {string} [Channel] HistoryRequest Channel
             */
    
            /**
             * Constructs a new HistoryRequest.
             * @memberof proto
             * @classdesc Represents a HistoryRequest.
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
             * HistoryRequest Channel.
             * @member {string}Channel
             * @memberof proto.HistoryRequest
             * @instance
             */
            HistoryRequest.prototype.Channel = "";
    
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Channel);
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
                        message.Channel = reader.string();
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
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    if (!$util.isString(message.Channel))
                        return "Channel: string expected";
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
                if (object.Channel != null)
                    message.Channel = String(object.Channel);
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
                    object.Channel = "";
                if (message.Channel != null && message.hasOwnProperty("Channel"))
                    object.Channel = message.Channel;
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
             * @property {proto.IError} [Error] HistoryResponse Error
             * @property {proto.IHistoryResult} [Result] HistoryResponse Result
             */
    
            /**
             * Constructs a new HistoryResponse.
             * @memberof proto
             * @classdesc Represents a HistoryResponse.
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
             * HistoryResponse Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.HistoryResponse
             * @instance
             */
            HistoryResponse.prototype.Error = null;
    
            /**
             * HistoryResponse Result.
             * @member {(proto.IHistoryResult|null|undefined)}Result
             * @memberof proto.HistoryResponse
             * @instance
             */
            HistoryResponse.prototype.Result = null;
    
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
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    $root.proto.HistoryResult.encode(message.Result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Result = $root.proto.HistoryResult.decode(reader, reader.uint32());
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
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result")) {
                    error = $root.proto.HistoryResult.verify(message.Result);
                    if (error)
                        return "Result." + error;
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
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.HistoryResponse.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null) {
                    if (typeof object.Result !== "object")
                        throw TypeError(".proto.HistoryResponse.Result: object expected");
                    message.Result = $root.proto.HistoryResult.fromObject(object.Result);
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
                    object.Error = null;
                    object.Result = null;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = $root.proto.HistoryResult.toObject(message.Result, options);
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
             * @property {Array.<proto.IPublication>} [Publications] HistoryResult Publications
             */
    
            /**
             * Constructs a new HistoryResult.
             * @memberof proto
             * @classdesc Represents a HistoryResult.
             * @constructor
             * @param {proto.IHistoryResult=} [properties] Properties to set
             */
            function HistoryResult(properties) {
                this.Publications = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * HistoryResult Publications.
             * @member {Array.<proto.IPublication>}Publications
             * @memberof proto.HistoryResult
             * @instance
             */
            HistoryResult.prototype.Publications = $util.emptyArray;
    
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
                if (message.Publications != null && message.Publications.length)
                    for (var i = 0; i < message.Publications.length; ++i)
                        $root.proto.Publication.encode(message.Publications[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
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
                        if (!(message.Publications && message.Publications.length))
                            message.Publications = [];
                        message.Publications.push($root.proto.Publication.decode(reader, reader.uint32()));
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
                if (message.Publications != null && message.hasOwnProperty("Publications")) {
                    if (!Array.isArray(message.Publications))
                        return "Publications: array expected";
                    for (var i = 0; i < message.Publications.length; ++i) {
                        var error = $root.proto.Publication.verify(message.Publications[i]);
                        if (error)
                            return "Publications." + error;
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
                if (object.Publications) {
                    if (!Array.isArray(object.Publications))
                        throw TypeError(".proto.HistoryResult.Publications: array expected");
                    message.Publications = [];
                    for (var i = 0; i < object.Publications.length; ++i) {
                        if (typeof object.Publications[i] !== "object")
                            throw TypeError(".proto.HistoryResult.Publications: object expected");
                        message.Publications[i] = $root.proto.Publication.fromObject(object.Publications[i]);
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
                    object.Publications = [];
                if (message.Publications && message.Publications.length) {
                    object.Publications = [];
                    for (var j = 0; j < message.Publications.length; ++j)
                        object.Publications[j] = $root.proto.Publication.toObject(message.Publications[j], options);
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
             * @property {string} [Data] PingRequest Data
             */
    
            /**
             * Constructs a new PingRequest.
             * @memberof proto
             * @classdesc Represents a PingRequest.
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
             * PingRequest Data.
             * @member {string}Data
             * @memberof proto.PingRequest
             * @instance
             */
            PingRequest.prototype.Data = "";
    
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
                if (message.Data != null && message.hasOwnProperty("Data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Data);
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
                        message.Data = reader.string();
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
                if (message.Data != null && message.hasOwnProperty("Data"))
                    if (!$util.isString(message.Data))
                        return "Data: string expected";
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
                if (object.Data != null)
                    message.Data = String(object.Data);
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
                    object.Data = "";
                if (message.Data != null && message.hasOwnProperty("Data"))
                    object.Data = message.Data;
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
             * @property {proto.IError} [Error] PingResponse Error
             * @property {proto.IPingResult} [Result] PingResponse Result
             */
    
            /**
             * Constructs a new PingResponse.
             * @memberof proto
             * @classdesc Represents a PingResponse.
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
             * PingResponse Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.PingResponse
             * @instance
             */
            PingResponse.prototype.Error = null;
    
            /**
             * PingResponse Result.
             * @member {(proto.IPingResult|null|undefined)}Result
             * @memberof proto.PingResponse
             * @instance
             */
            PingResponse.prototype.Result = null;
    
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
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    $root.proto.PingResult.encode(message.Result, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Result = $root.proto.PingResult.decode(reader, reader.uint32());
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
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result")) {
                    error = $root.proto.PingResult.verify(message.Result);
                    if (error)
                        return "Result." + error;
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
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.PingResponse.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null) {
                    if (typeof object.Result !== "object")
                        throw TypeError(".proto.PingResponse.Result: object expected");
                    message.Result = $root.proto.PingResult.fromObject(object.Result);
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
                    object.Error = null;
                    object.Result = null;
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = $root.proto.PingResult.toObject(message.Result, options);
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
             * @property {string} [Data] PingResult Data
             */
    
            /**
             * Constructs a new PingResult.
             * @memberof proto
             * @classdesc Represents a PingResult.
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
             * PingResult Data.
             * @member {string}Data
             * @memberof proto.PingResult
             * @instance
             */
            PingResult.prototype.Data = "";
    
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
                if (message.Data != null && message.hasOwnProperty("Data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Data);
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
                        message.Data = reader.string();
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
                if (message.Data != null && message.hasOwnProperty("Data"))
                    if (!$util.isString(message.Data))
                        return "Data: string expected";
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
                if (object.Data != null)
                    message.Data = String(object.Data);
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
                    object.Data = "";
                if (message.Data != null && message.hasOwnProperty("Data"))
                    object.Data = message.Data;
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
    
        proto.ConsumeRequest = (function() {
    
            /**
             * Properties of a ConsumeRequest.
             * @memberof proto
             * @interface IConsumeRequest
             */
    
            /**
             * Constructs a new ConsumeRequest.
             * @memberof proto
             * @classdesc Represents a ConsumeRequest.
             * @constructor
             * @param {proto.IConsumeRequest=} [properties] Properties to set
             */
            function ConsumeRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Creates a new ConsumeRequest instance using the specified properties.
             * @function create
             * @memberof proto.ConsumeRequest
             * @static
             * @param {proto.IConsumeRequest=} [properties] Properties to set
             * @returns {proto.ConsumeRequest} ConsumeRequest instance
             */
            ConsumeRequest.create = function create(properties) {
                return new ConsumeRequest(properties);
            };
    
            /**
             * Encodes the specified ConsumeRequest message. Does not implicitly {@link proto.ConsumeRequest.verify|verify} messages.
             * @function encode
             * @memberof proto.ConsumeRequest
             * @static
             * @param {proto.IConsumeRequest} message ConsumeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConsumeRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };
    
            /**
             * Encodes the specified ConsumeRequest message, length delimited. Does not implicitly {@link proto.ConsumeRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof proto.ConsumeRequest
             * @static
             * @param {proto.IConsumeRequest} message ConsumeRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConsumeRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };
    
            /**
             * Decodes a ConsumeRequest message from the specified reader or buffer.
             * @function decode
             * @memberof proto.ConsumeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {proto.ConsumeRequest} ConsumeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConsumeRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.proto.ConsumeRequest();
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
             * Decodes a ConsumeRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof proto.ConsumeRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {proto.ConsumeRequest} ConsumeRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConsumeRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };
    
            /**
             * Verifies a ConsumeRequest message.
             * @function verify
             * @memberof proto.ConsumeRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConsumeRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };
    
            /**
             * Creates a ConsumeRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof proto.ConsumeRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {proto.ConsumeRequest} ConsumeRequest
             */
            ConsumeRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.proto.ConsumeRequest)
                    return object;
                return new $root.proto.ConsumeRequest();
            };
    
            /**
             * Creates a plain object from a ConsumeRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof proto.ConsumeRequest
             * @static
             * @param {proto.ConsumeRequest} message ConsumeRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConsumeRequest.toObject = function toObject() {
                return {};
            };
    
            /**
             * Converts this ConsumeRequest to JSON.
             * @function toJSON
             * @memberof proto.ConsumeRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConsumeRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };
    
            return ConsumeRequest;
        })();
    
        proto.RPCRequest = (function() {
    
            /**
             * Properties of a RPCRequest.
             * @memberof proto
             * @interface IRPCRequest
             * @property {Uint8Array} [Data] RPCRequest Data
             */
    
            /**
             * Constructs a new RPCRequest.
             * @memberof proto
             * @classdesc Represents a RPCRequest.
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
             * RPCRequest Data.
             * @member {Uint8Array}Data
             * @memberof proto.RPCRequest
             * @instance
             */
            RPCRequest.prototype.Data = $util.newBuffer([]);
    
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
                if (message.Data != null && message.hasOwnProperty("Data"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Data);
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
                        message.Data = reader.bytes();
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
                if (message.Data != null && message.hasOwnProperty("Data"))
                    if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                        return "Data: buffer expected";
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
                if (object.Data != null)
                    if (typeof object.Data === "string")
                        $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                    else if (object.Data.length)
                        message.Data = object.Data;
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
                    object.Data = options.bytes === String ? "" : [];
                if (message.Data != null && message.hasOwnProperty("Data"))
                    object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
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
             * @property {proto.IError} [Error] RPCResponse Error
             * @property {Uint8Array} [Result] RPCResponse Result
             */
    
            /**
             * Constructs a new RPCResponse.
             * @memberof proto
             * @classdesc Represents a RPCResponse.
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
             * RPCResponse Error.
             * @member {(proto.IError|null|undefined)}Error
             * @memberof proto.RPCResponse
             * @instance
             */
            RPCResponse.prototype.Error = null;
    
            /**
             * RPCResponse Result.
             * @member {Uint8Array}Result
             * @memberof proto.RPCResponse
             * @instance
             */
            RPCResponse.prototype.Result = $util.newBuffer([]);
    
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
                if (message.Error != null && message.hasOwnProperty("Error"))
                    $root.proto.Error.encode(message.Error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.Result != null && message.hasOwnProperty("Result"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Result);
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
                        message.Error = $root.proto.Error.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.Result = reader.bytes();
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
                if (message.Error != null && message.hasOwnProperty("Error")) {
                    var error = $root.proto.Error.verify(message.Error);
                    if (error)
                        return "Error." + error;
                }
                if (message.Result != null && message.hasOwnProperty("Result"))
                    if (!(message.Result && typeof message.Result.length === "number" || $util.isString(message.Result)))
                        return "Result: buffer expected";
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
                if (object.Error != null) {
                    if (typeof object.Error !== "object")
                        throw TypeError(".proto.RPCResponse.Error: object expected");
                    message.Error = $root.proto.Error.fromObject(object.Error);
                }
                if (object.Result != null)
                    if (typeof object.Result === "string")
                        $util.base64.decode(object.Result, message.Result = $util.newBuffer($util.base64.length(object.Result)), 0);
                    else if (object.Result.length)
                        message.Result = object.Result;
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
                    object.Error = null;
                    object.Result = options.bytes === String ? "" : [];
                }
                if (message.Error != null && message.hasOwnProperty("Error"))
                    object.Error = $root.proto.Error.toObject(message.Error, options);
                if (message.Result != null && message.hasOwnProperty("Result"))
                    object.Result = options.bytes === String ? $util.base64.encode(message.Result, 0, message.Result.length) : options.bytes === Array ? Array.prototype.slice.call(message.Result) : message.Result;
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
    
        proto.Centrifugo = (function() {
    
            /**
             * Constructs a new Centrifugo service.
             * @memberof proto
             * @classdesc Represents a Centrifugo
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function Centrifugo(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }
    
            (Centrifugo.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Centrifugo;
    
            /**
             * Creates new Centrifugo service using the specified rpc implementation.
             * @function create
             * @memberof proto.Centrifugo
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {Centrifugo} RPC service. Useful where requests and/or responses are streamed.
             */
            Centrifugo.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };
    
            /**
             * Callback as used by {@link proto.Centrifugo#communicate}.
             * @memberof proto.Centrifugo
             * @typedef CommunicateCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {proto.Reply} [response] Reply
             */
    
            /**
             * Calls Communicate.
             * @function .communicate
             * @memberof proto.Centrifugo
             * @instance
             * @param {proto.ICommand} request Command message or plain object
             * @param {proto.Centrifugo.CommunicateCallback} callback Node-style callback called with the error, if any, and Reply
             * @returns {undefined}
             * @variation 1
             */
            Centrifugo.prototype.communicate = function communicate(request, callback) {
                return this.rpcCall(communicate, $root.proto.Command, $root.proto.Reply, request, callback);
            };
    
            /**
             * Calls Communicate.
             * @function communicate
             * @memberof proto.Centrifugo
             * @instance
             * @param {proto.ICommand} request Command message or plain object
             * @returns {Promise<proto.Reply>} Promise
             * @variation 2
             */
    
            return Centrifugo;
        })();
    
        return proto;
    })();

    return $root;
});
