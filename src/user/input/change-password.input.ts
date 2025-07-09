import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength, Matches, IsOptional } from 'class-validator';
import { Match } from 'src/common/config/validators/match.validator';

@InputType()
export class ChangePasswordInput {
  @Field(() => String)
  @IsString()
  @MinLength(8, {
    message: 'The current password must be at least 8 characters long',
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'The current password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  currentPassword: string;

  @Field(() => String)
  @IsString()
  @Match('confirmPassword', { message: 'Passwords do not match' })
  @MinLength(8, {
    message: 'The new password must be at least 8 characters long',
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'The new password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  newPassword: string;

  @Field(() => String)
  @IsString()
  @IsOptional()
  @Match('newPassword', { message: 'Passwords do not match' })
  @MinLength(8, {
    message: 'The confirm password must be at least 8 characters long',
  })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, {
    message:
      'The confirm password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
  })
  confirmPassword?: string;
}
