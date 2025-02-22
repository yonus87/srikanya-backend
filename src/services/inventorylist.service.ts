import { Service } from 'typedi';
import { InventoryListRepository } from '@/repositories/inventorylist.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { InventoryListDto, CreateInventoryListDto, UpdateInventoryListDto, InventoryListResponseDto, InventoryListListResponseDto } from '@/dtos/inventorylist.dto';
import InventoryList from '@/models/inventorylist';

@Service()
export class InventoryListService {
  constructor(
    private readonly inventoryListRepository: InventoryListRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Helper function for mapping inventory items
  private mapInventoryItem(inventoryItem: InventoryList): InventoryListResponseDto {
    return this.autoMapper.mapper.map(inventoryItem, InventoryList, InventoryListResponseDto);
  }

  // Get all inventory items with optional location filter
  async findAll(locationId?: number): Promise<{ inventoryItems: InventoryListResponseDto[] }> {
    try {
      const inventoryItems = await this.inventoryListRepository.getAllInventoryItems(locationId);
      const inventoryDtos = inventoryItems.map(item => this.mapInventoryItem(item));  
      return { inventoryItems: inventoryDtos };
    } catch (error) {
      throw new HttpException(500, `Error retrieving inventory items: ${error.message}`);
    }
  }

  // Get an inventory item by ID
  async getInventoryItemById(inventoryId: number): Promise<InventoryListResponseDto> {
    try {
      const inventoryItem = await this.inventoryListRepository.getInventoryItemById(inventoryId);
      return this.mapInventoryItem(inventoryItem);  
    } catch (error) {
      throw new HttpException(500, `Error retrieving inventory item: ${error.message}`);
    }
  }

  // Create a new inventory item
  async createInventoryItem(createInventoryDto: CreateInventoryListDto): Promise<InventoryListResponseDto> {
    try {
      const newInventoryItem = await this.inventoryListRepository.createInventoryItem(createInventoryDto);
      return this.mapInventoryItem(newInventoryItem);  
    } catch (error) {
      throw new HttpException(500, `Error creating inventory item: ${error.message}`);
    }
  }

  // Update an inventory item by ID
  async updateInventoryItemById(inventoryId: number, updateInventoryDto: UpdateInventoryListDto): Promise<InventoryListResponseDto> {
    try {
      const updatedInventoryItem = await this.inventoryListRepository.updateInventoryItemById(inventoryId, updateInventoryDto);
      return this.mapInventoryItem(updatedInventoryItem);  
    } catch (error) {
      throw new HttpException(500, `Error updating inventory item: ${error.message}`);
    }
  }

  // Delete an inventory item by ID
  async deleteInventoryItemById(inventoryId: number): Promise<{ message: string }> {
    try {
      await this.inventoryListRepository.deleteInventoryItemById(inventoryId);
      return { message: 'Inventory item deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting inventory item: ${error.message}`);
    }
  }
}
