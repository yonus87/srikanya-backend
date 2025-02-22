
//src/dtos/user.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsBoolean, Length, IsUUID, IsNotEmpty } from 'class-validator';

// DTO for User
export class UserDto {
  @AutoMap()
  @IsString()
  @Length(36, 36) 
  public id!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(10, 10) 
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public fullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public roleId?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isMobileConfirmed?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public createdBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public updatedBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public deletedBy?: string;
}

export class CreateUserDto {
  @AutoMap()
  @IsOptional()  
  @IsUUID()  
  public id?: string;  

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(10, 10) 
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public fullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public roleId?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isMobileConfirmed?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public createdBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public updatedBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public deletedBy?: string;
}


// DTO for Updating a User
export class UpdateUserDto {
  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(36, 36) 
  public id?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(10, 10) 
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public fullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public roleId?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isMobileConfirmed?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public createdBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public updatedBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public deletedBy?: string;
}

// DTO for User List Response (Single/Multiple)
export class UserListResponseDto {
  @AutoMap()
  @IsString()
  @Length(36, 36) 
  public id!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(10, 10) 
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public fullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255) 
  public roleId?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isMobileConfirmed?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;
}
