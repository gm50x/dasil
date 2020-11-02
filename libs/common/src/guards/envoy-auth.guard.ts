import { EnvironmentService } from '@gm50x/environment';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  HttpService,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class EnvoyAuthGuard implements CanActivate {
  constructor(
    private readonly env: EnvironmentService,
    private readonly http: HttpService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const res = await this.http
        .get(this.env.get('TOKEN_VERIFICATION_URL'), {
          headers: request.headers,
        })
        .toPromise();
      return true;
    } catch (err) {
      const { statusCode, message } = err.response.data;
      if (statusCode === HttpStatus.UNAUTHORIZED) {
        throw new UnauthorizedException(message);
      } else if (statusCode === HttpStatus.FORBIDDEN) {
        throw new ForbiddenException(message);
      }
      return false;
    }
  }
}
