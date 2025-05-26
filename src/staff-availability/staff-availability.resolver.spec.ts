import { Test, TestingModule } from '@nestjs/testing';
import { StaffAvailabilityResolver } from './staff-availability.resolver';

describe('StaffAvailabilityResolver', () => {
  let resolver: StaffAvailabilityResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffAvailabilityResolver],
    }).compile();

    resolver = module.get<StaffAvailabilityResolver>(StaffAvailabilityResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
