'use strict';
const models = require('../models');

function AddBoid (req, res){
  var params = req.swagger.params.boid.value;

  models.boid.create(params).then(boid => {
    res.json(boid);
  })
}

module.exports = {
  AddBoid: AddBoid
}
