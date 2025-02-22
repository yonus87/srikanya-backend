//src/mapper-profiles/productdimensions.profile.ts 

import { ProductDimensionsDto, CreateProductDimensionsDto, UpdateProductDimensionsDto, ProductDimensionsResponseDto } from '@/dtos/productdimensions.dto';
import  productdimensions  from '@/models/productdimensions';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const productdimensionsProfile: MappingProfile = (mapper) => {
  // Mapping from productdimensions to ProductDimensionsDto
  createMap(
      mapper,
      productdimensions, // Source type (productdimensions model)
      ProductDimensionsDto, // Destination type (DTO)
      forMember((d) => d.id, mapFrom((s: productdimensions) => Number(s.id))),  // Convert to string for consistency
      forMember((d) => d.value, mapFrom((s: productdimensions) => s.value)),
      forMember((d) => d.productDimensionId, mapFrom((s: productdimensions) => s.productDimensionId)),
      forMember((d) => d.productId, mapFrom((s: productdimensions) => s.productId))
  );

  // Mapping from CreateProductDimensionsDto to productdimensions
  createMap(
      mapper,
      CreateProductDimensionsDto,
      productdimensions,
      forMember((d) => d.value, mapFrom((s: CreateProductDimensionsDto) => s.value)),
      forMember((d) => d.productDimensionId, mapFrom((s: CreateProductDimensionsDto) => s.productDimensionId)),
      forMember((d) => d.productId, mapFrom((s: CreateProductDimensionsDto) => s.productId))
  );

  // Mapping from UpdateProductDimensionsDto to productdimensions
  createMap(
      mapper,
      UpdateProductDimensionsDto,
      productdimensions,
      forMember((d) => d.value, mapFrom((s: UpdateProductDimensionsDto) => s.value)),
      forMember((d) => d.productDimensionId, mapFrom((s: UpdateProductDimensionsDto) => s.productDimensionId)),
      forMember((d) => d.productId, mapFrom((s: UpdateProductDimensionsDto) => s.productId))
  );

  // Mapping from productdimensions to ProductDimensionsResponseDto (for response purposes)
  createMap(
      mapper,
      productdimensions,
      ProductDimensionsResponseDto,
      forMember((d) => d.id, mapFrom((s: productdimensions) => Number(s.id))),  
      forMember((d) => d.value, mapFrom((s: productdimensions) => s.value)),
      forMember((d) => d.productDimensionId, mapFrom((s: productdimensions) => s.productDimensionId)),
      forMember((d) => d.productId, mapFrom((s: productdimensions) => s.productId))
  );
};
