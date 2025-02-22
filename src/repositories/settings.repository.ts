// src/repositories/settings.repository.ts

import { Service } from 'typedi';
import Setting from '../models/settings';  
import Location from '../models/location'; 
import { HttpException } from '../exceptions/HttpException';

@Service()
export class SettingsRepository {

  // Create a new setting
  async create(settingData: Setting): Promise<Setting> {
    try {
      // Ensure the locationId is set to null if not provided
      const newSetting = await Setting.create({
        ...settingData,
        locationId: settingData.locationId ?? null,
      });
      return newSetting;
    } catch (error) {
      console.error('Error creating setting:', error);
      throw new HttpException(500, 'Failed to create setting');
    }
  }

  // Get settings, optionally filtered by locationId
  public async getSettings(locationId: number | null = null): Promise<Setting[]> {
    try {
      // Fetch settings based on locationId filter and include related location data
      const settingsList = await Setting.findAll({
        where: locationId ? { locationId } : {},
        include: [
          {
            model: Location,
            as: 'location',
            required: false,
          }
        ],
        logging: console.log,  
      });

      // Check if no settings found and return an empty array
      if (!settingsList.length) {
        console.warn('No settings found');  
        return [];  
      }

      return settingsList;
    } catch (error) {
      console.error('Error fetching settings:', error);
      throw new HttpException(500, 'Failed to fetch settings');
    }
  }

  // Get setting by ID
  async getById(id: number): Promise<Setting | undefined> {
    try {
      const foundSetting = await Setting.findByPk(id, {
        include: [
          {
            model: Location, 
            as: 'location',  
            required: false,
          }
        ]
      });

      if (!foundSetting) {
        throw new HttpException(404, 'Setting not found');
      }
      return foundSetting;
    } catch (error) {
      console.error('Error fetching setting by ID:', error);
      throw new HttpException(500, 'Failed to fetch setting');
    }
  }

  // Update an existing setting
  async update(id: number, settingData: Setting): Promise<Setting | null> {
    try {
      const settingToUpdate = await Setting.findByPk(id);
      if (!settingToUpdate) {
        throw new HttpException(404, 'Setting not found');
      }

      await settingToUpdate.update({
        ...settingData,
        locationId: settingData.locationId ?? null,
      });

      return settingToUpdate;
    } catch (error) {
      console.error('Error updating setting:', error);
      throw new HttpException(500, 'Failed to update setting');
    }
  }

  // Soft delete a setting by ID (set value to null)
  async delete(id: number): Promise<Setting | null> {
    try {
      const settingToDelete = await Setting.findByPk(id);
      if (!settingToDelete) {
        throw new HttpException(404, 'Setting not found');
      }

      settingToDelete.setDataValue('value', null); 
      await settingToDelete.save();

      return settingToDelete;
    } catch (error) {
      console.error('Error soft-deleting setting:', error);
      throw new HttpException(500, 'Failed to delete setting');
    }
  }

  // Hard delete a setting by ID (permanent removal from DB)
  public async deleteSettingById(settingId: number): Promise<{ message: string }> {
    try {
      const setting = await this.getById(settingId);  
      if (!setting) {
        throw new HttpException(404, 'Setting not found');
      }

      await setting.destroy();  

      return { message: 'Setting deleted successfully' };  
    } catch (error) {
      console.error('Error deleting setting:', error);
      throw new HttpException(500, `Error deleting setting: ${error.message}`);
    }
  }
}
