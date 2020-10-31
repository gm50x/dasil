import { EnvironmentModule, EnvironmentService } from '@gm50x/environment';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { ValidateUserUseCase } from './core/use-cases/validate-user.use-case';
import { GenerateUserAccessTokenUseCase } from './core/use-cases/generate-user-access-token.use-case';
import { UsersModule } from './users/users.module';
import { BasicStrategy } from './strategies/basic.strategy';
import { AuthRoute } from './routes/auth.route';

@Module({
  imports: [
    EnvironmentModule,
    PassportModule,
    UsersModule,
    JwtModule.registerAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentService],
      useFactory: (env: EnvironmentService) => {
        return {
          secret: env.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '5m',
          },
        };
      },
    }),
  ],
  exports: [],
  providers: [
    GenerateUserAccessTokenUseCase,
    ValidateUserUseCase,
    LocalStrategy,
    BasicStrategy,
    JwtStrategy,
  ],
  controllers: [AuthRoute],
})
export class AuthModule {}
