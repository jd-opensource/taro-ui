const { mergeConfig } = require('metro-config')
const { getMetroConfig } = require('@tarojs/rn-supporter')
const fs = require('fs')
const path = require('path')
const escape = require('escape-string-regexp')
const exclusionList = require('metro-config/src/defaults/exclusionList')

const taroUI = path.resolve(__dirname, '../taro-ui')
const pak = JSON.parse(
  fs.readFileSync(path.join(taroUI, 'package.json'), 'utf8')
)

const modules = [
  '@babel/runtime',
  'react-native',
  '@tarojs/components-rn',
  '@tarojs/taro-rn',
  '@tarojs/runtime-rn',
  'react-native-svg',
  'react-native-root-siblings',
  ...Object.keys({
    ...pak.dependencies,
    ...pak.peerDependencies
  })
]

module.exports = mergeConfig(
  {
    // maxWorkers: 1,
    // resetCache: true,
    watchFolders: [taroUI, __dirname],
    resolver: {
      extraNodeModules: modules.reduce((acc, name) => {
        acc[name] = path.join(__dirname, 'node_modules', name)
        return acc
      }, {}),
      blockList: exclusionList([
        new RegExp(`^${escape(path.join(taroUI, 'node_modules'))}\\/.*$`)
      ])
    }
  },
  getMetroConfig()
)
