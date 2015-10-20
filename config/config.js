var config = require('./dev');

if(process.env.NODE_ENV === 'live'){
  config = require('./config/live');
}

module.exports = config;