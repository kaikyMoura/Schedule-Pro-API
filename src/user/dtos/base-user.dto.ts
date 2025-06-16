import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Role } from 'prisma/app/generated/prisma/client';
import { BaseAppointmentDto } from 'src/appointment/dtos/base-appointment.dto';
import { BaseStaffAvailabilityDto } from 'src/staff-availability/dtos/base-staff-availability.dto';

export class BaseUserDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiProperty({ example: 'Jane Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'jane.doe@example.com', uniqueItems: true })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'securePassword123' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: '1234567890' })
  @MinLength(6)
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  photo?: string | null;

  @ApiProperty({ example: 'ADMIN', enum: Role })
  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @IsString()
  verifiedAt?: Date | null;

  @IsOptional()
  @IsObject()
  appointments?: BaseAppointmentDto[];

  @ValidateNested({ each: true })
  @Type(() => BaseStaffAvailabilityDto)
  @IsOptional()
  @IsObject()
  availability?: BaseStaffAvailabilityDto;

  @IsOptional()
  @IsObject()
  services?: BaseAppointmentDto[];

  @IsOptional()
  @IsObject()
  staffAppointments?: BaseAppointmentDto[];
}
