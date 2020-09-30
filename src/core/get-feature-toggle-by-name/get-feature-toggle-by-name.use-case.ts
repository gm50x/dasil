import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeatureToggle } from './entities/feature-toggle.entity';
import { GetFeatureByNameInput } from './io/get-feature-toggle-by-name.input';
import { GetFeatureByNameOutput } from './io/get-feature-toggle-by-name.output';

@Injectable()
export class GetFeatureByNameUseCase {
  constructor(
    @InjectRepository(FeatureToggle)
    private readonly featuresRepo: Repository<FeatureToggle>,
  ) {}

  async activate(
    input: GetFeatureByNameInput,
  ): Promise<GetFeatureByNameOutput> {
    const feature = await this.featuresRepo.findOne(input.toggleName);
    return new GetFeatureByNameOutput(feature?.name, feature?.active);
  }
}