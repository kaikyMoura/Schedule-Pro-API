import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class BaseStaffAvailabilityDto {
  @IsOptional()
  @IsUUID()
  id: string;

  @IsUUID()
  staffId: string;

  @IsInt()
  dayOfWeek: number;

  @IsString()
  startTime: string;

  @IsString()
  endTime: string;
}
