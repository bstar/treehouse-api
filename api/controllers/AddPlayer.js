'use strict';
const models = require('../models');

function AddPlayer (req, res){
  var params = req.swagger.params.player.value;

  models.player.create(params).then(player => {
    res.json(player);
  })
}

module.exports = {
  AddPlayer: AddPlayer
}
