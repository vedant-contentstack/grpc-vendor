import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const service = app.get(AppService);
  try {
    console.log(await service.addNotification());
  } catch (error) {
    console.log(error);
  }
  await app.listen(process.env.PORT);
}
bootstrap();
