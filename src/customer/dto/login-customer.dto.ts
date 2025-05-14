import { PickType } from '@nestjs/swagger';
import { BaseCustomerDto } from './base-customer.dto';

export class LoginCustomerDto extends PickType(BaseCustomerDto, [
  'email',
  'password',
]) {}
