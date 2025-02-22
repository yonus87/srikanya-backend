//src/controllers/categorytypes.controller.ts


import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { CategoryTypeService } from '@/services/categorytypes.service';
import { CreateCategoryTypeDto, UpdateCategoryTypeDto, CategoryTypeDto } from '@/dtos/categorytypes.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/categorytypes')
export class CategoryTypeController {
  constructor(private readonly categoryTypeService: CategoryTypeService) {}

  // Get all category types with pagination
  @Get('')
  @OpenAPI({
    summary: 'Get all category types',
    description: 'Returns a list of all category types, optionally filtered by pagination',
  })
  async getCategoryTypes(
    @QueryParam('page', { required: false }) page: number = 1,
    @QueryParam('pageSize', { required: false }) pageSize: number = 10
  ): Promise<{ categoryTypes: CategoryTypeDto[], totalCount: number }> {
    try {
      const { categoryTypes, totalCount } = await this.categoryTypeService.getCategoryTypes(page, pageSize);
      return { categoryTypes, totalCount };
    } catch (error) {
      console.error('Error in getCategoryTypes controller:', error);
      throw new HttpException(500, `Error retrieving category types: ${error.message}`);
    }
  }

  // Get a category type by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get a category type by ID',
    description: 'Returns details of a specific category type by its ID',
  })
  async getCategoryTypeById(
    @Param('id') id: number
  ): Promise<CategoryTypeDto> {
    try {
      const categoryType = await this.categoryTypeService.getCategoryTypeById(id);
      return categoryType;
    } catch (error) {
      console.error(`Error in getCategoryTypeById controller for category type ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Category type with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving category type: ${error.message}`);
    }
  }

  // Create a new category type
  @Post('')
  @OpenAPI({
    summary: 'Create a new category type',
    description: 'Creates a new category type and returns the created category type details',
  })
  @UseBefore(validationMiddleware(CreateCategoryTypeDto))
  async createCategoryType(
    @Body() createCategoryTypeDto: CreateCategoryTypeDto
  ): Promise<CategoryTypeDto> {
    try {
      const newCategoryType = await this.categoryTypeService.createCategoryType(createCategoryTypeDto);
      return newCategoryType;
    } catch (error) {
      console.error('Error in createCategoryType controller:', error);
      throw new HttpException(500, `Error creating category type: ${error.message}`);
    }
  }

  // Update an existing category type by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update a category type by ID',
    description: 'Updates the details of a specific category type by its ID',
  })
  @UseBefore(validationMiddleware(UpdateCategoryTypeDto))
  async updateCategoryTypeById(
    @Param('id') id: number,
    @Body() updateCategoryTypeDto: UpdateCategoryTypeDto
  ): Promise<CategoryTypeDto> {
    try {
      const updatedCategoryType = await this.categoryTypeService.updateCategoryTypeById(id, updateCategoryTypeDto);
      return updatedCategoryType;
    } catch (error) {
      console.error(`Error in updateCategoryTypeById controller for category type ID ${id}:`, error);
      throw new HttpException(500, `Error updating category type: ${error.message}`);
    }
  }

  // Delete a category type by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete a category type by ID',
    description: 'Deletes a specific category type by its ID',
  })
  async deleteCategoryTypeById(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      await this.categoryTypeService.deleteCategoryTypeById(id);
      return { message: 'Category type deleted successfully' };  
    } catch (error) {
      console.error(`Error in deleteCategoryTypeById controller for category type ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Category type with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting category type: ${error.message}`);
    }
  }
}
