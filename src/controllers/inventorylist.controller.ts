//src/controllers/inventorylist.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { InventoryListService } from '@/services/inventorylist.service';
import { CreateInventoryListDto, UpdateInventoryListDto, InventoryListResponseDto } from '@/dtos/inventorylist.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/inventorylist')
export class InventoryListController {
  constructor(private readonly inventoryListService: InventoryListService) {}

  // Get all inventory items with optional location filter
  @Get('')
  @OpenAPI({
    summary: 'Get all inventory items',
    description: 'Returns a list of all inventory items, optionally filtered by location ID',
  })
  async getAllInventoryItems(
    @QueryParam('locationId', { required: false }) locationId?: number
  ): Promise<{ inventoryItems: InventoryListResponseDto[] }> {
    try {
      const { inventoryItems } = await this.inventoryListService.findAll(locationId);
      return { inventoryItems };
    } catch (error) {
      console.error('Error in getAllInventoryItems controller:', error);
      throw new HttpException(500, `Error retrieving inventory items: ${error.message}`);
    }
  }

  // Get an inventory item by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get an inventory item by ID',
    description: 'Returns details of a specific inventory item by its ID',
  })
  async getInventoryItemById(
    @Param('id') id: number
  ): Promise<InventoryListResponseDto> {
    try {
      const inventoryItem = await this.inventoryListService.getInventoryItemById(id);
      return inventoryItem;
    } catch (error) {
      console.error(`Error in getInventoryItemById controller for inventory ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Inventory item with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving inventory item: ${error.message}`);
    }
  }

  // Create a new inventory item
  @Post('')
  @OpenAPI({
    summary: 'Create a new inventory item',
    description: 'Creates a new inventory item and returns the created item details',
  })
  @UseBefore(validationMiddleware(CreateInventoryListDto))
  async createInventoryItem(
    @Body() createInventoryDto: CreateInventoryListDto
  ): Promise<InventoryListResponseDto> {
    try {
      const newInventoryItem = await this.inventoryListService.createInventoryItem(createInventoryDto);
      return newInventoryItem;
    } catch (error) {
      console.error('Error in createInventoryItem controller:', error);
      throw new HttpException(500, `Error creating inventory item: ${error.message}`);
    }
  }

  // Update an existing inventory item by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update an inventory item by ID',
    description: 'Updates the details of a specific inventory item by its ID',
  })
  @UseBefore(validationMiddleware(UpdateInventoryListDto))
  async updateInventoryItemById(
    @Param('id') id: number,
    @Body() updateInventoryDto: UpdateInventoryListDto
  ): Promise<InventoryListResponseDto> {
    try {
      const updatedInventoryItem = await this.inventoryListService.updateInventoryItemById(id, updateInventoryDto);
      return updatedInventoryItem;
    } catch (error) {
      console.error(`Error in updateInventoryItemById controller for inventory ID ${id}:`, error);
      throw new HttpException(500, `Error updating inventory item: ${error.message}`);
    }
  }

  // Delete an inventory item by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete an inventory item by ID',
    description: 'Deletes a specific inventory item by its ID',
  })
  async deleteInventoryItemById(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      await this.inventoryListService.deleteInventoryItemById(id);
      return { message: 'Inventory item deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteInventoryItemById controller for inventory ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Inventory item with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting inventory item: ${error.message}`);
    }
  }
}
