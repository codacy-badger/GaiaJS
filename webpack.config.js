const path = require('path');
const webpack = require('webpack');
// plugins
const HTMLWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
// required for variables defined in js and then used in sass
const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);

const sassVars = require('./src/theme.js');
// used to check whether to extract css
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              functions: {
                'get($keys)': (keys) => {
                  const keyList = keys.getValue().split('.');
                  let result = sassVars;
                  keyList.forEach((key) => {
                    result = result[key];
                  });
                  result = sassUtils.castToSass(result);
                  return result;
                },
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: 'gaia',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'gaia.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new StyleLintPlugin({
      files: ['src/**/*.scss'],
    }),
    new TSLintPlugin({
      files: ['src/**/*.ts'],
    }),
    new UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'gaia.css',
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
