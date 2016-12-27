const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'public_html'),
  style: [
    path.join(__dirname, 'src', 'index.css')
  ]
};

const common = {
  entry: {
    app: PATHS.app,
    style: PATHS.style
  },
  output: {
    // Modify the name of the generated sourcemap file.
    // You can use [file], [id], and [hash] replacements here.
    // The default option is enough for most use cases.
    sourceMapFilename: '[file].map', // Default

    // This is the sourcemap filename template. It's default format
    // depends on the devtool option used. You don't need to modify this
    // often.
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]',
    path: PATHS.build,
    filename: '[name].js'
  },
  context: __dirname,
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /bootstrap.+\.(jsx|js)$/,
        loader: 'imports?jQuery=jquery,$=jquery,this=>window'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'bootstrap & jquery starter kit',
      inject: 'body',
      template: path.join( PATHS.app, 'index.tmpl.html' )
    }),
    new webpack.ProvidePlugin({
      "window.Tether": 'tether'
    })
  ]
};

module.exports = function(env) {
  if (env === 'build') {
    return merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      //parts.minify(),
      parts.extractCSS(PATHS.style),
      //parts.purifyCSS([PATHS.app])
      parts.copyStatic({ from: 'assets' })
    );
  }

  return merge(
    common,
    {
      devtool: 'eval-source-map',
      // Disable performance hints during development
      performance: {
        hints: false
      }
    },
    //parts.clean(PATHS.build),
    parts.setupCSS(PATHS.style),
    parts.devServer({
      contentBase: path.join( __dirname, 'assets' ),
      // Customize host/port here if needed
      host: process.env.HOST,
      port: process.env.PORT
    })
  );
};
