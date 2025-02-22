//src/mapper-profiles/orderitem.profile.ts

import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';
import { OrderItemDto,UpdateOrderItemDto,CreateOrderItemDto,OrderItemResponseDto,OrderItemListResponseDto } from '@/dtos/orderitem.dto';
import  orderitem  from '@/models/orderitem';

export const orderItemProfile: MappingProfile = (mapper) => {
  // Mapping from orderitem to OrderItemDto
  createMap(
    mapper,
    orderitem, // Source type
    OrderItemDto, // Destination type
    forMember((d) => d.id, mapFrom((s: orderitem) => Number(s.id))), 
    forMember((d) => d.quantity, mapFrom((s: orderitem) => s.quantity)),
    forMember((d) => d.quantityUnit, mapFrom((s: orderitem) => s.quantityUnit)),
    forMember((d) => d.primaryRate, mapFrom((s: orderitem) => s.primaryRate)),
    forMember((d) => d.cgstPercent, mapFrom((s: orderitem) => s.cgstPercent)),
    forMember((d) => d.igstPercent, mapFrom((s: orderitem) => s.igstPercent)),
    forMember((d) => d.sgstPercent, mapFrom((s: orderitem) => s.sgstPercent)),
    forMember((d) => d.conversionRatio, mapFrom((s: orderitem) => s.conversionRatio || 1)), // Default to 1 if null
    forMember((d) => d.createdAt, mapFrom((s: orderitem) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: orderitem) => s.updatedAt)),
    forMember((d) => d.productId, mapFrom((s: orderitem) => s.productId)),
    forMember((d) => d.orderId, mapFrom((s: orderitem) => s.orderId))
  );

  // Mapping from CreateOrderItemDto to orderitem
  createMap(
    mapper,
    CreateOrderItemDto,
    orderitem,
    forMember((d) => d.quantity, mapFrom((s: CreateOrderItemDto) => s.quantity)),
    forMember((d) => d.quantityUnit, mapFrom((s: CreateOrderItemDto) => s.quantityUnit)),
    forMember((d) => d.primaryRate, mapFrom((s: CreateOrderItemDto) => s.primaryRate)),
    forMember((d) => d.cgstPercent, mapFrom((s: CreateOrderItemDto) => s.cgstPercent)),
    forMember((d) => d.igstPercent, mapFrom((s: CreateOrderItemDto) => s.igstPercent)),
    forMember((d) => d.sgstPercent, mapFrom((s: CreateOrderItemDto) => s.sgstPercent)),
    forMember((d) => d.conversionRatio, mapFrom((s: CreateOrderItemDto) => s.conversionRatio || 1)), // Default to 1
    forMember((d) => d.productId, mapFrom((s: CreateOrderItemDto) => s.productId)),
    forMember((d) => d.orderId, mapFrom((s: CreateOrderItemDto) => s.orderId)),
    forMember((d) => d.createdAt, mapFrom((s: CreateOrderItemDto) => new Date())), 
    forMember((d) => d.updatedAt, mapFrom((s: CreateOrderItemDto) => new Date())) 
  );

  // Mapping from UpdateOrderItemDto to orderitem
  createMap(
    mapper,
    UpdateOrderItemDto,
    orderitem,
    forMember((d) => d.id, mapFrom((s: UpdateOrderItemDto) => Number(s.id))), 
    forMember((d) => d.quantity, mapFrom((s: UpdateOrderItemDto) => s.quantity)),
    forMember((d) => d.quantityUnit, mapFrom((s: UpdateOrderItemDto) => s.quantityUnit)),
    forMember((d) => d.primaryRate, mapFrom((s: UpdateOrderItemDto) => s.primaryRate)),
    forMember((d) => d.cgstPercent, mapFrom((s: UpdateOrderItemDto) => s.cgstPercent)),
    forMember((d) => d.igstPercent, mapFrom((s: UpdateOrderItemDto) => s.igstPercent)),
    forMember((d) => d.sgstPercent, mapFrom((s: UpdateOrderItemDto) => s.sgstPercent)),
    forMember((d) => d.conversionRatio, mapFrom((s: UpdateOrderItemDto) => s.conversionRatio || 1)), // Default to 1
    forMember((d) => d.productId, mapFrom((s: UpdateOrderItemDto) => s.productId)),
    forMember((d) => d.orderId, mapFrom((s: UpdateOrderItemDto) => s.orderId)),
    forMember((d) => d.updatedAt, mapFrom((s: UpdateOrderItemDto) => new Date())) 
  );
};
