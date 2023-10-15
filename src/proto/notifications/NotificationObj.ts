// Original file: src/proto/notifications.proto


export interface NotificationObj {
  'orgUid'?: (string);
  'title'?: (string);
  'message'?: (string);
  'vendor'?: (string);
  'category'?: (string);
  'cta'?: (string);
  'meta'?: ({[key: string]: string});
}

export interface NotificationObj__Output {
  'orgUid': (string);
  'title': (string);
  'message': (string);
  'vendor': (string);
  'category': (string);
  'cta': (string);
  'meta': ({[key: string]: string});
}
