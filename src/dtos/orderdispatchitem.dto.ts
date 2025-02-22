import { AutoMap } from '@automapper/classes';
import { IsInt, IsOptional, IsNumber, IsDate } from 'class-validator';
import { Type as ClassTransformerType } from 'class-transformer';  // Corrected import

// DTO for Order Dispatch Item
export class OrderDispatchItemDto {
  @AutoMap()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public id!: number;

  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public quantityWasted?: number;

  @AutoMap()
  @IsDate()
  @ClassTransformerType(() => Date)
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  @ClassTransformerType(() => Date)
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public orderItemId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public orderDispatchId?: number | null;
}

// DTO for Creating an Order Dispatch Item
export class CreateOrderDispatchItemDto {
  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public quantityWasted?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public orderItemId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public orderDispatchId?: number | null;
}

// DTO for Updating an Order Dispatch Item
export class UpdateOrderDispatchItemDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public quantityWasted?: number;

  @AutoMap()
  @IsOptional()
  @IsDate()
  @ClassTransformerType(() => Date)
  public createdAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  @ClassTransformerType(() => Date)
  public updatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public orderItemId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public orderDispatchId?: number | null;
}

// DTO for Order Dispatch Item Response (Single/Multiple)
export class OrderDispatchItemResponseDto {
  @AutoMap()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public id!: number;

  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public quantityWasted?: number;

  @AutoMap()
  @IsDate()
  @ClassTransformerType(() => Date)
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  @ClassTransformerType(() => Date)
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public orderItemId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public orderDispatchId?: number | null;
}

// Refactored DTO for Order Dispatch Item Response (for lists)
export class OrderDispatchItemListResponseDto {
  @AutoMap()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public id!: number;

  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public quantityWasted?: number;

  @AutoMap()
  @IsDate()
  @ClassTransformerType(() => Date)
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  @ClassTransformerType(() => Date)
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public orderItemId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @ClassTransformerType(() => Number)  
  public orderDispatchId?: number | null;
}
