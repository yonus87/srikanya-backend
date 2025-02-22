//src/dtos/inventorylist.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsOptional, IsInt, IsString, Length } from 'class-validator';
import { Type } from 'class-transformer';

// DTO for Inventory List
export class InventoryListDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50)  
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public brandId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public categoryId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public locationId?: number | null;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;  
}

// DTO for Creating an Inventory List
export class CreateInventoryListDto {
  @AutoMap()
  @IsString()
  @Length(1, 50)  
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public brandId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public categoryId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public locationId?: number | null;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;
}

// DTO for Updating an Inventory List
export class UpdateInventoryListDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)  
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public brandId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public categoryId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public locationId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDisabled?: boolean;
}

// DTO for Inventory List Response (Single/Multiple)
export class InventoryListResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50)  
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public brandId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public categoryId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public locationId?: number | null;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;

  @AutoMap()
  @IsString()
  public brandName?: string; 

  @AutoMap()
  @IsString()
  public categoryName?: string; 

  @AutoMap()
  @IsString()
  public locationName?: string; 
}

// Refactored DTO for Inventory List Response (for lists)
export class InventoryListListResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50)  
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public brandId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public categoryId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public locationId?: number | null;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;

  @AutoMap()
  @IsString()
  public brandName?: string;

  @AutoMap()
  @IsString()
  public categoryName?: string;

  @AutoMap()
  @IsString()
  public locationName?: string;
}
