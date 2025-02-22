//src/services/orderitem.service.ts


import { Service } from 'typedi';
import { OrderItemRepository } from '@/repositories/orderitem.repository';
import { HttpException } from '@/exceptions/HttpException';
import { OrderItemDto, CreateOrderItemDto, UpdateOrderItemDto, OrderItemResponseDto } from '@/dtos/orderitem.dto';
import OrderItem from '@/models/orderitem';
import { AutoMapperManager } from '@/mapper-profiles/mapper';

@Service()
export class OrderItemService {
  constructor(
    private orderItemRepository: OrderItemRepository,
    private mapperManager: AutoMapperManager
  ) {}

  // Create a new order item
  async create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItemDto> {
    try {
      const orderItemData = this.mapperManager.mapper.map(createOrderItemDto, CreateOrderItemDto, OrderItem);
      const newOrderItem = await this.orderItemRepository.createOrderItem(orderItemData);
      return this.mapperManager.mapper.map(newOrderItem, OrderItem, OrderItemDto);
    } catch (error) {
      console.error('Error in OrderItemService during create:', error);
      throw new HttpException(500, 'Failed to create order item');
    }
  }

  // Get all order items
  async getAll(): Promise<OrderItemDto[]> {
    try {
      const orderItems = await this.orderItemRepository.getAllOrderItems();
      return this.mapperManager.mapper.mapArray(orderItems, OrderItem, OrderItemDto);
    } catch (error) {
      console.error('Error in OrderItemService while fetching all order items:', error);
      throw new HttpException(500, 'Failed to fetch order items');
    }
  }

  // Get order item by ID
  async getById(orderItemId: number): Promise<OrderItemDto> {
    try {
      const orderItem = await this.orderItemRepository.getOrderItemById(orderItemId);
      return this.mapperManager.mapper.map(orderItem, OrderItem, OrderItemDto);
    } catch (error) {
      console.error('Error in OrderItemService while fetching order item by ID:', error);
      throw new HttpException(500, 'Failed to fetch order item');
    }
  }

  // Update order item by ID
  async update(orderItemId: number, updateOrderItemDto: UpdateOrderItemDto): Promise<OrderItemDto> {
    try {
      const orderItemData = this.mapperManager.mapper.map(updateOrderItemDto, UpdateOrderItemDto, OrderItem);
      const updatedOrderItem = await this.orderItemRepository.updateOrderItemById(orderItemId, orderItemData);
      return this.mapperManager.mapper.map(updatedOrderItem, OrderItem, OrderItemDto);
    } catch (error) {
      console.error('Error in OrderItemService while updating order item:', error);
      throw new HttpException(500, 'Failed to update order item');
    }
  }

  // Delete order item by ID
  async delete(orderItemId: number): Promise<{ message: string }> {
    try {
      return await this.orderItemRepository.deleteOrderItemById(orderItemId);
    } catch (error) {
      console.error('Error in OrderItemService while deleting order item:', error);
      throw new HttpException(500, 'Failed to delete order item');
    }
  }
}
