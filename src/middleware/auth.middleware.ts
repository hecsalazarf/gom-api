import { Injectable, NestMiddleware, ForbiddenException, Logger } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly logger: Logger;

  constructor(private readonly auth: AuthService) {
    this.logger = new Logger(AuthMiddleware.name);
  }

  /**
   * Throw error after invalid authentication
   * @param {Error} error Error to be thrown
   */
  private throwError(error: Error): void {
    throw new ForbiddenException({
      code: 'jwt_error',
      message: error.message,
    });
  }

  /**
   * Create context to be used by the GraphQL module
   * @param req Express request
   * @param {any} decoded Decoded token
   */
  private createContext(req: any, decoded: any): void {
    req.user = {
      id: decoded.sub,
      ability: this.auth.buildAbility(decoded), // create user ability
    };
  }

  public async use(req: any, res: any, next: () => void): Promise<void> {
    let token: string;
    try {
      token = `${req.cookies[this.auth.accessTokenName]}.${req.session.access_token_sign}`;
      this.createContext(req, await this.auth.verify(token)); // create context after verifying token
    } catch (error) {
      if (error.name === 'TokenExpiredError' && req.session.refresh_token) {
        // refresh token to have long-lived sessions
        try {
          const refreshed = await this.auth.refreshToken(req.session.refresh_token); // refresh token
          const splitted = this.auth.splitToken(refreshed.access_token);
          Object.defineProperty(req.session, 'access_token_sign', {
            value: splitted.signature, // update session
            enumerable: true,
          });
          res.cookie(this.auth.accessTokenName, splitted.payload, this.auth.accessTokenOptions); // update access token cookie
          const decoded = this.auth.decode(refreshed.access_token);
          this.createContext(req, decoded); // create context
          this.logger.log(`Access token refreshed for user ${decoded.sub} from ${req.ip}`);
        } catch (err) {
          const decoded = this.auth.decode(token);
          this.logger.error(`Cannot refresh token for user ${decoded.sub}`);
          this.logger.error(err.message);
          this.throwError(error);
        }
      } else {
        this.throwError(error);
      }
    }
    next();
  }
}
