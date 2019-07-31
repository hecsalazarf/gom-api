import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly cookie: string;

  constructor(
    private readonly auth: AuthService,
    private readonly config: ConfigService) {
      this.cookie = config.get('accessToken.cookieName');
  }

  async use(req: any, res: any, next: () => void) {
    try {
      const token = `${req.cookies[this.cookie]}.${req.session.access_token_sign}`;
      const decoded = await this.auth.verify(token);
      req.user = {
        id: decoded.sub,
        ability: this.auth.buildAbility(decoded), // create user ability
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
