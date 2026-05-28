# Accordion 手风琴

---

可以折叠 / 展开的内容区域。

## 使用指南

Taro-UI 版本需要在 `v1.3.1` 以上，在 Taro 文件中引入组件

```js
import { AtAccordion } from 'taro-ui'
```

**组件依赖的样式文件（仅按需引用时需要）**

```scss
@import '~taro-ui/dist/style/components/accordion.scss';
@import '~taro-ui/dist/style/components/icon.scss';
```

## 一般用法

说明：

- 该组件为受控组件，开发者通过 open 来控制组件开关状态，可通过触发 onClick 函数时修改 open 实现状态切换

```js
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtAccordion, AtList, AtListItem } from 'taro-ui'

export default class Index extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      open: false
    }
  }
  handleClick(value) {
    this.setState({
      open: value
    })
  }
  render() {
    return (
      <AtAccordion
        open={this.state.open}
        onClick={this.handleClick.bind(this)}
        title='标题一'
      >
        <AtList hasBorder={false}>
          <AtListItem
            title='标题文字'
            arrow='right'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='标题文字'
            note='描述信息'
            arrow='right'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
          <AtListItem
            title='标题文字'
            note='描述信息'
            extraText='详细信息'
            arrow='right'
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
        </AtList>
      </AtAccordion>
    )
  }
}
```

## 带图标

```html
<AtAccordion title='标题三' icon={{ value: 'chevron-down', color: 'red', size: '15' }}>
  <AtList hasBorder={false}>
    <AtListItem
      title='标题文字'
      arrow='right'
      thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
    />
    <AtListItem
      title='标题文字'
      note='描述信息'
      arrow='right'
      thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
    />
    <AtListItem
      title='标题文字'
      note='描述信息'
      extraText='详细信息'
      arrow='right'
      thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
    />
  </AtList>
</AtAccordion>
```

## 参数

| 参数        | 说明                                                                       | 类型    | 可选值 | 默认值 |
| ----------- | -------------------------------------------------------------------------- | ------- | ------ | ------ |
| open        | 是否默认开启                                                               | Boolean | -      | false  |
| title       | 标题                                                                       | String  | -      | -      |
| hasBorder   | 是否有头部下划线                                                           | Boolean | -      | true   |
| isAnimation | 是否开启动画 (v2.0.0-beta.3 支持)                                          | Boolean | -      | true   |
| icon        | 图标，仅支持 AtIcon 支持的类型，object 属性有 value color size prefixClass | object  | -      | -      |
| note        | 描述信息                                                                   | string  | -      | -      |

## 事件

| 事件名称 | 说明             | 返回参数             |
| -------- | ---------------- | -------------------- |
| onClick  | 点击头部触发事件 | (open,event) => void |
