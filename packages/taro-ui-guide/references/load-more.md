# LoadMore 加载更多

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtLoadMore`

## 引入

```tsx
import { AtLoadMore } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/load-more.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/load-more/`
- 类型：`packages/taro-ui/types/load-more.d.ts`
- 官方文档：`docs/docs/components/load-more.md`

## 主要 Props

### `AtLoadMoreProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `noMoreTextStyle` | 是 | noMore 状态显示文案样式 |
| `moreBtnStyle` | 是 | more 状态按钮样式 |
| `status` | 是 | 组件状态，more 状态显示查看更多按钮，loading 状态显示加载状态，noMore 显示无更多数据 |
| `loadingText` | 是 | loading 状态显示文案 |
| `moreText` | 是 | more 状态显示文案 |
| `noMoreText` | 是 | noMore 状态显示文案 |
| `onClick` | 是 | more 状态点击触发的事件 |


## 注意

文案可通过 ConfigProvider.locale.LoadMore 覆盖

---
[← 组件索引](./README.md)
