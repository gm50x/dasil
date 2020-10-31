import { Module } from '@nestjs/common';
import { GetUserByUsernameUseCase } from './core/use-cases/validate-user/get-user-by-username.use-case';

@Module({
  providers: [GetUserByUsernameUseCase],
  exports: [GetUserByUsernameUseCase],
})
export class UsersModule {}
