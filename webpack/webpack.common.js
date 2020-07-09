const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { PATHS, ENTRIES, LOADERS } = require('./constants');

const config = {
  entry: {
    index: ENTRIES.index,
    login: ENTRIES.login,
    registration: ENTRIES.registration,
    rooms: ENTRIES.rooms,
    room: ENTRIES.room,
  },
  output: {
    filename: 'js/[name].js',
    path: PATHS.dist,
    publicPath: '/',
  },
  resolve: {
    modules: [PATHS.src, PATHS.nodeModules],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    ...Object.keys(ENTRIES).map(
      (entry) => new HtmlWebpackPlugin({
        chunks: [entry],
        filename: `${entry}.html`,
        template: `${PATHS.pages}/${entry}/${entry}.pug`,
      }),
    ),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [LOADERS.js],
      },
      {
        test: /\.pug$/,
        use: [LOADERS.pug],
      },
      {
        test: /\.css$/,
        use: [LOADERS.miniCss, LOADERS.css, LOADERS.postCss],
      },
      {
        test: /\.s[ac]ss$/,
        use: [LOADERS.miniCss, LOADERS.css, LOADERS.postCss, LOADERS.scss],
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [LOADERS.img],
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [LOADERS.fonts],
      },
    ],
  },
};

module.exports = config;
