import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetFeatureByNameInput,
  GetFeatureByNameOutput,
  GetFeatureByNameUseCase,
} from '../../core';

@Controller('features')
@ApiTags('Features')
export class GetFeatureByNameRoute {
  constructor(private readonly getFeatureByName: GetFeatureByNameUseCase) {}

  @Get(':toggleName')
  @ApiResponse({ status: 200, type: GetFeatureByNameOutput })
  async activate(
    @Param() input: GetFeatureByNameInput,
  ): Promise<GetFeatureByNameOutput> {
    return await this.getFeatureByName.activate(input);
  }
}
