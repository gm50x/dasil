import { BasicStrategy as Strategy } from 'passport-http';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ValidateUserUseCase } from '../core/use-cases/validate-user.use-case';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly validateUserUseCase: ValidateUserUseCase) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.validateUserUseCase.activate(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
