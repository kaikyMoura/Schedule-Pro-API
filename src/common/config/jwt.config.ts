import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET_KEY,
  expiresIn: process.env.JWT_EXPIRATION_TIME || '1h',
  refreshExpiresIn: process.env.JWT_REFRESH_EXPIRATION_TIME || '7d',
  issuer: process.env.JWT_ISSUER || 'schedule-pro-api',
  audience: process.env.JWT_AUDIENCE || 'schedule-pro-client',
}));
