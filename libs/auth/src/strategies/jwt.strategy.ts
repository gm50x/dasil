import { Strategy, ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { EnvironmentService } from '@gm50x/environment';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly env: EnvironmentService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.get('JWT_SECRET'),
    });
  }

  async validate(payload: any): Promise<any> {
    return { userId: payload.sub, username: payload.username };
  }
}
