import { Controller, Get, Post, Body, Res, Req, HttpStatus, HttpCode, ValidationPipe } from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { ConfigService } from '../config/config.service';

@Controller('auth')
export class AuthController {
  private readonly cookieOptions: object;

  constructor(private readonly auth: AuthService, private readonly config: ConfigService) {
    this.cookieOptions = (({maxAge, httpOnly, signed}) => ({maxAge, httpOnly, signed}))(this.config.get('accessToken.options'));
  }

  @Post('login')
  async signIn(@Body(new ValidationPipe()) body: CredentialsDto, @Req() req: any, @Res() res: Response): Promise<void | object> {
    if (req.session.isNew) {
      /* With the given credential request the JWT */
      const token = await this.auth.requestToken(body);
      /*
      * The JWT is splitted in two parts. The header and the payload
      * are stored in the access_token cookie.
      * The signature is stored in the session cookie which is signed.
      */
      const index = token.access_token.lastIndexOf('.');
      /* Create session */
      req.session.access_token_sign = token.access_token.slice(index + 1);
      /* Create the access token */
      res.cookie(this.config.get('accessToken.cookieName'), token.access_token.slice(0, index), this.cookieOptions);
      /* After a login, refresh the CSRF token */
      res.cookie(this.config.get('csrf.cookie.name'), req.csrfToken(), { secure: this.config.get('csrf.cookie.secure') });
      const { nickname, name, picture, email, sub } = this.auth.decode(token.id_token);
      res.status(HttpStatus.OK);
      res.send({ nickname, name, picture, email, sub });
    } else {
      res.status(HttpStatus.NO_CONTENT).send();
    }
  }

  @Get('logout')
  async signOut(@Res() res: Response, @Req() req: any): Promise<void> {
    req.session = null;
    res.clearCookie(this.config.get('accessToken.cookieName'));
    res.status(HttpStatus.OK).send();
  }

  @Get('ping')
  @HttpCode(HttpStatus.OK)
  ping(): object {
    return {
      success: true,
    };
  }
}
