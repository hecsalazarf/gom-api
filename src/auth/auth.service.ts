import { Injectable } from '@nestjs/common';
import { Ability, RawRule } from '@casl/ability';
import * as Jwt from 'jsonwebtoken';
import { CredentialsDto, PASSWORD_GTYPE, PHONE_GTYPE } from './dto/credentials.dto';
import { Auth0Service, LocalAuthService } from './providers';

@Injectable()
export class AuthService {

  constructor(
    private readonly localAuth: LocalAuthService,
    private readonly auth0: Auth0Service) {
  }

  /**
   * Request token
   * @param {object} credentials Username and password.
   * @return {Promise<any>} Token.
   */
  public requestToken(credentials: CredentialsDto): Promise<any> {
    if (credentials.grantType === PASSWORD_GTYPE) {
      return this.auth0.requestToken(credentials);
    }
    if (credentials.grantType === PHONE_GTYPE) {
      return this.localAuth.generateToken(credentials);
    }
  }

  /**
   * Verify token with the public key provided by Auth0.
   * @param {string} token Encoded token
   * @return {Promise<any>} Decoded token or error.
   */
  public verify(token: string, options: object): Promise<any> {
    return new Promise((resolve, reject) => {
      Jwt.verify(token, this.auth0.getKey.bind(this.auth0), options, (err: object, decoded: object) => {
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
}
