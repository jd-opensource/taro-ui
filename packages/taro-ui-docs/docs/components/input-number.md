# InputNumber 输入框

---

带加减按钮的数字输入框，用户可以控制每次点击增加的数值，支持小数，同时支持自定义输入框宽度。

## 使用指南

在 Taro 文件中引入组件



```js
import { AtInputNumber } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**



```scss
@import "~taro-ui/dist/style/components/input-number.scss";
@import "~taro-ui/dist/style/components/icon.scss";
```

## 一般用法

说明：

- 该组件为受控组件，开发者需要通过 onChange 事件来更新 value 值变化，value 与 onChange 函数必填

- 由于小程序组件化的限制，AtInputNumber 嵌套在 AtForm 或原生小程序组件 Form 中的时候，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取

- 由于此组件是基于小程序的 Input 进行封装，该组件是原生组件，使用前请阅读[使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)



```js
import Taro from '@tarojs/taro'
import { AtInputNumber }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: 1
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  render () {
    return (
      <AtInputNumber
        min={0}
        max={10}
        step={1}
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}

```

## 小数



```html
<AtInputNumber
  type='digit'
  min={0}
  max={10}
  step={0.1}
  value={this.state.value}
  onChange={this.handleChange.bind(this)}
/>
```

## 禁止状态



```html
<AtInputNumber
  disabled
  min={0}
  max={10}
  step={1}
  value={this.state.value}
  onChange={this.handleChange.bind(this)}
/>
```

## 禁止输入状态



```html
<AtInputNumber
  disabledInput
  min={0}
  max={10}
  step={1}
  value={this.state.value}
  onChange={this.handleChange.bind(this)}
/>
```

## 自定义宽度



```html
<AtInputNumber
  min={0}
  max={10}
  step={1}
  width={200}
  value={this.state.value}
  onChange={this.handleChange.bind(this)}
/>
```

## 参数

| 参数          | 微信小程序 | h5  | 说明                                                                                              | 类型             | 可选值            | 默认值 |
| ------------- | ---------- | --- | ------------------------------------------------------------------------------------------------- | ---------------- | ----------------- | ------ |
| type          | √          | √   | 输入框类型，type='digit' 时，h5 无法显示数字输入框，若需要数字输入框建议使用 number (v1.5.1 支持) | String           | `number`、`digit` | number |
| value         | √          | √   | 输入框当前值，开发者需要通过 onChange 事件来更新 value 值，必填                                   | Number or String | -                 | 1      |
| width         | √          | √   | input 宽度,不包括两侧按钮，单位根据环境转为 `rpx` 或 `rem`                                        | Number           | -                 | 120    |
| min           | √          | √   | 最小值                                                                                            | Number           | -                 | 0      |
| max           | √          | √   | 最大值                                                                                            | Number           | -                 | 100    |
| step          | √          | √   | 每次点击改变的间隔大小                                                                            | Number           | -                 | 1      |
| disabled      | √          | √   | 是否禁止输入，禁止点击按钮                                                                        | Boolean          | -                 | false  |
| disabledInput | √          | √   | 是否禁止输入，但不禁止点击按钮                                                                    | Boolean          | -                 | false  |

## 事件

| 事件名称     | 微信小程序 | h5  | 说明                                                                                         | 返回参数                                                     |
| ------------ | ---------- | --- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| onChange     | √          | √   | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填 | 输入框当前值 value                                           |
| onBlur       | √          | √   | 输入框值失去焦点时触发的事件                                                                 | event                                                        |
| onErrorInput | √          | √   | 输入框尝试输入错误数组触发的事件                                                             | `({'{ type: OVER \| LOW \| DISABLED, errorValue: number}'})` |
