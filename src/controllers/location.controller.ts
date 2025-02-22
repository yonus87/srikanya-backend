import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { LocationsService } from '@/services/location.service';
import { LocationDto, CreateLocationDto, UpdateLocationDto, LocationListResponseDto } from '@/dtos/location.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  // Get all locations with pagination
  @Get('')
  @OpenAPI({
    summary: 'Get all locations',
    description: 'Returns a list of all locations with pagination, including the total count',
  })
  async getAllLocations(
    @QueryParam('page', { required: false }) page: number = 1,
    @QueryParam('pageSize', { required: false }) pageSize: number = 10
  ): Promise<{ locations: LocationListResponseDto[]; total: number }> {
    try {
      const { locations, total } = await this.locationsService.findAll(page, pageSize);
      return { locations, total };
    } catch (error) {
      console.error('Error in getAllLocations controller:', error);
      throw new HttpException(500, `Error retrieving locations: ${error.message}`);
    }
  }

  // Get a location by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get a location by ID',
    description: 'Returns details of a specific location by its ID',
  })
  @ResponseSchema(LocationListResponseDto)
  async getLocationById(@Param('id') id: number): Promise<LocationListResponseDto> {
    try {
      return await this.locationsService.getLocationById(id);
    } catch (error) {
      console.error('Error in getLocationById controller:', error);
      throw new HttpException(500, `Error retrieving location: ${error.message}`);
    }
  }

  // Create a new location
  @Post('')
  @OpenAPI({
    summary: 'Create a new location',
    description: 'Creates a new location and returns the created location details',
  })
  @UseBefore(validationMiddleware(CreateLocationDto))
  @ResponseSchema(LocationListResponseDto)
  async createLocation(@Body() createLocationDto: CreateLocationDto): Promise<LocationListResponseDto> {
    try {
      return await this.locationsService.createLocation(createLocationDto);
    } catch (error) {
      console.error('Error in createLocation controller:', error);
      throw new HttpException(500, `Error creating location: ${error.message}`);
    }
  }

  // Update an existing location by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update a location by ID',
    description: 'Updates the details of a specific location by its ID',
  })
  @UseBefore(validationMiddleware(UpdateLocationDto))
  @ResponseSchema(LocationListResponseDto)
  async updateLocationById(
    @Param('id') id: number,
    @Body() updateLocationDto: UpdateLocationDto
  ): Promise<LocationListResponseDto> {
    try {
      return await this.locationsService.updateLocationById(id, updateLocationDto);
    } catch (error) {
      console.error('Error in updateLocationById controller:', error);
      throw new HttpException(500, `Error updating location: ${error.message}`);
    }
  }

  // Delete a location by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete a location by ID',
    description: 'Deletes a specific location by its ID',
  })
  async deleteLocationById(@Param('id') id: number): Promise<{ message: string }> {
    try {
      return await this.locationsService.deleteLocationById(id);
    } catch (error) {
      console.error('Error in deleteLocationById controller:', error);
      throw new HttpException(500, `Error deleting location: ${error.message}`);
    }
  }
}
