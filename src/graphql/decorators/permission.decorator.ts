import { SetMetadata } from '@nestjs/common';

/**
 * Decorator that sets metadata into the resolver function, so that PermissionGuard
 * knows whether to allow the operation or not.
 */
export const Permission = (...args: string[]): (target: object, key?: any, descriptor?: any) => any => SetMetadata('permission', args);
