import { InHeaders } from '@gm50x/common';
import { Controller, Get, Headers } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAllAnimalsUseCase } from '../../core/animals/get-all-animals.use-case';
import { GetAllAnimalsInput } from '../../core/animals/io/get-all-animals.input';
import { GetAllAnimalsOutput } from '../../core/animals/io/get-all-animals.output';

@ApiTags('Animals')
@Controller('animal')
export class GetAllAnimalsRoute {
  constructor(private readonly getAllAnimalsUseCase: GetAllAnimalsUseCase) {}
  @Get()
  @ApiResponse({ status: 200, type: GetAllAnimalsOutput })
  async activate(
    @InHeaders() @Headers() input: GetAllAnimalsInput,
  ): Promise<GetAllAnimalsOutput> {
    return await this.getAllAnimalsUseCase.activate(input);
  }
}
