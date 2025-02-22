//src/repositories/useraddress.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import UserAddress from '@/models/useraddress'; 

@Service()
export class UserAddressRepository {
  // Retrieve all addresses for a user
  public async getAllUserAddresses(userId: string): Promise<UserAddress[]> {
    try {
      const addresses = await UserAddress.findAll({ where: { userId } });
      return addresses;
    } catch (error) {
      throw new HttpException(500, `Error retrieving user addresses: ${error.message}`);
    }
  }

  // Get a specific address by ID
  public async getUserAddressById(addressId: number): Promise<UserAddress> {
    try {
      const address = await UserAddress.findByPk(addressId);
      if (!address) {
        throw new HttpException(404, 'User address not found');
      }
      return address;
    } catch (error) {
      throw new HttpException(500, `Error retrieving user address: ${error.message}`);
    }
  }

  // Get user addresses by mobile number
  public async getUserAddressesByMobileNumber(mobileNumber: string): Promise<UserAddress[]> {
    try {
      const addresses = await UserAddress.findAll({
        where: { mobileNumber }
      });
      if (!addresses.length) {
        throw new HttpException(404, 'No addresses found for the provided mobile number');
      }
      return addresses;
    } catch (error) {
      throw new HttpException(500, `Error retrieving user addresses: ${error.message}`);
    }
  }

  // Create a new user address
  public async createUserAddress(createAddressDto: any): Promise<UserAddress> {
    try {
      const newAddress = await UserAddress.create(createAddressDto);
      return newAddress;
    } catch (error) {
      throw new HttpException(500, `Error creating user address: ${error.message}`);
    }
  }

  // Update an existing user address by ID
  public async updateUserAddressById(
    addressId: number,
    updateAddressDto: any
  ): Promise<UserAddress> {
    try {
      const address = await this.getUserAddressById(addressId);
      const updatedAddress = await address.update(updateAddressDto);
      return updatedAddress;
    } catch (error) {
      throw new HttpException(500, `Error updating user address: ${error.message}`);
    }
  }

  // Delete an address by ID
  public async deleteUserAddressById(addressId: number): Promise<{ message: string }> {
    try {
      const address = await this.getUserAddressById(addressId);
      if (!address) {
        throw new HttpException(404, 'User address not found');
      }
      await address.destroy(); // Delete the address
      return { message: 'User address deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting user address: ${error.message}`);
    }
  }
}
