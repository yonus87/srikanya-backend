//src/repositories/cart.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import Cart from '@/models/cart';
import Product from '@/models/productlist';
import User from '@/models/user';

@Service()
export class CartRepository {
  // Retrieve all carts
  public async getAllCarts(): Promise<Cart[]> {
    try {
      const carts = await Cart.findAll({
        include: [Product, User], 
      });
      return carts;
    } catch (error) {
      throw new HttpException(500, `Error retrieving carts: ${error.message}`);
    }
  }

  // Get cart by ID
  public async getCartById(cartId: number): Promise<Cart> {
    try {
      const cart = await Cart.findByPk(cartId, {
        include: [Product, User], 
      });
      if (!cart) {
        throw new HttpException(404, 'Cart not found');
      }
      return cart;
    } catch (error) {
      throw new HttpException(500, `Error retrieving cart: ${error.message}`);
    }
  }

  // Create a new cart entry
  public async createCart(createCartDto: any): Promise<Cart> {
    try {
      const newCart = await Cart.create(createCartDto);
      return newCart;
    } catch (error) {
      throw new HttpException(500, `Error creating cart: ${error.message}`);
    }
  }

  // Update a cart entry by ID
  public async updateCartById(cartId: number, updateCartDto: any): Promise<Cart> {
    try {
      const cart = await this.getCartById(cartId);
      const updatedCart = await cart.update(updateCartDto);
      return updatedCart;
    } catch (error) {
      throw new HttpException(500, `Error updating cart: ${error.message}`);
    }
  }

  // Delete a cart entry by ID
  public async deleteCartById(cartId: number): Promise<{ message: string }> {
    try {
      const cart = await this.getCartById(cartId);
      if (!cart) {
        throw new HttpException(404, 'Cart not found');
      }
      await cart.destroy(); 
      return { message: 'Cart entry deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting cart: ${error.message}`);
    }
  }

  // Retrieve all carts for a specific user
  public async getCartsByUserId(userId: string): Promise<Cart[]> {
    try {
      const carts = await Cart.findAll({
        where: { userId },
        include: [Product], 
      });
      return carts;
    } catch (error) {
      throw new HttpException(500, `Error retrieving carts for user: ${error.message}`);
    }
  }

  // Retrieve all carts for a specific product
  public async getCartsByProductId(productId: number): Promise<Cart[]> {
    try {
      const carts = await Cart.findAll({
        where: { productId },
        include: [User], 
      });
      return carts;
    } catch (error) {
      throw new HttpException(500, `Error retrieving carts for product: ${error.message}`);
    }
  }
}
