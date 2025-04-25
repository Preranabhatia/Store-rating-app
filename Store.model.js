import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './User .model.js';

const Store = sequelize.define('Store', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Define association with User
Store.belongsTo(User, { foreignKey: 'ownerId', as: 'owner' });

export default Store;