// src/services/orderlistService.ts

import { Service } from 'typedi';
import { OrderRepository } from '@/repositories/orderlist.repository';
import { HttpException } from '@/exceptions/HttpException';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { OrderListDto, CreateOrderlistDto, UpdateOrderlistDto, OrderlistResponseDto } from '@/dtos/orderlist.dto';
import OrderList from '@/models/OrderList';

@Service()
export class OrderListService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly autoMapper: AutoMapperManager
  ) {}

  // Get all orders by locationId with filters and pagination
  async findAllByLocation(
    locationId: number, 
    filters: any = {}
  ): Promise<OrderlistResponseDto[]> {
    try {
      // Validate filters if ....
      if (filters.orderStatus && !['pending', 'completed', 'cancelled'].includes(filters.orderStatus)) {
        throw new HttpException(400, 'Invalid order status');
      }
      if (filters.paymentStatus && !['paid', 'pending', 'failed'].includes(filters.paymentStatus)) {
        throw new HttpException(400, 'Invalid payment status');
      }

      const orders = await this.orderRepository.getAllOrdersByLocationId(locationId, filters);
      
      const orderDtos = orders.map(order => this.autoMapper.mapper.map(order, OrderList, OrderlistResponseDto));
      return orderDtos;
    } catch (error) {
      throw new HttpException(500, `Error retrieving orders: ${error.message}`);
    }
  }

  // Get an order by ID
  async getOrderById(orderId: number): Promise<OrderlistResponseDto> {
    try {
      const order = await this.orderRepository.getOrderById(orderId);
      if (!order) {
        throw new HttpException(404, `Order with id ${orderId} not found`);
      }
      return this.autoMapper.mapper.map(order, OrderList, OrderlistResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error retrieving order: ${error.message}`);
    }
  }

  // Create a new order
  async createOrder(createOrderDto: CreateOrderlistDto): Promise<OrderlistResponseDto> {
    try {
      const newOrder = await this.orderRepository.createOrder(createOrderDto);
      return this.autoMapper.mapper.map(newOrder, OrderList, OrderlistResponseDto);
    } catch (error) {
      throw new HttpException(500, `Error creating order: ${error.message}`);
    }
  }

  async updateOrderById(orderId: number, updateOrderDto: UpdateOrderlistDto): Promise<OrderlistResponseDto> {
    try {
      if (isNaN(orderId)) {
        throw new HttpException(400, 'ID must be an integer number');
      }
  
      const updatedOrder = await this.orderRepository.updateOrderById(orderId, updateOrderDto);
  
      if (!updatedOrder) {
        throw new HttpException(404, `Order with ID ${orderId} not found`);
      }
  
      // Check if any fields were updated
      if (updatedOrder[0] === 0) {
        throw new HttpException(400, 'No changes were made to the order');
      }
  
      return this.autoMapper.mapper.map(updatedOrder, OrderList, OrderlistResponseDto);
    } catch (error) {
      console.error('Error updating order:', error);
      throw new HttpException(500, `Error updating order: ${error.message}`);
    }
  }
  
  

  // Delete an order by ID and return success message
  async deleteOrderById(orderId: number): Promise<string> {
    try {
      const message = await this.orderRepository.deleteOrderById(orderId);
      return message;  
    } catch (error) {
      throw new HttpException(500, `Error deleting order: ${error.message}`);
    }
  }
}
