import { OmitType } from '@nestjs/swagger';
import { BaseCustomerDto } from './base-customer.dto';

export class UpdateCustomerDto extends OmitType(BaseCustomerDto, [
  'id',
  'password',
  'appointments',
] as const) {}
