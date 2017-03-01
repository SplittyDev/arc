/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
import * as $protobuf from "protobufjs";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Lazily resolved type references
const $lazyTypes = [];

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.arc = (function() {

    /**
     * Namespace arc.
     * @exports arc
     * @namespace
     */
    const arc = {};

    arc.User = (function() {

        /**
         * Constructs a new User.
         * @exports arc.User
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * User publicKey.
         * @type {string}
         */
        User.prototype.publicKey = "";

        /**
         * User userName.
         * @type {string|undefined}
         */
        User.prototype.userName = "";

        /**
         * User statusMessage.
         * @type {string|undefined}
         */
        User.prototype.statusMessage = "";

        /**
         * Creates a new User instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {arc.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message.
         * @param {arc.User|Object} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.publicKey);
            if (message.userName !== undefined && message.hasOwnProperty("userName"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.userName);
            if (message.statusMessage !== undefined && message.hasOwnProperty("statusMessage"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.statusMessage);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited.
         * @param {arc.User|Object} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {arc.User} User
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.arc.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publicKey = reader.string();
                    break;
                case 16:
                    message.userName = reader.string();
                    break;
                case 17:
                    message.statusMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {arc.User} User
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @param {arc.User|Object} message User message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.publicKey))
                return "publicKey: string expected";
            if (message.userName !== undefined)
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.statusMessage !== undefined)
                if (!$util.isString(message.statusMessage))
                    return "statusMessage: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.arc.User)
                return object;
            let message = new $root.arc.User();
            if (object.publicKey !== undefined && object.publicKey !== null)
                message.publicKey = String(object.publicKey);
            if (object.userName !== undefined && object.userName !== null)
                message.userName = String(object.userName);
            if (object.statusMessage !== undefined && object.statusMessage !== null)
                message.statusMessage = String(object.statusMessage);
            return message;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link arc.User.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.User} User
         */
        User.from = User.fromObject;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param {arc.User} message User
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.publicKey = "";
                object.userName = "";
                object.statusMessage = "";
            }
            if (message.publicKey !== undefined && message.publicKey !== null && message.hasOwnProperty("publicKey"))
                object.publicKey = message.publicKey;
            if (message.userName !== undefined && message.userName !== null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.statusMessage !== undefined && message.statusMessage !== null && message.hasOwnProperty("statusMessage"))
                object.statusMessage = message.statusMessage;
            return object;
        };

        /**
         * Creates a plain object from this User message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this User to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    arc.Identity = (function() {

        /**
         * Constructs a new Identity.
         * @exports arc.Identity
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Identity(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * Identity publicKey.
         * @type {string}
         */
        Identity.prototype.publicKey = "";

        /**
         * Identity privateKey.
         * @type {string}
         */
        Identity.prototype.privateKey = "";

        /**
         * Identity userName.
         * @type {string|undefined}
         */
        Identity.prototype.userName = "";

        /**
         * Creates a new Identity instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {arc.Identity} Identity instance
         */
        Identity.create = function create(properties) {
            return new Identity(properties);
        };

        /**
         * Encodes the specified Identity message.
         * @param {arc.Identity|Object} message Identity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Identity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.publicKey);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.privateKey);
            if (message.userName !== undefined && message.hasOwnProperty("userName"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.userName);
            return writer;
        };

        /**
         * Encodes the specified Identity message, length delimited.
         * @param {arc.Identity|Object} message Identity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Identity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Identity message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {arc.Identity} Identity
         */
        Identity.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.arc.Identity();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.publicKey = reader.string();
                    break;
                case 2:
                    message.privateKey = reader.string();
                    break;
                case 16:
                    message.userName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Identity message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {arc.Identity} Identity
         */
        Identity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Identity message.
         * @param {arc.Identity|Object} message Identity message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Identity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.publicKey))
                return "publicKey: string expected";
            if (!$util.isString(message.privateKey))
                return "privateKey: string expected";
            if (message.userName !== undefined)
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            return null;
        };

        /**
         * Creates an Identity message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.Identity} Identity
         */
        Identity.fromObject = function fromObject(object) {
            if (object instanceof $root.arc.Identity)
                return object;
            let message = new $root.arc.Identity();
            if (object.publicKey !== undefined && object.publicKey !== null)
                message.publicKey = String(object.publicKey);
            if (object.privateKey !== undefined && object.privateKey !== null)
                message.privateKey = String(object.privateKey);
            if (object.userName !== undefined && object.userName !== null)
                message.userName = String(object.userName);
            return message;
        };

        /**
         * Creates an Identity message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link arc.Identity.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.Identity} Identity
         */
        Identity.from = Identity.fromObject;

        /**
         * Creates a plain object from an Identity message. Also converts values to other types if specified.
         * @param {arc.Identity} message Identity
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Identity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.publicKey = "";
                object.privateKey = "";
                object.userName = "";
            }
            if (message.publicKey !== undefined && message.publicKey !== null && message.hasOwnProperty("publicKey"))
                object.publicKey = message.publicKey;
            if (message.privateKey !== undefined && message.privateKey !== null && message.hasOwnProperty("privateKey"))
                object.privateKey = message.privateKey;
            if (message.userName !== undefined && message.userName !== null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            return object;
        };

        /**
         * Creates a plain object from this Identity message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Identity.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Identity to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Identity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Identity;
    })();

    /**
     * ContentType enum.
     * @name ContentType
     * @memberof arc
     * @enum {number}
     * @property {number} RAW=0 RAW value
     * @property {number} TEXT_UTF8=1 TEXT_UTF8 value
     */
    arc.ContentType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values["RAW"] = 0;
        values["TEXT_UTF8"] = 1;
        return values;
    })();

    arc.Message = (function() {

        /**
         * Constructs a new Message.
         * @exports arc.Message
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message contentType.
         * @type {number}
         */
        Message.prototype.contentType = 0;

        /**
         * Message contentBody.
         * @type {Uint8Array}
         */
        Message.prototype.contentBody = $util.newBuffer([]);

        // Lazily resolved type references
        const $types = {
            0: "arc.ContentType"
        }; $lazyTypes.push($types);

        /**
         * Creates a new Message instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {arc.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message.
         * @param {arc.Message|Object} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.contentType);
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.contentBody);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited.
         * @param {arc.Message|Object} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {arc.Message} Message
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.arc.Message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.contentType = reader.uint32();
                    break;
                case 2:
                    message.contentBody = reader.bytes();
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
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {arc.Message} Message
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @param {arc.Message|Object} message Message message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            switch (message.contentType) {
            default:
                return "contentType: enum value expected";
            case 0:
            case 1:
                break;
            }
            if (!(message.contentBody && typeof message.contentBody.length === "number" || $util.isString(message.contentBody)))
                return "contentBody: buffer expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.arc.Message)
                return object;
            let message = new $root.arc.Message();
            switch (object.contentType) {
            case "RAW":
            case 0:
                message.contentType = 0;
                break;
            case "TEXT_UTF8":
            case 1:
                message.contentType = 1;
                break;
            }
            if (object.contentBody !== undefined && object.contentBody !== null)
                if (typeof object.contentBody === "string")
                    $util.base64.decode(object.contentBody, message.contentBody = $util.newBuffer($util.base64.length(object.contentBody)), 0);
                else if (object.contentBody.length)
                    message.contentBody = object.contentBody;
            return message;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link arc.Message.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.Message} Message
         */
        Message.from = Message.fromObject;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param {arc.Message} message Message
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.contentType = options.enums === String ? "RAW" : 0;
                object.contentBody = options.bytes === String ? "" : [];
            }
            if (message.contentType !== undefined && message.contentType !== null && message.hasOwnProperty("contentType"))
                object.contentType = options.enums === String ? $types[0][message.contentType] : message.contentType;
            if (message.contentBody !== undefined && message.contentBody !== null && message.hasOwnProperty("contentBody"))
                object.contentBody = options.bytes === String ? $util.base64.encode(message.contentBody, 0, message.contentBody.length) : options.bytes === Array ? Array.prototype.slice.call(message.contentBody) : message.contentBody;
            return object;
        };

        /**
         * Creates a plain object from this Message message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this Message to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    arc.PrivateMessage = (function() {

        /**
         * Constructs a new PrivateMessage.
         * @exports arc.PrivateMessage
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        function PrivateMessage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivateMessage sender.
         * @type {arc.User}
         */
        PrivateMessage.prototype.sender = null;

        /**
         * PrivateMessage receiver.
         * @type {arc.User}
         */
        PrivateMessage.prototype.receiver = null;

        /**
         * PrivateMessage content.
         * @type {arc.Message}
         */
        PrivateMessage.prototype.content = null;

        // Lazily resolved type references
        const $types = {
            0: "arc.User",
            1: "arc.User",
            2: "arc.Message"
        }; $lazyTypes.push($types);

        /**
         * Creates a new PrivateMessage instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {arc.PrivateMessage} PrivateMessage instance
         */
        PrivateMessage.create = function create(properties) {
            return new PrivateMessage(properties);
        };

        /**
         * Encodes the specified PrivateMessage message.
         * @param {arc.PrivateMessage|Object} message PrivateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $types[0].encode(message.sender, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            $types[1].encode(message.receiver, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            $types[2].encode(message.content, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PrivateMessage message, length delimited.
         * @param {arc.PrivateMessage|Object} message PrivateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivateMessage message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {arc.PrivateMessage} PrivateMessage
         */
        PrivateMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.arc.PrivateMessage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sender = $types[0].decode(reader, reader.uint32());
                    break;
                case 2:
                    message.receiver = $types[1].decode(reader, reader.uint32());
                    break;
                case 3:
                    message.content = $types[2].decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivateMessage message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {arc.PrivateMessage} PrivateMessage
         */
        PrivateMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrivateMessage message.
         * @param {arc.PrivateMessage|Object} message PrivateMessage message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        PrivateMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            let error = $types[0].verify(message.sender);
            if (error)
                return "sender." + error;
            let error = $types[1].verify(message.receiver);
            if (error)
                return "receiver." + error;
            let error = $types[2].verify(message.content);
            if (error)
                return "content." + error;
            return null;
        };

        /**
         * Creates a PrivateMessage message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.PrivateMessage} PrivateMessage
         */
        PrivateMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.arc.PrivateMessage)
                return object;
            let message = new $root.arc.PrivateMessage();
            if (object.sender !== undefined && object.sender !== null) {
                if (typeof object.sender !== "object")
                    throw TypeError(".arc.PrivateMessage.sender: object expected");
                message.sender = $types[0].fromObject(object.sender);
            }
            if (object.receiver !== undefined && object.receiver !== null) {
                if (typeof object.receiver !== "object")
                    throw TypeError(".arc.PrivateMessage.receiver: object expected");
                message.receiver = $types[1].fromObject(object.receiver);
            }
            if (object.content !== undefined && object.content !== null) {
                if (typeof object.content !== "object")
                    throw TypeError(".arc.PrivateMessage.content: object expected");
                message.content = $types[2].fromObject(object.content);
            }
            return message;
        };

        /**
         * Creates a PrivateMessage message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link arc.PrivateMessage.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.PrivateMessage} PrivateMessage
         */
        PrivateMessage.from = PrivateMessage.fromObject;

        /**
         * Creates a plain object from a PrivateMessage message. Also converts values to other types if specified.
         * @param {arc.PrivateMessage} message PrivateMessage
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrivateMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sender = null;
                object.receiver = null;
                object.content = null;
            }
            if (message.sender !== undefined && message.sender !== null && message.hasOwnProperty("sender"))
                object.sender = $types[0].toObject(message.sender, options);
            if (message.receiver !== undefined && message.receiver !== null && message.hasOwnProperty("receiver"))
                object.receiver = $types[1].toObject(message.receiver, options);
            if (message.content !== undefined && message.content !== null && message.hasOwnProperty("content"))
                object.content = $types[2].toObject(message.content, options);
            return object;
        };

        /**
         * Creates a plain object from this PrivateMessage message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrivateMessage.prototype.toObject = function toObject(options) {
            return this.constructor.toObject(this, options);
        };

        /**
         * Converts this PrivateMessage to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        PrivateMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateMessage;
    })();

    return arc;
})();

// Resolve lazy type references to actual types
$util.lazyResolve($root, $lazyTypes);

export { $root as default };
