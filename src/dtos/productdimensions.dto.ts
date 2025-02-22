//src/dtos/productdimensions.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsDate ,IsInt } from 'class-validator';

// Base ProductDimensions DTO
export class ProductDimensionsDto {
  @AutoMap()
  @IsString()
  public id!: number;

  @AutoMap()
  @IsString()
  public value!: string;



  @AutoMap()
  @IsOptional()
  @IsString()
  public productDimensionId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public productId?: number;
}

export class CreateProductDimensionsDto {
  @AutoMap()
  @IsString()
  public value!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()  // Ensure this is an integer
  public productDimensionId?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()  // Ensure this is an integer
  public productId?: number;
}


// DTO for Updating ProductDimensions
export class UpdateProductDimensionsDto {
  @AutoMap()
  @IsOptional()
  @IsString()
  public value?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public productDimensionId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public productId?: number;
}

// DTO for ProductDimensions Response
export class ProductDimensionsResponseDto {
  @AutoMap()
  @IsString()
  public id!: number;

  @AutoMap()
  @IsString()
  public value!: string;



  @AutoMap()
  @IsOptional()
  @IsString()
  public productDimensionId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public productId?: number;
}

// DTO for ProductDimensions List Response
export class ProductDimensionsListResponseDto {
  @AutoMap()
  @IsString()
  public id!: number;

  @AutoMap()
  @IsString()
  public value!: string;


}
