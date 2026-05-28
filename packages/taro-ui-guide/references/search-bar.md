# SearchBar 搜索栏

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtSearchBar`

## 引入

```tsx
import { AtSearchBar } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/search-bar.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/search-bar/`
- 类型：`packages/taro-ui/types/search-bar.d.ts`
- 官方文档：`docs/docs/components/search-bar.md`

## 主要 Props

### `AtSearchBarProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `value` | 否 | 输入框当前值 |
| `placeholder` | 是 | 输入框占位符 |
| `maxLength` | 是 | 最大输入长度 |
| `fixed` | 是 | 是否固定顶部 |
| `focus` | 是 | 是否聚焦 |
| `disabled` | 是 | 是否禁止输入 |
| `showActionButton` | 是 | 是否一直显示右侧按钮 |
| `actionName` | 是 | 右侧按钮文案 |
| `inputType` | 是 | 输入框输入类型 |
| `enableNative` | 是 | — |
| `onChange` | 否 | 输入框值改变时触发的事件 |
| `onFocus` | 是 | 输入框聚焦时触发 |
| `onBlur` | 是 | 输入框值失去焦点时触发的事件 |
| `onClear` | 是 | 点击清除按钮时触发事件 |
| `onConfirm` | 是 | 点击完成按钮时触发 |
| `onActionClick` | 是 | 右侧按钮点击触发事件 |


---
[← 组件索引](./README.md)
