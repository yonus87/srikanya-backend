import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import CategoryDimension from './categorydimension'; 
import ProductList from './productlist'; 

class ProductDimensions extends Model {
  id!: number;
  value!: string;
  createdAt!: Date;
  updatedAt!: Date;
  productDimensionId!: number | null;
  productId!: number | null;
}

ProductDimensions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    productDimensionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: CategoryDimension,
        key: 'id',
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: ProductList,
        key: 'id',
      },
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'ProductDimensions',
    tableName: 'productdimensions',
    timestamps: true,
    indexes: [
      { fields: ['productDimensionId'] },
      { fields: ['productId'] },
    ],
  }
);

// Define associations
ProductDimensions.belongsTo(CategoryDimension, { 
  foreignKey: 'productDimensionId', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE',
  as: 'categoryDimension'  
});

ProductDimensions.belongsTo(ProductList, { 
  foreignKey: 'productId', 
  onDelete: 'CASCADE', 
  onUpdate: 'CASCADE',
  as: 'productList' 
});

export default ProductDimensions;
