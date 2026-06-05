# Radio 单选

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtRadio`

## 引入

```tsx
import { AtRadio } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/radio.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/radio/`
- 类型：`packages/taro-ui/types/radio.d.ts`
- 官方文档：`docs/docs/components/radio.md`

## 主要 Props

### `AtRadioProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `value` | 否 | 输入框当前值，用户需要通过 onClick 事件来更新 value 值，必填 |
| `options` | 否 | 选项列表 |
| `border` | 是 | 是否显示下边框 |
| `onClick` | 否 | 点击选项触发事件,开发者需要通过此事件来更新 value，onClick 函数必填 |


---
[← 组件索引](./README.md)
