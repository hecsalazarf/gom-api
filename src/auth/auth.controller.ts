import { Controller, Get, Post, Body, Res, Req, ValidationPipe, Query, UseInterceptors, Logger } from '@nestjs/common';
import { HttpStatus, HttpCode, ForbiddenException, BadRequestException, HttpException } from '@nestjs/common';
import { CredentialsDto } from './dto';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { PrismaService } from '../db/prisma/prisma.service';
import { BpInfoInterceptor } from './interceptors';
import { LoginLimiterService } from './login-limiter/login-limiter.service';

@Controller('auth')
export class AuthController {
  private readonly logger: Logger;
  constructor(
    private readonly auth: AuthService,
    private readonly prisma: PrismaService,
    private readonly loginLimitter: LoginLimiterService,
  ) {
    this.logger = new Logger(AuthController.name);
  }

  @Post('login')
  async signIn(@Body(new ValidationPipe()) body: CredentialsDto, @Req() req: Request, @Res() res: Response): Promise<void | object> {
    // get login limiters
    const [consecutiveFails, slowBrute] = await this.loginLimitter.getRateLimitRes(body.username, req.ip);
    // compute retry sesconds
    const retrySecs = this.loginLimitter.getRetrySecs(consecutiveFails, slowBrute);

    if (retrySecs > 0) {
      // Block request when login limiter policy has been reached
      res.set('Retry-After', String(retrySecs));
      throw new HttpException('Too many requests', HttpStatus.TOO_MANY_REQUESTS);
    }

    if (!req.session.access_token_sign) {
      // With the given credentials request the JWT
      let token: any;
      try {
        token = await this.auth.requestToken(body);
      } catch (err) {
        this.logger.error(`User ${body.username} cannot be authenticated`);
        if (err?.status === HttpStatus.FORBIDDEN) {
          const response = err.getResponse();
          // consume limiter points and throw an error
          await this.loginLimitter.consume(body.username, req.ip, response.exists || false);
          throw new ForbiddenException(response.message, response.error);
        }
        this.logger.error(err);
        throw err;
      }

      if (consecutiveFails !== null && consecutiveFails.consumedPoints > 0) {
        // Reset limiter on successful authorisation
        await this.loginLimitter.delete(body.username, req.ip);
      }
      // The JWT is splitted in two parts. The header and the payload
      // are stored in the access_token cookie.
      // The signature is stored in the session
      const splitted = this.auth.splitToken(token.access_token);
      // Create session
      Object.defineProperty(req.session, 'access_token_sign', {
        value: splitted.signature,
        enumerable: true,
      });
      res.cookie(this.auth.accessTokenName, splitted.payload, this.auth.accessTokenOptions); // Create the access token
      Object.defineProperty(req.session, 'refresh_token', {
        value: token.refresh_token || undefined, // save refresh token if it exists
        enumerable: true,
      });

      // After a login, refresh the CSRF token
      // @ts-ignore //
      res.cookie(this.auth.csrfName, req.csrfToken(), this.auth.csrfOptions);
      const { nickname, name, picture, email, sub, seller, business } = this.auth.decode(token.id_token);
      res.status(HttpStatus.OK);
      res.send({ nickname, name, picture, email, sub, seller, business });
      this.logger.log(`User ${sub} logged in | ${req.ip}`);
    } else {
      res.status(HttpStatus.NO_CONTENT).send();
    }
  }

  @Get('logout')
  signOut(@Res() res: Response, @Req() req: any): void {
    if (req.session.access_token_sign) { // check there is a session
      const decoded = this.auth.decode(`${req.cookies[this.auth.accessTokenName]}.${req.session.access_token_sign}`);
      req.session = null;
      res.clearCookie(this.auth.accessTokenName);
      res.clearCookie(this.auth.csrfName);
      res.status(HttpStatus.OK).send();
      this.logger.log(`User ${decoded ? decoded.sub : ''} logged out | ${req.ip}`);
    } else {
      res.status(HttpStatus.NO_CONTENT).send();
    }
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
