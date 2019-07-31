import { Injectable, HttpService, HttpException, HttpStatus } from '@nestjs/common';
import * as jwksRsa from 'jwks-rsa';
import { ConfigService } from '../../config/config.service';
import { CredentialsDto } from '../dto';

@Injectable()
export class Auth0Service {
  private readonly jwksClient: any; // JWKS client
  private readonly tokenRequestOptions: object;
  private readonly cache: any = {}; // cached options

  constructor(
    private readonly httpService: HttpService,
    private readonly config: ConfigService) {
      this.jwksClient = this.createJwks();
      this.tokenRequestOptions = this.getTokenRequestOptions();
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
      jwksUri: this.config.get('auth.auth0.jwksEndpoint'),
    });
  }

  /**
   * Factory method that creates the configuration options to request the token.
   * @return {any} Object containing the options.
   */
  private getTokenRequestOptions(): any {
    return {
      grant_type: this.config.get('auth.auth0.grantType'),
      client_id: this.config.get('auth.auth0.clientId'),
      client_secret: this.config.get('auth.auth0.clientSecret'),
      audience: this.config.get('auth.auth0.audience'),
      scope: this.config.get('auth.auth0.scope'),
    };
  }

  /**
   * Request token to the Auth0 service, given user credentials.
   * @param {object} credentials Username and password.
   * @return {Promise<any>} Token.
   */
  public async requestToken({ username, password }: CredentialsDto): Promise<any> {
    let result;
    try {
      result = await this.httpService.post(this.config.get('auth.auth0.url') + 'oauth/token',
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

  /**
   * Audience getter.
   * @return {string} Audience.
   */
  public get audience() {
    if (!this.cache.audience) {
      this.cache.audience = this.config.get('auth.auth0.audience');
    }
    return this.cache.audience;
  }

  /**
   * Issuer getter.
   * @return {string} Issuer.
   */
  public get issuer() {
    if (!this.cache.issuer) {
      this.cache.issuer = this.config.get('auth.auth0.issuer');
    }
    return this.cache.issuer;
  }

  /**
   * Key getter.
   * @return {string} Key.
   */
  public get key() {
    return this.getKey.bind(this);
  }

  /**
   * Verify options getter.
   * @return {object} Options used during verification.
   */
  public get verifyOptions() {
    return {
      audience: this.audience,
      issuer: this.issuer,
      ignoreExpiration: false, // DO NOT ignore expiration
    };
  }
}
