import { Injectable, Logger } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RateLimiterRedis, RateLimiterRes } from 'rate-limiter-flexible';
import { LoginLimiterConfigDto } from './dto';

/**
 * Wraper for login endpoint protection, taken from rate-limiter-flexible wiki
 * https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection
 */
@Injectable()
export class LoginLimiterService {
  private readonly slowBrute: RateLimiterRedis;
  private readonly consecutiveFails: RateLimiterRedis;
  private readonly logger = new Logger(LoginLimiterService.name);

  constructor(redis: Redis, private readonly config: LoginLimiterConfigDto) {
    // block IP for a day on MaxAttemptsByIpPerDay failed attempts per day
    this.slowBrute = new RateLimiterRedis({
      storeClient: redis,
      keyPrefix: 'login_slow_brute_',
      points: config.slowBrute.points,
      duration: config.slowBrute.duration,
      blockDuration: config.slowBrute.blockDuration,
    });

    // count number of consecutive failed attempts and allows
    // maximum MaxConsecutiveFailsByUsernameAndIP by username and IP pair
    this.consecutiveFails = new RateLimiterRedis({
      storeClient: redis,
      keyPrefix: 'login_consecutive_fails_',
      points: config.consecutiveFails.points,
      duration: config.consecutiveFails.duration,
      blockDuration: config.consecutiveFails.blockDuration,
    });
  }

  /**
   * Create redis key for consecutive fails limiter
   * @param {string} user User
   * @param {string} ip IP address
   * @returns {string} Redis key
   */
  private createKey(user: string, ip: string): string {
    return `${user}_${ip}`;
  }

  /**
   * Get response from rate limiter
   * @param {string} user User
   * @param {string} ip IP address
   * @returns {RateLimiterRes[]} Array in the form [consecutiveFailsRes, slowBruteRes]
   */
  public async getRateLimitRes(user: string, ip: string): Promise<RateLimiterRes[]> {
    let res = [];
    try {
      res = await Promise.all([
        this.consecutiveFails.get(this.createKey(user, ip)),
        this.slowBrute.get(ip),
      ]);
    } catch (error) {
      this.logger.error(error.message);
    }
    return res;
  }

  /**
   * Get retry seconds of a user
   * @param {string} user User
   * @param {string} ip IP address
   * @returns {number} Number of seconds to retry after
   */
  public getRetrySecs(consecutiveFails: RateLimiterRes, slowBrute: RateLimiterRes): number {
    let retrySecs = 0;
    // Check if IP or Username + IP is already blocked
    if (slowBrute !== null && slowBrute.consumedPoints > this.config.slowBrute.points) {
      retrySecs = Math.round(slowBrute.msBeforeNext / 1000) || 1;
    } else if (consecutiveFails !== null && consecutiveFails.consumedPoints > this.config.consecutiveFails.points) {
      retrySecs = Math.round(consecutiveFails.msBeforeNext / 1000) || 1;
    }
    return retrySecs;
  }

  /**
   * Consume limiter points after a failed login attempt
   * @param {string} user User
   * @param {string} ip IP address
   * @param {Promise<boolean>} userExists Flag indicates if a user exists after a login attempt
   */
  public async consume(user: string, ip: string, userExists: boolean): Promise<RateLimiterRes[]> {
    let res = [];
    const promises = [this.slowBrute.consume(ip)];
    if (userExists) {
      // Count failed attempts by Username + IP only for registered users
      promises.push(this.consecutiveFails.consume(this.createKey(user, ip)));
    }
    try {
      res = await Promise.all(promises);
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
      } else {
        // If error is not instance of error, user got blocked
        this.logger.log(`Ip ${ip} and username ${user} were blocked. Too many requests`);
      }
    }
    return res;
  }

  /**
   * Delete limiter points after a succesful login attempt
   * @param {string} user User
   * @param {string} ip IP address
   * @return {boolean} True when pointer where deleted
   */
  public async delete(user: string, ip: string): Promise<boolean> {
    let res = false;
    try {
      res = await this.consecutiveFails.delete(this.createKey(user, ip));
    } catch (error) {
      this.logger.error(error.message);
    }
    return res;
  }
}
