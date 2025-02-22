//src/mapper-profiles/user-session.mapper.profile.ts


import { UserSessionDto, CreateUserSessionDto, UpdateUserSessionDto, UserSessionResponseDto } from '@/dtos/user-session.dto';
import usersession  from '@/models/userSession';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const userSessionProfile: MappingProfile = (mapper) => {
  createMap(
    mapper,
    usersession, // Source type (usersession model)
    UserSessionDto, // Destination type (DTO)
    forMember((d) => d.sid, mapFrom((s: usersession) => s.sid)), 
    forMember((d) => d.expires, mapFrom((s: usersession) => s.expires)), 
    forMember((d) => d.data, mapFrom((s: usersession) => s.data)), 
    forMember((d) => d.createdAt, mapFrom((s: usersession) => s.createdAt)), 
    forMember((d) => d.updatedAt, mapFrom((s: usersession) => s.updatedAt)), 
    forMember((d) => d.userId, mapFrom((s: usersession) => s.userId)) 
  );

  // Mapping from CreateUserSessionDto to usersession
  createMap(
    mapper,
    CreateUserSessionDto, // Source type (DTO)
    usersession, // Destination type (usersession model)
    forMember((d) => d.sid, mapFrom((s: CreateUserSessionDto) => s.sid)), 
    forMember((d) => d.expires, mapFrom((s: CreateUserSessionDto) => s.expires)), 
    forMember((d) => d.data, mapFrom((s: CreateUserSessionDto) => s.data)), 
    forMember((d) => d.userId, mapFrom((s: CreateUserSessionDto) => s.userId)) 
  );

  // Mapping from UpdateUserSessionDto to usersession
  createMap(
    mapper,
    UpdateUserSessionDto, // Source type (DTO)
    usersession, // Destination type (usersession model)
    forMember((d) => d.sid, mapFrom((s: UpdateUserSessionDto) => s.sid)), 
    forMember((d) => d.expires, mapFrom((s: UpdateUserSessionDto) => s.expires)), 
    forMember((d) => d.data, mapFrom((s: UpdateUserSessionDto) => s.data)), 
    forMember((d) => d.updatedAt, mapFrom((s: UpdateUserSessionDto) => s.updatedAt)), 
    forMember((d) => d.userId, mapFrom((s: UpdateUserSessionDto) => s.userId)) 
  );

  // Mapping from usersession to UserSessionResponseDto
  createMap(
    mapper,
    usersession, // Source type (usersession model)
    UserSessionResponseDto, // Destination type (DTO)
    forMember((d) => d.sid, mapFrom((s: usersession) => s.sid)), 
    forMember((d) => d.expires, mapFrom((s: usersession) => s.expires)), 
    forMember((d) => d.data, mapFrom((s: usersession) => s.data)), 
    forMember((d) => d.createdAt, mapFrom((s: usersession) => s.createdAt)), 
    forMember((d) => d.updatedAt, mapFrom((s: usersession) => s.updatedAt)), 
    forMember((d) => d.userId, mapFrom((s: usersession) => s.userId)) 
  );
};
