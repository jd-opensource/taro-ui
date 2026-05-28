# Steps 步骤条

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtSteps`

## 引入

```tsx
import { AtSteps } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/steps.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/steps/`
- 类型：`packages/taro-ui/types/steps.d.ts`
- 官方文档：`docs/docs/components/steps.md`

## 主要 Props

### `AtStepsProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `current` | 否 | 当前步骤索引值。 **注意：** 必填，开发者需要通过 onChange 事件来更新 current 值。 |
| `items` | 是 | 步骤条数据列表 |
| `onChange` | 否 | 点击触发事件。 **注意：** 开发者需要通过 onChange 事件来更新 current，onChange 函数必填 |


---
[← 组件索引](./README.md)
