//src/dtos/userdetail.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsBoolean, Length, IsUUID, IsNotEmpty, IsInt, IsNumber } from 'class-validator';

// DTO for UserDetail
export class UserDetailDto {
  @AutoMap()
  @IsInt()
  @IsNotEmpty()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 20)
  public userType?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public fullname?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public gstin?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public pan?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public aadhaar?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
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
  @Length(1, 255)
  public alternateMobile?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public defaultAddressId?: number;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public enableSMS?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public enableWhatsApp?: boolean;

  @AutoMap()
  @IsOptional()
  @IsUUID()
  public userId?: string; // Foreign key to User
}

// DTO for Creating a UserDetail
export class CreateUserDetailDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 20)
  public userType?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public fullname?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public gstin?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public pan?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public aadhaar?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
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
  @Length(1, 255)
  public alternateMobile?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public defaultAddressId?: number;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public enableSMS?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public enableWhatsApp?: boolean;

  @AutoMap()
  @IsOptional()
  @IsUUID()
  public userId?: string; // Foreign key to User
}

// DTO for Updating a UserDetail
export class UpdateUserDetailDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 20)
  public userType?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public fullname?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public gstin?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public pan?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public aadhaar?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
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
  @Length(1, 255)
  public alternateMobile?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public defaultAddressId?: number;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public enableSMS?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public enableWhatsApp?: boolean;

  @AutoMap()
  @IsOptional()
  @IsUUID()
  public userId?: string; // Foreign key to User
}

// DTO for UserDetail List Response (Single/Multiple)
export class UserDetailListResponseDto {
  @AutoMap()
  @IsInt()
  @IsNotEmpty()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 20)
  public userType?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public fullname?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public gstin?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public pan?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public aadhaar?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
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
  @Length(1, 255)
  public alternateMobile?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public defaultAddressId?: number;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public enableSMS?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public enableWhatsApp?: boolean;

  @AutoMap()
  @IsOptional()
  @IsUUID()
  public userId?: string; // Foreign key to User
}
