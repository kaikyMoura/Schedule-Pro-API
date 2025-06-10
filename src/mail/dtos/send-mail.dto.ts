import { IsEmail, IsOptional, IsString } from 'class-validator';

export class SendMailDto {
  @IsEmail()
  to: string;

  @IsOptional()
  @IsEmail()
  from?: string;

  @IsString()
  subject?: string;

  @IsString()
  text?: string;

  @IsString()
  html?: string;

  @IsOptional()
  @IsString()
  token?: string;
}
