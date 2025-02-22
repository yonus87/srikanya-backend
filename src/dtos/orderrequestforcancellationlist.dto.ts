//src/dtos/orderrequestforcancellationlist.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsString, IsBoolean, IsOptional, IsDate, IsNumber } from 'class-validator';

// OrderRequestForCancellationDto (DTO for Order Cancellation Request)
export class OrderRequestForCancellationDto {
  @AutoMap()
  @IsNumber()
  public id!: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  public reason?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  public active?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  public rejected?: boolean;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  public orderId?: number;
}

// CreateOrderRequestForCancellationDto (DTO for Creating an Order Cancellation Request)
export class CreateOrderRequestForCancellationDto {
  @AutoMap()
  @IsString()
  @IsOptional()
  public reason?: string;

  @AutoMap()
  @IsBoolean()
  public active!: boolean;

  @AutoMap()
  @IsBoolean()
  public rejected!: boolean;


  @AutoMap()
  @IsNumber()
  @IsOptional()
  public orderId?: number;
}

// UpdateOrderRequestForCancellationDto (DTO for Updating an Order Cancellation Request)
export class UpdateOrderRequestForCancellationDto {
  @AutoMap()
  @IsOptional()
  @IsNumber()
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public reason?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public active?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public rejected?: boolean;


  @AutoMap()
  @IsOptional()
  @IsNumber()
  public orderId?: number;
}

// OrderRequestForCancellationResponseDto (DTO for Order Cancellation Request Response)
export class OrderRequestForCancellationResponseDto {
  @AutoMap()
  @IsNumber()
  public id!: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  public reason?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  public active?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  public rejected?: boolean;



  @AutoMap()
  @IsNumber()
  @IsOptional()
  public orderId?: number;
}

// OrderRequestForCancellationListResponseDto (DTO for Order Cancellation List Response)
export class OrderRequestForCancellationListResponseDto {
  @AutoMap()
  @IsNumber()
  public id!: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  public reason?: string;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  public active?: boolean;

  @AutoMap()
  @IsBoolean()
  @IsOptional()
  public rejected?: boolean;



  @AutoMap()
  @IsNumber()
  @IsOptional()
  public orderId?: number;
}
