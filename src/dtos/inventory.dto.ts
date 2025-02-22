//src/dtos/inventory.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsString, IsOptional, IsInt, IsNumber, Min, Max ,Length} from 'class-validator';
import { Type } from 'class-transformer';

// DTO for Inventory List
export class InventoryDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 255)  
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0)  
  public price?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  public status?: string;


}

// DTO for Creating an Inventory
export class CreateInventoryDto {
  @AutoMap()
  @IsString()
  @Length(1, 255)  
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0)  
  public price?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  public status?: string;
}

// DTO for Updating an Inventory
export class UpdateInventoryDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0)  
  public price?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public status?: string;
}

// DTO for Inventory Response (Single/Multiple)
export class InventoryResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 255)  
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0)  
  public price?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  public status?: string;

}

// Refactored DTO for Inventory List Response (for lists)
export class InventoryListResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 255)  
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Min(0)  
  public price?: number;

  @AutoMap()
  @IsString()
  @IsOptional()
  public status?: string;

 
}
