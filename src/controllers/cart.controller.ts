//src/controllers/cart.controller.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, UseBefore, QueryParam } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { CartService } from '@/services/cart.service';
import { CreateCartDto, UpdateCartDto, CartResponseDto } from '@/dtos/cart.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  // Get all cart items
  @Get('')
  @OpenAPI({ summary: 'Get all cart items', description: 'Returns a list of all cart items' })
  async getAllCarts(): Promise<CartResponseDto[]> {
    try {
      return await this.cartService.getAll();
    } catch (error) {
      console.error('Error in getAllCarts controller:', error);
      throw new HttpException(500, `Error retrieving cart items: ${error.message}`);
    }
  }

  // Get cart item by ID
  @Get('/:id')
  @OpenAPI({ summary: 'Get a cart item by ID', description: 'Returns details of a specific cart item by its ID' })
  async getCartById(@Param('id') id: number): Promise<CartResponseDto> {
    try {
      return await this.cartService.getById(id);
    } catch (error) {
      console.error(`Error in getCartById controller for cart ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Cart item with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving cart item: ${error.message}`);
    }
  }

  // Create a new cart item
  @Post('')
  @OpenAPI({ summary: 'Create a new cart item', description: 'Creates a new cart item and returns the created details' })
  @UseBefore(validationMiddleware(CreateCartDto))
  async createCart(@Body() createCartDto: CreateCartDto): Promise<CartResponseDto> {
    try {
      return await this.cartService.create(createCartDto);
    } catch (error) {
      console.error('Error in createCart controller:', error);
      throw new HttpException(500, `Error creating cart item: ${error.message}`);
    }
  }

  // Update a cart item by ID
  @Put('/:id')
  @OpenAPI({ summary: 'Update a cart item by ID', description: 'Updates the details of a specific cart item by its ID' })
  @UseBefore(validationMiddleware(UpdateCartDto))
  async updateCartById(@Param('id') id: number, @Body() updateCartDto: UpdateCartDto): Promise<CartResponseDto> {
    try {
      return await this.cartService.update(id, updateCartDto);
    } catch (error) {
      console.error(`Error in updateCartById controller for cart ID ${id}:`, error);
      throw new HttpException(500, `Error updating cart item: ${error.message}`);
    }
  }

  // Delete a cart item by ID
  @Delete('/:id')
  @OpenAPI({ summary: 'Delete a cart item by ID', description: 'Deletes a specific cart item by its ID' })
  async deleteCartById(@Param('id') id: number): Promise<{ message: string }> {
    try {
      await this.cartService.delete(id);
      return { message: 'Cart item deleted successfully' };
    } catch (error) {
      console.error(`Error in deleteCartById controller for cart ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Cart item with ID ${id} not found`);
      }
      throw new HttpException(500, `Error deleting cart item: ${error.message}`);
    }
  }

  // Get all cart items by user ID
  @Get('/user/:userId')
  @OpenAPI({ summary: 'Get cart items by user ID', description: 'Returns all cart items for a specific user' })
  async getCartsByUserId(@Param('userId') userId: string): Promise<CartResponseDto[]> {
    try {
      return await this.cartService.getByUserId(userId);
    } catch (error) {
      console.error(`Error in getCartsByUserId controller for user ID ${userId}:`, error);
      throw new HttpException(500, `Error retrieving cart items for user: ${error.message}`);
    }
  }

  // Get all cart items by product ID
  @Get('/product/:productId')
  @OpenAPI({ summary: 'Get cart items by product ID', description: 'Returns all cart items containing a specific product' })
  async getCartsByProductId(@Param('productId') productId: number): Promise<CartResponseDto[]> {
    try {
      return await this.cartService.getByProductId(productId);
    } catch (error) {
      console.error(`Error in getCartsByProductId controller for product ID ${productId}:`, error);
      throw new HttpException(500, `Error retrieving cart items for product: ${error.message}`);
    }
  }
}
