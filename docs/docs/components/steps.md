# Steps 步骤条

---

步骤条组件，建议步骤在 2 ～ 3 之内

## 使用指南

Taro-UI 版本需要在 `v1.4.0` 以上，在 Taro 文件中引入组件

```js
import { AtSteps } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/steps.scss';
@import '~taro-ui/dist/style/components/icon.scss';
```

## 一般用法

说明:

- 该组件为受控组件，开发者需要通过 onChange 事件来更新 current 值变化，current 与 onChange 函数必填

```js
import Taro from '@tarojs/taro'
import { AtSteps } from 'taro-ui'
export default class TimelinePage extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  onChange(current) {
    this.setState({
      current
    })
  }
  render() {
    const items = [
      { title: '步骤一', desc: '这里是额外的信息，最多两行' },
      { title: '步骤二', desc: '这里是额外的信息，最多两行' },
      { title: '步骤三', desc: '这里是额外的信息，最多两行' }
    ]
    return (
      <AtSteps
        items={items}
        current={this.state.current}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}
```

## 自定义图标

```js
import Taro from '@tarojs/taro'
import { AtSteps } from 'taro-ui'
export default class TimelinePage extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  onChange(current) {
    this.setState({
      current
    })
  }
  render() {
    const items = [
      {
        title: '步骤一',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'sound',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14'
        }
      },
      {
        title: '步骤二',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'shopping-cart',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14'
        }
      },
      {
        title: '步骤三',
        desc: '这里是额外的信息，最多两行',
        icon: {
          value: 'camera',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14'
        }
      }
    ]
    return (
      <AtSteps
        items={items}
        current={this.state.current}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}
```

## 状态步骤条

```js
import Taro from '@tarojs/taro'
import { AtSteps } from 'taro-ui'
export default class TimelinePage extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  onChange(current) {
    this.setState({
      current
    })
  }
  render() {
    const items = [
      {
        title: '步骤一',
        desc: '这里是额外的信息，最多两行',
        status: 'success'
      },
      {
        title: '步骤二',
        desc: '这里是额外的信息，最多两行'
      },
      {
        title: '步骤三',
        desc: '这里是额外的信息，最多两行',
        status: 'error'
      }
    ]
    return (
      <AtSteps
        items={items}
        current={this.state.current}
        onChange={this.onChange.bind(this)}
      />
    )
  }
}
```

## AtSteps 参数

| 参数    | 微信小程序 | h5  | 说明                                                                | 类型   | 可选值 | 默认值 |
| ------- | ---------- | --- | ------------------------------------------------------------------- | ------ | ------ | ------ |
| current | √          | √   | 必填，当前步骤索引值，开发者需要通过 onChange 事件来更新 current 值 | Number | -      | 0      |
| items   | √          | √   | 步骤条数据列表, 具体字段详见下表                                    | Item[] | -      | -      |

## AtSteps 事件

| 事件名称 | 说明                                                                        | 返回参数           |
| -------- | --------------------------------------------------------------------------- | ------------------ |
| onChange | 点击触发事件，开发者需要通过 onChange 事件来更新 current，onChange 函数必填 | current,步骤索引值 |

## items object 字段说明

| 参数   | 说明                                                                                            | 类型   | 可选值             | 默认值 |
| ------ | ----------------------------------------------------------------------------------------------- | ------ | ------------------ | ------ |
| title  | 步骤标题                                                                                        | String | -                  | -      |
| desc   | 步骤说明文字                                                                                    | String | -                  | -      |
| status | 步骤的状态，只允许 'success' 或 'error'                                                         | String | 'success', 'error' | -      |
| icon   | 图标信息，value： 图标类型，activeColor： 激活态颜色，inactiveColor： 非激活态颜色，size： 大小 | Object | -                  | -      |
