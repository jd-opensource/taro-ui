const { mergeConfig } = require('metro-config')
const { getMetroConfig } = require('@tarojs/rn-supporter')
const fs = require('fs')
const path = require('path')
const escape = require('escape-string-regexp')
const exclusionList = require('metro-config/src/defaults/exclusionList')

const taroUI = path.resolve(__dirname, '../../packages/taro-ui')
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

function resolveModulePath(name) {
  try {
    const pkgJson = require.resolve(path.join(name, 'package.json'))
    return path.dirname(pkgJson)
  } catch {
    return null
  }
}

const extraNodeModules = modules.reduce((acc, name) => {
  const resolved = resolveModulePath(name)
  if (resolved) {
    acc[name] = resolved
  }
  return acc
}, {})

// Collect unique watch folders from resolved modules (for pnpm virtual store)
const watchFoldersSet = new Set([taroUI, __dirname])
Object.values(extraNodeModules).forEach(p => {
  // Add the package dir and its parent node_modules so Metro sees siblings
  watchFoldersSet.add(p)
  const parentNodeModules = path.resolve(p, '../..')
  if (fs.existsSync(parentNodeModules)) {
    watchFoldersSet.add(parentNodeModules)
  }
})

module.exports = mergeConfig(
  {
    // Metro v0.73 worker threads hang on Node 20
    maxWorkers: 1,
    // Empty transformer required for Metro v0.73 + Node 20 compat
    transformer: {},
    watchFolders: Array.from(watchFoldersSet),
    resolver: {
      extraNodeModules,
      blockList: exclusionList([
        new RegExp(`^${escape(path.join(taroUI, 'node_modules'))}\\/.*$`)
      ])
    }
  },
  getMetroConfig()
)
