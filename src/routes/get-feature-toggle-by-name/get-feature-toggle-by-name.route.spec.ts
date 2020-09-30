import { MockUseCase } from '@gm50x/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  GetFeatureByNameInput,
  GetFeatureByNameOutput,
  GetFeatureByNameUseCase,
} from '../../core';
import { GetFeatureByNameRoute } from './get-feature-toggle-by-name.route';

describe(GetFeatureByNameRoute.name, () => {
  let instance: GetFeatureByNameRoute;
  let useCase: GetFeatureByNameUseCase;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GetFeatureByNameRoute],
      providers: [{ provide: GetFeatureByNameUseCase, useClass: MockUseCase }],
    }).compile();

    instance = app.get(GetFeatureByNameRoute);
    useCase = app.get(GetFeatureByNameUseCase);
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });

  it(`should return an instance of ${GetFeatureByNameOutput.name}`, async () => {
    const expected = new GetFeatureByNameOutput('MockFeature', true);
    jest
      .spyOn(useCase, 'activate')
      .mockImplementation(() => Promise.resolve(expected));
    const input = new GetFeatureByNameInput(expect.name);
    const actual = await instance.activate(input);
    expect(actual).toBeInstanceOf(GetFeatureByNameOutput);
  });

  it(`should return not ring the bell`, async () => {
    const expected = new GetFeatureByNameOutput('MockFeature', true);
    jest
      .spyOn(useCase, 'activate')
      .mockImplementation(() => Promise.resolve(expected));
    const input = new GetFeatureByNameInput(expected.name);
    const actual = await instance.activate(input);
    expect(actual.name).toBe(expected.name);
  });

  it(`should return empty object if toggle is not found`, async () => {
    const expected = new GetFeatureByNameOutput();
    jest
      .spyOn(useCase, 'activate')
      .mockImplementation(() => Promise.resolve(expected));
    const input = new GetFeatureByNameInput('NotFoundToggle');
    const actual = await instance.activate(input);
    expect(actual).toBeDefined();
    expect(actual.name).toBeUndefined();
    expect(actual.active).toBeUndefined();
  });
});
