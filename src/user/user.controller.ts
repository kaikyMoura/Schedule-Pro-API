import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ChangePasswordDto } from 'src/common/dtos/change-password-user.schema';
import { AllowedRole } from './decorator/role.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @AllowedRole('ADMIN')
  findAll() {
    return this.userService.retrieveAll();
  }

  @Get(':id')
  @AllowedRole('ADMIN')
  findOne(@Param('id') id: string) {
    return this.userService.retrieveById(id);
  }

  @Get('/email/:email')
  @AllowedRole('ADMIN')
  findOneByEmail(@Param('email') email: string) {
    return this.userService.retrieveByEmail(email);
  }

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Post('/login')
  login(@Body() userLoginDto: LoginUserDto) {
    return this.userService.generateTokenByCrendentials(userLoginDto);
  }

  @Post('/forgot-password')
  forgotPassword(@Body() email: string) {
    return this.userService.forgotPassword(email);
  }

  @Post('/reset-password')
  resetPassword(
    @Headers('token') token: string,
    @Body() resetPasswordDto: ChangePasswordDto,
  ) {
    return this.userService.resetPassword(token, resetPasswordDto);
  }

  @Put(':id')
  @AllowedRole('ADMIN')
  update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.update(id, user);
  }

  @Put(':id/password')
  @AllowedRole('ADMIN')
  updatePassword(
    @Param('id') id: string,
    @Body()
    changePasswordDto: ChangePasswordDto,
  ) {
    return this.userService.changePassword(id, changePasswordDto);
  }
}
