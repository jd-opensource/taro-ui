// const path = require('path')

const config = {
  projectName: 'taro-ui-demo',
  date: '2020-4-5',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  sass: {
    // resource: path.resolve(
    //   __dirname,
    //   '..',
    //   'node_modules/taro-ui/rn/style/index.scss',
    // ),
  },
  alias: {
    // TODO: 暂时使用这个，后面更新 taro-rn 版本修复，修复后配置 taro-ui/dist 转 taro-ui/rn
    // '~': `${path.resolve(__dirname, '..', 'node_modules')}/`,

    // 主要是样式文件 alias，rn 不读 dist 里面的样式
    '~taro-ui/dist': `~taro-ui/rn`,
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  rn: {
    resolve: {
      include: ['../taro-ui'],
    },
    enableSvgTransform: true,
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
