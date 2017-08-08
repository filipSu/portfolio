const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /.tsx$/,
        exclude: /node_modules/,
        loader: 'tslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader?-autoprefixer',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot-loader',
          'ts-loader'
        ]
      },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" },
      { test: /\.woff$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot$/,  loader: "file-loader" },
      { test: /\.svg$/,  loader: "svg-url-loader" }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    FailPlugin,
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
          postcss: [autoprefixer({ browsers: ['> 0%'] })],
          minimize : true,
          resolve: {},
          ts: {
            configFileName: 'tsconfig.json'
          },
          tslint: {
            configuration: require('../tslint.json')
          },
          sassLoader: {
              includePaths: [
                  path.resolve(__dirname, 'src', 'scss'),
                  path.resolve(__dirname, 'src/assets/scss', 'scss')
              ]
          },
          context: '/'
      },
      debug: true
    })
  ],
  devtool: 'source-map',
  output: {
    path: path.join(process.cwd(), conf.paths.tmp),
    filename: 'index.js'
  },
  resolve: {
    extensions: [
      '.webpack.js',
      '.web.js',
      '.js',
      '.ts',
      '.tsx'
    ]
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    `./${conf.path.src('index')}`
  ]
};
