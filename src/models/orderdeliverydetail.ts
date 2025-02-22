import { Model, DataTypes } from 'sequelize';
import { SequelizeConnection } from './sequelize';
import OrderDispatchDetail from './orderdispatchdetail';

class OrderDeliveryDetail extends Model {
  id!: number;
  deliveredTo?: string | null;
  deliveredBy?: string | null;
  mobileNumber?: string | null;
  comments?: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  orderDispatchId?: number | null;
}

OrderDeliveryDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    deliveredTo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    deliveredBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    mobileNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    orderDispatchId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: OrderDispatchDetail,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize: SequelizeConnection.getSequelize(),
    modelName: 'OrderDeliveryDetail',
    tableName: 'orderdeliverydetail',
    timestamps: true, 
    indexes: [{ fields: ['orderDispatchId'] }],
  }
);

// Associations
OrderDeliveryDetail.belongsTo(OrderDispatchDetail, {
  foreignKey: 'orderDispatchId',
  as: 'orderDispatch', 
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderDispatchDetail.hasMany(OrderDeliveryDetail, {
  foreignKey: 'orderDispatchId',
  as: 'deliveries', 
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default OrderDeliveryDetail;
