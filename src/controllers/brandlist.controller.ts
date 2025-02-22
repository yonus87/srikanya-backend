// src/controllers/brandlist.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { BrandListService } from '@/services/brandlist.service';
import { CreateBrandDto, UpdateBrandDto, BrandListResponseDto } from '@/dtos/brandlist.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/brandlist')
export class BrandListController {
  constructor(private readonly brandListService: BrandListService) {}

  // Get all brands with pagination
  @Get('')
  @OpenAPI({
    summary: 'Get all brands',
    description: 'Returns a list of all brands, optionally filtered by isDisabled status',
  })
  async getAllBrands(
    @QueryParam('page', { required: false }) page: number = 1,
    @QueryParam('pageSize', { required: false }) pageSize: number = 10
  ): Promise<{ brands: BrandListResponseDto[], totalCount: number }> {
    try {
      const { brands, totalCount } = await this.brandListService.findAll(page, pageSize);
      return { brands, totalCount };
    } catch (error) {
      console.error('Error in getAllBrands controller:', error);
      throw new HttpException(500, `Error retrieving brands: ${error.message}`);
    }
  }

  // Get a brand by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get a brand by ID',
    description: 'Returns details of a specific brand by its ID',
  })
  async getBrandById(
    @Param('id') id: number
  ): Promise<BrandListResponseDto> {
    try {
      const brand = await this.brandListService.getBrandById(id);
      return brand;
    } catch (error) {
      console.error(`Error in getBrandById controller for brand ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Brand with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving brand: ${error.message}`);
    }
  }

  // Create a new brand
  @Post('')
  @OpenAPI({
    summary: 'Create a new brand',
    description: 'Creates a new brand and returns the created brand details',
  })
  @UseBefore(validationMiddleware(CreateBrandDto))
  async createBrand(
    @Body() createBrandDto: CreateBrandDto
  ): Promise<BrandListResponseDto> {
    try {
      const newBrand = await this.brandListService.createBrand(createBrandDto);
      return newBrand;
    } catch (error) {
      console.error('Error in createBrand controller:', error);
      throw new HttpException(500, `Error creating brand: ${error.message}`);
    }
  }

  // Update an existing brand by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update a brand by ID',
    description: 'Updates the details of a specific brand by its ID',
  })
  @UseBefore(validationMiddleware(UpdateBrandDto))
  async updateBrandById(
    @Param('id') id: number,
    @Body() updateBrandDto: UpdateBrandDto
  ): Promise<BrandListResponseDto> {
    try {
      const updatedBrand = await this.brandListService.updateBrandById(id, updateBrandDto);
      return updatedBrand;
    } catch (error) {
      console.error(`Error in updateBrandById controller for brand ID ${id}:`, error);
      throw new HttpException(500, `Error updating brand: ${error.message}`);
    }
  }

  // Delete a brand by ID
@Delete('/:id')
@OpenAPI({
  summary: 'Delete a brand by ID',
  description: 'Deletes a specific brand by its ID',
})
async deleteBrandById(
  @Param('id') id: number
): Promise<{ message: string }> {
  try {
    await this.brandListService.deleteBrandById(id);
    return { message: 'Record deleted successfully' };  
  } catch (error) {
    console.error(`Error in deleteBrandById controller for brand ID ${id}:`, error);
    if (error.status === 404) {
      throw new HttpException(404, `Brand with ID ${id} not found or already deleted`);
    }
    throw new HttpException(500, `Error deleting brand: ${error.message}`);
  }
}

}
