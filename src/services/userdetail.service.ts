// src/services/userdetail.service.ts

import { Service } from 'typedi';
import { UserDetailRepository } from '@/repositories/userdetail.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { UserDetailDto, CreateUserDetailDto, UpdateUserDetailDto, UserDetailListResponseDto } from '@/dtos/userdetail.dto';
import UserDetail from '@/models/userdetail';

@Service()
export class UserDetailService {
  constructor(
    private readonly userDetailRepository: UserDetailRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Get user details by user ID
  async getUserDetailByUserId(userId: string): Promise<UserDetailDto> {
    try {
      const userDetail = await this.userDetailRepository.getUserDetailByUserId(userId);
      if (!userDetail) {
        throw new HttpException(404, 'User detail not found');
      }
      return this.autoMapper.mapper.map(userDetail, UserDetail, UserDetailDto);
    } catch (error) {
      throw new HttpException(500, `Error retrieving user detail: ${error.message}`);
    }
  }

  // Create a new user detail
  async createUserDetail(createUserDetailDto: CreateUserDetailDto): Promise<UserDetailDto> {
    try {
      const newUserDetail = await this.userDetailRepository.createUserDetail(createUserDetailDto);
      return this.autoMapper.mapper.map(newUserDetail, UserDetail, UserDetailDto);
    } catch (error) {
      throw new HttpException(500, `Error creating user detail: ${error.message}`);
    }
  }

  // Update user details by user ID
  async updateUserDetailByUserId(userId: string, updateUserDetailDto: UpdateUserDetailDto): Promise<UserDetailDto> {
    try {
      const updatedUserDetail = await this.userDetailRepository.updateUserDetailByUserId(userId, updateUserDetailDto);
      return this.autoMapper.mapper.map(updatedUserDetail, UserDetail, UserDetailDto);
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User detail not found');
      }
      throw new HttpException(500, `Error updating user detail: ${error.message}`);
    }
  }

  // Soft delete user details by user ID
  async deleteUserDetailByUserId(userId: string): Promise<void> {
    try {
      const userDetail = await this.userDetailRepository.getUserDetailByUserId(userId);
      if (!userDetail) {
        throw new HttpException(404, 'User detail not found');
      }

      await this.userDetailRepository.deleteUserDetailByUserId(userId);
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User detail not found');
      }
      throw new HttpException(500, `Error deleting user detail: ${error.message}`);
    }
  }
}
