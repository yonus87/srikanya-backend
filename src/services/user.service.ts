//src/services/user.service.ts

import { Service } from 'typedi';
import { UserRepository } from '@/repositories/user.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { UserDto, UpdateUserDto, CreateUserDto, UserListResponseDto } from '@/dtos/user.dto';
import User from '@/models/user';

@Service()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Get all users with pagination
  async findAll(page: number = 1, pageSize: number = 10): Promise<{ users: UserListResponseDto[], totalCount: number }> {
    try {
      const { users, totalCount } = await this.userRepository.getAllUsers(page, pageSize);
      const userDtos = users.map(u => this.autoMapper.mapper.map(u, User, UserListResponseDto));
      return { users: userDtos, totalCount };
    } catch (error) {
      throw new HttpException(500, `Error retrieving users: ${error.message}`);
    }
  }

  // Get a user by ID
  async getUserById(userId: string): Promise<UserListResponseDto> {
    try {
      const foundUser = await this.userRepository.getUserById(userId);
      return this.autoMapper.mapper.map(foundUser, User, UserListResponseDto);
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User not found');
      }
      throw new HttpException(500, `Error retrieving user: ${error.message}`);
    }
  }

  // Create a new user
  async createUser(createUserDto: CreateUserDto): Promise<UserListResponseDto> {
    try {
      const existingUser = await this.userRepository.getUserByMobileNumber(createUserDto.mobileNumber);
      if (existingUser) {
        throw new HttpException(400, 'User with this mobile number already exists');
      }

      // Create new user
      const newUser = await this.userRepository.createUser(createUserDto);
      return this.autoMapper.mapper.map(newUser, User, UserListResponseDto);
    } catch (error) {
      if (error.status === 400) {
        throw new HttpException(400, error.message); // User with mobile already exists
      }
      throw new HttpException(500, `Error creating user: ${error.message}`);
    }
  }

  // Update a user by ID
  async updateUserById(userId: string, updateUserDto: UpdateUserDto): Promise<UserListResponseDto> {
    try {
      // Update user
      const updatedUser = await this.userRepository.updateUserById(userId, updateUserDto);
      return this.autoMapper.mapper.map(updatedUser, User, UserListResponseDto);
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User not found');
      }
      throw new HttpException(500, `Error updating user: ${error.message}`);
    }
  }

  // Soft delete a user by ID
  async deleteUserById(userId: string): Promise<void> {
    try {
      const user = await this.userRepository.getUserById(userId); 
      if (!user) {
        throw new HttpException(404, 'User not found');
      }

      await this.userRepository.deleteUserById(userId);
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User not found');
      }
      throw new HttpException(500, `Error deleting user: ${error.message}`);
    }
  }
}
