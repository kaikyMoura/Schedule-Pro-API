import { Field, InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

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
