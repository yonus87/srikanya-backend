//src/mapper-profiles/contactus.profile.ts

import { ContactUsDto, CreateContactUsDto, UpdateContactUsDto, ContactUsResponseDto, ContactUsListResponseDto } from '@/dtos/contactus.dto';
  import  contactus  from '@/models/contactus';
  import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';
  
  export const contactusProfile: MappingProfile = (mapper) => {
    // Mapping from contactus to ContactUsDto
    createMap(
      mapper,
      contactus, // Source type (contactus model)
      ContactUsDto, // Destination type (DTO)
      forMember((d) => d.id, mapFrom((s: contactus) => s.id)), 
      forMember((d) => d.name, mapFrom((s: contactus) => s.name)),
      forMember((d) => d.email, mapFrom((s: contactus) => s.email)),
      forMember((d) => d.message, mapFrom((s: contactus) => s.message)),
      forMember((d) => d.status, mapFrom((s: contactus) => s.status)),
      forMember((d) => d.note, mapFrom((s: contactus) => s.note)),
    );
  
    // Mapping from CreateContactUsDto to contactus
    createMap(
      mapper,
      CreateContactUsDto,
      contactus,
      forMember((d) => d.name, mapFrom((s: CreateContactUsDto) => s.name)),
      forMember((d) => d.email, mapFrom((s: CreateContactUsDto) => s.email)),
      forMember((d) => d.message, mapFrom((s: CreateContactUsDto) => s.message)),
      forMember((d) => d.status, mapFrom((s: CreateContactUsDto) => s.status)),
      forMember((d) => d.note, mapFrom((s: CreateContactUsDto) => s.note)),
    );
  
    // Mapping from UpdateContactUsDto to contactus
    createMap(
      mapper,
      UpdateContactUsDto,
      contactus,
      forMember((d) => d.name, mapFrom((s: UpdateContactUsDto) => s.name)),
      forMember((d) => d.email, mapFrom((s: UpdateContactUsDto) => s.email)),
      forMember((d) => d.message, mapFrom((s: UpdateContactUsDto) => s.message)),
      forMember((d) => d.status, mapFrom((s: UpdateContactUsDto) => s.status)),
      forMember((d) => d.note, mapFrom((s: UpdateContactUsDto) => s.note)),
    );
  
    // Mapping from contactus to ContactUsResponseDto
    createMap(
      mapper,
      contactus, // Source type (contactus model)
      ContactUsResponseDto, // Destination type (Response DTO)
      forMember((d) => d.id, mapFrom((s: contactus) => s.id)), 
      forMember((d) => d.name, mapFrom((s: contactus) => s.name)),
      forMember((d) => d.email, mapFrom((s: contactus) => s.email)),
      forMember((d) => d.message, mapFrom((s: contactus) => s.message)),
      forMember((d) => d.status, mapFrom((s: contactus) => s.status)),
      forMember((d) => d.note, mapFrom((s: contactus) => s.note)),
    );
  
    // Mapping from contactus to ContactUsListResponseDto
    createMap(
      mapper,
      contactus, // Source type (contactus model)
      ContactUsListResponseDto, // Destination type (List Response DTO)
      forMember((d) => d.id, mapFrom((s: contactus) => s.id)), 
      forMember((d) => d.name, mapFrom((s: contactus) => s.name)),
      forMember((d) => d.email, mapFrom((s: contactus) => s.email)),
      forMember((d) => d.message, mapFrom((s: contactus) => s.message)),
      forMember((d) => d.status, mapFrom((s: contactus) => s.status)),
      forMember((d) => d.note, mapFrom((s: contactus) => s.note)),
    );
  };