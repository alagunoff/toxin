const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { PATHS } = require('./constants');
const common = require('./webpack.common');

const config = merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash].js',
    path: PATHS.dist,
    publicPath: '/',
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
    }),
  ],
});

module.exports = config;
