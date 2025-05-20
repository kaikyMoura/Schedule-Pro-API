import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Appointment } from 'prisma/app/generated/prisma/client';

export class BaseCustomerDto {
  @IsString()
  id: string;

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

  @IsOptional()
  @IsObject()
  appointments?: Appointment[];
}
