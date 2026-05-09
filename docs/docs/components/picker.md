# Picker 选择器

---

从底部弹起的滚动选择器，这里用的是微信小程序自带的 `Picker` 原生组件，`taro-ui` 引用的是 `taro` 封装的基础组件。
现支持四种选择器，通过 `mode` 来区分（默认是普通选择器），分别是：
- 普通选择器
- 多列选择器
- 时间选择器
- 日期选择器

## 使用指南

在 Taro 文件中引入组件
> 注意，这边引入的是 taro 的基础组件库，H5 版本的 Picker 字体大小有问题，会在下个版本修复



```js
import { Picker } from '@tarojs/components'
```

## 示例



```js
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'

export default class PagePicker extends Component {
  state = {
    selector: ['美国', '中国', '巴西', '日本'],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <Text>地区选择器</Text>
            <View>
              <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                <View className='picker'>
                  当前选择：{this.state.selectorChecked}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>时间选择器</Text>
            <View>
              <Picker mode='time' onChange={this.onTimeChange}>
                <View className='picker'>
                  当前选择：{this.state.timeSel}
                </View>
              </Picker>
            </View>
          </View>
          <View className='page-section'>
            <Text>日期选择器</Text>
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker'>
                  当前选择：{this.state.dateSel}
                </View>
              </Picker>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
```

## 普通选择器

普通选择器：`mode = selector`

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | range     | mode 为 selector 或 multiSelector 时，range 有效  | Array / Object Array  | - | []    |
| √    | √  | rangeKey     | 当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容    | String  | -  | - |
| √    | √  | value   | value 的值表示选择了 range 中的第几个（下标从 0 开始） | Number  | -  | 0 |
| √    | √  | onChange | value 改变时触发 change 事件，event.detail = value: value | EventHandle | -  | - |
| √    | √  | onCancel | 取消选择或点遮罩层收起 picker 时触发 | EventHandle | -  | - |
| √    | √  | disabled | 是否禁用 | Boolean | -  | false |


## 多列选择器

多列选择器：`mode = multiSelector`

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | range     | mode 为 selector 或 multiSelector 时，range 有效。二维数组，长度表示多少列，数组的每项表示每列的数据，如[['a','b'], ['c','d']]  | 二维 Array / 二维 Object Array  | - | []  |
| √    | √  | rangeKey     | 当 range 是一个 二维 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容  | String  | -  | - |
| √    | √  | value   | value 的值表示选择了 range 中的第几个（下标从 0 开始） | Array  | -  | [] |
| √    | √  | onChange | value 改变时触发 change 事件，event.detail = value: value | EventHandle | -  | - |
| √    | √  | onColumnChange | 某一列的值改变时触发 columnchange 事件，event.detail = column: column, value: value，column 的值表示改变了第几列（下标从 0 开始），value 的值表示变更值的下标 | EventHandle | -  | - |
| √    | √  | onCancel | 取消选择时触发 | EventHandle | -  | - |
| √    | √  | disabled | 是否禁用 | Boolean | -  | false |


## 时间选择器

时间选择器：`mode = time`

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | value     | 表示选中的时间，格式为'hh:mm' | String | - | -  |
| √    | √  | start     | 表示有效时间范围的开始，字符串格式为'hh:mm'  | String  | -  | - |
| √    | √  | end     | 表示有效时间范围的结束，字符串格式为'hh:mm'  | String  | -  | - |
| √    | √  | onChange | value 改变时触发 change 事件，event.detail = value: value | EventHandle | -  | - |
| √    | √  | onCancel | 取消选择或点遮罩层收起 picker 时触发 | EventHandle | -  | - |
| √    | √  | disabled | 是否禁用 | Boolean | -  | false |


## 日期选择器

日期选择器：`mode = date`

| 微信 | H5 | 参数     | 说明                         | 类型    | 可选值                 | 默认值   |
|:-----|:---|:---------|:-----------------------------|:--------|:-----------------------|:---------|
| √    | √  | value     | 表示选中的日期，格式为'YYYY-MM-DD' | String | - | new Date()  |
| √    | √  | start     | 表示有效日期范围的开始，字符串格式为'YYYY-MM-DD'  | String  | -  | 1970-01-01 |
| √    | √  | end     | 表示有效日期范围的结束，字符串格式为'YYYY-MM-DD'  | String  | -  | 2999-01-01 |
| √    | √  | fields     | 表示选择器的粒度  | String  | `year`、`month`、`day`  | day |
| √    | √  | onChange | value 改变时触发 change 事件，event.detail = value: value | EventHandle | -  | - |
| √    | √  | onCancel | 取消选择或点遮罩层收起 picker 时触发 | EventHandle | -  | - |
| √    | √  | disabled | 是否禁用 | Boolean | -  | false |
