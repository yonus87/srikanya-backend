//src/repositories/orderdeliverydetail.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import OrderDeliveryDetail from '@/models/orderdeliverydetail';
import OrderDispatchDetail from '@/models/orderdispatchdetail';

@Service()
export class OrderDeliveryDetailRepository {
  // Retrieve all order delivery details
  public async getAllOrderDeliveryDetails(): Promise<OrderDeliveryDetail[]> {
    try {
      return await OrderDeliveryDetail.findAll({
        include: [{ model: OrderDispatchDetail, as: 'orderDispatch' }],
      });
    } catch (error) {
      throw new HttpException(500, `Error retrieving order delivery details: ${error.message}`);
    }
  }

  // Get a single order delivery detail by ID
  public async getOrderDeliveryDetailById(id: number): Promise<OrderDeliveryDetail> {
    try {
      const orderDeliveryDetail = await OrderDeliveryDetail.findByPk(id, {
        include: [{ model: OrderDispatchDetail, as: 'orderDispatch' }],
      });
      if (!orderDeliveryDetail) {
        throw new HttpException(404, 'Order delivery detail not found');
      }
      return orderDeliveryDetail;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order delivery detail: ${error.message}`);
    }
  }

  // Create a new order delivery detail
  public async createOrderDeliveryDetail(data: any): Promise<OrderDeliveryDetail> {
    try {
      return await OrderDeliveryDetail.create(data);
    } catch (error) {
      throw new HttpException(500, `Error creating order delivery detail: ${error.message}`);
    }
  }

  // Update an order delivery detail by ID
  public async updateOrderDeliveryDetailById(id: number, data: any): Promise<OrderDeliveryDetail> {
    try {
      const orderDeliveryDetail = await this.getOrderDeliveryDetailById(id);
      return await orderDeliveryDetail.update(data);
    } catch (error) {
      throw new HttpException(500, `Error updating order delivery detail: ${error.message}`);
    }
  }

  // Delete an order delivery detail by ID
  public async deleteOrderDeliveryDetailById(id: number): Promise<{ message: string }> {
    try {
      const orderDeliveryDetail = await this.getOrderDeliveryDetailById(id);
      await orderDeliveryDetail.destroy();
      return { message: 'Order delivery detail deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting order delivery detail: ${error.message}`);
    }
  }
}
