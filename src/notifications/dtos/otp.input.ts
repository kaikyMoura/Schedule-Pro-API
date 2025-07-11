import { Field, InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * Input type for OTP verification
 * @description This input type is used to verify an OTP for a phone number
 * @example
 * ```typescript
 * const otpInput: OtpInput = {
 *   phone: '1234567890',
 *   code: '123456',
 * };
 * ```
 */
@InputType()
export class OtpInput {
  @Field()
  @IsNotEmpty()
  @MinLength(10, { message: 'Phone number must be at least 10 characters' })
  @IsPhoneNumber('US', { message: 'Invalid phone number' })
  phone: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'Code must be at least 6 characters' })
  @MaxLength(6, { message: 'Code must be at most 6 characters' })
  code: string;
}
