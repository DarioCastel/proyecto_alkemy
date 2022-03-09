'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personaje extends Model {
    
    static associate(models) {
      // define association here
    }
  }
  Personaje.init({
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    history: DataTypes.STRING,
    id_movie: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Personaje',
  });
  return Personaje;
};