//src/models/OrderList.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import User from './user';
import Locations from './location';

class OrderList extends Model {
  id!: number;
  baseOrderId!: number | null;
  orderStatus!: string | null;
  productCost!: number | null;
  transportationCost!: number | null;
  loadingCost!: number | null;
  unloadingCost!: number | null;
  advanceTokenCost!: number | null;
  cgst!: number | null;
  sgst!: number | null;
  igst!: number | null;
  discount!: number | null;
  totalCost!: number | null;
  totalProduct!: number | null;
  userType!: string | null;
  gstin!: string | null;
  pan!: string | null;
  aadhaar!: string | null;
  emailId!: string | null;
  preferredPaymentMethod!: string | null;
  creditDays!: number | null;
  billingFullName!: string;
  billingMobileNumber!: string;
  billingLine1!: string | null;
  billingLine2!: string | null;
  billingPincode!: number | null;
  billingCity!: string | null;
  billingState!: string | null;
  shippingFullName!: string;
  shippingMobileNumber!: string;
  shippingLine1!: string | null;
  shippingLine2!: string | null;
  shippingPincode!: number | null;
  shippingCity!: string | null;
  shippingState!: string | null;
  orderedAt!: Date | null;
  orderedUpdatedAt!: Date | null;
  orderedAgreedAt!: Date | null;
  paidAt!: Date | null;
  outForDeliveryAt!: Date | null;
  deliveredAt!: Date | null;
  closedAt!: Date | null;
  salesAgentId!: string | null;
  isInterStateDelivery!: boolean;
  orderType!: string | null;
  interestPercentage!: number | null;
  note!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  userId?: string | null;
  purchaseOrderNumber!: string | null;
  purchaseOrderDate!: Date | null;
  locationId?: number | null;
}

OrderList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    baseOrderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    orderStatus: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    productCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    transportationCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    loadingCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    unloadingCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    advanceTokenCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    cgst: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    sgst: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    igst: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    totalCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    totalProduct: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userType: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    gstin: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pan: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    aadhaar: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    emailId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    preferredPaymentMethod: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    creditDays: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billingFullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '0',
    },
    billingMobileNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '0',
    },
    billingLine1: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    billingLine2: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    billingPincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    billingCity: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    billingState: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    shippingFullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '0',
    },
    shippingMobileNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: '0',
    },
    shippingLine1: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    shippingLine2: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    shippingPincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    shippingCity: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    shippingState: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    orderedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    orderedUpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    orderedAgreedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    paidAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    outForDeliveryAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deliveredAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    closedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    salesAgentId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    isInterStateDelivery: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    orderType: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    interestPercentage: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: User,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    purchaseOrderNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    purchaseOrderDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Locations,
        key: 'id',
      },
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'OrderList',
    tableName: 'orderlist',
    timestamps: true,
    indexes: [
      { fields: ['userId'] },
      { fields: ['orderStatus'] },
      { fields: ['locationId'] },
    ],
  }
);

// Associations
OrderList.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
User.hasMany(OrderList, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderList.belongsTo(Locations, {
  foreignKey: 'locationId',
  onDelete: 'CASCADE',
});
Locations.hasMany(OrderList, {
  foreignKey: 'locationId',
  onDelete: 'CASCADE',
});

export default OrderList;
