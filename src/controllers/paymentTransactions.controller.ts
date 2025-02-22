//src/controllers/paymentTransactions.controller.ts

import {
    JsonController,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    QueryParam,
    UseBefore,
  } from 'routing-controllers';
  import { OpenAPI } from 'routing-controllers-openapi';
  import { Service } from 'typedi';
  import { PaymentTransactionsService } from '@/services/paymentTransactions.service';
  import {
    CreatePaymentTransactionDto,
    UpdatePaymentTransactionDto,
    PaymentTransactionResponseDto,
  } from '@/dtos/paymenttransactions.dto';
  import { validationMiddleware } from '@/middlewares/validation.middleware';
  import { HttpException } from '@/exceptions/HttpException';
  
  @Service()
  @JsonController('/payment-transactions')
  export class PaymentTransactionsController {
    constructor(private readonly paymentTransactionsService: PaymentTransactionsService) {}
  
    @Get('')
    @OpenAPI({ summary: 'Get all payment transactions' })
    async getAllPaymentTransactions(
      @QueryParam('orderId', { required: false }) orderId?: number
    ): Promise<{ paymentTransactions: PaymentTransactionResponseDto[] }> {
      try {
        return await this.paymentTransactionsService.findAll(orderId);
      } catch (error) {
        throw new HttpException(500, `Error retrieving payment transactions: ${error.message}`);
      }
    }
  
    @Get('/:id')
    @OpenAPI({ summary: 'Get a payment transaction by ID' })
    async getPaymentTransactionById(@Param('id') id: number): Promise<PaymentTransactionResponseDto> {
      try {
        return await this.paymentTransactionsService.getPaymentTransactionById(id);
      } catch (error) {
        throw new HttpException(500, `Error retrieving payment transaction: ${error.message}`);
      }
    }
  
    @Post('')
    @OpenAPI({ summary: 'Create a new payment transaction' })
    @UseBefore(validationMiddleware(CreatePaymentTransactionDto))
    async createPaymentTransaction(@Body() createDto: CreatePaymentTransactionDto): Promise<PaymentTransactionResponseDto> {
      try {
        return await this.paymentTransactionsService.createPaymentTransaction(createDto);
      } catch (error) {
        throw new HttpException(500, `Error creating payment transaction: ${error.message}`);
      }
    }
  
    @Put('/:id')
    @OpenAPI({ summary: 'Update a payment transaction by ID' })
    @UseBefore(validationMiddleware(UpdatePaymentTransactionDto))
    async updatePaymentTransactionById(
      @Param('id') id: number,
      @Body() updateDto: UpdatePaymentTransactionDto
    ): Promise<PaymentTransactionResponseDto> {
      try {
        return await this.paymentTransactionsService.updatePaymentTransactionById(id, updateDto);
      } catch (error) {
        throw new HttpException(500, `Error updating payment transaction: ${error.message}`);
      }
    }
  
    @Delete('/:id')
    @OpenAPI({ summary: 'Delete a payment transaction by ID' })
    async deletePaymentTransactionById(@Param('id') id: number): Promise<{ message: string }> {
      try {
        return await this.paymentTransactionsService.deletePaymentTransactionById(id);
      } catch (error) {
        throw new HttpException(500, `Error deleting payment transaction: ${error.message}`);
      }
    }
  }
  