import { OmitType } from '@nestjs/swagger';
import { BaseUserDto } from './base-user.dto';

export class CreateUserDto extends OmitType(BaseUserDto, ['id'] as const) {}
