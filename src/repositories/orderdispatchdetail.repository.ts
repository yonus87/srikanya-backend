//src/repositories/orderdispatchdetail.repository.ts


import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import OrderDispatchDetail from '@/models/orderdispatchdetail';
import OrderList from '@/models/OrderList';  

@Service()
export class OrderDispatchDetailRepository {
  // Retrieve all order dispatch details, optionally filtered by orderId
  public async getAllOrderDispatchDetails(orderId?: number): Promise<OrderDispatchDetail[]> {
    try {
      const queryOptions: any = {
        include: [OrderList],  
      };

      if (orderId) {
        queryOptions.where = { orderId };
      }

      const orderDispatchDetails = await OrderDispatchDetail.findAll(queryOptions);
      return orderDispatchDetails;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order dispatch details: ${error.message}`);
    }
  }

  // Get an order dispatch detail by its ID
  public async getOrderDispatchDetailById(orderDispatchId: number): Promise<OrderDispatchDetail> {
    try {
      const orderDispatchDetail = await OrderDispatchDetail.findByPk(orderDispatchId, {
        include: [OrderList],  
      });

      if (!orderDispatchDetail) {
        throw new HttpException(404, 'Order dispatch detail not found');
      }

      return orderDispatchDetail;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order dispatch detail: ${error.message}`);
    }
  }

  // Create a new order dispatch detail
  public async createOrderDispatchDetail(createOrderDispatchDto: any, options?: any): Promise<OrderDispatchDetail> {
    try {
      const newOrderDispatchDetail = await OrderDispatchDetail.create(createOrderDispatchDto, options);

      if (!newOrderDispatchDetail) {
        throw new Error('Order dispatch detail was not created');
      }

      return newOrderDispatchDetail;
    } catch (error) {
      throw new HttpException(500, `Error creating order dispatch detail: ${error.message}`);
    }
  }

  // Update an existing order dispatch detail by its ID
  public async updateOrderDispatchDetailById(orderDispatchId: number, updateOrderDispatchDto: any): Promise<OrderDispatchDetail> {
    try {
      const orderDispatchDetail = await this.getOrderDispatchDetailById(orderDispatchId);
      const updatedOrderDispatchDetail = await orderDispatchDetail.update(updateOrderDispatchDto);
      return updatedOrderDispatchDetail;
    } catch (error) {
      throw new HttpException(500, `Error updating order dispatch detail: ${error.message}`);
    }
  }

  // Delete an order dispatch detail by its ID
  public async deleteOrderDispatchDetailById(orderDispatchId: number): Promise<{ message: string }> {
    try {
      const orderDispatchDetail = await this.getOrderDispatchDetailById(orderDispatchId);
      if (!orderDispatchDetail) {
        throw new HttpException(404, 'Order dispatch detail not found');
      }
      await orderDispatchDetail.destroy();
      return { message: 'Order dispatch detail deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting order dispatch detail: ${error.message}`);
    }
  }
}
