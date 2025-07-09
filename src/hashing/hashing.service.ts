import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashingService {
  private readonly saltRounds: number;

  constructor(private readonly configService: ConfigService) {
    this.saltRounds = this.configService.get<number>('BCRYPT_SALT_ROUNDS', 10);
  }

  /**
   * Hashes the given data using bcrypt. The salt is set to the value of BCRYPT_SALT_ROUNDS from the .env file.
   *
   * @param data The data to be hashed. It can be a string or a Buffer.
   *
   * @returns A promise that resolves to the hashed data as a string.
   */
  async hash(data: string | Buffer): Promise<string> {
    return bcrypt.hash(data, this.saltRounds);
  }

  /**
   * Compares the given data with the given encrypted data. The comparison is done using bcrypt.
   *
   * @param data The data to be compared. It can be a string or a Buffer.
   * @param encrypted The encrypted data to be compared with.
   *
   * @returns A promise that resolves to a boolean indicating whether the given data matches the encrypted data.
   */
  async compare(data: string | Buffer, encrypted: string): Promise<boolean> {
    return bcrypt.compare(data, encrypted);
  }
}
