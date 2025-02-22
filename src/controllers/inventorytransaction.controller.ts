import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { InventoryTransactionService } from '@/services/inventorytransaction.service';
import { CreateInventoryTransactionDto, UpdateInventoryTransactionDto, InventoryTransactionResponseDto } from '@/dtos/inventorytransaction.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/inventorytransactions')
export class InventoryTransactionController {
  constructor(private readonly inventoryTransactionService: InventoryTransactionService) {}

  // Get all inventory transactions
  @Get('/')
  @OpenAPI({ summary: 'Get all inventory transactions' })
  public async getAllInventoryTransactions(): Promise<InventoryTransactionResponseDto[]> {
    try {
      return await this.inventoryTransactionService.getAllInventoryTransactions();
    } catch (error) {
      throw new HttpException(500, `Error retrieving inventory transactions: ${error.message}`);
    }
  }

  // Get an inventory transaction by ID
  @Get('/:id')
  @OpenAPI({ summary: 'Get inventory transaction by ID' })
  public async getInventoryTransactionById(@Param('id') id: number): Promise<InventoryTransactionResponseDto> {
    try {
      return await this.inventoryTransactionService.getInventoryTransactionById(id);
    } catch (error) {
      throw new HttpException(500, `Error retrieving inventory transaction with ID ${id}: ${error.message}`);
    }
  }

  // Create a new inventory transaction
  @Post('/')
  @OpenAPI({ summary: 'Create a new inventory transaction' })
  @UseBefore(validationMiddleware(CreateInventoryTransactionDto))
  public async createInventoryTransaction(@Body() createInventoryTransactionDto: CreateInventoryTransactionDto): Promise<InventoryTransactionResponseDto> {
    try {
      return await this.inventoryTransactionService.createInventoryTransaction(createInventoryTransactionDto);
    } catch (error) {
      throw new HttpException(500, `Error creating inventory transaction: ${error.message}`);
    }
  }

  // Update an inventory transaction by ID
  @Put('/:id')
  @OpenAPI({ summary: 'Update inventory transaction by ID' })
  @UseBefore(validationMiddleware(UpdateInventoryTransactionDto))
  public async updateInventoryTransactionById(
    @Param('id') id: number,
    @Body() updateInventoryTransactionDto: UpdateInventoryTransactionDto
  ): Promise<InventoryTransactionResponseDto> {
    try {
      return await this.inventoryTransactionService.updateInventoryTransactionById(id, updateInventoryTransactionDto);
    } catch (error) {
      throw new HttpException(500, `Error updating inventory transaction with ID ${id}: ${error.message}`);
    }
  }

  // Delete an inventory transaction by ID
  @Delete('/:id')
  @OpenAPI({ summary: 'Delete inventory transaction by ID' })
  public async deleteInventoryTransactionById(@Param('id') id: number): Promise<{ message: string }> {
    try {
      return await this.inventoryTransactionService.deleteInventoryTransactionById(id);
    } catch (error) {
      throw new HttpException(500, `Error deleting inventory transaction with ID ${id}: ${error.message}`);
    }
  }
}
