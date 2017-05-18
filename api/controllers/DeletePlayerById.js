'use strict';
const models = require('../models')

module.exports = {
  DeletePlayerById : DeletePlayerById
}

function DeletePlayerById(req, res) {
  var params = req.swagger.params;

  models.player.destroy({
      where: { id: params.id.value }
    })
    .then((status) => {
      res.json({ deleted: status });
    })
}
