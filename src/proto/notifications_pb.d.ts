// package: api.notification
// file: notifications.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_rpc_error_details_pb from "./google/rpc/error_details_pb";
import * as google_rpc_status_pb from "./google/rpc/status_pb";
import * as google_rpc_code_pb from "./google/rpc/code_pb";

export class Notification extends jspb.Message { 
    getResourceUid(): string;
    setResourceUid(value: string): Notification;
    getTitle(): string;
    setTitle(value: string): Notification;
    getMessage(): string;
    setMessage(value: string): Notification;
    getScope(): string;
    setScope(value: string): Notification;
    getVendor(): string;
    setVendor(value: string): Notification;
    getProduct(): string;
    setProduct(value: string): Notification;
    getCategory(): string;
    setCategory(value: string): Notification;
    getCta(): string;
    setCta(value: string): Notification;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Notification.AsObject;
    static toObject(includeInstance: boolean, msg: Notification): Notification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Notification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Notification;
    static deserializeBinaryFromReader(message: Notification, reader: jspb.BinaryReader): Notification;
}

export namespace Notification {
    export type AsObject = {
        resourceUid: string,
        title: string,
        message: string,
        scope: string,
        vendor: string,
        product: string,
        category: string,
        cta: string,
    }
}

export class NotificationRequest extends jspb.Message { 

    hasNotification(): boolean;
    clearNotification(): void;
    getNotification(): Notification | undefined;
    setNotification(value?: Notification): NotificationRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: NotificationRequest): NotificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotificationRequest;
    static deserializeBinaryFromReader(message: NotificationRequest, reader: jspb.BinaryReader): NotificationRequest;
}

export namespace NotificationRequest {
    export type AsObject = {
        notification?: Notification.AsObject,
    }
}

export class NotificationResponse extends jspb.Message { 

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): google_rpc_status_pb.Status | undefined;
    setStatus(value?: google_rpc_status_pb.Status): NotificationResponse;

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_error_details_pb.BadRequest | undefined;
    setError(value?: google_rpc_error_details_pb.BadRequest): NotificationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NotificationResponse): NotificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotificationResponse;
    static deserializeBinaryFromReader(message: NotificationResponse, reader: jspb.BinaryReader): NotificationResponse;
}

export namespace NotificationResponse {
    export type AsObject = {
        status?: google_rpc_status_pb.Status.AsObject,
        error?: google_rpc_error_details_pb.BadRequest.AsObject,
    }
}
