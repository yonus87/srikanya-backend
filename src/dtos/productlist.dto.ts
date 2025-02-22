import { AutoMap } from '@automapper/classes';
import { IsString, IsInt, IsOptional, IsNumber, IsBoolean } from 'class-validator';

// DTO for the Product Response
export class ProductResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsString()
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public imageLink?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public description?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public primaryRate?: number;

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
  @IsString()
  public hsnCode!: string;

  @AutoMap()
  @IsBoolean()
  public isDeleted!: boolean;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public categoryId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public brandId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public inventoryId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public Rodprice?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public length?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public breadth?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public height?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public thickness?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public diameter?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public grade?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public angle?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shape?: string;


}

// DTO for Creating a Product
export class CreateProductDto {
  @AutoMap()
  @IsString()
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public imageLink?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public description?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public primaryRate?: number;

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
  @IsString()
  public hsnCode!: string;

  @AutoMap()
  @IsBoolean()
  public isDeleted!: boolean;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public categoryId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public brandId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public inventoryId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public Rodprice?: number;  

  
  @AutoMap()
  @IsOptional()
  @IsNumber()
  public length?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public breadth?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public height?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public thickness?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public diameter?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public grade?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public angle?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shape?: string;



}

// DTO for Updating a Product
export class UpdateProductDto {
  @AutoMap()
  @IsOptional()
  @IsString()
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public imageLink?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public description?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public primaryRate?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public cgstPercent?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public igstPercent?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public sgstPercent?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public conversionRatio?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public hsnCode?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDisabled?: boolean;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public categoryId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public brandId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public inventoryId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public Rodprice?: number; 
  
  
  @AutoMap()
  @IsOptional()
  @IsNumber()
  public length?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public breadth?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public height?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public thickness?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public diameter?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public grade?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public angle?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shape?: string;

  

}

// DTO for Product List Response
export class ProductListResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsString()
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public imageLink?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public description?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public primaryRate?: number;

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
  @IsString()
  public hsnCode!: string;

  @AutoMap()
  @IsBoolean()
  public isDeleted!: boolean;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public categoryId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public brandId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public inventoryId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public Rodprice?: number;  
  
  
  @AutoMap()
  @IsOptional()
  @IsNumber()
  public length?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public breadth?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public height?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public thickness?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public diameter?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public grade?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public angle?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shape?: string;

 

}
