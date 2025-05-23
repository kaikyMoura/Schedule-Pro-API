import { ApiProperty, OmitType } from '@nestjs/swagger';
import { BaseServiceItemDto } from './base-service-item.dto';

export class ServiceItemResponseDto extends OmitType(BaseServiceItemDto, [
  'id',
  'staffId',
] as const) {
  @ApiProperty({ example: 'Dr. John Doe' })
  staffName?: string;
}
