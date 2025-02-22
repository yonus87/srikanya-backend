import { OrderRequestForCancellationDto, CreateOrderRequestForCancellationDto, UpdateOrderRequestForCancellationDto, OrderRequestForCancellationResponseDto, OrderRequestForCancellationListResponseDto } from '@/dtos/orderrequestforcancellationlist.dto';
import orderrequestforcancellationlist from '@/models/orderrequestforcancellationlist';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const orderRequestForCancellationProfile: MappingProfile = (mapper) => {
  // Mapping from orderrequestforcancellationlist to OrderRequestForCancellationDto
  createMap(
    mapper,
    orderrequestforcancellationlist,
    OrderRequestForCancellationDto,
    forMember((d) => d.reason, mapFrom((s: orderrequestforcancellationlist) => s.reason)),
    forMember((d) => d.active, mapFrom((s: orderrequestforcancellationlist) => Boolean(s.active ? 1 : 0))),
    forMember((d) => d.rejected, mapFrom((s: orderrequestforcancellationlist) => Boolean(s.rejected ? 1 : 0))),
    forMember((d) => d.orderId, mapFrom((s: orderrequestforcancellationlist) => s.orderId))
  );

  // Mapping from CreateOrderRequestForCancellationDto to orderrequestforcancellationlist model
  createMap(
    mapper,
    CreateOrderRequestForCancellationDto,
    orderrequestforcancellationlist,
    forMember((d) => d.reason, mapFrom((s: CreateOrderRequestForCancellationDto) => s.reason)),
    forMember((d) => d.active, mapFrom((s: CreateOrderRequestForCancellationDto) => Boolean(s.active ? 1 : 0))),
    forMember((d) => d.rejected, mapFrom((s: CreateOrderRequestForCancellationDto) => Boolean(s.rejected ? 1 : 0))),
    forMember((d) => d.orderId, mapFrom((s: CreateOrderRequestForCancellationDto) => s.orderId))
  );

  // Mapping from UpdateOrderRequestForCancellationDto to orderrequestforcancellationlist model
  createMap(
    mapper,
    UpdateOrderRequestForCancellationDto,
    orderrequestforcancellationlist,
    forMember((d) => d.reason, mapFrom((s: UpdateOrderRequestForCancellationDto) => s.reason ?? null)),
    forMember((d) => d.active, mapFrom((s: UpdateOrderRequestForCancellationDto) => (s.active !== undefined ? Boolean(s.active ? 1 : 0) : null))),
    forMember((d) => d.rejected, mapFrom((s: UpdateOrderRequestForCancellationDto) => (s.rejected !== undefined ? Boolean(s.rejected ? 1 : 0) : null))),
    forMember((d) => d.orderId, mapFrom((s: UpdateOrderRequestForCancellationDto) => s.orderId ?? null))
  );

  // Mapping from orderrequestforcancellationlist to OrderRequestForCancellationResponseDto
  createMap(
    mapper,
    orderrequestforcancellationlist,
    OrderRequestForCancellationResponseDto,
    forMember((d) => d.id, mapFrom((s: orderrequestforcancellationlist) => s.id)),
    forMember((d) => d.reason, mapFrom((s: orderrequestforcancellationlist) => s.reason)),
    forMember((d) => d.active, mapFrom((s: orderrequestforcancellationlist) => Boolean(s.active ? 1 : 0))),
    forMember((d) => d.rejected, mapFrom((s: orderrequestforcancellationlist) => Boolean(s.rejected ? 1 : 0))),
    forMember((d) => d.orderId, mapFrom((s: orderrequestforcancellationlist) => s.orderId))
  );

  // Mapping from orderrequestforcancellationlist to OrderRequestForCancellationListResponseDto
  createMap(
    mapper,
    orderrequestforcancellationlist,
    OrderRequestForCancellationListResponseDto,
    forMember((d) => d.id, mapFrom((s: orderrequestforcancellationlist) => s.id)),
    forMember((d) => d.reason, mapFrom((s: orderrequestforcancellationlist) => s.reason)),
    forMember((d) => d.active, mapFrom((s: orderrequestforcancellationlist) => Boolean(s.active ? 1 : 0))),
    forMember((d) => d.rejected, mapFrom((s: orderrequestforcancellationlist) => Boolean(s.rejected ? 1 : 0))),
    forMember((d) => d.orderId, mapFrom((s: orderrequestforcancellationlist) => s.orderId))
  );
};
