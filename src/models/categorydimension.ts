//src/models/categorydimension.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize'; 
import CategoryType from './categorytypes'; 

class CategoryDimension extends Model {
  id!: number;
  dimensionId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  categoryId?: number | null;
  isDeleted!: boolean;
  length?: number | null;
  breadth?: number | null;
  height?: number | null;
  thickness?: number | null;
  diameter?: number | null;
  grade?: string | null;
  angle?: number | null;
  shape?: string | null;
}

CategoryDimension.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dimensionId: {
      type: DataTypes.STRING(10),
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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    shape: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(), 
    modelName: 'CategoryDimension',
    tableName: 'categorydimension',
    timestamps: true,
    indexes: [
      { fields: ['categoryId'] }, 
    ],
  }
);

// Define associations with aliases
CategoryDimension.belongsTo(CategoryType, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  as: 'categoryType', 
});

CategoryType.hasMany(CategoryDimension, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  as: 'categoryDimensions', 
});

export default CategoryDimension;
