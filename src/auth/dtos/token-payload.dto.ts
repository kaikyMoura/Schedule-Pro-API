import { IsEnum, IsString, IsUUID } from 'class-validator';
import { Role } from 'prisma/app/generated/prisma/client';

export class TokenPayloadDto {
  @IsUUID()
  sub: string;

  @IsString()
  name?: string;

  @IsString()
  email: string;

  @IsEnum(Role)
  role: Role;
}
