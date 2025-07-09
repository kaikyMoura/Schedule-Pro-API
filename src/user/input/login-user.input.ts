import { PickType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

export class LoginUserInput extends PickType(CreateUserInput, [
  'email',
  'password',
]) {}
