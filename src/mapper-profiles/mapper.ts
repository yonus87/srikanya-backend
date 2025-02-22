//src/mapper-profiles/mapper.ts

// #region IMPORTS

import { createMapper, addProfile, Mapper } from '@automapper/core';
import { sequelize } from '@automapper/sequelize';
import { Service } from 'typedi';

import { brandlistProfile } from './brandlist.profile';
import { userProfile } from './user.profile';
import { userRegistrationProfile } from './userregistration.profile';
import { locationsProfile } from './location.profile';
import { settingsProfile } from './settings.profile';
import { categoryTypesProfile } from './categorytypes.profile';
import { categoryDimensionProfile } from './categorydimension.profile';
import { contactusProfile } from './contactus.profile';
import { inventoryProfile } from './inventoryprofile';
import { sellerListProfile } from './sellerlist.profile';
import { inventoryProfilelist } from './inventorylist.profile';
import { inventoryTransactionProfile } from './inventorytransaction.profile';
import { OrderlistProfile } from './orderlist.profile';
import { orderInvoiceDetailProfile } from './orderinvoicedetail.profile';
import { orderInventoryDetailProfile } from './orderinventorydetail.profile';
import { orderDispatchDetailProfile } from './orderdispatchdetail.profile';
import { productProfile } from './productlist.profile';
import { productdimensionsProfile } from './productdimensions.profile';
import { cartProfile } from './cart.profile';
import { orderDeliveryDetailProfile } from './orderdeliverydetail.profile';
import { orderDispatchItemProfile } from './orderdispatchitem.profile';
import { orderItemProfile } from './orderitem.profile';
import { orderRequestForCancellationProfile } from './orderrequestforcancellationlist.profile';
import { paymentTransactionsProfile } from './paymenttransactions.profile';
import { razorpayOrderProfile } from './razorpayorder.profile';
import { userDetailProfile } from './userdetail.profile';
import { userAddressProfile } from './useraddress.profile';
import { userSessionProfile } from './user-session.mapper.profile';


// #endregion

@Service()
export class AutoMapperManager {
  // #region PUBLIC METHODS

  public mapper: Mapper;

  // #endregion

  // #region CONSTRUCTOR

  constructor() {
    this.setUpAutoMapper();
  }

  // #endregion

  // #region PUBLUC MTHODS

  public setUpAutoMapper() {
    this.mapper = createMapper({
      strategyInitializer: sequelize(),
    });


   
    addProfile(this.mapper,brandlistProfile);
    addProfile(this.mapper,userProfile);
    addProfile(this.mapper,userRegistrationProfile);
    addProfile(this.mapper,locationsProfile);
    addProfile(this.mapper,settingsProfile);
    addProfile(this.mapper,categoryTypesProfile);
    addProfile(this.mapper,categoryDimensionProfile);
    addProfile(this.mapper,contactusProfile);
    addProfile(this.mapper,inventoryProfile);
    addProfile(this.mapper,sellerListProfile);
    addProfile(this.mapper,inventoryProfilelist);
    addProfile(this.mapper,inventoryTransactionProfile);
    addProfile(this.mapper,OrderlistProfile);
    addProfile(this.mapper,orderInvoiceDetailProfile);
    addProfile(this.mapper,orderInventoryDetailProfile);
    addProfile(this.mapper,orderDispatchDetailProfile);
    addProfile(this.mapper,productProfile);
    addProfile(this.mapper,productdimensionsProfile);
    addProfile(this.mapper,cartProfile);
    addProfile(this.mapper,orderDeliveryDetailProfile);
    addProfile(this.mapper,orderDispatchItemProfile);
    addProfile(this.mapper,orderItemProfile);
    addProfile(this.mapper,orderRequestForCancellationProfile);
    addProfile(this.mapper,paymentTransactionsProfile);
    addProfile(this.mapper,razorpayOrderProfile);
    addProfile(this.mapper,userDetailProfile);
    addProfile(this.mapper,userAddressProfile);
    addProfile(this.mapper,userSessionProfile);

     
      


  }
  // #endregion
}