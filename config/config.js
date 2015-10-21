var config = require('./dev');

if(process.env.NODE_ENV === 'live'){
  config = require('./live');
}

module.exports = config;