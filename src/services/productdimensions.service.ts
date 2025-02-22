import { Service } from 'typedi';
import { ProductDimensionsRepository } from '@/repositories/productdimensions.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { ProductDimensionsDto, CreateProductDimensionsDto, UpdateProductDimensionsDto, ProductDimensionsResponseDto } from '@/dtos/productdimensions.dto';
import ProductDimensions from '@/models/productdimensions';

@Service()
export class ProductDimensionsService {
  constructor(
    private readonly productDimensionsRepository: ProductDimensionsRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Get all product dimensions with optional product filter
  async findAll(productId?: number): Promise<{ productDimensions: ProductDimensionsResponseDto[] }> {
    try {
      const productDimensions = await this.productDimensionsRepository.getAllProductDimensions(productId);
      const productDimensionDtos = productDimensions.map(item =>
        this.autoMapper.mapper.map(item, ProductDimensions, ProductDimensionsResponseDto)
      );
      return { productDimensions: productDimensionDtos };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      throw new HttpException(500, `Error retrieving product dimensions: ${error.message}`);
    }
  }

  // Get a product dimension by ID
  async getProductDimensionById(productDimensionId: number): Promise<ProductDimensionsResponseDto> {
    try {
      const productDimension = await this.productDimensionsRepository.getProductDimensionById(productDimensionId);
      return this.autoMapper.mapper.map(productDimension, ProductDimensions, ProductDimensionsResponseDto);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      throw new HttpException(500, `Error retrieving product dimension: ${error.message}`);
    }
  }

  // Create a new product dimension
  async createProductDimension(createProductDimensionDto: CreateProductDimensionsDto): Promise<ProductDimensionsResponseDto> {
    try {
      const newProductDimension = await this.productDimensionsRepository.createProductDimension(createProductDimensionDto);
      return this.autoMapper.mapper.map(newProductDimension, ProductDimensions, ProductDimensionsResponseDto);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      throw new HttpException(500, `Error creating product dimension: ${error.message}`);
    }
  }

  // Update a product dimension by ID
  async updateProductDimensionById(productDimensionId: number, updateProductDimensionDto: UpdateProductDimensionsDto): Promise<ProductDimensionsResponseDto> {
    try {
      const updatedProductDimension = await this.productDimensionsRepository.updateProductDimensionById(productDimensionId, updateProductDimensionDto);
      return this.autoMapper.mapper.map(updatedProductDimension, ProductDimensions, ProductDimensionsResponseDto);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      throw new HttpException(500, `Error updating product dimension: ${error.message}`);
    }
  }

  // Delete a product dimension by ID
  async deleteProductDimensionById(productDimensionId: number): Promise<{ message: string }> {
    try {
      await this.productDimensionsRepository.deleteProductDimensionById(productDimensionId);
      return { message: 'Product dimension deleted successfully' };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      throw new HttpException(500, `Error deleting product dimension: ${error.message}`);
    }
  }
}
