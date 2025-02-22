//src/models/orderdispatchitem.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import OrderItem from './orderitem';
import OrderDispatchDetail from './orderdispatchdetail';

class OrderDispatchItem extends Model {
  id!: number;
  quantity!: number;
  quantityWasted!: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderItemId?: number | null;
  orderDispatchId?: number | null;
}

OrderDispatchItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantityWasted: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    orderItemId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: OrderItem,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    orderDispatchId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: OrderDispatchDetail,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'OrderDispatchItem',
    tableName: 'orderdispatchitem',
    timestamps: true,
    indexes: [
      { fields: ['orderItemId'] },
      { fields: ['orderDispatchId'] },
    ],
  }
);

// Associations
OrderDispatchItem.belongsTo(OrderItem, {
  foreignKey: 'orderItemId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderItem.hasMany(OrderDispatchItem, {
  foreignKey: 'orderItemId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderDispatchItem.belongsTo(OrderDispatchDetail, {
  foreignKey: 'orderDispatchId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderDispatchDetail.hasMany(OrderDispatchItem, {
  foreignKey: 'orderDispatchId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default OrderDispatchItem;
