import { Field, InputType } from '@nestjs/graphql';
import { Transform } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Gender, Role } from 'prisma/app/generated/prisma/client';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty()
  @Transform(({ value }) => (value as string).toLowerCase().trim())
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
  @IsPhoneNumber(undefined, { message: 'Please provide a valid phone number' })
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

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  @IsEnum(Gender as unknown as object, {
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
