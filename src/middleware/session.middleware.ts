import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import * as cookieSession from 'cookie-session';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
    constructor(private readonly config: ConfigService) {}

    use: () => any = this.session();

    private session(): () => any {
      return cookieSession({
        name: this.config.get('session.name'),
        keys: this.config.get('keys'),
        maxAge: this.config.get('session.maxAge'),
        signed: this.config.get('session.signed'),
        httpOnly: this.config.get('session.httpOnly'),
      });
    }
}
