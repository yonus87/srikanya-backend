//src/repositories/orderinvoicedetail.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import OrderInvoiceDetail from '@/models/orderinvoicedetail';
import OrderList from '@/models/OrderList';

@Service()
export class OrderInvoiceDetailRepository {
  
  // Retrieve all order invoice details
  public async getAllOrderInvoiceDetails(): Promise<OrderInvoiceDetail[]> {
    try {
      const invoiceDetails = await OrderInvoiceDetail.findAll({
        include: [
          {
            model: OrderList,
            as: 'order',
            required: false,  
          }
        ]
      });
      return invoiceDetails;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order invoice details: ${error.message}`);
    }
  }

  // Get order invoice detail by ID
  public async getOrderInvoiceDetailById(invoiceId: number): Promise<OrderInvoiceDetail> {
    try {
      const invoiceDetail = await OrderInvoiceDetail.findByPk(invoiceId, {
        include: [
          {
            model: OrderList,
            as: 'order',  
            required: false, 
          }
        ]
      });

      if (!invoiceDetail) {
        throw new HttpException(404, 'Order Invoice Detail not found');
      }

      return invoiceDetail;
    } catch (error) {
      throw new HttpException(500, `Error retrieving order invoice detail: ${error.message}`);
    }
  }

  // Create a new order invoice detail
  public async createOrderInvoiceDetail(createInvoiceDto: any): Promise<OrderInvoiceDetail> {
    try {
      const newInvoiceDetail = await OrderInvoiceDetail.create(createInvoiceDto);
      return newInvoiceDetail;
    } catch (error) {
      throw new HttpException(500, `Error creating order invoice detail: ${error.message}`);
    }
  }

  // Update an order invoice detail by ID
  public async updateOrderInvoiceDetailById(invoiceId: number, updateInvoiceDto: any): Promise<OrderInvoiceDetail> {
    try {
      const invoiceDetail = await this.getOrderInvoiceDetailById(invoiceId);
      const updatedInvoiceDetail = await invoiceDetail.update(updateInvoiceDto);
      return updatedInvoiceDetail;
    } catch (error) {
      throw new HttpException(500, `Error updating order invoice detail: ${error.message}`);
    }
  }

  // Delete an order invoice detail by ID
  public async deleteOrderInvoiceDetailById(invoiceId: number): Promise<{ message: string }> {
    try {
      const invoiceDetail = await this.getOrderInvoiceDetailById(invoiceId);
      if (!invoiceDetail) {
        throw new HttpException(404, 'Order Invoice Detail not found');
      }
      await invoiceDetail.destroy();
      return { message: 'Order Invoice Detail deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting order invoice detail: ${error.message}`);
    }
  }

  
}
