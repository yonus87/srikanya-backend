//src/controllers/orderinvoicedetail.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { OrderInvoiceDetailService } from '@/services/orderinvoicedetail.service';
import { CreateOrderInvoiceDetailDto, UpdateOrderInvoiceDetailDto, OrderInvoiceDetailDto } from '@/dtos/orderinvoicedetail.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';
import { ErrorDto } from '@/dtos/error.dto';

@Service()
@JsonController('/orderinvoicedetail')
export class OrderInvoiceDetailController {
  constructor(private readonly service: OrderInvoiceDetailService) {}

  // Get all order invoice details
  @Get()
  @OpenAPI({ summary: 'Get all order invoice details' })
  @ResponseSchema(OrderInvoiceDetailDto, {
    contentType: 'application/json',
    description: 'List of order invoice details',
    statusCode: '200',
    isArray: true,
  })
  @ResponseSchema(ErrorDto, {
    contentType: 'application/json',
    description: 'Server error model',
    statusCode: '500',
    isArray: false,
  })
  async findAll(): Promise<OrderInvoiceDetailDto[]> {
    try {
      return await this.service.findAll();
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      console.error('Error fetching order invoice details:', error);
      throw new HttpException(500, 'Failed to fetch order invoice details');
    }
  }

  // Get order invoice detail by ID
  @Get('/:id')
  @OpenAPI({ summary: 'Get the details of a specific order invoice detail' })
  @ResponseSchema(OrderInvoiceDetailDto, {
    contentType: 'application/json',
    description: 'Details of the order invoice',
    statusCode: '200',
    isArray: false,
  })
  @ResponseSchema(ErrorDto, {
    contentType: 'application/json',
    description: 'Order invoice detail not found',
    statusCode: '404',
    isArray: false,
  })
  async findById(@Param('id') id: number): Promise<OrderInvoiceDetailDto | undefined> {
    try {
      return await this.service.findById(id);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      console.error('Error fetching order invoice detail by ID:', error);
      throw new HttpException(404, 'Order invoice detail not found for the provided ID');
    }
  }

  // Create a new order invoice detail
  @Post()
  @OpenAPI({ summary: 'Create a new order invoice detail' })
  @UseBefore(validationMiddleware(CreateOrderInvoiceDetailDto, 'body'))
  @ResponseSchema(OrderInvoiceDetailDto, {
    contentType: 'application/json',
    description: 'Returns the created order invoice detail',
    statusCode: '200',
    isArray: false,
  })
  @ResponseSchema(ErrorDto, {
    contentType: 'application/json',
    description: 'Server error model',
    statusCode: '500',
    isArray: false,
  })
  async create(@Body() body: CreateOrderInvoiceDetailDto): Promise<OrderInvoiceDetailDto> {
    try {
      return await this.service.create(body);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      console.error('Error creating order invoice detail:', error);
      throw new HttpException(500, 'Failed to create order invoice detail');
    }
  }

  // Update an order invoice detail by ID
  @Put('/:id')
  @OpenAPI({ summary: 'Update an order invoice detail' })
  @UseBefore(validationMiddleware(UpdateOrderInvoiceDetailDto, 'body'))
  @ResponseSchema(OrderInvoiceDetailDto, {
    contentType: 'application/json',
    description: 'Returns the updated order invoice detail',
    statusCode: '200',
    isArray: false,
  })
  @ResponseSchema(ErrorDto, {
    contentType: 'application/json',
    description: 'Server error model',
    statusCode: '500',
    isArray: false,
  })
  @ResponseSchema(ErrorDto, {
    contentType: 'application/json',
    description: 'Order invoice detail not found for update',
    statusCode: '404',
    isArray: false,
  })
  async update(@Param('id') id: number, @Body() body: UpdateOrderInvoiceDetailDto): Promise<OrderInvoiceDetailDto | null> {
    try {
      return await this.service.update(id, body);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      console.error('Error updating order invoice detail:', error);
      throw new HttpException(500, 'Failed to update order invoice detail');
    }
  }

  // Delete an order invoice detail by ID
  @Delete('/:id')
  @OpenAPI({ summary: 'Delete an order invoice detail' })
  @ResponseSchema(Boolean, {
    contentType: 'application/json',
    description: 'Returns true if record deleted successfully',
    statusCode: '200',
    isArray: false,
  })
  @ResponseSchema(ErrorDto, {
    contentType: 'application/json',
    description: 'Server error model',
    statusCode: '500',
    isArray: false,
  })
  @ResponseSchema(ErrorDto, {
    contentType: 'application/json',
    description: 'Order invoice detail not found for deletion',
    statusCode: '404',
    isArray: false,
  })
  async delete(@Param('id') id: number): Promise<boolean> {
    try {
      return await this.service.delete(id);
    } catch (error) {
      if (error instanceof HttpException) {
        throw error; 
      }
      console.error('Error deleting order invoice detail:', error);
      throw new HttpException(500, 'Failed to delete order invoice detail');
    }
  }
}
