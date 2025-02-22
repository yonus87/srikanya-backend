//src/models/orderitem.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import ProductList from './productlist';
import OrderList from './OrderList';

class OrderItem extends Model {
  id!: number;
  quantity!: number;
  quantityUnit!: string;
  primaryRate!: number;
  cgstPercent!: number;
  igstPercent!: number;
  sgstPercent!: number;
  conversionRatio!: number | null;
  createdAt!: Date;
  updatedAt!: Date;
  productId?: number | null;
  orderId?: number | null;
}

OrderItem.init(
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
    quantityUnit: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    primaryRate: {
      type: DataTypes.FLOAT, // Or DataTypes.DECIMAL
      allowNull: false,
    },
    cgstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    igstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sgstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    conversionRatio: {
      type: DataTypes.FLOAT,
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: ProductList,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
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
    modelName: 'OrderItem',
    tableName: 'orderitem',
    timestamps: true,
    indexes: [
      { fields: ['productId'] },
      { fields: ['orderId'] },
    ],
  }
);

// Associations
OrderItem.belongsTo(ProductList, {
  foreignKey: 'productId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
ProductList.hasMany(OrderItem, {
  foreignKey: 'productId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderItem.belongsTo(OrderList, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
OrderList.hasMany(OrderItem, {
  foreignKey: 'orderId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default OrderItem;
