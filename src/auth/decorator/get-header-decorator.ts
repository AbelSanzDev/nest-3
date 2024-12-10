import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetRawHeaders = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const headers = ctx.switchToHttp().getRequest();
    if (data) return headers.rawHeaders[data];
    return headers.rawHeaders;
  },
);
