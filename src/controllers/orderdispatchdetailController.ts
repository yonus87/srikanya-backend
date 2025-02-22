// src/controllers/orderdispatchdetail.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { OrderDispatchDetailService } from '@/services/orderdispatchdetail.service';
import { CreateOrderDispatchDetailDto, UpdateOrderDispatchDetailDto, OrderDispatchDetailResponseDto } from '@/dtos/orderdispatchdetail.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/orderdispatchdetail')
export class OrderDispatchDetailController {
  constructor(private readonly orderDispatchDetailService: OrderDispatchDetailService) {}

  // Get all order dispatch details with optional orderId filter
  @Get('')
  @OpenAPI({
    summary: 'Get all order dispatch details',
    description: 'Returns a list of all order dispatch details, optionally filtered by order ID',
  })
  async getAllOrderDispatchDetails(
    @QueryParam('orderId', { required: false }) orderId?: number
  ): Promise<OrderDispatchDetailResponseDto[]> {  
    try {
      const orderDispatchDetails = await this.orderDispatchDetailService.getAllOrderDispatchDetails(orderId);
      return orderDispatchDetails;  
    } catch (error) {
      console.error('Error in getAllOrderDispatchDetails controller:', error);
      throw new HttpException(500, `Error retrieving order dispatch details: ${error.message}`);
    }
  }

  // Get an order dispatch detail by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get an order dispatch detail by ID',
    description: 'Returns details of a specific order dispatch detail by its ID',
  })
  async getOrderDispatchDetailById(
    @Param('id') id: number
  ): Promise<OrderDispatchDetailResponseDto> {
    try {
      const orderDispatchDetail = await this.orderDispatchDetailService.getOrderDispatchDetailById(id);
      return orderDispatchDetail;
    } catch (error) {
      console.error(`Error in getOrderDispatchDetailById controller for order dispatch ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Order dispatch detail with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving order dispatch detail: ${error.message}`);
    }
  }

  // Create a new order dispatch detail
  @Post('')
  @OpenAPI({
    summary: 'Create a new order dispatch detail',
    description: 'Creates a new order dispatch detail and returns the created detail',
  })
  @UseBefore(validationMiddleware(CreateOrderDispatchDetailDto))
  async createOrderDispatchDetail(
    @Body() createOrderDispatchDto: CreateOrderDispatchDetailDto
  ): Promise<OrderDispatchDetailResponseDto> {
    try {
      const newOrderDispatchDetail = await this.orderDispatchDetailService.createOrderDispatchDetail(createOrderDispatchDto);
      return newOrderDispatchDetail;
    } catch (error) {
      console.error('Error in createOrderDispatchDetail controller:', error);
      throw new HttpException(500, `Error creating order dispatch detail: ${error.message}`);
    }
  }

  // Update an existing order dispatch detail by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update an order dispatch detail by ID',
    description: 'Updates the details of a specific order dispatch detail by its ID',
  })
  @UseBefore(validationMiddleware(UpdateOrderDispatchDetailDto))
  async updateOrderDispatchDetailById(
    @Param('id') id: number,
    @Body() updateOrderDispatchDto: UpdateOrderDispatchDetailDto
  ): Promise<OrderDispatchDetailResponseDto> {
    try {
      const updatedOrderDispatchDetail = await this.orderDispatchDetailService.updateOrderDispatchDetailById(id, updateOrderDispatchDto);
      return updatedOrderDispatchDetail;
    } catch (error) {
      console.error(`Error in updateOrderDispatchDetailById controller for order dispatch ID ${id}:`, error);
      throw new HttpException(500, `Error updating order dispatch detail: ${error.message}`);
    }
  }

  // Delete an order dispatch detail by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete an order dispatch detail by ID',
    description: 'Deletes a specific order dispatch detail by its ID',
  })
  async deleteOrderDispatchDetailById(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      await this.orderDispatchDetailService.deleteOrderDispatchDetailById(id);
      return { message: 'Order dispatch detail deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteOrderDispatchDetailById controller for order dispatch ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Order dispatch detail with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting order dispatch detail: ${error.message}`);
    }
  }
}
