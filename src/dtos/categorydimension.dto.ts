import { AutoMap } from '@automapper/classes';
import { IsInt, IsOptional, IsString, IsDate, IsNotEmpty, IsBoolean, IsDecimal } from 'class-validator';

// Base DTO for CategoryDimension
export class CategoryDimensionDto {
  @AutoMap()
  @IsInt()
  @IsNotEmpty()
  public id!: number;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  public dimensionId!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public categoryId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public length?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public breadth?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public height?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public thickness?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public diameter?: number | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  public grade?: string | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public angle?: number | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shape?: string | null;
}

// DTO for Creating a CategoryDimension
export class CreateCategoryDimensionDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  public dimensionId!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public categoryId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted: boolean = false;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public length?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public breadth?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public height?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public thickness?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public diameter?: number | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  public grade?: string | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public angle?: number | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shape?: string | null;
}

// DTO for Updating a CategoryDimension
export class UpdateCategoryDimensionDto {
  @AutoMap()
  @IsInt()
  @IsNotEmpty()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public dimensionId?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public categoryId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public length?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public breadth?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public height?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public thickness?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public diameter?: number | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  public grade?: string | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public angle?: number | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shape?: string | null;
}

// DTO for CategoryDimension Response
export class CategoryDimensionResponseDto {
  @AutoMap()
  @IsInt()
  @IsNotEmpty()
  public id!: number;

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  public dimensionId!: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public categoryId?: number | null;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public length?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public breadth?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public height?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public thickness?: number | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public diameter?: number | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  public grade?: string | null;

  @AutoMap()
  @IsOptional()
  @IsDecimal()
  public angle?: number | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shape?: string | null;
}
