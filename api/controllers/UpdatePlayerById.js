'use strict';
const models = require('../models')

function UpdatePlayerById(req, res){
  var params = req.swagger.params;

  models.player.find({
      where: { id: params.id.value }
    })
    .then((player) => {
      if (player) {
        player.update(params.updated_player.value)
        .then((player) => {
          res.json(player.get({ plain: true }));
        })
      }
    });
}

module.exports = {
  UpdatePlayerById : UpdatePlayerById
}
