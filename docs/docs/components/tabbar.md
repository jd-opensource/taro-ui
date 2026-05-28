# TabBar 标签栏

---

标签栏组件，主要用于底部导航，方便用户在不同功能模块之间进行快速切换，建议标签数量控制在 3 ～ 5 个，可以通过控制标签的 text ，dot 属性进行内容更新提示。

> 建议使用小程序原生的 TabBar ，AtTabBar 只是为了满足特殊情况下的自定义而增加的组件，仅仅是 UI 组件，跟原生的 TabBar 组件是有差异的。

## 使用指南

在 Taro 文件中引入组件

```js
import { AtTabBar } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/tab-bar.scss';
@import '~taro-ui/dist/style/components/badge.scss';
```

使用带图标标签栏时还需引入以下样式文件（仅按需引用时需要）

```scss
@import '~taro-ui/dist/style./icon.scss';
```

## 一般用法

说明：

- 该组件为受控组件，开发者需要通过 onClick 事件来更新 current 值变化，current 与 onClick 函数必填

```js
import Taro from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
export default class Index extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    return (
      <AtTabBar
        tabList={[
          { title: '待办事项', text: 8 },
          { title: '拍照' },
          { title: '通讯录', dot: true }
        ]}
        onClick={this.handleClick.bind(this)}
        current={this.state.current}
      />
    )
  }
}
```

## 带图标标签栏

```html
<AtTabBar tabList={[ { title: '待办事项', iconType: 'bullet-list', text: 'new'
}, { title: '拍照', iconType: 'camera' }, { title: '文件夹', iconType: 'folder',
text: '100', max: 99 } ]} onClick={this.handleClick.bind(this)}
current={this.state.current} />
```

## 自定义图标颜色、字体颜色、背景颜色

```html
<AtTabBar backgroundColor='#ececec' color='#ea6bb8' tabList={[ { title:
'待办事项', iconType: 'bullet-list', text: 'new' }, { title: '拍照', iconType:
'camera' }, { title: '文件夹', iconType: 'folder', text: '100', max: 99 } ]}
onClick={this.handleClick.bind(this)} current={this.state.current} />
```

## 固定底部

```html
<AtTabBar fixed tabList={[ { title: '待办事项', iconType: 'bullet-list', text:
'new' }, { title: '拍照', iconType: 'camera' }, { title: '文件夹', iconType:
'folder', text: '100', max: 99 } ]} onClick={this.handleClick.bind(this)}
current={this.state.current} />
```

## 使用自定义图标

在 `AtTabBar` 使用自定义图标，需要对 `AtIcon` 进行拓展，具体请查看 [拓展图标库详细](./icon)

```html
<AtTabBar fixed tabList={[ { title: '自定义图标', iconPrefixClass:'fa',
iconType: 'clock', text: 'new' }, { title: '拍照', iconType: 'camera' }, {
title: '文件夹', iconType: 'folder', text: '100', max: 99 } ]}
onClick={this.handleClick.bind(this)} current={this.state.current} />
```

## 使用图片作为图标

```html
<AtTabBar tabList={[ { title: '领取中心', image:
'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
selectedImage:
'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
text: 'new' }, { title: '找折扣', image:
'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png'
}, { title: '领会员', image:
'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
text: '100', max: 99 } ]} onClick={this.handleClick.bind(this)}
current={this.state.current} />
```

## 参数

| 参数            | 说明                              | 类型    | 可选值 | 默认值    |
| --------------- | --------------------------------- | ------- | ------ | --------- |
| current         | 当前选中的标签索引值，从 0 计数   | Number  | -      | 0         |
| color           | 未选中标签字体与图标颜色          | String  | -      | `#333`    |
| selectedColor   | 选中标签字体与图标颜色            | String  | -      | `#6190E8` |
| fixed           | 是否固定底部                      | Boolean | -      | false     |
| backgroundColor | 背景颜色                          | String  | -      | `#fff`    |
| iconSize        | 图标大小                          | Number  | -      | 24        |
| fontSize        | 字体大小                          | Number  | -      | 14        |
| tabList         | tab 列表, object 字段说明请看下表 | Array   | -      | false     |

## tabList object 字段详解

| 参数             | 说明                                                                                                                                               | 类型      | 可选值 | 默认值 | 可选或必填 |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------ | ------ | ---------- |
| title            | 标题                                                                                                                                               | ReactNode | -      | -      | 必填       |
| iconPrefixClass  | icon className 前缀，用于第三方字体图标库，比如想使用'fa fa-clock' 的图标，则 传入`iconPrefixClass='fa' iconType='clock'`,[拓展图标库详细](./icon) | String    | -      | -      | -          |
| iconType         | 未选中时展示的 icon 类型，可扩展第三方字体图标库，[拓展图标库详细](./icon)                                                                         | String    | -      | -      | 可选       |
| selectedIconType | 选中时展示的 icon 类型，可扩展第三方字体图标库，[拓展图标库详细](./icon)                                                                           | String    | -      | -      | 可选       |
| image            | 未选中时图片 icon 的链接                                                                                                                           | String    | -      | -      | 可选       |
| selectedImage    | 选中时图片 icon 的链接                                                                                                                             | String    | -      | -      | 可选       |
| text             | 右上角显示到文本，可以为数字或文字，如果有 dot，优先显示 dot                                                                                       | String    | -      | -      | 可选       |
| max              | text 可显示的最大数字，超过则显示最大数字加'+'，如'99+'                                                                                            | Number    | -      | -      | 可选       |
| dot              | 是否显示红点，优先级比 text 高                                                                                                                     | Boolean   | -      | false  | 可选       |

## 事件

| 事件名称 | 说明                                                                             | 返回参数            |
| -------- | -------------------------------------------------------------------------------- | ------------------- |
| onClick  | 点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化，onClick 函数必填 | 选中 tab 列表索引值 |
