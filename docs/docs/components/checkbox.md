# Checkbox 多选框

---
多选框组件

## 使用指南

在 Taro 文件中引入组件


```js
import { AtCheckbox } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/dist/style/components/checkbox.scss";
@import "~taro-ui/dist/style/components/icon.scss";
```
## 一般用法

说明：

* 该组件为受控组件，开发者需要通过 onChange 事件来更新 selectedList 值变化，selectedList 与 onChange 函数必填

* 由于小程序组件化的限制，AtCheckbox 嵌套在 AtForm 或原生小程序组件 Form 中的时候，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取



```js
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCheckbox } from 'taro-ui'


export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      checkedList: ['list1']
    }
    this.checkboxOption = [{
        value: 'list1',
        label: 'iPhone X',
        desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
      },{
        value: 'list2',
        label: 'HUAWEI P20'
      },{
        value: 'list3',
        label: 'OPPO Find X',
        desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
        disabled: true
      },{
        value: 'list4',
        label: 'vivo NEX',
        desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
        disabled: true
    }]
  }
  handleChange (value) {
    this.setState({
      checkedList: value
    })
  }
  render () {
    return (
      <AtCheckbox
        options={this.checkboxOption}
        selectedList={this.state.checkedList}
        onChange={this.handleChange.bind(this)}
      />
    )
  }
}

```

## 参数

| 参数         | 说明                                  | 类型  | 可选值 | 默认值 |
| ------------ | ------------------------------------- | ----- | ------ | ------ |
| selectedList | 被选中的选项列表 eg: `['list1']`，开发者需要通过 onChange 事件来更新 selectedList 值，必填       | Array | -      | -      |
| options      | object选项列表，object 字段详细看下表 | Array | -      | -      |

## options object 字段详解

| 参数     | 说明     | 类型    | 可选值 | 默认值 | 可选或必填 |
| -------- | -------| ------- | ------ | ------ | ------- |
| value    | 选项标识符，必须保证唯一       | String  | -  | -  | 必填       |
| label    | 选项标题                       | String  | -      | -      | 必填       |
| desc     | 选项描述，显示在标题下方的文字 | String  | -      | -      | 可选       |
| disabled | 是否禁止点击                   | Boolean | -      | false  | 可选       |

## 事件

| 事件名称 | 说明                     | 返回参数          |
| -------- | ------------------------ | ----------------- |
| onChange | 必填，需要通过该事件来改变state的值，输入框值改变时触发的事件 | 选中的 value 列表 |
