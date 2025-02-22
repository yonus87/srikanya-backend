// src/dtos/orderitem.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

// Base OrderItem DTO
export class OrderItemDto {
  @AutoMap()
  @IsNumber()
  public id!: number;

  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsString()
  public quantityUnit!: string;

  @AutoMap()
  @IsNumber()
  public primaryRate!: number;

  @AutoMap()
  @IsNumber()
  public cgstPercent!: number;

  @AutoMap()
  @IsNumber()
  public igstPercent!: number;

  @AutoMap()
  @IsNumber()
  public sgstPercent!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public conversionRatio?: number;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productId?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public orderId?: number;
}

// DTO for Updating OrderItem
export class UpdateOrderItemDto {
  @AutoMap()
  @IsNumber()
  public id!: number;

  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsString()
  public quantityUnit!: string;

  @AutoMap()
  @IsNumber()
  public primaryRate!: number;

  @AutoMap()
  @IsNumber()
  public cgstPercent!: number;

  @AutoMap()
  @IsNumber()
  public igstPercent!: number;

  @AutoMap()
  @IsNumber()
  public sgstPercent!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public conversionRatio?: number;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productId?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public orderId?: number;
}

// DTO for Creating an OrderItem
export class CreateOrderItemDto {
 
  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsString()
  public quantityUnit!: string;

  @AutoMap()
  @IsNumber()
  public primaryRate!: number;

  @AutoMap()
  @IsNumber()
  public cgstPercent!: number;

  @AutoMap()
  @IsNumber()
  public igstPercent!: number;

  @AutoMap()
  @IsNumber()
  public sgstPercent!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public conversionRatio?: number;


  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productId?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public orderId?: number;
}

// DTO for OrderItem Response
export class OrderItemResponseDto {
  @AutoMap()
  @IsNumber()
  public id!: number;

  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsString()
  public quantityUnit!: string;

  @AutoMap()
  @IsNumber()
  public primaryRate!: number;

  @AutoMap()
  @IsNumber()
  public cgstPercent!: number;

  @AutoMap()
  @IsNumber()
  public igstPercent!: number;

  @AutoMap()
  @IsNumber()
  public sgstPercent!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public conversionRatio?: number;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productId?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public orderId?: number;
}

// DTO for OrderItem List Response
export class OrderItemListResponseDto {
  @AutoMap()
  @IsNumber()
  public id!: number;

  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsString()
  public quantityUnit!: string;

  @AutoMap()
  @IsNumber()
  public primaryRate!: number;

  @AutoMap()
  @IsNumber()
  public cgstPercent!: number;

  @AutoMap()
  @IsNumber()
  public igstPercent!: number;

  @AutoMap()
  @IsNumber()
  public sgstPercent!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public conversionRatio?: number;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productId?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public orderId?: number;
}
