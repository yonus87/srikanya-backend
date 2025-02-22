// src/services/orderinventorydetail.service.ts

import { Service } from 'typedi';
import { OrderInventoryDetailRepository } from '@/repositories/orderinventorydetail.repository';
import { HttpException } from '@/exceptions/HttpException';
import  OrderInventoryDetail  from '@/models/orderinventorydetail';
import { 
  OrderInventoryDetailDto, 
  CreateOrderInventoryDetailDto, 
  UpdateOrderInventoryDetailDto, 
  OrderInventoryDetailListResponseDto 
} from '@/dtos/orderinventorydetail.dto';
import { AutoMapperManager } from '@/mapper-profiles/mapper';

@Service()
export class OrderInventoryDetailService {
  private orderInventoryDetailRepository: OrderInventoryDetailRepository;
  private autoMapper: AutoMapperManager;

  constructor() {
    this.orderInventoryDetailRepository = new OrderInventoryDetailRepository();
    this.autoMapper = new AutoMapperManager(); 
  }

  // Get all OrderInventoryDetails
  public async getAllOrderInventoryDetails(): Promise<OrderInventoryDetailListResponseDto[]> {
    try {
      const orderInventoryDetails = await this.orderInventoryDetailRepository.getAllOrderInventoryDetails();
      
      const mappedOrderInventoryDetails = orderInventoryDetails.map(detail => 
        this.autoMapper.mapper.map(detail, OrderInventoryDetail, OrderInventoryDetailListResponseDto)
      );
      
      return mappedOrderInventoryDetails;
    } catch (error) {
      throw new HttpException(500, `Error retrieving OrderInventoryDetails: ${error.message}`);
    }
  }

  // Get OrderInventoryDetail by ID
  public async getOrderInventoryDetailById(id: number): Promise<OrderInventoryDetailDto> {
    try {
      const orderInventoryDetail = await this.orderInventoryDetailRepository.getOrderInventoryDetailById(id);
      
      const mappedOrderInventoryDetail = this.autoMapper.mapper.map(orderInventoryDetail, OrderInventoryDetail, OrderInventoryDetailDto);
      
      return mappedOrderInventoryDetail;
    } catch (error) {
      throw new HttpException(500, `Error retrieving OrderInventoryDetail: ${error.message}`);
    }
  }

  // Create a new OrderInventoryDetail item
  public async createOrderInventoryDetail(createOrderInventoryDetailDto: CreateOrderInventoryDetailDto): Promise<OrderInventoryDetailDto> {
    try {
      const newOrderInventoryDetail = await this.orderInventoryDetailRepository.createOrderInventoryDetail(createOrderInventoryDetailDto);
      
      const mappedOrderInventoryDetail = this.autoMapper.mapper.map(newOrderInventoryDetail, OrderInventoryDetail, OrderInventoryDetailDto);
      
      return mappedOrderInventoryDetail;
    } catch (error) {
      throw new HttpException(500, `Error creating OrderInventoryDetail: ${error.message}`);
    }
  }

  // Update an OrderInventoryDetail item by ID
  public async updateOrderInventoryDetailById(id: number, updateOrderInventoryDetailDto: UpdateOrderInventoryDetailDto): Promise<OrderInventoryDetailDto> {
    try {
      const updatedOrderInventoryDetail = await this.orderInventoryDetailRepository.updateOrderInventoryDetailById(id, updateOrderInventoryDetailDto);
      
      const mappedUpdatedOrderInventoryDetail = this.autoMapper.mapper.map(updatedOrderInventoryDetail, OrderInventoryDetail, OrderInventoryDetailDto);
      
      return mappedUpdatedOrderInventoryDetail;
    } catch (error) {
      throw new HttpException(500, `Error updating OrderInventoryDetail: ${error.message}`);
    }
  }

  // Delete an OrderInventoryDetail item by ID
  public async deleteOrderInventoryDetailById(id: number): Promise<{ message: string }> {
    try {
      const result = await this.orderInventoryDetailRepository.deleteOrderInventoryDetailById(id);
      
      return result;
    } catch (error) {
      throw new HttpException(500, `Error deleting OrderInventoryDetail: ${error.message}`);
    }
  }
}
