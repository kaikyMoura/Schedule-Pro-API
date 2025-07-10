import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule } from '@nestjs/cache-manager';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import * as redisStore from 'cache-manager-ioredis';
import Joi from 'joi';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

import { AppointmentModule } from './appointment/appointment.module';
import { AuthModule } from './auth/auth.module';
import { ServiceItemModule } from './serviceItem/service-item.module';
import { StaffServiceModule } from './staff-service/staff-service.module';
import { UserSessionModule } from './user-session/user-session.module';
import { UserModule } from './user/user.module';

import { CommonModule } from './common/common.module';
import { HealthModule } from './health/health.module';

import { AppointmentService } from './appointment/appointment.service';
import cacheConfig from './common/config/cache.config';
import databaseConfig from './common/config/db.config';
import graphqlConfig from './common/config/graphql.config';
import jwtConfig from './common/config/jwt.config';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { GlobalGuard } from './common/guards/global.guard';
import { GlobalInterceptor } from './common/interceptors/global.interceptor';
import { LoggerModule } from './common/logger/logger.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { CustomRequest } from './common/types/custom-request';
import { ServiceItemDataLoader } from './serviceItem/dataloaders/service-item.loader';
import { UserDataLoader } from './user/dataloader/user.loader';
import { HashingModule } from './hashing/hashing.module';
import { NotificationModule } from './notification/notification.module';
import { ReviewModule } from './reviews/review.module';
import { ReviewService } from './reviews/review.service';
import { ServiceItemService } from './serviceItem/service-item.service';
import { StaffAvailabilityModule } from './staff-availability/staff-availability.module';
import { StaffServiceService } from './staff-service/staff-service.service';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
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
      isGlobal: true,
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get<string>('REDIS_HOST', 'localhost'),
        port: configService.get<number>('REDIS_PORT', 6379),
        ttl: configService.get<number>('REDIS_TTL', 300),
      }),
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
      ) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        sortSchema: true,
        playground: configService.get<string>('NODE_ENV') !== 'production',
        introspection: configService.get<string>('NODE_ENV') !== 'production',
        context: ({ req }: { req: CustomRequest }) => ({
          currentUser: req.user,
          userDataLoader: new UserDataLoader(
            reviewService,
            appointmentService,
            userService,
          ).createUserLoader(),
          serviceItemDataLoader: new ServiceItemDataLoader(
            serviceItemService,
            appointmentService,
            staffServiceService,
            reviewService,
            userService,
          ).createServiceItemLoader(),
        }),
        formatError: (error) => ({
          message: error.message,
          code: error.extensions?.code,
          timestamp: new Date().toISOString(),
        }),
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
