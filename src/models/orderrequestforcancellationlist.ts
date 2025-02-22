//src/models/orderrequestforcancellationlist.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import OrderList from './OrderList';

class OrderRequestForCancellationList extends Model {
  id!: number;
  reason?: string | null;
  active?: boolean | null;
  rejected?: boolean | null;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number | null;
}

OrderRequestForCancellationList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: null,
    },
    rejected: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: null,
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
    modelName: 'OrderRequestForCancellationList',
    tableName: 'orderrequestforcancellationlist',
    timestamps: true,
    indexes: [
      { fields: ['orderId'] },           
      { fields: ['active'] },           
      { fields: ['rejected'] },          
      { fields: ['orderId', 'active'] }, 
    ],
  }
);

// Associations
OrderRequestForCancellationList.belongsTo(OrderList, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
OrderList.hasMany(OrderRequestForCancellationList, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default OrderRequestForCancellationList;
