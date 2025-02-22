import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsString, IsOptional, IsInt, IsDate, IsNumber,Length,Min} from 'class-validator';
import { Type } from 'class-transformer';

// DTO for Inventory Transaction
export class InventoryTransactionDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public sellerId!: number;

  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public inventoryId!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50)
  public invoiceId!: string;

  @AutoMap()
  @IsDate()
  @Type(() => Date)
  public purchaseDate!: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public vehicleNumber?: string;

  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsNumber()
  public remainingQuantity!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public transportationCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public loadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public unloadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public sgstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public cgstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public igstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public otherCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsBoolean()
  public inventoryUsed!: boolean;

  @AutoMap()
  @IsString()
  @Length(1, 50)
  public updatedBy!: string;

  @AutoMap()
  @IsDate()
  @Type(() => Date)
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  @Type(() => Date)
  public updatedAt!: Date;
}

export class CreateInventoryTransactionDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public sellerId!: number;

  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public inventoryId!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50)
  public invoiceId!: string;

  @AutoMap()
  @IsDate()
  @Type(() => Date)
  public purchaseDate!: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public vehicleNumber?: string;

  @AutoMap()
  @IsNumber()
  @Min(0) // Ensures quantity cannot be negative
  public quantity!: number;

  @AutoMap()
  @IsNumber()
  @Min(0) // Ensures remainingQuantity cannot be negative
  public remainingQuantity!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0) // Ensures cost cannot be negative
  public productCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0) // Ensures cost cannot be negative
  public transportationCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0) // Ensures cost cannot be negative
  public loadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0) // Ensures cost cannot be negative
  public unloadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0) // Ensures cost cannot be negative
  public sgstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0) // Ensures cost cannot be negative
  public cgstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0) // Ensures cost cannot be negative
  public igstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0) // Ensures cost cannot be negative
  public otherCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0) // Ensures cost cannot be negative
  public totalCost?: number;

  @AutoMap()
  @IsBoolean()
  public inventoryUsed!: boolean;

  @AutoMap()
  @IsString()
  @Length(1, 50)
  public updatedBy!: string;
}

// DTO for Updating an Inventory Transaction
export class UpdateInventoryTransactionDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public sellerId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public inventoryId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public invoiceId?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  public purchaseDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public vehicleNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public remainingQuantity?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public transportationCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public loadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public unloadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public sgstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public cgstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public igstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public otherCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public inventoryUsed?: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public updatedBy?: string;
}

// DTO for Inventory Transaction Response (Single/Multiple)
export class InventoryTransactionResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public sellerId!: number;

  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public inventoryId!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50)
  public invoiceId!: string;

  @AutoMap()
  @IsDate()
  @Type(() => Date)
  public purchaseDate!: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public vehicleNumber?: string;

  @AutoMap()
  @IsNumber()
  public quantity!: number;

  @AutoMap()
  @IsNumber()
  public remainingQuantity!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public transportationCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public loadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public unloadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public sgstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public cgstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public igstCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public otherCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsBoolean()
  public inventoryUsed!: boolean;

  @AutoMap()
  @IsString()
  @Length(1, 50)
  public updatedBy!: string;

  @AutoMap()
  @IsDate()
  @Type(() => Date)
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  @Type(() => Date)
  public updatedAt!: Date;
}
