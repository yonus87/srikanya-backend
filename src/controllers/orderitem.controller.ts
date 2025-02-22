//src/controllers/orderitem.controller.ts


import { JsonController, Get, Post, Put, Delete, Param, Body } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { OrderItemService } from '@/services/orderitem.service';
import { CreateOrderItemDto, UpdateOrderItemDto, OrderItemDto } from '@/dtos/orderitem.dto';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/orderitems')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  // Get all order items
  @Get('')
  @OpenAPI({
    summary: 'Get all order items',
    description: 'Returns a list of all order items',
  })
  async getAllOrderItems(): Promise<OrderItemDto[]> {
    try {
      const orderItems = await this.orderItemService.getAll();
      return orderItems;
    } catch (error) {
      console.error('Error in getAllOrderItems controller:', error);
      throw new HttpException(500, `Error retrieving order items: ${error.message}`);
    }
  }

  // Get order item by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get an order item by ID',
    description: 'Returns details of a specific order item by its ID',
  })
  async getOrderItemById(@Param('id') id: number): Promise<OrderItemDto> {
    try {
      const orderItem = await this.orderItemService.getById(id);
      return orderItem;
    } catch (error) {
      console.error(`Error in getOrderItemById controller for order item ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Order item with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving order item: ${error.message}`);
    }
  }

  // Create a new order item
  @Post('')
  @OpenAPI({
    summary: 'Create a new order item',
    description: 'Creates a new order item and returns the created details',
  })
  async createOrderItem(@Body() createOrderItemDto: CreateOrderItemDto): Promise<OrderItemDto> {
    try {
      const newOrderItem = await this.orderItemService.create(createOrderItemDto);
      return newOrderItem;
    } catch (error) {
      console.error('Error in createOrderItem controller:', error);
      throw new HttpException(500, `Error creating order item: ${error.message}`);
    }
  }

  // Update an order item by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update an order item by ID',
    description: 'Updates the details of a specific order item by its ID',
  })
  async updateOrderItemById(
    @Param('id') id: number,
    @Body() updateOrderItemDto: UpdateOrderItemDto
  ): Promise<OrderItemDto> {
    try {
      const updatedOrderItem = await this.orderItemService.update(id, updateOrderItemDto);
      return updatedOrderItem;
    } catch (error) {
      console.error(`Error in updateOrderItemById controller for order item ID ${id}:`, error);
      throw new HttpException(500, `Error updating order item: ${error.message}`);
    }
  }

  // Delete an order item by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete an order item by ID',
    description: 'Deletes a specific order item by its ID',
  })
  async deleteOrderItemById(@Param('id') id: number): Promise<{ message: string }> {
    try {
      await this.orderItemService.delete(id);
      return { message: 'Order item deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteOrderItemById controller for order item ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Order item with ID ${id} not found`);
      }
      throw new HttpException(500, `Error deleting order item: ${error.message}`);
    }
  }
}
