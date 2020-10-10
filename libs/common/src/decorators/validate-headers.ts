import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ValidateHeaders = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    ctx.switchToHttp().getRequest().headers,
);
