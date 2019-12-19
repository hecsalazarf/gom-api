import { Controller, Post, Body, Request, HttpCode, HttpStatus, ValidationPipe, InternalServerErrorException, Logger } from '@nestjs/common';
import { WebPushService } from './web-push.service';
import { SubscriptionDto } from './dto';

@Controller('webpush')
export class WebPushController {
  private readonly logger: Logger;
  constructor(private readonly webpush: WebPushService) {
    this.logger = new Logger(WebPushController.name);
  }

  @Post('subscribe')
  @HttpCode(HttpStatus.CREATED)
  async subscribe(@Body(new ValidationPipe()) subs: SubscriptionDto, @Request() req): Promise<boolean> {
    const log = `${subs.endpoint.slice(-7)} | ${req.ip}`;
    try {
      const res = await this.webpush.addSubscription(req.user.id, subs);
      this.logger.log(`User ${req.user.id} subscribed | ${log}`);
      return res;
    } catch (error) {
      this.logger.error(`User ${req.user.id} could not subscribe| ${log}`);
      this.logger.error(error.message);
      throw new InternalServerErrorException('Subscription could not be stored', 'webpush_subscribe');
    }
  }

  @Post('unsubscribe')
  @HttpCode(HttpStatus.CREATED)
  async unsubscribe(@Body(new ValidationPipe()) subs: SubscriptionDto, @Request() req): Promise<boolean> {
    const log = `${subs.endpoint.slice(-7)} | ${req.ip}`;
    try {
      const res = await this.webpush.removeSubscriptions(req.user.id, [subs.endpoint]);
      this.logger.log(`User ${req.user.id} unsubscribed | ${log}`);
      return res;
    } catch (error) {
      this.logger.error(`User ${req.user.id} could not unsubscribe | ${log}`);
      this.logger.error(error.message);
      throw new InternalServerErrorException('Subscription could not be removed', 'webpush_unsubscribe');
    }
  }
}
