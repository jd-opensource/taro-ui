# Drawer 抽屉

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtDrawer`

## 引入

```tsx
import { AtDrawer } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/drawer.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/drawer/`
- 类型：`packages/taro-ui/types/drawer.d.ts`
- 官方文档：`docs/docs/components/drawer.md`

## 主要 Props

### `AtDrawerProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `show` | 否 | 展示或隐藏 |
| `mask` | 是 | 是否需要遮罩 |
| `width` | 是 | 抽屉宽度 |
| `right` | 是 | 是否从右侧滑出 |
| `items` | 是 | Array |
| `onItemClick` | 是 | 点击菜单时触发 |
| `onClose` | 是 | 动画结束组件关闭的时候触发 |


---
[← 组件索引](./README.md)
