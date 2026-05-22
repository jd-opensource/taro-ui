# 快速上手

---

## 使用前准备

在使用之前，推荐学习 [`Taro`](https://docs.taro.zone/docs/) 和 `ES2015`，并正确配置 `Node.js` v8.x 或以上版本

## 安装 Taro

安装 `Taro` 开发工具 `@tarojs/cli`

使用 `npm` 或者 `yarn` 全局安装，或者直接使用 [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

```bash
$ npm install -g @tarojs/cli
$ yarn global add @tarojs/cli
```

## 初始化 Taro 项目

使用命令创建模板项目


```bash
$ taro init myApp
```

## 安装 Taro UI

```bash
$ cd myApp

# 当 Taro 版本 < 3 时，使用 2.x 版本
$ npm install taro-ui@2.3.4

# 当 Taro 版本 ≥ 3 时，使用 3.x 版本
$ npm install taro-ui@latest
```

**P.S.因为要支持自定义主题功能，需要将样式从组件中抽离出来，在微信小程序中依赖 globalClass 功能，所以需要微信基础库版本在 v2.2.3 以上。**

#### 配置需要额外编译的源码模块

<p style="color: #f00;">由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：</p>

```js
h5: {
  esnextModules: ['taro-ui']
}
```

## 使用 Taro UI

### 常规引入样式
- **方式 1：** 在入口文件中引入 `taro-ui` 所有的样式
  
  ```js
  import 'taro-ui/lib/style/index.scss' 
  ```

- **方式 2：** 在 `app.scss` 样式文件中 `import` 组件样式并按照文档说明使用
  
  ```scss
  @import '~taro-ui/lib/style/index.scss'; 
  ```

### 按需引入样式

- **方式 1：**  在页面样式或全局样式中 import 需要的组件样式

  ```scss
  @import '~taro-ui/lib/style/components/button.scss';
  ```

- **方式 2：** 通过 babel 插件按需引入组件

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
::: caution

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

> 具体的组件样式文件请查看 [组件样式列表](https://github.com/NervJS/taro-ui/tree/dev/src/style/components)


## 示例

在 `/myApp/src/pages/index/index.tsx` 文件添加以下代码



```jsx
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.scss'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index'>
        <AtButton type='primary'>按钮文案</AtButton>
      </View>
    )
  }
}
```

在 `/myApp/src/app.scss` 文件中添加如下代码



```scss
@import '~taro-ui/lib/style/index.scss'; // 引入组件样式，仅需引入一次即可
```

## 按需引入

如果你只希望引入部分组件，比如 Button，那么可以只 `@import` 需要的样式文件



```scss
@import '~taro-ui/lib/style/components/button.scss';
```

## 编译并预览

进入项目目录开始开发，可以选择小程序预览模式，或者 h5 预览模式，若使用小程序预览模式，则需要自行下载并打开对应的小程序开发者工具，并选择预览项目根目录。

**微信小程序编译预览模式**



```bash
# npm script
$ npm run dev:weapp
# 仅限全局安装
$ taro build --type weapp --watch
# npx用户也可以使用
$ npx taro build --type weapp --watch
```

**支付宝小程序编译预览模式**



```bash
# npm script
$ npm run dev:alipay
# 仅限全局安装
$ taro build --type alipay --watch
# npx 用户也可以使用
$ npx taro build --type alipay --watch
```

**百度小程序编译预览模式**



```bash
# npm script
$ npm run dev:swan
# 仅限全局安装
$ taro build --type swan --watch
# npx 用户也可以使用
$ npx taro build --type swan --watch
```

**H5 编译预览模式**



```bash
# npm script
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch
# npx 用户也可以使用
$ npx taro build --type h5 --watch
```

