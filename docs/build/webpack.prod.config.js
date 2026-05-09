const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FaviconWebpackPlugin = require('favicons-webpack-plugin')

const conf = require('./conf')
const { getProjectRoot } = require('./util')

const projectRoot = getProjectRoot()

module.exports = {
  mode: 'none',
  output: {
    path: path.resolve(projectRoot, conf.output),
    filename: 'js/[name].js',
    chunkFilename: 'chunk/[name].chunk.js',
    publicPath: './'
  },
  resolve: {
    mainFields: ['main']
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: [
        `${path.resolve(projectRoot, conf.output)}/*`,
        `!${path.resolve(projectRoot, conf.output)}/lib/*`
      ]
    }),
    new webpack.DefinePlugin({
      BASE_NAME: `'/taro-ui'`
    }),
    new FaviconWebpackPlugin({
      logo: path.resolve(projectRoot, 'assets/favicon.png'),
      prefix: 'favicons/'
    })
  ]
}
