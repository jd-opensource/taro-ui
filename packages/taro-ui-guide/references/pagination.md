# Pagination 分页

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtPagination`

## 引入

```tsx
import { AtPagination } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/pagination.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/pagination/`
- 类型：`packages/taro-ui/types/pagination.d.ts`
- 官方文档：`docs/docs/components/pagination.md`

## 主要 Props

### `AtPaginationProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `total` | 否 | 数据总量 |
| `current` | 是 | 当前页 |
| `pageSize` | 是 | 每页数据量 |
| `icon` | 是 | 是否以 icon 形式展示按钮 |
| `onPageChange` | 是 | 点击页码按钮时触发 |


---
[← 组件索引](./README.md)
