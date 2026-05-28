# Range 范围选择器

---

范围选择器，允许用户在一个区间中选择特定值

## 使用指南

Taro-UI 版本需要在 `v1.5.0` 以上，在 Taro 文件中引入组件

```js
import { AtRange } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/range.scss';
```

## 一般用法

```jsx
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtRange, AtToast } from 'taro-ui'

export default class Index extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      isOpened: false,
      text: ''
    }
  }
  handleChange(value) {
    this.setState({
      isOpened: true,
      text: `${value[0]}~${value[1]}`
    })
  }
  render() {
    return (
      <View>
        <AtToast text={this.state.text} isOpened={this.state.isOpened} />
        <AtRange
          value={[20, 60]}
          min={0}
          max={100}
          onChange={this.handleChange.bind(this)}
        />
      </View>
    )
  }
}
```

## 参数

| 参数        | 说明                   | 类型             | 可选值 | 默认值 |
| ----------- | ---------------------- | ---------------- | ------ | ------ |
| sliderStyle | 滑块样式               | Object or String | -      | -      |
| railStyle   | 未选中部分滑动条的样式 | Object or String | -      | -      |
| trackStyle  | 选中部分滑动条的样式   | Object or String | -      | -      |
| value       | 当前取值               | Array            | -      | [0, 0] |
| min         | 最小值                 | Number           | -      | 0      |
| max         | 最大值                 | Number           | -      | 100    |
| blockSize   | 滑块大小               | Number           | -      | 28     |
| disabled    | 是否禁用               | Boolean          | -      | false  |

## 事件

| 事件名称      | 说明                                                                         | 返回参数            |
| ------------- | ---------------------------------------------------------------------------- | ------------------- |
| onChange      | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。 | (value: []) => void |
| onAfterChange | 与 onTouchEnd 触发时机一致，把当前值作为参数传入。                           | (value: []) => void |
