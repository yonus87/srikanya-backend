//src/controllers/userRegistration.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, QueryParam, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { UserRegistrationService } from '@/services/userregistration.service';
import { CreateUserRegistrationDto, UpdateUserRegistrationDto, UserRegistrationResponseDto } from '@/dtos/userregistration.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';
import { logger } from '@/utils/logger';  

@Service()
@JsonController('/user-registration')
export class UserRegistrationController {
  constructor(private readonly userRegistrationService: UserRegistrationService) {}

  // Get all user registrations with pagination
  @Get('')
  @OpenAPI({
    summary: 'Get all user registrations',
    description: 'Returns a list of all user registrations, optionally filtered by page and page size.',
  })
  async getAllUserRegistrations(
    @QueryParam('page', { required: false }) page: number = 1,
    @QueryParam('pageSize', { required: false }) pageSize: number = 10
  ): Promise<{ userRegistrations: UserRegistrationResponseDto[], totalCount: number }> {
    try {
      // Basic validation for pagination
      if (page <= 0 || pageSize <= 0) {
        throw new HttpException(400, 'Page and Page Size must be greater than zero');
      }

      const { userRegistrations, totalCount } = await this.userRegistrationService.getAllUserRegistrations(page, pageSize);
      return { userRegistrations, totalCount };
    } catch (error) {
      logger.error(`Error in getAllUserRegistrations controller: ${error.message}`, { stack: error.stack });
      throw new HttpException(500, `Error retrieving user registrations: ${error.message}`);
    }
  }

  // Get a user registration by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get a user registration by ID',
    description: 'Returns details of a specific user registration by its ID',
  })
  async getUserRegistrationById(
    @Param('id') userRegistrationId: number
  ): Promise<UserRegistrationResponseDto> {
    try {
      const userRegistration = await this.userRegistrationService.getUserRegistrationById(userRegistrationId);
      if (!userRegistration) {
        throw new HttpException(404, `User registration with ID ${userRegistrationId} not found`);
      }
      return userRegistration;
    } catch (error) {
      logger.error(`Error in getUserRegistrationById controller for user registration ID ${userRegistrationId}: ${error.message}`, { stack: error.stack });
      throw new HttpException(500, `Error retrieving user registration: ${error.message}`);
    }
  }

  // Create a new user registration
  @Post('')
  @OpenAPI({
    summary: 'Create a new user registration',
    description: 'Creates a new user registration and returns the created user registration details',
  })
  @UseBefore(validationMiddleware(CreateUserRegistrationDto))  // Using validation middleware
  async createUserRegistration(
    @Body() createUserRegistrationDto: CreateUserRegistrationDto
  ): Promise<UserRegistrationResponseDto> {
    try {
      const newUserRegistration = await this.userRegistrationService.createUserRegistration(createUserRegistrationDto);
      return newUserRegistration;
    } catch (error) {
      logger.error(`Error in createUserRegistration controller: ${error.message}`, { stack: error.stack });
      throw new HttpException(500, `Error creating user registration: ${error.message}`);
    }
  }

  // Update an existing user registration by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update a user registration by ID',
    description: 'Updates the details of a specific user registration by its ID',
  })
  @UseBefore(validationMiddleware(UpdateUserRegistrationDto))  // Using validation middleware
  async updateUserRegistrationById(
    @Param('id') userRegistrationId: number,
    @Body() updateUserRegistrationDto: UpdateUserRegistrationDto
  ): Promise<UserRegistrationResponseDto> {
    try {
      const updatedUserRegistration = await this.userRegistrationService.updateUserRegistrationById(userRegistrationId, updateUserRegistrationDto);
      if (!updatedUserRegistration) {
        throw new HttpException(404, `User registration with ID ${userRegistrationId} not found`);
      }
      return updatedUserRegistration;
    } catch (error) {
      logger.error(`Error in updateUserRegistrationById controller for user registration ID ${userRegistrationId}: ${error.message}`, { stack: error.stack });
      throw new HttpException(500, `Error updating user registration: ${error.message}`);
    }
  }

  // Delete a user registration by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete a user registration by ID',
    description: 'Deletes a specific user registration by its ID',
  })
  async deleteUserRegistrationById(
    @Param('id') userRegistrationId: number
  ): Promise<{ message: string }> {
    try {
      const deleted = await this.userRegistrationService.deleteUserRegistrationById(userRegistrationId);
      if (!deleted) {
        throw new HttpException(404, `User registration with ID ${userRegistrationId} not found`);
      }
      return { message: 'User registration deleted successfully' };
    } catch (error) {
      logger.error(`Error in deleteUserRegistrationById controller for user registration ID ${userRegistrationId}: ${error.message}`, { stack: error.stack });
      throw new HttpException(500, `Error deleting user registration: ${error.message}`);
    }
  }

  // Increment OTP sent counter
  @Put('/:id/increment-otp-sent')
  @OpenAPI({
    summary: 'Increment OTP sent counter',
    description: 'Increments the OTP sent counter for a specific user registration by its ID',
  })
  async incrementOtpSent(
    @Param('id') userRegistrationId: number
  ): Promise<UserRegistrationResponseDto> {
    try {
      const updatedUserRegistration = await this.userRegistrationService.incrementOtpSent(userRegistrationId);
      if (!updatedUserRegistration) {
        throw new HttpException(404, `User registration with ID ${userRegistrationId} not found`);
      }
      return updatedUserRegistration;
    } catch (error) {
      logger.error(`Error in incrementOtpSent controller for user registration ID ${userRegistrationId}: ${error.message}`, { stack: error.stack });
      throw new HttpException(500, `Error incrementing OTP sent: ${error.message}`);
    }
  }

  // Increment OTP tried counter
  @Put('/:id/increment-otp-tried')
  @OpenAPI({
    summary: 'Increment OTP tried counter',
    description: 'Increments the OTP tried counter for a specific user registration by its ID',
  })
  async incrementOtpTried(
    @Param('id') userRegistrationId: number
  ): Promise<UserRegistrationResponseDto> {
    try {
      const updatedUserRegistration = await this.userRegistrationService.incrementOtpTried(userRegistrationId);
      if (!updatedUserRegistration) {
        throw new HttpException(404, `User registration with ID ${userRegistrationId} not found`);
      }
      return updatedUserRegistration;
    } catch (error) {
      logger.error(`Error in incrementOtpTried controller for user registration ID ${userRegistrationId}: ${error.message}`, { stack: error.stack });
      throw new HttpException(500, `Error incrementing OTP tried: ${error.message}`);
    }
  }
}
