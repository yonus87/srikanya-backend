//src/repositories/orderlist.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import OrderList from '@/models/OrderList';

@Service()
export class OrderRepository {

  /**
   * Retrieve all orders by locationId with optional filters and pagination.
   * @param locationId The ID of the location.
   * @param filters Optional filter parameters like orderStatus, paymentStatus, limit, and offset.
   * @returns A list of orders.
   */
  public async getAllOrdersByLocationId(locationId: number, filters: any = {}): Promise<OrderList[]> {
    try {
      const { orderStatus, paymentStatus, limit = 10, offset = 0 } = filters;
  
      // Validate filters
      if (orderStatus && !['pending', 'completed', 'cancelled'].includes(orderStatus)) {
        throw new HttpException(400, 'Invalid order status');
      }
      if (paymentStatus && !['paid', 'pending', 'failed'].includes(paymentStatus)) {
        throw new HttpException(400, 'Invalid payment status');
      }
  
      const whereConditions: any = { locationId };
  
      // Apply filters dynamically
      if (orderStatus) {
        whereConditions.orderStatus = orderStatus;
      }
      if (paymentStatus) {
        whereConditions.paymentStatus = paymentStatus;  
      }
  
      const orders = await OrderList.findAll({
        where: whereConditions,
        order: [['createdAt', 'DESC']],
        limit,
        offset
      });
  
      return orders;
    } catch (error) {
      throw new HttpException(500, `Error retrieving orders for locationId ${locationId}: ${error.message}`);
    }
  }
  

  /**
   * Get an order by its ID.
   * @param orderId The ID of the order.
   * @returns The order.
   */
  public async getOrderById(orderId: number): Promise<OrderList> {
    try {
      const order = await OrderList.findByPk(orderId);
      if (!order) {
        throw new HttpException(404, 'Order not found');
      }
      return order;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order: ${error.message}`);
    }
  }

  /**
   * Create a new order.
   * @param createOrderDto The DTO containing order details.
   * @returns The created order.
   */
  public async createOrder(createOrderDto: any): Promise<OrderList> {
    try {
      const newOrder = await OrderList.create(createOrderDto);
      return newOrder;
    } catch (error) {
      throw new HttpException(500, `Error creating order: ${error.message}`);
    }
  }

  /**
   * Update an existing order by ID.
   * @param orderId The ID of the order to update.
   * @param updateOrderDto The DTO containing updated order details.
   * @returns The updated order.
   */
  public async updateOrderById(orderId: number, updateOrderDto: any): Promise<OrderList> {
    try {
      if (isNaN(orderId)) {
        throw new HttpException(400, 'ID must be an integer number');
      }
  
      const order = await this.getOrderById(orderId);
      if (!order) {
        throw new HttpException(404, `Order with ID ${orderId} not found`);
      }
  
      const updatedOrder = await order.update(updateOrderDto);
      return updatedOrder;
    } catch (error) {
      console.error('Error updating order:', error); 
      throw new HttpException(500, `Error updating order: ${error.message}`);
    }
  }
  

  /**
   * Delete an order by ID.
   * @param orderId The ID of the order to delete.
   * @returns A success message.
   */
  public async deleteOrderById(orderId: number): Promise<string> {
    try {
      const order = await this.getOrderById(orderId); 
      await order.destroy();
      return 'Record deleted successfully'; 
    } catch (error) {
      throw new HttpException(500, `Error deleting order: ${error.message}`);
    }
  }
}
