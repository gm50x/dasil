import { Injectable } from '@nestjs/common';
import { GetFeatureByNameInput } from './io/get-feature-by-name.input';
import { GetFeatureByNameOutput } from './io/get-feature-by-name.output';

@Injectable()
export class GetFeatureByNameUseCase {
  async activate(
    input: GetFeatureByNameInput,
  ): Promise<GetFeatureByNameOutput> {
    return Promise.resolve(new GetFeatureByNameOutput('', false));
  }
}
