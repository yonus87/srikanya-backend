//src/mapper-profiles/orderinvoicedetail.profile.ts

import { CreateOrderInvoiceDetailDto, UpdateOrderInvoiceDetailDto, OrderInvoiceDetailDto, OrderInvoiceDetailListResponseDto } from '@/dtos/orderinvoicedetail.dto';
import orderinvoicedetail from '@/models/orderinvoicedetail';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const orderInvoiceDetailProfile: MappingProfile = (mapper) => {
  // Mapping from orderinvoicedetail model to OrderInvoiceDetailDto (single record)
  createMap(
    mapper,
    orderinvoicedetail, // Source type (orderinvoicedetail model)
    OrderInvoiceDetailDto, // Destination type (DTO)
    forMember((d) => d.invoiceId, mapFrom((s: orderinvoicedetail) => s.invoiceId)),
    forMember((d) => d.ewayBillNumber, mapFrom((s: orderinvoicedetail) => s.ewayBillNumber ?? null)),
    forMember((d) => d.invoiceSent, mapFrom((s: orderinvoicedetail) => s.invoiceSent ? true : false)),
    forMember((d) => d.createdAt, mapFrom((s: orderinvoicedetail) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: orderinvoicedetail) => s.updatedAt)),
    forMember((d) => d.orderId, mapFrom((s: orderinvoicedetail) => s.orderId)),
    forMember((d) => d.doNumber, mapFrom((s: orderinvoicedetail) => s.doNumber ?? null))
  );

  // Mapping from orderinvoicedetail model to OrderInvoiceDetailListResponseDto (list response)
  createMap(
    mapper,
    orderinvoicedetail, // Source type (orderinvoicedetail model)
    OrderInvoiceDetailListResponseDto, // Destination type (DTO)
    forMember((d) => d.invoiceId, mapFrom((s: orderinvoicedetail) => s.invoiceId)),
    forMember((d) => d.ewayBillNumber, mapFrom((s: orderinvoicedetail) => s.ewayBillNumber ?? null)),
    forMember((d) => d.invoiceSent, mapFrom((s: orderinvoicedetail) => s.invoiceSent ? true : false)),
    forMember((d) => d.createdAt, mapFrom((s: orderinvoicedetail) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: orderinvoicedetail) => s.updatedAt)),
    forMember((d) => d.orderId, mapFrom((s: orderinvoicedetail) => s.orderId)),
    forMember((d) => d.doNumber, mapFrom((s: orderinvoicedetail) => s.doNumber ?? null))
  );

  // Mapping from CreateOrderInvoiceDetailDto to orderinvoicedetail model
  createMap(
    mapper,
    CreateOrderInvoiceDetailDto, // Source type (Create DTO)
    orderinvoicedetail, // Destination type (model)
    forMember((d) => d.ewayBillNumber, mapFrom((s: CreateOrderInvoiceDetailDto) => s.ewayBillNumber ?? null)),
    forMember((d) => d.invoiceSent, mapFrom((s: CreateOrderInvoiceDetailDto) => s.invoiceSent ? true : false)),
    forMember((d) => d.orderId, mapFrom((s: CreateOrderInvoiceDetailDto) => s.orderId)),
    forMember((d) => d.doNumber, mapFrom((s: CreateOrderInvoiceDetailDto) => s.doNumber ?? null))
  );

  // Mapping from UpdateOrderInvoiceDetailDto to orderinvoicedetail model
  createMap(
    mapper,
    UpdateOrderInvoiceDetailDto, // Source type (Update DTO)
    orderinvoicedetail, // Destination type (model)
    forMember((d) => d.ewayBillNumber, mapFrom((s: UpdateOrderInvoiceDetailDto) => s.ewayBillNumber ?? null)),
    forMember((d) => d.invoiceSent, mapFrom((s: UpdateOrderInvoiceDetailDto) => s.invoiceSent ? true : false)),
    forMember((d) => d.createdAt, mapFrom((s: UpdateOrderInvoiceDetailDto) => s.createdAt ?? new Date())), 
    forMember((d) => d.updatedAt, mapFrom((s: UpdateOrderInvoiceDetailDto) => s.updatedAt ?? new Date())), 
    forMember((d) => d.orderId, mapFrom((s: UpdateOrderInvoiceDetailDto) => s.orderId)),
    forMember((d) => d.doNumber, mapFrom((s: UpdateOrderInvoiceDetailDto) => s.doNumber ?? null))
  );
};
