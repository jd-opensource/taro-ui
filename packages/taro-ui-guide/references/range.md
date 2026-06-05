# Range 范围选择

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtRange`

## 引入

```tsx
import { AtRange } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/range.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/range/`
- 类型：`packages/taro-ui/types/range.d.ts`
- 官方文档：`docs/docs/components/range.md`

## 主要 Props

### `AtRangeProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `sliderStyle` | 是 | 滑块样式 |
| `railStyle` | 是 | 未选中部分滑动条的样式 |
| `trackStyle` | 是 | 选中部分滑动条的样式 |
| `value` | 是 | 当前取值 |
| `min` | 是 | 最小值 |
| `max` | 是 | 最大值 |
| `blockSize` | 是 | 滑块大小 |
| `disabled` | 是 | 是否禁用 |
| `onChange` | 是 | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。 |
| `onAfterChange` | 是 | 与 onTouchEnd 触发时机一致，把当前值作为参数传入。 |


---
[← 组件索引](./README.md)
