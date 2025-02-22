import { CategoryTypeDto, CreateCategoryTypeDto, UpdateCategoryTypeDto, CategoryTypeResponseDto } from '@/dtos/categorytypes.dto';
import categorytypes from '@/models/categorytypes';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const categoryTypesProfile: MappingProfile = (mapper) => {
  // Mapping from categorytypes to CategoryTypeDto
  createMap(
    mapper,
    categorytypes,
    CategoryTypeDto,
    forMember((d) => d.id, mapFrom((s) => s.id)),
    forMember((d) => d.type, mapFrom((s) => s.type)),  
    forMember((d) => d.name, mapFrom((s) => s.name)),
    forMember((d) => d.displayRate, mapFrom((s) => s.displayRate)),
    forMember((d) => d.primaryDimension, mapFrom((s) => s.primaryDimension ?? null)),
    forMember((d) => d.imageUrl, mapFrom((s) => s.imageUrl ?? null)), 
    forMember((d) => d.isDisabled, mapFrom((s) => s.isDisabled != null ? Boolean(s.isDisabled) : false)), 
  );

  // Mapping from CreateCategoryTypeDto to categorytypes
  createMap(
    mapper,
    CreateCategoryTypeDto,
    categorytypes,
    forMember((d) => d.type, mapFrom((s) => s.type)),  
    forMember((d) => d.name, mapFrom((s) => s.name)),
    forMember((d) => d.displayRate, mapFrom((s) => s.displayRate)),
    forMember((d) => d.primaryDimension, mapFrom((s) => s.primaryDimension ?? null)),
    forMember((d) => d.imageUrl, mapFrom((s) => s.imageUrl ?? null)),
    forMember((d) => d.isDisabled, mapFrom((s) => s.isDisabled != null ? Boolean(s.isDisabled) : false)), 
  );

  // Mapping from UpdateCategoryTypeDto to categorytypes
  createMap(
    mapper,
    UpdateCategoryTypeDto,
    categorytypes,
    forMember((d) => d.id, mapFrom((s) => s.id)),
    forMember((d) => d.type, mapFrom((s) => s.type ?? null)),
    forMember((d) => d.name, mapFrom((s) => s.name)),
    forMember((d) => d.displayRate, mapFrom((s) => s.displayRate)),
    forMember((d) => d.primaryDimension, mapFrom((s) => s.primaryDimension ?? null)),
    forMember((d) => d.imageUrl, mapFrom((s) => s.imageUrl ?? null)),
    forMember((d) => d.isDisabled, mapFrom((s) => s.isDisabled != null ? Boolean(s.isDisabled) : false)), 
  );

  // Mapping from categorytypes to CategoryTypeResponseDto
  createMap(
    mapper,
    categorytypes,
    CategoryTypeResponseDto,
    forMember((d) => d.id, mapFrom((s) => s.id)),
    forMember((d) => d.type, mapFrom((s) => s.type ?? null)),
    forMember((d) => d.name, mapFrom((s) => s.name)),
    forMember((d) => d.displayRate, mapFrom((s) => s.displayRate)),
    forMember((d) => d.primaryDimension, mapFrom((s) => s.primaryDimension ?? null)),
    forMember((d) => d.imageUrl, mapFrom((s) => s.imageUrl ?? null)),
    forMember((d) => d.isDisabled, mapFrom((s) => s.isDisabled != null ? Boolean(s.isDisabled) : false)), 
  );
};
