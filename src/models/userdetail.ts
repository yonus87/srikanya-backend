//src/models/userdetail.ts

import { DataTypes, Model } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import User from './user'; 

class UserDetail extends Model {
  public id!: number;
  public userType!: string | null;
  public fullname!: string | null;
  public gstin!: string | null;
  public pan!: string | null;
  public aadhaar!: string | null;
  public emailId!: string | null;
  public line1!: string | null;
  public line2!: string | null;
  public pincode!: number | null;
  public city!: string | null;
  public state!: string | null;
  public alternateMobile!: string | null;
  public defaultAddressId!: number | null;
  public createdAt!: Date;
  public updatedAt!: Date;
  public userId!: string | null; // Foreign key to User table
  public enableSMS!: boolean;
  public enableWhatsApp!: boolean;
}

UserDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userType: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    fullname: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    gstin: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    pan: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    aadhaar: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    emailId: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
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
    alternateMobile: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
    },
    defaultAddressId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    enableSMS: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
    },
    enableWhatsApp: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
    },
    userId: {
      type: DataTypes.STRING(36), // UUID length
      allowNull: true,
      references: {
        model: User, // Foreign key to User model
        key: 'id',
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    tableName: 'userdetail',
    timestamps: true,
  }
);

UserDetail.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

export default UserDetail;
