// src/services/orderdispatchdetail.service.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { OrderDispatchDetailRepository } from '../repositories/orderdispatchdetail.repository';
import OrderDispatchDetail from '../models/orderdispatchdetail';
import { CreateOrderDispatchDetailDto, UpdateOrderDispatchDetailDto, OrderDispatchDetailResponseDto } from '@/dtos/orderdispatchdetail.dto';

@Service()
export class OrderDispatchDetailService {
  constructor(
    private readonly orderDispatchDetailRepository: OrderDispatchDetailRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Retrieve all order dispatch details, optionally filtered by orderId
  public async getAllOrderDispatchDetails(orderId?: number): Promise<OrderDispatchDetailResponseDto[]> {
    try {
      const orderDispatchDetails = await this.orderDispatchDetailRepository.getAllOrderDispatchDetails(orderId);
      const orderDispatchDtos = orderDispatchDetails.map((detail) =>
        this.autoMapper.mapper.map(detail, OrderDispatchDetail, OrderDispatchDetailResponseDto)
      );
      return orderDispatchDtos;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order dispatch details: ${error.message}`);
    }
  }

  // Get an order dispatch detail by its ID
  public async getOrderDispatchDetailById(orderDispatchId: number): Promise<OrderDispatchDetailResponseDto> {
    try {
      const orderDispatchDetail = await this.orderDispatchDetailRepository.getOrderDispatchDetailById(orderDispatchId);
      return this.autoMapper.mapper.map(orderDispatchDetail, OrderDispatchDetail, OrderDispatchDetailResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error retrieving order dispatch detail: ${error.message}`);
    }
  }

  // Create a new order dispatch detail
  public async createOrderDispatchDetail(createOrderDispatchDto: CreateOrderDispatchDetailDto): Promise<OrderDispatchDetailResponseDto> {
    try {
      const createdOrderDispatchDetail = await this.orderDispatchDetailRepository.createOrderDispatchDetail(createOrderDispatchDto);
      return this.autoMapper.mapper.map(createdOrderDispatchDetail, OrderDispatchDetail, OrderDispatchDetailResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error creating order dispatch detail: ${error.message}`);
    }
  }

  // Update an existing order dispatch detail by its ID
  public async updateOrderDispatchDetailById(orderDispatchId: number, updateOrderDispatchDto: UpdateOrderDispatchDetailDto): Promise<OrderDispatchDetailResponseDto> {
    try {
      const updatedOrderDispatchDetail = await this.orderDispatchDetailRepository.updateOrderDispatchDetailById(orderDispatchId, updateOrderDispatchDto);
      return this.autoMapper.mapper.map(updatedOrderDispatchDetail, OrderDispatchDetail, OrderDispatchDetailResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error updating order dispatch detail: ${error.message}`);
    }
  }

  // Delete an order dispatch detail by its ID
  public async deleteOrderDispatchDetailById(orderDispatchId: number): Promise<{ message: string }> {
    try {
      const result = await this.orderDispatchDetailRepository.deleteOrderDispatchDetailById(orderDispatchId);
      return result;
    } catch (error) {
      throw new HttpException(500, `Error deleting order dispatch detail: ${error.message}`);
    }
  }
}
