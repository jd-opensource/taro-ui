const ora = require('ora')
const chalk = require('chalk')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const webpackBaseConf = require('./webpack.base.config')
const webpackProdConf = require('./webpack.prod.config')
const formatWebpackMessage = require('./format_webpack_message')

function printBuildError(err) {
  const message = err != null && err.message
  const stack = err != null && err.stack
  if (
    stack &&
    typeof message === 'string' &&
    message.indexOf('from UglifyJs') !== -1
  ) {
    try {
      const matched = /(.+)\[(.+):(.+),(.+)\]\[.+\]/.exec(stack)
      if (!matched) {
        throw new Error('Using errors for control flow is bad.')
      }
      const problemPath = matched[2]
      const line = matched[3]
      const column = matched[4]
      console.log(
        'Failed to minify the code from this file: \n\n',
        chalk.yellow(
          `\t${problemPath}:${line}${column !== '0' ? `:${column}` : ''}`
        ),
        '\n'
      )
    } catch (ignored) {
      console.log('Failed to minify the bundle.', err)
    }
  } else {
    console.log(`${message || err}\n`)
  }
  console.log()
}

const buildSpinner = ora('Starting build...').start()
const webpackConf = webpackMerge(webpackBaseConf, webpackProdConf)
const webpackCompiler = webpack(webpackConf)
webpackCompiler.run((err, stats) => {
  if (err) {
    return printBuildError(err)
  }

  const { errors, warnings } = formatWebpackMessage(stats.toJson({}, true))
  const isSuccess = !errors.length && !warnings.length
  if (isSuccess) {
    buildSpinner.succeed(chalk.green('Compile successfully!\n'))
    process.stdout.write(
      `${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      })}\n`
    )
    return
  }
  if (errors.length) {
    errors.splice(1)
    buildSpinner.fail(chalk.red('Compile failed!\n'))
    return printBuildError(new Error(errors.join('\n\n')))
  }
  if (warnings.length) {
    buildSpinner.warn(chalk.yellow('Compiled with warnings.\n'))
    console.log(warnings.join('\n\n'))
  }
})
