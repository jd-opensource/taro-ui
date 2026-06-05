# Textarea 多行输入

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtTextarea`

## 引入

```tsx
import { AtTextarea } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/textarea.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/textarea/`
- 类型：`packages/taro-ui/types/textarea.d.ts`
- 官方文档：`docs/docs/components/textarea.md`

## 主要 Props

### `AtTextareaProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `value` | 是 | 输入框当前值，用户需要通过 onChange 事件的 event.detail.value 来更新 value 值 |
| `maxLength` | 是 | 最大长度 |
| `placeholder` | 是 | 占位符 |
| `placeholderClass` | 是 | 指定 placeholder 的样式类，只在小程序有效 |
| `placeholderStyle` | 是 | 指定 placeholder 的样式，只在小程序有效 |
| `disabled` | 是 | 是否禁用 |
| `autoFocus` | 是 | 是否自动聚焦 |
| `focus` | 是 | 获取焦点 |
| `showConfirmBar` | 是 | 是否显示键盘上方带有“完成”按钮那一栏 |
| `selectionStart` | 是 | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用 |
| `selectionEnd` | 是 | 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用 |
| `count` | 是 | 是否显示字数 |
| `fixed` | 是 | 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true |
| `textOverflowForbidden` | 是 | 文字超出最大长度时是否禁止输入，若否，则还可以在 maxLength 的基础上输入 500 字符，并右下角红字提示 |
| `height` | 是 | 输入框高度 |
| `cursorSpacing` | 是 | 指定光标与键盘的距离，单位 px。 取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离， 只在小程序端有效，目前安卓端微信官方有 bug，该特性失效 |
| `onChange` | 否 | 输入框值改变时触发的事件， 开发者需要通过 onChange 事件来更新 value 值变化， onChange 函数必填 |
| `onFocus` | 是 | 输入框获得焦点时触发，height 为键盘高度，在基础库 1.9.90 起支持 |
| `onBlur` | 是 | 输入框失去焦点时触发 |
| `onConfirm` | 是 | 点击完成时，触发 confirm 事件 |
| `onLinechange` | 是 | 输入框行数变化时调用 |


---
[← 组件索引](./README.md)
