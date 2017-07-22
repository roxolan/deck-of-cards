const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')


module.exports = [
  {
    entry: {
      app: path.resolve(__dirname, './server/src/index.js')
    },
    externals: [nodeExternals()],

    target: 'node',

    output: {
      path: path.join(__dirname, '/dist/'),
      filename: 'bundle.js',
      publicPath: '/'
    },

    module: {
      loaders: [
        {
          test: /\.(js)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },

    devServer: {
      port: 8888,
      contentBase: path.join(__dirname, '/dist/'),
      historyApiFallback: true
    },
    devtool: 'source-map'
  }
]


