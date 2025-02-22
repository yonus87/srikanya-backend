import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsOptional, IsString, IsInt, IsPhoneNumber, Length } from 'class-validator';
import { Type } from 'class-transformer';

// DTO for Order Delivery Detail
export class OrderDeliveryDetailDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public deliveredTo?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public deliveredBy?: string;

  @AutoMap()
  @IsOptional()
  @IsPhoneNumber(null)  
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public comments?: string;

  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public orderDispatchId!: number;

  @AutoMap()
  @IsOptional()
  public createdAt?: Date;

  @AutoMap()
  @IsOptional()
  public updatedAt?: Date;
}

// DTO for Creating Order Delivery Detail
export class CreateOrderDeliveryDetailDto {
  @AutoMap()
  @IsString()
  @Length(1, 255)
  public deliveredTo!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public deliveredBy!: string;

  @AutoMap()
  @IsPhoneNumber(null)
  public mobileNumber!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public comments?: string;

  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public orderDispatchId!: number;
}

// DTO for Updating Order Delivery Detail
export class UpdateOrderDeliveryDetailDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public deliveredTo?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public deliveredBy?: string;

  @AutoMap()
  @IsOptional()
  @IsPhoneNumber(null)
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public comments?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public orderDispatchId?: number;
}

// DTO for Order Delivery Detail Response (Single/Multiple)
export class OrderDeliveryDetailResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public deliveredTo?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public deliveredBy?: string;

  @AutoMap()
  @IsOptional()
  @IsPhoneNumber(null)
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public comments?: string;

  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public orderDispatchId!: number;

  @AutoMap()
  @IsOptional()
  public createdAt?: Date;

  @AutoMap()
  @IsOptional()
  public updatedAt?: Date;
}
