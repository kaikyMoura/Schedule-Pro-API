import { Test, TestingModule } from '@nestjs/testing';
import { StaffServiceResolver } from './staff-service.resolver';

describe('StaffServiceResolver', () => {
  let resolver: StaffServiceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffServiceResolver],
    }).compile();

    resolver = module.get<StaffServiceResolver>(StaffServiceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
