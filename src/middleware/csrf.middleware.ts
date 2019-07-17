import { Injectable, NestMiddleware, UseFilters } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import * as csurf from 'csurf';

@Injectable()
export class CsrfMiddleware implements NestMiddleware {
  constructor(private readonly config: ConfigService) {}

  use: () => any = this.csrf();

  private csrf(): () => any {
    /* These are the cookie params where the per-request uid (token secret)
    *  is stored. THIS IS NOT THE CSRF TOKEN TO VALIDATE.
    *  The CSRF token is stored in a different cookie within Middleware
    */
    return csurf({
      cookie: {
        key: 'x-uid', // cookie name to store the per-request uid (token secret). THIS IS NOT THE CSRF TOKEN TO VALIDATE AGAINST
        signed: false,
        httpOnly: true,
        secure: this.config.get('csrf.cookie.secure'),
      },
    });
  }
}
