import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import Location from '@/models/location';
import { CreateLocationDto, UpdateLocationDto } from '@/dtos/location.dto';

@Service()
export class LocationsRepository {
  // Retrieve all locations with pagination (with total count)
  public async getAllLocations(page: number = 1, pageSize: number = 10): Promise<{ locations: Location[]; total: number }> {
    try {
      const { rows: locations, count: total } = await Location.findAndCountAll({
        attributes: ['id', 'name', 'address', 'wishMessage', 'carouselImage', 'latitude', 'longitude'],
        limit: pageSize,
        offset: (page - 1) * pageSize,
        raw: true,
      });

      locations.forEach(location => {
        location.latitude = location.latitude ? parseFloat(location.latitude.toString()) : null;
        location.longitude = location.longitude ? parseFloat(location.longitude.toString()) : null;
      });

      return { locations, total };
    } catch (error) {
      throw new HttpException(500, `Error retrieving locations: ${error.message}`);
    }
  }

  // Get a location by ID
  public async getLocationById(locationId: number): Promise<Location> {
    try {
      if (!locationId) throw new HttpException(400, 'Invalid location ID');
      
      const location = await Location.findByPk(locationId, {
        attributes: ['id', 'name', 'address', 'wishMessage', 'carouselImage', 'latitude', 'longitude'],
        raw: true,
      });
      
      if (!location) throw new HttpException(404, 'Location not found');
      
      location.latitude = location.latitude ? parseFloat(location.latitude.toString()) : null;
      location.longitude = location.longitude ? parseFloat(location.longitude.toString()) : null;

      return location;
    } catch (error) {
      console.error(`Error fetching location (ID: ${locationId}):`, error);
      throw new HttpException(500, `Error retrieving location: ${error.message}`);
    }
  }

  // Create a new location
  public async createLocation(createLocationDto: CreateLocationDto): Promise<Location> {
    try {
      if (createLocationDto.latitude != null) {
        createLocationDto.latitude = parseFloat(createLocationDto.latitude.toString());
      }
      if (createLocationDto.longitude != null) {
        createLocationDto.longitude = parseFloat(createLocationDto.longitude.toString());
      }
      if (createLocationDto.pincode != null) {
        createLocationDto.pincode = parseInt(createLocationDto.pincode.toString(), 10);
      }
      
      const newLocation = await Location.create({ ...createLocationDto });
      return newLocation;
    } catch (error) {
      throw new HttpException(500, `Error creating location: ${error.message}`);
    }
  }

  // Update a location by ID
  public async updateLocationById(locationId: number, updateLocationDto: UpdateLocationDto): Promise<Location> {
    try {
      const location = await this.getLocationById(locationId);
      
      if (updateLocationDto.latitude != null) {
        updateLocationDto.latitude = parseFloat(updateLocationDto.latitude.toString());
      }
      if (updateLocationDto.longitude != null) {
        updateLocationDto.longitude = parseFloat(updateLocationDto.longitude.toString());
      }
      if (updateLocationDto.pincode != null) {
        updateLocationDto.pincode = parseInt(updateLocationDto.pincode.toString(), 10);
      }
      
      await location.update({ ...updateLocationDto });
      return location;
    } catch (error) {
      throw new HttpException(500, `Error updating location: ${error.message}`);
    }
  }

  // Delete a location by ID
  public async deleteLocationById(locationId: number): Promise<{ message: string }> {
    try {
      const location = await this.getLocationById(locationId);
      await location.destroy();
      return { message: 'Location deleted successfully' };
    } catch (error) {
      console.error(`Error deleting location (ID: ${locationId}):`, error);
      throw new HttpException(500, `Error deleting location: ${error.message}`);
    }
  }
}
