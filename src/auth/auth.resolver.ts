import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Public } from 'src/common/decorators/public.decorator';
import { CustomRequest } from 'src/common/types/custom-request';
import { NotificationService } from 'src/notification/notification.service';
import { CurrentUser } from 'src/user/decorators/current-user.decorator';
import { CreateUserInput } from 'src/user/dtos/create-user.input';
import { LoginUserInput } from 'src/user/dtos/login-user.input';
import { UserResponse } from 'src/user/type/user-response.type';
import { UserType } from 'src/user/type/user.entity';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';

@Resolver(() => UserType)
@UseGuards(JwtAuthGuard, RolesGuard)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService,
  ) {}

  @Public()
  @Mutation(() => UserResponse, { name: 'register' })
  async register(@Args('input') input: CreateUserInput): Promise<UserResponse> {
    const user = await this.authService.register(input);
    return {
      success: true,
      message: 'User registered successfully',
      data: user,
    };
  }

  @Public()
  @Mutation(() => UserResponse, { name: 'login' })
  async login(@Args('input') input: LoginUserInput): Promise<UserResponse> {
    const data = await this.authService.login(input);

    return {
      success: true,
      message: 'User logged in successfully',
      data: data,
    };
  }

  @Mutation(() => UserResponse, { name: 'logout' })
  async logout(
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<UserResponse> {
    await this.authService.logout(currentUser.user.sub);
    return {
      success: true,
      message: 'User logged out successfully',
    };
  }

  @Mutation(() => UserResponse, { name: 'refreshToken' })
  async refreshToken(
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<UserResponse> {
    const refreshToken = currentUser.cookies?.refreshToken;
    if (!refreshToken) {
      throw new UnauthorizedException('No refresh token provided');
    }

    const data = await this.authService.refreshToken(refreshToken);
    return {
      success: true,
      message: 'Token refreshed successfully',
      data: data,
    };
  }

  @Mutation(() => UserResponse, { name: 'forgotPassword' })
  async forgotPassword(@Args('email') email: string): Promise<UserResponse> {
    await this.authService.forgotPassword(email);
    return {
      success: true,
      message: 'Password reset email sent',
    };
  }

  @Mutation(() => UserResponse, { name: 'resetPassword' })
  async resetPassword(
    @Args('token') token: string,
    @Args('newPassword') newPassword: string,
  ): Promise<UserResponse> {
    await this.authService.resetPassword(token, newPassword);
    return {
      success: true,
      message: 'Password reset successfully',
    };
  }

  @Public()
  @Mutation(() => UserResponse, { name: 'sendVerificationEmail' })
  async sendVerificationEmail(
    @CurrentUser() currentUser: CustomRequest,
  ): Promise<UserResponse> {
    await this.authService.sendVerificationEmail(currentUser.user.email);
    return {
      success: true,
      message: 'Email verification email sent',
    };
  }

  @Public()
  @Mutation(() => UserResponse, { name: 'verifyEmail' })
  async verifyEmail(@Args('token') token: string): Promise<UserResponse> {
    await this.authService.verifyEmail(token);
    return {
      success: true,
      message: 'Email verified successfully',
    };
  }

  @Public()
  @Mutation(() => UserResponse, { name: 'sendOtp' })
  async sendOtp(@Args('phone') phone: string): Promise<UserResponse> {
    const data = await this.notificationService.sendVerificationCode(phone);
    return {
      success: true,
      message: data.message,
    };
  }

  @Public()
  @Mutation(() => UserResponse, { name: 'verifyOtp' })
  async verifyOtp(
    @Args('phone') phone: string,
    @Args('code') code: string,
  ): Promise<UserResponse> {
    const data = await this.notificationService.checkVerificationCode(
      phone,
      code,
    );

    return {
      success: data.success,
      message: data.message,
    };
  }
}
