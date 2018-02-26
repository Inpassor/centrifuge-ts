import * as $protobuf from "protobufjs";

/** Namespace proto. */
export namespace proto {

    /** Properties of an Error. */
    interface IError {

        /** Error code */
        code?: (number|null);

        /** Error message */
        message?: (string|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IError);

        /** Error code. */
        public code: number;

        /** Error message. */
        public message: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: proto.IError): proto.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link proto.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link proto.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): proto.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** MethodType enum. */
    enum MethodType {
        CONNECT = 0,
        REFRESH = 1,
        SUBSCRIBE = 2,
        UNSUBSCRIBE = 3,
        PUBLISH = 4,
        PRESENCE = 5,
        PRESENCE_STATS = 6,
        HISTORY = 7,
        PING = 8,
        RPC = 9,
        MESSAGE = 10
    }

    /** Properties of a Command. */
    interface ICommand {

        /** Command id */
        id?: (number|null);

        /** Command method */
        method?: (proto.MethodType|null);

        /** Command params */
        params?: (Uint8Array|null);
    }

    /** Represents a Command. */
    class Command implements ICommand {

        /**
         * Constructs a new Command.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ICommand);

        /** Command id. */
        public id: number;

        /** Command method. */
        public method: proto.MethodType;

        /** Command params. */
        public params: Uint8Array;

        /**
         * Creates a new Command instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Command instance
         */
        public static create(properties?: proto.ICommand): proto.Command;

        /**
         * Encodes the specified Command message. Does not implicitly {@link proto.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Command message, length delimited. Does not implicitly {@link proto.Command.verify|verify} messages.
         * @param message Command message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Command;

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Command;

        /**
         * Verifies a Command message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Command
         */
        public static fromObject(object: { [k: string]: any }): proto.Command;

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param message Command
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Command to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Reply. */
    interface IReply {

        /** Reply id */
        id?: (number|null);

        /** Reply error */
        error?: (proto.IError|null);

        /** Reply result */
        result?: (Uint8Array|null);
    }

    /** Represents a Reply. */
    class Reply implements IReply {

        /**
         * Constructs a new Reply.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IReply);

        /** Reply id. */
        public id: number;

        /** Reply error. */
        public error?: (proto.IError|null);

        /** Reply result. */
        public result: Uint8Array;

        /**
         * Creates a new Reply instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reply instance
         */
        public static create(properties?: proto.IReply): proto.Reply;

        /**
         * Encodes the specified Reply message. Does not implicitly {@link proto.Reply.verify|verify} messages.
         * @param message Reply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Reply message, length delimited. Does not implicitly {@link proto.Reply.verify|verify} messages.
         * @param message Reply message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IReply, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Reply message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Reply;

        /**
         * Decodes a Reply message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Reply;

        /**
         * Verifies a Reply message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Reply message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Reply
         */
        public static fromObject(object: { [k: string]: any }): proto.Reply;

        /**
         * Creates a plain object from a Reply message. Also converts values to other types if specified.
         * @param message Reply
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Reply, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Reply to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** MessageType enum. */
    enum MessageType {
        PUBLICATION = 0,
        JOIN = 1,
        LEAVE = 2,
        UNSUB = 3
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message type */
        type?: (proto.MessageType|null);

        /** Message channel */
        channel?: (string|null);

        /** Message data */
        data?: (Uint8Array|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IMessage);

        /** Message type. */
        public type: proto.MessageType;

        /** Message channel. */
        public channel: string;

        /** Message data. */
        public data: Uint8Array;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: proto.IMessage): proto.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link proto.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link proto.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): proto.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClientInfo. */
    interface IClientInfo {

        /** ClientInfo user */
        user?: (string|null);

        /** ClientInfo client */
        client?: (string|null);

        /** ClientInfo connInfo */
        connInfo?: (Uint8Array|null);

        /** ClientInfo chanInfo */
        chanInfo?: (Uint8Array|null);
    }

    /** Represents a ClientInfo. */
    class ClientInfo implements IClientInfo {

        /**
         * Constructs a new ClientInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IClientInfo);

        /** ClientInfo user. */
        public user: string;

        /** ClientInfo client. */
        public client: string;

        /** ClientInfo connInfo. */
        public connInfo: Uint8Array;

        /** ClientInfo chanInfo. */
        public chanInfo: Uint8Array;

        /**
         * Creates a new ClientInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientInfo instance
         */
        public static create(properties?: proto.IClientInfo): proto.ClientInfo;

        /**
         * Encodes the specified ClientInfo message. Does not implicitly {@link proto.ClientInfo.verify|verify} messages.
         * @param message ClientInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientInfo message, length delimited. Does not implicitly {@link proto.ClientInfo.verify|verify} messages.
         * @param message ClientInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ClientInfo;

        /**
         * Decodes a ClientInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ClientInfo;

        /**
         * Verifies a ClientInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.ClientInfo;

        /**
         * Creates a plain object from a ClientInfo message. Also converts values to other types if specified.
         * @param message ClientInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ClientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Publication. */
    interface IPublication {

        /** Publication uid */
        uid?: (string|null);

        /** Publication data */
        data?: (Uint8Array|null);

        /** Publication info */
        info?: (proto.IClientInfo|null);
    }

    /** Represents a Publication. */
    class Publication implements IPublication {

        /**
         * Constructs a new Publication.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPublication);

        /** Publication uid. */
        public uid: string;

        /** Publication data. */
        public data: Uint8Array;

        /** Publication info. */
        public info?: (proto.IClientInfo|null);

        /**
         * Creates a new Publication instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Publication instance
         */
        public static create(properties?: proto.IPublication): proto.Publication;

        /**
         * Encodes the specified Publication message. Does not implicitly {@link proto.Publication.verify|verify} messages.
         * @param message Publication message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPublication, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Publication message, length delimited. Does not implicitly {@link proto.Publication.verify|verify} messages.
         * @param message Publication message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPublication, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Publication message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Publication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Publication;

        /**
         * Decodes a Publication message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Publication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Publication;

        /**
         * Verifies a Publication message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Publication message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Publication
         */
        public static fromObject(object: { [k: string]: any }): proto.Publication;

        /**
         * Creates a plain object from a Publication message. Also converts values to other types if specified.
         * @param message Publication
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Publication, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Publication to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Join. */
    interface IJoin {

        /** Join info */
        info?: (proto.IClientInfo|null);
    }

    /** Represents a Join. */
    class Join implements IJoin {

        /**
         * Constructs a new Join.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IJoin);

        /** Join info. */
        public info?: (proto.IClientInfo|null);

        /**
         * Creates a new Join instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Join instance
         */
        public static create(properties?: proto.IJoin): proto.Join;

        /**
         * Encodes the specified Join message. Does not implicitly {@link proto.Join.verify|verify} messages.
         * @param message Join message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IJoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Join message, length delimited. Does not implicitly {@link proto.Join.verify|verify} messages.
         * @param message Join message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IJoin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Join message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Join;

        /**
         * Decodes a Join message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Join
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Join;

        /**
         * Verifies a Join message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Join message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Join
         */
        public static fromObject(object: { [k: string]: any }): proto.Join;

        /**
         * Creates a plain object from a Join message. Also converts values to other types if specified.
         * @param message Join
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Join, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Join to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Leave. */
    interface ILeave {

        /** Leave info */
        info?: (proto.IClientInfo|null);
    }

    /** Represents a Leave. */
    class Leave implements ILeave {

        /**
         * Constructs a new Leave.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ILeave);

        /** Leave info. */
        public info?: (proto.IClientInfo|null);

        /**
         * Creates a new Leave instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Leave instance
         */
        public static create(properties?: proto.ILeave): proto.Leave;

        /**
         * Encodes the specified Leave message. Does not implicitly {@link proto.Leave.verify|verify} messages.
         * @param message Leave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ILeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Leave message, length delimited. Does not implicitly {@link proto.Leave.verify|verify} messages.
         * @param message Leave message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ILeave, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Leave message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Leave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Leave;

        /**
         * Decodes a Leave message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Leave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Leave;

        /**
         * Verifies a Leave message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Leave message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Leave
         */
        public static fromObject(object: { [k: string]: any }): proto.Leave;

        /**
         * Creates a plain object from a Leave message. Also converts values to other types if specified.
         * @param message Leave
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Leave, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Leave to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Unsub. */
    interface IUnsub {
    }

    /** Represents an Unsub. */
    class Unsub implements IUnsub {

        /**
         * Constructs a new Unsub.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUnsub);

        /**
         * Creates a new Unsub instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Unsub instance
         */
        public static create(properties?: proto.IUnsub): proto.Unsub;

        /**
         * Encodes the specified Unsub message. Does not implicitly {@link proto.Unsub.verify|verify} messages.
         * @param message Unsub message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUnsub, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Unsub message, length delimited. Does not implicitly {@link proto.Unsub.verify|verify} messages.
         * @param message Unsub message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUnsub, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Unsub message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Unsub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Unsub;

        /**
         * Decodes an Unsub message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Unsub
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Unsub;

        /**
         * Verifies an Unsub message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Unsub message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Unsub
         */
        public static fromObject(object: { [k: string]: any }): proto.Unsub;

        /**
         * Creates a plain object from an Unsub message. Also converts values to other types if specified.
         * @param message Unsub
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Unsub, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Unsub to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConnectRequest. */
    interface IConnectRequest {

        /** ConnectRequest user */
        user?: (string|null);

        /** ConnectRequest exp */
        exp?: (string|null);

        /** ConnectRequest info */
        info?: (string|null);

        /** ConnectRequest opts */
        opts?: (string|null);

        /** ConnectRequest sign */
        sign?: (string|null);
    }

    /** Represents a ConnectRequest. */
    class ConnectRequest implements IConnectRequest {

        /**
         * Constructs a new ConnectRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IConnectRequest);

        /** ConnectRequest user. */
        public user: string;

        /** ConnectRequest exp. */
        public exp: string;

        /** ConnectRequest info. */
        public info: string;

        /** ConnectRequest opts. */
        public opts: string;

        /** ConnectRequest sign. */
        public sign: string;

        /**
         * Creates a new ConnectRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectRequest instance
         */
        public static create(properties?: proto.IConnectRequest): proto.ConnectRequest;

        /**
         * Encodes the specified ConnectRequest message. Does not implicitly {@link proto.ConnectRequest.verify|verify} messages.
         * @param message ConnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectRequest message, length delimited. Does not implicitly {@link proto.ConnectRequest.verify|verify} messages.
         * @param message ConnectRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IConnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ConnectRequest;

        /**
         * Decodes a ConnectRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ConnectRequest;

        /**
         * Verifies a ConnectRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.ConnectRequest;

        /**
         * Creates a plain object from a ConnectRequest message. Also converts values to other types if specified.
         * @param message ConnectRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ConnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConnectResponse. */
    interface IConnectResponse {

        /** ConnectResponse error */
        error?: (proto.IError|null);

        /** ConnectResponse result */
        result?: (proto.IConnectResult|null);
    }

    /** Represents a ConnectResponse. */
    class ConnectResponse implements IConnectResponse {

        /**
         * Constructs a new ConnectResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IConnectResponse);

        /** ConnectResponse error. */
        public error?: (proto.IError|null);

        /** ConnectResponse result. */
        public result?: (proto.IConnectResult|null);

        /**
         * Creates a new ConnectResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectResponse instance
         */
        public static create(properties?: proto.IConnectResponse): proto.ConnectResponse;

        /**
         * Encodes the specified ConnectResponse message. Does not implicitly {@link proto.ConnectResponse.verify|verify} messages.
         * @param message ConnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectResponse message, length delimited. Does not implicitly {@link proto.ConnectResponse.verify|verify} messages.
         * @param message ConnectResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IConnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ConnectResponse;

        /**
         * Decodes a ConnectResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ConnectResponse;

        /**
         * Verifies a ConnectResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.ConnectResponse;

        /**
         * Creates a plain object from a ConnectResponse message. Also converts values to other types if specified.
         * @param message ConnectResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ConnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConnectResult. */
    interface IConnectResult {

        /** ConnectResult client */
        client?: (string|null);

        /** ConnectResult version */
        version?: (string|null);

        /** ConnectResult expires */
        expires?: (boolean|null);

        /** ConnectResult expired */
        expired?: (boolean|null);

        /** ConnectResult ttl */
        ttl?: (number|null);
    }

    /** Represents a ConnectResult. */
    class ConnectResult implements IConnectResult {

        /**
         * Constructs a new ConnectResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IConnectResult);

        /** ConnectResult client. */
        public client: string;

        /** ConnectResult version. */
        public version: string;

        /** ConnectResult expires. */
        public expires: boolean;

        /** ConnectResult expired. */
        public expired: boolean;

        /** ConnectResult ttl. */
        public ttl: number;

        /**
         * Creates a new ConnectResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectResult instance
         */
        public static create(properties?: proto.IConnectResult): proto.ConnectResult;

        /**
         * Encodes the specified ConnectResult message. Does not implicitly {@link proto.ConnectResult.verify|verify} messages.
         * @param message ConnectResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IConnectResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectResult message, length delimited. Does not implicitly {@link proto.ConnectResult.verify|verify} messages.
         * @param message ConnectResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IConnectResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.ConnectResult;

        /**
         * Decodes a ConnectResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.ConnectResult;

        /**
         * Verifies a ConnectResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectResult
         */
        public static fromObject(object: { [k: string]: any }): proto.ConnectResult;

        /**
         * Creates a plain object from a ConnectResult message. Also converts values to other types if specified.
         * @param message ConnectResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.ConnectResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RefreshRequest. */
    interface IRefreshRequest {

        /** RefreshRequest user */
        user?: (string|null);

        /** RefreshRequest exp */
        exp?: (string|null);

        /** RefreshRequest info */
        info?: (string|null);

        /** RefreshRequest opts */
        opts?: (string|null);

        /** RefreshRequest sign */
        sign?: (string|null);
    }

    /** Represents a RefreshRequest. */
    class RefreshRequest implements IRefreshRequest {

        /**
         * Constructs a new RefreshRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRefreshRequest);

        /** RefreshRequest user. */
        public user: string;

        /** RefreshRequest exp. */
        public exp: string;

        /** RefreshRequest info. */
        public info: string;

        /** RefreshRequest opts. */
        public opts: string;

        /** RefreshRequest sign. */
        public sign: string;

        /**
         * Creates a new RefreshRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshRequest instance
         */
        public static create(properties?: proto.IRefreshRequest): proto.RefreshRequest;

        /**
         * Encodes the specified RefreshRequest message. Does not implicitly {@link proto.RefreshRequest.verify|verify} messages.
         * @param message RefreshRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRefreshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RefreshRequest message, length delimited. Does not implicitly {@link proto.RefreshRequest.verify|verify} messages.
         * @param message RefreshRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRefreshRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RefreshRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RefreshRequest;

        /**
         * Decodes a RefreshRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RefreshRequest;

        /**
         * Verifies a RefreshRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.RefreshRequest;

        /**
         * Creates a plain object from a RefreshRequest message. Also converts values to other types if specified.
         * @param message RefreshRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RefreshRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RefreshResponse. */
    interface IRefreshResponse {

        /** RefreshResponse error */
        error?: (proto.IError|null);

        /** RefreshResponse result */
        result?: (proto.IRefreshResult|null);
    }

    /** Represents a RefreshResponse. */
    class RefreshResponse implements IRefreshResponse {

        /**
         * Constructs a new RefreshResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRefreshResponse);

        /** RefreshResponse error. */
        public error?: (proto.IError|null);

        /** RefreshResponse result. */
        public result?: (proto.IRefreshResult|null);

        /**
         * Creates a new RefreshResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshResponse instance
         */
        public static create(properties?: proto.IRefreshResponse): proto.RefreshResponse;

        /**
         * Encodes the specified RefreshResponse message. Does not implicitly {@link proto.RefreshResponse.verify|verify} messages.
         * @param message RefreshResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRefreshResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RefreshResponse message, length delimited. Does not implicitly {@link proto.RefreshResponse.verify|verify} messages.
         * @param message RefreshResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRefreshResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RefreshResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RefreshResponse;

        /**
         * Decodes a RefreshResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RefreshResponse;

        /**
         * Verifies a RefreshResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.RefreshResponse;

        /**
         * Creates a plain object from a RefreshResponse message. Also converts values to other types if specified.
         * @param message RefreshResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RefreshResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RefreshResult. */
    interface IRefreshResult {

        /** RefreshResult client */
        client?: (string|null);

        /** RefreshResult version */
        version?: (string|null);

        /** RefreshResult expires */
        expires?: (boolean|null);

        /** RefreshResult expired */
        expired?: (boolean|null);

        /** RefreshResult ttl */
        ttl?: (number|null);
    }

    /** Represents a RefreshResult. */
    class RefreshResult implements IRefreshResult {

        /**
         * Constructs a new RefreshResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRefreshResult);

        /** RefreshResult client. */
        public client: string;

        /** RefreshResult version. */
        public version: string;

        /** RefreshResult expires. */
        public expires: boolean;

        /** RefreshResult expired. */
        public expired: boolean;

        /** RefreshResult ttl. */
        public ttl: number;

        /**
         * Creates a new RefreshResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshResult instance
         */
        public static create(properties?: proto.IRefreshResult): proto.RefreshResult;

        /**
         * Encodes the specified RefreshResult message. Does not implicitly {@link proto.RefreshResult.verify|verify} messages.
         * @param message RefreshResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRefreshResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RefreshResult message, length delimited. Does not implicitly {@link proto.RefreshResult.verify|verify} messages.
         * @param message RefreshResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRefreshResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RefreshResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RefreshResult;

        /**
         * Decodes a RefreshResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RefreshResult;

        /**
         * Verifies a RefreshResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshResult
         */
        public static fromObject(object: { [k: string]: any }): proto.RefreshResult;

        /**
         * Creates a plain object from a RefreshResult message. Also converts values to other types if specified.
         * @param message RefreshResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RefreshResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SubscribeRequest. */
    interface ISubscribeRequest {

        /** SubscribeRequest channel */
        channel?: (string|null);

        /** SubscribeRequest client */
        client?: (string|null);

        /** SubscribeRequest info */
        info?: (string|null);

        /** SubscribeRequest sign */
        sign?: (string|null);

        /** SubscribeRequest recover */
        recover?: (boolean|null);

        /** SubscribeRequest last */
        last?: (string|null);
    }

    /** Represents a SubscribeRequest. */
    class SubscribeRequest implements ISubscribeRequest {

        /**
         * Constructs a new SubscribeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISubscribeRequest);

        /** SubscribeRequest channel. */
        public channel: string;

        /** SubscribeRequest client. */
        public client: string;

        /** SubscribeRequest info. */
        public info: string;

        /** SubscribeRequest sign. */
        public sign: string;

        /** SubscribeRequest recover. */
        public recover: boolean;

        /** SubscribeRequest last. */
        public last: string;

        /**
         * Creates a new SubscribeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeRequest instance
         */
        public static create(properties?: proto.ISubscribeRequest): proto.SubscribeRequest;

        /**
         * Encodes the specified SubscribeRequest message. Does not implicitly {@link proto.SubscribeRequest.verify|verify} messages.
         * @param message SubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeRequest message, length delimited. Does not implicitly {@link proto.SubscribeRequest.verify|verify} messages.
         * @param message SubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SubscribeRequest;

        /**
         * Decodes a SubscribeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SubscribeRequest;

        /**
         * Verifies a SubscribeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.SubscribeRequest;

        /**
         * Creates a plain object from a SubscribeRequest message. Also converts values to other types if specified.
         * @param message SubscribeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SubscribeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SubscribeResponse. */
    interface ISubscribeResponse {

        /** SubscribeResponse error */
        error?: (proto.IError|null);

        /** SubscribeResponse result */
        result?: (proto.ISubscribeResult|null);
    }

    /** Represents a SubscribeResponse. */
    class SubscribeResponse implements ISubscribeResponse {

        /**
         * Constructs a new SubscribeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISubscribeResponse);

        /** SubscribeResponse error. */
        public error?: (proto.IError|null);

        /** SubscribeResponse result. */
        public result?: (proto.ISubscribeResult|null);

        /**
         * Creates a new SubscribeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeResponse instance
         */
        public static create(properties?: proto.ISubscribeResponse): proto.SubscribeResponse;

        /**
         * Encodes the specified SubscribeResponse message. Does not implicitly {@link proto.SubscribeResponse.verify|verify} messages.
         * @param message SubscribeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeResponse message, length delimited. Does not implicitly {@link proto.SubscribeResponse.verify|verify} messages.
         * @param message SubscribeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SubscribeResponse;

        /**
         * Decodes a SubscribeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SubscribeResponse;

        /**
         * Verifies a SubscribeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.SubscribeResponse;

        /**
         * Creates a plain object from a SubscribeResponse message. Also converts values to other types if specified.
         * @param message SubscribeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SubscribeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SubscribeResult. */
    interface ISubscribeResult {

        /** SubscribeResult last */
        last?: (string|null);

        /** SubscribeResult recovered */
        recovered?: (boolean|null);

        /** SubscribeResult publications */
        publications?: (proto.IPublication[]|null);
    }

    /** Represents a SubscribeResult. */
    class SubscribeResult implements ISubscribeResult {

        /**
         * Constructs a new SubscribeResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.ISubscribeResult);

        /** SubscribeResult last. */
        public last: string;

        /** SubscribeResult recovered. */
        public recovered: boolean;

        /** SubscribeResult publications. */
        public publications: proto.IPublication[];

        /**
         * Creates a new SubscribeResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeResult instance
         */
        public static create(properties?: proto.ISubscribeResult): proto.SubscribeResult;

        /**
         * Encodes the specified SubscribeResult message. Does not implicitly {@link proto.SubscribeResult.verify|verify} messages.
         * @param message SubscribeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.ISubscribeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeResult message, length delimited. Does not implicitly {@link proto.SubscribeResult.verify|verify} messages.
         * @param message SubscribeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.ISubscribeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.SubscribeResult;

        /**
         * Decodes a SubscribeResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.SubscribeResult;

        /**
         * Verifies a SubscribeResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeResult
         */
        public static fromObject(object: { [k: string]: any }): proto.SubscribeResult;

        /**
         * Creates a plain object from a SubscribeResult message. Also converts values to other types if specified.
         * @param message SubscribeResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.SubscribeResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnsubscribeRequest. */
    interface IUnsubscribeRequest {

        /** UnsubscribeRequest channel */
        channel?: (string|null);
    }

    /** Represents an UnsubscribeRequest. */
    class UnsubscribeRequest implements IUnsubscribeRequest {

        /**
         * Constructs a new UnsubscribeRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUnsubscribeRequest);

        /** UnsubscribeRequest channel. */
        public channel: string;

        /**
         * Creates a new UnsubscribeRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnsubscribeRequest instance
         */
        public static create(properties?: proto.IUnsubscribeRequest): proto.UnsubscribeRequest;

        /**
         * Encodes the specified UnsubscribeRequest message. Does not implicitly {@link proto.UnsubscribeRequest.verify|verify} messages.
         * @param message UnsubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUnsubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnsubscribeRequest message, length delimited. Does not implicitly {@link proto.UnsubscribeRequest.verify|verify} messages.
         * @param message UnsubscribeRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUnsubscribeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnsubscribeRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnsubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UnsubscribeRequest;

        /**
         * Decodes an UnsubscribeRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnsubscribeRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UnsubscribeRequest;

        /**
         * Verifies an UnsubscribeRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnsubscribeRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnsubscribeRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.UnsubscribeRequest;

        /**
         * Creates a plain object from an UnsubscribeRequest message. Also converts values to other types if specified.
         * @param message UnsubscribeRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UnsubscribeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnsubscribeRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnsubscribeResponse. */
    interface IUnsubscribeResponse {

        /** UnsubscribeResponse error */
        error?: (proto.IError|null);

        /** UnsubscribeResponse result */
        result?: (proto.IUnsubscribeResult|null);
    }

    /** Represents an UnsubscribeResponse. */
    class UnsubscribeResponse implements IUnsubscribeResponse {

        /**
         * Constructs a new UnsubscribeResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUnsubscribeResponse);

        /** UnsubscribeResponse error. */
        public error?: (proto.IError|null);

        /** UnsubscribeResponse result. */
        public result?: (proto.IUnsubscribeResult|null);

        /**
         * Creates a new UnsubscribeResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnsubscribeResponse instance
         */
        public static create(properties?: proto.IUnsubscribeResponse): proto.UnsubscribeResponse;

        /**
         * Encodes the specified UnsubscribeResponse message. Does not implicitly {@link proto.UnsubscribeResponse.verify|verify} messages.
         * @param message UnsubscribeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUnsubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnsubscribeResponse message, length delimited. Does not implicitly {@link proto.UnsubscribeResponse.verify|verify} messages.
         * @param message UnsubscribeResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUnsubscribeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnsubscribeResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnsubscribeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UnsubscribeResponse;

        /**
         * Decodes an UnsubscribeResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnsubscribeResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UnsubscribeResponse;

        /**
         * Verifies an UnsubscribeResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnsubscribeResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnsubscribeResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.UnsubscribeResponse;

        /**
         * Creates a plain object from an UnsubscribeResponse message. Also converts values to other types if specified.
         * @param message UnsubscribeResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UnsubscribeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnsubscribeResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnsubscribeResult. */
    interface IUnsubscribeResult {
    }

    /** Represents an UnsubscribeResult. */
    class UnsubscribeResult implements IUnsubscribeResult {

        /**
         * Constructs a new UnsubscribeResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IUnsubscribeResult);

        /**
         * Creates a new UnsubscribeResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnsubscribeResult instance
         */
        public static create(properties?: proto.IUnsubscribeResult): proto.UnsubscribeResult;

        /**
         * Encodes the specified UnsubscribeResult message. Does not implicitly {@link proto.UnsubscribeResult.verify|verify} messages.
         * @param message UnsubscribeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IUnsubscribeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnsubscribeResult message, length delimited. Does not implicitly {@link proto.UnsubscribeResult.verify|verify} messages.
         * @param message UnsubscribeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IUnsubscribeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnsubscribeResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnsubscribeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.UnsubscribeResult;

        /**
         * Decodes an UnsubscribeResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnsubscribeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.UnsubscribeResult;

        /**
         * Verifies an UnsubscribeResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnsubscribeResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnsubscribeResult
         */
        public static fromObject(object: { [k: string]: any }): proto.UnsubscribeResult;

        /**
         * Creates a plain object from an UnsubscribeResult message. Also converts values to other types if specified.
         * @param message UnsubscribeResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.UnsubscribeResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnsubscribeResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PublishRequest. */
    interface IPublishRequest {

        /** PublishRequest channel */
        channel?: (string|null);

        /** PublishRequest data */
        data?: (Uint8Array|null);
    }

    /** Represents a PublishRequest. */
    class PublishRequest implements IPublishRequest {

        /**
         * Constructs a new PublishRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPublishRequest);

        /** PublishRequest channel. */
        public channel: string;

        /** PublishRequest data. */
        public data: Uint8Array;

        /**
         * Creates a new PublishRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublishRequest instance
         */
        public static create(properties?: proto.IPublishRequest): proto.PublishRequest;

        /**
         * Encodes the specified PublishRequest message. Does not implicitly {@link proto.PublishRequest.verify|verify} messages.
         * @param message PublishRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPublishRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublishRequest message, length delimited. Does not implicitly {@link proto.PublishRequest.verify|verify} messages.
         * @param message PublishRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPublishRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublishRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublishRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PublishRequest;

        /**
         * Decodes a PublishRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublishRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PublishRequest;

        /**
         * Verifies a PublishRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PublishRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublishRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.PublishRequest;

        /**
         * Creates a plain object from a PublishRequest message. Also converts values to other types if specified.
         * @param message PublishRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PublishRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublishRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PublishResponse. */
    interface IPublishResponse {

        /** PublishResponse error */
        error?: (proto.IError|null);

        /** PublishResponse result */
        result?: (proto.IPublishResult|null);
    }

    /** Represents a PublishResponse. */
    class PublishResponse implements IPublishResponse {

        /**
         * Constructs a new PublishResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPublishResponse);

        /** PublishResponse error. */
        public error?: (proto.IError|null);

        /** PublishResponse result. */
        public result?: (proto.IPublishResult|null);

        /**
         * Creates a new PublishResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublishResponse instance
         */
        public static create(properties?: proto.IPublishResponse): proto.PublishResponse;

        /**
         * Encodes the specified PublishResponse message. Does not implicitly {@link proto.PublishResponse.verify|verify} messages.
         * @param message PublishResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPublishResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublishResponse message, length delimited. Does not implicitly {@link proto.PublishResponse.verify|verify} messages.
         * @param message PublishResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPublishResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublishResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublishResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PublishResponse;

        /**
         * Decodes a PublishResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublishResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PublishResponse;

        /**
         * Verifies a PublishResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PublishResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublishResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.PublishResponse;

        /**
         * Creates a plain object from a PublishResponse message. Also converts values to other types if specified.
         * @param message PublishResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PublishResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublishResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PublishResult. */
    interface IPublishResult {
    }

    /** Represents a PublishResult. */
    class PublishResult implements IPublishResult {

        /**
         * Constructs a new PublishResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPublishResult);

        /**
         * Creates a new PublishResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublishResult instance
         */
        public static create(properties?: proto.IPublishResult): proto.PublishResult;

        /**
         * Encodes the specified PublishResult message. Does not implicitly {@link proto.PublishResult.verify|verify} messages.
         * @param message PublishResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPublishResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublishResult message, length delimited. Does not implicitly {@link proto.PublishResult.verify|verify} messages.
         * @param message PublishResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPublishResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublishResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublishResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PublishResult;

        /**
         * Decodes a PublishResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublishResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PublishResult;

        /**
         * Verifies a PublishResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PublishResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublishResult
         */
        public static fromObject(object: { [k: string]: any }): proto.PublishResult;

        /**
         * Creates a plain object from a PublishResult message. Also converts values to other types if specified.
         * @param message PublishResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PublishResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublishResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PresenceRequest. */
    interface IPresenceRequest {

        /** PresenceRequest channel */
        channel?: (string|null);
    }

    /** Represents a PresenceRequest. */
    class PresenceRequest implements IPresenceRequest {

        /**
         * Constructs a new PresenceRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPresenceRequest);

        /** PresenceRequest channel. */
        public channel: string;

        /**
         * Creates a new PresenceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PresenceRequest instance
         */
        public static create(properties?: proto.IPresenceRequest): proto.PresenceRequest;

        /**
         * Encodes the specified PresenceRequest message. Does not implicitly {@link proto.PresenceRequest.verify|verify} messages.
         * @param message PresenceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPresenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PresenceRequest message, length delimited. Does not implicitly {@link proto.PresenceRequest.verify|verify} messages.
         * @param message PresenceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPresenceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PresenceRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PresenceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PresenceRequest;

        /**
         * Decodes a PresenceRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PresenceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PresenceRequest;

        /**
         * Verifies a PresenceRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PresenceRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PresenceRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.PresenceRequest;

        /**
         * Creates a plain object from a PresenceRequest message. Also converts values to other types if specified.
         * @param message PresenceRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PresenceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PresenceRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PresenceResponse. */
    interface IPresenceResponse {

        /** PresenceResponse error */
        error?: (proto.IError|null);

        /** PresenceResponse result */
        result?: (proto.IPresenceResult|null);
    }

    /** Represents a PresenceResponse. */
    class PresenceResponse implements IPresenceResponse {

        /**
         * Constructs a new PresenceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPresenceResponse);

        /** PresenceResponse error. */
        public error?: (proto.IError|null);

        /** PresenceResponse result. */
        public result?: (proto.IPresenceResult|null);

        /**
         * Creates a new PresenceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PresenceResponse instance
         */
        public static create(properties?: proto.IPresenceResponse): proto.PresenceResponse;

        /**
         * Encodes the specified PresenceResponse message. Does not implicitly {@link proto.PresenceResponse.verify|verify} messages.
         * @param message PresenceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPresenceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PresenceResponse message, length delimited. Does not implicitly {@link proto.PresenceResponse.verify|verify} messages.
         * @param message PresenceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPresenceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PresenceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PresenceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PresenceResponse;

        /**
         * Decodes a PresenceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PresenceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PresenceResponse;

        /**
         * Verifies a PresenceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PresenceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PresenceResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.PresenceResponse;

        /**
         * Creates a plain object from a PresenceResponse message. Also converts values to other types if specified.
         * @param message PresenceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PresenceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PresenceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PresenceResult. */
    interface IPresenceResult {

        /** PresenceResult presence */
        presence?: ({ [k: string]: proto.IClientInfo }|null);
    }

    /** Represents a PresenceResult. */
    class PresenceResult implements IPresenceResult {

        /**
         * Constructs a new PresenceResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPresenceResult);

        /** PresenceResult presence. */
        public presence: { [k: string]: proto.IClientInfo };

        /**
         * Creates a new PresenceResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PresenceResult instance
         */
        public static create(properties?: proto.IPresenceResult): proto.PresenceResult;

        /**
         * Encodes the specified PresenceResult message. Does not implicitly {@link proto.PresenceResult.verify|verify} messages.
         * @param message PresenceResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPresenceResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PresenceResult message, length delimited. Does not implicitly {@link proto.PresenceResult.verify|verify} messages.
         * @param message PresenceResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPresenceResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PresenceResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PresenceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PresenceResult;

        /**
         * Decodes a PresenceResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PresenceResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PresenceResult;

        /**
         * Verifies a PresenceResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PresenceResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PresenceResult
         */
        public static fromObject(object: { [k: string]: any }): proto.PresenceResult;

        /**
         * Creates a plain object from a PresenceResult message. Also converts values to other types if specified.
         * @param message PresenceResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PresenceResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PresenceResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PresenceStatsRequest. */
    interface IPresenceStatsRequest {

        /** PresenceStatsRequest channel */
        channel?: (string|null);
    }

    /** Represents a PresenceStatsRequest. */
    class PresenceStatsRequest implements IPresenceStatsRequest {

        /**
         * Constructs a new PresenceStatsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPresenceStatsRequest);

        /** PresenceStatsRequest channel. */
        public channel: string;

        /**
         * Creates a new PresenceStatsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PresenceStatsRequest instance
         */
        public static create(properties?: proto.IPresenceStatsRequest): proto.PresenceStatsRequest;

        /**
         * Encodes the specified PresenceStatsRequest message. Does not implicitly {@link proto.PresenceStatsRequest.verify|verify} messages.
         * @param message PresenceStatsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPresenceStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PresenceStatsRequest message, length delimited. Does not implicitly {@link proto.PresenceStatsRequest.verify|verify} messages.
         * @param message PresenceStatsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPresenceStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PresenceStatsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PresenceStatsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PresenceStatsRequest;

        /**
         * Decodes a PresenceStatsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PresenceStatsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PresenceStatsRequest;

        /**
         * Verifies a PresenceStatsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PresenceStatsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PresenceStatsRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.PresenceStatsRequest;

        /**
         * Creates a plain object from a PresenceStatsRequest message. Also converts values to other types if specified.
         * @param message PresenceStatsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PresenceStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PresenceStatsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PresenceStatsResponse. */
    interface IPresenceStatsResponse {

        /** PresenceStatsResponse error */
        error?: (proto.IError|null);

        /** PresenceStatsResponse result */
        result?: (proto.IPresenceStatsResult|null);
    }

    /** Represents a PresenceStatsResponse. */
    class PresenceStatsResponse implements IPresenceStatsResponse {

        /**
         * Constructs a new PresenceStatsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPresenceStatsResponse);

        /** PresenceStatsResponse error. */
        public error?: (proto.IError|null);

        /** PresenceStatsResponse result. */
        public result?: (proto.IPresenceStatsResult|null);

        /**
         * Creates a new PresenceStatsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PresenceStatsResponse instance
         */
        public static create(properties?: proto.IPresenceStatsResponse): proto.PresenceStatsResponse;

        /**
         * Encodes the specified PresenceStatsResponse message. Does not implicitly {@link proto.PresenceStatsResponse.verify|verify} messages.
         * @param message PresenceStatsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPresenceStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PresenceStatsResponse message, length delimited. Does not implicitly {@link proto.PresenceStatsResponse.verify|verify} messages.
         * @param message PresenceStatsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPresenceStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PresenceStatsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PresenceStatsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PresenceStatsResponse;

        /**
         * Decodes a PresenceStatsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PresenceStatsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PresenceStatsResponse;

        /**
         * Verifies a PresenceStatsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PresenceStatsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PresenceStatsResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.PresenceStatsResponse;

        /**
         * Creates a plain object from a PresenceStatsResponse message. Also converts values to other types if specified.
         * @param message PresenceStatsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PresenceStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PresenceStatsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PresenceStatsResult. */
    interface IPresenceStatsResult {

        /** PresenceStatsResult numClients */
        numClients?: (number|null);

        /** PresenceStatsResult numUsers */
        numUsers?: (number|null);
    }

    /** Represents a PresenceStatsResult. */
    class PresenceStatsResult implements IPresenceStatsResult {

        /**
         * Constructs a new PresenceStatsResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPresenceStatsResult);

        /** PresenceStatsResult numClients. */
        public numClients: number;

        /** PresenceStatsResult numUsers. */
        public numUsers: number;

        /**
         * Creates a new PresenceStatsResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PresenceStatsResult instance
         */
        public static create(properties?: proto.IPresenceStatsResult): proto.PresenceStatsResult;

        /**
         * Encodes the specified PresenceStatsResult message. Does not implicitly {@link proto.PresenceStatsResult.verify|verify} messages.
         * @param message PresenceStatsResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPresenceStatsResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PresenceStatsResult message, length delimited. Does not implicitly {@link proto.PresenceStatsResult.verify|verify} messages.
         * @param message PresenceStatsResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPresenceStatsResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PresenceStatsResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PresenceStatsResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PresenceStatsResult;

        /**
         * Decodes a PresenceStatsResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PresenceStatsResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PresenceStatsResult;

        /**
         * Verifies a PresenceStatsResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PresenceStatsResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PresenceStatsResult
         */
        public static fromObject(object: { [k: string]: any }): proto.PresenceStatsResult;

        /**
         * Creates a plain object from a PresenceStatsResult message. Also converts values to other types if specified.
         * @param message PresenceStatsResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PresenceStatsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PresenceStatsResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HistoryRequest. */
    interface IHistoryRequest {

        /** HistoryRequest channel */
        channel?: (string|null);
    }

    /** Represents a HistoryRequest. */
    class HistoryRequest implements IHistoryRequest {

        /**
         * Constructs a new HistoryRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHistoryRequest);

        /** HistoryRequest channel. */
        public channel: string;

        /**
         * Creates a new HistoryRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryRequest instance
         */
        public static create(properties?: proto.IHistoryRequest): proto.HistoryRequest;

        /**
         * Encodes the specified HistoryRequest message. Does not implicitly {@link proto.HistoryRequest.verify|verify} messages.
         * @param message HistoryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HistoryRequest message, length delimited. Does not implicitly {@link proto.HistoryRequest.verify|verify} messages.
         * @param message HistoryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HistoryRequest;

        /**
         * Decodes a HistoryRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HistoryRequest;

        /**
         * Verifies a HistoryRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HistoryRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HistoryRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.HistoryRequest;

        /**
         * Creates a plain object from a HistoryRequest message. Also converts values to other types if specified.
         * @param message HistoryRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HistoryRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HistoryResponse. */
    interface IHistoryResponse {

        /** HistoryResponse error */
        error?: (proto.IError|null);

        /** HistoryResponse result */
        result?: (proto.IHistoryResult|null);
    }

    /** Represents a HistoryResponse. */
    class HistoryResponse implements IHistoryResponse {

        /**
         * Constructs a new HistoryResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHistoryResponse);

        /** HistoryResponse error. */
        public error?: (proto.IError|null);

        /** HistoryResponse result. */
        public result?: (proto.IHistoryResult|null);

        /**
         * Creates a new HistoryResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryResponse instance
         */
        public static create(properties?: proto.IHistoryResponse): proto.HistoryResponse;

        /**
         * Encodes the specified HistoryResponse message. Does not implicitly {@link proto.HistoryResponse.verify|verify} messages.
         * @param message HistoryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HistoryResponse message, length delimited. Does not implicitly {@link proto.HistoryResponse.verify|verify} messages.
         * @param message HistoryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HistoryResponse;

        /**
         * Decodes a HistoryResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HistoryResponse;

        /**
         * Verifies a HistoryResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HistoryResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HistoryResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.HistoryResponse;

        /**
         * Creates a plain object from a HistoryResponse message. Also converts values to other types if specified.
         * @param message HistoryResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HistoryResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HistoryResult. */
    interface IHistoryResult {

        /** HistoryResult publications */
        publications?: (proto.IPublication[]|null);
    }

    /** Represents a HistoryResult. */
    class HistoryResult implements IHistoryResult {

        /**
         * Constructs a new HistoryResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IHistoryResult);

        /** HistoryResult publications. */
        public publications: proto.IPublication[];

        /**
         * Creates a new HistoryResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HistoryResult instance
         */
        public static create(properties?: proto.IHistoryResult): proto.HistoryResult;

        /**
         * Encodes the specified HistoryResult message. Does not implicitly {@link proto.HistoryResult.verify|verify} messages.
         * @param message HistoryResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IHistoryResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HistoryResult message, length delimited. Does not implicitly {@link proto.HistoryResult.verify|verify} messages.
         * @param message HistoryResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IHistoryResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HistoryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.HistoryResult;

        /**
         * Decodes a HistoryResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HistoryResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.HistoryResult;

        /**
         * Verifies a HistoryResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HistoryResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HistoryResult
         */
        public static fromObject(object: { [k: string]: any }): proto.HistoryResult;

        /**
         * Creates a plain object from a HistoryResult message. Also converts values to other types if specified.
         * @param message HistoryResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.HistoryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HistoryResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PingRequest. */
    interface IPingRequest {

        /** PingRequest data */
        data?: (string|null);
    }

    /** Represents a PingRequest. */
    class PingRequest implements IPingRequest {

        /**
         * Constructs a new PingRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPingRequest);

        /** PingRequest data. */
        public data: string;

        /**
         * Creates a new PingRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingRequest instance
         */
        public static create(properties?: proto.IPingRequest): proto.PingRequest;

        /**
         * Encodes the specified PingRequest message. Does not implicitly {@link proto.PingRequest.verify|verify} messages.
         * @param message PingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link proto.PingRequest.verify|verify} messages.
         * @param message PingRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PingRequest;

        /**
         * Decodes a PingRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PingRequest;

        /**
         * Verifies a PingRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.PingRequest;

        /**
         * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
         * @param message PingRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PingResponse. */
    interface IPingResponse {

        /** PingResponse error */
        error?: (proto.IError|null);

        /** PingResponse result */
        result?: (proto.IPingResult|null);
    }

    /** Represents a PingResponse. */
    class PingResponse implements IPingResponse {

        /**
         * Constructs a new PingResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPingResponse);

        /** PingResponse error. */
        public error?: (proto.IError|null);

        /** PingResponse result. */
        public result?: (proto.IPingResult|null);

        /**
         * Creates a new PingResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingResponse instance
         */
        public static create(properties?: proto.IPingResponse): proto.PingResponse;

        /**
         * Encodes the specified PingResponse message. Does not implicitly {@link proto.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link proto.PingResponse.verify|verify} messages.
         * @param message PingResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PingResponse;

        /**
         * Decodes a PingResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PingResponse;

        /**
         * Verifies a PingResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.PingResponse;

        /**
         * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
         * @param message PingResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PingResult. */
    interface IPingResult {

        /** PingResult data */
        data?: (string|null);
    }

    /** Represents a PingResult. */
    class PingResult implements IPingResult {

        /**
         * Constructs a new PingResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPingResult);

        /** PingResult data. */
        public data: string;

        /**
         * Creates a new PingResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PingResult instance
         */
        public static create(properties?: proto.IPingResult): proto.PingResult;

        /**
         * Encodes the specified PingResult message. Does not implicitly {@link proto.PingResult.verify|verify} messages.
         * @param message PingResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPingResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PingResult message, length delimited. Does not implicitly {@link proto.PingResult.verify|verify} messages.
         * @param message PingResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPingResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PingResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PingResult;

        /**
         * Decodes a PingResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PingResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PingResult;

        /**
         * Verifies a PingResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PingResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PingResult
         */
        public static fromObject(object: { [k: string]: any }): proto.PingResult;

        /**
         * Creates a plain object from a PingResult message. Also converts values to other types if specified.
         * @param message PingResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PingResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PingResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RPCRequest. */
    interface IRPCRequest {

        /** RPCRequest data */
        data?: (Uint8Array|null);
    }

    /** Represents a RPCRequest. */
    class RPCRequest implements IRPCRequest {

        /**
         * Constructs a new RPCRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRPCRequest);

        /** RPCRequest data. */
        public data: Uint8Array;

        /**
         * Creates a new RPCRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RPCRequest instance
         */
        public static create(properties?: proto.IRPCRequest): proto.RPCRequest;

        /**
         * Encodes the specified RPCRequest message. Does not implicitly {@link proto.RPCRequest.verify|verify} messages.
         * @param message RPCRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRPCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RPCRequest message, length delimited. Does not implicitly {@link proto.RPCRequest.verify|verify} messages.
         * @param message RPCRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRPCRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RPCRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RPCRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RPCRequest;

        /**
         * Decodes a RPCRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RPCRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RPCRequest;

        /**
         * Verifies a RPCRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RPCRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RPCRequest
         */
        public static fromObject(object: { [k: string]: any }): proto.RPCRequest;

        /**
         * Creates a plain object from a RPCRequest message. Also converts values to other types if specified.
         * @param message RPCRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RPCRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RPCRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RPCResponse. */
    interface IRPCResponse {

        /** RPCResponse error */
        error?: (proto.IError|null);

        /** RPCResponse result */
        result?: (Uint8Array|null);
    }

    /** Represents a RPCResponse. */
    class RPCResponse implements IRPCResponse {

        /**
         * Constructs a new RPCResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IRPCResponse);

        /** RPCResponse error. */
        public error?: (proto.IError|null);

        /** RPCResponse result. */
        public result: Uint8Array;

        /**
         * Creates a new RPCResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RPCResponse instance
         */
        public static create(properties?: proto.IRPCResponse): proto.RPCResponse;

        /**
         * Encodes the specified RPCResponse message. Does not implicitly {@link proto.RPCResponse.verify|verify} messages.
         * @param message RPCResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IRPCResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RPCResponse message, length delimited. Does not implicitly {@link proto.RPCResponse.verify|verify} messages.
         * @param message RPCResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IRPCResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RPCResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RPCResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.RPCResponse;

        /**
         * Decodes a RPCResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RPCResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.RPCResponse;

        /**
         * Verifies a RPCResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RPCResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RPCResponse
         */
        public static fromObject(object: { [k: string]: any }): proto.RPCResponse;

        /**
         * Creates a plain object from a RPCResponse message. Also converts values to other types if specified.
         * @param message RPCResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.RPCResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RPCResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a Centrifuge */
    class Centrifuge extends $protobuf.rpc.Service {

        /**
         * Constructs a new Centrifuge service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Centrifuge service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Centrifuge;

        /**
         * Calls Communicate.
         * @param request Command message or plain object
         * @param callback Node-style callback called with the error, if any, and Reply
         */
        public communicate(request: proto.ICommand, callback: proto.Centrifuge.CommunicateCallback): void;

        /**
         * Calls Communicate.
         * @param request Command message or plain object
         * @returns Promise
         */
        public communicate(request: proto.ICommand): Promise<proto.Reply>;
    }

    namespace Centrifuge {

        /**
         * Callback as used by {@link proto.Centrifuge#communicate}.
         * @param error Error, if any
         * @param [response] Reply
         */
        type CommunicateCallback = (error: (Error|null), response?: proto.Reply) => void;
    }
}
