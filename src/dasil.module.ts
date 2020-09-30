import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { Module } from '@nestjs/common';
import { GetFeatureByNameRoute } from '.';

@Module({
  imports: [EnvironmentModule, AutoSwaggerModule],
  controllers: [GetFeatureByNameRoute],
  providers: [],
})
export class DasilModule {}
