# NavBar 导航栏

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtNavBar`

## 引入

```tsx
import { AtNavBar } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/nav-bar.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/nav-bar/`
- 类型：`packages/taro-ui/types/nav-bar.d.ts`
- 官方文档：`docs/docs/components/navbar.md`

## 主要 Props

### `AtNavBarProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `title` | 是 | 标题文字 |
| `fixed` | 是 | 是否固定顶部 |
| `border` | 是 | 是否显示下划线 |
| `color` | 是 | 链接文字跟图标颜色，不包括标题 |
| `leftIconType` | 是 | 左边图标类型，图标类型请看 AtIcon 文档 |
| `leftText` | 是 | 左边文字 |
| `rightFirstIconType` | 是 | 从右到左，第一个图标类型，图标类型请看 AtIcon 文档 |
| `rightSecondIconType` | 是 | 从右到左第二个图标类型，图标类型请看 AtIcon 文档 |
| `onClickLeftIcon` | 是 | 左边第一个图标类型点击事件 |
| `onClickRgIconSt` | 是 | 从右到左第一个图标类型点击事件 |
| `onClickRgIconNd` | 是 | 从右到左第二个图标类型点击事件 |
| `onClickTitle` | 是 | 标题点击事件 |


---
[← 组件索引](./README.md)
