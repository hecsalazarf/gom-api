import { Injectable, Logger } from '@nestjs/common';
import { ValidationError, validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { IConfig } from 'config';

@Injectable()
export class ConfigService {
  private readonly config: IConfig;

  constructor(configInstance: IConfig) {
    this.config = configInstance;
  }

  /**
   * Recursively handle each error
   * @param {ValidationError} error Validation error
   * @param {string} path Path of the property that did not pass the validation
   */
  private handleError(error: ValidationError, path: string): void {
    if (error.children.length === 0) {
      // no children, so print out the error
      Object.values(error.constraints).map(c => Logger.error(`${path}: ${c}`, '', 'ConfigValidator'));
    } else {
      // more children, handle errors again
      this.handleErrors(error.children, path);
    }
  }

  /**
   * Handle errors after an unsuccessful validation
   * @param {ValidationError[]} errors Array of errors thrown by class-validator
   * @param {string} path Empty string at first call, it is internally filled by recursive calls
   */
  private handleErrors(errors: ValidationError[], path?: string): void {
    errors.map((e: ValidationError) => this.handleError(e, path ? `${path}->${e.property}` : e.property));
  }

  /**
   * Validate configuration key gived a DTO
   * @param {string} key Config key
   * @param {any} dto DTO
   */
  public async validate(key: string, dto: any): Promise<any> {
    if (!this.has(key)) {
      throw new Error(`${key} does not exist in global configuration`);
    }
    const configClass = plainToClass(dto, this.get(key));
    try {
      await validateOrReject(configClass); // validate configuration
    } catch (errors) {
      this.handleErrors(errors); // handle errors
      throw new Error(`${key} has wrong configuration`);
    }
    return configClass;
  }

  /**
   * Get global configuration key
   * @param {string} key Key to retrieve
   */
  public get(key: string): any {
    return this.config.get(key);
  }

  /**
   * Check that key exists in the global configuration
   * @param {string} key Key to check
   */
  public has(key: string): boolean {
    return this.config.has(key);
  }
}
