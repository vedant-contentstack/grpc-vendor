// package: api.notification
// file: notifications.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as notifications_pb from "./notifications_pb";
import * as google_rpc_error_details_pb from "./google/rpc/error_details_pb";
import * as google_rpc_status_pb from "./google/rpc/status_pb";
import * as google_rpc_code_pb from "./google/rpc/code_pb";

interface INotificationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createNotification: INotificationServiceService_ICreateNotification;
}

interface INotificationServiceService_ICreateNotification extends grpc.MethodDefinition<notifications_pb.NotificationRequest, notifications_pb.NotificationResponse> {
    path: "/api.notification.NotificationService/CreateNotification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<notifications_pb.NotificationRequest>;
    requestDeserialize: grpc.deserialize<notifications_pb.NotificationRequest>;
    responseSerialize: grpc.serialize<notifications_pb.NotificationResponse>;
    responseDeserialize: grpc.deserialize<notifications_pb.NotificationResponse>;
}

export const NotificationServiceService: INotificationServiceService;

export interface INotificationServiceServer extends grpc.UntypedServiceImplementation {
    createNotification: grpc.handleUnaryCall<notifications_pb.NotificationRequest, notifications_pb.NotificationResponse>;
}

export interface INotificationServiceClient {
    createNotification(request: notifications_pb.NotificationRequest, callback: (error: grpc.ServiceError | null, response: notifications_pb.NotificationResponse) => void): grpc.ClientUnaryCall;
    createNotification(request: notifications_pb.NotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: notifications_pb.NotificationResponse) => void): grpc.ClientUnaryCall;
    createNotification(request: notifications_pb.NotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: notifications_pb.NotificationResponse) => void): grpc.ClientUnaryCall;
}

export class NotificationServiceClient extends grpc.Client implements INotificationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createNotification(request: notifications_pb.NotificationRequest, callback: (error: grpc.ServiceError | null, response: notifications_pb.NotificationResponse) => void): grpc.ClientUnaryCall;
    public createNotification(request: notifications_pb.NotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: notifications_pb.NotificationResponse) => void): grpc.ClientUnaryCall;
    public createNotification(request: notifications_pb.NotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: notifications_pb.NotificationResponse) => void): grpc.ClientUnaryCall;
}
