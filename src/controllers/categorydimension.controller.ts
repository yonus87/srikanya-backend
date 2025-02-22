//src/controllers/categorydimension.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, QueryParam, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { CategoryDimensionService } from '@/services/categorydimension.service';
import { CreateCategoryDimensionDto, UpdateCategoryDimensionDto, CategoryDimensionResponseDto } from '@/dtos/categorydimension.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/category-dimensions')
export class CategoryDimensionController {
  constructor(private readonly categoryDimensionService: CategoryDimensionService) {}

  // Get all category dimensions with pagination
  @Get('')
  @OpenAPI({
    summary: 'Get all category dimensions',
    description: 'Returns a list of all category dimensions, optionally filtered by isDisabled status',
  })
  async getAllCategoryDimensions(
    @QueryParam('page', { required: false }) page: number = 1,
    @QueryParam('pageSize', { required: false }) pageSize: number = 10
  ): Promise<{ categoryDimensions: CategoryDimensionResponseDto[], totalCount: number }> {
    // Validate page and pageSize
    if (page <= 0) throw new HttpException(400, 'Page number must be greater than 0');
    if (pageSize <= 0 || pageSize > 100) throw new HttpException(400, 'Page size must be between 1 and 100');

    try {
      const { categoryDimensions, totalCount } = await this.categoryDimensionService.findAll(page, pageSize);
      return { categoryDimensions, totalCount };
    } catch (error) {
      console.error('Error in getAllCategoryDimensions controller:', error);
      throw new HttpException(500, `Error retrieving category dimensions: ${error.message}`);
    }
  }

  // Get a category dimension by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get a category dimension by ID',
    description: 'Returns details of a specific category dimension by its ID',
  })
  async getCategoryDimensionById(
    @Param('id') id: number
  ): Promise<CategoryDimensionResponseDto> {
    try {
      const categoryDimension = await this.categoryDimensionService.getCategoryDimensionById(id);
      return categoryDimension;
    } catch (error) {
      console.error(`Error in getCategoryDimensionById controller for category dimension ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Category dimension with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving category dimension: ${error.message}`);
    }
  }

  // Create a new category dimension
  @Post('')
  @OpenAPI({
    summary: 'Create a new category dimension',
    description: 'Creates a new category dimension and returns the created category dimension details',
  })
  @UseBefore(validationMiddleware(CreateCategoryDimensionDto))
  async createCategoryDimension(
    @Body() createCategoryDimensionDto: CreateCategoryDimensionDto
  ): Promise<CategoryDimensionResponseDto> {
    try {
      const newCategoryDimension = await this.categoryDimensionService.createCategoryDimension(createCategoryDimensionDto);
      return newCategoryDimension;
    } catch (error) {
      console.error('Error in createCategoryDimension controller:', error);
      throw new HttpException(500, `Error creating category dimension: ${error.message}`);
    }
  }

  // Update an existing category dimension by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update a category dimension by ID',
    description: 'Updates the details of a specific category dimension by its ID',
  })
  @UseBefore(validationMiddleware(UpdateCategoryDimensionDto))
  async updateCategoryDimensionById(
    @Param('id') id: number,
    @Body() updateCategoryDimensionDto: UpdateCategoryDimensionDto
  ): Promise<CategoryDimensionResponseDto> {
    try {
      const updatedCategoryDimension = await this.categoryDimensionService.updateCategoryDimensionById(id, updateCategoryDimensionDto);
      return updatedCategoryDimension;
    } catch (error) {
      console.error(`Error in updateCategoryDimensionById controller for category dimension ID ${id}:`, error);
      throw new HttpException(500, `Error updating category dimension: ${error.message}`);
    }
  }

  // Soft delete a category dimension by ID
  @Put('/soft-delete/:id')
  @OpenAPI({
    summary: 'Soft delete a category dimension by ID',
    description: 'Sets the isDeleted flag of a specific category dimension to 1 (soft delete)',
  })
  async softDeleteCategoryDimensionById(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      await this.categoryDimensionService.softDeleteCategoryDimensionById(id);
      return { message: 'Category dimension soft deleted successfully' };
    } catch (error) {
      console.error(`Error in softDeleteCategoryDimensionById controller for category dimension ID ${id}:`, error);
      throw new HttpException(500, `Error soft deleting category dimension: ${error.message}`);
    }
  }

  // Delete a category dimension by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete a category dimension by ID',
    description: 'Deletes a specific category dimension by its ID',
  })
  async deleteCategoryDimensionById(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      await this.categoryDimensionService.deleteCategoryDimensionById(id);
      return { message: 'Category dimension deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteCategoryDimensionById controller for category dimension ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Category dimension with ID ${id} not found`);
      }
      throw new HttpException(500, `Error deleting category dimension: ${error.message}`);
    }
  }
}
