//src/controllers/inventory.controller.ts


import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { InventoryService } from '@/services/inventory.service';
import { CreateInventoryDto, UpdateInventoryDto, InventoryResponseDto } from '@/dtos/inventory.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  // Get all inventories
  @Get('')
  @OpenAPI({
    summary: 'Get all inventories',
    description: 'Returns a list of all inventories',
  })
  async getAllInventories(): Promise<InventoryResponseDto[]> {
    try {
      const inventories = await this.inventoryService.getAll();
      return inventories;
    } catch (error) {
      console.error('Error in getAllInventories controller:', error);
      throw new HttpException(500, `Error retrieving inventories: ${error.message}`);
    }
  }

  // Get inventory by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get an inventory item by ID',
    description: 'Returns details of a specific inventory item by its ID',
  })
  async getInventoryById(@Param('id') id: number): Promise<InventoryResponseDto> {
    try {
      const inventory = await this.inventoryService.getById(id);
      return inventory;
    } catch (error) {
      console.error(`Error in getInventoryById controller for inventory ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Inventory with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving inventory: ${error.message}`);
    }
  }

  // Create a new inventory item
  @Post('')
  @OpenAPI({
    summary: 'Create a new inventory item',
    description: 'Creates a new inventory item and returns the created details',
  })
  @UseBefore(validationMiddleware(CreateInventoryDto))
  async createInventory(
    @Body() createInventoryDto: CreateInventoryDto
  ): Promise<InventoryResponseDto> {
    try {
      const newInventory = await this.inventoryService.create(createInventoryDto);
      return newInventory;
    } catch (error) {
      console.error('Error in createInventory controller:', error);
      throw new HttpException(500, `Error creating inventory: ${error.message}`);
    }
  }

  // Update an inventory item by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update an inventory item by ID',
    description: 'Updates the details of a specific inventory item by its ID',
  })
  @UseBefore(validationMiddleware(UpdateInventoryDto))
  async updateInventoryById(
    @Param('id') id: number,
    @Body() updateInventoryDto: UpdateInventoryDto
  ): Promise<InventoryResponseDto> {
    try {
      const updatedInventory = await this.inventoryService.update(id, updateInventoryDto);
      return updatedInventory;
    } catch (error) {
      console.error(`Error in updateInventoryById controller for inventory ID ${id}:`, error);
      throw new HttpException(500, `Error updating inventory: ${error.message}`);
    }
  }

  // Delete an inventory item by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete an inventory item by ID',
    description: 'Deletes a specific inventory item by its ID',
  })
  async deleteInventoryById(@Param('id') id: number): Promise<{ message: string }> {
    try {
      await this.inventoryService.delete(id);
      return { message: 'Inventory item deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteInventoryById controller for inventory ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Inventory item with ID ${id} not found`);
      }
      throw new HttpException(500, `Error deleting inventory item: ${error.message}`);
    }
  }
}

