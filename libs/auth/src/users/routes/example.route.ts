import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Example')
@Controller()
export class ExampleRoute {
  async activate(): Promise<void> {
    await Promise.resolve();
  }
}
