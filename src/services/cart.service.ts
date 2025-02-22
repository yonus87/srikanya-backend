//src/services/cart.service.ts

import { Service } from 'typedi';
import { CartRepository } from '@/repositories/cart.repository';
import { HttpException } from '@/exceptions/HttpException';
import { CartDto, CreateCartDto, UpdateCartDto, CartResponseDto, CartListResponseDto } from '@/dtos/cart.dto';
import Cart from '@/models/cart';
import { AutoMapperManager } from '@/mapper-profiles/mapper';

@Service()
export class CartService {
  constructor(
    private cartRepository: CartRepository,
    private mapperManager: AutoMapperManager
  ) {}

  // Create a new cart entry
  async create(createCartDto: CreateCartDto): Promise<CartDto> {
    try {
      const cartData = this.mapperManager.mapper.map(createCartDto, CreateCartDto, Cart);
      const newCart = await this.cartRepository.createCart(cartData);
      return this.mapperManager.mapper.map(newCart, Cart, CartDto);
    } catch (error) {
      console.error('Error in CartService during create:', error);
      throw new HttpException(500, 'Failed to create cart entry');
    }
  }

  // Get all carts
  async getAll(): Promise<CartDto[]> {
    try {
      const carts = await this.cartRepository.getAllCarts();
      return this.mapperManager.mapper.mapArray(carts, Cart, CartDto);
    } catch (error) {
      console.error('Error in CartService while fetching all carts:', error);
      throw new HttpException(500, 'Failed to fetch carts');
    }
  }

  // Get cart by ID
  async getById(cartId: number): Promise<CartDto> {
    try {
      const cart = await this.cartRepository.getCartById(cartId);
      return this.mapperManager.mapper.map(cart, Cart, CartDto);
    } catch (error) {
      console.error('Error in CartService while fetching cart by ID:', error);
      throw new HttpException(500, 'Failed to fetch cart');
    }
  }

  // Update cart by ID
  async update(cartId: number, updateCartDto: UpdateCartDto): Promise<CartDto> {
    try {
      const cartData = this.mapperManager.mapper.map(updateCartDto, UpdateCartDto, Cart);
      const updatedCart = await this.cartRepository.updateCartById(cartId, cartData);
      return this.mapperManager.mapper.map(updatedCart, Cart, CartDto);
    } catch (error) {
      console.error('Error in CartService while updating cart:', error);
      throw new HttpException(500, 'Failed to update cart');
    }
  }

  // Delete cart by ID
  async delete(cartId: number): Promise<{ message: string }> {
    try {
      return await this.cartRepository.deleteCartById(cartId);
    } catch (error) {
      console.error('Error in CartService while deleting cart:', error);
      throw new HttpException(500, 'Failed to delete cart');
    }
  }

  // Get all carts by user ID
  async getByUserId(userId: string): Promise<CartDto[]> {
    try {
      const carts = await this.cartRepository.getCartsByUserId(userId);
      return this.mapperManager.mapper.mapArray(carts, Cart, CartDto);
    } catch (error) {
      console.error('Error in CartService while fetching carts by user ID:', error);
      throw new HttpException(500, 'Failed to fetch carts for the user');
    }
  }

  // Get all carts by product ID
  async getByProductId(productId: number): Promise<CartDto[]> {
    try {
      const carts = await this.cartRepository.getCartsByProductId(productId);
      return this.mapperManager.mapper.mapArray(carts, Cart, CartDto);
    } catch (error) {
      console.error('Error in CartService while fetching carts by product ID:', error);
      throw new HttpException(500, 'Failed to fetch carts for the product');
    }
  }
}

