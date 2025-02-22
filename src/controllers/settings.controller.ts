// src/controllers/settings.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, QueryParam, UseBefore } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { SettingsService } from '@/services/settings.service';
import { SettingsDto, UpdateSettingsDto, CreateSettingsDto } from '@/dtos/settings.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('')
  @OpenAPI({
    summary: 'Get all settings',
    description: 'Returns a list of all settings, optionally filtered by locationId',
  })
  async getAllSettings(
    @QueryParam('locationId', { required: false }) locationId: number | undefined
  ): Promise<SettingsDto[]> {
    try {
      const settings = await this.settingsService.getAll(locationId);
      return settings;
    } catch (error) {
      console.error('Error in getAllSettings controller:', error);
      throw new HttpException(500, `Error retrieving settings: ${error.message}`);
    }
  }

  // Get setting by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get setting details by ID',
    description: 'Returns details of a specific setting by its ID',
  })
  async getSettingById(
    @Param('id') id: number
  ): Promise<SettingsDto | undefined> {
    try {
      const setting = await this.settingsService.getById(id);
      if (!setting) {
        throw new HttpException(404, `Setting with ID ${id} not found`);
      }
      return setting;
    } catch (error) {
      console.error(`Error in getSettingById controller for setting ID ${id}:`, error);
      throw new HttpException(500, `Error retrieving setting: ${error.message}`);
    }
  }

  // Create a new setting
  @Post('')
  @OpenAPI({
    summary: 'Create a new setting',
    description: 'Creates a new setting and returns the created setting details',
  })
  @UseBefore(validationMiddleware(CreateSettingsDto))
  @ResponseSchema(SettingsDto, {
    contentType: 'application/json',
    description: 'Created setting data',
    statusCode: '201',
    isArray: false,
  })
  async createSetting(
    @Body() settingData: CreateSettingsDto
  ): Promise<SettingsDto> {
    try {
      return await this.settingsService.create(settingData);
    } catch (error) {
      console.error('Error in createSetting controller:', error);
      throw new HttpException(500, `Error creating setting: ${error.message}`);
    }
  }

  // Update an existing setting by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update setting by ID',
    description: 'Updates the details of a specific setting by its ID',
  })
  @UseBefore(validationMiddleware(UpdateSettingsDto))
  @ResponseSchema(SettingsDto, {
    contentType: 'application/json',
    description: 'Updated setting data',
    statusCode: '200',
    isArray: false,
  })
  async updateSetting(
    @Param('id') id: number,
    @Body() settingData: UpdateSettingsDto
  ): Promise<SettingsDto | null> {
    try {
      return await this.settingsService.update(id, settingData);
    } catch (error) {
      console.error(`Error in updateSetting controller for setting ID ${id}:`, error);
      throw new HttpException(500, `Error updating setting: ${error.message}`);
    }
  }

  // Delete a setting by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete setting by ID',
    description: 'Deletes a specific setting by its ID',
  })
  async deleteSetting(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      const result = await this.settingsService.delete(id);
      if (!result) {
        throw new HttpException(404, `Setting with ID ${id} not found`);
      }
      return { message: 'Setting successfully deleted' };
    } catch (error) {
      console.error(`Error in deleteSetting controller for setting ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Setting with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting setting: ${error.message}`);
    }
  }
}
