//src/models/razorpayorder.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import OrderList from './OrderList';

class RazorpayOrder extends Model {
  id!: number;
  amount!: number;
  currency!: string;
  razorpayOrderId?: string | null;
  extraInfo?: string | null;
  orderId?: number | null;
}

RazorpayOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.DECIMAL(10,2), 
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: 'INR',
    },
    razorpayOrderId: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    extraInfo: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    modelName: 'RazorpayOrder',
    tableName: 'razorpayorder',
    timestamps: true,
    createdAt: 'createdAt',  
    updatedAt: 'updatedAt',
    indexes: [{ fields: ['orderId'] }],
  }
);

RazorpayOrder.belongsTo(OrderList, {
  foreignKey: 'orderId',
  as: 'order',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderList.hasMany(RazorpayOrder, {
  foreignKey: 'orderId',
  as: 'razorpayOrders',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default RazorpayOrder;
