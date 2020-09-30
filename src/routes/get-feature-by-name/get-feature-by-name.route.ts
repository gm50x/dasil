import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  GetFeatureByNameInput,
  GetFeatureByNameOutput,
  GetFeatureByNameUseCase,
} from '../../core';

@Controller('features')
@ApiTags('Features')
export class GetFeatureByNameRoute {
  constructor(private readonly getFeatureByName: GetFeatureByNameUseCase) {}

  @Get()
  async activate(
    @Param() input: GetFeatureByNameInput,
  ): Promise<GetFeatureByNameOutput> {
    return this.getFeatureByName.activate(input);
  }
}
