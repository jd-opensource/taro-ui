const ora = require('ora')
const fs = require('fs-extra')
const path = require('path')

const spinner = ora('Copy h5 website to docs...')

spinner.start()

// docs/.vitepress/dist/h5
const distRoot = path.resolve(__dirname, '../.vitepress/dist')
fs.emptyDirSync(path.resolve(distRoot, 'h5'))

function mergeDemoH5AndDist() {
  const demoH5Path = path.resolve(__dirname, '../taro-ui-demo/dist')
  if (!fs.existsSync(demoH5Path)) {
    console.log('Please run `npm run build:demo` first')
    spinner.stop()
    return
  }

  if (!fs.existsSync(path.resolve(demoH5Path, 'index.html'))) {
    console.log(
      'H5 demo index.html not found. Please run `pnpm --filter taro-ui-demo run build:h5` first'
    )
    spinner.stop()
    return
  }

  const distH5Path = path.resolve(distRoot, 'h5')

  fs.copy(demoH5Path, distH5Path)
    .then(() => {
      spinner.stop()
    })
    .catch(err => {
      console.log('build static error:', err)
    })
}

mergeDemoH5AndDist()
