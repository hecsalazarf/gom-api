import { Controller, Get, Post, Body, Session, Res, Req, HttpStatus, HttpException, HttpCode, ValidationPipe } from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { ConfigService } from '../config/config.service';

@Controller('auth')
export class AuthController {
  private readonly cookieOptions: object;

  constructor(private readonly authService: AuthService, private readonly config: ConfigService) {
    this.cookieOptions = (({maxAge, httpOnly, signed}) => ({maxAge, httpOnly, signed}))(this.config.get('accessToken.options'));
  }

  @Post('login')
  async signIn(@Body(new ValidationPipe()) body: CredentialsDto, @Session() session: any, @Res() res: Response): Promise<void | object> {
    if (session.isNew) {
      const token = await this.authService.requestToken(body);
      const index = token.access_token.lastIndexOf('.');
      session.access_token_sign = token.access_token.slice(index + 1);
      res.cookie(this.config.get('accessToken.cookieName'), token.access_token.slice(0, index), this.cookieOptions);
      const { nickname, name, picture, email, sub } = this.authService.decode(token.id_token);
      res.status(HttpStatus.OK);
      res.send({ nickname, name, picture, email, sub });
    } else {
      res.status(HttpStatus.NO_CONTENT).send();
    }
  }

  @Get('logout')
  @HttpCode(HttpStatus.OK)
  async signOut(@Res() res: Response, @Req() req: any): Promise<void> {
    req.session = null;
    res.clearCookie(this.config.get('accessToken.cookieName'));
  }

  @Get('ping')
  @HttpCode(HttpStatus.OK)
  ping(): object {
    return {
      success: true,
    };
  }
}
