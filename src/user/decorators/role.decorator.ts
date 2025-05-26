import { SetMetadata } from '@nestjs/common';
import { Role } from 'prisma/app/generated/prisma/client';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
