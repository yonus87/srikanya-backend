//src/controllers/sellerlist.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { SellerListService } from '@/services/sellerlist.service';
import { CreateSellerDto, UpdateSellerListDto, SellerListDto } from '@/dtos/sellerlist.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/seller-list')
export class SellerListController {
  constructor(private readonly sellerListService: SellerListService) {}

  // Get all sellers
  @Get('')
  @OpenAPI({
    summary: 'Get all sellers',
    description: 'Returns a list of all sellers',
  })
  async getAllSellers(): Promise<SellerListDto[]> {
    try {
      const sellers = await this.sellerListService.getAllSellers();
      return sellers;
    } catch (error) {
      console.error('Error in getAllSellers controller:', error);
      throw new HttpException(500, `Error retrieving sellers: ${error.message}`);
    }
  }

  // Get a seller by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get seller by ID',
    description: 'Returns the details of a specific seller by its ID',
  })
  async getSellerById(
    @Param('id') id: number
  ): Promise<SellerListDto | undefined> {
    try {
      const seller = await this.sellerListService.getSellerById(id);
      if (!seller) {
        throw new HttpException(404, `Seller with ID ${id} not found`);
      }
      return seller;
    } catch (error) {
      console.error(`Error in getSellerById controller for seller ID ${id}:`, error);
      throw new HttpException(500, `Error retrieving seller: ${error.message}`);
    }
  }

  // Create a new seller
  @Post('')
  @OpenAPI({
    summary: 'Create a new seller',
    description: 'Creates a new seller and returns the created seller details',
  })
  @UseBefore(validationMiddleware(CreateSellerDto))
  @ResponseSchema(SellerListDto, {
    contentType: 'application/json',
    description: 'Created seller data',
    statusCode: '201',
    isArray: false,
  })
  async createSeller(
    @Body() sellerData: CreateSellerDto
  ): Promise<SellerListDto> {
    try {
      return await this.sellerListService.create(sellerData);
    } catch (error) {
      console.error('Error in createSeller controller:', error);
      throw new HttpException(500, `Error creating seller: ${error.message}`);
    }
  }

  // Update an existing seller by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update seller by ID',
    description: 'Updates the details of a specific seller by its ID',
  })
  @UseBefore(validationMiddleware(UpdateSellerListDto))
  @ResponseSchema(SellerListDto, {
    contentType: 'application/json',
    description: 'Updated seller data',
    statusCode: '200',
    isArray: false,
  })
  async updateSeller(
    @Param('id') id: number,
    @Body() sellerData: UpdateSellerListDto
  ): Promise<SellerListDto | null> {
    try {
      return await this.sellerListService.updateSellerById(id, sellerData);
    } catch (error) {
      console.error(`Error in updateSeller controller for seller ID ${id}:`, error);
      throw new HttpException(500, `Error updating seller: ${error.message}`);
    }
  }

  // Delete a seller by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete seller by ID',
    description: 'Deletes a specific seller by its ID',
  })
  async deleteSeller(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      const result = await this.sellerListService.deleteSellerById(id);
      if (!result) {
        throw new HttpException(404, `Seller with ID ${id} not found or already deleted`);
      }
      return { message: 'Seller successfully deleted' };
    } catch (error) {
      console.error(`Error in deleteSeller controller for seller ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Seller with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting seller: ${error.message}`);
    }
  }

  // Disable a seller by ID
  @Put('/:id/disable')
  @OpenAPI({
    summary: 'Disable seller by ID',
    description: 'Disables a specific seller by its ID',
  })
  async disableSeller(
    @Param('id') id: number
  ): Promise<SellerListDto> {
    try {
      return await this.sellerListService.disableSellerById(id);
    } catch (error) {
      console.error(`Error in disableSeller controller for seller ID ${id}:`, error);
      throw new HttpException(500, `Error disabling seller: ${error.message}`);
    }
  }

  // Enable a seller by ID
  @Put('/:id/enable')
  @OpenAPI({
    summary: 'Enable seller by ID',
    description: 'Enables a specific seller by its ID',
  })
  async enableSeller(
    @Param('id') id: number
  ): Promise<SellerListDto> {
    try {
      return await this.sellerListService.enableSellerById(id);
    } catch (error) {
      console.error(`Error in enableSeller controller for seller ID ${id}:`, error);
      throw new HttpException(500, `Error enabling seller: ${error.message}`);
    }
  }
}
