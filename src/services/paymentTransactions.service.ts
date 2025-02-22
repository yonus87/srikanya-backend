import { Service } from 'typedi';
import { PaymentTransactionsRepository } from '@/repositories/paymentTransactions.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { PaymentTransactionDto, CreatePaymentTransactionDto, UpdatePaymentTransactionDto, PaymentTransactionListResponseDto, PaymentTransactionResponseDto } from '@/dtos/paymenttransactions.dto';
import PaymentTransactions from '@/models/paymentTransactions';

@Service()
export class PaymentTransactionsService {
  constructor(
    private readonly paymentTransactionsRepository: PaymentTransactionsRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Helper function for mapping payment transactions
  private mapPaymentTransaction(paymentTransaction: PaymentTransactions): PaymentTransactionResponseDto {
    return this.autoMapper.mapper.map(paymentTransaction, PaymentTransactions, PaymentTransactionResponseDto);
  }

  // Get all payment transactions, optionally filtered by orderId
  async findAll(orderId?: number): Promise<{ paymentTransactions: PaymentTransactionResponseDto[] }> {
    try {
      const paymentTransactions = await this.paymentTransactionsRepository.getAllPaymentTransactions(orderId);
      const paymentDtos = paymentTransactions.map(transaction => this.mapPaymentTransaction(transaction));  
      return { paymentTransactions: paymentDtos };
    } catch (error) {
      throw new HttpException(500, `Error retrieving payment transactions: ${error.message}`);
    }
  }

  // Get a payment transaction by ID
  async getPaymentTransactionById(paymentTransactionId: number): Promise<PaymentTransactionResponseDto> {
    try {
      const paymentTransaction = await this.paymentTransactionsRepository.getPaymentTransactionById(paymentTransactionId);
      return this.mapPaymentTransaction(paymentTransaction);  
    } catch (error) {
      throw new HttpException(500, `Error retrieving payment transaction: ${error.message}`);
    }
  }

  // Create a new payment transaction
  async createPaymentTransaction(createPaymentDto: CreatePaymentTransactionDto): Promise<PaymentTransactionResponseDto> {
    try {
      const newPaymentTransaction = await this.paymentTransactionsRepository.createPaymentTransaction(createPaymentDto);
      return this.mapPaymentTransaction(newPaymentTransaction);  
    } catch (error) {
      throw new HttpException(500, `Error creating payment transaction: ${error.message}`);
    }
  }

  // Update a payment transaction by ID
  async updatePaymentTransactionById(paymentTransactionId: number, updatePaymentDto: UpdatePaymentTransactionDto): Promise<PaymentTransactionResponseDto> {
    try {
      const updatedPaymentTransaction = await this.paymentTransactionsRepository.updatePaymentTransactionById(paymentTransactionId, updatePaymentDto);
      return this.mapPaymentTransaction(updatedPaymentTransaction);  
    } catch (error) {
      throw new HttpException(500, `Error updating payment transaction: ${error.message}`);
    }
  }

  // Delete a payment transaction by ID
  async deletePaymentTransactionById(paymentTransactionId: number): Promise<{ message: string }> {
    try {
      await this.paymentTransactionsRepository.deletePaymentTransactionById(paymentTransactionId);
      return { message: 'Payment transaction deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting payment transaction: ${error.message}`);
    }
  }
}
