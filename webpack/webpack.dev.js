const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { PATHS } = require('./constants');
const common = require('./webpack.common');

const config = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    path: PATHS.dist,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: PATHS.dist,
    overlay: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
  ],
});

module.exports = config;
