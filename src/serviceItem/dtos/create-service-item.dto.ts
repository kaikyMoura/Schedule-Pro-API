import { OmitType } from '@nestjs/swagger';
import { BaseServiceItemDto } from './base-service-item.dto';

export class CreateServiceItemDto extends OmitType(BaseServiceItemDto, [
  'id',
  'appointments',
  'staffServices',
] as const) {}
