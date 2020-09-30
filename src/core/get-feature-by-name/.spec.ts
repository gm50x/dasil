import { Test, TestingModule } from '@nestjs/testing';
import { GetFeatureByNameUseCase } from '.';

describe(GetFeatureByNameUseCase.name, () => {
  let instance: GetFeatureByNameUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetFeatureByNameUseCase],
      providers: [],
    }).compile();

    instance = app.get(GetFeatureByNameUseCase);
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });
});
