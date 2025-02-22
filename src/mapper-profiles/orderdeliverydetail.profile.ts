import { CreateOrderDeliveryDetailDto, UpdateOrderDeliveryDetailDto, OrderDeliveryDetailResponseDto } from '@/dtos/orderdeliverydetail.dto';
import  OrderDeliveryDetail  from '@/models/orderdeliverydetail';  
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const orderDeliveryDetailProfile: MappingProfile = (mapper) => {
  // Mapping from OrderDeliveryDetail model to OrderDeliveryDetailResponseDto (single record)
  createMap(
    mapper,
    OrderDeliveryDetail, // Source type (OrderDeliveryDetail model)
    OrderDeliveryDetailResponseDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: OrderDeliveryDetail) => s.id)),
    forMember((d) => d.deliveredTo, mapFrom((s: OrderDeliveryDetail) => s.deliveredTo)),
    forMember((d) => d.deliveredBy, mapFrom((s: OrderDeliveryDetail) => s.deliveredBy)),
    forMember((d) => d.mobileNumber, mapFrom((s: OrderDeliveryDetail) => s.mobileNumber)),
    forMember((d) => d.comments, mapFrom((s: OrderDeliveryDetail) => s.comments)),
    forMember((d) => d.createdAt, mapFrom((s: OrderDeliveryDetail) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: OrderDeliveryDetail) => s.updatedAt)),
    forMember((d) => d.orderDispatchId, mapFrom((s: OrderDeliveryDetail) => s.orderDispatchId))
  );


  // Mapping from CreateOrderDeliveryDetailDto to OrderDeliveryDetail model
  createMap(
    mapper,
    CreateOrderDeliveryDetailDto, // Source type (Create DTO)
    OrderDeliveryDetail, // Destination type (OrderDeliveryDetail model)
    forMember((d) => d.deliveredTo, mapFrom((s: CreateOrderDeliveryDetailDto) => s.deliveredTo)),
    forMember((d) => d.deliveredBy, mapFrom((s: CreateOrderDeliveryDetailDto) => s.deliveredBy)),
    forMember((d) => d.mobileNumber, mapFrom((s: CreateOrderDeliveryDetailDto) => s.mobileNumber)),
    forMember((d) => d.comments, mapFrom((s: CreateOrderDeliveryDetailDto) => s.comments)),
    forMember((d) => d.orderDispatchId, mapFrom((s: CreateOrderDeliveryDetailDto) => s.orderDispatchId))
  );

  // Mapping from UpdateOrderDeliveryDetailDto to OrderDeliveryDetail model
  createMap(
    mapper,
    UpdateOrderDeliveryDetailDto, // Source type (Update DTO)
    OrderDeliveryDetail, // Destination type (OrderDeliveryDetail model)
    forMember((d) => d.deliveredTo, mapFrom((s: UpdateOrderDeliveryDetailDto) => s.deliveredTo)),
    forMember((d) => d.deliveredBy, mapFrom((s: UpdateOrderDeliveryDetailDto) => s.deliveredBy)),
    forMember((d) => d.mobileNumber, mapFrom((s: UpdateOrderDeliveryDetailDto) => s.mobileNumber)),
    forMember((d) => d.comments, mapFrom((s: UpdateOrderDeliveryDetailDto) => s.comments)),
    forMember((d) => d.orderDispatchId, mapFrom((s: UpdateOrderDeliveryDetailDto) => s.orderDispatchId))
  );
};
