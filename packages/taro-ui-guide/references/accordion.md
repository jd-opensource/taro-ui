# Accordion 手风琴

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtAccordion`

## 引入

```tsx
import { AtAccordion } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/accordion.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/accordion/`
- 类型：`packages/taro-ui/types/accordion.d.ts`
- 官方文档：`docs/docs/components/accordion.md`

## 主要 Props

### `AtAccordionProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `open` | 是 | 是否默认开启 |
| `title` | 是 | 标题 |
| `icon` | 是 | 图标，仅支持 AtIcon 支持的类型， object 属性有 value color size prefixClass |
| `isAnimation` | 是 | 是否开启动画 |
| `hasBorder` | 是 | 是否有头部下划线 |
| `note` | 是 | 描述信息 |
| `onClick` | 是 | 点击头部触发事件 |


---
[← 组件索引](./README.md)
