# Switch 开关

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtSwitch`

## 引入

```tsx
import { AtSwitch } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/switch.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/switch/`
- 类型：`packages/taro-ui/types/switch.d.ts`
- 官方文档：`docs/docs/components/switch.md`

## 主要 Props

### `AtSwitchProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `title` | 是 | 标签名 |
| `color` | 是 | 背景颜色 |
| `checked` | 是 | 是否显示开启 |
| `disabled` | 是 | 是否禁止点击 |
| `border` | 是 | 是否显示下划线边框 |
| `onChange` | 是 | 输入框值改变时触发的事件 |


## 注意

暂不支持 SCSS 变量覆盖主题

---
[← 组件索引](./README.md)
