// src/services/categorydimension.service.ts

import { Service } from 'typedi';
import { CategoryDimensionRepository } from '@/repositories/categorydimension.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { CategoryDimensionDto, UpdateCategoryDimensionDto, CreateCategoryDimensionDto, CategoryDimensionResponseDto } from '@/dtos/categorydimension.dto';
import CategoryDimension from '@/models/categorydimension';

@Service()
export class CategoryDimensionService {
  constructor(
    private readonly categoryDimensionRepository: CategoryDimensionRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Get all category dimensions with pagination (includes join with CategoryType)
  async findAll(page: number = 1, pageSize: number = 10): Promise<{ categoryDimensions: CategoryDimensionResponseDto[], totalCount: number }> {
    try {
      const { categoryDimensions, totalCount } = await this.categoryDimensionRepository.getAllCategoryDimensions(page, pageSize);
      const categoryDimensionDtos = categoryDimensions.map(categoryDimension =>
        this.autoMapper.mapper.map(categoryDimension, CategoryDimension, CategoryDimensionResponseDto)
      );
      return { categoryDimensions: categoryDimensionDtos, totalCount };
    } catch (error) {
      console.error('Error in findAll:', error);
      throw new HttpException(500, `Error retrieving category dimensions: ${error.message}`);
    }
  }

  // Get a category dimension by ID (with join data)
  async getCategoryDimensionById(categoryDimensionId: number): Promise<CategoryDimensionResponseDto> {
    try {
      const categoryDimension = await this.categoryDimensionRepository.getCategoryDimensionById(categoryDimensionId);
      return this.autoMapper.mapper.map(categoryDimension, CategoryDimension, CategoryDimensionResponseDto);
    } catch (error) {
      console.error(`Error in getCategoryDimensionById (ID: ${categoryDimensionId}):`, error);
      throw new HttpException(500, `Error retrieving category dimension: ${error.message}`);
    }
  }

  // Create a new category dimension
  async createCategoryDimension(createCategoryDimensionDto: CreateCategoryDimensionDto): Promise<CategoryDimensionResponseDto> {
    try {
      const newCategoryDimension = await this.categoryDimensionRepository.createCategoryDimension(createCategoryDimensionDto);
      return this.autoMapper.mapper.map(newCategoryDimension, CategoryDimension, CategoryDimensionResponseDto);
    } catch (error) {
      console.error('Error in createCategoryDimension:', error);
      throw new HttpException(500, `Error creating category dimension: ${error.message}`);
    }
  }

  // Update a category dimension by ID
  async updateCategoryDimensionById(categoryDimensionId: number, updateCategoryDimensionDto: UpdateCategoryDimensionDto): Promise<CategoryDimensionResponseDto> {
    try {
      const updatedCategoryDimension = await this.categoryDimensionRepository.updateCategoryDimensionById(categoryDimensionId, updateCategoryDimensionDto);
      return this.autoMapper.mapper.map(updatedCategoryDimension, CategoryDimension, CategoryDimensionResponseDto);
    } catch (error) {
      console.error(`Error in updateCategoryDimensionById (ID: ${categoryDimensionId}):`, error);
      throw new HttpException(500, `Error updating category dimension: ${error.message}`);
    }
  }

  // Soft delete a category dimension by ID (Set isDeleted = 1)
  async softDeleteCategoryDimensionById(categoryDimensionId: number): Promise<{ message: string }> {
    try {
      await this.categoryDimensionRepository.softDeleteCategoryDimensionById(categoryDimensionId);
      return { message: 'Category dimension soft deleted successfully' };
    } catch (error) {
      console.error(`Error in softDeleteCategoryDimensionById (ID: ${categoryDimensionId}):`, error);
      throw new HttpException(500, `Error deleting category dimension: ${error.message}`);
    }
  }

  // Permanently delete a category dimension by ID
  async deleteCategoryDimensionById(categoryDimensionId: number): Promise<{ message: string }> {
    try {
      await this.categoryDimensionRepository.deleteCategoryDimensionById(categoryDimensionId);
      return { message: 'Category dimension permanently deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteCategoryDimensionById (ID: ${categoryDimensionId}):`, error);
      throw new HttpException(500, `Error permanently deleting category dimension: ${error.message}`);
    }
  }
}
