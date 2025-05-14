import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { Customer } from 'prisma/app/generated/prisma/client';
import { AuthService } from 'src/auth/auth.service';
import { ChangePasswordDto } from 'src/common/dtos/change-password-user.schema';
import { InvalidCredentialsException } from 'src/common/exceptions/invalid-credentials.exception';
import { MissingRequiredPropertiesException } from 'src/common/exceptions/missing-properties.exception';
import { UserAlreadyRegisteredException } from 'src/common/exceptions/user-already-registered.exception';
import { UserNotFoundException } from 'src/common/exceptions/user-not-found.exception';
import { ResponseModel } from 'src/common/models/response.model';
import { EmailService } from 'src/common/services/email.service';
import { v4 as uuidv4 } from 'uuid';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly authService: AuthService,
    private readonly emailService: EmailService,
  ) {}
  private saltRounds = 10;

  /**
   * Retrieves a list of all Customer objects in the database.
   *
   * @returns {Promise<ResponseModel<Omit<Customer, 'password' | 'createdAt' | 'updatedAt'>[], Error>>} - A promise that resolves to a ResponseModel
   * with the list of Customer objects, or an error if the operation fails.
   *
   * @example
   * const customers = await customerService.retrieveAll()
   */
  async retrieveAll(): Promise<
    ResponseModel<
      Omit<Customer, 'password' | 'createdAt' | 'updatedAt'>[],
      Error
    >
  > {
    const retrivedUsers = await this.customerRepository.findMany();

    return {
      data: retrivedUsers.map((customer) => ({
        id: customer.id,
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        photo: customer.photo,
      })),
    };
  }

  /**
   * Retrieves a single Customer object by its unique email.
   *
   * @param {string} email - The email of the Customer to retrieve.
   *
   * @returns {Promise<ResponseModel<Omit<Customer, 'password' | 'createdAt' | 'updatedAt'>, Error>>} - A promise that resolves to a ResponseModel
   * with the Customer object with the given email, or an error if the operation fails.
   *
   * @example
   * const customer = await customerService.retrieveByEmail('john.doe@example.com')
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the email is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the Customer with the given email does not exist in the database.
   */
  async retrieveByEmail(
    email: string,
  ): Promise<
    ResponseModel<Omit<Customer, 'password' | 'createdAt' | 'updatedAt'>, Error>
  > {
    if (!email) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedCustomer =
      await this.customerRepository.findUniqueByEmail(email);

    if (!retrivedCustomer) {
      throw new UserNotFoundException('Customer not found');
    }

    return {
      data: {
        id: retrivedCustomer.id,
        name: retrivedCustomer.name,
        email: retrivedCustomer.email,
        phone: retrivedCustomer.phone,
        photo: retrivedCustomer.photo,
      },
    };
  }

  /**
   * Retrieves a single Customer object by its unique id.
   *
   * @param {string} userId - The id of the Customer to retrieve.
   *
   * @returns {Promise<ResponseModel<Omit<Customer, 'password' | 'createdAt' | 'updatedAt'>, Error>>} - A promise that resolves to a ResponseModel
   * with the Customer object with the given id, or an error if the operation fails.
   *
   * @example
   * const customer = await customerService.retrieveById('1')
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the userId is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the Customer with the given id does not exist in the database.
   */
  async retrieveById(
    userId: string,
  ): Promise<
    ResponseModel<Omit<Customer, 'password' | 'createdAt' | 'updatedAt'>, Error>
  > {
    if (!userId) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedCustomer = await this.customerRepository.findUnique(userId);

    if (!retrivedCustomer) {
      throw new UserNotFoundException('Customer not found');
    }

    return {
      data: {
        id: retrivedCustomer.id,
        name: retrivedCustomer.name,
        email: retrivedCustomer.email,
        phone: retrivedCustomer.phone,
        photo: retrivedCustomer.photo,
      },
    };
  }

  /**
   * Generates a JWT token for the given Customer credentials.
   *
   * @param {LoginCustomerDto} customer - The Customer credentials to generate a token for.
   *
   * @returns {Promise<ResponseModel<{token: string; expiresIn: string}, Error>>} - A promise that resolves to a ResponseModel
   * with the generated JWT token, or an error if the operation fails.
   *
   * @example
   * const { token, expiresIn } = await customerService.generateTokenByCrendentials({
   *   email: 'john.doe@example.com',
   *   password: 'mySecretPassword',
   * })
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the Customer credentials are missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the Customer with the given email does not exist in the database.
   * @throws {InvalidCredentialsException} - Thrown if the Customer credentials are invalid.
   */
  async generateTokenByCrendentials(
    customer: LoginCustomerDto,
  ): Promise<ResponseModel<{ token: string; expiresIn: string }, Error>> {
    if (!customer || !customer.email || !customer.password) {
      throw new MissingRequiredPropertiesException();
    }

    const retrivedCustomer = await this.customerRepository.findUniqueByEmail(
      customer.email,
    );

    if (!retrivedCustomer) {
      throw new UserNotFoundException('Customer not found');
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email) ||
      retrivedCustomer.email != customer.email ||
      !(await compare(customer.password, retrivedCustomer.password))
    ) {
      throw new InvalidCredentialsException();
    }

    const data = this.authService.generateToken(retrivedCustomer);

    return {
      data: {
        token: data.token,
        expiresIn: data.expiresIn,
      },
    };
  }

  /**
   * Creates a new Customer in the database.
   *
   * @param {CreateCustomerDto} customer - The Customer data to create.
   * @returns {Promise<ResponseModel<Omit<Customer, 'id' | 'password' | 'createdAt' | 'updatedAt'>, Error>>} - A promise that resolves to a ResponseModel
   * with the Customer data without the password, or an error if the operation fails.
   *
   * @example
   * const customer = await customerService.create({
   *   name: 'John Doe',
   *   email: 'john.doe@example.com',
   *   password: 'mySecretPassword',
   *   phone: '1234567890',
   *   photo: 'profile-picture.jpg',
   * })
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the Customer data is missing or undefined.
   * @throws {InvalidCredentialsException} - Thrown if the Customer email is invalid.
   * @throws {UserAlreadyRegisteredException} - Thrown if the Customer with the given email already exists in the database.
   */
  async create(
    customer: CreateCustomerDto,
  ): Promise<
    ResponseModel<
      Omit<Customer, 'id' | 'password' | 'createdAt' | 'updatedAt'>,
      Error
    >
  > {
    if (!customer.name || !customer.email) {
      throw new MissingRequiredPropertiesException();
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)) {
      throw new InvalidCredentialsException();
    }

    if (await this.customerRepository.findUniqueByEmail(customer.email)) {
      throw new UserAlreadyRegisteredException();
    }

    await this.customerRepository.create({
      id: uuidv4(),
      name: customer.name,
      email: customer.email,
      password: await hash(customer.password, this.saltRounds),
      phone: customer.phone,
      photo: customer.photo,
    });

    return {
      message: 'Customer created successfully',
      data: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        photo: customer.photo ? customer.photo : '',
      },
    };
  }

  /**
   * Deletes a Customer from the database.
   *
   * @param {string} id - The unique identifier of the Customer to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the Customer has been deleted.
   *
   * @throws {UserNotFoundException} - Thrown if the Customer with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    if (!(await this.customerRepository.findUnique(id))) {
      throw new UserNotFoundException('Customer not found');
    }

    await this.customerRepository.delete(id);
  }

  /**
   * Updates a Customer in the database.
   *
   * @param {string} id - The unique identifier of the Customer to update.
   * @param {UpdateCustomerDto} customer - The new data for the Customer.
   *
   * @returns {Promise<void>} - A promise that resolves when the Customer has been updated.
   *
   * @throws {UserNotFoundException} - Thrown if the Customer with the given id does not exist in the database.
   */
  async update(id: string, customer: UpdateCustomerDto): Promise<void> {
    if (!(await this.customerRepository.findUnique(id))) {
      throw new UserNotFoundException('Customer not found');
    }

    await this.customerRepository.update(id, customer);
  }

  /**
   * Resets the password of a Customer in the database using a valid token.
   *
   * @param {string} token - The token to verify the Customer.
   * @param {ChangePasswordDto} resetPasswordDto - The new password for the Customer.
   *
   * @returns {Promise<void>} - A promise that resolves when the Customer's password has been updated.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the token or the new password is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the Customer with the given token does not exist in the database.
   */
  async resetPassword(
    token: string,
    resetPasswordDto: ChangePasswordDto,
  ): Promise<void> {
    if (!token || !resetPasswordDto.newPassword) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedCustomer =
      await this.authService.verifyToken<Customer>(token);

    if (!retrievedCustomer) {
      throw new UserNotFoundException('Customer not found');
    }

    const hashedNewPassword = await hash(resetPasswordDto.newPassword, 10);

    await this.customerRepository.updatePassword(
      retrievedCustomer.id,
      hashedNewPassword,
    );
  }

  /**
   * Changes the password of an existing Customer in the database.
   *
   * @param {string} id - The unique identifier of the Customer whose password is to be changed.
   * @param {ChangePasswordDto} changePasswordDto - The current and new password details.
   *
   * @returns {Promise<void>} - A promise that resolves when the Customer's password has been successfully updated.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the id is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the Customer with the given id does not exist in the database.
   * @throws {InvalidCredentialsException} - Thrown if the current password provided is incorrect.
   */

  async changePassword(
    id: string,
    changePasswordDto: ChangePasswordDto,
  ): Promise<void> {
    if (!id) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedCustomer = await this.customerRepository.findUnique(id);

    if (!retrievedCustomer) {
      throw new UserNotFoundException('Customer not found');
    }

    if (
      !(await compare(
        changePasswordDto.currentPassword,
        retrievedCustomer.password,
      ))
    ) {
      throw new InvalidCredentialsException();
    }

    const hashedNewPassword = await hash(changePasswordDto.newPassword, 10);

    await this.customerRepository.updatePassword(id, hashedNewPassword);
  }

  /**
   * Initiates the password reset process for a Customer by sending a reset password email.
   *
   * @param {string} email - The email address of the Customer requesting a password reset.
   *
   * @returns {Promise<void>} - A promise that resolves when the reset password email has been successfully sent.
   *
   * @throws {MissingRequiredPropertiesException} - Thrown if the email is missing or undefined.
   * @throws {UserNotFoundException} - Thrown if the Customer with the given email does not exist in the database.
   * @throws {InvalidCredentialsException} - Thrown if the email is invalid or does not match the retrieved Customer's email.
   */

  async forgotPassword(email: string): Promise<void> {
    if (!email) {
      throw new MissingRequiredPropertiesException();
    }

    const retrievedCustomer =
      await this.customerRepository.findUniqueByEmail(email);

    if (!retrievedCustomer) {
      throw new UserNotFoundException('Customer not found');
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      retrievedCustomer.email != email
    ) {
      throw new InvalidCredentialsException();
    }

    const { token } = this.authService.generateToken({
      id: retrievedCustomer.id,
      name: retrievedCustomer.name,
      email: retrievedCustomer.email,
    });

    await this.emailService.sendResetPasswordEmail(
      retrievedCustomer.email,
      retrievedCustomer.name,
      token,
    );
  }
}
