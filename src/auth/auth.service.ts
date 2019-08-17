import { Injectable } from '@nestjs/common';
import { Ability, RawRule } from '@casl/ability';
import * as Jwt from 'jsonwebtoken';
import * as cookie from 'cookie';
import { CredentialsDto, GrantTypes } from './dto/credentials.dto';
import { Auth0Service, LocalAuthService } from './providers';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthService {

  private readonly cookieName: string;
  constructor(
    private readonly localAuth: LocalAuthService,
    private readonly auth0: Auth0Service,
    private readonly config: ConfigService,
  ) {
      this.cookieName = config.get('accessToken.cookieName');
    }

  /**
   * Get auth service by Issuer
   * @param {string} issuer Issuer.
   * @return {any} Auth service.
   */
  private getServiceByIssuer(issuer): any {
      let service: any;
      switch (issuer) {
        case this.auth0.issuer:
          service = this.auth0;
          break;
        case this.localAuth.issuer:
          service = this.localAuth;
          break;
      }

      if (!service) {
        throw new Error('Unknown issuer');
      }
      return service;
  }

  /**
   * Request token
   * @param {object} credentials Username and password.
   * @return {Promise<any>} Token.
   */
  public requestToken(credentials: CredentialsDto): Promise<any> {
    if (credentials.grantType === GrantTypes.PASSWORD) {
      return this.auth0.requestToken(credentials);
    }
    if (credentials.grantType === GrantTypes.PHONE) {
      return this.localAuth.generateToken(credentials);
    }
  }

  /**
   * Verify token with the corresponding key (local or Auth0).
   * @param {string} token Encoded token
   * @return {Promise<any>} Decoded token or error.
   */
  public verify(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const { iss } = this.decode(token); // get issuer from token
      const service = this.getServiceByIssuer(iss); // get service based on issuer
      Jwt.verify(token, service.key, service.verifyOptions, (err: object, decoded: object) => {
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
   * Get access token cookie from request header.
   * @param {string} cookieHeader The cookie header from the request
   * @returns {string} The access_token value
   */
  public getCookie(cookieHeader: string): string {
    const cookies = cookie.parse(cookieHeader);
    if (cookies[this.cookieName]) {
      return cookies[this.cookieName];
    }
    return null;
  }
}
