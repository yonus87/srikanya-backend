import { Service } from 'typedi';
import { UserAddressRepository } from '@/repositories/useraddress.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { UserAddressDto, CreateUserAddressDto, UpdateUserAddressDto } from '@/dtos/useraddress.dto';
import UserAddress from '@/models/useraddress';

@Service()
export class UserAddressService {
  constructor(
    private readonly userAddressRepository: UserAddressRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Get user address by address ID
  async getUserAddressById(addressId: number): Promise<UserAddressDto> {
    try {
      const userAddress = await this.userAddressRepository.getUserAddressById(addressId);
      return this.autoMapper.mapper.map(userAddress, UserAddress, UserAddressDto);
    } catch (error) {
      throw new HttpException(500, `Error retrieving user address: ${error.message}`);
    }
  }

  // Get all user addresses by user ID
  async getUserAddressesByUserId(userId: string): Promise<UserAddressDto[]> {
    try {
      const userAddresses = await this.userAddressRepository.getAllUserAddresses(userId);
      if (!userAddresses || userAddresses.length === 0) {
        throw new HttpException(404, 'No user addresses found');
      }
      return userAddresses.map(address =>
        this.autoMapper.mapper.map(address, UserAddress, UserAddressDto)
      );
    } catch (error) {
      throw new HttpException(500, `Error retrieving user addresses: ${error.message}`);
    }
  }

  // Get user addresses by mobile number
  async getUserAddressesByMobileNumber(mobileNumber: string): Promise<UserAddressDto[]> {
    try {
      const userAddresses = await this.userAddressRepository.getUserAddressesByMobileNumber(mobileNumber);
      if (!userAddresses || userAddresses.length === 0) {
        throw new HttpException(404, 'No user addresses found for the given mobile number');
      }
      return userAddresses.map(address =>
        this.autoMapper.mapper.map(address, UserAddress, UserAddressDto)
      );
    } catch (error) {
      throw new HttpException(500, `Error retrieving user addresses by mobile number: ${error.message}`);
    }
  }

  // Create a new user address
  async createUserAddress(createUserAddressDto: CreateUserAddressDto): Promise<UserAddressDto> {
    try {
      const newUserAddress = await this.userAddressRepository.createUserAddress(createUserAddressDto);
      return this.autoMapper.mapper.map(newUserAddress, UserAddress, UserAddressDto);
    } catch (error) {
      throw new HttpException(500, `Error creating user address: ${error.message}`);
    }
  }

  // Update user address by ID
  async updateUserAddressById(
    addressId: number,
    updateUserAddressDto: UpdateUserAddressDto
  ): Promise<UserAddressDto> {
    try {
      const updatedUserAddress = await this.userAddressRepository.updateUserAddressById(
        addressId,
        updateUserAddressDto
      );
      return this.autoMapper.mapper.map(updatedUserAddress, UserAddress, UserAddressDto);
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User address not found');
      }
      throw new HttpException(500, `Error updating user address: ${error.message}`);
    }
  }

  // Delete user address by ID
  async deleteUserAddressById(addressId: number): Promise<void> {
    try {
      const userAddress = await this.userAddressRepository.getUserAddressById(addressId);
      if (!userAddress) {
        throw new HttpException(404, 'User address not found');
      }

      await this.userAddressRepository.deleteUserAddressById(addressId);
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User address not found');
      }
      throw new HttpException(500, `Error deleting user address: ${error.message}`);
    }
  }
}
