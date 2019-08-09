import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
import { SessionService } from '../auth/session/session.service';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
    constructor(private readonly session: SessionService) {}

    use: RequestHandler = this.session.handler;

    // private session(): () => any {
    //   return cookieSession({
    //     name: this.config.get('session.name'),
    //     keys: this.config.get('keys'),
    //     maxAge: this.config.get('session.maxAge'),
    //     signed: this.config.get('session.signed'),
    //     httpOnly: this.config.get('session.httpOnly'),
    //   });
    // }
}
