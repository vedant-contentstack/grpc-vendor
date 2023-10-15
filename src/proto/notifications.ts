import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { NotificationServiceClient as _notifications_NotificationServiceClient, NotificationServiceDefinition as _notifications_NotificationServiceDefinition } from './notifications/NotificationService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  notifications: {
    AddNotificationRequest: MessageTypeDefinition
    AddNotificationResponse: MessageTypeDefinition
    DeleteNotificationRequest: MessageTypeDefinition
    DeleteNotificationResponse: MessageTypeDefinition
    MessageResponse: MessageTypeDefinition
    NotificationObj: MessageTypeDefinition
    NotificationService: SubtypeConstructor<typeof grpc.Client, _notifications_NotificationServiceClient> & { service: _notifications_NotificationServiceDefinition }
    Options: MessageTypeDefinition
  }
}

