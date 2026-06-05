# Countdown 倒计时

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtCountdown`

## 引入

```tsx
import { AtCountdown } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/countdown.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/countdown/`
- 类型：`packages/taro-ui/types/countdown.d.ts`
- 官方文档：`docs/docs/components/countdown.md`

## 主要 Props

### `AtCountDownProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `isCard` | 是 | 是否显示卡片式样式 |
| `isShowDay` | 是 | 是否显示天数 |
| `isShowHour` | 是 | 是否显示小时 |
| `isShowMinute` | 是 | 是否显示分钟 |
| `format` | 是 | 格式化分割符号；未指定的字段将回退到 locale 默认值 |
| `day` | 是 | 天数 |
| `hours` | 是 | 小时 |
| `minutes` | 是 | 分钟 |
| `seconds` | 是 | 秒 |
| `onTimeUp` | 是 | 倒计时时间到，执行的回调函数 |

### `AtCountdownItemProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `num` | 否 | — |
| `separator` | 否 | — |
| `isCard` | 是 | — |


---
[← 组件索引](./README.md)
