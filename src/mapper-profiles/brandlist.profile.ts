
// src/mapper-profiles/brandlist.profile.ts

import { BrandListDto, UpdateBrandDto, CreateBrandDto, BrandListResponseDto } from '@/dtos/brandlist.dto';
import  brandlist  from '@/models/brandlist';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const brandlistProfile: MappingProfile = (mapper) => {
  // Mapping from brandlist to BrandListDto
  createMap(
    mapper,
    brandlist,
    BrandListDto,
    forMember((d) => d.id, mapFrom((s: brandlist) => s.id)),
    forMember((d) => d.name, mapFrom((s: brandlist) => s.name)),
    forMember((d) => d.link, mapFrom((s: brandlist) => s.link ?? null)),
    forMember((d) => d.type, mapFrom((s: brandlist) => s.type ?? null)),
    // Convert boolean to number (1 | 0)
    forMember((d) => d.isDisabled, mapFrom((s: brandlist) =>Boolean(s.isDisabled ? 1 : 0)))
  );

  // Mapping from CreateBrandDto to brandlist
  createMap(
    mapper,
    CreateBrandDto,
    brandlist,
    forMember((d) => d.name, mapFrom((s: CreateBrandDto) => s.name)),
    forMember((d) => d.link, mapFrom((s: CreateBrandDto) => s.link ?? null)),
    forMember((d) => d.type, mapFrom((s: CreateBrandDto) => s.type ?? null)),
    // Convert boolean to number (1 | 0)
    forMember((d) => d.isDisabled, mapFrom((s: CreateBrandDto) =>Boolean(s.isDisabled ? 1 : 0)))
  );

  // Mapping from UpdateBrandDto to brandlist
  createMap(
    mapper,
    UpdateBrandDto,
    brandlist,
    forMember((d) => d.name, mapFrom((s: UpdateBrandDto) => s.name ?? null)),
    forMember((d) => d.link, mapFrom((s: UpdateBrandDto) => s.link ?? null)),
    forMember((d) => d.type, mapFrom((s: UpdateBrandDto) => s.type ?? null)),
    // Convert boolean to number (1 | 0)
    forMember((d) => d.isDisabled, mapFrom((s: UpdateBrandDto) =>Boolean(s.isDisabled ? 1 : 0)))
  );

  // Mapping from brandlist to BrandListResponseDto
  createMap(
    mapper,
    brandlist,
    BrandListResponseDto,
    forMember((d) => d.id, mapFrom((s: brandlist) => s.id)),
    forMember((d) => d.name, mapFrom((s: brandlist) => s.name)),
    forMember((d) => d.link, mapFrom((s: brandlist) => s.link ?? null)),
    forMember((d) => d.type, mapFrom((s: brandlist) => s.type ?? null)),
    // Convert boolean to number (1 | 0)
    forMember((d) => d.isDisabled, mapFrom((s: brandlist) => Boolean (s.isDisabled ? 1 : 0)))
  );
};