import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisStore } from 'connect-redis';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
import * as express from 'express';
import * as signature from 'cookie-signature';
import * as cookie from 'cookie';
import { SessionConfigDto } from './dto';

@Injectable()
export class SessionService {
  private readonly sessionHandler: express.RequestHandler;
  private readonly redisStore: RedisStore;

  constructor(redisInstance: Redis, private readonly config: SessionConfigDto) {
    const Store = connectRedis(session);
    // @ts-ignore
    this.redisStore = new Store({ client: redisInstance }); // create redis store
    this.sessionHandler = this.createSessionHandler(); // create session handler
  }

  /**
   * Create session handler
   * @param {ConfigService} config Config service instance
   * @returns {express.RequestHandler} Express session handler
   * @private
   */
  private createSessionHandler(): express.RequestHandler {
    const options: session.SessionOptions = {
      secret: this.config.secret,
      name: this.config.name,
      // @ts-ignore
      cookie: this.config.options,
      resave: false, // Do not save back the session if it was not modified
      saveUninitialized: false, // Do not save "uninitialized" sessions
      unset: 'destroy', // The session will be destroyed (deleted) when the response ends
      store: this.redisStore,
    };
    return session(options);
  }

  /**
   * Verify and decode the given `value` with `secrets`.
   * Code extracted from express-session
   * @param {string} value Session id with signature
   * @returns {string|boolean} The valid id or false if signature is invalid
   * @private
   */
  private unsigncookie(value: string): boolean | string {
    // Next code should be used when secret is an array
    // for (const secret of this.config.secret) {
    //   const result = signature.unsign(value, secret);
    //   if (result !== false) {
    //     return result;
    //   }
    // }
    return signature.unsign(value, this.config.secret);
  }

  /**
   * Verify the session and returns session data.
   * @param {string} value Session id with signature
   * @returns {Promise} A promise that resolves with the session data
   */
  public verify(value: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (value.substr(0, 2) !== 's:') {
        reject(new Error('Session value is not signed'));
      }
      const sid = this.unsigncookie(value.slice(2)); // get session id
      if (sid === false) {
        reject(new Error('Invalid signature'));
      }
      // @ts-ignore // ignore types mismatch
      this.store.get(sid, (error, res) => {
        if (error) {
          reject(error);
        }
        resolve(res);
      });
    });
  }

  /**
   * Get session cookie from request header.
   * @param {string} cookieHeader The cookie header from the request
   * @returns {any} The session cookie
   */
  public getCookie(cookieHeader: string): any {
    const cookies = cookie.parse(cookieHeader);
    if (cookies[this.config.name]) {
      return cookies[this.config.name];
    }
    return null;
  }

  /**
   * Session store getter
   * @returns {RedisStore} Redis store
   */
  get store(): RedisStore {
    return this.redisStore;
  }

  /**
   * Session handler getter
   * @returns {express.RequestHandler} Middleware handler
   */
  get handler(): express.RequestHandler {
    return this.sessionHandler;
  }
}
