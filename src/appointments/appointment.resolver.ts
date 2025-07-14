import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Status } from 'prisma/app/generated/prisma/client';
import { AppointmentService } from './appointment.service';
import { AppointmentFilterInput } from './dtos/appointment-filter.input';
import { AppointmentOrderInput } from './dtos/appointment-order.input';
import { AppointmentPaginationInput } from './dtos/appointment-pagination.input';
import { CreateAppointmentInput } from './dtos/create-appointment.input';
import { UpdateAppointmentInput } from './dtos/update-appointment.input';
import { AppointmentResponse } from './types/appointment-response.type';
import { AppointmentType } from './types/appointment.entity';
import { PaginatedAppointments } from './types/paginated-appointments.type';

@Resolver(AppointmentType)
export class AppointmentResolver {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Query(() => AppointmentResponse, { name: 'appointment' })
  async appointment(@Args('id') id: string): Promise<AppointmentResponse> {
    const appointment = await this.appointmentService.findById(id);
    return {
      success: true,
      message: undefined,
      data: appointment,
    };
  }

  @Query(() => PaginatedAppointments, { name: 'appointments' })
  async appointments(
    @Args('filter', { nullable: true })
    filter?: AppointmentFilterInput,
    @Args('pagination', { nullable: true })
    pagination?: AppointmentPaginationInput,
    @Args('orderBy', { nullable: true })
    orderBy?: AppointmentOrderInput,
  ): Promise<PaginatedAppointments> {
    const appointments = await this.appointmentService.findMany(undefined, {
      where: filter,
      skip: pagination?.offset,
      take: pagination?.limit,
      orderBy: orderBy,
    });

    const appointmentTypes = appointments.map((appointment) =>
      this.appointmentService.toAppointmentType(appointment),
    );
    return {
      nodes: appointmentTypes,
      totalCount: appointments.length,
      hasNextPage: false,
      hasPreviousPage: false,
    };
  }

  @Query(() => AppointmentResponse, { name: 'appointmentById' })
  async appointmentById(@Args('id') id: string): Promise<AppointmentResponse> {
    const appointment = await this.appointmentService.findById(id);

    return {
      nodes: [this.appointmentService.toAppointmentType(appointment)],
      totalCount: 1,
      hasNextPage: false,
      hasPreviousPage: false,
    };
  }

  @Mutation(() => AppointmentResponse, { name: 'createAppointment' })
  async createAppointment(
    @Args('input') input: CreateAppointmentInput,
  ): Promise<AppointmentResponse> {
    const appointment = await this.appointmentService.create(input);

    return {
      success: true,
      message: `Appointment created successfully`,
      data: appointment,
    };
  }

  @Mutation(() => AppointmentResponse, { name: 'updateAppointment' })
  async updateAppointment(
    @Args('id') id: string,
    @Args('input') input: UpdateAppointmentInput,
  ): Promise<AppointmentResponse> {
    const appointment = await this.appointmentService.update(id, input);

    return {
      success: true,
      message: `Appointment updated successfully`,
      data: appointment,
    };
  }

  @Mutation(() => AppointmentResponse, { name: 'deleteAppointment' })
  async deleteAppointment(
    @Args('id') id: string,
  ): Promise<AppointmentResponse> {
    await this.appointmentService.delete(id);

    return {
      success: true,
      message: `Appointment deleted successfully`,
    };
  }

  @Mutation(() => AppointmentResponse, { name: 'changeAppointmentStatus' })
  async changeAppointmentStatus(
    @Args('id') id: string,
    @Args('status') status: Status,
  ): Promise<AppointmentResponse> {
    await this.appointmentService.changeStatus(id, status);

    return {
      success: true,
      message: `Appointment status changed successfully`,
    };
  }
}
