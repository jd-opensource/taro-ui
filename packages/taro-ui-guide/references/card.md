# Card 卡片

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtCard`

## 引入

```tsx
import { AtCard } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/card.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/card/`
- 类型：`packages/taro-ui/types/card.d.ts`
- 官方文档：`docs/docs/components/card.md`

## 主要 Props

### `AtCardProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `note` | 是 | 元素的辅助信息 |
| `isFull` | 是 | 是否通栏 |
| `thumb` | 是 | 元素的缩略图 |
| `title` | 是 | 元素的标题 |
| `extra` | 是 | 元素的额外信息 |
| `extraStyle` | 是 | 元素的额外信息自定义样式 |
| `icon` | 是 | 图标，仅支持 AtIcon 支持的类型， object 属性有 value color size prefixClass |
| `renderIcon` | 是 | 元素自定义图标 |
| `onClick` | 是 | 元素被点击触发的事件 |


---
[← 组件索引](./README.md)
