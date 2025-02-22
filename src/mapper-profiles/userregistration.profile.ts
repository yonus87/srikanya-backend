//src/mapper-profiles/userregistration.profile.ts

import { 
    UserRegistrationDto, 
    CreateUserRegistrationDto, 
    UpdateUserRegistrationDto, 
    UserRegistrationResponseDto 
  } from '@/dtos/userregistration.dto';
  import UserRegistration from '@/models/userRegistration';
  import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';
  
  export const userRegistrationProfile: MappingProfile = (mapper) => {
    // Mapping from UserRegistration to UserRegistrationDto
    createMap(
      mapper,
      UserRegistration,
      UserRegistrationDto,
      forMember((d) => d.id, mapFrom((s: UserRegistration) => s.id)),
      forMember((d) => d.mobileNumber, mapFrom((s: UserRegistration) => s.mobileNumber ?? null)),
      forMember((d) => d.otp, mapFrom((s: UserRegistration) => s.otp ?? null)),
      forMember((d) => d.numberOfOtpSent, mapFrom((s: UserRegistration) => s.numberOfOtpSent ?? 0)),
      forMember((d) => d.numberOfOtpTried, mapFrom((s: UserRegistration) => s.numberOfOtpTried ?? 0)),
    );
  
    // Mapping from CreateUserRegistrationDto to UserRegistration
    createMap(
      mapper,
      CreateUserRegistrationDto,
      UserRegistration,
      forMember((d) => d.mobileNumber, mapFrom((s) => s.mobileNumber)),
      forMember((d) => d.otp, mapFrom((s) => s.otp ?? null)),
      forMember((d) => d.numberOfOtpSent, mapFrom((s) => s.numberOfOtpSent)),
      forMember((d) => d.numberOfOtpTried, mapFrom((s) => s.numberOfOtpTried)),
    );
    
  
    // Mapping from UpdateUserRegistrationDto to UserRegistration
    createMap(
      mapper,
      UpdateUserRegistrationDto,
      UserRegistration,
      forMember((d) => d.mobileNumber, mapFrom((s: UpdateUserRegistrationDto) => s.mobileNumber ?? null)),
      forMember((d) => d.otp, mapFrom((s: UpdateUserRegistrationDto) => s.otp ?? null)),
      forMember((d) => d.numberOfOtpSent, mapFrom((s: UpdateUserRegistrationDto) => s.numberOfOtpSent ?? 0)),
      forMember((d) => d.numberOfOtpTried, mapFrom((s: UpdateUserRegistrationDto) => s.numberOfOtpTried ?? 0)),
      forMember((d) => d.updatedAt, mapFrom(() => new Date())), 
    );
  
    // Mapping from UserRegistration to UserRegistrationResponseDto
    createMap(
      mapper,
      UserRegistration,
      UserRegistrationResponseDto,
      forMember((d) => d.id, mapFrom((s: UserRegistration) => s.id)),
      forMember((d) => d.mobileNumber, mapFrom((s: UserRegistration) => s.mobileNumber ?? null)),
      forMember((d) => d.otp, mapFrom((s: UserRegistration) => s.otp ?? null)),
      forMember((d) => d.numberOfOtpSent, mapFrom((s: UserRegistration) => s.numberOfOtpSent ?? 0)),
      forMember((d) => d.numberOfOtpTried, mapFrom((s: UserRegistration) => s.numberOfOtpTried ?? 0)),
      
    );
  };
  
