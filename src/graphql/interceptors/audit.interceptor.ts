import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuditInterceptor implements NestInterceptor {

  /*
  * Intercept mutations to insert the user who requested the operation
  */
  intercept(exeContext: ExecutionContext, next: CallHandler): Observable<any> {
    const exeCtx = GqlExecutionContext.create(exeContext);
    const { operation: { operation }, fieldName } = exeCtx.getInfo();
    const { user } = exeCtx.getContext();
    const { data } = exeCtx.getArgs();

    if (operation === 'mutation') { // check that it is a mutation
      if (fieldName.includes('create')) {
        data.createdBy = user.id; // insert user id
      }
      if (fieldName.includes('update')) {
        data.updatedBy = user.id; // insert user id
      }
    }
    return next.handle();
  }
}
