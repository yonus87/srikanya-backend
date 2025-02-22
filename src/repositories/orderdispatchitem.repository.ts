//src/repositories/orderdispatchitem.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import OrderDispatchItem from '@/models/orderdispatchitem';
import OrderItem from '@/models/orderitem';
import OrderDispatchDetail from '@/models/orderdispatchdetail';

@Service()
export class OrderDispatchItemRepository {
  
  // Retrieve all order dispatch items, 
  public async getAllOrderDispatchItems(orderDispatchId?: number, orderItemId?: number): Promise<OrderDispatchItem[]> {
    try {
      const queryOptions: any = {
        include: [OrderItem, OrderDispatchDetail],
      };

      if (orderDispatchId) {
        queryOptions.where = { orderDispatchId };
      }

      if (orderItemId) {
        queryOptions.where = { ...queryOptions.where, orderItemId };
      }

      const orderDispatchItems = await OrderDispatchItem.findAll(queryOptions);
      return orderDispatchItems;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order dispatch items: ${error.message}`);
    }
  }

  // Get an order dispatch item by its ID
  public async getOrderDispatchItemById(orderDispatchItemId: number): Promise<OrderDispatchItem> {
    try {
      const orderDispatchItem = await OrderDispatchItem.findByPk(orderDispatchItemId, {
        include: [OrderItem, OrderDispatchDetail],
      });

      if (!orderDispatchItem) {
        throw new HttpException(404, 'Order dispatch item not found');
      }

      return orderDispatchItem;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order dispatch item: ${error.message}`);
    }
  }

  // Create a new order dispatch item
  public async createOrderDispatchItem(createOrderDispatchDto: any, options?: any): Promise<OrderDispatchItem> {
    try {
      const newOrderDispatchItem = await OrderDispatchItem.create(createOrderDispatchDto, options);

      if (!newOrderDispatchItem) {
        throw new Error('Order dispatch item was not created');
      }

      return newOrderDispatchItem;
    } catch (error) {
      throw new HttpException(500, `Error creating order dispatch item: ${error.message}`);
    }
  }

  // Update an existing order dispatch item by its ID
  public async updateOrderDispatchItemById(orderDispatchItemId: number, updateOrderDispatchDto: any): Promise<OrderDispatchItem> {
    try {
      const orderDispatchItem = await this.getOrderDispatchItemById(orderDispatchItemId);
      const updatedOrderDispatchItem = await orderDispatchItem.update(updateOrderDispatchDto);
      return updatedOrderDispatchItem;
    } catch (error) {
      throw new HttpException(500, `Error updating order dispatch item: ${error.message}`);
    }
  }

  // Delete an order dispatch item by its ID
  public async deleteOrderDispatchItemById(orderDispatchItemId: number): Promise<{ message: string }> {
    try {
      const orderDispatchItem = await this.getOrderDispatchItemById(orderDispatchItemId);
      if (!orderDispatchItem) {
        throw new HttpException(404, 'Order dispatch item not found');
      }
      await orderDispatchItem.destroy();
      return { message: 'Order dispatch item deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting order dispatch item: ${error.message}`);
    }
  }
}
