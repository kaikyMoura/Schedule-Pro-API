import { registerAs } from '@nestjs/config';

/**
 * JWT configuration for the application.
 * This module exports the JWT configuration settings.
 * It uses environment variables to set the secret key, expiration times, issuer, and audience.
 */
export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET_KEY,
  expiresIn: process.env.JWT_EXPIRATION_TIME || '1h',
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRATION_TIME || '7d',
  issuer: process.env.JWT_ISSUER || 'schedule-pro-api',
  audience: process.env.JWT_AUDIENCE || 'schedule-pro-client',
}));
