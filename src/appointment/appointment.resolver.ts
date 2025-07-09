import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AppointmentType } from './type/appointment.type';
import { AppointmentService } from './appointment.service';
import { MutationResponse } from 'src/graphql/type/mutation-response.type';
import { PaginationOptions } from 'src/common/types/pagination-options';
import { AppointmentConnection } from './type/appointment-connection.type';
import { CreateAppointmentInput } from './input/create-appointment.input';
import { UpdateAppointmentInput } from './input/update-appointment.input';
import { Status } from 'prisma/app/generated/prisma/client';

@Resolver(() => AppointmentType)
@UseGuards(JwtAuthGuard, RolesGuard)
export class AppointmentResolver {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Query(() => MutationResponse, { name: 'appointment' })
  async appointment(@Args('id') id: string): Promise<MutationResponse> {
    const appointment = await this.appointmentService.findById(id);
    return {
      success: true,
      message: undefined,
      data: appointment,
    };
  }

  @Query(() => AppointmentConnection, { name: 'appointments' })
  async appointments(
    @Args('pagination', { nullable: true })
    pagination?: PaginationOptions<{
      date?: 'asc' | 'desc';
      status?: 'asc' | 'desc';
      customerId?: 'asc' | 'desc';
      staffId?: 'asc' | 'desc';
    }>,
  ): Promise<AppointmentConnection> {
    const appointments = await this.appointmentService.findMany(pagination);

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

  //   @Query(() => MutationResponse, { name: 'customerAppointments' })
  //   async customerAppointments(
  //     @Args('customerId') customerId: string,
  //   ): Promise<MutationResponse> {
  //     const appointments =
  //       await this.appointmentService.findManyByCustomerId(customerId);
  //     return {
  //       success: true,
  //       message: undefined,
  //       data: appointments,
  //     };
  //   }

  //   @Query(() => MutationResponse, { name: 'staffAppointments' })
  //   async staffAppointments(
  //     @Args('staffId') staffId: string,
  //   ): Promise<MutationResponse> {
  //     const appointments =
  //       await this.appointmentService.findManyByStaffId(staffId);
  //     return {
  //       success: true,
  //       message: undefined,
  //       data: appointments,
  //     };
  //   }

  @Query(() => AppointmentConnection, { name: 'appointmentById' })
  async appointmentById(
    @Args('id') id: string,
  ): Promise<AppointmentConnection> {
    const appointment = await this.appointmentService.findById(id);

    return {
      nodes: [this.appointmentService.toAppointmentType(appointment)],
      totalCount: 1,
      hasNextPage: false,
      hasPreviousPage: false,
    };
  }

  @Mutation(() => MutationResponse, { name: 'createAppointment' })
  async createAppointment(
    @Args('input') input: CreateAppointmentInput,
  ): Promise<MutationResponse> {
    const appointment = await this.appointmentService.create({
      ...input,
      customer: {
        connect: {
          id: input.customerId,
        },
      },
      service: {
        connect: {
          id: input.serviceId,
        },
      },
      staff: {
        connect: {
          id: input.staffId,
        },
      },
    });

    return {
      success: true,
      message: `Appointment created successfully`,
      data: appointment,
    };
  }

  @Mutation(() => MutationResponse, { name: 'updateAppointment' })
  async updateAppointment(
    @Args('id') id: string,
    @Args('input') input: UpdateAppointmentInput,
  ): Promise<MutationResponse> {
    const appointment = await this.appointmentService.update(id, input);

    return {
      success: true,
      message: `Appointment updated successfully`,
      data: appointment,
    };
  }

  @Mutation(() => MutationResponse, { name: 'deleteAppointment' })
  async deleteAppointment(@Args('id') id: string): Promise<MutationResponse> {
    await this.appointmentService.delete(id);

    return {
      success: true,
      message: `Appointment deleted successfully`,
    };
  }

  @Mutation(() => MutationResponse, { name: 'changeAppointmentStatus' })
  async changeAppointmentStatus(
    @Args('id') id: string,
    @Args('status') status: Status,
  ): Promise<MutationResponse> {
    await this.appointmentService.changeStatus(id, status);

    return {
      success: true,
      message: `Appointment status changed successfully`,
    };
  }
}
