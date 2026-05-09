# SearchBar 搜索栏

---
可用于用户输入搜索信息

## 使用指南

Taro-UI 版本需要在 `v1.3.1` 以上，在 Taro 文件中引入组件


```js
import { AtSearchBar } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/dist/style/components/search-bar.scss";
@import "~taro-ui/dist/style/components/button.scss";
@import "~taro-ui/dist/style/components/icon.scss";
```
## 一般用法

说明：

* 由于微信开发者工具的问题，Input 的 placeholder 在 value 存在的情况下，会出现重叠，在真机上不会出现此问题，可以忽略

* 该组件为受控组件，开发者需要通过 onChange 事件来更新 value 值变化，value 与 onChange 函数必填

* 由于此组件是基于小程序的 Input 进行封装，该组件是原生组件，使用前请阅读[使用限制](https://developers.weixin.qq.com/miniprogram/dev/component/native-component.html)



```js
import Taro from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'

export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  render () {
    return (
      <AtSearchBar
        value={this.state.value}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}

```

## 自定义按钮文字和点击事件



```js
import Taro from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'

export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  render () {
    return (
      <AtSearchBar
        actionName='搜一下'
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
      />
    )
  }
}
```

## 一直显示按钮



```js
import Taro from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'

export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  render () {
    return (
      <AtSearchBar
        showActionButton
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
      />
    )
  }
}
```

## 自定义输入框类型



```js
import Taro from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'

export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  render () {
    return (
      <AtSearchBar
        inputType='number'
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
      />
    )
  }
}
```

## 参数

| 参数   |  微信小程序 |  h5 | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ----  | ---- | ---- | ------- | ------- | ------ |
| value | √ | √ | 必填，输入框当前值，开发者需要通过 onChange 事件来更新 value 值 | String  | - | - |
| placeholder | √ | √ |  占位符  | String  | - | - |
| maxLength | √ | √ | 最大长度 | Number  | -  | 140 |
| fixed | √ | √ | 是否固定顶部 | Boolean  | -  | false |
| focus | √ | √ | 是否聚焦 | Boolean  | -  | false |
| disabled | √ | √ | 是否禁止输入 | Boolean  | -  | false |
| showActionButton | √ | √ | 是否一直显示右侧按钮 | Boolean  | -  | false |
| actionName | √ | √ | 右侧按钮文案 | String  | -  | '搜索' |
| inputType | √ | √ | 输入框输入类型 | String | 'text', 'number', 'idcard', 'digit' | 'text' |
| enableNative |   |   | 是否使用原生键盘，仅支持支付宝小程序 | Boolean | true |

## 事件

| 事件名称 | 微信小程序 |  h5 | 说明          | 返回参数  |
|-------- |----  | ---- |------------- |---------- |
| onChange | √ | √ | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填 | (value:string, event:Object) => void  |
| onFocus | √ | √ | 输入框聚焦时触发，height 参数在基础库 1.9.90 起支持 | (event:Object) => void  |
| onClear | √ | √ | 点击清除按钮时触发事件，若不传，则默认传空字符串调用 onChange 函数，Taro UI 2.0.3 起支持 | () => void  |
| onBlur | √ | √ | 输入框值失去焦点时触发的事件 | () => void  |
| onConfirm | √ | x  | 点击完成按钮时触发。H5 版中目前需借用 Form 组件的onSubmit事件来替代 | () => void  |
| onActionClick | √ | √ | 右侧按钮点击触发事件 | () => void  |
