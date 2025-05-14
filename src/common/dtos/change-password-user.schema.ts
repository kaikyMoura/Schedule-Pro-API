import { IsOptional, MinLength } from 'class-validator';

export class ChangePasswordDto {
  @IsOptional()
  @MinLength(6)
  currentPassword: string;

  @MinLength(6)
  newPassword: string;

  @MinLength(6)
  confirmNewPassword: string;
}
