# SwipeAction 滑动操作

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtSwipeAction`

## 引入

```tsx
import { AtSwipeAction } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/swipe-action.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/swipe-action/`
- 类型：`packages/taro-ui/types/swipe-action.d.ts`
- 官方文档：`docs/docs/components/swipe-action.md`

## 主要 Props

### `AtSwipeActionProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `isOpened` | 是 | 是否开启 |
| `disabled` | 是 | 是否禁止滑动 |
| `autoClose` | 是 | 点击选项时，是否自动关闭 |
| `options` | 是 | 展示的选项数组 |
| `onClick` | 是 | 点击触发事件 |
| `onOpened` | 是 | 完全打开时触发 |
| `onClosed` | 是 | 完全关闭时触发 |
| `maxDistance` | 是 | 滑块最大滑动距离，一般是按钮个数乘以按钮宽度 |
| `areaWidth` | 是 | SwipeAction 组件宽度 |

### `AtSwipeActionOptionsProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `componentId` | 否 | — |
| `options` | 否 | — |


---
[← 组件索引](./README.md)
