import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly issuer: string;
  private readonly audience: string;
  private readonly cookie: string;
  constructor(private readonly auth: AuthService, private readonly config: ConfigService) {
    this.audience = config.get('auth0.audience');
    this.issuer = config.get('auth0.issuer');
    this.cookie = config.get('accessToken.cookieName');
  }

  async use(req: any, res: any, next: () => void) {
    try {
      const token = `${req.cookies[this.cookie]}.${req.session.access_token_sign}`;
      const decoded = await this.auth.verify(token, {
        audience: this.audience,
        issuer: this.issuer,
        ignoreExpiration: false,
      });
      req.user = {
        id: decoded.sub,
        permissions: decoded.permissions,
      };
      next();
    } catch (error) {
      throw new ForbiddenException({
        code: 'jwt_error',
        message: error.message,
      });
    }
  }
}