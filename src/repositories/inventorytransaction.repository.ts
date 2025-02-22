import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import InventoryTransaction from '@/models/inventorytransaction';  
import Seller from '@/models/sellerlist';  
import Inventory from '@/models/inventorylist';  

@Service()
export class InventoryTransactionRepository {
  // Retrieve all inventory transactions
  public async getAllInventoryTransactions(): Promise<InventoryTransaction[]> {
    try {
      const transactions = await InventoryTransaction.findAll({
        include: [
          { model: Seller, as: 'seller' },
          { model: Inventory, as: 'inventory' },
        ],
      });
      return transactions;
    } catch (error) {
      throw new HttpException(500, `Error retrieving inventory transactions: ${error.message}`);
    }
  }

  // Get inventory transaction by ID
  public async getInventoryTransactionById(transactionId: number): Promise<InventoryTransaction> {
    try {
      const transaction = await InventoryTransaction.findByPk(transactionId, {
        include: [
          { model: Seller, as: 'seller' },
          { model: Inventory, as: 'inventory' },
        ],
      });
      if (!transaction) {
        throw new HttpException(404, 'Inventory transaction not found');
      }
      return transaction;
    } catch (error) {
      throw new HttpException(500, `Error retrieving inventory transaction: ${error.message}`);
    }
  }

  // Create a new inventory transaction
  public async createInventoryTransaction(createInventoryTransactionDto: any): Promise<InventoryTransaction> {
    try {
      const newTransaction = await InventoryTransaction.create(createInventoryTransactionDto);
      return newTransaction;
    } catch (error) {
      throw new HttpException(500, `Error creating inventory transaction: ${error.message}`);
    }
  }

  // Update an inventory transaction by ID
  public async updateInventoryTransactionById(transactionId: number, updateInventoryTransactionDto: any): Promise<InventoryTransaction> {
    try {
      const transaction = await this.getInventoryTransactionById(transactionId);
      const updatedTransaction = await transaction.update(updateInventoryTransactionDto);
      return updatedTransaction;
    } catch (error) {
      throw new HttpException(500, `Error updating inventory transaction: ${error.message}`);
    }
  }

  // Delete an inventory transaction by ID (soft delete)
  public async deleteInventoryTransactionById(transactionId: number): Promise<{ message: string }> {
    try {
      const transaction = await this.getInventoryTransactionById(transactionId);
      if (!transaction) {
        throw new HttpException(404, 'Inventory transaction not found');
      }

      // Soft delete logic (assuming the model includes an isDeleted field)
      await transaction.update({ isDeleted: true });  // You might want to add `isDeleted` in the model if not present

      return { message: 'Inventory transaction deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting inventory transaction: ${error.message}`);
    }
  }
}
