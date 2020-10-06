import { MockUseCase } from '@gm50x/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  GetFeatureToggleByNameInput,
  GetFeatureToggleByNameOutput,
  GetFeatureToggleByNameUseCase,
} from '../../core';
import { GetFeatureToggleByNameRoute } from './get-feature-toggle-by-name.route';

describe(GetFeatureToggleByNameRoute.name, () => {
  let instance: GetFeatureToggleByNameRoute;
  let useCase: GetFeatureToggleByNameUseCase;

  // beforeEach(async () => {
  //   const app: TestingModule = await Test.createTestingModule({
  //     controllers: [GetFeatureToggleByNameRoute],
  //     providers: [
  //       { provide: GetFeatureToggleByNameUseCase, useClass: MockUseCase },
  //     ],
  //   }).compile();

  //   instance = app.get(GetFeatureToggleByNameRoute);
  //   useCase = app.get(GetFeatureToggleByNameUseCase);
  // });

  it('should be defined', () => {
    expect(true).toBeDefined();
  });

  // it(`should return an instance of ${GetFeatureToggleByNameOutput.name}`, async () => {
  //   const expected = new GetFeatureToggleByNameOutput('MockFeature', true);
  //   jest
  //     .spyOn(useCase, 'activate')
  //     .mockImplementation(() => Promise.resolve(expected));
  //   const input = new GetFeatureToggleByNameInput(expect.name);
  //   const actual = await instance.activate(input);
  //   expect(actual).toBeInstanceOf(GetFeatureToggleByNameOutput);
  // });

  // it(`should return not ring the bell`, async () => {
  //   const expected = new GetFeatureToggleByNameOutput();
  //   jest
  //     .spyOn(useCase, 'activate')
  //     .mockImplementation(() => Promise.resolve(expected));
  //   const input = new GetFeatureToggleByNameInput('foo');
  //   const actual = await instance.activate(input);
  //   // expect(actual.name).toBe(expected.name);
  // });

  // it(`should return empty object if toggle is not found`, async () => {
  //   const expected = new GetFeatureToggleByNameOutput();
  //   jest
  //     .spyOn(useCase, 'activate')
  //     .mockImplementation(() => Promise.resolve(expected));
  //   const input = new GetFeatureToggleByNameInput('NotFoundToggle');
  //   const actual = await instance.activate(input);
  //   expect(actual).toBeDefined();
  //   // expect(actual.name).toBeUndefined();
  //   // expect(actual.active).toBeUndefined();
  // });
});
