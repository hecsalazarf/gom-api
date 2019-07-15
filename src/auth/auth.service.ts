import { Injectable, HttpService, HttpStatus, HttpException } from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import * as Jwt from 'jsonwebtoken';
import * as jwksRsa from 'jwks-rsa';

@Injectable()
export class AuthService {
  private readonly jwksClient: any;
  constructor(private readonly httpService: HttpService) {
    this.jwksClient = jwksRsa({
      strictSsl: true,
      cache: true,
      cacheMaxEntries: 5, // Default value
      // cacheMaxAge: ms('10h'), // Default value
      jwksUri: 'https://arkio.auth0.com/.well-known/jwks.json',
    });
  }

  private getKey(header, callback) {
    this.jwksClient.getSigningKey(header.kid, (err, key) => {
      callback(err, key.publicKey || key.rsaPublicKey);
    });
  }

  public async requestToken({ username, password }: CredentialsDto): Promise<any> {
    let result;
    try {
      result = await this.httpService.post('https://arkio.auth0.com/' + 'oauth/token',
        {
          grant_type: 'password',
          client_id: 'tk37Qxx0ozSe3k2W9THkVnuj35eU7FDo',
          client_secret: '43TAIqHtRt40d2-d8ZltJW_0_YJ4WURo5zgTFS_dthPqZpPvCPZJ9GA8FI35dCZx',
          audience: 'http://dev.api.gom',
          scope: 'openid',
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
}
