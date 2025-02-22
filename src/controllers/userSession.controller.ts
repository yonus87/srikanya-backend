//src/controllers/userSession.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { UserSessionService } from '@/services/userSession.service';
import { UserSessionDto, CreateUserSessionDto, UpdateUserSessionDto, UserSessionResponseDto } from '@/dtos/user-session.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/usersessions')
export class UserSessionController {
  constructor(private readonly userSessionService: UserSessionService) {}

  // Get user session by session ID (sid)
  @Get('/:sid')
  @OpenAPI({
    summary: 'Get a user session by session ID',
    description: 'Returns details of a user session by its session ID.',
  })
  async getUserSessionById(@Param('sid') sid: string): Promise<UserSessionDto> {
    try {
      return await this.userSessionService.getUserSessionById(sid);
    } catch (error) {
      throw new HttpException(500, `Error retrieving user session: ${error.message}`);
    }
  }

  // Create a new user session
  @Post('')
  @OpenAPI({
    summary: 'Create a new user session',
    description: 'Creates a new user session and returns the session details.',
  })
  @UseBefore(validationMiddleware(CreateUserSessionDto))
  async createUserSession(@Body() createUserSessionDto: CreateUserSessionDto): Promise<UserSessionDto> {
    try {
      return await this.userSessionService.createUserSession(createUserSessionDto);
    } catch (error) {
      throw new HttpException(500, `Error creating user session: ${error.message}`);
    }
  }

  // Update a user session by session ID (sid)
  @Put('/:sid')
  @OpenAPI({
    summary: 'Update a user session by session ID',
    description: 'Updates the details of a user session based on the session ID.',
  })
  @UseBefore(validationMiddleware(UpdateUserSessionDto))
  async updateUserSessionById(
    @Param('sid') sid: string,
    @Body() updateUserSessionDto: UpdateUserSessionDto
  ): Promise<UserSessionDto> {
    try {
      return await this.userSessionService.updateUserSessionById(sid, updateUserSessionDto);
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User session not found');
      }
      throw new HttpException(500, `Error updating user session: ${error.message}`);
    }
  }

  // Delete a user session by session ID (sid)
  @Delete('/:sid')
  @OpenAPI({
    summary: 'Delete a user session by session ID',
    description: 'Deletes a user session by its session ID.',
  })
  async deleteUserSessionById(@Param('sid') sid: string): Promise<{ message: string }> {
    try {
      await this.userSessionService.deleteUserSessionById(sid);
      return { message: 'User session deleted successfully' };
    } catch (error) {
      if (error.status === 404) {
        throw new HttpException(404, 'User session not found');
      }
      throw new HttpException(500, `Error deleting user session: ${error.message}`);
    }
  }
}
