import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsInt, IsDate, IsBoolean } from 'class-validator';

// Base CategoryType DTO
export class CategoryTypeDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsString() 
  public type!: string; 

  @AutoMap()
  @IsString()
  public name!: string;

  @AutoMap()
  @IsInt()
  public displayRate!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public primaryDimension?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public imageUrl?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDisabled?: boolean;
}

// Create DTO
export class CreateCategoryTypeDto {
  @AutoMap()
  @IsString() 
  public type!: string;

  @AutoMap()
  @IsString()
  public name!: string;

  @AutoMap()
  @IsInt()
  public displayRate!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public primaryDimension?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public imageUrl?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDisabled?: boolean;
}

// Update DTO
export class UpdateCategoryTypeDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public type?: string; 

  @AutoMap()
  @IsOptional()
  @IsString()
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public displayRate?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public primaryDimension?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public imageUrl?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public updatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDisabled?: boolean;
}

// Consolidated Response DTO
export class CategoryTypeResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public type?: string;

  @AutoMap()
  @IsString()
  public name!: string;

  @AutoMap()
  @IsInt()
  public displayRate!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public primaryDimension?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public imageUrl?: string;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;
}
