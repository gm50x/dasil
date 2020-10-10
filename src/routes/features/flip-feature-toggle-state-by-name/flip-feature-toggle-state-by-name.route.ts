import {
  RequestError,
  ServerError,
  AccessTokenGuard,
  TokenInput,
  RequestForbiddenError,
} from '@gm50x/common';
import { Controller, Headers, Param, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  FlipFeatureToggleStateByNameInput,
  FlipFeatureToggleStateByNameOutput,
  FlipFeatureToggleStateByNameUseCase,
} from '../../../core';

@Controller('features')
@ApiTags('Features')
@UseGuards(AccessTokenGuard)
export class FlipFeatureToggleStateByNameRoute {
  constructor(private readonly useCase: FlipFeatureToggleStateByNameUseCase) {}

  @Put(':toggleName')
  @ApiResponse({ status: 200, type: FlipFeatureToggleStateByNameOutput })
  @ApiResponse({ status: 400, type: RequestError })
  @ApiResponse({ status: 403, type: RequestForbiddenError })
  @ApiResponse({ status: 500, type: ServerError })
  async activate(
    @Param() input: FlipFeatureToggleStateByNameInput,
    @Headers() token?: TokenInput,
  ): Promise<FlipFeatureToggleStateByNameOutput> {
    return await this.useCase.activate(input);
  }
}
