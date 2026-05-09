# Radio 单选框

---
单选框组件

## 使用指南

在 Taro 文件中引入组件


```js
import { AtRadio } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/dist/style/components/radio.scss";
@import "~taro-ui/dist/style/components/icon.scss";
```
## 一般用法

说明：

* 该组件为受控组件，开发者需要通过 onClick 事件来更新 value 值变化，value 与 onClick 函数必填

* 由于小程序组件化的限制，AtRadio 嵌套在 AtForm 或原生小程序组件 Form 中的时候，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取



```js
import Taro from '@tarojs/taro'
import { AtRadio }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  render () {
    return (
      <AtRadio
        options={[
          { label: '单选项一', value: 'option1', desc: '单选项描述' },
          { label: '单选项二', value: 'option2' },
          { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
        ]}
        value={this.state.value}
        onClick={this.handleChange.bind(this)}
      />
    )
  }
}

```

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| value | 输入框当前值，用户需要通过 onClick 事件来更新 value 值，必填   | String  | - | 0 |
| options  | object 选项列表，object 字段详细看下表  | Array | - | - |

## options object 字段详解

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   | 可选或必填
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |-------- |
| value | 选项标识符，必须保证唯一  | String  | - | - | 必填 |
| label  | 选项标题  | String | - | - | 必填|
| desc  | 选项描述，显示在标题下方的文字  | String | - | - | 可选|
| disabled  | 是否禁止点击  | Boolean | - | false | 可选|

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击选项触发事件,开发者需要通过此事件来更新 value，onClick 函数必填 | 当前值 value  |
