// src/repositories/brandlist.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import brandlist from '@/models/brandlist';

@Service()
export class BrandRepository {
  // Retrieve all brands with pagination
  public async getAllBrands(page: number = 1, pageSize: number = 10): Promise<{ brands: brandlist[], totalCount: number }> {
    try {
      const brands = await brandlist.findAll({
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
      const totalCount = await brandlist.count();
      return { brands, totalCount };
    } catch (error) {
      throw new HttpException(500, `Error retrieving brands: ${error.message}`);
    }
  }

  // Get a brand by ID
  public async getBrandById(brandId: number): Promise<brandlist> {
    try {
      const brand = await brandlist.findByPk(brandId);
      if (!brand) {
        throw new HttpException(404, 'Brand not found');
      }
      return brand;
    } catch (error) {
      throw new HttpException(500, `Error retrieving brand: ${error.message}`);
    }
  }

  // Create a new brand
  public async createBrand(createBrandDto: any): Promise<brandlist> {
    try {
      const newBrand = await brandlist.create(createBrandDto);
      return newBrand;
    } catch (error) {
      throw new HttpException(500, `Error creating brand: ${error.message}`);
    }
  }

  // Update a brand by ID
  public async updateBrandById(brandId: number, updateBrandDto: any): Promise<brandlist> {
    try {
      const brand = await this.getBrandById(brandId); 
      const updatedBrand = await brand.update(updateBrandDto);
      return updatedBrand;
    } catch (error) {
      throw new HttpException(500, `Error updating brand: ${error.message}`);
    }
  }

  // Delete a brand by ID
public async deleteBrandById(brandId: number): Promise<{ message: string }> {
    try {
      const brand = await this.getBrandById(brandId); 
      if (!brand) {
        throw new HttpException(404, 'Brand not found');
      }
      await brand.destroy(); 
      return { message: 'Record deleted successfully' };  
    } catch (error) {
      throw new HttpException(500, `Error deleting brand: ${error.message}`);
    }
  }
  
}
