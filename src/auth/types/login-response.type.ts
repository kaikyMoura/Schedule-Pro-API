import { ObjectType } from '@nestjs/graphql';
import { MutationResponseType } from 'src/common/factorys/mutation-response.factory';
import { AuthTokens } from './auth-tokens-type';

/**
 * Response type for login operations.
 * This type represents the authentication tokens and their expiration.
 * It extends the AuthTokens interface, which defines the structure of the response.
 *
 * @example
 * {
 *   success: true,
 *   message: 'Login successful',
 *   data: {
 *     accessToken: 'your-access-token',
 *     refreshToken: 'your-refresh-token',
 *     expiresIn: 3600
 *   }
 * }
 */
@ObjectType()
export class LoginResponse extends MutationResponseType(AuthTokens) {}
