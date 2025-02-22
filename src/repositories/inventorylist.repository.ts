
import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import InventoryList from '@/models/inventorylist';
import BrandList from '@/models/brandlist';
import CategoryType from '@/models/categorytypes';
import Location from '@/models/location';

@Service()
export class InventoryListRepository {
  // Retrieve all inventory items filtered by location (if provided)
  public async getAllInventoryItems(locationId?: number): Promise<InventoryList[]> {
    try {
      const queryOptions: any = {
        include: [
          { model: BrandList, as: 'BrandList' },  
          { model: CategoryType, as: 'CategoryType' },  
          { model: Location, as: 'Location' },  
        ],
      };

      if (locationId) {
        queryOptions.where = { locationId };
      }

      const inventoryItems = await InventoryList.findAll(queryOptions);
      return inventoryItems;
    } catch (error) {
      throw new HttpException(500, `Error retrieving inventory items: ${error.message}`);
    }
  }

  // Get an inventory item by ID
  public async getInventoryItemById(inventoryId: number): Promise<InventoryList> {
    try {
      const inventoryItem = await InventoryList.findByPk(inventoryId, {
        include: ['BrandList', 'CategoryType', 'Location'],  
      });

      if (!inventoryItem) {
        throw new HttpException(404, 'Inventory item not found');
      }
      return inventoryItem;
    } catch (error) {
      throw new HttpException(500, `Error retrieving inventory item: ${error.message}`);
    }
  }

  // Create a new inventory item
  public async createInventoryItem(createInventoryDto: any): Promise<InventoryList> {
    try {
      const newInventoryItem = await InventoryList.create(createInventoryDto);
      return newInventoryItem;
    } catch (error) {
      throw new HttpException(500, `Error creating inventory item: ${error.message}`);
    }
  }

  // Update an inventory item by ID
  public async updateInventoryItemById(inventoryId: number, updateInventoryDto: any): Promise<InventoryList> {
    try {
      const inventoryItem = await this.getInventoryItemById(inventoryId);
      const updatedInventoryItem = await inventoryItem.update(updateInventoryDto);
      return updatedInventoryItem;
    } catch (error) {
      throw new HttpException(500, `Error updating inventory item: ${error.message}`);
    }
  }

  // Delete an inventory item by ID
  public async deleteInventoryItemById(inventoryId: number): Promise<{ message: string }> {
    try {
      const inventoryItem = await this.getInventoryItemById(inventoryId);
      await inventoryItem.destroy();
      return { message: 'Inventory item deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting inventory item: ${error.message}`);
    }
  }
}
