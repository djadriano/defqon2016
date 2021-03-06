// ------------------------------------------------------------------
// Default Dependencies
// ------------------------------------------------------------------

var path              = require('path');
var webpack           = require('webpack');
var precss            = require('precss');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var rootPath          = path.resolve( __dirname );

// ------------------------------------------------------------------
// Postcss Plugins
// ------------------------------------------------------------------

var autoprefixer  = require('autoprefixer');
var postcssImport = require('postcss-import');
var stylelint     = require('stylelint');
var postcssBem    = require('postcss-bem');
var cssMqPacker   = require('css-mqpacker');
var fontMagician  = require('postcss-font-magician');
var cssEasings    = require('postcss-easings');
var pxtorem       = require('postcss-pxtorem');
var cssnano       = require('cssnano');

// ------------------------------------------------------------------
// Initialize Config
// ------------------------------------------------------------------

var isProd = (process.env.NODE_ENV === 'production');

var webpackPlugins = {
  development: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './layouts/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': process.env.NODE_ENV
      }
    }),
    new ExtractTextPlugin("[name].css")
  ],
  production: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: './layouts/index.html'
    })
  ]
};

var postCssPlugins = {
  development: [
    precss,
    autoprefixer,
    cssEasings,
    pxtorem(),
    postcssBem(),
    cssMqPacker(),
    fontMagician({
      foundries: 'google',
      hosted: './app/assets/fonts'
    }),
    postcssImport({
      addDependencyTo: webpack
    })
  ],
  production: [
    cssnano()
  ]
};

function getWebpackPlugins() {
  if( isProd ) {
    return webpackPlugins.production;
  } else {
    return webpackPlugins.development;
  }
}

function getPostCssPlugins(webpack) {
  if( isProd ) {
    return postCssPlugins.production;
  } else {
    return postCssPlugins.development;
  }
}

module.exports = {
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './app/source/javascripts/index.jsx'
  ],
  output: {
    path: path.resolve(rootPath, 'dist'),
    filename: "bundle.js"
  },
  module: {
     loaders: [
       {
         test: /\.jsx?$/,
         exclude: /(node_modules)/,
         loaders: ['react-hot', 'babel']
       },
       {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
       },
       {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
       },
       {
        test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
        loader: 'file'
       },
       {
        test: /\.(ttf|eot|svg|woff(2)?)(\w+)?$/,
        loader: 'file=app/assets/fonts/[name].[ext]'
       }
     ]
   },
   resolve: {
     extensions: ['', '.js', '.jsx', '.scss']
   },
   postcss: function (webpack) {
      return getPostCssPlugins(webpack);
   },
   plugins: getWebpackPlugins()
}
