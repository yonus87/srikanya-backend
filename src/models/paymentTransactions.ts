//src/models/paymentTransactions.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import OrderList from './OrderList';  

class PaymentTransactions extends Model {
  id!: number;
  amount?: number | null;
  paymentDate?: Date | null;
  updatedBy?: string | null;
  paymentMode?: string | null;
  transactionCredit?: boolean | null;
  transactionNumber?: string | null;
  isDeleted!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number | null;
}

PaymentTransactions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    paymentMode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    transactionCredit: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: null,
    },
    transactionNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    isDeleted: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
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
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'PaymentTransactions',
    tableName: 'paymenttransactions',
    timestamps: true,
    indexes: [
      { fields: ['orderId'] },
    ],
  }
);

// Associations
PaymentTransactions.belongsTo(OrderList, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
OrderList.hasMany(PaymentTransactions, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default PaymentTransactions;
