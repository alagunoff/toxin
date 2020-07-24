const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const ROOT = process.cwd();

const PATHS = {
  src: path.join(ROOT, 'src'),
  dist: path.join(ROOT, 'dist'),
  pages: path.join(ROOT, 'src/pages'),
  components: path.join(ROOT, 'src/components'),
  nodeModules: path.join(ROOT, 'node_modules'),
};

const ENTRIES = {
  index: path.join(PATHS.src, 'pages/index/index.js'),
  main: path.join(PATHS.src, 'pages/main/main.js'),
  login: path.join(PATHS.src, 'pages/login/login.js'),
  registration: path.join(PATHS.src, 'pages/registration/registration.js'),
  rooms: path.join(PATHS.src, 'pages/rooms/rooms.js'),
  room: path.join(PATHS.src, 'pages/room/room.js'),
  components: path.join(PATHS.src, 'pages/components/components.js'),
};

const LOADERS = {
  babel: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    },
  },
  pug: {
    loader: 'pug-loader',
  },
  css: {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      importLoaders: 1,
    },
  },
  miniCss: {
    loader: MiniCssExtractPlugin.loader,
  },
  postCss: {
    loader: 'postcss-loader',
    options: {
      plugins: [autoprefixer()],
      sourceMap: true,
    },
  },
  scss: {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      sassOptions: {
        includePaths: [PATHS.src, PATHS.nodeModules],
      },
    },
  },
  img: {
    loader: 'file-loader',
    options: {
      name: 'images/[name].[contenthash].[ext]',
      esModule: false,
    },
  },
  fonts: {
    loader: 'file-loader',
    options: {
      name: 'fonts/[name].[contenthash].[ext]',
    },
  },
};

module.exports = { PATHS, ENTRIES, LOADERS };
