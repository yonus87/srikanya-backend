//src/mapper-profiles/inventorylist.profile.ts

import { InventoryListDto,CreateInventoryListDto, UpdateInventoryListDto, InventoryListResponseDto, InventoryListListResponseDto } from '@/dtos/inventorylist.dto';
import  inventorylist  from '@/models/inventorylist';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const inventoryProfilelist: MappingProfile = (mapper) => {
  // Mapping from inventorylist to InventoryListResponseDto
  createMap(
    mapper,
    inventorylist, // Source type (inventorylist model)
    InventoryListResponseDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: inventorylist) => Number(s.id))), 
    forMember((d) => d.name, mapFrom((s: inventorylist) => s.name)),
    forMember((d) => d.brandId, mapFrom((s: inventorylist) => s.brandId)),
    forMember((d) => d.categoryId, mapFrom((s: inventorylist) => s.categoryId)),
    forMember((d) => d.locationId, mapFrom((s: inventorylist) => s.locationId)),
    
  );

  // Mapping from inventorylist to InventoryListListResponseDto (used for lists)
  createMap(
    mapper,
    inventorylist, // Source type (inventorylist model)
    InventoryListListResponseDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: inventorylist) => Number(s.id))),
    forMember((d) => d.name, mapFrom((s: inventorylist) => s.name)),
    forMember((d) => d.brandId, mapFrom((s: inventorylist) => s.brandId)),
    forMember((d) => d.categoryId, mapFrom((s: inventorylist) => s.categoryId)),
    forMember((d) => d.locationId, mapFrom((s: inventorylist) => s.locationId)),
    
  );

  // Mapping from CreateInventoryListDto to inventorylist
  createMap(
    mapper,
    CreateInventoryListDto,
    inventorylist,
    forMember((d) => d.name, mapFrom((s: CreateInventoryListDto) => s.name)),
    forMember((d) => d.brandId, mapFrom((s: CreateInventoryListDto) => s.brandId)),
    forMember((d) => d.categoryId, mapFrom((s: CreateInventoryListDto) => s.categoryId)),
    forMember((d) => d.locationId, mapFrom((s: CreateInventoryListDto) => s.locationId)),
    
  );

  // Mapping from UpdateInventoryListDto to inventorylist
  createMap(
    mapper,
    UpdateInventoryListDto,
    inventorylist,
    forMember((d) => d.id, mapFrom((s: UpdateInventoryListDto) => Number(s.id))), 
    forMember((d) => d.name, mapFrom((s: UpdateInventoryListDto) => s.name)),
    forMember((d) => d.brandId, mapFrom((s: UpdateInventoryListDto) => s.brandId)),
    forMember((d) => d.categoryId, mapFrom((s: UpdateInventoryListDto) => s.categoryId)),
    forMember((d) => d.locationId, mapFrom((s: UpdateInventoryListDto) => s.locationId)),
  );
};