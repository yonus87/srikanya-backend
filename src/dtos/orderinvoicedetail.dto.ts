import { AutoMap } from '@automapper/classes';
import { IsString, IsOptional, IsInt, IsDate, IsBoolean, IsNotEmpty } from 'class-validator';

// DTO for OrderInvoiceDetail Response
export class OrderInvoiceDetailDto {
  @AutoMap()
  @IsInt()
  public invoiceId!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'E-way bill number must not be empty' })
  public ewayBillNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()  
  public invoiceSent?: boolean;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'DO Number must not be empty' })
  public doNumber?: string;
}

// DTO for Updating OrderInvoiceDetail
export class UpdateOrderInvoiceDetailDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  public invoiceId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'E-way bill number must not be empty' })
  public ewayBillNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean() 
  public invoiceSent?: boolean; 

  @AutoMap()
  @IsOptional()
  @IsDate()
  public createdAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public updatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'DO Number must not be empty' })
  public doNumber?: string;
}

// DTO for Creating OrderInvoiceDetail
export class CreateOrderInvoiceDetailDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty({ message: 'E-way bill number must not be empty' })
  public ewayBillNumber!: string;

  @AutoMap()
  @IsBoolean()  
  public invoiceSent!: boolean;

  @AutoMap()
  @IsInt()
  public orderId!: number;

  @AutoMap()
  @IsString()
  @IsNotEmpty({ message: 'DO Number must not be empty' })
  public doNumber!: string;
}

// DTO for OrderInvoiceDetail List Response
export class OrderInvoiceDetailListResponseDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  public invoiceId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'E-way bill number must not be empty' })
  public ewayBillNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()  
  public invoiceSent?: boolean;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'DO Number must not be empty' })
  public doNumber?: string;
}
