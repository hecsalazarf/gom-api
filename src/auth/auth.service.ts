import { Injectable, HttpService, HttpStatus, HttpException } from '@nestjs/common';
import { Ability, RawRule } from '@casl/ability';
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

  /**
   * Request token to the Auth0 service, given user credentials.
   * @param {object} credentials Username and password.
   * @return {Promise<any>} Token.
   */
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
      if (err.response) {
        throw new HttpException({
          code: err.response.data.error,
          message: err.response.data.error_description,
        }, err.response.status);
      }
      throw new HttpException({
        code: 'oauth_service_error',
        message: 'Oauth service not available',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return result.data;
  }

  /**
   * Verify token with the public key provided by Auth0.
   * @param {string} token Encoded token
   * @return {Promise<any>} Decoded token or error.
   */
  public verify(token: string, options: object): Promise<any> {
    return new Promise((resolve, reject) => {
      Jwt.verify(token, this.getKey.bind(this), options, (err: object, decoded: object) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });
  }

  /**
   * Build user ability (authorization) based on the permissions in the JWT.
   * @param {any} decoded Decoded access token
   * @return {Ability} Ability.
   */
  public buildAbility(decoded: any): Ability {
  const { permissions } = decoded;
  const rules = permissions.map((permission: string): RawRule => {
    const defs = permission.split(':');
    return {
      actions: defs[0],
      subject: defs[1],
    };
  });
  return new Ability(rules);
}

  /**
   * Decode token without verification.
   * @param {string} token Encoded token
   * @return {any} Decoded token or error.
   */
  public decode(token: string): any {
    return Jwt.decode(token);
  }

  /**
   * Create instance to retrieve RSA public keys from a JWKS (JSON Web Key Set) endpoint.
   * @return {any} JwKS instance.
   */
  private createJwks(): any {
    return jwksRsa({
      strictSsl: true,
      cache: true,
      cacheMaxEntries: 5, // Default value
      // cacheMaxAge: ms('10h'), // Default value
      jwksUri: this.config.get('auth0.jwksEndpoint'),
    });
  }

  /**
   * Factory method that creates the configuration options to request the token.
   * @return {any} Object containing the options.
   */
  private getTokenRequestOptions(): any {
    return {
      grant_type: this.config.get('auth0.grantType'),
      client_id: this.config.get('auth0.clientId'),
      client_secret: this.config.get('auth0.clientSecret'),
      audience: this.config.get('auth0.audience'),
      scope: this.config.get('auth0.scope'),
    };
  }

  /**
   * Callback used during token verification that retrieves the signing key
   * from the JWKS endpoint.
   * @param {any} header Token header
   * @callback callback Callback with the key or error
   * @return {void}
   */
  private getKey(header: any, callback: any) {
    this.jwksClient.getSigningKey(header.kid, (err, key) => {
      callback(err, key.publicKey || key.rsaPublicKey);
    });
  }

}
