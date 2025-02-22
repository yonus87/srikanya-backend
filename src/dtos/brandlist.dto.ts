// src/dtos/brandlist.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsString, IsOptional, IsInt, Length } from 'class-validator';
import { Type } from 'class-transformer';

// DTO for Brand List
export class BrandListDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50)  // Added length validation
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public link?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public type?: string;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;
}

// DTO for Creating a Brand
export class CreateBrandDto {
  @AutoMap()
  @IsString()
  @Length(1, 50)  // Added length validation
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public link?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public type?: string;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;
}

// DTO for Updating a Brand
export class UpdateBrandDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)  // Added length validation
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public link?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public type?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDisabled?: boolean;
}

// DTO for Brand List Response (Single/Multiple)
export class BrandListResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50)  // Added length validation
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public link?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public type?: string;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;
}

// Refactored DTO for Brand List Response (for lists)
export class BrandListListResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50)  // Added length validation
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public link?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public type?: string;

  @AutoMap()
  @IsBoolean()
  public isDisabled!: boolean;
}