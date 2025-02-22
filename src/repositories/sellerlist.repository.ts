//src/repositories/sellerlist.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import SellerList from '@/models/sellerlist';

@Service()
export class SellerListRepository {
  
  // Retrieve all sellers
  public async getAllSellers(): Promise<SellerList[]> {
    try {
      const sellers = await SellerList.findAll();
      return sellers;
    } catch (error) {
      throw new HttpException(500, `Error retrieving sellers: ${error.message}`);
    }
  }

  // Get seller by ID
  public async getSellerById(sellerId: number): Promise<SellerList> {
    try {
      const seller = await SellerList.findByPk(sellerId);
      if (!seller) {
        throw new HttpException(404, 'Seller not found');
      }
      return seller;
    } catch (error) {
      throw new HttpException(500, `Error retrieving seller: ${error.message}`);
    }
  }

  // Create a new seller
  public async createSeller(createSellerDto: any): Promise<SellerList> {
    try {
      const newSeller = await SellerList.create(createSellerDto);
      return newSeller;
    } catch (error) {
      throw new HttpException(500, `Error creating seller: ${error.message}`);
    }
  }

  // Update a seller by ID
  public async updateSellerById(sellerId: number, updateSellerDto: any): Promise<SellerList> {
    try {
      const seller = await this.getSellerById(sellerId);
      const updatedSeller = await seller.update(updateSellerDto);
      return updatedSeller;
    } catch (error) {
      throw new HttpException(500, `Error updating seller: ${error.message}`);
    }
  }

  // Delete a seller by ID
  public async deleteSellerById(sellerId: number): Promise<{ message: string }> {
    try {
      const seller = await this.getSellerById(sellerId);
      if (!seller) {
        throw new HttpException(404, 'Seller not found');
      }
      await seller.destroy();
      return { message: 'Seller deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting seller: ${error.message}`);
    }
  }

  // Disable a seller by ID (set isDisabled to true)
  public async disableSellerById(sellerId: number): Promise<SellerList> {
    try {
      const seller = await this.getSellerById(sellerId);
      if (!seller) {
        throw new HttpException(404, 'Seller not found');
      }
      seller.isDisabled = true;
      await seller.save();
      return seller;
    } catch (error) {
      throw new HttpException(500, `Error disabling seller: ${error.message}`);
    }
  }

  // Enable a seller by ID (set isDisabled to false)
  public async enableSellerById(sellerId: number): Promise<SellerList> {
    try {
      const seller = await this.getSellerById(sellerId);
      if (!seller) {
        throw new HttpException(404, 'Seller not found');
      }
      seller.isDisabled = false;
      await seller.save();
      return seller;
    } catch (error) {
      throw new HttpException(500, `Error enabling seller: ${error.message}`);
    }
  }
}
