//src/repositories/paymentTransactions.repository.ts

import { Service } from 'typedi';
import PaymentTransactions from '@/models/paymentTransactions';
import { HttpException } from '@/exceptions/HttpException';
import OrderList from '@/models/OrderList'; 

@Service()
export class PaymentTransactionsRepository {
  // Retrieve all payment transactions, 
  public async getAllPaymentTransactions(orderId?: number): Promise<PaymentTransactions[]> {
    try {
      const queryOptions: any = {
        include: [
          { model: OrderList, as: 'OrderList' }, 
        ],
      };

      if (orderId) {
        queryOptions.where = { orderId }; 
      }

      const paymentTransactions = await PaymentTransactions.findAll(queryOptions);
      return paymentTransactions;
    } catch (error) {
      throw new HttpException(500, `Error retrieving payment transactions: ${error.message}`);
    }
  }

  // Get a single payment transaction by ID
  public async getPaymentTransactionById(paymentTransactionId: number): Promise<PaymentTransactions> {
    try {
      const paymentTransaction = await PaymentTransactions.findByPk(paymentTransactionId, {
        include: ['OrderList'], 
      });

      if (!paymentTransaction) {
        throw new HttpException(404, 'Payment transaction not found');
      }

      return paymentTransaction;
    } catch (error) {
      throw new HttpException(500, `Error retrieving payment transaction: ${error.message}`);
    }
  }

  // Create a new payment transaction
  public async createPaymentTransaction(createPaymentDto: any): Promise<PaymentTransactions> {
    try {
      const newPaymentTransaction = await PaymentTransactions.create(createPaymentDto);
      return newPaymentTransaction;
    } catch (error) {
      throw new HttpException(500, `Error creating payment transaction: ${error.message}`);
    }
  }

  // Update a payment transaction by ID
  public async updatePaymentTransactionById(paymentTransactionId: number, updatePaymentDto: any): Promise<PaymentTransactions> {
    try {
      const paymentTransaction = await this.getPaymentTransactionById(paymentTransactionId); 
      const updatedPaymentTransaction = await paymentTransaction.update(updatePaymentDto);
      return updatedPaymentTransaction;
    } catch (error) {
      throw new HttpException(500, `Error updating payment transaction: ${error.message}`);
    }
  }

  // Delete a payment transaction by ID
  public async deletePaymentTransactionById(paymentTransactionId: number): Promise<{ message: string }> {
    try {
      const paymentTransaction = await this.getPaymentTransactionById(paymentTransactionId); 
      await paymentTransaction.destroy();
      return { message: 'Payment transaction deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting payment transaction: ${error.message}`);
    }
  }
}
