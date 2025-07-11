import { Field, ObjectType } from '@nestjs/graphql';
import { UserType } from 'src/users/types/user.type';
import { AuthTokens } from './auth-tokens-interface';

@ObjectType()
export class LoginResponse implements AuthTokens {
  @Field(() => UserType)
  user: UserType;

  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;

  @Field(() => Number)
  expiresIn: number;
}
