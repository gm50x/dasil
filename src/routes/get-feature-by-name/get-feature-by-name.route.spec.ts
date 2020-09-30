import { MockUseCase } from '@gm50x/common';
import { Test, TestingModule } from '@nestjs/testing';
import { GetFeatureByNameUseCase } from '../../core';
import { GetFeatureByNameRoute } from './get-feature-by-name.route';

describe(GetFeatureByNameRoute.name, () => {
  let instance: GetFeatureByNameRoute;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetFeatureByNameRoute],
      providers: [{ provide: GetFeatureByNameUseCase, useClass: MockUseCase }],
    }).compile();

    instance = app.get(GetFeatureByNameRoute);
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });
});
