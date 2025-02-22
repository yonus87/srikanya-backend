//src/repositories/user.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import User from '@/models/user';
import { CreateUserDto, UpdateUserDto } from '@/dtos/user.dto';

@Service()
export class UserRepository {
  // Retrieve all users with pagination
  public async getAllUsers(page: number = 1, pageSize: number = 10): Promise<{ users: User[], totalCount: number }> {
    try {
      const users = await User.findAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
        order: [['createdAt', 'DESC']]  // Sorting by creation date
      });
      const totalCount = await User.count();
      return { users, totalCount };
    } catch (error) {
      throw new HttpException(500, `Error retrieving users: ${error.message}`);
    }
  }

  // Get a user by ID
  public async getUserById(userId: string): Promise<User> {
    try {
      const foundUser = await User.findByPk(userId);
      if (!foundUser) {
        throw new HttpException(404, 'User not found');
      }
      return foundUser;
    } catch (error) {
      throw new HttpException(500, `Error retrieving user: ${error.message}`);
    }
  }

  // Get a user by Mobile Number
  public async getUserByMobileNumber(mobileNumber: string): Promise<User | null> {
    try {
      const foundUser = await User.findOne({
        where: {
          mobileNumber: mobileNumber
        }
      });
      return foundUser;
    } catch (error) {
      throw new HttpException(500, `Error retrieving user by mobile number: ${error.message}`);
    }
  }

  // Create a new user with transaction support
  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const transaction = await User.sequelize.transaction();
    try {
      const newUser = await User.create({
        ...createUserDto,
        isMobileConfirmed: createUserDto.isMobileConfirmed ?? false,
        isDeleted: createUserDto.isDeleted ?? false,
        createdBy: createUserDto.createdBy ?? 'System',
        updatedBy: createUserDto.updatedBy ?? 'System',
        deletedBy: createUserDto.deletedBy ?? 'System',
      }, { transaction });

      // Commit transaction
      await transaction.commit();
      return newUser;
    } catch (error) {
      // Rollback transaction in case of error
      await transaction.rollback();
      if (error.name === 'SequelizeValidationError') {
        throw new HttpException(400, `Validation Error: ${error.errors.map(e => e.message).join(', ')}`);
      }
      throw new HttpException(500, `Error creating user: ${error.message}`);
    }
  }

  // Update a user by ID with transaction support
  public async updateUserById(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
    const transaction = await User.sequelize.transaction();
    try {
      const foundUser = await this.getUserById(userId);

      const updatedUser = await foundUser.update({
        ...updateUserDto,
        updatedBy: updateUserDto.updatedBy ?? 'System',
      }, { transaction });

      // Commit transaction
      await transaction.commit();
      return updatedUser;
    } catch (error) {
      // Rollback transaction in case of error
      await transaction.rollback();
      throw new HttpException(500, `Error updating user: ${error.message}`);
    }
  }

  // Soft Delete a user by ID with transaction support
  public async deleteUserById(userId: string): Promise<void> {
    const transaction = await User.sequelize.transaction();
    try {
      const foundUser = await this.getUserById(userId);

      // Check if the user is already deleted
      if (foundUser.isDeleted) {
        throw new HttpException(400, 'User is already deleted');
      }

      // Perform the soft delete
      await foundUser.update({
        isDeleted: true,
        deletedBy: foundUser.updatedBy,
      }, { transaction });

      // Commit transaction
      await transaction.commit();
    } catch (error) {
      // Rollback transaction in case of error
      await transaction.rollback();
      if (error instanceof HttpException) {
        throw error; // Preserve custom HttpException
      }
      throw new HttpException(500, `Error deleting user: ${error.message}`);
    }
  }
}
