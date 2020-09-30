import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { Module } from '@nestjs/common';
import {} from '.';

@Module({
  imports: [EnvironmentModule, AutoSwaggerModule],
  controllers: [],
  providers: [],
})
export class DasilModule {}
