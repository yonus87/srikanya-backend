//src/services/settings.service.ts

import { Service } from 'typedi';
import { SettingsDto, UpdateSettingsDto, CreateSettingsDto } from '@/dtos/settings.dto';
import  settings  from '@/models/settings'; 
import { HttpException } from '@/exceptions/HttpException';
import { SettingsRepository } from '@/repositories/settings.repository';
import { AutoMapperManager } from '@/mapper-profiles/mapper';

@Service()
export class SettingsService {
  constructor(
    public settingsRepository: SettingsRepository,
    public mapperManager: AutoMapperManager
  ) {}

  // Create a new setting
  async create(createSettingsDto: CreateSettingsDto): Promise<SettingsDto> {
    try {
      const settingsData = this.mapperManager.mapper.map(createSettingsDto, CreateSettingsDto, settings);
      const response = await this.settingsRepository.create(settingsData);
      return this.mapperManager.mapper.map(response, settings, SettingsDto);
    } catch (error) {
      console.error('Error in SettingsService during create:', error);
      throw new HttpException(500, 'Failed to create setting');
    }
  }

  // Get all settings
  async getAll(isDeleted: number = 0): Promise<SettingsDto[]> { 
    try {
      console.log(`Fetching settings with isDeleted = ${isDeleted}`);
      const settingsList = await this.settingsRepository.getSettings(isDeleted);
      return this.mapperManager.mapper.mapArray(settingsList, settings, SettingsDto);
    } catch (error) {
      console.error('Error in SettingsService while fetching settings:', error);
      throw new HttpException(500, 'Failed to fetch settings');
    }
  }
  
  // Get setting by ID
  async getById(id: number): Promise<SettingsDto | undefined> {
    try {
      const setting = await this.settingsRepository.getById(id);
      if (!setting) {
        throw new HttpException(404, 'Setting not found');
      }
      return this.mapperManager.mapper.map(setting, settings, SettingsDto);
    } catch (error) {
      console.error('Error in SettingsService while fetching setting by ID:', error);
      throw new HttpException(500, 'Failed to fetch setting');
    }
  }

  // Update setting
  async update(id: number, updateSettingsDto: UpdateSettingsDto): Promise<SettingsDto | null> {
    try {
      const settingsData = this.mapperManager.mapper.map(updateSettingsDto, UpdateSettingsDto, settings);
      const response = await this.settingsRepository.update(id, settingsData);
      if (!response) {
        throw new HttpException(404, 'Setting not found');
      }
      return this.mapperManager.mapper.map(response, settings, SettingsDto);
    } catch (error) {
      console.error('Error in SettingsService while updating setting:', error);
      throw new HttpException(500, 'Failed to update setting');
    }
  }

  // Delete setting
  public async delete(id: number): Promise<{ message: string }> {
    try {
      return await this.settingsRepository.deleteSettingById(id);
    } catch (error) {
      console.error('Error in SettingsService while deleting setting:', error);
      throw new HttpException(500, 'Failed to delete setting');
    }
  }
}
