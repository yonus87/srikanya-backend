// src/models/testimonials.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import Location from './location';

// Define Testimonial attributes interface
export interface TestimonialAttributes {
  id: number;
  locationId?: number | null;
  image_logo?: string | null;
  content?: string | null;
  name?: string | null;
  designation?: string | null;
  createdAt: Date;
  updatedAt: Date;
  is_active: boolean;
}

class Testimonial extends Model<TestimonialAttributes> implements TestimonialAttributes {
  id!: number;
  locationId?: number | null;
  image_logo?: string | null;
  content?: string | null;
  name?: string | null;
  designation?: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  is_active!: boolean;
  Location?: Location | null;
}

Testimonial.init(
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
    image_logo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    designation: {
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
    is_active: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
      allowNull: false,
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'Testimonial',
    tableName: 'testimonials',
    timestamps: true,
    indexes: [{ fields: ['locationId'] }],
  }
);

// Associations
Testimonial.belongsTo(Location, { foreignKey: 'locationId' });

export default Testimonial;
