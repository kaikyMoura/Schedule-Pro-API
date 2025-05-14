import { Injectable } from '@nestjs/common';
import { Customer } from 'prisma/app/generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseCustomerDto } from './dto/base-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Creates a new Customer in the database.
   *
   * @param {BaseCustomerDto} data - The data required to create a new customer, which includes
   * an id, name, email, password, phone, and optionally a photo.
   *
   * @returns {Promise<Customer>} - A promise that resolves to the newly created Customer object.
   */

  async create(data: BaseCustomerDto): Promise<Customer> {
    const response = await this.prisma.customer.create({
      data: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        photo: data.photo,
      },
    });
    return response;
  }

  /**
   * Retrieves a single Customer object by its unique id.
   *
   * @param {string} id - The id of the Customer to retrieve.
   *
   * @returns {Promise<Customer>} - A promise that resolves to the Customer object with the given id.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the Customer with the given id does not exist in the database.
   */
  async findUnique(id: string): Promise<Customer> {
    const data = await this.prisma.customer.findUnique({
      where: { id: id },
    });
    return data!;
  }

  /**
   * Retrieves a single Customer object by its unique email.
   *
   * @param {string} email - The email of the Customer to retrieve.
   *
   * @returns {Promise<Customer>} - A promise that resolves to the Customer object with the given email.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the Customer with the given email does not exist in the database.
   */
  async findUniqueByEmail(email: string): Promise<Customer> {
    const data = await this.prisma.customer.findUnique({
      where: { email: email },
    });
    return data!;
  }

  /**
   * Retrieves a list of all Customer objects in the database.
   *
   * @returns {Promise<Customer[]>} - A promise that resolves to a list of Customer objects.
   */
  async findMany(): Promise<Customer[]> {
    return await this.prisma.customer.findMany();
  }

  /**
   * Updates an existing Customer in the database.
   *
   * @param {string} id - The unique identifier of the Customer to update.
   * @param {UpdateCustomerDto} user - The data to update the Customer with.
   *
   * @returns {Promise<void>} - A promise that resolves when the Customer has been updated.
   */

  async update(id: string, user: UpdateCustomerDto): Promise<void> {
    await this.prisma.customer.update({
      where: { id: id },
      data: user && {
        updatedAt: new Date(),
      },
    });
  }

  /**
   * Updates the password of an existing Customer in the database.
   *
   * @param {string} id - The unique identifier of the Customer to update.
   * @param {string} password - The new password for the Customer.
   *
   * @returns {Promise<void>} - A promise that resolves when the Customer's password has been updated.
   */
  async updatePassword(id: string, password: string): Promise<void> {
    await this.prisma.customer.update({
      where: { id },
      data: { password: password },
    });
  }

  /**
   * Deletes a Customer from the database.
   *
   * @param {string} id - The unique identifier of the Customer to delete.
   *
   * @returns {Promise<void>} - A promise that resolves when the Customer has been deleted.
   *
   * @throws {Prisma.NotFoundError} - Thrown if the Customer with the given id does not exist in the database.
   */
  async delete(id: string): Promise<void> {
    await this.prisma.customer.delete({
      where: { id: id },
    });
  }
}
