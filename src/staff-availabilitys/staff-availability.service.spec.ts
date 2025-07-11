import { Test, TestingModule } from '@nestjs/testing';
import { StaffAvailabilityService } from './staff-availability.service';

describe('StaffAvailabilityService', () => {
  let service: StaffAvailabilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffAvailabilityService],
    }).compile();

    service = module.get<StaffAvailabilityService>(StaffAvailabilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
