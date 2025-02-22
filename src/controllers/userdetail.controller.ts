//src/controllers/userdetail.controller.ts


import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { UserDetailService } from '@/services/userdetail.service';
import { CreateUserDetailDto, UpdateUserDetailDto, UserDetailDto } from '@/dtos/userdetail.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/user-details')
export class UserDetailController {
  constructor(private readonly userDetailService: UserDetailService) {}

  // Get user details by user ID
  @Get('/:userId')
  @OpenAPI({
    summary: 'Get user details by user ID',
    description: 'Returns the user details for a given user ID.',
  })
  async getUserDetailByUserId(@Param('userId') userId: string): Promise<UserDetailDto> {
    try {
      return await this.userDetailService.getUserDetailByUserId(userId);
    } catch (error) {
      this.handleError(error, 'Error retrieving user details');
    }
  }

  // Create a new user detail
  @Post('')
  @OpenAPI({
    summary: 'Create a new user detail',
    description: 'Creates a new user detail and returns the created user detail.',
  })
  @UseBefore(validationMiddleware(CreateUserDetailDto))
  async createUserDetail(@Body() createUserDetailDto: CreateUserDetailDto): Promise<UserDetailDto> {
    try {
      return await this.userDetailService.createUserDetail(createUserDetailDto);
    } catch (error) {
      this.handleError(error, 'Error creating user detail');
    }
  }

  // Update user details by user ID
  @Put('/:userId')
  @OpenAPI({
    summary: 'Update user details by user ID',
    description: 'Updates the details of a specific user by their ID.',
  })
  @UseBefore(validationMiddleware(UpdateUserDetailDto))
  async updateUserDetailByUserId(
    @Param('userId') userId: string,
    @Body() updateUserDetailDto: UpdateUserDetailDto
  ): Promise<UserDetailDto> {
    try {
      return await this.userDetailService.updateUserDetailByUserId(userId, updateUserDetailDto);
    } catch (error) {
      this.handleError(error, 'Error updating user details');
    }
  }

  // Soft delete user details by user ID
  @Delete('/:userId')
  @OpenAPI({
    summary: 'Soft delete user details by user ID',
    description: 'Soft deletes the user details of a specific user by their ID.',
  })
  async deleteUserDetailByUserId(@Param('userId') userId: string): Promise<{ message: string }> {
    try {
      await this.userDetailService.deleteUserDetailByUserId(userId);
      return { message: 'User detail successfully deleted' };
    } catch (error) {
      this.handleError(error, 'Error deleting user details');
    }
  }

  // Centralized error handling method
  private handleError(error: any, message: string) {
    console.error(`${message}:`, error);

    if (error.status === 404) {
      throw new HttpException(404, `User detail not found: ${error.message}`);
    }

    throw new HttpException(500, `${message}: ${error.message}`);
  }
}
