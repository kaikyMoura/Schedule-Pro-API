import { IsDate, IsOptional, IsString, IsUUID } from 'class-validator';

export class BaseUserSessionDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsUUID()
  userId: string;

  @IsString()
  refreshToken: string;

  @IsOptional()
  @IsString()
  userAgent?: string;

  @IsOptional()
  @IsString()
  ipAddress?: string;

  @IsOptional()
  @IsDate()
  expiresAt?: Date;
}
