import { Injectable, ForbiddenException } from '@nestjs/common';
import * as Jwt from 'jsonwebtoken';
import { ConfigService } from '../../config/config.service';
import { PrismaService } from '../../db/prisma/prisma.service';
import { CredentialsDto } from '../dto';
import { Bp } from '../../db/prisma/prisma.binding';

const SIGNING_ALG = 'HS256';

@Injectable()
export class LocalAuthService {
  private readonly tokenOptions: any;
  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService) {
      this.tokenOptions = {
        algorithm: SIGNING_ALG,
        expiresIn: this.config.get('accessToken.options.maxAge') / 1000, // in seconds
        audience: this.config.get('auth.local.audience'),
        issuer: this.config.get('auth.local.issuer'),
      };
  }

  /**
   * Validate BP credentials by phone number
   * @param {object} credentials Credentials.
   * @return {Promise<any>} Token.
   */
  private async validateBpByPhone(credentials: CredentialsDto): Promise<Bp> {
    const args = {
      where: {
        extUid: credentials.username,
      },
    };
    const bp = await this.prisma.query.bp(args, '{ uid phone name1 lastName1 }'); // retrieve basic BP info
    if (!bp || bp.phone !== credentials.phone) {
      throw new ForbiddenException('Invalid credentials', 'invalid_grant');
    }
    return bp;
  }

  /**
   * Create access token payload
   * @param {Bp} bp Bp info.
   * @return {any} Payload.
   */
  private createAccessPayload(bp: Bp): any {
    /*
    * The payload is VERY static due to the current requirements,
    * however, this should't be the correct design
    */
    return {
      sub: bp.uid,
      gty: 'phone',
      permissions: [
        'create:order',
        'read:order',
        'read:orders',
        'role:customer',
        'update:order',
      ],
    };
  }

  /**
   * Create id token payload
   * @param {Bp} bp Bp info.
   * @return {any} Payload.
   */
  private createIdPayload(bp: Bp): any {
    return {
      sub: bp.uid,
      nickname: bp.name1,
      name: `${bp.name1} ${bp.lastName1}`,
    };
  }

  /**
   * Sign token
   * @param {any} payload payload.
   * @return {Promise<string>} Signed token.
   */
  private sign(payload: any): Promise<string> {
    return new Promise((resolve, reject) => {
      Jwt.sign(payload, this.config.get('keys')[0], this.tokenOptions,
        (error, encoded) => {
          if (error) {
            reject(error);
          }
          resolve(encoded);
      });
    });
  }

  /**
   * Generate token with local signature
   * @param {object} credentials Credentials.
   * @return {Promise<any>} Token.
   */
  public async generateToken(credentials: CredentialsDto): Promise<any> {
    const bp = await this.validateBpByPhone(credentials);

    const [accessToken, idToken ] = await Promise.all([
      this.sign(this.createAccessPayload(bp)),
      this.sign(this.createIdPayload(bp)),
    ]);

    return {
      access_token: accessToken,
      id_token: idToken,
    };
  }
}
