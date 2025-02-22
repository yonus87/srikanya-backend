//src/dtos/razorpayorder.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsInt, IsOptional, IsString, IsDate } from 'class-validator';

// Base RazorpayOrder DTO
export class RazorpayOrderDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsInt()
  public amount!: number;

  @AutoMap()
  @IsString()
  public currency!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public razorpayOrderId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public extraInfo?: string;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;
}

// DTO for Creating RazorpayOrder
export class CreateRazorpayOrderDto {
  @AutoMap()
  @IsInt()
  public amount!: number;

  @AutoMap()
  @IsString()
  public currency!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public razorpayOrderId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public extraInfo?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;
}

// DTO for Updating RazorpayOrder
export class UpdateRazorpayOrderDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  public amount?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public currency?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public razorpayOrderId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public extraInfo?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;
}

// DTO for RazorpayOrder Response
export class RazorpayOrderResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsInt()
  public amount!: number;

  @AutoMap()
  @IsString()
  public currency!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public razorpayOrderId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public extraInfo?: string;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;
}

// DTO for RazorpayOrder List Response
export class RazorpayOrderListResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsInt()
  public amount!: number;

  @AutoMap()
  @IsString()
  public currency!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public razorpayOrderId?: string;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;
}
