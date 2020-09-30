import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeatureToggle } from './entities/feature-toggle.entity';
import { GetFeatureToggleByNameInput } from './io/get-feature-toggle-by-name.input';
import { GetFeatureToggleByNameOutput } from './io/get-feature-toggle-by-name.output';

@Injectable()
export class GetFeatureToggleByNameUseCase {
  constructor(
    @InjectRepository(FeatureToggle)
    private readonly featuresRepo: Repository<FeatureToggle>,
  ) {}

  async activate(
    input: GetFeatureToggleByNameInput,
  ): Promise<GetFeatureToggleByNameOutput> {
    const feature = await this.featuresRepo.findOne(input.toggleName);
    return new GetFeatureToggleByNameOutput(feature?.name, feature?.active);
  }
}
