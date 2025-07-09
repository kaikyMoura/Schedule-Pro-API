import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import {
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  Args,
  Float,
  ID,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Role, User } from 'prisma/app/generated/prisma/client';
import { AppointmentType } from 'src/appointment/type/appointment.type';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { CustomRequest } from 'src/common/types/custom-request';
import { PaginationOptions } from 'src/common/types/pagination-options';
import { UserDataLoader } from 'src/graphql/dataloaders/user.dataloader';
import { MutationResponse } from 'src/graphql/type/mutation-response.type';
import { ReviewType } from 'src/review/type/review.type';
import { CurrentUser } from './decorators/current-user.dto';
import { Roles } from './decorators/role.decorator';
import { UpdateUserInput } from './input/update-user.input';
import { UserFilterInput } from './input/user-filter.input';
import { UserConnection } from './type/user-connection.type';
import { UserType } from './type/user.type';
import { UserService } from './user.service';

@Resolver(() => UserType)
@UseGuards(JwtAuthGuard, RolesGuard)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly userDataLoader: UserDataLoader,
  ) {}

  @Query(() => UserConnection, { name: 'users' })
  @Roles(Role.ADMIN, Role.MANAGER)
  @UseInterceptors(CacheInterceptor)
  @CacheTTL(300)
  async users(
    @Args('filter', { nullable: true }) filter?: UserFilterInput,
    @Args('pagination', { nullable: true })
    pagination?: PaginationOptions<{
      firstName?: 'asc' | 'desc';
      lastName?: 'asc' | 'desc';
      email?: 'asc' | 'desc';
      phone?: 'asc' | 'desc';
      role?: 'asc' | 'desc';
    }>,
  ): Promise<UserConnection> {
    return await this.userService.findMany({
      where: filter,
      skip: pagination?.offset,
      take: pagination?.limit,
      orderBy: pagination?.orderBy,
    });
  }

  @Query(() => MutationResponse, { name: 'me' })
  @Roles(Role.ADMIN, Role.MANAGER, Role.STAFF, Role.CUSTOMER)
  async me(
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<MutationResponse> {
    const user = await this.userService.findById(currentUser.user.sub);
    const userType = this.userService.toUserType(user);

    return {
      success: true,
      message: undefined,
      data: userType,
    };
  }

  @Query(() => UserType, { name: 'user' })
  @Roles(Role.ADMIN, Role.MANAGER)
  async user(@Args('id') id: string): Promise<MutationResponse> {
    const user = await this.userService.findById(id);

    return {
      success: true,
      message: `User with ID ${id} was found.`,
      data: this.userService.toUserType(user),
    };
  }

  @Mutation(() => MutationResponse, { name: 'updateUser' })
  @Roles(Role.ADMIN, Role.MANAGER, Role.CUSTOMER, Role.STAFF)
  async updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('input') input: UpdateUserInput,
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<MutationResponse> {
    // Users can only update themselves unless they're admin
    if (
      currentUser.user.sub !== id &&
      currentUser.user.role !== Role.ADMIN &&
      currentUser.user.role !== Role.MANAGER
    ) {
      throw new UnauthorizedException('Unauthorized to update this user');
    }
    await this.userService.update(id, input);

    return {
      success: true,
      message: `User with ID ${id} was updated.`,
    };
  }

  @Mutation(() => MutationResponse, { name: 'deactivateUser' })
  @Roles(Role.ADMIN, Role.MANAGER, Role.CUSTOMER, Role.STAFF)
  async deactivateUser(
    @Args('id', { type: () => ID }) id: string,
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<MutationResponse> {
    // Users can only delete themselves unless they're admin or manager
    const isOwner = currentUser.user.sub === id;
    const isPrivileged =
      currentUser.user.role === Role.ADMIN ||
      currentUser.user.role === Role.MANAGER;

    if (!isOwner && !isPrivileged) {
      throw new UnauthorizedException('Unauthorized to delete this user');
    }

    await this.userService.deactivate(id);

    return {
      success: true,
      message: `User with ID ${id} was deactivated.`,
    };
  }

  @Mutation(() => MutationResponse, { name: 'activateUser' })
  @Roles(Role.ADMIN)
  async activateUser(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<MutationResponse> {
    await this.userService.activate(id);

    return {
      success: true,
      message: `User with ID ${id} was activated.`,
    };
  }

  @Mutation(() => MutationResponse, { name: 'deleteUser' })
  @Roles(Role.ADMIN)
  async deleteUser(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<MutationResponse> {
    await this.userService.delete(id);

    return {
      success: true,
      message: `User with ID ${id} was deleted.`,
    };
  }

  // Field resolvers for relationships
  @ResolveField()
  async customerAppointments(@Parent() user: User) {
    const loader = this.userDataLoader.createUserAppointmentsLoader();
    return loader.load(user.id);
  }

  @ResolveField(() => [AppointmentType])
  async staffAppointments(@Parent() user: User) {
    const loader = this.userDataLoader.createStaffAppointmentsLoader();
    return loader.load(user.id);
  }
  @ResolveField(() => [ReviewType])
  async reviews(@Parent() user: User) {
    const loader = this.userDataLoader.createUserReviewsLoader();
    return loader.load(user.id);
  }
  @ResolveField(() => [ReviewType])
  async receivedReviews(@Parent() user: User) {
    const loader = this.userDataLoader.createStaffReceivedReviewsLoader();
    return loader.load(user.id);
  }

  // Computed field resolvers
  @ResolveField(() => Int)
  async appointmentCount(@Parent() user: User): Promise<number> {
    const loader = this.userDataLoader.createUserAppointmentsLoader();
    const appointments = await loader.load(user.id);
    return appointments.length;
  }

  @ResolveField(() => Float)
  async averageRating(@Parent() user: User): Promise<string> {
    const loader = this.userDataLoader.createUserReviewsLoader();
    const reviews = await loader.load(user.id);
    if (reviews.length === 0) {
      return '0.0';
    }
    return (
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    ).toFixed(1);
  }

  @ResolveField(() => Int)
  async totalReviews(@Parent() user: User): Promise<number> {
    const loader = this.userDataLoader.createUserReviewsLoader();
    const reviews = await loader.load(user.id);
    return reviews.length;
  }
}
