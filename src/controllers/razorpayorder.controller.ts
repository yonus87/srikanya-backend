//src/controllers/razorpayorder.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { RazorpayOrderService } from '@/services/razorpayorder.service';
import {RazorpayOrderDto,CreateRazorpayOrderDto,UpdateRazorpayOrderDto,RazorpayOrderResponseDto,RazorpayOrderListResponseDto,} from '@/dtos/razorpayorder.dto'; 
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/razorpayorders')
export class RazorpayOrderController {
  constructor(private readonly razorpayOrderService: RazorpayOrderService) {}

  // Get all Razorpay orders
  @Get('')
  @OpenAPI({
    summary: 'Get all Razorpay orders',
    description: 'Returns a list of all Razorpay orders',
  })
  async getAllRazorpayOrders(): Promise<RazorpayOrderDto[]> {
    try {
      const razorpayOrders = await this.razorpayOrderService.getAll();
      return razorpayOrders;
    } catch (error) {
      console.error('Error in getAllRazorpayOrders controller:', error);
      throw new HttpException(500, `Error retrieving Razorpay orders: ${error.message}`);
    }
  }

  // Get Razorpay order by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get Razorpay order by ID',
    description: 'Returns the details of a specific Razorpay order by its ID',
  })
  async getRazorpayOrderById(@Param('id') id: number): Promise<RazorpayOrderDto> {
    try {
      const razorpayOrder = await this.razorpayOrderService.getById(id);
      return razorpayOrder;
    } catch (error) {
      console.error(`Error in getRazorpayOrderById controller for Razorpay order ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Razorpay order with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving Razorpay order: ${error.message}`);
    }
  }

  // Create a new Razorpay order
  @Post('')
  @OpenAPI({
    summary: 'Create a new Razorpay order',
    description: 'Creates a new Razorpay order and returns the created details',
  })
  async createRazorpayOrder(@Body() createRazorpayOrderDto: CreateRazorpayOrderDto): Promise<RazorpayOrderDto> {
    try {
      const newRazorpayOrder = await this.razorpayOrderService.create(createRazorpayOrderDto);
      return newRazorpayOrder;
    } catch (error) {
      console.error('Error in createRazorpayOrder controller:', error);
      throw new HttpException(500, `Error creating Razorpay order: ${error.message}`);
    }
  }

  // Update Razorpay order by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update a Razorpay order by ID',
    description: 'Updates the details of a specific Razorpay order by its ID',
  })
  async updateRazorpayOrderById(
    @Param('id') id: number,
    @Body() updateRazorpayOrderDto: UpdateRazorpayOrderDto
  ): Promise<RazorpayOrderDto> {
    try {
      const updatedRazorpayOrder = await this.razorpayOrderService.update(id, updateRazorpayOrderDto);
      return updatedRazorpayOrder;
    } catch (error) {
      console.error(`Error in updateRazorpayOrderById controller for Razorpay order ID ${id}:`, error);
      throw new HttpException(500, `Error updating Razorpay order: ${error.message}`);
    }
  }

  // Delete Razorpay order by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete a Razorpay order by ID',
    description: 'Deletes a specific Razorpay order by its ID',
  })
  async deleteRazorpayOrderById(@Param('id') id: number): Promise<{ message: string }> {
    try {
      await this.razorpayOrderService.delete(id);
      return { message: 'Razorpay order deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteRazorpayOrderById controller for Razorpay order ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Razorpay order with ID ${id} not found`);
      }
      throw new HttpException(500, `Error deleting Razorpay order: ${error.message}`);
    }
  }
}
