# InputNumber 数字输入

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtInputNumber`

## 引入

```tsx
import { AtInputNumber } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/input-number.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/input-number/`
- 类型：`packages/taro-ui/types/input-number.d.ts`
- 官方文档：`docs/docs/components/input-number.md`

## 主要 Props

### `AtInputNumberProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `type` | 否 | 输入框类型 |
| `value` | 是 | 输入框当前值 |
| `customStyle` | 是 | — |
| `min` | 是 | 最小值 |
| `max` | 是 | 最大值 |
| `step` | 是 | 每次点击改变的间隔大小 |
| `size` | 是 | 组件的大小 |
| `width` | 是 | input 宽度 |
| `disabled` | 是 | 是否禁止输入，禁止点击按钮 |
| `disabledInput` | 是 | 是否禁止输入，但不禁止点击按钮 |
| `onChange` | 否 | 输入框值改变时触发的事件 |
| `onBlur` | 是 | 输入框值失去焦点时触发的事件 |
| `onErrorInput` | 是 | 输入框尝试输入错误数组触发的事件 |


---
[← 组件索引](./README.md)
