//src/services/userregistration.service.ts

import { Service } from 'typedi';
import { UserRegistrationRepository } from '@/repositories/userregistration.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { UserRegistrationDto, CreateUserRegistrationDto, UpdateUserRegistrationDto, UserRegistrationResponseDto } from '@/dtos/userregistration.dto';
import UserRegistration from '@/models/userRegistration';

@Service()
export class UserRegistrationService {
  constructor(
    private readonly userRegistrationRepository: UserRegistrationRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  /**
   * Retrieve all user registrations with pagination.
   * @param page - Page number for pagination (default: 1).
   * @param pageSize - Number of records per page (default: 10).
   * @returns Paginated user registrations and total count.
   */
  async getAllUserRegistrations(page: number = 1, pageSize: number = 10): Promise<{ userRegistrations: UserRegistrationResponseDto[], totalCount: number }> {
    try {
      const { userRegistrations, totalCount } = await this.userRegistrationRepository.getAllUserRegistrations(page, pageSize);
      const userRegistrationDtos = userRegistrations.map(userRegistration =>
        this.autoMapper.mapper.map(userRegistration, UserRegistration, UserRegistrationResponseDto)
      );
      return { userRegistrations: userRegistrationDtos, totalCount };
    } catch (error) {
      throw new HttpException(500, `Error retrieving user registrations: ${error.message}`);
    }
  }

  /**
   * Get a single user registration by ID.
   * @param userRegistrationId - ID of the user registration.
   * @returns The user registration as a DTO.
   */
  async getUserRegistrationById(userRegistrationId: number): Promise<UserRegistrationResponseDto> {
    try {
      const userRegistration = await this.userRegistrationRepository.getUserRegistrationById(userRegistrationId);
      if (!userRegistration) {
        throw new HttpException(404, `User registration with ID ${userRegistrationId} not found.`);
      }
      return this.autoMapper.mapper.map(userRegistration, UserRegistration, UserRegistrationResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error retrieving user registration: ${error.message}`);
    }
  }

  /**
   * Create a new user registration.
   * @param createUserRegistrationDto - Data Transfer Object for creating a user registration.
   * @returns The newly created user registration as a DTO.
   */
  async createUserRegistration(createUserRegistrationDto: CreateUserRegistrationDto): Promise<UserRegistrationResponseDto> {
    try {
      const newUserRegistration = await this.userRegistrationRepository.createUserRegistration(createUserRegistrationDto);
      return this.autoMapper.mapper.map(newUserRegistration, UserRegistration, UserRegistrationResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error creating user registration: ${error.message}`);
    }
  }

  /**
   * Update an existing user registration by ID.
   * @param userRegistrationId - ID of the user registration to update.
   * @param updateUserRegistrationDto - Data Transfer Object for updating the user registration.
   * @returns The updated user registration as a DTO.
   */
  async updateUserRegistrationById(userRegistrationId: number, updateUserRegistrationDto: UpdateUserRegistrationDto): Promise<UserRegistrationResponseDto> {
    try {
      const updatedUserRegistration = await this.userRegistrationRepository.updateUserRegistrationById(userRegistrationId, updateUserRegistrationDto);
      return this.autoMapper.mapper.map(updatedUserRegistration, UserRegistration, UserRegistrationResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error updating user registration: ${error.message}`);
    }
  }

  /**
   * Delete a user registration by ID.
   * @param userRegistrationId - ID of the user registration to delete.
   * @returns A message confirming the deletion.
   */
  async deleteUserRegistrationById(userRegistrationId: number): Promise<{ message: string }> {
    try {
      await this.userRegistrationRepository.deleteUserRegistrationById(userRegistrationId);
      return { message: 'User registration deleted successfully' };
    } catch (error) {
      if (error instanceof HttpException && error.status === 404) {
        throw new HttpException(404, `User registration with ID ${userRegistrationId} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting user registration: ${error.message}`);
    }
  }

  /**
   * Increment OTP sent counter for a user registration.
   * @param userRegistrationId - ID of the user registration to update.
   * @returns The updated user registration as a DTO.
   */
  async incrementOtpSent(userRegistrationId: number): Promise<UserRegistrationResponseDto> {
    try {
      const updatedUserRegistration = await this.userRegistrationRepository.incrementOtpSent(userRegistrationId);
      return this.autoMapper.mapper.map(updatedUserRegistration, UserRegistration, UserRegistrationResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error incrementing OTP sent: ${error.message}`);
    }
  }

  /**
   * Increment OTP tried counter for a user registration.
   * @param userRegistrationId - ID of the user registration to update.
   * @returns The updated user registration as a DTO.
   */
  async incrementOtpTried(userRegistrationId: number): Promise<UserRegistrationResponseDto> {
    try {
      const updatedUserRegistration = await this.userRegistrationRepository.incrementOtpTried(userRegistrationId);
      return this.autoMapper.mapper.map(updatedUserRegistration, UserRegistration, UserRegistrationResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error incrementing OTP tried: ${error.message}`);
    }
  }
}
