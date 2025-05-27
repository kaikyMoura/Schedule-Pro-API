import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Matches,
  MaxLength,
} from 'class-validator';
import { Status } from 'prisma/app/generated/prisma/client';

export class BaseAppointmentDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiProperty({ example: 'I am alergic to penicillin' })
  @IsString()
  @IsOptional()
  @MaxLength(250)
  notes: string;

  @ApiProperty({ example: '2025-05-01' })
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ example: '10:00 AM - 10:30 AM' })
  @IsString()
  @Matches(/^([0-1]\d|2[0-3]):([0-5]\d)$/)
  time: string;

  @ApiProperty({ example: 'PENDING', enum: Status })
  @IsEnum(Status)
  status: Status;

  @ApiProperty({ example: '100.0' })
  @IsString()
  @IsNotEmpty()
  price: number;

  @IsString()
  customerId: string;

  @IsOptional()
  @IsUUID()
  staffId?: string;

  @IsUUID()
  serviceId: string;
}
