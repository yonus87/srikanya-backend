// src/models/useraddress.ts

import { DataTypes, Model, Op } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import User from './user'; 

class UserAddress extends Model {
  public id!: number; 
  public fullName!: string;
  public mobileNumber!: string;
  public line1!: string | null;
  public line2!: string | null;
  public pincode!: number | null;
  public city!: string | null;
  public state!: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
  public userId!: string | null; 

  // Method to get user address by mobileNumber
  static async getByMobileNumber(mobileNumber: string): Promise<UserAddress | null> {
    return await UserAddress.findOne({ where: { mobileNumber } });
  }
}

UserAddress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '0',
    },
    mobileNumber: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: '0',
      validate: {
        isNumeric: true,
        len: [10, 10],
      },
    },
    line1: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    line2: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
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
    tableName: 'useraddress',
    timestamps: true,
    indexes: [{ fields: ['mobileNumber'] }], // Adding index for faster lookups
  }
);

// Set up the association with the User model 
UserAddress.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(UserAddress, { foreignKey: 'userId' });

export default UserAddress;
