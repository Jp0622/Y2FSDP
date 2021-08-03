'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    static associate(models) {
    }
  };
  admin.init({
    admin_account: DataTypes.STRING,
    admin_password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admin',
  });
  return admin;
};
