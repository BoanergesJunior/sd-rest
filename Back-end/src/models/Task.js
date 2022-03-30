const { Model, DataTypes } = require('sequelize');

class Task extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      limitTime: DataTypes.DATE,
      finished: DataTypes.BOOLEAN,
    }, {
      sequelize,
    })
  }
}

module.exports = Task