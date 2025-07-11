import { registerAs } from '@nestjs/config';

export default registerAs('cache', () => ({
  redisUrl: process.env.REDIS_URL,
  ttl: parseInt(process.env.REDIS_TTL!, 10) || 300,
  max: parseInt(process.env.REDIS_MAX_ITEMS!, 10) || 100,
}));
