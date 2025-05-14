import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AllowedRole } from 'src/user/decorator/role.decorator';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { ChangePasswordDto } from 'src/common/dtos/change-password-user.schema';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  @AllowedRole('ADMIN')
  findAll() {
    return this.customerService.retrieveAll();
  }

  @Get(':id')
  @AllowedRole('ADMIN')
  findOne(@Param('id') id: string) {
    return this.customerService.retrieveById(id);
  }

  @Get('/email/:email')
  @AllowedRole('ADMIN')
  findOneByEmail(@Param('email') email: string) {
    return this.customerService.retrieveByEmail(email);
  }

  @Post()
  create(@Body() customer: CreateCustomerDto) {
    return this.customerService.create(customer);
  }

  @Post('/login')
  login(@Body() customerLoginDto: LoginCustomerDto) {
    return this.customerService.generateTokenByCrendentials(customerLoginDto);
  }

  @Post('/forgot-password')
  forgotPassword(@Body() email: string) {
    return this.customerService.forgotPassword(email);
  }

  @Post('/reset-password')
  resetPassword(
    @Headers('token') token: string,
    @Body() resetPasswordDto: ChangePasswordDto,
  ) {
    return this.customerService.resetPassword(token, resetPasswordDto);
  }

  @Put(':id')
  @AllowedRole('ADMIN')
  update(@Param('id') id: string, @Body() customer: UpdateCustomerDto) {
    return this.customerService.update(id, customer);
  }

  @Put(':id/password')
  @AllowedRole('ADMIN')
  updatePassword(
    @Param('id') id: string,
    @Body()
    changePasswordDto: ChangePasswordDto,
  ) {
    return this.customerService.changePassword(id, changePasswordDto);
  }
}
