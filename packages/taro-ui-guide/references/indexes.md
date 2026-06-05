# Indexes 索引选择

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtIndexes`

## 引入

```tsx
import { AtIndexes } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/indexes.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/indexes/`
- 类型：`packages/taro-ui/types/indexes.d.ts`
- 官方文档：`docs/docs/components/indexes.md`

## 主要 Props

### `AtIndexesProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `animation` | 是 | 是否开启跳转过渡动画 |
| `topKey` | 是 | 右侧导航第一个名称 |
| `isVibrate` | 是 | 是否切换 key 的震动 **注意：** 只在微信小程序有效 |
| `isShowToast` | 是 | 是否用弹框显示当前 key |
| `list` | 否 | 列表 |
| `onClick` | 是 | 点击列表项触发事件 |
| `onScrollIntoView` | 是 | 获取跳转事件跳转到指定 key |


---
[← 组件索引](./README.md)
