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
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Status } from 'prisma/app/generated/prisma/client';

@ApiTags('Appointment')
@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  @ApiBearerAuth()
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
  @ApiBearerAuth()
  async findAllCustomerAppointments(
    customerId: string,
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
  @ApiBearerAuth()
  async findAllStaffAppointments(
    staffId: string,
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
  @ApiBearerAuth()
  findOne(@Param('id') id: string) {
    return this.appointmentService.retrieveById(id);
  }

  @Post()
  @ApiBody({ type: CreateAppointmentDto })
  @ApiBearerAuth()
  create(@Body() appointmentDto: CreateAppointmentDto) {
    return this.appointmentService.create(appointmentDto);
  }

  @Put(':id')
  @ApiBearerAuth()
  async update(
    @Param('id') id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    await this.appointmentService.update(id, updateAppointmentDto);
    return { message: 'Appointment updated successfully' };
  }

  @Delete(':id')
  @ApiBearerAuth()
  async delete(@Param('id') id: string) {
    await this.appointmentService.delete(id);
    return { message: 'Appointment deleted successfully' };
  }

  @Patch(':id/status')
  @ApiBearerAuth()
  async changeStatus(@Param('id') id: string, @Body('status') status: Status) {
    await this.appointmentService.changeStatus(id, status);
    return { message: 'Appointment status changed successfully' };
  }
}
