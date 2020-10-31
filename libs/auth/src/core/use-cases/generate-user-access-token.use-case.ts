import { User } from '@gm50x/auth/users/core/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class GenerateUserAccessTokenUseCase {
  constructor(private jwtService: JwtService) {}

  async activate(user: User) {
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
