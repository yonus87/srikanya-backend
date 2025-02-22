//src/mapper-profiles/inventorytransaction.profile.ts

import { InventoryTransactionDto, CreateInventoryTransactionDto, UpdateInventoryTransactionDto, InventoryTransactionResponseDto } from '@/dtos/inventorytransaction.dto';
import  inventorytransaction  from '@/models/inventorytransaction';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const inventoryTransactionProfile: MappingProfile = (mapper) => {
    createMap(
      mapper,
      inventorytransaction, // Source type
      InventoryTransactionResponseDto, // Destination type
      forMember((d) => d.id, mapFrom((s: inventorytransaction) => Number(s.id))),
      forMember((d) => d.sellerId, mapFrom((s: inventorytransaction) => s.sellerId)),
      forMember((d) => d.inventoryId, mapFrom((s: inventorytransaction) => s.inventoryId)),
      forMember((d) => d.invoiceId, mapFrom((s: inventorytransaction) => s.invoiceId)),
      forMember((d) => d.purchaseDate, mapFrom((s: inventorytransaction) => s.purchaseDate)),
      forMember((d) => d.vehicleNumber, mapFrom((s: inventorytransaction) => s.vehicleNumber)),
      forMember((d) => d.quantity, mapFrom((s: inventorytransaction) => s.quantity)),
      forMember((d) => d.remainingQuantity, mapFrom((s: inventorytransaction) => s.remainingQuantity)),
      forMember((d) => d.productCost, mapFrom((s: inventorytransaction) => s.productCost)),
      forMember((d) => d.transportationCost, mapFrom((s: inventorytransaction) => s.transportationCost)),
      forMember((d) => d.loadingCost, mapFrom((s: inventorytransaction) => s.loadingCost)),
      forMember((d) => d.unloadingCost, mapFrom((s: inventorytransaction) => s.unloadingCost)),
      forMember((d) => d.sgstCost, mapFrom((s: inventorytransaction) => s.sgstCost)),
      forMember((d) => d.cgstCost, mapFrom((s: inventorytransaction) => s.cgstCost)),
      forMember((d) => d.igstCost, mapFrom((s: inventorytransaction) => s.igstCost)),
      forMember((d) => d.otherCost, mapFrom((s: inventorytransaction) => s.otherCost)),
      forMember((d) => d.totalCost, mapFrom((s: inventorytransaction) => s.totalCost)),
      forMember((d) => d.inventoryUsed, mapFrom((s: inventorytransaction) =>(s.inventoryUsed))),
      forMember((d) => d.updatedBy, mapFrom((s: inventorytransaction) => s.updatedBy)),
    );
  
    createMap(
      mapper,
      CreateInventoryTransactionDto, // Source type
      inventorytransaction, // Destination type
      forMember((d) => d.sellerId, mapFrom((s: CreateInventoryTransactionDto) => s.sellerId)),
      forMember((d) => d.inventoryId, mapFrom((s: CreateInventoryTransactionDto) => s.inventoryId)),
      forMember((d) => d.invoiceId, mapFrom((s: CreateInventoryTransactionDto) => s.invoiceId)),
      forMember((d) => d.purchaseDate, mapFrom((s: CreateInventoryTransactionDto) => s.purchaseDate)),
      forMember((d) => d.vehicleNumber, mapFrom((s: CreateInventoryTransactionDto) => s.vehicleNumber)),
      forMember((d) => d.quantity, mapFrom((s: CreateInventoryTransactionDto) => s.quantity)),
      forMember((d) => d.remainingQuantity, mapFrom((s: CreateInventoryTransactionDto) => s.remainingQuantity)),
      forMember((d) => d.productCost, mapFrom((s: CreateInventoryTransactionDto) => s.productCost)),
      forMember((d) => d.transportationCost, mapFrom((s: CreateInventoryTransactionDto) => s.transportationCost)),
      forMember((d) => d.loadingCost, mapFrom((s: CreateInventoryTransactionDto) => s.loadingCost)),
      forMember((d) => d.unloadingCost, mapFrom((s: CreateInventoryTransactionDto) => s.unloadingCost)),
      forMember((d) => d.sgstCost, mapFrom((s: CreateInventoryTransactionDto) => s.sgstCost)),
      forMember((d) => d.cgstCost, mapFrom((s: CreateInventoryTransactionDto) => s.cgstCost)),
      forMember((d) => d.igstCost, mapFrom((s: CreateInventoryTransactionDto) => s.igstCost)),
      forMember((d) => d.otherCost, mapFrom((s: CreateInventoryTransactionDto) => s.otherCost)),
      forMember((d) => d.totalCost, mapFrom((s: CreateInventoryTransactionDto) => s.totalCost)),
      forMember((d) => d.inventoryUsed, mapFrom((s: CreateInventoryTransactionDto) => s.inventoryUsed)),
      forMember((d) => d.updatedBy, mapFrom((s: CreateInventoryTransactionDto) => s.updatedBy))
    );
  
    createMap(
      mapper,
      UpdateInventoryTransactionDto, // Source type
      inventorytransaction, // Destination type
      forMember((d) => d.sellerId, mapFrom((s: UpdateInventoryTransactionDto) => s.sellerId)),
      forMember((d) => d.inventoryId, mapFrom((s: UpdateInventoryTransactionDto) => s.inventoryId)),
      forMember((d) => d.invoiceId, mapFrom((s: UpdateInventoryTransactionDto) => s.invoiceId)),
      forMember((d) => d.purchaseDate, mapFrom((s: UpdateInventoryTransactionDto) => s.purchaseDate)),
      forMember((d) => d.vehicleNumber, mapFrom((s: UpdateInventoryTransactionDto) => s.vehicleNumber)),
      forMember((d) => d.quantity, mapFrom((s: UpdateInventoryTransactionDto) => s.quantity)),
      forMember((d) => d.remainingQuantity, mapFrom((s: UpdateInventoryTransactionDto) => s.remainingQuantity)),
      forMember((d) => d.productCost, mapFrom((s: UpdateInventoryTransactionDto) => s.productCost)),
      forMember((d) => d.transportationCost, mapFrom((s: UpdateInventoryTransactionDto) => s.transportationCost)),
      forMember((d) => d.loadingCost, mapFrom((s: UpdateInventoryTransactionDto) => s.loadingCost)),
      forMember((d) => d.unloadingCost, mapFrom((s: UpdateInventoryTransactionDto) => s.unloadingCost)),
      forMember((d) => d.sgstCost, mapFrom((s: UpdateInventoryTransactionDto) => s.sgstCost)),
      forMember((d) => d.cgstCost, mapFrom((s: UpdateInventoryTransactionDto) => s.cgstCost)),
      forMember((d) => d.igstCost, mapFrom((s: UpdateInventoryTransactionDto) => s.igstCost)),
      forMember((d) => d.otherCost, mapFrom((s: UpdateInventoryTransactionDto) => s.otherCost)),
      forMember((d) => d.totalCost, mapFrom((s: UpdateInventoryTransactionDto) => s.totalCost)),
      forMember((d) => d.inventoryUsed, mapFrom((s: UpdateInventoryTransactionDto) => s.inventoryUsed)),
      forMember((d) => d.updatedBy, mapFrom((s: UpdateInventoryTransactionDto) => s.updatedBy))
    );
  };
  