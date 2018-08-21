const path = require('path');
const webpack = require('webpack');
const { NODE_ENV } = process.env;

const config = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: `index${NODE_ENV === 'production' ? '.min' : ''}.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  mode: NODE_ENV,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': NODE_ENV
    })
  ]
};

module.exports = config;
