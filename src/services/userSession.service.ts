//src/services/userSession.service.ts

import { Service } from 'typedi';
import { UserSessionRepository } from '@/repositories/userSession.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { UserSessionDto, CreateUserSessionDto, UpdateUserSessionDto, UserSessionResponseDto } from '@/dtos/user-session.dto';
import UserSession from '@/models/userSession';

@Service()
export class UserSessionService {
  constructor(
    private readonly userSessionRepository: UserSessionRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Get user session by session ID (sid)
  async getUserSessionById(sid: string): Promise<UserSessionResponseDto> {
    try {
      const userSession = await this.userSessionRepository.getUserSessionById(sid);
      return this.autoMapper.mapper.map(userSession, UserSession, UserSessionResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error retrieving user session: ${error.message}`);
    }
  }

  // Create a new user session
  async createUserSession(createUserSessionDto: CreateUserSessionDto): Promise<UserSessionDto> {
    try {
      const newUserSession = await this.userSessionRepository.createUserSession(createUserSessionDto);
      return this.autoMapper.mapper.map(newUserSession, UserSession, UserSessionDto);
    } catch (error) {
      throw new HttpException(500, `Error creating user session: ${error.message}`);
    }
  }

  // Update user session by session ID (sid)
  async updateUserSessionById(
    sid: string,
    updateUserSessionDto: UpdateUserSessionDto
  ): Promise<UserSessionDto> {
    try {
      const updatedUserSession = await this.userSessionRepository.updateUserSessionById(
        sid,
        updateUserSessionDto
      );
      return this.autoMapper.mapper.map(updatedUserSession, UserSession, UserSessionDto);
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User session not found');
      }
      throw new HttpException(500, `Error updating user session: ${error.message}`);
    }
  }

  // Delete user session by session ID (sid)
  async deleteUserSessionById(sid: string): Promise<void> {
    try {
      await this.userSessionRepository.deleteUserSessionById(sid);
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User session not found');
      }
      throw new HttpException(500, `Error deleting user session: ${error.message}`);
    }
  }
}
