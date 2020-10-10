import { RequestError, ServerError } from '@gm50x/common';
import { Controller, Param, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  FlipFeatureToggleStateByNameInput,
  FlipFeatureToggleStateByNameOutput,
  FlipFeatureToggleStateByNameUseCase,
} from '../../../core';

@Controller('features')
@ApiTags('Features')
export class FlipFeatureToggleStateByNameRoute {
  constructor(private readonly useCase: FlipFeatureToggleStateByNameUseCase) {}

  @Put(':toggleName')
  @ApiResponse({ status: 200, type: FlipFeatureToggleStateByNameOutput })
  @ApiResponse({ status: 400, type: RequestError })
  @ApiResponse({ status: 500, type: ServerError })
  async activate(
    @Param() input: FlipFeatureToggleStateByNameInput,
  ): Promise<FlipFeatureToggleStateByNameOutput> {
    return await this.useCase.activate(input);
  }
}
