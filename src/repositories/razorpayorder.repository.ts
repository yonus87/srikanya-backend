import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import RazorpayOrder from '@/models/razorpayorder';
import OrderList from '@/models/OrderList';

@Service()
export class RazorpayOrderRepository {
  
  // Retrieve all Razorpay orders
  public async getAllRazorpayOrders(): Promise<RazorpayOrder[]> {
    try {
      const razorpayOrders = await RazorpayOrder.findAll({
        include: [
          { model: OrderList, as: 'order', attributes: ['id', 'orderStatus', 'totalCost'] },  
        ],
      });
      return razorpayOrders;
    } catch (error) {
      throw new HttpException(500, `Error retrieving Razorpay orders: ${error.message}`);
    }
  }

  // Get Razorpay order by ID
  public async getRazorpayOrderById(razorpayOrderId: number): Promise<RazorpayOrder> {
    try {
      const razorpayOrder = await RazorpayOrder.findByPk(razorpayOrderId, {
        include: [
          { model: OrderList, as: 'order', attributes: ['id', 'orderStatus', 'totalCost'] },  
        ],
      });

      if (!razorpayOrder) {
        throw new HttpException(404, 'Razorpay order not found');
      }

      return razorpayOrder;
    } catch (error) {
      throw new HttpException(500, `Error retrieving Razorpay order: ${error.message}`);
    }
  }

  // Create a new Razorpay order
  public async createRazorpayOrder(createRazorpayOrderDto: any): Promise<RazorpayOrder> {
    try {
      const newRazorpayOrder = await RazorpayOrder.create(createRazorpayOrderDto);
      return newRazorpayOrder;
    } catch (error) {
      throw new HttpException(500, `Error creating Razorpay order: ${error.message}`);
    }
  }

  // Update an existing Razorpay order by ID
  public async updateRazorpayOrderById(razorpayOrderId: number, updateRazorpayOrderDto: any): Promise<RazorpayOrder> {
    try {
      const razorpayOrder = await this.getRazorpayOrderById(razorpayOrderId);
      const updatedRazorpayOrder = await razorpayOrder.update(updateRazorpayOrderDto);
      return updatedRazorpayOrder;
    } catch (error) {
      throw new HttpException(500, `Error updating Razorpay order: ${error.message}`);
    }
  }

  // Delete a Razorpay order by ID
  public async deleteRazorpayOrderById(razorpayOrderId: number): Promise<{ message: string }> {
    try {
      const razorpayOrder = await this.getRazorpayOrderById(razorpayOrderId);
      if (!razorpayOrder) {
        throw new HttpException(404, 'Razorpay order not found');
      }

      await razorpayOrder.destroy();
      return { message: 'Razorpay order deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting Razorpay order: ${error.message}`);
    }
  }
}
