//src/services/orderrequestforcancellationlist.service.ts

import { Service } from 'typedi';
import { OrderRequestForCancellationListRepository } from '@/repositories/orderrequestforcancellationlist.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { OrderRequestForCancellationDto, CreateOrderRequestForCancellationDto, UpdateOrderRequestForCancellationDto, OrderRequestForCancellationResponseDto, OrderRequestForCancellationListResponseDto } from '@/dtos/orderrequestforcancellationlist.dto';
import OrderRequestForCancellation from '@/models/orderrequestforcancellationlist';

@Service()
export class OrderRequestForCancellationListService {
  constructor(
    private readonly orderRequestForCancellationListRepository: OrderRequestForCancellationListRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Helper function for mapping order request for cancellation
  private mapOrderRequestForCancellationItem(orderRequestForCancellation: OrderRequestForCancellation): OrderRequestForCancellationResponseDto {
    return this.autoMapper.mapper.map(orderRequestForCancellation, OrderRequestForCancellation, OrderRequestForCancellationResponseDto);
  }

  // Get all cancellation requests with optional filters for order ID and active status
  async findAll(orderId?: number, active?: boolean): Promise<{ cancellationRequests: OrderRequestForCancellationListResponseDto[] }> {
    try {
      const cancellationRequests = await this.orderRequestForCancellationListRepository.getAllCancellationRequests(orderId, active);
      const cancellationDtos = cancellationRequests.map(request => this.mapOrderRequestForCancellationItem(request));  
      return { cancellationRequests: cancellationDtos };
    } catch (error) {
      throw new HttpException(500, `Error retrieving cancellation requests: ${error.message}`);
    }
  }

  // Get a cancellation request by its ID
  async getCancellationRequestById(cancellationRequestId: number): Promise<OrderRequestForCancellationResponseDto> {
    try {
      const cancellationRequest = await this.orderRequestForCancellationListRepository.getCancellationRequestById(cancellationRequestId);
      return this.mapOrderRequestForCancellationItem(cancellationRequest);  
    } catch (error) {
      throw new HttpException(500, `Error retrieving cancellation request: ${error.message}`);
    }
  }

  // Create a new cancellation request
  async createCancellationRequest(createCancellationDto: CreateOrderRequestForCancellationDto): Promise<OrderRequestForCancellationResponseDto> {
    try {
      const newCancellationRequest = await this.orderRequestForCancellationListRepository.createCancellationRequest(createCancellationDto);
      return this.mapOrderRequestForCancellationItem(newCancellationRequest);  
    } catch (error) {
      throw new HttpException(500, `Error creating cancellation request: ${error.message}`);
    }
  }

  // Update a cancellation request by its ID
  async updateCancellationRequestById(cancellationRequestId: number, updateCancellationDto: UpdateOrderRequestForCancellationDto): Promise<OrderRequestForCancellationResponseDto> {
    try {
      const updatedCancellationRequest = await this.orderRequestForCancellationListRepository.updateCancellationRequestById(cancellationRequestId, updateCancellationDto);
      return this.mapOrderRequestForCancellationItem(updatedCancellationRequest);  
    } catch (error) {
      throw new HttpException(500, `Error updating cancellation request: ${error.message}`);
    }
  }

  // Delete a cancellation request by its ID
  async deleteCancellationRequestById(cancellationRequestId: number): Promise<{ message: string }> {
    try {
      await this.orderRequestForCancellationListRepository.deleteCancellationRequestById(cancellationRequestId);
      return { message: 'Cancellation request deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting cancellation request: ${error.message}`);
    }
  }
}
