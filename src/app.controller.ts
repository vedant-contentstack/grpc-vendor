import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/grpc/add')
  async addNotifications(@Req() req: Request, @Res() res: Response) {
    res.status(200).send(await this.appService.addNotification());
  }
}
