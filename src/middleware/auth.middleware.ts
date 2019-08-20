import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  constructor(private readonly auth: AuthService) {}

  async use(req: any, res: any, next: () => void) {
    try {
      const token = `${req.cookies[this.auth.accessTokenName]}.${req.session.access_token_sign}`;
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
