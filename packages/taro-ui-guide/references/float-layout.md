# FloatLayout 浮层

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtFloatLayout`

## 引入

```tsx
import { AtFloatLayout } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/float-layout.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/float-layout/`
- 类型：`packages/taro-ui/types/float-layout.d.ts`
- 官方文档：`docs/docs/components/float-layout.md`

## 主要 Props

### `AtFloatLayoutProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `isOpened` | 否 | 控制是否出现在页面上 |
| `title` | 是 | 元素的标题 |
| `scrollY` | 是 | 是否垂直滚动 |
| `scrollX` | 是 | 是否水平滚动 |
| `scrollTop` | 是 | 设置竖向滚动条位置 |
| `scrollLeft` | 是 | 设置横向滚动条位置 |
| `upperThreshold` | 是 | 距顶部/左边多远时，触发 scrolltolower 事件 |
| `lowerThreshold` | 是 | 距底部/右边多远时，触发 scrolltolower 事件 |
| `scrollWithAnimation` | 是 | 在设置滚动条位置时使用动画过渡 |
| `onClose` | 是 | 元素被关闭时候触发的事件 |
| `onScroll` | 是 | 滚动时触发的事件 |
| `onScrollToUpper` | 是 | 滚动到顶部/左边，会触发 onScrollToUpper 事件 |
| `onScrollToLower` | 是 | 滚动到底部/右边，会触发 onScrollToLower 事件 |


---
[← 组件索引](./README.md)
