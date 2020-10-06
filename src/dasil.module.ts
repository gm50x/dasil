import { DatabaseModule } from '@gm50x/database';
import { EnvironmentModule } from '@gm50x/environment';
import { AutoSwaggerModule } from '@gm50x/swagger';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  GetFeatureToggleByNameRoute,
  GetFeatureToggleByNameUseCase,
  FeatureToggle,
} from '.';
import { Genre } from './core/hollywood/entities/genre.entity';
import { Movie } from './core/hollywood/entities/movie.entity';
import { Person } from './core/hollywood/entities/person.entity';

@Module({
  imports: [
    EnvironmentModule,
    AutoSwaggerModule,
    DatabaseModule.fromEnvironmentKeys(['DATABASE']),
    TypeOrmModule.forFeature([FeatureToggle, Movie, Genre, Person]),
  ],
  controllers: [GetFeatureToggleByNameRoute],
  providers: [GetFeatureToggleByNameUseCase],
})
export class DasilModule {}
