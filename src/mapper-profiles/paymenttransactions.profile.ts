import { PaymentTransactionDto, CreatePaymentTransactionDto, UpdatePaymentTransactionDto, PaymentTransactionListResponseDto, PaymentTransactionResponseDto } from '@/dtos/paymenttransactions.dto';
import  PaymentTransaction  from '@/models/paymentTransactions';  
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const paymentTransactionsProfile: MappingProfile = (mapper) => {
  // Mapping from PaymentTransaction model to PaymentTransactionDto
  createMap(
    mapper,
    PaymentTransaction,
    PaymentTransactionDto,
    forMember((d) => d.id, mapFrom((s: PaymentTransaction) => s.id)),
    forMember((d) => d.amount, mapFrom((s: PaymentTransaction) => s.amount)),
    forMember((d) => d.paymentDate, mapFrom((s: PaymentTransaction) => s.paymentDate)),
    forMember((d) => d.updatedBy, mapFrom((s: PaymentTransaction) => s.updatedBy)),
    forMember((d) => d.paymentMode, mapFrom((s: PaymentTransaction) => s.paymentMode)),
    forMember((d) => d.transactionCredit, mapFrom((s: PaymentTransaction) => s.transactionCredit)),
    forMember((d) => d.transactionNumber, mapFrom((s: PaymentTransaction) => s.transactionNumber)),
    forMember((d) => d.isDeleted, mapFrom((s: PaymentTransaction) => Boolean(s.isDeleted ? 1 : 0))),
    forMember((d) => d.createdAt, mapFrom((s: PaymentTransaction) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: PaymentTransaction) => s.updatedAt)),
    forMember((d) => d.orderId, mapFrom((s: PaymentTransaction) => s.orderId)),
  );

  // Mapping from CreatePaymentTransactionDto to PaymentTransaction model
  createMap(
    mapper,
    CreatePaymentTransactionDto,
    PaymentTransaction,
    forMember((d) => d.amount, mapFrom((s: CreatePaymentTransactionDto) => s.amount)),
    forMember((d) => d.updatedBy, mapFrom((s: CreatePaymentTransactionDto) => s.updatedBy)),
    forMember((d) => d.paymentMode, mapFrom((s: CreatePaymentTransactionDto) => s.paymentMode)),
    forMember((d) => d.transactionCredit, mapFrom((s: CreatePaymentTransactionDto) => s.transactionCredit)),
    forMember((d) => d.transactionNumber, mapFrom((s: CreatePaymentTransactionDto) => s.transactionNumber)),
    forMember((d) => d.isDeleted, mapFrom((s: CreatePaymentTransactionDto) => s.isDeleted)),
    forMember((d) => d.orderId, mapFrom((s: CreatePaymentTransactionDto) => s.orderId)),
  );

  // Mapping from UpdatePaymentTransactionDto to PaymentTransaction model
  createMap(
    mapper,
    UpdatePaymentTransactionDto,
    PaymentTransaction,
    forMember((d) => d.amount, mapFrom((s: UpdatePaymentTransactionDto) => s.amount ?? null)),
    forMember((d) => d.paymentDate, mapFrom((s: UpdatePaymentTransactionDto) => s.paymentDate ?? null)),
    forMember((d) => d.updatedBy, mapFrom((s: UpdatePaymentTransactionDto) => s.updatedBy ?? null)),
    forMember((d) => d.paymentMode, mapFrom((s: UpdatePaymentTransactionDto) => s.paymentMode ?? null)),
    forMember((d) => d.transactionCredit, mapFrom((s: UpdatePaymentTransactionDto) => s.transactionCredit ?? null)),
    forMember((d) => d.transactionNumber, mapFrom((s: UpdatePaymentTransactionDto) => s.transactionNumber ?? null)),
    forMember((d) => d.isDeleted, mapFrom((s: UpdatePaymentTransactionDto) => s.isDeleted ?? null)),
    forMember((d) => d.orderId, mapFrom((s: UpdatePaymentTransactionDto) => s.orderId ?? null)),
  );

  // Mapping from PaymentTransaction model to PaymentTransactionListResponseDto
  createMap(
    mapper,
    PaymentTransaction,
    PaymentTransactionListResponseDto,
    forMember((d) => d.id, mapFrom((s: PaymentTransaction) => s.id)),
    forMember((d) => d.amount, mapFrom((s: PaymentTransaction) => s.amount)),
    forMember((d) => d.paymentDate, mapFrom((s: PaymentTransaction) => s.paymentDate)),
    forMember((d) => d.updatedBy, mapFrom((s: PaymentTransaction) => s.updatedBy)),
    forMember((d) => d.paymentMode, mapFrom((s: PaymentTransaction) => s.paymentMode)),
    forMember((d) => d.transactionCredit, mapFrom((s: PaymentTransaction) => s.transactionCredit)),
    forMember((d) => d.transactionNumber, mapFrom((s: PaymentTransaction) => s.transactionNumber)),
    forMember((d) => d.isDeleted, mapFrom((s: PaymentTransaction) => Boolean(s.isDeleted ? 1 : 0))),
  );

  // Mapping from PaymentTransaction model to PaymentTransactionResponseDto
  createMap(
    mapper,
    PaymentTransaction,
    PaymentTransactionResponseDto,
    forMember((d) => d.id, mapFrom((s: PaymentTransaction) => s.id)),
    forMember((d) => d.amount, mapFrom((s: PaymentTransaction) => s.amount)),
    forMember((d) => d.paymentDate, mapFrom((s: PaymentTransaction) => s.paymentDate)),
    forMember((d) => d.updatedBy, mapFrom((s: PaymentTransaction) => s.updatedBy)),
    forMember((d) => d.paymentMode, mapFrom((s: PaymentTransaction) => s.paymentMode)),
    forMember((d) => d.transactionCredit, mapFrom((s: PaymentTransaction) => s.transactionCredit)),
    forMember((d) => d.transactionNumber, mapFrom((s: PaymentTransaction) => s.transactionNumber)),
    forMember((d) => d.isDeleted, mapFrom((s: PaymentTransaction) => Boolean(s.isDeleted ? 1 : 0))),
    forMember((d) => d.orderId, mapFrom((s: PaymentTransaction) => s.orderId)),
  );
};
