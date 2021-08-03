'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    static associate(models) {
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
