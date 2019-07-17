import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class CsrfgenMiddleware implements NestMiddleware {
  private readonly cookieName;
  private readonly cookieOptions;
  constructor(private readonly config: ConfigService) {
    this.cookieName = config.get('csrf.cookie.name');
    this.cookieOptions = {secure:  config.get('csrf.cookie.secure') };
  }

  use(req: any, res: any, next: () => void) {
    if (!req.cookies[this.cookieName]) {
      res.cookie(this.cookieName, req.csrfToken(), this.cookieOptions);
    }
    next();
  }
}
