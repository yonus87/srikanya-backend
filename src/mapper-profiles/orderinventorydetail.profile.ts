//src/mapper-profiles/orderinventorydetail.profile.ts

import { OrderInventoryDetailDto, CreateOrderInventoryDetailDto, UpdateOrderInventoryDetailDto, OrderInventoryDetailListResponseDto } from '@/dtos/orderinventorydetail.dto';
import  orderinventorydetail  from '@/models/orderinventorydetail';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const orderInventoryDetailProfile: MappingProfile = (mapper) => {
  // Mapping from orderinventorydetail to OrderInventoryDetailDto
  createMap(
    mapper,
    orderinventorydetail, // Source type (orderinventorydetail model)
    OrderInventoryDetailDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: orderinventorydetail) => s.id)), // Direct mapping
    forMember((d) => d.inventoryUsed, mapFrom((s: orderinventorydetail) => s.inventoryUsed ?? 0)), // Default to 0 if inventoryUsed is null
    forMember((d) => d.inventoryWasted, mapFrom((s: orderinventorydetail) => s.inventoryWasted ?? 0)), // Default to 0 if inventoryWasted is null
    forMember((d) => d.createdAt, mapFrom((s: orderinventorydetail) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: orderinventorydetail) => s.updatedAt)),
    forMember((d) => d.orderId, mapFrom((s: orderinventorydetail) => s.orderId)),
    forMember((d) => d.inventoryId, mapFrom((s: orderinventorydetail) => s.inventoryId))
  );

  // Mapping from orderinventorydetail to OrderInventoryDetailListResponseDto
  createMap(
    mapper,
    orderinventorydetail, // Source type (orderinventorydetail model)
    OrderInventoryDetailListResponseDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: orderinventorydetail) => s.id)), // Direct mapping
    forMember((d) => d.inventoryUsed, mapFrom((s: orderinventorydetail) => s.inventoryUsed ?? 0)), // Default to 0 if inventoryUsed is null
    forMember((d) => d.inventoryWasted, mapFrom((s: orderinventorydetail) => s.inventoryWasted ?? 0)), // Default to 0 if inventoryWasted is null
    forMember((d) => d.createdAt, mapFrom((s: orderinventorydetail) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: orderinventorydetail) => s.updatedAt)),
    forMember((d) => d.orderId, mapFrom((s: orderinventorydetail) => s.orderId)),
    forMember((d) => d.inventoryId, mapFrom((s: orderinventorydetail) => s.inventoryId))
  );

  // Mapping from CreateOrderInventoryDetailDto to orderinventorydetail
  createMap(
    mapper,
    CreateOrderInventoryDetailDto,
    orderinventorydetail,
    forMember((d) => d.inventoryUsed, mapFrom((s: CreateOrderInventoryDetailDto) => s.inventoryUsed)),
    forMember((d) => d.inventoryWasted, mapFrom((s: CreateOrderInventoryDetailDto) => s.inventoryWasted ?? 0)), // Default to 0 if inventoryWasted is null
    forMember((d) => d.orderId, mapFrom((s: CreateOrderInventoryDetailDto) => s.orderId)),
    forMember((d) => d.inventoryId, mapFrom((s: CreateOrderInventoryDetailDto) => s.inventoryId))
  );

  // Mapping from UpdateOrderInventoryDetailDto to orderinventorydetail
  createMap(
    mapper,
    UpdateOrderInventoryDetailDto,
    orderinventorydetail,
    forMember((d) => d.id, mapFrom((s: UpdateOrderInventoryDetailDto) => s.id)),
    forMember((d) => d.inventoryUsed, mapFrom((s: UpdateOrderInventoryDetailDto) => s.inventoryUsed)),
    forMember((d) => d.inventoryWasted, mapFrom((s: UpdateOrderInventoryDetailDto) => s.inventoryWasted ?? 0)), // Default to 0 if inventoryWasted is null
    forMember((d) => d.createdAt, mapFrom((s: UpdateOrderInventoryDetailDto) => s.createdAt ?? null)), // Default to null if undefined
    forMember((d) => d.updatedAt, mapFrom((s: UpdateOrderInventoryDetailDto) => s.updatedAt ?? null)), // Default to null if undefined
    forMember((d) => d.orderId, mapFrom((s: UpdateOrderInventoryDetailDto) => s.orderId)),
    forMember((d) => d.inventoryId, mapFrom((s: UpdateOrderInventoryDetailDto) => s.inventoryId))
  );
};

