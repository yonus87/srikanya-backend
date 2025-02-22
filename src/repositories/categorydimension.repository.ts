import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import CategoryDimension from '@/models/categorydimension';
import CategoryType from '@/models/categorytypes';
import { CreateCategoryDimensionDto, UpdateCategoryDimensionDto } from '@/dtos/categorydimension.dto';

@Service()
export class CategoryDimensionRepository {
  // Retrieve all CategoryDimensions with pagination and join with CategoryType
  public async getAllCategoryDimensions(
    page: number = 1,
    pageSize: number = 10
  ): Promise<{ categoryDimensions: CategoryDimension[], totalCount: number }> {
    try {
      const categoryDimensions = await CategoryDimension.findAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
        where: { isDeleted: 0 },
        include: [
          {
            model: CategoryType,
            as: 'categoryType', 
            attributes: ['id', 'type', 'name', 'displayRate', 'primaryDimension'], 
          },
        ],
      });

      const totalCount = await CategoryDimension.count({
        where: { isDeleted: 0 },
      });

      return { categoryDimensions, totalCount };
    } catch (error) {
      throw new HttpException(500, `Error retrieving category dimensions: ${error.message}`);
    }
  }

  // Get a CategoryDimension by ID with CategoryType join
  public async getCategoryDimensionById(categoryDimensionId: number): Promise<CategoryDimension> {
    try {
      const categoryDimension = await CategoryDimension.findOne({
        where: {
          id: categoryDimensionId,
          isDeleted: 0,
        },
        include: [
          {
            model: CategoryType,
            as: 'categoryType', 
            attributes: ['id', 'type', 'name', 'displayRate', 'primaryDimension'], 
          },
        ],
      });

      if (!categoryDimension) {
        throw new HttpException(404, 'Category Dimension not found');
      }

      return categoryDimension;
    } catch (error) {
      throw new HttpException(500, `Error retrieving category dimension: ${error.message}`);
    }
  }

  // Create a new CategoryDimension
  public async createCategoryDimension(createCategoryDimensionDto: CreateCategoryDimensionDto): Promise<CategoryDimension> {
    try {
      // Map DTO fields to the CategoryDimension model fields
      const categoryDimensionData = {
        dimensionId: createCategoryDimensionDto.dimensionId,
        categoryId: createCategoryDimensionDto.categoryId,
        isDeleted: createCategoryDimensionDto.isDeleted || 0, 
      };
  
      // Create the CategoryDimension record using Sequelize's create method
      const newCategoryDimension = await CategoryDimension.create(categoryDimensionData);
      return newCategoryDimension;
    } catch (error) {
      throw new HttpException(500, `Error creating category dimension: ${error.message}`);
    }
  }
  
  // Update a CategoryDimension by ID
  public async updateCategoryDimensionById(
    categoryDimensionId: number,
    updateCategoryDimensionDto: UpdateCategoryDimensionDto
  ): Promise<CategoryDimension> {
    try {
      const categoryDimension = await this.getCategoryDimensionById(categoryDimensionId);

      const updatedCategoryDimension = await categoryDimension.update(updateCategoryDimensionDto);
      return updatedCategoryDimension;
    } catch (error) {
      throw new HttpException(500, `Error updating category dimension: ${error.message}`);
    }
  }

  // Soft Delete a CategoryDimension by ID (Set isDeleted = 1)
  public async softDeleteCategoryDimensionById(categoryDimensionId: number): Promise<{ message: string }> {
    try {
      const categoryDimension = await this.getCategoryDimensionById(categoryDimensionId);
      if (!categoryDimension) {
        throw new HttpException(404, 'Category Dimension not found');
      }

      // Perform soft delete by updating the `isDeleted` field
      await categoryDimension.update({ isDeleted: 1 });

      return { message: 'Category Dimension marked as deleted' };
    } catch (error) {
      throw new HttpException(500, `Error deleting category dimension: ${error.message}`);
    }
  }

  // Permanently delete a CategoryDimension by ID
  public async deleteCategoryDimensionById(categoryDimensionId: number): Promise<{ message: string }> {
    try {
      const categoryDimension = await this.getCategoryDimensionById(categoryDimensionId);
      if (!categoryDimension) {
        throw new HttpException(404, 'Category Dimension not found');
      }

      // Perform permanent deletion
      await categoryDimension.destroy();

      return { message: 'Category Dimension deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error permanently deleting category dimension: ${error.message}`);
    }
  }
}
