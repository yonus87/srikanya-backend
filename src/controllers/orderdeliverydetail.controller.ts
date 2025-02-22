//src/controllers/orderdeliverydetail.controller.ts


import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { OrderDeliveryDetailService } from '@/services/orderdeliverydetail.service';
import { CreateOrderDeliveryDetailDto, UpdateOrderDeliveryDetailDto, OrderDeliveryDetailResponseDto } from '@/dtos/orderdeliverydetail.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/orderdeliverydetail')
export class OrderDeliveryDetailController {
  constructor(private readonly orderDeliveryDetailService: OrderDeliveryDetailService) {}

  // Get all order delivery details
  @Get('')
  @OpenAPI({
    summary: 'Get all order delivery details',
    description: 'Returns a list of all order delivery details',
  })
  async getAllOrderDeliveryDetails(): Promise<{ orderDeliveryDetails: OrderDeliveryDetailResponseDto[] }> {
    try {
      const { orderDeliveryDetails } = await this.orderDeliveryDetailService.findAll();
      return { orderDeliveryDetails };
    } catch (error) {
      console.error('Error in getAllOrderDeliveryDetails controller:', error);
      throw new HttpException(500, `Error retrieving order delivery details: ${error.message}`);
    }
  }

  // Get an order delivery detail by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get an order delivery detail by ID',
    description: 'Returns details of a specific order delivery by its ID',
  })
  async getOrderDeliveryDetailById(@Param('id') id: number): Promise<OrderDeliveryDetailResponseDto> {
    try {
      const orderDeliveryDetail = await this.orderDeliveryDetailService.findById(id);
      return orderDeliveryDetail;
    } catch (error) {
      console.error(`Error in getOrderDeliveryDetailById controller for order ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Order delivery detail with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving order delivery detail: ${error.message}`);
    }
  }

  // Create a new order delivery detail
  @Post('')
  @OpenAPI({
    summary: 'Create a new order delivery detail',
    description: 'Creates a new order delivery detail and returns the created detail',
  })
  @UseBefore(validationMiddleware(CreateOrderDeliveryDetailDto))
  async createOrderDeliveryDetail(@Body() createOrderDeliveryDetailDto: CreateOrderDeliveryDetailDto): Promise<OrderDeliveryDetailResponseDto> {
    try {
      const newOrderDeliveryDetail = await this.orderDeliveryDetailService.create(createOrderDeliveryDetailDto);
      return newOrderDeliveryDetail;
    } catch (error) {
      console.error('Error in createOrderDeliveryDetail controller:', error);
      throw new HttpException(500, `Error creating order delivery detail: ${error.message}`);
    }
  }

  // Update an existing order delivery detail by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update an order delivery detail by ID',
    description: 'Updates the details of a specific order delivery by its ID',
  })
  @UseBefore(validationMiddleware(UpdateOrderDeliveryDetailDto))
  async updateOrderDeliveryDetailById(
    @Param('id') id: number,
    @Body() updateOrderDeliveryDetailDto: UpdateOrderDeliveryDetailDto
  ): Promise<OrderDeliveryDetailResponseDto> {
    try {
      const updatedOrderDeliveryDetail = await this.orderDeliveryDetailService.updateById(id, updateOrderDeliveryDetailDto);
      return updatedOrderDeliveryDetail;
    } catch (error) {
      console.error(`Error in updateOrderDeliveryDetailById controller for order ID ${id}:`, error);
      throw new HttpException(500, `Error updating order delivery detail: ${error.message}`);
    }
  }

  // Delete an order delivery detail by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete an order delivery detail by ID',
    description: 'Deletes a specific order delivery detail by its ID',
  })
  async deleteOrderDeliveryDetailById(@Param('id') id: number): Promise<{ message: string }> {
    try {
      await this.orderDeliveryDetailService.deleteById(id);
      return { message: 'Order delivery detail deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteOrderDeliveryDetailById controller for order ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Order delivery detail with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting order delivery detail: ${error.message}`);
    }
  }
}
