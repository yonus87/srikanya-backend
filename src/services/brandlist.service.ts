// src/services/brandlist.service.ts

import { Service } from 'typedi';
import { BrandRepository } from '@/repositories/brandlist.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { BrandListDto, UpdateBrandDto, CreateBrandDto, BrandListResponseDto } from '@/dtos/brandlist.dto';
import brandlist from '@/models/brandlist';

@Service()
export class BrandListService {
  constructor(
    private readonly brandRepository: BrandRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Get all brands with pagination
  async findAll(page: number = 1, pageSize: number = 10): Promise<{ brands: BrandListResponseDto[], totalCount: number }> {
    try {
      const { brands, totalCount } = await this.brandRepository.getAllBrands(page, pageSize);
      const brandDtos = brands.map(brand => this.autoMapper.mapper.map(brand, brandlist, BrandListResponseDto));
      return { brands: brandDtos, totalCount };
    } catch (error) {
      throw new HttpException(500, `Error retrieving brands: ${error.message}`);
    }
  }

  // Get a brand by ID
  async getBrandById(brandId: number): Promise<BrandListResponseDto> {
    try {
      const brand = await this.brandRepository.getBrandById(brandId);
      return this.autoMapper.mapper.map(brand, brandlist, BrandListResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error retrieving brand: ${error.message}`);
    }
  }

  // Create a new brand
  async createBrand(createBrandDto: CreateBrandDto): Promise<BrandListResponseDto> {
    try {
      const newBrand = await this.brandRepository.createBrand(createBrandDto);
      return this.autoMapper.mapper.map(newBrand, brandlist, BrandListResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error creating brand: ${error.message}`);
    }
  }

  // Update a brand by ID
  async updateBrandById(brandId: number, updateBrandDto: UpdateBrandDto): Promise<BrandListResponseDto> {
    try {
      const updatedBrand = await this.brandRepository.updateBrandById(brandId, updateBrandDto);
      return this.autoMapper.mapper.map(updatedBrand, brandlist, BrandListResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error updating brand: ${error.message}`);
    }
  }

  // Delete a brand by ID
  async deleteBrandById(brandId: number): Promise<{ message: string }> {
    try {
      await this.brandRepository.deleteBrandById(brandId);
      return { message: 'Record deleted successfully' };  
    } catch (error) {
      if (error instanceof HttpException && error.status === 404) {
        throw new HttpException(404, `Brand with ID ${brandId} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting brand: ${error.message}`);
    }
  }
  
}
