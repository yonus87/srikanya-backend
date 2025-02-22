// src/controllers/user.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { UserService } from '@/services/user.service';
import { CreateUserDto, UpdateUserDto, UserListResponseDto } from '@/dtos/user.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get all users with pagination
  @Get('')
  @OpenAPI({
    summary: 'Get all users',
    description: 'Returns a list of all users, optionally filtered by pagination.',
  })
  async getAllUsers(
    @QueryParam('page', { required: false }) page: number = 1,
    @QueryParam('pageSize', { required: false }) pageSize: number = 10
  ): Promise<{ users: UserListResponseDto[], totalCount: number }> {
    try {
      if (page < 1 || pageSize < 1) {
        throw new HttpException(400, 'Page and PageSize must be greater than zero');
      }
      const { users, totalCount } = await this.userService.findAll(page, pageSize);
      return { users, totalCount };
    } catch (error) {
      this.handleError(error, 'Error retrieving users');
    }
  }

  // Get a user by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get a user by ID',
    description: 'Returns details of a specific user by their ID',
  })
  async getUserById(@Param('id') id: string): Promise<UserListResponseDto> {
    try {
      return await this.userService.getUserById(id);
    } catch (error) {
      this.handleError(error, 'Error retrieving user');
    }
  }

  // Create a new user
  @Post('')
  @OpenAPI({
    summary: 'Create a new user',
    description: 'Creates a new user and returns the created user details',
  })
  @UseBefore(validationMiddleware(CreateUserDto))
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserListResponseDto> {
    try {
      return await this.userService.createUser(createUserDto);
    } catch (error) {
      this.handleError(error, 'Error creating user');
    }
  }

  // Update an existing user by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update a user by ID',
    description: 'Updates the details of a specific user by their ID',
  })
  @UseBefore(validationMiddleware(UpdateUserDto))
  async updateUserById(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<UserListResponseDto> {
    try {
      return await this.userService.updateUserById(id, updateUserDto);
    } catch (error) {
      this.handleError(error, 'Error updating user');
    }
  }

  // Delete a user by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete a user by ID',
    description: 'Deletes a specific user by their ID',
  })
  async deleteUserById(@Param('id') id: string): Promise<{ message: string }> {
    try {
      await this.userService.deleteUserById(id);
      return { message: 'User successfully deleted' };
    } catch (error) {
      this.handleError(error, 'Error deleting user');
    }
  }

  // Centralized error handling method
  private handleError(error: any, message: string) {
    console.error(`${message}:`, error);

    if (error.status === 404) {
      throw new HttpException(404, `User not found: ${error.message}`);
    }

    throw new HttpException(500, `${message}: ${error.message}`);
  }
}
