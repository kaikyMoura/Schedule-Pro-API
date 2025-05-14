import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { UserRepository } from './user.repository';

@Module({
  providers: [UserService, UserRepository, UserResolver],
  controllers: [UserController],
})
export class UserModule {}
