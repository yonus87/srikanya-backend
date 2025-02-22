//src/controllers/orderlist.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { OrderListService } from '@/services/orderlist.service';
import { CreateOrderlistDto, UpdateOrderlistDto, OrderlistResponseDto } from '@/dtos/orderlist.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

interface OrderFilters {
  status?: string;
  paymentStatus?: string;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
}

@Service()
@JsonController('/orderlist')
export class OrderListController {
  constructor(private readonly orderListService: OrderListService) {}

  // validate date format
  private isValidDate(dateString: string): boolean {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  }

  // Get all orders by locationId with optional filters, pagination, and sorting
  @Get('')
  @OpenAPI({
    summary: 'Get all orders by location ID',
    description: 'Returns a list of orders filtered by location ID with optional filters, pagination, and sorting',
  })
  async getAllOrdersByLocation(
    @QueryParam('locationId') locationId: number,
    @QueryParam('status') status?: string,
    @QueryParam('paymentStatus') paymentStatus?: string,
    @QueryParam('startDate') startDate?: string,
    @QueryParam('endDate') endDate?: string,
    @QueryParam('page') page: number = 1,
    @QueryParam('limit') limit: number = 10,
    @QueryParam('sortBy') sortBy: string = 'createdAt',
    @QueryParam('sortOrder') sortOrder: string = 'desc'
  ): Promise<OrderlistResponseDto[]> {
    try {
      // Validate date filters
      if (startDate && !this.isValidDate(startDate)) {
        throw new HttpException(400, 'Invalid start date format, expected YYYY-MM-DD');
      }
      if (endDate && !this.isValidDate(endDate)) {
        throw new HttpException(400, 'Invalid end date format, expected YYYY-MM-DD');
      }

      //  filters object
      const filters: OrderFilters = { status, paymentStatus, startDate, endDate, page, limit, sortBy, sortOrder };

      // Fetch orders with filters, pagination, and sorting
      return await this.orderListService.findAllByLocation(locationId, filters);
    } catch (error) {
      console.error('Error in getAllOrdersByLocation controller:', error);
      throw new HttpException(500, `Error retrieving orders: ${error.message}`);
    }
  }

  // Get an order by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get an order by ID',
    description: 'Returns details of a specific order by its ID',
  })
  async getOrderById(@Param('id') orderId: number): Promise<OrderlistResponseDto> {
    try {
      return await this.orderListService.getOrderById(orderId);
    } catch (error) {
      console.error('Error in getOrderById controller:', error);
      throw new HttpException(500, `Error retrieving order: ${error.message}`);
    }
  }

  // Create a new order
  @Post('')
  @OpenAPI({
    summary: 'Create a new order',
    description: 'Creates a new order and returns the created order details',
  })
  @UseBefore(validationMiddleware(CreateOrderlistDto))
  async createOrder(@Body() createOrderDto: CreateOrderlistDto): Promise<OrderlistResponseDto> {
    try {
      return await this.orderListService.createOrder(createOrderDto);
    } catch (error) {
      console.error('Error in createOrder controller:', error);
      throw new HttpException(500, `Error creating order: ${error.message}`);
    }
  }

  // Update an order by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update an order by ID',
    description: 'Updates the details of a specific order by its ID',
  })
  @UseBefore(validationMiddleware(UpdateOrderlistDto))  
  async updateOrderById(
    @Param('id') orderId: number,  
    @Body() updateOrderDto: UpdateOrderlistDto  
  ): Promise<OrderlistResponseDto> {
    if (isNaN(orderId)) {
      throw new HttpException(400, 'ID must be an integer number');
    }

    try {
      const updatedOrder = await this.orderListService.updateOrderById(orderId, updateOrderDto);
      
      if (!updatedOrder) {
        throw new HttpException(404, `Order with ID ${orderId} not found`);
      }

      return updatedOrder;
    } catch (error) {
      console.error('Error in updateOrderById controller:', error);
      throw new HttpException(500, `Error updating order: ${error.message}`);
    }
  }

  // Delete an order by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete an order by ID',
    description: 'Deletes a specific order by its ID',
  })
  async deleteOrderById(@Param('id') orderId: number): Promise<{ message: string }> {
    try {
      const deletedOrderMessage = await this.orderListService.deleteOrderById(orderId);
      if (!deletedOrderMessage) {
        throw new HttpException(404, `Order with ID ${orderId} not found`);
      }
      return { message: 'Order deleted successfully' };
    } catch (error) {
      console.error('Error in deleteOrderById controller:', error);
      throw new HttpException(500, `Error deleting order: ${error.message}`);
    }
  }
}
