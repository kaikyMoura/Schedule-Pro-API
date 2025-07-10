import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import {
  BadRequestException,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { GlobalInterceptor } from './common/interceptors/global.interceptor';
import { LoggerService } from './common/logger/logger.service';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    const logger = app.get(LoggerService);
    const configService = app.get(ConfigService);
    const port = configService.get<number>('PORT', 5000);
    const nodeEnv = configService.get<string>('NODE_ENV', 'development');

    app.use(
      helmet({
        contentSecurityPolicy: nodeEnv === 'production' ? undefined : false,
      }),
    );

    app.use(compression());

    app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000,
        max: nodeEnv === 'production' ? 100 : 1000,
        message: 'Too many requests from this IP, please try again later.',
        standardHeaders: true,
        legacyHeaders: false,
      }),
    );

    app.use(cookieParser());

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
        exceptionFactory: (errors) => {
          const result = errors.map((error) => ({
            property: error.property,
            message: error.constraints
              ? Object.values(error.constraints)[0]
              : 'Validation failed',
          }));
          return new BadRequestException({
            message: 'Validation failed',
            errors: result,
          });
        },
      }),
    );
    // Global filters
    app.useGlobalFilters(new GlobalExceptionFilter());
    // Global interceptors
    app.useGlobalInterceptors(
      app.get(GlobalInterceptor),
      new CacheInterceptor(app.get(CACHE_MANAGER), app.get(Reflector)),
    );
    app.enableVersioning({
      type: VersioningType.URI,
      defaultVersion: '1',
    });
    // CORS configuration
    const allowedOrigins =
      configService.get<string>('ALLOWED_ORIGINS')?.split(',') || [];

    if (nodeEnv === 'development') {
      allowedOrigins.push('http://localhost:3000', 'http://localhost:3001');
    }
    app.enableCors({
      origin: allowedOrigins.length > 0 ? allowedOrigins : true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
      credentials: true,
      preflightContinue: false,
      optionsSuccessStatus: 204,
    });
    // Swagger documentation
    if (nodeEnv !== 'production') {
      const config = new DocumentBuilder()
        .setTitle('Schedule-Pro API')
        .setDescription(
          'Professional scheduling system API with comprehensive features',
        )
        .setVersion('1.0.0')
        .addBearerAuth(
          {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name: 'JWT',
            description: 'Enter JWT token',
            in: 'header',
          },
          'JWT-auth',
        )
        .addTag('Authentication', 'User authentication and authorization')
        .addTag('Users', 'User management operations')
        .addTag('Appointments', 'Appointment scheduling and management')
        .addTag('Services', 'Service item management')
        .addTag('Staff', 'Staff management and availability')
        .addServer(`http://localhost:${port}`, 'Development server')
        .build();

      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api/docs', app, document, {
        swaggerOptions: {
          persistAuthorization: true,
          tagsSorter: 'alpha',
          operationsSorter: 'alpha',
        },
      });
      logger.log(`📚 Swagger documentation available at
http://localhost:${port}/api/docs`);
    }
    // Health check endpoint
    app.getHttpAdapter().get('/health', (req: Request, res: Response) => {
      res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: nodeEnv,
      });
    });

    app.enableShutdownHooks();

    await app.listen(port, '0.0.0.0');

    logger.log(`🚀 Application is running on: http://localhost:${port}`);
    logger.log(`🌍 Environment: ${nodeEnv}`);
    logger.log(`📊 GraphQL Playground: http://localhost:${port}/graphql`);
  } catch (error) {
    console.error('❌ Error starting application:', error);
    process.exit(1);
  }
}
void bootstrap();
