// src/repositories/inventory.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import Inventory from '@/models/inventory';

@Service()
export class InventoryRepository {
  // Retrieve all inventories
  public async getAllInventories(): Promise<Inventory[]> {
    try {
      const inventories = await Inventory.findAll();
      return inventories;
    } catch (error) {
      throw new HttpException(500, `Error retrieving inventories: ${error.message}`);
    }
  }

  // Get inventory by ID
  public async getInventoryById(inventoryId: number): Promise<Inventory> {
    try {
      const inventory = await Inventory.findByPk(inventoryId);
      if (!inventory) {
        throw new HttpException(404, 'Inventory not found');
      }
      return inventory;
    } catch (error) {
      throw new HttpException(500, `Error retrieving inventory: ${error.message}`);
    }
  }

  // Create a new inventory item
  public async createInventory(createInventoryDto: any): Promise<Inventory> {
    try {
      const newInventory = await Inventory.create(createInventoryDto);
      return newInventory;
    } catch (error) {
      throw new HttpException(500, `Error creating inventory: ${error.message}`);
    }
  }

  // Update an inventory item by ID
  public async updateInventoryById(inventoryId: number, updateInventoryDto: any): Promise<Inventory> {
    try {
      const inventory = await this.getInventoryById(inventoryId);
      const updatedInventory = await inventory.update(updateInventoryDto);
      return updatedInventory;
    } catch (error) {
      throw new HttpException(500, `Error updating inventory: ${error.message}`);
    }
  }

  // Delete an inventory item by ID
  public async deleteInventoryById(inventoryId: number): Promise<{ message: string }> {
    try {
      const inventory = await this.getInventoryById(inventoryId);
      if (!inventory) {
        throw new HttpException(404, 'Inventory not found');
      }
      await inventory.destroy(); 
      return { message: 'Inventory item deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting inventory: ${error.message}`);
    }
  }

}
