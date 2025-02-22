import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import OrderRequestForCancellationList from '@/models/orderrequestforcancellationlist';
import OrderList from '@/models/OrderList';

@Service()
export class OrderRequestForCancellationListRepository {
  // Get all cancellation requests, optionally filtered by order ID or active status
  public async getAllCancellationRequests(orderId?: number, active?: boolean): Promise<OrderRequestForCancellationList[]> {
    try {
      const queryOptions: any = {
        include: [{ model: OrderList, as: 'OrderList' }],
      };

      // Filtering by orderId and active...
      if (orderId) {
        queryOptions.where = { orderId };
      }
      if (active !== undefined) {
        queryOptions.where = { ...queryOptions.where, active };
      }

      const cancellationRequests = await OrderRequestForCancellationList.findAll(queryOptions);
      return cancellationRequests;
    } catch (error) {
      throw new HttpException(500, `Error retrieving cancellation requests: ${error.message}`);
    }
  }

  // Get a single cancellation request by its ID
  public async getCancellationRequestById(cancellationRequestId: number): Promise<OrderRequestForCancellationList> {
    try {
      const cancellationRequest = await OrderRequestForCancellationList.findByPk(cancellationRequestId, {
        include: ['OrderList'],
      });

      if (!cancellationRequest) {
        throw new HttpException(404, 'Cancellation request not found');
      }

      return cancellationRequest;
    } catch (error) {
      throw new HttpException(500, `Error retrieving cancellation request: ${error.message}`);
    }
  }

  // Create a new cancellation request
  public async createCancellationRequest(createCancellationDto: any): Promise<OrderRequestForCancellationList> {
    try {
      const newCancellationRequest = await OrderRequestForCancellationList.create(createCancellationDto);
      return newCancellationRequest;
    } catch (error) {
      throw new HttpException(500, `Error creating cancellation request: ${error.message}`);
    }
  }

  // Update a cancellation request by ID
  public async updateCancellationRequestById(cancellationRequestId: number, updateCancellationDto: any): Promise<OrderRequestForCancellationList> {
    try {
      const cancellationRequest = await this.getCancellationRequestById(cancellationRequestId);
      const updatedCancellationRequest = await cancellationRequest.update(updateCancellationDto);
      return updatedCancellationRequest;
    } catch (error) {
      throw new HttpException(500, `Error updating cancellation request: ${error.message}`);
    }
  }

  // Delete a cancellation request by ID
  public async deleteCancellationRequestById(cancellationRequestId: number): Promise<{ message: string }> {
    try {
      const cancellationRequest = await this.getCancellationRequestById(cancellationRequestId);
      await cancellationRequest.destroy();
      return { message: 'Cancellation request deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting cancellation request: ${error.message}`);
    }
  }
}
