import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CsrfgenMiddleware implements NestMiddleware {
  constructor(private readonly auth: AuthService) {}

  use(req: any, res: any, next: () => void) {
    if (!req.cookies[this.auth.csrfName]) {
      res.cookie(this.auth.csrfName, req.csrfToken(), { secure: false });
    }
    next();
  }
}
