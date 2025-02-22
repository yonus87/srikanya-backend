import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';

class Account extends Model {
  declare accountid: bigint;
  declare name: string;
  declare roleid: bigint;
  declare customerid: bigint;
  declare isactive: boolean;
  declare applicationname: string;
  declare isEmailVerified: boolean;
  declare isPhoneVerified: boolean;
  declare phone: string;
  declare createdby: bigint;
  declare createddate: Date;
  declare lastupdatedby: bigint;
  declare lastupdateddate: Date;
  declare firstname: string;
  declare lastname: string;
  declare password: string;
  declare orgname: string;
  declare remindAt: string;
  declare passwordARN: string;
  declare uom: string;
  declare enableNotification: boolean;
  declare endpoint: string;
  declare devicetoken: string;
  declare channel: string;
  declare isowner: boolean;
  declare employeeid: string;
  declare enablemobilelogin: boolean;
  declare isCalibrationAvailable: boolean;
  declare isPortalLogin: boolean;
  declare lastlogindate: Date;
  declare invitedate: Date;
  declare isDeleted: boolean;
  declare timezone: string;
  declare lang: string;
  declare isHaccapAccess: boolean;
  declare islocationadmin: boolean;
  declare lastselectedportallocation: number;
  declare lastselectedportalsecuritygroup: number;
  declare sitemap: any;
  declare locationids: any;
  declare securityGroupIds: any;
}

Account.init({

  accountid: {
    type: DataTypes.BIGINT,
    allowNull: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  roleid: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
  },
  customerid: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  isactive: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  applicationname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isEmailVerified: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  isPhoneVerified: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdby: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  createddate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  lastupdatedby: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  lastupdateddate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true
  },
  orgname: {
    type: DataTypes.STRING,
    allowNull: true
  },
  passwordARN: {
    type: DataTypes.STRING,
    allowNull: true
  },
  uom: {
    type: DataTypes.STRING,
    allowNull: true
  },
  enableNotification: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  endpoint: {
    type: DataTypes.STRING,
    allowNull: true
  },
  devicetoken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  channel: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isowner: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  employeeid: {
    type: DataTypes.STRING,
    allowNull: true
  },
  enablemobilelogin: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  isCalibrationAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  isPortalLogin: {
    type: DataTypes.TINYINT,
    allowNull: true
  },
  lastlogindate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  invitedate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  timezone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lang: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isHaccapAccess: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  lastselectedportallocation: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  lastselectedportalsecuritygroup: {
    type: DataTypes.BIGINT,
    allowNull: true
  }
}, {
  timestamps: false,
  sequelize: SequelizeConnection.getSequelize(),
  freezeTableName: true,
  tableName: 'account'
});

export default Account;

