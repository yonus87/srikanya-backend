import { CategoryDimensionDto, CreateCategoryDimensionDto, UpdateCategoryDimensionDto, CategoryDimensionResponseDto } from '@/dtos/categorydimension.dto'; 
import CategoryDimension from '@/models/categorydimension';  // Model import with correct name
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const categoryDimensionProfile: MappingProfile = (mapper) => {

  // Mapping from CategoryDimension (Model) to CategoryDimensionDto
  createMap(
    mapper,
    CategoryDimension, // Source type (CategoryDimension model)
    CategoryDimensionDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: CategoryDimension) => s.id)),
    forMember((d) => d.dimensionId, mapFrom((s: CategoryDimension) => s.dimensionId)),
    forMember((d) => d.categoryId, mapFrom((s: CategoryDimension) => s.categoryId)),
    forMember((d) => d.isDeleted, mapFrom((s: CategoryDimension) => s.isDeleted)),
    forMember((d) => d.length, mapFrom((s: CategoryDimension) => s.length)),
    forMember((d) => d.breadth, mapFrom((s: CategoryDimension) => s.breadth)),
    forMember((d) => d.height, mapFrom((s: CategoryDimension) => s.height)),
    forMember((d) => d.thickness, mapFrom((s: CategoryDimension) => s.thickness)),
    forMember((d) => d.diameter, mapFrom((s: CategoryDimension) => s.diameter)),
    forMember((d) => d.grade, mapFrom((s: CategoryDimension) => s.grade)),
    forMember((d) => d.angle, mapFrom((s: CategoryDimension) => s.angle)),
    forMember((d) => d.shape, mapFrom((s: CategoryDimension) => s.shape)),
  );

  // Mapping from CreateCategoryDimensionDto to CategoryDimension (Model)
  createMap(
    mapper,
    CreateCategoryDimensionDto,  // Source type (Create DTO)
    CategoryDimension,  // Destination type (CategoryDimension Model)
    forMember((d) => d.dimensionId, mapFrom((s: CreateCategoryDimensionDto) => s.dimensionId)),
    forMember((d) => d.categoryId, mapFrom((s: CreateCategoryDimensionDto) => s.categoryId)),
    forMember((d) => d.isDeleted, mapFrom((s: CreateCategoryDimensionDto) => s.isDeleted)),
    forMember((d) => d.length, mapFrom((s: CreateCategoryDimensionDto) => s.length)),
    forMember((d) => d.breadth, mapFrom((s: CreateCategoryDimensionDto) => s.breadth)),
    forMember((d) => d.height, mapFrom((s: CreateCategoryDimensionDto) => s.height)),
    forMember((d) => d.thickness, mapFrom((s: CreateCategoryDimensionDto) => s.thickness)),
    forMember((d) => d.diameter, mapFrom((s: CreateCategoryDimensionDto) => s.diameter)),
    forMember((d) => d.grade, mapFrom((s: CreateCategoryDimensionDto) => s.grade)),
    forMember((d) => d.angle, mapFrom((s: CreateCategoryDimensionDto) => s.angle)),
    forMember((d) => d.shape, mapFrom((s: CreateCategoryDimensionDto) => s.shape)),
  );

  // Mapping from UpdateCategoryDimensionDto to CategoryDimension (Model)
  createMap(
    mapper,
    UpdateCategoryDimensionDto, // Source type (Update DTO)
    CategoryDimension,  // Destination type (CategoryDimension Model)
    forMember((d) => d.dimensionId, mapFrom((s: UpdateCategoryDimensionDto) => s.dimensionId)),
    forMember((d) => d.categoryId, mapFrom((s: UpdateCategoryDimensionDto) => s.categoryId)),
    forMember((d) => d.isDeleted, mapFrom((s: UpdateCategoryDimensionDto) => s.isDeleted)),
    forMember((d) => d.length, mapFrom((s: UpdateCategoryDimensionDto) => s.length)),
    forMember((d) => d.breadth, mapFrom((s: UpdateCategoryDimensionDto) => s.breadth)),
    forMember((d) => d.height, mapFrom((s: UpdateCategoryDimensionDto) => s.height)),
    forMember((d) => d.thickness, mapFrom((s: UpdateCategoryDimensionDto) => s.thickness)),
    forMember((d) => d.diameter, mapFrom((s: UpdateCategoryDimensionDto) => s.diameter)),
    forMember((d) => d.grade, mapFrom((s: UpdateCategoryDimensionDto) => s.grade)),
    forMember((d) => d.angle, mapFrom((s: UpdateCategoryDimensionDto) => s.angle)),
    forMember((d) => d.shape, mapFrom((s: UpdateCategoryDimensionDto) => s.shape)),
  );

  // Mapping from CategoryDimension (Model) to CategoryDimensionResponseDto
  createMap(
    mapper,
    CategoryDimension, // Source type (CategoryDimension model)
    CategoryDimensionResponseDto, // Destination type (Response DTO)
    forMember((d) => d.id, mapFrom((s: CategoryDimension) => s.id)),
    forMember((d) => d.dimensionId, mapFrom((s: CategoryDimension) => s.dimensionId)),
    forMember((d) => d.categoryId, mapFrom((s: CategoryDimension) => s.categoryId)),
    forMember((d) => d.isDeleted, mapFrom((s: CategoryDimension) => s.isDeleted)),
    forMember((d) => d.length, mapFrom((s: CategoryDimension) => s.length)),
    forMember((d) => d.breadth, mapFrom((s: CategoryDimension) => s.breadth)),
    forMember((d) => d.height, mapFrom((s: CategoryDimension) => s.height)),
    forMember((d) => d.thickness, mapFrom((s: CategoryDimension) => s.thickness)),
    forMember((d) => d.diameter, mapFrom((s: CategoryDimension) => s.diameter)),
    forMember((d) => d.grade, mapFrom((s: CategoryDimension) => s.grade)),
    forMember((d) => d.angle, mapFrom((s: CategoryDimension) => s.angle)),
    forMember((d) => d.shape, mapFrom((s: CategoryDimension) => s.shape)),
  );
};
