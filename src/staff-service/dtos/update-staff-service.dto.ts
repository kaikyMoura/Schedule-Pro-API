import { OmitType } from '@nestjs/swagger';
import { BaseStaffServiceDto } from './base-staff-service.dto';
export class UpdateStaffServiceDto extends OmitType(BaseStaffServiceDto, [
  'id',
  'createdAt',
] as const) {}
