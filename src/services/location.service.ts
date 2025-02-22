import { Service } from 'typedi';
import { LocationsRepository } from '@/repositories/location.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import {
  LocationDto,
  CreateLocationDto,
  UpdateLocationDto,
  LocationListResponseDto,
} from '@/dtos/location.dto';
import Location from '@/models/location';

@Service()
export class LocationsService {
  constructor(
    private readonly locationsRepository: LocationsRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Get all locations with pagination (including total count)
  async findAll(page: number = 1, pageSize: number = 10): Promise<{ total: number; locations: LocationListResponseDto[] }> {
    try {
      const { total, locations } = await this.locationsRepository.getAllLocations(page, pageSize);
      return { 
        total, 
        locations: locations.map((location) =>
          this.autoMapper.mapper.map(location, Location, LocationListResponseDto)
        ),
      };
    } catch (error) {
      console.error(`Error retrieving locations: ${error.message}`);
      throw new HttpException(500, 'Error retrieving locations');
    }
  }

  // Get a location by ID
  async getLocationById(locationId: number): Promise<LocationListResponseDto> {
    try {
      const location = await this.locationsRepository.getLocationById(locationId);
      return this.autoMapper.mapper.map(location, Location, LocationListResponseDto);
    } catch (error) {
      console.error(`Error retrieving location (ID: ${locationId}): ${error.message}`);
      throw new HttpException(500, 'Error retrieving location');
    }
  }

  // Create a new location
  async createLocation(createLocationDto: CreateLocationDto): Promise<LocationListResponseDto> {
    try {
      if (typeof createLocationDto.latitude === 'number') {
        createLocationDto.latitude = parseFloat(createLocationDto.latitude.toFixed(12));
      }
      if (typeof createLocationDto.longitude === 'number') {
        createLocationDto.longitude = parseFloat(createLocationDto.longitude.toFixed(12));
      }

      const newLocation = await this.locationsRepository.createLocation(createLocationDto);
      return this.autoMapper.mapper.map(newLocation, Location, LocationListResponseDto);
    } catch (error) {
      console.error(`Error creating location: ${error.message}`);
      throw new HttpException(500, 'Error creating location');
    }
  }

  // Update a location by ID
  async updateLocationById(locationId: number, updateLocationDto: UpdateLocationDto): Promise<LocationListResponseDto> {
    try {
      if (typeof updateLocationDto.latitude === 'number') {
        updateLocationDto.latitude = parseFloat(updateLocationDto.latitude.toFixed(12));
      }
      if (typeof updateLocationDto.longitude === 'number') {
        updateLocationDto.longitude = parseFloat(updateLocationDto.longitude.toFixed(12));
      }

      const updatedLocation = await this.locationsRepository.updateLocationById(locationId, updateLocationDto);
      return this.autoMapper.mapper.map(updatedLocation, Location, LocationListResponseDto);
    } catch (error) {
      console.error(`Error updating location (ID: ${locationId}): ${error.message}`);
      throw new HttpException(500, 'Error updating location');
    }
  }

  // Delete a location by ID
  async deleteLocationById(locationId: number): Promise<{ message: string }> {
    try {
      await this.locationsRepository.deleteLocationById(locationId);
      return { message: 'Location deleted successfully' };
    } catch (error) {
      console.error(`Error deleting location (ID: ${locationId}): ${error.message}`);
      throw new HttpException(500, 'Error deleting location');
    }
  }
}
