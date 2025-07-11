import { Test, TestingModule } from '@nestjs/testing';
import { StaffServiceService } from './staff-service.service';

describe('StaffServiceService', () => {
  let service: StaffServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffServiceService],
    }).compile();

    service = module.get<StaffServiceService>(StaffServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
