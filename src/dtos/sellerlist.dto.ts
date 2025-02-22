// src/dtos/sellerlist.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsDate, IsOptional, IsString, IsInt, IsEmail, Length } from 'class-validator';

// DTO for Seller List (Seller details)
export class SellerListDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50) 
  public name!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255) 
  public companyName!: string;

  @AutoMap()
  @IsString()
  @Length(15, 15) 
  public gstin!: string;

  @AutoMap()
  @IsString()
  @Length(10, 10) 
  public mobileNumber!: string;

  @AutoMap()
  @IsOptional()
  @IsEmail()
  @IsString()
  public emailId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public line1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public line2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public pincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50) 
  public city?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50) 
  public state?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50) 
  public alternateMobile?: string;



  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;
}

// DTO for Create Seller
export class CreateSellerDto {
  @AutoMap()
  @IsString()
  @Length(1, 50)
  public name!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public companyName!: string;

  @AutoMap()
  @IsString()
  @Length(15, 15)
  public gstin!: string;

  @AutoMap()
  @IsString()
  @Length(10, 10)
  public mobileNumber!: string;

  @AutoMap()
  @IsOptional()
  @IsEmail()
  @IsString()
  public emailId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public line1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public line2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public pincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public city?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public state?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public alternateMobile?: string;

  
}

// DTO for Update Seller
export class UpdateSellerListDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public companyName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(15, 15)
  public gstin?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(10, 10)
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @IsEmail()
  public emailId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public line1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public line2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public pincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public city?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public state?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public alternateMobile?: string;



  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public updatedBy?: string;
}

// DTO for Seller List Response
export class SellerListResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 50)
  public name!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public companyName!: string;

  @AutoMap()
  @IsString()
  @Length(15, 15)
  public gstin!: string;

  @AutoMap()
  @IsString()
  @Length(10, 10)
  public mobileNumber!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public emailId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public line1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public line2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public pincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public city?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public state?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public alternateMobile?: string;

 

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;
}
