'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  movie.init({
    movie_title: DataTypes.STRING,
    movie_time: DataTypes.INTEGER,
    movie_image: DataTypes.STRING,
    movie_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};