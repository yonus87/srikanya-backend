//src/repositories/userdetail.repository.ts


import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import UserDetail from '@/models/userdetail';
import { UserDetailDto, CreateUserDetailDto, UpdateUserDetailDto, UserDetailListResponseDto } from '@/dtos/userdetail.dto';

@Service()
export class UserDetailRepository {
  // Retrieve user details by user ID
  public async getUserDetailByUserId(userId: string): Promise<UserDetail> {
    try {
      const foundUserDetail = await UserDetail.findOne({
        where: { userId },
      });

      if (!foundUserDetail) {
        throw new HttpException(404, 'User detail not found');
      }

      return foundUserDetail;
    } catch (error) {
      throw new HttpException(500, `Error retrieving user detail: ${error.message}`);
    }
  }

  // Create a new user detail
  public async createUserDetail(createUserDetailDto: CreateUserDetailDto): Promise<UserDetail> {
    try {
      const newUserDetail = await UserDetail.create({
        ...createUserDetailDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return newUserDetail;
    } catch (error) {
      throw new HttpException(500, `Error creating user detail: ${error.message}`);
    }
  }

  // Update user details by user ID
  public async updateUserDetailByUserId(
    userId: string,
    updateUserDetailDto: UpdateUserDetailDto
  ): Promise<UserDetail> {
    try {
      const foundUserDetail = await this.getUserDetailByUserId(userId);
      const updatedUserDetail = await foundUserDetail.update({
        ...updateUserDetailDto,
        updatedAt: new Date(),
      });
      return updatedUserDetail;
    } catch (error) {
      throw new HttpException(500, `Error updating user detail: ${error.message}`);
    }
  }

  // Soft delete user details by user ID
  public async deleteUserDetailByUserId(userId: string): Promise<void> {
    try {
      const foundUserDetail = await this.getUserDetailByUserId(userId);

      if (!foundUserDetail) {
        throw new HttpException(404, 'User detail not found');
      }

      // Soft delete user detail
      await foundUserDetail.update({
        isDeleted: true,
        updatedAt: new Date(),
      });
    } catch (error) {
      throw new HttpException(500, `Error deleting user detail: ${error.message}`);
    }
  }
}
