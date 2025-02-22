
//src/models/contactus.ts
import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';

class ContactUs extends Model {
  id!: number;
  name?: string | null;
  email?: string | null;
  message?: string | null;
  status?: string | null;
  note?: string | null;
  createdAt!: Date;
  updatedAt!: Date;
}

ContactUs.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    note: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    modelName: 'ContactUs',
    tableName: 'contactus',
    timestamps: true, 
  }
);

export default ContactUs;
