//src/controllers/productdimensions.controller.ts


import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { ProductDimensionsService } from '@/services/productdimensions.service';
import { CreateProductDimensionsDto, UpdateProductDimensionsDto, ProductDimensionsResponseDto } from '@/dtos/productdimensions.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/productdimensions')
export class ProductDimensionsController {
  constructor(private readonly productDimensionsService: ProductDimensionsService) {}

  // Get all product dimensions with optional product filter
  @Get('')
  @OpenAPI({
    summary: 'Get all product dimensions',
    description: 'Returns a list of all product dimensions, optionally filtered by product ID',
  })
  async getAllProductDimensions(
    @QueryParam('productId', { required: false }) productId?: number
  ): Promise<{ productDimensions: ProductDimensionsResponseDto[] }> {
    try {
      const { productDimensions } = await this.productDimensionsService.findAll(productId);
      return { productDimensions };
    } catch (error) {
      console.error('Error in getAllProductDimensions controller:', error);
      throw new HttpException(500, `Error retrieving product dimensions: ${error.message}`);
    }
  }

  // Get a product dimension by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get a product dimension by ID',
    description: 'Returns details of a specific product dimension by its ID',
  })
  async getProductDimensionById(
    @Param('id') id: number
  ): Promise<ProductDimensionsResponseDto> {
    try {
      const productDimension = await this.productDimensionsService.getProductDimensionById(id);
      return productDimension;
    } catch (error) {
      console.error(`Error in getProductDimensionById controller for product dimension ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Product dimension with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving product dimension: ${error.message}`);
    }
  }

  // Create a new product dimension
  @Post('')
  @OpenAPI({
    summary: 'Create a new product dimension',
    description: 'Creates a new product dimension and returns the created dimension details',
  })
  @UseBefore(validationMiddleware(CreateProductDimensionsDto))
  async createProductDimension(
    @Body() createProductDimensionDto: CreateProductDimensionsDto
  ): Promise<ProductDimensionsResponseDto> {
    try {
      const newProductDimension = await this.productDimensionsService.createProductDimension(createProductDimensionDto);
      return newProductDimension;
    } catch (error) {
      console.error('Error in createProductDimension controller:', error);
      throw new HttpException(500, `Error creating product dimension: ${error.message}`);
    }
  }

  // Update an existing product dimension by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update a product dimension by ID',
    description: 'Updates the details of a specific product dimension by its ID',
  })
  @UseBefore(validationMiddleware(UpdateProductDimensionsDto))
  async updateProductDimensionById(
    @Param('id') id: number,
    @Body() updateProductDimensionDto: UpdateProductDimensionsDto
  ): Promise<ProductDimensionsResponseDto> {
    try {
      const updatedProductDimension = await this.productDimensionsService.updateProductDimensionById(id, updateProductDimensionDto);
      return updatedProductDimension;
    } catch (error) {
      console.error(`Error in updateProductDimensionById controller for product dimension ID ${id}:`, error);
      throw new HttpException(500, `Error updating product dimension: ${error.message}`);
    }
  }

  // Delete a product dimension by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete a product dimension by ID',
    description: 'Deletes a specific product dimension by its ID',
  })
  async deleteProductDimensionById(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      await this.productDimensionsService.deleteProductDimensionById(id);
      return { message: 'Product dimension deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteProductDimensionById controller for product dimension ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Product dimension with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting product dimension: ${error.message}`);
    }
  }
}
