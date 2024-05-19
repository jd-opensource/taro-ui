# Calendar 日历

---

该组件提供日历选择功能（包括范围选择）

> 注意目前 h5 和 小程序 实现的方案不一致 可能导致效果不同 和 部分 API 无法使用 具体效果请看 h5 上的展示

## 使用指南

在 Taro 文件中引入组件

:::demo
```js
import { AtCalendar } from "taro-ui"
```
:::

**组件依赖的样式文件（仅按需引用时需要）**

:::demo
```scss
@import "~taro-ui/dist/style/components/calendar.scss";
```
:::

## 一般用法

:::demo

```html
<AtCalendar />
```

:::

## 跳转到指定日期

:::demo

```html
<AtCalendar currentDate="2018/11/11" />
```

:::

## 指定最小日期和最大日期

:::demo

```html
<AtCalendar minDate="2018/1/1" maxDate="2018/10/1" />
```

:::

## 标记时间

:::demo

```html
<AtCalendar marks={ [ { value: '2018/11/11' } ] } />
```

:::

## 禁止滑动

:::demo

```html
<AtCalendar isSwiper="{false}" />
```

:::

## 垂直滑动

:::demo

```html
<AtCalendar isVertical />
```

:::

## 范围选择

:::demo

```html
<AtCalendar isMultiSelect currentDate={{start: '2018/10/28', end:
'2018/11/11'}}/>
```

:::

## 有效时间组

:::demo

```html
<AtCalendar validDates={ [ { value: '2020/01/01' } ] } />
```

:::

## 不可选择的日期

可以与`minDate`、`maxDate`一起使用

:::demo

```html
<AtCalendar
  minDate={minDate}
  maxDate={maxDate}
  disabledDate={(currentDate: dayjs.Dayjs) => {
    // 禁用周末
    const currentDayOfWeek = dayjs(currentDate).day();
    return [0, 6].includes(currentDayOfWeek)
  }}
/>
```

:::

## AtCalendar 参数

```ts
type DateArg = string | number | Date

interface SelectDate {
  end?: DateArg
  start: DateArg
}
```

| 参数          | 说明            | 类型                            | 默认值          |
| ------------- |---------------| ------------------------------- |--------------|
| currentDate   | 当前的时间         | `DateArg | SelectDate`  | `Date.now()` |
| minDate       | 最小的可选时间       | `DateArg`                       | -            |
| maxDate       | 最大的可选时间       | `DateArg`                       | -            |
| disabledDate    | 不可选择的日期 | `(currentDate: dayjs.Dayjs) => boolean` | -            |
| isSwiper      | 是否可以滑动        | `boolean`                       | `true`       |
| marks         | 需要标记的时间       | `Array<{'{ value: DateArg }'}>` | `[]`         |
| validDates    | 需要标记的有效时间     | `Array<{'{ value: DateArg }'}>` | `[]`         |
| format        | 日期格式          | `string`                        | `YYYY-MM-DD` |
| monthFormat   | 月份格式          | `string`                        | `YYYY年MM月`   |
| hideArrow     | 是否隐藏箭头        | `boolean`                       | `false`      |
| isVertical    | 是否垂直滑动        | `boolean`                       | `false`      |
| isMultiSelect | 是否范围选择        | `boolean`                       | `false`      |

## AtCalendar 事件

| 参数             | 说明                         | 类型                                    | 默认值 |
| ---------------- | ---------------------------- | --------------------------------------- | ------ |
| onClickPreMonth  | 点击箭头去上一个月的时候触发 | `() => void`                            | -      |
| onClickNextMonth | 点击箭头去下一个月的时候触发 | `() => void`                            | -      |
| onDayClick       | 点击日期时候触发             | `(item: {'{ value: string }'}) => void` | -      |
| onDayLongClick   | 长按日期时触发               | `(item: {'{ value: string }'}) => void` | -      |
| onMonthChange    | 月份改变时触发               | `(value: string) => void`               | -      |
| onSelectDate     | 选中日期时候触发             | `(value: SelectDate) => void`               | -      |
