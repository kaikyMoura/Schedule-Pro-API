import { OmitType } from '@nestjs/swagger';
import { BaseStaffServiceDto } from './staff-service.type';

export class CreateStaffServiceDto extends OmitType(BaseStaffServiceDto, [
  'id',
  'createdAt',
] as const) {}
