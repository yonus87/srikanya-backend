


//src/models/userLogin.ts

import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import User from './user'; 

class UserLogin extends Model {
  userName!: string;
  password!: string;
  salt!: string;
  createdAt!: Date;
  updatedAt!: Date;
  userId!: string;
}

UserLogin.init(
  {
    userName: {
      type: DataTypes.STRING(50),
      primaryKey: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: true,
    },
    salt: {
      type: DataTypes.STRING(100),
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
    userId: {
      type: DataTypes.STRING(36),
      references: {
        model: 'user', // Foreign key relation to User model
        key: 'id',
      },
      allowNull: true,
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'UserLogin',
    tableName: 'userlogin', 
  }
);

//  between UserLogin and User
UserLogin.belongsTo(User, { foreignKey: 'userId' });

export default UserLogin;
