'use strict';

var SwaggerExpress = require('swagger-express-mw');
var express = require('express');
var app = express();
var debug = require('debug')('express-sequelize');
var cors = require('cors');
var models = require('./api/models');

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

app.use(cors());

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }


  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;

  models.sequelize.sync().then(function() {
    /**
     * Listen on provided port, on all network interfaces.
     */

    app.use(express.static('./public'))
    app.listen(port, function() {
      // debug('Express server listening on port ' + app.address().port);
    });
    app.on('error', onError);
    app.on('listening', onListening);
  });


  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  // var addr = server.address();
  // var bind = typeof addr === 'string'
  //   ? 'pipe ' + addr
  //   : 'port ' + addr.port;
  // debug('Listening on ' + bind);
}
