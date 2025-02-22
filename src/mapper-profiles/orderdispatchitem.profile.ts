//src/mapper-profiles/orderdispatchitem.profile.ts


import { OrderDispatchItemResponseDto, CreateOrderDispatchItemDto, UpdateOrderDispatchItemDto } from '@/dtos/orderdispatchitem.dto';
import  orderdispatchitem  from '@/models/orderdispatchitem';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const orderDispatchItemProfile: MappingProfile = (mapper) => {
  // Mapping from orderdispatchitem to OrderDispatchItemResponseDto
  createMap(
    mapper,
    orderdispatchitem, // Source type (orderdispatchitem model)
    OrderDispatchItemResponseDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: orderdispatchitem) => s.id)), // Direct mapping
    forMember((d) => d.quantity, mapFrom((s: orderdispatchitem) => s.quantity)),
    forMember((d) => d.quantityWasted, mapFrom((s: orderdispatchitem) => s.quantityWasted ?? 0)), // Use 0 if quantityWasted is null
    forMember((d) => d.createdAt, mapFrom((s: orderdispatchitem) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: orderdispatchitem) => s.updatedAt)),
    forMember((d) => d.orderItemId, mapFrom((s: orderdispatchitem) => s.orderItemId ?? null)), // Default to null if undefined
    forMember((d) => d.orderDispatchId, mapFrom((s: orderdispatchitem) => s.orderDispatchId ?? null)) // Default to null if undefined
  );

  // Mapping from CreateOrderDispatchItemDto to orderdispatchitem
  createMap(
    mapper,
    CreateOrderDispatchItemDto,
    orderdispatchitem,
    forMember((d) => d.quantity, mapFrom((s: CreateOrderDispatchItemDto) => s.quantity)),
    forMember((d) => d.quantityWasted, mapFrom((s: CreateOrderDispatchItemDto) => s.quantityWasted ?? 0)), // Default to 0 if null
    forMember((d) => d.orderItemId, mapFrom((s: CreateOrderDispatchItemDto) => s.orderItemId ?? null)), // Default to null if undefined
    forMember((d) => d.orderDispatchId, mapFrom((s: CreateOrderDispatchItemDto) => s.orderDispatchId ?? null)) // Default to null if undefined
  );

  // Mapping from UpdateOrderDispatchItemDto to orderdispatchitem
  createMap(
    mapper,
    UpdateOrderDispatchItemDto,
    orderdispatchitem,
    forMember((d) => d.quantity, mapFrom((s: UpdateOrderDispatchItemDto) => s.quantity)),
    forMember((d) => d.quantityWasted, mapFrom((s: UpdateOrderDispatchItemDto) => s.quantityWasted ?? 0)), // Default to 0 if null
    forMember((d) => d.createdAt, mapFrom((s: UpdateOrderDispatchItemDto) => s.createdAt ?? null)), // Default to null if undefined
    forMember((d) => d.updatedAt, mapFrom((s: UpdateOrderDispatchItemDto) => s.updatedAt ?? null)), // Default to null if undefined
    forMember((d) => d.orderItemId, mapFrom((s: UpdateOrderDispatchItemDto) => s.orderItemId ?? null)), // Default to null if undefined
    forMember((d) => d.orderDispatchId, mapFrom((s: UpdateOrderDispatchItemDto) => s.orderDispatchId ?? null)) // Default to null if undefined
  );
};
