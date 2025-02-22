//src/mapper-profiles/settings.profile.ts

import { SettingsDto, UpdateSettingsDto, CreateSettingsDto } from '@/dtos/settings.dto';
import settings  from '@/models/settings'; 
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const settingsProfile: MappingProfile = (mapper) => {
  // Mapping from settings to SettingsDto
  createMap(
    mapper,
    settings, // Source type (settings model)
    SettingsDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: settings) => s.id)),
    forMember((d) => d.name, mapFrom((s: settings) => s.name)),
    forMember((d) => d.value, mapFrom((s: settings) => s.value)),
    forMember((d) => d.note, mapFrom((s: settings) => s.note)),
    forMember((d) => d.updatedBy, mapFrom((s: settings) => s.updatedBy)),
    forMember((d) => d.locationId, mapFrom((s: settings) => s.locationId))
  );

  // Mapping from CreateSettingsDto to settings
  createMap(
    mapper,
    CreateSettingsDto,
    settings, // Destination type (settings model)
    forMember((d) => d.name, mapFrom((s: CreateSettingsDto) => s.name)),
    forMember((d) => d.value, mapFrom((s: CreateSettingsDto) => s.value)),
    forMember((d) => d.note, mapFrom((s: CreateSettingsDto) => s.note)),
    forMember((d) => d.updatedBy, mapFrom((s: CreateSettingsDto) => s.updatedBy)),
    forMember((d) => d.locationId, mapFrom((s: CreateSettingsDto) => s.locationId))
  );

  // Mapping from UpdateSettingsDto to settings
  createMap(
    mapper,
    UpdateSettingsDto,
    settings, // Destination type (settings model)
    forMember((d) => d.name, mapFrom((s: UpdateSettingsDto) => s.name)),
    forMember((d) => d.value, mapFrom((s: UpdateSettingsDto) => s.value)),
    forMember((d) => d.note, mapFrom((s: UpdateSettingsDto) => s.note)),
    forMember((d) => d.updatedBy, mapFrom((s: UpdateSettingsDto) => s.updatedBy)),
    forMember((d) => d.locationId, mapFrom((s: UpdateSettingsDto) => s.locationId))
  );
};