// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Documentation : https://contentstack.atlassian.net/l/cp/evLNULgA
//
'use strict';
var grpc = require('@grpc/grpc-js');
var notifications_pb = require('./notifications_pb.js');
var google_rpc_error_details_pb = require('./google/rpc/error_details_pb.js');
var google_rpc_status_pb = require('./google/rpc/status_pb.js');
var google_rpc_code_pb = require('./google/rpc/code_pb.js');

function serialize_api_notification_NotificationRequest(arg) {
  if (!(arg instanceof notifications_pb.NotificationRequest)) {
    throw new Error('Expected argument of type api.notification.NotificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_notification_NotificationRequest(buffer_arg) {
  return notifications_pb.NotificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_notification_NotificationResponse(arg) {
  if (!(arg instanceof notifications_pb.NotificationResponse)) {
    throw new Error('Expected argument of type api.notification.NotificationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_notification_NotificationResponse(buffer_arg) {
  return notifications_pb.NotificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NotificationServiceService = exports.NotificationServiceService = {
  createNotification: {
    path: '/api.notification.NotificationService/CreateNotification',
    requestStream: false,
    responseStream: false,
    requestType: notifications_pb.NotificationRequest,
    responseType: notifications_pb.NotificationResponse,
    requestSerialize: serialize_api_notification_NotificationRequest,
    requestDeserialize: deserialize_api_notification_NotificationRequest,
    responseSerialize: serialize_api_notification_NotificationResponse,
    responseDeserialize: deserialize_api_notification_NotificationResponse,
  },
};

exports.NotificationServiceClient = grpc.makeGenericClientConstructor(NotificationServiceService);
