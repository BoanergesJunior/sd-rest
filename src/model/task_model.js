import Sequelize from 'sequelize';
import database from '../database'

export default database.define('task', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  limitTime: {
    type: Sequelize.DATE,
    allowNull: false
  },
  finished: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false
  }
})