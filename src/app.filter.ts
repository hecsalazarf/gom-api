import { ArgumentsHost, Catch, HttpException, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { HttpError } from 'http-errors';

// Catch HTTP exceptions
@Catch(HttpException, HttpError)
export class HttpExceptionFilter<T> extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    if (exception instanceof HttpError) {
      // Express middlewares usually throw HttpError instances.When one is
      // catched, transform it into an HttpException and let NestJS to handle it.
      Logger.error(`(${exception.status}) ${exception.code}: ${exception.message} | ${request.ip}`, '', HttpError.name);
      super.catch(this.transformHttpError(exception), host);
    } else if (exception instanceof HttpException) {
      const text = this.createLogText(exception, request.ip);
      Logger.error(text, '', HttpException.name);
      super.catch(exception, host);
    }
  }

  private transformHttpError(exception: HttpError): HttpException {
    return new HttpException({
      statusCode: exception.status,
      error: exception.code,
      message: exception.message,
    }, exception.status);
  }

  private createLogText(exception: HttpException, ip: string): string {
    let text: string;
    const response = exception.getResponse();
    if (typeof response === 'object') {
      // @ts-ignore
      const { error, message } = response;
      if (!message && !error) {
        text = `${JSON.stringify(exception.message)} | ${ip}`;
      } else {
        const subject = message && error ? `${error}: ${message}` : message || error;
        text = `(${exception.getStatus()}) ${subject} | ${ip}`;
      }
    } else {
      text = `(${exception.getStatus()}) ${exception.message} | ${ip}`;
    }
    return text;
  }
}
