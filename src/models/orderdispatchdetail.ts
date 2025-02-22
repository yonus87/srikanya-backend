//src/models/orderdispatchdetail.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import OrderList from './OrderList';

class OrderDispatchDetail extends Model {
  id!: number;
  deliveryAgentName?: string | null;
  deliveryAgentMobileNumber!: string;
  vehicleName!: string;
  vehicleNumber!: string;
  ewayBillNumber?: string | null;
  invoiceNumber?: string | null;
  transportationCost?: number | null;
  loadingCost?: number | null;
  unloadingCost?: number | null;
  cgst?: number | null;
  sgst?: number | null;
  igst?: number | null;
  totalCost?: number | null;
  interestCost?: number | null;
  dispatchStatus?: string | null;
  creditDate?: Date | null;
  invoiceSent!: boolean;
  outForDeliveryAt?: Date | null;
  creditDateDay?: number | null;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number | null;
  placeOfDispatch?: string | null;
  transporter?: string | null;
  lrNumber?: string | null;
  termsOfDelivery?: string | null;
  destination?: string | null;
  tcsCost!: number;
}

OrderDispatchDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    deliveryAgentName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    deliveryAgentMobileNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    vehicleName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    vehicleNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ewayBillNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    invoiceNumber: {
      type: DataTypes.STRING(255),
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
    totalCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    interestCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    dispatchStatus: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    creditDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    invoiceSent: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
      allowNull: false,
    },
    outForDeliveryAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    creditDateDay: {
      type: DataTypes.INTEGER,
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
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: OrderList,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    placeOfDispatch: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    transporter: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    lrNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    termsOfDelivery: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    destination: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    tcsCost: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'OrderDispatchDetail',
    tableName: 'orderdispatchdetail',
    timestamps: true,
    indexes: [
      { fields: ['orderId'] },  
    ],
  }
);

// Association
OrderDispatchDetail.belongsTo(OrderList, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderList.hasMany(OrderDispatchDetail, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default OrderDispatchDetail;
