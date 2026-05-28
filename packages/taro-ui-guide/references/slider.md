# Slider 滑块

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtSlider`

## 引入

```tsx
import { AtSlider } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/slider.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/slider/`
- 类型：`packages/taro-ui/types/slider.d.ts`
- 官方文档：`docs/docs/components/slider.md`

## 主要 Props

### `AtSliderProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `min` | 是 | 最小值 |
| `max` | 是 | 最大值 |
| `step` | 是 | 步长，取值必须大于 0，并且可被 max - min 整除 |
| `value` | 是 | 当前取值 |
| `disabled` | 是 | 是否禁用 |
| `activeColor` | 是 | 已选择的颜色 |
| `backgroundColor` | 是 | 背景条的颜色 |
| `blockSize` | 是 | 滑块的大小，取值范围为 12-28 |
| `blockColor` | 是 | 滑块的颜色 |
| `showValue` | 是 | 是否显示当前的 Value |
| `onChange` | 是 | 完成一次拖动后触发的事件 |
| `onChanging` | 是 | 拖动过程中触发的事件 |


## 注意

暂不支持 SCSS 变量覆盖主题

---
[← 组件索引](./README.md)
