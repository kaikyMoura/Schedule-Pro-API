import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { ChangePasswordDto } from 'src/common/dtos/change-password-user.schema';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { CustomRequest } from 'src/common/types/custom-request';
import { AllowedRole } from 'src/user/decorator/role.decorator';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  @AllowedRole('ADMIN')
  @ApiBearerAuth()
  findAll() {
    return this.customerService.retrieveAll();
  }

  @Get(':id')
  @AllowedRole('ADMIN')
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.customerService.retrieveById(id);
  }

  @Get('/email/:email')
  @AllowedRole('ADMIN')
  @ApiBearerAuth()
  findOneByEmail(@Param('email') email: string) {
    return this.customerService.retrieveByEmail(email);
  }

  @Get('/me')
  @ApiBearerAuth()
  findMe(@Req() req: CustomRequest) {
    return this.customerService.retrieveByEmail(req.user.email);
  }

  @Post()
  @ApiBody({ type: CreateCustomerDto })
  @Public()
  create(@Body() customer: CreateCustomerDto) {
    return this.customerService.create(customer);
  }

  @Post('/login')
  @ApiBody({ type: LoginCustomerDto })
  @Public()
  login(@Body() customerLoginDto: LoginCustomerDto) {
    return this.customerService.generateTokenByCrendentials(customerLoginDto);
  }

  @Post('/forgot-password')
  @Public()
  forgotPassword(@Body() email: string) {
    return this.customerService.forgotPassword(email);
  }

  @Post('/reset-password')
  @Public()
  @ApiBody({ type: ChangePasswordDto })
  async resetPassword(@Body() resetPasswordDto: ChangePasswordDto) {
    const { token } = resetPasswordDto;

    if (!token) {
      throw new MissingRequiredPropertiesException('Token is missing');
    }

    const result = await this.customerService.resetPassword(
      token,
      resetPasswordDto,
    );

    if (!result) {
      throw new BadRequestException('Password reset failed');
    }

    return { message: 'Password reset successfully' };
  }

  @Put(':id')
  @AllowedRole('ADMIN')
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() customer: UpdateCustomerDto) {
    return this.customerService.update(id, customer);
  }

  @Put(':id/password')
  @AllowedRole('ADMIN')
  @ApiBearerAuth()
  updatePassword(
    @Param('id') id: string,
    @Body()
    changePasswordDto: ChangePasswordDto,
  ) {
    return this.customerService.changePassword(id, changePasswordDto);
  }
}
