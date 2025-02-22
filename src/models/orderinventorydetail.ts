//src/models/orderinventorydetail.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import OrderList from './OrderList';
import InventoryList from './inventorylist';

class OrderInventoryDetail extends Model {
  id!: number;
  inventoryUsed!: number;
  inventoryWasted!: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId?: number | null;
  inventoryId?: number | null;
}

OrderInventoryDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    inventoryUsed: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: false,
    },
    inventoryWasted: {
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
    inventoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: InventoryList,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'OrderInventoryDetail',
    tableName: 'orderinventorydetail',
    timestamps: true,
    indexes: [
      { fields: ['orderId'] },
      { fields: ['inventoryId'] },
    ],
  }
);

// Associations
OrderInventoryDetail.belongsTo(OrderList, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderList.hasMany(OrderInventoryDetail, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderInventoryDetail.belongsTo(InventoryList, {
  foreignKey: 'inventoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

InventoryList.hasMany(OrderInventoryDetail, {
  foreignKey: 'inventoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default OrderInventoryDetail;
