

// src/repositories/categorytypes.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import CategoryType from '@/models/categorytypes';  

@Service()
export class CategoryTypeRepository {
  // Retrieve all category types with pagination
  public async getAllCategoryTypes(page: number = 1, pageSize: number = 10): Promise<{ categoryTypes: CategoryType[], totalCount: number }> {
    try {
      const categoryTypes = await CategoryType.findAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
      const totalCount = await CategoryType.count();
      return { categoryTypes, totalCount };
    } catch (error) {
      throw new HttpException(500, `Error retrieving category types: ${error.message}`);
    }
  }

  // Get a category type by ID
  public async getCategoryTypeById(categoryTypeId: number): Promise<CategoryType> {
    try {
      const categoryType = await CategoryType.findByPk(categoryTypeId);
      if (!categoryType) {
        throw new HttpException(404, 'Category type not found');
      }
      return categoryType;
    } catch (error) {
      throw new HttpException(500, `Error retrieving category type: ${error.message}`);
    }
  }

  // Create a new category type
  public async createCategoryType(createCategoryTypeDto: any): Promise<CategoryType> {
    try {
      const newCategoryType = await CategoryType.create(createCategoryTypeDto);
      return newCategoryType;
    } catch (error) {
      throw new HttpException(500, `Error creating category type: ${error.message}`);
    }
  }

  // Update a category type by ID
  public async updateCategoryTypeById(categoryTypeId: number, updateCategoryTypeDto: any): Promise<CategoryType> {
    try {
      const categoryType = await this.getCategoryTypeById(categoryTypeId); 
      const updatedCategoryType = await categoryType.update(updateCategoryTypeDto);
      return updatedCategoryType;
    } catch (error) {
      throw new HttpException(500, `Error updating category type: ${error.message}`);
    }
  }

  // Delete a category type by ID
  public async deleteCategoryTypeById(categoryTypeId: number): Promise<{ message: string }> {
    try {
      const categoryType = await this.getCategoryTypeById(categoryTypeId);
      if (!categoryType) {
        throw new HttpException(404, 'Category type not found');
      }
      await categoryType.destroy(); 
      return { message: 'Record deleted successfully' }; // Success message after deletion
    } catch (error) {
      throw new HttpException(500, `Error deleting category type: ${error.message}`);
    }
  }
}
