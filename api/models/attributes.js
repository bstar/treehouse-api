'use strict';
module.exports = (sequelize, DataTypes) => {
  var attributes = sequelize.define('attributes', {
    boid_id: DataTypes.INTEGER,
    acceleration: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    strength: DataTypes.INTEGER,
    agility: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
    })
  return attributes;
};
