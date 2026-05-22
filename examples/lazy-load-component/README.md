# 按需引入样式

## 方式 1
在页面样式或全局样式中 import 需要的组件样式

```scss
@import '~taro-ui/lib/style/components/button.scss';
```

## 方式 2
通过 babel 插件按需引入组件

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```

在.babelrc 或 babel.config.js 中添加配置：

```js
{
  "plugins": [
    [
      'import',
      {
        libraryName: 'taro-ui',
        customName: name => `taro-ui/lib/components/${name.slice(3)}`,
        customStyleName: name => `taro-ui/lib/style/components/${name.slice(3)}.scss`
      },
      'taro-ui'
    ]
  ]
}
```

接下来你直接在代码中引入组件而无需引入样式，插件会自动将代码转化为按需引入的形式。

```js
// 原始代码
import { AtButton } from 'taro-ui'

// 编译后代码
import AtButton from 'taro-ui/lib/components/button'
import 'taro-ui/lib/style/components/button.scss'
```

## 注意事项
在 taro3.5 之后的版本中，在开启 `prebundle` (默认开启)的情况下，会导致 taro-ui 所引用的 @taro/components 组件没有被打进最终的 bundle 中，导致页面表现异常。

为了解决上述问题，可以手动将 taro-ui 排除在 prebundle 列表之外。在 taro 项目的 `config/index.js` 中新增如下配置项：

```js
module.exports = {
  // ...
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      exclude: ['taro-ui']
    }
  },
}
```
