import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const In = createParamDecorator(
  (data: any, ctx: ExecutionContext) => ctx.switchToHttp().getRequest().headers,
);
