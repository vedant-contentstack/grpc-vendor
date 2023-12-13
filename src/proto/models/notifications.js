/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const api = $root.api = (() => {

    /**
     * Namespace api.
     * @exports api
     * @namespace
     */
    const api = {};

    api.notification = (function() {

        /**
         * Namespace notification.
         * @memberof api
         * @namespace
         */
        const notification = {};

        notification.NotificationService = (function() {

            /**
             * Constructs a new NotificationService service.
             * @memberof api.notification
             * @classdesc Represents a NotificationService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function NotificationService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (NotificationService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = NotificationService;

            /**
             * Creates new NotificationService service using the specified rpc implementation.
             * @function create
             * @memberof api.notification.NotificationService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {NotificationService} RPC service. Useful where requests and/or responses are streamed.
             */
            NotificationService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link api.notification.NotificationService#createNotification}.
             * @memberof api.notification.NotificationService
             * @typedef CreateNotificationCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {api.notification.NotificationResponse} [response] NotificationResponse
             */

            /**
             * Calls CreateNotification.
             * @function createNotification
             * @memberof api.notification.NotificationService
             * @instance
             * @param {api.notification.INotificationRequest} request NotificationRequest message or plain object
             * @param {api.notification.NotificationService.CreateNotificationCallback} callback Node-style callback called with the error, if any, and NotificationResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(NotificationService.prototype.createNotification = function createNotification(request, callback) {
                return this.rpcCall(createNotification, $root.api.notification.NotificationRequest, $root.api.notification.NotificationResponse, request, callback);
            }, "name", { value: "CreateNotification" });

            /**
             * Calls CreateNotification.
             * @function createNotification
             * @memberof api.notification.NotificationService
             * @instance
             * @param {api.notification.INotificationRequest} request NotificationRequest message or plain object
             * @returns {Promise<api.notification.NotificationResponse>} Promise
             * @variation 2
             */

            return NotificationService;
        })();

        notification.Notification = (function() {

            /**
             * Properties of a Notification.
             * @memberof api.notification
             * @interface INotification
             * @property {string|null} [resourceUid] Notification resourceUid
             * @property {string|null} [title] Notification title
             * @property {string|null} [message] Notification message
             * @property {string|null} [scope] Notification scope
             * @property {string|null} [vendor] Notification vendor
             * @property {string|null} [product] Notification product
             * @property {string|null} [category] Notification category
             * @property {string|null} [cta] Notification cta
             */

            /**
             * Constructs a new Notification.
             * @memberof api.notification
             * @classdesc Represents a Notification.
             * @implements INotification
             * @constructor
             * @param {api.notification.INotification=} [properties] Properties to set
             */
            function Notification(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Notification resourceUid.
             * @member {string} resourceUid
             * @memberof api.notification.Notification
             * @instance
             */
            Notification.prototype.resourceUid = "";

            /**
             * Notification title.
             * @member {string} title
             * @memberof api.notification.Notification
             * @instance
             */
            Notification.prototype.title = "";

            /**
             * Notification message.
             * @member {string} message
             * @memberof api.notification.Notification
             * @instance
             */
            Notification.prototype.message = "";

            /**
             * Notification scope.
             * @member {string} scope
             * @memberof api.notification.Notification
             * @instance
             */
            Notification.prototype.scope = "";

            /**
             * Notification vendor.
             * @member {string} vendor
             * @memberof api.notification.Notification
             * @instance
             */
            Notification.prototype.vendor = "";

            /**
             * Notification product.
             * @member {string} product
             * @memberof api.notification.Notification
             * @instance
             */
            Notification.prototype.product = "";

            /**
             * Notification category.
             * @member {string} category
             * @memberof api.notification.Notification
             * @instance
             */
            Notification.prototype.category = "";

            /**
             * Notification cta.
             * @member {string} cta
             * @memberof api.notification.Notification
             * @instance
             */
            Notification.prototype.cta = "";

            /**
             * Creates a new Notification instance using the specified properties.
             * @function create
             * @memberof api.notification.Notification
             * @static
             * @param {api.notification.INotification=} [properties] Properties to set
             * @returns {api.notification.Notification} Notification instance
             */
            Notification.create = function create(properties) {
                return new Notification(properties);
            };

            /**
             * Encodes the specified Notification message. Does not implicitly {@link api.notification.Notification.verify|verify} messages.
             * @function encode
             * @memberof api.notification.Notification
             * @static
             * @param {api.notification.INotification} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.resourceUid != null && Object.hasOwnProperty.call(message, "resourceUid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceUid);
                if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
                if (message.scope != null && Object.hasOwnProperty.call(message, "scope"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.scope);
                if (message.vendor != null && Object.hasOwnProperty.call(message, "vendor"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.vendor);
                if (message.product != null && Object.hasOwnProperty.call(message, "product"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.product);
                if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.category);
                if (message.cta != null && Object.hasOwnProperty.call(message, "cta"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.cta);
                return writer;
            };

            /**
             * Encodes the specified Notification message, length delimited. Does not implicitly {@link api.notification.Notification.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.notification.Notification
             * @static
             * @param {api.notification.INotification} message Notification message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Notification.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Notification message from the specified reader or buffer.
             * @function decode
             * @memberof api.notification.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.notification.Notification} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.notification.Notification();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.resourceUid = reader.string();
                            break;
                        }
                    case 2: {
                            message.title = reader.string();
                            break;
                        }
                    case 3: {
                            message.message = reader.string();
                            break;
                        }
                    case 4: {
                            message.scope = reader.string();
                            break;
                        }
                    case 5: {
                            message.vendor = reader.string();
                            break;
                        }
                    case 6: {
                            message.product = reader.string();
                            break;
                        }
                    case 7: {
                            message.category = reader.string();
                            break;
                        }
                    case 8: {
                            message.cta = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Notification message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.notification.Notification
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.notification.Notification} Notification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Notification.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Notification message.
             * @function verify
             * @memberof api.notification.Notification
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Notification.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.resourceUid != null && message.hasOwnProperty("resourceUid"))
                    if (!$util.isString(message.resourceUid))
                        return "resourceUid: string expected";
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.scope != null && message.hasOwnProperty("scope"))
                    if (!$util.isString(message.scope))
                        return "scope: string expected";
                if (message.vendor != null && message.hasOwnProperty("vendor"))
                    if (!$util.isString(message.vendor))
                        return "vendor: string expected";
                if (message.product != null && message.hasOwnProperty("product"))
                    if (!$util.isString(message.product))
                        return "product: string expected";
                if (message.category != null && message.hasOwnProperty("category"))
                    if (!$util.isString(message.category))
                        return "category: string expected";
                if (message.cta != null && message.hasOwnProperty("cta"))
                    if (!$util.isString(message.cta))
                        return "cta: string expected";
                return null;
            };

            /**
             * Creates a Notification message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.notification.Notification
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.notification.Notification} Notification
             */
            Notification.fromObject = function fromObject(object) {
                if (object instanceof $root.api.notification.Notification)
                    return object;
                let message = new $root.api.notification.Notification();
                if (object.resourceUid != null)
                    message.resourceUid = String(object.resourceUid);
                if (object.title != null)
                    message.title = String(object.title);
                if (object.message != null)
                    message.message = String(object.message);
                if (object.scope != null)
                    message.scope = String(object.scope);
                if (object.vendor != null)
                    message.vendor = String(object.vendor);
                if (object.product != null)
                    message.product = String(object.product);
                if (object.category != null)
                    message.category = String(object.category);
                if (object.cta != null)
                    message.cta = String(object.cta);
                return message;
            };

            /**
             * Creates a plain object from a Notification message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.notification.Notification
             * @static
             * @param {api.notification.Notification} message Notification
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Notification.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.resourceUid = "";
                    object.title = "";
                    object.message = "";
                    object.scope = "";
                    object.vendor = "";
                    object.product = "";
                    object.category = "";
                    object.cta = "";
                }
                if (message.resourceUid != null && message.hasOwnProperty("resourceUid"))
                    object.resourceUid = message.resourceUid;
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.scope != null && message.hasOwnProperty("scope"))
                    object.scope = message.scope;
                if (message.vendor != null && message.hasOwnProperty("vendor"))
                    object.vendor = message.vendor;
                if (message.product != null && message.hasOwnProperty("product"))
                    object.product = message.product;
                if (message.category != null && message.hasOwnProperty("category"))
                    object.category = message.category;
                if (message.cta != null && message.hasOwnProperty("cta"))
                    object.cta = message.cta;
                return object;
            };

            /**
             * Converts this Notification to JSON.
             * @function toJSON
             * @memberof api.notification.Notification
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Notification.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Notification
             * @function getTypeUrl
             * @memberof api.notification.Notification
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Notification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.notification.Notification";
            };

            return Notification;
        })();

        notification.NotificationRequest = (function() {

            /**
             * Properties of a NotificationRequest.
             * @memberof api.notification
             * @interface INotificationRequest
             * @property {api.notification.INotification|null} [notification] NotificationRequest notification
             */

            /**
             * Constructs a new NotificationRequest.
             * @memberof api.notification
             * @classdesc Represents a NotificationRequest.
             * @implements INotificationRequest
             * @constructor
             * @param {api.notification.INotificationRequest=} [properties] Properties to set
             */
            function NotificationRequest(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NotificationRequest notification.
             * @member {api.notification.INotification|null|undefined} notification
             * @memberof api.notification.NotificationRequest
             * @instance
             */
            NotificationRequest.prototype.notification = null;

            /**
             * Creates a new NotificationRequest instance using the specified properties.
             * @function create
             * @memberof api.notification.NotificationRequest
             * @static
             * @param {api.notification.INotificationRequest=} [properties] Properties to set
             * @returns {api.notification.NotificationRequest} NotificationRequest instance
             */
            NotificationRequest.create = function create(properties) {
                return new NotificationRequest(properties);
            };

            /**
             * Encodes the specified NotificationRequest message. Does not implicitly {@link api.notification.NotificationRequest.verify|verify} messages.
             * @function encode
             * @memberof api.notification.NotificationRequest
             * @static
             * @param {api.notification.INotificationRequest} message NotificationRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotificationRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.notification != null && Object.hasOwnProperty.call(message, "notification"))
                    $root.api.notification.Notification.encode(message.notification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NotificationRequest message, length delimited. Does not implicitly {@link api.notification.NotificationRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.notification.NotificationRequest
             * @static
             * @param {api.notification.INotificationRequest} message NotificationRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotificationRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NotificationRequest message from the specified reader or buffer.
             * @function decode
             * @memberof api.notification.NotificationRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.notification.NotificationRequest} NotificationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotificationRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.notification.NotificationRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.notification = $root.api.notification.Notification.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NotificationRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.notification.NotificationRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.notification.NotificationRequest} NotificationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotificationRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotificationRequest message.
             * @function verify
             * @memberof api.notification.NotificationRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NotificationRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.notification != null && message.hasOwnProperty("notification")) {
                    let error = $root.api.notification.Notification.verify(message.notification);
                    if (error)
                        return "notification." + error;
                }
                return null;
            };

            /**
             * Creates a NotificationRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.notification.NotificationRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.notification.NotificationRequest} NotificationRequest
             */
            NotificationRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.api.notification.NotificationRequest)
                    return object;
                let message = new $root.api.notification.NotificationRequest();
                if (object.notification != null) {
                    if (typeof object.notification !== "object")
                        throw TypeError(".api.notification.NotificationRequest.notification: object expected");
                    message.notification = $root.api.notification.Notification.fromObject(object.notification);
                }
                return message;
            };

            /**
             * Creates a plain object from a NotificationRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.notification.NotificationRequest
             * @static
             * @param {api.notification.NotificationRequest} message NotificationRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotificationRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.notification = null;
                if (message.notification != null && message.hasOwnProperty("notification"))
                    object.notification = $root.api.notification.Notification.toObject(message.notification, options);
                return object;
            };

            /**
             * Converts this NotificationRequest to JSON.
             * @function toJSON
             * @memberof api.notification.NotificationRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NotificationRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NotificationRequest
             * @function getTypeUrl
             * @memberof api.notification.NotificationRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NotificationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.notification.NotificationRequest";
            };

            return NotificationRequest;
        })();

        notification.NotificationResponse = (function() {

            /**
             * Properties of a NotificationResponse.
             * @memberof api.notification
             * @interface INotificationResponse
             * @property {google.rpc.IStatus|null} [status] NotificationResponse status
             * @property {google.rpc.IBadRequest|null} [error] NotificationResponse error
             */

            /**
             * Constructs a new NotificationResponse.
             * @memberof api.notification
             * @classdesc Represents a NotificationResponse.
             * @implements INotificationResponse
             * @constructor
             * @param {api.notification.INotificationResponse=} [properties] Properties to set
             */
            function NotificationResponse(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NotificationResponse status.
             * @member {google.rpc.IStatus|null|undefined} status
             * @memberof api.notification.NotificationResponse
             * @instance
             */
            NotificationResponse.prototype.status = null;

            /**
             * NotificationResponse error.
             * @member {google.rpc.IBadRequest|null|undefined} error
             * @memberof api.notification.NotificationResponse
             * @instance
             */
            NotificationResponse.prototype.error = null;

            // OneOf field names bound to virtual getters and setters
            let $oneOfFields;

            /**
             * NotificationResponse _error.
             * @member {"error"|undefined} _error
             * @memberof api.notification.NotificationResponse
             * @instance
             */
            Object.defineProperty(NotificationResponse.prototype, "_error", {
                get: $util.oneOfGetter($oneOfFields = ["error"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new NotificationResponse instance using the specified properties.
             * @function create
             * @memberof api.notification.NotificationResponse
             * @static
             * @param {api.notification.INotificationResponse=} [properties] Properties to set
             * @returns {api.notification.NotificationResponse} NotificationResponse instance
             */
            NotificationResponse.create = function create(properties) {
                return new NotificationResponse(properties);
            };

            /**
             * Encodes the specified NotificationResponse message. Does not implicitly {@link api.notification.NotificationResponse.verify|verify} messages.
             * @function encode
             * @memberof api.notification.NotificationResponse
             * @static
             * @param {api.notification.INotificationResponse} message NotificationResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotificationResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                    $root.google.rpc.Status.encode(message.status, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                    $root.google.rpc.BadRequest.encode(message.error, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified NotificationResponse message, length delimited. Does not implicitly {@link api.notification.NotificationResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof api.notification.NotificationResponse
             * @static
             * @param {api.notification.INotificationResponse} message NotificationResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NotificationResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NotificationResponse message from the specified reader or buffer.
             * @function decode
             * @memberof api.notification.NotificationResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {api.notification.NotificationResponse} NotificationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotificationResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.api.notification.NotificationResponse();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.status = $root.google.rpc.Status.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.error = $root.google.rpc.BadRequest.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a NotificationResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof api.notification.NotificationResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {api.notification.NotificationResponse} NotificationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NotificationResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NotificationResponse message.
             * @function verify
             * @memberof api.notification.NotificationResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NotificationResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                let properties = {};
                if (message.status != null && message.hasOwnProperty("status")) {
                    let error = $root.google.rpc.Status.verify(message.status);
                    if (error)
                        return "status." + error;
                }
                if (message.error != null && message.hasOwnProperty("error")) {
                    properties._error = 1;
                    {
                        let error = $root.google.rpc.BadRequest.verify(message.error);
                        if (error)
                            return "error." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a NotificationResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof api.notification.NotificationResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {api.notification.NotificationResponse} NotificationResponse
             */
            NotificationResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.api.notification.NotificationResponse)
                    return object;
                let message = new $root.api.notification.NotificationResponse();
                if (object.status != null) {
                    if (typeof object.status !== "object")
                        throw TypeError(".api.notification.NotificationResponse.status: object expected");
                    message.status = $root.google.rpc.Status.fromObject(object.status);
                }
                if (object.error != null) {
                    if (typeof object.error !== "object")
                        throw TypeError(".api.notification.NotificationResponse.error: object expected");
                    message.error = $root.google.rpc.BadRequest.fromObject(object.error);
                }
                return message;
            };

            /**
             * Creates a plain object from a NotificationResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof api.notification.NotificationResponse
             * @static
             * @param {api.notification.NotificationResponse} message NotificationResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NotificationResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.status = null;
                if (message.status != null && message.hasOwnProperty("status"))
                    object.status = $root.google.rpc.Status.toObject(message.status, options);
                if (message.error != null && message.hasOwnProperty("error")) {
                    object.error = $root.google.rpc.BadRequest.toObject(message.error, options);
                    if (options.oneofs)
                        object._error = "error";
                }
                return object;
            };

            /**
             * Converts this NotificationResponse to JSON.
             * @function toJSON
             * @memberof api.notification.NotificationResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NotificationResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NotificationResponse
             * @function getTypeUrl
             * @memberof api.notification.NotificationResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NotificationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/api.notification.NotificationResponse";
            };

            return NotificationResponse;
        })();

        return notification;
    })();

    return api;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Duration = (function() {

            /**
             * Properties of a Duration.
             * @memberof google.protobuf
             * @interface IDuration
             * @property {number|Long|null} [seconds] Duration seconds
             * @property {number|null} [nanos] Duration nanos
             */

            /**
             * Constructs a new Duration.
             * @memberof google.protobuf
             * @classdesc Represents a Duration.
             * @implements IDuration
             * @constructor
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             */
            function Duration(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Duration seconds.
             * @member {number|Long} seconds
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Duration nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Duration
             * @instance
             */
            Duration.prototype.nanos = 0;

            /**
             * Creates a new Duration instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration=} [properties] Properties to set
             * @returns {google.protobuf.Duration} Duration instance
             */
            Duration.create = function create(properties) {
                return new Duration(properties);
            };

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.IDuration} message Duration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Duration.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Duration();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.seconds = reader.int64();
                            break;
                        }
                    case 2: {
                            message.nanos = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Duration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Duration} Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Duration.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Duration message.
             * @function verify
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Duration.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Duration} Duration
             */
            Duration.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Duration)
                    return object;
                let message = new $root.google.protobuf.Duration();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Duration
             * @static
             * @param {google.protobuf.Duration} message Duration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Duration.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Duration to JSON.
             * @function toJSON
             * @memberof google.protobuf.Duration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Duration.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Duration
             * @function getTypeUrl
             * @memberof google.protobuf.Duration
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Duration.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Duration";
            };

            return Duration;
        })();

        protobuf.Any = (function() {

            /**
             * Properties of an Any.
             * @memberof google.protobuf
             * @interface IAny
             * @property {string|null} [type_url] Any type_url
             * @property {Uint8Array|null} [value] Any value
             */

            /**
             * Constructs a new Any.
             * @memberof google.protobuf
             * @classdesc Represents an Any.
             * @implements IAny
             * @constructor
             * @param {google.protobuf.IAny=} [properties] Properties to set
             */
            function Any(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Any type_url.
             * @member {string} type_url
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.type_url = "";

            /**
             * Any value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.Any
             * @instance
             */
            Any.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new Any instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny=} [properties] Properties to set
             * @returns {google.protobuf.Any} Any instance
             */
            Any.create = function create(properties) {
                return new Any(properties);
            };

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.type_url != null && Object.hasOwnProperty.call(message, "type_url"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.type_url);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.IAny} message Any message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Any.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Any();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.type_url = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Any
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Any} Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Any.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Any message.
             * @function verify
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Any.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    if (!$util.isString(message.type_url))
                        return "type_url: string expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Any
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Any} Any
             */
            Any.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Any)
                    return object;
                let message = new $root.google.protobuf.Any();
                if (object.type_url != null)
                    message.type_url = String(object.type_url);
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Any
             * @static
             * @param {google.protobuf.Any} message Any
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Any.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.type_url = "";
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                }
                if (message.type_url != null && message.hasOwnProperty("type_url"))
                    object.type_url = message.type_url;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this Any to JSON.
             * @function toJSON
             * @memberof google.protobuf.Any
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Any.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Any
             * @function getTypeUrl
             * @memberof google.protobuf.Any
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Any.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Any";
            };

            return Any;
        })();

        return protobuf;
    })();

    google.rpc = (function() {

        /**
         * Namespace rpc.
         * @memberof google
         * @namespace
         */
        const rpc = {};

        rpc.RetryInfo = (function() {

            /**
             * Properties of a RetryInfo.
             * @memberof google.rpc
             * @interface IRetryInfo
             * @property {google.protobuf.IDuration|null} [retryDelay] RetryInfo retryDelay
             */

            /**
             * Constructs a new RetryInfo.
             * @memberof google.rpc
             * @classdesc Represents a RetryInfo.
             * @implements IRetryInfo
             * @constructor
             * @param {google.rpc.IRetryInfo=} [properties] Properties to set
             */
            function RetryInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RetryInfo retryDelay.
             * @member {google.protobuf.IDuration|null|undefined} retryDelay
             * @memberof google.rpc.RetryInfo
             * @instance
             */
            RetryInfo.prototype.retryDelay = null;

            /**
             * Creates a new RetryInfo instance using the specified properties.
             * @function create
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {google.rpc.IRetryInfo=} [properties] Properties to set
             * @returns {google.rpc.RetryInfo} RetryInfo instance
             */
            RetryInfo.create = function create(properties) {
                return new RetryInfo(properties);
            };

            /**
             * Encodes the specified RetryInfo message. Does not implicitly {@link google.rpc.RetryInfo.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {google.rpc.IRetryInfo} message RetryInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RetryInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.retryDelay != null && Object.hasOwnProperty.call(message, "retryDelay"))
                    $root.google.protobuf.Duration.encode(message.retryDelay, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RetryInfo message, length delimited. Does not implicitly {@link google.rpc.RetryInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {google.rpc.IRetryInfo} message RetryInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RetryInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RetryInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.RetryInfo} RetryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RetryInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.RetryInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.retryDelay = $root.google.protobuf.Duration.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RetryInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.RetryInfo} RetryInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RetryInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RetryInfo message.
             * @function verify
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RetryInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.retryDelay != null && message.hasOwnProperty("retryDelay")) {
                    let error = $root.google.protobuf.Duration.verify(message.retryDelay);
                    if (error)
                        return "retryDelay." + error;
                }
                return null;
            };

            /**
             * Creates a RetryInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.RetryInfo} RetryInfo
             */
            RetryInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.RetryInfo)
                    return object;
                let message = new $root.google.rpc.RetryInfo();
                if (object.retryDelay != null) {
                    if (typeof object.retryDelay !== "object")
                        throw TypeError(".google.rpc.RetryInfo.retryDelay: object expected");
                    message.retryDelay = $root.google.protobuf.Duration.fromObject(object.retryDelay);
                }
                return message;
            };

            /**
             * Creates a plain object from a RetryInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {google.rpc.RetryInfo} message RetryInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RetryInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.retryDelay = null;
                if (message.retryDelay != null && message.hasOwnProperty("retryDelay"))
                    object.retryDelay = $root.google.protobuf.Duration.toObject(message.retryDelay, options);
                return object;
            };

            /**
             * Converts this RetryInfo to JSON.
             * @function toJSON
             * @memberof google.rpc.RetryInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RetryInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RetryInfo
             * @function getTypeUrl
             * @memberof google.rpc.RetryInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RetryInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.RetryInfo";
            };

            return RetryInfo;
        })();

        rpc.DebugInfo = (function() {

            /**
             * Properties of a DebugInfo.
             * @memberof google.rpc
             * @interface IDebugInfo
             * @property {Array.<string>|null} [stackEntries] DebugInfo stackEntries
             * @property {string|null} [detail] DebugInfo detail
             */

            /**
             * Constructs a new DebugInfo.
             * @memberof google.rpc
             * @classdesc Represents a DebugInfo.
             * @implements IDebugInfo
             * @constructor
             * @param {google.rpc.IDebugInfo=} [properties] Properties to set
             */
            function DebugInfo(properties) {
                this.stackEntries = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DebugInfo stackEntries.
             * @member {Array.<string>} stackEntries
             * @memberof google.rpc.DebugInfo
             * @instance
             */
            DebugInfo.prototype.stackEntries = $util.emptyArray;

            /**
             * DebugInfo detail.
             * @member {string} detail
             * @memberof google.rpc.DebugInfo
             * @instance
             */
            DebugInfo.prototype.detail = "";

            /**
             * Creates a new DebugInfo instance using the specified properties.
             * @function create
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {google.rpc.IDebugInfo=} [properties] Properties to set
             * @returns {google.rpc.DebugInfo} DebugInfo instance
             */
            DebugInfo.create = function create(properties) {
                return new DebugInfo(properties);
            };

            /**
             * Encodes the specified DebugInfo message. Does not implicitly {@link google.rpc.DebugInfo.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {google.rpc.IDebugInfo} message DebugInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DebugInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.stackEntries != null && message.stackEntries.length)
                    for (let i = 0; i < message.stackEntries.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.stackEntries[i]);
                if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.detail);
                return writer;
            };

            /**
             * Encodes the specified DebugInfo message, length delimited. Does not implicitly {@link google.rpc.DebugInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {google.rpc.IDebugInfo} message DebugInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DebugInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DebugInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.DebugInfo} DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DebugInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.DebugInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.stackEntries && message.stackEntries.length))
                                message.stackEntries = [];
                            message.stackEntries.push(reader.string());
                            break;
                        }
                    case 2: {
                            message.detail = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DebugInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.DebugInfo} DebugInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DebugInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DebugInfo message.
             * @function verify
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DebugInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.stackEntries != null && message.hasOwnProperty("stackEntries")) {
                    if (!Array.isArray(message.stackEntries))
                        return "stackEntries: array expected";
                    for (let i = 0; i < message.stackEntries.length; ++i)
                        if (!$util.isString(message.stackEntries[i]))
                            return "stackEntries: string[] expected";
                }
                if (message.detail != null && message.hasOwnProperty("detail"))
                    if (!$util.isString(message.detail))
                        return "detail: string expected";
                return null;
            };

            /**
             * Creates a DebugInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.DebugInfo} DebugInfo
             */
            DebugInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.DebugInfo)
                    return object;
                let message = new $root.google.rpc.DebugInfo();
                if (object.stackEntries) {
                    if (!Array.isArray(object.stackEntries))
                        throw TypeError(".google.rpc.DebugInfo.stackEntries: array expected");
                    message.stackEntries = [];
                    for (let i = 0; i < object.stackEntries.length; ++i)
                        message.stackEntries[i] = String(object.stackEntries[i]);
                }
                if (object.detail != null)
                    message.detail = String(object.detail);
                return message;
            };

            /**
             * Creates a plain object from a DebugInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {google.rpc.DebugInfo} message DebugInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DebugInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.stackEntries = [];
                if (options.defaults)
                    object.detail = "";
                if (message.stackEntries && message.stackEntries.length) {
                    object.stackEntries = [];
                    for (let j = 0; j < message.stackEntries.length; ++j)
                        object.stackEntries[j] = message.stackEntries[j];
                }
                if (message.detail != null && message.hasOwnProperty("detail"))
                    object.detail = message.detail;
                return object;
            };

            /**
             * Converts this DebugInfo to JSON.
             * @function toJSON
             * @memberof google.rpc.DebugInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DebugInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DebugInfo
             * @function getTypeUrl
             * @memberof google.rpc.DebugInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DebugInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.DebugInfo";
            };

            return DebugInfo;
        })();

        rpc.QuotaFailure = (function() {

            /**
             * Properties of a QuotaFailure.
             * @memberof google.rpc
             * @interface IQuotaFailure
             * @property {Array.<google.rpc.QuotaFailure.IViolation>|null} [violations] QuotaFailure violations
             */

            /**
             * Constructs a new QuotaFailure.
             * @memberof google.rpc
             * @classdesc Represents a QuotaFailure.
             * @implements IQuotaFailure
             * @constructor
             * @param {google.rpc.IQuotaFailure=} [properties] Properties to set
             */
            function QuotaFailure(properties) {
                this.violations = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * QuotaFailure violations.
             * @member {Array.<google.rpc.QuotaFailure.IViolation>} violations
             * @memberof google.rpc.QuotaFailure
             * @instance
             */
            QuotaFailure.prototype.violations = $util.emptyArray;

            /**
             * Creates a new QuotaFailure instance using the specified properties.
             * @function create
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {google.rpc.IQuotaFailure=} [properties] Properties to set
             * @returns {google.rpc.QuotaFailure} QuotaFailure instance
             */
            QuotaFailure.create = function create(properties) {
                return new QuotaFailure(properties);
            };

            /**
             * Encodes the specified QuotaFailure message. Does not implicitly {@link google.rpc.QuotaFailure.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {google.rpc.IQuotaFailure} message QuotaFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QuotaFailure.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.violations != null && message.violations.length)
                    for (let i = 0; i < message.violations.length; ++i)
                        $root.google.rpc.QuotaFailure.Violation.encode(message.violations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified QuotaFailure message, length delimited. Does not implicitly {@link google.rpc.QuotaFailure.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {google.rpc.IQuotaFailure} message QuotaFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            QuotaFailure.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a QuotaFailure message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.QuotaFailure} QuotaFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QuotaFailure.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.QuotaFailure();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.violations && message.violations.length))
                                message.violations = [];
                            message.violations.push($root.google.rpc.QuotaFailure.Violation.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a QuotaFailure message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.QuotaFailure} QuotaFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            QuotaFailure.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a QuotaFailure message.
             * @function verify
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            QuotaFailure.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.violations != null && message.hasOwnProperty("violations")) {
                    if (!Array.isArray(message.violations))
                        return "violations: array expected";
                    for (let i = 0; i < message.violations.length; ++i) {
                        let error = $root.google.rpc.QuotaFailure.Violation.verify(message.violations[i]);
                        if (error)
                            return "violations." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a QuotaFailure message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.QuotaFailure} QuotaFailure
             */
            QuotaFailure.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.QuotaFailure)
                    return object;
                let message = new $root.google.rpc.QuotaFailure();
                if (object.violations) {
                    if (!Array.isArray(object.violations))
                        throw TypeError(".google.rpc.QuotaFailure.violations: array expected");
                    message.violations = [];
                    for (let i = 0; i < object.violations.length; ++i) {
                        if (typeof object.violations[i] !== "object")
                            throw TypeError(".google.rpc.QuotaFailure.violations: object expected");
                        message.violations[i] = $root.google.rpc.QuotaFailure.Violation.fromObject(object.violations[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a QuotaFailure message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {google.rpc.QuotaFailure} message QuotaFailure
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            QuotaFailure.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.violations = [];
                if (message.violations && message.violations.length) {
                    object.violations = [];
                    for (let j = 0; j < message.violations.length; ++j)
                        object.violations[j] = $root.google.rpc.QuotaFailure.Violation.toObject(message.violations[j], options);
                }
                return object;
            };

            /**
             * Converts this QuotaFailure to JSON.
             * @function toJSON
             * @memberof google.rpc.QuotaFailure
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            QuotaFailure.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for QuotaFailure
             * @function getTypeUrl
             * @memberof google.rpc.QuotaFailure
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            QuotaFailure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.QuotaFailure";
            };

            QuotaFailure.Violation = (function() {

                /**
                 * Properties of a Violation.
                 * @memberof google.rpc.QuotaFailure
                 * @interface IViolation
                 * @property {string|null} [subject] Violation subject
                 * @property {string|null} [description] Violation description
                 */

                /**
                 * Constructs a new Violation.
                 * @memberof google.rpc.QuotaFailure
                 * @classdesc Represents a Violation.
                 * @implements IViolation
                 * @constructor
                 * @param {google.rpc.QuotaFailure.IViolation=} [properties] Properties to set
                 */
                function Violation(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Violation subject.
                 * @member {string} subject
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @instance
                 */
                Violation.prototype.subject = "";

                /**
                 * Violation description.
                 * @member {string} description
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @instance
                 */
                Violation.prototype.description = "";

                /**
                 * Creates a new Violation instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {google.rpc.QuotaFailure.IViolation=} [properties] Properties to set
                 * @returns {google.rpc.QuotaFailure.Violation} Violation instance
                 */
                Violation.create = function create(properties) {
                    return new Violation(properties);
                };

                /**
                 * Encodes the specified Violation message. Does not implicitly {@link google.rpc.QuotaFailure.Violation.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {google.rpc.QuotaFailure.IViolation} message Violation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Violation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.subject);
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.rpc.QuotaFailure.Violation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {google.rpc.QuotaFailure.IViolation} message Violation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Violation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Violation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.QuotaFailure.Violation} Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Violation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.QuotaFailure.Violation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.subject = reader.string();
                                break;
                            }
                        case 2: {
                                message.description = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Violation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.QuotaFailure.Violation} Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Violation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Violation message.
                 * @function verify
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Violation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.subject != null && message.hasOwnProperty("subject"))
                        if (!$util.isString(message.subject))
                            return "subject: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.QuotaFailure.Violation} Violation
                 */
                Violation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.rpc.QuotaFailure.Violation)
                        return object;
                    let message = new $root.google.rpc.QuotaFailure.Violation();
                    if (object.subject != null)
                        message.subject = String(object.subject);
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from a Violation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {google.rpc.QuotaFailure.Violation} message Violation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Violation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.subject = "";
                        object.description = "";
                    }
                    if (message.subject != null && message.hasOwnProperty("subject"))
                        object.subject = message.subject;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this Violation to JSON.
                 * @function toJSON
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Violation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Violation
                 * @function getTypeUrl
                 * @memberof google.rpc.QuotaFailure.Violation
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Violation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.QuotaFailure.Violation";
                };

                return Violation;
            })();

            return QuotaFailure;
        })();

        rpc.ErrorInfo = (function() {

            /**
             * Properties of an ErrorInfo.
             * @memberof google.rpc
             * @interface IErrorInfo
             * @property {string|null} [reason] ErrorInfo reason
             * @property {string|null} [domain] ErrorInfo domain
             * @property {Object.<string,string>|null} [metadata] ErrorInfo metadata
             */

            /**
             * Constructs a new ErrorInfo.
             * @memberof google.rpc
             * @classdesc Represents an ErrorInfo.
             * @implements IErrorInfo
             * @constructor
             * @param {google.rpc.IErrorInfo=} [properties] Properties to set
             */
            function ErrorInfo(properties) {
                this.metadata = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ErrorInfo reason.
             * @member {string} reason
             * @memberof google.rpc.ErrorInfo
             * @instance
             */
            ErrorInfo.prototype.reason = "";

            /**
             * ErrorInfo domain.
             * @member {string} domain
             * @memberof google.rpc.ErrorInfo
             * @instance
             */
            ErrorInfo.prototype.domain = "";

            /**
             * ErrorInfo metadata.
             * @member {Object.<string,string>} metadata
             * @memberof google.rpc.ErrorInfo
             * @instance
             */
            ErrorInfo.prototype.metadata = $util.emptyObject;

            /**
             * Creates a new ErrorInfo instance using the specified properties.
             * @function create
             * @memberof google.rpc.ErrorInfo
             * @static
             * @param {google.rpc.IErrorInfo=} [properties] Properties to set
             * @returns {google.rpc.ErrorInfo} ErrorInfo instance
             */
            ErrorInfo.create = function create(properties) {
                return new ErrorInfo(properties);
            };

            /**
             * Encodes the specified ErrorInfo message. Does not implicitly {@link google.rpc.ErrorInfo.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.ErrorInfo
             * @static
             * @param {google.rpc.IErrorInfo} message ErrorInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ErrorInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
                if (message.domain != null && Object.hasOwnProperty.call(message, "domain"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.domain);
                if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                    for (let keys = Object.keys(message.metadata), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.metadata[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ErrorInfo message, length delimited. Does not implicitly {@link google.rpc.ErrorInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.ErrorInfo
             * @static
             * @param {google.rpc.IErrorInfo} message ErrorInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ErrorInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.ErrorInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.ErrorInfo} ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ErrorInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.ErrorInfo(), key, value;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.reason = reader.string();
                            break;
                        }
                    case 2: {
                            message.domain = reader.string();
                            break;
                        }
                    case 3: {
                            if (message.metadata === $util.emptyObject)
                                message.metadata = {};
                            let end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = "";
                            while (reader.pos < end2) {
                                let tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = reader.string();
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.metadata[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an ErrorInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.ErrorInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.ErrorInfo} ErrorInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ErrorInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ErrorInfo message.
             * @function verify
             * @memberof google.rpc.ErrorInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ErrorInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.reason != null && message.hasOwnProperty("reason"))
                    if (!$util.isString(message.reason))
                        return "reason: string expected";
                if (message.domain != null && message.hasOwnProperty("domain"))
                    if (!$util.isString(message.domain))
                        return "domain: string expected";
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    if (!$util.isObject(message.metadata))
                        return "metadata: object expected";
                    let key = Object.keys(message.metadata);
                    for (let i = 0; i < key.length; ++i)
                        if (!$util.isString(message.metadata[key[i]]))
                            return "metadata: string{k:string} expected";
                }
                return null;
            };

            /**
             * Creates an ErrorInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.ErrorInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.ErrorInfo} ErrorInfo
             */
            ErrorInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.ErrorInfo)
                    return object;
                let message = new $root.google.rpc.ErrorInfo();
                if (object.reason != null)
                    message.reason = String(object.reason);
                if (object.domain != null)
                    message.domain = String(object.domain);
                if (object.metadata) {
                    if (typeof object.metadata !== "object")
                        throw TypeError(".google.rpc.ErrorInfo.metadata: object expected");
                    message.metadata = {};
                    for (let keys = Object.keys(object.metadata), i = 0; i < keys.length; ++i)
                        message.metadata[keys[i]] = String(object.metadata[keys[i]]);
                }
                return message;
            };

            /**
             * Creates a plain object from an ErrorInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.ErrorInfo
             * @static
             * @param {google.rpc.ErrorInfo} message ErrorInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ErrorInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.metadata = {};
                if (options.defaults) {
                    object.reason = "";
                    object.domain = "";
                }
                if (message.reason != null && message.hasOwnProperty("reason"))
                    object.reason = message.reason;
                if (message.domain != null && message.hasOwnProperty("domain"))
                    object.domain = message.domain;
                let keys2;
                if (message.metadata && (keys2 = Object.keys(message.metadata)).length) {
                    object.metadata = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.metadata[keys2[j]] = message.metadata[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this ErrorInfo to JSON.
             * @function toJSON
             * @memberof google.rpc.ErrorInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ErrorInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ErrorInfo
             * @function getTypeUrl
             * @memberof google.rpc.ErrorInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ErrorInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.ErrorInfo";
            };

            return ErrorInfo;
        })();

        rpc.PreconditionFailure = (function() {

            /**
             * Properties of a PreconditionFailure.
             * @memberof google.rpc
             * @interface IPreconditionFailure
             * @property {Array.<google.rpc.PreconditionFailure.IViolation>|null} [violations] PreconditionFailure violations
             */

            /**
             * Constructs a new PreconditionFailure.
             * @memberof google.rpc
             * @classdesc Represents a PreconditionFailure.
             * @implements IPreconditionFailure
             * @constructor
             * @param {google.rpc.IPreconditionFailure=} [properties] Properties to set
             */
            function PreconditionFailure(properties) {
                this.violations = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PreconditionFailure violations.
             * @member {Array.<google.rpc.PreconditionFailure.IViolation>} violations
             * @memberof google.rpc.PreconditionFailure
             * @instance
             */
            PreconditionFailure.prototype.violations = $util.emptyArray;

            /**
             * Creates a new PreconditionFailure instance using the specified properties.
             * @function create
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {google.rpc.IPreconditionFailure=} [properties] Properties to set
             * @returns {google.rpc.PreconditionFailure} PreconditionFailure instance
             */
            PreconditionFailure.create = function create(properties) {
                return new PreconditionFailure(properties);
            };

            /**
             * Encodes the specified PreconditionFailure message. Does not implicitly {@link google.rpc.PreconditionFailure.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {google.rpc.IPreconditionFailure} message PreconditionFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PreconditionFailure.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.violations != null && message.violations.length)
                    for (let i = 0; i < message.violations.length; ++i)
                        $root.google.rpc.PreconditionFailure.Violation.encode(message.violations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified PreconditionFailure message, length delimited. Does not implicitly {@link google.rpc.PreconditionFailure.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {google.rpc.IPreconditionFailure} message PreconditionFailure message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PreconditionFailure.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PreconditionFailure message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.PreconditionFailure} PreconditionFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PreconditionFailure.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.PreconditionFailure();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.violations && message.violations.length))
                                message.violations = [];
                            message.violations.push($root.google.rpc.PreconditionFailure.Violation.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PreconditionFailure message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.PreconditionFailure} PreconditionFailure
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PreconditionFailure.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PreconditionFailure message.
             * @function verify
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PreconditionFailure.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.violations != null && message.hasOwnProperty("violations")) {
                    if (!Array.isArray(message.violations))
                        return "violations: array expected";
                    for (let i = 0; i < message.violations.length; ++i) {
                        let error = $root.google.rpc.PreconditionFailure.Violation.verify(message.violations[i]);
                        if (error)
                            return "violations." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a PreconditionFailure message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.PreconditionFailure} PreconditionFailure
             */
            PreconditionFailure.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.PreconditionFailure)
                    return object;
                let message = new $root.google.rpc.PreconditionFailure();
                if (object.violations) {
                    if (!Array.isArray(object.violations))
                        throw TypeError(".google.rpc.PreconditionFailure.violations: array expected");
                    message.violations = [];
                    for (let i = 0; i < object.violations.length; ++i) {
                        if (typeof object.violations[i] !== "object")
                            throw TypeError(".google.rpc.PreconditionFailure.violations: object expected");
                        message.violations[i] = $root.google.rpc.PreconditionFailure.Violation.fromObject(object.violations[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a PreconditionFailure message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {google.rpc.PreconditionFailure} message PreconditionFailure
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PreconditionFailure.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.violations = [];
                if (message.violations && message.violations.length) {
                    object.violations = [];
                    for (let j = 0; j < message.violations.length; ++j)
                        object.violations[j] = $root.google.rpc.PreconditionFailure.Violation.toObject(message.violations[j], options);
                }
                return object;
            };

            /**
             * Converts this PreconditionFailure to JSON.
             * @function toJSON
             * @memberof google.rpc.PreconditionFailure
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PreconditionFailure.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PreconditionFailure
             * @function getTypeUrl
             * @memberof google.rpc.PreconditionFailure
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PreconditionFailure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.PreconditionFailure";
            };

            PreconditionFailure.Violation = (function() {

                /**
                 * Properties of a Violation.
                 * @memberof google.rpc.PreconditionFailure
                 * @interface IViolation
                 * @property {string|null} [type] Violation type
                 * @property {string|null} [subject] Violation subject
                 * @property {string|null} [description] Violation description
                 */

                /**
                 * Constructs a new Violation.
                 * @memberof google.rpc.PreconditionFailure
                 * @classdesc Represents a Violation.
                 * @implements IViolation
                 * @constructor
                 * @param {google.rpc.PreconditionFailure.IViolation=} [properties] Properties to set
                 */
                function Violation(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Violation type.
                 * @member {string} type
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @instance
                 */
                Violation.prototype.type = "";

                /**
                 * Violation subject.
                 * @member {string} subject
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @instance
                 */
                Violation.prototype.subject = "";

                /**
                 * Violation description.
                 * @member {string} description
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @instance
                 */
                Violation.prototype.description = "";

                /**
                 * Creates a new Violation instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {google.rpc.PreconditionFailure.IViolation=} [properties] Properties to set
                 * @returns {google.rpc.PreconditionFailure.Violation} Violation instance
                 */
                Violation.create = function create(properties) {
                    return new Violation(properties);
                };

                /**
                 * Encodes the specified Violation message. Does not implicitly {@link google.rpc.PreconditionFailure.Violation.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {google.rpc.PreconditionFailure.IViolation} message Violation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Violation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
                    if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.subject);
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified Violation message, length delimited. Does not implicitly {@link google.rpc.PreconditionFailure.Violation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {google.rpc.PreconditionFailure.IViolation} message Violation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Violation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Violation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.PreconditionFailure.Violation} Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Violation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.PreconditionFailure.Violation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.type = reader.string();
                                break;
                            }
                        case 2: {
                                message.subject = reader.string();
                                break;
                            }
                        case 3: {
                                message.description = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Violation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.PreconditionFailure.Violation} Violation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Violation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Violation message.
                 * @function verify
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Violation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.type != null && message.hasOwnProperty("type"))
                        if (!$util.isString(message.type))
                            return "type: string expected";
                    if (message.subject != null && message.hasOwnProperty("subject"))
                        if (!$util.isString(message.subject))
                            return "subject: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates a Violation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.PreconditionFailure.Violation} Violation
                 */
                Violation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.rpc.PreconditionFailure.Violation)
                        return object;
                    let message = new $root.google.rpc.PreconditionFailure.Violation();
                    if (object.type != null)
                        message.type = String(object.type);
                    if (object.subject != null)
                        message.subject = String(object.subject);
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from a Violation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {google.rpc.PreconditionFailure.Violation} message Violation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Violation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.type = "";
                        object.subject = "";
                        object.description = "";
                    }
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = message.type;
                    if (message.subject != null && message.hasOwnProperty("subject"))
                        object.subject = message.subject;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this Violation to JSON.
                 * @function toJSON
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Violation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Violation
                 * @function getTypeUrl
                 * @memberof google.rpc.PreconditionFailure.Violation
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Violation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.PreconditionFailure.Violation";
                };

                return Violation;
            })();

            return PreconditionFailure;
        })();

        rpc.BadRequest = (function() {

            /**
             * Properties of a BadRequest.
             * @memberof google.rpc
             * @interface IBadRequest
             * @property {Array.<google.rpc.BadRequest.IFieldViolation>|null} [fieldViolations] BadRequest fieldViolations
             */

            /**
             * Constructs a new BadRequest.
             * @memberof google.rpc
             * @classdesc Represents a BadRequest.
             * @implements IBadRequest
             * @constructor
             * @param {google.rpc.IBadRequest=} [properties] Properties to set
             */
            function BadRequest(properties) {
                this.fieldViolations = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BadRequest fieldViolations.
             * @member {Array.<google.rpc.BadRequest.IFieldViolation>} fieldViolations
             * @memberof google.rpc.BadRequest
             * @instance
             */
            BadRequest.prototype.fieldViolations = $util.emptyArray;

            /**
             * Creates a new BadRequest instance using the specified properties.
             * @function create
             * @memberof google.rpc.BadRequest
             * @static
             * @param {google.rpc.IBadRequest=} [properties] Properties to set
             * @returns {google.rpc.BadRequest} BadRequest instance
             */
            BadRequest.create = function create(properties) {
                return new BadRequest(properties);
            };

            /**
             * Encodes the specified BadRequest message. Does not implicitly {@link google.rpc.BadRequest.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.BadRequest
             * @static
             * @param {google.rpc.IBadRequest} message BadRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BadRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fieldViolations != null && message.fieldViolations.length)
                    for (let i = 0; i < message.fieldViolations.length; ++i)
                        $root.google.rpc.BadRequest.FieldViolation.encode(message.fieldViolations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified BadRequest message, length delimited. Does not implicitly {@link google.rpc.BadRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.BadRequest
             * @static
             * @param {google.rpc.IBadRequest} message BadRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BadRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BadRequest message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.BadRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.BadRequest} BadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BadRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.BadRequest();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.fieldViolations && message.fieldViolations.length))
                                message.fieldViolations = [];
                            message.fieldViolations.push($root.google.rpc.BadRequest.FieldViolation.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BadRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.BadRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.BadRequest} BadRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BadRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BadRequest message.
             * @function verify
             * @memberof google.rpc.BadRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BadRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fieldViolations != null && message.hasOwnProperty("fieldViolations")) {
                    if (!Array.isArray(message.fieldViolations))
                        return "fieldViolations: array expected";
                    for (let i = 0; i < message.fieldViolations.length; ++i) {
                        let error = $root.google.rpc.BadRequest.FieldViolation.verify(message.fieldViolations[i]);
                        if (error)
                            return "fieldViolations." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a BadRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.BadRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.BadRequest} BadRequest
             */
            BadRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.BadRequest)
                    return object;
                let message = new $root.google.rpc.BadRequest();
                if (object.fieldViolations) {
                    if (!Array.isArray(object.fieldViolations))
                        throw TypeError(".google.rpc.BadRequest.fieldViolations: array expected");
                    message.fieldViolations = [];
                    for (let i = 0; i < object.fieldViolations.length; ++i) {
                        if (typeof object.fieldViolations[i] !== "object")
                            throw TypeError(".google.rpc.BadRequest.fieldViolations: object expected");
                        message.fieldViolations[i] = $root.google.rpc.BadRequest.FieldViolation.fromObject(object.fieldViolations[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a BadRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.BadRequest
             * @static
             * @param {google.rpc.BadRequest} message BadRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BadRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.fieldViolations = [];
                if (message.fieldViolations && message.fieldViolations.length) {
                    object.fieldViolations = [];
                    for (let j = 0; j < message.fieldViolations.length; ++j)
                        object.fieldViolations[j] = $root.google.rpc.BadRequest.FieldViolation.toObject(message.fieldViolations[j], options);
                }
                return object;
            };

            /**
             * Converts this BadRequest to JSON.
             * @function toJSON
             * @memberof google.rpc.BadRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BadRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BadRequest
             * @function getTypeUrl
             * @memberof google.rpc.BadRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BadRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.BadRequest";
            };

            BadRequest.FieldViolation = (function() {

                /**
                 * Properties of a FieldViolation.
                 * @memberof google.rpc.BadRequest
                 * @interface IFieldViolation
                 * @property {string|null} [field] FieldViolation field
                 * @property {string|null} [description] FieldViolation description
                 */

                /**
                 * Constructs a new FieldViolation.
                 * @memberof google.rpc.BadRequest
                 * @classdesc Represents a FieldViolation.
                 * @implements IFieldViolation
                 * @constructor
                 * @param {google.rpc.BadRequest.IFieldViolation=} [properties] Properties to set
                 */
                function FieldViolation(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FieldViolation field.
                 * @member {string} field
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @instance
                 */
                FieldViolation.prototype.field = "";

                /**
                 * FieldViolation description.
                 * @member {string} description
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @instance
                 */
                FieldViolation.prototype.description = "";

                /**
                 * Creates a new FieldViolation instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {google.rpc.BadRequest.IFieldViolation=} [properties] Properties to set
                 * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation instance
                 */
                FieldViolation.create = function create(properties) {
                    return new FieldViolation(properties);
                };

                /**
                 * Encodes the specified FieldViolation message. Does not implicitly {@link google.rpc.BadRequest.FieldViolation.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {google.rpc.BadRequest.IFieldViolation} message FieldViolation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldViolation.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.field);
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
                    return writer;
                };

                /**
                 * Encodes the specified FieldViolation message, length delimited. Does not implicitly {@link google.rpc.BadRequest.FieldViolation.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {google.rpc.BadRequest.IFieldViolation} message FieldViolation message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldViolation.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FieldViolation message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldViolation.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.BadRequest.FieldViolation();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.field = reader.string();
                                break;
                            }
                        case 2: {
                                message.description = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FieldViolation message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldViolation.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FieldViolation message.
                 * @function verify
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldViolation.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.field != null && message.hasOwnProperty("field"))
                        if (!$util.isString(message.field))
                            return "field: string expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    return null;
                };

                /**
                 * Creates a FieldViolation message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.BadRequest.FieldViolation} FieldViolation
                 */
                FieldViolation.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.rpc.BadRequest.FieldViolation)
                        return object;
                    let message = new $root.google.rpc.BadRequest.FieldViolation();
                    if (object.field != null)
                        message.field = String(object.field);
                    if (object.description != null)
                        message.description = String(object.description);
                    return message;
                };

                /**
                 * Creates a plain object from a FieldViolation message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {google.rpc.BadRequest.FieldViolation} message FieldViolation
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldViolation.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.field = "";
                        object.description = "";
                    }
                    if (message.field != null && message.hasOwnProperty("field"))
                        object.field = message.field;
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    return object;
                };

                /**
                 * Converts this FieldViolation to JSON.
                 * @function toJSON
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldViolation.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for FieldViolation
                 * @function getTypeUrl
                 * @memberof google.rpc.BadRequest.FieldViolation
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                FieldViolation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.BadRequest.FieldViolation";
                };

                return FieldViolation;
            })();

            return BadRequest;
        })();

        rpc.RequestInfo = (function() {

            /**
             * Properties of a RequestInfo.
             * @memberof google.rpc
             * @interface IRequestInfo
             * @property {string|null} [requestId] RequestInfo requestId
             * @property {string|null} [servingData] RequestInfo servingData
             */

            /**
             * Constructs a new RequestInfo.
             * @memberof google.rpc
             * @classdesc Represents a RequestInfo.
             * @implements IRequestInfo
             * @constructor
             * @param {google.rpc.IRequestInfo=} [properties] Properties to set
             */
            function RequestInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RequestInfo requestId.
             * @member {string} requestId
             * @memberof google.rpc.RequestInfo
             * @instance
             */
            RequestInfo.prototype.requestId = "";

            /**
             * RequestInfo servingData.
             * @member {string} servingData
             * @memberof google.rpc.RequestInfo
             * @instance
             */
            RequestInfo.prototype.servingData = "";

            /**
             * Creates a new RequestInfo instance using the specified properties.
             * @function create
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {google.rpc.IRequestInfo=} [properties] Properties to set
             * @returns {google.rpc.RequestInfo} RequestInfo instance
             */
            RequestInfo.create = function create(properties) {
                return new RequestInfo(properties);
            };

            /**
             * Encodes the specified RequestInfo message. Does not implicitly {@link google.rpc.RequestInfo.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {google.rpc.IRequestInfo} message RequestInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
                if (message.servingData != null && Object.hasOwnProperty.call(message, "servingData"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.servingData);
                return writer;
            };

            /**
             * Encodes the specified RequestInfo message, length delimited. Does not implicitly {@link google.rpc.RequestInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {google.rpc.IRequestInfo} message RequestInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RequestInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RequestInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.RequestInfo} RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.RequestInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.requestId = reader.string();
                            break;
                        }
                    case 2: {
                            message.servingData = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RequestInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.RequestInfo} RequestInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RequestInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RequestInfo message.
             * @function verify
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RequestInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    if (!$util.isString(message.requestId))
                        return "requestId: string expected";
                if (message.servingData != null && message.hasOwnProperty("servingData"))
                    if (!$util.isString(message.servingData))
                        return "servingData: string expected";
                return null;
            };

            /**
             * Creates a RequestInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.RequestInfo} RequestInfo
             */
            RequestInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.RequestInfo)
                    return object;
                let message = new $root.google.rpc.RequestInfo();
                if (object.requestId != null)
                    message.requestId = String(object.requestId);
                if (object.servingData != null)
                    message.servingData = String(object.servingData);
                return message;
            };

            /**
             * Creates a plain object from a RequestInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {google.rpc.RequestInfo} message RequestInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RequestInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.requestId = "";
                    object.servingData = "";
                }
                if (message.requestId != null && message.hasOwnProperty("requestId"))
                    object.requestId = message.requestId;
                if (message.servingData != null && message.hasOwnProperty("servingData"))
                    object.servingData = message.servingData;
                return object;
            };

            /**
             * Converts this RequestInfo to JSON.
             * @function toJSON
             * @memberof google.rpc.RequestInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RequestInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RequestInfo
             * @function getTypeUrl
             * @memberof google.rpc.RequestInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RequestInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.RequestInfo";
            };

            return RequestInfo;
        })();

        rpc.ResourceInfo = (function() {

            /**
             * Properties of a ResourceInfo.
             * @memberof google.rpc
             * @interface IResourceInfo
             * @property {string|null} [resourceType] ResourceInfo resourceType
             * @property {string|null} [resourceName] ResourceInfo resourceName
             * @property {string|null} [owner] ResourceInfo owner
             * @property {string|null} [description] ResourceInfo description
             */

            /**
             * Constructs a new ResourceInfo.
             * @memberof google.rpc
             * @classdesc Represents a ResourceInfo.
             * @implements IResourceInfo
             * @constructor
             * @param {google.rpc.IResourceInfo=} [properties] Properties to set
             */
            function ResourceInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ResourceInfo resourceType.
             * @member {string} resourceType
             * @memberof google.rpc.ResourceInfo
             * @instance
             */
            ResourceInfo.prototype.resourceType = "";

            /**
             * ResourceInfo resourceName.
             * @member {string} resourceName
             * @memberof google.rpc.ResourceInfo
             * @instance
             */
            ResourceInfo.prototype.resourceName = "";

            /**
             * ResourceInfo owner.
             * @member {string} owner
             * @memberof google.rpc.ResourceInfo
             * @instance
             */
            ResourceInfo.prototype.owner = "";

            /**
             * ResourceInfo description.
             * @member {string} description
             * @memberof google.rpc.ResourceInfo
             * @instance
             */
            ResourceInfo.prototype.description = "";

            /**
             * Creates a new ResourceInfo instance using the specified properties.
             * @function create
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {google.rpc.IResourceInfo=} [properties] Properties to set
             * @returns {google.rpc.ResourceInfo} ResourceInfo instance
             */
            ResourceInfo.create = function create(properties) {
                return new ResourceInfo(properties);
            };

            /**
             * Encodes the specified ResourceInfo message. Does not implicitly {@link google.rpc.ResourceInfo.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {google.rpc.IResourceInfo} message ResourceInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResourceInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.resourceType != null && Object.hasOwnProperty.call(message, "resourceType"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceType);
                if (message.resourceName != null && Object.hasOwnProperty.call(message, "resourceName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.resourceName);
                if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.owner);
                if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
                return writer;
            };

            /**
             * Encodes the specified ResourceInfo message, length delimited. Does not implicitly {@link google.rpc.ResourceInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {google.rpc.IResourceInfo} message ResourceInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ResourceInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ResourceInfo message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.ResourceInfo} ResourceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResourceInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.ResourceInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.resourceType = reader.string();
                            break;
                        }
                    case 2: {
                            message.resourceName = reader.string();
                            break;
                        }
                    case 3: {
                            message.owner = reader.string();
                            break;
                        }
                    case 4: {
                            message.description = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ResourceInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.ResourceInfo} ResourceInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ResourceInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ResourceInfo message.
             * @function verify
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ResourceInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.resourceType != null && message.hasOwnProperty("resourceType"))
                    if (!$util.isString(message.resourceType))
                        return "resourceType: string expected";
                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                    if (!$util.isString(message.resourceName))
                        return "resourceName: string expected";
                if (message.owner != null && message.hasOwnProperty("owner"))
                    if (!$util.isString(message.owner))
                        return "owner: string expected";
                if (message.description != null && message.hasOwnProperty("description"))
                    if (!$util.isString(message.description))
                        return "description: string expected";
                return null;
            };

            /**
             * Creates a ResourceInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.ResourceInfo} ResourceInfo
             */
            ResourceInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.ResourceInfo)
                    return object;
                let message = new $root.google.rpc.ResourceInfo();
                if (object.resourceType != null)
                    message.resourceType = String(object.resourceType);
                if (object.resourceName != null)
                    message.resourceName = String(object.resourceName);
                if (object.owner != null)
                    message.owner = String(object.owner);
                if (object.description != null)
                    message.description = String(object.description);
                return message;
            };

            /**
             * Creates a plain object from a ResourceInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {google.rpc.ResourceInfo} message ResourceInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ResourceInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.resourceType = "";
                    object.resourceName = "";
                    object.owner = "";
                    object.description = "";
                }
                if (message.resourceType != null && message.hasOwnProperty("resourceType"))
                    object.resourceType = message.resourceType;
                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                    object.resourceName = message.resourceName;
                if (message.owner != null && message.hasOwnProperty("owner"))
                    object.owner = message.owner;
                if (message.description != null && message.hasOwnProperty("description"))
                    object.description = message.description;
                return object;
            };

            /**
             * Converts this ResourceInfo to JSON.
             * @function toJSON
             * @memberof google.rpc.ResourceInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ResourceInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ResourceInfo
             * @function getTypeUrl
             * @memberof google.rpc.ResourceInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ResourceInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.ResourceInfo";
            };

            return ResourceInfo;
        })();

        rpc.Help = (function() {

            /**
             * Properties of a Help.
             * @memberof google.rpc
             * @interface IHelp
             * @property {Array.<google.rpc.Help.ILink>|null} [links] Help links
             */

            /**
             * Constructs a new Help.
             * @memberof google.rpc
             * @classdesc Represents a Help.
             * @implements IHelp
             * @constructor
             * @param {google.rpc.IHelp=} [properties] Properties to set
             */
            function Help(properties) {
                this.links = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Help links.
             * @member {Array.<google.rpc.Help.ILink>} links
             * @memberof google.rpc.Help
             * @instance
             */
            Help.prototype.links = $util.emptyArray;

            /**
             * Creates a new Help instance using the specified properties.
             * @function create
             * @memberof google.rpc.Help
             * @static
             * @param {google.rpc.IHelp=} [properties] Properties to set
             * @returns {google.rpc.Help} Help instance
             */
            Help.create = function create(properties) {
                return new Help(properties);
            };

            /**
             * Encodes the specified Help message. Does not implicitly {@link google.rpc.Help.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.Help
             * @static
             * @param {google.rpc.IHelp} message Help message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Help.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.links != null && message.links.length)
                    for (let i = 0; i < message.links.length; ++i)
                        $root.google.rpc.Help.Link.encode(message.links[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Help message, length delimited. Does not implicitly {@link google.rpc.Help.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.Help
             * @static
             * @param {google.rpc.IHelp} message Help message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Help.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Help message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.Help
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.Help} Help
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Help.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Help();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.links && message.links.length))
                                message.links = [];
                            message.links.push($root.google.rpc.Help.Link.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Help message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.Help
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.Help} Help
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Help.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Help message.
             * @function verify
             * @memberof google.rpc.Help
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Help.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.links != null && message.hasOwnProperty("links")) {
                    if (!Array.isArray(message.links))
                        return "links: array expected";
                    for (let i = 0; i < message.links.length; ++i) {
                        let error = $root.google.rpc.Help.Link.verify(message.links[i]);
                        if (error)
                            return "links." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Help message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.Help
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.Help} Help
             */
            Help.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.Help)
                    return object;
                let message = new $root.google.rpc.Help();
                if (object.links) {
                    if (!Array.isArray(object.links))
                        throw TypeError(".google.rpc.Help.links: array expected");
                    message.links = [];
                    for (let i = 0; i < object.links.length; ++i) {
                        if (typeof object.links[i] !== "object")
                            throw TypeError(".google.rpc.Help.links: object expected");
                        message.links[i] = $root.google.rpc.Help.Link.fromObject(object.links[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Help message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.Help
             * @static
             * @param {google.rpc.Help} message Help
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Help.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.links = [];
                if (message.links && message.links.length) {
                    object.links = [];
                    for (let j = 0; j < message.links.length; ++j)
                        object.links[j] = $root.google.rpc.Help.Link.toObject(message.links[j], options);
                }
                return object;
            };

            /**
             * Converts this Help to JSON.
             * @function toJSON
             * @memberof google.rpc.Help
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Help.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Help
             * @function getTypeUrl
             * @memberof google.rpc.Help
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Help.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.Help";
            };

            Help.Link = (function() {

                /**
                 * Properties of a Link.
                 * @memberof google.rpc.Help
                 * @interface ILink
                 * @property {string|null} [description] Link description
                 * @property {string|null} [url] Link url
                 */

                /**
                 * Constructs a new Link.
                 * @memberof google.rpc.Help
                 * @classdesc Represents a Link.
                 * @implements ILink
                 * @constructor
                 * @param {google.rpc.Help.ILink=} [properties] Properties to set
                 */
                function Link(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Link description.
                 * @member {string} description
                 * @memberof google.rpc.Help.Link
                 * @instance
                 */
                Link.prototype.description = "";

                /**
                 * Link url.
                 * @member {string} url
                 * @memberof google.rpc.Help.Link
                 * @instance
                 */
                Link.prototype.url = "";

                /**
                 * Creates a new Link instance using the specified properties.
                 * @function create
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {google.rpc.Help.ILink=} [properties] Properties to set
                 * @returns {google.rpc.Help.Link} Link instance
                 */
                Link.create = function create(properties) {
                    return new Link(properties);
                };

                /**
                 * Encodes the specified Link message. Does not implicitly {@link google.rpc.Help.Link.verify|verify} messages.
                 * @function encode
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {google.rpc.Help.ILink} message Link message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Link.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.description);
                    if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                    return writer;
                };

                /**
                 * Encodes the specified Link message, length delimited. Does not implicitly {@link google.rpc.Help.Link.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {google.rpc.Help.ILink} message Link message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Link.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Link message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.rpc.Help.Link} Link
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Link.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Help.Link();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.description = reader.string();
                                break;
                            }
                        case 2: {
                                message.url = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Link message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.rpc.Help.Link} Link
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Link.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Link message.
                 * @function verify
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Link.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.description != null && message.hasOwnProperty("description"))
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    if (message.url != null && message.hasOwnProperty("url"))
                        if (!$util.isString(message.url))
                            return "url: string expected";
                    return null;
                };

                /**
                 * Creates a Link message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.rpc.Help.Link} Link
                 */
                Link.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.rpc.Help.Link)
                        return object;
                    let message = new $root.google.rpc.Help.Link();
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.url != null)
                        message.url = String(object.url);
                    return message;
                };

                /**
                 * Creates a plain object from a Link message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {google.rpc.Help.Link} message Link
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Link.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.description = "";
                        object.url = "";
                    }
                    if (message.description != null && message.hasOwnProperty("description"))
                        object.description = message.description;
                    if (message.url != null && message.hasOwnProperty("url"))
                        object.url = message.url;
                    return object;
                };

                /**
                 * Converts this Link to JSON.
                 * @function toJSON
                 * @memberof google.rpc.Help.Link
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Link.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Link
                 * @function getTypeUrl
                 * @memberof google.rpc.Help.Link
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Link.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.rpc.Help.Link";
                };

                return Link;
            })();

            return Help;
        })();

        rpc.LocalizedMessage = (function() {

            /**
             * Properties of a LocalizedMessage.
             * @memberof google.rpc
             * @interface ILocalizedMessage
             * @property {string|null} [locale] LocalizedMessage locale
             * @property {string|null} [message] LocalizedMessage message
             */

            /**
             * Constructs a new LocalizedMessage.
             * @memberof google.rpc
             * @classdesc Represents a LocalizedMessage.
             * @implements ILocalizedMessage
             * @constructor
             * @param {google.rpc.ILocalizedMessage=} [properties] Properties to set
             */
            function LocalizedMessage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LocalizedMessage locale.
             * @member {string} locale
             * @memberof google.rpc.LocalizedMessage
             * @instance
             */
            LocalizedMessage.prototype.locale = "";

            /**
             * LocalizedMessage message.
             * @member {string} message
             * @memberof google.rpc.LocalizedMessage
             * @instance
             */
            LocalizedMessage.prototype.message = "";

            /**
             * Creates a new LocalizedMessage instance using the specified properties.
             * @function create
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {google.rpc.ILocalizedMessage=} [properties] Properties to set
             * @returns {google.rpc.LocalizedMessage} LocalizedMessage instance
             */
            LocalizedMessage.create = function create(properties) {
                return new LocalizedMessage(properties);
            };

            /**
             * Encodes the specified LocalizedMessage message. Does not implicitly {@link google.rpc.LocalizedMessage.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {google.rpc.ILocalizedMessage} message LocalizedMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LocalizedMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.locale != null && Object.hasOwnProperty.call(message, "locale"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.locale);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                return writer;
            };

            /**
             * Encodes the specified LocalizedMessage message, length delimited. Does not implicitly {@link google.rpc.LocalizedMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {google.rpc.ILocalizedMessage} message LocalizedMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LocalizedMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LocalizedMessage message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.LocalizedMessage} LocalizedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LocalizedMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.LocalizedMessage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.locale = reader.string();
                            break;
                        }
                    case 2: {
                            message.message = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LocalizedMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.LocalizedMessage} LocalizedMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LocalizedMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LocalizedMessage message.
             * @function verify
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LocalizedMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.locale != null && message.hasOwnProperty("locale"))
                    if (!$util.isString(message.locale))
                        return "locale: string expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                return null;
            };

            /**
             * Creates a LocalizedMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.LocalizedMessage} LocalizedMessage
             */
            LocalizedMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.LocalizedMessage)
                    return object;
                let message = new $root.google.rpc.LocalizedMessage();
                if (object.locale != null)
                    message.locale = String(object.locale);
                if (object.message != null)
                    message.message = String(object.message);
                return message;
            };

            /**
             * Creates a plain object from a LocalizedMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {google.rpc.LocalizedMessage} message LocalizedMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LocalizedMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.locale = "";
                    object.message = "";
                }
                if (message.locale != null && message.hasOwnProperty("locale"))
                    object.locale = message.locale;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                return object;
            };

            /**
             * Converts this LocalizedMessage to JSON.
             * @function toJSON
             * @memberof google.rpc.LocalizedMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LocalizedMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LocalizedMessage
             * @function getTypeUrl
             * @memberof google.rpc.LocalizedMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LocalizedMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.LocalizedMessage";
            };

            return LocalizedMessage;
        })();

        rpc.Status = (function() {

            /**
             * Properties of a Status.
             * @memberof google.rpc
             * @interface IStatus
             * @property {number|null} [code] Status code
             * @property {string|null} [message] Status message
             * @property {Array.<google.protobuf.IAny>|null} [details] Status details
             */

            /**
             * Constructs a new Status.
             * @memberof google.rpc
             * @classdesc Represents a Status.
             * @implements IStatus
             * @constructor
             * @param {google.rpc.IStatus=} [properties] Properties to set
             */
            function Status(properties) {
                this.details = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Status code.
             * @member {number} code
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.code = 0;

            /**
             * Status message.
             * @member {string} message
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.message = "";

            /**
             * Status details.
             * @member {Array.<google.protobuf.IAny>} details
             * @memberof google.rpc.Status
             * @instance
             */
            Status.prototype.details = $util.emptyArray;

            /**
             * Creates a new Status instance using the specified properties.
             * @function create
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus=} [properties] Properties to set
             * @returns {google.rpc.Status} Status instance
             */
            Status.create = function create(properties) {
                return new Status(properties);
            };

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @function encode
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.details != null && message.details.length)
                    for (let i = 0; i < message.details.length; ++i)
                        $root.google.protobuf.Any.encode(message.details[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.IStatus} message Status message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Status.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @function decode
             * @memberof google.rpc.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.rpc.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.rpc.Status();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.code = reader.int32();
                            break;
                        }
                    case 2: {
                            message.message = reader.string();
                            break;
                        }
                    case 3: {
                            if (!(message.details && message.details.length))
                                message.details = [];
                            message.details.push($root.google.protobuf.Any.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.rpc.Status
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.rpc.Status} Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Status.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Status message.
             * @function verify
             * @memberof google.rpc.Status
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Status.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.details != null && message.hasOwnProperty("details")) {
                    if (!Array.isArray(message.details))
                        return "details: array expected";
                    for (let i = 0; i < message.details.length; ++i) {
                        let error = $root.google.protobuf.Any.verify(message.details[i]);
                        if (error)
                            return "details." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.rpc.Status
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.rpc.Status} Status
             */
            Status.fromObject = function fromObject(object) {
                if (object instanceof $root.google.rpc.Status)
                    return object;
                let message = new $root.google.rpc.Status();
                if (object.code != null)
                    message.code = object.code | 0;
                if (object.message != null)
                    message.message = String(object.message);
                if (object.details) {
                    if (!Array.isArray(object.details))
                        throw TypeError(".google.rpc.Status.details: array expected");
                    message.details = [];
                    for (let i = 0; i < object.details.length; ++i) {
                        if (typeof object.details[i] !== "object")
                            throw TypeError(".google.rpc.Status.details: object expected");
                        message.details[i] = $root.google.protobuf.Any.fromObject(object.details[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.rpc.Status
             * @static
             * @param {google.rpc.Status} message Status
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Status.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.details = [];
                if (options.defaults) {
                    object.code = 0;
                    object.message = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.details && message.details.length) {
                    object.details = [];
                    for (let j = 0; j < message.details.length; ++j)
                        object.details[j] = $root.google.protobuf.Any.toObject(message.details[j], options);
                }
                return object;
            };

            /**
             * Converts this Status to JSON.
             * @function toJSON
             * @memberof google.rpc.Status
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Status.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Status
             * @function getTypeUrl
             * @memberof google.rpc.Status
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.rpc.Status";
            };

            return Status;
        })();

        /**
         * Code enum.
         * @name google.rpc.Code
         * @enum {number}
         * @property {number} OK=0 OK value
         * @property {number} CANCELLED=1 CANCELLED value
         * @property {number} UNKNOWN=2 UNKNOWN value
         * @property {number} INVALID_ARGUMENT=3 INVALID_ARGUMENT value
         * @property {number} DEADLINE_EXCEEDED=4 DEADLINE_EXCEEDED value
         * @property {number} NOT_FOUND=5 NOT_FOUND value
         * @property {number} ALREADY_EXISTS=6 ALREADY_EXISTS value
         * @property {number} PERMISSION_DENIED=7 PERMISSION_DENIED value
         * @property {number} UNAUTHENTICATED=16 UNAUTHENTICATED value
         * @property {number} RESOURCE_EXHAUSTED=8 RESOURCE_EXHAUSTED value
         * @property {number} FAILED_PRECONDITION=9 FAILED_PRECONDITION value
         * @property {number} ABORTED=10 ABORTED value
         * @property {number} OUT_OF_RANGE=11 OUT_OF_RANGE value
         * @property {number} UNIMPLEMENTED=12 UNIMPLEMENTED value
         * @property {number} INTERNAL=13 INTERNAL value
         * @property {number} UNAVAILABLE=14 UNAVAILABLE value
         * @property {number} DATA_LOSS=15 DATA_LOSS value
         */
        rpc.Code = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OK"] = 0;
            values[valuesById[1] = "CANCELLED"] = 1;
            values[valuesById[2] = "UNKNOWN"] = 2;
            values[valuesById[3] = "INVALID_ARGUMENT"] = 3;
            values[valuesById[4] = "DEADLINE_EXCEEDED"] = 4;
            values[valuesById[5] = "NOT_FOUND"] = 5;
            values[valuesById[6] = "ALREADY_EXISTS"] = 6;
            values[valuesById[7] = "PERMISSION_DENIED"] = 7;
            values[valuesById[16] = "UNAUTHENTICATED"] = 16;
            values[valuesById[8] = "RESOURCE_EXHAUSTED"] = 8;
            values[valuesById[9] = "FAILED_PRECONDITION"] = 9;
            values[valuesById[10] = "ABORTED"] = 10;
            values[valuesById[11] = "OUT_OF_RANGE"] = 11;
            values[valuesById[12] = "UNIMPLEMENTED"] = 12;
            values[valuesById[13] = "INTERNAL"] = 13;
            values[valuesById[14] = "UNAVAILABLE"] = 14;
            values[valuesById[15] = "DATA_LOSS"] = 15;
            return values;
        })();

        return rpc;
    })();

    return google;
})();

export { $root as default };
