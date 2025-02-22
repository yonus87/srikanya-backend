//src/mapper-profiles/inventoryprofile.ts


import { InventoryDto, CreateInventoryDto, UpdateInventoryDto, InventoryResponseDto } from '@/dtos/inventory.dto';
import inventory from '@/models/inventory';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const inventoryProfile: MappingProfile = (mapper) => {
  // Mapping from inventory to InventoryDto
  createMap(
    mapper,
    inventory,
    InventoryDto,
    forMember((d) => d.id, mapFrom((s: inventory) => s.id)),
    forMember((d) => d.name, mapFrom((s: inventory) => s.name)),
    forMember((d) => d.quantity, mapFrom((s: inventory) => s.quantity ?? null)),
    forMember((d) => d.price, mapFrom((s: inventory) => s.price ?? null)),
    forMember((d) => d.status, mapFrom((s: inventory) => s.status ?? null)),
   
  );

  // Mapping from CreateInventoryDto to inventory
  createMap(
    mapper,
    CreateInventoryDto,
    inventory,
    forMember((d) => d.name, mapFrom((s: CreateInventoryDto) => s.name)),
    forMember((d) => d.quantity, mapFrom((s: CreateInventoryDto) => s.quantity ?? null)),
    forMember((d) => d.price, mapFrom((s: CreateInventoryDto) => s.price ?? null)),
    forMember((d) => d.status, mapFrom((s: CreateInventoryDto) => s.status ?? null))
  );

  // Mapping from UpdateInventoryDto to inventory
  createMap(
    mapper,
    UpdateInventoryDto,
    inventory,
    forMember((d) => d.name, mapFrom((s: UpdateInventoryDto) => s.name ?? null)),
    forMember((d) => d.quantity, mapFrom((s: UpdateInventoryDto) => s.quantity ?? null)),
    forMember((d) => d.price, mapFrom((s: UpdateInventoryDto) => s.price ?? null)),
    forMember((d) => d.status, mapFrom((s: UpdateInventoryDto) => s.status ?? null))
  );

  // Mapping from inventory to InventoryResponseDto
  createMap(
    mapper,
    inventory,
    InventoryResponseDto,
    forMember((d) => d.id, mapFrom((s: inventory) => s.id)),
    forMember((d) => d.name, mapFrom((s: inventory) => s.name)),
    forMember((d) => d.quantity, mapFrom((s: inventory) => s.quantity ?? null)),
    forMember((d) => d.price, mapFrom((s: inventory) => s.price ?? null)),
    forMember((d) => d.status, mapFrom((s: inventory) => s.status ?? null)),
   
  );
};

