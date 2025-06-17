import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';
import { Match } from 'src/config/validators/match.validator';

export class ChangePasswordDto {
  @ApiProperty({ example: 'securePassword123' })
  @IsOptional()
  @IsString({ message: 'Current password must be a text' })
  @MinLength(6, {
    message: 'Current password must be at least 6 characters long',
  })
  @IsNotEmpty({ message: 'Current password is required' })
  currentPassword: string;

  @ApiProperty({ example: 'newSecurePassword123' })
  @IsString({ message: 'New password must be a text' })
  @MinLength(6, {
    message: 'New password must be at least 6 characters long',
  })
  @Matches(/(?=.*[A-Z])/, {
    message: 'Password must contain at least one uppercase letter',
  })
  @Matches(/(?=.*\d)/, {
    message: 'Password must contain at least one number',
  })
  @Matches(/(?=.*[a-z])/, {
    message: 'Password must contain at least one lowercase letter',
  })
  @Matches(/(?=.*[!@#$%^&*()_\-+=<>?{}[\]~])/, {
    message: 'Password must contain at least one special character',
  })
  @IsNotEmpty({ message: 'New password is required' })
  newPassword: string;

  @ApiProperty({ example: 'newSecurePassword123' })
  @IsString({ message: 'Confirm new password must be a text' })
  @MinLength(6, {
    message: 'Confirm new password must be at least 6 characters long',
  })
  @Matches(/(?=.*[A-Z])/, {
    message: 'Password must contain at least one uppercase letter',
  })
  @Matches(/(?=.*\d)/, {
    message: 'Password must contain at least one number',
  })
  @Matches(/(?=.*[a-z])/, {
    message: 'Password must contain at least one lowercase letter',
  })
  @Matches(/(?=.*[!@#$%^&*()_\-+=<>?{}[\]~])/, {
    message: 'Password must contain at least one special character',
  })
  @Match('newPassword', {
    message: 'Confirm new password do not match new password',
  })
  @IsNotEmpty({ message: 'Confirm new password is required' })
  confirmNewPassword: string;
}
