# ActionSheet 动作面板

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtActionSheet, AtActionSheetItem`

## 引入

```tsx
import { AtActionSheet, AtActionSheetItem } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/action-sheet.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/action-sheet/`
- 类型：`packages/taro-ui/types/action-sheet.d.ts`
- 官方文档：`docs/docs/components/action-sheet.md`

## 主要 Props

### `AtActionSheetProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `isOpened` | 否 | 是否展示元素 |
| `title` | 是 | 元素的标题 |
| `cancelText` | 是 | 取消按钮的内容 |
| `onClose` | 是 | 元素被关闭触发的事件 |
| `onCancel` | 是 | 点击了底部取消按钮触发的事件 |


---
[← 组件索引](./README.md)
