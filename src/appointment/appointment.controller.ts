import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { UpdateAppointmentDto } from './dtos/update-appointment.dto';
import { Status } from 'prisma/app/generated/prisma/client';
import { Roles } from 'src/user/decorators/role.decorator';

@ApiTags('Appointment')
@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  @Roles('ADMIN', 'STAFF')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all appointments' })
  async findAll(page?: number, pageSize?: number) {
    const retrievedAppointments = await this.appointmentService.retrieveAll();

    if (page || pageSize) {
      const limit = pageSize || 10;

      const totalItems = retrievedAppointments.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page! - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedData = retrievedAppointments.slice(startIndex, endIndex);

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
      return retrievedAppointments;
    }
  }

  @Get('customer/:customerId')
  @Roles('CUSTOMER', 'ADMIN')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all appointments for a customer' })
  async findAllCustomerAppointments(
    @Param('customerId', ParseUUIDPipe) customerId: string,
    page?: number,
    pageSize?: number,
  ) {
    const retrievedAppointments =
      await this.appointmentService.retrieveAllByCustomerId(customerId);

    if (page || pageSize) {
      const limit = pageSize || 10;

      const totalItems = retrievedAppointments.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page! - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedData = retrievedAppointments.slice(startIndex, endIndex);

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
      return retrievedAppointments;
    }
  }

  @Get('staff/:staffId')
  @Roles('STAFF', 'ADMIN')
  @ApiBearerAuth()
  async findAllStaffAppointments(
    @Param('staffId', ParseUUIDPipe) staffId: string,
    page?: number,
    pageSize?: number,
  ) {
    const retrievedAppointments =
      await this.appointmentService.retrieveAllByStaffId(staffId);

    if (page || pageSize) {
      const limit = pageSize || 10;

      const totalItems = retrievedAppointments.length;
      const totalPages = Math.ceil(totalItems / limit);
      const startIndex = (page! - 1) * limit;
      const endIndex = startIndex + limit;

      const paginatedData = retrievedAppointments.slice(startIndex, endIndex);

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
      return retrievedAppointments;
    }
  }

  @Get(':id')
  @Roles('CUSTOMER', 'STAFF', 'ADMIN')
  @ApiBearerAuth()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.appointmentService.retrieveById(id);
  }

  @Post()
  @Roles('CUSTOMER', 'ADMIN')
  @ApiBody({ type: CreateAppointmentDto })
  @ApiBearerAuth()
  create(@Body() appointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(appointmentDto);
  }

  @Put(':id')
  @Roles('CUSTOMER', 'ADMIN')
  @ApiBearerAuth()
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    await this.appointmentService.update(id, updateAppointmentDto);
    return { message: 'Appointment updated successfully' };
  }

  @Delete(':id')
  @Roles('CUSTOMER', 'ADMIN')
  @ApiBearerAuth()
  async delete(@Param('id') id: string) {
    await this.appointmentService.delete(id);
    return { message: 'Appointment deleted successfully' };
  }

  @Patch(':id/status')
  @ApiBearerAuth()
  async changeStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body('status') status: Status,
  ) {
    await this.appointmentService.changeStatus(id, status);
    return { message: 'Appointment status changed successfully' };
  }
}
