import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from '../../../../core/hollywood/entities/movie.entity';
import { Repository } from 'typeorm';
import { FeatureToggle } from '../../entities/feature-toggle.entity';
import { GetFeatureToggleByNameInput } from './io/get-feature-toggle-by-name.input';
import { GetFeatureToggleByNameOutput } from './io/get-feature-toggle-by-name.output';

@Injectable()
export class GetFeatureToggleByNameUseCase {
  constructor(
    @InjectRepository(Movie)
    private readonly moviesRepo: Repository<Movie>,
  ) {}

  async activate(
    input: GetFeatureToggleByNameInput,
  ): Promise<GetFeatureToggleByNameOutput> {
    // const feature = await this.featuresRepo.findOne(input.toggleName);
    console.time('query-movies');
    const movies = await this.moviesRepo.find({
      relations: ['genre', 'actors'],
    });
    console.timeEnd('query-movies');
    // console.log(movies);

    return movies as GetFeatureToggleByNameOutput;
  }
}
