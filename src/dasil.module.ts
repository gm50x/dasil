import { DatabaseModule } from '@gm50x/database';
import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetFeatureByNameRoute, GetFeatureByNameUseCase } from '.';
import { FeatureToggle } from './core/get-feature-by-name/entities/feature-toggle.entity';

@Module({
  imports: [
    EnvironmentModule,
    AutoSwaggerModule,
    DatabaseModule.fromEnvironmentKeys(['DATABASE']),
    TypeOrmModule.forFeature([FeatureToggle]),
  ],
  controllers: [GetFeatureByNameRoute],
  providers: [GetFeatureByNameUseCase],
})
export class DasilModule {}
