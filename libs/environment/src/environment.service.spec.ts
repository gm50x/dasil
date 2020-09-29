import { MockEnvironmentService } from '@gm50x/common/mocks/mock-environment.service';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
  let instance: EnvironmentService;
  let config: ConfigService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        { provide: ConfigService, useClass: MockEnvironmentService },
        EnvironmentService,
      ],
    }).compile();

    instance = module.get(EnvironmentService);
    config = module.get(ConfigService);
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });

  it('should have config dependecy defined', () => {
    expect(config).toBeDefined();
  });

  it('should return mock if MOCK is searched', () => {
    jest.spyOn(config, 'get').mockImplementation(key => key.toLowerCase());
    const actual = instance.get('MOCK');
    expect(actual).toBe('mock');
  });

  it('should return undefined if key is not found', () => {
    jest.spyOn(config, 'get').mockImplementation(() => undefined);
    const actual = instance.get('MOCK');
    expect(actual).toBeUndefined();
  });
});
