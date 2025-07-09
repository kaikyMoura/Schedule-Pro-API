import { OmitType } from '@nestjs/swagger';
import { BaseStaffAvailabilityDto } from './staff-availability.type';

export class UpdateStaffAvailabilityDto extends OmitType(
  BaseStaffAvailabilityDto,
  ['id'] as const,
) {}
