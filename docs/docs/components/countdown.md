# Countdown 倒计时

---

倒计时组件

## 使用指南

在 Taro 文件中引入组件

```js
import { AtCountdown } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/countdown.scss';
```

## 一般用法

说明： 开发者可以设置 onTimeUp 倒计时时间到回调事件

```js
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCountdown } from 'taro-ui'

export default class CountdownPage extends Taro.Component {
  onTimeUp() {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000
    })
  }
  render() {
    return (
      <AtCountdown
        format={{ hours: ':', minutes: ':', seconds: '' }}
        seconds={10}
        onTimeUp={this.onTimeUp.bind(this)}
      />
    )
  }
}
```

## 显示天数

```html
<AtCountdown isShowDay day="{2}" hours="{1}" minutes="{1}" seconds="{10}" />
```

## 只显示秒钟

```html
<AtCountdown isShowHour="{false}" isShowMinute="{false}" seconds="{90}" />
```

## 自定义格式化

```html
<AtCountdown format={{ hours: ':', minutes: ':', seconds: '' }} day={2}
hours={1} minutes={1} seconds={10} />
```

## 卡片式

```html
<AtCountdown isCard minutes="{1}" seconds="{10}" />
```

## 参数

| 参数         | 说明               | 类型    | 可选值 | 默认值                                              |
| ------------ | ------------------ | ------- | ------ | --------------------------------------------------- |
| isCard       | 是否显示卡片式样式 | Boolean | -      | false                                               |
| isShowDay    | 是否显示天数       | Boolean | -      | false                                               |
| isShowHour   | 是否显示小时       | Boolean | -      | true                                                |
| isShowMinute | 是否显示分钟       | Boolean | -      | true                                                |
| format       | 格式化分割符号     | Object  | -      | `day: '天',hours: '时',minutes: '分',seconds: '秒'` |
| day          | 天数               | Number  | -      | 0                                                   |
| hours        | 小时               | Number  | -      | 0                                                   |
| minutes      | 分钟               | Number  | -      | 0                                                   |
| seconds      | 秒                 | Number  | -      | 0                                                   |

## 事件

| 事件名称 | 说明                         | 返回参数 |
| -------- | ---------------------------- | -------- |
| onTimeUp | 倒计时时间到，执行的回调函数 | -        |
