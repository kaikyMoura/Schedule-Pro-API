import { PickType } from '@nestjs/swagger';
import { BaseUserDto } from './base-user.dto';

export class LoginUserDto extends PickType(BaseUserDto, [
  'email',
  'password',
]) {}
