import {
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Public } from 'src/common/decorators/public.decorator';
import { GraphQLValidationInterceptor } from 'src/common/interceptors/graphql-validation.interceptor';
import { CustomRequest } from 'src/common/types/custom-request';
import { OtpInput } from 'src/notifications/dtos/otp.input';
import { NotificationService } from 'src/notifications/notification.service';
import { CurrentUser } from 'src/users/decorators/current-user.decorator';
import { CreateUserInput } from 'src/users/dtos/create-user.input';
import { LoginUserInput } from 'src/users/dtos/login-user.input';
import { UserResponse } from 'src/users/types/user-response.type';
import { UserType } from 'src/users/types/user.type';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { LoginResponse } from './types/login-response.type';

@Resolver(() => UserType)
@UseGuards(JwtAuthGuard, RolesGuard)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly notificationService: NotificationService,
  ) {}

  @Public()
  @UseInterceptors(GraphQLValidationInterceptor)
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
  @Mutation(() => LoginResponse, { name: 'login' })
  async login(@Args('input') input: LoginUserInput): Promise<LoginResponse> {
    const data = await this.authService.login(input);

    return {
      user: data.user,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      expiresIn: data.expiresIn,
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
  async verifyOtp(@Args('input') otpInput: OtpInput): Promise<UserResponse> {
    const data = await this.notificationService.checkVerificationCode(
      otpInput.phone,
      otpInput.code,
    );

    return {
      success: data.success,
      message: data.message,
    };
  }
}
