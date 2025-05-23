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
import { AllowedRole } from './decorators/role.decorator';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @AllowedRole('ADMIN')
  @ApiBearerAuth()
  async findAll(page?: number, pageSize?: number) {
    const retrievedUsers = await this.userService.retrieveAll();

    if (page || pageSize) {
      const limit = pageSize || 10;

      const totalItems = retrievedUsers.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page! - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedData = retrievedUsers.slice(startIndex, endIndex);

      return {
        data: paginatedData,
        pagination: {
          currentPage: page,
          totalPages,
          totalItems,
          pageSize: limit,
        },
      };
    } else {
      return retrievedUsers;
    }
  }

  @Get(':id')
  @AllowedRole('ADMIN')
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.userService.retrieveById(id);
  }

  @Get('/email/:email')
  @AllowedRole('ADMIN')
  @ApiBearerAuth()
  findOneByEmail(@Param('email') email: string) {
    return this.userService.retrieveByEmail(email);
  }

  @Get('/me')
  @ApiBearerAuth()
  findMe(@Req() req: CustomRequest) {
    return this.userService.retrieveByEmail(req.user.email);
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  @Public()
  async create(@Body() userDto: CreateUserDto) {
    return await this.userService.create(userDto);
  }

  @Post('/login')
  @ApiBody({ type: LoginUserDto })
  @Public()
  async login(@Body() userLoginDto: LoginUserDto) {
    return await this.userService.generateTokenByCrendentials(userLoginDto);
  }

  @Post('/forgot-password')
  @Public()
  async forgotPassword(@Body() email: string) {
    return await this.userService.forgotPassword(email);
  }

  @Post('/reset-password')
  @Public()
  @ApiBody({ type: ChangePasswordDto })
  async resetPassword(@Body() resetPasswordDto: ChangePasswordDto) {
    const { token } = resetPasswordDto;

    if (!token) {
      throw new MissingRequiredPropertiesException('Token is missing');
    }

    const result = await this.userService.resetPassword(
      token,
      resetPasswordDto,
    );

    if (!result) {
      throw new BadRequestException('Password reset failed');
    }

    return { message: result };
  }

  @Put(':id')
  @ApiBearerAuth()
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.userService.update(id, updateUserDto);
  }

  @Put(':id/password')
  @ApiBearerAuth()
  async updatePassword(
    @Param('id') id: string,
    @Body()
    changePasswordDto: ChangePasswordDto,
  ) {
    return await this.userService.changePassword(id, changePasswordDto);
  }
}
