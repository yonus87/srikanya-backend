// src/services/categorytypes.service.ts

import { Service } from 'typedi';
import { CategoryTypeRepository } from '@/repositories/categorytypes.repository';
import { CategoryTypeDto, CreateCategoryTypeDto, UpdateCategoryTypeDto, CategoryTypeResponseDto } from '@/dtos/categorytypes.dto';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import CategoryType from '@/models/categorytypes'; 

@Service()
export class CategoryTypeService {
  constructor(
    private readonly categoryTypeRepository: CategoryTypeRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Get all category types with pagination
  async getCategoryTypes(page: number = 1, pageSize: number = 10): Promise<{ categoryTypes: CategoryTypeDto[], totalCount: number }> {
    try {
      const { categoryTypes, totalCount } = await this.categoryTypeRepository.getAllCategoryTypes(page, pageSize);
      const categoryTypeDtos = categoryTypes.map(categoryType => this.autoMapper.mapper.map(categoryType, CategoryType, CategoryTypeDto));
      return { categoryTypes: categoryTypeDtos, totalCount };
    } catch (error) {
      throw new HttpException(500, `Error retrieving category types: ${error.message}`);
    }
  }

  // Get a category type by ID
  async getCategoryTypeById(categoryTypeId: number): Promise<CategoryTypeDto> {
    try {
      const categoryType = await this.categoryTypeRepository.getCategoryTypeById(categoryTypeId);
      return this.autoMapper.mapper.map(categoryType, CategoryType, CategoryTypeDto);
    } catch (error) {
      throw new HttpException(500, `Error retrieving category type by ID: ${error.message}`);
    }
  }

  // Create a new category type
  async createCategoryType(createCategoryTypeDto: CreateCategoryTypeDto): Promise<CategoryTypeDto> {
    try {
      const newCategoryType = await this.categoryTypeRepository.createCategoryType(createCategoryTypeDto);
      return this.autoMapper.mapper.map(newCategoryType, CategoryType, CategoryTypeDto);
    } catch (error) {
      throw new HttpException(500, `Error creating category type: ${error.message}`);
    }
  }

  // Update a category type by ID
  async updateCategoryTypeById(categoryTypeId: number, updateCategoryTypeDto: UpdateCategoryTypeDto): Promise<CategoryTypeDto> {
    try {
      const updatedCategoryType = await this.categoryTypeRepository.updateCategoryTypeById(categoryTypeId, updateCategoryTypeDto);
      return this.autoMapper.mapper.map(updatedCategoryType, CategoryType, CategoryTypeDto);
    } catch (error) {
      throw new HttpException(500, `Error updating category type: ${error.message}`);
    }
  }

  // Delete a category type by ID
  async deleteCategoryTypeById(categoryTypeId: number): Promise<{ message: string }> {
    try {
      const result = await this.categoryTypeRepository.deleteCategoryTypeById(categoryTypeId);
      return result;
    } catch (error) {
      throw new HttpException(500, `Error deleting category type: ${error.message}`);
    }
  }
}
