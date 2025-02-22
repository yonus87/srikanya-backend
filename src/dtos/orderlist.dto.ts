//src/dtos/orderlist.dto.ts

import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsString, IsOptional, IsInt, IsNumber, IsDate, Length } from 'class-validator';
import { Type } from 'class-transformer';

// DTO for Order List
export class OrderListDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public baseOrderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public orderStatus?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productCost?: number;

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
  @IsInt()
  public advanceTokenCost?: number;

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
  @IsInt()
  public discount?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public totalProduct?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 20)
  public userType?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public gstin?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public pan?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public aadhaar?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public emailId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public preferredPaymentMethod?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public creditDays?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingFullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingLine1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingLine2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public billingPincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingCity?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingState?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingFullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingLine1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingLine2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public shippingPincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingCity?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingState?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedUpdatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedAgreedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public paidAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public outForDeliveryAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public deliveredAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public closedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public salesAgentId?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isInterStateDelivery?: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  public orderType?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public interestPercentage?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public note?: string;


  @AutoMap()
  @IsOptional()
  @IsString()
  public userId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public purchaseOrderNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public purchaseOrderDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number;
}



// DTO for CreateOrderlistDto

export class CreateOrderlistDto {

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public baseOrderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public orderStatus?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productCost?: number;

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
  @IsInt()
  public advanceTokenCost?: number;

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
  @IsInt()
  public discount?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public totalProduct?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 20)
  public userType?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public gstin?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public pan?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public aadhaar?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public emailId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public preferredPaymentMethod?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public creditDays?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingFullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingLine1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingLine2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public billingPincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingCity?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingState?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingFullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingLine1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingLine2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public shippingPincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingCity?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingState?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedUpdatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedAgreedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public paidAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public outForDeliveryAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public deliveredAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public closedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public salesAgentId?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isInterStateDelivery?: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  public orderType?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public interestPercentage?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public note?: string;


  @AutoMap()
  @IsOptional()
  @IsString()
  public userId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public purchaseOrderNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public purchaseOrderDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number;
}


// DTO for UpdateOrderlistDto

export class UpdateOrderlistDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public baseOrderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public orderStatus?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productCost?: number;

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
  @IsInt()
  public advanceTokenCost?: number;

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
  @IsInt()
  public discount?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public totalProduct?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 20)
  public userType?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public gstin?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public pan?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public aadhaar?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public emailId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public preferredPaymentMethod?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public creditDays?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingFullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingLine1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingLine2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public billingPincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingCity?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingState?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingFullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingLine1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingLine2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public shippingPincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingCity?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingState?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedUpdatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedAgreedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public paidAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public outForDeliveryAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public deliveredAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public closedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public salesAgentId?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isInterStateDelivery?: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  public orderType?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public interestPercentage?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public note?: string;


  @AutoMap()
  @IsOptional()
  @IsString()
  public userId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public purchaseOrderNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public purchaseOrderDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number;
}



export class OrderlistResponseDto {
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public baseOrderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public orderStatus?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productCost?: number;

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
  @IsInt()
  public advanceTokenCost?: number;

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
  @IsInt()
  public discount?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public totalProduct?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 20)
  public userType?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public gstin?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public pan?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public aadhaar?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public emailId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public preferredPaymentMethod?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public creditDays?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingFullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingLine1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingLine2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public billingPincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingCity?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingState?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingFullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingLine1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingLine2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public shippingPincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingCity?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingState?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedUpdatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedAgreedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public paidAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public outForDeliveryAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public deliveredAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public closedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public salesAgentId?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isInterStateDelivery?: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  public orderType?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public interestPercentage?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public note?: string;


  @AutoMap()
  @IsOptional()
  @IsString()
  public userId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public purchaseOrderNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public purchaseOrderDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number;
}


export class OrderlistListResponse{
  @AutoMap()
  @IsInt()
  @Type(() => Number)
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  public baseOrderId?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 50)
  public orderStatus?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public productCost?: number;

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
  @IsInt()
  public advanceTokenCost?: number;

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
  @IsInt()
  public discount?: number;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public totalCost?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public totalProduct?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Length(1, 20)
  public userType?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public gstin?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public pan?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public aadhaar?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public emailId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public preferredPaymentMethod?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public creditDays?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingFullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingLine1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingLine2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public billingPincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingCity?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public billingState?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingFullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingMobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingLine1?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingLine2?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public shippingPincode?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingCity?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public shippingState?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedUpdatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public orderedAgreedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public paidAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public outForDeliveryAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public deliveredAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public closedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public salesAgentId?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isInterStateDelivery?: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  public orderType?: string;

  @AutoMap()
  @IsOptional()
  @IsNumber()
  public interestPercentage?: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  public note?: string;


  @AutoMap()
  @IsOptional()
  @IsString()
  public userId?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public purchaseOrderNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public purchaseOrderDate?: Date;

  @AutoMap()
  @IsOptional()
  @IsInt()
  public locationId?: number;
}


