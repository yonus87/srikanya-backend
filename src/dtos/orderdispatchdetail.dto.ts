//src/dtos/orderdispatchdetail.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsString, IsOptional, IsInt, IsNumber, IsDate, Length } from 'class-validator';
import { Type } from 'class-transformer';

// DTO for Order Dispatch Detail
export class OrderDispatchDetailDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public deliveryAgentName!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public deliveryAgentMobileNumber!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public vehicleName!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public vehicleNumber!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public ewayBillNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public invoiceNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public transportationCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public loadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public unloadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public cgst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public sgst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public igst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public interestCost?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public dispatchStatus?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public creditDate?: Date;

  @AutoMap()
  @IsBoolean()
  public invoiceSent!: boolean;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public outForDeliveryAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public creditDateDay?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public placeOfDispatch?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public transporter?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public lrNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public termsOfDelivery?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public destination?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public tcsCost?: number;
}

// DTO for Creating an Order Dispatch Detail
export class CreateOrderDispatchDetailDto {
  @AutoMap()
  @IsString()
  @Length(1, 255)
  public deliveryAgentName!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public deliveryAgentMobileNumber!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public vehicleName!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public vehicleNumber!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public ewayBillNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public invoiceNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public transportationCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public loadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public unloadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public cgst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public sgst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public igst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public interestCost?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public dispatchStatus?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public creditDate?: Date;

  @AutoMap()
  @IsBoolean()
  public invoiceSent!: boolean;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public outForDeliveryAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public creditDateDay?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public placeOfDispatch?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public transporter?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public lrNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public termsOfDelivery?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public destination?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public tcsCost?: number;
}

// DTO for Updating an Order Dispatch Detail
export class UpdateOrderDispatchDetailDto {
  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public id?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public deliveryAgentName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public deliveryAgentMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public vehicleName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public vehicleNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public ewayBillNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public invoiceNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public transportationCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public loadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public unloadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public cgst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public sgst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public igst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public interestCost?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public dispatchStatus?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public creditDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public invoiceSent?: boolean;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public outForDeliveryAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public creditDateDay?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public placeOfDispatch?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public transporter?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public lrNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public termsOfDelivery?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public destination?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public tcsCost?: number;
}

// DTO for Order Dispatch Detail Response
export class OrderDispatchDetailResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public deliveryAgentName!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public deliveryAgentMobileNumber!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public vehicleName!: string;

  @AutoMap()
  @IsString()
  @Length(1, 255)
  public vehicleNumber!: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public ewayBillNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public invoiceNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public transportationCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public loadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public unloadingCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public cgst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public sgst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public igst?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public interestCost?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public dispatchStatus?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public creditDate?: Date;

  @AutoMap()
  @IsBoolean()
  public invoiceSent!: boolean;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public outForDeliveryAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public creditDateDay?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public orderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public placeOfDispatch?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public transporter?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public lrNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public termsOfDelivery?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 255)
  public destination?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public tcsCost?: number;
}
