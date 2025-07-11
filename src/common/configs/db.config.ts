import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  url: process.env.DATABASE_URL,
  directUrl: process.env.DIRECT_URL,
  maxConnections: parseInt(process.env.DB_MAX_CONNECTIONS!, 10) || 10,
  minConnections: parseInt(process.env.DB_MIN_CONNECTIONS!, 10) || 1,
  connectionTimeout: parseInt(process.env.DB_CONNECTION_TIMEOUT!, 10) || 30000,
  logLevel: process.env.DB_LOG_LEVEL || 'info',
}));
