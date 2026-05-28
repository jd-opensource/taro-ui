# ImagePicker 图片选择

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtImagePicker`

## 引入

```tsx
import { AtImagePicker } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/image-picker.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/image-picker/`
- 类型：`packages/taro-ui/types/image-picker.d.ts`
- 官方文档：`docs/docs/components/image-picker.md`

## 主要 Props

### `AtImagePickerProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `files` | 否 | 图片文件数组, 元素为对象, 包含属性 url（必选) |
| `mode` | 是 | 图片预览模式，详见[微信开发者文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html) |
| `showAddBtn` | 是 | 是否显示添加图片按钮 |
| `multiple` | 是 | 是否支持多选 |
| `length` | 是 | 单行的图片数量，不能为 0 或负数 |
| `count` | 是 | 最多可以选择的图片张数 |
| `sizeType` | 是 | 所选的图片的尺寸 |
| `sourceType` | 是 | 选择图片的来源 |
| `onChange` | 否 | files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引 |
| `files` | 否 | — |
| `operationType` | 否 | — |
| `index` | 是 | — |
| `onImageClick` | 是 | 点击图片触发的回调 |
| `onFail` | 是 | 选择失败触发的回调 |


---
[← 组件索引](./README.md)
