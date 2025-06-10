import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber } from 'class-validator';

export class BaseOtpDto {
  @ApiProperty({ example: '+1 (123) 456-7890' })
  @IsPhoneNumber('US', { message: 'Invalid phone number' })
  phone: string;

  @ApiProperty({ example: '123456' })
  code: string;
}
