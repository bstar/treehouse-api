'use strict';
const models = require('../models')

function UpdateBoidById(req, res){
  var params = req.swagger.params;

  models.boid.find({
      where: { id: params.id.value }
    })
    .then((boid) => {
      if (boid) {
        boid.update(params.updated_boid.value)
        .then((boid) => {
          res.json(boid.get({ plain: true }));
        })
      }
    });
}

module.exports = {
  UpdateBoidById : UpdateBoidById
}
