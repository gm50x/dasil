import { EnvironmentService } from '@gm50x/environment';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * @deprecated
 * Don't use this guard anymore, use Authentication and jwt guards instead
 */
@Injectable()
export class AccessTokenGuard implements CanActivate {
  constructor(private readonly env: EnvironmentService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const accessTokens: Array<string> = this.env
      .get('ACCESS_TOKENS')
      .split(';');

    const request = context.switchToHttp().getRequest();
    const { token } = request.headers;

    return accessTokens.includes(token);
  }
}
