import { InHeaders } from '@gm50x/common';
import { Controller, Get, Headers } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAllFruitsUseCase } from '../../core/fruits/get-all-fruits.use-case';
import { GetAllFruitsInput } from '../../core/fruits/io/get-all-fruits.input';
import { GetAllFruitsOutput } from '../../core/fruits/io/get-all-fruits.output';

@ApiTags('Fruits')
@Controller('fruit')
export class GetAllFruitsRoute {
  constructor(private readonly getAllFruitsUseCase: GetAllFruitsUseCase) {}

  @Get()
  @ApiResponse({ status: 200, type: GetAllFruitsOutput })
  async activate(
    @InHeaders() @Headers() input: GetAllFruitsInput,
  ): Promise<GetAllFruitsOutput> {
    return this.getAllFruitsUseCase.activate(input);
  }
}
