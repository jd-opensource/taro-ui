# TabBar 标签栏

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtTabBar`

## 引入

```tsx
import { AtTabBar } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/tab-bar.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/tab-bar/`
- 类型：`packages/taro-ui/types/tab-bar.d.ts`
- 官方文档：`docs/docs/components/tabbar.md`

## 主要 Props

### `AtTabBarProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `fixed` | 是 | 是否固定底部 |
| `backgroundColor` | 是 | 背景颜色 |
| `current` | 否 | 当前选中的标签索引值，从 0 计数 |
| `iconSize` | 是 | 图标大小 |
| `fontSize` | 是 | 字体大小 |
| `color` | 是 | 未选中标签字体与图标颜色 |
| `selectedColor` | 是 | 选中标签字体与图标颜色 |
| `tabList` | 否 | tab 列表 |
| `onClick` | 否 | 点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化，onClick 函数必填 |


---
[← 组件索引](./README.md)
