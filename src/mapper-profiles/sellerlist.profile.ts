//src/mapper-profiles/sellerlist.profile.ts

import { SellerListDto, SellerListResponseDto, CreateSellerDto, UpdateSellerListDto } from '@/dtos/sellerlist.dto';
import sellerlist from '@/models/sellerlist';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const sellerListProfile: MappingProfile = (mapper) => {
  // Mapping from sellerlist to SellerListDto
createMap(

    mapper,
    sellerlist, // Source type (sellerlist model)
    SellerListDto, // Destination type (Seller List DTO)
    forMember((d) => d.id, mapFrom((s: sellerlist) => s.id)),
    forMember((d) => d.name, mapFrom((s: sellerlist) => s.name)),
    forMember((d) => d.companyName, mapFrom((s: sellerlist) => s.companyName)),
    forMember((d) => d.gstin, mapFrom((s: sellerlist) => s.gstin)),
    forMember((d) => d.mobileNumber, mapFrom((s: sellerlist) => s.mobileNumber)),
    forMember((d) => d.emailId, mapFrom((s: sellerlist) => s.emailId)),
    forMember((d) => d.line1, mapFrom((s: sellerlist) => s.line1)),
    forMember((d) => d.line2, mapFrom((s: sellerlist) => s.line2)),
    forMember((d) => d.pincode, mapFrom((s: sellerlist) => s.pincode)),
    forMember((d) => d.city, mapFrom((s: sellerlist) => s.city)),
    forMember((d) => d.state, mapFrom((s: sellerlist) => s.state)),
    forMember((d) => d.alternateMobile, mapFrom((s: sellerlist) => s.alternateMobile)),
    forMember((d) => d.createdAt, mapFrom((s: sellerlist) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: sellerlist) => s.updatedAt))
  );
  
  // Mapping from CreateSellerDto to sellerlist
  createMap(
    mapper,
    CreateSellerDto,
    sellerlist,
    forMember((d) => d.name, mapFrom((s: CreateSellerDto) => s.name)),
    forMember((d) => d.companyName, mapFrom((s: CreateSellerDto) => s.companyName)),
    forMember((d) => d.gstin, mapFrom((s: CreateSellerDto) => s.gstin)),
    forMember((d) => d.mobileNumber, mapFrom((s: CreateSellerDto) => s.mobileNumber)),
    forMember((d) => d.emailId, mapFrom((s: CreateSellerDto) => s.emailId)),
    forMember((d) => d.line1, mapFrom((s: CreateSellerDto) => s.line1)),
    forMember((d) => d.line2, mapFrom((s: CreateSellerDto) => s.line2)),
    forMember((d) => d.pincode, mapFrom((s: CreateSellerDto) => s.pincode)),
    forMember((d) => d.city, mapFrom((s: CreateSellerDto) => s.city)),
    forMember((d) => d.state, mapFrom((s: CreateSellerDto) => s.state)),
    forMember((d) => d.alternateMobile, mapFrom((s: CreateSellerDto) => s.alternateMobile)),
  );
  
  // Mapping from UpdateSellerDto to sellerlist
  createMap(
    mapper,
    UpdateSellerListDto,
    sellerlist,
    forMember((d) => d.id, mapFrom((s: UpdateSellerListDto) => s.id)),
    forMember((d) => d.name, mapFrom((s: UpdateSellerListDto) => s.name)),
    forMember((d) => d.companyName, mapFrom((s: UpdateSellerListDto) => s.companyName)),
    forMember((d) => d.gstin, mapFrom((s: UpdateSellerListDto) => s.gstin)),
    forMember((d) => d.mobileNumber, mapFrom((s: UpdateSellerListDto) => s.mobileNumber)),
    forMember((d) => d.emailId, mapFrom((s: UpdateSellerListDto) => s.emailId)),
    forMember((d) => d.line1, mapFrom((s: UpdateSellerListDto) => s.line1)),
    forMember((d) => d.line2, mapFrom((s: UpdateSellerListDto) => s.line2)),
    forMember((d) => d.pincode, mapFrom((s: UpdateSellerListDto) => s.pincode)),
    forMember((d) => d.city, mapFrom((s: UpdateSellerListDto) => s.city)),
    forMember((d) => d.state, mapFrom((s: UpdateSellerListDto) => s.state)),
    forMember((d) => d.alternateMobile, mapFrom((s: UpdateSellerListDto) => s.alternateMobile)),
  );
  
  // Mapping from sellerlist to SellerListResponseDto (response DTO)
  createMap(
    mapper,
    sellerlist, // Source type (sellerlist model)
    SellerListResponseDto, // Destination type (Seller List Response DTO)
    forMember((d) => d.id, mapFrom((s: sellerlist) => s.id)),
    forMember((d) => d.name, mapFrom((s: sellerlist) => s.name)),
    forMember((d) => d.companyName, mapFrom((s: sellerlist) => s.companyName)),
    forMember((d) => d.gstin, mapFrom((s: sellerlist) => s.gstin)),
    forMember((d) => d.mobileNumber, mapFrom((s: sellerlist) => s.mobileNumber)),
    forMember((d) => d.emailId, mapFrom((s: sellerlist) => s.emailId)),
    forMember((d) => d.line1, mapFrom((s: sellerlist) => s.line1)),
    forMember((d) => d.line2, mapFrom((s: sellerlist) => s.line2)),
    forMember((d) => d.pincode, mapFrom((s: sellerlist) => s.pincode)),
    forMember((d) => d.city, mapFrom((s: sellerlist) => s.city)),
    forMember((d) => d.state, mapFrom((s: sellerlist) => s.state)),
    forMember((d) => d.alternateMobile, mapFrom((s: sellerlist) => s.alternateMobile)),
    forMember((d) => d.createdAt, mapFrom((s: sellerlist) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: sellerlist) => s.updatedAt))
  );
  
};
