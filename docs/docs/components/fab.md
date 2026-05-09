# Fab 浮动按钮

---

浮动操作按钮（FAB）代表着应用中最重要的操作，是为了使用户更便于操作。就像一个圆形的图标漂浮在界面上，它会在聚焦时改变颜色，在选中时改变海拔高度。按下时，它可能会包含更多相关的操作。

一个屏幕上建议只使用一个浮动操作按钮，它应该只代表最常见的操作。

> 浮动操作按钮应该被放置在距离屏幕边框至少 16px 的地方

## 使用指南

在 Taro 文件中引入组件


```js
import { AtFab } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/dist/style/components/fab.scss";
```
## 用法

浮动按钮中的图标元素，请自行加上类名 `"at-fab__icon"`

> 浮动按钮默认不会脱离文档流，请自行包含一个父元素并设置 `fixed` 定位


```html
<AtFab>
  <Text className='at-fab__icon at-icon at-icon-menu'></Text>
</AtFab>
```
## 点击事件


```html
<AtFab onClick={this.onButtonClick.bind(this)}>
  <Text className='at-fab__icon at-icon at-icon-menu'></Text>
</AtFab>
```
## Fab 参数

| 参数     | 说明         | 类型    | 可选值        | 默认值 |
|:---------|:-------------|:--------|:--------------|:-------|
| size     | 大小尺寸     | String  | `normal`、`small` | `normal` |

## Fab 事件

| 事件名称 | 说明                               | 返回参数     |
|:---------|:-----------------------------------|:-------------|
| onClick  | 点击标签时触发 | event 对象 |
