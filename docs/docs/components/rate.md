# Rate 评分组件

---
评分组件，可自定义评分星星图标的大小、间隔、评分数

## 使用指南

在 Taro 文件中引入组件


```js
import { AtRate } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/dist/style/components/rate.scss";
@import "~taro-ui/dist/style/components/icon.scss";
```
## 一般用法

说明：

* 该组件为受控组件，开发者需要通过 onChange 事件来更新 value 值变化，value 与 onChange 函数必填

* 由于小程序组件化的限制，AtRate 嵌套在 AtForm 或原生小程序组件 Form 中的时候，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取
  


```js
import Taro from '@tarojs/taro'
import { AtRate }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: 2
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  render () {
    return (
      <AtRate
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}

```

## 自定义星星大小



```html
<AtRate size='15' value={this.state.value} onChange={this.handleChange} />
```

## 自定义评分数



```html
<AtRate max={10} value={this.state.value} onChange={this.handleChange} />
```

## 只读



```html
<AtRate value={3.5} />
```

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| value | 当前评分,开发者需要通过 onChange 事件来更新 value 值，必填   | Number  | - | 0 |
| max     | 最大评分  | Number | - | 5 |
| size | 评分星星大小 | Number / String | - | 20 |
| margin | 星星间隔,单位根据环境自动转为 `rpx` 或 `rem`  | Number / String | - | 5 |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读 | 当前值 value  |
