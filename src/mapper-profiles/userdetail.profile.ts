//src/mapper-profiles/userdetail.profile.ts

import { UserDetailDto, CreateUserDetailDto, UpdateUserDetailDto, UserDetailListResponseDto } from '@/dtos/userdetail.dto';
import userdetail from '@/models/userdetail'; 
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const userDetailProfile: MappingProfile = (mapper) => {
  // Mapping from userdetail model to UserDetailDto
  createMap(
    mapper,
    userdetail,
    UserDetailDto,
    forMember((d) => d.id, mapFrom((s: userdetail) => s.id)),
    forMember((d) => d.userType, mapFrom((s: userdetail) => s.userType ?? null)),
    forMember((d) => d.fullname, mapFrom((s: userdetail) => s.fullname ?? null)),
    forMember((d) => d.gstin, mapFrom((s: userdetail) => s.gstin ?? null)),
    forMember((d) => d.pan, mapFrom((s: userdetail) => s.pan ?? null)),
    forMember((d) => d.aadhaar, mapFrom((s: userdetail) => s.aadhaar ?? null)),
    forMember((d) => d.emailId, mapFrom((s: userdetail) => s.emailId ?? null)),
    forMember((d) => d.line1, mapFrom((s: userdetail) => s.line1 ?? null)),
    forMember((d) => d.line2, mapFrom((s: userdetail) => s.line2 ?? null)),
    forMember((d) => d.pincode, mapFrom((s: userdetail) => s.pincode ?? null)),
    forMember((d) => d.city, mapFrom((s: userdetail) => s.city ?? null)),
    forMember((d) => d.state, mapFrom((s: userdetail) => s.state ?? null)),
    forMember((d) => d.alternateMobile, mapFrom((s: userdetail) => s.alternateMobile ?? null)),
    forMember((d) => d.defaultAddressId, mapFrom((s: userdetail) => s.defaultAddressId ?? null)),
    forMember((d) => d.userId, mapFrom((s: userdetail) => s.userId ?? null)),
    forMember((d) => d.enableSMS, mapFrom((s: userdetail) => s.enableSMS ? true : false)),
    forMember((d) => d.enableWhatsApp, mapFrom((s: userdetail) => s.enableWhatsApp ? true : false))
  );

  // Mapping from CreateUserDetailDto to userdetail
  createMap(
    mapper,
    CreateUserDetailDto,
    userdetail,
    forMember((d) => d.id, mapFrom((s: CreateUserDetailDto) => s.id)),
    forMember((d) => d.userType, mapFrom((s: CreateUserDetailDto) => s.userType ?? null)),
    forMember((d) => d.fullname, mapFrom((s: CreateUserDetailDto) => s.fullname ?? null)),
    forMember((d) => d.gstin, mapFrom((s: CreateUserDetailDto) => s.gstin ?? null)),
    forMember((d) => d.pan, mapFrom((s: CreateUserDetailDto) => s.pan ?? null)),
    forMember((d) => d.aadhaar, mapFrom((s: CreateUserDetailDto) => s.aadhaar ?? null)),
    forMember((d) => d.emailId, mapFrom((s: CreateUserDetailDto) => s.emailId ?? null)),
    forMember((d) => d.line1, mapFrom((s: CreateUserDetailDto) => s.line1 ?? null)),
    forMember((d) => d.line2, mapFrom((s: CreateUserDetailDto) => s.line2 ?? null)),
    forMember((d) => d.pincode, mapFrom((s: CreateUserDetailDto) => s.pincode ?? null)),
    forMember((d) => d.city, mapFrom((s: CreateUserDetailDto) => s.city ?? null)),
    forMember((d) => d.state, mapFrom((s: CreateUserDetailDto) => s.state ?? null)),
    forMember((d) => d.alternateMobile, mapFrom((s: CreateUserDetailDto) => s.alternateMobile ?? null)),
    forMember((d) => d.defaultAddressId, mapFrom((s: CreateUserDetailDto) => s.defaultAddressId ?? null)),
    forMember((d) => d.userId, mapFrom((s: CreateUserDetailDto) => s.userId ?? null)),
    forMember((d) => d.enableSMS, mapFrom((s: CreateUserDetailDto) => s.enableSMS ? true : false)),
    forMember((d) => d.enableWhatsApp, mapFrom((s: CreateUserDetailDto) => s.enableWhatsApp ? true : false))
  );

  // Mapping from UpdateUserDetailDto to userdetail
  createMap(
    mapper,
    UpdateUserDetailDto,
    userdetail,
    forMember((d) => d.id, mapFrom((s: UpdateUserDetailDto) => s.id ?? null)),
    forMember((d) => d.userType, mapFrom((s: UpdateUserDetailDto) => s.userType ?? null)),
    forMember((d) => d.fullname, mapFrom((s: UpdateUserDetailDto) => s.fullname ?? null)),
    forMember((d) => d.gstin, mapFrom((s: UpdateUserDetailDto) => s.gstin ?? null)),
    forMember((d) => d.pan, mapFrom((s: UpdateUserDetailDto) => s.pan ?? null)),
    forMember((d) => d.aadhaar, mapFrom((s: UpdateUserDetailDto) => s.aadhaar ?? null)),
    forMember((d) => d.emailId, mapFrom((s: UpdateUserDetailDto) => s.emailId ?? null)),
    forMember((d) => d.line1, mapFrom((s: UpdateUserDetailDto) => s.line1 ?? null)),
    forMember((d) => d.line2, mapFrom((s: UpdateUserDetailDto) => s.line2 ?? null)),
    forMember((d) => d.pincode, mapFrom((s: UpdateUserDetailDto) => s.pincode ?? null)),
    forMember((d) => d.city, mapFrom((s: UpdateUserDetailDto) => s.city ?? null)),
    forMember((d) => d.state, mapFrom((s: UpdateUserDetailDto) => s.state ?? null)),
    forMember((d) => d.alternateMobile, mapFrom((s: UpdateUserDetailDto) => s.alternateMobile ?? null)),
    forMember((d) => d.defaultAddressId, mapFrom((s: UpdateUserDetailDto) => s.defaultAddressId ?? null)),
    forMember((d) => d.userId, mapFrom((s: UpdateUserDetailDto) => s.userId ?? null)),
    forMember((d) => d.enableSMS, mapFrom((s: UpdateUserDetailDto) => s.enableSMS ? true : false)),
    forMember((d) => d.enableWhatsApp, mapFrom((s: UpdateUserDetailDto) => s.enableWhatsApp ? true : false))
  );

  // Mapping from userdetail to UserDetailListResponseDto
  createMap(
    mapper,
    userdetail,
    UserDetailListResponseDto,
    forMember((d) => d.id, mapFrom((s: userdetail) => s.id)),
    forMember((d) => d.userType, mapFrom((s: userdetail) => s.userType ?? null)),
    forMember((d) => d.fullname, mapFrom((s: userdetail) => s.fullname ?? null)),
    forMember((d) => d.gstin, mapFrom((s: userdetail) => s.gstin ?? null)),
    forMember((d) => d.pan, mapFrom((s: userdetail) => s.pan ?? null)),
    forMember((d) => d.aadhaar, mapFrom((s: userdetail) => s.aadhaar ?? null)),
    forMember((d) => d.emailId, mapFrom((s: userdetail) => s.emailId ?? null)),
    forMember((d) => d.line1, mapFrom((s: userdetail) => s.line1 ?? null)),
    forMember((d) => d.line2, mapFrom((s: userdetail) => s.line2 ?? null)),
    forMember((d) => d.pincode, mapFrom((s: userdetail) => s.pincode ?? null)),
    forMember((d) => d.city, mapFrom((s: userdetail) => s.city ?? null)),
    forMember((d) => d.state, mapFrom((s: userdetail) => s.state ?? null)),
    forMember((d) => d.alternateMobile, mapFrom((s: userdetail) => s.alternateMobile ?? null)),
    forMember((d) => d.defaultAddressId, mapFrom((s: userdetail) => s.defaultAddressId ?? null)),
    forMember((d) => d.enableSMS, mapFrom((s: userdetail) => s.enableSMS ? true : false)),
    forMember((d) => d.enableWhatsApp, mapFrom((s: userdetail) => s.enableWhatsApp ? true : false))
  );
};

