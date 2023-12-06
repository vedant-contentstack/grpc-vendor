// Original file: src/proto/notifications.proto

import type { Options as _notifications_Options, Options__Output as _notifications_Options__Output } from '../notifications/Options';

export interface DeleteNotificationRequest {
  'ids'?: (string)[];
  'options'?: (_notifications_Options | null);
}

export interface DeleteNotificationRequest__Output {
  'ids': (string)[];
  'options': (_notifications_Options__Output | null);
}
