# Divider 分隔符

---

分割内容提示符

## 使用指南

在 Taro 文件中引入组件

```js
import { AtDivider } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/divider.scss';
@import '~taro-ui/dist/style/components/icon.scss';
```

## 一般用法

```html
<AtDivider content="分割线" />
```

## 自定义颜色

```html
<AtDivider content="没有更多了" fontColor="#ed3f14" lineColor="#ed3f14" />
<AtDivider content="没有更多了" fontColor="#ff9900" lineColor="#ff9900" />
<AtDivider content="没有更多了" fontColor="#2d8cf0" lineColor="#2d8cf0" />
```

## 自定义内容

说明：只有当 content 为空时，才能嵌套子组件

```html
/* import { AtDivider,AtIcon } from 'taro-ui' */
<AtDivider>
  <AtIcon value="check-circle"></AtIcon>
</AtDivider>
```

## 参数

| 参数      | 说明                         | 类型             | 可选值 | 默认值  |
| --------- | ---------------------------- | ---------------- | ------ | ------- |
| content   | 分隔符文字                   | String           | -      | -       |
| height    | 分隔符高度，会自动转 rem,rpx | String or Number | -      | 112     |
| fontColor | 文字颜色                     | String           | -      | #6190E8 |
| fontSize  | 文字大小，会自动转 rem,rpx   | String or Number | -      | 32      |
| lineColor | 分割线颜色                   | String           | -      | #CCC    |
