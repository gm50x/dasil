import { RequestError, ServerError } from '@gm50x/common';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetFeatureToggleByNameInput,
  GetFeatureToggleByNameOutput,
  GetFeatureToggleByNameUseCase,
} from '../../core';

@Controller('features')
@ApiTags('Features')
export class GetFeatureToggleByNameRoute {
  constructor(
    private readonly getFeatureByName: GetFeatureToggleByNameUseCase,
  ) {}

  @Get(':toggleName')
  @ApiResponse({ status: 200, type: GetFeatureToggleByNameOutput })
  @ApiResponse({ status: 400, type: RequestError })
  @ApiResponse({ status: 500, type: ServerError })
  async activate(
    @Param() input: GetFeatureToggleByNameInput,
  ): Promise<GetFeatureToggleByNameOutput> {
    return await this.getFeatureByName.activate(input);
  }
}
