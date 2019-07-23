import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ForbiddenError } from 'apollo-server-errors';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const gqlCtx: any = GqlExecutionContext.create(context); // any type to omit handler no-type compilation error
    const permission = this.reflector.get('permission', gqlCtx.handler); // get metadata from handler (resolver)
    if (typeof permission === 'undefined') {
      return true; // if no permission metadata, allow execution by default
    }
    const { user: { ability } } = gqlCtx.getContext(); // get ability from user
    const authorized = permission.every(p => {
      const defs = p.split(':'); // split permission to get action and subject
      return ability.can(defs[0], defs[1]); // check ability
    });
    if (!authorized) {
      /* Throw error when user is unauthorized to perform the operation */
      throw new ForbiddenError('No permission to access');
    }
    return true;
  }
}
