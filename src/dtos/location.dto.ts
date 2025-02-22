import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsInt, IsBoolean, IsArray, IsNumber, IsDate, Matches, IsNotEmpty, Length} from 'class-validator';
import { Type, Transform } from 'class-transformer';

// DTO for Location List (Single Location)
export class LocationDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 45)  
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 150)  
  public address?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 45)  
  public city?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 45)  
  public state?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public pincode?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  public latitude?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  public longitude?: number;

  @AutoMap()
  @IsBoolean()
  public isDefault!: boolean;  

  @AutoMap()
  @IsBoolean()
  public isDeleted!: boolean;  

  @AutoMap()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public wishMessage?: string[];

  @AutoMap()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public carouselImage?: string[];
}

// DTO for Creating a Location
export class CreateLocationDto {
  @AutoMap()
  @IsString()
  @Length(1, 45)
  @IsNotEmpty()
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 150)
  public address?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 45)
  public city?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 45)
  public state?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public pincode?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  public latitude?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  public longitude?: number;

  @AutoMap()
  @IsBoolean()
  public isDefault!: boolean;

  @AutoMap()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public wishMessage?: string[];

  @AutoMap()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public carouselImage?: string[];
}

// DTO for Updating a Location
export class UpdateLocationDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 45)
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 150)
  public address?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 45)
  public city?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 45)
  public state?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public pincode?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  public latitude?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  public longitude?: number;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDefault?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;

  @AutoMap()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public wishMessage?: string[];

  @AutoMap()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public carouselImage?: string[];
}


// DTO for Location List Response
export class LocationListResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 45)  
  public name!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 150)  
  public address?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 45)  
  public city?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 45)  
  public state?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public pincode?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  public latitude?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseFloat(value))
  public longitude?: number;

  @AutoMap()
  @IsBoolean()
  public isDefault!: boolean;  

  @AutoMap()
  @IsBoolean()
  public isDeleted!: boolean;  

  @AutoMap()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public wishMessage?: string[];

  @AutoMap()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  public carouselImage?: string[];
}
