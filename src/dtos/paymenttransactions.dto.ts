import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

// DTO for Payment Transaction
export class PaymentTransactionDto {
  @AutoMap()
  @IsNumber()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public amount?: number;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public paymentDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public updatedBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public paymentMode?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public transactionCredit?: boolean;  

  @AutoMap()
  @IsOptional()
  @IsString()
  public transactionNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public orderId?: number;
}

// DTO for Creating a Payment Transaction
export class CreatePaymentTransactionDto {
  @AutoMap()
  @IsNumber()
  public amount!: number;


  @AutoMap()
  @IsString()
  public updatedBy!: string;

  @AutoMap()
  @IsString()
  public paymentMode!: string;

  @AutoMap()
  @IsBoolean()
  public transactionCredit!: boolean; 

  @AutoMap()
  @IsString()
  public transactionNumber!: string;

  @AutoMap()
  @IsBoolean()
  public isDeleted!: boolean;

  @AutoMap()
  @IsNumber()
  public orderId!: number;
}

// DTO for Updating a Payment Transaction
export class UpdatePaymentTransactionDto {
  @AutoMap()
  @IsOptional()
  @IsNumber()
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public amount?: number;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public paymentDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public updatedBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public paymentMode?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public transactionCredit?: boolean;  

  @AutoMap()
  @IsOptional()
  @IsString()
  public transactionNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;



  @AutoMap()
  @IsOptional()
  @IsNumber()
  public orderId?: number;
}

// DTO for Payment Transaction Response
export class PaymentTransactionResponseDto {
  @AutoMap()
  @IsNumber()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public amount?: number;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public paymentDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public updatedBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public paymentMode?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public transactionCredit?: boolean;  

  @AutoMap()
  @IsOptional()
  @IsString()
  public transactionNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;



  @AutoMap()
  @IsOptional()
  @IsNumber()
  public orderId?: number;
}

// DTO for Payment Transaction List Response
export class PaymentTransactionListResponseDto {
  @AutoMap()
  @IsNumber()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public amount?: number;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public paymentDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public updatedBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public paymentMode?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public transactionCredit?: boolean;  

  @AutoMap()
  @IsOptional()
  @IsString()
  public transactionNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;


}
