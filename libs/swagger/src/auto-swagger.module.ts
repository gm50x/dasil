import { EnvironmentModule } from '@gm50x/environment';
import { Module } from '@nestjs/common';
import { AutoSwaggerService } from './auto-swagger.service';

@Module({
  imports: [EnvironmentModule],
  providers: [AutoSwaggerService],
  exports: [AutoSwaggerService],
})
export class AutoSwaggerModule {}
