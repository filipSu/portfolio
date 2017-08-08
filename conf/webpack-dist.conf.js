const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [
      {
        test: /.json$/,
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
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.scss$/,
            loaders: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader?-autoprefixer&sourceMap!sass-loader!postcss-loader'
            })
        },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loaders: [
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {unused: true, dead_code: true, warnings: false} // eslint-disable-line camelcase
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
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
              includePaths: [path.resolve(__dirname, 'src', 'scss')]
          },
          context: '/'
      }
    })
  ],
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
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
  entry: {
    app: `./${conf.path.src('index')}`,
    vendor: Object.keys(pkg.dependencies)
  }
};
