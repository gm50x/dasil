import { MockEnvironmentService, MockUseCase, TokenInput } from '@gm50x/common';
import { EnvironmentService } from '@gm50x/environment';
import { HttpModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  FlipFeatureToggleStateByNameInput,
  FlipFeatureToggleStateByNameOutput,
  FlipFeatureToggleStateByNameUseCase,
} from '../../../core';
import { FlipFeatureToggleStateByNameRoute } from './flip-feature-toggle-state-by-name.route';

describe(FlipFeatureToggleStateByNameRoute.name, () => {
  let instance: FlipFeatureToggleStateByNameRoute;
  let useCase: FlipFeatureToggleStateByNameUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FlipFeatureToggleStateByNameRoute],
      imports: [HttpModule],
      providers: [
        { provide: EnvironmentService, useClass: MockEnvironmentService },
        { provide: FlipFeatureToggleStateByNameUseCase, useClass: MockUseCase },
      ],
    }).compile();

    instance = app.get(FlipFeatureToggleStateByNameRoute);
    useCase = app.get(FlipFeatureToggleStateByNameUseCase);
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });

  it(`should return an instance of ${FlipFeatureToggleStateByNameOutput.name}`, async () => {
    const expected = new FlipFeatureToggleStateByNameOutput(
      'MockFeature',
      true,
    );
    jest
      .spyOn(useCase, 'activate')
      .mockImplementation(() => Promise.resolve(expected));
    const input = new FlipFeatureToggleStateByNameInput(expect.name);
    const actual = await instance.activate(input);
    expect(actual).toBeInstanceOf(FlipFeatureToggleStateByNameOutput);
  });

  it(`should return not ring the bell`, async () => {
    const expected = new FlipFeatureToggleStateByNameOutput(
      'MockFeature',
      true,
    );
    jest
      .spyOn(useCase, 'activate')
      .mockImplementation(() => Promise.resolve(expected));
    const input = new FlipFeatureToggleStateByNameInput(expected.name);
    const actual = await instance.activate(input);
    expect(actual.name).toBe(expected.name);
  });

  it(`should return empty object if toggle is not found`, async () => {
    const expected = new FlipFeatureToggleStateByNameOutput();
    jest
      .spyOn(useCase, 'activate')
      .mockImplementation(() => Promise.resolve(expected));
    const input = new FlipFeatureToggleStateByNameInput('NotFoundToggle');
    const actual = await instance.activate(input);
    expect(actual).toBeDefined();
    expect(actual.name).toBeUndefined();
    expect(actual.active).toBeUndefined();
  });
});
