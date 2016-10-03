const _ = require('lodash');

const config = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000,
  secrets: {}
};

config.env = process.env.REACT_APP_ENV || config.dev;

const envConfig = require('./' + config.env) || {};
// merge the two config files together
// the envConfig file will overwrite properties
// on the config object
module.exports = _.merge(config, envConfig);
