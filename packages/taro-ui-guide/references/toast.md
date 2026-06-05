# Toast 轻提示

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtToast`

## 引入

```tsx
import { AtToast } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/toast.scss';
@import 'taro-ui/dist/style/components/icon.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/toast/`
- 类型：`packages/taro-ui/types/toast.d.ts`
- 官方文档：`docs/docs/components/toast.md`

## 主要 Props

### `AtToastProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `isOpened` | 否 | 是否展示元素 |
| `text` | 是 | 元素的内容 |
| `icon` | 是 | icon 的类型 |
| `image` | 是 | 元素展示的图片 |
| `status` | 是 | 元素的状态 |
| `duration` | 是 | 元素持续的事件（设置为 0 将不会自动消失） |
| `hasMask` | 是 | 是否存在底部遮罩层(无法点击底部的内容区) |
| `onClick` | 是 | 元素被点击之后触发的事件 |
| `onClose` | 是 | 元素被关闭之后触发的事件 |


## 注意

声明式：isOpened、text、status、onClose

---
[← 组件索引](./README.md)
