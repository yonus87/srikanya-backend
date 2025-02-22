//src/repositories/orderitem.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import OrderItem from '@/models/orderitem';
import ProductList from '@/models/productlist';
import OrderList from '@/models/OrderList';

@Service()
export class OrderItemRepository {

  // Retrieve all order items
  public async getAllOrderItems(): Promise<OrderItem[]> {
    try {
      const orderItems = await OrderItem.findAll({
        include: [
          { model: ProductList, attributes: ['id', 'name'] }, 
          { model: OrderList, attributes: ['id', 'orderStatus', 'totalCost'] } 
        ]
      });
      return orderItems;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order items: ${error.message}`);
    }
  }

  // Get order item by ID
  public async getOrderItemById(orderItemId: number): Promise<OrderItem> {
    try {
      const orderItem = await OrderItem.findByPk(orderItemId, {
        include: [
            { model: ProductList, attributes: ['id', 'name'] }, 
            { model: OrderList, attributes: ['id', 'orderStatus', 'totalCost'] } 
        ]
      });

      if (!orderItem) {
        throw new HttpException(404, 'Order item not found');
      }

      return orderItem;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order item: ${error.message}`);
    }
  }

  // Create a new order item
  public async createOrderItem(createOrderItemDto: any): Promise<OrderItem> {
    try {
      const newOrderItem = await OrderItem.create(createOrderItemDto);
      return newOrderItem;
    } catch (error) {
      throw new HttpException(500, `Error creating order item: ${error.message}`);
    }
  }

  // Update an order item by ID
  public async updateOrderItemById(orderItemId: number, updateOrderItemDto: any): Promise<OrderItem> {
    try {
      const orderItem = await this.getOrderItemById(orderItemId);
      const updatedOrderItem = await orderItem.update(updateOrderItemDto);
      return updatedOrderItem;
    } catch (error) {
      throw new HttpException(500, `Error updating order item: ${error.message}`);
    }
  }

  // Delete an order item by ID
  public async deleteOrderItemById(orderItemId: number): Promise<{ message: string }> {
    try {
      const orderItem = await this.getOrderItemById(orderItemId);
      if (!orderItem) {
        throw new HttpException(404, 'Order item not found');
      }

      await orderItem.destroy();
      return { message: 'Order item deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting order item: ${error.message}`);
    }
  }

}
