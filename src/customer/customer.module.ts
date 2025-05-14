import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './customer.repository';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';

@Module({
  providers: [CustomerService, CustomerRepository, CustomerResolver],
  controllers: [CustomerController],
})
export class CustomerModule {}
