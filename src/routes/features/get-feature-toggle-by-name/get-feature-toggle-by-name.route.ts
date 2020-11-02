import {
  RequestError,
  ServerError,
  RequestForbiddenError,
} from '@gm50x/common';
import { EnvoyAuthGuard } from '@gm50x/common/guards/envoy-auth.guard';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetFeatureToggleByNameInput,
  GetFeatureToggleByNameOutput,
  GetFeatureToggleByNameUseCase,
} from '../../../core';

@Controller('features')
@ApiTags('Features')
@ApiBearerAuth()
@UseGuards(EnvoyAuthGuard)
export class GetFeatureToggleByNameRoute {
  constructor(private readonly useCase: GetFeatureToggleByNameUseCase) {}

  @Get(':toggleName')
  @ApiResponse({ status: 200, type: GetFeatureToggleByNameOutput })
  @ApiResponse({ status: 400, type: RequestError })
  @ApiResponse({ status: 403, type: RequestForbiddenError })
  @ApiResponse({ status: 500, type: ServerError })
  async activate(
    @Param() input: GetFeatureToggleByNameInput,
  ): Promise<GetFeatureToggleByNameOutput> {
    return await this.useCase.activate(input);
  }
}
