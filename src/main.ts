import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/notifications';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PROTO_PATH = join(__dirname, '..', './src/proto/notifications.proto');

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
    'localhost:3005',
    grpc.credentials.createInsecure(),
  );

  const meta = new grpc.Metadata();

  client.AddNotification(
    {
      notifications: [{}],
      options: {},
    },
    meta,
    (err, val) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(val);
    },
  );

  await app.listen(3000);
}
bootstrap();
