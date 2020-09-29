import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const InHeaders = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    ctx.switchToHttp().getRequest().headers,
);
