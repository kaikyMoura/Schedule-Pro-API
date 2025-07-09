import { OmitType } from '@nestjs/swagger';
import { BaseStaffAvailabilityDto } from './staff-availability.type';

export class CreateStaffAvailabilityDto extends OmitType(
  BaseStaffAvailabilityDto,
  ['id'] as const,
) {}
