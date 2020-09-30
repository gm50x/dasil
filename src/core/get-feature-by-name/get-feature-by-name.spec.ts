import { MockRepository } from '@gm50x/common';
import { Test, TestingModule } from '@nestjs/testing';
import { GetFeatureByNameUseCase } from './get-feature-by-name';

describe(GetFeatureByNameUseCase.name, () => {
  let instance: GetFeatureByNameUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetFeatureByNameUseCase],
      providers: [
        { provide: 'FeatureToggleRepository', useClass: MockRepository },
      ],
    }).compile();

    instance = app.get(GetFeatureByNameUseCase);
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });
});
