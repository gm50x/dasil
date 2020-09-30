import { MockRepository } from '@gm50x/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { FeatureToggle } from './entities/feature-toggle.entity';
import { GetFeatureToggleByNameUseCase } from './get-feature-toggle-by-name.use-case';
import { GetFeatureToggleByNameInput } from './io/get-feature-toggle-by-name.input';
import { GetFeatureToggleByNameOutput } from './io/get-feature-toggle-by-name.output';

describe(GetFeatureToggleByNameUseCase.name, () => {
  let instance: GetFeatureToggleByNameUseCase;
  let repo: Repository<FeatureToggle>;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetFeatureToggleByNameUseCase],
      providers: [
        { provide: 'FeatureToggleRepository', useClass: MockRepository },
      ],
    }).compile();

    instance = app.get(GetFeatureToggleByNameUseCase);
    repo = app.get('FeatureToggleRepository');
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });

  it(`should return an instance of ${GetFeatureToggleByNameOutput.name}`, async () => {
    const expected = new FeatureToggle('MockFeature', true);
    jest
      .spyOn(repo, 'findOne')
      .mockImplementation(() => Promise.resolve(expected));
    const input = new GetFeatureToggleByNameInput(expected.name);
    const actual = await instance.activate(input);
    expect(actual).toBeInstanceOf(GetFeatureToggleByNameOutput);
  });

  it(`should return not ring the bell`, async () => {
    const expected = new FeatureToggle('MockFeature', true);
    jest
      .spyOn(repo, 'findOne')
      .mockImplementation(() => Promise.resolve(expected));
    const input = new GetFeatureToggleByNameInput(expected.name);
    const actual = await instance.activate(input);
    expect(actual.name).toBe(expected.name);
  });

  it(`should return empty object if toggle is not found`, async () => {
    jest
      .spyOn(repo, 'findOne')
      .mockImplementation(() => Promise.resolve(undefined));
    const input = new GetFeatureToggleByNameInput('NotFoundToggle');
    const actual = await instance.activate(input);
    expect(actual).toBeDefined();
    expect(actual.name).toBeUndefined();
    expect(actual.active).toBeUndefined();
  });
});
