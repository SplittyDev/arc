import * as $protobuf from "protobufjs";

/**
 * Namespace arc.
 * @exports arc
 * @namespace
 */
export namespace arc {

    /**
     * Constructs a new User.
     * @exports arc.User
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class User {

        /**
         * Constructs a new User.
         * @exports arc.User
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * User publicKey.
         * @type {string}
         */
        publicKey: string;

        /**
         * User userName.
         * @type {string|undefined}
         */
        userName?: string;

        /**
         * User statusMessage.
         * @type {string|undefined}
         */
        statusMessage?: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {arc.User} User instance
         */
        static create(properties?: Object): arc.User;

        /**
         * Encodes the specified User message.
         * @param {arc.User|Object} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (arc.User|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited.
         * @param {arc.User|Object} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (arc.User|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {arc.User} User
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arc.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {arc.User} User
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arc.User;

        /**
         * Verifies a User message.
         * @param {arc.User|Object} message User message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (arc.User|Object)): string;

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.User} User
         */
        static fromObject(object: { [k: string]: any }): arc.User;

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link arc.User.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.User} User
         */
        static from(object: { [k: string]: any }): arc.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param {arc.User} message User
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: arc.User, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this User message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new Identity.
     * @exports arc.Identity
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Identity {

        /**
         * Constructs a new Identity.
         * @exports arc.Identity
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Identity publicKey.
         * @type {string}
         */
        publicKey: string;

        /**
         * Identity privateKey.
         * @type {string}
         */
        privateKey: string;

        /**
         * Identity userName.
         * @type {string|undefined}
         */
        userName?: string;

        /**
         * Creates a new Identity instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {arc.Identity} Identity instance
         */
        static create(properties?: Object): arc.Identity;

        /**
         * Encodes the specified Identity message.
         * @param {arc.Identity|Object} message Identity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (arc.Identity|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Identity message, length delimited.
         * @param {arc.Identity|Object} message Identity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (arc.Identity|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Identity message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {arc.Identity} Identity
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arc.Identity;

        /**
         * Decodes an Identity message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {arc.Identity} Identity
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arc.Identity;

        /**
         * Verifies an Identity message.
         * @param {arc.Identity|Object} message Identity message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (arc.Identity|Object)): string;

        /**
         * Creates an Identity message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.Identity} Identity
         */
        static fromObject(object: { [k: string]: any }): arc.Identity;

        /**
         * Creates an Identity message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link arc.Identity.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.Identity} Identity
         */
        static from(object: { [k: string]: any }): arc.Identity;

        /**
         * Creates a plain object from an Identity message. Also converts values to other types if specified.
         * @param {arc.Identity} message Identity
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: arc.Identity, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Identity message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Identity to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * ContentType enum.
     * @name ContentType
     * @memberof arc
     * @enum {number}
     * @property {number} RAW=0 RAW value
     * @property {number} TEXT_UTF8=1 TEXT_UTF8 value
     */
    enum ContentType {
        RAW = 0,
        TEXT_UTF8 = 1
    }

    /**
     * Constructs a new Message.
     * @exports arc.Message
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class Message {

        /**
         * Constructs a new Message.
         * @exports arc.Message
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * Message contentType.
         * @type {number}
         */
        contentType: number;

        /**
         * Message contentBody.
         * @type {Uint8Array}
         */
        contentBody: Uint8Array;

        /**
         * Creates a new Message instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {arc.Message} Message instance
         */
        static create(properties?: Object): arc.Message;

        /**
         * Encodes the specified Message message.
         * @param {arc.Message|Object} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (arc.Message|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited.
         * @param {arc.Message|Object} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (arc.Message|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {arc.Message} Message
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arc.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {arc.Message} Message
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arc.Message;

        /**
         * Verifies a Message message.
         * @param {arc.Message|Object} message Message message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (arc.Message|Object)): string;

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.Message} Message
         */
        static fromObject(object: { [k: string]: any }): arc.Message;

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link arc.Message.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.Message} Message
         */
        static from(object: { [k: string]: any }): arc.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param {arc.Message} message Message
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: arc.Message, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this Message message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }

    /**
     * Constructs a new PrivateMessage.
     * @exports arc.PrivateMessage
     * @constructor
     * @param {Object} [properties] Properties to set
     */
    class PrivateMessage {

        /**
         * Constructs a new PrivateMessage.
         * @exports arc.PrivateMessage
         * @constructor
         * @param {Object} [properties] Properties to set
         */
        constructor(properties?: Object);

        /**
         * PrivateMessage sender.
         * @type {arc.User}
         */
        sender: arc.User;

        /**
         * PrivateMessage receiver.
         * @type {arc.User}
         */
        receiver: arc.User;

        /**
         * PrivateMessage content.
         * @type {arc.Message}
         */
        content: arc.Message;

        /**
         * Creates a new PrivateMessage instance using the specified properties.
         * @param {Object} [properties] Properties to set
         * @returns {arc.PrivateMessage} PrivateMessage instance
         */
        static create(properties?: Object): arc.PrivateMessage;

        /**
         * Encodes the specified PrivateMessage message.
         * @param {arc.PrivateMessage|Object} message PrivateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encode(message: (arc.PrivateMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateMessage message, length delimited.
         * @param {arc.PrivateMessage|Object} message PrivateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        static encodeDelimited(message: (arc.PrivateMessage|Object), writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateMessage message from the specified reader or buffer.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {arc.PrivateMessage} PrivateMessage
         */
        static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): arc.PrivateMessage;

        /**
         * Decodes a PrivateMessage message from the specified reader or buffer, length delimited.
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {arc.PrivateMessage} PrivateMessage
         */
        static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): arc.PrivateMessage;

        /**
         * Verifies a PrivateMessage message.
         * @param {arc.PrivateMessage|Object} message PrivateMessage message or plain object to verify
         * @returns {?string} `null` if valid, otherwise the reason why it is not
         */
        static verify(message: (arc.PrivateMessage|Object)): string;

        /**
         * Creates a PrivateMessage message from a plain object. Also converts values to their respective internal types.
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.PrivateMessage} PrivateMessage
         */
        static fromObject(object: { [k: string]: any }): arc.PrivateMessage;

        /**
         * Creates a PrivateMessage message from a plain object. Also converts values to their respective internal types.
         * This is an alias of {@link arc.PrivateMessage.fromObject}.
         * @function
         * @param {Object.<string,*>} object Plain object
         * @returns {arc.PrivateMessage} PrivateMessage
         */
        static from(object: { [k: string]: any }): arc.PrivateMessage;

        /**
         * Creates a plain object from a PrivateMessage message. Also converts values to other types if specified.
         * @param {arc.PrivateMessage} message PrivateMessage
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        static toObject(message: arc.PrivateMessage, options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Creates a plain object from this PrivateMessage message. Also converts values to other types if specified.
         * @param {$protobuf.ConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        toObject(options?: $protobuf.ConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateMessage to JSON.
         * @returns {Object.<string,*>} JSON object
         */
        toJSON(): { [k: string]: any };
    }
}
