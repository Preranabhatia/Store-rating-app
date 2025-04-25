import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User .model.js';
import Store from './Store.model.js';

const Rating = sequelize.define('Rating', {
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,
});

// Define associations
Rating.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Rating.belongsTo(Store, { foreignKey: 'storeId', as: 'store' });

export default Rating;