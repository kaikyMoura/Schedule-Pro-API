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

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  photo?: string;

  @IsOptional()
  @IsObject()
  appointments?: Appointment[];
}
