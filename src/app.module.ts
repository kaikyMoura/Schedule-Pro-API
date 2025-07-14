import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import Joi from 'joi';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

import { AppointmentModule } from './appointments/appointment.module';
import { AuthModule } from './auth/auth.module';
import { ServiceItemModule } from './service-items/service-item.module';
import { StaffServiceModule } from './staff-services/staff-service.module';
import { UserSessionModule } from './user-sessions/user-session.module';
import { UserModule } from './users/user.module';

import { CommonModule } from './common/common.module';
import { HealthModule } from './health/health.module';

import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import KeyvRedis from '@keyv/redis';
import { AppointmentService } from './appointments/appointment.service';
import cacheConfig from './common/configs/cache.config';
import databaseConfig from './common/configs/db.config';
import graphqlConfig from './common/configs/graphql.config';
import jwtConfig from './common/configs/jwt.config';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { GlobalGuard } from './common/guards/global.guard';
import { GlobalInterceptor } from './common/interceptors/global.interceptor';
import { LoggerModule } from './common/loggers/logger.module';
import { CustomRequest } from './common/types/custom-request';
import { GoogleModule } from './google/google.module';
import { HashingModule } from './hashings/hashing.module';
import { NotificationModule } from './notifications/notification.module';
import { ReviewModule } from './reviews/review.module';
import { ReviewService } from './reviews/review.service';
import { ServiceItemDataLoader } from './service-items/dataloaders/service-item.loader';
import { ServiceItemService } from './service-items/service-item.service';
import { StaffAvailabilityModule } from './staff-availabilitys/staff-availability.module';
import { StaffAvailabilityService } from './staff-availabilitys/staff-availability.service';
import { StaffServiceService } from './staff-services/staff-service.service';
import { UserDataLoader } from './users/dataloaders/user.loader';
import { UserService } from './users/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      cache: false,
      expandVariables: true,
      load: [databaseConfig, jwtConfig, cacheConfig, graphqlConfig],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        PORT: Joi.number().default(5000),
        DATABASE_URL: Joi.string().required(),
        JWT_SECRET_KEY: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().default('1h'),
        JWT_REFRESH_EXPIRATION_TIME: Joi.string().default('7d'),
        REDIS_URL: Joi.string().optional(),
        SENDGRID_API_KEY: Joi.string().optional(),
        SENDGRID_SENDER_EMAIL: Joi.string().optional(),
        TWILIO_ACCOUNT_SID: Joi.string().optional(),
        TWILIO_AUTH_TOKEN: Joi.string().optional(),
        THROTTLER_TTL: Joi.number().default(60),
        THROTTLER_LIMIT: Joi.number().default(10),
        FRONTEND_URL: Joi.string().optional(),
        REDIS_TTL: Joi.number().default(300),
      }),
    }),
    // JWT Configuration
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      global: true,
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRATION_TIME', '1h'),
          issuer: 'schedule-pro-api',
          audience: 'schedule-pro-client',
        },
      }),
    }),
    // Rate Limiting
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => [
        {
          ttl: config.get<number>('THROTTLER_TTL')!,
          limit: config.get<number>('THROTTLER_LIMIT')!,
        },
      ],
    }),
    // Cache Configuration
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      isGlobal: process.env.NODE_ENV !== 'test' ? true : false,
      useFactory: (configService: ConfigService) => {
        const redisUrl = configService.get<string>('REDIS_URL');
        return {
          store: redisUrl
            ? new KeyvRedis(redisUrl, {
                connectionTimeout: 1000,
              })
            : undefined,
        };
      },
    }),
    // GraphQL Configuration
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (
        configService: ConfigService,
        reviewService: ReviewService,
        appointmentService: AppointmentService,
        serviceItemService: ServiceItemService,
        userService: UserService,
        staffServiceService: StaffServiceService,
        staffAvailabilityService: StaffAvailabilityService,
      ) => ({
        debug: configService.get<string>('NODE_ENV') === 'development',
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
        playground: configService.get<string>('NODE_ENV') !== 'production',
        introspection: configService.get<string>('NODE_ENV') !== 'production',
        plugins: [
          ApolloServerPluginInlineTrace(),
          ApolloServerPluginCacheControl(),
        ],
        subscriptions: {
          'graphql-ws': true,
        },
        context: ({ req }: { req: CustomRequest }) => ({
          req,
          currentUser: req.user,
          userDataLoader: new UserDataLoader(
            reviewService,
            appointmentService,
            userService,
            staffAvailabilityService,
          ).createUserLoader(),
          serviceItemDataLoader: new ServiceItemDataLoader(
            serviceItemService,
            appointmentService,
            staffServiceService,
            reviewService,
            userService,
          ).createServiceItemLoader(),
        }),
        formatError: (error: unknown) => {
          const typedError = error as {
            extensions?: {
              code?: string;
              exception?: { name?: string };
              errors?: unknown[];
            };
            message?: string;
          };

          if (
            typedError.extensions?.code === 'VALIDATION_ERROR' ||
            typedError.message?.includes('Validation failed') ||
            typedError.extensions?.exception?.name === 'ToxicContentException'
          ) {
            return {
              message: typedError.message,
              code: typedError.extensions?.code || 'VALIDATION_ERROR',
              errors: typedError.extensions?.errors || [],
              timestamp: new Date().toISOString(),
            };
          }

          if (
            typedError.message?.includes('PrismaClient') ||
            typedError.extensions?.exception?.name?.includes('Prisma')
          ) {
            return {
              message: 'Internal server error',
              code: 'INTERNAL_SERVER_ERROR',
              timestamp: new Date().toISOString(),
            };
          }
          return {
            message: 'Internal server error',
            code: typedError.extensions?.code || 'INTERNAL_SERVER_ERROR',
            timestamp: new Date().toISOString(),
          };
        },
      }),
    }),
    ScheduleModule.forRoot(),
    PrismaModule,
    CommonModule,
    LoggerModule,
    HealthModule,
    AuthModule,
    UserModule,
    UserSessionModule,
    AppointmentModule,
    ServiceItemModule,
    StaffAvailabilityModule,
    StaffServiceModule,
    HashingModule,
    ReviewModule,
    NotificationModule,
    GoogleModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: GlobalGuard, //Using global guard because the nest ignores the other guards and uses the last especified guard
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: GlobalInterceptor, // Using global interceptor because the nest ignores the other interceptors and uses the last especified interceptor
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
