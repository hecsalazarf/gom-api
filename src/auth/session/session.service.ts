import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RedisStore } from 'connect-redis';
import * as session from 'express-session';
import * as connectRedis from 'connect-redis';
import * as express from 'express';
import { ConfigService } from '../../config/config.service';

@Injectable()
export class SessionService {
  private readonly sessionHandler: express.RequestHandler;
  private readonly redisStore: RedisStore;
  constructor(redisInstance: Redis, config: ConfigService) {
    const Store = connectRedis(session);
    // @ts-ignore // ignore types mismatch
    this.redisStore = new Store({ client: redisInstance });
    this.sessionHandler = this.createSessionHandler(config);
  }

  private createSessionHandler(config: ConfigService): express.RequestHandler {
    const options: session.SessionOptions = {
      secret: config.get('keys'),
      name: config.get('session.name'),
      cookie: {
        httpOnly: config.get('session.httpOnly'),
        maxAge: config.get('session.maxAge'),
        // signed: config.get('session.signed'), // TBD
        // sameSite: true, // TBD
        // secure: true, // TBD
      },
      resave: false, // Do not save back the session if it was not modified
      saveUninitialized: false, // Do not save "uninitialized" sessions
      unset: 'destroy', // The session will be destroyed (deleted) when the response ends
      store: this.redisStore,
    };
    return session(options);
  }

  /**
   * Store getter
   * @returns {RedisStore} Redis store
   */
  get store(): RedisStore {
    return this.redisStore;
  }

  /**
   * Handler getter
   * @returns {express.RequestHandler} Middleware handler
   */
  get handler(): express.RequestHandler {
    return this.sessionHandler;
  }
}
