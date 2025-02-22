// src/services/orderinvoicedetail.service.ts

import { Service } from 'typedi';
import { OrderInvoiceDetailRepository } from '@/repositories/orderinvoicedetail.repository';
import OrderInvoiceDetail from '@/models/orderinvoicedetail';
import { CreateOrderInvoiceDetailDto, UpdateOrderInvoiceDetailDto, OrderInvoiceDetailDto } from '@/dtos/orderinvoicedetail.dto';
import { AutoMapperManager } from '@/mapper-profiles/mapper';
import { HttpException } from '@/exceptions/HttpException';

@Service()
export class OrderInvoiceDetailService {
  constructor(
    private readonly repository: OrderInvoiceDetailRepository,
    private readonly mapperManager: AutoMapperManager,
  ) {}

  // Create a new order invoice detail
  async create(data: CreateOrderInvoiceDetailDto): Promise<OrderInvoiceDetailDto> {
    try {
      const entity = this.mapperManager.mapper.map(data, CreateOrderInvoiceDetailDto, OrderInvoiceDetail);
      const result = await this.repository.createOrderInvoiceDetail(entity);
      return this.mapperManager.mapper.map(result, OrderInvoiceDetail, OrderInvoiceDetailDto);
    } catch (error) {
      throw new HttpException(500, `Failed to create invoice: ${error.message}`);
    }
  }

  // Find all order invoice details
  async findAll(): Promise<OrderInvoiceDetailDto[]> {
    try {
      const entities = await this.repository.getAllOrderInvoiceDetails();
      return this.mapperManager.mapper.mapArray(entities, OrderInvoiceDetail, OrderInvoiceDetailDto);
    } catch (error) {
      throw new HttpException(500, `Failed to retrieve invoice details: ${error.message}`);
    }
  }

  // Find order invoice detail by ID
  async findById(id: number): Promise<OrderInvoiceDetailDto | undefined> {
    try {
      const entity = await this.repository.getOrderInvoiceDetailById(id);
      if (!entity) {
        throw new HttpException(404, 'Order invoice detail not found');
      }
      return this.mapperManager.mapper.map(entity, OrderInvoiceDetail, OrderInvoiceDetailDto);
    } catch (error) {
      throw new HttpException(500, `Failed to retrieve invoice by ID: ${error.message}`);
    }
  }

  // Update an order invoice detail by ID
  async update(id: number, data: UpdateOrderInvoiceDetailDto): Promise<OrderInvoiceDetailDto | null> {
    try {
      const updatedEntity = await this.repository.updateOrderInvoiceDetailById(id, data);
      if (!updatedEntity) throw new HttpException(404, 'Invoice not found');
      return this.mapperManager.mapper.map(updatedEntity, OrderInvoiceDetail, OrderInvoiceDetailDto);
    } catch (error) {
      throw new HttpException(500, `Failed to update invoice: ${error.message}`);
    }
  }

  // Delete an order invoice detail by ID
  async delete(id: number): Promise<boolean> {
    try {
      const result = await this.repository.deleteOrderInvoiceDetailById(id);
      if (result.message !== 'Order Invoice Detail deleted successfully') {
        throw new HttpException(404, 'Order invoice detail not found for deletion');
      }
      return true;
    } catch (error) {
      throw new HttpException(500, `Failed to delete invoice: ${error.message}`);
    }
  }


}
