import { LocationDto, CreateLocationDto, UpdateLocationDto, LocationListResponseDto } from '@/dtos/location.dto';
import locations from '@/models/location';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const locationsProfile: MappingProfile = (mapper) => {
  // Mapping from locations model to LocationDto
  createMap(
    mapper,
    locations,
    LocationDto,
    forMember((d) => d.id, mapFrom((s: locations) => s.id)),
    forMember((d) => d.name, mapFrom((s: locations) => s.name)),
    forMember((d) => d.address, mapFrom((s: locations) => s.address)),
    forMember((d) => d.city, mapFrom((s: locations) => s.city)),
    forMember((d) => d.state, mapFrom((s: locations) => s.state)),
    forMember((d) => d.pincode, mapFrom((s: locations) => Number(s.pincode))), 
    forMember((d) => d.latitude, mapFrom((s: locations) => Number(s.latitude))), 
    forMember((d) => d.longitude, mapFrom((s: locations) => Number(s.longitude))), 
    forMember((d) => d.isDefault, mapFrom((s: locations) => Boolean(s.isDefault))), 
    forMember((d) => d.isDeleted, mapFrom((s: locations) => Boolean(s.isDeleted))), 
    forMember((d) => d.wishMessage, mapFrom((s: locations) => s.wishMessage ?? [])),
    forMember((d) => d.carouselImage, mapFrom((s: locations) => s.carouselImage ?? [])),
  );

  // Mapping from CreateLocationDto to locations model
  createMap(
    mapper,
    CreateLocationDto,
    locations,
    forMember((d) => d.name, mapFrom((s: CreateLocationDto) => s.name)),
    forMember((d) => d.address, mapFrom((s: CreateLocationDto) => s.address)),
    forMember((d) => d.city, mapFrom((s: CreateLocationDto) => s.city)),
    forMember((d) => d.state, mapFrom((s: CreateLocationDto) => s.state)),
    forMember((d) => d.pincode, mapFrom((s: CreateLocationDto) => Number(s.pincode))), 
    forMember((d) => d.latitude, mapFrom((s: CreateLocationDto) => Number(s.latitude))), 
    forMember((d) => d.longitude, mapFrom((s: CreateLocationDto) => Number(s.longitude))), 
  );

  // Mapping from UpdateLocationDto to locations model
  createMap(
    mapper,
    UpdateLocationDto,
    locations,
    forMember((d) => d.name, mapFrom((s: UpdateLocationDto) => s.name ?? null)),
    forMember((d) => d.address, mapFrom((s: UpdateLocationDto) => s.address ?? null)),
    forMember((d) => d.city, mapFrom((s: UpdateLocationDto) => s.city ?? null)),
    forMember((d) => d.state, mapFrom((s: UpdateLocationDto) => s.state ?? null)),
    forMember((d) => d.pincode, mapFrom((s: UpdateLocationDto) => (s.pincode ? Number(s.pincode) : null))), 
    forMember((d) => d.latitude, mapFrom((s: UpdateLocationDto) => (s.latitude ? Number(s.latitude) : null))), 
    forMember((d) => d.longitude, mapFrom((s: UpdateLocationDto) => (s.longitude ? Number(s.longitude) : null))), 
  );

  // Mapping from locations model to LocationListResponseDto
  createMap(
    mapper,
    locations,
    LocationListResponseDto,
    forMember((d) => d.id, mapFrom((s: locations) => s.id)),
    forMember((d) => d.name, mapFrom((s: locations) => s.name)),
    forMember((d) => d.address, mapFrom((s: locations) => s.address)),
    forMember((d) => d.city, mapFrom((s: locations) => s.city)),
    forMember((d) => d.state, mapFrom((s: locations) => s.state)),
    forMember((d) => d.pincode, mapFrom((s: locations) => Number(s.pincode))), 
    forMember((d) => d.latitude, mapFrom((s: locations) => Number(s.latitude))), 
    forMember((d) => d.longitude, mapFrom((s: locations) => Number(s.longitude))), 
    forMember((d) => d.isDefault, mapFrom((s: locations) => Boolean(s.isDefault))), 
    forMember((d) => d.isDeleted, mapFrom((s: locations) => Boolean(s.isDeleted))), 
    forMember((d) => d.wishMessage, mapFrom((s: locations) => s.wishMessage ?? [])),
    forMember((d) => d.carouselImage, mapFrom((s: locations) => s.carouselImage ?? [])),
  );
};
