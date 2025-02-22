import { Model, DataTypes, Optional } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import Location from './location';

// Interface for Customer attributes (excluding `id`, which is auto-generated)
interface CustomerAttributes {
  id: number;
  locationId?: number | null;
  image?: string | null;
  name?: string | null;
  createdAt: Date;
  updatedAt: Date;
  location?: Location | null; // Optional, based on the association
}

// For optional customer data during creation (excluding `id`)
interface CustomerCreationAttributes extends Optional<CustomerAttributes, 'id'> {}

class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> {
  id!: number;
  locationId?: number | null;
  image?: string | null;
  name?: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  
  location?: Location | null; 
}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    image: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'Customer',
    tableName: 'customers',
    timestamps: true,
    indexes: [
      { fields: ['locationId'] }, // Index for locationId
    ],
  }
);

// Associations
Customer.belongsTo(Location, { foreignKey: 'locationId' });

export default Customer;
