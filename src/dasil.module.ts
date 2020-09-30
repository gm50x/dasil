import { DatabaseModule } from '@gm50x/database';
import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetFeatureToggleByNameRoute, GetFeatureToggleByNameUseCase } from '.';
import { FeatureToggle } from './core/get-feature-toggle-by-name/entities/feature-toggle.entity';

@Module({
  imports: [
    EnvironmentModule,
    AutoSwaggerModule,
    DatabaseModule.fromEnvironmentKeys(['DATABASE']),
    TypeOrmModule.forFeature([FeatureToggle]),
  ],
  controllers: [GetFeatureToggleByNameRoute],
  providers: [GetFeatureToggleByNameUseCase],
})
export class DasilModule {}
