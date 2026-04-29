# Switch 开关组件

---
开关组件，在两个互斥对象进行选择

## 使用指南

在 Taro 文件中引入组件


```js
import { AtForm, AtSwitch } from 'taro-ui'
```
**组件依赖的样式文件（仅按需引用时需要）**


```scss
@import "~taro-ui/dist/style/components/switch.scss";
```
## 一般用法

说明：

* 该组件为受控组件，开发者能通过 checked 来初始化组件开关状态，切换开关时会触发 onChange 函数



```js
import Taro from '@tarojs/taro'
import { AtForm, AtSwitch }  from 'taro-ui'
export default class Index extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: false
    }
  }

  handleChange = value => {
    this.setState({ value })
  }

  render () {
    return (
      <AtForm>
        <AtSwitch title='开启中' checked={this.state.value} onChange={this.handleChange} />
        <AtSwitch title='已禁止' disabled onChange={this.handleChange} />
        <AtSwitch border={false} title='已关闭' />
      </AtForm>
    )
  }
}

```

> AtSwitch 组件拥有两个 SCSS 变量，可以修改它们来调整标题的颜色和大小，默认的样式为 `#333` 和 `28(r)px`。

```scss
/* Switch */
$at-switch-title-color: $color-text-base !default; // #333
$at-switch-title-size: $font-size-base !default; // 14px * 2
```

## 参数

| 参数       | 说明                                   | 类型    | 可选值                                                              | 默认值   |
| ---------- | -------------------------------------- | ------- | ------------------------------------------------------------------- | -------- |
| title | 标签名 | String  | - | - |
| color | 背景颜色  | String  | - | `#6190e8` |
| checked     | 是否显示开启  | Boolean | - | false |
| disabled     | 是否禁止点击  | Boolean | - | false |
| border     | 是否显示下划线边框  | Boolean | - | true |

## 事件

| 事件名称 | 说明          | 返回参数  |
|---------- |-------------- |---------- |
| onChange | 输入框值改变时触发的事件 | 当前值 value  |
