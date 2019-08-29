import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestHandler } from 'express';
import { SessionService } from '../auth/session/session.service';

@Injectable()
export class SessionMiddleware implements NestMiddleware {
    constructor(private readonly session: SessionService) {}

    use: RequestHandler = this.session.handler;
}
