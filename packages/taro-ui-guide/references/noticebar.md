# Noticebar 通告栏

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtNoticebar`

## 引入

```tsx
import { AtNoticebar } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/noticebar.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/noticebar/`
- 类型：`packages/taro-ui/types/noticebar.d.ts`
- 官方文档：`docs/docs/components/noticebar.md`

## 主要 Props

### `AtNoticeBarProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `close` | 是 | 是否需要关闭按钮 |
| `single` | 是 | 内容是否单行 |
| `marquee` | 是 | 内容是否滚动（内容只能单行） |
| `speed` | 是 | 内容滚动速度 （默认速度100px/秒） |
| `moreText` | 是 | “查看更多”链接文本 |
| `showMore` | 是 | “查看更多”是否显示（内容只能单行） |
| `icon` | 是 | 内容前的 Icon 图标 |
| `onClose` | 是 | 关闭时触发 |
| `onGotoMore` | 是 | 点击”查看更多“时触发 |


---
[← 组件索引](./README.md)
