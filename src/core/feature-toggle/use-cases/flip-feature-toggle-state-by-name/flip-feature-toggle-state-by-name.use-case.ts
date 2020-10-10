import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeatureToggle } from '../../entities/feature-toggle.entity';
import { FlipFeatureToggleStateByNameInput } from './io/flip-feature-toggle-state-by-name.input';
import { FlipFeatureToggleStateByNameOutput } from './io/flip-feature-toggle-state-by-name.output';

@Injectable()
export class FlipFeatureToggleStateByNameUseCase {
  constructor(
    @InjectRepository(FeatureToggle)
    private readonly featuresRepo: Repository<FeatureToggle>,
  ) {}

  async activate(
    input: FlipFeatureToggleStateByNameInput,
  ): Promise<FlipFeatureToggleStateByNameOutput> {
    const feature = await this.featuresRepo.findOne(input.toggleName);

    if (!feature) {
      const output = new FlipFeatureToggleStateByNameOutput();
      output.errors = [
        `Feature Toggle '::${input.toggleName}::' could not be found`,
      ];
      return output;
    }

    feature.active = !feature.active;
    await this.featuresRepo.save(feature);
    return new FlipFeatureToggleStateByNameOutput(feature.name, feature.active);
  }
}
