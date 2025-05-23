import { OmitType } from '@nestjs/swagger';
import { BaseServiceItemDto } from './base-service-item.dto';

export class UpdateServiceItemDto extends OmitType(BaseServiceItemDto, [
  'id',
] as const) {}
