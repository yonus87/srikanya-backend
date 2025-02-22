// src/dtos/user-session.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsString, IsDate, IsOptional, IsUUID, IsNotEmpty } from 'class-validator';

// Base User Session DTO
export class UserSessionDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  public sid!: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public expires?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public data?: string;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsUUID('4')
  public userId?: string;
}

// DTO for Creating User Session
export class CreateUserSessionDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  public sid!: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public expires?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public data?: string;

  @AutoMap()
  @IsUUID('4')
  @IsNotEmpty()
  public userId!: string;
}

// DTO for Updating User Session
export class UpdateUserSessionDto {
  @AutoMap()
  @IsOptional()
  @IsString()
  public sid?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public expires?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public data?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public updatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsUUID('4')
  public userId?: string;
}

// DTO for User Session Response
export class UserSessionResponseDto {
  @AutoMap()
  @IsString()
  public sid!: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public expires?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public data?: string;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsUUID('4')
  public userId?: string;
}

// DTO for User Session List Response
export class UserSessionListResponseDto {
  @AutoMap()
  @IsString()
  public sid!: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public expires?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public data?: string;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;
}
