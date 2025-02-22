//src/mapper-profiles/razorpayorder.profile.ts

import {RazorpayOrderDto,CreateRazorpayOrderDto,UpdateRazorpayOrderDto,RazorpayOrderResponseDto,RazorpayOrderListResponseDto,} from '@/dtos/razorpayorder.dto'; 
import  razorpayorder  from '@/models/razorpayorder'; 
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core'; 
  
  export const razorpayOrderProfile: MappingProfile = (mapper) => {
    // Mapping from razorpayorder to RazorpayOrderDto
    createMap(
      mapper,
      razorpayorder, // Source type (model)
      RazorpayOrderDto, // Destination type (DTO)
      forMember((d) => d.id, mapFrom((s: razorpayorder) => s.id)),
      forMember((d) => d.amount, mapFrom((s: razorpayorder) => s.amount)),
      forMember((d) => d.currency, mapFrom((s: razorpayorder) => s.currency)),
      forMember((d) => d.razorpayOrderId, mapFrom((s: razorpayorder) => s.razorpayOrderId)),
      forMember((d) => d.extraInfo, mapFrom((s: razorpayorder) => s.extraInfo)),
      forMember((d) => d.orderId, mapFrom((s: razorpayorder) => s.orderId))
    );
  
    // Mapping from CreateRazorpayOrderDto to razorpayorder
    createMap(
      mapper,
      CreateRazorpayOrderDto, // Source type (DTO for creation)
      razorpayorder, // Destination type (model)
      forMember((d) => d.amount, mapFrom((s: CreateRazorpayOrderDto) => s.amount)),
      forMember((d) => d.currency, mapFrom((s: CreateRazorpayOrderDto) => s.currency)),
      forMember((d) => d.razorpayOrderId, mapFrom((s: CreateRazorpayOrderDto) => s.razorpayOrderId)),
      forMember((d) => d.extraInfo, mapFrom((s: CreateRazorpayOrderDto) => s.extraInfo)),
      forMember((d) => d.orderId, mapFrom((s: CreateRazorpayOrderDto) => s.orderId)),
    );
  
    // Mapping from UpdateRazorpayOrderDto to razorpayorder
    createMap(
      mapper,
      UpdateRazorpayOrderDto, // Source type (DTO for updates)
      razorpayorder, // Destination type (model)
      forMember((d) => d.amount, mapFrom((s: UpdateRazorpayOrderDto) => s.amount)),
      forMember((d) => d.currency, mapFrom((s: UpdateRazorpayOrderDto) => s.currency)),
      forMember((d) => d.razorpayOrderId, mapFrom((s: UpdateRazorpayOrderDto) => s.razorpayOrderId)),
      forMember((d) => d.extraInfo, mapFrom((s: UpdateRazorpayOrderDto) => s.extraInfo)),
      forMember((d) => d.orderId, mapFrom((s: UpdateRazorpayOrderDto) => s.orderId)),
    );
  
    // Mapping from razorpayorder to RazorpayOrderResponseDto
    createMap(
      mapper,
      razorpayorder, // Source type (model)
      RazorpayOrderResponseDto, // Destination type (response DTO)
      forMember((d) => d.id, mapFrom((s: razorpayorder) => s.id)),
      forMember((d) => d.amount, mapFrom((s: razorpayorder) => s.amount)),
      forMember((d) => d.currency, mapFrom((s: razorpayorder) => s.currency)),
      forMember((d) => d.razorpayOrderId, mapFrom((s: razorpayorder) => s.razorpayOrderId)),
      forMember((d) => d.extraInfo, mapFrom((s: razorpayorder) => s.extraInfo)),
      forMember((d) => d.orderId, mapFrom((s: razorpayorder) => s.orderId))
    );
  
    // Mapping from razorpayorder to RazorpayOrderListResponseDto
    createMap(
      mapper,
      razorpayorder, // Source type (model)
      RazorpayOrderListResponseDto, // Destination type (list response DTO)
      forMember((d) => d.id, mapFrom((s: razorpayorder) => s.id)),
      forMember((d) => d.amount, mapFrom((s: razorpayorder) => s.amount)),
      forMember((d) => d.currency, mapFrom((s: razorpayorder) => s.currency)),
      forMember((d) => d.razorpayOrderId, mapFrom((s: razorpayorder) => s.razorpayOrderId)),
    );
  };
  