import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { ChangePasswordDto } from 'src/user/dtos/change-password-user.schema';
import { CustomRequest } from 'src/common/types/custom-request';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserService } from './user.service';
import { Roles } from './decorators/role.decorator';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all users' })
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
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user by id' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.userService.retrieveById(id);
  }

  @Get('email/:email')
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get user by email' })
  findOneByEmail(@Param('email') email: string) {
    return this.userService.retrieveByEmail(email);
  }

  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retrieve the currently authenticated user',
  })
  findMe(@Req() req: CustomRequest) {
    return this.userService.retrieveById(req.user.id);
  }

  @Post()
  @ApiBody({ type: CreateUserDto })
  @Public()
  @ApiOperation({ summary: 'Create a new user' })
  async create(@Body() userDto: CreateUserDto) {
    return await this.userService.create(userDto);
  }

  @Put(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a user' })
  async update(
    @Req() req: CustomRequest,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (req.user.id !== id) {
      throw new UnauthorizedException(
        'You are not allowed to change this password.',
      );
    }
    return await this.userService.update(id, updateUserDto);
  }

  @Patch(':id/password')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a user password' })
  async updatePassword(
    @Req() req: CustomRequest,
    @Param('id', ParseUUIDPipe) id: string,
    @Body()
    changePasswordDto: ChangePasswordDto,
  ) {
    if (req.user.id !== id) {
      throw new UnauthorizedException(
        'You are not allowed to change this password.',
      );
    }
    return await this.userService.changePassword(id, changePasswordDto);
  }
}
