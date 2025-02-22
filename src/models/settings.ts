// src/models/settings.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import Location from './location'; 

class Setting extends Model {
  id!: number;
  name!: string;
  value!: string | null;
  note!: string | null;
  updatedBy!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  locationId!: number | null;
}

Setting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    value: {
      type: DataTypes.STRING(3000),
      allowNull: true,
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Location,
        key: 'id',
      },
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'Setting',
    tableName: 'settings',
    timestamps: true,
  }
);

//  the relationship (each Setting belongs to one Location)
Setting.belongsTo(Location, {
  foreignKey: 'locationId', 
  as: 'location', 
});

export default Setting;
