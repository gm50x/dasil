import { MockRepository } from '@gm50x/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { FeatureToggle } from '../../entities/feature-toggle.entity';
import { FlipFeatureToggleStateByNameUseCase } from './flip-feature-toggle-state-by-name.use-case';
import { FlipFeatureToggleStateByNameInput } from './io/flip-feature-toggle-state-by-name.input';
import { FlipFeatureToggleStateByNameOutput } from './io/flip-feature-toggle-state-by-name.output';

describe(FlipFeatureToggleStateByNameUseCase.name, () => {
  let instance: FlipFeatureToggleStateByNameUseCase;
  let repo: Repository<FeatureToggle>;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FlipFeatureToggleStateByNameUseCase],
      providers: [
        { provide: 'FeatureToggleRepository', useClass: MockRepository },
      ],
    }).compile();

    instance = app.get(FlipFeatureToggleStateByNameUseCase);
    repo = app.get('FeatureToggleRepository');
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });

  it(`should return an instance of ${FlipFeatureToggleStateByNameOutput.name}`, async () => {
    const expected = new FeatureToggle('MockFeature', true);
    jest
      .spyOn(repo, 'findOne')
      .mockImplementation(() => Promise.resolve(expected));

    jest
      .spyOn(repo, 'save')
      .mockImplementation(() => Promise.resolve(expected));

    const input = new FlipFeatureToggleStateByNameInput(expected.name);
    const actual = await instance.activate(input);
    expect(actual).toBeInstanceOf(FlipFeatureToggleStateByNameOutput);
  });

  it(`should return not ring the bell`, async () => {
    const expected = new FeatureToggle('MockFeature', true);
    jest
      .spyOn(repo, 'findOne')
      .mockImplementation(() => Promise.resolve(expected));
    jest
      .spyOn(repo, 'save')
      .mockImplementation(() => Promise.resolve(expected));

    const input = new FlipFeatureToggleStateByNameInput(expected.name);
    const actual = await instance.activate(input);
    expect(actual.name).toBe(expected.name);
  });

  it(`should return ${FlipFeatureToggleStateByNameOutput.name} with errors property`, async () => {
    jest
      .spyOn(repo, 'findOne')
      .mockImplementation(() => Promise.resolve(undefined));
    jest
      .spyOn(repo, 'save')
      .mockImplementation(() =>
        Promise.reject(new Error('Save got hit during tests')),
      );

    const input = new FlipFeatureToggleStateByNameInput('NotFoundToggle');
    const actual = await instance.activate(input);
    expect(actual).toBeDefined();
    expect(actual.errors).toBeDefined();
    expect(actual.name).toBeUndefined();
    expect(actual.active).toBeUndefined();
  });

  it(`should return ${FlipFeatureToggleStateByNameOutput.name} with errors as an array containing the error message`, async () => {
    jest
      .spyOn(repo, 'findOne')
      .mockImplementation(() => Promise.resolve(undefined));
    jest
      .spyOn(repo, 'save')
      .mockImplementation(() =>
        Promise.reject(new Error('Save got hit during tests')),
      );

    const input = new FlipFeatureToggleStateByNameInput('NotFoundToggle');
    const actual = await instance.activate(input);

    expect(actual.errors).toBeInstanceOf(Array);
    const [error] = actual.errors;
    expect(error).toBe(
      `Feature Toggle '::${input.toggleName}::' could not be found`,
    );
  });
});
