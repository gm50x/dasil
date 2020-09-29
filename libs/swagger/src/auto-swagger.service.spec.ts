import { MockEnvironmentService } from '@gm50x/common/mocks/mock-environment.service';
import { EnvironmentService } from '@gm50x/environment';
import { Test, TestingModule } from '@nestjs/testing';
import { AutoSwaggerService } from './auto-swagger.service';

describe(AutoSwaggerService.name, () => {
  let service: AutoSwaggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AutoSwaggerService,
        { provide: EnvironmentService, useClass: MockEnvironmentService },
      ],
    }).compile();

    service = module.get(AutoSwaggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
