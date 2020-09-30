import { MockRepository } from '@gm50x/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { FeatureToggle } from './entities/feature-toggle.entity';
import { GetFeatureByNameUseCase } from './get-feature-by-name.use-case';
import { GetFeatureByNameInput } from './io/get-feature-by-name.input';
import { GetFeatureByNameOutput } from './io/get-feature-by-name.output';

describe(GetFeatureByNameUseCase.name, () => {
  let instance: GetFeatureByNameUseCase;
  let repo: Repository<FeatureToggle>;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetFeatureByNameUseCase],
      providers: [
        { provide: 'FeatureToggleRepository', useClass: MockRepository },
      ],
    }).compile();

    instance = app.get(GetFeatureByNameUseCase);
    repo = app.get('FeatureToggleRepository');
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });

  it(`should return an instance of ${GetFeatureByNameOutput.name}`, async () => {
    const expected = new FeatureToggle('MockFeature', true);
    jest
      .spyOn(repo, 'findOne')
      .mockImplementation(() => Promise.resolve(expected));
    const input = new GetFeatureByNameInput(expected.name);
    const actual = await instance.activate(input);
    expect(actual).toBeInstanceOf(GetFeatureByNameOutput);
  });

  it(`should return not ring the bell`, async () => {
    const expected = new FeatureToggle('MockFeature', true);
    jest
      .spyOn(repo, 'findOne')
      .mockImplementation(() => Promise.resolve(expected));
    const input = new GetFeatureByNameInput(expected.name);
    const actual = await instance.activate(input);
    expect(actual.name).toBe(expected.name);
  });

  it(`should return empty object if toggle is not found`, async () => {
    jest
      .spyOn(repo, 'findOne')
      .mockImplementation(() => Promise.resolve(undefined));
    const input = new GetFeatureByNameInput('NotFoundToggle');
    const actual = await instance.activate(input);
    expect(actual).toBeDefined();
    expect(actual.name).toBeUndefined();
    expect(actual.active).toBeUndefined();
  });
});
