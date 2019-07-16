import { Injectable, HttpService, HttpStatus, HttpException } from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import * as Jwt from 'jsonwebtoken';
import * as jwksRsa from 'jwks-rsa';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthService {
  private readonly jwksClient: any;
  private readonly tokenRequestOptions: object;

  constructor(private readonly httpService: HttpService, private readonly config: ConfigService) {
    this.jwksClient = this.createJwks();
    this.tokenRequestOptions = this.getTokenRequestOptions();
  }

  public async requestToken({ username, password }: CredentialsDto): Promise<any> {
    let result;
    try {
      result = await this.httpService.post(this.config.get('auth0.url') + 'oauth/token',
        {
          ...this.tokenRequestOptions,
          username,
          password,
        },
        {
          responseType: 'json',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).toPromise();
    } catch (err) {
      throw new HttpException({
        code: 'oauth_service_error',
        message: 'Oauth service not available',
      }, HttpStatus.FORBIDDEN);
    }

    if (result.status !== 200) {
      throw new HttpException({
        code: result.res.data.error,
        message: result.res.data.error_description,
      }, HttpStatus.UNAUTHORIZED);
    }
    return result.data;
  }

  public verify(token: string, options: object): Promise<object> {
    return new Promise((resolve, reject) => {
      Jwt.verify(token, this.getKey, options, (err: object, decoded: object) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }

  public decode(token: string): any {
    return Jwt.decode(token);
  }

  private createJwks(): any {
    return jwksRsa({
      strictSsl: true,
      cache: true,
      cacheMaxEntries: 5, // Default value
      // cacheMaxAge: ms('10h'), // Default value
      jwksUri: this.config.get('auth0.jwksEndpoint'),
    });
  }

  private getTokenRequestOptions(): any {
    return {
      grant_type: this.config.get('auth0.grantType'),
      client_id: this.config.get('auth0.clientId'),
      client_secret: this.config.get('auth0.clientSecret'),
      audience: this.config.get('auth0.audience'),
      scope: this.config.get('auth0.scope'),
    };
  }

  private getKey(header, callback) {
    this.jwksClient.getSigningKey(header.kid, (err, key) => {
      callback(err, key.publicKey || key.rsaPublicKey);
    });
  }

}
