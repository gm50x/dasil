import {
  RequestError,
  ServerError,
  RequestForbiddenError,
} from '@gm50x/common';
import { EnvoyAuthGuard } from '@gm50x/common/guards/envoy-auth.guard';
import { Controller, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  FlipFeatureToggleStateByNameInput,
  FlipFeatureToggleStateByNameOutput,
  FlipFeatureToggleStateByNameUseCase,
} from '../../../core';

@Controller('features')
@ApiTags('Features')
@ApiBearerAuth()
@UseGuards(EnvoyAuthGuard)
export class FlipFeatureToggleStateByNameRoute {
  constructor(private readonly useCase: FlipFeatureToggleStateByNameUseCase) {}

  @Put(':toggleName')
  @ApiResponse({ status: 200, type: FlipFeatureToggleStateByNameOutput })
  @ApiResponse({ status: 400, type: RequestError })
  @ApiResponse({ status: 403, type: RequestForbiddenError })
  @ApiResponse({ status: 500, type: ServerError })
  async activate(
    @Param() input: FlipFeatureToggleStateByNameInput,
  ): Promise<FlipFeatureToggleStateByNameOutput> {
    return await this.useCase.activate(input);
  }
}
