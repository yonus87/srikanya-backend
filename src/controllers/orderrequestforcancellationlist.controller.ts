//src/controllers/orderrequestforcancellationlist.controller.ts


import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { OrderRequestForCancellationListService } from '@/services/orderrequestforcancellationlist.service';
import { CreateOrderRequestForCancellationDto, UpdateOrderRequestForCancellationDto, OrderRequestForCancellationResponseDto, OrderRequestForCancellationListResponseDto } from '@/dtos/orderrequestforcancellationlist.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/orderrequestforcancellationlist')
export class OrderRequestForCancellationListController {
  constructor(private readonly orderRequestForCancellationListService: OrderRequestForCancellationListService) {}

  // Get all cancellation requests with optional filters for order ID and active status
  @Get('')
  @OpenAPI({
    summary: 'Get all cancellation requests',
    description: 'Returns a list of all cancellation requests, optionally filtered by order ID and active status',
  })
  async getAllCancellationRequests(
    @QueryParam('orderId', { required: false }) orderId?: number,
    @QueryParam('active', { required: false }) active?: boolean
  ): Promise<{ cancellationRequests: OrderRequestForCancellationListResponseDto[] }> {
    try {
      const { cancellationRequests } = await this.orderRequestForCancellationListService.findAll(orderId, active);
      return { cancellationRequests };
    } catch (error) {
      console.error('Error in getAllCancellationRequests controller:', error);
      throw new HttpException(500, `Error retrieving cancellation requests: ${error.message}`);
    }
  }

  // Get a cancellation request by its ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get a cancellation request by ID',
    description: 'Returns details of a specific cancellation request by its ID',
  })
  async getCancellationRequestById(
    @Param('id') id: number
  ): Promise<OrderRequestForCancellationResponseDto> {
    try {
      const cancellationRequest = await this.orderRequestForCancellationListService.getCancellationRequestById(id);
      return cancellationRequest;
    } catch (error) {
      console.error(`Error in getCancellationRequestById controller for request ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Cancellation request with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving cancellation request: ${error.message}`);
    }
  }

  // Create a new cancellation request
  @Post('')
  @OpenAPI({
    summary: 'Create a new cancellation request',
    description: 'Creates a new cancellation request and returns the created request details',
  })
  @UseBefore(validationMiddleware(CreateOrderRequestForCancellationDto))
  async createCancellationRequest(
    @Body() createCancellationDto: CreateOrderRequestForCancellationDto
  ): Promise<OrderRequestForCancellationResponseDto> {
    try {
      const newCancellationRequest = await this.orderRequestForCancellationListService.createCancellationRequest(createCancellationDto);
      return newCancellationRequest;
    } catch (error) {
      console.error('Error in createCancellationRequest controller:', error);
      throw new HttpException(500, `Error creating cancellation request: ${error.message}`);
    }
  }

  // Update a cancellation request by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update a cancellation request by ID',
    description: 'Updates the details of a specific cancellation request by its ID',
  })
  @UseBefore(validationMiddleware(UpdateOrderRequestForCancellationDto))
  async updateCancellationRequestById(
    @Param('id') id: number,
    @Body() updateCancellationDto: UpdateOrderRequestForCancellationDto
  ): Promise<OrderRequestForCancellationResponseDto> {
    try {
      const updatedCancellationRequest = await this.orderRequestForCancellationListService.updateCancellationRequestById(id, updateCancellationDto);
      return updatedCancellationRequest;
    } catch (error) {
      console.error(`Error in updateCancellationRequestById controller for request ID ${id}:`, error);
      throw new HttpException(500, `Error updating cancellation request: ${error.message}`);
    }
  }

  // Delete a cancellation request by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete a cancellation request by ID',
    description: 'Deletes a specific cancellation request by its ID',
  })
  async deleteCancellationRequestById(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      await this.orderRequestForCancellationListService.deleteCancellationRequestById(id);
      return { message: 'Cancellation request deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteCancellationRequestById controller for request ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Cancellation request with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting cancellation request: ${error.message}`);
    }
  }
}
