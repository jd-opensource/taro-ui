# SegmentedControl 分段器

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtSegmentedControl`

## 引入

```tsx
import { AtSegmentedControl } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/segmented-control.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/segmented-control/`
- 类型：`packages/taro-ui/types/segmented-control.d.ts`
- 官方文档：`docs/docs/components/segmented-control.md`

## 主要 Props

### `AtSegmentedControlProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `current` | 否 | 当前选中的 tab 索引值，从 0 计数 |
| `color` | 是 | 背景颜色与选中标签字体的颜色 |
| `selectedColor` | 是 | 选中的标签背景色与边框颜色 |
| `fontSize` | 是 | 字体大小，单位 h5 为 rem，小程序为 rem |
| `disabled` | 是 | 是否禁止点击 |
| `values` | 否 | 选项数组，值是字符串，eg: ['标签页1', '标签页2'] |
| `onClick` | 否 | 点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化，onClick 函数必填 |


---
[← 组件索引](./README.md)
