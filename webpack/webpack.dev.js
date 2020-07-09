const { merge } = require('webpack-merge');

const { PATHS } = require('./constants');
const common = require('./webpack.common');

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PATHS.dist,
  },
});

module.exports = config;
