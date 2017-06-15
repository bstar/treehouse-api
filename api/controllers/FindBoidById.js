'use strict';
const models = require('../models')

function FindBoidById(req, res) {
  var params = req.swagger.params;

  models.boid.find({
      where: { id: params.id.value }
    })
    .then((boid) => {
      res.json(boid);
    });
}

module.exports = {
  FindBoidById : FindBoidById
}
