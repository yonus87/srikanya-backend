//src/repositories/userregistration.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import UserRegistration from '@/models/userRegistration';

@Service()
export class UserRegistrationRepository {
  // Retrieve all user registrations with pagination
  public async getAllUserRegistrations(page: number = 1, pageSize: number = 10): Promise<{ userRegistrations: UserRegistration[], totalCount: number }> {
    try {
      const userRegistrations = await UserRegistration.findAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
      const totalCount = await UserRegistration.count();
      return { userRegistrations, totalCount };
    } catch (error) {
      throw new HttpException(500, `Error retrieving user registrations: ${error.message}`);
    }
  }

  // Get a user registration by ID
  public async getUserRegistrationById(userRegistrationId: number): Promise<UserRegistration> {
    try {
      const userRegistration = await UserRegistration.findByPk(userRegistrationId);
      if (!userRegistration) {
        throw new HttpException(404, 'User registration not found');
      }
      return userRegistration;
    } catch (error) {
      throw new HttpException(500, `Error retrieving user registration: ${error.message}`);
    }
  }

  // Create a new user registration
  public async createUserRegistration(createUserRegistrationDto: any): Promise<UserRegistration> {
    try {
      const newUserRegistration = await UserRegistration.create(createUserRegistrationDto);
      return newUserRegistration;
    } catch (error) {
      throw new HttpException(500, `Error creating user registration: ${error.message}`);
    }
  }

  // Update a user registration by ID
  public async updateUserRegistrationById(userRegistrationId: number, updateUserRegistrationDto: any): Promise<UserRegistration> {
    try {
      const userRegistration = await this.getUserRegistrationById(userRegistrationId);
      const updatedUserRegistration = await userRegistration.update(updateUserRegistrationDto);
      return updatedUserRegistration;
    } catch (error) {
      throw new HttpException(500, `Error updating user registration: ${error.message}`);
    }
  }

  // Delete a user registration by ID
  public async deleteUserRegistrationById(userRegistrationId: number): Promise<{ message: string }> {
    try {
      const userRegistration = await this.getUserRegistrationById(userRegistrationId);
      if (!userRegistration) {
        throw new HttpException(404, 'User registration not found');
      }
      await userRegistration.destroy();
      return { message: 'Record deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting user registration: ${error.message}`);
    }
  }

  // Increment OTP sent counter
  public async incrementOtpSent(userRegistrationId: number): Promise<UserRegistration> {
    try {
      const userRegistration = await this.getUserRegistrationById(userRegistrationId);
      userRegistration.numberOfOtpSent += 1;
      await userRegistration.save();
      return userRegistration;
    } catch (error) {
      throw new HttpException(500, `Error incrementing OTP sent: ${error.message}`);
    }
  }

  // Increment OTP tried counter
  public async incrementOtpTried(userRegistrationId: number): Promise<UserRegistration> {
    try {
      const userRegistration = await this.getUserRegistrationById(userRegistrationId);
      userRegistration.numberOfOtpTried += 1;
      await userRegistration.save();
      return userRegistration;
    } catch (error) {
      throw new HttpException(500, `Error incrementing OTP tried: ${error.message}`);
    }
  }

  // This method will need to be adapted as there is no email verification in the current schema.
  public async verifyEmailWithOtp(userRegistrationId: number, otp: number): Promise<UserRegistration> {
    try {
      const userRegistration = await this.getUserRegistrationById(userRegistrationId);
      
      // Simulating email verification logic without `isEmailVerified` field
      if (userRegistration.otp !== otp) {
        throw new HttpException(400, 'Invalid OTP');
      }

      userRegistration.otp = 0; // Clear OTP after successful verification
      await userRegistration.save();
      return userRegistration;
    } catch (error) {
      throw new HttpException(500, `Error verifying OTP: ${error.message}`);
    }
  }

  // Resend OTP - now using mobileNumber for verification
  public async resendVerificationOtp(userRegistrationId: number): Promise<UserRegistration> {
    try {
      const userRegistration = await this.getUserRegistrationById(userRegistrationId);
      const newOtp = this.generateOtp();
      userRegistration.otp = newOtp;
      await userRegistration.save();
      // Logic for sending OTP can be implemented here
      await this.sendOtp(userRegistration.mobileNumber, newOtp);
      return userRegistration;
    } catch (error) {
      throw new HttpException(500, `Error resending verification OTP: ${error.message}`);
    }
  }

  // Helper method to generate a new OTP
  private generateOtp(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }

  // Helper method to send OTP (this should be implemented in production)
  private async sendOtp(mobileNumber: string, otp: number): Promise<void> {
    console.log(`Sending OTP ${otp} to mobile number: ${mobileNumber}`);
  }
}
