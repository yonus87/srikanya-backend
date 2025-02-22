import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { OrderInventoryDetailService } from '@/services/orderinventorydetail.service';
import { OrderInventoryDetailDto, CreateOrderInventoryDetailDto, UpdateOrderInventoryDetailDto, OrderInventoryDetailListResponseDto } from '@/dtos/orderinventorydetail.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/orderinventorydetail')
export class OrderInventoryDetailController {
  constructor(private readonly orderInventoryDetailService: OrderInventoryDetailService) {}

  // Get all order inventory details with optional order ID filter
  @Get('')
  @OpenAPI({
    summary: 'Get all order inventory details',
    description: 'Returns a list of all order inventory details, optionally filtered by order ID',
  })
  async getAllOrderInventoryDetails(
    @QueryParam('orderId', { required: false }) orderId?: number
  ): Promise<{ orderInventoryDetails: OrderInventoryDetailListResponseDto[] }> {
    try {
      // Call the service method correctly
      const orderInventoryDetails = await this.orderInventoryDetailService.getAllOrderInventoryDetails();

      // If orderId is provided, filter the results by orderId
      const filteredOrderInventoryDetails = orderId
        ? orderInventoryDetails.filter(detail => detail.orderId === orderId)
        : orderInventoryDetails;

      return { orderInventoryDetails: filteredOrderInventoryDetails };
    } catch (error) {
      console.error('Error in getAllOrderInventoryDetails controller:', error);
      throw new HttpException(500, `Error retrieving order inventory details: ${error.message}`);
    }
  }

  // Get an order inventory detail by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get an order inventory detail by ID',
    description: 'Returns details of a specific order inventory detail by its ID',
  })
  async getOrderInventoryDetailById(
    @Param('id') id: number
  ): Promise<OrderInventoryDetailDto> {
    try {
      const orderInventoryDetail = await this.orderInventoryDetailService.getOrderInventoryDetailById(id);
      return orderInventoryDetail;
    } catch (error) {
      console.error(`Error in getOrderInventoryDetailById controller for order inventory ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Order inventory detail with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving order inventory detail: ${error.message}`);
    }
  }

  // Create a new order inventory detail
  @Post('')
  @OpenAPI({
    summary: 'Create a new order inventory detail',
    description: 'Creates a new order inventory detail and returns the created detail',
  })
  @UseBefore(validationMiddleware(CreateOrderInventoryDetailDto))
  async createOrderInventoryDetail(
    @Body() createOrderInventoryDetailDto: CreateOrderInventoryDetailDto
  ): Promise<OrderInventoryDetailDto> {
    try {
      const newOrderInventoryDetail = await this.orderInventoryDetailService.createOrderInventoryDetail(createOrderInventoryDetailDto);
      return newOrderInventoryDetail;
    } catch (error) {
      console.error('Error in createOrderInventoryDetail controller:', error);
      throw new HttpException(500, `Error creating order inventory detail: ${error.message}`);
    }
  }

  // Update an existing order inventory detail by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update an order inventory detail by ID',
    description: 'Updates the details of a specific order inventory detail by its ID',
  })
  @UseBefore(validationMiddleware(UpdateOrderInventoryDetailDto))
  async updateOrderInventoryDetailById(
    @Param('id') id: number,
    @Body() updateOrderInventoryDetailDto: UpdateOrderInventoryDetailDto
  ): Promise<OrderInventoryDetailDto> {
    try {
      const updatedOrderInventoryDetail = await this.orderInventoryDetailService.updateOrderInventoryDetailById(id, updateOrderInventoryDetailDto);
      return updatedOrderInventoryDetail;
    } catch (error) {
      console.error(`Error in updateOrderInventoryDetailById controller for order inventory ID ${id}:`, error);
      throw new HttpException(500, `Error updating order inventory detail: ${error.message}`);
    }
  }

  // Delete an order inventory detail by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete an order inventory detail by ID',
    description: 'Deletes a specific order inventory detail by its ID',
  })
  async deleteOrderInventoryDetailById(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      await this.orderInventoryDetailService.deleteOrderInventoryDetailById(id);
      return { message: 'Order inventory detail deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteOrderInventoryDetailById controller for order inventory ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Order inventory detail with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting order inventory detail: ${error.message}`);
    }
  }
}
