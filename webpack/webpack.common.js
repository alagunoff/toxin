const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    index: './src/pages/index/index.js',
    login: './src/pages/login/login.js',
    registration: './src/pages/registration/registration.js',
    rooms: './src/pages/rooms/rooms.js',
    room: './src/pages/room/room.js',
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
      template: './src/pages/index/index.pug',
    }),
    new HtmlWebpackPlugin({
      chunks: ['login'],
      filename: 'login.html',
      template: './src/pages/login/login.pug',
    }),
    new HtmlWebpackPlugin({
      chunks: ['registration'],
      filename: 'registration.html',
      template: './src/pages/registration/registration.pug',
    }),
    new HtmlWebpackPlugin({
      chunks: ['rooms'],
      filename: 'rooms.html',
      template: './src/pages/rooms/rooms.pug',
    }),
    new HtmlWebpackPlugin({
      chunks: ['room'],
      filename: 'room.html',
      template: './src/pages/room/room.pug',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          root: path.resolve(__dirname, '../src/templates'),
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[hash].[ext]',
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
};
