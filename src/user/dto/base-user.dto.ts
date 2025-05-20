import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from 'prisma/app/generated/prisma/client';

export class BaseUserDto {
  @IsString()
  id: string;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john.doe@example.com', uniqueItems: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'securePassword123' })
  @IsString()
  @MinLength(6)
  @IsNotEmpty()
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
}
