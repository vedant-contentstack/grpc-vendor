// Original file: src/proto/notifications.proto

import type { Options as _notifications_Options, Options__Output as _notifications_Options__Output } from '../notifications/Options';

export interface DeleteNotificationRequest {
  'notificationId'?: (string);
  'options'?: (_notifications_Options | null);
}

export interface DeleteNotificationRequest__Output {
  'notificationId': (string);
  'options': (_notifications_Options__Output | null);
}
