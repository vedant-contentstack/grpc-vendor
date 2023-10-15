// Original file: src/proto/notifications.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddNotificationRequest as _notifications_AddNotificationRequest, AddNotificationRequest__Output as _notifications_AddNotificationRequest__Output } from '../notifications/AddNotificationRequest';
import type { AddNotificationResponse as _notifications_AddNotificationResponse, AddNotificationResponse__Output as _notifications_AddNotificationResponse__Output } from '../notifications/AddNotificationResponse';
import type { DeleteNotificationRequest as _notifications_DeleteNotificationRequest, DeleteNotificationRequest__Output as _notifications_DeleteNotificationRequest__Output } from '../notifications/DeleteNotificationRequest';
import type { DeleteNotificationResponse as _notifications_DeleteNotificationResponse, DeleteNotificationResponse__Output as _notifications_DeleteNotificationResponse__Output } from '../notifications/DeleteNotificationResponse';

export interface NotificationServiceClient extends grpc.Client {
  AddNotification(argument: _notifications_AddNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notifications_AddNotificationResponse__Output>): grpc.ClientUnaryCall;
  AddNotification(argument: _notifications_AddNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notifications_AddNotificationResponse__Output>): grpc.ClientUnaryCall;
  AddNotification(argument: _notifications_AddNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notifications_AddNotificationResponse__Output>): grpc.ClientUnaryCall;
  AddNotification(argument: _notifications_AddNotificationRequest, callback: grpc.requestCallback<_notifications_AddNotificationResponse__Output>): grpc.ClientUnaryCall;
  addNotification(argument: _notifications_AddNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notifications_AddNotificationResponse__Output>): grpc.ClientUnaryCall;
  addNotification(argument: _notifications_AddNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notifications_AddNotificationResponse__Output>): grpc.ClientUnaryCall;
  addNotification(argument: _notifications_AddNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notifications_AddNotificationResponse__Output>): grpc.ClientUnaryCall;
  addNotification(argument: _notifications_AddNotificationRequest, callback: grpc.requestCallback<_notifications_AddNotificationResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteNotification(argument: _notifications_DeleteNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notifications_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  DeleteNotification(argument: _notifications_DeleteNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notifications_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  DeleteNotification(argument: _notifications_DeleteNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notifications_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  DeleteNotification(argument: _notifications_DeleteNotificationRequest, callback: grpc.requestCallback<_notifications_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  deleteNotification(argument: _notifications_DeleteNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notifications_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  deleteNotification(argument: _notifications_DeleteNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notifications_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  deleteNotification(argument: _notifications_DeleteNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notifications_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  deleteNotification(argument: _notifications_DeleteNotificationRequest, callback: grpc.requestCallback<_notifications_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface NotificationServiceHandlers extends grpc.UntypedServiceImplementation {
  AddNotification: grpc.handleUnaryCall<_notifications_AddNotificationRequest__Output, _notifications_AddNotificationResponse>;
  
  DeleteNotification: grpc.handleUnaryCall<_notifications_DeleteNotificationRequest__Output, _notifications_DeleteNotificationResponse>;
  
}

export interface NotificationServiceDefinition extends grpc.ServiceDefinition {
  AddNotification: MethodDefinition<_notifications_AddNotificationRequest, _notifications_AddNotificationResponse, _notifications_AddNotificationRequest__Output, _notifications_AddNotificationResponse__Output>
  DeleteNotification: MethodDefinition<_notifications_DeleteNotificationRequest, _notifications_DeleteNotificationResponse, _notifications_DeleteNotificationRequest__Output, _notifications_DeleteNotificationResponse__Output>
}
