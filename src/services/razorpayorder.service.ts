import { Service } from 'typedi';
import { RazorpayOrderRepository } from '@/repositories/razorpayorder.repository';
import { HttpException } from '@/exceptions/HttpException';
import {
  RazorpayOrderDto,
  CreateRazorpayOrderDto,
  UpdateRazorpayOrderDto,
} from '@/dtos/razorpayorder.dto';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import RazorpayOrder from '@/models/razorpayorder';

@Service()
export class RazorpayOrderService {
  constructor(
    private readonly razorpayOrderRepository: RazorpayOrderRepository,
    private readonly mapperManager: AutoMapperManager
  ) {}

  // Create a new Razorpay order
  async create(createRazorpayOrderDto: CreateRazorpayOrderDto): Promise<RazorpayOrderDto> {
    try {
      const razorpayOrderData = this.mapperManager.mapper.map(
        createRazorpayOrderDto,
        CreateRazorpayOrderDto,
        RazorpayOrder
      );

      const newRazorpayOrder = await this.razorpayOrderRepository.createRazorpayOrder(razorpayOrderData);

      return this.mapperManager.mapper.map(newRazorpayOrder, RazorpayOrder, RazorpayOrderDto);
    } catch (error) {
      console.error('Error in RazorpayOrderService during create:', error);
      throw new HttpException(500, `Failed to create Razorpay order: ${error.message}`);
    }
  }

  // Get all Razorpay orders
  async getAll(): Promise<RazorpayOrderDto[]> {
    try {
      const razorpayOrders = await this.razorpayOrderRepository.getAllRazorpayOrders();
      return this.mapperManager.mapper.mapArray(razorpayOrders, RazorpayOrder, RazorpayOrderDto);
    } catch (error) {
      console.error('Error in RazorpayOrderService while fetching all orders:', error);
      throw new HttpException(500, `Failed to fetch Razorpay orders: ${error.message}`);
    }
  }

  // Get a Razorpay order by ID
  async getById(razorpayOrderId: number): Promise<RazorpayOrderDto> {
    try {
      const razorpayOrder = await this.razorpayOrderRepository.getRazorpayOrderById(razorpayOrderId);
      return this.mapperManager.mapper.map(razorpayOrder, RazorpayOrder, RazorpayOrderDto);
    } catch (error) {
      console.error('Error in RazorpayOrderService while fetching order by ID:', error);
      throw new HttpException(500, `Failed to fetch Razorpay order: ${error.message}`);
    }
  }

  // Update a Razorpay order by ID
  async update(
    razorpayOrderId: number,
    updateRazorpayOrderDto: UpdateRazorpayOrderDto
  ): Promise<RazorpayOrderDto> {
    try {
      const razorpayOrderData = this.mapperManager.mapper.map(
        updateRazorpayOrderDto,
        UpdateRazorpayOrderDto,
        RazorpayOrder
      );

      const updatedRazorpayOrder = await this.razorpayOrderRepository.updateRazorpayOrderById(
        razorpayOrderId,
        razorpayOrderData
      );

      return this.mapperManager.mapper.map(updatedRazorpayOrder, RazorpayOrder, RazorpayOrderDto);
    } catch (error) {
      console.error('Error in RazorpayOrderService while updating order:', error);
      throw new HttpException(500, `Failed to update Razorpay order: ${error.message}`);
    }
  }

  // Delete a Razorpay order by ID
  async delete(razorpayOrderId: number): Promise<{ message: string }> {
    try {
      return await this.razorpayOrderRepository.deleteRazorpayOrderById(razorpayOrderId);
    } catch (error) {
      console.error('Error in RazorpayOrderService while deleting order:', error);
      throw new HttpException(500, `Failed to delete Razorpay order: ${error.message}`);
    }
  }
}
