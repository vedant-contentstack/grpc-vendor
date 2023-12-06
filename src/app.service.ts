import { Injectable } from '@nestjs/common';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/notifications';
import { join } from 'path';

@Injectable()
export class AppService {
  async addNotification(): Promise<any> {
    const PROTO_PATH = join(__dirname, 'proto/notifications.proto');

    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });

    const proto = grpc.loadPackageDefinition(
      packageDefinition,
    ) as unknown as ProtoGrpcType;

    const client = new proto.notifications.NotificationService(
      `${process.env.GRPC_URL}:${process.env.GRPC_PORT}`,
      grpc.credentials.createInsecure(),
    );

    const meta = new grpc.Metadata();

    const notifications = [
      {
        title: 'Usage Exceeded',
        message:
          "<p>Bandwidth usage has exceeded the allocated limit of <b>100TB/month</b>.See<a href='https://app.contentstack.com/'>here</a></p>",
        resourceUid: 'blt1b124f60763c1b10',
        scope: 'org',
        vendor: 'CMA',
        product: 'CS',
        category: 'TEXT',
        cta: 'https://app.contentstack.com',
      },
    ];

    return new Promise((resolve, reject) => {
      client.AddNotification(
        {
          notifications,
          options: {
            vendor: 'de',
            vendorSecret: process.env.DE_SECRET,
          },
        },
        meta,
        (err, val) => {
          if (err) {
            return reject(err);
          }
          return resolve(val);
        },
      );
    });
  }
}
