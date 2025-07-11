import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender, Role } from 'prisma/app/generated/prisma/client';
import { IsUniqueEmail } from 'src/users/validators/unique-mail.validator';
import { IsUniquePhone } from 'src/users/validators/unique-phone.validator';

registerEnumType(Gender, {
  name: 'Gender',
  description: 'User gender',
});

/**
 * Input type for creating a user
 * @description This input type is used to create a user
 * @example
 * ```typescript
 * const createUserInput: CreateUserInput = {
 *   email: 'test@example.com',
 *   password: 'Password123!',
 *   firstName: 'John',
 *   lastName: 'Doe',
 *   phone: '1234567890',
 *   avatar: 'https://example.com/avatar.jpg',
 *   role: Role.CUSTOMER,
 *   dateOfBirth: new Date('1990-01-01'),
 *   gender: Gender.MALE,
 *   address: '123 Main St, Anytown, USA',
 *   city: 'Anytown',
 *   state: 'CA',
 *   zipCode: '12345',
 *   country: 'USA',
 *   timezone: 'America/New_York',
 *   language: 'en',
 *   currency: 'USD',
 * };
 * ```
 */
@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty()
  @Transform(({ value }) => (value as string).toLowerCase().trim())
  @IsUniqueEmail({ message: 'This email is already registered.' })
  email: string;

  @Field()
  @IsString()
  @MinLength(8, { message: 'The password must be at least 8 characters long' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'The password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  password: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'First name is required' })
  @MinLength(2)
  @Transform(({ value }) => (value as string).trim())
  firstName: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Last name is required' })
  @MinLength(2)
  @Transform(({ value }) => (value as string).trim())
  lastName: string;

  @Field()
  @IsNotEmpty({ message: 'Phone number is required' })
  @IsString({ message: 'Phone number must be a string' })
  @IsUniquePhone({ message: 'This phone number is already registered.' })
  phone: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  avatar?: string;

  @Field({ defaultValue: Role.CUSTOMER })
  @IsOptional()
  @IsEnum(Role, { message: 'Please provide a valid role' })
  role?: Role;

  @Field({ nullable: true })
  @IsOptional()
  @IsDate({ message: 'dateOfBirth must be a valid date' })
  dateOfBirth?: Date;

  @Field(() => Gender, { nullable: true })
  @IsOptional()
  @IsEnum(Gender, {
    message: 'gender must be one of the following values: MALE, FEMALE, OTHER',
  })
  gender?: Gender;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(200, { message: 'address must be at most 200 characters' })
  address?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(50, { message: 'city must be at most 50 characters' })
  city?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(50, { message: 'state must be at most 50 characters' })
  state?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(20, { message: 'zipCode must be at most 20 characters' })
  zipCode?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(50, { message: 'country must be at most 50 characters' })
  country?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(50, { message: 'timezone must be at most 50 characters' })
  timezone?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(50, { message: 'language must be at most 50 characters' })
  language?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @MaxLength(50, { message: 'currency must be at most 50 characters' })
  currency?: string;
}
