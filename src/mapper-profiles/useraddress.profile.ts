import { UserAddressDto, CreateUserAddressDto, UpdateUserAddressDto, UserAddressListResponseDto } from '@/dtos/useraddress.dto';
import UserAddress from '@/models/useraddress';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const userAddressProfile: MappingProfile = (mapper) => {
  // Mapping from UserAddress model to UserAddressDto
  createMap(
    mapper,
    UserAddress,
    UserAddressDto,
    forMember((d) => d.id, mapFrom((s: UserAddress) => s.id)),
    forMember((d) => d.fullName, mapFrom((s: UserAddress) => s.fullName ?? null)),
    forMember((d) => d.mobileNumber, mapFrom((s: UserAddress) => s.mobileNumber ?? null)),
    forMember((d) => d.line1, mapFrom((s: UserAddress) => s.line1 ?? null)),
    forMember((d) => d.line2, mapFrom((s: UserAddress) => s.line2 ?? null)),
    forMember((d) => d.pincode, mapFrom((s: UserAddress) => s.pincode ?? null)),
    forMember((d) => d.city, mapFrom((s: UserAddress) => s.city ?? null)),
    forMember((d) => d.state, mapFrom((s: UserAddress) => s.state ?? null)),
    forMember((d) => d.createdAt, mapFrom((s: UserAddress) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: UserAddress) => s.updatedAt)),
    forMember((d) => d.userId, mapFrom((s: UserAddress) => s.userId ?? null))
  );

  // Mapping from CreateUserAddressDto to UserAddress model
  createMap(
    mapper,
    CreateUserAddressDto,
    UserAddress,
    forMember((d) => d.fullName, mapFrom((s: CreateUserAddressDto) => s.fullName ?? null)),
    forMember((d) => d.mobileNumber, mapFrom((s: CreateUserAddressDto) => s.mobileNumber ?? null)),
    forMember((d) => d.line1, mapFrom((s: CreateUserAddressDto) => s.line1 ?? null)),
    forMember((d) => d.line2, mapFrom((s: CreateUserAddressDto) => s.line2 ?? null)),
    forMember((d) => d.pincode, mapFrom((s: CreateUserAddressDto) => s.pincode ?? null)),
    forMember((d) => d.city, mapFrom((s: CreateUserAddressDto) => s.city ?? null)),
    forMember((d) => d.state, mapFrom((s: CreateUserAddressDto) => s.state ?? null)),
    forMember((d) => d.userId, mapFrom((s: CreateUserAddressDto) => s.userId ?? null))
  );

  // Mapping from UpdateUserAddressDto to UserAddress model
  createMap(
    mapper,
    UpdateUserAddressDto,
    UserAddress,
    forMember((d) => d.id, mapFrom((s: UpdateUserAddressDto) => s.id ?? null)),
    forMember((d) => d.fullName, mapFrom((s: UpdateUserAddressDto) => s.fullName ?? null)),
    forMember((d) => d.mobileNumber, mapFrom((s: UpdateUserAddressDto) => s.mobileNumber ?? null)),
    forMember((d) => d.line1, mapFrom((s: UpdateUserAddressDto) => s.line1 ?? null)),
    forMember((d) => d.line2, mapFrom((s: UpdateUserAddressDto) => s.line2 ?? null)),
    forMember((d) => d.pincode, mapFrom((s: UpdateUserAddressDto) => s.pincode ?? null)),
    forMember((d) => d.city, mapFrom((s: UpdateUserAddressDto) => s.city ?? null)),
    forMember((d) => d.state, mapFrom((s: UpdateUserAddressDto) => s.state ?? null)),
    forMember((d) => d.userId, mapFrom((s: UpdateUserAddressDto) => s.userId ?? null))
  );

  // Mapping from UserAddress model to UserAddressListResponseDto
  createMap(
    mapper,
    UserAddress,
    UserAddressListResponseDto,
    forMember((d) => d.id, mapFrom((s: UserAddress) => s.id)),
    forMember((d) => d.fullName, mapFrom((s: UserAddress) => s.fullName ?? null)),
    forMember((d) => d.mobileNumber, mapFrom((s: UserAddress) => s.mobileNumber ?? null)),
    forMember((d) => d.line1, mapFrom((s: UserAddress) => s.line1 ?? null)),
    forMember((d) => d.line2, mapFrom((s: UserAddress) => s.line2 ?? null)),
    forMember((d) => d.pincode, mapFrom((s: UserAddress) => s.pincode ?? null)),
    forMember((d) => d.city, mapFrom((s: UserAddress) => s.city ?? null)),
    forMember((d) => d.state, mapFrom((s: UserAddress) => s.state ?? null)),
    forMember((d) => d.createdAt, mapFrom((s: UserAddress) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: UserAddress) => s.updatedAt)),
    forMember((d) => d.userId, mapFrom((s: UserAddress) => s.userId ?? null))
  );
};
