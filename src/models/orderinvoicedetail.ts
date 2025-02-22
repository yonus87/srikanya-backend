//src/models/orderinvoicedetail.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import OrderList from './OrderList';

class OrderInvoiceDetail extends Model {
  invoiceId!: number;
  ewayBillNumber!: string | null;
  invoiceSent!: boolean | null;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number | null;
  doNumber!: string | null;
}

OrderInvoiceDetail.init(
  {
    invoiceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ewayBillNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    invoiceSent: {
      type: DataTypes.BOOLEAN,
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
    doNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'OrderInvoiceDetail',
    tableName: 'orderinvoicedetail',
    timestamps: true,
    indexes: [
      { fields: ['orderId'] },
    ],
  }
);

// Associations
OrderInvoiceDetail.belongsTo(OrderList, {
  foreignKey: 'orderId',
  as: 'order',  
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});


OrderList.hasMany(OrderInvoiceDetail, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default OrderInvoiceDetail;
