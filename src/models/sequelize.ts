// #region IMPORTS
import { Sequelize } from 'sequelize';
import { Service } from 'typedi';
import config from 'config';
// #endregion

const DB_HOST:string = (process.env.NODE_ENV == 'development') ? config.get('database.host') : 'localhost';
const DB_USER:string = (process.env.NODE_ENV == 'development') ? config.get('database.user') : 'root';
const DB_PASS:string = (process.env.NODE_ENV == 'development') ? config.get('database.password') : 'root';
const DB_NAME:string = (process.env.NODE_ENV == 'development') ? config.get('database.database') : 'srikanya';

@Service()
export class SequelizeConnection {
  private static sequelize: Sequelize;
  constructor() {
    if (!SequelizeConnection.sequelize) {
      SequelizeConnection.initialize();
    }
  }

  public static getSequelize(): Sequelize {
    if (!SequelizeConnection.sequelize) {
      this.initialize();
    }
    return SequelizeConnection.sequelize;
  }

  private static initialize() {
    SequelizeConnection.sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS,
        {
          host: DB_HOST,
          native: true,
          dialect: 'mysql',
          logging: false
        }
    );
    SequelizeConnection.sequelize.authenticate()
        .then(() => {
          console.log('Database connection established successfully.');
        })
        .catch((err) => {
          console.error('Unable to connect to the database:', err);
        });
    return SequelizeConnection.sequelize;
  }
}
