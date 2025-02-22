//src/models/userRegistration.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';

class UserRegistration extends Model {
  id!: number;
  mobileNumber!: string | null;
  otp!: number | null;
  numberOfOtpSent!: number;
  numberOfOtpTried!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

UserRegistration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    mobileNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        isNumeric: true, 
        len: [10, 15], 
      },
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true, 
      },
    },
    numberOfOtpSent: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    numberOfOtpTried: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'UserRegistration',
    tableName: 'userregistration',
    timestamps: false, 
    hooks: {
      beforeUpdate: (user) => {
        user.updatedAt = new Date();
      },
    },
  }
);

export default UserRegistration;
