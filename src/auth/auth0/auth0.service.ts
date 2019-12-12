import { Injectable, HttpService, HttpException, HttpStatus } from '@nestjs/common';
import jwksRsa from 'jwks-rsa';
import { CredentialsDto } from '../dto';
import { Auth0ConfigDto } from './dto';

@Injectable()
export class Auth0Service {
  private readonly jwksClient: any; // JWKS client

  constructor(private readonly httpService: HttpService, private readonly config: Auth0ConfigDto) {
    this.jwksClient = this.createJwks();
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
      jwksUri: this.config.jwksEndpoint,
    });
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
   * Client secret getter.
   * @return {string} Client secret.
   */
  private get clientSecret(): string {
    return this.config.clientSecret;
  }

  /**
   * Get Oauth token from Auth0
   * @param {any} error Token header
   * @return {void}
   */
  private async getToken(params: any): Promise<any> {
    let result: any;
    try {
      result = await this.httpService.post(this.config.tokenUrl,
        params,
        {
          responseType: 'json',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      ).toPromise();
    } catch (error) {
      if (error.response) {
        throw new HttpException({
          error: error.response.data.error,
          message: error.response.data.error_description,
        }, error.response.status);
      }
      throw new HttpException({
        error: 'oauth_service_error',
        message: 'Oauth service not available',
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return result.data;
  }

  /**
   * Request token to the Auth0 service, given user credentials.
   * @param {object} credentials Username and password.
   * @return {Promise<any>} Token.
   */
  public requestToken({ username, password }: CredentialsDto): Promise<any> {
    const params = {
      username,
      password,
      grant_type: 'password',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      audience: this.audience,
      scope: this.scope,
    };

    return this.getToken(params);
  }

  /**
   * Refresh token from the Auth0 service
   * @param {string} refreshToken Refresh token
   * @return {Promise<any>} Token.
   */
  public async refreshToken(refreshToken: string): Promise<any> {
    const params = {
      grant_type: 'refresh_token',
      client_id: this.clientId,
      refresh_token: refreshToken,
    };

    return this.getToken(params);
  }

  /**
   * Audience getter.
   * @return {string} Audience.
   */
  public get audience(): string {
    return this.config.audience;
  }

  /**
   * Issuer getter.
   * @return {string} Issuer.
   */
  public get issuer(): string {
    return this.config.issuer;
  }

  /**
   * Scope getter.
   * @return {string} Scope.
   */
  public get scope(): string {
    return this.config.scope;
  }

  /**
   * Client ID getter.
   * @return {string} Client ID.
   */
  public get clientId(): string {
    return this.config.clientId;
  }

  /**
   * Key getter.
   * @return {string} Key.
   */
  public get key(): string {
    return this.getKey.bind(this);
  }

  /**
   * Verify options getter.
   * @return {object} Options used during verification.
   */
  public get verifyOptions(): any {
    return {
      audience: this.audience,
      issuer: this.issuer,
      ignoreExpiration: false, // DO NOT ignore expiration
    };
  }
}
