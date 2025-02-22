//src/repositories/orderinventorydetail.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import OrderInventoryDetail from '@/models/orderinventorydetail';
import OrderList from '@/models/OrderList';
import InventoryList from '@/models/inventorylist';

@Service()
export class OrderInventoryDetailRepository {
  // Retrieve all OrderInventoryDetails
  public async getAllOrderInventoryDetails(): Promise<OrderInventoryDetail[]> {
    try {
      const orderInventoryDetails = await OrderInventoryDetail.findAll({
        include: [
          { model: OrderList, required: true },  
          { model: InventoryList, required: true }, 
        ],
      });
      return orderInventoryDetails;
    } catch (error) {
      throw new HttpException(500, `Error retrieving OrderInventoryDetails: ${error.message}`);
    }
  }

  // Get OrderInventoryDetail by ID
  public async getOrderInventoryDetailById(id: number): Promise<OrderInventoryDetail> {
    try {
      const orderInventoryDetail = await OrderInventoryDetail.findByPk(id, {
        include: [
          { model: OrderList, required: true },  
          { model: InventoryList, required: true }, 
        ],
      });
      if (!orderInventoryDetail) {
        throw new HttpException(404, 'OrderInventoryDetail not found');
      }
      return orderInventoryDetail;
    } catch (error) {
      throw new HttpException(500, `Error retrieving OrderInventoryDetail: ${error.message}`);
    }
  }

  // Create a new OrderInventoryDetail item
  public async createOrderInventoryDetail(createOrderInventoryDetailDto: any): Promise<OrderInventoryDetail> {
    try {
      const newOrderInventoryDetail = await OrderInventoryDetail.create(createOrderInventoryDetailDto);
      return newOrderInventoryDetail;
    } catch (error) {
      throw new HttpException(500, `Error creating OrderInventoryDetail: ${error.message}`);
    }
  }

  // Update an OrderInventoryDetail item by ID
  public async updateOrderInventoryDetailById(id: number, updateOrderInventoryDetailDto: any): Promise<OrderInventoryDetail> {
    try {
      const orderInventoryDetail = await this.getOrderInventoryDetailById(id);
      const updatedOrderInventoryDetail = await orderInventoryDetail.update(updateOrderInventoryDetailDto);
      return updatedOrderInventoryDetail;
    } catch (error) {
      throw new HttpException(500, `Error updating OrderInventoryDetail: ${error.message}`);
    }
  }

  // Delete an OrderInventoryDetail item by ID
  public async deleteOrderInventoryDetailById(id: number): Promise<{ message: string }> {
    try {
      const orderInventoryDetail = await this.getOrderInventoryDetailById(id);
      if (!orderInventoryDetail) {
        throw new HttpException(404, 'OrderInventoryDetail not found');
      }
      await orderInventoryDetail.destroy();
      return { message: 'OrderInventoryDetail deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting OrderInventoryDetail: ${error.message}`);
    }
  }
}
