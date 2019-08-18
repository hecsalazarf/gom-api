import { Controller, Get, Post, Body, Res, Req, ValidationPipe, Query, UseInterceptors, Logger } from '@nestjs/common';
import { HttpStatus, HttpCode, ForbiddenException, BadRequestException, HttpException } from '@nestjs/common';
import { CredentialsDto } from './dto';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { ConfigService } from '../config/config.service';
import { PrismaService } from '../db/prisma/prisma.service';
import { BpInfoInterceptor } from './interceptors';
import { LoginLimiterService } from './login-limiter/login-limiter.service';

@Controller('auth')
export class AuthController {
  private readonly cookieOptions: object;
  private readonly logger: Logger;
  constructor(
    private readonly auth: AuthService,
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
    private readonly loginLimitter: LoginLimiterService,
  ) {
    this.logger = new Logger(AuthController.name);
    this.cookieOptions = (({maxAge, httpOnly, signed}) => ({maxAge, httpOnly, signed}))(this.config.get('accessToken.options'));
  }

  @Post('login')
  async signIn(@Body(new ValidationPipe()) body: CredentialsDto, @Req() req: Request, @Res() res: Response): Promise<void | object> {
    // get login limiters
    const [consecutiveFails, slowBrute] = await this.loginLimitter.getRateLimitRes(body.username, req.ip);
    // compute retry sesconds
    const retrySecs = this.loginLimitter.getRetrySecs(consecutiveFails, slowBrute);

    if (retrySecs > 0) {
      // Block request when login limiter policy has been reached
      this.logger.log(`IP ${req.ip} and username ${body.username} were blocked. Too many requests`);
      res.set('Retry-After', String(retrySecs));
      throw new HttpException({ error: 'too_many_requests', statusCode: HttpStatus.TOO_MANY_REQUESTS}, HttpStatus.TOO_MANY_REQUESTS);
    }

    if (!req.session.access_token_sign) {
      // With the given credentials request the JWT
      let token: any;
      try {
       token = await this.auth.requestToken(body);
      } catch (err) {
        if (err.status && err.status === HttpStatus.FORBIDDEN) {
          const { message, error, exists } = err.message;
          // consume limiter points and thow an error
          await this.loginLimitter.consume(body.username, req.ip, exists || false);
          throw new ForbiddenException(message, error);
        }
        throw err;
      }

      if (consecutiveFails !== null && consecutiveFails.consumedPoints > 0) {
        // Reset limiter on successful authorisation
        await this.loginLimitter.delete(body.username, req.ip);
      }
      // The JWT is splitted in two parts. The header and the payload
      // are stored in the access_token cookie.
      // The signature is stored in the session
      const index = token.access_token.lastIndexOf('.');
      // Create session
      req.session.access_token_sign = token.access_token.slice(index + 1);
      // Create the access token
      res.cookie(this.config.get('accessToken.cookieName'), token.access_token.slice(0, index), this.cookieOptions);

      // Create the id token
      res.cookie('id-token', token.id_token, this.cookieOptions); // TODO

      // After a login, refresh the CSRF token
      // @ts-ignore
      res.cookie(this.config.get('csrf.cookie.name'), req.csrfToken(), { secure: this.config.get('csrf.cookie.secure') });
      const { nickname, name, picture, email, sub, seller, business } = this.auth.decode(token.id_token);
      res.status(HttpStatus.OK);
      res.send({ nickname, name, picture, email, sub, seller, business });
      this.logger.log(`User ${sub} with username ${body.username} logged in from ${req.ip}`);
    } else {
      res.status(HttpStatus.NO_CONTENT).send();
    }
  }

  @Get('logout')
  async signOut(@Res() res: Response, @Req() req: any): Promise<void> {
    req.session = null;
    res.clearCookie(this.config.get('accessToken.cookieName'));
    res.clearCookie('id-token'); // TODO Remove
    res.status(HttpStatus.OK).send();
    this.logger.log(`User logged out from IP ${req.ip}`); // TODO Add user id to log
  }

  @Get('ping')
  @HttpCode(HttpStatus.OK)
  ping(): object {
    return {
      success: true,
    };
  }

  @Get('bp')
  @HttpCode(HttpStatus.OK)
  @UseInterceptors(BpInfoInterceptor)
  async getBpInfo(@Query() args: any): Promise<any> {
    const out = await this.prisma.query.bp(args, '{ phone customerOf { business } }'); // retrieve only phone number
    if (!out) {
      throw new BadRequestException('BP not found');
    }
    return out;
  }
}
