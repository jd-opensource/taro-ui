# Input 输入框

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtInput`

## 引入

```tsx
import { AtInput } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/input.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/input/`
- 类型：`packages/taro-ui/types/input.d.ts`
- 官方文档：`docs/docs/components/input.md`

## 主要 Props

### `AtInputProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `name` | 否 | 输入框的唯一标识，有传入点击 title 会聚焦输入框 |
| `title` | 是 | 输入框左侧标题，若传入为空，则不显示标题 |
| `type` | 是 | 输入框类型 |
| `error` | 是 | 是否出现错误 |
| `clear` | 是 | 是否显示清除按钮，需要传入 onChange 事件来改变 value |
| `border` | 是 | 是否显示下划线边框 |
| `disabled` | 是 | 是否禁止输入，禁止点击按钮 |
| `placeholder` | 是 | 占位符 |
| `placeholderStyle` | 是 | 指定 placeholder 的样式，只在小程序有效 |
| `placeholderClass` | 是 | 指定 placeholder 的样式类，只在小程序有效 |
| `editable` | 是 | 是否可编辑 |
| `adjustPosition` | 是 | 键盘弹起时，是否自动上推页面 |
| `autoFocus` | 是 | 是否自动聚焦 |
| `focus` | 是 | 是否聚焦 |
| `required` | 是 | 是否必填 |
| `maxLength` | 是 | 最大输入长度 |
| `onBlur` | 是 | 输入框失去焦点时触发的事件，v2.0.3 版本可以获取 event 参数 |
| `onFocus` | 是 | 输入框被选中时触发的事件，v2.0.3 版本可以获取 event 参数 |
| `onChange` | 是 | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填。 小程序中，如果想改变 value 的值，需要 return value 从而改变输入框的当前值, v2.0.3 版本可以获取 event 参数 |
| `onConfirm` | 是 | 点击完成按钮时触发，v2.0.3 版本可以获取 event 参数 |
| `onClick` | 是 | 当 editable 为 false 时，点击组件触发的事件，v2.3.3 版本可以获取 event 参数 |
| `onKeyboardHeightChange` | 是 | 键盘高度发生变化的时候触发此事件 |
| `event` | 是 | — |
| `onErrorClick` | 是 | 点击错误按钮触发的事件，v2.3.3 版本可以获取 event 参数 |


---
[← 组件索引](./README.md)
