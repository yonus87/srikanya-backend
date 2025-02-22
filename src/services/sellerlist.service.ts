// src/services/sellerlist.service.ts

import { Service } from 'typedi';
import { SellerListRepository } from '@/repositories/sellerlist.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { SellerListDto, SellerListResponseDto, CreateSellerDto, UpdateSellerListDto } from '@/dtos/sellerlist.dto';
import SellerList from '@/models/sellerlist';

@Service()
export class SellerListService {
  constructor(
    private sellerListRepository: SellerListRepository,
    private mapperManager: AutoMapperManager
  ) {}

  // Create a new seller
  async create(createSellerDto: CreateSellerDto): Promise<SellerListDto> {
    try {
      const newSeller = await this.sellerListRepository.createSeller(createSellerDto);
      return this.mapperManager.mapper.map(newSeller, SellerList, SellerListDto);
    } catch (error) {
      console.error('Error in SellerListService during create:', error);
      throw new HttpException(400, `Failed to create seller: ${error.message}`);
    }
  }

  // Get all sellers
  async getAllSellers(): Promise<SellerListDto[]> {
    try {
      const sellers = await this.sellerListRepository.getAllSellers();
      return this.mapperManager.mapper.mapArray(sellers, SellerList, SellerListDto);
    } catch (error) {
      console.error('Error in SellerListService while fetching all sellers:', error);
      throw new HttpException(500, `Failed to fetch sellers: ${error.message}`);
    }
  }

  // Get seller by ID
  async getSellerById(sellerId: number): Promise<SellerListDto> {
    try {
      const seller = await this.sellerListRepository.getSellerById(sellerId);
      return this.mapperManager.mapper.map(seller, SellerList, SellerListDto);
    } catch (error) {
      console.error(`Error in SellerListService while fetching seller by ID ${sellerId}:`, error);
      throw new HttpException(500, `Failed to fetch seller: ${error.message}`);
    }
  }

  // Update a seller by ID
  async updateSellerById(sellerId: number, updateSellerDto: UpdateSellerListDto): Promise<SellerListDto> {
    try {
      const updatedSeller = await this.sellerListRepository.updateSellerById(sellerId, updateSellerDto);
      return this.mapperManager.mapper.map(updatedSeller, SellerList, SellerListDto);
    } catch (error) {
      console.error(`Error in SellerListService while updating seller by ID ${sellerId}:`, error);
      throw new HttpException(400, `Failed to update seller: ${error.message}`);
    }
  }

  // Delete a seller by ID
  async deleteSellerById(sellerId: number): Promise<{ message: string }> {
    try {
      const result = await this.sellerListRepository.deleteSellerById(sellerId);
      return { message: `Seller with ID ${sellerId} was successfully deleted.` };
    } catch (error) {
      console.error(`Error in SellerListService while deleting seller by ID ${sellerId}:`, error);
      throw new HttpException(500, `Failed to delete seller: ${error.message}`);
    }
  }

  // Disable a seller by ID
  async disableSellerById(sellerId: number): Promise<SellerListDto> {
    try {
      const disabledSeller = await this.sellerListRepository.disableSellerById(sellerId);
      return this.mapperManager.mapper.map(disabledSeller, SellerList, SellerListDto);
    } catch (error) {
      console.error(`Error in SellerListService while disabling seller by ID ${sellerId}:`, error);
      throw new HttpException(400, `Failed to disable seller: ${error.message}`);
    }
  }

  // Enable a seller by ID
  async enableSellerById(sellerId: number): Promise<SellerListDto> {
    try {
      const enabledSeller = await this.sellerListRepository.enableSellerById(sellerId);
      return this.mapperManager.mapper.map(enabledSeller, SellerList, SellerListDto);
    } catch (error) {
      console.error(`Error in SellerListService while enabling seller by ID ${sellerId}:`, error);
      throw new HttpException(400, `Failed to enable seller: ${error.message}`);
    }
  }
}
