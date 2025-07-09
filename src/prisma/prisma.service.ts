import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'prisma/app/generated/prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  /**
   * This method is called when the module is initialized. It establishes a connection
   * to the database using Prisma Client.
   */
  async onModuleInit() {
    await this.$connect();
  }

  /**
   * This method is called when the module is destroyed. It disconnects from the
   * database using Prisma Client.
   */
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
