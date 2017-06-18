'use strict';
module.exports = (sequelize, DataTypes) => {
  var boid = sequelize.define('boid', {
    name: DataTypes.STRING,
    nation: DataTypes.STRING,
    dob: DataTypes.INTEGER,

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
    })
  return boid;
};




// BOID
//   job: "coach"
//   - STATS
//   - ATTRIBUTES
//     iq
//     vision
//
//   - COACH
//     type: "physio"
//   - SCOUT
//   - GM
//     type: "agm"
//   - PLAYER
//     position
//     handedness
//     condition
//   - MANAGEMENT
//     type: "owner"
