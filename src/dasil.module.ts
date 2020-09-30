import { DatabaseModule } from '@gm50x/database';
import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { Module } from '@nestjs/common';
import { GetFeatureByNameRoute, GetFeatureByNameUseCase } from '.';

@Module({
  imports: [
    EnvironmentModule,
    AutoSwaggerModule,
    DatabaseModule.fromEnvironmentKeys(['DATABASE']),
  ],
  controllers: [GetFeatureByNameRoute],
  providers: [GetFeatureByNameUseCase],
})
export class DasilModule {}
