//src/mapper-profiles/orderdispatchdetail.profile.ts

import { OrderDispatchDetailDto,OrderDispatchDetailResponseDto, UpdateOrderDispatchDetailDto, CreateOrderDispatchDetailDto, } from '@/dtos/orderdispatchdetail.dto';
import  orderdispatchdetail  from '@/models/orderdispatchdetail';
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';
  
  export const orderDispatchDetailProfile: MappingProfile = (mapper) => {
    // Mapping from orderdispatchdetail model to OrderDispatchDetailResponseDto
    createMap(
      mapper,
      orderdispatchdetail, // Source type (orderdispatchdetail model)
      OrderDispatchDetailResponseDto, // Destination type (DTO)
      forMember((d) => d.id, mapFrom((s: orderdispatchdetail) => Number(s.id))),
      forMember((d) => d.deliveryAgentName, mapFrom((s: orderdispatchdetail) => s.deliveryAgentName)),
      forMember((d) => d.deliveryAgentMobileNumber, mapFrom((s: orderdispatchdetail) => s.deliveryAgentMobileNumber)),
      forMember((d) => d.vehicleName, mapFrom((s: orderdispatchdetail) => s.vehicleName)),
      forMember((d) => d.vehicleNumber, mapFrom((s: orderdispatchdetail) => s.vehicleNumber)),
      forMember((d) => d.ewayBillNumber, mapFrom((s: orderdispatchdetail) => s.ewayBillNumber)),
      forMember((d) => d.invoiceNumber, mapFrom((s: orderdispatchdetail) => s.invoiceNumber)),
      forMember((d) => d.transportationCost, mapFrom((s: orderdispatchdetail) => s.transportationCost)),
      forMember((d) => d.loadingCost, mapFrom((s: orderdispatchdetail) => s.loadingCost)),
      forMember((d) => d.unloadingCost, mapFrom((s: orderdispatchdetail) => s.unloadingCost)),
      forMember((d) => d.cgst, mapFrom((s: orderdispatchdetail) => s.cgst)),
      forMember((d) => d.sgst, mapFrom((s: orderdispatchdetail) => s.sgst)),
      forMember((d) => d.igst, mapFrom((s: orderdispatchdetail) => s.igst)),
      forMember((d) => d.totalCost, mapFrom((s: orderdispatchdetail) => s.totalCost)),
      forMember((d) => d.interestCost, mapFrom((s: orderdispatchdetail) => s.interestCost)),
      forMember((d) => d.dispatchStatus, mapFrom((s: orderdispatchdetail) => s.dispatchStatus)),
      forMember((d) => d.creditDate, mapFrom((s: orderdispatchdetail) => s.creditDate)),
      forMember((d) => d.invoiceSent, mapFrom((s: orderdispatchdetail) => (s.invoiceSent))),
      forMember((d) => d.outForDeliveryAt, mapFrom((s: orderdispatchdetail) => s.outForDeliveryAt)),
      forMember((d) => d.creditDateDay, mapFrom((s: orderdispatchdetail) => s.creditDateDay)),
      forMember((d) => d.orderId, mapFrom((s: orderdispatchdetail) => s.orderId)),
      forMember((d) => d.placeOfDispatch, mapFrom((s: orderdispatchdetail) => s.placeOfDispatch)),
      forMember((d) => d.transporter, mapFrom((s: orderdispatchdetail) => s.transporter)),
      forMember((d) => d.lrNumber, mapFrom((s: orderdispatchdetail) => s.lrNumber)),
      forMember((d) => d.termsOfDelivery, mapFrom((s: orderdispatchdetail) => s.termsOfDelivery)),
      forMember((d) => d.destination, mapFrom((s: orderdispatchdetail) => s.destination)),
      forMember((d) => d.tcsCost, mapFrom((s: orderdispatchdetail) => s.tcsCost))
    );
  
    // Mapping from CreateOrderDispatchDetailDto to orderdispatchdetail model
    createMap(
      mapper,
      CreateOrderDispatchDetailDto, // Source type (CreateOrderDispatchDetailDto)
      orderdispatchdetail, // Destination type (orderdispatchdetail model)
      forMember((d) => d.deliveryAgentName, mapFrom((s: CreateOrderDispatchDetailDto) => s.deliveryAgentName)),
      forMember((d) => d.deliveryAgentMobileNumber, mapFrom((s: CreateOrderDispatchDetailDto) => s.deliveryAgentMobileNumber)),
      forMember((d) => d.vehicleName, mapFrom((s: CreateOrderDispatchDetailDto) => s.vehicleName)),
      forMember((d) => d.vehicleNumber, mapFrom((s: CreateOrderDispatchDetailDto) => s.vehicleNumber)),
      forMember((d) => d.ewayBillNumber, mapFrom((s: CreateOrderDispatchDetailDto) => s.ewayBillNumber)),
      forMember((d) => d.invoiceNumber, mapFrom((s: CreateOrderDispatchDetailDto) => s.invoiceNumber)),
      forMember((d) => d.transportationCost, mapFrom((s: CreateOrderDispatchDetailDto) => s.transportationCost)),
      forMember((d) => d.loadingCost, mapFrom((s: CreateOrderDispatchDetailDto) => s.loadingCost)),
      forMember((d) => d.unloadingCost, mapFrom((s: CreateOrderDispatchDetailDto) => s.unloadingCost)),
      forMember((d) => d.cgst, mapFrom((s: CreateOrderDispatchDetailDto) => s.cgst)),
      forMember((d) => d.sgst, mapFrom((s: CreateOrderDispatchDetailDto) => s.sgst)),
      forMember((d) => d.igst, mapFrom((s: CreateOrderDispatchDetailDto) => s.igst)),
      forMember((d) => d.totalCost, mapFrom((s: CreateOrderDispatchDetailDto) => s.totalCost)),
      forMember((d) => d.interestCost, mapFrom((s: CreateOrderDispatchDetailDto) => s.interestCost)),
      forMember((d) => d.dispatchStatus, mapFrom((s: CreateOrderDispatchDetailDto) => s.dispatchStatus)),
      forMember((d) => d.creditDate, mapFrom((s: CreateOrderDispatchDetailDto) => s.creditDate)),
      forMember((d) => d.invoiceSent, mapFrom((s: CreateOrderDispatchDetailDto) => s.invoiceSent)),
      forMember((d) => d.outForDeliveryAt, mapFrom((s: CreateOrderDispatchDetailDto) => s.outForDeliveryAt)),
      forMember((d) => d.creditDateDay, mapFrom((s: CreateOrderDispatchDetailDto) => s.creditDateDay)),
      forMember((d) => d.orderId, mapFrom((s: CreateOrderDispatchDetailDto) => s.orderId)),
      forMember((d) => d.placeOfDispatch, mapFrom((s: CreateOrderDispatchDetailDto) => s.placeOfDispatch)),
      forMember((d) => d.transporter, mapFrom((s: CreateOrderDispatchDetailDto) => s.transporter)),
      forMember((d) => d.lrNumber, mapFrom((s: CreateOrderDispatchDetailDto) => s.lrNumber)),
      forMember((d) => d.termsOfDelivery, mapFrom((s: CreateOrderDispatchDetailDto) => s.termsOfDelivery)),
      forMember((d) => d.destination, mapFrom((s: CreateOrderDispatchDetailDto) => s.destination)),
      forMember((d) => d.tcsCost, mapFrom((s: CreateOrderDispatchDetailDto) => s.tcsCost))
    );
  
    // Mapping from UpdateOrderDispatchDetailDto to orderdispatchdetail model
    createMap(
      mapper,
      UpdateOrderDispatchDetailDto, // Source type (UpdateOrderDispatchDetailDto)
      orderdispatchdetail, // Destination type (orderdispatchdetail model)
      forMember((d) => d.deliveryAgentName, mapFrom((s: UpdateOrderDispatchDetailDto) => s.deliveryAgentName)),
      forMember((d) => d.deliveryAgentMobileNumber, mapFrom((s: UpdateOrderDispatchDetailDto) => s.deliveryAgentMobileNumber)),
      forMember((d) => d.vehicleName, mapFrom((s: UpdateOrderDispatchDetailDto) => s.vehicleName)),
      forMember((d) => d.vehicleNumber, mapFrom((s: UpdateOrderDispatchDetailDto) => s.vehicleNumber)),
      forMember((d) => d.ewayBillNumber, mapFrom((s: UpdateOrderDispatchDetailDto) => s.ewayBillNumber)),
      forMember((d) => d.invoiceNumber, mapFrom((s: UpdateOrderDispatchDetailDto) => s.invoiceNumber)),
      forMember((d) => d.transportationCost, mapFrom((s: UpdateOrderDispatchDetailDto) => s.transportationCost)),
      forMember((d) => d.loadingCost, mapFrom((s: UpdateOrderDispatchDetailDto) => s.loadingCost)),
      forMember((d) => d.unloadingCost, mapFrom((s: UpdateOrderDispatchDetailDto) => s.unloadingCost)),
      forMember((d) => d.cgst, mapFrom((s: UpdateOrderDispatchDetailDto) => s.cgst)),
      forMember((d) => d.sgst, mapFrom((s: UpdateOrderDispatchDetailDto) => s.sgst)),
      forMember((d) => d.igst, mapFrom((s: UpdateOrderDispatchDetailDto) => s.igst)),
      forMember((d) => d.totalCost, mapFrom((s: UpdateOrderDispatchDetailDto) => s.totalCost)),
      forMember((d) => d.interestCost, mapFrom((s: UpdateOrderDispatchDetailDto) => s.interestCost)),
      forMember((d) => d.dispatchStatus, mapFrom((s: UpdateOrderDispatchDetailDto) => s.dispatchStatus)),
      forMember((d) => d.creditDate, mapFrom((s: UpdateOrderDispatchDetailDto) => s.creditDate)),
      forMember((d) => d.invoiceSent, mapFrom((s: UpdateOrderDispatchDetailDto) => s.invoiceSent)),
      forMember((d) => d.outForDeliveryAt, mapFrom((s: UpdateOrderDispatchDetailDto) => s.outForDeliveryAt)),
      forMember((d) => d.creditDateDay, mapFrom((s: UpdateOrderDispatchDetailDto) => s.creditDateDay)),
      forMember((d) => d.orderId, mapFrom((s: UpdateOrderDispatchDetailDto) => s.orderId)),
      forMember((d) => d.placeOfDispatch, mapFrom((s: UpdateOrderDispatchDetailDto) => s.placeOfDispatch)),
      forMember((d) => d.transporter, mapFrom((s: UpdateOrderDispatchDetailDto) => s.transporter)),
      forMember((d) => d.lrNumber, mapFrom((s: UpdateOrderDispatchDetailDto) => s.lrNumber)),
      forMember((d) => d.termsOfDelivery, mapFrom((s: UpdateOrderDispatchDetailDto) => s.termsOfDelivery)),
      forMember((d) => d.destination, mapFrom((s: UpdateOrderDispatchDetailDto) => s.destination)),
      forMember((d) => d.tcsCost, mapFrom((s: UpdateOrderDispatchDetailDto) => s.tcsCost))
    );
  };
  
  