import { Injectable } from '@nestjs/common';
import * as grpc from '@grpc/grpc-js';
import { NotificationServiceClient } from './proto/notifications_grpc_pb';
import { promisify } from 'util';
import {
  NotificationRequest,
  NotificationResponse,
  Notification,
} from './proto/notifications_pb';

@Injectable()
export class AppService {
  private static notificationsService: NotificationServiceClient;
  private static grpcMetadata: grpc.Metadata;

  constructor() {
    AppService.notificationsService = new NotificationServiceClient(
      `localhost:5001`,
      grpc.credentials.createInsecure(),
    );
    AppService.grpcMetadata = new grpc.Metadata();
    AppService.grpcMetadata.add('vendor', 'de');
    AppService.grpcMetadata.add('vendor_secret', 'de_secret');
    AppService.grpcMetadata.add('requestId', '123-456-789');
  }

  async addNotification(): Promise<any> {
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 5);
    const waitTeamsServiceForReady = promisify(
      AppService.notificationsService.waitForReady,
    ).bind(AppService.notificationsService);

    await waitTeamsServiceForReady(deadline)
      .then((res) => {
        console.log('Connected');
      })
      .catch((err: Error) => {
        console.error(err);
        throw new Error(`Couldn't connect to teams service at localhost:3003`);
      });

    const addNotificationRequest = new NotificationRequest();
    const notification = new Notification();
    notification.setTitle('Usage Exceeded');
    notification.setMessage(
      "<p>Bandwidth usage has exceeded the allocated limit of <b>100TB/month</b>.See<a href='https://app.contentstack.com/'>here</a><script></p>",
    );
    notification.setVendor('DE');
    notification.setResourceUid('blt29e5403a6ea88ea2');
    notification.setScope('org');
    notification.setCategory('TEXT');
    notification.setProduct('CS');

    addNotificationRequest.setNotification(notification);

    const metadata = new grpc.Metadata();
    metadata.merge(AppService.grpcMetadata);

    return new Promise((resolve, reject) => {
      AppService.notificationsService.createNotification(
        addNotificationRequest,
        metadata,
        (err: grpc.ServiceError, response: NotificationResponse) => {
          if (err) {
            return reject(err);
          }
          return resolve(response.toObject().status);
        },
      );
    });
  }
}
