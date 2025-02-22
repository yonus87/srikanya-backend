//src/models/cart.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import Product from './productlist';
import User from './user';

class Cart extends Model {
  id!: number;
  quantity!: number | null;
  quantityUnit!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  productId!: number | null;
  userId!: string | null;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: true, 
    },
    quantityUnit: {
      type: DataTypes.STRING(15),
      allowNull: true, 
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, 
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, 
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Product,
        key: 'id',
      },
      onDelete: 'CASCADE',  
      onUpdate: 'CASCADE',  
    },
    userId: {
      type: DataTypes.CHAR(36), 
      allowNull: true,
      references: {
        model: User,
        key: 'id',
      },
      onDelete: 'CASCADE',  
      onUpdate: 'CASCADE',  
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'Cart',
    tableName: 'cart',
    createdAt: 'createdAt',  
    updatedAt: 'updatedAt',  
    indexes: [
      {
        name: 'productId_index',
        fields: ['productId'],
      },
      {
        name: 'userId_index',
        fields: ['userId'],
      },
    ],
  }
);

// Associations
Cart.belongsTo(Product, { foreignKey: 'productId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

export default Cart;
