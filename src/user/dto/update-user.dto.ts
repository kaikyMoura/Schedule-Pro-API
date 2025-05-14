import { OmitType } from '@nestjs/swagger';
import { BaseUserDto } from './dto/base-user.dto';

export class UpdateUserDto extends OmitType(BaseUserDto, [
  'id',
  'password',
  'role',
] as const) {}
