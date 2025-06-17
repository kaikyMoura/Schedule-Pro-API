import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  IsUUID,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Role } from 'prisma/app/generated/prisma/client';
import { BaseAppointmentDto } from 'src/appointment/dtos/base-appointment.dto';
import { BaseStaffAvailabilityDto } from 'src/staff-availability/dtos/base-staff-availability.dto';

export class BaseUserDto {
  @IsOptional()
  @IsUUID(undefined, { message: 'Id must be a valid UUID' })
  id?: string;

  @ApiProperty({ example: 'Jane Doe' })
  @IsString({ message: 'Name must be a text' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({ example: 'jane.doe@example.com', uniqueItems: true })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({ example: 'securePassword123' })
  @IsString({ message: 'New password must be a text' })
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  @Matches(/(?=.*[A-Z])/, {
    message: 'Password must contain at least one uppercase letter',
  })
  @Matches(/(?=.*\d)/, {
    message: 'Password must contain at least one number',
  })
  @Matches(/(?=.*[a-z])/, {
    message: 'Password must contain at least one lowercase letter',
  })
  @Matches(/(?=.*[!@#$%^&*()_\-+=<>?{}[\]~])/, {
    message: 'Password must contain at least one special character',
  })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @ApiProperty({ example: '1234567890' })
  @IsPhoneNumber(undefined, { message: 'Invalid phone number' })
  @IsNotEmpty({ message: 'Phone number is required' })
  phone: string;

  @IsOptional()
  @IsUrl({ require_tld: false }, { message: 'Invalid URL' })
  photo?: string | null;

  @ApiProperty({ example: 'ADMIN', enum: Role })
  @IsEnum(Role, { message: 'Invalid role' })
  role: Role;

  @IsOptional()
  @IsDate({ message: 'Invalid date' })
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
