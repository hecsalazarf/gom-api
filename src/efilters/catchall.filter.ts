import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { HttpError } from 'http-errors';

/* Catch-all exception filter */
@Catch()
export class CatchallFilter<T> extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    /*
      NestJS has a built-in HttpException handler. However, for other types
      of error, the framework sends a generic 500 status code.
    */
    if (exception instanceof HttpError) {
      /*
        Express middlewares usually throw HttpError instances.When one is
        catched, transform it into an HttpException and let NestJS to handle it.
      */
      super.catch(this.transformHttpError(exception), host);
    } else {
      super.catch(exception, host); // Send the generic message
    }
  }

  private transformHttpError(exception: any): HttpException {
    return new HttpException({
        code: exception.code,
        message: exception.message,
      }, exception.status);
  }
}
