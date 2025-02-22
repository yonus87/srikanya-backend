//src/server.ts

import 'reflect-metadata';
import * as path from 'path';
process.env['NODE_CONFIG_DIR'] = path.join(__dirname + '/../config');

import App from '@/app';

import { BrandListController } from './controllers/brandlist.controller';
import { UserController } from './controllers/user.controller';
import { UserRegistrationController } from './controllers/userRegistration.controller';
import { LocationsController } from './controllers/location.controller';
import { SettingsController } from './controllers/settings.controller';
import { CategoryTypeController } from './controllers/categorytypes.controller';
import { CategoryDimensionController } from './controllers/categorydimension.controller';
import { InventoryController } from './controllers/inventory.controller';
import { ContactUsController } from './controllers/contactus.controller';
import { SellerListController } from './controllers/sellerlist.controller';
import { InventoryListController } from './controllers/inventorylist.controller';
import { InventoryTransactionController } from './controllers/inventorytransaction.controller';
import { OrderListController } from './controllers/orderlist.controller';
import { OrderInvoiceDetailController } from './controllers/orderinvoicedetail.controller';
import { OrderInventoryDetailController } from './controllers/orderinventorydetail.controller';
import { OrderDispatchDetailController } from './controllers/orderdispatchdetailController';
import { ProductListController } from './controllers/productlist.controller';
import { ProductDimensionsController } from './controllers/productdimensions.controller';
import { CartController } from './controllers/cart.controller';
import { OrderDeliveryDetailController } from './controllers/orderdeliverydetail.controller';
import { OrderDispatchItemController } from './controllers/orderdispatchitem.controller';
import { OrderItemController } from './controllers/orderitem.controller';
import { OrderRequestForCancellationListController } from './controllers/orderrequestforcancellationlist.controller';
import { PaymentTransactionsController } from './controllers/paymentTransactions.controller';
import { RazorpayOrderController } from './controllers/razorpayorder.controller';
import { HomepageController } from './controllers/homepage.controller';
import { UserDetailController } from './controllers/userdetail.controller';
import { UserAddressController } from './controllers/useraddress.controller';
import { UserSessionController } from './controllers/userSession.controller';

const controllers = [BrandListController,UserController,UserRegistrationController,
                     LocationsController,SettingsController,CategoryTypeController,
                     CategoryDimensionController,InventoryController,ContactUsController,
                     SellerListController,InventoryListController,InventoryTransactionController,
                      OrderListController,OrderInvoiceDetailController,OrderInventoryDetailController,
                      OrderDispatchDetailController,ProductListController,ProductDimensionsController,
                    CartController,OrderDeliveryDetailController,OrderDispatchItemController,
                    OrderItemController,OrderRequestForCancellationListController,
                    PaymentTransactionsController,RazorpayOrderController,HomepageController,UserDetailController,
                    UserAddressController,UserSessionController];

                    
const app = new App(controllers);
app.listen();