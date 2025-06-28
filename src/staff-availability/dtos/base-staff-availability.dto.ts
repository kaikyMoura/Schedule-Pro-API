import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class BaseStaffAvailabilityDto {
  @IsOptional()
  @IsUUID()
  id: string;

  @IsUUID(undefined, { message: 'staffId must be a valid UUID' })
  staffId: string;

  @ApiProperty({ example: 1 })
  @IsInt({ message: 'dayOfWeek must be a number' })
  dayOfWeek: number;

  @ApiProperty({ example: '10:00' })
  @IsString({ message: 'startTime must be a string' })
  startTime: string;

  @ApiProperty({ example: '11:00' })
  @IsString({ message: 'endTime must be a string' })
  endTime: string;
}
