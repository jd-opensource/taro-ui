# Calendar 日历

> 按需阅读：仅在使用本组件时打开此文件。

## 导出

`AtCalendar`

## 引入

```tsx
import { AtCalendar } from 'taro-ui'
```

## 样式（按需）

```scss
@import 'taro-ui/dist/style/components/calendar.scss';
```

## 源码与类型

- 实现：`packages/taro-ui/src/components/calendar/`
- 类型：`packages/taro-ui/types/calendar.d.ts`
- 官方文档：`docs/docs/components/calendar.md`

## 主要 Props

### `AtCalendarSingleSelectedProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `isMultiSelect` | 是 | — |
| `currentDate` | 是 | — |

### `AtCalendarMutilSelectedProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `isMultiSelect` | 是 | — |
| `currentDate` | 是 | — |

### `AtCalendarDefaultProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `format` | 否 | — |
| `isSwiper` | 否 | — |
| `validDates` | 否 | — |
| `marks` | 否 | — |
| `currentDate` | 否 | — |
| `monthFormat` | 否 | — |
| `hideArrow` | 否 | — |
| `isVertical` | 否 | — |
| `isMultiSelect` | 否 | — |
| `selectedDates` | 否 | — |

### `AtCalendarControllerProps`

| Prop | 可选 | 说明 |
|------|------|------|
| `generateDate` | 否 | — |
| `minDate` | 是 | — |
| `maxDate` | 是 | — |
| `hideArrow` | 否 | — |
| `monthFormat` | 否 | — |
| `onPreMonth` | 否 | — |
| `onNextMonth` | 否 | — |
| `onSelectDate` | 否 | — |


---
[← 组件索引](./README.md)
