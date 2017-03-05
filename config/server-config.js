const _                = require('lodash');
const productionConfig = require('./server-config.production');

let config = {
  server: {
    host: 'http://127.0.0.1',
    port: process.env.PORT || 3000,
    apiRoot: '/api/v1'
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports = _.merge({}, config, productionConfig);
} else {
  module.exports = config;
}

