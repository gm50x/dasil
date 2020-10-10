import {
  RequestError,
  ServerError,
  AccessTokenGuard,
  RequestForbiddenError,
  TokenInput,
} from '@gm50x/common';
import { Controller, Get, Headers, Param, UseGuards } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetFeatureToggleByNameInput,
  GetFeatureToggleByNameOutput,
  GetFeatureToggleByNameUseCase,
} from '../../../core';

@Controller('features')
@ApiTags('Features')
@UseGuards(AccessTokenGuard)
export class GetFeatureToggleByNameRoute {
  constructor(private readonly useCase: GetFeatureToggleByNameUseCase) {}

  @Get(':toggleName')
  @ApiResponse({ status: 200, type: GetFeatureToggleByNameOutput })
  @ApiResponse({ status: 400, type: RequestError })
  @ApiResponse({ status: 403, type: RequestForbiddenError })
  @ApiResponse({ status: 500, type: ServerError })
  async activate(
    @Param() input: GetFeatureToggleByNameInput,
    @Headers() token?: TokenInput,
  ): Promise<GetFeatureToggleByNameOutput> {
    return await this.useCase.activate(input);
  }
}
