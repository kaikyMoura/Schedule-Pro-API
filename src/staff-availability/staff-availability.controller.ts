import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomRequest } from 'src/common/types/custom-request';
import { Roles } from 'src/user/decorators/role.decorator';
import { CreateStaffAvailabilityDto } from './dtos/create-staff-availability.dto';
import { UpdateStaffAvailabilityDto } from './dtos/update-staff-availability.dto';
import { StaffAvailabilityService } from './staff-availability.service';

@ApiTags('Staff Availability')
@Controller('staff-availability')
export class StaffAvailabilityController {
  constructor(
    private readonly staffAvailabilityService: StaffAvailabilityService,
  ) {}

  @Get()
  @Roles('ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all staff availability' })
  async findAll(page?: number, pageSize?: number) {
    const retrievedUsers = await this.staffAvailabilityService.retrieveAll();

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

  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all staff availability by staff' })
  async findByStaff(staffId: string, page?: number, pageSize?: number) {
    const retrievedUsers =
      await this.staffAvailabilityService.retrieveByStaffId(staffId);

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

  @Get('availability/me')
  @Roles('STAFF')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get my availability',
    description: 'Only if user is a staff member',
  })
  async findMyAvailability(@Req() req: CustomRequest) {
    return await this.staffAvailabilityService.retrieveByStaffId(req.user.id);
  }

  @Post()
  @ApiBody({ type: CreateStaffAvailabilityDto })
  @Roles('ADMIN', 'STAFF')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new staff availability' })
  async create(@Body() staffAvailability: CreateStaffAvailabilityDto) {
    return await this.staffAvailabilityService.create(staffAvailability);
  }

  @Put(':id')
  @ApiBody({ type: UpdateStaffAvailabilityDto })
  @Roles('ADMIN', 'STAFF')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a staff availability' })
  async update(
    @Param('id') id: string,
    @Body() updateStaffAvailabilityDto: UpdateStaffAvailabilityDto,
  ) {
    return await this.staffAvailabilityService.update(
      id,
      updateStaffAvailabilityDto,
    );
  }
}
