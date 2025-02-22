import { CartDto, CreateCartDto, UpdateCartDto, CartResponseDto, CartListResponseDto } from '@/dtos/cart.dto';
import cart from '@/models/cart';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const cartProfile: MappingProfile = (mapper) => {
  // Mapping from cart to CartDto
  createMap(
    mapper,
    cart, // Source type (cart model)
    CartDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: cart) => s.id)), 
    forMember((d) => d.quantity, mapFrom((s: cart) => s.quantity)),
    forMember((d) => d.quantityUnit, mapFrom((s: cart) => s.quantityUnit)),
    forMember((d) => d.productId, mapFrom((s: cart) => s.productId)),
    forMember((d) => d.userId, mapFrom((s: cart) => s.userId)),
    forMember((d) => d.createdAt, mapFrom((s: cart) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: cart) => s.updatedAt))
  );

  // Mapping from cart to CartResponseDto (with timestamps)
  createMap(
    mapper,
    cart, // Source type (cart model)
    CartResponseDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: cart) => s.id)),
    forMember((d) => d.quantity, mapFrom((s: cart) => s.quantity)),
    forMember((d) => d.quantityUnit, mapFrom((s: cart) => s.quantityUnit)),
    forMember((d) => d.productId, mapFrom((s: cart) => s.productId)),
    forMember((d) => d.userId, mapFrom((s: cart) => s.userId)),
    forMember((d) => d.createdAt, mapFrom((s: cart) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: cart) => s.updatedAt))
  );

  // Mapping from cart to CartListResponseDto (with timestamps)
  createMap(
    mapper,
    cart, // Source type (cart model)
    CartListResponseDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: cart) => s.id)),
    forMember((d) => d.quantity, mapFrom((s: cart) => s.quantity)),
    forMember((d) => d.quantityUnit, mapFrom((s: cart) => s.quantityUnit)),
    forMember((d) => d.productId, mapFrom((s: cart) => s.productId)),
    forMember((d) => d.userId, mapFrom((s: cart) => s.userId)),
    forMember((d) => d.createdAt, mapFrom((s: cart) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: cart) => s.updatedAt))
  );

  // Mapping from CreateCartDto to cart (for creating a new cart entry)
  createMap(
    mapper,
    CreateCartDto,
    cart,
    forMember((d) => d.quantity, mapFrom((s: CreateCartDto) => s.quantity)),
    forMember((d) => d.quantityUnit, mapFrom((s: CreateCartDto) => s.quantityUnit)),
    forMember((d) => d.productId, mapFrom((s: CreateCartDto) => s.productId)),
    forMember((d) => d.userId, mapFrom((s: CreateCartDto) => s.userId))
  );

  // Mapping from UpdateCartDto to cart (for updating an existing cart entry)
  createMap(
    mapper,
    UpdateCartDto,
    cart,
    forMember((d) => d.quantity, mapFrom((s: UpdateCartDto) => s.quantity)),
    forMember((d) => d.quantityUnit, mapFrom((s: UpdateCartDto) => s.quantityUnit)),
    forMember((d) => d.productId, mapFrom((s: UpdateCartDto) => s.productId)),
    forMember((d) => d.userId, mapFrom((s: UpdateCartDto) => s.userId))
  );
};
