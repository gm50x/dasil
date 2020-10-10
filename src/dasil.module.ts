import { DatabaseModule } from '@gm50x/database';
import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  GetFeatureToggleByNameRoute,
  FlipFeatureToggleStateByNameRoute,
  GetFeatureToggleByNameUseCase,
  FlipFeatureToggleStateByNameUseCase,
  FeatureToggle,
} from '.';

@Module({
  imports: [
    EnvironmentModule,
    AutoSwaggerModule,
    DatabaseModule.fromEnvironmentKeys(['DATABASE']),
    TypeOrmModule.forFeature([FeatureToggle]),
  ],
  controllers: [GetFeatureToggleByNameRoute, FlipFeatureToggleStateByNameRoute],
  providers: [
    GetFeatureToggleByNameUseCase,
    FlipFeatureToggleStateByNameUseCase,
  ],
})
export class DasilModule {}
