import { AutoMap } from '@automapper/classes';
import { IsInt, IsOptional, IsString, IsNumber, IsDate } from 'class-validator';

// DTO for Cart Item
export class CartDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public quantityUnit?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public productId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public userId?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public createdAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public updatedAt?: Date;
}

// DTO for Creating a Cart Item
export class CreateCartDto {
  @AutoMap()
  @IsInt()
  public quantity!: number;

  @AutoMap()
  @IsString()
  public quantityUnit!: string;

  @AutoMap()
  @IsInt()
  public productId!: number;

  @AutoMap()
  @IsString()
  public userId!: string;
}

// DTO for Updating a Cart Item
export class UpdateCartDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public quantityUnit?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public productId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public userId?: string;
}

// DTO for Cart Item Response
export class CartResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public quantityUnit?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public productId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public userId?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public createdAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public updatedAt?: Date;
}

// DTO for Cart Item List Response
export class CartListResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public quantity?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public quantityUnit?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public productId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public userId?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public createdAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public updatedAt?: Date;
}
