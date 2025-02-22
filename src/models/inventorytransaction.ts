//src/models/inventorytransaction.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import Seller from './sellerlist';
import InventoryList from './inventorylist';
import SellerList from './sellerlist';

class InventoryTransaction extends Model {
  id!: number;
  sellerId!: number;
  inventoryId!: number;
  invoiceId!: string;
  purchaseDate!: Date;
  vehicleNumber?: string | null;
  quantity!: number;
  remainingQuantity!: number;
  productCost?: number | null;
  transportationCost?: number | null;
  loadingCost?: number | null;
  unloadingCost?: number | null;
  sgstCost?: number | null;
  cgstCost?: number | null;
  igstCost?: number | null;
  otherCost?: number | null;
  totalCost?: number | null;
  inventoryUsed!: boolean;
  updatedBy!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

InventoryTransaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Seller,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    inventoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: InventoryList,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    invoiceId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    purchaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    vehicleNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    remainingQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
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
    sgstCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    cgstCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    igstCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    otherCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    totalCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    inventoryUsed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '0',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'InventoryTransaction',
    tableName: 'inventorytransaction',
    timestamps: true,
    indexes: [
      { fields: ['sellerId'] },  
      { fields: ['inventoryId'] },  
    ],
  }
);

// Associations
InventoryTransaction.belongsTo(SellerList, { foreignKey: 'sellerId', as: 'seller' });
InventoryTransaction.belongsTo(InventoryList, { foreignKey: 'inventoryId', as: 'inventory' });

export default InventoryTransaction;
