import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/user/decorators/role.decorator';
import { CreateStaffServiceDto } from './dtos/create-staff-service.dto';
import { UpdateStaffServiceDto } from './dtos/update-staff-service.dto';
import { StaffServiceService } from './staff-service.service';

@ApiTags('Staff Service')
@Controller('staff-services')
export class StaffServiceController {
  constructor(private readonly staffServiceService: StaffServiceService) {}

  @Get()
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all staff services' })
  async findAll(page?: number, pageSize?: number) {
    const retrievedStaffServices = await this.staffServiceService.retrieveAll();

    if (page || pageSize) {
      const limit = pageSize || 10;

      const totalItems = retrievedStaffServices.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page! - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedData = retrievedStaffServices.slice(startIndex, endIndex);

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
      return retrievedStaffServices;
    }
  }

  @Get('staffId/:staffId')
  @Roles('ADMIN', 'STAFF')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific staff service by staffId' })
  findOneByStaffId(@Param('staffId') staffId: string) {
    return this.staffServiceService.retrieveByStaffId(staffId);
  }

  @Get('serviceId/:serviceId')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a specific staff service by serviceId' })
  findByServiceId(@Param('serviceId') serviceId: string) {
    return this.staffServiceService.retrieveByServiceId(serviceId);
  }

  @Post()
  @ApiBody({ type: CreateStaffServiceDto })
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new relation between staff and service' })
  async create(@Body() staffService: CreateStaffServiceDto) {
    return await this.staffServiceService.create(staffService);
  }

  @Put(':id')
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update staff service' })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateStaffServiceDto,
  ) {
    return await this.staffServiceService.update(id, updateUserDto);
  }

  @Patch('active/:id')
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update staff service active status' })
  async patchActive(@Param('id') id: string, @Body() active: boolean) {
    return await this.staffServiceService.patchActive(id, active);
  }

  @Patch('custom-price/:id')
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update staff service custom price' })
  async patchCustomPrice(@Param('id') id: string, @Body() customPrice: number) {
    return await this.staffServiceService.patchACustomPrice(id, customPrice);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a staff service relation' })
  async delete(@Param('id') id: string) {
    await this.staffServiceService.delete(id);

    return 'Relation deleted successfully';
  }
}
