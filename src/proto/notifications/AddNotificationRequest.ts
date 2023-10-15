// Original file: src/proto/notifications.proto

import type { NotificationObj as _notifications_NotificationObj, NotificationObj__Output as _notifications_NotificationObj__Output } from '../notifications/NotificationObj';
import type { Options as _notifications_Options, Options__Output as _notifications_Options__Output } from '../notifications/Options';

export interface AddNotificationRequest {
  'notifications'?: (_notifications_NotificationObj)[];
  'options'?: (_notifications_Options | null);
}

export interface AddNotificationRequest__Output {
  'notifications': (_notifications_NotificationObj__Output)[];
  'options': (_notifications_Options__Output | null);
}
