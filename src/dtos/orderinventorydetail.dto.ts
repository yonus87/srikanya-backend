//src/dtos/orderinventorydetail.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsInt, IsDate, IsNotEmpty } from 'class-validator';

// DTO for OrderInventoryDetail Response
export class OrderInventoryDetailDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsOptional()
  public inventoryUsed?: number;

  @AutoMap()
  @IsOptional()
  public inventoryWasted?: number;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsInt()
  public orderId!: number;

  @AutoMap()
  @IsInt()
  public inventoryId!: number;
}

// DTO for Updating OrderInventoryDetail
export class UpdateOrderInventoryDetailDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public inventoryUsed?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public inventoryWasted?: number;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public createdAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public updatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public inventoryId?: number;
}

// DTO for Creating OrderInventoryDetail
export class CreateOrderInventoryDetailDto {
  @AutoMap()
  @IsNotEmpty()
  @IsInt()
  public inventoryUsed!: number;

  @AutoMap()
  @IsNotEmpty()
  @IsInt()
  public inventoryWasted!: number;

  @AutoMap()
  @IsNotEmpty()
  @IsInt()
  public orderId!: number;

  @AutoMap()
  @IsNotEmpty()
  @IsInt()
  public inventoryId!: number;
}

// DTO for OrderInventoryDetail List Response
export class OrderInventoryDetailListResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsInt()
  public inventoryUsed!: number;

  @AutoMap()
  @IsInt()
  public inventoryWasted!: number;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsInt()
  public orderId!: number;

  @AutoMap()
  @IsInt()
  public inventoryId!: number;
}
