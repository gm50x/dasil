import { AuthModule } from '@gm50x/auth';
import { DatabaseModule } from '@gm50x/database';
import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { HttpModule, Module } from '@nestjs/common';
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
    AuthModule,
    EnvironmentModule,
    AutoSwaggerModule,
    HttpModule,
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
