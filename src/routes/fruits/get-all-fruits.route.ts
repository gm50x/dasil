import { InHeaders } from '@gm50x/common';
import { Controller, Get, Headers } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GetAllFruitsUseCase } from 'src/core/fruits/get-all-fruits.use-case';
import { GetAllFruitsInput } from 'src/core/fruits/io/get-all-fruits.input';
import { GetAllFruitsOutput } from 'src/core/fruits/io/get-all-fruits.output';

@ApiTags('Fruits')
@Controller('fruit')
export class GetAllFruitsRoute {
  constructor(private readonly getAllFruitsUseCase: GetAllFruitsUseCase) {}
  @Get()
  async activate(
    @InHeaders() @Headers() input: GetAllFruitsInput,
  ): Promise<GetAllFruitsOutput> {
    return this.getAllFruitsUseCase.activate(input);
  }
}
