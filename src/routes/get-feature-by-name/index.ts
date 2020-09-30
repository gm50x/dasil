import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('features')
@ApiTags('Features')
export class GetFeatureByNameRoute {
  @Get()
  async activate(): Promise<any> {
    return 'Hello World!';
  }
}
