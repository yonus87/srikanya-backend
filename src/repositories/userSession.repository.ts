// src/repositories/userSession.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import { UserSessionDto, CreateUserSessionDto, UpdateUserSessionDto, UserSessionResponseDto } from '@/dtos/user-session.dto';
import usersession from '@/models/userSession'; 

@Service()
export class UserSessionRepository {
  // Create a new user session
  public async createUserSession(createUserSessionDto: CreateUserSessionDto): Promise<UserSessionDto> {
    try {
      // Check if session ID already exists
      const existingSession = await usersession.findOne({ where: { sid: createUserSessionDto.sid } });
      if (existingSession) {
        throw new HttpException(400, 'Session with this SID already exists');
      }

      const newSession = await usersession.create({
        sid: createUserSessionDto.sid,
        expires: createUserSessionDto.expires,
        data: createUserSessionDto.data,
        userId: createUserSessionDto.userId,
      });

      return newSession.toJSON() as UserSessionDto;
    } catch (error) {
      throw new HttpException(500, `Error creating user session: ${error.message}`);
    }
  }

  // Update an existing user session
  public async updateUserSessionById(
    sid: string,
    updateUserSessionDto: UpdateUserSessionDto
  ): Promise<UserSessionDto> {
    try {
      const session = await usersession.findOne({ where: { sid } });

      if (!session) {
        throw new HttpException(404, 'User session not found');
      }

      // Only update fields 
      session.sid = updateUserSessionDto.sid || session.sid;
      session.expires = updateUserSessionDto.expires || session.expires;
      session.data = updateUserSessionDto.data || session.data;
      session.userId = updateUserSessionDto.userId || session.userId;

      await session.save();

      return session.toJSON() as UserSessionDto;
    } catch (error) {
      throw new HttpException(500, `Error updating user session: ${error.message}`);
    }
  }

  // Get a user session by session ID
  public async getUserSessionById(sid: string): Promise<UserSessionResponseDto> {
    try {
      const session = await usersession.findOne({ where: { sid } });

      if (!session) {
        throw new HttpException(404, 'User session not found');
      }

      return session.toJSON() as UserSessionResponseDto;
    } catch (error) {
      throw new HttpException(500, `Error retrieving user session: ${error.message}`);
    }
  }

  // Delete a user session by session ID
  public async deleteUserSessionById(sid: string): Promise<{ message: string }> {
    try {
      const session = await usersession.findOne({ where: { sid } });

      if (!session) {
        throw new HttpException(404, 'User session not found');
      }

      await session.destroy(); // Delete the session
      return { message: 'User session deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting user session: ${error.message}`);
    }
  }
}
