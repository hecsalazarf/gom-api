import { Controller, Post, Body, Request, HttpCode, HttpStatus, ValidationPipe } from '@nestjs/common';
import { WebPushService } from './web-push.service';
import { SubscriptionDto } from './dto';

@Controller('webpush')
export class WebPushController {
  constructor(private readonly webpush: WebPushService) {}

  @Post('subscribe')
  @HttpCode(HttpStatus.CREATED)
  async subscribe(@Body(new ValidationPipe()) subs: SubscriptionDto, @Request() req) {
    return await this.webpush.addUserSubscription(req.user.id, subs);
  }

  @Post('unsubscribe')
  @HttpCode(HttpStatus.CREATED)
  async unsubscribe(@Body(new ValidationPipe()) subs: SubscriptionDto, @Request() req) {
    return await this.webpush.removeUserSubscription(req.user.id, subs);
  }
}
