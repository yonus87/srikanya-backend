//src/services/orderdispatchitem.service.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { OrderDispatchItemRepository } from '../repositories/orderdispatchitem.repository';
import OrderDispatchItem from '../models/orderdispatchitem';
import { CreateOrderDispatchItemDto, UpdateOrderDispatchItemDto, OrderDispatchItemResponseDto } from '@/dtos/orderdispatchitem.dto';

@Service()
export class OrderDispatchItemService {
  constructor(
    private readonly orderDispatchItemRepository: OrderDispatchItemRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Retrieve all order dispatch items, optionally filtered by orderDispatchId or orderItemId
  public async getAllOrderDispatchItems(orderDispatchId?: number, orderItemId?: number): Promise<OrderDispatchItemResponseDto[]> {
    try {
      const orderDispatchItems = await this.orderDispatchItemRepository.getAllOrderDispatchItems(orderDispatchId, orderItemId);
      const orderDispatchDtos = orderDispatchItems.map((item) =>
        this.autoMapper.mapper.map(item, OrderDispatchItem, OrderDispatchItemResponseDto)
      );
      return orderDispatchDtos;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order dispatch items: ${error.message}`);
    }
  }

  // Get an order dispatch item by its ID
  public async getOrderDispatchItemById(orderDispatchItemId: number): Promise<OrderDispatchItemResponseDto> {
    try {
      const orderDispatchItem = await this.orderDispatchItemRepository.getOrderDispatchItemById(orderDispatchItemId);
      return this.autoMapper.mapper.map(orderDispatchItem, OrderDispatchItem, OrderDispatchItemResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error retrieving order dispatch item: ${error.message}`);
    }
  }

  // Create a new order dispatch item
  public async createOrderDispatchItem(createOrderDispatchItemDto: CreateOrderDispatchItemDto): Promise<OrderDispatchItemResponseDto> {
    try {
      const createdOrderDispatchItem = await this.orderDispatchItemRepository.createOrderDispatchItem(createOrderDispatchItemDto);
      return this.autoMapper.mapper.map(createdOrderDispatchItem, OrderDispatchItem, OrderDispatchItemResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error creating order dispatch item: ${error.message}`);
    }
  }

  // Update an existing order dispatch item by its ID
  public async updateOrderDispatchItemById(orderDispatchItemId: number, updateOrderDispatchItemDto: UpdateOrderDispatchItemDto): Promise<OrderDispatchItemResponseDto> {
    try {
      const updatedOrderDispatchItem = await this.orderDispatchItemRepository.updateOrderDispatchItemById(orderDispatchItemId, updateOrderDispatchItemDto);
      return this.autoMapper.mapper.map(updatedOrderDispatchItem, OrderDispatchItem, OrderDispatchItemResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error updating order dispatch item: ${error.message}`);
    }
  }

  // Delete an order dispatch item by its ID
  public async deleteOrderDispatchItemById(orderDispatchItemId: number): Promise<{ message: string }> {
    try {
      const result = await this.orderDispatchItemRepository.deleteOrderDispatchItemById(orderDispatchItemId);
      return result;
    } catch (error) {
      throw new HttpException(500, `Error deleting order dispatch item: ${error.message}`);
    }
  }
}
