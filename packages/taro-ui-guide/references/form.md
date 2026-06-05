# Form 表单

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtForm`

## 引入

```tsx
import { AtForm } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/form.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/form/`
- 类型：`packages/taro-ui/types/form.d.ts`
- 官方文档：`docs/docs/components/form.md`

## 主要 Props

### `AtFormProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `reportSubmit` | 是 | 是否返回 formId 用于发送模板消息 |
| `onSubmit` | 是 | 携带 form 中的数据触发 submit 事件，由于小程序组件化的限制，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取 |
| `onReset` | 是 | 表单重置时会触发 reset 事件 |


---
[← 组件索引](./README.md)
