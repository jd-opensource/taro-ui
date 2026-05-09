# Tabs 标签页

---
标签页组件，用于让用户在不同的视图中进行切换。在 H5 上，不建议使用左右滑动来切换 Tab，这个跟某些浏览器自带的切换页面事件存在冲突，
如果只是支持微信浏览器的 H5，不会产生冲突。

## 使用指南

在 Taro 文件中引入组件


```js
import { AtTabs, AtTabsPane } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/dist/style/components/tabs.scss";
```
## 一般用法

说明：

* 该用法适合等宽标签，标签数不建议超过4个，超过4个建议使用**滚动标签栏**，增加 `scroll` 参数(见下)。

* 请勿在 AtTab 组件内嵌套 `position:fixed` 布局的组件，比如：curtain,message,toast,action-sheet,modal,float-layout,drawer,picker。

* 开发者需要通过 `onClick` 事件来改变 `current` 的值切换 tab

* 由于小程序的限制，无法遍历 `this.props.children`, `AtTabsPane` 需要用户自行传入 `current` 和 `index` 参数。

* 垂直模式下，需要给 `AtTabs, AtTabsPane` 设置 `tabDirection='vertical' `,并给 `AtTabs` 设置 `height`。垂直模式下不支持手势滑动切换

* 边框下划线有些组件是使用 `::after` 伪类，在微信开发者工具审查不到，但是实际是存在的，建议用 H5 模式审查样式。

* AtTabsPane 在 2.0.1 版本以前内容不会换行，升级到最新版本或自行增加 css 属性 white-space: initial;


```js
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'

export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    return (
      <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    )
  }
}

```

## 滚动标签栏



```html
<AtTabs
  current={this.state.current}
  scroll
  tabList={[
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' },
    { title: '标签页4' },
    { title: '标签页5' },
    { title: '标签页6' }
  ]}
  onClick={this.handleClick.bind(this)}>
  <AtTabsPane current={this.state.current} index={0}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页一的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={1}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页二的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={2}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页三的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={3}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页四的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={4}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页五的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={5}>
    <View style='font-size:18px;text-align:center;height:100px;'>标签页六的内容</View>
  </AtTabsPane>
</AtTabs>
```

## 垂直模式



```html
<AtTabs
  current={this.state.current}
  scroll
  height='200px'
  tabDirection='vertical'
  tabList={[
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' },
    { title: '标签页4' },
    { title: '标签页5' },
    { title: '标签页6' },
  ]}
  onClick={this.handleClick.bind(this)}>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页一的内容</View>
  </AtTabsPane>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页二的内容</View>
  </AtTabsPane>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页三的内容</View>
  </AtTabsPane>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页四的内容</View>
  </AtTabsPane>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页五的内容</View>
  </AtTabsPane>
  <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
    <View style='font-size:18px;text-align:center;height:200px;'>标签页六的内容</View>
  </AtTabsPane>
</AtTabs>
```

## 禁止内容切换动画



```html
<AtTabs
  animated={false}
  current={this.state.current}
  tabList={[
    { title: '标签页1' },
    { title: '标签页2' },
    { title: '标签页3' }
  ]}
  onClick={this.handleClick.bind(this)}>
  <AtTabsPane current={this.state.current} index={0} >
    <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={1}>
    <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
  </AtTabsPane>
  <AtTabsPane current={this.state.current} index={2}>
    <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
  </AtTabsPane>
</AtTabs>
```

## AtTabs 参数

| 参数   | 说明   | 类型    | 可选值 | 默认值   |
| ---   | ---- | ------- | ------- | ------ |
| tabDirection | Tab 方向，请跟 AtTabPane 保持一致  | String  | 'horizontal'，'vertical' | 'horizontal' |
| height | Tab 高度，当 tabDirection='vertical'时，需要设置；当 tabDirection='horizontal'时，会自动根据内容撑开，请勿设置 | String  | - | - | - |
| current | 当前选中的标签索引值，从0计数，开发者需要通过 onClick 事件来改变 current，从而切换 tab  | Number  | - | 0 |
| scroll     | 是否滚动，当标签太多时，建议使用。否则会出现部分标签被隐藏  | Boolean | - | false |
| swipeable  | 是否支持手势滑动切换内容页，当 tabDirection='vertical'时，无论是否设置，都不支持手势滑动切换内容页  | Boolean | - | true |
| animated  | 是否开启切换动画  | Boolean | - | true |
| tabList | tab 列表 object 详细字段看下表 | Array  | - | - |

## tabList object字段详解

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   | 可选或必填
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |-------- |
| title | 标题  | String  | - | 0 | 必填 |

## AtTabs 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onClick | 点击或滑动时触发事件 | 选中标签列表索引值  |

## AtTabPane 参数

| 参数       | 说明 | 类型    | 可选值  | 默认值   |
| -------- | ---- | ------- | -------| -------- |
| tabDirection | Tab 方向，请跟 AtTabs 保持一致   | String  | 'horizontal'，'vertical' | 'horizontal' |
| current | 当前选中的标签索引值，从0计数，请跟 AtTabs 保持一致| Number  | - | 0 |
| index | tabPane 排序，从0计数 | Number  | - | 0 |
