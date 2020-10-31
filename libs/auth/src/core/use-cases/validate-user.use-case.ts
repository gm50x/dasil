import { GetUserByUsernameUseCase } from '@gm50x/auth/users/core/use-cases/validate-user/get-user-by-username.use-case';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidateUserUseCase {
  constructor(private useCase: GetUserByUsernameUseCase) {}

  async activate(username: string, password: string): Promise<any> {
    const user = await this.useCase.activate(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
