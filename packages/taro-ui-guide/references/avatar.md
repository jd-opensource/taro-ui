# Avatar 头像

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtAvatar`

## 引入

```tsx
import { AtAvatar } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/avatar.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/avatar/`
- 类型：`packages/taro-ui/types/avatar.d.ts`
- 官方文档：`docs/docs/components/avatar.md`

## 主要 Props

### `AtAvatarProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `size` | 是 | 头像大小 |
| `circle` | 是 | 头像是否圆形 |
| `text` | 是 | 以文字形式展示头像 |
| `image` | 是 | 头像图片地址 |
| `openData` | 是 | 参考微信[开放数据](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html) **注意：** openData 仅支持 type 为 userAvatarUrl |


---
[← 组件索引](./README.md)
