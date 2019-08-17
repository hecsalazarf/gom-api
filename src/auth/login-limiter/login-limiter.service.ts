import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import { RateLimiterRedis, RateLimiterRes } from 'rate-limiter-flexible';

const MaxAttemptsByIpPerDay = 50; // TODO: configurable
const MaxConsecutiveFailsByUsernameAndIP = 5; // TODO: configurable

enum LoginLimiter {
  SLOW_BRUTE = 'SLOW_BRUTE_BY_IP',
  CONSECUTIVE_FAILS = 'CONSECUTIVE_FAILS',
}

/**
 * Wraper for login endpoint protection, taken from rate-limiter-flexible wiki
 * https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection
 */
@Injectable()
export class LoginLimiterService {
  private readonly slowBrute: RateLimiterRedis;
  private readonly consecutiveFails: RateLimiterRedis;

  constructor(redis: Redis) {
    // block IP for a day on MaxAttemptsByIpPerDay failed attempts per day
    this.slowBrute = new RateLimiterRedis({
      storeClient: redis,
      keyPrefix: 'login_slow_brute_',
      points: MaxAttemptsByIpPerDay,
      duration: 60 * 60 * 24, // attempts per day
      blockDuration: 60 * 60 * 24, // Block for 1 day, if 100 wrong attempts per day
    });

    // count number of consecutive failed attempts and allows
    // maximum MaxConsecutiveFailsByUsernameAndIP by username and IP pair
    this.consecutiveFails = new RateLimiterRedis({
      storeClient: redis,
      keyPrefix: 'login_consecutive_fails_',
      points: MaxConsecutiveFailsByUsernameAndIP,
      duration: 60 * 60 * 24 * 90, // Store number for 90 days since first fail
      blockDuration: 60 * 60, // Block for 1 hour
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
  public getRateLimitRes(user: string, ip: string): Promise<RateLimiterRes[]> {
    return Promise.all([
      this.consecutiveFails.get(this.createKey(user, ip)),
      this.slowBrute.get(ip),
    ]);
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
    if (slowBrute !== null && slowBrute.consumedPoints >= MaxAttemptsByIpPerDay) {
      retrySecs = Math.round(slowBrute.msBeforeNext / 1000) || 1;
    } else if (consecutiveFails !== null && consecutiveFails.consumedPoints >= MaxConsecutiveFailsByUsernameAndIP) {
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
  public consume(user: string, ip: string, userExists: boolean): Promise<RateLimiterRes[]> {
    const promises = [this.slowBrute.consume(ip)];
    if (userExists) {
      // Count failed attempts by Username + IP only for registered users
       promises.push(this.consecutiveFails.consume(this.createKey(user, ip)));
    }
    return Promise.all(promises);
  }

  /**
   * Delete limiter points after a succesful login attempt
   * @param {string} user User
   * @param {string} ip IP address
   * @return {boolean} True when pointer where deleted
   */
  public delete(user: string, ip: string): Promise<boolean> {
    return this.consecutiveFails.delete(this.createKey(user, ip));
  }
}
