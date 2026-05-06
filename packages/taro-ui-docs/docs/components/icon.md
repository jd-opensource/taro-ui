<script setup>
import IconList from '../../.vitepress/theme/components/IconList.vue'
</script>

# Icon 图标

---

用于展示 ICON。该组件的 ICON 图形基于 Webfont，因此可任意放大、改变颜色。

> **P.S.不推荐使用此组件，该组件是支持自定义主题功能前的产物**

## 使用指南

在 Taro 文件中引入组件


```js
import { AtIcon } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/dist/style/components/icon.scss";
```
**推荐使用新的引入方式，采用传统的类名图标方式即可，例如：**

```js
<View className='at-icon at-icon-settings'></View>
```

## 一般用法



```html
<AtIcon value='clock' size='30' color='#F00'></AtIcon>
```

## 使用第三方字体图标库

可自行下载 [Ionicons](https://ionicons.com/) 或 [Font Awesome](http://fontawesome.dashgame.com/) 等字体图标库，并按照以下步骤自行扩展字体图标库。（拓展字体图标库，并不影响原有图标的使用）

### 步骤一：配置 postcss 小程序端样式引用本地资源内联



```js
/* config/dev.js */
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  // 小程序端专用配置
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 10240 // 文件大小限制
          }
        }
      }
    }
  },
  h5: {}
}

/* config/prod.js */
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {},
  // 小程序端专用配置
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        },
        // 小程序端样式引用本地资源内联配置
        url: {
          enable: true,
          config: {
            limit: 10240 // 文件大小限制
          }
        }
      }
    }
  },
  h5: {}
}
```

### 步骤二：编写字体图标库 css (以下代码为 demo，请自行参考第三方库按照下面方式引入)



```css
/* icon.scss */
@font-face {
  font-family: 'FontAwesome';
  /* 自行安装第三方字体图标库 */
  src: url('./assets/fonts/fontawesome-webfont.eot?v=4.7.0');
  src: url('./assets/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'), url('./assets/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'), url('./assets/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype');
  font-weight: normal;
  font-style: normal;
}

/* 根据第三方字体图标库编写 */
/* 举例：fa 就是 prefixClass 的值，下面的的图标 css class 命名都要用 fa- 开头  */
.fa {
  display: inline-block;
  /* 以下的 font 与上面 @font-face 的 font-family 要一致*/
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.fa-clock:before {
  content: "\f00c";
}
```

### 步骤三：在 app.js 中全局引入 icon.scss



```js
/* app.js */
import './icon.scss'
```

### 步骤四：更改微信基础库版本

在开发者工具 `设置-项目设置-调试基础库` 设置版本 `2.2.3` 以上


### 步骤五：使用 `AtIcon`



```js
<AtIcon prefixClass='fa' value='clock' size='30' color='#F00'></AtIcon>
```

## Icon 参数

| 参数  | 说明     | 类型   | 可选值                | 默认值 |
|:------|:---------|:-------|:----------------------|:-------|
| prefixClass | className 前缀，用于第三方字体图标库，比如想使用'fa fa-clock' 的图标，则 传入`prefixClass='fa' value='clock'` | String | - | 'at-icon' |
| value | 图标图案 | String | 参考下表 | - |
| size  | 图标大小 | String / Number | 大于10的整数 | 24 |
| color | 图标颜色 | String | 可被CSS支持的颜色单位 | - |

## 图标示例

### 主要

<div>
  <IconList type='main'></IconList>
</div> 

### 文件

<div>
  <IconList type='file'></IconList>
</div>

### 文本

<div>
  <IconList type='text'></IconList>
</div>

### 箭头

<div>
  <IconList type='arrow'></IconList>
</div>

### 媒体控制

<div>
  <IconList type='media'></IconList>
</div>

### 多媒体

<div>
  <IconList type='photo'></IconList>
</div>

### Logo

<div>
  <IconList type='logo'></IconList>
</div>
