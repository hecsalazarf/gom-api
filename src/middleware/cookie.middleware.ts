import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import cookieParser from 'cookie-parser';

@Injectable()
export class CookieMiddleware implements NestMiddleware {
    constructor(private readonly config: ConfigService) {}

    use: () => any = this.cookie();

    private cookie(): () => any {
      return cookieParser(this.config.get('appKey'));
    }
}
