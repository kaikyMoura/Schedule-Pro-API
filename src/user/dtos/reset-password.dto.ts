import { OmitType } from '@nestjs/swagger';
import { IsBase64, IsNotEmpty, MinLength } from 'class-validator';
import { ChangePasswordDto } from './change-password-user.schema';

export class ResetPasswordDto extends OmitType(ChangePasswordDto, [
  'currentPassword',
  'confirmNewPassword',
] as const) {
  @IsBase64()
  @MinLength(20)
  @IsNotEmpty()
  token: string;
}
