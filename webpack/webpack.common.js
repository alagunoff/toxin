const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { PATHS, ENTRIES, LOADERS } = require('./constants');

const config = {
  entry: {
    index: ENTRIES.index,
    main: ENTRIES.main,
    login: ENTRIES.login,
    registration: ENTRIES.registration,
    rooms: ENTRIES.rooms,
    room: ENTRIES.room,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
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
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]',
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
  resolve: {
    modules: [PATHS.src, PATHS.nodeModules],
    alias: {
      '@root': PATHS.src,
      '@components': PATHS.components,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    ...Object.keys(ENTRIES).map(
      (entry) =>
        new HtmlWebpackPlugin({
          chunks: [entry],
          filename: `${entry}.html`,
          template: `${PATHS.pages}/${entry}/${entry}.pug`,
        }),
    ),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
    },
  },
};

module.exports = config;
