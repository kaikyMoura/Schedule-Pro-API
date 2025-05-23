import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { Role } from 'prisma/app/generated/prisma/client';
import { BaseAppointmentDto } from 'src/appointment/dto/base-appointment.dto';

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
  photo?: string;

  @ApiProperty({ example: 'ADMIN', enum: Role })
  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @IsObject()
  appointments?: BaseAppointmentDto[];

  @IsOptional()
  @IsObject()
  services?: BaseAppointmentDto[];

  @IsOptional()
  @IsObject()
  staffAppointments?: BaseAppointmentDto[];
}
