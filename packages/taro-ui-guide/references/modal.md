# Modal 对话框

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtModal, AtModalHeader, AtModalContent, AtModalAction`

## 引入

```tsx
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/modal.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/modal/`
- 类型：`packages/taro-ui/types/modal.d.ts`
- 官方文档：`docs/docs/components/modal.md`

## 主要 Props

### `AtModalProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `title` | 是 | 元素的标题 |
| `isOpened` | 否 | 是否显示模态框 |
| `content` | 是 | 元素的内容 |
| `closeOnClickOverlay` | 是 | 点击浮层的时候时候自动关闭 |
| `cancelText` | 是 | 取消按钮的文本 |
| `confirmText` | 是 | 确认按钮的文本 |
| `onClose` | 是 | 触发关闭时的事件 |
| `onCancel` | 是 | 点击取消按钮触发的事件 |
| `onConfirm` | 是 | 点击确认按钮触发的事件 |

### `AtModalActionProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `isSimple` | 否 | — |


---
[← 组件索引](./README.md)
