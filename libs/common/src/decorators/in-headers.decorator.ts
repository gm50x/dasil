import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const InHeaders = createParamDecorator(
  async (data: any, ctx: ExecutionContext) =>
    ctx.switchToHttp().getRequest().headers,
);
