//src/controllers/orderdispatchitem.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { OrderDispatchItemService } from '@/services/orderdispatchitem.service';
import { CreateOrderDispatchItemDto, UpdateOrderDispatchItemDto, OrderDispatchItemResponseDto } from '@/dtos/orderdispatchitem.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/orderdispatchitem')
export class OrderDispatchItemController {
  constructor(private readonly orderDispatchItemService: OrderDispatchItemService) {}

  // Get all order dispatch items with optional filters by orderDispatchId or orderItemId
  @Get('')
  @OpenAPI({
    summary: 'Get all order dispatch items',
    description: 'Returns a list of all order dispatch items, optionally filtered by order dispatch ID or order item ID',
  })
  async getAllOrderDispatchItems(
    @QueryParam('orderDispatchId', { required: false }) orderDispatchId?: number,
    @QueryParam('orderItemId', { required: false }) orderItemId?: number
  ): Promise<OrderDispatchItemResponseDto[]> {
    try {
      const orderDispatchItems = await this.orderDispatchItemService.getAllOrderDispatchItems(orderDispatchId, orderItemId);
      return orderDispatchItems;
    } catch (error) {
      console.error('Error in getAllOrderDispatchItems controller:', error);
      throw new HttpException(500, `Error retrieving order dispatch items: ${error.message}`);
    }
  }

  // Get a specific order dispatch item by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get an order dispatch item by ID',
    description: 'Returns details of a specific order dispatch item by its ID',
  })
  async getOrderDispatchItemById(
    @Param('id') id: number
  ): Promise<OrderDispatchItemResponseDto> {
    try {
      const orderDispatchItem = await this.orderDispatchItemService.getOrderDispatchItemById(id);
      return orderDispatchItem;
    } catch (error) {
      console.error(`Error in getOrderDispatchItemById controller for order dispatch item ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Order dispatch item with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving order dispatch item: ${error.message}`);
    }
  }

  // Create a new order dispatch item
  @Post('')
  @OpenAPI({
    summary: 'Create a new order dispatch item',
    description: 'Creates a new order dispatch item and returns the created item',
  })
  @UseBefore(validationMiddleware(CreateOrderDispatchItemDto))
  async createOrderDispatchItem(
    @Body() createOrderDispatchItemDto: CreateOrderDispatchItemDto
  ): Promise<OrderDispatchItemResponseDto> {
    try {
      const newOrderDispatchItem = await this.orderDispatchItemService.createOrderDispatchItem(createOrderDispatchItemDto);
      return newOrderDispatchItem;
    } catch (error) {
      console.error('Error in createOrderDispatchItem controller:', error);
      throw new HttpException(500, `Error creating order dispatch item: ${error.message}`);
    }
  }

  // Update an existing order dispatch item by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update an order dispatch item by ID',
    description: 'Updates the details of a specific order dispatch item by its ID',
  })
  @UseBefore(validationMiddleware(UpdateOrderDispatchItemDto))
  async updateOrderDispatchItemById(
    @Param('id') id: number,
    @Body() updateOrderDispatchItemDto: UpdateOrderDispatchItemDto
  ): Promise<OrderDispatchItemResponseDto> {
    try {
      const updatedOrderDispatchItem = await this.orderDispatchItemService.updateOrderDispatchItemById(id, updateOrderDispatchItemDto);
      return updatedOrderDispatchItem;
    } catch (error) {
      console.error(`Error in updateOrderDispatchItemById controller for order dispatch item ID ${id}:`, error);
      throw new HttpException(500, `Error updating order dispatch item: ${error.message}`);
    }
  }

  // Delete an order dispatch item by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete an order dispatch item by ID',
    description: 'Deletes a specific order dispatch item by its ID',
  })
  async deleteOrderDispatchItemById(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      await this.orderDispatchItemService.deleteOrderDispatchItemById(id);
      return { message: 'Order dispatch item deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteOrderDispatchItemById controller for order dispatch item ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Order dispatch item with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting order dispatch item: ${error.message}`);
    }
  }
}
