import { Test, TestingModule } from '@nestjs/testing';
import { StaffServiceController } from './staff-service.controller';

describe('StaffServiceController', () => {
  let controller: StaffServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffServiceController],
    }).compile();

    controller = module.get<StaffServiceController>(StaffServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
