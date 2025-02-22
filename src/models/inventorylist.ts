//src/models/inventorylist.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import Brand from './brandlist';
import CategoryType from './categorytypes';
import Location from './location';

class InventoryList extends Model {
  id!: number;
  name!: string;
  createdAt!: Date;
  updatedAt!: Date;
  brandId?: number | null;
  categoryId?: number | null;
  locationId?: number | null;
}

InventoryList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
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
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Brand,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: CategoryType,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Location,
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'InventoryList',
    tableName: 'inventorylist',
    timestamps: true,
    indexes: [
      { fields: ['brandId'] },          
      { fields: ['categoryId'] },       
      { fields: ['locationId'] },       
    ],
  }
);

// Associations
InventoryList.belongsTo(Brand, { foreignKey: 'brandId' });
InventoryList.belongsTo(CategoryType, { foreignKey: 'categoryId' });
InventoryList.belongsTo(Location, { foreignKey: 'locationId' });

export default InventoryList;
