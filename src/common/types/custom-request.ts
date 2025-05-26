import { Role } from 'prisma/app/generated/prisma/client';

export interface CustomRequest {
  headers: Record<string, string>;
  user: { id: string; name: string; email: string; role?: Role };
  [key: string]: any;
}
