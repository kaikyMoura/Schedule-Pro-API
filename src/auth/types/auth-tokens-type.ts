import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Interface for authentication tokens.
 * This interface defines the structure of the authentication tokens.
 *
 * @example
 * {
 *   accessToken: 'your-access-token',
 *   refreshToken: 'your-refresh-token',
 *   expiresIn: 3600
 * }
 */
@ObjectType()
export class AuthTokens {
  /**
   * The access token for the user.
   */
  @Field(() => String)
  accessToken: string;

  /**
   * The refresh token for the user.
   */
  @Field(() => String)
  refreshToken: string;

  /**
   * The expiration time of the access token in seconds.
   */
  @Field(() => Number)
  expiresIn: number;
}
