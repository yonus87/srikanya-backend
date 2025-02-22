import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsEmail, IsDate, IsInt, IsNotEmpty } from 'class-validator';

// Base ContactUs DTO
export class ContactUsDto {
  @AutoMap()
  @IsInt()
  @IsNotEmpty()
  public id!: number;  

  @AutoMap()
  @IsOptional()
  @IsString()
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsEmail()
  public email?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public message?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public status?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public note?: string;

}

// DTO for creating a ContactUs entry
export class CreateContactUsDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  public name!: string;  

  @AutoMap()
  @IsEmail()
  @IsNotEmpty()
  public email!: string;  

  @AutoMap()
  @IsString()
  @IsNotEmpty()
  public message!: string;  

  @AutoMap()
  @IsOptional()
  @IsString()
  public status?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public note?: string;
}

export class UpdateContactUsDto {
  @AutoMap()
  @IsOptional()
  @IsString()
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsEmail()
  public email?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public message?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public status?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public note?: string;
}

// DTO for ContactUs response
export class ContactUsResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;  

  @AutoMap()
  @IsOptional()
  @IsString()
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsEmail()
  public email?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public message?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public status?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public note?: string;

}

// DTO for ContactUs list response
export class ContactUsListResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;  

  @AutoMap()
  @IsOptional()
  @IsString()
  public name?: string;

  @AutoMap()
  @IsOptional()
  @IsEmail()
  public email?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public message?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public status?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public note?: string;
}
