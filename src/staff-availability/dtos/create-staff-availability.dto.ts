import { OmitType } from '@nestjs/swagger';
import { BaseStaffAvailabilityDto } from './base-staff-availability.dto';

export class CreateStaffAvailabilityDto extends OmitType(
  BaseStaffAvailabilityDto,
  ['id'] as const,
) {}
