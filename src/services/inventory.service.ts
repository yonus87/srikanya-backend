//src/services/inventory.service.ts

import { Service } from 'typedi';
import { InventoryRepository } from '@/repositories/inventory.repository';
import { HttpException } from '@/exceptions/HttpException';
import { InventoryDto, CreateInventoryDto, UpdateInventoryDto, InventoryResponseDto } from '@/dtos/inventory.dto';
import Inventory from '@/models/inventory';
import { AutoMapperManager } from '@/mapper-profiles/mapper';

@Service()
export class InventoryService {
  constructor(
    private inventoryRepository: InventoryRepository,
    private mapperManager: AutoMapperManager
  ) {}

  // Create a new inventory item
  async create(createInventoryDto: CreateInventoryDto): Promise<InventoryDto> {
    try {
      const inventoryData = this.mapperManager.mapper.map(createInventoryDto, CreateInventoryDto, Inventory);
      const newInventory = await this.inventoryRepository.createInventory(inventoryData);
      return this.mapperManager.mapper.map(newInventory, Inventory, InventoryDto);
    } catch (error) {
      console.error('Error in InventoryService during create:', error);
      throw new HttpException(500, 'Failed to create inventory item');
    }
  }

  // Get all inventories
  async getAll(): Promise<InventoryDto[]> {
    try {
      const inventories = await this.inventoryRepository.getAllInventories();
      return this.mapperManager.mapper.mapArray(inventories, Inventory, InventoryDto);
    } catch (error) {
      console.error('Error in InventoryService while fetching all inventories:', error);
      throw new HttpException(500, 'Failed to fetch inventories');
    }
  }

  // Get inventory by ID
  async getById(inventoryId: number): Promise<InventoryDto> {
    try {
      const inventory = await this.inventoryRepository.getInventoryById(inventoryId);
      return this.mapperManager.mapper.map(inventory, Inventory, InventoryDto);
    } catch (error) {
      console.error('Error in InventoryService while fetching inventory by ID:', error);
      throw new HttpException(500, 'Failed to fetch inventory');
    }
  }

  // Update inventory by ID
  async update(inventoryId: number, updateInventoryDto: UpdateInventoryDto): Promise<InventoryDto> {
    try {
      const inventoryData = this.mapperManager.mapper.map(updateInventoryDto, UpdateInventoryDto, Inventory);
      const updatedInventory = await this.inventoryRepository.updateInventoryById(inventoryId, inventoryData);
      return this.mapperManager.mapper.map(updatedInventory, Inventory, InventoryDto);
    } catch (error) {
      console.error('Error in InventoryService while updating inventory:', error);
      throw new HttpException(500, 'Failed to update inventory');
    }
  }

  // Delete inventory by ID
  async delete(inventoryId: number): Promise<{ message: string }> {
    try {
      return await this.inventoryRepository.deleteInventoryById(inventoryId);
    } catch (error) {
      console.error('Error in InventoryService while deleting inventory:', error);
      throw new HttpException(500, 'Failed to delete inventory');
    }
  }
}


