import { OmitType } from '@nestjs/swagger';
import { BaseUserSessionDto } from './base-user-session.dto';

export class CreateUserSessionDto extends OmitType(BaseUserSessionDto, [
  'id',
] as const) {}
