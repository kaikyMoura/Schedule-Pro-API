import { OmitType } from '@nestjs/swagger';
import { BaseCustomerDto } from './base-customer.dto';

export class CreateCustomerDto extends OmitType(BaseCustomerDto, [
  'id',
  'appointments',
] as const) {}
