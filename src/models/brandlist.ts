//src/models/brandlist.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';

class BrandList extends Model {
  declare id: number;
  declare name: string;
  declare link: string | null;
  declare type: string | null;
  declare isDisabled: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
}

BrandList.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  isDisabled: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
  sequelize: SequelizeConnection.getSequelize(),
  freezeTableName: true,
  tableName: 'brandlist',
});

export default BrandList;
