import { Controller, Post, Body, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { WebPushService } from './web-push.service';

@Controller('notification')
export class WebPushController {
  constructor(private readonly webpush: WebPushService) {}

  @Post('subscribe')
  @HttpCode(HttpStatus.CREATED)
  async subscribe(@Body() subs, @Request() req) {
    return await this.webpush.addUserSubscription(req.user.id, subs);
  }

  @Post('unsubscribe')
  @HttpCode(HttpStatus.CREATED)
  async unsubscribe(@Body() subs, @Request() req) {
    return await this.webpush.removeUserSubscription(req.user.id, subs);
  }
}
