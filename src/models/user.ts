//src/models/user.ts

import { DataTypes, Model } from 'sequelize';
import { SequelizeConnection } from './sequelize';

class User extends Model {
  public id!: string; // UUID
  public mobileNumber!: string;
  public fullName!: string;
  public roleId!: string;
  public isMobileConfirmed!: boolean;
  public isDeleted!: boolean;
  public createdBy!: string;
  public updatedBy!: string;
  public deletedBy!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,   
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,  
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,  
      validate: {
        isNumeric: true,
        len: [10, 10],
      },
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null, 
    },
    roleId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null, 
      validate: {
        //  validation to check if roleId is one of the allowed roles
        isIn: [['user', 'admin']],
      },
    },
    isMobileConfirmed: {
      type: DataTypes.TINYINT,
      allowNull: false, 
      defaultValue: 0,
    },
    isDeleted: {
      type: DataTypes.TINYINT,
      allowNull: false,  
      defaultValue: 0,
    },
    createdBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null, 
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null, 
    },
    deletedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null, 
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
    tableName: 'user',
    timestamps: true, 
  }
);

export default User;
