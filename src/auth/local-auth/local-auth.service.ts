import { Injectable, ForbiddenException } from '@nestjs/common';
import * as Jwt from 'jsonwebtoken';
import { PrismaService } from '../../db/prisma/prisma.service';
import { CredentialsDto } from '../dto';
import { Bp } from '../../db/prisma/prisma.binding';
import { LocalAuthConfigDto } from './dto';

const SIGNING_ALG = 'HS256';

@Injectable()
export class LocalAuthService {
  constructor(
    private readonly config: LocalAuthConfigDto,
    private readonly prisma: PrismaService,
  ) { }

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
    const query = `{
      uid
      extUid
      phone
      name1
      lastName1
      customerOf {
        extUid
        business
      }
    }`;
    const bp = await this.prisma.query.bp(args, query); // retrieve basic BP info
    if (!bp || bp.phone !== credentials.phone) {
      throw new ForbiddenException({
        error: 'invalid_grant',
        message: 'Invalid credentials',
        exists: !!bp, // if bp exists
      });
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
    * however, this shouldn't be the correct design
    */
    return {
      sub: bp.uid,
      eid: bp.extUid,
      gty: 'phone',
      seller: bp.customerOf[0].extUid,
      business: bp.customerOf[0].business,
      permissions: [
        'create:order',
        'read:order',
        'read:orders',
        'role:customer',
        'update:order',
        'subscribe:order',
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
      seller: bp.customerOf[0].extUid,
      business: bp.customerOf[0].business,
    };
  }

  /**
   * Sign token
   * @param {any} payload payload.
   * @return {Promise<string>} Signed token.
   */
  private sign(payload: any): Promise<string> {
    return new Promise((resolve, reject) => {
      Jwt.sign(payload, this.config.secret, {
        algorithm: SIGNING_ALG,
        expiresIn: this.config.expiration, // in seconds
        audience: this.config.audience,
        issuer: this.config.issuer,
      },
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
   * Key getter.
   * @return {string} Key.
   */
  public get key(): string {
    return this.config.secret;
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
