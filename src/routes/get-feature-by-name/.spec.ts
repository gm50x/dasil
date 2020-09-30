import { Test, TestingModule } from '@nestjs/testing';
import { GetFeatureByNameRoute } from '.';

describe(GetFeatureByNameRoute.name, () => {
  let instance: GetFeatureByNameRoute;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetFeatureByNameRoute],
      providers: [],
    }).compile();

    instance = app.get(GetFeatureByNameRoute);
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });
});
