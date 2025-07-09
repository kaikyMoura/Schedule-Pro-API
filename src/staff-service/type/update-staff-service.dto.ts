import { OmitType } from '@nestjs/swagger';
import { BaseStaffServiceDto } from './staff-service.type';
export class UpdateStaffServiceDto extends OmitType(BaseStaffServiceDto, [
  'id',
  'createdAt',
] as const) {}
