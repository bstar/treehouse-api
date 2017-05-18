'use strict';
module.exports = (sequelize, DataTypes) => {
  var player = sequelize.define('player', {
    name: DataTypes.STRING,
    nation: DataTypes.STRING,
    position: DataTypes.STRING,
    age: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    shot: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
    })
  return player;
};
