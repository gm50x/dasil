import { BasicAuthGuard } from '@gm50x/common/guards/basic-auth.guard';
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { GenerateUserAccessTokenUseCase } from '../core/use-cases/generate-user-access-token.use-case';

@ApiTags('Auth')
@Controller()
@ApiBasicAuth()
@UseGuards(BasicAuthGuard)
export class AuthRoute {
  constructor(private readonly authenticator: GenerateUserAccessTokenUseCase) {}
  @Post('auth')
  async activate(@Request() req) {
    return this.authenticator.activate(req.user);
  }
}
