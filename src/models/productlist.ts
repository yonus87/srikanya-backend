import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import CategoryTypes from './categorytypes';
import BrandList from './brandlist';
import InventoryList from './inventorylist';
import Locations from './location';

class ProductList extends Model {
  id!: number;
  name!: string;
  imageLink!: string | null;
  description!: string | null;
  primaryRate!: number | null;
  Rodprice!: number | null;
  conversionRatio!: number;
  cgstPercent!: number;
  igstPercent!: number;
  sgstPercent!: number;
  hsnCode!: string;
  isDeleted!: boolean;
  isDisabled!: boolean;
  length!: number | null;
  breadth!: number | null;
  height!: number | null;
  thickness!: number | null;
  diameter!: number | null;
  grade!: string | null;
  angle!: string | null;
  shape!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  categoryId!: number | null;
  brandId!: number | null;
  inventoryId!: number | null;
  locationId!: number | null;
  categoryDimensionId!: number | null;
}

ProductList.init(
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
    imageLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    primaryRate: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    Rodprice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    conversionRatio: {
      type: DataTypes.FLOAT,
      defaultValue: 1,
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
    hsnCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDisabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    length: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    breadth: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    height: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    thickness: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    diameter: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    grade: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    angle: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    shape: {
      type: DataTypes.STRING(50),
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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: CategoryTypes,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: BrandList,
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
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Locations,
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
  
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'ProductList',
    tableName: 'productlist',
    timestamps: true,
    indexes: [
      { fields: ['name'] },
      { fields: ['categoryId'] },
      { fields: ['brandId'] },
      { fields: ['inventoryId'] },
      { fields: ['locationId'] },
      { fields: ['categoryDimensionId'] },
      { fields: ['isDeleted'] },
      { fields: ['isDisabled'] },
      { fields: ['categoryId', 'brandId'] },
    ],
  }
);

// Define associations
ProductList.belongsTo(CategoryTypes, { foreignKey: 'categoryId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ProductList.belongsTo(BrandList, { foreignKey: 'brandId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ProductList.belongsTo(InventoryList, { foreignKey: 'inventoryId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
ProductList.belongsTo(Locations, { foreignKey: 'locationId', onDelete: 'SET NULL', onUpdate: 'CASCADE' });

export default ProductList;
