import { Controller, Get } from '@nestjs/common';

@Controller('features')
export class GetFeatureByNameRoute {
  @Get()
  async activate(): Promise<any> {
    return 'Hello World!';
  }
}
