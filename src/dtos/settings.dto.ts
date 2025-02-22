//src/dtos/settings.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsInt, IsOptional, IsString, IsDate, MaxLength, IsNotEmpty } from 'class-validator';

// Base DTO for Settings (represents the model structure)
export class SettingsDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(3000)
  public value?: string | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  public note?: string | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  public updatedBy?: string | null;



  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number | null;
}

// DTO for Creating a Setting
export class CreateSettingsDto {
  @AutoMap()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(3000)
  public value?: string | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  public note?: string | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  public updatedBy?: string | null;



  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number | null;
}

// DTO for Updating a Setting
export class UpdateSettingsDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(3000)
  public value?: string | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  public note?: string | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  public updatedBy?: string | null;



  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number | null;
}

// DTO for Settings Response
export class SettingsResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(3000)
  public value?: string | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  public note?: string | null;

  @AutoMap()
  @IsOptional()
  @IsString()
  @MaxLength(255)
  public updatedBy?: string | null;



  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number | null;
}
