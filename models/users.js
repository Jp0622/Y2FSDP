'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
    }
  };
  users.init({
    user_account: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
