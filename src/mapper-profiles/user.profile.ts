import { UserDto, UpdateUserDto, CreateUserDto, UserListResponseDto } from '@/dtos/user.dto';
import user  from '@/models/user';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const userProfile: MappingProfile = (mapper) => {
  // Mapping from user to UserDto
  createMap(
    mapper,
    user,
    UserDto,
    forMember((d) => d.id, mapFrom((s: user) => s.id)),
    forMember((d) => d.mobileNumber, mapFrom((s: user) => s.mobileNumber ?? null)),
    forMember((d) => d.fullName, mapFrom((s: user) => s.fullName ?? null)),
    forMember((d) => d.roleId, mapFrom((s: user) => s.roleId ?? null)),
    forMember((d) => d.isMobileConfirmed, mapFrom((s: user) => Boolean(s.isMobileConfirmed ? 1 : 0))),
    forMember((d) => d.isDeleted, mapFrom((s: user) => Boolean(s.isDeleted ? 1 : 0))),
    forMember((d) => d.createdBy, mapFrom((s: user) => s.createdBy ?? null)), 
    forMember((d) => d.updatedBy, mapFrom((s: user) => s.updatedBy ?? null)), 
    forMember((d) => d.deletedBy, mapFrom((s: user) => s.deletedBy ?? null))  
  );

  // Mapping from CreateUserDto to user
  createMap(
    mapper,
    CreateUserDto,
    user,
    forMember((d) => d.id, mapFrom((s: CreateUserDto) => s.id)),
    forMember((d) => d.mobileNumber, mapFrom((s: CreateUserDto) => s.mobileNumber ?? null)),
    forMember((d) => d.fullName, mapFrom((s: CreateUserDto) => s.fullName ?? null)),
    forMember((d) => d.roleId, mapFrom((s: CreateUserDto) => s.roleId ?? null)),
    forMember((d) => d.isMobileConfirmed, mapFrom((s: CreateUserDto) => Boolean(s.isMobileConfirmed ? 1 : 0))),
    forMember((d) => d.isDeleted, mapFrom((s: CreateUserDto) => Boolean(s.isDeleted ? 1 : 0))),
    forMember((d) => d.createdBy, mapFrom((s: CreateUserDto) => s.createdBy ?? null)), 
    forMember((d) => d.updatedBy, mapFrom((s: CreateUserDto) => s.updatedBy ?? null)), 
    forMember((d) => d.deletedBy, mapFrom((s: CreateUserDto) => s.deletedBy ?? null))  
  );

  // Mapping from UpdateUserDto to user
  createMap(
    mapper,
    UpdateUserDto,
    user,
    forMember((d) => d.id, mapFrom((s: UpdateUserDto) => s.id ?? null)),
    forMember((d) => d.mobileNumber, mapFrom((s: UpdateUserDto) => s.mobileNumber ?? null)),
    forMember((d) => d.fullName, mapFrom((s: UpdateUserDto) => s.fullName ?? null)),
    forMember((d) => d.roleId, mapFrom((s: UpdateUserDto) => s.roleId ?? null)),
    forMember((d) => d.isMobileConfirmed, mapFrom((s: UpdateUserDto) => Boolean(s.isMobileConfirmed ? 1 : 0))),
    forMember((d) => d.isDeleted, mapFrom((s: UpdateUserDto) => Boolean(s.isDeleted ? 1 : 0))),
    forMember((d) => d.createdBy, mapFrom((s: UpdateUserDto) => s.createdBy ?? null)), 
    forMember((d) => d.updatedBy, mapFrom((s: UpdateUserDto) => s.updatedBy ?? null)), 
    forMember((d) => d.deletedBy, mapFrom((s: UpdateUserDto) => s.deletedBy ?? null))  
  );

  // Mapping from user to UserListResponseDto
  createMap(
    mapper,
    user,
    UserListResponseDto,
    forMember((d) => d.id, mapFrom((s: user) => s.id)),
    forMember((d) => d.mobileNumber, mapFrom((s: user) => s.mobileNumber ?? null)),
    forMember((d) => d.fullName, mapFrom((s: user) => s.fullName ?? null)),
    forMember((d) => d.roleId, mapFrom((s: user) => s.roleId ?? null)),
    forMember((d) => d.isMobileConfirmed, mapFrom((s: user) => Boolean(s.isMobileConfirmed ? 1 : 0))),
    forMember((d) => d.isDeleted, mapFrom((s: user) => Boolean(s.isDeleted ? 1 : 0))),
  );
};
