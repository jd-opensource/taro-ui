# Message 消息通知

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtMessage`

## 引入

```tsx
import { AtMessage } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/message.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/message/`
- 类型：`packages/taro-ui/types/message.d.ts`
- 官方文档：`docs/docs/components/message.md`

## 主要 Props

### `Taro.atMessage` Options

| Prop | 可选 | 说明 |
|------|------|------|
| `message` | 否 | 文本消息内容 |
| `type` | 是 | 消息类型 |
| `duration` | 是 | 消息持续时间,单位 ms |


## 注意

页面挂载 <AtMessage /> 后使用 Taro.atMessage({ message, type, duration })

---
[← 组件索引](./README.md)
