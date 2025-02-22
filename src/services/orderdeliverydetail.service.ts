//src/services/orderdeliverydetail.service.ts

import { Service } from 'typedi';
import { OrderDeliveryDetailRepository } from '@/repositories/orderdeliverydetail.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { 
  OrderDeliveryDetailDto, 
  CreateOrderDeliveryDetailDto, 
  UpdateOrderDeliveryDetailDto, 
  OrderDeliveryDetailResponseDto 
} from '@/dtos/orderdeliverydetail.dto';
import OrderDeliveryDetail from '@/models/orderdeliverydetail';

@Service()
export class OrderDeliveryDetailService {
  constructor(
    private readonly orderDeliveryDetailRepository: OrderDeliveryDetailRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Helper function to map order delivery detail to response DTO
  private mapOrderDeliveryDetail(orderDeliveryDetail: OrderDeliveryDetail): OrderDeliveryDetailResponseDto {
    return this.autoMapper.mapper.map(orderDeliveryDetail, OrderDeliveryDetail, OrderDeliveryDetailResponseDto);
  }

  // Retrieve all order delivery details
  async findAll(): Promise<{ orderDeliveryDetails: OrderDeliveryDetailResponseDto[] }> {
    try {
      const orderDeliveryDetails = await this.orderDeliveryDetailRepository.getAllOrderDeliveryDetails();
      const orderDeliveryDtos = orderDeliveryDetails.map(detail => this.mapOrderDeliveryDetail(detail));
      return { orderDeliveryDetails: orderDeliveryDtos };
    } catch (error) {
      throw new HttpException(500, `Error retrieving order delivery details: ${error.message}`);
    }
  }

  // Retrieve an order delivery detail by ID
  async findById(id: number): Promise<OrderDeliveryDetailResponseDto> {
    try {
      const orderDeliveryDetail = await this.orderDeliveryDetailRepository.getOrderDeliveryDetailById(id);
      return this.mapOrderDeliveryDetail(orderDeliveryDetail);
    } catch (error) {
      throw new HttpException(500, `Error retrieving order delivery detail: ${error.message}`);
    }
  }

  // Create a new order delivery detail
  async create(data: CreateOrderDeliveryDetailDto): Promise<OrderDeliveryDetailResponseDto> {
    try {
      const newOrderDeliveryDetail = await this.orderDeliveryDetailRepository.createOrderDeliveryDetail(data);
      return this.mapOrderDeliveryDetail(newOrderDeliveryDetail);
    } catch (error) {
      throw new HttpException(500, `Error creating order delivery detail: ${error.message}`);
    }
  }

  // Update an order delivery detail by ID
  async updateById(id: number, data: UpdateOrderDeliveryDetailDto): Promise<OrderDeliveryDetailResponseDto> {
    try {
      const updatedOrderDeliveryDetail = await this.orderDeliveryDetailRepository.updateOrderDeliveryDetailById(id, data);
      return this.mapOrderDeliveryDetail(updatedOrderDeliveryDetail);
    } catch (error) {
      throw new HttpException(500, `Error updating order delivery detail: ${error.message}`);
    }
  }

  // Delete an order delivery detail by ID
  async deleteById(id: number): Promise<{ message: string }> {
    try {
      return await this.orderDeliveryDetailRepository.deleteOrderDeliveryDetailById(id);
    } catch (error) {
      throw new HttpException(500, `Error deleting order delivery detail: ${error.message}`);
    }
  }
}
