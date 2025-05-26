import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class BaseStaffAvailabilityDto {
  @IsOptional()
  @IsUUID()
  id: string;

  @IsUUID()
  staffId: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  dayOfWeek: number;

  @ApiProperty({ example: '10:00' })
  @IsString()
  startTime: string;

  @ApiProperty({ example: '11:00' })
  @IsString()
  endTime: string;
}
