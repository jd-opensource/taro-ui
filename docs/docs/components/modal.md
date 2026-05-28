# Modal 模态框

---

提供一个简单的 `Modal` 框，也可以作为 `Dialog (对话框)` 之类的组件使用，在页面上的层级为 `1000`

## 使用指南

在 Taro 文件中引入组件

```js
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from 'taro-ui'
```

> 由于微信小程序的限制，在 `Modal` 组件中使用一些客户端创建的原生组件（如：`textarea`、`input`等）时，即使 `Modal` 组件处于隐藏状态，原生组件依然会在页面上显示，具体参见微信小程序文档：[原生组件](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)。

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/modal.scss';
```

## 一般用法

```html
<AtModal isOpened>
  <AtModalHeader>标题</AtModalHeader>
  <AtModalContent>
    这里是正文内容，欢迎加入京东凹凸实验室
    这里是正文内容，欢迎加入京东凹凸实验室
    这里是正文内容，欢迎加入京东凹凸实验室
  </AtModalContent>
  <AtModalAction> <button>取消</button> <button>确定</button> </AtModalAction>
</AtModal>
```

## 简化使用

```html
<AtModal
  isOpened
  title="标题"
  cancelText="取消"
  confirmText="确认"
  onClose="{"
  this.handleClose
  }
  onCancel="{"
  this.handleCancel
  }
  onConfirm="{"
  this.handleConfirm
  }
  content="欢迎加入京东凹凸实验室\n欢迎加入京东凹凸实验室"
/>
```

## AtModal 参数

| 参数                | 说明                       | 类型    | 可选值 | 默认值  |
| ------------------- | -------------------------- | ------- | ------ | ------- |
| title               | 元素的标题                 | String  | -      | -       |
| content             | 元素的内容                 | String  | -      | -       |
| cancelText          | 取消按钮的文本             | String  | -      | -       |
| closeOnClickOverlay | 点击浮层的时候时候自动关闭 | Boolean | -      | `true`  |
| confirmText         | 确认按钮的文本             | String  | -      | -       |
| isOpened            | 是否显示模态框             | Boolean | -      | `false` |

## AtModal 事件

| 事件名称  | 说明                   | 返回参数 |
| --------- | ---------------------- | -------- |
| onClose   | 触发关闭时的事件       | -        |
| onCancel  | 点击取消按钮触发的事件 | -        |
| onConfirm | 点击确认按钮触发的事件 | -        |
