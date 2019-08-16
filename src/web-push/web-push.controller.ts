import { Controller, Post, Body, Request, HttpCode, HttpStatus, ValidationPipe, InternalServerErrorException } from '@nestjs/common';
import { WebPushService } from './web-push.service';
import { SubscriptionDto } from './dto';

@Controller('webpush')
export class WebPushController {
  constructor(private readonly webpush: WebPushService) {}

  @Post('subscribe')
  @HttpCode(HttpStatus.CREATED)
  async subscribe(@Body(new ValidationPipe()) subs: SubscriptionDto, @Request() req) {
    try {
      return await this.webpush.addUserSubscription(req.user.id, subs);
    } catch (error) {
      throw new InternalServerErrorException('Subscription could not be stored', 'webpush_subscribe');
    }
  }

  @Post('unsubscribe')
  @HttpCode(HttpStatus.CREATED)
  async unsubscribe(@Body(new ValidationPipe()) subs: SubscriptionDto, @Request() req) {
    try {
      return await this.webpush.removeUserSubscriptions(req.user.id, [subs.endpoint]);
    } catch (error) {
      throw new InternalServerErrorException('Subscription could not be removed', 'webpush_unsubscribe');
    }
  }
}
