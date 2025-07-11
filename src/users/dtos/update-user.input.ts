import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput extends OmitType(PartialType(CreateUserInput), [
  'password',
] as const) {
  @Field({ nullable: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  verificationToken?: string;
}
