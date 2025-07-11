import { IncomingHttpHeaders } from 'http';
import { Role } from 'prisma/app/generated/prisma/client';

export interface CustomRequest {
  headers: IncomingHttpHeaders;
  user: { sub: string; name: string; email: string; role?: Role };
  [key: string]: any;
  route?: { path: string; method: string };
  cookies?: Record<string, string>;
  params?: Record<string, string>;
  query?: Record<string, string>;
  body?: Record<string, any>;
  ip?: string;
  originalUrl?: string;
  url?: string;
  method?: string;
}
