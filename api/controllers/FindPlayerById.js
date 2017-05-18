'use strict';
const models = require('../models')

function FindPlayerById(req, res) {
  var params = req.swagger.params;

  models.player.find({
      where: { id: params.id.value }
    })
    .then((player) => {
      res.json(player);
    });
}

module.exports = {
  FindPlayerById : FindPlayerById
}
