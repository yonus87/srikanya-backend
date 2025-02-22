import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsInt, Length, IsUUID, IsNotEmpty, IsDate, IsPhoneNumber } from 'class-validator';

export class UserAddressDto {
  @AutoMap()
  @IsInt()
  @IsNotEmpty()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public fullName?: string;

  @AutoMap()
  @IsOptional()
  @IsPhoneNumber(null)
  @Length(10, 10)
  public mobileNumber?: string;

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
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsUUID()
  public userId?: string;
}

export class CreateUserAddressDto {
  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public fullName?: string;

  @AutoMap()
  @IsOptional()
  public mobileNumber?: string;

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
  @IsUUID()
  public userId?: string;
}

export class UpdateUserAddressDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public fullName?: string;

  @AutoMap()
  @IsOptional()
  public mobileNumber?: string;

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
  @IsUUID()
  public userId?: string;
}

export class UserAddressListResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public fullName?: string;

  @AutoMap()
  @IsOptional()
  @IsPhoneNumber(null)
  public mobileNumber?: string;

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
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsUUID()
  public userId?: string;
}
