import { Service } from 'typedi';
import { InventoryTransactionRepository } from '@/repositories/inventorytransaction.repository';
import { HttpException } from '@/exceptions/HttpException';
import { InventoryTransactionDto, CreateInventoryTransactionDto, UpdateInventoryTransactionDto, InventoryTransactionResponseDto } from '@/dtos/inventorytransaction.dto';
import InventoryTransaction from '@/models/inventorytransaction';
import { AutoMapperManager } from '@/mapper-profiles/mapper';

@Service()
export class InventoryTransactionService {
  constructor(
    private readonly inventoryTransactionRepository: InventoryTransactionRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Retrieve all inventory transactions
  public async getAllInventoryTransactions(): Promise<InventoryTransactionResponseDto[]> {
    try {
      const transactions = await this.inventoryTransactionRepository.getAllInventoryTransactions();

      const transactionDtos = transactions.map(transaction => 
        this.autoMapper.mapper.map(transaction, InventoryTransaction, InventoryTransactionResponseDto)
      );
      return transactionDtos;
    } catch (error) {
      throw new HttpException(500, `Failed to retrieve inventory transactions: ${error.message}`);
    }
  }

  // Get inventory transaction by ID
  public async getInventoryTransactionById(transactionId: number): Promise<InventoryTransactionResponseDto> {
    try {
      const transaction = await this.inventoryTransactionRepository.getInventoryTransactionById(transactionId);

      if (!transaction) {
        throw new HttpException(404, `Inventory transaction with ID ${transactionId} not found`);
      }

      const transactionDto = this.autoMapper.mapper.map(transaction, InventoryTransaction, InventoryTransactionResponseDto);
      return transactionDto;
    } catch (error) {
      throw new HttpException(500, `Failed to retrieve inventory transaction: ${error.message}`);
    }
  }

  // Create a new inventory transaction
  public async createInventoryTransaction(createInventoryTransactionDto: CreateInventoryTransactionDto): Promise<InventoryTransactionResponseDto> {
    try {
      const newTransaction = await this.inventoryTransactionRepository.createInventoryTransaction(createInventoryTransactionDto);

      const transactionDto = this.autoMapper.mapper.map(newTransaction, InventoryTransaction, InventoryTransactionResponseDto);
      return transactionDto;
    } catch (error) {
      throw new HttpException(500, `Failed to create inventory transaction: ${error.message}`);
    }
  }

  // Update an inventory transaction by ID
  public async updateInventoryTransactionById(transactionId: number, updateInventoryTransactionDto: UpdateInventoryTransactionDto): Promise<InventoryTransactionResponseDto> {
    try {
      const updatedTransaction = await this.inventoryTransactionRepository.updateInventoryTransactionById(transactionId, updateInventoryTransactionDto);

      const transactionDto = this.autoMapper.mapper.map(updatedTransaction, InventoryTransaction, InventoryTransactionResponseDto);
      return transactionDto;
    } catch (error) {
      throw new HttpException(500, `Failed to update inventory transaction: ${error.message}`);
    }
  }

  // Delete an inventory transaction by ID
  public async deleteInventoryTransactionById(transactionId: number): Promise<{ message: string }> {
    try {
      const result = await this.inventoryTransactionRepository.deleteInventoryTransactionById(transactionId);
      return result;
    } catch (error) {
      throw new HttpException(500, `Failed to delete inventory transaction: ${error.message}`);
    }
  }
}
