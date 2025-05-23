import { Reflector } from '@nestjs/core';
import { Role } from 'prisma/app/generated/prisma/client';

export const AllowedRole = Reflector.createDecorator<Role>();
