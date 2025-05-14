import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { EmailService } from 'src/common/services/email.service';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './customer.repository';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [AuthModule],
  providers: [
    CustomerService,
    CustomerRepository,
    CustomerResolver,
    EmailService,
    PrismaService,
  ],
  controllers: [CustomerController],
})
export class CustomerModule {}
