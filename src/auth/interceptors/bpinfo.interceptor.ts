import { CallHandler, ExecutionContext, Injectable, NestInterceptor, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { BpQueryDto } from '../dto';
const INCOMING_MESSAGE = 0;

@Injectable()
export class BpInfoInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const req = context.getArgByIndex(INCOMING_MESSAGE); // get request
    const errors = await validate(plainToClass(BpQueryDto, req.query)); // validate incoming query
    if (errors.length > 0) {
      throw new BadRequestException(errors); // throw exception if errors exist
    }
    req.query = { // transform query so shat Prisma can interpret it
      where: {
        extUid: req.query.code,
      },
    };
    return next
      .handle()
      .pipe(map(ev => ({
        phoneLast: ev.phone.slice(-3), // return last 3 digits
        customerOf: ev.customerOf[0].business, // return the first record (business name)
      })));
  }
}
