# Rate 评分

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtRate`

## 引入

```tsx
import { AtRate } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/rate.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/rate/`
- 类型：`packages/taro-ui/types/rate.d.ts`
- 官方文档：`docs/docs/components/rate.md`

## 主要 Props

### `AtRateProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `size` | 是 | 评分星星大小 |
| `value` | 是 | 当前评分,开发者需要通过 onChange 事件来更新 value 值，必填 |
| `max` | 是 | 最大评分 |
| `margin` | 是 | 星星间隔,单位根据环境自动转为 rpx 或 rem |
| `onChange` | 是 | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读 |


---
[← 组件索引](./README.md)
